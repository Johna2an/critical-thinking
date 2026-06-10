# Two Fermi/Bayesian Estimates

## (a) How many piano tuners work in Chicago today?

**Method: Fermi decomposition from demand side.**

1. **Population of Chicago.** The city proper is about 2.7 million; the metro area is roughly 9.4 million. Piano tuners serve a labor market by commuting radius, so the metro figure is the honest denominator. I'll use ~9.4 million for the metro, but note the answer scales linearly if you mean city-proper only (divide by ~3.5).

2. **Households.** At ~2.5 people per household, ~9.4M people gives ~3.75M households.

3. **Pianos.** The classic estimate assumes ~1 in 20 households owns a piano. That figure is generous for the streaming era (digital keyboards displaced many acoustic pianos, and ownership has fallen for decades). I'll use 1 in 30 as a present-day correction: ~125,000 pianos. Add institutional pianos (schools, churches, concert halls, bars, universities): institutions are few but each may own several, adding perhaps 10–20%. Call it ~140,000 pianos.

4. **Tuning frequency.** Manufacturers recommend twice a year; reality is far lower. Many home pianos go years untuned. A blended average of ~0.7 tunings per piano per year (heavy institutional/professional use pulls the mean up; neglected home pianos pull it down) gives ~98,000 tuning jobs per year.

5. **Tuner capacity.** A full-time tuner does ~3–4 tunings/day, ~5 days/week, ~48 weeks/year, but travel, sales, no-shows, and repair work cut billable jobs. Net ~700–1,000 tunings per tuner per year. Use ~850.

6. **Tuners needed.** 98,000 / 850 ≈ **115 full-time-equivalent tuners.**

**Adjustment for part-timers and undercounting.** Many tuners work part-time or combine tuning with repair/teaching. Head-count exceeds FTE. The U.S. Bureau of Labor Statistics groups tuners under "Musical Instrument Repairers and Tuners" (~5,000–8,000 nationally), and Chicago metro is ~3% of U.S. population, which back-of-envelope yields ~150–240 in that broader category, of whom maybe half primarily tune pianos. These two independent paths bracket each other reasonably.

**Calibrated estimate: ~120 piano tuners in metro Chicago.**
**80% confidence range: 60 to 250.** (City-proper only: roughly 40–80.)

The dominant uncertainties are piano-ownership rate (could be 1 in 20 or 1 in 40) and average tuning frequency (the single largest lever). These two assumptions move the answer by more than a factor of two.

---

## (b) Probability a random current Fortune 500 CEO has an undergraduate degree in engineering or a hard science (vs. business/economics)

**Framing.** This is a base-rate question. I want P(STEM undergrad | F500 CEO today), where STEM = engineering, physics, chemistry, math, computer science, biology, and similar hard sciences, explicitly excluding business, finance, economics, accounting, liberal arts, and law.

**Evidence I'm anchoring on.**

- Multiple recurring analyses of Fortune 500 / S&P 500 CEO backgrounds find engineering is the single most common undergraduate major, typically cited in the ~20–33% range for engineering alone. Business/economics/finance combined is the largest grouping overall, often ~30–40%.
- Adding the non-engineering hard sciences (physics, chemistry, math, CS, biology) to engineering plausibly adds another ~5–12 percentage points.
- The mix skews by sector: industrials, energy, tech, pharma, and autos favor STEM undergrads; retail, consumer, financial-services, and media CEOs skew toward business/liberal-arts degrees. The Fortune 500 is heavy in industrial/energy/healthcare firms, which props up the STEM share.

**Synthesis.** Engineering alone ~25%, plus other hard sciences ~7–10%, gives a central estimate around **33%** for the STEM-vs-business/econ framing. Many MBAs sit on top of STEM undergrad degrees, so counting the *undergraduate* field (as the question specifies) raises the STEM share relative to a "highest degree" framing.

**Caveats.**
- Definitional sensitivity is large. If "hard science" excludes computer science and biology and counts only physics/chem/math, the number drops toward ~28%. If economics is treated as a quantitative science (it sometimes is), the comparison set shifts.
- ~5–10% of CEOs lack a clearly reported or conventional 4-year major, adding noise.
- The question asks STEM "rather than business or economics," which I read as: of all CEOs, what fraction is STEM. Some have neither (law, liberal arts, communications), so this is not a clean two-way split.

**Calibrated estimate: ~33%.**
**80% confidence range: 25% to 40%.**

---

## Verdict

- **(a)** Roughly **120 piano tuners** serve metro Chicago (range 60–250); about 40–80 if you mean the city proper only. Answer is driven mainly by piano-ownership rate and tuning frequency.
- **(b)** About a **1-in-3 chance (~33%, range 25–40%)** that a random current Fortune 500 CEO holds a STEM/engineering undergraduate degree. Engineering alone is the largest single major; business/economics is the largest *category*.
