# Calling Bullshit, Distilled

**Source:** *Calling Bullshit: The Art of Skepticism in a Data-Driven World* by Carl T. Bergstrom and Jevin D. West (Random House, 2020).

## Thesis

Most misleading claims fail at the level of the data going in or the results coming out, so you can refute "new-school" quantitative nonsense by reasoning about inputs, outputs, and plausibility without any technical expertise in the methods themselves.

## Core frame: the black box

Bergstrom and West treat every statistic, model, algorithm, or study as a black box that takes data in and pushes results out. The technical machinery inside (the regression, the neural net, the meta-analysis) intimidates readers into deference. Their central move is to ignore the machinery and interrogate the two ends you can actually see: Were the data fed in biased, cherry-picked, or irrelevant? Do the numbers that came out pass a basic sanity check and actually support the conclusion drawn? Errors almost always live at one end or the other, so a non-specialist who thinks clearly about inputs and outputs catches most bullshit. Hold this frame in mind for every tool below.

## Thinking tools

1. **Spot new-school bullshit (quantitative camouflage).** Bullshit is language or data designed to persuade or impress through a blatant disregard for truth, distinct from lying because the bullshitter does not care whether the claim is true. Old-school bullshit uses fancy words; new-school bullshit wraps weak claims in numbers, statistics, models, and charts to borrow the authority of rigor. The mechanism: people feel unqualified to challenge quantitative claims, so numbers give the biggest deception per unit of effort. Apply it by raising your guard precisely when a claim sounds technical. Quantitative dressing is a reason to scrutinize harder rather than to defer.

2. **Reason about the black box without opening it.** You rarely need to understand the algorithm to find the flaw. Apply it with three questions: Are the input data unbiased, reasonable, and relevant to the question? Do the outputs pass a plausibility check? Do the results actually support the stated conclusion? The criminality-from-faces algorithm fell apart this way: the "criminal" photos were ID shots and the "non-criminal" photos were smiling professional headshots, so the model learned to detect smiles. No knowledge of the neural net was required to see it.

3. **Garbage in, garbage out (audit the training data and the sample).** A model or statistic can be no better than the data it ingests, and biased inputs produce biased outputs regardless of how sophisticated the method is. Apply it by always asking where the data came from before trusting any result built on them. Mismatched sources, convenient sampling, and labels that encode the wrong thing (convicted vs. having committed a crime) are common and fatal.

4. **Correlation is not causation, and watch the direction.** When two things move together, four stories are live: A causes B, B causes A, a third factor C causes both, or it is coincidence. The press routinely converts an observed correlation into a causal headline and then into prescriptive advice. Apply it by drawing the causal diagram yourself, including reverse arrows and a common-cause node. Self-esteem and being kissed correlate, but kissing could build self-esteem, or a third trait could drive both. Listening to NPR correlates with resisting bullshit, yet skepticism might cause the NPR habit rather than the reverse. Be most suspicious when a study offers a "do this" recommendation from purely correlational data.

5. **Confounding and the third variable.** A hidden common cause can manufacture a correlation between two variables that have no direct link. Apply it by asking what else differs between the groups being compared. Even when researchers "control for" obvious confounders like smoking or weight, residual differences can still drive the result, so a controlled observational study is not proof of cause.

6. **Selection bias and right-censoring (who or what is missing from the sample).** A conclusion is only as good as the representativeness of the sample, and the most damaging distortions come from who got left out. Apply it by asking whether the observed cases were drawn at random or filtered by some process tied to the outcome. The viral chart showing rap musicians dying young is an artifact of right-censoring: rap is a young genre, so the only rap artists who have died yet are the ones who died early, while older genres have had a century to accumulate long-lived deceased performers. The wellness-program example is the same trap in reverse: healthy people self-select into the program, so observational studies credit the program with health it never created. The randomized trial showed no real effect.

7. **Demand randomization to break selection.** When participants, doctors, or circumstances decide who lands in which group, the groups differ systematically and any comparison is contaminated. Randomized assignment is the tool that severs that link and lets a comparison mean something. Apply it by checking whether group membership was assigned at random or chosen; if chosen, treat any difference between groups as suspect until the selection mechanism is ruled out.

8. **Extraordinary claims require extraordinary evidence.** Calibrate the strength of evidence you demand to how surprising the claim is. A result that would overturn established understanding or sounds dramatically large should trigger more scrutiny rather than excitement. Apply it as a triage filter: the bigger the claimed effect, the harder you look for a mundane explanation before accepting the exciting one.

9. **Too good (or too bad) to be true.** Implausibly large effects usually signal an artifact rather than a discovery. Apply it as a gut check before any analysis. The musicians chart claimed some genres die at half the age of others, a gap large enough that the right reaction is to hunt for the statistical artifact (right-censoring) instead of believing the magnitude.

10. **Spot the unsupported denominator and the missing comparison.** A raw count or percentage is meaningless without the base it is drawn from and the comparison group it should be measured against. Apply it by asking "compared to what?" and "out of what?" The claim that 34 percent of behaviorally challenged second graders sniffed markers means nothing without the rate among non-challenged kids, which might be higher. Always find the denominator and the control rate.

11. **See through deceptive data visualizations.** A chart designer controls scale, axis direction, and baseline, and can make a rise look like a fall or a tiny gap look enormous while every number stays technically accurate. Apply it by reading the axes before reading the picture: check the direction and zero-point of the vertical axis, whether bars start at zero, and whether the visual encoding matches the quantity. The Florida Stand Your Ground graph inverted the vertical axis so a rise in gun murders read as a drop. It was bad design rather than malice, which is itself a lesson.

