#!/bin/bash
# @script            fetch-openapi-specs
# @category          automation
# @purpose           tooling:api-spec
# @scope             tools/scripts
# @owner             docs
# @needs             F-R17
# @purpose-statement OpenAPI spec fetcher — pulls latest OpenAPI specs from Livepeer services for reference pages
# @pipeline          manual — not yet in pipeline
# @usage             bash tools/scripts/snippets/fetch-openapi-specs.sh [flags]
# Pre-build script to fetch external OpenAPI specification files
# Run this before building the docs to ensure API specs are up-to-date

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/paths.config.json"

# Try to detect repo root via git, fallback to config file
if git rev-parse --show-toplevel &>/dev/null; then
  REPO_ROOT="$(git rev-parse --show-toplevel)"
elif [ -f "$CONFIG_FILE" ]; then
  echo "Warning: Not in a git repo, using paths.config.json"
  REPO_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
else
  echo "Error: Cannot determine repo root. Run from git repo or ensure paths.config.json exists."
  exit 1
fi

# Read path from config or use default
if [ -f "$CONFIG_FILE" ] && command -v node &>/dev/null; then
  OPENAPI_DIR="$REPO_ROOT/$(node -pe "require('$CONFIG_FILE').paths.aiWorkerApi")"
else
  OPENAPI_DIR="$REPO_ROOT/ai/worker/api"
fi

# Create directory if it doesn't exist
mkdir -p "$OPENAPI_DIR"

echo "Fetching external OpenAPI specifications..."

# Fetch AI Runner OpenAPI spec (YAML) from livepeer/ai-runner
echo "  → Fetching livepeer/ai-runner openapi.yaml..."
curl -sL "https://raw.githubusercontent.com/livepeer/ai-runner/main/openapi.yaml" \
  -o "$OPENAPI_DIR/openapi.yaml"

# Fetch AI Gateway OpenAPI spec (YAML) from livepeer/ai-runner
echo "  → Fetching livepeer/ai-runner gateway.openapi.yaml..."
curl -sL "https://raw.githubusercontent.com/livepeer/ai-runner/main/gateway.openapi.yaml" \
  -o "$OPENAPI_DIR/gateway.openapi.yaml"

# Validate YAML files exist and have content
for file in "$OPENAPI_DIR/openapi.yaml" "$OPENAPI_DIR/gateway.openapi.yaml"; do
  if [ -s "$file" ]; then
    echo "  ✓ $(basename "$file") fetched ($(wc -c < "$file" | tr -d ' ') bytes)"
  else
    echo "  ✗ Warning: $(basename "$file") is empty or missing"
  fi
done

echo ""
echo "✓ OpenAPI specs fetched successfully"
echo "  Location: $OPENAPI_DIR"
echo ""
echo "Referenced specs:"
ls -la "$OPENAPI_DIR"/*.yaml 2>/dev/null || echo "  No YAML files found"

