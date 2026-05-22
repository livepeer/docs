# Tooling Documentation Audit

**Date:** 2026-03-23
**Scope:** All documentation surfaces for the repo's developer tooling — `docs-guide/tooling/` (5 pages + 1 reference-map), the lpd CLI binary, VS Code snippets, and authoring helpers.

---

## Documentation needs

| Need | Purpose | Audience |
|---|---|---|
| Per-tool reference pages | What each tool does, how to install, all commands and flags | Contributors, agents |
| Tooling index / landing page | Navigable overview of all developer tools | Contributors |
| Freshness gates | Detect when tool reference pages diverge from actual tool behavior | CI |
| Tooling documentation policy | What qualifies as a tool, what level of coverage is required | Governance, contributors |
| CLI help-text extraction | Auto-generated command reference from binary help text | Generators, CI |
| Snippet reference | Which VS Code snippets exist and what they insert | Contributors |

---

## What exists

| File | Manual/Generated | Status | lastVerified | Notes |
|---|---|---|---|---|
| `docs-guide/tooling/lpd-cli.mdx` | ✋ manual | `current` | 2026-03-22 | Most complete tooling doc; covers setup, all commands, flags |
| `docs-guide/tooling/dev-tools.mdx` | ✋ manual | `draft` | 2026-03-11 | Large stale AI-drafted comment block retained; incomplete sections; stale script tip |
| `docs-guide/tooling/lpd-mdx-preview.mdx` | ✋ manual | `current` | 2026-03-22 | VS Code extension reference; comprehensive |
| `docs-guide/tooling/ai-tools.mdx` | ✋ manual | ❓ (no frontmatter) | unknown | Missing opening `---` frontmatter delimiter; bare key: value at file start |
| `docs-guide/tooling/reference-maps/icon-map.mdx` | ✋ manual | unknown | unknown | Referenced in `dev-tools.mdx` and source-of-truth-guide; not in main tooling glob |

**Not a tooling doc (but in the tooling section):**
- `docs-guide/tooling/content-brief-template.md` — authoring template, not a tool reference

---

## Source of truth

**Canonical:** The tools themselves — lpd CLI binary at `lpd` (or `bash lpd`), VS Code snippet files in `.vscode/*.code-snippets`, and the VS Code extension `lpd-mdx-preview`.

**Derived (manual, not generated):**
- `docs-guide/tooling/*.mdx` — hand-maintained reference pages

**Governance authority:**
- None. There is no tooling documentation policy. No file defines what constitutes a "tool," what coverage level is required, or how tooling docs should be structured.

**Missing sources of truth:**
- No policy defining what goes in `docs-guide/tooling/`
- No CLI help-text extraction pipeline — lpd is a binary executable; its command reference is documented by hand and can drift whenever the binary changes
- No freshness gate: `dev-tools.mdx` references `generate-component-snippets.py` in a `<Tip>` callout — the actual current generator is `generate-ui-templates.js`. This stale path has no automated detection.

---

## Gaps and issues

1. **`dev-tools.mdx` is in draft status and contains stale content.** The file starts with a large comment block (lines 1–70 in the source) that is an AI-drafted discussion about GitHub Gists — this is pre-publication scaffolding that was never removed. Sections for "AI Skills," "MDX Templates" are empty placeholders. The `<Tip>` at line 279 references `python3 operations/scripts/generate-component-snippets.py` — this script path does not exist; the current generator is `generate-ui-templates.js`. Status `draft` with no escalation path.

2. **`ai-tools.mdx` is missing its frontmatter opening delimiter.** The file begins with bare `title: AI Tools Governance Index` rather than the `---\ntitle:` YAML block. This means Mintlify will not parse it as frontmatter and the page metadata will not render correctly. This is a structural defect that cannot be detected by CI because there is no tooling-doc freshness check.

3. **No tooling documentation policy.** There is no file that defines: what counts as a tool, what sections a tooling reference page must have, when a page must be regenerated vs hand-updated, or how stale a `lastVerified` date can be before the page needs review. Compare: script governance has `docs-guide/policies/script-governance.mdx`; tooling governance has nothing.

4. **No CI trigger for any tooling doc.** No workflow regenerates or validates any file in `docs-guide/tooling/`. Tooling pages can drift from actual tool behavior indefinitely without detection. This is the same no-CI pattern as scripts, but worse — scripts have a dual-mode validator (`script-docs.test.js`); tooling has no equivalent at all.

5. **lpd CLI is a compiled binary — no help-text extraction pipeline.** The CLI reference in `lpd-cli.mdx` is written by hand. If the binary gains or changes commands, the documentation has no mechanism to detect or surface the divergence. Pattern to adopt: extract `lpd --help` output at CI time, diff against the documented command table.

