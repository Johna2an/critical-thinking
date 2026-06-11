## (a) Piano tuners in Chicago

Classic Fermi decomposition. I'll question each assumption as I build the chain.

**Population.** "Chicago" is ambiguous. The city proper is ~2.7M; the metro area is ~9.4M. The conventional Fermi version uses the metro, since tuners serve a region, not a municipal boundary. I'll estimate for the metro (~9M) and note the city-only figure is roughly 3-4x smaller.

**Pianos.** Assume ~2.5 people per household → ~3.6M households. What fraction own a working piano someone wants tuned? Historically the textbook uses 1 in 20 (5%). Piano ownership has declined since the smartphone era, and many owned pianos are never tuned (digital pianos need no tuning; many acoustic pianos sit as furniture). I'll use 1 in 25 → ~145,000 actively-maintained pianos. Add institutions (schools, churches, venues, studios): maybe +15% → ~165,000.

**Tuning frequency.** Recommended is twice a year; actual behavior is closer to once a year or less for home pianos, more for institutions. Blended ~1 tuning/year → ~165,000 tunings/year.

**Tuner throughput.** A tuning takes ~1.5-2 hours plus travel. Say 4 jobs/day, ~5 days/week, ~45 working weeks → ~900 tunings/tuner/year. Many tuners are part-time, which pushes the effective average down.

**Tuners = 165,000 / 900 ≈ 185.**

**Reality check (the strongest evidence).** US Bureau of Labor Statistics tracks "musical instrument repairers and tuners." National employment is roughly 6,000-7,000. The Chicago metro is ~2.8% of US population, implying ~170-200 in that broad category, but that category includes guitar/band-instrument repair, so piano-tuners specifically are a subset. The Piano Technicians Guild has a few thousand members nationally; Chicago-area chapters suggest dozens of certified members, plus uncertified and part-time tuners.

**Bias check:** anchoring on the famous "~125" textbook answer is a trap; it used a smaller city and older ownership rates. Survivorship bias cuts the other way (only listed/active tuners are visible). The Fermi chain and the BLS top-down both land in the low hundreds, which is reassuring convergence.

**Verdict (a):** Best estimate ≈ **180 piano tuners in metro Chicago.** 80% confidence range: **100-350.** City-proper only would be roughly **40-90.** Strength of conclusion: moderate (two independent methods agree on order of magnitude).

---

## (b) P(Fortune 500 CEO has a STEM/hard-science undergrad degree vs. business/economics)

Bayesian framing with an explicit base rate, since the temptation is to over-anchor on a few famous engineer-CEOs (Tim Cook, the Boeing/GM types) or a few famous econ majors.

**Hypotheses / partition of undergrad fields among current Fortune 500 CEOs:**
- H_business/econ: business administration, accounting, finance, economics
- H_STEM: engineering, computer science, physics, chemistry, math, hard sciences
- H_other: liberal arts, law-track, social sciences other than econ, no/foreign degree

**Prior from reference class.** Multiple surveys of S&P 500 / Fortune 500 CEO backgrounds over the last decade are consistent:
- Business/economics undergrad: roughly **35-45%** (the single largest bucket; economics alone is famously over-represented, ~10-15%).
- Engineering: roughly **20-25%** (engineering is the most common *single* undergrad major in some samples).
- Other hard sciences (CS, physics, chem, math): adds another **5-10%**.
- So STEM combined ≈ **25-33%**.

**Evidence / likelihood adjustments:**
- Sector composition of the Fortune 500 tilts toward industrials, energy, tech, healthcare, and manufacturing, all of which favor engineering pedigrees. This pushes STEM up relative to a generic large-company sample.
- MBA-on-top-of-engineering is extremely common, but the question specifies *undergraduate* degree, so those count as STEM here. That favors STEM.
- Selection caution: "famous founder-engineers" (confirmation-bias salience) would inflate the estimate, but the median Fortune 500 CEO is a non-founder operator, where business/finance paths are well-trodden. Net, I trust the survey base rate over anecdote.

**Posterior.** P(STEM undergrad) ≈ **0.28**, i.e. roughly **28%**. The complementary business/econ bucket is modestly larger (~38-42%), with the remainder in other fields. So a randomly chosen current Fortune 500 CEO is somewhat **more** likely to hold a business/econ undergrad degree than a STEM one, but STEM is a strong second.

**Verdict (b):** P ≈ **0.28**, 80% confidence range **0.22-0.35.** Key uncertainty: how "hard science" is bounded (including vs. excluding CS and math swings it a few points) and survey vintage/sample (S&P 500 vs. full Fortune 500). What would move me: a current, full-list field-of-study tabulation, which would tighten this from a survey-derived prior to a near-census.

---

**Summary:** (a) ~180 piano tuners in metro Chicago (range 100-350). (b) ~28% chance the CEO's undergrad is engineering/hard-science (range 22-35%), making business/economics the more likely single category.