# Audit: `docs-guide/`

*Audited: 2026-03-20*

---

## Top-Level Contents

```
docs-guide/
├── _workspace/               Active design specs (PRD, personas, IA, UX, brand, tech)
├── catalog/                  Auto-generated + hand-maintained catalogs (10 files)
├── component-registry.json   AUTO-GENERATED — 127 components, 247KB (Mar 20)
├── component-registry-schema.json
├── component-usage-map.json  AUTO-GENERATED — 419KB (Mar 20)
├── contributing/             Contributor guides (3 files)
├── docs-glossary.md          Well-populated internal terminology — 8.4KB (Mar 20)
├── features/                 System documentation (8 files)
├── frameworks/               Structural models (6 files)
├── policies/                 Enforced governance rules (13 files)
├── source-of-truth-guide.mdx Main landing — MARKED "TODO: NEEDS UPDATING"
└── tooling/                  CLI docs, templates, reference maps (8 files)
```

---

## `_workspace/`

**Status: Active.** Majority updated Mar 20 11:37 with selective refreshes at 15:08–15:11.

```
_workspace/
├── 02_Design-Specification/
│   ├── 01_PRD-Docs/index.md                              290 lines — substantive
│   ├── 02_Audience-&-Personas/
│   │   ├── index.md                                      EMPTY
│   │   ├── 01_Audience-&-Persona-Mapping/index.md        187 lines
│   │   └── 02_Personas-Journey-Alignment/index.md        290 lines
│   ├── 03_IA-Framework/
│   │   ├── index.md                                      EMPTY
│   │   ├── 01_IA-Structure-and-Purpose/index.md          364 lines
│   │   ├── 02_Journey-Derived-IA/index.md                111 lines
│   │   └── 03_IA-Blueprint/index.md                      EMPTY
│   ├── 04_UX-Framework-&-Taxonomy/
│   │   ├── index.md                                      EMPTY
│   │   ├── 01_Page-Taxonomy/index.md                     53 lines — very short
│   │   ├── 02_Content-Taxonomy-Semantic-UI/index.md      346 lines
│   │   └── 03_Composable-Content-Guide/index.md          190 lines
│   ├── 05_Brand,-Copy,-Style/
│   │   ├── index.md                                      EMPTY
│   │   ├── 01_Brand-&-Copy-Guide/index.md                237 lines
│   │   └── 02_Style-Guide/index.md                       301 lines
│   ├── 06_Technical-Framework/
│   │   ├── index.md                                      EMPTY
│   │   ├── 01_Infrastructure/index.md                    96 lines
│   │   └── 02_Performance-Framework/index.md             177 lines
│   ├── 07_Implementation-Considerations/
│   │   ├── index.md                                      EMPTY
│   │   ├── 01_Mintlify-Considerations/index.md           385 lines — largest file
│   │   └── 02_Brand-&-Copy/index.md                      255 lines
│   └── index.md                                          EMPTY
└── archive/
    └── docs-guide-map-archive.mdx                        97 lines, Mar 18 — retained for migration traceability
```

**Empty index.md files (8):** These are navigation stubs for directory structure — not stale artifacts. Do not delete.

**Potentially incomplete:** `04_UX-Framework-&-Taxonomy/01_Page-Taxonomy/index.md` is only 53 lines for a section that should be substantive. Likely in-progress.

**Note on governance:** `_workspace/` has no 30-day cleanup policy. Content here is active planning. Should stay — but governance should clarify when specs here graduate to `docs-guide/` proper vs staying in `_workspace/`. See recommendations.

---

## `catalog/`

| File | Type | Last Updated | Notes |
|---|---|---|---|
| `components-catalog.mdx` | AUTO-GENERATED | Mar 20 11:37 | Current |
| `ai-tools.mdx` | Hand-maintained | Mar 19 13:07 | Current |
| `pages-catalog.mdx` | AUTO-GENERATED | Mar 18 20:56 | 2 days old |
| `scripts-catalog.mdx` | AUTO-GENERATED | Mar 18 20:56 | 2 days old |
| `scripts-catalog-archive.mdx` | Archive | Mar 18 20:56 | 20.9KB — should move to `_workspace/archive/` |
| `templates-catalog.mdx` | AUTO-GENERATED | Mar 18 20:56 | 41 lines — very brief |
| `ui-templates.mdx` | AUTO-GENERATED | Mar 18 20:56 | 7.2KB |
| `visual-explainer-workflows-archive.mdx` | Archive | Mar 18 20:56 | 14KB — should move to `_workspace/archive/` |
| `workflows-catalog.mdx` | AUTO-GENERATED | Mar 18 20:56 | 8.3KB |
| `source-of-truth.md` | Empty stub | Mar 20 17:35 | 0 bytes — delete or populate |

**Issues:**
- Two archive files (`scripts-catalog-archive.mdx`, `visual-explainer-workflows-archive.mdx`) are sitting in the active catalog directory. They should move to `_workspace/archive/` or be deleted per retention policy.
- `templates-catalog.mdx` at 41 lines is stub-level — possibly incomplete.

---

## `frameworks/`

| File | Size | Status |
|---|---|---|
| `component-governance.mdx` | 26KB | CANONICAL — current (Mar 20) |
| `research-skill-workflow.mdx` | 15.2KB | Good (Mar 18) |
| `page-taxonomy-framework.mdx` | 5.2KB | Current (Mar 20) |
| `content-system.mdx` | 469 bytes | Very brief — possibly stub |
| `component-framework.mdx` | 11 lines | **DEPRECATED REDIRECT** — explicitly points to component-governance.mdx |
| `source-of-truth.md` | 0 bytes | Empty stub — delete or populate |

