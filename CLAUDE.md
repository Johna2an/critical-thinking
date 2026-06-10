# CLAUDE.md

critical-thinking is an open-source Agent Skill for Claude Code and Claude-based agents that makes Claude reason with explicit probabilities, base rates, and falsifiers: in blind evaluations it ranked first in 18 of 18 judge passes against baseline Claude and GPT-5.5.

Read `AGENTS.md` for the repo map, install command, eval pipeline, and working conventions. The points below are the ones violated most easily:

1. The installable skill is `skill/` only. `versions/v1/` is a frozen snapshot for reproducible A/B evals; never edit it.
2. Claims about the skill ride on evals. Behavioral changes to `skill/` need a before/after run of the relevant round in `evals/` (see `CONTRIBUTING.md` for the loop and `evals/README.md` for the protocol).
3. Never commit book text or paste long excerpts anywhere in the repo. Reference files are original prose restating each book's methods; short attributed phrases are the ceiling.
4. Docs prose is plain and declarative: no em dashes, no "not X, but Y" constructions, every number names its measure. Verbatim judge quotes are exempt.
5. `_verdicts.json` is derived data. Recompute from `judges/*.json` + `rotation_map.json` via the deterministic aggregators in `evals/harness/` rather than editing it.
