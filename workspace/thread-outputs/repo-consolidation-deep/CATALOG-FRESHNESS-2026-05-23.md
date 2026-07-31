# Catalog + Generated Artefact Freshness Report (2026-05-23)

Per CLAUDE.md governance rule: **never edit auto-generated files directly. Trace back to the generator source.** This report documents which generated catalogs and artefacts are stale and the exact command to regenerate each.

`docs.json` mtime = 2026-05-22 16:00 (reference point for freshness — most catalogs derive from `docs.json` + their source folder).

---

## Status summary

| Artefact | Mtime | Days behind `docs.json` | Status | Regen command |
| --- | --- | ---: | --- | --- |
| `docs-guide/catalog/scripts-catalog.mdx` | 2026-05-22 16:37 | 0 | ✅ Current | `node operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js --write` |
| `docs-guide/catalog/components-catalog.mdx` | 2026-05-18 12:09 | 5 days | 🟡 Behind | `node operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --write` |
| `docs-guide/catalog/pages-catalog.mdx` | 2026-05-14 17:14 | 9 days | 🟡 Behind | `node operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js --write` |
| `docs-guide/catalog/workflows-catalog.mdx` | 2026-05-18 12:09 | 5 days | 🔴 Stale **AND structurally wrong** — pre-dates 2026-05-22 4-tier refactor; reflects 53 workflows when live is 11 | `node operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js --write` |
| `docs-guide/catalog/templates-catalog.mdx` | 2026-04-03 06:08 | **50 days** | 🔴 Very stale | `node operations/scripts/generators/components/library/generate-ui-templates.js --write` |
| `docs-guide/catalog/ui-templates.mdx` | 2026-04-03 06:08 | **50 days** | 🔴 Very stale | `node operations/scripts/generators/components/library/generate-ui-templates.js --write` |
| `docs-guide/repo-ops/config/repo-governance-map.mdx` | 2026-05-18 19:32 | 5 days mtime; **stale per `--check`** | 🔴 Self-detected stale | `node operations/scripts/generators/governance/reports/generate-repo-governance-status.js --write` |
| `docs-guide/repo-ops/config/repo-config-map.mdx` | 2026-04-06 00:55 | 47 days | 🔴 Stale | Same as above |
| `docs-guide/repo-ops/config/root-governance-map.mdx` | 2026-04-06 00:18 | 47 days | 🔴 Stale | `node operations/scripts/generators/governance/root-allowlist.js --write` (verify path) |
| `llms.txt` | 2026-04-15 13:57 | **38 days** | 🔴 Stale | `node operations/scripts/generators/ai/llm/generate-llms-files.js --write` |
| `sitemap-ai.xml` | 2026-04-15 13:57 | **38 days** | 🔴 Stale | `lpd ai-sitemap --write` |
| `docs-index.json` | 2026-05-18 19:32 | 5 days; provenance drift (`generated` field says 2026-04-07) | 🔴 Field drift | (generator path — verify; field-update is a generator bug) |

---

## Self-detected stale (run-and-verify)

```bash
$ node operations/scripts/generators/governance/reports/generate-repo-governance-status.js --check
docs-guide/repo-ops/config/repo-governance-map.mdx is stale.
```

The system flags itself but nothing auto-runs the repair. Single command above fixes.

---

## Why the AI artefacts (`llms.txt`, `sitemap-ai.xml`) are 38 days stale

Root cause: the [cron-is-dry-run bug documented in `docs-guide/features/automations.mdx`](../../../docs-guide/features/automations.mdx#cron-is-dry-run-by-default-bug-p0-systemic).

Every `dispatch-{concern}.yml` scheduled job uses:

```yaml
FLAGS=""
if [[ "${{ inputs.dry_run }}" == "false" ]]; then FLAGS="--write --verify"; fi
```

The `schedule` event does not pass `inputs.dry_run` — it's empty, never the literal `"false"`. **Cron physically cannot trigger the write mode.** The daily cron at 04:00 UTC fires `dispatch-discoverability.yml` which regenerates `llms.txt` + `sitemap-ai.xml` — but only in dry-run mode. They never write.

**The single workflow fix invert** in 6 dispatch files unblocks 6 stale data pipelines (contracts data, llms.txt, sitemap-ai.xml, OG-images, SEO, glossary).

---

## Recommended regen sequence

After fixing the cron-is-dry-run bug, run these in order:

```bash
# 1. Governance map (self-detected stale)
node operations/scripts/generators/governance/reports/generate-repo-governance-status.js --write

# 2. Docs-guide indexes (covers components + workflows + scripts catalogs)
node operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js --write
node operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js --write
node operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --write

# 3. UI templates catalog (50 days stale)
node operations/scripts/generators/components/library/generate-ui-templates.js --write

# 4. AI artefacts (38 days stale)
node operations/scripts/generators/ai/llm/generate-llms-files.js --write
lpd ai-sitemap --write

# 5. Verify all generated outputs are now fresh
node operations/scripts/generators/governance/reports/generate-repo-governance-status.js --check
```

Run from repo root with `PATH="/opt/homebrew/bin:$PATH"` if Homebrew Node is not on shell PATH.

---

## Long-term fix

Per `docs-guide/features/automations.mdx` § Known gaps, the structural fix is:

1. **Invert the FLAGS pattern** in all 6 `dispatch-{concern}.yml`:
   ```yaml
   FLAGS="--write --verify"
   if [[ "${{ inputs.dry_run }}" == "true" ]]; then FLAGS=""; fi
   ```
2. **OR** add a separate `scheduled-write` job per dispatcher that does not inherit the dry-run default.
3. Either way: add a CI check that fails if any catalog file mtime is older than `docs.json` mtime by more than 1 day (or by more than 1 schedule interval if known).

Tracked in [`docs-guide/features/gap-analysis.mdx`](../../../docs-guide/features/gap-analysis.mdx) as P0 cron-is-dry-run bug + as catalog-regeneration items in §1 (Governance artefacts).

---

## Why this is in a freshness report and not just a CI check

The CI check is **also** stale (`dispatch-governance.yml` runs the pipeline-smoke-test but does not run the catalog-freshness validators on every push). Until the cron-dry-run fix lands AND a catalog-freshness validator is wired into PR CI, every reader of `docs-guide/catalog/*.mdx` is potentially reading stale data.

This report is the manual checkpoint. Run the regen commands above before any release or major handover.

---

## Companion artefacts in this folder

- `SLICE-00-MASTER.md` — the master consolidation map (session synthesis)
- `SLICE-02-ai-tools.md` through `SLICE-12-root.md` — 10 file-level slice audits (~4,400 lines of evidence)
- This file (`CATALOG-FRESHNESS-2026-05-23.md`) — the catalog/artefact freshness checkpoint

— end of catalog freshness report 2026-05-23 —
