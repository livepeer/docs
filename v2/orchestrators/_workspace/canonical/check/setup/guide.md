# Quality Check Report — v2/orchestrators/setup/guide.mdx

**Date**: 2026-03-24
**Reviewer**: Claude Code (per-page quality check agent)
**Verdict**: NEEDS WORK
**Blocking Decision**: None — page scope and audience are clear.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Setup Overview` | PASS | |
| `sidebarTitle` | Yes | `Setup Overview` | PASS | Matches title — acceptable |
| `description` | Yes | `Default setup path for Livepeer orchestrators running go-livepeer, with redirects for pools and non-default deployment patterns.` | PASS | 128 chars, within 160-char limit, subject-first, UK English |
| `pageType` | Yes | `overview` | FAIL | `overview` is a **pageVariant**, not a pageType. Deprecated alias. Must migrate to correct pageType + set `pageVariant: overview` (checks.mdx §1.2, §1.3) |
| `audience` | Yes | `orchestrator` | PASS | Canonical 7-token value |
| `purpose` | Yes | `guide` | FAIL | `guide` is not in the 15-value canonical purpose set. Valid values include `orient`, `start`, `configure` etc. This is a **wrong field** error — `guide` is a pageType, not a purpose. (checks.mdx §1.4) |
| `complexity` | No | — | FAIL | Required field missing (checks.mdx §1.1, §1.6) |
| `lifecycleStage` | No | — | FAIL | Required field missing (checks.mdx §1.1, §1.7) |
| `keywords` | Yes | `livepeer, orchestrator, setup, go-livepeer, activation, publish, verify` | FAIL | Too generic. `livepeer` and `orchestrator` are the exact examples cited in checks.mdx §1.13 as **bad**. Keywords must be searcher-intent-aligned, not title synonyms. |
| OG image block | Yes | `/snippets/assets/site/og-image/en/orchestrators.png` + 4 supporting fields | PASS | All 5 OG fields present |
| `status` | Yes | `draft` | INFO | Not a required field but present — consistent with `veracityStatus` absent (see below) |
| `lastVerified` | Yes | `2026-03-12` | INFO | Not a required field — no action needed |
| `veracityStatus` | No | — | FAIL | Required field missing (checks.mdx §1.8). Default for unreviewed content is `unverified`. |

**Missing required fields (5)**: `pageType` (wrong value — deprecated alias), `purpose` (wrong value — not a canonical purpose), `complexity`, `lifecycleStage`, `veracityStatus`.

---

## Categories 1–9

### Category 1 — Frontmatter & Taxonomy

**1.1 — All 10 required fields present**: FAIL
Missing: `complexity`, `lifecycleStage`, `veracityStatus`. `pageType` and `purpose` are present but have non-canonical values.

**1.2 — pageType uses 7-type canonical schema**: FAIL
- Found: `pageType: overview`
- `overview` is a deprecated pageType that maps to `pageVariant: overview`. The correct pageType for this page depends on its actual function. This page is a routing/orientation page that links to all setup steps — that is either `navigation` (pure routing) or `concept` with `pageVariant: overview` (orientation with some context). Given it contains a narrative intro paragraph and structural explanation, `concept` + `pageVariant: overview` is the better fit. However, Alison must confirm.
- Fix: Set `pageType: concept` + `pageVariant: overview` OR `pageType: navigation` (if purely routing). Flag for Alison decision.
- Severity: CRITICAL — deprecated value blocks downstream phase classification.

**1.3 — pageVariant valid if present**: N/A — `pageVariant` not present. Once 1.2 is resolved, set `pageVariant: overview`.

**1.4 — purpose uses 15-value canonical set**: FAIL
- Found: `purpose: guide`
- `guide` is a pageType value, not a purpose value. This is a **wrong field** error (a valid value placed in the wrong field).
- For an orientation page at the start of the Setup section: correct purpose is `orient` (structural overview, routes reader) or `start` (goes from zero to minimal working state).
- Fix: Change `purpose: guide` to `purpose: orient`.
- Severity: CRITICAL.

**1.5 — audience uses 7-token set**: PASS — `orchestrator` is canonical.

**1.6 — complexity single canonical value**: FAIL
- Found: absent
- Fix: Add `complexity: intermediate`. This is a setup overview that assumes the operator is capable of running a node but new to this specific system.
- Severity: HIGH.

**1.7 — lifecycleStage single canonical value**: FAIL
- Found: absent
- Fix: Add `lifecycleStage: setup`.
- Severity: HIGH.

**1.8 — veracityStatus present and honest**: FAIL
- Found: absent
- Page contains structural links and some contextual prose. No code or commands are tested. No factual claims verified.
- Fix: Add `veracityStatus: unverified`.
- Severity: HIGH.
- Note: `status: draft` + absent `veracityStatus` is internally consistent (draft does not require `verified`). Once `veracityStatus` is added as `unverified`, no further consistency issue arises.

**1.9 — industry array valid**: N/A — `industry` field not present. Not a required field. No action needed.

**1.10 — niche array valid**: N/A — `niche` field not present. Not a required field. No action needed.

**1.11 — description well-formed**: PASS
- Value: `Default setup path for Livepeer orchestrators running go-livepeer, with redirects for pools and non-default deployment patterns.`
- 128 characters. Subject-first. No self-reference. UK English. No em dash.

**1.12 — OG image block complete**: PASS
All 5 OG fields present: `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`.

**1.13 — keywords field quality**: FAIL
- Found: `livepeer, orchestrator, setup, go-livepeer, activation, publish, verify`
- `livepeer` and `orchestrator` are explicitly called out in checks.mdx §1.13 as bad examples. `setup` alone is also generic.
- Fix: Replace with searcher-intent-aligned terms such as: `go-livepeer orchestrator setup guide`, `livepeer node setup steps`, `orchestrator installation walkthrough`, `go-livepeer activation steps`, `livepeer setup requirements`. Retain `go-livepeer`, `activation` as they are sufficiently specific.
- Severity: MEDIUM.

---

### Category 2 — Voice & Copy

**2.1 — UK English throughout**: PASS
No US spellings found. Words checked: "walks", "covers", "split", "siphon", "deployment" — all UK-compatible.

**2.2 — Zero banned words**: PASS
Scanned for: `effectively, essentially, basically, meaningful, significant, real` (intensifier), `various, several, obviously, clearly`. None found.

**2.3 — Zero banned phrases**: FAIL
- Line 25: `"This guide is the default setup path for operators who are running an orchestrator on go-livepeer."`
  - Contains `This guide is...` — this is a `This page [verb]` self-referential opener pattern. See also Cat 2.4 and Cat 2.5.
- Lines 27–31: The heading `## What this guide does` followed by bulleted prose describing what the guide covers is a meta-document description pattern ("This section covers" equivalent). The section names what the page does rather than what the reader gets.
- Lines 33–37: `## What this guide does not do` is the negative-frame pattern ("not [X] as primary statement") — see Cat 2.4.
- Severity: HIGH.

