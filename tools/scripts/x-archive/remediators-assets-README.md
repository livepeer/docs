# Asset Migration - Remediator Scripts

## migrate-assets-to-branch.js

Manifest-driven remediator. Reads `tasks/reports/media-audit/media-audit-manifest.json`,
copies flagged assets to `docs-v2-assets`, rewrites MDX/JSX references to raw GitHub URLs,
and removes local files once copy and reference phases succeed.

Repair lifecycle: run `audit-media-assets.js` first to generate or refresh the manifest,
review the output, then run this script.

```bash
# 1. Audit (read-only)
node tools/scripts/audit-media-assets.js

# 2. Review tasks/reports/media-audit/media-audit-summary.md

# 3. Dry-run the repair
node tools/scripts/remediators/assets/migrate-assets-to-branch.js --dry-run

# 4. Execute
node tools/scripts/remediators/assets/migrate-assets-to-branch.js --write
```

## Relationship to sync-large-assets.yml

`.github/workflows/sync-large-assets.yml` auto-mirrors files &gt;=20 MB to `docs-v2-assets`
on push to `docs-v2`. It is threshold-based and does not rewrite MDX/JSX links.

Known gap: the workflow threshold (20 MB) does not match the manifest thresholds
(5 MB for video, 1 MB for GIF). Files between 1-20 MB that are flagged by the
manifest will not be auto-synced by the workflow.

Authoritative path: `migrate-assets-to-branch.js` is the canonical migration tool.
The workflow provides a safety net for very large files only.

## Planned CDN migration

When Cloudflare R2 is provisioned, create a parallel remediator
`migrate-assets-to-cdn.js` that reads the same manifest, uploads to R2, and
rewrites raw GitHub URLs to CDN URLs. The `migrate-assets-to-branch.js` script
will then serve as the staging step only.
