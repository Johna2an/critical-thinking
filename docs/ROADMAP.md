# Roadmap and open problems

The skill is released at the point where its development needs more hands
and more model families than one project has. Items are ordered by expected
value; every one of them has the data it needs already sitting in this repo.
Pick one, open an issue, claim it.

## 1. Independent re-judging (highest value, lowest effort)

All blinded responses and rotation maps from all three rounds are preserved
under `evals/`. Re-run the judging with GPT, Gemini, or human raters and
publish the agreement matrix. Until this happens, every number in this repo
carries a "Claude judged Claude" asterisk. The harness JSON contract makes
this a few hours of work.

## 2. Variance: re-run with n >= 3

One run per arm per problem was enough to detect Round 1's large effect and
cannot speak to Round 3's 0.04-point gap. Re-running a round at n=3 to 5
turns the headline claims into confidence intervals.

## 3. Cross-model transfer

SKILL.md is plain markdown with no Claude-specific machinery. Load it as a
system prompt into any capable model and run the same battery. If the
behavioral shifts transfer (explicit probabilities, base rates, falsifiers),
this stops being a Claude skill and becomes a portable reasoning protocol,
which is a much more interesting artifact.

## 4. v3: enforce the core moves

The clearest design hypothesis from Round 3 sits untested: a v3 whose
operating manual enforces the highest-scoring behaviors as hard rules
("every verdict states a probability", "every diagnosis names its cheap
disconfirming test") should recover v1's calibration wins while keeping
v2's breadth. The prediction is falsifiable with one Round 3 re-run.

## 5. Close the creative ceiling

The skill's scaffold wins on unfamiliar creative ground and caps the ceiling
on rehearsed ground (Round 2, two losses to baseline). Candidate fixes
nobody has tested: a directive to produce one deliberately untyped wild
entry per ideation set; a medium-escape check ("can the answer leave the
artifact's frame entirely?"); suppressing the scaffold's vocabulary in
final output. Test against Round 2's existing briefs plus fresh ones.

## 6. Adversarial problem sets

All 20 problems were authored by the project. We want problem sets authored
by people trying to make the skill fail: domains where base rates mislead,
problems where the named-trap vocabulary rewards pattern-matching over
thinking, briefs where stating a probability is the wrong move.

## 7. Reference-load telemetry

Instrument which reference files actually get read per task and publish the
distribution. If 80% of loads hit 3 files, the library should be
restructured. If book files almost never load, the 51-book long tail is
decoration and the repo should say so.

## 8. Trigger precision

The frontmatter description is the skill's router. Build an eval for
false fires (skill loads on tasks it cannot help) and missed fires (stays
cold on tasks it would have improved). Nobody has measured either rate.

## 9. New domains, by the gap rule

Round 3's lesson: books that cover a gap beat books that deepen a strength.
Candidate gaps actually missing from the current 51: negotiation and
adversarial dynamics, causal inference as a discipline (Pearl), measurement
(Hubbard), forecasting markets, ethnographic observation. A proposal should
name the eval problem its books would win that the current skill loses.

## 10. Localization

The directive layer compresses well. Translations of SKILL.md (with the
reference library left in English) would test whether the behavioral effect
survives translation, and would make the skill useful in non-English
agent stacks.
