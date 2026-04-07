# Per-Page Quality Check Report
## `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` — stub file searched; NOT FOUND (see Category 7)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Your First Gateway: Off-chain Transcoding Test` | FAIL | Em-dash absent: PASS on that. Colon construction names two things. "Your First Gateway" is a possessive framing (informal). "Off-chain Transcoding Test" is the more precise part |
| `sidebarTitle` | ABSENT | — | FAIL | Required field missing |
| `description` | Yes | `Prove the gateway-orchestrator pipeline works in ~15 minutes — CPU only, no ETH, no GPU` | FAIL | Em-dash (`—`) in description. P30 prohibition applies. Also: `~15 minutes` uses tilde approximation — informal notation |
| `pageType` | ABSENT | — | FAIL | Required field missing |
| `audience` | ABSENT | — | FAIL | Required field missing |
| `purpose` | ABSENT | — | FAIL | Required field missing |
| `complexity` | ABSENT | — | FAIL | Required field missing |
| `lifecycleStage` | ABSENT | — | FAIL | Required field missing |
| `keywords` | ABSENT | — | FAIL | Required field missing |
| `industry` | ABSENT | — | FAIL | Required (P41) |
| `niche` | ABSENT | — | FAIL | Required (P41) |
| OG image block | ABSENT | — | FAIL | All 5 OG fields absent |
| `status` | Yes | `stub` | INFO | Non-canonical status value |
| `tutorial` | Yes | `1-of-3` | INFO | Non-standard field |

