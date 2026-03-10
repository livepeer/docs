#!/usr/bin/env node
/**
 * @script seo-generator-safe
 * @summary Deprecated wrapper for the legacy safe SEO generator. Use the canonical OG generator workflow instead.
 * @owner docs
 * @scope tools/scripts
 * @pipeline manual — interactive developer helper
 *
 * @usage
 *   node tools/scripts/dev/seo-generator-safe.js
 *
 * @inputs
 *   No inputs. This wrapper only prints the supported replacement workflow.
 *
 * @outputs
 *   - Console guidance for the supported SEO generator workflow
 *
 * @exit-codes
 *   0 = guidance printed
 *
 * @examples
 *   node tools/scripts/dev/seo-generator-safe.js
 *
 * @notes
 *   Legacy domain-image OG replacement logic is intentionally disabled.
 */

console.log("Deprecated helper.");
console.log("Use the canonical OG workflow instead:");
console.log("  node tools/scripts/snippets/generate-og-images.js");
console.log("  node tools/scripts/snippets/generate-seo.js --dry-run");
console.log("  node tools/scripts/snippets/generate-seo.js");
