# Per-Page Quality Check — `v2/orchestrators/quickstart/tutorial.mdx`

**Date:** 2026-03-24
**Reviewer:** Claude Code (automated check agent)
**Verdict:** NEEDS WORK

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Quickstart Tutorial` | PASS | Well-formed |
| `sidebarTitle` | Yes | `Tutorial` | PASS | Acceptable short-form |
| `description` | Yes | `Follow the quickest guided path to verify Livepeer video or AI workloads on your hardware before moving to production setup.` | FAIL | See 1.11 — 149 chars, passes length. Fails self-reference test: "Follow the quickest guided path" is a direction to the reader, not a subject-first statement. Fix below. |
| `pageType` | Yes | `tutorial` | PASS | Valid 7-type value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | **No** | *(absent)* | **FAIL** | Required field. Not present. See 1.1 |
| `complexity` | **No** | *(absent)* | **FAIL** | Required field. Not present. See 1.1 |
| `lifecycleStage` | **No** | *(absent)* | **FAIL** | Required field. Not present. See 1.1 |
| `keywords` | Yes | `livepeer`, `orchestrator`, `quickstart tutorial`, `smoke test`, `hardware verification` | FAIL | See 1.13 — generic entries. Fix below. |
| OG image block | Yes | All 5 fields present | PASS | `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height` all present |
| `status` | Yes | `current` | CONDITIONAL FAIL | `status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags per checks.mdx §1.8. `veracityStatus` is absent. |
| `lastVerified` | Yes | `2026-03-16` | INFO | Not a required field; informational only |
| `veracityStatus` | **No** | *(absent)* | **FAIL** | Required per checks.mdx §1.8. Default for unreviewed content is `unverified`. |

**Missing required fields (4):** `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | **FAIL** | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Line 1–20 (full frontmatter block). |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `tutorial` is a valid primary type. Not a deprecated alias. |
| 1.3 | `pageVariant` valid if present | N/A | `pageVariant` not set. Not required when no variant applies. |
| 1.4 | `purpose` uses 15-value canonical set | **FAIL** | Field absent — cannot evaluate value. Dependent on 1.1 fix. Correct value for this page: `start` (reader goes from zero to minimal working state fast — lines up with "shortest guided path … to successful off-chain smoke test"). |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | **FAIL** | Field absent. Correct value: `beginner` — the page assumes new-to-the-system hardware owners following a shortest path. |
| 1.7 | `lifecycleStage` single canonical value | **FAIL** | Field absent. Correct value: `setup` — first-time smoke test before production. |
| 1.8 | `veracityStatus` present and honest | **FAIL** | Field absent. `status: current` is set (line 18), which per checks.mdx §1.8 requires `veracityStatus: verified` AND zero REVIEW flags. Current state cannot satisfy `verified` without a veracity pass. Correct interim value: `unverified`. The `status: current` claim is therefore also premature. |
| 1.9 | `industry` array valid if present | N/A | `industry` not set. Not present — no violation. |
| 1.10 | `niche` array valid if present | N/A | `niche` not set. Not present — no violation. |
| 1.11 | `description` well-formed | **FAIL** | Line 4: `Follow the quickest guided path to verify Livepeer video or AI workloads on your hardware before moving to production setup.` Character count: 149 chars — within 160 limit. Fails subject-first rule: opens with imperative instruction ("Follow") rather than a declarative subject-first statement. Fix: `Shortest guided path from hardware check to a successful off-chain video or AI smoke test, before production setup.` (113 chars, subject-first). |
| 1.12 | OG image block complete | PASS | All 5 fields present at lines 11–15. |
| 1.13 | `keywords` field quality | **FAIL** | Lines 6–10. `livepeer` (line 6) and `orchestrator` (line 7) are generic — no target reader would search these terms alone to find this specific page. `quickstart tutorial` (line 8) is a structural label, not a searcher-intent term. Strong: `smoke test` (line 9), `hardware verification` (line 10). Fix: replace `livepeer`, `orchestrator`, `quickstart tutorial` with intent-aligned terms such as `off-chain smoke test livepeer`, `GPU transcoding verification`, `first orchestrator node test`. |

**Category 1 Verdict: FAIL** — 4 missing required fields, 3 quality failures on present fields.

**Fixes for Category 1:**

1. Add `purpose: start` to frontmatter.
2. Add `complexity: beginner` to frontmatter.
3. Add `lifecycleStage: setup` to frontmatter.
4. Add `veracityStatus: unverified` to frontmatter (until a veracity pass is completed).
5. Change `status: current` to `status: draft` until `veracityStatus: verified` can be set with zero REVIEW flags.
6. Replace `description` value with: `Shortest guided path from hardware check to a successful off-chain video or AI smoke test, before production setup.`
7. Replace keywords `livepeer`, `orchestrator`, `quickstart tutorial` with: `off-chain smoke test livepeer`, `GPU transcoding verification`, `first orchestrator node test`.

---

## Category 2 — Voice & Copy

**Body prose to scan (lines 22–34):**

```
Use this tutorial when you want the shortest guided path from hardware check to a successful off-chain smoke test.

