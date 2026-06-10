# Eval results, in full

Three rounds of blind, LLM-judged evaluation. Every transcript, judge file,
rotation map, and aggregate score in this repo is the unedited output of those
runs; the folders under [`evals/`](../evals/) hold the raw material, and each
round's self-contained HTML report (`_report.html`) renders the side-by-side
responses with scores.

This page gives the numbers first, then the honest reading, then the
limitations that the community is best placed to fix.

## Protocol (identical across rounds)

1. **Problems.** Each round defines 6 to 8 problems in `problems.json`. Each
   problem targets a named domain of the skill (statistics, calibration,
   argument analysis, systems, risk, creativity, epistemology, models).
2. **Arms.** Every arm answers every problem with the same preamble, which
   sets a soft budget of roughly 400 to 700 words (committed in the
   `prompt.txt` files; all arms routinely overshot it, with round 3
   responses averaging ~915 words). Claude arms run inside Claude Code (skill loaded
   or no skill); the GPT arm runs via `codex exec` at `xhigh` reasoning
   effort, fully outside the Claude harness.
3. **Blinding.** `prep_blind*.py` copies responses into neutral slots (A/B/C
   or A/B/C/D) using a balanced rotation: each arm occupies each slot an
   equal number of times across the round, which cancels position bias.
4. **Judging.** Three independent judge passes per problem. Each judge sees
   only the problem and the anonymous slots, scores every slot 0 to 10 on
   five dimensions, produces a full ranking, picks a single best, and writes
   free-text reasoning. Output is machine-parseable JSON.
5. **Aggregation.** `aggregate*.py` de-anonymizes via the rotation map and
   computes per-arm means, win counts, and average ranks. `build_report*.py`
   renders the HTML report.

## Round 1: does the skill change reasoning at all?

Six reasoning problems. Dimensions: rigor, calibration, bias awareness,
depth, usefulness. 18 judge passes.

| Arm | Overall | Wins | Avg rank | Rigor | Calibration | Bias aware | Depth | Useful |
|---|---|---|---|---|---|---|---|---|
| **Claude 4.8 + skill v1** | **8.99** | **18/18** | **1.00** | 8.94 | 9.17 | 9.06 | 9.06 | 8.72 |
| Claude 4.8 (no skill) | 7.92 | 0/18 | 2.28 | 8.22 | 7.44 | 7.72 | 7.72 | 8.50 |
| GPT-5.5 (xhigh) | 7.30 | 0/18 | 2.72 | 7.56 | 6.94 | 6.61 | 7.44 | 7.94 |

The skill arm took first place in all 18 judge passes. The largest gap over
baseline was calibration (+1.73), with bias awareness and depth tied at
+1.34; the smallest was usefulness (+0.22), where baseline Claude was
already strong.

**What judges rewarded, problem by problem.** The same differentiators
appear in every reasoning trace:

- Explicit numbers where the others hedged in words: a 20-25% causal
  posterior on the coffee study, 5-10% confidence that the RTO argument
  holds, an 85%/65% split confidence on the ER diagnosis, a 65% verdict on
  the startup contract.
- Outside-view base rates with named reference classes. One judge:
  the skill response "uniquely supplies an outside-view base rate (the
  vitamin E / beta-carotene / HRT reversal graveyard) with explicit
  probabilities... plus a Mendelian-randomization falsifier."
- Falsifiers and discriminating tests attached to conclusions: Mendelian
  randomization, a cheap boarding diagnostic to run before reorganizing the
  hospital, premortems, the three numbers that would flip the verdict.
- Naming its own cognitive traps in the open: question substitution,
  attribute substitution, escalation of commitment.

Baseline Claude usually reached the same correct conclusion and lost on
calibration discipline. GPT-5.5 lost on unverifiable citations, an internal
contradiction in the Fermi problem, and, in one judge's words, a response
that "asserts more than it interrogates."

## Round 2: the weak flank

Same protocol, six divergent-thinking briefs (reinvent the chair, invent
zero-gravity sports, sell silence, represent a day without clocks, a museum
of failure, reinvent the report card). Dimensions: originality, diversity,
boldness, craft, generativity.

| Arm | Overall | Wins | Avg rank | Originality | Diversity | Boldness | Craft | Generativity |
|---|---|---|---|---|---|---|---|---|
| **Claude 4.8 + skill v1** | **8.48** | **11/18** | **1.39** | 8.28 | 8.56 | 8.28 | 8.78 | 8.50 |
| Claude 4.8 (no skill) | 7.93 | 7/18 | 1.67 | 7.89 | 7.72 | 7.78 | 8.56 | 7.72 |
| GPT-5.5 (xhigh) | 5.96 | 0/18 | 2.94 | 6.28 | 6.22 | 5.83 | 5.61 | 5.83 |

The skill still won, and far less decisively. Baseline Claude swept two of
six problems 3-0: reinvent-the-chair and reinvent-the-report-card.

**Why the skill won where it won.** Its core move, naming and snapping a
different load-bearing assumption per entry, was cited verbatim by judges as
the win condition in all four victories. On unfamiliar territory (zero-g
sports, selling silence) the scaffold manufactured orthogonal spread where
the baseline clustered two or three entries on one engine.

**Why the skill lost where it lost.** On the two most-rehearsed "reinvent X"
prompts, the method drove it into the same trope basins the baseline also
found, producing labeled-but-adjacent ideas. Judges praised the losing skill
responses as "rigorously developed", "systematically spread", "conceptually
rigorous": the vocabulary of second place. The baseline won on an axis the
rubric never names directly: the single strangest coherent swing. A judge on
the baseline's winning chair concept (a chair that inherits the postures of
its dead previous sitters): "That last idea is the single strangest swing
across all three responses and still coheres." On the report card, the
baseline escaped the document medium itself (a box of objects, a map of what
the school chose NOT to teach) while the skill broke assumptions inside the
document frame.

