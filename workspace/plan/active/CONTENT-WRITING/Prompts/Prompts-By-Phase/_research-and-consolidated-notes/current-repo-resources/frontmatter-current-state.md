# Frontmatter — Current State

**What these are**: The code and planning file defining current frontmatter validation and the pending migration to Phase 1 canonical values.
**Use in**: Phase 2 (structure audit) — when auditing existing pages, check frontmatter against current valid values. Phase 3 — when generating frontmatter for rewrites, use canonical values (not old ones).

---

## Files

### tools/lib/frontmatter-taxonomy.js
**Source**: `tools/lib/frontmatter-taxonomy.js`
**What it contains**: Current code-level definitions of valid frontmatter values. Exports: `CANONICAL_PAGE_TYPES`, `CANONICAL_PURPOSES`, `PAGE_TYPE_ALLOWED_PURPOSES`, validation functions.
**Important**: This file still uses the OLD schema (12-type pageType, old purpose names). Any page using new canonical values (`navigation`, `instruction`, `resource`, `orient`, `build`) will currently fail validation. Pending update tracked in `Frameworks/frontmatter-taxonomy-update.md`.

### Frameworks/frontmatter-taxonomy-update.md
**Source**: `workspace/plan/active/CONTENT-WRITING/Frameworks/frontmatter-taxonomy-update.md`
**Status**: Ready to implement
**What it contains**: Exact spec for what needs to change in `frontmatter-taxonomy.js` — new pageType values, new purpose values, deprecated alias map, related files to update.

---

## Current valid values (old schema — what the validator currently accepts)

**pageType** (12 types): `landing`, `overview`, `tutorial`, `quickstart`, `how_to`, `concept`, `reference`, `faq`, `troubleshooting`, `changelog`, `glossary`, `guide`

**Phase 1 canonical values** (new — what you should use in rewrites):
- **pageType** (7 types): `navigation`, `concept`, `tutorial`, `guide`, `instruction`, `reference`, `resource`
- **purpose** (15 values): `orient`, `explain`, `choose`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `optimize`, `integrate`, `verify`, `compare`, `reference`, `learn`, `update`

Until `frontmatter-taxonomy.js` is updated, new-schema pages will fail the automated frontmatter validator. Tag rewrite outputs clearly so this is visible.
