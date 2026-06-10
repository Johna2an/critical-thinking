# The Art of Doing Science and Engineering, Richard W. Hamming

## Thesis
Excellence in science and engineering is a learnable *style* of thinking: you achieve it by working on important problems, preparing your mind through fundamentals and back-of-envelope models, cultivating a long-term vision, and tending the personal habits that compound over a career.

---

## Thinking Tools

### 1. Back-of-the-envelope modeling
**Definition.** Build a quick, rough quantitative model of any claim using order-of-magnitude numbers and a couple of simplifying assumptions, then check whether the answer is plausible.
**Mechanism.** Forcing a claim through arithmetic surfaces the hidden variables you would otherwise skip (Hamming demonstrates this by reconciling "knowledge doubles every 17 years" with "90% of scientists who ever lived are alive now," and the two assumptions turn out compatible). The act of computing also burns the result into memory and keeps your modeling reflex sharp for when it matters.
**How to apply.** When you hear a quantitative claim, especially in media, pause and model it. Plug in definite numbers first to get a feel, then re-parameterize so you can see the general case. If you cannot even set up a model, the claim was probably empty.

### 2. Vision and the drunkard's-walk argument
**Definition.** Decide on a direction for your work and life, then bias your many small choices toward it.
**Mechanism.** A random walk of n independent steps lands you roughly sqrt(n) from the origin, while consistently biased steps carry you a distance proportional to n. Over a career of thousands of choices, a consistent direction compounds into vastly more distance covered than drifting does. The exact destination matters less than having one; getting somewhere beats wandering.
**How to apply.** Write down, in some detail, what you want your field and your contribution to look like years ahead. Revisit and revise it. Let it tilt your daily decisions about what to read, learn, and work on.

### 3. Three questions: possible, likely, desirable
**Definition.** Separate what is physically possible (science), what will actually happen given human factors (engineering), and what you want to happen (ethics and values).
**Mechanism.** Conflating these three produces muddy thinking. Most futures are constrained less by physical limits than by human laws, habits, egos, and institutional inertia. Seeing the gap between the likely future and the desirable one tells you exactly where to push to bend events.
**How to apply.** For any project or forecast, answer all three questions in order. Where "likely" diverges from "desirable," that gap is your lever for intervention.

### 4. Work on important problems
**Definition.** Deliberately choose problems that matter to your field rather than drifting into whatever is in front of you.
**Mechanism.** Effort spent on a trivial problem yields a trivial result no matter how brilliant the work. Great results cluster in the same people too often for that clustering to be luck; those people keep a running list of important open problems and attack one when they see an opening. Important problems also attract resources and collaborators.
**How to apply.** Keep an explicit list of the dozen or so big open problems in your field. Spend a fixed slice of time (Hamming used Friday afternoons) thinking about them. When a method you hold meets a problem on the list, pounce.

### 5. "Luck favors the prepared mind"
**Definition.** Discoveries land on people who have done the groundwork to recognize and seize an opportunity when it appears.
**Mechanism.** Gibbs caught the Fourier overshoot because he was prepared to take Michelson's "equipment glitch" seriously; others dismissed it. Preparation converts a chance encounter into a recognized, formulated, solved problem. The opportunities are widely available; few people are ready to reach for them.
**How to apply.** Build broad and deep fundamentals in advance so that when an anomaly or request crosses your path you can act on it. Treat odd results and casual hallway remarks as potential openings rather than noise.

### 6. Fundamentals over current facts
**Definition.** Invest in the underlying principles that let you derive a field, because specific facts decay fast.
**Mechanism.** The half-life of learned technical knowledge runs around 15 years, while knowledge overall keeps doubling. Two tests identify a fundamental: it has lasted a long time, and the rest of the field can be derived from it using the field's standard methods. Mastering fundamentals lets you absorb new fields the establishment has not yet taught you, and it lets the "fancy parts" follow easily (Hamming repeatedly rescued projects with nothing more than a firm grasp of the sampling theorem and aliasing).
**How to apply.** When learning, ask whether a piece of knowledge is foundational or perishable. Spend disproportionate effort on the foundations. Plan to learn new fields actively and on your own throughout your career.

