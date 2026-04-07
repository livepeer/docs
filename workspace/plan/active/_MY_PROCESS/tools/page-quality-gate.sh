#!/usr/bin/env bash
# page-quality-gate.sh — Local enforcement gate for content pipeline
# Usage: ./page-quality-gate.sh <path-to-mdx-file>
# Returns: 0 if PASS, 1 if FAIL
# Output: Structured report with PASS/FAIL per check

set -uo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 <path-to-mdx-file>"
  exit 2
fi

FILE="$1"
if [ ! -f "$FILE" ]; then
  echo "ERROR: File not found: $FILE"
  exit 2
fi

REPO_ROOT="$(cd "$(dirname "$0")/../../../.." && pwd)"
PASS_COUNT=0
FAIL_COUNT=0
TOTAL=0
REPORT=""

check() {
  local name="$1"
  local result="$2"
  local detail="$3"
  TOTAL=$((TOTAL + 1))
  if [ "$result" = "PASS" ]; then
    PASS_COUNT=$((PASS_COUNT + 1))
    REPORT="${REPORT}  ✅ ${name}\n"
  else
    FAIL_COUNT=$((FAIL_COUNT + 1))
    REPORT="${REPORT}  ❌ ${name}\n     ${detail}\n"
  fi
}

# Extract body content (everything after second --- frontmatter delimiter)
BODY=$(awk '/^---$/{c++;next}c>=2' "$FILE")

echo ""
echo "═══════════════════════════════════════════════"
echo "  PAGE QUALITY GATE"
echo "  File: $FILE"
echo "═══════════════════════════════════════════════"
echo ""

# -------------------------------------------------------------------
# CHECK 1: Banned words
# -------------------------------------------------------------------
BANNED_WORDS="effectively|essentially|basically|meaningful|significant|obviously|clearly"
MATCHES=$(grep -inw "$BANNED_WORDS" "$FILE" 2>/dev/null | grep -v "^---" | grep -v "^[[:space:]]*#" | grep -v "{/\*" | head -5 || true)
if [ -z "$MATCHES" ]; then
  check "Banned words" "PASS" ""
else
  check "Banned words" "FAIL" "$(echo "$MATCHES" | head -3)"
fi

# -------------------------------------------------------------------
# CHECK 2: Banned phrases
# -------------------------------------------------------------------
BANNED_PHRASES="This page explains|This page covers|This section covers|This page walks|Understanding .* is essential|It is important to note|As mentioned above"
MATCHES=$(grep -in "$BANNED_PHRASES" "$FILE" 2>/dev/null | grep -v "{/\*" | head -5 || true)
if [ -z "$MATCHES" ]; then
  check "Banned phrases" "PASS" ""
else
  check "Banned phrases" "FAIL" "$(echo "$MATCHES" | head -3)"
fi

# -------------------------------------------------------------------
# CHECK 3: TODO comments (editorial debt)
# -------------------------------------------------------------------
MATCHES=$(grep -n "{/\* TODO" "$FILE" 2>/dev/null | head -5 || true)
if [ -z "$MATCHES" ]; then
  check "No TODO comments" "PASS" ""
else
  check "No TODO comments" "FAIL" "$(echo "$MATCHES" | head -3)"
fi

# -------------------------------------------------------------------
# CHECK 4: REVIEW flags without tracking
# -------------------------------------------------------------------
MATCHES=$(grep -n "{/\* REVIEW" "$FILE" 2>/dev/null | head -5 || true)
REVIEW_COUNT=$(echo "$MATCHES" | grep -c "REVIEW" 2>/dev/null || echo "0")
if [ "$REVIEW_COUNT" = "0" ] || [ -z "$MATCHES" ]; then
  check "No unresolved REVIEW flags" "PASS" ""
else
  check "No unresolved REVIEW flags" "FAIL" "${REVIEW_COUNT} REVIEW flag(s) found — resolve or create tracking issue"
fi

# -------------------------------------------------------------------
# CHECK 5: Self-referential openings (description field + first body paragraph)
# -------------------------------------------------------------------
# Check description (handles multi-line YAML >- format)
# Only flag SELF-REFERENTIAL patterns: "This page describes/explains/outlines/covers/walks"
# Do NOT flag entity-led descriptions like "The Livepeer protocol secures..." or "Livepeer Token (LPT) is..."
FRONTMATTER=$(awk '/^---$/{c++;next}c==1' "$FILE")
DESC_SELF_REF=$(echo "$FRONTMATTER" | grep -iE "this (page|section|document) (describes|explains|outlines|covers|walks|provides|is about)" | head -3 || true)
# Check first 5 non-frontmatter, non-import, non-component lines for self-referential opening
# Only flag when "This page/section" STARTS a prose line (not mid-sentence scoping)
FIRST_PROSE=$(echo "$BODY" | grep -v "^import\|^<\|^{/\*\|^$\|^#\|^---" | head -5)
BODY_SELF_REF=$(echo "$FIRST_PROSE" | grep -i "^This page explains\|^This page covers\|^This section covers\|^This page walks\|^This document" | head -3 || true)
if [ -z "$DESC_SELF_REF" ] && [ -z "$BODY_SELF_REF" ]; then
  check "Not self-referential (description + opening)" "PASS" ""
