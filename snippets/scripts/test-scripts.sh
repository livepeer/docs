#!/bin/bash
# Test suite for snippets/scripts
# Run this before using scripts to verify they work correctly
#
# Usage: ./snippets/scripts/test-scripts.sh
#
# Exit codes:
#   0 - All tests passed
#   1 - One or more tests failed

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/paths.config.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASSED=0
FAILED=0
SKIPPED=0

# Test result tracking
pass() {
  echo -e "${GREEN}✓ PASS${NC}: $1"
  PASSED=$((PASSED + 1))
}

fail() {
  echo -e "${RED}✗ FAIL${NC}: $1"
  FAILED=$((FAILED + 1))
}

skip() {
  echo -e "${YELLOW}○ SKIP${NC}: $1"
  SKIPPED=$((SKIPPED + 1))
}

echo "========================================"
echo "  Scripts Test Suite"
echo "========================================"
echo ""

# Test 1: Check paths.config.json exists and is valid JSON
echo "--- Test: paths.config.json ---"
if [ -f "$CONFIG_FILE" ]; then
  if node -e "JSON.parse(require('fs').readFileSync('$CONFIG_FILE'))" 2>/dev/null; then
    pass "paths.config.json exists and is valid JSON"
  else
    fail "paths.config.json is not valid JSON"
  fi
else
  fail "paths.config.json does not exist"
fi

# Test 2: Check all shell scripts have valid syntax
echo ""
echo "--- Test: Shell script syntax ---"
for script in "$SCRIPT_DIR"/*.sh; do
  if [ -f "$script" ] && [ "$(basename "$script")" != "test-scripts.sh" ]; then
    script_name=$(basename "$script")
    if bash -n "$script" 2>/dev/null; then
      pass "$script_name syntax valid"
    else
      fail "$script_name syntax error"
    fi
  fi
done

# Test 3: Check Node.js scripts have valid syntax
echo ""
echo "--- Test: Node.js script syntax ---"
for script in "$SCRIPT_DIR"/*.js; do
  if [ -f "$script" ]; then
    script_name=$(basename "$script")
    if node --check "$script" 2>/dev/null; then
      pass "$script_name syntax valid"
    else
      fail "$script_name syntax error"
    fi
  fi
done

# Test 4: Check git repo root detection works
echo ""
echo "--- Test: Git repo root detection ---"
if git rev-parse --show-toplevel &>/dev/null; then
  REPO_ROOT="$(git rev-parse --show-toplevel)"
  pass "Git repo root detected: $REPO_ROOT"
else
  skip "Not in a git repository - testing config fallback"
fi

# Test 5: Check required paths from config exist
echo ""
echo "--- Test: Required paths exist ---"
if [ -f "$CONFIG_FILE" ] && command -v node &>/dev/null; then
  REPO_ROOT="${REPO_ROOT:-$(dirname "$(dirname "$SCRIPT_DIR")")}"
  
  # Check snippets folder
  SNIPPETS_PATH="$REPO_ROOT/$(node -pe "require('$CONFIG_FILE').paths.snippets")"
  if [ -d "$SNIPPETS_PATH" ]; then
    pass "snippets folder exists"
  else
    fail "snippets folder missing: $SNIPPETS_PATH"
  fi
  
  # Check docs.json
  DOCS_JSON="$REPO_ROOT/$(node -pe "require('$CONFIG_FILE').paths.docsJson")"
  if [ -f "$DOCS_JSON" ]; then
    pass "docs.json exists"
  else
    fail "docs.json missing: $DOCS_JSON"
  fi
  
  # Check components folder
  COMPONENTS="$REPO_ROOT/$(node -pe "require('$CONFIG_FILE').paths.snippetsComponents")"
  if [ -d "$COMPONENTS" ]; then
    pass "snippets/components folder exists"
  else
    fail "snippets/components folder missing"
  fi
fi

# Test 6: Dry run update-component-library.sh (check it produces output)
echo ""
echo "--- Test: update-component-library.sh dry run ---"
OUTPUT=$(bash "$SCRIPT_DIR/update-component-library.sh" 2>&1)
if echo "$OUTPUT" | grep -q "Updated"; then
  pass "update-component-library.sh runs successfully"
else
  fail "update-component-library.sh failed: $OUTPUT"
fi

# Test 7: Dry run generate-docs-status.js
echo ""
echo "--- Test: generate-docs-status.js dry run ---"
OUTPUT=$(node "$SCRIPT_DIR/generate-docs-status.js" 2>&1)
if echo "$OUTPUT" | grep -q "Generated"; then
  pass "generate-docs-status.js runs successfully"
else
  fail "generate-docs-status.js failed: $OUTPUT"
fi

# Summary
echo ""
echo "========================================"
echo "  Test Summary"
echo "========================================"
echo -e "  ${GREEN}Passed${NC}: $PASSED"
echo -e "  ${RED}Failed${NC}: $FAILED"
echo -e "  ${YELLOW}Skipped${NC}: $SKIPPED"
echo "========================================"

if [ $FAILED -gt 0 ]; then
  exit 1
else
  exit 0
fi

