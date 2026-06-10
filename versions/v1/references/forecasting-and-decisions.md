# Forecasting and Decisions

A toolkit for estimating odds, scoring your own track record, and choosing well when the future is genuinely uncertain. The spine is simple: turn vague hunches into numbers, anchor those numbers on how often things like this happen, update them in small honest steps, grade yourself against reality, and judge your choices by the reasoning available at the time rather than by how they landed. Load this file when a task asks you to predict, estimate a probability, or make a consequential decision under uncertainty.

---

## Part 1, Framing a forecast

### Outside view first, then inside view (reference-class forecasting)

**What it is.** The **outside view** treats the case in front of you as one instance of a broader class and asks how often things like this happen in general. The **inside view** is the vivid, specific detail of this particular case. Reference-class forecasting means you find the class, read its base rate, and anchor on that number before you touch the specifics (Tetlock, Silver, Bazerman).

**Why it works.** The unique details of a case feel compelling and crowd out the statistical baseline, which is usually the better starting point. Insiders forecast from their own story and skip the failure rate of comparable efforts, which breeds optimism and planning failures (Bazerman). The base rate is a discipline that the rich, story-driven inside view will always try to override.

**How to apply.** Ask "what is this a case of?" and find the reference class (companies like this, projects like this, households like this). Read or estimate the frequency in that class. That number becomes your anchor. Only then adjust up or down for what is genuinely special about this case, and adjust modestly. The sequence is load-bearing: base rate first as the anchor, case detail second as the adjustment. Most people skip straight to the inside view and never recover a sensible starting point (Tetlock).

### Fermi-ization (decompose the impossible question)

**What it is.** Breaking a question that looks unanswerable into smaller sub-questions you can actually estimate, then recombining them. Named for Enrico Fermi, who estimated quantities like the number of piano tuners in Chicago by chaining rough estimates (Tetlock).

**Why it works.** Decomposition separates what is knowable from what is guesswork, exposes the hidden assumptions buried in a snap answer, and shows you which sub-parts actually drive the result. Estimating each piece and multiplying through beats staring at the whole and guessing.

**How to apply.** Split the question into a chain of factors. Estimate each factor with a base rate or an order-of-magnitude guess. Recombine. Then ask which sub-estimate the answer is most sensitive to and tighten that one. The act of building the chain is most of the benefit, the same way building a decision tree is most of the benefit of a decision tree.

### Translate vague words into numbers

**What it is.** Forcing every probabilistic judgment into an explicit number instead of leaving it as "likely," "a fair chance," or "a serious possibility" (Tetlock).

**Why it works.** Elastic phrases carry wildly different meanings to different readers. Intelligence analysts who all wrote "serious possibility" privately meant anything from heavily for to heavily against. Vague language also lets a forecaster claim victory whatever happens, because "a fair chance" can be stretched after the fact. Putting a number on it is metacognition: the act of converting "likely" into "75%" makes you examine how confident you actually are, and it makes the forecast gradeable. Be a bookie rather than a poet (Tetlock).

**How to apply.** Attach a probability to every claim that could turn out wrong. State predictions as ranges when you are unsure. A wide range is information about how little you know, so report it rather than hiding it (Silver, Duke).

---

## Part 2, Probability and updating

### Think in fine-grained probabilities

**What it is.** Using a probability dial with many gradations rather than three settings (yes, no, maybe). Superforecasters distinguish 63% from 65%, even 4% from 5% (Tetlock).

**Why it works.** This granularity is real skill. In the tournament data, rounding the best forecasters' estimates into coarser buckets measurably degraded their accuracy, while it barely touched ordinary forecasters. If you can reliably tell that an 11% event happens slightly less often than a 12% event, that resolution is worth cultivating. The opposite trap is granularity-as-bafflegab, fake precision used to impress, which the calibration test will eventually expose.

**How to apply.** Resist collapsing your estimate to a round number. When you genuinely sense a small difference, record it. Let your scored track record tell you how fine your real resolution is.

### Small-step Bayesian updating (prior, likelihood, posterior)

**What it is.** Start with a **prior** probability, ask how strongly the new evidence favors your hypothesis over its rivals (the **likelihood**), and revise to a **posterior**. Bayes's theorem combines a base rate with the diagnostic strength of the evidence (Silver, Tetlock).

