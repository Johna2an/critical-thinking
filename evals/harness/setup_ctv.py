#!/usr/bin/env python3
"""Scaffold the 4-way eval: Opus 4.8 base vs Opus+V1-skill vs Opus+V2-skill vs GPT-5.5.
8 problems spanning the full V2 surface (3 classic reasoning + systems, tail-risk,
creativity, epistemology, models). Writes problems.json + per-problem gpt5 prompt.txt."""
import json
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-3-v1-vs-v2"
CONFIGS = ["v1", "v2", "opus_base", "gpt5"]

COMMON = (
    "Reason through the following problem and give your best answer. Think it through "
    "carefully: state your assumptions, quantify where you can, weigh the evidence, flag "
    "what is uncertain, and end with a concise verdict or recommendation. Aim for a "
    "thorough but focused response of roughly 400 to 700 words.\n\nPROBLEM:\n"
)

PROBLEMS = [
    {"id": 0, "name": "trust-the-study", "tests": "stats skepticism",
     "prompt": "A new observational study (n=8,000) reports that people who drink two cups of coffee a day have a 20% lower rate of depression than non-coffee-drinkers (p<0.01). A wellness brand is citing it to sell a coffee-extract supplement. Should you believe that coffee reduces depression? Reason it through and give a verdict."},
    {"id": 1, "name": "forecast-fermi", "tests": "calibration",
     "prompt": "Estimate two things, showing your reasoning and giving a calibrated number with a confidence range for each. (a) How many piano tuners work in Chicago today? (b) What is the probability that a randomly chosen current Fortune 500 CEO holds an undergraduate degree in engineering or a hard science rather than business or economics?"},
    {"id": 2, "name": "find-the-flaw", "tests": "argument analysis",
     "prompt": "Critique this argument and find every flaw: 'Remote work is clearly destroying our productivity. Ever since the company went fully remote in 2020, our revenue per employee has fallen 12%. Competitors who stayed in-office grew. Therefore we must mandate a full five-day return to office to restore productivity.'"},
    {"id": 3, "name": "diagnose-the-system", "tests": "systems and complexity",
     "prompt": "A city keeps widening its main highway to fix congestion. Each expansion eases traffic for a year or two, then congestion returns worse than before, and leadership blames population growth. Diagnose what is really going on, and propose the highest-leverage intervention."},
    {"id": 4, "name": "tail-risk-decision", "tests": "uncertainty and risk",
     "prompt": "A trading desk has made money in 19 of the last 20 quarters using a strategy that sells deep out-of-the-money options for steady premium income. Leadership wants to triple the allocation given the track record. As the risk officer, reason through whether to approve it and what you would require first."},
    {"id": 5, "name": "reframe-the-library", "tests": "creativity and ideation",
     "prompt": "A public library's foot traffic has collapsed and budget cuts loom. The obvious moves (more computers, a cafe, longer hours) have been tried elsewhere with little effect. Generate genuinely non-obvious reframings of what a library is for, and propose four unconventional directions worth testing, with the reasoning behind each."},
    {"id": 6, "name": "who-is-right", "tests": "epistemology",
     "prompt": "Two camps of economists examine the same decade of data and reach opposite conclusions about whether a policy worked, each accusing the other of bias. A journalist asks you: who is right, and how would anyone ever actually know? Reason through what is really going on and what evidence would settle it."},
    {"id": 7, "name": "trust-the-model", "tests": "models and strategy",
     "prompt": "A startup must set its price against a larger incumbent. The team built a regression on 18 months of its own sales data that predicts revenue will jump if they cut price 15%. One advisor says trust the model; another says the incumbent will simply match the cut. Reason through how much to trust the model and what the startup should actually do."},
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