### 7. The order-of-magnitude rule
**Definition.** A single factor-of-ten change in any parameter usually produces qualitatively new effects rather than merely more of the same.
**Mechanism.** People comfort themselves by treating something new as the old thing souped up (digital filters dismissed as analog filters, computers dismissed as fast desk calculators). That reflex blinds them to genuinely new possibilities. When speed, scale, or cost shifts by 10x or more, the rules of the game often change.
**How to apply.** When a quantity jumps by an order of magnitude, ask what becomes newly possible rather than assuming continuity. Treat claims of "nothing new" with suspicion, while still checking whether the thing actually is new.

### 8. Do the equivalent job rather than the same job
**Definition.** When you bring a new tool to an existing task, redesign the task around the tool rather than mechanically reproducing the old process.
**Mechanism.** Successful adoption of computers changed the nature of the work itself: interactive instruments did more than just record experiments faster, they changed which experiments were worth running. Copying the old workflow throws away most of the new tool's value.
**How to apply.** Before automating or upgrading, ask what the goal really is and what becomes possible now. Design for flexible future expansion, since success will create demand to do more than the original plan.

### 9. Compound growth and the asymmetry of predictions
**Definition.** Short-term predictions tend to run optimistic and long-term ones tend to run pessimistic, because humans underweight geometric compounding.
**Mechanism.** Even modest steady growth doubles a quantity surprisingly fast (6% a year doubles in about 12 years), so long-range extrapolations of compounding processes routinely fall short. The counterexample is overpromised fields like early AI, where leaders made long-term predictions that did not arrive on schedule.
**How to apply.** For compounding processes, push your long-term estimates higher than feels comfortable. For young fields making bold timelines, discount the schedule. Distinguish genuine exponential trends from hype.

### 10. Prove it on the hard case first
**Definition.** A new method must first conquer a heroic, undeniable task before the establishment will let it handle routine work.
**Mechanism.** Innovations face inertia and reflexive resistance. Solving the hardest visible problem (Los Alamos ran the toughest physics on primitive machines) is what earns the new approach entry, after which it can do the larger volume of routine, more useful work.
**How to apply.** When pushing a new idea, target an impressive, hard-to-dispute demonstration first. Expect resistance, and judge whether the barrier is worth your effort or whether you should redirect.

### 11. "You get what you measure"
**Definition.** The metric you choose silently steers behavior and outcomes, including in your own observations.
**Mechanism.** What you measure controls what you can see; people and systems optimize toward whatever is scored, often producing perverse results when the metric is a poor proxy for the real goal. Even a data-processing choice (which variable you predict on, which trend you remove) changes the conclusion.
**How to apply.** Before adopting a metric, ask what behavior it will produce and whether it tracks the outcome you actually want. When you analyze data, name the measurement you are taking and what it can and cannot reveal.

### 12. Know *why* something cannot be done
**Definition.** When you conclude something is impossible, record the exact reason, because reasons expire.
**Mechanism.** Hamming dismissed the FFT as impractical on the hardware he had, then forgot that the obstacle was the hardware and not the idea, and so missed credit for one of the most consequential algorithms of the century. An impossibility tied to current circumstances becomes possible when circumstances change.
**How to apply.** Attach every "it can't be done" to its limiting cause. Before repeating the verdict later, re-check whether that specific cause still holds.

### 13. Formalize a belief, then attack both sides
**Definition.** To think clearly about a contested question, state your position explicitly and argue against it as hard as you argue for it.
**Mechanism.** On loaded questions (can machines think? is this token rigged?) most people arrive pre-committed and never test their bias. Writing the belief down and red-teaming both sides exposes which arguments are strong and which are disguised definitions (the engineer who simply defined thinking as "what machines cannot do").
**How to apply.** When you notice a strong prior, write it as a claim, build the best case against it, and only then weigh both. Watch for definitions rigged to guarantee a conclusion.

