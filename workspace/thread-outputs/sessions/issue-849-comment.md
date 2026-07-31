Thanks for the thorough write-up, @rickstaa.

### Root cause
We had a `sync-large-assets.yml` workflow designed to mirror large files to a `docs-v2-assets` branch which was used manually though not in production successfully.

Root cause issue: bash heredocs (`<<EOF`, `<<MANIFEST`) inside a YAML `|` block put content at column 0, breaking GitHub Actions' YAML parser. Every run since creation failed at parse time — 0s duration, "workflow file issue" error.

### What's been done

**Workflow fix** — #851 (targeting `main`):
- Replaced heredocs with `printf`/`echo`
- Lowered threshold from 20 MB to 1 MB
- Added weekly cron schedule + `paths:` filter
- Added `dry_run` input for safe testing

**Asset migration** — already executed on `docs-v2-dev`:
- 19 assets (large PNGs, mp4s, gifs) from `snippets/assets/` migrated to the `docs-v2-assets` branch
- MDX references rewritten to `raw.githubusercontent.com` URLs
- 3-layer pre-delete verification: HTTP 200 check on all remote URLs, MDX parse validation, Puppeteer render check on affected pages
- Local copies deleted after verification passed
- `snippets/assets/` reduced from 134 MB to 97 MB (remaining files are under threshold)

### What's still needed
1. **Merge #851 to `main`** — enables cron and `workflow_dispatch` triggers for ongoing sync. We don't have merge access to `main` — requesting review.
2. **Clean `.gitattributes`** — LFS declarations are dead config (LFS was enabled then reverted, attributes restored but files never migrated). Will remove in follow-up.
3. **`git filter-repo`** to purge binaries from history — the real repo size reduction. Needs a force-push, so coordinating separately.
4. **v1 assets** — scoped out of this migration (frozen, different MDX format). 12 files over 1 MB remain in `v1/images/`.
