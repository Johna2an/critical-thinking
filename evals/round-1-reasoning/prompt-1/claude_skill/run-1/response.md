# Two estimates, with reasoning and calibrated ranges

Both questions are estimation under uncertainty. I will Fermi-ize each into factors I can guess, anchor on base rates where they exist, then report a central number with a range wide enough to honestly reflect what I do not know. I separate epistemic uncertainty (knowable in principle, like the true count of tuners) from the irreducible spread in my inputs.

## (a) Piano tuners in Chicago

**Frame.** "Chicago" is ambiguous. I take the metro area (Chicagoland, roughly 9.5M people), since tuners serve a regional market and do not stop at city limits. I also flag the city-proper reading (about 2.7M), which scales the answer down by roughly 3x.

**Decomposition (demand side):**
- Metro population: ~9.5M, at ~2.5 people per household, gives ~3.8M households.
- Share of households with a piano that gets tuned: I anchor at ~2%. Piano ownership is higher than that historically, but most home pianos are never tuned, so the tuned-piano fraction is what matters.
- That yields ~76,000 home pianos. Add ~20% for institutional instruments (schools, churches, venues, studios), giving ~91,000 pianos.
- Tunings per piano per year: ~1 on average (serious players tune more, most homes tune less or never).
- Total demand: ~91,000 tunings per year.

**Supply side (capacity per tuner):**
- ~4 tunings per working day x ~240 working days = ~960 tunings per tuner per year.
- 91,000 / 960 gives ~95 full-time-equivalent tuners.

**Sensitivity (the load-bearing inputs).** The answer swings most on city definition and the piano-ownership fraction:
- City proper, 1-3% ownership: ~14 to 40 tuners.
- Metro, 1-3% ownership: ~48 to 142 tuners.

The piano fraction and the metro-versus-city choice each move the result by a factor of 2 to 3, so my honest band is wide.

**Outside-view check.** This is Fermi's own canonical example, and the textbook answer has long sat around 50 to 100 for the metro. My bottom-up build agrees, which is reassuring rather than circular, since I did not back into it. Real-world counts of active professionals (the Piano Technicians Guild lists dozens of members regionally, and many practitioners are unlisted or part-time) are consistent with low-to-mid hundreds at the outside.

**Verdict (a).** Central estimate: **~90 full-time-equivalent piano tuners** in the Chicago metro. Calibrated 80% range: **50 to 150**. If "Chicago" means the city proper, shift to a central ~30 with a range of 15 to 50.

## (b) Probability a current Fortune 500 CEO holds an undergraduate STEM degree (engineering or hard science) rather than business or economics

**Frame the exact question.** I read "engineering or a hard science" as the bachelor's major: engineering, physics, chemistry, biology, computer science, mathematics. "Business or economics" is the rival bucket. There is a large third bucket too: law, liberal arts, accounting (often filed under business), and others. The question asks P(STEM), not P(STEM | STEM-or-business), so I should not collapse it to a two-way split. I report the unconditional STEM share.

**Catch the substitution.** The easy version my mind reaches for is "are lots of CEOs engineers?" The asked version is a specific denominator: all ~500 sitting CEOs, undergraduate major only (not MBA, which is graduate and very common but irrelevant here).

**Base rate.** Surveys of large-cap CEO education are consistent on the shape:
- Business and economics undergraduate majors are the single largest group, commonly cited around 35 to 45% combined.
- Engineering is the standout technical major, repeatedly reported in the low-to-mid 20s percent of S&P 500 / Fortune 500 CEOs.
- Other sciences (physics, chemistry, biology, math, CS) add a smaller slice, perhaps 5 to 10%.

**Build the STEM share:**
- Engineering: ~20 to 23%.
- Other hard science / math / CS: ~6 to 9%.
- Combined STEM: roughly **27 to 32%**.

**Stress-test and red-team.**
- *Upward pull:* engineering is genuinely overrepresented among CEOs relative to the general degree population, and CS founders rising into the list push the science slice up over time.
- *Downward pull:* many "engineering" claims are graduate degrees, and accounting/finance undergraduates (counted as business) are very common. If I miscount any borderline major, it tends to inflate STEM.
- *Definitional risk:* if a grader counts economics as a "hard" social science or includes graduate STEM degrees, the number jumps toward 40%+. I am answering the stricter undergraduate-major reading, which keeps me near 30%.

**Compare to the rival bucket.** Business-plus-economics (~40%) is clearly the larger group, so the answer to "STEM rather than business/econ" is below even odds. STEM does not win the plurality.

**Verdict (b).** Central estimate: **~30%** probability a randomly chosen current Fortune 500 CEO holds an undergraduate engineering or hard-science degree. Calibrated 80% range: **24% to 36%**. I hold this at moderate confidence: the engineering anchor is well-attested, the residual uncertainty is mostly definitional (graduate-versus-undergraduate and where economics and accounting are filed).

## Bottom-line numbers

| Question | Central estimate | 80% range |
|---|---|---|
| (a) Piano tuners, Chicago metro | ~90 FTE | 50 to 150 |
| (a) Piano tuners, city proper | ~30 FTE | 15 to 50 |
| (b) P(CEO undergrad STEM) | ~30% | 24% to 36% |

The widest uncertainty in (a) is the definition of "Chicago" and the piano-ownership fraction; in (b) it is whether the count is restricted to the undergraduate major and how economics and accounting are classified.
