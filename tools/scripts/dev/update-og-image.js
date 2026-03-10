#!/usr/bin/env node
/**
 * @script update-og-image
 * @summary Deprecated wrapper for legacy OG image replacement. Use the canonical OG generator workflow instead.
 * @owner docs
 * @scope tools/scripts
 * @pipeline manual — interactive developer helper
 *
 * @usage
 *   node tools/scripts/dev/update-og-image.js
 *
 * @inputs
 *   No inputs. This wrapper only prints the supported replacement workflow.
 *
 * @outputs
 *   - Console guidance for the supported OG image workflow
 *
 * @exit-codes
 *   0 = guidance printed
 *
 * @examples
 *   node tools/scripts/dev/update-og-image.js
 *
 * @notes
 *   Legacy path-based OG replacements are intentionally disabled.
 */

console.log("Deprecated helper.");
console.log("Use the canonical OG workflow instead:");
console.log("  node tools/scripts/snippets/generate-og-images.js");
console.log("  node tools/scripts/snippets/generate-seo.js --dry-run");
console.log("  node tools/scripts/snippets/generate-seo.js");
