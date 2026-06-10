#!/usr/bin/env bash
# Run GPT-5.5 (xhigh) on all 8 v1-vs-v2 eval problems in parallel via codex exec.
set -u
FE="$(cd "$(dirname "$0")/.." && pwd)/round-3-v1-vs-v2"

run_one() {
  local i="$1"
  local d="$FE/prompt-$i/gpt5/run-1"
  codex exec -s read-only --skip-git-repo-check --ephemeral \
    -m gpt-5.5 -c model_reasoning_effort="xhigh" \
    -o "$d/response.md" "$(cat "$d/prompt.txt")" > "$d/codex.log" 2>&1
  echo "done p$i (exit $?)"
}

for i in 0 1 2 3 4 5 6 7; do
  run_one "$i" &
done
wait
echo "ALL_GPT_DONE"