**Required field count:** 1/10 (description present but fails). Missing: `sidebarTitle`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, OG block, `industry`, `niche`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1.1 | All 10 required fields present | FAIL | Only `title` and `description` present; both fail. All other required fields absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | Field absent. This page is a quickstart-pattern tutorial (short, single goal, minimal setup). Proposed: `pageType: tutorial` with `pageVariant: quickstart`, or `pageType: instruction` with `pageVariant: quickstart` — see BD-1. Confirm before applying |
| 1.3 | `pageVariant` valid if present | N/A | Not present. If pageType is `instruction`, `pageVariant: quickstart` should be co-set (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: start` (go from zero to minimal working state fast) — confirm before applying |
| 1.5 | `audience` uses 7-token set | FAIL | Field absent. This page is the first in the gateway tutorial series — audience is `gateway`. See BD-2. Proposed: `audience: gateway` — confirm before applying |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: beginner` (15-minute setup, no ETH, no GPU, minimal prerequisites) — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: setup` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Correct: `veracityStatus: unverified` |
| 1.9 | `industry` valid if present | FAIL | Absent — required (P41). Proposed: `industry: [technical, broadcast]` — confirm before applying |
| 1.10 | `niche` valid if present | FAIL | Absent — required (P41). Proposed: `niche: [video, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | Em-dash (`—`) violation. Proposed: `Prove the gateway-orchestrator pipeline works in 15 minutes. CPU only, no ETH, no GPU required.` (78 chars) — confirm before applying. Remove `~` approximation tilde — use specific value or "approximately 15 minutes" |
| 1.12 | OG image block complete | FAIL | All 5 OG fields absent |
| 1.13 | `keywords` field quality | FAIL | Field absent |

**Category 1 verdict: FAIL** — 12 checks fail: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13

---

## Category 2 — VOICE & COPY

**NOTE:** Stub has minimal prose. Most copy checks are NOT-TESTED.

### UK English scan (check 2.1)
Outline content scanned: no US spellings found.
Result: PASS (limited scope).

### Banned words scan (check 2.2)
Outline text scanned. No banned words found.
Result: PASS (limited scope).

### Banned phrases scan (check 2.3)
No banned phrases in outline content.
Result: PASS (limited scope).

### Banned constructions scan (check 2.4)

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| Description | `Prove the gateway-orchestrator pipeline works in ~15 minutes — CPU only, no ETH, no GPU` | Em-dash (`—`) | Em-dash prohibition (P30) | YES — FAIL |
| H1 title | `Your First Gateway: Off-chain Transcoding Test` | No em-dash | PASS | No |
| Outline | `What you'll build` heading | — | Generic question-like — not a banned construction but weak heading | See Cat 3 |
| Outline | `Step 1 — Start a local orchestrator` | Em-dash (`—`) in outline step heading | Em-dash prohibition (P48) | YES — FAIL |
| Outline | `Step 2 — Start your gateway` | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Outline | `Step 3 — Send a test stream` | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Outline | `Step 4 — Verify the output` | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Outline | `What just happened` | — | Generic heading — see Cat 3 | No |
| Outline | `Next steps` | — | Avoid-tier heading term | See Cat 3 |
| Outline inline | `→ Page 2: Add AI with a BYOC pipeline` | `→` notation | Not prohibited but informal notation | FLAG for review in developed content |
| Outline inline | `→ Configuration guide: customise transcoding profiles` | `→` notation | Same | FLAG for review |
| Outline inline | `→ Setup Paths: decide on-chain vs off-chain for production` | `→` notation | Same | FLAG for review |
| Outline | "no ETH wallet, no GPU, no network registration needed" | `no [X]` in prerequisites | Factual scope — acceptable in prerequisites context | No |
| Outline | "Prove the full job lifecycle: request → route → process → return" | `→` in description | Acceptable in technical notation | No |

Em-dash count: 5 violations (4 in outline step headings, 1 in description).

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 2.1 | UK English throughout | PASS | No US spellings |
| 2.2 | Zero banned words | PASS | No banned words |
| 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2.4 | Zero banned constructions | FAIL | 5 em-dashes in description and outline step headings |
| 2.5–2.11 | Not applicable | NOT-TESTED | No developed prose |

**Category 2 verdict: FAIL** — 1 confirmed fail: 2.4. 7 NOT-TESTED.

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table (outline headings only)

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Notes |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| What you'll build | 2 | 2 | 3 | 3 | 4 | 14/25 | Generic; question-like |
| Prerequisites | 5 | 3 | 5 | 5 | 5 | 23/25 | OK |
| Step 1 — Start a local orchestrator | 5 | 4 | 5 | 5 | 3 | 22/25 | Em-dash; otherwise strong |
| Step 2 — Start your gateway | 5 | 4 | 5 | 5 | 4 | 23/25 | Em-dash |
| Step 3 — Send a test stream | 5 | 4 | 5 | 5 | 4 | 23/25 | Em-dash |
| Step 4 — Verify the output | 5 | 4 | 5 | 5 | 5 | 24/25 | Em-dash |
| What just happened | 2 | 2 | 3 | 3 | 4 | 14/25 | Generic retrospective |
| Next steps | 2 | 2 | 4 | 3 | 5 | 16/25 | Avoid-tier term |

**Headings below threshold:** "What you'll build" (14), "What just happened" (14), "Next steps" (16).

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 3.1 | Every heading scores ≥20/25 | FAIL | "What you'll build" (14), "What just happened" (14), "Next steps" (16) fail |
| 3.2 | No banned or weak standalone heading terms | FAIL | "What you'll build" — generic; "What just happened" — generic retrospective; "Next steps" — Avoid-tier (check 3.2) |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | NOT-TESTED | Stub headings are working notes |
| 3.5 | Heading names concept, not examples | PASS | Step headings name the action clearly |
| 3.6 | Title well-formed | FAIL | `Your First Gateway: Off-chain Transcoding Test` — "Your First" is informal possessive. Proposed: `Off-chain Transcoding Test` (simpler, more precise) or `First Gateway Setup` — confirm before applying |
| 3.7 | Sounds like expert editorial choice | FAIL | "What you'll build", "What just happened", "Next steps", "Your First Gateway" do not meet expert editorial standard |

**Category 3 verdict: FAIL** — 5 checks fail: 3.1, 3.2, 3.6, 3.7 (3.5 passes)

### Spelling/Typo Check
Outline content scanned: "transcoding", "orchestrator", "offchain" (used as `offchain` in command — correct flag format), "livepeer", "gateway", "ffmpeg", "RTMP", "HLS" — all correct. No typos found.

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 4.1 | One purpose, one audience, one job | PASS (outline) | Single job: prove the gateway-orchestrator pipeline with an off-chain local transcoding test in 15 minutes. Clean scope |
| 4.2 | Purpose statement test passes | PASS (outline) | "This page lets the gateway operator prove the local gateway-orchestrator pipeline works before on-chain setup." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | FAIL | NOT in docs.json. Adjacency cannot be confirmed. This is `tutorial: 1-of-3` — intended as first in series, but series is not in docs.json |
| 4.4 | No dead ends | NOT-TESTED | "Next steps" links to Page 2 (BYOC stub), Configuration guide, Setup Paths — destinations not verified |
| 4.5 | Prerequisites stated or linked | PASS (outline) | Prerequisites: Docker, ffmpeg, no ETH/GPU/network registration. Clean minimal prerequisites |
| 4.6 | Out-of-scope is clear | PASS (outline) | Scope is explicit: "Zero cost", "single machine", "-network offchain means no Arbitrum, no staking, local only" |
| 4.7–4.10 | Not applicable | NOT-TESTED | No developed content |

**Notable strength:** This stub has the clearest scope of the three. One job, one machine, 15 minutes, zero cost. Strong candidate for a good quickstart.

**Category 4 verdict: FAIL** — 1 confirmed fail: 4.3

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | No pageType. `<Note>stub</Note>` + outline |
| 5.2 | Required sections present | FAIL | Tutorial/instruction requires Prerequisites, Steps, Next Steps — only as outline H3, not developed MDX |
| 5.3 | Only approved components used | N/A | No components beyond `<Note>` |
| 5.4 | Avoided components absent | FAIL | `<Note>This page is a stub. Content to be developed.</Note>` — placeholder in publishable-lane file |
| 5.5–5.9 | Not applicable | NOT-TESTED | |
| 5.10 | Component naming/import conventions | FAIL | No imports in publishable MDX file |

**Category 5 verdict: FAIL** — 3 confirmed fails: 5.1, 5.2, 5.4, 5.10

---

## Category 6 — VERACITY

**NOTE:** No developed prose content. Outline commands need verification when developed.

### Veracity Claims Inventory (from outline)

| Claim | Location | Type | Status |
|-------|----------|------|--------|
| `go-livepeer -orchestrator -transcoder -network offchain -serviceAddr 127.0.0.1:8936` command | Outline Step 1 | procedural | NOT-TESTED |
| `go-livepeer -gateway -network offchain -orchAddr 127.0.0.1:8936` command | Outline Step 2 | procedural | NOT-TESTED |
| ffmpeg RTMP test stream command | Outline Step 3 | procedural | NOT-TESTED |
| "~15 minutes" completion time | Description + What you'll build | evaluative | NOT-TESTED |
| HLS output verification via "gateway HTTP port" | Outline Step 4 | procedural | NOT-TESTED — specific port not specified |

Note: The CLI commands in the outline use go-livepeer binary syntax (`-network offchain`), not Docker. Check against current go-livepeer release when developing content — verify binary path syntax.

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 6.1–6.4 | Factual/procedural | NOT-TESTED | Stub — no developed content |
| 6.5 | REVIEW flags for unverified claims | FAIL | No REVIEW flags in outline |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Correct: `veracityStatus: unverified` |
| 6.7–6.8 | Glossary / staleness | NOT-TESTED | |
| 6.9 | No open-ended research tasks | FAIL | Entire outline is open research. "Reference files to draw from" lists sources without verification status |

**Category 6 verdict: FAIL** — 3 confirmed fails: 6.5, 6.6, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 7.1 | Page exists in docs.json | FAIL | **BLOCKING DECISION.** NOT FOUND in docs.json for the orchestrators path. NOTE: docs.json lines 2634 and 2727 list `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test` under the GATEWAYS tab — this appears to be the published gateway version. The stub here (`v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx`) is a separate file in the wrong location |
| 7.2 | Navigation matches file system | FAIL | Not in docs.json for orchestrators path |
| 7.3 | Tab entry portal routes to all sections | FAIL | Not reachable |
| 7.4 | No structural orphans | FAIL | Unreachable from any navigation path |
| 7.5 | Audience journey complete | NOT-TESTED | |
| 7.6 | Cross-tab graduation paths exist | NOT-TESTED | Outline references cross-tab links (orchestrator quickstart) — not developed |
| 7.7 | File in correct lane | FAIL | Same issue as other stubs: publishable-lane path without docs.json entry. The `gateway-tutorial-composable-pages/stubs/` directory does not appear in docs.json at all |
| 7.8 | File naming conventions | PASS | `tutorial-offchain-transcoding-test.mdx` — lowercase hyphenated |
| 7.9 | TTL | N/A | |

**Critical finding:** All three stubs are in `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/`. The `gateway-tutorial-composable-pages` parent directory name plus the gateway-oriented content strongly suggests these are development drafts for pages that belong in the GATEWAYS tab. docs.json already has the corresponding gateways pages at `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test`, `tutorial-2-byoc-cpu-pipeline`, `tutorial-3-go-production`. The orchestrators stubs may be duplicates, misfiled drafts, or an intended orchestrators-specific version of the same content. Human decision required.

**Category 7 verdict: FAIL** — 5 checks fail: 7.1, 7.2, 7.3, 7.4, 7.7

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 8.1 | All internal links resolve | NOT-TESTED | No rendered MDX links |
| 8.2 | All external links live | NOT-TESTED | |
| 8.3–8.4 | Imports / images | N/A | |
| 8.5 | Page renders without error | PASS | Minimal content renders cleanly |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | `<Note>This page is a stub. Content to be developed.</Note>` |

**Category 8 verdict: FAIL** — 1 fail: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off |
| 9.2 | All consuming decisions in registry | FAIL | Audience, location, and relationship to existing gateways tutorial pages are unresolved. No registry entries |
| 9.3 | Gate prerequisites met | FAIL | No content, not in docs.json, gates not met |
| 9.4 | Phase ordering respected | FAIL | No content written |
| 9.5–9.6 | Findings / feedback | NOT-TESTED | |

**STUB GOVERNANCE FLAG:** Stub content must be completed before this page can ship. Additionally, the relationship between this stub and the already-published gateway tutorial pages at `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test` must be resolved — are these the same page, different pages, or duplicates?

**Category 9 verdict: FAIL** — 4 checks fail: 9.1, 9.2, 9.3, 9.4

---

## Cross-Category Connections

**Root Cause 1: Page is a stub — no developed content**
Affects: Most NOT-TESTED results.
Fix: Write content after BD-1 and BD-2 are resolved.

**Root Cause 2: Structural orphan and potential duplicate of gateway tab page**
Affects: Cat 7.1–7.4, 7.7, 4.3
Fix: BD-1 — resolve whether this is the same as `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test` or a separate orchestrators version. If same: delete this stub, the gateways version is canonical. If separate: determine the orchestrators-specific value and write from scratch.

**Root Cause 3: Em-dashes in description and outline step headings**
Affects: Cat 1.11, 2.4, 3.1
Fix: Replace all `Step N — [action]` with `Step N: [action]`. Fix description.

**Root Cause 4: Missing all required frontmatter fields**
Affects: Cat 1.1–1.13
Fix: All 10 required fields when content is developed.

---

## Blocking Decisions

**BD-1 — BLOCKING: Relationship to existing gateways tutorial page**
docs.json already has `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test` (line 2634) and a second reference at line 2727. This stub appears to be a development draft of that page placed in the orchestrators directory.
Options:
[A] This stub is a duplicate draft — delete it. The gateways version is canonical.
[B] This is intended as a separate orchestrators-specific version — determine the distinguishing value and write it.
[C] This stub belongs in `_workspace/` not in the publishable lane.
Blocks: 7.1, 7.7, 9.2

**BD-2 — BLOCKING: docs.json entry**
Once BD-1 is resolved, determine navigation position. If option A: no entry needed (stub deleted). If option B: add to orchestrators Tutorials group in docs.json.
Blocks: 7.1–7.4

**BD-3 — BLOCKING: pageType decision**
The 15-minute, zero-cost scope is quintessentially a quickstart. Options:
[A] `pageType: instruction` + `pageVariant: quickstart`
[B] `pageType: tutorial` (less accurate for a 15-minute focused task)
Confirm before applying — both are valid.
Blocks: 1.2, 1.3

---

## Verdict Summary

**Overall: REWRITE REQUIRED**

Stub page. No developed content. Critical issue: likely a misfiled draft of the already-published gateway tutorial page `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test`. This may be a deletion candidate rather than a development candidate.

**Checks that fail: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.1, 3.2, 3.6, 3.7, 4.3, 5.1, 5.2, 5.4, 5.10, 6.5, 6.6, 6.9, 7.1, 7.2, 7.3, 7.4, 7.7, 8.6, 9.1, 9.2, 9.3, 9.4**

**35 checks fail. Multiple NOT-TESTED due to stub status.**

---

## Prioritised Fix List

**F-01 — CRITICAL — Resolve BD-1: determine relationship to gateways tutorial**
Cross-reference with `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test`. If duplicate draft: delete this stub. If separate orchestrators version: confirm the distinguishing value.
Fixes: 7.1, 7.7, 9.2

**F-02 — HIGH — Fix description em-dash**
Current: `Prove the gateway-orchestrator pipeline works in ~15 minutes — CPU only, no ETH, no GPU`
Proposed: `Prove the gateway-orchestrator pipeline works in 15 minutes. CPU only, no ETH, no GPU required.` (83 chars) — confirm before applying.
Fixes: 1.11, 2.4 (partial)

**F-03 — HIGH — Write developed content (after BD-1 resolved)**
Replace stub content with full tutorial/quickstart MDX. Step headings must use `:` not `—`. Remove "Reference files" section from rendered output.
Fixes: 5.1, 5.2, 5.4, 5.10, all NOT-TESTED checks

**F-04 — HIGH — Add all required frontmatter fields when content is written**
Minimum additions (all proposed — confirm before applying per P51):
```yaml
sidebarTitle: Off-chain Transcoding Test
pageType: instruction
pageVariant: quickstart
audience: gateway
purpose: start
complexity: beginner
lifecycleStage: setup
veracityStatus: unverified
keywords:
  - off-chain gateway transcoding test
  - livepeer local gateway setup
  - test gateway orchestrator pipeline
  - no gpu gateway tutorial
industry:
  - technical
  - broadcast
niche:
  - video
  - infrastructure
og:image: /snippets/assets/site/og-image/en/orchestrators.png
og:image:alt: Livepeer Docs social preview image for Orchestrators
og:image:type: image/png
og:image:width: 1200
og:image:height: 630
```
Note: if `pageType: instruction` + `pageVariant: quickstart`, both fields must be set together (P42).
Fixes: 1.1, 1.2, 1.3 (co-fix), 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.12, 1.13

**F-05 — MEDIUM — Fix step heading em-dashes in developed content**
Replace `Step N — [action]` with `Step N: [action]`.
Fixes: 2.4 (partial), 3.1 (partial)

**F-06 — MEDIUM — Rename generic headings in developed content**
- "What you'll build" → `Pipeline Overview` (estimated 22/25) — confirm no conflict
- "What just happened" → `Off-chain Lifecycle` (estimated 22/25) — confirm no conflict
- "Next steps" → `Continue` or use Related Pages pattern — confirm no conflict
Fixes: 3.1, 3.2, 3.7

**F-07 — MEDIUM — Fix title if page remains in orchestrators**
`Your First Gateway: Off-chain Transcoding Test` → `Off-chain Transcoding Test` (simpler, more precise). Or resolve via BD-1 (page may be deleted).
Fixes: 3.6, 1.1 (title quality)
