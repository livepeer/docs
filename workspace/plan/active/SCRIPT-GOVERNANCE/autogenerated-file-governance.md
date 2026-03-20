# Task 13b — Auto-generated File Governance: Recommendation

> **Type**: Implementation recommendation — approve before execution
> **Date**: 2026-03-20
> **Task**: See `plan.md` Task 13b
> **Branch**: `docs-v2-dev-scripts`

---

## Current State

### What already works

MDX generated files have full governance via two existing tools:

- `tools/lib/generated-file-banners.js` — produces standard banner text
- `tools/scripts/validators/content/structure/enforce-generated-file-banners.js` — validates banners, enforced pre-commit (staged) and on demand
- `tools/config/generated-artifacts.json` — manifest declaring what files are generated, by what, with what policy

**MDX banner format** (two parts):

1. Hidden machine comment (after frontmatter):
```
{/*
generated-file-banner: generated-file-banner:v1
Generation Script: <script path>
Purpose: <why it exists>
Run when: <trigger condition>
Run command: <exact command>
*/}
```

2. Visible `<Note>` block (human-readable):
```
<Note>
**Generation Script**: This file is generated from: `<script>`. <br/>
**Purpose**: <purpose>. <br/>
**Run when**: <trigger>. <br/>
**Important**: Do not manually edit this file; run `<command>`. <br/>
</Note>
```

### What's missing

| File type | Generated files affected | Current banner | Enforced? |
|-----------|------------------------|----------------|-----------|
| `.md` indexes | `tools/config/script-index.md`, `tests/script-index.md` | None | No |
| `.json` registries | `docs-guide/component-registry.json`, (future) `tools/config/script-registry.json` | None | No |
| `.mdx` AI callout | All generated MDX pages | Human `<Note>` only | Partial |

### The AI callout gap

The current `<Note>` block tells a human "don't edit this." It does NOT tell an AI agent:
- That this file should not be touched during refactors, merge conflict resolution, or bulk edits
- What to do instead (regenerate command)
- That edits will be silently overwritten

Any agent that reads a generated MDX file sees `<Note>... Do not manually edit...` in the rendered output but has no structured signal in the raw source that it can act on without parsing rendered Markdown.

---

## Recommendation

### Principle: extend existing infrastructure, don't create parallel systems

The `generated-file-banners.js` library and `enforce-generated-file-banners.js` validator are the right tools. Extend them — don't write new ones.

---

### 1. `.md` files — HTML comment banner

**Format**: HTML comment at the top of the file, before any heading.

```markdown
<!-- GENERATED FILE — DO NOT EDIT
generator:  tools/scripts/generators/governance/catalogs/generate-scripts-catalog.js
command:    node tools/scripts/generators/governance/catalogs/generate-scripts-catalog.js --write
trigger:    Script metadata changes or new scripts added
policy:     do-not-edit
AI-AGENT:   Do not modify this file. Regenerate via the command above.
-->
```

**Why HTML comment**: Renders as invisible in GitHub Markdown preview and Mintlify. Machine-readable. No Mintlify component dependency. Consistent with the hidden-comment approach already used in MDX.

**Why this specific format**: The key names (`generator`, `command`, `trigger`, `policy`, `AI-AGENT`) mirror the fields in `generated-artifacts.json`. An agent reading the file sees the same metadata it would find in the manifest.

**Files to update**:
- `tools/config/script-index.md`
- `tests/script-index.md`
- Any other `.md` files produced by generator scripts (audit in Task 13b.1)

---

### 2. `.json` registries — `_generated` top-level key

**Format**: Add `_generated` as the first key in the JSON object.

```json
{
  "_generated": {
    "by": "tools/scripts/generators/components/documentation/generate-component-registry.js",
    "command": "node tools/scripts/generators/components/documentation/generate-component-registry.js --write",
    "trigger": "Component JSDoc headers change",
    "doNotEdit": true,
    "aiAgent": "Do not modify this file. Regenerate via the command above."
  },
  "components": [...]
}
```