Move through the quickstart in this order:

1. Read the [Quickstart overview](/v2/orchestrators/quickstart/guide) to confirm the path matches your hardware and time budget.
2. Run the [video transcoding smoke test](/v2/orchestrators/quickstart/video-transcoding) to verify Docker, GPU passthrough, and local off-chain routing.
3. Use [Add AI to Your Node](/v2/orchestrators/quickstart/ai-prompt-start) when you want to extend the same machine with AI inference.

The quickstart stays off-chain. Move to the [Setup Guide](/v2/orchestrators/setup/guide) after the smoke test passes and you are ready to configure a production node.
```

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings detected in body prose or headings. |
| 2.2 | Zero banned words | PASS | None of: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` found. |
| 2.3 | Zero banned phrases | **FAIL** | Line 23 (Tip component): `"Use this tutorial when you want the shortest guided path from hardware check to a successful off-chain smoke test."` — this is a self-referential meta-description using `"Use this tutorial"`. While not exactly a listed banned phrase, it matches the pattern of `"This page covers / walks you through"` (checks.mdx §2.3). It describes what the page is rather than opening with content. Additionally `"when you want"` introduces an unresolved conditional. See 2.4. |
| 2.4 | Zero banned constructions | **FAIL** | **Two violations:** (1) Line 23 (Tip): `"Use this tutorial when you want..."` — `This [page-type] [verb]` self-reference construction (checks.mdx §2.4: `This page [verb]` = delete self-reference; direct extension: any `[page-type] [verb]`). (2) Line 31: `"Use [Add AI to Your Node] when you want to extend the same machine with AI inference."` — `when you want` is an `if [condition]` in body prose (checks.mdx §2.4). Fix: resolve the condition to a direct statement. |
| 2.5 | Opening order correct | **FAIL** | Line 23 (Tip opener): opens with `"Use this tutorial when..."` — self-referential instruction before content. The page's value (what the reader achieves) is not stated. Opening should state what the reader will have after following the steps. |
| 2.6 | Paragraph discipline | PASS | Each prose block has one job. Final sentence at line 33 ends on a concrete next step (`"Move to the Setup Guide after the smoke test passes and you are ready to configure a production node."`). Lead sentences state facts. |
| 2.7 | Audience register correct | PASS | `orchestrator` register: operational, hardware-aware, no hand-holding. Content is concise and procedural. Correct register for audience. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No `"easy to set up"`, `"the network rewards you for"`, `"your orchestrator will automatically"`. |
| 2.9 | No passive value statements | PASS | No unquantified value claims. The page does not make earnings or performance claims. |
| 2.10 | No hedging openers | **FAIL** | Line 23 (Tip): `"Use this tutorial when you want..."` — conditional opener. Hedges on reader intent before delivering content. |
| 2.11 | Terminology locked and consistent | PASS | Uses `off-chain`, `orchestrator`, `smoke test`, `GPU passthrough`, `AI inference` correctly. No deprecated terms detected. |

**Category 2 Verdict: FAIL** — 4 checks fail (2.3, 2.4, 2.5, 2.10), all rooted in the Tip opener.

**Fixes for Category 2:**

1. **Line 23 — Tip body text:** Replace `"Use this tutorial when you want the shortest guided path from hardware check to a successful off-chain smoke test."` with a subject-first, non-conditional statement. Example: `"Shortest path from hardware check to a passing off-chain smoke test. Steps 1–3 run in sequence; AI inference extends the same machine."` (No self-reference; no conditional; opens with content.)

