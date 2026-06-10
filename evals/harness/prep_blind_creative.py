#!/usr/bin/env python3
"""Copy each config's response.md into neutral blind/{A,B,C}.md using a balanced
rotation (each config in each slot twice across 6 briefs), emit rotation_map.json."""
import json
import shutil
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-2-creativity"
CONFIGS = ["claude_base", "claude_skill", "gpt5"]

ROTATION = {
    0: ["claude_base", "claude_skill", "gpt5"],
    1: ["claude_skill", "gpt5", "claude_base"],
    2: ["gpt5", "claude_base", "claude_skill"],
    3: ["claude_base", "gpt5", "claude_skill"],
    4: ["claude_skill", "claude_base", "gpt5"],
    5: ["gpt5", "claude_skill", "claude_base"],
}
SLOTS = ["A", "B", "C"]


def main():
    rotation_map, missing = {}, []
    for pid in range(6):
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
    print("rotation_map.json written.")
    if missing:
        print("MISSING / too-small:")
        for m in missing:
            print("  -", m)
    else:
        print("All 18 responses present and copied to blind slots.")


if __name__ == "__main__":
    main()
