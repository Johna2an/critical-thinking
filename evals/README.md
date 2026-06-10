# The eval harness

Blind, multi-arm, LLM-judged evaluation for reasoning skills. Three
completed rounds live in this folder with every artifact preserved:
problems, raw responses per arm, rotation maps, judge JSON, aggregated
verdicts, and a self-contained HTML report per round.

Results and interpretation: [`../docs/EVALS.md`](../docs/EVALS.md).
Methodology rationale: [`../docs/PROCESS.md`](../docs/PROCESS.md).

## Layout

```
evals/
├── harness/                  # all scripts, paths resolve relative to repo
│   ├── setup_ct_eval.py      # scaffold round 1 (6 reasoning problems)
│   ├── setup_creative.py     # scaffold round 2 (6 creative briefs)
│   ├── setup_ctv.py          # scaffold round 3 (8 problems, 4 arms)
│   ├── run_gpt*.sh           # GPT-5.5 arm via codex exec (xhigh)
│   ├── prep_blind*.py        # balanced rotation -> anonymous slots
│   ├── aggregate*.py         # de-anonymize judge JSON -> _verdicts.json
│   ├── build_report*.py      # render the self-contained HTML report
│   └── build_v1_snapshot.py  # freeze a skill version for A/B testing
├── round-1-reasoning/
├── round-2-creativity/
└── round-3-v1-vs-v2/
    └── prompt-N/
        ├── prompt.json       # the problem
        ├── <arm>/run-1/response.md
        ├── judges/judge-{1,2,3}.json
        └── (round root) rotation_map.json, _verdicts.json, _report.html
```

## Protocol

### 1. Scaffold

`python harness/setup_ct_eval.py` writes `problems.json` and per-arm run
directories. Every arm receives the identical preamble:

> Reason through the following problem and give your best answer. Think it
> through carefully: state your assumptions, quantify where you can, weigh
> the evidence, flag what is uncertain, and end with a concise verdict or
> recommendation. Aim for a thorough but focused response of roughly 400 to
> 700 words.

### 2. Run the arms

- **Claude arms** run as fresh subagents inside Claude Code: one agent per
  problem per arm, with the skill loaded (`claude_skill` / `v1` / `v2`) or
  without it (`claude_base` / `opus_base`). Each writes
  `response.md` to its run directory. A fresh agent per response prevents
  cross-problem contamination.
- **GPT arm** runs fully outside the Claude harness via
  `bash harness/run_gpt.sh` (requires the `codex` CLI): GPT-5.5 with
  `model_reasoning_effort="xhigh"`, output captured cleanly with `-o`.

### 3. Blind

`python harness/prep_blind.py` copies each response into neutral slots
(`A.md`, `B.md`, `C.md`[, `D.md`]) using a balanced rotation: each arm
occupies each slot an equal number of times across the round. The slot
assignment is written to `rotation_map.json`, which judges never see.

### 4. Judge

Three independent judge passes per problem, each a fresh agent that sees
only the problem text and the anonymous slot files. Each judge returns one
JSON object:

```json
{
  "scores": {
    "A": {"rigor": 0-10, "calibration": 0-10, "bias_awareness": 0-10,
           "depth": 0-10, "usefulness": 0-10},
    "B": {...}, "C": {...}
  },
  "ranking": ["B", "A", "C"],
  "best": "B",
  "reasoning": "free text explaining the discrimination"
}
```

Round 2 swaps the dimensions for creative work: `originality`, `diversity`,
`boldness`, `craft`, `generativity`.

Judge instructions in rounds 1 to 3 directed the judge to score each slot
on the five dimensions, produce a strict ranking, pick a single best, and
justify the discrimination in free text. The exact prompt wording was
issued by the orchestrating session and was not committed to the repo; this
is a known gap (see EVALS.md, limitation 4). **Convention going forward:
commit the verbatim judge prompt as `judges/_prompt.md` in the round
folder.**

### 5. Aggregate and report

```
python harness/aggregate_ct.py        # round 1 -> _verdicts.json + console table
python harness/build_report_ct.py    # round 1 -> _report.html
```

(`*_creative.py` and `*_4way.py` for rounds 2 and 3.) The aggregator
de-anonymizes via the rotation map and computes per-arm dimension means,
overall mean, judge-best win counts, and average rank. The report renders
the full side-by-side responses with scores and judge notes; open it in any
browser, no server needed.

## Running a new round

1. Copy a `setup_*.py`, edit the `PROBLEMS` list, point `FE` at a new
   `round-N-shortname/` folder.
2. Generate responses for every arm (any agent harness works; keep the
   preamble identical across arms).
3. Adapt the rotation table in `prep_blind*.py` so it stays balanced for
   your arm count (each arm in each slot an equal number of times).
4. Judge with 3+ fresh, blind passes per problem. Commit the judge prompt.
5. Aggregate, build the report, commit everything including raw responses.

## Honest-use notes

- The judges in all three completed rounds were Claude agents; see
  limitation 1 in [`../docs/EVALS.md`](../docs/EVALS.md) before quoting
  the GPT-5.5 numbers especially.
- `_verdicts.json` files are derived artifacts; the ground truth is the
  per-problem `judges/*.json` plus `rotation_map.json`. The aggregators are
  deterministic, so any third party can recompute the tables from the raw
  files, which is the point of shipping them.
