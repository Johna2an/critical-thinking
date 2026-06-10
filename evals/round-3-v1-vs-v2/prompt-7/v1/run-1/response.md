# Pricing against the incumbent: how much to trust the model, and what to do

## Frame the question

The team built a model to answer "what happens to *our* revenue if we cut price 15%?" The model answers a narrower question: "given how our buyers behaved over the past 18 months, holding everything else fixed, how does our revenue covary with our list price?" The gap between those two questions is the whole problem. The model estimates own-price elasticity in a world where the incumbent did not react. The decision lives in a world where it might.

This is a prescriptive choice (what should we price), and it hinges on a forecast of a strategic actor's behavior. That second piece is the part the regression structurally cannot see.

## How much to trust the model

The regression is real evidence, and the first advisor is right that own-price demand response is the most directly measured thing on the table. But four structural limits cap how far that evidence carries.

1. **Out-of-sample extrapolation.** A 15% cut is a large move. If the historical price varied only within a few percent, the model is interpolating a regime it never observed. Elasticity estimated on 2% wiggles does not reliably predict a 15% jump, where competitor attention, customer re-evaluation, and channel dynamics all switch on. The careful-driver-with-zero-drunk-trips problem applies: 18 months of safe data may contain zero observations of the situation actually being decided.

2. **The held-fixed assumption is the load-bearing premise.** Every regression coefficient means "with all else equal." The advisor who says "trust the model" is silently assuming the incumbent's price stays put. That is the suppressed premise, and it is exactly where the weakness hides. The model is not wrong about elasticity; it is mute on reaction.

3. **Omitted-variable and reverse-causation risk.** Did past price changes happen to coincide with promotions, new features, or seasonality? If a past cut rode alongside a marketing push, the regression credits price for revenue that marketing earned. Eighteen months also means roughly one to two seasonal cycles, a thin sample for separating price effect from calendar effect.

4. **Confidence comes from fit, not from a track record against reality.** The model has never been scored on an actual 15% move. A tight R-squared is precision, not accuracy. It tells us the line fits past dots, not that the next dot lands where the line points.

Net: I trust the model as a conditional estimate ("if the incumbent holds, a cut probably lifts our revenue") at maybe 60-70% confidence, and I trust it as an unconditional prediction of the real outcome much less, perhaps 25-35%, because the binding question is the competitor's response and the model is silent on it.

## The second advisor and the missing branch

The "incumbent will match" claim deserves a steelman and then a base-rate check, not automatic agreement. Steelmanned: a larger incumbent usually has lower unit cost, more cash, and a strong incentive to deny a small rival a price-based foothold, so matching is cheap insurance for them and ruinous for us if we modeled a response that never comes.

But "will simply match" is itself a forecast with its own base rate. Incumbents do not always match. They are slower (org friction, channel contracts, fear of triggering a margin war across their whole book), and a 15% cut on a small player's volume may sit below their notice threshold. Pricing studies and the structure of dominant-firm behavior suggest large incumbents match aggressively when the entrant is visible and threatens core volume, and ignore moves that are small, segment-specific, or framed as something other than a headline price cut. So the honest reading is a probability, not a certainty: meaningful incumbent response is plausibly 40-60% for a visible across-the-board 15% cut, lower if the cut is disguised or narrowly targeted.

Both advisors committed the same error from opposite ends: each picked one branch of the tree and ignored the other. The decision is a four-cell payoff: {we cut, we hold} times {incumbent reacts, incumbent holds}.

- Cut and incumbent holds: best case, model roughly right, we gain share.
- Cut and incumbent matches: we lose margin, keep roughly the same share, and may trigger a war we lose on balance sheet depth.
- Hold: we forgo the upside but avoid provoking a response.

## Recommendation

Do not bet the company on a coefficient that assumes a passive competitor. Convert the irreversible bet into a cheap test.

1. **Reframe to lower the reaction probability.** A quiet, segment-specific or bundled cut (a single channel, a new-customer tier, an annual-prepay discount) captures much of the demand upside while staying under the incumbent's match threshold. This deliberately attacks the variable that actually decides the outcome.

2. **Test before you commit.** Run the 15% cut in one region or cohort for a fixed window. This generates the out-of-sample data the model lacks and reveals whether the incumbent even notices, at a fraction of the cost of a full rollout. Pre-commit to kill criteria (a margin floor, a defined response from the incumbent) before launching, so the in-the-moment self cannot rationalize escalation.

3. **Run a premortem on the match branch.** Assume it is a year out and the cut failed. The most likely cause is a price war we could not outlast. Size that downside explicitly against our cash runway; if a matched war is survivable, the bet is more attractive, and if it would be fatal, tail-humility says avoid the broad cut regardless of expected value.

**Verdict:** Trust the model as a conditional demand estimate, not as a revenue prediction. Treat the incumbent's response as the decisive uncertainty and price it as a probability rather than accepting either advisor's certainty. Capture the upside through a small, hard-to-match, reversible test with predefined exit rules, and reserve the full 15% across-the-board cut only if the test shows the incumbent stays passive and a matched war is survivable.
