## (a) Piano tuners in Chicago

**Fermi build-up (demand side):**

- Chicago city population ≈ 2.7M; metro ≈ 9.4M. The realistic service area for "Chicago" tuners is the metro/CSA, but I'll anchor on the city-plus-near-suburbs market of roughly 3–4M people. I'll use 3M as the working figure and sanity-check against metro.
- Households: ~2.5 people/household → ~1.2M households in the 3M base.
- Piano ownership: roughly 1 in 20 households owns a piano today (down from the mid-20th-century peak; digital keyboards have eaten the low end). That gives ~60,000 household pianos.
- Add institutional pianos (schools, churches, concert halls, universities, bars, studios). These are far more tuning-intensive. Estimate ~10,000–15,000 institutional pianos in the 3M base. Call it ~12,000.
- Tuning frequency: home pianos that get tuned at all average well under once a year (many never); institutional pianos average 1–4×/year. Blended effective demand: treat ~60,000 home pianos at ~0.4 tunings/yr = ~24,000, plus ~12,000 institutional at ~2/yr = ~24,000. Total ≈ ~48,000 tunings/year. Round to ~50,000.

**Supply side (capacity per tuner):**

- A working tuner does ~3–4 tunings/day. At ~4/day × ~200 effective billable days/year ≈ 800 jobs/year for a busy full-timer. Many tuners are part-time or semi-retired, so an average realized throughput of ~500–700/year is more honest. Use ~600.

**Tuners = demand / capacity ≈ 50,000 / 600 ≈ 80.**

This famously lands near Fermi's own ~50 for Chicago. My range is wider because both the ownership rate and tuning frequency are genuinely uncertain (each could be off by 2×, and they move the answer in opposite directions less than you'd hope). The original problem's "right" answer (and BLS-style occupational counts for the Chicago metro) tends to cluster in the **50–100** band.

**Calibrated estimate (a): ~80 piano tuners, 90% range ≈ 30–150.**

The biggest sensitivities: piano ownership rate (secular decline is real, pushing the number down vs. mid-century estimates) and how many "tuners" are part-time. If you count the full 9.4M metro and everyone registered as a technician, the upper tail extends toward ~200.

---

## (b) Fortune 500 CEO with a STEM/engineering undergrad vs. business/economics

**Framing:** I want P(STEM-or-engineering bachelor's | random current F500 CEO). The key is that "engineering or hard science" is a large, well-populated category among large-cap CEOs, and survey data exists.

**Evidence I can anchor on:**

- Multiple recurring surveys (e.g., headhunter and business-school studies of S&P 500 / Fortune 500 CEOs over the past decade) consistently find **engineering as the single most common undergraduate major**, typically around **20–25%** of CEOs. Business administration/management is comparable or slightly lower at the undergrad level (~15–20%), and economics adds another ~10%.
- "Hard science" (chemistry, physics, biology, math, computer science) adds meaningfully on top of engineering, but it's a smaller slice, perhaps **+5–10%**, with extra weight in industries like pharma, tech, and energy.
- A large share of CEOs do an undergrad in something quantitative/technical and then layer an MBA on top, which is why undergrad-engineering shows up so strongly even when the MBA dominates graduate credentials.

**Putting it together:**
- Engineering undergrad: ~20–23%
- Hard sciences (incl. CS, math, physics, chem, bio): ~7–10%
- Combined STEM-ish undergrad: roughly **28–33%.**

**Calibrated estimate (b): ~30%, 90% range ≈ 22–38%.**

**Caveats that widen the band:**
- Definitional. If "hard science" excludes computer science and math (treating them as borderline), the number drops a few points; if it includes them generously, it rises. CS classification is the swing factor.
- Disclosure bias. CEO bios are well-documented for the largest firms but spottier toward the bottom of the F500; missing data could tilt the realized sample.
- The comparison clause ("rather than business or economics") doesn't change the probability I'm estimating, but note these aren't exhaustive categories. Law, liberal arts, and "other" together absorb 25–35%, so STEM beating business/econ head-to-head is plausible at the undergrad level even if business+econ combined is similar in size to STEM.

---

## Verdict

- **(a)** About **80 piano tuners** in Chicago (defensible band ~30–150). The estimate is dominated by piano-ownership rate and per-tuner throughput, both uncertain to a factor of ~2.
- **(b)** About a **30% probability** (band ~22–38%) that a random current Fortune 500 CEO holds an engineering-or-hard-science bachelor's. Engineering alone is the largest single major; CS/math classification is the main thing that moves the number.

If I had to give single point bets: **80 tuners** and **0.30 probability.** I'm more confident in (b) than (a), because (b) rests on repeated survey data rather than a chain of multiplied guesses.