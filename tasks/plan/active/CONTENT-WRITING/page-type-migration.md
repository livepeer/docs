# Plan: pageType Bulk Migration — Phase 1 Deprecated Values

**Status**: Ready to execute
**Date**: 2026-03-21
**Source of truth**: `tasks/plan/active/CONTENT-WRITING/framework.md`
**Total pages to migrate**: 228

---

## Summary

| pageType | Count | Alias? | Action |
|---|---|---|---|
| `overview` | 106 | **No** — immediate validator failure | Judgment-required: per-page decision |
| `landing` | 51 | Yes → `navigation` | Mechanical |
| `how_to` | 38 | Yes → `instruction` | Mechanical |
| `quickstart` | 20 | Yes → `instruction` | Mechanical + add `pageVariant: quickstart` |
| `changelog` | 5 | Yes → `reference` | Mechanical + add `pageVariant: changelog` |
| `glossary` | 4 | Yes → `reference` | Mechanical + add `pageVariant: compendium` |
| `faq` | 2 | Yes → `reference` | Mechanical + add `pageVariant: compendium` |
| `troubleshooting` | 2 | Yes → `reference` | Mechanical + add `pageVariant: compendium` |

---

## Execution Order

### Pass 1 — Mechanical migrations (122 pages, safe to script)

All of these have unambiguous new values. Can use a script or global search-replace with per-type verification.

#### `landing` → `navigation` (51 pages)
Add `pageVariant: portal` for frame-mode portal pages, `pageVariant: landing` for plain navigation pages. Use the page name/path to distinguish:
- Named `portal.mdx` or `*-portal.mdx` → `pageVariant: portal`
- Named `navigator.mdx`, `*-hub.mdx`, `trending-*.mdx`, `news-*.mdx` etc. → no variant (plain navigation)

```yaml
pageType: navigation   # was: landing
pageVariant: portal    # only for portal/hub pages
```

#### `how_to` → `instruction` (38 pages)
No variant needed unless the page title/content suggests `quickstart` or `setup`. Most of these are operational steps → plain `instruction`.

```yaml
pageType: instruction  # was: how_to
```

#### `quickstart` → `instruction` (20 pages)
Add `pageVariant: quickstart`.

```yaml
pageType: instruction    # was: quickstart
pageVariant: quickstart
```

#### `changelog` → `reference` (5 pages)
Add `pageVariant: changelog`. Update `purpose: changelog` → `purpose: update`.

```yaml
pageType: reference    # was: changelog
pageVariant: changelog
purpose: update        # was: changelog (if set)
```

#### `glossary` → `reference` (4 pages)
Add `pageVariant: compendium`. Update `purpose: glossary` → `purpose: reference`.

```yaml
pageType: reference    # was: glossary
pageVariant: compendium
purpose: reference     # was: glossary (if set)
```

#### `faq` → `reference` (2 pages)
Add `pageVariant: compendium`. Update `purpose: faq` → `purpose: reference`.

```yaml
pageType: reference    # was: faq
pageVariant: compendium
purpose: reference     # was: faq (if set)
```

#### `troubleshooting` → `reference` (2 pages)
Add `pageVariant: compendium`. Update `purpose: troubleshooting` → `purpose: troubleshoot`.

```yaml
pageType: reference    # was: troubleshooting
pageVariant: compendium
purpose: troubleshoot  # was: troubleshooting (if set)
```

---

### Pass 2 — `overview` judgment migration (106 pages)

`overview` has no alias — these pages are **currently failing validation**. Each needs an explicit decision. The correct new type varies by page function.

#### Decision rules

| Page pattern | Correct new type |
|---|---|
| `index.mdx` — site root or tab root | `navigation` (no variant, or `pageVariant: landing`) |
| `portal.mdx`, `*-portal.mdx` — frame-mode portal | `navigation, pageVariant: portal` |
| `overview.mdx` inside a content section | `concept, pageVariant: overview` |
| `guide.mdx` with `pageType: overview` — section entry guide | `guide, pageVariant: overview` |
| Guide-internal overview (entry to a guide group) | `guide, pageVariant: overview` |
| Studio API section overviews (`api-reference/*/overview.mdx`) | `reference, pageVariant: overview` |
| Workspace/archived/deprecated paths (`_workspace`, `x-archived`, `x-deprecated`, `_archive`, `_contextData`) | Low priority — update but no urgency |

#### Category breakdown