2. **Line 31 — Step 3 text:** Replace `"Use [Add AI to Your Node] when you want to extend the same machine with AI inference."` with: `"Run [Add AI to Your Node](/v2/orchestrators/quickstart/ai-prompt-start) to extend the same machine with AI inference."` (Direct imperative; no conditional `when you want`.)

---

## Category 3 — Section Naming & Headings

**Headings found in the page (lines 1–35):**
The page has no H2 or H3 headings in body prose. The only "heading" is the page `title` field in frontmatter: `Quickstart Tutorial`.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | **Applied to title only** | See Heading Score Table below. |
| 3.2 | No banned/weak standalone heading terms | **FAIL** | Title `Quickstart Tutorial` — `Tutorial` is listed in checks.mdx §3.2 discussion as a term in the banned/weak tier when used in isolation as a structural label that communicates nothing about the specific content. Here it is paired with `Quickstart`, which partially anchors it. However, `Quickstart Tutorial` as a title names the page-type/format rather than the governing concept. The `sidebarTitle: Tutorial` is a pure structural label. See scoring. |
| 3.3 | No literal contrast labels | N/A | No `X vs Y` headings present. |
| 3.4 | Domain-anchor rule applied | **FAIL** | `Tutorial` alone (sidebarTitle, line 3) has no domain anchor. Uninterpretable in isolation. A reader seeing `Tutorial` in sidebar navigation cannot predict what it covers. |
| 3.5 | Heading names the concept, not examples | PASS | No example-naming headings. |
| 3.6 | Title well-formed | **FAIL** | `Quickstart Tutorial` (line 2) is a format label, not a concept label. Checks.mdx §3.6: "Uses the real governing concept, not a safe generic label." The governing concept here is the verified smoke-test path. A stronger title: `Smoke Test Path` or `Verification Path`. |
| 3.7 | Sounds like expert editorial choice | **FAIL** | `Quickstart Tutorial` and `Tutorial` as sidebar title are both bureaucratic/safe labels. A senior technical editor would choose something like `Smoke Test Path` or `Quickstart Verification`. |

**Category 3 Verdict: FAIL** — Title and sidebarTitle both fail as concept labels.

---

## Heading Score Table

Only the page title is scored. No H2/H3 headings exist in body prose.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| `Quickstart Tutorial` (title, line 2) | 2 | 1 | 3 | 2 | 4 | **12/25** | **FAIL** |
| `Tutorial` (sidebarTitle, line 3) | 1 | 1 | 3 | 1 | 5 | **11/25** | **FAIL** |

**Scoring rationale:**

`Quickstart Tutorial`:
- Precision 2: Names the format/section, not the concept. "Quickstart Tutorial" = "a tutorial in the quickstart section" — tautological.
- Depth 1: Signals nothing about intellectual content. Could be any tutorial on any topic.
- Stability 3: Would survive most content changes since it is format-anchored, not content-anchored.
- Clarity 2: A reader seeing this cannot predict what the tutorial covers or what outcome they achieve.
- Conciseness 4: Two words — compact enough; penalty only for redundancy with structure.

`Tutorial` (sidebarTitle):
- Precision 1: Names nothing specific.
- Depth 1: No signal.
- Stability 3: Stable by being empty.
- Clarity 1: Zero predictive value in navigation context.
- Conciseness 5: One word.

