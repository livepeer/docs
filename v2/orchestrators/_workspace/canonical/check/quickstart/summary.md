# Quickstart Section Summary Index

**Section:** `v2/orchestrators/quickstart/`
**Date:** 2026-03-24
**Pages covered:** 4 (guide, video-transcoding, tutorial, AI-prompt-start)
**Source:** Per-page check reports + critical reviews (post-correction)

---

## Overview

| Page | Overall Verdict | Frontmatter | Copy | Headings | Structure | Links | Veracity | Other Issues | Critical Review Quality |
|------|-----------------|-------------|------|----------|-----------|-------|----------|--------------|------------------------|
| `guide.mdx` | NEEDS WORK | FAIL — 4 missing required fields; deprecated `pageType: overview`; `status: current` with open REVIEW flag | PASS — clean throughout; 2 borderline constructions | FAIL — all 4 headings below 20/25; `vs` contrast label | BORDERLINE — open scope REVIEW flag blocks classification; Coming Soon content | FAIL — 6 broken links (4 unresolved) | FAIL — open REVIEW flag; `veracityStatus` absent; timing claims NOT-TESTED | `industry`/`niche` required but marked optional (check error — see below) | MOSTLY RELIABLE — 7 issues; missed findings for em dash, `just`, `industry`/`niche`; no false positives |
| `video-transcoding.mdx` | NEEDS WORK | FAIL — 5+ missing required fields; deprecated `pageType: quickstart`; incomplete OG block | FAIL — self-referential opener; 2 banned constructions | FAIL — 2 headings below 20/25 | FAIL — no NEXT handoff; missing Next Steps section (pending migration) | FAIL — 1 broken import (build failure); 3 dead card links; 1 incorrect relative path | FAIL — `veracityStatus` absent; unpinned `master` image tag; stale flag defaults; `livepeer_cli -cmd` syntax unverified | `pageVariant` missing (co-fix with `pageType` migration) | MOSTLY RELIABLE — 13 issues; core broken-link and import findings confirmed; process non-compliance on scan completeness; false positives on 1.3 and 5.2 (pre-migration evaluation) |
| `tutorial.mdx` | NEEDS WORK | FAIL — 4 missing required fields; `status: current` without `veracityStatus` | FAIL — Tip opener uses self-referential conditional; Step 3 conditional | FAIL — title and sidebarTitle are format labels (12/25, 11/25) | FAIL — nav position places sequencer page after the pages it sequences | PASS — all 4 internal links confirmed | FAIL — `veracityStatus` absent (low factual risk page) | `<Steps>` component absent for procedural content | CORRECT BEFORE USE — 9 issues; fabricated rule citation on check 3.2; `purpose: start` should be conditional on nav decision; "Next Steps" heading in fix violates Avoid tier |
| `AI-prompt-start.mdx` | NEEDS WORK | FAIL — 5 missing required fields; incomplete OG block; description 205 chars (over limit); em dash in description | FAIL — opening sentence self-referential; `depends on` without ranked list; em dash in body prose | FAIL — 3 headings below 20/25 (`Field reference` 15/25; `Confirm pipelines are advertised` 18/25; `Choose your AI path` 19/25); em dashes in all 4 Step H2 headings (missed by check) | PASS — single clear purpose; coherent structure; correct nav position | FAIL — 8 of 12 links broken; 5 distinct broken targets; `realtime-ai-setup` link falsely passed (wrong folder prefix — confirmed broken) | FAIL — 8 open REVIEW flags; VRAM values missing for 2 rows; active set size (100) unverified; CLI flags unverified; Beta limitation unverified | `Cascade` not defined at first use | MOSTLY RELIABLE — 9 issues; false positive on check 1.2 (`guide` is a valid value); `realtime-ai-setup` link passed incorrectly; 4 em dashes in step headings missed |

---

## Full Details Per Page

### `guide.mdx`

**Post-correction findings** (check report corrected per critical review issues 1–7):