**2.4 — Zero banned constructions**: FAIL
- Line 25: `This guide is the default setup path...` — `This [document] [verb]` self-reference. Fix: delete and open with content directly (e.g., "The default setup path for go-livepeer operators covers install, configure, connect, activate, test, and monitor.").
- Lines 33–37: `## What this guide does not do` section is a `not [X]` primary statement block. Three bullets state what the page does NOT cover. Fix: remove section or convert to a single inline scope note in the opening paragraph.
- Line 35: `"It does not cover pool participation as the primary path."` — `not [X]` construction.
- Line 36: `"It does not replace the detailed AI operations guides."` — `not [X]` construction.
- Line 37: `"It does not cover every split, siphon, or custom deployment pattern in-line."` — `not [X]` construction.
- Severity: HIGH.

**2.5 — Opening order correct**: FAIL
- Line 25 opens with `"This guide is the default setup path..."` — self-reference, not value/outcome. The reader's benefit (what they get from following this page) is never stated.
- Fix: Open with the outcome: "Six steps take a go-livepeer node from install to active and monitored. Follow this path unless you are joining a pool or using a non-standard deployment."
- Severity: HIGH.

**2.6 — Paragraph discipline**: FAIL (partial)
- The opening paragraph (line 25) is a single sentence. Lead sentence states a fact, but it is a self-referential fact, not a reader-facing value. Final sentence is absent — the paragraph is just one sentence that ends on a description of the document, not a fact, number, or next step.
- All other content is structural (headings, bullets, cards, table) — no prose paragraphs to evaluate further.
- Fix: Rewrite opening as per 2.5 fix above.

**2.7 — Audience register correct**: PASS
Language is operational and hardware-aware. No marketing language. Tone is appropriate for an orchestrator operator.

**2.8 — Per-audience prohibited phrases absent**: PASS
No instances of: "easy to set up", "simple configuration", "the network rewards you for", "your orchestrator will automatically...". Register is correct.

**2.9 — No passive value statements**: PASS
No value claims present. Page is structural/navigational.

**2.10 — No hedging openers**: FAIL
- Line 25 opens with a self-referential description, not a hedge, but it is still a violation of the opening order rule (Cat 2.5). No hedge per se.
- N/A for this specific check — no conditional opener or caveat opener.
- Result: PASS (no hedging opener specifically).

