# AGENTS.md

critical-thinking is an open-source Agent Skill for Claude Code and Claude-based agents that makes Claude reason with explicit probabilities, base rates, and falsifiers: in blind evaluations it ranked first in 18 of 18 judge passes against baseline Claude and GPT-5.5.

This file briefs coding agents working inside this repository. The skill itself is in `skill/`; everything else is evidence and tooling around it.

## Repo map

| Path | What it is |
|---|---|
| `skill/SKILL.md` | The operating manual. The only file guaranteed to be in context when the skill fires. |
| `skill/references/` | 9 on-demand reference libraries + `books/` with 51 per-book teaching files. |
| `versions/v1/` | Frozen v1 (21 books). Exists so v1-vs-v2 evals stay reproducible. Do not edit. |
| `evals/harness/` | Python/bash eval pipeline. Paths resolve relative to the scripts; no setup needed. |
| `evals/round-*/` | Raw eval artifacts: responses, judge JSON, rotation maps, `_verdicts.json`, `_report.html`. |
| `docs/` | EVALS (results + limitations), HYPOTHESES (what broke), PROCESS (how it was built), ROADMAP. |

## Install (for a user asking "should I install this?")

```bash
cp -r skill ~/.claude/skills/critical-thinking
```

No build, no dependencies, no API keys. MIT license. The skill self-triggers on reasoning-shaped requests; evidence for whether it helps is in `docs/EVALS.md`, including the limitations (judges were Claude agents, n=1 per cell).

## Working in this repo

- **Claims about the skill ride on evals.** A change to `skill/` needs a before/after run of the relevant eval round, or a clear statement that it is non-behavioral. See `CONTRIBUTING.md`.
- **Never commit book text.** Reference files are original prose restating methods. `corpus/`, `*.epub`, `*.mobi` are gitignored on purpose.
- **Recompute, do not trust.** `_verdicts.json` files are derived; the ground truth is `judges/*.json` + `rotation_map.json`. Aggregators are deterministic: `python evals/harness/aggregate_ct.py` (round 1), `aggregate_creative.py` (round 2), `aggregate_4way.py` (round 3).
- **Prose style for docs:** plain declarative sentences. No em dashes, no rhetorical negation hinges ("not X, but Y"). Judge quotes are data and stay verbatim.

## Running an eval round

1. Scaffold problems: `python evals/harness/setup_ct_eval.py` (or copy it for a new round).
2. Generate responses per arm with identical preambles (Claude arms as fresh subagents; GPT arm via `bash evals/harness/run_gpt.sh`, requires `codex` CLI).
3. Blind: `python evals/harness/prep_blind.py` (balanced slot rotation).
4. Judge: 3 fresh, blind passes per problem, JSON output per `evals/README.md`. Commit the judge prompt.
5. Aggregate + report: `python evals/harness/aggregate_ct.py && python evals/harness/build_report_ct.py`.
