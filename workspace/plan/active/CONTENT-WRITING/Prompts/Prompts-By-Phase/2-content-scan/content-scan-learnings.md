# Content Scan Prompt — Learnings
## Version 1.0

**Prompt version**: 1.0
**Date**: 2026-03-23
**Test tab**: Gateways (only tab tested in this build session)
**Multi-audience tab tested**: No — Gateways is a single-audience tab
**Status**: DRAFT — pending human approval

Note: The standard protocol calls for 3 test runs including at least one multi-audience tab (About or Community). This was a build-and-test session where the prompt was created and immediately applied to Gateways as a live test run. The full 3-run protocol with multi-audience tab testing is required before the prompt is approved for production.

---

## Review Agent Findings (Step 1 — Self-Review)

Check A, B, and C run by the building agent (Claude Sonnet 4.6) as part of the build process.

---

### Check A — Best Practices

| Severity | Finding | Fixed before finalisation? |
|---|---|---|
| MEDIUM | Pre-flight list references reading structure-audit.md — good. But the prompt does not state what to DO if structure-audit.md is not found (blocked by a missing file that should exist). | Yes — failure mode added: "Read structure-audit.md (the downstream consumer) — confirm output compatibility" is step 2 of running order |
| MEDIUM | "Workspace artefacts" defined as `/_workspace/` paths, but the Gateways test revealed x-resources/ directories are also staging content. The prompt does not mention x-resources/ patterns. | Partially — workspace artefacts section notes "archive" subdirs but not x-resources/ pattern specifically. Flag for v1.1. |
| INFO | The prompt uses "general-purpose agent" as agent type but does not specify what "general-purpose" means or excludes. In context this is fine; explicit elsewhere. | N/A — acceptable |
| INFO | Output format template uses markdown code fence wrapping — this is conventional and clear. | N/A |

---

### Check B — Canonical Design Alignment

| Severity | Finding | Fixed before finalisation? |
|---|---|---|
| HIGH | Status definitions differ between content-scan.md and structure-audit.md. Content-scan defines `stub` (files <100 words); structure-audit does not use `stub` — it uses `current`/`draft`/`empty`/`missing`. The scan must translate or flag stubs clearly so structure-audit doesn't treat them as `current` pages with full content. | Yes — "Compatibility Verification" section added to the prompt: "The content-scan `stub` status maps to `current` in structure-audit terms (file exists) — flag stubs explicitly so the auditor can assess." |
| MEDIUM | The 7-type canonical schema in the prompt matches content-pipeline-framework.md Decision 1. However, the "unknown/non-canonical with quotes" pattern was discovered during the Gateways test run — some files have `pageType: 'guide'` (with single quotes) which a naive string comparison would flag as UNKNOWN_TYPE. | Yes — failure mode added: "Strip single and double quotes when comparing frontmatter values against canonical enums." |
| INFO | The downstream consumer (structure-audit.md) uses `audience` in its frontmatter completeness check. The prompt's canonical audience values now use the 7-token set (`gateway`, `orchestrator`, etc.) but the existing pages use `gateway-operator`. This means most pages will show as `partial` frontmatter — which is the correct assessment. | N/A — working as intended |

---

### Check C — Generality

| Severity | Finding | Fixed before finalisation? |
|---|---|---|
| HIGH | Multi-audience tabs (About, Community) were not tested. The prompt instructs extracting all page paths from a single tab in docs.json — the extraction logic works by tab name, which should generalise. However, About and Community tabs may have different nav structures (no standard anchor pattern, different group naming). The v1/v2 separation logic has only been verified on Gateways. | No — deferred to test run 2/3 (must include About or Community). Flagged as HIGH. |
| MEDIUM | The prompt instructs listing v1 paths "for reference." For some tabs (About, Community), there may be no v1 equivalent. The prompt handles this gracefully via "if it exists" language. | No action needed — prompt handles gracefully |
| MEDIUM | The prompt assumes `v2/[tab]/_workspace/` is the workspace directory pattern. Some tabs may not have a `_workspace/` directory at all (newer tabs, stub tabs). The prompt should handle this gracefully. | Yes — workspace artefacts section says "Files under v2/[tab]/_workspace/" — if the directory doesn't exist, there are simply no workspace artefacts to list. Acceptable. |
| INFO | The duplicate nav entry detection (same path in multiple groups) was discovered as a real pattern on Gateways (4 duplicate entries). The prompt handles this via the failure mode "deduplication" instruction. Should also apply to other tabs. | Yes — failure mode added. Works generically. |

---

## Test Run Findings (Step 3 — Gateways Live Run)

### Run 1 — Tab: Gateways · Agent: Claude Sonnet 4.6 (building agent)

This was a combined build-and-test session. The building agent executed the content-scan logic directly on the Gateways tab after writing the prompt.

**Pre-flight**: All pre-flight checks confirmed before execution.

**Execution issues**:

