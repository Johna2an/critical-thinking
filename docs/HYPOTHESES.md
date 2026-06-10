# Hypotheses: what we believed, what the data did to it

This project was run as a sequence of falsifiable bets. Some held, some
broke. The broken ones taught more. Each hypothesis below is stated the way
we held it before measuring, followed by the verdict and the mechanism we
now believe explains the result.

## H1. Distilled book knowledge, injected as a skill, measurably changes how a frontier model reasons

**The bet.** A frontier model already "knows" Kahneman and Tetlock from
pretraining. The hypothesis was that knowing about base rates and using them
unprompted are different behaviors, and that an operating manual of
imperative directives ("Base rate first, then adjust", "Put a number on it")
would close that gap.

**Verdict: held, strongly.** Round 1: +1.07 overall, first place in 18 of 18
blind judge passes. The mechanism is visible in the transcripts: baseline
Claude reached the same conclusions and hedged in words, while the skill arm
attached explicit posteriors, named reference classes, and proposed
falsifiers. The largest dimension gap was calibration (+1.73), with bias
awareness and depth tied at +1.34. The directive layer converts latent
knowledge into executed behavior.

**Why it works (our current model).** The skill works as a standing
commitment device; the model already holds the knowledge.
"State a probability" costs the
model nothing in capability; left to its defaults, it reverts to hedged
prose because most text it imitates hedges. A directive in context shifts
the default. This also predicts where the effect should vanish: tasks where
the desired behavior has no crisp directive form.

## H2. The skill helps uniformly across task types

**The bet.** Implicit in v1's design: one operating manual for all hard
thinking.

**Verdict: broke.** Round 2 (divergent-thinking briefs): the skill won 11 of
18 judge picks against baseline's 7, and lost two problems outright 3-0.
Judges described losing skill responses as "rigorously developed" and
"systematically spread" while the unscaffolded baseline produced "the single
strangest swing... that still coheres."

**The mechanism.** On unfamiliar creative territory (invent a zero-gravity
sport, sell silence) the skill's assumption-snapping scaffold manufactures
orthogonal spread, and judges rewarded exactly that. On heavily-rehearsed
creative territory (reinvent the chair, reinvent the report card) every
systematic method walks the same well-worn trope basins; what wins there is
the wild coherent outlier, and the scaffold's discipline appears to
suppress it. The scaffold raises the floor and can cap the ceiling. Phase 7
("set a quota, suspend judgment") and the collision rule "generate wide
versus converge" exist because of this result, and the gap is still open:
v2 narrowed the creative deficit without closing it.

## H3. More books make the skill better

**The bet.** v1's 21 books left whole domains uncovered (tail risk, game
theory, paradigms, the creativity canon). Expanding the library from 21 to
51 books and adding five reference libraries should raise scores across the
board.

**Verdict: broke on the mean, held on coverage.** Round 3: v1 8.91, v2 8.87
on the same eight-problem battery. A statistical tie at the top, while both
beat baseline on every problem, by roughly a full point on the overall
mean. The win profile moved exactly
where the new material lives: v2 took argument analysis (falsifiability
tests, a worked 2x2 contingency table), systems (worked disconfirming
arithmetic), and creative reframing (black-hat checks, forced collisions).
v1 kept the four calibration-heavy problems, and in three of them judges
named v2's missing explicit probabilities as the entire margin.

**The mechanism.** Response lengths were identical (~914 vs ~916 words), so
this is displaced emphasis rather than bloat: a wider framework vocabulary
competes for the same behavioral budget, and the always-state-a-probability
habit is what pays most per token. The first ~20 books captured nearly all
the available headroom over the base model. Marginal books buy topical
breadth in their own domain and quietly tax the core disciplines.

## H4 (emergent). The operating manual does the work; the library is the long tail

Nobody bet this in advance; the data forced it. SKILL.md is the only layer
guaranteed to be in context, and the behaviors judges rewarded most (numbers,
base rates, falsifiers, named traps) all live in its directive layer.
Reference files pay off when the problem's domain matches them (Little's Law
arrived from a systems reference; the binomial tail check from the risk
material), which argues for aggressive progressive disclosure: keep the
manual sharp and small, let depth load on demand, and treat every added
directive as competing for a fixed behavioral budget.

Two testable predictions fall out, and both are open:

- A v3 that enforces core moves harder (a hard "every verdict carries a
  probability" rule) should recover v1's calibration wins while keeping
  v2's breadth.
- The skill text is model-agnostic in principle; loaded into a non-Claude
  model as a system prompt, it should produce the same behavioral shifts.
  If it does, the skill is a portable reasoning protocol. Nobody has run
  this yet.

## What we would tell anyone building a knowledge-distillation skill

1. Measure before scaling. Our one unmeasured scale-up (21 to 51 books) was
   the one change that bought nothing on the mean.
2. Distill into directives an agent can execute. The eval rewards executed
   behavior; concept descriptions sit inert in context.
3. Blind your judges and balance the rotation. The 18/18 sweep was only
   credible because no judge knew which arm was which.
4. Hunt your weak flank on purpose. Round 2 was designed to find a failure,
   found one, and produced the most useful sentence in the whole project:
   the scaffold raises the floor and can cap the ceiling.
5. Keep the negative results. A repo that only shows wins teaches nothing
   and invites distrust.
