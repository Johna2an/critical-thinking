# Pricing against the incumbent: how much to trust the model

## What the regression actually estimates

The model was fit on 18 months of the startup's own sales data. That is the core limitation. A regression on observational sales history estimates how revenue *moved with price in the past*, under the conditions that prevailed in the past. It does not estimate the causal effect of a deliberate 15% cut announced to the market today. Three gaps separate the two:

1. **Range and extrapolation.** If past price changes were small (a few percent of promotional discounting), a 15% cut sits at or beyond the edge of the observed data. The predicted "jump" is then an extrapolation, and the confidence band there is wide whether or not the model reports it.

2. **Confounding and endogeneity.** Prices in the past were probably set in response to demand conditions: cut when slow, held when busy. That correlation contaminates the slope. The model may be reading "we discounted in soft months and volume recovered anyway" as "discounts cause volume." Unless someone ran a clean experiment, the elasticity estimate is biased by an unknown amount and sign.

3. **The Lucas-critique problem.** Every historical observation was generated in a world where the incumbent was *not* reacting to this specific move. A regression on your own data structurally cannot see competitor response, because that response was never in the sample. The model is silent on the exact thing the second advisor is worried about. Silence is not evidence of safety.

So the honest read: the model is a reasonable description of demand under quiet, ceteris-paribus conditions, and a weak guide to a strategic price war. Trust it for direction (lower price probably lifts our units somewhat), distrust it for magnitude, and treat it as uninformative about competitor reaction.

## Will the incumbent match?

This is the decisive variable and it is a judgment call, not a data point. Quantify it as a fork. Suppose the model says a unilateral 15% cut raises revenue +30%. Decompose the expected outcome:

- **If the incumbent does not match** (probability p): you gain share at the lower price. Something close to the model's optimistic case, discounted for the biases above. Call it +15% to +25% revenue.
- **If the incumbent matches** (probability 1−p): relative prices are unchanged, you simply earn ~15% less on roughly the same volume. Revenue falls, maybe −10% to −15%, and you have trained the market to a lower price you cannot easily reverse.

Whether to cut hinges on p and on relative cost structure. A larger incumbent usually has lower unit costs and deeper reserves, so it can sustain a matched low price longer than a startup can. That asymmetry means a price war is the startup's worst terrain even if it "wins" share temporarily. The incumbent is most likely to match when the startup is small enough to ignore (cheap to crush) or large enough to threaten (must be answered) and when the product is a close substitute. It is least likely to match when matching cannibalizes a much larger installed base, i.e., the cut would cost the incumbent far more in absolute dollars than it costs the startup. That last case is the startup's real opening.

## Recommendation

1. **Do not bet the company on the regression.** Treat its number as an upper bound on the favorable scenario, not a forecast.

2. **Test before committing.** Run a real price experiment in one region or segment, or a time-limited promotion, to get a clean elasticity and, critically, to observe whether the incumbent reacts. A two-to-four week probe converts the open question (will they match?) into observed behavior at low cost.

3. **Prefer differentiation over a head-on cut.** If the products are close substitutes, a list-price war favors the incumbent's cost advantage. Better levers: segment-specific pricing, bundling, a feature or service the incumbent cannot easily copy, or a narrower beachhead where the incumbent's response would be disproportionately expensive for it.

4. **Pre-decide the exit.** If you do cut and the incumbent matches, know in advance whether you hold (and burn cash) or retreat (and absorb the brand damage of raising price back).

**Verdict:** Trust the model as a rough demand sketch, not as a strategy. The second advisor has identified the variable the model is blind to, and that variable, not the regression, should drive the decision. Probe with a small live test, lean toward differentiation rather than a symmetric price cut, and only cut broadly if the test shows the incumbent will not, or cannot affordably, match.