1. **Frontmatter quote stripping required**: Many pages have `pageType: 'guide'` (with single quotes) in frontmatter. The YAML-style parser used to extract frontmatter values preserved the quotes, causing `'guide'` to appear as UNKNOWN_TYPE initially. Fixed: strip quotes when comparing values against canonical enums.

2. **API endpoint pages status ambiguity**: 21 API reference endpoint pages (13 AI-API + 8 CLI-HTTP) contain frontmatter plus an OpenAPI component import tag and zero prose words. The word-count stub detection correctly flags them as stubs (0 words). However, these pages may render substantive content via the OpenAPI component — they are not empty in the user-visible sense. Added a `stub*` asterisk annotation and a flag in the scan output recommending structure-audit.md review for this class.

3. **Duplicate nav entries**: Gateways has 4 pages that appear in two nav groups each (tutorial pages in both Quickstart and Tutorial: Zero-to-Hero). The prompt's deduplication instruction worked correctly — each file was scanned once and the duplicate nav placement was noted.

4. **Non-gateways path in nav**: `docs-guide/tooling/reference-maps/icon-map` appears in the Gateways Home group in docs.json. This is outside `v2/gateways/`. Skipped correctly and noted.

5. **Audience token inconsistency**: Every page in the Gateways tab uses `gateway-operator` as the audience value. The canonical audience token is `gateway` (per content-pipeline-framework.md Decision 3). This is a systematic issue that affects all 98 pages — flagged in the frontmatter issues summary. Will be a significant finding for structure-audit.md.

6. **lifecycleStage universally missing**: 98 of 98 pages are missing `lifecycleStage`. This is the largest single frontmatter gap across the tab. No page in the Gateways tab has been assigned a lifecycle stage.

7. **description universally missing**: 98 of 98 pages are missing `description`. Second largest frontmatter gap.

8. **Two glossary pages with unclear relationship**: `resources/glossary.mdx` (human-maintained, 888 words) and `resources/compendium/glossary.mdx` (AI-generated, 3638 words, 57KB). Per the plan's structural issues notes (misty-rolling-starfish.md), the compendium glossary is AI-generated and unverified. Flagged in the scan output.

9. **NaaP acronym note**: Per the Phase 1 Gateways v4 learnings, the NaaP acronym inconsistency ("Network as a Platform" vs "Network-as-a-Product") was a known open item. Added a note in the naap-multi-tenancy page entry in the scan output.

---

## Collated Learnings

| # | Severity | Finding | Tab(s) | Fixed? | Recommended action |
|---|---|---|---|---|---|
| 1 | HIGH | Multi-audience tabs not tested. About and Community tabs have different nav structures and may behave differently under the extraction logic. | About, Community | No | Mandatory: include at least one of About or Community in the next test run before production approval. |
| 2 | HIGH | Status definitions mismatch between content-scan (`stub`) and structure-audit (`current`/`draft`/`empty`/`missing`). `stub` pages appear as `current` to structure-audit without explicit flagging. | All | Yes — compatibility note added to prompt | Run structure-audit.md on gateways-content-scan.md output to verify it can consume the scan without confusion. |
| 3 | MEDIUM | Frontmatter quote stripping: pages with `pageType: 'guide'` (single quotes) were initially flagged as UNKNOWN_TYPE. | Gateways | Yes — failure mode added | Ensure all downstream consumers strip quotes before comparing enum values. |
| 4 | MEDIUM | API endpoint stub pages (21 pages) flagged as `stub` (0 prose words) but may render content via OpenAPI component import. Content-scan correctly flags them; structure-audit must decide whether these are functional reference pages or genuine gaps. | Gateways | Yes — asterisk annotation added | Structure-audit.md should add a check: "does this page render content via component import?" |
| 5 | MEDIUM | x-resources/ pattern (staging directories within guides/) not explicitly called out in workspace artefacts definition. Only `_workspace/` is mentioned. | Gateways | No | Add x-resources/ and x-deprecated/ patterns to workspace artefacts exclusion list in v1.1 of the prompt. |
| 6 | MEDIUM | The prompt says to "list v1 paths for reference." Gateways v1 paths are in the docs.json v1 version block under a dropdown, not a tab — the extraction approach differs from v2 tab extraction. The scan did not successfully extract v1 paths. | Gateways | No | Clarify in prompt: v1 paths may be in a `dropdown` key rather than a `tab` key; provide both extraction approaches. |
| 7 | INFO | 98/98 pages missing `lifecycleStage` — systematic gap, not a scan error. The scan correctly identifies this as a tab-wide frontmatter issue. | Gateways | N/A | This is expected for a tab that predates the 7-field canonical schema. Finding goes to structure-audit.md for prioritisation. |
| 8 | INFO | 98/98 pages missing `description` — same as above. | Gateways | N/A | Expected. Goes to structure-audit.md. |
| 9 | INFO | All pages use `audience: gateway-operator` (non-canonical). Canonical value is `gateway`. This is a systematic legacy value, not a random error. | Gateways | N/A | Goes to structure-audit.md. Likely a global find-replace fix during Phase 3 reconsolidation. |
| 10 | INFO | 4 tutorial pages appear in two nav groups each (Quickstart + Tutorial series). Deduplication worked correctly. | Gateways | N/A | Worth noting for structure-audit — duplicate nav entries may indicate structural nav issues to resolve. |
| 11 | INFO | Two glossary pages with unclear relationship — human-maintained (resources/glossary.mdx) vs AI-generated (compendium/glossary.mdx). Per existing plan decisions, compendium is unverified. | Gateways | N/A | Flagged in scan output. Structure-audit.md should flag for human decision on which is canonical source. |