**Finding 1 — CRITICAL: 4 missing required frontmatter fields**
`purpose`, `complexity`, `lifecycleStage`, `veracityStatus` all absent. `status: current` is set with an open REVIEW flag at line 26 — this combination is invalid per checks.mdx §1.8. Add: `purpose: orient`, `complexity: beginner`, `lifecycleStage: setup`, `veracityStatus: unverified`. Downgrade `status: current` to `status: draft`. Note: `industry` and `niche` are also required (not optional as the check report stated — per learnings.md Batch 1 item 1, the critical review corrects this to FAIL).

**Finding 2 — CRITICAL: Deprecated `pageType: overview` + scope unresolved**
`overview` is a deprecated 12-type alias. Migration requires a human decision (Blocking Decision 1): keep as a navigation hub (`pageType: navigation`) or rewrite as a verbose single-path quickstart (`pageType: instruction` + `pageVariant: quickstart`). The open REVIEW flag at line 26 (`THIS SHOULD NOT BE IN QUICKSTART - BE VERBOSE ABOUT THE EASIEST SETUP PATH FOR QUICKSTART.`) confirms scope is unresolved. The Coming Soon notice in the published page (line 47) must also be resolved.

**Finding 3 — HIGH: 6 broken internal links**
`/v2/orchestrators/guides/setup-paths/join-a-pool`, `/v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` (×2), `/v2/orchestrators/guides/feasibility-and-hardware/hardware-reference`, `/v2/orchestrators/guides/staking-and-rewards/earnings`, `/v2/orchestrators/guides/staking-and-rewards/attracting-delegates`. Two have confirmed replacements from docs.json (`join-a-pool` → `deployment-details/join-a-pool`; `earnings` → `staking-and-rewards/earning-model`). Four require file system verification.

**Post-correction additions from critical review:**
- Check 1.11 should FAIL: em dashes in `description` field (lines 4–6) are prohibited per CLAUDE.md — no exemption exists for "structural enumeration." Fix: replace `—` with hyphens.
- Check 2.2 should FAIL: `just` at line 42 (`No staking, no activation — just install and connect.`) is a banned minimiser per CLAUDE.md. Fix: remove `just`.
- Check 4.7 result should be CONDITIONAL, not PASS — `purpose` field is absent; the `orient` evaluation is post-fix-state reasoning.
- docs.json group listing in 4.3 was incomplete (omitted `tutorial` and `AI-prompt-start` as siblings).
- Fix targets for AI workloads links in checks 8.1 and 8.6 are different destinations — do not conflate.

---

### `video-transcoding.mdx`

**Post-correction findings** (check report corrected per critical review issues 1–13):

**Finding 1 — CRITICAL: Broken snippet import (build failure)**
Line 19: `import EthAccountSetup from '/snippets/pages/08_SHARED/eth-account-setup.mdx'` — directory does not exist. File is at `/snippets/composables/pages/shared/eth-account-setup.mdx`. The page will not render in production. Fix: update import path.

**Finding 2 — CRITICAL: 3 dead card links + 1 incorrect relative path**
`../concepts/job-types` — no `job-types.mdx` in `v2/orchestrators/concepts/`. `/v2/orchestrators/setup/install-go-livepeer` — does not exist; nearest equivalent is `v2/orchestrators/setup/rs-install.mdx` (×2, both cards use same broken path). `../resources/cli-flags` — correct path is `../resources/technical/cli-flags`. The "Connect to Arbitrum" card target also requires a separate human decision (B-3).

**Finding 3 — CRITICAL: Deprecated `pageType: quickstart`; 4 missing required fields**
Migrate to `pageType: instruction` + `pageVariant: quickstart` (treat as one fix, not two separate findings — critical review issue 1 removes the double-count). Missing: `purpose: start`, `complexity: intermediate`, `lifecycleStage: setup`, `veracityStatus: unverified`. OG image block incomplete (1 of 5 fields present) — fix requires sourcing the exact 5-field pattern from an existing passing page (critical review issue 8 flags the vague fix).

