#!/usr/bin/env python3
"""Aggregate the 4-way eval. De-anonymize A/B/C/D via per-problem rotation, compute
per-config mean dims, overall, wins, avg rank, and per-problem detail."""
import json
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-3-v1-vs-v2"
CONFIGS = ["v1", "v2", "opus_base", "gpt5"]
DIMS = ["rigor", "calibration", "bias_awareness", "depth", "usefulness"]


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


def mean(xs):
    return round(sum(xs) / len(xs), 2) if xs else None


def main():
    rot = json.loads((FE / "rotation_map.json").read_text(encoding="utf-8"))
    per = {c: {d: [] for d in DIMS} for c in CONFIGS}
    for c in CONFIGS:
        per[c].update(wins=0, ranks=[])
    per_problem = {}
    n = 0
    for pid in range(8):
        slot_to_cfg = rot[str(pid)]
        jdir = FE / f"prompt-{pid}" / "judges"
        pp = {c: {d: [] for d in DIMS} for c in CONFIGS}
        for c in CONFIGS:
            pp[c].update(bests=0, reasonings=[])
        if jdir.exists():
            for jf in sorted(jdir.glob("judge-*.json")):
                obj = safe_load(jf)
                if not obj:
                    continue
                n += 1
                scores = obj.get("scores", {})
                for slot, cfg in slot_to_cfg.items():
                    s = scores.get(slot, {})
                    for d in DIMS:
                        v = s.get(d)
                        if isinstance(v, (int, float)):
                            per[cfg][d].append(v)
                            pp[cfg][d].append(v)
                best = obj.get("best")
                if best in slot_to_cfg:
                    per[slot_to_cfg[best]]["wins"] += 1
                    pp[slot_to_cfg[best]]["bests"] += 1
                    r = obj.get("reasoning", "")
                    if r:
                        pp[slot_to_cfg[best]]["reasonings"].append(r)
                for ri, slot in enumerate(obj.get("ranking") or []):
                    if slot in slot_to_cfg:
                        per[slot_to_cfg[slot]]["ranks"].append(ri + 1)
        per_problem[str(pid)] = pp

    summary = {}
    for c in CONFIGS:
        allv = [v for d in DIMS for v in per[c][d]]
        summary[c] = {
            "dims": {d: mean(per[c][d]) for d in DIMS},
            "overall": mean(allv),
            "wins": per[c]["wins"],
            "avg_rank": mean(per[c]["ranks"]),
            "n_scores": len(per[c][DIMS[0]]),
        }
    pp_out = {}
    for pid, pp in per_problem.items():
        pp_out[pid] = {}
        for c in CONFIGS:
            allv = [v for d in DIMS for v in pp[c][d]]
            pp_out[pid][c] = {"dims": {d: mean(pp[c][d]) for d in DIMS},
                              "overall": mean(allv), "bests": pp[c]["bests"],
                              "reasonings": pp[c]["reasonings"]}

    out = {"configs": CONFIGS, "dims": DIMS, "summary": summary,
           "per_problem": pp_out, "n_judge_files": n}
    (FE / "_verdicts.json").write_text(json.dumps(out, indent=2), encoding="utf-8")

    print(f"Parsed {n} judge files.\n")
    print(f"{'config':12} {'overall':>8} {'wins':>5} {'avgrank':>8}  " + "  ".join(f"{d[:5]:>5}" for d in DIMS))
    for c in sorted(CONFIGS, key=lambda c: -(summary[c]['overall'] or 0)):
        s = summary[c]
        dims = "  ".join(f"{(s['dims'][d] if s['dims'][d] is not None else 0):5.1f}" for d in DIMS)
        print(f"{c:12} {str(s['overall']):>8} {s['wins']:>5} {str(s['avg_rank']):>8}  {dims}")


if __name__ == "__main__":
    main()
