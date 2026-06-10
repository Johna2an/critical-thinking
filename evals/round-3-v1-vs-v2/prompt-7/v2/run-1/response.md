# Pricing against the incumbent: how much to trust the model, and what to do

## The exact question

Two questions are tangled together. The descriptive one: how reliable is a regression that predicts a revenue jump from a 15% price cut? The prescriptive one: should the startup cut price? The advisors are answering different questions. Advisor one is grading the model in isolation. Advisor two is asking what the world does back. Both can be right at once, and that is the trap. A model can be statistically sound and still produce a terrible decision, because the model forecasts a world that the price cut itself destroys.

## What the model can and cannot know (the descriptive layer)

The regression was fit on 18 months of the startup's own sales data. Three structural limits cap how much weight it deserves, before any question of fit quality.

**It has almost no variation in the variable that matters.** A startup that has been selling for 18 months has run a narrow band of prices. To estimate the revenue response to a 15% cut, the data must contain price moves of roughly that size with observed demand on the other side. If past prices wandered by a few percent, the model is extrapolating a 15% move from a 2% to 3% range. That is out-of-sample prediction dressed as in-sample fit. The honest measure of a model is its error on data it never saw, and a 15% cut is exactly the regime the model never saw.

**The coefficient is a correlation, not a controlled experiment.** Past price changes were not random. They likely coincided with promotions, seasonality, new features, or competitive moves. The regression credits to price whatever those confounds also moved. Before accepting "lower price causes higher revenue," list the rival explanations: the months prices dropped may also have been the months marketing spent more or a competitor was out of stock. Unless price was varied cleanly, the coefficient absorbs all of it.

**Most decisively: the regression assumes the rest of the world holds still.** Every observation in those 18 months was generated while the incumbent priced as it did. The model has zero observations of the startup at a 15% discount with the incumbent responding. The careful-driver-with-no-drunk-trips problem applies exactly: a clean record across conditions you never faced is a sample size of zero for the condition you are about to create.

So even a perfectly fit, low-error, well-validated regression is answering "what happens if we cut price and nothing else changes?" The decision question is "what happens if we cut price and the incumbent reacts?" These are not the same question, and the data cannot bridge them.

## The strategic layer (the second advisor's point, made precise)

Pricing against a larger incumbent is a sequential game, not a forecast. Look forward and reason backward. The startup moves first (cuts 15%); the incumbent observes and chooses whether to match.

Anticipate the incumbent's best response. A larger incumbent usually has lower unit cost, more cash, and a bigger installed base to protect. Matching a small entrant's cut costs the incumbent margin on its large base, which sounds expensive, but conceding share to a price-aggressive entrant sets a precedent across its whole market and may cost more. The incumbent's likely move depends on whether the startup is a visible threat. If the cut is small and the startup is invisible, the incumbent may ignore it and the model's optimistic forecast partly survives. If the cut is large and public enough to move the incumbent's customers, matching becomes the incumbent's dominant response, and the model's predicted revenue jump evaporates because the relative price gap it assumed never materializes.

The equilibrium, not the wish, is where this settles. If the only stable outcome is "startup cuts, incumbent matches, both earn less at the same relative prices," the startup has handed margin to its own customers and triggered a price war it is least equipped to survive, since the larger player has deeper reserves. That is a prisoners-dilemma structure where the first move looks individually smart and the joint result is worse for the weaker party.

## Reconciling the two advisors

The model is a useful lens for one specific question: customer price sensitivity holding rivals fixed. Treat it as one window, weighted modestly, with wide error bars given the extrapolation and confounding above. The second advisor supplies the missing window: the competitive response that the model structurally cannot see. Run both. Where they disagree (they do) is exactly where the real uncertainty lives, and it lives on the strategic side.

## Recommendation

1. **Do not bet the company on the full 15% cut on the strength of the regression.** Its forecast is conditional on a frozen world the cut will unfreeze.

2. **Pressure-test the coefficient.** Check how much real price variation the data holds. If the historical range is far below 15%, discount the prediction heavily. List and rule out the confounds before believing price is the cause.

3. **War-game the incumbent explicitly.** Estimate the probability it matches, conditional on the cut's visibility and size. Ask what its margin and capacity let it sustain.

4. **Convert the bet into a cheap test.** Run a small, reversible price experiment in one segment or region, ideally below the incumbent's attention threshold, and read the actual elasticity and the actual response. A real out-of-sample observation beats a regression extrapolation.

5. **Compete where matching is hard.** A larger incumbent can match a price instantly but cannot match a narrow wedge, a feature, a segment, or a service the startup is built around. Price is the one move the stronger player copies fastest.

## Verdict

Trust the model as a rough read on customer price sensitivity, with wide error bars, and not as a revenue forecast for the post-cut world. The first advisor is answering a question the data can partly support; the second is answering the question that actually decides the outcome. Do not execute a 15% across-the-board cut on the regression alone. Test small and reversibly, model the incumbent's response, and prefer a wedge the incumbent cannot match instantly to a price the incumbent can match overnight.