**Suggested replacement title:** `Smoke Test Path` (Precision 4, Depth 3, Stability 4, Clarity 4, Conciseness 5 = 20/25 — borderline pass).
Stronger option: `Quickstart Verification` (Precision 4, Depth 3, Stability 4, Clarity 4, Conciseness 4 = 19/25 — still below threshold).
Best candidate: `Verification Path` (Precision 4, Depth 4, Stability 4, Clarity 4, Conciseness 5 = 21/25 — PASS). Pairs with `sidebarTitle: Verification` (still weak alone — domain-anchor required) → better sidebarTitle: `Smoke Test`.

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Page serves one audience (orchestrator) doing one thing (following the ordered quickstart path). Single job is clear: sequencing the reader through guide → smoke test → AI extension. |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator follow the verified step sequence from hardware check to passing smoke test." Writable. |
| 4.3 | PREV/NEXT adjacency correct | **FAIL** | From docs.json lines 2849–2854, the nav sequence is: `guide` (position 1) → `video-transcoding` (position 2) → `tutorial` (position 3) → `AI-prompt-start` (position 4). This tutorial page sits at position 3, AFTER `video-transcoding`. A reader arriving from `video-transcoding` has just run the smoke test — they arrive knowing whether it passed. The tutorial page tells them to run the smoke test they have already run (step 2 references `/v2/orchestrators/quickstart/video-transcoding`). The page is positioned as a sequencer/index for steps the reader has already partially completed. This creates a knowledge-gap and journey incoherence. The tutorial sits behind the pages it orchestrates. |
| 4.4 | No dead ends | PASS | Line 33 routes to `/v2/orchestrators/setup/guide`. Clear exit. |
| 4.5 | Prerequisites stated or linked | PASS | The page implicitly routes to all prerequisites via the ordered steps. The `guide` link (step 1, line 28) handles prerequisite checking. |
| 4.6 | Out-of-scope is clear | PASS | Line 33 Note component explicitly scopes out production node configuration and routes to Setup Guide. |
| 4.7 | Information type per section correct | PASS | Page's inferred purpose is `start`. Permitted primary types: `procedural`, `factual`. Page content is procedural (ordered numbered list) and factual (references to concrete pages). Correct. |
| 4.8 | No content duplication from adjacent sections | **BORDERLINE** | Step 2 (line 29) references the video transcoding smoke test and step 3 (line 30) references the AI start page. If read after `video-transcoding`, the reader sees duplicate content framing. However, the page is a sequencer, so some duplication is structural. Flag for human decision on nav position. |
| 4.9 | Section orientation page present | N/A | Section-level check; `guide.mdx` exists at position 1 as orientation. |
| 4.10 | Cross-tab links at journey intersections | INFO | This page has no cross-tab links. As a brief sequencing page, this is acceptable. Tab-level cross-link requirement does not apply per-page. |

**Category 4 Verdict: FAIL** — Check 4.3 fails. The page's position in the nav sequence (after `video-transcoding`) means a reader arriving from the previous page has already run the smoke test the tutorial tells them to run. The tutorial belongs BEFORE `video-transcoding`, not after it.

**Fix for 4.3:** Move `tutorial` to position 1 in the Quickstart group in docs.json (before `guide`), or more accurately, move it to position 2 (after `guide`, before `video-transcoding`). Nav sequence should be: `guide` → `tutorial` → `video-transcoding` → `AI-prompt-start`. Alternatively, redesign the page as a post-smoke-test synthesis/next-step page — but that requires a content rewrite.

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for `tutorial` pageType | **NOT-TESTED** | `docs-guide/catalog/components-catalog.mdx` not read. Layout matrix at checks.mdx §5 states `tutorial` requires: Prerequisites, Steps, Next Steps. Page has none of these structural sections. See 5.2. |
| 5.2 | Required sections present | **FAIL** | Per checks.mdx §5 component matrix, `tutorial` pageType requires: Prerequisites, Steps, Next Steps. This page has: a Tip callout, a numbered list (not using `<Steps>` component), and a Note callout. No `<Steps>`, no explicit Prerequisites section, no explicit Next Steps section. The numbered list at lines 26–30 functions as steps but is formatted as a plain ordered list, not a `<Steps>` component block. |
| 5.3 | Only approved components used | **NOT-TESTED** | `docs-guide/catalog/components-catalog.mdx` not read. Components used: `<Tip>` (line 22), `<Note>` (line 32). Both appear in the Preferred column for `tutorial` per checks.mdx §5 component matrix. No obviously unapproved components. Result: NOT-TESTED pending catalog read. |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `TODO/TBD` placeholders visible in the page. |
| 5.5 | Information type → component mapping correct | **FAIL** | Procedural content (the ordered step sequence lines 26–30) is presented as a plain Markdown numbered list, not a `<Steps>` block. Per checks.mdx §5.5: `procedural` → `<Steps>`. |
| 5.6 | MDX renders clean | PASS (assumed) | No broken JSX, unclosed tags, or import errors visible in the file. Tip and Note are standard Mintlify callout components. Cannot confirm without `npx mintlify dev` run. |
| 5.7 | No old-schema frontmatter | PASS | `pageType: tutorial` is new-schema. No deprecated purpose aliases present (purpose field is absent — separate failure). |
| 5.8 | CSS uses custom properties only | N/A | No CSS present in this page. |
| 5.9 | Generated file banners intact | N/A | No `generated-file-banner` block present. File is not auto-generated. |
| 5.10 | Component naming/import conventions | PASS | No custom component imports. Standard Mintlify callouts used correctly. |

