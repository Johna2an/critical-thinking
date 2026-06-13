# Changelog

All notable changes to the skill and the eval harness.

## [Unreleased]

### Added
- **Round 4 (vs rival skills)** and **Round 5 (Skill Intelligence Index)** under `evals/`.
  Round 5 widens the field to 15 conditions (9 public rival skills, 5 prompt/reference
  arms, and a no-skill baseline), generates equal-length answers, judges all 15 blind
  (18 passes), and prices every condition in tokens. Ships the raw data, a three-track
  dashboard (`INDEX_EXPANDED.html`), and editorial SVG banners.

### Findings (Round 5, reasoning, n=1)
- Judged quality: a free one-line `self-critique` prompt leads (8.28); this skill is
  #3 of 15 (7.84), inside a top-cluster near-tie.
- Objective rigor markers: this skill is #1 of 15, with a falsifier-presence score
  double the next best.
- Cost: this skill has the heaviest context-load in the field (about 14k tokens),
  so it is dominated on the quality-vs-cost frontier.

### Planned for V2 (driven by Round 5)
- Trim the context tax; preserve the falsifier discipline; fold a built-in
  draft/critique/revise pass into `SKILL.md`.

## [2.0.0] (2026-06)

The breadth release. Built in response to Round 2 eval results, which showed
the v1 skill underperforming baseline Claude on 2 of 6 divergent-thinking
briefs.

### Added
- 30 new book teaching files (51 total), grouped by theme:
  creativity and ideation, systems and complexity, uncertainty and risk,
  models and formal thinking, epistemology and the philosophy of science.
- 5 new reference libraries: `creativity-and-ideation.md`,
  `systems-and-complexity.md`, `uncertainty-and-risk.md`,
  `models-and-formal-thinking.md`, `epistemology-and-science.md`.
- New SKILL.md material: expanded Phase 6 (systems archetypes, Gall's laws,
  legibility and metis), expanded Phase 7 (bisociation, Six Hats, mental
  locks, the adjacent possible, analogy as engine, design loop), new
  collision-rule entries (paradigm vs. anomaly, optimize vs. preserve,
  model vs. reality in the tail), new NEVER rules (ludic fallacy, Goodhart,
  overfitting, turkey problem, ad hoc immunization).

### Measured
- Round 3 (8 problems, 4 arms, blind, 24 judge passes): v1 8.91 overall,
  v2 8.87. Statistical tie on the analytic mean. v2 took the most judge
  best-picks on the three problems where its new material supplied the
  winning move (argument analysis, systems, creative reframing); v1 stayed
  ahead on statistics, tail risk, epistemology, and model trust. Both
  versions beat baseline Opus 4.8 (7.83) and GPT-5.5 xhigh (7.32) on every
  problem. See `docs/EVALS.md` for the honest reading.

## [1.0.0] (2026-06)

Initial release. 21 books distilled into 4 reference libraries, 21 per-book
teaching files, and an operating-manual SKILL.md (8 phases, collision rules,
a NEVER list).

### Measured
- Round 1 (6 reasoning problems, 3 arms, blind, 18 judge passes):
  Claude + skill 8.99, Claude baseline 7.92, GPT-5.5 xhigh 7.30.
  The skill arm was ranked first in 18 of 18 judge passes.
- Round 2 (6 creative briefs, same protocol, creativity dimensions):
  Claude + skill 8.48 (11 wins), Claude baseline 7.93 (7 wins),
  GPT-5.5 xhigh 5.96 (0 wins). The weak flank that motivated v2.
