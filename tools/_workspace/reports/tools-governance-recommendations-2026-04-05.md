# Tools Folder Governance And Streamlining Recommendation

Date: 2026-04-05
Scope: report-only recommendation for `tools/`

Update: sections below describe the pre-migration audit state captured earlier on 2026-04-05. The approved implementation has since moved the Notion toolchain to `tools/dev/integrations/notion/`, introduced the governed `tools/dev/{preview,authoring,editor,integrations}` taxonomy, and archived the ad hoc Notion/dev note files under `tools/_workspace/archive/`.

## Goal

Make `tools/` understandable at a glance:

- only live tools, runtime dependencies, and narrowly colocated tool docs live here
- archive and experimental material goes to `tools/_workspace/`
- human-facing explanation is short, canonical, and root-visible
- generated catalog output does not masquerade as runtime structure

## Recommended Folder Contract

`tools/` should contain only these categories:

| Folder or file | Purpose | Allowed contents |
|---|---|---|
| `tools/lpd` | primary CLI entrypoint | executable shell entrypoint only |
| `tools/.lpdignore` | CLI discovery/config override | ignore rules only |
| `tools/package.json`, `tools/package-lock.json` | root tooling dependency manifest | package metadata and lockfile only |
| `tools/cli/` | CLI adjunct config/examples | examples and thin CLI support files |
| `tools/dev/` | local developer utilities | executable helpers used during authoring, preview, formatting, install, debug |
| `tools/lib/` | shared runtime libraries | importable helpers only |
| `tools/config/` | machine-readable tooling contracts | runtime manifests, quality profiles, scoped navigation, generated registries, vendor workflow config |
| `tools/editor-extensions/` | repo-owned editor plugins and packaged artifacts | extension source, package manifests, README, packaged artifact if governed |
| `tools/notion/` | self-contained Notion sync toolchain | executable scripts, package manifest, env template, concise runbook |
| `tools/_workspace/` | reports, experiments, archive | non-runtime working material only |

Anything else should move out:

- long-form explanation -> `docs-guide/tooling/**`
- audits and reports -> `tools/_workspace/reports/**`
- deprecated docs or one-off notes -> `tools/_workspace/archive/**`
- test fixtures and governed tests -> `operations/tests/**`
- workflow-owned config and seeds -> colocated workflow directories under `operations/scripts/**`

## Root Files To Create Or Replace

### 1. Root index page

Create a real human entrypoint at `tools/index.mdx`.

This should replace the current role being incorrectly attempted by `tools/script-index.md`.

The page should contain:

1. What `tools/` is for.
2. The canonical subfolders and what belongs in each.
3. The primary entrypoints:
   - `tools/lpd`
   - `tools/editor-extensions/install.sh`
   - `tools/notion/sync-v2-en-canonical.js`
4. What does not belong in `tools/`.
5. A short “archive policy” line pointing to `tools/_workspace/archive/`.
6. A short “reports live here” line pointing to `tools/_workspace/reports/`.

It should not contain:

- a repo-wide script dump
- a full tree of every file
- generated content that becomes stale every time the folder changes

### 2. Root governance/framework page

Create `tools/framework.mdx`.

This should be the authoritative placement and governance contract for future additions. It should define:

1. Allowed top-level subfolders.
2. Which file types are allowed in each subfolder.
3. Whether packaged binaries such as `.vsix` may be committed, and under what parity rule.
4. Where tests belong.
5. Where documentation belongs.
6. Where generated indexes belong.
7. How to archive or replace a tool safely.
8. Required metadata for new scripts or configs added under `tools/`.

## Recommended Replacement Rules

### Rule 1: One canonical surface per concern

- Keep `.speakeasy/workflow.*` as the only Speakeasy workflow location.
- Keep one installer for editor extensions. Either:
  - keep `tools/editor-extensions/install.sh` and archive the dedicated authoring-tools installer, or
  - rewrite the dedicated installer as a thin wrapper over `install.sh`.

### Rule 2: Generated indexes are secondary, not root navigation

- Keep machine-generated script indexes only where governance tooling expects them.
- Do not use generated script indexes as the root human entrypoint to `tools/`.
- Remove `tools/tools-catalog.mdx` from the root surface and archive it after the replacement index exists.