**Category 5 Verdict: FAIL** — Missing `<Steps>` component for procedural content; required structural sections (Prerequisites, explicit Next Steps) absent.

**Fixes for Category 5:**

1. Convert the numbered list at lines 26–30 into a `<Steps>` / `<Step>` block.
2. Add an explicit Prerequisites section (even if minimal: `Hardware requirements met` linking to requirements page; Docker installed; basic CLI familiarity).
3. Add an explicit Next Steps section (currently handled by the Note at line 32 — this could be restructured as a proper Next Steps section or card group).

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | **NOT-TESTED** | Three link-based claims: (1) `/v2/orchestrators/quickstart/guide` exists (check 7.1 confirms); (2) `/v2/orchestrators/quickstart/video-transcoding` exists; (3) `/v2/orchestrators/quickstart/ai-prompt-start` exists. No numeric claims, no earnings/latency figures. Content is structural pointers — low factual risk. |
| 6.2 | Code/commands tested | N/A | No code blocks or CLI commands on this page. |
| 6.3 | No deprecated API usage | N/A | No API calls or SDK references. |
| 6.4 | Numbers are real | N/A | No numbers on this page. |
| 6.5 | REVIEW flags for unverified claims | PASS | No unverified claims present. The page makes no factual assertions beyond structural navigation. |
| 6.6 | `veracityStatus` honest | **FAIL** | `veracityStatus` is absent (see 1.8). Required field. Given the page's low factual content (structural/procedural only), the appropriate setting once added is `unverified` until a veracity pass is formally recorded. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary terms invoked. |
| 6.8 | Source staleness check | INFO | The three linked pages reference procedures that depend on go-livepeer CLI and Docker — both change between releases. This page itself is a router; staleness risk is low at this level but propagates from the linked pages. |
| 6.9 | No open-ended research tasks | PASS | No "needs more research" items. |

