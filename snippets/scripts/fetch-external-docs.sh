#!/bin/bash
# Pre-build script to fetch external markdown files
# Run this before building the docs to ensure external content is up-to-date
# Sanitizes markdown to be MDX-compatible

set -e

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

echo "Fetching external documentation..."

# Fetch Livepeer Wiki README
echo "  → Fetching livepeer/wiki README.md..."
curl -sL "https://raw.githubusercontent.com/livepeer/wiki/master/README.md" | sanitize_for_mdx > "$EXTERNAL_DIR/wiki-readme.mdx"

# Fetch Awesome Livepeer README
echo "  → Fetching livepeer/awesome-livepeer README.md..."
curl -sL "https://raw.githubusercontent.com/livepeer/awesome-livepeer/master/README.md" | sanitize_for_mdx > "$EXTERNAL_DIR/awesome-livepeer-readme.mdx"

# Fetch Livepeer Whitepaper
echo "  → Fetching livepeer/wiki WHITEPAPER.md..."
curl -sL "https://raw.githubusercontent.com/livepeer/wiki/master/WHITEPAPER.md" | sanitize_for_mdx > "$EXTERNAL_DIR/whitepaper.mdx"

# Fetch GWID Gateway README
echo "  → Fetching videoDAC/livepeer-gateway README.md..."
curl -sL "https://raw.githubusercontent.com/videoDAC/livepeer-gateway/master/README.md" | sanitize_for_mdx > "$EXTERNAL_DIR/gwid-readme.mdx"

# Fetch go-livepeer box.md (full file)
echo "  → Fetching livepeer/go-livepeer box/box.md..."
curl -sL "https://raw.githubusercontent.com/livepeer/go-livepeer/master/box/box.md" | sanitize_for_mdx > "$EXTERNAL_DIR/box-additional-config.mdx"

echo "✓ External docs fetched successfully to $EXTERNAL_DIR"