---

## Summary

**CRITICAL**: 0
**HIGH**: 2 (multi-audience test required; status definition mismatch resolved but needs verification)
**MEDIUM**: 5
**INFO**: 5

**Prompt approved for production**: NO — pending
**Reason**: High finding #1 (multi-audience tab not tested) is unresolved. The protocol requires at least one multi-audience tab (About or Community) test run before production approval.

**Gateways scan output**: Produced and written to `context-packs/gateways-content-scan.md`. 98 pages scanned. Output provides all fields required by structure-audit.md. Quality is sufficient for structure-audit.md to consume.

---

## What the Gateways Test Run Revealed About the Tab

These are observations from executing the scan — not prompt issues, but tab-level findings that structure-audit.md needs to know:

1. **Universal frontmatter gaps**: `lifecycleStage` and `description` missing on all 98 pages. `audience` token non-canonical on all 98 pages (`gateway-operator` → `gateway`). These are batch fixes, not page-by-page decisions.

2. **Deprecated pageType widespread**: 10+ pages use deprecated `pageType` values (`landing`, `quickstart`, `overview`, `faq`, `troubleshooting`). The canonical 7-type schema migration has not been applied to this tab.

3. **Purpose values inconsistent**: The majority of guide/instruction pages use `purpose: operations` (deprecated, → `operate`). Concept pages use `purpose: concept` (deprecated, → `explain`). Resource pages correctly use `purpose: reference`. Setup/install pages incorrectly use `purpose: operations` when `configure` or `setup` would be more accurate.

4. **Overlapping content between sections**: Multiple content overlap pairs identified during scan:
   - `setup/connect/discover-offerings` and `setup/connect/connect-with-offerings` — nearly identical heading structures, likely candidates for merge
   - `setup/requirements/setup` and `guides/deployment-details/setup-requirements` — hardware/OS/network requirements covered in two places
   - `setup/requirements/on-chain setup/fund-gateway` and `guides/payments-and-pricing/funding-guide` — on-chain funding covered in two places
   - `guides/operator-considerations/production-gateways` and `guides/roadmap-and-funding/gateway-showcase` — gateway showcase/directory covered in two places
   - `resources/go-livepeer/cli-reference` and `resources/technical/cli-commands` — CLI reference covered in two places
   - `setup/run-a-gateway` heavily overlaps with concepts section content

5. **Stub with live nav link**: `resources/technical/configuration-flags` is a stub (49 words, single heading) that creates a live dead-end link in the navigation. P0 issue.

6. **21 API endpoint pages with no prose content**: All AI-API and CLI-HTTP endpoint sub-pages have 0 prose words and rely entirely on OpenAPI component imports. Whether these are functional or dead-end pages depends on whether the OpenAPI spec files exist and render correctly.

7. **H1 headings mid-page**: Several pages (linux-install, tutorial-1, health-checks, cli-commands) have H1 headings (`#`) appearing mid-page — likely in code block contexts that are not being correctly escaped in the heading extractor. Structural issue to flag for layout-pass.

8. **NaaP acronym open item unresolved**: Per Phase 1 learnings, the NaaP expansion inconsistency was flagged as requiring human resolution before content production. The naap-multi-tenancy.mdx page is a content authoring target that cannot be written until this is resolved.

---

## Version Upgrade Proposals

Before v1.1 is built, surface the following for human approval:

1. **Add x-resources/ and x-deprecated/ to workspace artefact exclusion patterns** — these staging directories exist within guides/ and resources/ folders, not just under `_workspace/`. Affects primarily Gateways but may exist on other tabs.

2. **Clarify v1 path extraction approach** — the v1 navigation uses a `dropdown` key rather than a `tab` key. The current v1 reference extraction instruction is ambiguous for tabs where v1 uses a different nav structure.

3. **Add "component-rendered content" flag to API endpoint stub handling** — add explicit guidance for OpenAPI-import pages: flag them as `stub*` with a note that content may be rendered by component.

4. **Consider "multi-audience tab guidance" section** — once About or Community is tested, add tab-specific notes for how to handle a tab where audience is not a single token (About serves multiple audiences simultaneously).

Human approval required before any of these are incorporated into v1.1.
