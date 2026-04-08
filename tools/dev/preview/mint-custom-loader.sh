#!/usr/bin/env bash
# @script      mint-custom-loader
# @type        utility
# @concern     governance
# @niche       dev-tools
# @purpose     tooling:dev-tools
# @description Mint custom loader — launches lpd dev with an alternate docs config as the active Mint navigation source.
# @mode        integrate
# @pipeline    manual — developer tool
# @scope       generated-output
# @usage       bash tools/dev/preview/mint-custom-loader.sh [flags]
# Custom Mintlify loader for alternate docs config
# Usage: bash tools/dev/preview/mint-custom-loader.sh <custom-docs-json> [-- ...mint args]

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ "$#" -lt 1 ]; then
  echo "Usage: bash tools/dev/preview/mint-custom-loader.sh <custom-docs-json> [-- ...mint args]"
  exit 1
fi

CUSTOM_DOCS_JSON="$1"
shift

if [ "${1:-}" = "--" ]; then
  shift
fi

if [ ! -f "$CUSTOM_DOCS_JSON" ]; then
  FALLBACK_DOCS_JSON="$REPO_ROOT/tools/config/scoped-navigation/$(basename "$CUSTOM_DOCS_JSON")"
  if [ -f "$FALLBACK_DOCS_JSON" ]; then
    CUSTOM_DOCS_JSON="$FALLBACK_DOCS_JSON"
  else
    echo "Error: $CUSTOM_DOCS_JSON not found."
    exit 1
  fi
fi

echo "Launching Mint with alternate docs config: $CUSTOM_DOCS_JSON"
exec bash "$REPO_ROOT/tools/lpd" dev --scoped --docs-config "$CUSTOM_DOCS_JSON" -- "$@"
