#!/usr/bin/env node
/**
 * @script            update-all-og-images
 * @category          remediator
 * @purpose           feature:seo
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-R19, F-R7
 * @purpose-statement Deprecated wrapper for legacy bulk OG image replacement. Use the canonical OG generator workflow instead.
 * @pipeline          manual — developer tool
 * @usage             node tools/scripts/dev/update-all-og-images.js
 */

console.log("Deprecated helper.");
console.log("Use the canonical OG workflow instead:");
console.log("  node tools/scripts/snippets/generate-og-images.js");
console.log("  node tools/scripts/snippets/generate-seo.js --dry-run");
console.log("  node tools/scripts/snippets/generate-seo.js");
