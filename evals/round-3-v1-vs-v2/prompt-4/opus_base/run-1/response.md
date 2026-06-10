# Risk Review: Tripling Allocation to the Short-OTM-Options Strategy

## The core problem with the headline number

"Profitable in 19 of 20 quarters" is exactly the track record a short-volatility strategy produces right up until the quarter that erases everything. Selling deep out-of-the-money options is a structurally short-gamma, short-vega, negative-skew payoff: you collect small premiums most of the time and pay out rarely but catastrophically. A 95% win rate is not evidence of skill. It is the expected signature of the payoff shape. The relevant question is not how often the desk won but how the single losing quarter compares to the 19 winning ones, and what a true tail event (not yet observed) would cost.

So I would not approve a 3x increase on the track record alone. The track record is the least informative part of the case.

## What I would quantify before any decision

1. **Loss asymmetry.** Compare the magnitude of the one losing quarter against the median winning quarter. If a typical win is +1.5% and the single loss was -8%, the strategy already shows the negative-skew tell, and we have simply not yet hit a real tail.

2. **20 quarters = 5 years, and which 5 years?** This window likely contains no genuine left-tail shock at full severity. I would ask what regimes are represented. If the sample sits inside a low-vol, trending or mean-reverting environment, the sample is not representative of the distribution we are underwriting.

3. **Sharpe is the wrong lens.** Short-premium strategies show flattering Sharpe ratios because variance understates fat-tailed downside. I would require a maximum-loss / tail metric instead: stressed loss at a 99th-percentile move, gap-risk scenarios, and the cost of being unable to delta-hedge when liquidity vanishes.

## Stress tests I would require

- **Historical replays:** Feb 2018 (volpocalypse / XIV), March 2020, Aug 2024 yen-carry unwind, 1987-magnitude gap. What does the current book lose, marked-to-market and at liquidation?
- **Gap-through-strike:** the defining risk of deep-OTM shorts is the underlying jumping past strikes overnight when hedging is impossible. Model a single-session gap, not a smooth path.
- **Liquidity and margin spiral:** in a shock, IV spikes, margin calls hit, and forced unwinds happen at the worst prices. Test whether 3x size can even be exited.

## The non-linearity that leadership is missing

Tripling notional does not triple risk. Tail exposure and margin demand scale faster than linearly once you account for liquidity depth and the firm's ability to delta-hedge a larger book in a stressed tape. At 3x, the desk may move from "absorbs a tail loss" to "the tail loss threatens the firm." That crosses from a desk-level risk to a survival-level risk, which is a different decision owner entirely.

## My recommendation

**Do not approve the 3x as requested.** Counter-propose:

1. **Phase it.** Approve a smaller step (for example 1.5x) contingent on the stress-test package above, then review after two quarters including any vol event.
2. **Hard limits before any increase:** a defined maximum tail loss (firm risk budget, e.g. capped at X% of capital under the 99th-percentile scenario), position limits per strike/expiry, and a kill-switch / stop on aggregate Greeks.
3. **Mandatory tail hedge:** require buying further-OTM wings or VIX/futures hedges so the payoff is a spread, not a naked short. This caps the catastrophic leg at a known cost and converts an unbounded loss into a bounded one.
4. **Capital and margin headroom:** confirm the firm can meet a stressed margin call at 3x without forced liquidation elsewhere.
5. **Independent mark verification:** deep-OTM options are illiquid and easy to mismark; the 19 winning quarters may partly reflect optimistic marks, not realized gains.

## Verdict

The track record argues for caution, not confidence. A near-perfect win rate in a negative-skew strategy is the warning sign, not the green light. I would reject the unconditional 3x, approve a phased, hedged, hard-capped increase tied to passing tail stress tests, and require the desk to demonstrate it can survive (not just profit through) a March-2020-class event at the larger size before going further.