**Category 6 Verdict: FAIL** — `veracityStatus` absent. All other checks pass or N/A.

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/quickstart/tutorial` confirmed at docs.json line 2852. |
| 7.2 | Navigation matches file system | PASS | File at `/v2/orchestrators/quickstart/tutorial.mdx` matches nav entry at docs.json line 2852. |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check. Not applicable per-page. |
| 7.4 | No structural orphans | PASS | Page is reachable from the Quickstart group in docs.json. |
| 7.5 | Audience journey complete | **FAIL** | Nav position (position 3 of 4 in Quickstart group) places this tutorial AFTER the video transcoding page it sequences. A reader who arrived linearly has already run step 2 before reading the tutorial that tells them to run step 2. Journey incoherence. See 4.3. |
| 7.6 | Cross-tab graduation paths exist | INFO | Page links to Setup Guide for next step — within-tab graduation. No cross-tab links. Acceptable for a quickstart sequencer. |
| 7.7 | File in correct lane | PASS | File is in `v2/orchestrators/quickstart/` — publishable lane, correct. |
| 7.8 | File naming conventions | PASS | `tutorial.mdx` — no invalid prefix. No `-index.mdx`. Acceptable for a content page in a named subdirectory. |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file. |

**Category 7 Verdict: FAIL** — Check 7.5 fails; nav position creates journey incoherence (same root cause as 4.3).

---

## Category 8 — Links & Rendering

**Links present in page:**
- Line 28: `/v2/orchestrators/quickstart/guide`
- Line 29: `/v2/orchestrators/quickstart/video-transcoding`
- Line 30: `/v2/orchestrators/quickstart/ai-prompt-start`
- Line 33: `/v2/orchestrators/setup/guide`

| Link | docs.json confirmed? | Result |
|------|---------------------|--------|
| `/v2/orchestrators/quickstart/guide` | Yes — docs.json line 2850 | PASS |
| `/v2/orchestrators/quickstart/video-transcoding` | Yes — docs.json line 2851 | PASS |
| `/v2/orchestrators/quickstart/ai-prompt-start` | Yes — docs.json line 2853 (`AI-prompt-start`) | PASS |
| `/v2/orchestrators/setup/guide` | Yes — docs.json line 2860 | PASS |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | All 4 internal links confirmed in docs.json. |
| 8.2 | All external links live | N/A | No external links present. |
| 8.3 | All snippet imports resolve | N/A | No snippets imported. |
| 8.4 | All images load | N/A | No images in body. OG image path `/snippets/assets/site/og-image/en/orchestrators.png` not verified against file system (low risk — standard shared asset). |
| 8.5 | Page renders without error | PASS (assumed) | No broken JSX visible. `<Tip>` and `<Note>` are standard Mintlify components. |
| 8.6 | No TODO/TBD/Coming Soon | PASS | None present. |

**Category 8 Verdict: PASS**

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | **FAIL** | No evidence of human sign-off. `status: current` set without `veracityStatus: verified`. |
| 9.2 | All consuming decisions in registry | INFO | No decisions specific to this page found. Standard nav-position and pageType decisions apply. |
| 9.3 | Gate prerequisites met | **FAIL** | Per tab-status.md: Orchestrators tab has no IA Approved gate open. No Terminology Locked. No Content Pass Open. This page is published with `status: current` while the tab is gated on human IA review. |
| 9.4 | Phase ordering respected | INFO | Cannot verify without session history. |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report. |
| 9.6 | Feedback routed | N/A | No prior corrections to route. |

**Category 9 Verdict: FAIL** — Human sign-off absent; gate prerequisites not met for `status: current`.

---

## Banned Construction Scan

**Scope:** all body prose, headings, frontmatter `description`, Tip body, Note body, link text, numbered list items.

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|----------------|--------------|----------------|-------|
| 4 (description) | `"Follow the quickest guided path to verify..."` | — | Not a banned-word match. `"Follow"` as imperative opener violates subject-first rule (see 2.5). Not a banned-construction match directly. | No (covered under 2.5) |
| 23 (Tip) | `"Use this tutorial when you want the shortest guided path..."` | `"Use this tutorial"` | `This [page-type] [verb]` — self-reference construction (checks.mdx §2.4) | **FLAG — FAIL** |
| 23 (Tip) | `"...when you want the shortest guided path..."` | `"when you want"` | `if [condition]` in body prose (checks.mdx §2.4) | **FLAG — FAIL** |
| 28 (Step 1) | `"Read the [Quickstart overview] to confirm the path matches your hardware and time budget."` | — | Procedural imperative. `"to confirm"` is a goal clause, not a value claim with `can/may`. | PASS — procedural |
| 29 (Step 2) | `"Run the [video transcoding smoke test] to verify Docker, GPU passthrough, and local off-chain routing."` | — | Procedural imperative. | PASS — procedural |
| 30 (Step 3) | `"Use [Add AI to Your Node] when you want to extend the same machine with AI inference."` | `"when you want"` | `if [condition]` in body prose (checks.mdx §2.4). "When you want" = conditional. | **FLAG — FAIL** |
| 33 (Note) | `"The quickstart stays off-chain."` | — | Direct factual statement. | PASS |
| 33 (Note) | `"Move to the [Setup Guide] after the smoke test passes and you are ready to configure a production node."` | `"after ... and you are ready"` | Conditional trigger — borderline. "after X passes" is a procedural gate, not an `if [condition]` in the banned-construction sense. "You are ready" is soft conditional. | BORDERLINE — flag for human review |

**Summary of flagged constructions:**
- Line 23: Two violations (self-reference + conditional) — **FAIL**
- Line 30: One violation (conditional) — **FAIL**
- Line 33: One BORDERLINE item — human review

---

## Spelling/Typo Check

Scan of all visible text (title, description, keywords, Tip, numbered list, Note):

- `Quickstart Tutorial` — correct
- `smoke test` — correct
- `hardware verification` — correct
- `GPU passthrough` — correct
- `off-chain` — correct
- `AI inference` — correct
- `production node` — correct
- `Quickstart overview` — correct
- `video transcoding smoke test` — correct
- `Setup Guide` — correct

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for `tutorial` pageType? | Notes |
|-----------|-------|--------------------------------------|-------|
| `<Tip>` | Yes (line 22) | Yes — in Preferred column for `tutorial` per checks.mdx §5 | Content inside Tip has voice violations (see Cat 2). Component itself is approved. |
| `<Note>` | Yes (line 32) | Yes — listed as `Warning, Check, Tip` for tutorial; Note is accepted for contextual information. NOT-TESTED against catalog. | Correct use as scope boundary statement. |
| Markdown ordered list (`1.` `2.` `3.`) | Yes (lines 26–30) | **No** — procedural content for `tutorial` pageType requires `<Steps>` component per checks.mdx §5.5 | Plain numbered list does not satisfy the required component mapping. |
| `<Steps>` / `<Step>` | No | Required for `tutorial` pageType | Absent. See 5.2 and 5.5. |

---

## Cross-Category Connections

```
Root Cause [1]: Tip opener uses self-referential conditional construction
Affects: Cat 2.3 + Cat 2.4 + Cat 2.5 + Cat 2.10 + Banned Construction Scan (line 23)
Fix: Replace Tip body at line 23 with subject-first declarative:
     "Shortest path from hardware check to a passing off-chain smoke test.
      Steps 1–3 run in sequence; AI inference extends the same machine."