**Action:** `component-framework.mdx` is confirmed deprecated (11 lines, just a redirect). Safe to delete after verifying no inbound links remain. `source-of-truth.md` is empty — delete.

---

## `policies/`

| File | Size | Coverage |
|---|---|---|
| `root-allowlist-governance.mdx` | 10.2KB | Root folder structure, allowlist, path rules |
| `source-of-truth-policy.mdx` | 7.1KB | Ownership, drift prevention |
| `agent-governance-framework.mdx` | 9.5KB | Agent adapters, approved locations |
| `ownerless-governance.mdx` | 4.5KB | Orphaned code/docs |
| `generated-artifact-and-hook-governance.mdx` | 4.4KB | Generated files, hook rules |
| `infrastructure-principles.mdx` | 4.4KB | System design principles |
| `v2-folder-governance.mdx` | 5.7KB | v2/ folder structure rules |
| `quality-gates.mdx` | 3.1KB | CI/validation gates |
| `component-layout-decisions.mdx` | 2.3KB | Component file structure |
| `audit-system-overview.mdx` | 2.3KB | Audit pipeline |
| `skill-pipeline-map.mdx` | 2.4KB | AI skill development pipeline |
| `cleanup-quarantine-policy.mdx` | 1.3KB | File removal/archival |
| `source-of-truth.md` | 0 bytes | Empty stub — delete |

**Overlaps detected:**

1. **`root-allowlist-governance.mdx` + `v2-folder-governance.mdx`** — both govern folder structure. Root is broad, v2 is scoped. Currently separate but overlapping in framing. Consider: make v2 a section of a unified "folder governance" doc, or add explicit cross-references clarifying the hierarchy.

2. **`agent-governance-framework.mdx` + `skill-pipeline-map.mdx`** — both touch AI/agent lifecycle. Agent-governance is about approved locations and overlap boundaries. Skill-pipeline is about development stages. Related but distinct enough to keep separate — add cross-references.

3. **`cleanup-quarantine-policy.mdx` + `ownerless-governance.mdx`** — both address the lifecycle of content without a clear owner. Cleanup handles removal mechanics; ownerless handles the ownership gap. Complementary, not redundant — add cross-references.

---

## `features/`

| File | Size | Status |
|---|---|---|
| `visual-explainer-workflows.mdx` | 13.9KB | Good |
| `ui-system.mdx` | 7.2KB | Good |
| `automations.mdx` | 8.2KB | Good |
| `feature-map.mdx` | 4.1KB | Good |
| `data-integrations.mdx` | 2.4KB | Good |
| `architecture-map.mdx` | 2.7KB | Good |
| `ai-features.mdx` | 43 lines | **STUB** — very brief, likely incomplete |
| `source-of-truth.md` | 0 bytes | Empty stub — delete |

---

## `tooling/`

| File | Size | Status |
|---|---|---|
| `lpd-cli.mdx` | 37.3KB | Current (Mar 20) — comprehensive |
| `dev-tools.mdx` | 10.6KB | Good |
| `reference-maps/icon-map.mdx` | 12KB | Current (Mar 20) |
| `research-review-packet-plan-template.md` | 5.4KB | Template — good |
| `review-packet-plan-template.md` | 4.3KB | Template — possibly overlaps above |
| `content-brief-template.md` | 3.5KB | Template |
| `research-to-implementation-plan-template.md` | 48 lines | Very brief — stub-level |
| `source-of-truth.md` | ~1KB | Incomplete WIP — partially populated outline |

**Note:** `research-review-packet-plan-template.md` and `review-packet-plan-template.md` have overlapping names and purposes. Verify they're distinct before consolidating.

---

## `contributing/`

| File | Size | Status |
|---|---|---|
| `mintlify.mdx` | 4.8KB | Good |
| `contributing.mdx` | 51 lines | Very brief — likely entry-point stub |
| `source-of-truth.md` | 0 bytes | Empty stub — delete |

---

## `source-of-truth-guide.mdx`

**Status:** Marked `# TODO: NEEDS UPDATING` in frontmatter. Content is comprehensive but script references may be outdated (references old generator script paths). Last modified Mar 20 17:34 but flag was not removed.

---

## Summary: Stale / Empty / Redundant Files

| File | Issue | Action |
|---|---|---|
| `catalog/scripts-catalog-archive.mdx` | Archive in active catalog dir | Move to `_workspace/archive/` |
| `catalog/visual-explainer-workflows-archive.mdx` | Archive in active catalog dir | Move to `_workspace/archive/` |
| `frameworks/component-framework.mdx` | Deprecated redirect (11 lines) | Delete after verifying no inbound links |
| `features/ai-features.mdx` | Stub (43 lines) | Expand or mark explicitly as placeholder |
| `tooling/research-to-implementation-plan-template.md` | Stub (48 lines) | Expand or merge into research-review-packet template |
| `source-of-truth-guide.mdx` | Marked TODO | Update script references, remove TODO flag |
| All `source-of-truth.md` stubs (5 × 0 bytes) | Empty | Delete — `source-of-truth-policy.mdx` exists already |
| `tooling/source-of-truth.md` | Incomplete WIP (~1KB) | Finish or delete |

## `_workspace/` Governance Recommendation

`_workspace/` has no defined lifecycle policy. Recommend adding a governance note:
- Files in `_workspace/` are planning artifacts, not published documentation
- Active specs: keep indefinitely while work is ongoing
- Completed specs: graduate to `docs-guide/` proper or archive within 30 days of completion
- `_workspace/archive/` is the correct landing spot for superseded specs and retired catalog snapshots