**Why `_generated`**: JSON has no comment syntax. Underscore-prefix is a conventional metadata key. No collision risk with domain data (component fields won't start with `_generated`).

**Risk**: Consumers that `JSON.parse()` and use the result will receive an extra key. Any consumer that does not destructure selectively (e.g., `Object.keys(registry)`) will see `_generated` in results. **Mitigation**: Audit all consumers that read these JSON files before adding the key. Specifically check: `generate-ui-templates.js`, `components-catalog.mdx` generator, and any script reading `script-registry.json`.

**Files to update**:
- `docs-guide/component-registry.json` (after regeneration in T13 step 2)
- `tools/config/script-registry.json` (new file, add from the start in T13 step 3)
- `tools/config/generated-artifacts.json` itself — this one should NOT get a `_generated` key; it IS the manifest

---

### 3. MDX files — add `AI-AGENT` line to hidden comment

**Change**: Extend the existing hidden banner format with one additional line.

**Before**:
```
{/*
generated-file-banner: generated-file-banner:v1
Generation Script: tests/unit/script-docs.test.js
Purpose: ...
Run when: ...
Run command: node tests/unit/script-docs.test.js --write --rebuild-indexes
*/}
```

**After**:
```
{/*
generated-file-banner: generated-file-banner:v1
Generation Script: tests/unit/script-docs.test.js
Purpose: ...
Run when: ...
Run command: node tests/unit/script-docs.test.js --write --rebuild-indexes
AI-AGENT: Do not modify this file. It will be overwritten on next generation run. Regenerate using the Run command above.
*/}
```

**Change location**: `tools/lib/generated-file-banners.js` — the function that builds the hidden comment template.

**Risk**: Low — additive change to comment block. Existing `GENERATED_HIDDEN_MARKER` check and `parseGeneratedHiddenBanner()` parse by marker string, not by line count. No test breakage expected. Confirm with: `npm test --prefix tests -- --testPathPattern=generated-file-banners`.

---

### 4. Extend `generated-artifacts.json` to cover missing files

**Current**: Manifest only covers `.mdx` files and `docs-index.json`. The `.md` index files are missing.

**Add entries** for each missing generated file:

```json
{
  "path": "tools/config/script-index.md",
  "owner": "docs",
  "generator": "tests/unit/script-docs.test.js",
  "sources": ["tools/scripts/**/*.js"],
  "class": "committed_derived_scoped",
  "commit_policy": "manual",
  "hook_policy": "check_only",
  "ci_policy": "enforce",
  "notes": "Per-scope script index for tools/ context. Non-MDX — banner format is HTML comment."
}
```

---

### 5. Extend `enforce-generated-file-banners.js` (or write companion)

**Recommendation: extend the existing validator** — one enforcement point.

**New validation path**:
1. For each non-MDX artifact in `generated-artifacts.json` that ends in `.md`:
   - Check file starts with `<!-- GENERATED FILE`
   - Check `generator:` field present
   - Check `command:` field present
   - Check `AI-AGENT:` field present
2. For each non-MDX artifact that ends in `.json`:
   - Parse JSON, check `_generated` key exists
   - Check `_generated.doNotEdit === true`
   - Check `_generated.aiAgent` field present

**Alternative**: Write `enforce-generated-file-banners-non-mdx.js` as a separate validator if the MDX-specific logic in the existing validator makes extension messy. Same governance, separate file.

**Decision point**: Read `enforce-generated-file-banners.js` fully before deciding extend vs separate. The existing file is 354 lines — may be cleanly extensible. Check if `getExpectedNonI18nGeneratedFiles()` can be extended to cover `.md` files without breaking the MDX path.

---

## Implementation Table

| Step | What | File(s) | Risk |
|------|------|---------|------|
| 13b.1 | Audit all non-MDX generated files | `generated-artifacts.json` cross-ref | Low |
| 13b.2 | Add missing files to `generated-artifacts.json` | `tools/config/generated-artifacts.json` | Low |
| 13b.3 | Add HTML comment banner to `.md` files | `tools/config/script-index.md`, `tests/script-index.md` | Low |
| 13b.4 | Add `_generated` key to `.json` registries | `docs-guide/component-registry.json`, `tools/config/script-registry.json` | Medium — audit consumers first |
| 13b.5 | Add `AI-AGENT` line to MDX hidden banner template | `tools/lib/generated-file-banners.js` | Low |
| 13b.6 | Extend validator for `.md` + `.json` banners | `enforce-generated-file-banners.js` | Medium — existing file is 354 lines |
| 13b.7 | Run tests | `npm test --prefix tests` | — |
| 13b.8 | CHECKPOINT → merge | | |

---

## What NOT to do

- **Do not** create a parallel banner system separate from `generated-file-banners.js` — that's how the current 3-source-of-truth problem started
- **Do not** put comments in `.json` files — JSON doesn't support comments; parsers will reject them
- **Do not** add `_generated` to `generated-artifacts.json` itself — it IS the manifest, adding this would be circular
- **Do not** modify `.codex/locks-local/` historical files — immutable closed-task records
- **Do not** mark `tools/config/script-index.md` as a generated file in `generated-artifacts.json` before verifying the file path doesn't move in Task 13c (tasks/ → workspace/ may affect `tools/config/` too — confirm)

---

## Open Question

> **Q: Extend `enforce-generated-file-banners.js` or write a companion?**
>
> Read the full 354-line file before deciding. If `getExpectedNonI18nGeneratedFiles()` can cleanly return both `.mdx` AND `.md` files with different validation paths, extend in-place. If the MDX-specific `hasGeneratedNote()` / `<Note>` logic is too entangled, write `enforce-generated-non-mdx-banners.js` as a clean companion.
>
> **Recommendation**: Extend in-place. The manifest already distinguishes file types — add a branch in the validation loop, not a new script.
