# SME Audit: Scripts with malformed/missing @concern

> 9 scripts need JSDoc header fixes before concern classification.

- `operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js` — current concern: `(empty)` — purpose: infrastructure:data-feeds
- `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js` — current concern: `(empty)` — purpose: infrastructure:data-feeds
- `operations/scripts/config/docs-path-sync.js` — current concern: `* @niche` — purpose: * @description Shared docs path sync library — detects staged page moves, plans deterministic route rewrites, and applies governed docs.json/path reference updates.
- `operations/scripts/config/mdx-sanitise.js` — current concern: `* @niche` — purpose: * @description Shared sanitisation utilities for all scripts that write content consumed by MDX pages.
- `operations/scripts/config/mintlify-canonical-sync.js` — current concern: `* @niche` — purpose: * @description Shared Mintlify canonical sync library — validates archived-source cleanup, consumer references, and deterministic rewrite plans for the canonical Mintlify governance surface.
- `operations/scripts/config/og-image-policy.js` — current concern: `* @niche` — purpose: * @description OG image policy helper — resolves authored MDX pages to canonical section or fallback social images and metadata.
- `operations/scripts/generators/media/generate-hero-background.js` — current concern: `* @niche       media` — purpose: content:media-generation
- `operations/scripts/generators/media/generate-hero-image.js` — current concern: `* @niche       media` — purpose: * @description generate hero image
- `operations/scripts/snippets/test-scripts.sh` — current concern: `test-scripts.sh` — purpose: tooling:dev-tools
