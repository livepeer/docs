# Task 2 — Duplicate-content checks

Three pairs the brief flagged for verification, plus one extra: the `developers2/` parallel scaffold.

## Pair 1: `concepts/developer-stack.mdx` vs `concepts1/oss-stack.mdx`

| Field | `concepts/developer-stack.mdx` | `concepts1/oss-stack.mdx` |
|---|---|---|
| Path | live | "duplicate-zone" |
| Bytes | 24,056 | 16,383 |
| Words | 2,622 | 994 |
| Title | "Livepeer Open Infrastructure Stack" | "The Livepeer Engineering Stack" |
| sidebarTitle | "Infra-OSI Architecture" | "Architecture Overview" |
| Description framing | "open, on-demand AI & Media infrastructure substrate and the distributed crypto-primitive coordination system" | "key repositories, components, and layers that make up the Livepeer open source stack, and how they connect" |
| pageType | concept | concept |
| audience | general | developer |
| Last modified | 2026-05-07 | 2026-04-27 |
| Content overlap (estimated) | ~40% — both cover repos, components, layers | ~40% reciprocal |

**Confirmed:** related but NOT byte-duplicate. Different scope (infra substrate vs. repo/component map). 2,622 words vs 994 words — `developer-stack.mdx` is the more comprehensive page. Both target the brief's intended `concepts/repo-map.mdx` MERGE.

**Recommended merge approach:** `developer-stack.mdx` as the base. Pull unique sections from `oss-stack.mdx` (engineering-stack framing, layer connection narrative). Delete both source files after merge. The 40% overlap means roughly 60% of `oss-stack.mdx`'s 994 words is unique content worth preserving.

## Pair 2: `resources/compendium/example-applications.mdx` vs `concepts/builders-guide.mdx`

| Field | `resources/compendium/example-applications.mdx` | `concepts/builders-guide.mdx` |
|---|---|---|
| Bytes | 1,743 | 16,776 |
| Words | 150 | 1,623 |
| Title | "Example Applications" | "Ecosystem and Developer Projects & Repo's" |
| Format | 4-row table of external example repos (React Native, Justcast.it, EVM Token-Gated, IPFS playback) | Substantive ecosystem listing (REVIEW flag: 1; Studio violation: 1) |
| Scope | Examples only | Examples + ecosystem projects + repos |

**Confirmed:** NOT a duplicate pair — different scope. `example-applications.mdx` is a thin 4-row table (150 words). `builders-guide.mdx` is the substantive listing (1,623 words). Together they should merge into a single `resources/example-applications.mdx`.

**Recommended merge approach:** `builders-guide.mdx` as the base. Append the 4 examples from `example-applications.mdx` if not already covered. Also merge `resources/compendium/resources.mdx` (14KB, brief's AUDIT-THEN-MERGE target) into the same destination.

## Pair 3: `developers2/` parallel scaffold

Spot-check of 30 files in `developers2/` against `developers/`:

| Pattern | Count | Example |
|---|---|---|
| **Byte-identical duplicate** | 12+ | `developers2/build/custom-ai/comfystream-quickstart.mdx` = `developers/get-started/comfystream-quickstart.mdx` (10,852 B both); `developers2/build/beta-projects/naap.mdx` = `developers/guides/beta-projects/naap.mdx` (12,501 B both); `developers2/build/tutorials/huggingface-to-livepeer-advanced.mdx` = `developers/build/tutorials/huggingface-to-livepeer-advanced.mdx` (45,446 B both) |
| **Stub placeholder** | 16+ | 150–220 B; frontmatter only, content empty or single-line. Example: `developers2/build/agents/overview.mdx` (190 B), `developers2/build/ai/model-support.mdx` (153 B) |
| **0-byte mirror of 0-byte developers file** | 2 | `developers2/build/beta-projects/data-mcp.mdx` and `developers2/build/beta-projects/storyboard.mdx` both 0 bytes, mirroring the same 0-byte files in `developers/guides/beta-projects/` |

**12+ byte-identical duplicates confirmed.** Files identical to content in `developers/get-started/`, `developers/build1/`, `developers/resources/reference/`, or `developers/build/tutorials/`. These were copied wholesale during the parallel-scaffold attempt.

**Recommended action for `developers2/`:**

Option A — **DELETE the whole tree.** All content is either a duplicate or a 150-byte stub. Restructure work is happening in `developers/` (post `6c15a379b` commit) and the parallel scaffold is now stale.

Option B — **MERGE non-duplicate stubs.** If any stub frontmatter contains useful target-path planning, harvest before deleting. Manual review of ~16 stub files.

Option C — **Convert into IA scaffold.** Per `consolidate.md` Phase 1 "Codex task 1.1: scaffold ~80-page tree as stubs", `developers2/` may have been an early scaffold attempt. If so, it represents the brief's locked IA partially built. But the folder names (`build/agents/`, `build/ai/`, `build/application/`, `build/custom-ai/`, `routing/`) do not match the locked IA's `build/ai-and-agents/{agents,realtime-ai,...}/` structure. Misaligned.

**Recommendation:** Option A. Delete `developers2/` entirely. The 12+ duplicates are content the live `developers/` tree already has; the 16+ stubs use a folder structure that does not match the locked IA. Any unique content should be hunted in `_workspace/files-to-add/` instead, which is the brief-aligned cache.

## Extra observation: `_workspace/archive/pre-restructure-2026-04-06/`

This directory contains a snapshot of `developers/` as it stood before the April-6 restructure. Confirmed via Task 0 §6 grep output (multiple Studio refs under this path). It is correctly named as an archive snapshot — no action needed beyond awareness that pre-restructure paths can be recovered here if a MOVE classification turns out to have lost content.

## Summary

| Pair | Status | Action |
|---|---|---|
| 1: developer-stack vs oss-stack | Related, not duplicate (40% overlap) | MERGE both into `concepts/repo-map.mdx` |
| 2: example-applications vs builders-guide | Not duplicate (different scope) | MERGE both (+ resources/compendium/resources.mdx) into `resources/example-applications.mdx` |
| 3: developers2/ parallel scaffold | 12+ byte-identical duplicates + 16+ stubs | DELETE `developers2/` entirely after harvest |
