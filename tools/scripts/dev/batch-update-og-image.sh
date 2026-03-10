#!/usr/bin/env bash
# @script batch-update-og-image
# @summary Deprecated wrapper for the legacy bulk OG image replacement helper. Use the canonical OG generator workflow instead.
# @owner docs
# @scope tools/scripts
#
# @usage
#   bash tools/scripts/dev/batch-update-og-image.sh
#
# @inputs
#   No inputs. This wrapper only prints the supported replacement workflow.
#
# @outputs
#   - Console guidance for the supported OG image workflow
#
# @exit-codes
#   0 = guidance printed
#
# @examples
#   bash tools/scripts/dev/batch-update-og-image.sh
#
# @notes
#   Legacy path-based OG replacements are intentionally disabled.

echo "Deprecated helper."
echo "Use the canonical OG workflow instead:"
echo "  node tools/scripts/snippets/generate-og-images.js"
echo "  node tools/scripts/snippets/generate-seo.js --dry-run"
echo "  node tools/scripts/snippets/generate-seo.js"
