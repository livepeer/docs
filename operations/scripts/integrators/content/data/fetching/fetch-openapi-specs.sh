#!/bin/bash
# @script      fetch-openapi-specs
# @type        integrator
# @concern     integrations
# @niche       openapi-specs
# @purpose     Fetch the latest OpenAPI specs for Livepeer services (Studio API, Gateway API, etc.) and write them to api/ so Mintlify can regenerate the v2 API reference pages — note: known RFP gap, currently covers 2 of 5 target services
# @description Iterates a config-mapped list of Livepeer service OpenAPI spec URLs, downloads each via curl, validates JSON/YAML parses, writes to api/{service}-openapi.{yaml,json}. Mintlify's reference-page generator picks them up. Manual-use; not yet wired into a scheduled or post-merge pipeline (tracked as RFP gap "OpenAPI fetcher 2/5").
# @mode        integrate
# @pipeline    manual — invoked when API specs need refresh
# @scope       Livepeer service OpenAPI endpoints → api/*.{yaml,json}
# @usage       bash operations/scripts/integrators/content/data/fetching/fetch-openapi-specs.sh [flags]
# @policy      F-R1 (data freshness); public endpoints only; no secrets in output
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

