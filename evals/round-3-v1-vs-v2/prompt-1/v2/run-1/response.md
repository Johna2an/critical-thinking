# Two estimates under uncertainty

## (a) Piano tuners in Chicago today

This is the canonical Fermi problem, so I decompose it rather than guess the whole. I am estimating working tuners in the Chicago metro area (roughly 9.5 million people), counting both full-time and part-time professionals.

**The chain.**

- Metro population: about 9.5 million.
- Households: at roughly 2.5 people each, about 3.8 million households.
- Share of households with a piano: I estimate 1 in 25, around 4%. Piano ownership has fallen for decades as digital keyboards (which never need tuning) replaced acoustic uprights. That gives about 150,000 household pianos.
- Add institutional pianos (schools, churches, concert halls, hotels, bars, music studios). These tune more often and skew the work upward. I add roughly 20%, lifting the effective stock to about 180,000 tuning-needing pianos.
- Tunings per piano per year: a serious player tunes once or twice a year, but most home pianos sit and get tuned far less. Blended average about 0.5 per year. That yields roughly 90,000 tunings annually.
- Tunings one tuner performs per year: 3 to 4 per working day, about 700 to 800 working days' worth, so call it 4 per day × 220 working days ≈ 900, but travel, slack demand, and part-time schedules pull the realized figure down. I use about 700 tunings per tuner-year.
- Tuners = 90,000 / 700 ≈ 130.

**Sensitivity.** The answer is most sensitive to piano-ownership rate and tunings-per-piano, the two softest inputs. If ownership is 6% and tunings average 0.7/year, I get about 270 tuners. If ownership is 3% and tunings average 0.4/year, I get about 65. The structure is sound; the inputs carry an order-of-magnitude of play.

**Outside-view check.** The U.S. Piano Technicians Guild has on the order of a few thousand members nationwide. Chicago metro is roughly 3% of the U.S. population. Three percent of, say, 3,000-4,000 active technicians gives 90 to 120, and many tuners are not Guild members, which nudges the true count somewhat higher. Independent of my Fermi chain, this lands in the same neighborhood, which raises my confidence in the central figure.

**Calibrated estimate: about 130 piano tuners, with an 80% range of roughly 70 to 250.** The two methods converging near 100 to 150 is the main reason I do not widen further.

## (b) Probability a current Fortune 500 CEO holds an undergraduate degree in engineering or a hard science (vs. business or economics)

First, frame the exact question and catch the substitution. The vivid prompt is "tech founders are engineers," which would push the estimate high. The actual question covers all 500 CEOs across retail, finance, energy, healthcare, food, and industrials, where the modal CEO rose through finance, operations, or general management. I anchor on the population, not on the salient tech archetype.

I also flag two denominator issues that shape the framing:

- The question forces a binary, but the real undergraduate-degree distribution has more than two bins: engineering/hard science, business/economics, and a third bin of liberal arts, law-track, accounting, and other fields. The question asks only for the probability of the first bin, so the other two simply count against it.
- A growing share of Fortune 500 CEOs were educated outside the U.S. or hold degrees that are hard to classify. I treat "unknown or other" as not-engineering for this estimate, which is the conservative reading of the question.

**Base rates from what is known.** Multiple surveys of S&P 500 and Fortune 500 leadership over the past decade converge on a recurring pattern:

- Engineering is consistently the single most common *undergraduate* major among large-cap CEOs, typically cited around 20 to 22% on its own.
- Business and economics undergraduate degrees together usually run a bit higher, often a combined 30 to 40%, especially once finance and accounting are folded in.
- Adding the hard sciences (physics, chemistry, biology, math, computer science) to engineering lifts the STEM-style bin to roughly the high-20s to mid-30s percent.

So engineering-plus-hard-science as an undergraduate field plausibly sits around 28 to 35% of CEOs. I center on **about 30%**.

**Adjustments.**
- The MBA confound: many CEOs hold an engineering bachelor's and a business master's. The question asks about the *undergraduate* degree, so these people count as engineering/science. This keeps the figure from collapsing, and it is the main reason engineering scores so well at the bachelor's level.
- Sector mix: the Fortune 500 is heavily weighted toward finance, retail, healthcare, and consumer firms, where business and liberal-arts paths dominate. This caps the figure well below the 50% a tech-only sample would suggest.
- Selective-skeptic check: if I imagine the data instead showing business degrees dominating, would I still believe it? I would, because that matches the operations-and-finance promotion path. The fact that engineering still wins the single-major count, despite that pull, is the genuinely diagnostic evidence here, and it is why I do not push the estimate below 25%.

**Calibrated estimate: about 30%, with an 80% range of roughly 22% to 40%.** Stated as a betting line, I would lay close to 2-to-1 against a randomly drawn current Fortune 500 CEO having an engineering or hard-science *bachelor's* degree.

## What is uncertain, and the verdict

For the tuners, the soft inputs are piano-ownership rate and tuning frequency, both declining over time, which is why I lean toward the lower-center of plausible values. For the CEOs, the soft input is classification: how foreign and ambiguous degrees get binned, and whether "hard science" is read narrowly or includes computer science and math. A narrow reading drops the number toward 25%; a broad one lifts it toward 35%.

Verdict:
- **(a) Roughly 130 piano tuners in metro Chicago (80% interval 70 to 250).**
- **(b) Roughly a 30% probability (80% interval 22% to 40%)** that a random current Fortune 500 CEO holds an engineering or hard-science undergraduate degree rather than business or economics.

Both numbers are estimates built to be scored, not asserted as fact. If I logged these and the truth later landed inside both ranges, that is the calibration outcome I am betting on; landing outside either would send me back to the input that drove the miss.
