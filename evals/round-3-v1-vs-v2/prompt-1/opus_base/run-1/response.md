# Two Estimates

## (a) Piano tuners in Chicago

This is the classic Fermi problem, so let me rebuild it from first principles rather than recite the folklore number.

**Population.** Chicago city proper is ~2.7 million people. The piano-tuning trade actually serves the metro area, not just city limits, because tuners drive to clients. Chicago metro is ~9.5 million. I'll estimate two ways and reconcile.

**Demand side.**
- Households: at ~2.5 people/household, the metro has ~3.8 million households.
- Piano ownership has fallen sharply since the 20th century. A reasonable current figure is ~1 in 25 households owns a piano that gets tuned (many owned pianos are decorative furniture that never get serviced). That gives ~150,000 actively-tuned home pianos.
- Add institutional pianos: schools, churches, universities, concert halls, hotels, bars, music studios. Call it another ~30,000–50,000, often tuned more frequently. I'll add ~40,000.
- Total serviced pianos: ~190,000.
- Tuning frequency: homes ~once/year; institutions 2–6×/year. Blended call it ~1.3 tunings per piano per year → ~250,000 tuning jobs annually.

**Supply side (capacity per tuner).**
- A full-time tuner does ~3–4 tunings/day (including travel), ~4–5 days/week, ~46 working weeks → ~700–900 jobs/year. Use ~800.
- 250,000 ÷ 800 ≈ **310 full-time-equivalent tuners.**

**Reconciliation and adjustments.** Many tuners are part-time or semi-retired, so the head-count exceeds FTE; offset against the fact that some demand is unmet (people skip tuning). The original Fermi estimate famously lands near 125 (city only) or ~290 by similar logic. Census-occupation data for "musical instrument repairers and tuners" nationally is on the order of ~7,000–9,000; Chicago metro is ~3% of US population, implying ~210–270, consistent with my build.

**Calibrated answer: ~250 piano tuners in metro Chicago.** Confidence range: **150–400** (roughly 80% interval). For city proper only, ~80–150. The dominant uncertainties are piano-ownership rate (could be 2× off either way) and part-time fraction.

## (b) Probability a Fortune 500 CEO has an undergraduate degree in engineering or a hard science (vs. business/economics)

**Framing.** The two named buckets (engineering/hard-science vs. business/economics) do not exhaust the space. Many CEOs hold undergraduate degrees in liberal arts, accounting, law-track humanities, communications, or have no completed degree. So the question is really: of a randomly drawn CEO, what is the chance their *undergraduate* field falls in the STEM/engineering bucket?

**Evidence I can reconstruct.**
- Recurring surveys of large-cap CEO education (e.g., LinkedIn/recruiter studies, business-press tallies) consistently report that **engineering is the single most common undergraduate major** among Fortune 500 / large-cap CEOs, typically cited around **20–25%**.
- Business/economics/finance undergrad degrees collectively run higher, often **30–40%** combined, because that bucket is broad.
- Hard sciences (physics, chemistry, biology, math, computer science) as undergrad majors add perhaps another **5–10%** on top of engineering.
- Remaining ~25–40% spread across liberal arts, law/political science, accounting-as-distinct, and undisclosed/no-degree.

**Estimate.** Engineering (~22%) + hard sciences (~7%) ≈ **~29%** for the STEM bucket. Computer science is increasingly counted, nudging this up over time; the energy, industrial, tech, and healthcare-heavy composition of the Fortune 500 keeps engineering well-represented.

**Adjustments and caveats.**
- "Undergraduate" matters: many CEOs add an MBA on top of a technical bachelor's, which would *not* move them out of the STEM bucket under this question's wording. Good for the STEM count.
- Industry mix biases the draw: a random Fortune 500 firm is more likely industrial/energy/tech than the public imagines, favoring engineering.
- Survey methodology varies (self-reported, incomplete disclosure), so any single figure is soft.

**Calibrated answer: ~30% probability** (point estimate 0.30). Confidence range: **0.22–0.38** (roughly 80% interval).

## Verdict

- **(a)** ≈ **250 piano tuners** in metro Chicago (range 150–400); ~80–150 if strictly city limits.
- **(b)** ≈ **0.30 probability** a randomly chosen Fortune 500 CEO holds a STEM/engineering undergraduate degree (range 0.22–0.38), driven mainly by engineering being the single most common major.
