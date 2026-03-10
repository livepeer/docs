#!/usr/bin/env python3
# @script replace-og-image
# @summary Deprecated wrapper for the legacy OG image replacement helper. Use the canonical OG generator workflow instead.
# @owner docs
# @scope tools/scripts
#
# @usage
#   python3 tools/scripts/dev/replace-og-image.py
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
#   python3 tools/scripts/dev/replace-og-image.py
#
# @notes
#   Legacy path-based OG replacements are intentionally disabled.

print("Deprecated helper.")
print("Use the canonical OG workflow instead:")
print("  node tools/scripts/snippets/generate-og-images.js")
print("  node tools/scripts/snippets/generate-seo.js --dry-run")
print("  node tools/scripts/snippets/generate-seo.js")
