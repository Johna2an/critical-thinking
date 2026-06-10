#!/usr/bin/env python3
"""De-anonymize creative-eval judge files via rotation_map and aggregate into
_verdicts.json. Creativity dimensions: originality, diversity, boldness, craft,
generativity."""
import json
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-2-creativity"
CONFIGS = ["claude_base", "claude_skill", "gpt5"]
DIMS = ["originality", "diversity", "boldness", "craft", "generativity"]


def safe_load(path):
    txt = path.read_text(encoding="utf-8").strip()
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
        if jdir.exists():
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
                    per_config[slot_to_cfg[best]]["wins"] += 1
                    pp[slot_to_cfg[best]]["bests"] += 1
                for rank_i, slot in enumerate(obj.get("ranking") or []):
                    if slot in slot_to_cfg:
                        per_config[slot_to_cfg[slot]]["ranks"].append(rank_i + 1)
                reason = obj.get("reasoning", "")
                if reason and best in slot_to_cfg:
                    pp[slot_to_cfg[best]]["reasonings"].append(reason)
        per_problem[str(pid)] = pp

    def mean(xs):
        return round(sum(xs) / len(xs), 2) if xs else None

    summary = {}
    for c in CONFIGS:
        allvals = [v for d in DIMS for v in per_config[c][d]]
        summary[c] = {
            "dims": {d: mean(per_config[c][d]) for d in DIMS},
            "overall": mean(allvals),
            "wins": per_config[c]["wins"],
            "avg_rank": mean(per_config[c]["ranks"]),
            "n_scores": len(per_config[c][DIMS[0]]),
        }

    pp_out = {}
    for pid, pp in per_problem.items():
        pp_out[pid] = {}
        for c in CONFIGS:
            allv = [v for d in DIMS for v in pp[c][d]]
            pp_out[pid][c] = {
                "dims": {d: mean(pp[c][d]) for d in DIMS},
                "overall": mean(allv),
                "bests": pp[c]["bests"],
                "reasonings": pp[c]["reasonings"],
            }

    out = {"configs": CONFIGS, "dims": DIMS, "summary": summary,
           "per_problem": pp_out, "n_judge_files": n_judge_files}
    (FE / "_verdicts.json").write_text(json.dumps(out, indent=2), encoding="utf-8")

    print(f"Parsed {n_judge_files} judge files.\n")
    print(f"{'config':14} {'overall':>8} {'wins':>5} {'avgrank':>8}  " + "  ".join(f"{d[:5]:>5}" for d in DIMS))
    for c in CONFIGS:
        s = summary[c]
        dims = "  ".join(f"{(s['dims'][d] if s['dims'][d] is not None else 0):5.1f}" for d in DIMS)
        print(f"{c:14} {str(s['overall']):>8} {s['wins']:>5} {str(s['avg_rank']):>8}  {dims}")


if __name__ == "__main__":
    main()