**Routable index pages (13)** — `pageType: navigation`
```
v2/index.mdx                    v2/home/index.mdx
v2/about/index.mdx              v2/community/index.mdx
v2/developers/index.mdx         v2/gateways/index.mdx
v2/orchestrators/index.mdx      v2/lpt/index.mdx
v2/resources/index.mdx          v2/solutions/index.mdx
v2/internal/index.mdx           v2/cn/index.mdx
v2/x-archived/index.mdx
```
→ `pageType: navigation` (root tab entries are pure routing; no variant or `pageVariant: landing`)

**Localisation index pages (2)** — `pageType: navigation`
```
v2/es/index.mdx   v2/fr/index.mdx
```

**Section overview pages with content (many)** — `pageType: concept, pageVariant: overview`
e.g. `v2/about/livepeer-network/overview.mdx`, `v2/lpt/governance/overview.mdx`, all `v2/solutions/livepeer-studio/*/overview.mdx`, etc.
→ These are conceptual entry pages for a section — `pageType: concept, pageVariant: overview`

**Section guide entries** — `pageType: guide, pageVariant: overview`
e.g. `v2/orchestrators/setup/guide.mdx`, `v2/gateways/guides/node-pipelines/guide.mdx`
→ These introduce a guide group — `pageType: guide, pageVariant: overview`

**Studio API section overviews** — `pageType: reference, pageVariant: overview`
```
v2/solutions/livepeer-studio/api-reference/assets/overview.mdx
v2/solutions/livepeer-studio/api-reference/multistream/overview.mdx
... (all api-reference/*/overview.mdx)
```
→ These orient within an API reference section — `pageType: reference, pageVariant: overview`

**v2/templates/ pages (13)** — mirror the `snippets/templates/` source files
These are routable copies of the template files. Already updated at source in `snippets/templates/`. Apply the same changes:
```
overview-page-template.mdx            → concept, pageVariant: overview
faq-page-template.mdx                 → reference, pageVariant: compendium
troubleshooting-page-template.mdx     → reference, pageVariant: compendium
how-to-page-template.mdx              → instruction
landing-frame-page-template.mdx       → navigation, pageVariant: portal
... (same mapping as snippets/templates/)
```

**Workspace/archive/deprecated** (remainder) — lower priority, batch update with `concept, pageVariant: overview` as safe default; review individual page intent when those sections are worked on.

---

## Script Update Required First

Before running the mechanical pass, update `add-pagetype-mechanical.js` line 26:

```js
// Current (broken):
const SUMMARY_TYPES = ['reference', 'landing', 'quickstart', 'glossary', 'overview', 'faq', 'troubleshooting'];

// Updated:
const SUMMARY_TYPES = ['reference', 'navigation', 'instruction', 'resource', 'concept', 'guide', 'tutorial'];
```

---

## Execution Steps

1. **Update `add-pagetype-mechanical.js`** `SUMMARY_TYPES` (5 min)
2. **Pass 1 — mechanical** (can batch-script): `landing`, `how_to`, `quickstart`, `changelog`, `glossary`, `faq`, `troubleshooting` (122 pages)
3. **Pass 2A — `overview` routable pages**: index pages + known section overviews + Studio API overviews (approx 40 pages)
4. **Pass 2B — `overview` v2/templates/ pages**: apply same mapping as `snippets/templates/` (13 pages)
5. **Pass 2C — `overview` workspace/archive pages**: safe default `concept, pageVariant: overview` (remainder)
6. **Run validator** after each pass: `node tools/scripts/validators/content/classification/validate-frontmatter.js` (or equivalent)

---

## Files NOT in scope here

- `snippets/templates/` — already updated in previous task
- `docs-guide/frameworks/page-taxonomy-framework.mdx` — separate docs update task
- `docs-guide/` internal pages — separate audit

---

## Open Questions

| # | Question | Impact |
|---|---|---|
| O1 | `v2/about/livepeer-overview.mdx` and `v2/solutions/solution-providers.mdx` are named `.mdx` not `overview.mdx` but have `pageType: overview` — check actual content to confirm `concept` is right | 2 pages |
| O2 | `v2/orchestrators/setup/guide.mdx` + `v2/orchestrators/quickstart/guide.mdx` — both named `guide.mdx` with `pageType: overview`. Are these entry pages for a guide flow (→ `guide, pageVariant: overview`) or conceptual orientation (→ `concept, pageVariant: overview`)? | 2 pages |
| O3 | `v2/home/solutions/showcase.mdx`, `verticals.mdx`, `applications.mdx` — these seem like resource/showcase pages. Should they be `resource` or `concept`? | 3 pages |
