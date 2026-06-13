<div align="center">

<img src="banners/banner_frontier.svg" alt="Quality-vs-cost frontier: a free self-critique prompt leads on cost-adjusted judged quality" width="100%"/>

# Round 5: the Skill Intelligence Index (V2)

**The full field, priced. 19 conditions, three tracks, one honest chart.**

</div>

Rounds 1 to 3 asked a narrow question and answered it cleanly. Does this skill beat baseline Claude and GPT-5.5? Yes: first in 18/18 blind passes. Round 4 added two rival skills. Round 5 asks the hard version of the question and prices the answer:

> Against every credible public critical-thinking skill for Claude, and the cheap prompt techniques anyone can type for free, with the token cost of each one counted, how good is this skill really?

We widened the field to **19 conditions** (15 installable skills, 3 prompt techniques anyone can type for free, and a no-skill baseline), generated every answer at equal length so cost is comparable, judged them all blind, and measured the token cost of each. The result is humbling in exactly the way the skill is built to be honest about. We publish it because a skill about calibration that hid its own benchmark would be a contradiction.

## The one-paragraph result

On judged reasoning quality the top is a five-way near-tie: a rival skill, K-Dense's `scientific-critical-thinking`, edges first at 8.13, a free one-line `self-critique` prompt is second at 8.10, and this skill is third at 8.03, with `plain chain-of-thought` (8.00) and `balanced` (7.98) right behind. The whole field spans 6.9 to 8.1 with judge SD of 0.4 to 0.9, so those gaps are inside the noise. Where this skill clearly leads is **objective rigor**: it is #1 of 19 on the deterministic markers (quantification, bias-naming, falsifiers), and its falsifier score of 5.0 is double the next best. It is also **the most expensive condition in the field**: its roughly 14k-token context load makes each answer cost about 20 times the free prompts that match it, so it is dominated on the quality-vs-cost frontier. The honest reading is that the skill produces the most rigorous, best-calibrated *form* of answer, while elaborate scaffolding buys little judged-quality gain over a simple self-critique pass and costs far more to load.

## The three tracks

### 1. Judged reasoning quality (18 blind passes, mean of 5 dimensions)

<div align="center"><img src="banners/banner_leaderboard.svg" alt="Judged-quality leaderboard, 19 conditions" width="92%"/></div>

| # | Condition | Quality | Note |
|---|-----------|:---:|------|
| 1 | kdense scientific-critical-thinking | **8.13** | rival skill |
| 2 | self-critique | 8.10 | free 1-line prompt |
| 3 | **ours (critical-thinking)** | **8.03** | top cluster |
| 4 | plain chain-of-thought | 8.00 | free prompt |
| 5 | balanced | 7.98 | single-file skill |
| 6 | devils-advocate | 7.93 | |
| 7 | expert-persona | 7.90 | free 1-line prompt |
| 8 | gsd critical-thinking | 7.87 | rival skill |
| 9 | baseline (no skill) | 7.82 | |
| 10 | sequential-thinking | 7.81 | |
| 11 | cyperx84 mental-models | 7.77 | 98 models |
| 12 | thinking-partner | 7.76 | 150+ models |
| 13 | cc-thinking | 7.67 | 39-framework router |
| 14 | socratic-debate | 7.63 | |
| 15 | argumentation-framework | 7.46 | rival skill |
| 16 | skills-for-humanity | 7.34 | 70+ skills |
| 17 | first-principles | 7.26 | |
| 18 | systems-thinking | 7.16 | |
| 19 | conducty-dialectic | 6.91 | rival skill (off-domain personas) |

Scored by 18 blind independent-scoring passes (6 problems by 3 judges), each rating all 19 answers 0 to 10 on rigor, calibration, bias-awareness, depth, and usefulness, with no knowledge of which condition produced which answer.

### 2. Objective rigor markers, where this skill leads

<div align="center"><img src="banners/banner_objective.svg" alt="Objective rigor scorecard, 19 conditions" width="92%"/></div>

