#!/usr/bin/env python3
"""Scaffold the 3-way critical-thinking eval: Claude(base) vs Claude(+skill) vs GPT-5.5
on 6 creative reasoning problems. Writes the shared responder prompt to each gpt5 dir
(read by the codex runner) and problems.json (read by the Claude workflow + judge)."""
import json
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-1-reasoning"
CONFIGS = ["claude_base", "claude_skill", "gpt5"]

COMMON = (
    "Reason through the following problem and give your best answer. Think it through "
    "carefully: state your assumptions, quantify where you can, weigh the evidence, flag "
    "what is uncertain, and end with a concise verdict or recommendation. Aim for a "
    "thorough but focused response of roughly 400 to 700 words.\n\nPROBLEM:\n"
)

PROBLEMS = [
    {"id": 0, "name": "trust-the-study", "skill_ref": "biases-and-judgment.md, argument-and-evidence.md",
     "prompt": "A new observational study (n=8,000) reports that people who drink two cups of coffee a day have a 20% lower rate of depression than non-coffee-drinkers (p<0.01). A wellness brand is citing it to sell a coffee-extract supplement. Should you believe that coffee reduces depression? Reason it through and give a verdict."},
    {"id": 1, "name": "forecast-fermi", "skill_ref": "forecasting-and-decisions.md",
     "prompt": "Estimate two things, showing your reasoning and giving a calibrated number with a confidence range for each. (a) How many piano tuners work in Chicago today? (b) What is the probability that a randomly chosen current Fortune 500 CEO holds an undergraduate degree in engineering or a hard science rather than business or economics?"},
    {"id": 2, "name": "find-the-flaw", "skill_ref": "argument-and-evidence.md",
     "prompt": "Critique this argument and find every flaw: 'Remote work is clearly destroying our productivity. Ever since the company went fully remote in 2020, our revenue per employee has fallen 12%. Competitors who stayed in-office grew. Therefore we must mandate a full five-day return to office to restore productivity.'"},
    {"id": 3, "name": "diagnose-the-system", "skill_ref": "systems-science-and-creativity.md",
     "prompt": "A hospital emergency department keeps running over capacity despite hiring more nurses every year. Each new hire relieves the pressure for a few months, then wait times climb back to where they were. Leadership blames 'lazy staff' and 'a bad flu season.' Diagnose what is really going on, and propose the highest-leverage fix."},
    {"id": 4, "name": "decide-under-uncertainty", "skill_ref": "forecasting-and-decisions.md",
     "prompt": "You run a 6-person startup with 9 months of cash runway. A large enterprise offers a $400k contract that would consume your entire team for 5 months building a custom feature that only that customer wants. Taking it extends your runway but freezes work on your core product and roadmap. Reason through whether to take the contract."},
    {"id": 5, "name": "reframe-downtown", "skill_ref": "systems-science-and-creativity.md",
     "prompt": "A mid-sized city's downtown is dying: shops are closing, foot traffic has collapsed, and the obvious fixes (more parking, lower rents, a summer festival) have all been tried and failed. Generate genuinely non-obvious reframings of the problem and propose three unconventional options worth testing, with the reasoning behind each."},
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
    print(f"Scaffolded {len(PROBLEMS)} problems x {len(CONFIGS)} configs under {FE}")


if __name__ == "__main__":
    main()