**Why it works.** Writing the prior down first prevents two errors: ignoring the base rate entirely, and overreacting to a single flashy data point. Many famous analytic failures come from a strong prior that the analyst never made explicit. A forecast is a living judgment, a thermostat that you nudge as news arrives rather than a tattoo filed away until the outcome (Tetlock).

**How to apply.** Write your prior before you see the new data. Ask "how likely is this evidence if my hypothesis is true versus if it is false?" Nudge the estimate by a few points rather than flipping it. Revisit your numbers as fresh information arrives.

### Underreaction versus overreaction

**What it is.** The two failure modes that bracket good updating (Tetlock).

- **Underreaction** clings to a prior when genuinely diagnostic evidence should move it, usually from inattention or ego.
- **Overreaction** spins the dial hard on flashy but weak evidence and destroys a good forecast.

**How to apply.** Aim for many small adjustments. When tempted not to move, ask whether you are protecting an opinion. When tempted to lurch, ask whether the evidence is actually diagnostic or just vivid. Weight genuinely diagnostic information, ignore noise.

### The wrong-side-of-maybe fallacy

**What it is.** Judging a single probabilistic forecast by which side of 50% the outcome landed on. If a forecaster said 70% rain and it stays dry, observers call the forecast "wrong," forgetting that the same forecast assigned 30% to dry (Tetlock).

**Why it matters.** A single probabilistic call cannot be graded right or wrong; only a stack of them can be scored. Internalizing this protects well-reasoned forecasts that happened to land on the less likely side, and it removes the perverse incentive to retreat into vague language to dodge blame. Never judge a probabilistic forecast by which side of 50% it landed on (a core NEVER).

**How to apply.** Score forecasts in batches, never one at a time. When someone calls a 70% forecast that missed "a bad call," ask what their 30% events are supposed to do if not happen 30% of the time.

---

## Part 3, Scoring yourself

### Calibration versus resolution

**Calibration** asks whether your probabilities match reality: across all the times you said 70%, does it happen about 70% of the time? **Resolution** asks whether you are decisive: do you push confidently toward 0% and 100% when warranted rather than hiding at 50%? Both matter together. A forecaster who says 50% to everything is perfectly calibrated and useless. The best forecasters win on both (Tetlock, Silver).

**How to apply.** Log your probability estimates with timestamps. Later, group all your 70% calls and check how many resolved true. Correct any systematic over- or under-confidence. Weather forecasters are well calibrated precisely because they make tens of thousands of scored predictions and get fast feedback. Calibrate confidence on a scale rather than a switch: "I was 58%, now I'm 46%" is a cheap, honest move that all-or-nothing belief makes impossible (Duke).

### The Brier score

**What it is.** The squared distance between your stated probability and what actually happened, averaged over many forecasts (Tetlock).

**The scale (keep exact):**
- **0** is perfect.
- **0.5** is a coin flip.
- **2.0** is confidently wrong every time.

**How to apply.** Log forecasts with timestamps and score them in batches, so you see your real accuracy instead of your remembered accuracy. Hindsight bias quietly rewrites memory to make your past predictions look better than they were, so only a dated log defeats it.

### The honesty test and the learning loop

**The honesty test.** Judge a forecast more than just on whether it came true but on whether it was the genuine best estimate the forecaster could produce at the time (Silver). Incentives reward sounding confident, partisan, or dramatic, so a forecast can be dishonest even when it happens to come true. Commercial weather forecasts add a deliberate wet bias because viewers punish a missed rain more than a false alarm, which makes the forecast accurate-feeling and dishonest at once. Ask: "given what I knew, was this my real best estimate, or did I shade it for the audience, my team, or my reputation?"

**The learning loop.** A forecast is useful only when it is recorded, scored, and used to improve the next one (Silver). Feedback turns prediction into a falsifiable practice in the Popperian sense, where wrong calls teach something instead of being quietly forgotten. Write predictions down in advance, score them honestly, and revisit failures to find the bias that produced them. Pundits who never log their misses never improve; weather forecasters who score everything keep getting better.

---

## Part 4, Forecasters and their failure modes

### Fox versus hedgehog

**What it is.** Two cognitive styles, from Isaiah Berlin by way of Archilochus. The **hedgehog** organizes everything around one Big Idea and forces every problem through that lens, which makes them confident, quotable, and frequently wrong. The **fox** gathers information from many sources, holds several models at once, talks in "howevers" and "on the other hands," and stays comfortable with uncertainty (Tetlock, Silver).