Net pattern: **the scaffold raises the floor and can cap the ceiling.** The
skill never ranked third on any ballot, and it traded the one visceral,
medium-shattering outlier for five tidy, well-labeled assumption breaks.
This result motivated v2.

## Round 3: does more knowledge help? (v1 vs v2)

Eight problems spanning all the skill's domains, four arms, A/B/C/D
rotation, 24 judge passes. v2 carries 51 books and 9 reference libraries
against v1's 21 and 4.

| Arm | Overall | Wins | Avg rank |
|---|---|---|---|
| **Opus + skill v1** (21 books) | **8.91** | 13/24 | 1.50 |
| Opus + skill v2 (51 books) | 8.87 | 9/24 | 1.67 |
| Opus 4.8 (no skill) | 7.83 | 1/24 | 3.12 |
| GPT-5.5 (xhigh) | 7.32 | 1/24 | 3.71 |

Per problem (overall mean, winner bolded):

| Problem | Domain | v1 | v2 | Base | GPT |
|---|---|---|---|---|---|
| trust-the-study | stats skepticism | **9.67** | 8.93 | 8.00 | 6.73 |
| forecast-fermi | calibration | 8.33 | **8.40** | 6.53 | 7.60 |
| find-the-flaw | argument analysis | 8.80 | **9.40** | 7.93 | 7.73 |
| diagnose-the-system | systems | 8.67 | **9.00** | 7.87 | 6.87 |
| tail-risk-decision | uncertainty & risk | **9.07** | 8.80 | 8.20 | 7.13 |
| reframe-the-library | creativity | 8.80 | **8.93** | 7.60 | 6.80 |
| who-is-right | epistemology | **8.93** | 8.87 | 8.53 | 7.60 |
| trust-the-model | models & strategy | **9.00** | 8.60 | 7.93 | 8.07 |

**The honest headline: a statistical tie at the top.** The first 21 books
captured nearly all the headroom over the base model. Both versions beat
baseline on every problem, by about a full point on the overall mean
(v1 +1.08, v2 +1.04; the per-problem margin ranges from +0.34 to +1.87).

**Where the new books paid.** v2 won exactly where its new material lives.
It took find-the-flaw and diagnose-the-system on Popper-style falsifiability
tests and worked disconfirming arithmetic ("a ~15-17% capacity bump vs ~4%
population growth over two years does not arithmetically close", as one
judge quoted approvingly), and reframe-the-library on de Bono black-hat
checks and forced-collision ideation.

**Where v2 gave ground.** The four problems v1 won (stats skepticism, tail
risk, epistemology, model trust) were all decided on explicit probabilities,
and judges cited the same margin every time: v2 shipped qualitative
uncertainty ("wide error bars") where v1 stated explicit tiered
probabilities (60-70% conditional vs 25-35% unconditional on
trust-the-model; a binomial sanity check on the tail-risk desk). Three of
the four losses came down to missing numbers. The problem literally labeled
"calibration" (forecast-fermi) was a three-way split: best picks 1/1/1
across v1, v2, and GPT, with v2 taking the mean edge 8.40 to 8.33. On the library problem, one judge called v1's Meadows framing
"slightly more decorative than load-bearing": the only framework-theater
accusation against either version in the whole eval, and a warning sign
worth keeping.

**The dilution finding.** Average response length was identical (v1 ~914
words, v2 ~916), so the regression is displaced emphasis rather than bloat:
broader framework vocabulary crowded out the always-state-a-probability
habit that scores highest everywhere. The design lesson we took:
**enforcing core moves beats enlarging the library.** That lesson is now a
contribution guideline.

## Limitations (read before citing these numbers)

1. **Claude judged Claude.** All judges were Claude agents. Self-preference
   bias is documented in the LLM-as-judge literature: see
   [Panickssery et al. 2024, "LLM Evaluators Recognize and Favor Their Own
   Generations"](https://arxiv.org/abs/2404.13076) and
   [Zheng et al. 2023, "Judging LLM-as-a-Judge with MT-Bench"](https://arxiv.org/abs/2306.05685).
   The blind rotation cancels position bias, and it cannot cancel family
   bias. The GPT-5.5 gap in
   particular should be treated as unvalidated until re-judged by a
   different family. Re-judging the existing blinded transcripts is the
   single highest-value contribution; everything needed is in `evals/`.
2. **n=1 run per arm per problem.** Single samples per cell. The 18/18 sweep
   in Round 1 is hard to explain by sampling noise alone, and the v1/v2 gap
   in Round 3 (0.04 points) is well inside it.
3. **Possible length and style confounds.** Round 3 controlled length
   between v1 and v2 by accident (914 vs 916 words). Base-vs-skill
   comparisons did not control for response length or for judges rewarding
   the explicit vocabulary of calibration ("I put 65% confidence...")
   independently of its substance.
4. **Judge prompts lived in the orchestrating session.** The JSON output
   contract is fully specified and reproduced in `evals/README.md`; the
   exact judge prompt text was not version-controlled in rounds 1 to 3.
   Future rounds should commit the judge prompt verbatim. This is fixed as
   a harness convention going forward.
5. **Problems were authored by the same project.** The eval problems were
   written knowing what the skill teaches. They were also written to have
   real-world correct shapes (boarding in ERs, induced demand in highways),
   and an adversarially-chosen problem set would be a stronger test.
