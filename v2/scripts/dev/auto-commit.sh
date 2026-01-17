#!/bin/bash
cd /Users/alisonhaire/Documents/Livepeer/livepeer-docs-current
git checkout docs-v2-dev
git add -A
if [ -z "$(git status --porcelain)" ]; then
  exit 0
else
  git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
fi
