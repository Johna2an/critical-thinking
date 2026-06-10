#!/usr/bin/env python3
"""Copy each config's response into neutral blind/{A,B,C,D}.md using two 4x4 Latin
squares over the 8 problems, so each config sits in each slot exactly twice. Emit
rotation_map.json for de-anonymization."""
import json
import shutil
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-3-v1-vs-v2"
CONFIGS = ["v1", "v2", "opus_base", "gpt5"]
SLOTS = ["A", "B", "C", "D"]

# Two balanced 4x4 Latin squares (each config appears in each slot exactly twice).
ROTATION = {
    0: ["v1", "v2", "opus_base", "gpt5"],
    1: ["v2", "opus_base", "gpt5", "v1"],
    2: ["opus_base", "gpt5", "v1", "v2"],
    3: ["gpt5", "v1", "v2", "opus_base"],
    4: ["v1", "gpt5", "opus_base", "v2"],
    5: ["gpt5", "opus_base", "v2", "v1"],
    6: ["opus_base", "v2", "v1", "gpt5"],
    7: ["v2", "v1", "gpt5", "opus_base"],
}


def main():
    rotation_map, missing = {}, []
    for pid in range(8):
        order = ROTATION[pid]
        blind = FE / f"prompt-{pid}" / "blind"
        blind.mkdir(parents=True, exist_ok=True)
        slot_to_cfg = {}
        for slot, cfg in zip(SLOTS, order):
            src = FE / f"prompt-{pid}" / cfg / "run-1" / "response.md"
            if not src.exists() or src.stat().st_size < 50:
                missing.append(f"prompt-{pid}/{cfg} (slot {slot})")
                continue
            shutil.copyfile(src, blind / f"{slot}.md")
            slot_to_cfg[slot] = cfg
        rotation_map[str(pid)] = slot_to_cfg
    (FE / "rotation_map.json").write_text(json.dumps(rotation_map, indent=2), encoding="utf-8")
    # sanity: each config in each slot exactly twice
    counts = {c: {s: 0 for s in SLOTS} for c in CONFIGS}
    for pid in range(8):
        for slot, cfg in zip(SLOTS, ROTATION[pid]):
            counts[cfg][slot] += 1
    print("rotation_map.json written. slot balance (each should be 2):")
    for c in CONFIGS:
        print(f"  {c:11}", {s: counts[c][s] for s in SLOTS})
    if missing:
        print("MISSING:")
        for m in missing:
            print("  -", m)
    else:
        print("All 32 responses present and copied to blind slots.")


if __name__ == "__main__":
    main()