**2.11 — Terminology locked and consistent**: PASS
Terms used: `orchestrator`, `go-livepeer`, `pool participation`, `split`, `siphon`. These are domain-correct. `pool participation` is a reasonable phrase; `pool worker` is not used. No deprecated terms found.

---

### Category 3 — Section Naming & Headings

See Heading Score Table below for per-dimension scores.

**3.1 — Every heading scores ≥20/25**: FAIL
- `## What this guide does` — 10/25 (see table).
- `## What this guide does not do` — 8/25 (see table).
- `## Redirects` — 17/25 (see table).
- `## Setup overview` — 18/25 (see table, borderline).
- `## Activation checks` — 22/25 (see table — PASS).

**3.2 — No banned or weak standalone heading terms**: FAIL
- `## Setup overview` contains the Avoid-tier word `overview` as its second word. It is domain-anchored (`Setup overview`) which moves it from Banned to Avoid, but a stronger descriptor exists. See rename suggestion in Heading Score Table notes.
- No Banned-tier terms (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`) found.

**3.3 — No literal contrast labels**: PASS — no `X vs Y` headings.

**3.4 — Domain-anchor rule applied**: FAIL
- `## What this guide does` — not interpretable in isolation. Does not include a domain noun.
- `## What this guide does not do` — same issue, plus it is a negative-frame heading.

**3.5 — Heading names the concept, not examples**: FAIL
- `## What this guide does` and `## What this guide does not do` name the document, not the concept. They describe the section's relationship to the guide rather than the content's governing concept.

**3.6 — Title well-formed**: FAIL
- `title: Setup Overview` — `Overview` alone in the title triggers the Avoid tier. Domain-anchored version is acceptable but a stronger version exists.
- Better: `Setup Path` or `Orchestrator Setup` (2 words, concept-derived).
- Severity: MEDIUM.

**3.7 — Expert editorial choice**: FAIL
- `## What this guide does` and `## What this guide does not do` are bureaucratic/safe labels. A senior technical editor would not choose them.

---

### Category 4 — Page Structure & Content Architecture

**4.1 — One purpose, one audience, one job**: PASS
Page serves one audience (orchestrator) doing one thing (orienting to the setup path and deciding which path to take). The dual-section structure (What it does / What it does not do / Redirects / Steps) is appropriate for an overview.

**4.2 — Purpose statement test**: PASS
"This page lets the orchestrator orient to the default setup path and navigate to the correct setup step." — clear and passable.

**4.3 — PREV/NEXT adjacency correct**: FAIL
- docs.json lines 2859–2860: `v2/orchestrators/setup/guide` is the **first** entry in the Setup group. The page before it (in the Quickstart group) is `v2/orchestrators/quickstart/AI-prompt-start` (docs.json line 2853). The page after it is `v2/orchestrators/setup/rcs-requirements` (docs.json line 2861).
- PREV: quickstart/AI-prompt-start. No cross-reference from this page to the quickstart section or to what the reader should have completed before reaching Setup. The page assumes a reader arriving cold.
- NEXT: rcs-requirements. The `## Setup overview` CardGroup links to `rcs-requirements` — that handoff is correct.
- Issue: No acknowledgement of what the reader should know before starting (e.g., "You have decided to run your own orchestrator node rather than join a pool."). The page does link to the pool redirect but does not make the sequencing explicit.
- Severity: MEDIUM.

**4.4 — No dead ends**: FAIL
- Line 45: `href="/v2/orchestrators/dep-rc-navigator"` — this path is NOT in docs.json and the file does not exist at `v2/orchestrators/dep-rc-navigator.mdx`. The file found is at `v2/orchestrators/_workspace/plans/dep-rc-navigator.mdx` — a workspace file, not a publishable page. This is a dead link.
- Lines 79–81: Activation checks table references `/v2/orchestrators/setup/sc-connect` and `/v2/orchestrators/unclassified/rcs-connect-activate-publish`. Neither exists in the publishable `v2/orchestrators/setup/` directory or in docs.json.
  - `sc-connect` does not exist anywhere in the `setup/` folder (only `connect-and-activate.mdx` exists).
  - `rcs-connect-activate-publish` exists only in `v2/orchestrators/_workspace/x-archived/unclassified/` — a workspace archive, not a publishable page.
- Lines 64–87: The `## Activation checks` section and its CardGroup also reference `sc-connect` (lines 84, 86) and `rcs-connect-activate-publish` (line 85).
- Severity: CRITICAL — multiple broken links.

**4.5 — Prerequisites stated or linked**: FAIL
No prerequisites stated. An orchestrator arriving at this page has no explicit guidance on what they need before starting (hardware, an Arbitrum wallet, LPT for staking). The `## Redirects` section helps route mis-arrived readers, but there is no prerequisite statement for the default path reader.
- Note: `rcs-requirements` is the first setup step and covers prerequisites — this is partially mitigated by the CardGroup link. But a one-line prerequisite framing at the opening would pass the check.
- Severity: MEDIUM.

**4.6 — Out-of-scope is clear**: FAIL
- The `## What this guide does not do` section states what is out-of-scope, but using three `not [X]` bullets violates Cat 2.4. The intent is correct; the execution fails voice rules.
- Fix: Replace the section with a single inline sentence in the opening paragraph: "Pool operators and non-standard deployments (split, siphon) have separate paths — see Redirects below."
- Severity: MEDIUM (intent correct, execution wrong).

**4.7 — Information type per section correct**: PASS
- Purpose is `orient` (once corrected). Primary types: `structural`, `narrative`. Secondary: `conceptual`.
- Opening paragraph: `narrative`.
- What it does / does not do: `structural` (inventory of scope).
- Redirects: `structural`.
- Setup overview: `structural`.
- Activation checks: `structural`.
- All sections are structural/narrative — appropriate for `orient` purpose.

**4.8 — No content duplication from adjacent sections**: FAIL
- The `## Activation checks` section (lines 73–87) duplicates content already present in `## Setup overview` CardGroup (line 63: Connect card links to `sc-connect`; line 65: Test card links to `x-test`). The Activation checks table re-lists Connect, Publish/Activate, and Verify — three of the six setup steps already in the CardGroup above.
- Severity: MEDIUM.

**4.9 — Section orientation page present**: PASS
This page IS the section orientation page for the Setup section.

**4.10 — Cross-tab links at journey intersections**: FAIL
- No cross-tab links to `/v2/about/`, `/v2/delegators/`, or `/v2/gateways/`. This is a tab-level check — applies partially here. No graduation path links (e.g., "If you are joining as a delegator rather than running a node, see...").
- Severity: INFO (tab-level check — cannot be fully resolved at page level alone).

---

### Category 5 — Layout, Components & Template

**5.1 — Correct template for pageType + pageVariant**: FAIL (depends on 1.2 resolution)
- Current `pageType: overview` (deprecated). Once corrected to `concept` + `pageVariant: overview`, template is `overview-page.mdx`.
- Component matrix (checks.mdx §5): `concept` → preferred: `Accordion, AccordionGroup, CodeGroup, Tabs, Note, Info, Tip`.
- NOT-TESTED: `docs-guide/catalog/components-catalog.mdx` was not read. Component approval status is NOT-TESTED per reporting rules.

**5.2 — Required sections present**: FAIL (conditional on pageType)
- For `concept` pageType: Overview section is required.
- The page has no explicit `## Overview` section (it uses `## What this guide does` as its introductory section, which fails heading checks).
- For `navigation` pageType: Portal/routing sections required — these are present via CardGroups.

**5.3 — Only approved components used**: NOT-TESTED
`docs-guide/catalog/components-catalog.mdx` not read. Components used: `CardGroup`, `Card`. These appear in the matrix for `concept` and `navigation` pages. Result deferred.

**5.4 — Avoided components absent**: PASS
No TODO/TBD placeholders. No `Coming Soon`. No `PreviewCallout`.

**5.5 — Information type → component mapping correct**: PASS
- Structural content → `Card`/`CardGroup` (routing pattern). Appropriate for orientation/structural information.
- Reference table (Activation checks, lines 76–81): appropriate for `structural` content.

**5.6 — MDX renders clean**: NOT-TESTED
Not executed locally. No obvious JSX errors visible in source. Broken `href` values (see Cat 4.4) will produce dead links at render but not render failures.

**5.7 — No old-schema frontmatter**: FAIL
`pageType: overview` is old-schema (deprecated alias). See Cat 1.2.

**5.8 — CSS uses custom properties only**: PASS
No inline CSS, no hardcoded hex colours, no ThemeData.

**5.9 — Generated file banners intact**: N/A
No `generated-file-banner` block present. This is not a generated file.

**5.10 — Component naming/import conventions**: PASS
`CardGroup` and `Card` — PascalCase, standard Mintlify components.

---

### Category 6 — Veracity & Factual Accuracy

**6.1 — Every factual claim citable**: NOT-TESTED
The page is primarily structural with minimal factual claims. Claims present:
- Line 25: "go-livepeer" — factual term. Verifiable.
- Lines 29–31: Description of setup steps (install, configure, connect, activate, test, monitor) — structural claim. NOT-TESTED against current docs.json and live setup section to confirm these 6 steps are the canonical sequence.
- Lines 53–87: Link targets — structural claims about page existence. Several links are broken (see Cat 4.4).

**6.2 — Code/commands tested**: N/A
No code blocks or CLI commands on this page.

**6.3 — No deprecated API usage**: PASS
No API endpoints or CLI flags referenced.

**6.4 — Numbers are real**: N/A
No numbers on this page.

**6.5 — REVIEW flags for unverified claims**: FAIL
- The broken link targets (`sc-connect`, `rcs-connect-activate-publish`, `dep-rc-navigator`) are factual claims about page existence that cannot be verified. They should carry `{/* REVIEW: link target — verify this page exists at this path */}` flags or be corrected.
- Severity: HIGH.

**6.6 — veracityStatus honest**: FAIL
`veracityStatus` absent. Fix: add `veracityStatus: unverified`. (See Cat 1.8.)

**6.7 — Authoritative vs AI-generated glossary**: N/A
No glossary references on this page.

**6.8 — Source staleness check**: INFO
The 6-step setup sequence (install, configure, connect, activate, test, monitor) should be verified against the current setup section structure in docs.json. The docs.json setup group (lines 2860–2866) contains: guide, rcs-requirements, rs-install, configure, connect-and-activate, test, r-monitor — 7 pages (including guide itself). The page's 6-step list maps to 5 of these: requirements→install→configure→connect→test→monitor. `connect` and `activate` appear to be merged in `connect-and-activate.mdx`. The page's `## Setup overview` CardGroup (lines 52–71) splits these into 6 cards including `sc-connect` (broken link) and `r-configure` (deprecated file). The CardGroup links do not match the current docs.json structure. NOT-TESTED: have not executed the setup process.

**6.9 — No open-ended research tasks**: FAIL
Multiple broken link targets require resolution before publication. These are concrete next steps with named targets, not "needs more research" items, but they remain unresolved.

---

### Category 7 — Navigation & Information Architecture

**7.1 — Page exists in docs.json**: PASS
`v2/orchestrators/setup/guide` is at docs.json line 2860.

**7.2 — Navigation matches file system**: PASS
File exists at `v2/orchestrators/setup/guide.mdx`. Matches docs.json entry.

**7.3 — Tab entry portal routes to all sections**: N/A — this is a section-level page, not the tab entry portal.

**7.4 — No structural orphans**: PASS
Page is in docs.json and reachable from Setup section navigation.

**7.5 — Audience journey complete**: FAIL (partial)
The Setup section navigation in docs.json (lines 2857–2867) is: guide → rcs-requirements → rs-install → configure → connect-and-activate → test → r-monitor. This is a coherent journey. However, this page's internal CardGroup links to different paths: `rcs-requirements` (correct), `rs-install` (correct), `r-configure` (points to deprecated file — `configure.mdx` is the current file), `sc-connect` (broken), `x-test` (exists but is deprecated/x-prefixed), `r-monitor` (correct). The CardGroup sequence does not match the docs.json sequence.
- Severity: HIGH.

**7.6 — Cross-tab graduation paths exist**: FAIL (tab-level)
No cross-tab links. See Cat 4.10. Severity: INFO at page level.

**7.7 — File in correct lane**: PASS
File is in `v2/orchestrators/setup/` — correct publishable lane.

**7.8 — File naming conventions**: PASS
`guide.mdx` — no prefix, appropriate for a section overview/guide file. No `-index.mdx` suffix.

**7.9 — _workspace/ TTL compliance**: N/A — this is a publishable file, not a workspace file.

---

### Category 8 — Links & Rendering

**8.1 — All internal links resolve**: FAIL
Internal links audited against docs.json and file system:

| Link | Path | Exists in docs.json? | File exists? | Status |
|------|------|---------------------|--------------|--------|
| `/v2/orchestrators/guides/join-a-pool` | Card at line 43 | YES (line 2889) | YES | PASS |
| `/v2/orchestrators/dep-rc-navigator` | Card at line 45 | NO | NO (workspace only) | FAIL — dead link |
| `/v2/orchestrators/setup/rcs-requirements` | Card at line 53 | YES (line 2861) | YES | PASS |
| `/v2/orchestrators/setup/rs-install` | Card at line 56 | YES (line 2862) | YES | PASS |
| `/v2/orchestrators/setup/r-configure` | Card at line 59 | NO | NO (deprecated, in x-deprecated/) | FAIL — dead link |
| `/v2/orchestrators/setup/sc-connect` | Card at line 62 | NO | NO (does not exist) | FAIL — dead link |
| `/v2/orchestrators/setup/x-test` | Card at line 65 | NO (not in docs.json group) | YES (file exists, x-prefixed) | FAIL — x-prefixed file, not in nav |
| `/v2/orchestrators/setup/r-monitor` | Card at line 68 | YES (line 2866) | YES | PASS |
| `/v2/orchestrators/setup/sc-connect` | Table at line 79 | NO | NO | FAIL — duplicate dead link |
| `/v2/orchestrators/unclassified/rcs-connect-activate-publish` | Table at line 80 | NO | NO (workspace archive) | FAIL — dead link |
| `/v2/orchestrators/setup/x-test` | Table at line 81 | NO | YES (x-prefixed) | FAIL — x-prefixed |
| `/v2/orchestrators/setup/sc-connect` | CardGroup at line 84 | NO | NO | FAIL — duplicate |
| `/v2/orchestrators/unclassified/rcs-connect-activate-publish` | CardGroup at line 85 | NO | NO | FAIL — duplicate |
| `/v2/orchestrators/setup/x-test` | CardGroup at line 86 | NO | YES (x-prefixed) | FAIL — duplicate |

**Broken links (6 distinct targets)**: `dep-rc-navigator`, `setup/r-configure`, `setup/sc-connect` (×3), `unclassified/rcs-connect-activate-publish` (×2), `setup/x-test` (×3, x-prefixed not in nav).
- Severity: CRITICAL.

**Correct replacements** (based on current docs.json structure):
- `setup/r-configure` → `setup/configure` (docs.json line 2863)
- `setup/sc-connect` → `setup/connect-and-activate` (docs.json line 2864)
- `unclassified/rcs-connect-activate-publish` → `setup/connect-and-activate` (docs.json line 2864)
- `setup/x-test` → `setup/test` (docs.json line 2865)
- `dep-rc-navigator` → {/* REVIEW: no current non-default paths page exists — determine replacement or remove card */}

**8.2 — All external links live**: PASS
No external links on this page.

**8.3 — All snippet imports resolve**: N/A
No snippet imports.

**8.4 — All images load**: PASS
OG image at `/snippets/assets/site/og-image/en/orchestrators.png` — assumed present (consistent with pattern used across section).

**8.5 — Page renders without error**: NOT-TESTED
Not executed locally. MDX syntax appears valid; broken `href` values produce dead links, not render failures.

**8.6 — No TODO/TBD/Coming Soon**: PASS
None found.

---

### Category 9 — Process & Governance

**9.1 — Human sign-off recorded**: FAIL
`status: draft` confirms this page has not been through human review and approval.

**9.2 — All consuming decisions in registry**: N/A
No structural decisions consumed by this page are identified.

**9.3 — Gate prerequisites met**: FAIL
Tab status board shows: Orchestrators IA Approved = Draft only, Terminology = No, Content Pass Open = No. No gate has been formally opened. Page is in draft.

**9.4 — Phase ordering respected**: N/A
Phase 7 (veracity) has not run. Phase 8 (naming) has not run. Page is pre-gate.

**9.5 — Findings gathered before fixes**: PASS (this report)
This report is the findings document. No fixes have been applied yet.

**9.6 — Feedback routed**: N/A
No prior corrections to route.

---

## Banned Construction Scan

**Scope:** All visible text — body prose, headings, description, table cells, card titles and descriptions, component props.

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|----------------|--------------|----------------|-------|
| 4 (description) | `Default setup path for Livepeer orchestrators running go-livepeer, with redirects for pools and non-default deployment patterns.` | No banned patterns | — | NO |
| 25 | `This guide is the default setup path for operators who are running an orchestrator on go-livepeer.` | `This guide is` (`This page [verb]` pattern) | self-reference | YES — FAIL |
| 29 | `Walks through the default setup path most operators should use.` | `should` | procedural/instructional recommendation | BORDERLINE — `should` in a description bullet is not a value claim. Acceptable. | NO |
| 30 | `Breaks setup into clear install, configure, connect, activate, test, and monitor steps.` | No banned patterns | — | NO |
| 31 | `Links to the detailed current pages for each step.` | No banned patterns | — | NO |
| 35 | `It does not cover pool participation as the primary path.` | `does not` / `not [X]` primary statement | negative-frame value statement | YES — FAIL |
| 36 | `It does not replace the detailed AI operations guides.` | `does not` / `not [X]` primary statement | negative-frame value statement | YES — FAIL |
| 37 | `It does not cover every split, siphon, or custom deployment pattern in-line.` | `does not` / `not [X]` primary statement | negative-frame value statement | YES — FAIL |
| 43 (card desc) | `Use this if you are contributing GPU capacity to an existing operator instead of setting up your own node.` | `if` condition | conditional caveat | OK — informational conditional in a routing card |
| 45 (card desc) | `Use this for split, siphon, and other non-default setup paths that are still being consolidated.` | No banned patterns | — | NO |
| 53 (card desc) | `Confirm hardware, networking, and operational prerequisites.` | No banned patterns | — | NO |
| 57 (card desc) | `Install go-livepeer using the release path that matches your environment.` | `matches` — no banned patterns | — | NO |
| 60 (card desc) | `Set the runtime flags that define price, GPU selection, network, and service address.` | No banned patterns | — | NO |
| 63 (card desc) | `Connect the node to Arbitrum and verify RPC reliability.` | No banned patterns | — | NO |
| 65 (card desc) | `Validate the node before and after activation.` | No banned patterns | — | NO |
| 69 (card desc) | `Track health, rewards, and operational signals once the node is live.` | `once` | conditional — `once [condition]` | BORDERLINE — "once the node is live" is a timing context, not an undefined condition. Acceptable. | NO |
| 75 | `Treat activation as a distinct checkpoint, not just the end of installation.` | `not just` | banned phrase | YES — FAIL (checks.mdx §2.3: "not just X" is a banned phrase) |

**Confirmed violations requiring fixes:**
1. Line 25: `This guide is` — self-reference opener
2. Lines 35–37: Three `not [X]` primary statements
3. Line 75: `not just the end of installation` — banned phrase

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| `What this guide does` | 1 | 1 | 2 | 2 | 3 | **9/25** | FAIL |
| `What this guide does not do` | 1 | 1 | 2 | 2 | 2 | **8/25** | FAIL |
| `Redirects` | 4 | 3 | 4 | 4 | 5 | **20/25** | PASS |
| `Setup overview` | 3 | 3 | 4 | 4 | 4 | **18/25** | FAIL |
| `Activation checks` | 4 | 4 | 4 | 5 | 5 | **22/25** | PASS |

**Score rationale:**

`What this guide does` (9/25): Names the document, not the content. "What it does" could be on any page. No domain anchor. Fails precision (names the meta-object), fails depth (no governing concept), low stability (would need updating if the guide's scope changes). A reader scanning headings gains no information from this.
- Rename suggestion: `Setup Path Scope` (22/25 — names the governing concept, interpretable in isolation, survives scope changes).

`What this guide does not do` (8/25): Negative frame heading. Even lower than above because it indexes what is absent. No governing concept.
- Rename suggestion: Remove section; absorb scope note into opening paragraph. If retained: `Excluded Paths` (19/25 — borderline) or merge into `Setup Path Scope` section.

`Redirects` (20/25): Clear, domain-anchored, names the function. Minor penalty on Depth — does not signal what kind of redirects. Passes the threshold.
- Optional improvement: `Setup Path Selection` (21/25) — but `Redirects` is acceptable.

`Setup overview` (18/25): Contains Avoid-tier word `overview`. Fails 20/25 threshold. Precision penalty: `overview` adds no specificity. Domain-anchored by `Setup` which helps.
- Rename suggestion: `Setup Steps` (22/25) or `Setup Sequence` (22/25).

`Activation checks` (22/25): Strong. Names the governing concept precisely. Concise. Stable. Passes.

---

## Spelling/Typo Check

Scanned all visible text: headings, prose, card titles, card descriptions, table cells.

- `dep-rc-navigator` (line 45) — `dep-` prefix is a naming convention, not a typo.
- No spelling errors found.
- No typographic issues found.
- UK English confirmed throughout.

---

## Component Matrix

| Component | Used? | Appropriate for corrected `concept` pageType? | Notes |
|-----------|-------|-------------------------------|-------|
| `CardGroup` | Yes (lines 41, 52, 83) | PASS — preferred for `concept` and `navigation` | Standard routing component |
| `Card` | Yes (multiple) | PASS — preferred for `concept` and `navigation` | Standard routing component |
| (table, bare markdown) | Yes (lines 76–81) | PASS — tables are permitted for structural/reference content | Activation checks table |

NOT-TESTED: `docs-guide/catalog/components-catalog.mdx` not read. The above assessment is based on the checks.mdx §5 component matrix only. Full approval status deferred.

No unapproved or avoided components found in the visible markup.

---

## Cross-Category Connections

```
Root Cause A: Broken link targets — pages renamed or moved during restructuring
Affects: Cat 4.4 + Cat 7.5 + Cat 8.1
Fix: Replace all broken hrefs in one pass using the correction table in Cat 8.1.
     Six distinct broken targets; correct replacements identified.
     dep-rc-navigator requires a human decision on the replacement target.
```

```
Root Cause B: Deprecated pageType value cascades into purpose misclassification
Affects: Cat 1.2 + Cat 1.4 + Cat 5.1 + Cat 5.2 + Cat 5.7
Fix: Set pageType to canonical value (recommend: concept + pageVariant: overview OR navigation — Alison to confirm),
     then set purpose: orient. Both changes in the same frontmatter edit.
```

```
Root Cause C: Meta-document sections (What this guide does / does not do) violate voice rules
Affects: Cat 2.3 + Cat 2.4 + Cat 2.5 + Cat 3.1 + Cat 3.7
Fix: Delete both sections. Replace opening paragraph with a single content-first sentence
     stating the setup sequence and routing decision. Scope note folds into one inline clause.
```

```
Root Cause D: Activation checks section duplicates Setup overview CardGroup
Affects: Cat 4.8 + (partially Cat 8.1 — same broken links appear twice)
Fix: Remove Activation checks section (lines 73–87). The setup sequence CardGroup (lines 52–71)
     already covers all six steps including connect, test, and monitor.
```

---

## Blocking Decisions

```
Blocking Decision 1: pageType for guide.mdx
Options: [A] pageType: concept + pageVariant: overview  /  [B] pageType: navigation
Context: Page has one prose sentence plus structural CardGroups and a table.
         Minimal narrative but some orientation context.
If A: Set purpose: orient. Required sections: Overview H2 (rename opening section).
If B: Set purpose: orient. Required sections: Portal/routing — already present via CardGroups.
Recommendation: Option A (concept + overview variant) — the page provides some orientation
                context beyond pure routing, which distinguishes it from a pure navigation page.
```

```
Blocking Decision 2: dep-rc-navigator replacement
Options: [A] Remove the "Other setups" redirect card (no canonical non-default paths page yet)
         [B] Link to an existing page covering split/siphon setup
         [C] Retain card with href pointing to workspace draft (not publishable)
Recommendation: Option A — remove card until a canonical page exists.
                Non-default paths are out-of-scope for the current setup section.
```

---

## Fix List (Prioritised)

| # | Severity | Category | Fix |
|---|----------|----------|-----|
| F1 | CRITICAL | Cat 1.2, 1.4, 5.7 | Frontmatter: change `pageType: overview` to `pageType: concept`. Add `pageVariant: overview`. Change `purpose: guide` to `purpose: orient`. (Requires Blocking Decision 1.) |
| F2 | CRITICAL | Cat 4.4, 8.1 | Replace all broken hrefs: `setup/r-configure` → `setup/configure`; `setup/sc-connect` → `setup/connect-and-activate` (×3); `unclassified/rcs-connect-activate-publish` → `setup/connect-and-activate` (×2); `setup/x-test` → `setup/test` (×3); `dep-rc-navigator` → remove card pending Blocking Decision 2. |
| F3 | HIGH | Cat 1.1, 1.6 | Add `complexity: intermediate` to frontmatter. |
| F4 | HIGH | Cat 1.1, 1.7 | Add `lifecycleStage: setup` to frontmatter. |
| F5 | HIGH | Cat 1.8, 6.6 | Add `veracityStatus: unverified` to frontmatter. |
| F6 | HIGH | Cat 2.3, 2.4, 2.5, 3.1 | Delete lines 25–37 (opening paragraph + "What this guide does" + "What this guide does not do" sections). Replace with: `The default go-livepeer setup path covers six steps: requirements, install, configure, connect and activate, test, and monitor. Pool operators and non-standard deployments (split, siphon) have separate paths — see Redirects below.` |
| F7 | HIGH | Cat 2.3, 4.8 | Delete lines 73–87 (Activation checks section and its CardGroup). This content is already covered by the Setup overview CardGroup once links are corrected per F2. |
| F8 | HIGH | Cat 7.5, 8.1 | The Setup overview CardGroup (lines 52–71) must match the docs.json Setup group sequence. After F2, verify CardGroup order matches: rcs-requirements → rs-install → configure → connect-and-activate → test → r-monitor. |
| F9 | MEDIUM | Cat 1.13 | Replace keywords: remove `livepeer, orchestrator, setup`. Add: `go-livepeer orchestrator setup guide`, `livepeer node setup steps`, `go-livepeer activation`, `orchestrator node installation`. Retain `go-livepeer`, `publish`, `verify`. |
| F10 | MEDIUM | Cat 3.1, 3.2 | Rename `## Setup overview` → `## Setup Steps`. Score improves from 18/25 to 22/25. |
| F11 | MEDIUM | Cat 3.6 | Consider renaming `title: Setup Overview` → `title: Setup Path`. `sidebarTitle` should match. |

---

*Report generated: 2026-03-24. Reviewed against checks.mdx §1–9, Frameworks.mdx §1–4, CLAUDE.md voice rules, docs.json lines 2856–2867.*