**Why it matters.** Across Tetlock's long study, foxes forecast far better, on both calibration and resolution. A warning sign of hedgehog thinking: more information makes your forecasts more confident but no more accurate.

**How to apply.** Deliberately collect clashing viewpoints. Distrust any single explanatory framework. Treat your favorite theory as one tool among many rather than a master key. Take the dragonfly-eye view: fuse many partly independent perspectives into one sharper estimate, because aggregating diverse views cancels individual errors (Tetlock).

### The overconfidence check

Most experts assign far too little probability to outcomes outside their expectations. Tetlock found that experts who claimed zero chance were wrong roughly 15% of the time (keep exact). Treat "no chance" and "sure thing" as red flags. Widen your error bars and reserve real probability for surprises (Silver).

### Perpetual beta and scout mindset toward your own errors

The strongest correlate of becoming a superforecaster was not raw intelligence but commitment to self-improvement: treating every belief as a draft to be revised, which Tetlock calls **perpetual beta**. Own your mistakes quickly and hunt for the flawed assumption behind them rather than the bad-luck excuse. One forecaster's classic error was answering "what would I do?" instead of "what will this person do?", importing his own preferences into someone else's decision. Watch for the substitution your mind quietly makes when a hard question gets swapped for an easier one (Tetlock).

### Probabilistic thinking over fate thinking

Asking "why did this happen to me?" presumes events are meant to be. Probabilistic thinkers ask "how?" and treat outcomes as quasi-random draws from a distribution of once-possible worlds. The more a forecaster leaned toward "everything happens for a reason," the less accurate they were (Tetlock). The love-of-your-life trap shows the incoherence: the odds you would ever meet your partner were once tiny, yet you did, and the mind concludes it was destined, which would assign probability 100% to a near-zero event. Improbable things happen because some path had to be taken.

---

## Part 5, Signal, noise, and the limits of forecasting

### Signal versus noise

**Signal** is the underlying truth a forecaster wants to capture; **noise** is the random variation around it. The mechanism to watch: when information grows, noise grows faster than signal, so more data can make predictions worse while feeling more authoritative (Silver). Of any striking pattern, ask "would this still hold in fresh, out-of-sample data, or am I fitting wiggles?"

### Overfitting and out-of-sample risk

**Overfitting** is mistaking noise for signal by bending a model so tightly to past data that it predicts the future worse (Silver). A curve fit to every past point captures the noise as if it were structure. **Out-of-sample risk** is that models are reliable only inside the range of conditions present in their training data and have no idea what happens outside it. When a genuinely new regime arrives, past correlations can break entirely. The careful driver with twenty thousand safe trips has a sample size of zero for the situation he faces if he drives home drunk, because none of those trips was taken drunk (Silver). Prefer simpler models, test on data the model never saw, and ask whether a pattern has a plausible cause or is coincidence.

### Accuracy versus precision

**Precision** is how tightly clustered your estimates are; **accuracy** is how close they sit to the truth. A model can report numbers to several decimal places and still be badly wrong, and that false exactness breeds dangerous confidence (Silver). The shooter whose bullets land in a tight cluster far from the bullseye is precise and inaccurate, which is more dangerous than being visibly uncertain. The ratings agencies computed mortgage default risk to the second decimal and missed by orders of magnitude. Distrust any forecast whose confidence comes from the sharpness of its output rather than a track record of hitting the target.

### Chaos and forecast horizons

In systems that are both dynamic (their state feeds back into their future) and nonlinear (effects scale exponentially), tiny errors in the starting data explode into large divergences over time (Silver). Beyond some horizon, even a perfect model produces useless output. A barometric reading rounded in the third decimal flipped a weather simulation from clear skies to a thunderstorm. Respect forecast horizons (weather past about a week), run ensembles with slightly perturbed inputs to map the spread, and refuse to extend a forecast past the point where skill decays. Negative skill is real: a long-range forecast can do worse than just citing the historical average.

### Epistemic versus aleatory uncertainty

**Epistemic** uncertainty is ignorance that is knowable in principle: you could pry open the machine and study its gears. **Aleatory** uncertainty is irreducibly random: no amount of study removes next year's weather on a given day (Tetlock). Recognizing which kind you face tells you how hard to push. For cloud-like, aleatory questions, keep initial estimates in the cautious 35% to 65% band and move out only tentatively, because no cleverness beats the underlying randomness.