12. **Reject ducks and glass slippers (form overwhelming data).** A "duck" is a chart where decoration crowds out the data and steals attention. A "glass slipper" forces one kind of data into a visual structure built for another (a fake periodic table, a subway map of unrelated items, a pseudo-Venn diagram whose overlaps carry no real meaning), borrowing the authority of a legitimate form. Apply it by checking whether the visual structure actually encodes the relationships it implies, or whether the slots are just decorative containers for text.

13. **Watch for paltering, weasel words, and implicature.** Paltering is misleading with technically true statements; weasel words ("up to," "people are saying," "mistakes were made") dodge responsibility; implicature is the gap between what a sentence literally says and what it leads you to conclude. The mechanism: listeners fill in meaning that the speaker never stated and cannot be pinned to. Apply it by separating the literal claim from what you were nudged to infer, then checking whether the literal claim alone actually supports the inference.

14. **Apply Brandolini's principle and the asymmetry of refutation.** The energy required to refute bullshit is an order of magnitude greater than the energy required to produce it, because a confident falsehood can be generated in seconds while debunking it takes evidence and labor. Apply it strategically: prioritize which claims are worth your refutation budget, attack the weakest load-bearing assumption rather than every detail, and recognize that the spread of a falsehood says nothing about its truth.

15. **Prefer incompetence to malice (a charity heuristic for refuting well).** When deciding why a claim is wrong, do not assume deception when honest error explains it, and do not assume error when a reasonable mistake explains it. The mechanism: this keeps your refutation accurate and credible, since overstating intent is itself a way to be wrong. Apply it when calling bullshit publicly. Diagnose the mistake correctly so your correction holds up.

## Named concepts, biases, fallacies, and techniques

- **Bullshit (the working definition):** content meant to persuade or impress through indifference to truth. The bullshitter's defining trait is not caring whether the claim is true, which separates bullshit from lying.
- **New-school vs. old-school bullshit:** old uses rhetoric and jargon; new uses numbers, statistics, figures, and algorithms to fake rigor.
- **Black box reasoning:** evaluate inputs and outputs, leave the internal method alone.
- **Garbage in, garbage out:** flawed input data ruin any analysis no matter how advanced.
- **Selection bias:** non-random sampling, including self-selection, that makes a sample unrepresentative.
- **Right-censoring:** dropping subjects still "alive" (uncompleted) at study end, which over-weights early failures and distorts longevity or duration estimates.
- **Confounding variable:** a hidden common cause that fabricates a correlation between two otherwise unrelated variables.
- **Reverse causation:** the effect you assumed is actually the cause (cancer-causes-smoking style reasoning).
- **Correlation coefficient:** a number from -1 to 1 measuring strength and direction of a linear relationship; near 0 means little linear information.
- **Prescriptive overreach:** turning a correlation into a "do X" recommendation without causal evidence.
- **Paltering:** deceiving with statements that are technically true.
- **Weasel wording:** hedged language ("up to," "may," passive voice) that suggests a benefit or dodges blame without committing to anything.
- **Implicature (pragmatics):** the inferred meaning a sentence carries beyond its literal content, the lever both efficient communication and paltering pull.
- **Brandolini's principle (the bullshit asymmetry):** refuting bullshit costs far more than producing it.
- **Ducks and glass slippers:** visualizations where decoration dominates, or where data are shoehorned into the wrong visual form to borrow its authority.
- **Axis manipulation:** truncated, inverted, or non-zero baselines that change the visual story while keeping the numbers accurate.
- **Extraordinary claims require extraordinary evidence:** scale evidence to surprise.
- **Charity in refutation:** do not assume malice where incompetence suffices, nor incompetence where a reasonable mistake suffices.

## What this book uniquely contributes

The book reframes critical thinking for an era where deception arrives dressed as data rather than rhetoric. Its signature contribution is the black-box stance: the permission and the method to refute a sophisticated quantitative claim without understanding its math, by interrogating the data that went in and the results that came out. It puts the burden where a non-expert can actually carry it. It also names and operationalizes the everyday machinery of misleading: paltering, weasel words, ducks, glass slippers, right-censoring, and Brandolini's asymmetry become recognizable, repeatable diagnostic categories rather than vague suspicions. And it pairs detection with a refutation ethic, insisting that calling bullshit well means diagnosing the error charitably and accurately so the correction survives scrutiny.

## Memorable principles and examples (paraphrased)

- The criminality detector that was actually a smile detector. A model claimed to read criminal tendency from faces, but its "criminals" came from unsmiling ID photos and its "non-criminals" from smiling professional headshots. The machine learned facial expression rather than facial structure. The flaw lived entirely in the training data, visible to anyone who never looked inside the algorithm.
- The chart that "proved" rap stars die young. The dramatic age-at-death gap across music genres was a censoring artifact: rap is too young a genre for its long-lived performers to have died yet, so only its early deaths are counted, while older genres carry a full century of long lives. A gap that large is a signal to hunt for the artifact.
- Healthy people join wellness programs; the programs do not make them healthy. Observational studies credited workplace wellness with the good health of the people who self-selected into it. A randomized trial erased the effect. When participants choose their own group, the comparison is poisoned before it begins.
- The inverted murder graph that fooled everyone, including its designer's critics. A chart appeared to show gun deaths falling after a Florida law because its vertical axis ran upside down. The takeaway is double: read the axes before the picture, and diagnose bad design as incompetence rather than assuming a conspiracy.
