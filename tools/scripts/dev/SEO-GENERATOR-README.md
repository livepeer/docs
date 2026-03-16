# SEO Generator Workflow

This developer note documents the current Open Graph metadata workflow for the repository.

## Canonical flow

1. Generate the shared PNG assets and manifest:

```bash
node tools/scripts/snippets/generate-og-images.js
```

2. Preview frontmatter normalization:

```bash
node tools/scripts/snippets/generate-seo.js --dry-run
```

3. Apply frontmatter normalization:

```bash
node tools/scripts/snippets/generate-seo.js
```

## Current behavior

`generate-og-images.js` writes:

- `snippets/assets/site/og-image/fallback.png`
- one section-level PNG per top-level tab per locale
- `snippets/assets/site/og-image/manifest.json`

`generate-seo.js` then:

- normalizes authored MDX files in `v2/`, `docs/`, `docs-guide/`, `contribute/`, and `snippets/pages/`
- backfills `keywords` when missing
- backfills `description` when missing
- writes canonical Open Graph fields:
  - `og:image`
  - `og:image:alt`
  - `og:image:type`
  - `og:image:width`
  - `og:image:height`

## OG policy

- docs.json-routable pages use the top-level tab image for their locale
- non-routable authored pages use the fallback image
- `og:image` must be a local raster asset
- GitHub `blob` URLs, SVG OG assets, and external OG URLs are not part of the supported workflow

## Legacy helpers

The older dev helpers that pointed at `snippets/assets/domain/**` are deprecated wrappers now. Use the two scripts above instead of the previous one-off replacement helpers.
