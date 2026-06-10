#!/usr/bin/env python3
"""Read all judge JSON files, de-anonymize A/B/C back to configs via rotation_map,
and aggregate into _verdicts.json: per-config mean dimension scores, overall mean,
win counts, average rank, plus per-problem detail with judge reasonings."""
import json
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-1-reasoning"
CONFIGS = ["claude_base", "claude_skill", "gpt5"]
DIMS = ["rigor", "calibration", "bias_awareness", "depth", "usefulness"]


def safe_load(path):
    """Tolerate trailing junk that agents sometimes append after the JSON object."""
    txt = path.read_text(encoding="utf-8").strip()
    # strip code fences if present
    if txt.startswith("```"):
        txt = txt.split("```", 2)[1]
        if txt.startswith("json"):
            txt = txt[4:]
    try:
        obj, _ = json.JSONDecoder().raw_decode(txt[txt.index("{"):])
        return obj
    except Exception as e:
        print(f"  ! failed to parse {path.name}: {e}")
        return None


def main():
    rot = json.loads((FE / "rotation_map.json").read_text(encoding="utf-8"))

    per_config = {c: {d: [] for d in DIMS} for c in CONFIGS}
    for c in CONFIGS:
        per_config[c]["wins"] = 0
        per_config[c]["ranks"] = []
    per_problem = {}
    n_judge_files = 0

    for pid in range(6):
        slot_to_cfg = rot[str(pid)]
        jdir = FE / f"prompt-{pid}" / "judges"
        pp = {c: {d: [] for d in DIMS} for c in CONFIGS}
        for c in CONFIGS:
            pp[c]["bests"] = 0
            pp[c]["reasonings"] = []
        if not jdir.exists():
            per_problem[str(pid)] = pp
            continue
        for jf in sorted(jdir.glob("judge-*.json")):
            obj = safe_load(jf)
            if not obj:
                continue
            n_judge_files += 1
            scores = obj.get("scores", {})
            for slot, cfg in slot_to_cfg.items():
                s = scores.get(slot, {})
                for d in DIMS:
                    v = s.get(d)
                    if isinstance(v, (int, float)):
                        per_config[cfg][d].append(v)
                        pp[cfg][d].append(v)
            best = obj.get("best")
            if best in slot_to_cfg:
                bc = slot_to_cfg[best]
                per_config[bc]["wins"] += 1
                pp[bc]["bests"] += 1
            ranking = obj.get("ranking") or []
            for rank_i, slot in enumerate(ranking):
                if slot in slot_to_cfg:
                    per_config[slot_to_cfg[slot]]["ranks"].append(rank_i + 1)
            reason = obj.get("reasoning", "")
            if reason:
                # attribute reasoning to the judge's chosen best config
                if best in slot_to_cfg:
                    pp[slot_to_cfg[best]]["reasonings"].append(reason)
        per_problem[str(pid)] = pp

    def mean(xs):
        return round(sum(xs) / len(xs), 2) if xs else None

    summary = {}
    for c in CONFIGS:
        dim_means = {d: mean(per_config[c][d]) for d in DIMS}
        allvals = [v for d in DIMS for v in per_config[c][d]]
        summary[c] = {
            "dims": dim_means,
            "overall": mean(allvals),
            "wins": per_config[c]["wins"],
            "avg_rank": mean(per_config[c]["ranks"]),
            "n_scores": len(per_config[c][DIMS[0]]),
        }

    # collapse per-problem lists to means
    pp_out = {}
    for pid, pp in per_problem.items():
        pp_out[pid] = {}
        for c in CONFIGS:
            dm = {d: mean(pp[c][d]) for d in DIMS}
            allv = [v for d in DIMS for v in pp[c][d]]
            pp_out[pid][c] = {
                "dims": dm,
                "overall": mean(allv),
                "bests": pp[c]["bests"],
                "reasonings": pp[c]["reasonings"],
            }

    out = {
        "configs": CONFIGS,
        "dims": DIMS,
        "summary": summary,
        "per_problem": pp_out,
        "n_judge_files": n_judge_files,
    }
    (FE / "_verdicts.json").write_text(json.dumps(out, indent=2), encoding="utf-8")

    print(f"Parsed {n_judge_files} judge files.\n")
    print(f"{'config':14} {'overall':>8} {'wins':>5} {'avgrank':>8}  " + "  ".join(f"{d[:5]:>5}" for d in DIMS))
    for c in CONFIGS:
        s = summary[c]
        dims = "  ".join(f"{(s['dims'][d] if s['dims'][d] is not None else 0):5.1f}" for d in DIMS)
        print(f"{c:14} {str(s['overall']):>8} {s['wins']:>5} {str(s['avg_rank']):>8}  {dims}")


if __name__ == "__main__":
    main()
