# docs-v2-assets — Media Asset Store

This branch holds large binary media files removed from the `docs-v2` working
tree to reduce repository size.

## Contents

- `snippets/assets/media/videos/` — video files referenced by MDX pages
- `snippets/assets/media/gifs/` — animated GIFs
- `snippets/assets/domain/02_COMMUNITY/Hero Images/` — large hero PNGs

## How files are referenced

MDX files reference assets via raw GitHub URLs:

```
https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/<path>
```

Example:

```mdx
<video autoPlay muted loop playsInline>
  <source
    src="https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/HeroBackground.mp4"
    type="video/mp4"
  />
</video>
```

## Planned CDN migration

Long-term target is Cloudflare R2 (`livepeer-docs-media` bucket). When provisioned:

1. Upload all files from this branch to R2
2. Update MDX references from raw GitHub URLs to the R2 CDN URL
3. This branch can be archived

The audit script at `tools/scripts/audit-media-assets.js` regenerates the full
asset manifest. Run from the repo root on `docs-v2`.

## Adding new media

Do not commit large media directly to `docs-v2`. Add files to this branch first,
then reference via raw GitHub URL in MDX.
