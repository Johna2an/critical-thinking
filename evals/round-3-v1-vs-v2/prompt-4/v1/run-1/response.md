# Tripling the short-premium book: a risk officer's read

## The exact question, and the swap to catch

Leadership is asking "the track record is excellent, so should we triple the size?" The easy question my mind wants to answer instead is "has this strategy made money?" It plainly has, 19 of 20 quarters. That is the substitution to refuse. The real question is whether the strategy's payoff shape, scaled 3x, sits inside the desk's loss-absorbing capacity, and whether 20 quarters of wins is evidence of skill or evidence of an unsampled tail.

This is a prescriptive call (what should we do), and it is high-stakes, hard to reverse once a position is on, and numeric. It earns full deliberation, not a fast yes.

## What the track record actually is

Selling deep out-of-the-money options is a short-volatility, negatively-skewed payoff: you collect small premiums most periods and pay a large amount in the rare period the market moves through the strikes. A win rate of 19/20 is exactly what this payoff produces even when the strategy is mediocre or unprofitable in expectation. The wins are frequent and small; the loss is infrequent and large. High win frequency is a property of the structure, not proof of edge.

Twenty quarters is five years. If the true frequency of a blow-up event is once every six to ten years (a 2015 franc, a 2018 Volmageddon, a 2020 March, a 2022 gilt move), then a clean five-year run is unremarkable. Under a binomial read, if the per-quarter probability of a tail loss is roughly 5%, the chance of going 20 quarters with at most one loss is high. The clean record and a strategy with no edge are fully consistent. Silver's point applies directly: the careful driver with twenty thousand safe trips has a sample size of zero for the trip he takes drunk. This book has a small sample for the regime that matters.

## Outside view first

Reference class: institutional short-premium and short-vol programs. The base rate is unkind. LTCM, Niederhoffer (twice), the 2018 inverse-VIX products, numerous "steady income" option-selling funds. The recurring pattern is many years of smooth returns ended by a single quarter that erases multiples of the cumulative gains. The reference class says the modal outcome is "works until it catastrophically does not," and the trigger is usually a correlated move plus a liquidity gap. I anchor on that base rate before crediting anything special about this desk.

## The traps leadership is running

- **Resulting.** Grading the strategy by its outcomes rather than by the reasoning and risk available at the time. A 19/20 outcome can sit on top of an uncompensated risk.
- **Hindsight and the illusion of validity.** Five clean years feels like proven skill. Calibration must come from the payoff structure, not from how convincing the streak feels.
- **The one loss is the data point.** The single losing quarter is the only in-sample observation of the tail. Its size and cause matter more than all 19 wins combined. What was the worst intra-quarter drawdown, not just the quarterly print?
- **Anchoring on "triple."** The number 3x is leadership's anchor. I generate sizing independently from loss tolerance, then compare.

## Why 3x is non-linear, not 3x

Tripling notional does not triple risk. Deep-OOTM short options carry convexity: in a large move, losses grow faster than linearly as strikes are breached together and gamma accelerates. Tripling size also triples the liquidity you must buy back into a market that is gapping, when bid-ask widens and dealers pull. The tail at 3x can be well beyond 3x the tail at 1x.

## What I would require before approving anything

1. **A loss-driven size, not a track-record-driven one.** Compute the loss under a defined stress (for example the worst historical move in the underlying plus a volatility shock and a liquidity haircut). Size so that this stressed loss stays inside a pre-agreed capital limit. If 3x breaches that limit, 3x is rejected on arithmetic, independent of the record.
2. **The premortem.** It is two years out and the book has blown up. Write the story. The likely script: a correlated gap through the strikes, margin calls, forced unwind into a one-sided market. Build the safeguard before sizing up.
3. **A Ulysses contract.** Pre-set hard stop-loss, a maximum aggregate vega/gamma limit, and a delta-hedging or tail-hedge mandate (buy further-OOTM wings, accept the cost). Decide the kill criteria while calm.
4. **Honest decomposition of the edge.** Is the premium fair compensation for the tail (no edge, pure risk transfer) or is there a real mispricing? If nobody can articulate the source of edge, the income is rent on hidden risk.
5. **Separate the launcher from the approver,** and review the book outcome-blind.

## Verdict

Do not approve a 3x increase on the track record. The record is the expected appearance of a negatively-skewed bet, and five years undersamples the regime that defines the strategy's true risk. I would approve a staged increase, on the order of 1.25x to 1.5x, conditional on tail hedges, a stress-test-derived capital limit, hard stop-losses, and a stated edge thesis. Revisit only after the book has survived at least one genuine stress event at the new size with the safeguards live. Scale to the tail you can survive, not to the streak you have enjoyed.
