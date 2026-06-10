# Contributing

This skill improved every time it was measured, and it regressed the one time
we scaled it without measuring first. The contribution rule follows from that
history: **claims about the skill ride on evals.**

## The contribution loop

1. **Pick a change.** A new directive, a reworded phase, a new book, a trimmed
   section, a new eval problem, a better judge protocol.
2. **State the hypothesis.** One sentence: what behavior should change, on
   which kind of problem, and why.
3. **Run the harness before and after.** See `evals/README.md`. For skill
   edits, run at least the round whose domain your change targets. New eval
   problems are equally welcome as PRs on their own.
4. **Ship the diff with the data.** PRs that change `skill/` should include
   the before/after verdict summaries (or a clear statement that the change is
   non-behavioral: typo, formatting, broken link).

## What we most want help with

These are the known weaknesses, in priority order. Each one came out of the
eval history (see `docs/HYPOTHESES.md`).

| # | Gap | What a contribution looks like |
|---|-----|-------------------------------|
| 1 | **Judge family bias.** Claude judged Claude in all three rounds. | Re-judge the existing blind transcripts with GPT, Gemini, or human raters. The blinded responses and rotation maps are all in `evals/`. |
| 2 | **n=1 per arm per problem.** Single runs cannot separate skill effect from sampling noise. | Re-run any round with 3 to 5 runs per arm and report variance. |
| 3 | **Length confound.** Skill responses tend to run longer; judges may reward length. | Length-controlled re-judging, or a judge instruction that penalizes padding. |
| 4 | **Cross-model transfer.** The skill text is model-agnostic in principle. | Load SKILL.md as a system prompt for GPT or Gemini and run the same battery. |
| 5 | **Creative-mode collapse.** v1 lost 2 of 6 divergent briefs to baseline; v2 narrowed but did not close the gap. | Directives that loosen structure during generation. Test against Round 2. |
| 6 | **Reference utilization.** We never instrumented which reference files actually get loaded per task. | Telemetry, or eval problems designed to require a specific reference. |
| 7 | **Triggering precision.** The skill description is long; when does it fire on tasks it should not? | False-positive/false-negative trigger evals. |

## Adding a book

1. Write a distilled teaching file in `skill/references/books/`, following the
   format of the existing 51: the book's core models as directives an agent
   can execute, with the named frameworks preserved.
2. Add one line to `skill/references/books/_index.md`.
3. If the book belongs to an existing reference library, weave its strongest
   tools into that library file. If it opens a new domain, propose a new
   library in the PR description first.
4. **Do not include book text.** Teaching files are original prose summaries
   of ideas and methods. Quotations beyond a short attributed phrase will be
   rejected. Raw source text never enters this repo (see `.gitignore`).
5. Know the bar: Round 3 showed that adding books where the skill is already
   strong adds nothing measurable. Books that cover a gap beat books that
   deepen a strength.

## Editing SKILL.md

SKILL.md is the only file guaranteed to be in context when the skill fires,
so it carries the highest weight per token. House rules:

- Imperative voice. Write every bullet as a directive an agent can execute;
  cut descriptions of concepts.
- Each directive earns its place. Cut anything a strong model already does
  unprompted (Round 1 judge notes show what baseline Claude already does
  well: structure, hedging, basic confound-listing).
- Deep material goes in `references/`, loaded on demand. SKILL.md is the
  operating manual.
- A tension between two valid directives goes in "When the directives
  collide" with a scoping rule, never resolved by deleting one side.

## Eval harness conventions

- Scripts live in `evals/harness/` and resolve paths relative to themselves;
  no machine-specific paths.
- Responder arms must see identical prompts (the `COMMON` preamble in the
  setup scripts).
- Judges are blind: balanced slot rotation via `prep_blind*.py`, de-anonymized
  only at aggregation. Never show a judge which arm produced a response.
- Judge output is JSON: per-slot dimension scores (0 to 10), a full ranking,
  a single `best` pick, and free-text reasoning.
- New rounds get their own folder: `evals/round-N-shortname/`.

## Style for prose in this repo

Write plainly. State things directly. Avoid rhetorical scaffolding
("it's not X, it's Y", "what really matters is", "in short"). If a sentence
can collapse into a direct assertion, ship the assertion.
