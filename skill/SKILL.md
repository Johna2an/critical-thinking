---
name: critical-thinking
description: >-
  Think clearly and decide well under uncertainty. Use this skill whenever you
  reason through a hard problem, analyze or critique an argument, evaluate a claim
  or a statistic, weigh evidence, forecast or estimate odds, make or pressure-test
  a decision, diagnose a recurring failure, red-team an idea, brainstorm or generate
  ideas and options, redesign something, model a situation, or check your own
  reasoning for bias. Grounded in 51 books on judgment, reasoning, creativity,
  systems, uncertainty, models, and the philosophy of science (Kahneman's
  "Thinking, Fast and Slow", Galef's "Scout Mindset", Tetlock's "Superforecasting",
  Silver, Duke, Meadows, Dennett, de Bono, Deutsch, Sagan, Pigliucci, Bergstrom and
  West's "Calling Bullshit", Rosling's "Factfulness", Bazerman, Hastie, plus
  Koestler's "Act of Creation", von Oech, de Bono's "Six Thinking Hats", Johnson's
  "Where Good Ideas Come From", Brown's "Change by Design", Norman's "Design of
  Everyday Things", Hofstadter's "Surfaces and Essences" and "Godel, Escher, Bach",
  Minsky, Scott's "Seeing Like a State", Gall's "Systemantics", Senge's "Fifth
  Discipline", Jacobs, Taleb's "Antifragile" and "The Black Swan", Page's "Model
  Thinker", James/Witten/Hastie/Tibshirani's "Introduction to Statistical Learning",
  Simon, Dixit and Nalebuff's "Art of Strategy", Kuhn's "Structure of Scientific
  Revolutions", Popper, Feyerabend, and Pritchard). Reach for this for "think
  through", "is this true", "is this argument sound", "evaluate this claim", "what
  could go wrong", "should I", "what are the odds", "red-team this", "find the flaw",
  "brainstorm", "generate ideas", "generate options", "redesign this", "what's the
  model", "is this fragile or robust", "what could blindside us", "what's the
  paradigm", and any judgment, analysis, forecasting, decision, design, or ideation
  task, even when no book is named. The deep tool libraries in references/ load on
  demand, by task.
---

Think clearly and decide well. The first answer your mind offers is a hypothesis, not
a verdict. This skill is a toolkit for catching your own errors, reasoning cleanly,
quantifying uncertainty, stress-testing claims, thinking in systems, generating real
alternatives, and deciding under uncertainty. It carries the working tools of 51 books
on judgment, creativity, systems, uncertainty, models, and the philosophy of science.
The directives below are the operating manual; `references/` holds the deep tool
libraries and a per-book teaching library.

## How to use this

Apply the phases that fit the task. Phase 1 (frame) and Phase 2 (check yourself) run on
almost every hard question; the rest engage as the problem demands. Load a reference
file only when the task needs that depth, and load a per-book file only when a task
calls for that book. Read only what the task needs. When two
directives seem to conflict, scope to purpose (see "When the directives collide").

## Phase 1. Frame the question

- **State the exact question.** Pin the issue and the conclusion in plain words before
  reacting. Sort the issue: is it descriptive (what is) or prescriptive (what ought)?
  The two need different evidence.
- **Catch the swap.** Ask what you were actually asked and what easier question your
  mind answered instead. A hard call that suddenly feels easy and emotionally clear is a
  substitution (attribute substitution).
- **Set the boundary on purpose.** Decide what is inside the frame and what is out, then
  deliberately pull back in the delayed effects, distant people, and long-term
  consequences you first excluded.

## Phase 2. Check yourself (bias and the scout stance)

- **Ask "Is it true?" rather than "Can I believe it?" or "Must I believe it?"** Notice which
  question you were running. You bend evidence toward what you want and away from what
  you resist, so flip the standard and re-check.
- **Hold beliefs as probabilities and your identity lightly.** State a number rather
  than a certainty, and arrange things so being wrong costs you nothing. A belief welded
  to your identity gets defended instead of tested, so hold it lightly.
- **Run the selective-skeptic test.** If this same evidence pointed the other way, would
  you still find it credible? A different standard for friendly and unfriendly evidence
  is a double standard.
- **Hunt disconfirming evidence first.** Record every fact that cuts against you the
  instant you meet it, because the mind drops inconvenient facts faster than convenient
  ones. Lean into confusion rather than explaining it away.

## Phase 3. Reason and argue cleanly

- **Separate the conclusion from the reasons, and let reasons come first.** A conclusion
  with no reasons is a bare assertion. A conclusion chosen first with reasons scrambled
  in afterward is the tell of motivated reasoning.
- **Surface the hidden premise and the value judgment.** Most arguments leave a premise
  unstated, and the weakness usually hides there. Name the value the arguer had to rank
  first to reach the conclusion.
- **Steelman before you strike.** Re-express the opposing view so well its holder would
  endorse your version, then engage the strongest form (Rapoport's rule, the principle
  of charity).
- **Name the fallacy.** Keep the high-frequency roster loaded: ad hominem, straw man,
  false dilemma, slippery slope, begging the question, post hoc, equivocation, red
  herring, and appeal to questionable authority. (`references/argument-and-evidence.md`)

## Phase 4. Quantify and forecast

- **Base rate first, then adjust.** Find the reference class and anchor on how often
  things like this happen in general (the outside view) before you touch the vivid
  specifics of this case (the inside view).
- **Put a number on it and decompose the impossible.** Translate "likely" into a
  probability. Fermi-ize a hard estimate into parts you can each guess, then recombine.
- **Update in small steps and keep score.** Nudge on genuinely diagnostic evidence;
  avoid both freezing on a prior and lurching on a flashy detail. Log forecasts and
  grade them, because a forecast you never score teaches nothing.
- **Know which world the variable lives in.** In a mild domain no single case dominates
  the total, so averages hold. In a wild domain one case can swamp everything, so the
  average misleads and the tail rules. Check the domain before you trust a mean, a
  standard deviation, or a typical case (the ludic fallacy treats a wild, open system as
  a casino with known odds).
- **Distrust the model that best fits the past.** The most flexible model can memorize
  noise and forecast worse out of sample (overfitting). Judge a model on data it never
  saw, and prefer the simpler fit when predictors outnumber clean signal.
  (`references/forecasting-and-decisions.md`, `models-and-formal-thinking.md`, `uncertainty-and-risk.md`)

## Phase 5. Stress-test (red-team and call bullshit)

- **Interrogate the black box.** Audit the data going in and the result coming out
  without needing the math. Ask "compared to what?", "out of what?" (the denominator),
  and "which average?" before trusting any statistic.
- **Read the axes before the shape, and demand effect size with every p-value.** A tiny
  real bias across a huge sample manufactures statistical significance.
- **Default to the prosaic and demand evidence proportional to the claim.** Rule out
  misperception, error, coincidence, and selection before reaching for the
  extraordinary. Ask what observation would prove the claim false.
- **Prefer explanations that are hard to vary.** An account you could reshape to fit the
  opposite outcome just as comfortably is weak, however confident it sounds.
  (`references/argument-and-evidence.md`, `systems-science-and-creativity.md`)

## Phase 6. Think in systems

- **Look for the structure behind it.** When a problem keeps recurring, stop hunting the
  person who caused this instance and map the stocks, flows, feedback loops, and delays
  that make the behavior the system's default.
- **Aim high on the leverage hierarchy and audit your metrics.** Push on goals, rules,
  and information flows over tweaking mere numbers. The system delivers exactly the
  indicator you specify, so you get what you measure.
- **Respect local knowledge over the legible abstraction.** A central plan reshapes the
  world into what it can measure and erases the situated know-how that actually makes the
  work function (the high-modernism trap). Keep the practitioner who holds the unwritten
  skill inside the decision loop, and date a young success before you praise it, since it
  may be feeding on reserves it did not build.
- **Grow systems from working seeds (Gall).** A complex system that works evolved from a
  simple one that worked; a complex system designed whole rarely works and resists
  patching. Expect every system to pursue its own survival regardless of the mission on
  the door, and read a person inside it from incentives rather than words.
- **Match the pattern to a system archetype.** When a problem recurs, check it against
  limits to growth, shifting the burden, eroding goals, escalation, and tragedy of the
  commons. The archetype points you to the leverage and the trap.
  (`references/systems-science-and-creativity.md`, `systems-and-complexity.md`)

## Phase 7. Generate alternatives

- **Set a quota and suspend judgment.** Produce several readings even after a good one
  arrives, because the first acceptable answer suppresses the rest. Let a wrong-looking
  idea be a stepping stone. Use reversal, analogy, and a random input to break the
  pattern, then find the hidden option C. Generate first, then switch to analysis to
  test what you produced.
- **Bisociate: force two unrelated frames together.** Name the matrix you are stuck
  inside, then describe the problem inside two or three foreign frames until two
  rule-sets both apply at once. The new option lives where the frames overlap.
- **Run the Six Hats as separate passes.** Generate (green), judge for risk (black), and
  search for value (yellow) in scheduled turns rather than all at once, so judgment does
  not strangle generation. Quarantine criticism inside its own pass.
- **Name the mental lock you are obeying, then break it.** List the constraints you are
  treating as fixed (the one right answer, be practical, follow the rules, avoid
  ambiguity) and ask which are real and which are inherited habit.
- **Reach into the adjacent possible.** Build the next option from parts available now,
  and prefer the recombination that opens the most further doors over a leap to a
  destination whose pieces do not exist yet.
- **Use analogy as the generative engine.** Strip the problem to its relational skeleton,
  find another domain with the same skeleton, borrow its solution, then mark every point
  where the analogy breaks.
- **Run the design loop: diverge then converge, and prototype to think.** Widen options
  with judgment suspended, then switch modes and narrow. Build a rough, cheap artifact to
  externalize a vague idea, because a prototype surfaces problems no discussion will.
  (`references/creativity-and-ideation.md`, `systems-science-and-creativity.md`)

## Phase 8. Decide under uncertainty

- **Judge the decision on what was knowable.** Grade a choice by the information and reasoning
  available at the time, never by how it happened to land (resulting). Frame the choice
  as a bet that names the alternative futures and the opportunity cost. Ignore sunk
  costs and decide on future consequences alone. Run a premortem, aggregate small
  positive-expected-value bets, and hold extra caution for the unquantifiable tail.
  (`references/forecasting-and-decisions.md`)

## When the directives collide

When two moves seem to conflict, scope the choice to the purpose and the conditions in
front of you.

- **Trust or distrust intuition: diagnose the domain.** Let intuition lead only when the
  environment is regular enough to hold learnable patterns and you got rapid, clear
  feedback while learning it (a surgeon's hands, a firefighter's read of a room). In
  noisy, low-feedback domains (markets, geopolitics, one-off strategy), distrust the gut
  and substitute base rates, checklists, or a simple model.
- **Use falsifiability as a flashlight.** Ask "what would change your
  mind?" and treat a confident "nothing could" as a strong tell. Score a claim across
  several marks (testable predictions, response to disconfirmation, progress, details
  pinned by reality) rather than passing or failing it on one rule. Demarcation is a
  gradient.
- **Quantify the tractable middle, stay humble at the tail.** Forecast where the domain
  has feedback and refuse to extrapolate past the horizon where skill decays. Separate
  epistemic uncertainty (knowable, push on it) from aleatory uncertainty (irreducibly
  random, stay cautious).
- **Separate generation from analysis by phase.** Generate with judgment suspended, then
  switch to rigor to test. The two sabotage each other only when run at once.
- **Spend rigor where it pays (stakes-triage).** Reserve full deliberation for choices
  that are important, hard to reverse, unfamiliar, or numeric. Let fast judgment handle
  low-stakes, reversible, high-frequency calls. Refuting a bad claim costs far more than
  making one, so aim your scrutiny at the load-bearing claim.
- **Model versus reality: many models in the middle, distrust any model in the tail.**
  Run several models where the domain has feedback and the regular middle holds, and let
  their errors cancel. In the fat tail, where one event can dominate, trust no single
  model and manage exposure instead, because the clean odds were never real there.
- **Restraint versus completeness: cut hard, then check the cut.** Prune what does not
  earn its place, then reverse the test and confirm that nothing supported and
  decision-relevant was dropped. The first pass fights bloat; the second pass fights the
  omission that bloat-fighting causes.
- **Paradigm versus anomaly: park the small misfit, let the persistent one bite.** A
  single anomaly inside a working framework is usually the worker's puzzle to solve, so
  park it. When anomalies accumulate, resist repair, and force the field to reopen
  fundamentals, treat the misfit as the leading edge of a needed shift.
- **Generate wide versus converge: separate the two by phase.** Widen options with
  judgment suspended, then switch cleanly to narrowing and choosing. The two modes
  sabotage each other only when run at once, so schedule them rather than blend them.
- **Optimize versus preserve: watch the proxy you are maximizing.** Pushing hard on a
  legible metric tends to destroy the unmeasured complexity that quietly kept the system
  alive. Before you maximize an indicator, name what it stands in for and what it ignores,
  and stop when the proxy starts replacing the goal.

## NEVER

- Grade a decision by its outcome (resulting), or rewrite a prediction after the fact
  (hindsight).
- Trust a vivid, coherent story as evidence. Coherence is not proof, and adding a
  plausible detail lowers probability (the conjunction fallacy).
- Accept a correlation as a cause without listing the rival explanations first.
- Read a single statistic without its denominator, its sample size, and its comparison
  group.
- Let a number already on the table set your estimate (anchoring); generate an
  independent one first.
- Defer to a claim because it wears numbers, jargon, or a credential; scrutinize those
  harder.
- Judge a probabilistic forecast by which side of 50% it landed on (the
  wrong-side-of-maybe fallacy).
- Honor a sunk cost or escalate commitment to justify a past choice.
- Treat a small sample, a streak, or one extreme result as a stable signal (regression
  to the mean, the law of small numbers).
- Accept a claim that forbids no possible observation. If nothing could refute it, it
  explains nothing.
- Settle a charged decision in a single frame. If your preference flips when the same
  options are reworded as a loss instead of a gain, you do not really hold it.
- Mistake luck for skill. Judge a record by the graveyard of those who used the same
  method and failed, not by the surviving winners (survivorship bias).
- Build a tidy causal story from noise, or model an open system as a casino with known
  odds (the narrative fallacy and the ludic fallacy).
- Optimize a proxy metric until it destroys the thing it stood for (Goodhart, the
  legibility trap).
- Trust the flexible model that fits the past best; the tightest in-sample fit often
  forecasts worst (overfitting).
- Confuse a map's legibility with the territory's reality, or treat the simplified ledger
  as the thing itself.
- Treat a long calm record as proof of safety when one event could dominate (the turkey
  problem).
- Patch a refuted claim with a rescue that forbids no new observation and adds no
  testable content (ad hoc immunization).

## Go deeper

Load a reference when the task calls for it. Do not read them all up front.
- `references/biases-and-judgment.md`: the bias catalog and the self-checks that counter it (Kahneman, Galef, Bazerman, Hastie, Rosling, Duke).
- `references/argument-and-evidence.md`: argument analysis, evidence grading, statistical skepticism, rhetoric and fallacy detection (Browne, Weston, Warburton, Huff, Bergstrom and West, Dennett, Adler).
- `references/forecasting-and-decisions.md`: probability, calibration, forecasting discipline, and decisions under uncertainty (Tetlock, Silver, Duke, Hastie, Bazerman, Rosling).
- `references/systems-science-and-creativity.md`: systems thinking, scientific epistemics, and lateral generation (Meadows, Sagan, Deutsch, Pigliucci, de Bono, Dennett, Hamming).
- `references/creativity-and-ideation.md`: idea generation and the cognitive engine of ideas, bisociation, Six Hats, mental locks, the adjacent possible, design-thinking divergence and prototyping, analogy as cognition, mind as agents, strange loops (Koestler, de Bono, von Oech, Johnson, Brown, Norman, Hofstadter, Sander, Minsky). Load for a brainstorm, an ideation or redesign task, or any generate-options step.
- `references/systems-and-complexity.md`: organized complexity, legibility and the high-modernism trap and metis, how systems fail and Gall's laws, Senge's archetypes and leverage and mental models (Scott, Gall, Senge, Jacobs, Meadows). Load for a recurring organizational failure or a grand plan or reform.
- `references/uncertainty-and-risk.md`: fat tails and extremistan, the narrative and ludic fallacies, survivorship and hindsight, convexity, optionality, via negativa, the barbell, antifragility, alternative histories (Taleb). Load for "is this fragile or robust", "what could blindside us", or any tail-risk question.
- `references/models-and-formal-thinking.md`: many-model thinking, bias-variance and overfitting and cross-validation and regularization, bounded rationality and satisficing, game theory (backward induction, Nash, commitment, anticipating the best response) (Page, James/Witten/Hastie/Tibshirani, Simon, Dixit and Nalebuff). Load for "what's the model", a data-driven forecast, or a strategic situation.
- `references/epistemology-and-science.md`: paradigms and normal science and anomalies and revolutions and incommensurability, falsifiability and conjecture-and-refutation and demarcation, method pluralism, JTB and Gettier and epistemic luck and scepticism (Kuhn, Popper, Feyerabend, Pritchard). Load for "what's the paradigm", "is this claim testable", or a dispute between expert camps.
- `references/books/`: one teaching file per book, 51 files in all. Load a single file only when a task wants that book's depth (for example `thinking-in-systems` for a recurring organizational failure, `antifragile` for a tail-risk exposure, `art-of-strategy` for a strategic standoff, `structure-scientific-revolutions` for a paradigm dispute).

Reason like a scout: the goal is to see what is true rather than to win the point. Hold every
belief as a probability, hunt the evidence that would change your mind, and judge your
thinking by whether it tracks reality.
