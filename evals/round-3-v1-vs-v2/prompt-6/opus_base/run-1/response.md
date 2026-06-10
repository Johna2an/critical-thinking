# Who is right, and how would anyone know?

## Start by reframing the question the journalist asked

"Who is right" is the wrong first question, because both camps may be making technically defensible claims about *different things*. The interesting fact is that two competent groups looking at the same decade reach opposite verdicts. That almost never happens because one side cannot read a chart. It happens because "did the policy work" decomposes into several distinct questions, and the camps have quietly answered different ones.

## What is actually going on

Three mechanisms usually drive this kind of split, and they are not mutually exclusive.

**1. Different counterfactuals.** "Did it work" means "compared to what would have happened without it." Nobody observes that world; both camps construct it from assumptions. Camp A might assume the economy was on a rising trend that the policy preserved (so flat outcomes count as success). Camp B might assume the economy would have risen on its own (so flat outcomes count as failure). Same data, opposite verdict, because the invisible baseline differs. This is the single most common source.

**2. Different estimands and metrics.** A labor policy can raise employment while lowering wages, or help one cohort while displacing another. If Camp A measures aggregate GDP and Camp B measures median household outcomes, both can be correct simultaneously. Verdicts diverge because the welfare question was never pinned down.

**3. Specification and identification choices.** Which years to include, how to detrend, which controls to add, how to handle the financial crisis or pandemic sitting inside that decade. With a single national time series there are few degrees of freedom and many researcher choices, so the "garden of forking paths" lets motivated reasoning enter without anyone lying.

The bias accusation is usually half-right in both directions. Priors steer the assumption choices, and the assumptions are doing the heavy lifting rather than the data.

## How would anyone actually know

Rank the evidence by how much it constrains the counterfactual.

- **Strongest: a credible control group.** A clean randomized rollout is unlikely for macro policy, but quasi-experiments approximate it. If the policy was adopted by some regions/states/firms and not others, a difference-in-differences design with parallel pre-trends is far more convincing than any national time series. Synthetic control (build a weighted combination of untreated units that tracks the treated unit before the policy) is the workhorse here.
- **Strong: discontinuities.** If eligibility had a sharp threshold (an income cutoff, a date, a firm-size rule), regression discontinuity compares units just above and below, who are otherwise alike.
- **Medium: a stated, falsifiable mechanism.** A real causal story makes side-predictions. If the policy works through channel X, then X should move first and proportionally. Checking the mechanism, not just the headline number, separates a true effect from a coincidence.
- **Weak: dueling national time-series regressions.** This is exactly where the two camps already are, and it cannot settle the dispute because it cannot fix the counterfactual.

The decisive test in practice: **pre-register the disagreement.** Have both camps write down, before looking at any held-out data, what each predicts and what observation would make them concede. Then run the analysis on the cleanest available natural experiment. Robustness across specifications matters more than any single point estimate; if the sign of the effect flips when you change a defensible control, the result was never there.

## What I would tell the journalist

Do not report it as a tie or as "experts disagree." Report what each camp *assumed*, because that is where the verdict was actually decided. Ask each side three questions: What is your counterfactual, and what evidence supports it? What exact outcome are you measuring, and for whom? What observation would make you change your mind? The camp that answers with a credible control group, a falsifiable mechanism, and results stable across specifications is more likely right. The camp that answers only with a fitted national trend and an unfalsifiable story is doing assumption-driven inference dressed as evidence.

**Verdict:** Both can be partly correct because they answered different questions. Whoever is "right" cannot be decided from the shared time series alone; it is decided by who has the better-identified counterfactual. The settling evidence is a quasi-experiment (diff-in-diff, synthetic control, or a discontinuity) plus a pre-committed, falsifiable prediction, not another regression on the same aggregate decade.