else
  COMBINED="${DESC_SELF_REF}${BODY_SELF_REF}"
  check "Not self-referential (description + opening)" "FAIL" "$COMBINED"
fi

# -------------------------------------------------------------------
# CHECK 6: Required frontmatter fields
# -------------------------------------------------------------------
MISSING=""
for FIELD in title pageType audience purpose; do
  if ! grep -q "^${FIELD}:" "$FILE" 2>/dev/null; then
    MISSING="${MISSING} ${FIELD}"
  fi
done
if [ -z "$MISSING" ]; then
  check "Required frontmatter (title, pageType, audience, purpose)" "PASS" ""
else
  check "Required frontmatter (title, pageType, audience, purpose)" "FAIL" "Missing:${MISSING}"
fi

# -------------------------------------------------------------------
# CHECK 7: Canonical pageType value
# -------------------------------------------------------------------
PAGETYPE=$(grep "^pageType:" "$FILE" 2>/dev/null | head -1 | sed 's/pageType:[[:space:]]*//' | tr -d "'" | tr -d '"' | tr -d ' ')
CANONICAL_TYPES="navigation concept tutorial guide instruction reference resource overview"
if [ -z "$PAGETYPE" ]; then
  check "Canonical pageType" "FAIL" "pageType field missing"
elif echo "$CANONICAL_TYPES" | grep -qw "$PAGETYPE"; then
  check "Canonical pageType" "PASS" ""
else
  check "Canonical pageType" "FAIL" "pageType '${PAGETYPE}' is not canonical (use: navigation, concept, tutorial, guide, instruction, reference, resource)"
fi

# -------------------------------------------------------------------
# CHECK 8: Canonical audience value
# -------------------------------------------------------------------
AUDIENCE=$(grep "^audience:" "$FILE" 2>/dev/null | head -1 | sed 's/audience:[[:space:]]*//' | tr -d "'" | tr -d '"' | tr -d ' ')
CANONICAL_AUDIENCES="founder builder developer gateway orchestrator delegator community general everyone"
if [ -z "$AUDIENCE" ]; then
  check "Canonical audience" "FAIL" "audience field missing"
elif echo "$CANONICAL_AUDIENCES" | grep -qw "$AUDIENCE"; then
  check "Canonical audience" "PASS" ""
else
  check "Canonical audience" "FAIL" "audience '${AUDIENCE}' is not canonical (use: founder, builder, developer, gateway, orchestrator, delegator, community)"
fi

# -------------------------------------------------------------------
# CHECK 9: Hedging in value claims (body content only)
# -------------------------------------------------------------------
HEDGE_PATTERNS="can help you|may provide|allows you to|helps you|enables you to"
MATCHES=$(echo "$BODY" | grep -in "$HEDGE_PATTERNS" 2>/dev/null | grep -v "{/\*" | head -5 || true)
if [ -z "$MATCHES" ]; then
  check "No hedging in value claims" "PASS" ""
else
  check "No hedging in value claims" "FAIL" "$(echo "$MATCHES" | head -3)"
fi

# -------------------------------------------------------------------
# CHECK 10: US English patterns
# -------------------------------------------------------------------
US_PATTERNS="organize|optimize|customize|recognize|authorize|utilize|behavior|color[^:s]|honor[^:s]|favor[^:s]"
MATCHES=$(echo "$BODY" | grep -in "$US_PATTERNS" 2>/dev/null | grep -v "{/\*" | grep -v "http" | head -5 || true)
if [ -z "$MATCHES" ]; then
  check "UK English (no US spelling)" "PASS" ""
else
  check "UK English (no US spelling)" "FAIL" "$(echo "$MATCHES" | head -3)"
fi

# -------------------------------------------------------------------
# REPORT
# -------------------------------------------------------------------
echo ""
printf "$REPORT"
echo ""
echo "═══════════════════════════════════════════════"
if [ $FAIL_COUNT -eq 0 ]; then
  echo "  RESULT: ✅ PASS ($PASS_COUNT/$TOTAL checks passed)"
else
  echo "  RESULT: ❌ FAIL ($FAIL_COUNT failures out of $TOTAL checks)"
fi
echo "═══════════════════════════════════════════════"
echo ""

exit $FAIL_COUNT