6. **`icon-map.mdx` is in a non-standard subfolder.** It lives at `docs-guide/tooling/reference-maps/icon-map.mdx`, which is not covered by the `docs-guide/tooling/*.mdx` glob. It is linked from `dev-tools.mdx` but its freshness status is unknown. `docs.json` must be checked to confirm it is in navigation.

7. **VS Code snippets are generated but docs are manual.** `.vscode/components.code-snippets` is generated from `component-registry.json` (by `generate-ui-templates.js`). The documentation for these snippets in `dev-tools.mdx` is written by hand and references the wrong generation script. The snippet count in the table (115) will drift as the component registry changes.

8. **No tooling catalog in `docs-guide/catalog/`.** Every other major concern (components, scripts, workflows, templates, pages) has a generated catalog in `docs-guide/catalog/`. Tooling has none. There is no machine-readable inventory of what tooling exists in the repo.

---

## Pipeline diagram

```mermaid
flowchart TD
    LPDB[\"🔧 lpd binary\\ncompiled executable\"]
    VSCODE[\"📄 .vscode/*.code-snippets\\n(components.code-snippets generated)\\n(templates.code-snippets generated)\"]
    EXT[\"🔧 lpd-mdx-preview\\nVS Code extension\"]

    LPDB -. \"⚠️ manual only\\nno extraction pipeline\\nlpd-cli.mdx written by hand\" .-> CLI[\"docs-guide/tooling/lpd-cli.mdx\\n✅ current · lastVerified 2026-03-22\"]
    EXT -. \"⚠️ manual only\" .-> PREV[\"docs-guide/tooling/lpd-mdx-preview.mdx\\n✅ current · lastVerified 2026-03-22\"]
    VSCODE -. \"⚠️ manual only\\n⚠️ stale script tip\" .-> DT[\"docs-guide/tooling/dev-tools.mdx\\n❌ draft · lastVerified 2026-03-11\"]
    DT -. \"empty sections\\nstale comment block\" .-> GAP[\"⚠️ AI Skills section\\n⚠️ MDX Templates section\\n⚠️ generate-component-snippets.py tip\"]

    NOGATE[\"❌ No CI trigger\\n❌ No tooling policy\\n❌ No freshness gate\\n❌ No tooling catalog\"]

    CLI -. \"no validation\" .-> NOGATE
    PREV -. \"no validation\" .-> NOGATE
    DT -. \"no validation\" .-> NOGATE
```

---

## Recommendations

1. **Write `docs-guide/policies/tooling-documentation-policy.mdx`.** Define: what a tool is, required sections per page (description, install, commands, examples, known limitations), maximum `lastVerified` age before staleness flag, and which tools must have CI-wired references vs purely manual docs.

2. **Promote `dev-tools.mdx` from draft to current.** Remove the stale AI-drafted comment block (lines 23–70). Fill or remove empty sections ("AI Skills", "MDX Templates"). Fix the `<Tip>` to reference `node operations/scripts/generators/components/library/generate-ui-templates.js --write` rather than the old Python script path.

3. **Fix `ai-tools.mdx` frontmatter.** Add the missing opening `---` delimiter so Mintlify parses the frontmatter correctly. Add `status`, `lastVerified`, `pageType`, and `audience` fields to match the standard tooling page template.

4. **Wire VS Code snippet counts to the registry.** The snippet tables in `dev-tools.mdx` (115 custom components) are derived data — they should be generated from `component-registry.json` rather than maintained by hand. Add a generator step to `generate-ui-templates.js` or `generate-docs-guide-catalogs.yml` that writes the snippet count summary.

5. **Add a tooling freshness check to `check-docs-guide-catalogs.yml`.** Even without a full generator, add a step that validates `lastVerified` age on all `docs-guide/tooling/*.mdx` files and fails the PR gate if any page has been unverified for longer than the policy threshold.

6. **Add `docs-guide/catalog/tooling-catalog.mdx`.** Minimal: a generated table of all tools (name, type, location, status, lastVerified) matching the pattern of `scripts-catalog.mdx`. Source: frontmatter from `docs-guide/tooling/*.mdx`. Makes tooling inventory machine-queryable.

---

## Upstream / downstream effects

**Changes upstream (affecting this concern):**
- Changing lpd binary commands → `lpd-cli.mdx` drifts (no detection)
- Adding components to registry → `dev-tools.mdx` snippet counts become stale (no sync)
- Renaming generator scripts → stale paths in `dev-tools.mdx` tips (already happened once)

**Changes downstream (this concern affecting others):**
- `lpd-cli.mdx` is the primary contributor reference for lpd — stale docs cause incorrect lpd usage, breaking hooks and local dev
- `dev-tools.mdx` VS Code snippet table is the only comprehensive authoring reference — draft status means contributors cannot rely on it
- `ai-tools.mdx` frontmatter defect means agents reading this page as structured metadata will get no metadata
- No tooling catalog means agents cannot enumerate available tools without reading every file in the folder
