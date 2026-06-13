# Harness (as-run)

These are the exact scripts that produced Round 5, kept for provenance and reproduction.

- `measure_expanded.py`: token telemetry. Skill-load cost (entry / realistic / full-tree) plus per-answer output tokens, via tiktoken cl100k proxy.
- `objective_expanded.js`: deterministic, length-normalized objective scorecard (quantification, bias-naming, falsifier, actionability, factual check).
- `build_judge_packets_15.js`: builds the 15-answer blind packets plus the rotation keymap.
- `aggregate_judge15.js`: de-anonymizes the 18 judge passes into per-condition judged quality.
- `build_expanded_dashboard.js`: assembles `INDEX_EXPANDED.html`, the three-track dashboard.
- `generate_banners.js`: renders the editorial SVG banners.

NOTE: paths are absolute from the build session (`D:/Claude/...`). To re-run, point the `dir` and source constants at your copy of `../data/`. The data files in `../data/` are the canonical inputs; the dashboard and banners regenerate from them.
