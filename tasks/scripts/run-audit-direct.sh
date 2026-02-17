#!/bin/bash
set -e
cd "$(dirname "$0")/../../.."
echo "=== AUDIT START ===" > tasks/PLAN/reports/audit-run.log
echo "Working directory: $(pwd)" >> tasks/PLAN/reports/audit-run.log
echo "Python version: $(python3 --version 2>&1)" >> tasks/PLAN/reports/audit-run.log
echo "Node version: $(node --version 2>&1)" >> tasks/PLAN/reports/audit-run.log
echo "Running Python audit..." >> tasks/PLAN/reports/audit-run.log
python3 tasks/PLAN/scripts/audit-python.py >> tasks/PLAN/reports/audit-run.log 2>&1
echo "Exit code: $?" >> tasks/PLAN/reports/audit-run.log
echo "=== AUDIT END ===" >> tasks/PLAN/reports/audit-run.log
ls -lh tasks/PLAN/reports/*python* 2>&1 >> tasks/PLAN/reports/audit-run.log
