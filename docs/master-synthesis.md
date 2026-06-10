# Critical-Thinking V1 — Master Synthesis (Architect's Outline)

This document distills 21 books into one buildable blueprint for a lean "critical-thinking" skill modeled on the design-philosophy pattern: a bold operating-manual `SKILL.md`, a small `references/` folder of tool libraries, and a per-book teaching library loaded by task. It covers (1) the canon where the books agree, (2) the real tensions and how to scope them, (3) the V1 integration plan, and (4) the named frameworks, checklists, and numbers worth preserving verbatim.

The corpus:
1. Thinking, Fast and Slow (Kahneman)
2. The Scout Mindset (Galef)
3. Superforecasting (Tetlock & Gardner)
4. The Signal and the Noise (Silver)
5. Thinking in Bets (Duke)
6. Asking the Right Questions (Browne & Keeley)
7. A Rulebook for Arguments (Weston)
8. Thinking from A to Z (Warburton)
9. How to Lie with Statistics (Huff)
10. Calling Bullshit (Bergstrom & West)
11. Thinking in Systems (Meadows)
12. The Demon-Haunted World (Sagan)
13. The Beginning of Infinity (Deutsch)
14. Nonsense on Stilts (Pigliucci)
15. Lateral Thinking (de Bono)
16. Intuition Pumps (Dennett)
17. Factfulness (Rosling)
18. Rational Choice in an Uncertain World (Hastie & Dawes)
19. Judgment in Managerial Decision Making (Bazerman & Moore)
20. How to Read a Book (Adler & Van Doren)
21. The Art of Doing Science and Engineering (Hamming)

---

## PART 1 — THE CRITICAL-THINKING CANON (the non-negotiables)

These are the moves where the books converge. Each is phrased as a directive with its strongest sources. Convergence across independent authors (a psychologist, a physicist, a statistician, a poker champion, a philosopher) is itself the signal that these are load-bearing rather than idiosyncratic.

### 1. Separate intuition (System 1) from analysis (System 2), and know when each is trustworthy
The first answer that arrives is a hypothesis, not a verdict. Intuition is fast pattern-matching; it is brilliant on regular, well-rehearsed domains and reliably wrong on probability, sample size, and regression. Trust a gut call only when the environment is regular AND the person got rapid, clear feedback while learning it (chess, firefighting, anesthesiology qualify; long-range political and market forecasting do not). When a question involves chance, base rates, or high stakes, name it a System 2 task and slow down.
- **Strongest sources:** Thinking, Fast and Slow (the two-system model; the two conditions for valid expert intuition); Judgment in Managerial Decision Making (the two-system audit, treat first impression as a draft); Rational Choice in an Uncertain World (automatic vs. controlled thinking, fluency as a flag to pause); Asking the Right Questions (recruit System 2 before committing).
- **Watch for:** attribute substitution (the mind silently swaps a hard question for an easy one and answers that instead) and WYSIATI (confidence comes from story coherence, not from evidence quantity).

