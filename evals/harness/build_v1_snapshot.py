#!/usr/bin/env python3
"""Reconstruct the V1 critical-thinking skill into a snapshot dir for the V1-vs-V2 eval.
V1 = the original SKILL.md (written separately) + the 4 original reference libraries +
the 21 original book teaching files. The 5 new references and 30 new books are excluded."""
import shutil
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent.parent
LIVE = REPO / "skill"
SNAP = REPO / "versions" / "v1"

V1_REFS = ["biases-and-judgment", "argument-and-evidence", "forecasting-and-decisions",
           "systems-science-and-creativity"]
V1_BOOKS = [
    "thinking-fast-and-slow", "scout-mindset", "judgment-managerial-decision-making",
    "rational-choice-uncertain-world", "thinking-in-bets", "factfulness",
    "asking-the-right-questions", "rulebook-for-arguments", "thinking-from-a-to-z",
    "how-to-read-a-book", "intuition-pumps", "how-to-lie-with-statistics",
    "calling-bullshit", "superforecasting", "signal-and-the-noise", "demon-haunted-world",
    "nonsense-on-stilts", "beginning-of-infinity", "thinking-in-systems", "lateral-thinking",
    "art-of-doing-science-and-engineering",
]


def main():
    (SNAP / "references" / "books").mkdir(parents=True, exist_ok=True)
    for r in V1_REFS:
        shutil.copyfile(LIVE / "references" / f"{r}.md", SNAP / "references" / f"{r}.md")
    miss = []
    for b in V1_BOOKS:
        src = LIVE / "references" / "books" / f"{b}.md"
        if src.exists():
            shutil.copyfile(src, SNAP / "references" / "books" / f"{b}.md")
        else:
            miss.append(b)
    print(f"Copied {len(V1_REFS)} refs and {len(V1_BOOKS)-len(miss)} books into {SNAP}")
    if miss:
        print("MISSING books:", miss)
    print("Now write SKILL.md and references/books/_index.md into the snapshot.")


if __name__ == "__main__":
    main()