### Risk versus uncertainty

**Risk** is danger you can put a price on because the odds are known; **uncertainty** is danger whose odds you cannot reliably quantify (Silver). Models that quietly convert true uncertainty into precise-looking risk understate how exposed you are, and that misclassification was central to the 2008 collapse. Name which parts of a problem you can actually quantify and which you are merely guessing, and hold extra caution for the unquantifiable parts. Calibration disciplines the quantifiable middle; tail-humility guards the edges.

---

## Part 6, Decisions as bets

### Treat every decision as a bet

A bet is a choice about an uncertain future where you commit a limited resource (money, time, attention, reputation) against the alternatives you forgo (Duke). Framing a choice as a bet forces the implicit risk into the open and makes you name the alternative futures you are betting against. Before acting, ask "what am I actually betting on, and what are the alternative outcomes?" Every choice carries an opportunity cost; treating it as a bet prices that cost instead of ignoring it. The "Wanna bet?" gut check sharpens this: imagine someone you respect just offered to stake real money against the claim you stated so confidently, then inventory your evidence honestly (source quality, currency, plausible alternatives, what the challenger might know that you do not).

### Decision quality versus outcome quality (resulting)

**Resulting** is judging a decision by how it happened to turn out rather than by the information and reasoning available when you made it (Duke). In any domain with luck, a good decision can produce a bad result and a reckless one a good result, so outcomes are noisy samples and grading decisions by results trains you on the wrong signal. Getting home safely after driving drunk does not make it a good decision. When reviewing any decision, ask first "what did I know at the time, and what was a reasonable range of outcomes?" before you look at how it landed. Treat a bad result as a prompt to investigate, never as a confirmed verdict. Resulting's companion is **hindsight bias**, the after-the-fact sense that the outcome was inevitable, which treats a probabilistic result as if it had been certain. Never grade a decision by its outcome, and never rewrite a prediction after the fact (a core NEVER).

### Fielding outcomes (sort luck from skill)

**Fielding** an outcome means deciding, for each result, how much was caused by your decision and how much by luck, then routing the lesson accordingly (Duke). Self-serving bias fields our wins as skill and our losses as bad luck, and reverses it for other people, which blocks learning. Nick the Greek lost for years and blamed luck every time, never updating, and was eventually ruined. Experience teaches only the people who field outcomes honestly. For each result, deliberately consider the opposite attribution from your gut: when you win, ask what luck helped; when you lose, ask what you controlled.

### Outcome-blind analysis

Present a decision for review up to the choice point and withhold how it turned out, so reviewers cannot reason backward from the result (Duke). Knowing the outcome is itself a conflict of interest that triggers resulting; physicists use outcome-blind analysis because even objective data gets sliced to fit a known hypothesis. The same shielding applies to beliefs: tell people your conclusion and they will work to justify it for you, so describe a past decision without the ending and without telegraphing what you already believe.

---

## Part 7, Decision tools

### Decision trees and expected utility

Lay a decision out as a tree: choices on the left, chance events and their probabilities in the middle, consequences with values on the right. The **expected utility** of an option is the sum of (probability x value) across its consequences, and the rational choice maximizes that sum (Hastie & Dawes). The discipline of building the tree is most of the benefit, because it forces you to decide what to include, what to exclude, and how to quantify uncertainties and values you would otherwise leave vague. Even a rough four-node tree usually beats unaided thinking, which elaborates one favored branch and ignores the rest. A normative scaffold sits behind this: define the problem, identify the criteria, weight them, generate alternatives, rate each alternative on each criterion, then compute the weighted total and pick the highest (Bazerman). Most real errors trace to a skipped step, often solving the wrong problem or generating too few alternatives.

### Ignore sunk costs and break escalation

A sunk cost is money, time, or effort already spent and unrecoverable. Because it attaches equally to every remaining option, it cannot discriminate between them, so it is irrelevant to what you should do now (Hastie & Dawes, Bazerman). People honor sunk costs anyway ("we've invested too much to quit"), driven by an overgeneralized "waste not" rule, and this fuels **escalation of commitment**, throwing good money after bad to justify a prior choice. Draw the tree starting from today; the sunk amount appears on no future branch. Judge every continuation as if you arrived fresh: "knowing what I know now, would I start this from zero?" Separate the person who can stop a project from the person who launched it, and pre-commit to kill criteria before you are emotionally invested. Never honor a sunk cost or escalate to justify a past choice (a core NEVER).

