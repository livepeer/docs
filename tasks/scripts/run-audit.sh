#!/bin/bash
cd "$(dirname "$0")/../../.." || exit 1
echo "Running audit from: $(pwd)"
echo "Script exists: $([ -f tasks/PLAN/scripts/audit-all-pages-simple.js ] && echo 'YES' || echo 'NO')"
node tasks/PLAN/scripts/audit-all-pages-simple.js
echo "Exit code: $?"
ls -lh tasks/PLAN/reports/*simple* 2>/dev/null | tail -3 || echo "No simple audit files created"
