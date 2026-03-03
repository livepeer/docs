#!/bin/bash
# @script fetch-external-docs
# @summary Utility script for tools/scripts/snippets/fetch-external-docs.sh.
# @owner docs
# @scope tools/scripts
#
# @usage
#   bash tools/scripts/snippets/fetch-external-docs.sh
#
# @inputs
#   No required CLI flags; optional flags are documented inline.
#
# @outputs
#   - Console output and/or file updates based on script purpose.
#
# @exit-codes
#   0 = success
#   1 = runtime or validation failure
#
# @examples
#   bash tools/scripts/snippets/fetch-external-docs.sh
#
# @notes
#   Keep script behavior deterministic and update script indexes after changes.
# Pre-build script to fetch external markdown files
# Run this before building the docs to ensure external content is up-to-date
# Sanitizes markdown to be MDX-compatible

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/paths.config.json"

# Try to detect repo root via git, fallback to config file
if git rev-parse --show-toplevel &>/dev/null; then
  REPO_ROOT="$(git rev-parse --show-toplevel)"
elif [ -f "$CONFIG_FILE" ]; then
  echo "Warning: Not in a git repo, using paths.config.json"
  # Walk up from script dir to find repo root (where docs.json exists)
  REPO_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
else
  echo "Error: Cannot determine repo root. Run from git repo or ensure paths.config.json exists."
  exit 1
fi

# Read path from config or use default
if [ -f "$CONFIG_FILE" ] && command -v node &>/dev/null; then
  EXTERNAL_DIR="$REPO_ROOT/$(node -pe "require('$CONFIG_FILE').paths.snippetsExternal")"
else
  EXTERNAL_DIR="$REPO_ROOT/snippets/external"
fi

# Create external docs directory if it doesn't exist
mkdir -p "$EXTERNAL_DIR"

if [ "${MINT_SKIP_EXTERNAL_FETCH:-0}" = "1" ]; then
  echo "Skipping external documentation fetch (MINT_SKIP_EXTERNAL_FETCH=1)."
  exit 0
fi

TTL_HOURS="${MINT_EXTERNAL_FETCH_TTL_HOURS:-24}"
if ! [[ "$TTL_HOURS" =~ ^[0-9]+$ ]]; then
  TTL_HOURS=24
fi

LAST_FETCH_FILE="$EXTERNAL_DIR/.last_fetch"
if [ "${MINT_EXTERNAL_FETCH_FORCE:-0}" != "1" ] && [ -f "$LAST_FETCH_FILE" ]; then
  LAST_FETCH_TS="$(cat "$LAST_FETCH_FILE" || echo "")"
  if [[ "$LAST_FETCH_TS" =~ ^[0-9]+$ ]]; then
    NOW_TS="$(date +%s)"
    AGE_HOURS=$(( (NOW_TS - LAST_FETCH_TS) / 3600 ))
    if [ "$AGE_HOURS" -lt "$TTL_HOURS" ]; then
      echo "Skipping external documentation fetch (cached ${AGE_HOURS}h < ${TTL_HOURS}h)."
      exit 0
    fi
  fi
fi

# Function to sanitize markdown for MDX compatibility
sanitize_for_mdx() {
  perl -pe '
    # Escape curly braces
    s/\{/\&#123;/g;
    s/\}/\&#125;/g;
    # Remove HTML comments
    s/<!--.*?-->//g;
    # Remove div, p, picture, source, span tags
    s/<\/?div[^>]*>//gi;
    s/<\/?p[^>]*>//gi;
    s/<\/?picture[^>]*>//gi;
    s/<source[^>]*\/?>//gi;
    s/<\/?span[^>]*>//gi;
    # Convert <a> tags to markdown links
    s/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/[$2]($1)/gi;
    # Convert <img> tags to markdown images
    s/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/![$1]($2)/gi;
    s/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/![$2]($1)/gi;
    s/<img[^>]*src="([^"]*)"[^>]*\/?>/![]($1)/gi;
    # Convert br and hr
    s/<br[^>]*\/?>/\n/gi;
    s/<hr[^>]*\/?>/---/gi;
    # Remove any remaining HTML tags
    s/<[^>]+>//g;
  '
}

fetch_external_doc() {
  local label="$1"
  local url="$2"
  local output_file="$3"
  local temp_file
  temp_file="$(mktemp)"

  echo "  → Fetching ${label}..."

  if ! curl --fail --silent --show-error --location --retry 3 --retry-delay 2 --retry-connrefused "$url" \
    | sanitize_for_mdx > "$temp_file"; then
    echo "Error: failed to fetch ${label} from ${url}" >&2
    rm -f "$temp_file"
    exit 1
  fi

  if [ ! -s "$temp_file" ]; then
    echo "Error: fetched content for ${label} is empty (${url})" >&2
    rm -f "$temp_file"
    exit 1
  fi

  mv "$temp_file" "$output_file"
}

echo "Fetching external documentation..."

# Fetch Livepeer Wiki README
fetch_external_doc \
  "livepeer/wiki README.md" \
  "https://raw.githubusercontent.com/livepeer/wiki/master/README.md" \
  "$EXTERNAL_DIR/wiki-readme.mdx"

# Fetch Awesome Livepeer README
fetch_external_doc \
  "livepeer/awesome-livepeer README.md" \
  "https://raw.githubusercontent.com/livepeer/awesome-livepeer/master/README.md" \
  "$EXTERNAL_DIR/awesome-livepeer-readme.mdx"

# Fetch Livepeer Whitepaper
fetch_external_doc \
  "livepeer/wiki WHITEPAPER.md" \
  "https://raw.githubusercontent.com/livepeer/wiki/master/WHITEPAPER.md" \
  "$EXTERNAL_DIR/whitepaper.mdx"

# Fetch GWID Gateway README
fetch_external_doc \
  "videoDAC/livepeer-gateway README.md" \
  "https://raw.githubusercontent.com/videoDAC/livepeer-gateway/master/README.md" \
  "$EXTERNAL_DIR/gwid-readme.mdx"

# Fetch go-livepeer box.md (full file)
fetch_external_doc \
  "livepeer/go-livepeer box/box.md" \
  "https://raw.githubusercontent.com/livepeer/go-livepeer/master/box/box.md" \
  "$EXTERNAL_DIR/box-additional-config.mdx"

date +%s > "$LAST_FETCH_FILE"

echo "✓ External docs fetched successfully to $EXTERNAL_DIR"
