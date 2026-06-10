# Two calibrated estimates

A note before starting: part (a) is the textbook Fermi problem, the one Tetlock and Fermi himself use to illustrate decomposition. I will treat it as a genuine estimate, build it two independent ways, and reconcile. Part (b) is a base-rate question where the framing hides a trap, so I will pin the framing before quantifying.

---

## (a) Piano tuners working in Chicago today

### Path 1: Fermi build-up (demand side)

I decompose into a chain of factors I can each guess.

- Chicago city population: about 2.7 million. Metro is roughly 9.5 million, but "in Chicago" most naturally reads as the city, so I will compute the city figure and report a metro-aware range.
- People per household: about 2.5, giving roughly 1.08 million households.
- Share of households with a piano in playable, tuned condition: pianos have declined for decades (digital keyboards substitute, fewer homes have acoustic pianos). I estimate 1 in 25, so about 4 percent. Add institutional pianos (schools, churches, venues, studios) at maybe a further 15 percent on top of the household count. Call it roughly 50,000 pianos in the city.
- Tunings per piano per year: a conscientious owner does once a year; many do less. Average around 0.7 per year. That gives about 35,000 tunings per year.
- Tunings one tuner performs per year: about 4 per working day (travel between homes dominates), roughly 4 x 5 x 48 working weeks = ~960, call it ~900 to 1,000 per year per full-time tuner.

35,000 / 950 = about 37 full-time-equivalent tuners in the city proper.

For the metro area (9.5 million, ~3.5x the city), the same chain scales to roughly 120 to 140.

### Path 2: Outside view (occupational base rate)

US Bureau of Labor Statistics tracks "Musical Instrument Repairers and Tuners." The national total is on the order of 7,000 to 9,000, and piano tuners are a subset, perhaps 3,000 to 5,000 nationally. Chicago metro holds roughly 2.8 percent of US population. 4,000 x 0.028 = about 110 for the metro, of which the city proper would hold perhaps a third to a half, so 40 to 55.

### Reconciliation

The two paths agree at order of magnitude, which is the real test of a Fermi estimate. City proper: both land near 40. Metro: both land near 110 to 130. The largest sensitivity is the piano-penetration rate and tunings-per-piano, which I am least sure of; halving either roughly halves the answer.

**Verdict (a):** About **40 piano tuners in the city of Chicago proper** (90 percent range: 20 to 70), or about **120 across the Chicago metro** (90 percent range: 70 to 200). I lean on the city figure as the literal answer because the classic problem and the phrase "in Chicago" both point there.

---

## (b) Probability a random Fortune 500 CEO holds an undergraduate degree in engineering or a hard science (versus business or economics)

### Pin the framing first

The question contrasts two buckets but they are not exhaustive. A CEO's undergraduate major could also be liberal arts, social science (political science, history), communications, accounting (often coded with business), or law-track humanities. So I am estimating the probability of one specific bucket, not its complement. I will not let the "rather than" wording trick me into treating it as a two-way split.

### Base rates from CEO-education surveys

Repeated studies of large-cap CEO backgrounds (S&P 500 and Fortune 500 cohorts) converge on a rough undergraduate-field distribution:

- Business / commerce / management: roughly 30 to 35 percent.
- Economics: roughly 8 to 11 percent (sometimes folded into business).
- Engineering: roughly 18 to 22 percent. This is consistently the single largest non-business category and has risen as tech and industrial firms grew.
- Hard sciences (physics, chemistry, biology, math, computer science when counted as science): roughly 7 to 12 percent. Computer science placement is the swing factor; counting it as a hard science lifts this bucket.
- Liberal arts, social sciences, law-track humanities, and other: the remainder, roughly 15 to 25 percent.

Engineering plus hard science therefore sits around **27 to 33 percent**, with computer-science classification the main lever. Business plus economics sits around 40 to 45 percent. The two buckets together leave a meaningful 20-plus percent for everything else, confirming the non-exhaustive point.

### Adjust and check

Two pulls in opposite directions. Upward: the Fortune 500 is weighted toward industrials, energy, pharma, and increasingly tech, all of which favor technical undergraduate degrees, and many such CEOs then add an MBA on top (the MBA is graduate, so it does not move the undergraduate count). Downward: finance, retail, and consumer firms skew toward business and economics undergraduates, and surveys vary in how they bin economics and computer science.

Selective-skeptic check: if a survey showed engineering at only 12 percent, would I find it credible? Less so, because the engineering finding is robust across multiple independent datasets, so I trust the ~20 percent engineering anchor.

**Verdict (b):** About **30 percent** (point estimate), with a 90 percent range of **22 to 38 percent**. The width reflects genuine definitional uncertainty (where computer science and economics get binned) rather than ignorance of the data.

---

## Calibration notes and what is uncertain

- (a) is an order-of-magnitude exercise; I would be surprised to be off by more than 2x, and the city-versus-metro ambiguity is a larger source of spread than my factor guesses. Both independent paths agreeing is the main reason for confidence.
- (b) rests on published CEO-education surveys whose category definitions differ. My point estimate of 30 percent is anchored on the recurring ~20 percent engineering share plus a ~10 percent hard-science share. The biggest knowable lever is computer-science classification; the biggest unknowable is sampling differences between survey vintages.
- One framing caution worth repeating: the answer to (b) is not "100 minus the business share," because the two named buckets do not cover the field.

**Bottom-line numbers:** (a) ~40 in the city of Chicago (~120 metro); (b) ~30 percent, range 22 to 38 percent.
