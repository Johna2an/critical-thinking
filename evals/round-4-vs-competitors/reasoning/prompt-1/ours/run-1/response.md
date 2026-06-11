Both questions are estimation under uncertainty. The right move is to decompose each into pieces I can guess (Fermi), anchor on a base rate where one exists, and report a range that honestly reflects how little I know rather than a falsely precise point.

## (a) Piano tuners in Chicago

I'll build the classic supply-from-demand chain, then sanity-check against the labor-economics base rate.

**Demand side (how much tuning work exists):**
- Chicago city population is roughly 2.7 million; the metro area is about 9.4 million. The question says "in Chicago," which is genuinely ambiguous. I'll estimate the city proper and flag the metro number separately, since that choice moves the answer by ~3x.
- Households in the city: ~2.7M / ~2.5 persons = ~1.1M households.
- Share owning a piano that gets tuned: pianos are far less common than a generation ago. Maybe 1 in 25 households has a piano someone actually maintains. That gives ~44,000 actively-tuned household pianos. Add institutional pianos (schools, churches, bars, concert halls, universities, music stores); these tune more often and add maybe 20-30% to the effective workload. Call it ~55,000 piano-tuning-equivalents.
- Tuning frequency: a maintained piano is tuned roughly once a year on average (some twice, many less). So ~55,000 tunings/year.

**Supply side (how many tuners that supports):**
- A tuner does ~3-4 tunings per working day, ~5 days/week, ~46 working weeks = ~800-900 jobs/year at full utilization. Many tuners work part-time or combine tuning with repair/sales, so effective throughput per full-time-equivalent is lower; I'll use ~700-800.
- 55,000 / ~750 = ~73 full-time-equivalent tuners in the city.

So the city-proper point estimate is roughly **50-90, center ~70**. Fermi's own classic answer for Chicago landed near 50-100, which gives me confidence the order of magnitude is right.

**Base-rate cross-check (outside view):** US Bureau of Labor Statistics tracks "musical instrument repairers and tuners" at very roughly 5,000-8,000 nationally, of whom maybe a third to half are piano specialists, so ~2,000-3,500 piano tuners in a country of ~335M. That is about 1 per 100,000-160,000 people. Applied to Chicago city (~2.7M): ~17-27; applied to the metro (~9.4M): ~60-95. This base rate pulls my city estimate *down* relative to the pure demand chain. The two methods disagree by ~2-3x, which is honest signal about the uncertainty (my piano-ownership and frequency guesses could each be off by 2x, and they compound).

Reconciling: the demand chain probably overcounts (1-in-25 ownership and annual tuning are both optimistic for 2026; piano ownership has declined and many owners never tune). I'll shade toward the lower blend.

**Verdict (a):** Best point estimate **~50 piano tuners in the city of Chicago**, with a 90% range of roughly **25 to 120**. If "Chicago" means the whole metro area, scale up to **~120, range 60-250**. The dominant uncertainties are the definitional boundary (city vs metro) and the piano-ownership rate; everything else is second-order.

## (b) Fortune 500 CEO with an undergrad degree in engineering or hard science (vs. business/economics)

Reframe precisely: of current F500 CEOs, what fraction hold a *bachelor's* degree in engineering or a natural/physical science (not their graduate degree, which is often an MBA). The question pits this against business/economics undergrad. The base rate from CEO-demographic surveys (Spencer Stuart, academic studies of S&P 500 and Fortune CEOs) is the anchor here, not a Fermi chain.

**What the evidence says:**
- Business/economics is the single most common undergraduate field for large-company CEOs, but it is a plurality, not a majority, typically cited around 30-40%.
- Engineering is consistently the second-largest field and surprisingly large; multiple analyses put engineering undergrads at roughly 20-25% of large-company CEOs (operations-heavy, industrial, energy, tech, and auto firms skew this way).
- Hard sciences (physics, chemistry, biology, math, computer science treated as science) add a smaller slice, maybe 5-12% depending on whether CS is counted as engineering or science.
- The remainder is liberal arts, accounting, law, and miscellaneous.

**Estimate:** Engineering ~22% + hard science ~8% = roughly **30%** falling in the engineering-or-science bucket. The comparison field, business/economics, is roughly 30-40%. So the two buckets are close, with business slightly ahead.

**Caveats that widen my range:** (1) Classification is fuzzy. Whether computer science, applied math, and "industrial management" count as engineering/science vs business shifts the number by several points. (2) "Hard science" vs soft is a judgment call I'm applying generously to natural sciences only. (3) Different samples (Fortune 500 vs S&P 500, different years) report different splits, and CEO rosters churn. (4) International CEOs and those whose undergrad field is unreported add noise.

**Verdict (b):** Probability a randomly chosen current F500 CEO holds an engineering or hard-science *undergraduate* degree rather than business/economics: best estimate **~30%**, with a calibrated 90% range of **22% to 38%**. This is one of the more surprising-to-laypeople findings: engineering alone rivals business as the modal CEO undergrad field, even though MBAs dominate at the graduate level. I am moderately confident (not highly) because the exact figure depends heavily on how borderline majors are coded.

**One honesty note across both:** these are point estimates with real ranges, not precise facts. For (a) the biggest lever is the city/metro definition; for (b) it is how you classify borderline degrees. If a single number is forced: **~50 piano tuners** and **~30% probability**.