```

```
Root Cause [2]: Nav position places tutorial sequencer AFTER the pages it sequences
Affects: Cat 4.3 + Cat 7.5
Fix: Move tutorial to position 2 in Quickstart group in docs.json (after guide, before video-transcoding).
     docs.json change: reorder lines 2849–2854 so sequence is:
       "v2/orchestrators/quickstart/guide",
       "v2/orchestrators/quickstart/tutorial",
       "v2/orchestrators/quickstart/video-transcoding",
       "v2/orchestrators/quickstart/AI-prompt-start"
```

```
Root Cause [3]: Four required frontmatter fields absent
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 6.6 + Cat 9.1
Fix: Add to frontmatter block (after line 18, before closing ---):
     purpose: start
     complexity: beginner
     lifecycleStage: setup
     veracityStatus: unverified
     Also change: status: current → status: draft
```

```
Root Cause [4]: Title and sidebarTitle are format labels, not concept labels
Affects: Cat 3.2 + Cat 3.4 + Cat 3.6 + Cat 3.7 + Heading Score Table
Fix: Change title at line 2 to: "Smoke Test Path" (or "Verification Path")
     Change sidebarTitle at line 3 to: "Smoke Test"
```

```
Root Cause [5]: Procedural content not in <Steps> component
Affects: Cat 5.2 + Cat 5.5 + Component Matrix
Fix: Wrap numbered list items at lines 26–30 in <Steps><Step title="...">...</Step></Steps> blocks.
     Add explicit Prerequisites and Next Steps structural sections.
```

---

## Blocking Decisions

**Decision 1 — Nav position**

```
Blocking Decision: Tutorial sequencer page sits after the pages it sequences.
Options: [A] Move tutorial to position 2 (guide → tutorial → video-transcoding → AI-prompt-start)
         [B] Redesign page as post-smoke-test synthesis/exit page (different content, different purpose)
If A: Reorder docs.json only. Content stays as-is (minus other fixes).
If B: Full content rewrite required. Page brief needed before rewrite.
      Purpose changes from `start` to `verify` or `orient`.
```

**Decision 2 — Title/concept**

```
Blocking Decision: "Quickstart Tutorial" names the format, not the concept.
Options: [A] "Smoke Test Path" — emphasises the verification outcome
         [B] "Verification Path" — more abstract, works across video + AI
         [C] Keep "Tutorial" as sidebarTitle for structural navigation clarity
             (accept low heading score for nav-usability reasons)
If A or B: Update title + sidebarTitle consistently. Update og:image:alt if it references the title.
If C: Document as accepted exception in decision registry.
```

---

## Verdict Summary

| Category | Result |
|----------|--------|
| 1. Frontmatter & Taxonomy | **FAIL** |
| 2. Voice & Copy | **FAIL** |
| 3. Section Naming & Headings | **FAIL** |
| 4. Page Structure | **FAIL** |
| 5. Layout & Components | **FAIL** |
| 6. Veracity | **FAIL** |
| 7. Navigation & IA | **FAIL** |
| 8. Links & Rendering | PASS |
| 9. Process & Governance | **FAIL** |

**Overall Verdict: NEEDS WORK**

The page is short (13 lines of visible content) and structurally coherent in intent, but fails on 8 of 9 categories. The failures cluster into 5 root causes (see Cross-Category Connections). All are fixable without a full rewrite — with the exception of nav-position, which requires a docs.json reorder decision (Blocking Decision 1). No content is fundamentally wrong; the page is under-specified (missing frontmatter), mis-positioned (nav sequence), under-templated (missing `<Steps>`), and opens with a banned construction pattern.

Priority fix order: Root Cause 3 (frontmatter) → Root Cause 2 (nav position — requires decision) → Root Cause 1 (Tip opener) → Root Cause 5 (`<Steps>` component) → Root Cause 4 (title).
