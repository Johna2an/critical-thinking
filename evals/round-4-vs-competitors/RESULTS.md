# Canonical eval replication — competitors run through OUR GitHub benchmark

Same problems, same 5-dimension rubric, same 3-blind-judges-per-problem protocol as `evals/` in the critical-thinking repo. Differences from the original published run: one current model generates all arms (so it is arms-equal), four arms instead of three (the two rival skills replace the single GPT arm), competitor skills get full progressive disclosure, and slots are balance-rotated.

## Round: reasoning  (18 judge passes, 6 problems x 3 judges)

| Arm | Overall | Wins | Avg rank | rigor | calibration | bias_awareness | depth | usefulness |
|---|---|---|---|---|---|---|---|---|
| **ours** | **8.70** | 12/18 | 1.56 | 8.89 | 8.72 | 8.39 | 8.56 | 8.94 |
| wanikua | 7.99 | 5/18 | 2.17 | 8.39 | 6.94 | 7.67 | 8.67 | 8.28 |
| baseline | 7.62 | 0/18 | 3.06 | 7.83 | 6.78 | 7.56 | 7.78 | 8.17 |
| cc-thinking | 6.97 | 1/18 | 3.22 | 7.22 | 6.39 | 6.33 | 7.17 | 7.72 |

## Round: creativity  (18 judge passes, 6 problems x 3 judges)

| Arm | Overall | Wins | Avg rank | originality | diversity | boldness | craft | generativity |
|---|---|---|---|---|---|---|---|---|
| baseline | 7.86 | 4/18 | 2.39 | 7.61 | 7.83 | 7.67 | 8.50 | 7.67 |
| **ours** | **7.66** | 7/18 | 2.50 | 7.50 | 7.83 | 7.28 | 8.11 | 7.56 |
| cc-thinking | 7.62 | 3/18 | 2.50 | 7.56 | 7.61 | 7.61 | 7.78 | 7.56 |
| wanikua | 7.38 | 4/18 | 2.61 | 7.22 | 7.56 | 6.94 | 7.83 | 7.33 |

## Combined (both rounds, all 360 dimension-scores per arm)

| Arm | Overall (both rounds) |
|---|---|
| **ours** | **8.18** |
| baseline | 7.74 |
| wanikua | 7.68 |
| cc-thinking | 7.29 |

## For context: original published Round-1 numbers (skill v1, Claude 4.8, 3-arm)

Skill 8.99 (18/18 wins) > base 7.92 > GPT-5.5 7.30. Not directly comparable (different model, 3 arms, v1), shown only to anchor the gap shape.
