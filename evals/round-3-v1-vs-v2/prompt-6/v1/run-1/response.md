# Two camps, one decade of data: who is right and how would we know

## What the journalist actually asked

There are two questions hiding inside one. The first is descriptive: did the policy cause the outcomes we observed? The second is meta: how could anyone settle a dispute where both sides see the same numbers and split. The honest headline is that "who is right" is often not answerable from one decade of one country's data, and the more useful story for a journalist is *why* it is not, and what would change that.

## Why the same data yields opposite verdicts (and why bias is not the main culprit)

Start by resisting the easy substitution. "Who is biased?" feels concrete and morally clear, so the mind answers it instead of the harder "what does this evidence actually support?" Bias is real, but the structure of the problem produces disagreement on its own, even among scrupulous analysts.

A decade of policy data is observational, not experimental. The policy was not randomly assigned to some places and withheld from others by coin flip. That single fact opens the door to every rival cause. When camp A says the policy caused the improvement, the live alternatives are: the outcome was already trending that way before the policy (a pre-existing trend), something else changed at the same time (a confounder such as a commodity-price swing or a parallel reform), reverse causation (the policy was passed *because* the problem was already easing), or simple regression to the mean after an extreme starting year.

The deeper machinery is the **counterfactual**. To know whether the policy worked you must compare what happened against what *would* have happened without it. That second world is never observed. So each camp builds it by assumption, and the choice of assumption is most of the result. The decisive moves are almost always the same handful:

- **Comparison group.** Who is the "as if no policy" baseline? Pick a different control region or control period and the verdict can flip.
- **Counterfactual trend.** Did the pre-policy trajectory continue flat, or was it already bending?
- **Outcome definition and window.** Which metric, measured how, over which years (the system delivers the indicator you specify).
- **Controls included.** Each added or dropped covariate is a fork in the analysis.

Researcher degrees of freedom mean a single dataset is not one analysis but a garden of forking paths. A motivated analyst need not fake anything; reasonable-looking defaults, chosen with the conclusion already in view, get there honestly enough to publish. This is why "each accusing the other of bias" is both partly true and a distraction.

## What would actually move the needle

The discriminating test is the same one I would apply to any causal claim: prefer explanations that are **hard to vary** and hunt the evidence that separates rival causes. Concretely:

1. **A credible counterfactual.** A randomized rollout if one exists, otherwise a quasi-experiment: a difference-in-differences against a genuinely comparable control that moved in lockstep *before* the policy, a regression discontinuity at a sharp eligibility cutoff, or a synthetic control built from a weighted basket of untreated units. Each carries an assumption you can state and inspect.
2. **Pre-trends.** If the treated and control groups tracked each other for years before the policy and diverged only after, the confounding story gets much harder to vary. Divergence that started before the policy kills the causal claim outright.
3. **Dose-response and timing.** Did the effect scale with how strongly the policy bit, and appear when it took effect rather than before?
4. **A specified mechanism.** A named pathway makes a prediction that can fail; correlation plus a mechanism the data could have refuted beats correlation alone.
5. **Out-of-sample replication.** The same policy in another time or place, the strongest evidence of all because it is the one thing a story tuned to this decade cannot be reshaped to fit.
6. **A pre-registered falsification test.** Ask each camp: what observation would make you concede you are wrong? A confident "nothing could" is the strongest tell that the claim explains nothing.

The honesty-test version for the journalist: ask each side, before showing them the answer, to name the analysis they would have run if they had no stake, and what result would change their mind. The gap between that and what they published is the bias signal.

## Verdict

I would not crown a winner from one decade of observational data, and I would tell the journalist that confident certainty on either side is the least credible position in the room. The verdict is conditional and probabilistic: the policy probably worked *if* the treated and control groups shared a flat pre-trend, the effect scaled with dose and arrived on schedule, the result survives reasonable changes in controls and window, and it replicates elsewhere. Absent those, the disagreement is the data telling you it cannot yet decide. The reporter's strongest line is not "expert A is right" but "here are the three modeling choices that flip the answer, here is which choice each camp made, and here is the test that would settle it." That reports the real state of knowledge and keeps the uncertainty where it belongs.