**Post-correction additions/removals from critical review:**
- Issues 1 and 4: `pageVariant` absent is a co-fix with `pageType` migration — not an independent HIGH finding. Merge into one fix.
- Issue 5: Check 5.2 (Next Steps section) evaluated against `instruction` template before migration is applied — treat as conditional, not a current MEDIUM.
- Issue 10: `livepeer_cli -cmd status` severity should be CRITICAL (not HIGH) — it is the page's primary verification command and the flag syntax is unverified.
- Issue 6: `../resources/cli-flags` path finding is confirmed correct in direction but docs.json verification was skipped.
- Issue 7: `Related pages` heading capitalisation inconsistency vs canonical exempt form (`Related Pages`) — flag as INFO for confirmation.

---

### `tutorial.mdx`

**Post-correction findings** (check report corrected per critical review issues 1–9):

**Finding 1 — CRITICAL: 4 missing required frontmatter fields + `status: current` invalid**
`purpose`, `complexity`, `lifecycleStage`, `veracityStatus` all absent. `status: current` is set without `veracityStatus: verified` and with REVIEW-flaggable structural ambiguity. Add: `complexity: beginner`, `lifecycleStage: setup`, `veracityStatus: unverified`. Change `status: current` to `status: draft`. For `purpose`: treat as conditional on nav decision — `orient` (sequencer/router function) or `start` (if redesigned as a linear path page); do not assign `start` without resolving Blocking Decision 1.

**Finding 2 — CRITICAL: Nav position creates journey incoherence**
The tutorial sits at position 3 of 4 in the Quickstart group (after `video-transcoding`), but its content sequences the reader through `guide` → `video-transcoding` → AI extension. A reader arriving linearly has already completed step 2 before reading the page that tells them to complete step 2. This is a structural IA issue requiring a human decision: [A] reorder to position 2 (guide → tutorial → video-transcoding → AI-prompt-start) or [B] redesign as a post-smoke-test synthesis/exit page. Do not execute the docs.json reorder without Alison's decision — critical review issue 9 flags that the check report prematurely advocates for Option A.

**Finding 3 — HIGH: Tip opener uses banned constructions**
Line 23 Tip: `"Use this tutorial when you want the shortest guided path..."` — `This [page-type] [verb]` self-reference construction (§2.4) and `when you want` conditional (§2.4). Line 26: `"Move through the quickstart in this order:"` — structural label masquerading as an opening statement (missed by check, added by critical review issue 5). Line 30 Step 3: `"when you want to extend"` conditional. Fix Tip body: `"Shortest path from hardware check to a passing off-chain smoke test. Steps 1–3 run in sequence; AI inference extends the same machine."` Fix Step 3: `"Run [Add AI to Your Node] to extend the same machine with AI inference."` Delete line 26 label.

**Post-correction removals from critical review:**
- Check 3.2 FAIL for `Tutorial` — removed. `Tutorial` does not appear in the banned or avoid-tier term lists in checks.mdx §3.2. The checker fabricated a "§3.2 discussion" citation. The Category 3 verdict (FAIL) survives on checks 3.4 and 3.6 alone.
- Category 2 verdict count: 3 independent check failures (2.4, 2.5, 2.10), not 4 — checks 2.3 and 2.4 fire on the same Tip text.
- "Next Steps" heading proposed in fix for check 5.2 — do not use; `Next Steps` is in the Avoid tier (checks.mdx §3.2). Use a heading that avoids the Avoid tier.

---

### `AI-prompt-start.mdx`

**Post-correction findings** (check report corrected per critical review issues 1–12):

