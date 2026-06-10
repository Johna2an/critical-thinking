# Tripling the short-premium book: a risk officer's reasoning

## What is actually being asked

Leadership reads "19 wins in 20 quarters" as proof of skill and wants 3x the capital behind it. The real question is not "has this made money?" (yes) but "what is the loss distribution of this strategy, and can the firm survive the bad draw at 3x size?" Those are different questions, and the track record speaks loudly to the first while saying almost nothing about the second.

## The structural problem: this payoff is built to win often and lose big

Selling deep out-of-the-money options collects a small, near-certain premium most of the time and pays a large, rare loss when the market gaps through the strike. The 19/20 hit rate is a feature of the payoff shape, not evidence the strategy is safe. A short-premium book that won 19 of 20 quarters and a short-premium book that is one tail event from a 30x-premium loss look identical in the win-column. The win frequency and the danger live in different places.

This is the turkey problem. A thousand days of being fed raises the turkey's confidence in human kindness right up to the afternoon before the holiday. The length of the calm record is doing the work of reassurance precisely when it should not. Twenty quarters (five years) likely has not contained a true tail event for whatever underlying is being sold.

## Quantifying what the record can and cannot tell us

Assume the strategy targets roughly a 95% per-trade win probability (typical for deep OTM premium selling). Over 20 quarters with many trades inside each, 19 profitable quarters is exactly what you would expect even if the strategy has zero edge beyond harvesting risk premium. So:

- The record is consistent with a genuine edge.
- It is equally consistent with a fairly-priced bet that has not yet met its loss.
- A 20-quarter sample contains essentially zero independent observations of the event that matters. If the ruinous gap arrives once a decade, this sample has a sample size of zero for it.

Survivorship sharpens this. Across many desks running short-vol, some produce clean five-year records by chance alone, and those are the ones leadership notices and wants to scale. The desks that ran the same method and blew up are not in the room. Before crediting this record as skill, I would ask where the comparable desks that used this method and were eliminated have gone (LTCM, Amaranth, the February 2018 "Volmageddon" short-vol ETPs, numerous option-writing funds in March 2020).

## The asymmetry tripling makes worse

Premium income scales linearly with size. Tail loss also scales with size, but the firm's capacity to absorb it does not. At current size one bad quarter is survivable, which is the only reason the strategy looks robust. Triple the notional and the same tail event that was a drawdown becomes potential insolvency. Short options carry unbounded (or very large) downside against a capped upside, so this is a fragile exposure in the precise sense: it loses far more from a big shock than it gains from calm. Tripling moves it further toward the fragile corner, not toward more income.

## Resulting and the incentive to distrust

Leadership is grading the decision by its outcome. Good outcomes from a coin-flip-grade method get fielded as skill. I would also flag skin in the game: a desk paid on premium booked each quarter is rewarded for selling more tail risk regardless of whether the firm can survive it. The incentive points one way.

## What I would require before approving anything

1. **A stress test against named historical gaps,** not a Gaussian VaR. Show the P&L at 3x through October 1987, 2008, February 2018, March 2020, and a hypothetical overnight gap larger than any in the sample. Gaussian VaR understates this; the variable lives in the wild domain where the tail rules.
2. **A hard ruin constraint.** Size so that no single plausible event removes the firm from the game, even if that caps the strategy below 3x. Survival overrides expected return.
3. **Defined tail hedging** (long deep-OTM protection, defined-risk spreads, or a position cap) so the downside is a loss we can name in advance.
4. **A pre-committed kill switch and exposure limit** set while calm, owned by risk rather than the desk, with mandatory de-grossing triggers.
5. **Capital and liquidity proof** for margin calls during a gap, when correlations go to one and financing dries up.

## Verdict

Do not approve a 3x scale-up on the track record. The record measures how often the strategy wins, which the payoff shape guarantees, and it does not measure the loss that decides the firm's survival. I would approve a smaller, hedged increase (on the order of 1.3x to 1.5x) only after the stress tests above clear and a defined-risk structure with a hard exposure cap is in place. Manage the exposure rather than forecast the gap. The question for leadership is not how likely the bad quarter is, it is whether the firm survives it at the proposed size, and at 3x the honest answer today is that we do not know.
