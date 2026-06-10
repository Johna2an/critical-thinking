#!/usr/bin/env python3
"""Scaffold the 3-way CREATIVE-DIVERGENCE eval: Claude(base) vs Claude(+skill) vs
GPT-5.5 on 6 open-ended 'propose 5 genuinely different versions of X' briefs. The
test is creative range and escaping the obvious frame, not analysis."""
import json
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-2-creativity"
CONFIGS = ["claude_base", "claude_skill", "gpt5"]

COMMON = (
    "Propose FIVE genuinely different versions for the brief below. This is a test of "
    "creative range and outside-the-box thinking, not analysis or evaluation.\n"
    "Rules:\n"
    "- Make the five as different from EACH OTHER as possible. Each one should break a "
    "different assumption or move in a different conceptual direction. Five flavors of the "
    "same idea counts as a failure.\n"
    "- Skip the obvious, safe answers that most people would list first. Push past them to "
    "ideas that are genuinely surprising.\n"
    "- For each version: give it a short evocative NAME, then 2 to 4 sentences that make it "
    "vivid and show exactly what makes it distinct from the others.\n"
    "- After the five, add one line naming which version is the strangest or riskiest, and "
    "why it might still work.\n\nBRIEF:\n"
)

PROBLEMS = [
    {"id": 0, "name": "reinvent-the-chair",
     "prompt": "Reinvent the chair in five genuinely different ways. Each version should challenge a different assumption about what a chair is or what sitting is for. Do not give five styles of the same chair."},
    {"id": 1, "name": "zero-gravity-sport",
     "prompt": "Invent five sports that could only exist in zero gravity, each built around a different core mechanic that gravity normally provides on Earth (falling, balance, weight, ground, the arc of a thrown object). Make each genuinely playable, not an existing sport that happens to float."},
    {"id": 2, "name": "company-that-sells-silence",
     "prompt": "Propose five fundamentally different business models for a company whose only product is silence. Each model should monetize silence through a different mechanism and serve a different human need."},
    {"id": 3, "name": "represent-a-day",
     "prompt": "Design five completely different ways to represent the passage of a single day, without using a clock, digits, or a calendar. Each should rely on a different sense or medium (smell, temperature, texture, sound, taste, motion, and so on)."},
    {"id": 4, "name": "museum-of-failure",
     "prompt": "Imagine five radically different concepts for a museum devoted to failure. Each concept should embody a different theory of what a visitor should feel or learn, with its own spatial layout and curatorial logic."},
    {"id": 5, "name": "reinvent-the-report-card",
     "prompt": "Reimagine the school report card in five genuinely different forms, each based on a different philosophy of what is worth measuring and who the audience really is. Escape the grid-of-grades frame entirely."},
]


def main():
    for p in PROBLEMS:
        pd = FE / f"prompt-{p['id']}"
        pd.mkdir(parents=True, exist_ok=True)
        (pd / "prompt.json").write_text(json.dumps(p, indent=2), encoding="utf-8")
        for cfg in CONFIGS:
            (pd / cfg / "run-1").mkdir(parents=True, exist_ok=True)
        (pd / "gpt5" / "run-1" / "prompt.txt").write_text(COMMON + p["prompt"], encoding="utf-8")
    (FE / "problems.json").write_text(json.dumps(PROBLEMS, indent=2), encoding="utf-8")
    print(f"Scaffolded {len(PROBLEMS)} creative briefs x {len(CONFIGS)} configs under {FE}")


if __name__ == "__main__":
    main()