**Finding 1 — CRITICAL: 5 missing required frontmatter fields + description over limit**
`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, full OG block all absent/incomplete. Description is 205 characters (limit: 160) and contains an em dash. Fix description (142 chars, no em dash): `Add AI inference pipelines to a running go-livepeer transcoding node: hardware check, aiModels.json configuration, and startup command update.` Add: `purpose: configure`, `complexity: intermediate`, `lifecycleStage: setup`, `veracityStatus: unverified`. Note: proposed frontmatter values are reasonable inferences, not automated resolutions — require Alison sign-off.

**Finding 2 — CRITICAL: 9 broken internal links (not 8)**
Critical review issue 2 identifies that the `realtime-ai-setup` card link at line 254 was falsely passed. The page links to `/v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup` but the docs.json entry is `ai-and-job-workloads/realtime-ai-setup` — different folder prefix. This makes 9 broken links of 12, with 5 distinct broken targets (not 4 as the check report states — critical review issue 3 identifies the count discrepancy): `large-scale-operations`, `job-types` (×3), `ai-workloads-guide` (×3), `/setup/activate` (correct path: `connect-and-activate`), `batch-ai-setup`, `realtime-ai-setup` (wrong folder prefix).

**Finding 3 — HIGH: Em dashes in 4 step headings (missed by check)**
Critical review issue 8 identifies that all four Step H2 headings use em dashes (`Step 1 — Pull the AI runner image`, etc.) — none were flagged by the check report. CLAUDE.md em-dash prohibition applies to all visible text including H2 headings. Fix: replace `—` with `:` or `-` in all four step headings. Additionally: em dash in body prose at line 100 (`warm model — the minimal working configuration`) — fix with comma. Em dash in description — covered in Finding 1.

**Post-correction removals/adjustments from critical review:**
- Check 1.2 result changed from FAIL to PASS: `guide` is a valid 7-type value in the canonical schema. The reclassification recommendation to `instruction + pageVariant: quickstart` is valid editorial guidance but is not a schema violation. Record as a structural recommendation, not a schema FAIL.
- Check 2.1 result corrected to PASS — the FAIL header was a result/detail contradiction (P28 error pattern); the detail section concluded PASS.
- Broken link count corrected: 9 broken of 12 (not 8), 5 distinct targets (not 4).
- VRAM table rows for `upscale` and `text-to-speech` have empty rendered cells — must be resolved or rows removed before publication.

---

## Common Patterns

The following issues appear across multiple pages in the Quickstart section:

**1. Missing required frontmatter fields (all 4 pages)**
Every page is missing at minimum `purpose`, `complexity`, `lifecycleStage`, and `veracityStatus`. Two pages also have incomplete OG image blocks. This is the highest-frequency issue across the section and requires a single batch fix pass.

**2. Broken internal links (3 of 4 pages)**
`guide.mdx` has 6 broken links, `video-transcoding.mdx` has 4, `AI-prompt-start.mdx` has 9. Several targets are shared across pages (e.g. `workloads-and-ai/` vs `ai-and-job-workloads/` — a folder prefix mismatch causing systematic dead links). Several broken links use `{/* REVIEW: confirm path */}` flags already, indicating known-unresolved state.

**3. Deprecated `pageType` values (2 of 4 pages)**
`video-transcoding.mdx` uses `pageType: quickstart` (deprecated); `guide.mdx` uses `pageType: overview` (deprecated). Both require migration to the 7-type canonical schema, but the correct migration value for `guide.mdx` depends on a blocking scope decision.

**4. Em dash prohibition violations (3 of 4 pages)**
`guide.mdx` — em dashes in description (missed by check); `tutorial.mdx` — Note at borderline (not flagged); `AI-prompt-start.mdx` — em dash in description, body prose, and all 4 step headings. The pattern of checks missing em dashes in non-body-prose locations (description field, headings) is a recurring check failure across this section and is documented in learnings.md.

**5. Self-referential or conditional openers (3 of 4 pages)**
`video-transcoding.mdx` opens with `"This is the canonical quickstart..."` — self-referential; `tutorial.mdx` opens its Tip with `"Use this tutorial when you want..."` — self-referential + conditional; `AI-prompt-start.mdx` opens with `"By the end of this guide..."` — meta-framing. All three violate checks.mdx §2.3/2.4/2.5.

**6. Check report process failures (across all 4 check reports)**
All four check reports were rated MOSTLY RELIABLE or CORRECT BEFORE USE — none passed without correction. Recurring failures include: em-dash prohibition not applied to all visible text (missed in description fields and headings), `industry`/`niche` marked optional when they are required, post-fix-state evaluation (evaluating against proposed values rather than current state), partial banned construction scans (not showing work), and fabricated rule citations.

---

## Recommendations

Priority order for fixes:

**Priority 1 — Unblock rendering (video-transcoding.mdx)**
Fix the broken `EthAccountSetup` import path before any other work. The page will not render in production until this is resolved. Path fix: `/snippets/composables/pages/shared/eth-account-setup.mdx`.

**Priority 2 — Batch frontmatter fix (all 4 pages)**
Add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` to all four pages in a single pass. Values are known for three pages; `purpose` for `tutorial.mdx` is conditional on Blocking Decision 1 (nav position). Complete the OG image blocks on `video-transcoding.mdx` and `AI-prompt-start.mdx` using an existing passing page as the template.