### Simple linear models over intuition

For repeated predictive judgments (admissions, diagnosis, risk), a simple linear formula that weights a few valid cues consistently usually beats expert intuition (Hastie & Dawes). The reason is reliability: a formula applies the same weights every time, while a human applies different weights depending on mood, order, and fatigue, adding noise without signal. Even unit-weight models often outperform experts, because most of the accuracy lives in picking the right variables and combining them consistently. When you make the same kind of judgment over and over, list the few cues that genuinely predict the outcome, weight them consistently, and trust the tally over your gut feeling about each case.

### Aggregate small positive-EV bets

Risk aversion makes people reject individually attractive gambles that would clearly be worth taking in bulk (Bazerman). Samuelson's colleague refused one favorable coin flip but happily took a hundred, because aggregation shrinks the variance while keeping the edge; loss aversion overweights the single downside in isolation. For the many small, repeated, favorable risks in life and business, decide by expected value and treat them as a portfolio. Reserve special risk-aversion for the rare large, one-shot decisions, and analyze those from multiple frames.

---

## Part 8, Decision engineering (work around your own irrationality)

You cannot reliably out-think your own biases by willpower, because the bias blind spot is real and grows worse with intelligence, since skilled reasoners build better rationalizations (Duke). Build external scaffolding instead.

### Premortems and backcasting

**Backcasting** starts from a vivid future success and works backward to the steps that produced it. The **premortem** starts from a vivid future failure ("it's a year from now and this flopped, why?") and works backward to what went wrong (Duke). Optimism makes us underweight failure paths; imagining the failure as already real licenses the mind to surface obstacles it would otherwise suppress, and it counters hindsight bias by mapping the branching tree of futures before any one branch becomes "the obvious outcome." For any meaningful plan, run both, assign rough probabilities, and build safeguards against the likely failure modes.

### Ulysses contracts (precommitment)

A **Ulysses contract** is a binding decision made in a cool, rational state that constrains your hot, in-the-moment future self (Duke). The deliberative planning self and the reactive executing self are effectively different agents, so tie your own hands so the reflexive self cannot sabotage the deliberative self's intentions. Set decision rules, defaults, and stop-losses in advance: predefined exit prices, removing temptations from reach, deciding once while calm so the heated moment has no discretion to override you.

### The truthseeking pod and CUDOS norms

A **truthseeking pod** is a small group (at least three, so two can disagree and one can referee) that explicitly agrees to prize accuracy over comfort and rewards honest, well-calibrated reasoning rather than agreement or flattery (Duke). It catches what you cannot de-bias alone. The charter borrows Robert Merton's **CUDOS** norms:

- **Communism** of data: share all relevant detail; more is more. Your own hesitation to volunteer a fact flags the most important fact.
- **Universalism**: judge a claim on its merits rather than its source. Strip the source before evaluating.
- **Disinterestedness**: guard against conflicts of interest, including hidden ones. Disclose your stake.
- **Organized Skepticism**: welcome dissent and challenge, civilly. Reward whoever best argues the position they personally oppose.

Outside the pod, lead with what you genuinely agree with, then add your point with "and" rather than negating with "but," because people stay open to dissent that supplements and grow defensive toward dissent that negates.

---

## Part 9, The possibilist stance

A **possibilist** neither hopes without reason nor fears without reason, and commits only to the data, updating as it changes (Rosling). Optimism and pessimism are both pre-commitments that filter evidence; the possibilist holds opinions proportional to evidence and prefers a few opinions that are right to many that are wrong. Two habits support it:

- **Separate level from trend.** Report the current level (still bad) and the direction of change (getting better) as two separate facts, so you avoid both complacency and despair. A situation can be bad and improving at once, like a premature baby in an incubator whose vital signs are critical but climbing (Rosling).
- **Use the four income levels** instead of a rich-poor binary (keep exact): Level 1 roughly $1-2/day, Level 2 around $2-8/day, Level 3 around $8-32/day, Level 4 above $32/day, with most of humanity in the middle two. Thinking in four levels dissolves a large share of proportion errors before they start.

The possibilist stance closes the loop with the rest of this file: calibrated probability in the quantifiable middle, humility at the unquantifiable tail, and opinions held only as tightly as the evidence earns.
