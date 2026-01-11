#!/bin/bash
# Pre-build script to fetch external OpenAPI specification files
# Run this before building the docs to ensure API specs are up-to-date

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

# OpenAPI specs directory (relative to project root)
OPENAPI_DIR="$PROJECT_ROOT/ai/worker/api"

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