**Priority 3 — Resolve blocking decisions (guide.mdx and tutorial.mdx)**
Two pages have blocking human decisions that gate downstream fixes:
- `guide.mdx` Blocking Decision 1: navigation hub vs verbose single-path quickstart. Resolves `pageType` migration, template validation, and scope of content revision.
- `tutorial.mdx` Blocking Decision 1: nav position reorder (Option A) vs content redesign (Option B). Resolves `purpose` value, content validity of the Tip sequencer, and position in docs.json.

**Priority 4 — Fix dead links (all 3 affected pages)**
Resolve the systematic `workloads-and-ai/` → `ai-and-job-workloads/` folder prefix mismatch across `guide.mdx` and `AI-prompt-start.mdx`. Fix confirmed replacement paths from docs.json. Flag the 4–5 link targets that require file system verification or page creation decisions as separate items for Alison.

**Priority 5 — Fix `video-transcoding.mdx` deprecated `pageType` + 3 dead card links**
Migrate `pageType: quickstart` → `pageType: instruction` + `pageVariant: quickstart` as one fix. Fix the three dead card links (install-go-livepeer ×2, job-types). Confirm the "Connect to Arbitrum" card replacement target.

**Priority 6 — Copy and voice fixes (all pages)**
- `video-transcoding.mdx`: Remove or rewrite self-referential opener at line 22.
- `tutorial.mdx`: Rewrite Tip opener (line 23), delete structural label (line 26), fix Step 3 conditional (line 30).
- `AI-prompt-start.mdx`: Rewrite opening sentence (line 15), fix `depends on` construction (line 238).
- `guide.mdx`: Remove `just` at line 42; resolve the two borderline conditionals at lines 124 and 130.

**Priority 7 — Em dash fixes (guide.mdx and AI-prompt-start.mdx)**
Replace em dashes in: `guide.mdx` description (lines 4–6) and body prose (line 42). `AI-prompt-start.mdx` description, body prose (line 100), and all 4 Step H2 headings.

**Priority 8 — Heading renames**
- `guide.mdx`: Rename all 4 H2 headings to score ≥20/25. Confirmed replacements: `Quickstart Paths`, `Prerequisites`, `Quickstart Scope`, `After First Run`.
- `video-transcoding.mdx`: Rename `Step 3: Configure and run` → `Node Deployment`; rename `Testing end-to-end with a Gateway` → `End-to-End Session Validation`.
- `AI-prompt-start.mdx`: Rename `Field reference` → `aiModels.json Fields`; rename `Confirm pipelines are advertised` → `On-Chain Pipeline Advertisement`; rename `Choose your AI path` → `AI Pipeline Type`.

**Priority 9 — Veracity flags and REVIEW resolution**
Add `{/* REVIEW: */}` flags to all unverified procedural claims in `video-transcoding.mdx` (docker-compose.yml, CLI commands, flag defaults). Resolve or source: VRAM values for `upscale` and `text-to-speech` rows in `AI-prompt-start.mdx` (blank rendered cells are visible to readers). Escalate `livepeer_cli -cmd status` to CRITICAL — unverified primary verification command.

**Priority 10 — `<Steps>` component migration (tutorial.mdx)**
Convert the plain ordered list to `<Steps>` / `<Step>` blocks. Add explicit structural sections for Prerequisites and a next-step section (heading must avoid the Avoid tier — do not use `Next Steps`).