### Rule 3: Tool docs must be runtime-grade

Allowed beside a live tool:

- `README.md`
- `LICENSE`
- package manifest
- machine-readable config

Not allowed beside a live tool:

- one-off planning notes
- chat-style “FUNCTION” breakdowns
- duplicated API instructions with hardcoded IDs
- stale absolute links to other worktrees

By this rule, `tools/notion/FUNCTION.md` and `tools/notion/INSTRUCTIONS.md` should be archived.

### Rule 4: Tool tests belong in governed test surfaces

- Keep runtime tool entrypoints in `tools/dev/`.
- Move retained test coverage into `operations/tests/**`.
- Archive one-off manual developer test scripts that are not the canonical test surface.

By this rule:

- `tools/dev/test-seo-generator.js` should be archived.
- `tools/dev/test-add-callouts.js` should be archived unless rewritten as a real repo test.

### Rule 5: Binary artifacts need an explicit policy

For `tools/editor-extensions/**.vsix`:

- either track packaged VSIX artifacts and require parity validation for each extension
- or stop tracking VSIX artifacts and build them on demand

Current state is inconsistent:

- `lpd-mdx-preview` has explicit parity validation
- the other extensions ship artifacts without the same enforcement story

## Proposed Streamlined Layout

```text
tools/
  index.mdx
  framework.mdx
  .lpdignore
  lpd
  package.json
  package-lock.json
  cli/
  config/
    README.md
    .speakeasy/
    runtime/
    quality/
    scoped-navigation/
    registry/
  dev/
  editor-extensions/
  lib/
  notion/
  _workspace/
    archive/
    experiments/
    reports/
```

## Archive Recommendation

Move these into `tools/_workspace/archive/` once the replacement step is complete:

1. `tools/tools-catalog.mdx`
2. `tools/dev/install-authoring-tools-extension.js`
3. `tools/dev/test-add-callouts.js`
4. `tools/dev/test-seo-generator.js`
5. `tools/notion/FUNCTION.md`
6. `tools/notion/INSTRUCTIONS.md`

## Keep But Repair Recommendation

These should stay in `tools/`, but they need direct remediation before the folder can be called production-ready:

1. `tools/package.json`
   Fix stale `cd vscode/...` packaging scripts.
2. `tools/dev/format-mdx.js`
   Fix the broken import path to `tools/editor-extensions/authoring-tools/lib/authoring-core.js`.
3. `tools/script-index.md`
   Replace its purpose completely. Do not let it remain the visible root explanation for `tools/`.
4. `tools/editor-extensions/markdown-list/README.md`
   Fix old install path references.
5. `tools/notion/README.md`
   Reduce it to one canonical runbook and remove duplicated note content.

## Governance Checklist For New Additions

Before any new file is added under `tools/`, require all of the following:

1. The file belongs to an allowed subfolder in `tools/framework.mdx`.
2. The file is a live tool, live dependency, or concise colocated runtime doc.
3. The file is not long-form guidance better suited to `docs-guide/`.
4. The file has one clearly named owner surface or consumer.
5. If it is generated, the generator and freshness rule are documented.
6. If it is binary, the rebuild command and parity rule are documented.
7. If it is a test, it belongs in `operations/tests/**`, not `tools/dev/`.
8. If it replaces an existing file, the old file is archived in the same change.

## Recommended Cleanup Sequence

1. Finish the path migration debt:
   `tools/vscode` -> `tools/editor-extensions`
   `tools/scripts` -> `operations/scripts`
2. Replace the root explanation surfaces:
   add `tools/index.mdx`
   add `tools/framework.mdx`
3. Collapse duplicate config surfaces:
   keep `.speakeasy/workflow.*`
   archive `tools/config/workflow.*`
4. Archive the stale docs and one-off test utilities.
5. Decide the VSIX artifact policy and apply it consistently across all editor extensions.

## Recommended Decision

The right streamlining move is not a broad relocation of live tooling out of `tools/`. The right move is to keep the live runtime surfaces in `tools/`, finish the old migration propagation, archive the stale explanatory debris, and introduce two canonical human docs at the root:

1. `tools/index.mdx`
2. `tools/framework.mdx`

That gives the folder a clear operator entrypoint and a clear governance contract without breaking current tool placement.
