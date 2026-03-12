#!/usr/bin/env python3
# @script            replace-og-image
# @category          remediator
# @purpose           feature:seo
# @scope             tools/scripts
# @owner             docs
# @needs             E-R19, F-R7
# @purpose-statement Deprecated wrapper for the legacy OG image replacement helper. Use the canonical OG generator workflow instead.
# @pipeline          manual — developer tool
# @usage             python3 tools/scripts/dev/replace-og-image.py

print("Deprecated helper.")
print("Use the canonical OG workflow instead:")
print("  node tools/scripts/snippets/generate-og-images.js")
print("  node tools/scripts/snippets/generate-seo.js --dry-run")
print("  node tools/scripts/snippets/generate-seo.js")