### 14. Open and closed doors (and the trade-off of focus)
**Definition.** Working with your door open costs you short-term productivity but, over years, connects you to the important problems and the people who carry them.
**Mechanism.** Closed-door workers are often more productive day to day, yet they end up working on the wrong problems because they lose contact with what matters in the field. The long game rewards exposure and cross-pollination across disciplines, since knowledge is more unified than its departmental boundaries suggest.
**How to apply.** Trade some immediate efficiency for accessibility and breadth. Eat with people outside your specialty, follow problems across fields, and treat the artificial walls between courses and departments as things to see past.

---

## Named Concepts, Biases, Fallacies, and Techniques

- **The "nothing new" reflex.** A bias toward assuming the unfamiliar is just the familiar improved. It feels comfortable and reliably prevents people from contributing to a genuinely new field. Counter it with the order-of-magnitude rule and an honest check of whether the thing really is new.
- **Definitional dodging.** Settling an argument by quietly defining the disputed term to guarantee your side (thinking defined as "what machines cannot do"). Counter by surfacing definitions and asking whether they are fair or merely self-serving.
- **The expert trap.** In several fields, including parts of medicine, measured performance of famous experts is barely above beginners, and experts rationalize subconscious pattern-matching with after-the-fact conscious stories. Treat expertise as pattern recognition built over roughly a decade, and discount confident verbal justifications.
- **Mistaking the tool for the understanding.** Applying a technique without its foundations produces confident errors (reading "only white noise" in stock prices as "unpredictable," which holds only for linear predictors). A little knowledge is dangerous precisely when the fundamentals are missing.
- **The constantly-changing-database fallacy.** You cannot run an optimization study against a baseline that others keep changing under you, because improvements get misattributed (the Boeing shared-design-tape failure). Freeze a snapshot for any comparison.
- **Heuristics.** Plausible rules that usually lead toward a win without guaranteeing it; the vague middle of any real procedure after the firm rules run out. Recognize when you have left the zone of exact rules and are operating on heuristics.
- **Style as an art.** The central claim of the book: high-level thinking cannot be reduced to explicit rules, so it is taught the way painting is, by exposure to a master's examples and stories, after which you forge your own style and adapt it to your era.

---

## What This Book Uniquely Contributes

Most thinking books deliver rules; Hamming delivers *style*, transmitted through first-person stories of his own successes and (deliberately) his blunders, on the premise that the highest-level thinking resists explicit statement. Three contributions stand out. First, it fuses career strategy with intellectual method: vision, choosing important problems, and managing reputation are treated as inseparable from technical skill. Second, it is relentlessly quantitative about soft questions, modeling knowledge growth and career trajectories with the same back-of-envelope arithmetic it recommends. Third, it teaches you to think about your own *future* rather than the field's past, which makes its tools durable as specific facts decay.

---

## Memorable Principles and Examples (paraphrased)

- **The drunkard with a destination.** A staggering sailor taking random steps drifts only about sqrt(n) from where he started, but a sailor heading toward something he wants covers a distance proportional to n. A career aimed at a vision compounds the same way; the people who go far almost always have one.

- **The FFT he let slip.** Hamming judged the Fast Fourier Transform impractical on the calculator he owned, then forgot that the hardware rather than the idea, was the obstacle, and so passed on an algorithm that later reshaped whole fields. The lesson he draws on himself: always remember *why* you decided something was impossible, because the reason may quietly stop being true.

- **Gibbs listened.** When Michelson found a stubborn overshoot in his Fourier machine, most mathematicians blamed his apparatus; only Gibbs took a careful experimenter's anomaly seriously and explained the phenomenon that now bears his name. Opportunities sit in plain view, and they reward the mind prepared to reach for them.

- **The window named for being helpful.** Tukey rather than Hamming, attached Hamming's name to the Hamming window. Your reputation is built by colleagues who cite and credit you, so being genuinely useful to others on important problems pays better over a career than claiming credit for yourself.
