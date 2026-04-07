#!/usr/bin/env bash
# @script            batch-update-og-image
# @category          remediator
# @purpose           feature:seo
# @scope             tools/scripts
# @owner             docs
# @needs             E-R19, F-R7
# @purpose-statement Deprecated wrapper for the legacy bulk OG image replacement helper. Use the canonical OG generator workflow instead.
# @pipeline          manual — developer tool
# @usage             bash tools/scripts/dev/batch-update-og-image.sh
echo "Deprecated helper."
echo "Use the canonical OG workflow instead:"
echo "  node tools/scripts/snippets/generate-og-images.js"
echo "  node tools/scripts/snippets/generate-seo.js --dry-run"
echo "  node tools/scripts/snippets/generate-seo.js"