### 2. Hold the scout stance: beliefs as probabilities, ego separated from being right, disconfirmation sought on purpose
Ask "Is this true?" rather than "Can I believe it?" (for things you want) or "Must I believe it?" (for things you resist). The binding constraint on good judgment is attitude, not information; you can recite every bias and still rationalize. Separate the decision to pursue a goal from the estimate of its odds. Hold your identity lightly so that being wrong costs you nothing. Record disconfirming evidence the instant you meet it, because the mind drops inconvenient facts faster than convenient ones.
- **Strongest sources:** The Scout Mindset (scout vs. soldier; the three questions; Darwin's golden rule; hold identity lightly; the five thought-experiment tests). Reinforced by Thinking in Bets (motivated reasoning, the smarter the more biased), Superforecasting (perpetual beta, own your errors), and Demon-Haunted World (control your own wishful thinking; be most skeptical when a conclusion is most pleasant).

### 3. Forecast probabilistically: base rates first, then adjust, update on evidence, and score yourself
Anchor on the outside view (how often things like this happen in general) before the inside view (the vivid specifics of this case). State forecasts as numbers, not vague words. Update in small, frequent steps; resist both freezing on a prior and lurching on flashy evidence. Then keep score, because a forecast you never grade teaches nothing. Calibration means that when you say 70%, it happens about 70% of the time.
- **Strongest sources:** Superforecasting (outside-then-inside view; translate words into numbers; Brier scoring; small Bayesian updates; fine-grained probabilities; Fermi-ize). The Signal and the Noise (Bayesian updating, calibration, fox over hedgehog, signal vs. noise). Reinforced by Factfulness (level vs. trend, the possibilist stance), Thinking in Bets (calibration as a scale not a switch), and Bazerman/Moore + Silver on the outside view and reference classes.

### 4. Analyze arguments: find the conclusion and reasons, surface hidden assumptions and value judgments, test evidence quality, name rival causes and fallacies
Before reacting, separate the conclusion (what you are asked to accept) from the reasons (the support). Reasons come first; a conclusion picked first with reasons scrambled afterward is backward reasoning. Surface the unstated premise (the enthymeme) and any hidden value judgment, because that is usually where the weakness hides. Grade evidence by type (research over testimonial over anecdote). For any causal claim, list rival causes before accepting the offered one, and never confuse correlation with causation. Steelman before you strike.
- **Strongest sources:** Asking the Right Questions (the full question checklist: issue, conclusion, reasons, assumptions, ambiguity, evidence quality, rival causes, omitted information, alternative conclusions). A Rulebook for Arguments (premises-and-conclusion, representative examples, four-part authority test, valid deductive forms, reckon with objections and alternatives). Thinking from A to Z (enthymeme, validity vs. soundness, the four conditional forms, counterexamples). Reinforced by Intuition Pumps (Rapoport's Rules) and How to Read a Book (the four grounds for valid disagreement).

### 5. Be skeptical of statistics and data: sampling, denominators, regression to the mean, misleading charts, p-hacking, calling bullshit
Trace every number to its sample and its definitions; a tidy decimal cannot rise above the quality of the raw selection beneath it. Always ask "compared to what?" and "out of what?" (the denominator and the control rate). Watch for selection bias, self-selection, and right-censoring. Read a chart's axes before its shape. Demand effect size and sample size alongside any p-value, since a tiny real bias across a huge sample manufactures "significance." Treat any statistic, model, or algorithm as a black box: interrogate the data going in and the results coming out without needing to understand the math.
- **Strongest sources:** How to Lie with Statistics (the five-question routine; mean/median/mode; gee-whiz graph; semi-attached figure; shifting base). Calling Bullshit (black-box reasoning; garbage in, garbage out; selection bias and right-censoring; the unsupported denominator; deceptive visualizations; Brandolini's principle). Reinforced by Nonsense on Stilts (the p-value / large-sample trap), Factfulness (the Size Instinct: compare and divide), and the regression-to-the-mean treatments in Kahneman, Bazerman/Moore, and Hastie/Dawes.

### 6. Think in systems: stocks, flows, feedback loops, delays, leverage points, system traps
When something keeps happening, stop hunting for the villain who caused this instance and ask what internal structure makes this behavior the system's default. Name the stock, list its inflows and outflows, and find the feedback loops (balancing loops stabilize, reinforcing loops amplify). Find every delay, because delays make systems oscillate and let problems grow before they are visible. Intervene as high on the leverage hierarchy as the situation allows. Match an intransigent problem to its system trap and apply that trap's specific way out. Remember the system gives you exactly the metric you specify, so audit your metrics.
- **Strongest sources:** Thinking in Systems (the entire framework: structure produces behavior; stocks and flows; balancing/reinforcing loops; delays; the 12 leverage points; the system traps; bounded rationality; "systems grant wishes literally"). Reinforced by Factfulness (the Blame Instinct: look for systems not villains), Hamming ("you get what you measure"), and Meadows-style metric audits echoed in Deutsch's emergence.

### 7. Apply scientific epistemics: falsifiability, good explanations, paradigms, distinguishing science from pseudoscience
A claim earns serious inquiry only if some conceivable observation would prove it wrong; a theory that explains every outcome explains nothing. Demand evidence proportional to the claim. Default to the prosaic explanation before the extraordinary one. Prefer explanations that are hard to vary (every detail pinned to reality) over ones that could be reshaped to fit any outcome. Treat falsifiability as a flashlight, not a guillotine: real theories also absorb a few anomalies before being dropped, and demarcation is a gradient rather than a bright line.
- **Strongest sources:** The Demon-Haunted World (the Baloney Detection Kit; falsifiability; the dragon in the garage; default to the prosaic; extraordinary claims need extraordinary evidence). The Beginning of Infinity (good explanations are hard to vary; conjecture and criticism; reject inductivism; fallibilism; the disjunction test). Nonsense on Stilts (the demarcation gradient; falsifiability as flashlight; probability over possibility; replication; the expertise/trust triage). Reinforced by Hamming (formalize a belief then attack both sides) and Silver (build prediction into a Popperian learning loop).

### 8. Generate alternatives: escape the dominant frame through provocation, analogy, and reframing
Vertical thinking digs the existing hole deeper; lateral thinking digs a hole elsewhere, and both are required. The first acceptable interpretation suppresses all others, so set a quota of alternatives and meet it even after a good answer appears. Challenge assumptions and self-imposed boundaries (the nine-dot puzzle: the boundary was never in the instructions). Suspend judgment during generation so a wrong-looking idea can become a stepping stone. Use reversal, random stimulation, analogy, and "jootsing" (jumping out of the system) to break the pattern. Always generate the alternative conclusions a given set of reasons allows.
- **Strongest sources:** Lateral Thinking (vertical vs. lateral; generation with a quota; challenging assumptions; suspended judgment; reversal; random stimulation; "po"; pattern lock-in). Intuition Pumps (jootsing; turn all the knobs). Reinforced by Asking the Right Questions (generate alternative conclusions; escape dichotomous thinking with if-clauses), Hamming (the order-of-magnitude rule, do the equivalent job not the same job), and the scout's "hidden option C."

### 9. Decide under uncertainty: decisions as bets, expected value, decision quality separated from outcome quality, tail risk respected
Your outcomes come from exactly two forces, decision quality and luck, so judge a decision by the information and reasoning available at the time, never by how it happened to land ("resulting"). Frame every choice as a bet that names the alternative futures and prices the opportunity cost. Lay consequential choices out as a decision tree and maximize expected utility. Ignore sunk costs; decide only on future consequences. Aggregate many small positive-expected-value bets while reserving special caution for large one-shot decisions and unquantifiable tail risk.
- **Strongest sources:** Thinking in Bets (decision vs. outcome quality; treat every decision as a bet; field outcomes; premortems and backcasting; Ulysses contracts). Rational Choice in an Uncertain World (decision trees and expected utility; ignore sunk costs; simple linear models beat intuition). Judgment in Managerial Decision Making (the six-step rational scaffold; break escalation of commitment; aggregate small bets; reframe before deciding). Reinforced by Silver (risk vs. uncertainty) and Kahneman (prospect theory, framing, the premortem).

### 10. Read and learn to interrogate ideas, not absorb them
Reading well is active work: ask what the whole is about, what is said in detail, whether it is true, and what follows. Suspend judgment until you genuinely understand; most disagreement is premature misreading. When you disagree, name the specific fault (uninformed, misinformed, illogical, or incomplete) rather than voicing reflexive contrarianism. Be a gold-panner, not a sponge. Invest in fundamentals over perishable facts, work on important problems, and remember a consistent direction compounds over a career.
- **Strongest sources:** How to Read a Book (active reading; the four questions; suspend judgment; the four grounds for valid disagreement; syntopical reading). Asking the Right Questions (sponge vs. gold-panner; weak-sense vs. strong-sense critical thinking). The Art of Doing Science and Engineering (fundamentals over current facts; work on important problems; vision and the drunkard's-walk; luck favors the prepared mind).

---

## PART 2 — KEY TENSIONS (and how to resolve them by scoping to purpose)

The books do not perfectly agree. The resolutions below are not compromises; each tension dissolves once you scope it to the purpose at hand and the conditions in front of you.

### Tension A — Trust intuition vs. distrust it
Kahneman, Bazerman/Moore, and Hastie/Dawes catalog how intuition misfires; Hamming celebrates the prepared expert's instinct, and Gladwell-style "blink" intuition appeals to the same well. **Resolution by domain regularity and feedback.** Kahneman already supplies the boundary: trust intuition only when the environment is regular enough to contain learnable patterns AND the person got rapid, clear feedback while learning. Diagnose the domain first. In regular, high-feedback domains (a surgeon's hands, a firefighter's read of a room), let intuition lead and audit lightly. In noisy, low-feedback domains (markets, geopolitics, one-off strategy), distrust the gut and substitute base rates, checklists, or simple linear models. The skill is not "trust" or "distrust" globally; it is classifying the domain before deciding which system gets the wheel.

### Tension B — Popperian falsification vs. Kuhnian paradigms vs. Feyerabend / Deutsch
Sagan and early Popper want a clean falsifiability line; Pigliucci shows that line failing (good science survives apparent counterexamples, bad science mimics any single rule) and that paradigms (Kuhn) and accumulated anomalies govern real change; Deutsch reframes the whole thing around "hard to vary" explanations and rejects inductivism. **Resolution by treating falsifiability as one diagnostic among several, not a verdict.** Use falsifiability as a flashlight: "What observation would make you abandon this?" A confident "nothing could" is a strong tell. But score a claim across several dimensions (does it generate testable predictions, respond to disconfirming evidence, make progress, get its details pinned by reality) rather than passing or failing it on one rule. Demarcation is a gradient with an "almost science" middle. When evaluating an explanation's quality, prefer Deutsch's "hard to vary" test; when evaluating whether a field is doing science, use Pigliucci's multi-dimensional gradient; when deciding whether to drop your own theory, use the scout's spring-of-anomalies accounting (let the strains add up instead of explaining each away in isolation).

### Tension C — Forecasting and quantification vs. Taleb-style tail-risk humility
Tetlock and Silver show that fine-grained probabilistic forecasting is a real, scoreable skill; the systems and complexity material (Meadows, Silver's chaos chapter, Deutsch on unpredictable knowledge growth) warns that some systems are chaotic and some uncertainty is irreducible, so precise-looking forecasts can breed false confidence. **Resolution by separating risk from uncertainty and respecting the forecast horizon.** Quantify where the domain is tractable and feedback exists; widen error bars and refuse to extrapolate past the horizon where skill decays (weather past ~a week, long-range political forecasts). Distinguish epistemic uncertainty (knowable in principle, worth pushing on) from aleatory uncertainty (irreducibly random, keep estimates cautious). Name which parts of a problem you can actually quantify and which you are merely guessing, and hold extra caution for the unquantifiable tail. Forecasting and tail-humility are complementary: calibration disciplines the quantifiable middle, tail-humility guards the edges.

### Tension D — Analysis and rigor vs. lateral generation
The argument-analysis and statistical books reward selective, sequential, justify-every-step reasoning; de Bono and the creativity material reward provisional wrongness, irrelevance, and provocation. **Resolution by phase separation.** These modes sabotage each other only when run simultaneously. Generate first with judgment suspended (quota, reversal, random word, "po"), then switch to vertical analysis to test, prove, and build out whatever generation produced. Name which mode you are in. Use lateral thinking when stuck after digging deeper; use rigor to validate, never to pre-screen the generation phase. The sin is judging an idea before it has led anywhere, and the opposite sin is shipping an unexamined provocation as a conclusion.

### Tension E — Speed vs. rigor
Every book that names System 1 acknowledges that effortful analysis is metabolically expensive and that you cannot run full rigor on every choice; Bazerman/Moore's bounded rationality and Simon's satisficing make this explicit. **Resolution by stakes-triage.** Reserve full System 2 analysis for decisions that are important, hard to reverse, unfamiliar, or numeric. Let fast intuition handle low-stakes, high-frequency, reversible choices where the cost of analysis exceeds the value of accuracy. The skill is allocating scarce deliberation where it pays, not maximizing rigor everywhere. Brandolini's asymmetry applies here too: refutation is expensive, so spend your scrutiny budget on the load-bearing claim, not every detail.

---

## PART 3 — THE V1 INTEGRATION PLAN

### 3a. Operating manual for the lean `SKILL.md` (bold imperative voice)

Group the directives into phases. Target ~20 directives plus a NEVER list. Keep each one a punchy imperative, in the design-philosophy house style.

**PHASE 1 — FRAME THE QUESTION**
1. **State the exact question.** Pin the issue and the conclusion before reacting. Sort the issue: is it descriptive (what is) or prescriptive (what ought)? They need different evidence.
2. **Catch the swap.** Ask what question you were actually asked and what easier question your mind answered instead. If a hard call feels easy and emotionally clear, you substituted.
3. **Set the boundary on purpose.** Decide what is inside the frame and what is out, then deliberately pull back in the delayed effects, distant people, and long-term consequences you excluded.

**PHASE 2 — CHECK YOURSELF (biases and scout stance)**
4. **Ask "Is it true?", not "Can I believe it?" or "Must I believe it?"** Notice which question you were running and flip the standard to re-check.
5. **Hold beliefs as probabilities and your identity lightly.** Being wrong should cost you nothing. State a number, not a certainty.
6. **Run the selective-skeptic test.** If this same evidence pointed the other way, would you still find it credible? If not, you have a double standard.
7. **Hunt disconfirming evidence first.** Record every fact that cuts against you the instant you meet it. Lean into confusion instead of explaining it away.

**PHASE 3 — REASON AND ARGUE CLEANLY**
8. **Separate conclusion from reasons, and let reasons come first.** A conclusion with no reasons is a bare assertion. Backward reasoning (conclusion first, reasons scrambled after) is the tell.
9. **Surface the hidden premise and the value judgment.** Most arguments leave a premise unstated; the weakness usually hides there. Name the value the author had to rank first.
10. **Steelman before you strike.** Re-express the opposing view so well its holder would endorse your version, then attack the strongest form.
11. **Name the fallacy.** Keep the high-frequency roster loaded (ad hominem, straw man, false dilemma, slippery slope, begging the question, post hoc, equivocation, appeal to questionable authority).

**PHASE 4 — QUANTIFY AND FORECAST**
12. **Base rate first, then adjust.** Find the reference class and anchor on how often things like this happen before you touch the vivid specifics.
13. **Put a number on it and decompose the impossible.** Translate "likely" into a probability. Fermi-ize a hard question into estimable parts.
14. **Update in small steps and keep score.** Nudge on diagnostic evidence; do not freeze and do not lurch. Log forecasts and grade them, because a forecast you never score teaches nothing.

**PHASE 5 — STRESS-TEST (red-team, call bullshit)**
15. **Interrogate the black box.** Audit the data going in and the results coming out. Ask "compared to what?", "out of what?", and "which average?" before trusting any statistic.
16. **Read the axes before the shape, and demand effect size with every p-value.** A tiny bias across a huge sample manufactures significance.
17. **Default to the prosaic and demand evidence proportional to the claim.** Rule out misperception, error, coincidence, and selection before reaching for the extraordinary. Ask what observation would prove the claim false.
18. **Prefer explanations that are hard to vary.** If an account could be reshaped to fit the opposite outcome just as comfortably, treat it as weak no matter how confident it sounds.

**PHASE 6 — THINK IN SYSTEMS**
19. **Read structure, not villains.** When a problem recurs, map the stocks, flows, feedback loops, and delays that make the behavior the system's default. Look for the system instead of the scapegoat.
20. **Aim high on the leverage hierarchy and audit your metrics.** Push on goals, rules, and information flows over mere numbers. Remember the system delivers exactly the indicator you specify.

**PHASE 7 — GENERATE ALTERNATIVES**
21. **Set a quota and suspend judgment.** Produce several readings even after a good one appears. Let a wrong-looking idea be a stepping stone. Use reversal, analogy, and a random input to break the pattern, then find the hidden option C.

**PHASE 8 — DECIDE UNDER UNCERTAINTY**
22. **Judge the decision, not the result.** Grade choices by what was knowable at the time. Frame the choice as a bet that names the alternative futures and the opportunity cost. Ignore sunk costs. Run a premortem and respect the unquantifiable tail.

**NEVER LIST (reasoning sins)**
- Never grade a decision by its outcome (resulting), or rewrite a prediction after the fact (hindsight).
- Never trust a vivid, coherent story as evidence; coherence is not proof, and detail lowers probability (the conjunction fallacy).
- Never accept a correlation as a cause without listing the rival explanations.
- Never read a single statistic without its denominator, sample size, and comparison group.
- Never let a number on the table (an anchor) set your estimate; generate an independent one.
- Never defer to a claim because it wears numbers, jargon, or a credential; scrutinize harder.
- Never judge a probabilistic forecast by which side of 50% it landed on (the wrong-side-of-maybe fallacy).
- Never honor a sunk cost or escalate commitment to justify a past choice.
- Never treat a small sample, a streak, or an extreme result as a stable signal (regression to the mean; the law of small numbers).
- Never accept a claim that forbids no possible observation; if nothing could refute it, it explains nothing.
- Never confront a charged decision in one frame; if your preference flips when reworded as a loss instead of a gain, you do not hold it.
- Never let your conclusion become part of your identity, or you will defend it instead of testing it.

### 3b. Structure for the reference files (3 to 4 tool libraries)

Each reference is a deeper toolkit the `SKILL.md` points to by task. Proposed names, contents, and feeder books:

**`references/biases-and-judgment.md`** — the bias catalog and the self-checks that counter it.
Must-keep: the two-system model and the two conditions for trusting expert intuition; attribute substitution and WYSIATI; anchoring, availability, representativeness, base-rate neglect, the conjunction fallacy; regression to the mean and the law of small numbers; the planning fallacy and the outside view; prospect theory, loss aversion, framing, the endowment effect, mental accounting; overconfidence decomposed into overprecision/overestimation/overplacement; hindsight and the bias blind spot; the scout's five thought-experiment tests (selective skeptic, double standard, outsider, conformity, status quo), the equivalent-bet test, and holding identity lightly; the five bounds (rationality, willpower, self-interest, awareness, ethicality); satisficing; Lewin's unfreeze-change-refreeze; Factfulness's ten instincts and their counters.
Feeders: Thinking, Fast and Slow; The Scout Mindset; Judgment in Managerial Decision Making; Rational Choice in an Uncertain World; Factfulness; Thinking in Bets.

**`references/argument-and-evidence.md`** — argument analysis, evidence grading, statistical skepticism, and rhetoric detection.
Must-keep: the full question checklist (issue, conclusion, reasons, assumptions, ambiguity, evidence type, rival causes, omitted information, alternative conclusions); premises-and-conclusion mapping, the enthymeme, validity vs. soundness, the four conditional forms (two valid, two fallacious), the valid deductive forms, counterexamples and reductio; the four-part authority test; steelmanning / Rapoport's Rules / principle of charity; the fallacy roster (ad hominem, straw man, false dilemma, slippery slope, begging the question, equivocation, post hoc, red herring, poisoning the well, Gish gallop, the politician's answer); the statistics defense kit (the five questions; mean/median/mode; sample size and response rate; selection, self-selection, and non-response bias; right-censoring; the unsupported denominator; gee-whiz graphs, axis manipulation, ducks and glass slippers; the semi-attached figure; percentage vs. percentage points and shifting base; p-value / large-sample trap; effect size; black-box reasoning; Brandolini's principle; paltering, weasel words, implicature); Dennett's bad-tool detectors (the "surely" alarm, rhetorical-question test, deepity detector, rathering, Occam's Broom); the four grounds for valid disagreement.
Feeders: Asking the Right Questions; A Rulebook for Arguments; Thinking from A to Z; How to Lie with Statistics; Calling Bullshit; Intuition Pumps; How to Read a Book.

**`references/forecasting-and-decisions.md`** — probability, calibration, forecasting discipline, and decision-making under uncertainty.
Must-keep: outside-then-inside view and reference-class forecasting; Brier scoring, calibration vs. resolution, fine-grained probabilities; Fermi-ization; small-step Bayesian updating (prior, likelihood, posterior), underreaction vs. overreaction; the wrong-side-of-maybe fallacy; fox vs. hedgehog; epistemic vs. aleatory uncertainty; signal vs. noise, overfitting, out-of-sample risk, accuracy vs. precision, chaos and forecast horizons, risk vs. uncertainty; the honesty test and the learning loop; decisions as bets, decision vs. outcome quality (resulting), fielding outcomes; decision trees and expected utility; ignore sunk costs and break escalation; simple linear models over intuition; aggregate small positive-EV bets; premortems, backcasting, and Ulysses contracts; the truthseeking pod and CUDOS norms; the possibilist stance.
Feeders: Superforecasting; The Signal and the Noise; Thinking in Bets; Rational Choice in an Uncertain World; Judgment in Managerial Decision Making; Factfulness.

**`references/systems-science-and-creativity.md`** — systems thinking, scientific epistemics, and lateral generation.
Must-keep: structure produces behavior; stocks and flows (the bathtub); balancing vs. reinforcing loops; delays and oscillation; limits-to-growth; resilience, self-organization, hierarchy; bounded rationality; the 12 leverage points (numbers up through transcending paradigms); the system traps and each one's way out (policy resistance, tragedy of the commons, drift to low performance, escalation, success to the successful, addiction/shifting the burden, rule beating, seeking the wrong goal); "you get what you measure"; the Baloney Detection Kit and falsifiability; the dragon in the garage; extraordinary claims / proportional evidence; default to the prosaic; pareidolia and selection effects; the demarcation gradient, probability over possibility, replication, the p-value trap, the expertise/trust triage, manufacture of doubt, false balance; good explanations are hard to vary, conjecture and criticism, reject inductivism, fallibilism, reach, the disjunction test, rational vs. anti-rational memes; the lateral toolkit (vertical vs. lateral, quota, challenge assumptions, suspended judgment, reversal, random stimulation, analogy, "po", fractionation, jootsing, turn-the-knobs); Hamming's career-method tools (back-of-envelope modeling; possible/likely/desirable; fundamentals over facts; the order-of-magnitude rule; know why something cannot be done; formalize a belief then attack both sides).
Feeders: Thinking in Systems; The Demon-Haunted World; The Beginning of Infinity; Nonsense on Stilts; Lateral Thinking; Intuition Pumps; The Art of Doing Science and Engineering.

Note on splitting: if four files run long, the natural seam is to keep biases-and-judgment and argument-and-evidence whole (they are the everyday core) and let forecasting-and-decisions and systems-science-and-creativity carry the heavier, task-triggered material.

### 3c. The per-book teaching library already exists

A full per-book teaching library already lives in `references/books/` (one file per book, the deep distillation behind each summary above). It should be **task-loaded, never read all at once.** The `SKILL.md` and the four reference files are the always-relevant operating layer; a per-book file gets pulled in only when a task calls for that book's depth (for example, load `thinking-in-systems` when diagnosing a recurring organizational failure, `calling-bullshit` when refuting a quantitative claim, `superforecasting` when building a calibrated prediction). This mirrors the design-philosophy pattern: lean manual up front, heavy library behind it, loaded by need.

---

## PART 4 — NAMED FRAMEWORKS, CHECKLISTS, AND NUMBERS TO PRESERVE

Keep these verbatim or near-verbatim. They are the memorable, portable anchors the skill should be able to recall on demand.

**Stances and frames**
- **Scout vs. soldier mindset** (accuracy-motivated vs. directionally-motivated reasoning).
- **The three questions:** "Is it true?" vs. "Can I believe it?" vs. "Must I believe it?"
- **Sponge vs. gold-panner; weak-sense vs. strong-sense critical thinking.**
- **Fox vs. hedgehog** (many small models vs. one big idea; foxes forecast better).
- **Possibilist** (calibrated, neither optimist nor pessimist).
- **Four income levels** (Factfulness: Level 1 ~$1-2/day, Level 2 ~$2-8, Level 3 ~$8-32, Level 4 >$32; most people are in the middle two).

**The bias list (core set)**
Anchoring; availability; representativeness and base-rate neglect; the conjunction fallacy (Linda); regression to the mean; the law of small numbers; the planning fallacy; loss aversion and framing; the endowment effect; mental accounting; confirmation bias; hindsight bias; the bias blind spot; overconfidence as overprecision/overestimation/overplacement; the halo and affect heuristics; the gambler's fallacy; escalation of commitment; the mythical fixed pie. Plus Factfulness's ten instincts: Gap, Negativity, Straight Line, Fear, Size, Generalization, Destiny, Single Perspective, Blame, Urgency.

**The scout's five thought-experiment tests**
Selective skeptic, double standard, outsider, conformity, status-quo-bias. Plus the **equivalent-bet test** for eliciting true confidence.

**The Fermi / base-rate method**
Outside view first (reference-class base rate), then inside view (case specifics). Fermi-ize: decompose an unanswerable question into estimable sub-questions, estimate each, recombine.

**Calibration and scoring**
Calibration (your 70% calls happen ~70% of the time) plus resolution (decisiveness toward 0 and 100 when warranted). **Brier score** (squared distance from outcome; 0 perfect, 0.5 coin-flip, 2.0 confidently wrong). The **wrong-side-of-maybe fallacy** (do not judge a probabilistic forecast by which side of 50% it landed on).

**Bayesian updating**
Prior, likelihood, posterior. State the prior explicitly; ask whether evidence is more expected under the hypothesis or its rivals; nudge, do not lurch. Watch underreaction vs. overreaction.

**Fallacy lists**
Informal: ad hominem, straw man, false dilemma, slippery slope, begging the question, post hoc, equivocation, red herring, poisoning the well, appeal to questionable authority, appeal to popularity, Gish gallop, the politician's answer, non sequitur, hasty generalization, tu quoque. Formal conditional fallacies: affirming the consequent, denying the antecedent (vs. the valid modus ponens and modus tollens).

**The statistics defense kit**
Huff's five questions (Who says so? How do they know? What's missing? Did somebody change the subject? Does it make sense?). Mean/median/mode; range and spread; sample size and response rate; selection / self-selection / non-response bias; right-censoring; the unsupported denominator and missing comparison; gee-whiz graph and axis manipulation; one-dimensional pictograph; semi-attached figure; percentage vs. percentage points; shifting base; effect size with every p-value; the p-value / large-sample trap; black-box reasoning (audit inputs and outputs); ducks and glass slippers; **Brandolini's principle** (refuting bullshit costs an order of magnitude more than producing it).

**The Baloney Detection Kit (Sagan)**
Independent confirmation; encourage debate; discount authority; generate multiple hypotheses; avoid over-attachment to your own idea; quantify; check every link in the chain; Occam's razor; demand falsifiability. Plus **extraordinary claims require extraordinary evidence** and **default to the prosaic explanation.**

**Good-explanation test (Deutsch)**
**Hard to vary:** every detail pinned to reality so that changing one piece breaks the fit. Plus the disjunction test (a bad explanation could equally fit the opposite outcome) and reach (a good explanation applies beyond the problem it was built for).

**Systems toolkit (Meadows)**
Stocks and flows; balancing vs. reinforcing loops; delays; limits-to-growth; resilience/self-organization/hierarchy; bounded rationality. **The 12 leverage points** (weakest to strongest): 12 numbers, 11 buffers, 10 stock-and-flow structure, 9 delays, 8 balancing loops, 7 reinforcing loops, 6 information flows, 5 rules, 4 self-organization, 3 goals, 2 paradigms, 1 transcending paradigms. **The system traps:** policy resistance, tragedy of the commons, drift to low performance, escalation, success to the successful, shifting the burden / addiction, rule beating, seeking the wrong goal. Principle: **the system delivers exactly the indicator you specify** ("you get what you measure").

**Decision toolkit**
Decision quality vs. outcome quality (**resulting**); decisions as bets; fielding outcomes (sort luck from skill); decision trees and **expected utility** (sum of probability x value); **ignore sunk costs**; aggregate small positive-EV bets; simple linear models beat expert intuition; **premortem** and **backcasting**; **Ulysses contracts** (precommitment); truthseeking pod with **CUDOS** norms (Communism of data, Universalism, Disinterestedness, Organized Skepticism); risk vs. uncertainty.

**Lateral-generation toolkit (de Bono, Dennett)**
Vertical vs. lateral; generation with a quota; challenge assumptions; suspended judgment; reversal; random stimulation; analogy; fractionation; "po"; **jootsing**; **turn all the knobs** on a thought experiment.

**Numbers worth keeping**
Loss aversion ~2:1 (losses hurt about twice as much as equal gains feel good). Brier score scale (0 / 0.5 / 2.0). Technical-knowledge half-life ~15 years (Hamming). The order-of-magnitude rule (a 10x change in any parameter usually creates qualitatively new effects). Random walk vs. directed walk (sqrt(n) vs. n distance over a career). The four income levels' dollar bands. "90 percent of everything is mediocre" (Sturgeon's Law). Tetlock: experts who claimed zero chance were wrong ~15% of the time.

**Reading and learning**
The four questions (what is it about, what is said, is it true, what of it); the four levels (elementary, inspectional, analytical, syntopical); suspend judgment until you understand; the four grounds for valid disagreement (uninformed, misinformed, illogical, incomplete); syntopical reading for surveying a contested question. Plus Hamming: fundamentals over facts, work on important problems, vision compounds.

---

## Build note for V1

The design-philosophy parallel is exact: `SKILL.md` carries the bold, phase-grouped operating manual (Part 3a) and nothing heavier; the four `references/` files (Part 3b) hold the deep toolkits; the `references/books/` library (Part 3c) is task-loaded depth. Part 1 is the spine the manual must encode, Part 2 is the judgment the skill must show when directives appear to conflict (scope to purpose), and Part 4 is the recall layer the skill should never lose. Write the whole thing in the house style: direct declaratives, no em dashes, no "not X but Y" antithesis scaffolding.
