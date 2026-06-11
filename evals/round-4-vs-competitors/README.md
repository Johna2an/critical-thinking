# Round 4 — other open thinking-skills, run through this benchmark

This round extends the repo's own eval harness to a question contributors keep asking:
**how does this skill compare to other open critical-thinking skills for Claude, on the same problems and the same rubric?**

It is offered as preliminary, reproducible data and an invitation. If you maintain one of
these skills and think it was represented or wired sub-optimally, open a PR with a better
arm configuration and the numbers will move. That is the point.

## Arms
- **ours** — this repo's `skill/` (v2), read with its reference libraries available.
- **cc-thinking** — [tjboudreaux/cc-thinking-skills](https://github.com/tjboudreaux/cc-thinking-skills): the 39-model router plus the sub-skills it routes to.
- **wanikua** — [wanikua/thinking-skills](https://github.com/wanikua/thinking-skills): its framework command set.
- **baseline** — same model, no skill.

## Protocol (identical to rounds 1-2, with two upgrades)
- Same 6 reasoning + 6 creativity problems (`problems.json` copied from rounds 1 and 2).
- Same 5-dimension rubric per round, same 3 blind judges per problem.
- **One current model generates every arm**, so this is arms-equal (the original mixed Claude and a GPT arm).
- **Competitors get full progressive disclosure** (they read their whole skill trees), so this is a fair-to-them test.
- Slots are **balance-rotated** A-D so each arm occupies each slot roughly equally; this cancels the position bias that one-shot blinding leaves behind.

## Headline result
| | Reasoning (overall / wins) | Creativity (overall / wins) | Combined |
|---|---|---|---|
| **ours** | **8.70 / 12-of-18** | 7.66 / 7-of-18 | **8.18** |
| wanikua | 7.99 / 5-of-18 | 7.38 / 4-of-18 | 7.68 |
| baseline | 7.62 / 0-of-18 | 7.86 / 4-of-18 | 7.74 |
| cc-thinking | 6.97 / 1-of-18 | 7.62 / 3-of-18 | 7.29 |

The skill's edge is concentrated in **calibration** (8.72 vs 6.78-6.94) and **bias-awareness**,
reproducing the Round-1 finding that calibration is the largest differentiator. It sweeps the
judgment and analysis problems and loses the two pure-estimation problems to wanikua. On
creativity it does not raise the average (the scaffold caps the ceiling, per the Round-2 lesson)
though it takes the most single best-picks. Full tables in `RESULTS.md`.

## Reproduce
Responses, judge JSON, and rotation maps are all here. Regenerate the tables with
`harness/aggregate.js` (Node), or re-run the whole thing with your own arms.

## Limitations
n=1 per cell; generator and judges are the same model family (a cross-model judge panel run
separately split on a looser benchmark, so same-family judge bias is a live concern); 6-12
problems is a small sample; competitor wiring is a judgment call open to PRs. Treat the
creativity ordering as a near-tie (wide position spread on that round).