A deterministic, length-normalized scorecard (regex and lexicon, no LLM judge): does the answer give explicit probabilities, name the cognitive biases in play, and state a falsifier? This skill is #1 at 5.12, and its falsifier presence (5.0 against 2.5 or less for everything else) is the durable, length-independent edge. It is the one condition that reliably says what would change its mind.

### 3. Cost, the context tax

<div align="center"><img src="banners/banner_cost.svg" alt="Cost to operate per answer across 19 conditions" width="92%"/></div>

Every condition wrote a roughly 370-word answer, so output cost is near-constant. The entire cost difference is the **context tax**: the tokens a skill loads before it answers.

| Condition | Load (tokens) | Operate / answer | $ / answer | Judged quality |
|-----------|:---:|:---:|:---:|:---:|
| ours | 14,274 | 14,970 | $0.193 | 8.03 |
| cc-thinking | 8,681 | 9,384 | $0.136 | 7.67 |
| thinking-partner | 8,104 | 8,808 | $0.109 | 7.76 |
| gsd critical-thinking | 6,336 | 7,038 | $0.090 | 7.87 |
| kdense scientific-CT | 4,830 | 5,540 | $0.071 | **8.13** |
| balanced | 1,361 | 2,087 | $0.041 | 7.98 |
| self-critique | 0 | 766 | $0.044 | 8.10 |
| baseline | 0 | 696 | $0.044 | 7.82 |

Full 19-row tables and a USD-vs-tokens frontier are in [INDEX_EXPANDED.html](INDEX_EXPANDED.html). Pricing: Claude Fable 5, $10/$50 per M input/output tokens. With prompt-caching the load amortizes, and ours' $0.193 drops to about $0.065/answer on repeated use.

### Value: judged quality per 1,000 tokens

<div align="center"><img src="banners/banner_value.svg" alt="Judged quality per 1000 tokens across 19 conditions" width="92%"/></div>

Dividing judged quality by tokens spent puts the free prompt arms and the featherweight skills on top and this skill near the bottom: its quality is top-cluster, but its load makes each answer expensive.

## What we changed because of this

The data is an instruction set for V2 of the skill:

1. **Trim the context tax.** A 14k-token load is the heaviest in the field and is not buying proportional judged-quality gains. Move more into progressive disclosure so the entry cost drops.
2. **Keep the falsifier discipline.** It is the skill's one durable, measured edge. Protect it.
3. **Fold in a self-critique pass.** The cheapest thing on the board is also the best, so a built-in "draft, critique, revise" loop is the highest-return change available.
4. **Stop equating more frameworks with more quality.** cc-thinking (#13) and first-principles (#17) carry large framework trees and score below a one-line prompt. Breadth is not the lever. The one rival that did edge the top, K-Dense's scientific-critical-thinking, is a focused evidence-evaluation skill, not a bigger framework pile.

## Honest limitations

- **n = 1** per cell, **reasoning round only.** The creativity round and multi-run error bars are future work.
- **The top cluster is a near-tie.** Treat gaps under about 0.4 as noise. Read "self-critique above ours" as "ours does not dominate", not as "self-critique is reliably better."
- **Single judge-model family.** A cross-model judge panel on an earlier, looser benchmark split on the winner, so same-family judge bias cannot be ruled out.
- **Cost is a tiktoken cl100k proxy** (about 10 to 15% off the true Claude tokenizer), and "realistic load" estimates how many sub-files each skill reads.
- **Competitor wiring is a judgment call.** If you maintain one of these skills and think it was represented sub-optimally, open a PR with a better arm configuration and the numbers will move.

## Reproduce

All raw answers, judge JSON, the rotation keymap, the token measurements, and the build scripts are in this folder (`data/`, `harness/`). Regenerate the scorecards with the scripts in `harness/`; rebuild the dashboard with `build_expanded_dashboard.js`.
