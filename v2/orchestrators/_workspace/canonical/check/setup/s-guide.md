# Quality Check Report — v2/orchestrators/setup/s-guide.mdx

**Date**: 2026-03-24
**Reviewer**: Claude Code (per-page quality check agent)
**Verdict**: NEEDS WORK
**Blocking Decision**: Page is not in docs.json. Human decision required on whether s-guide.mdx replaces guide.mdx (BD-1). All link repair depends on this decision.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Setting up an Orchestrator` | FAIL | Verbose gerund form. 3+ words, action-phrase title violates Cat 3.6 title rules ("concept-derived", not an action phrase). |
| `sidebarTitle` | Yes | `Guide` | FAIL | Single generic word. Fails section naming rules — does not name a concept. Does not match title. `Guide` is an Avoid-tier standalone label. |
| `description` | Yes | `What it means to run an orchestrator and a setup checklist.` | FAIL | Self-referential framing ("What it means") and content description ("a setup checklist") — describes the page rather than stating a subject-first outcome. 59 chars — within limit but fails the subject-first rule. |
| `pageType` | Yes | `overview` | FAIL | `overview` is a deprecated pageType alias. Must migrate to correct pageType + `pageVariant: overview`. (checks.mdx §1.2, §1.3) |
| `audience` | Yes | `orchestrator` | PASS | Canonical 7-token value. |
| `purpose` | Yes | `overview` | FAIL | `overview` is not in the 15-value canonical purpose set. This is an **invalid value** error (not a deprecated alias — `overview` does not appear in either the old or new purpose schema as a valid purpose value). (checks.mdx §1.4) |
| `complexity` | No | — | FAIL | Required field missing. (checks.mdx §1.1, §1.6) |
| `lifecycleStage` | No | — | FAIL | Required field missing. (checks.mdx §1.1, §1.7) |
| `keywords` | Yes | `livepeer, orchestrators, setup, checklist` | FAIL | Generic — same issues as guide.mdx. `livepeer` and `orchestrators` are the exact bad examples in checks.mdx §1.13. `checklist` is a content-type descriptor, not a searcher intent term. |
| OG image block | Yes | `/snippets/assets/site/og-image/fallback.png` + 4 supporting fields | PASS (structure) / INFO (content) | All 5 OG fields present. Using fallback image rather than section-specific image. Not a blocking issue for a draft. |
| `status` | No | — | INFO | Not a required field. Absent — no action needed, but note the contrast with guide.mdx which has `status: draft`. |
| `veracityStatus` | No | — | FAIL | Required field missing. (checks.mdx §1.8). Default: `unverified`. |

**Missing required fields (5)**: `complexity`, `lifecycleStage`, `veracityStatus`. `pageType` and `purpose` are present but have non-canonical values.

---

## Categories 1–9

### Category 1 — Frontmatter & Taxonomy

**1.1 — All 10 required fields present**: FAIL
Missing: `complexity`, `lifecycleStage`, `veracityStatus`. `pageType` and `purpose` present but invalid.

**1.2 — pageType uses 7-type canonical schema**: FAIL
- Found: `pageType: overview`
- `overview` is a deprecated alias. Migration: determine correct pageType. Page has a one-sentence orientation opening, a checklist, and a CardGroup. This is either `concept` + `pageVariant: overview` (orientation concept page) or `instruction` + `pageVariant: overview` (procedural overview). However, given the page is a structural duplicate of guide.mdx and is not in docs.json, resolving pageType alone is insufficient — see Blocking Decision.
- Fix (conditional): Set `pageType: concept` + `pageVariant: overview` OR deprecate the page entirely. Alison to decide.
- Severity: CRITICAL.

**1.3 — pageVariant valid if present**: N/A — `pageVariant` absent. Fix as part of 1.2 resolution.

**1.4 — purpose uses 15-value canonical set**: FAIL
- Found: `purpose: overview`
- `overview` is an **invalid value** — it does not appear in either the old 12-type or new 15-value purpose schema as a valid purpose value. This is a different failure type from guide.mdx (which used a valid pageType value in the wrong field). Here the value is simply not in any schema.
- Fix: Change to `purpose: orient`.
- Severity: CRITICAL.

**1.5 — audience uses 7-token set**: PASS — `orchestrator` is canonical.

**1.6 — complexity single canonical value**: FAIL
- Found: absent
- Fix: Add `complexity: beginner` — this page is more introductory in nature than guide.mdx; it opens with a definition of "what it means" to run an orchestrator.
- Severity: HIGH.

**1.7 — lifecycleStage single canonical value**: FAIL
- Found: absent
- Fix: Add `lifecycleStage: setup`.
- Severity: HIGH.

**1.8 — veracityStatus present and honest**: FAIL
- Found: absent
- Fix: Add `veracityStatus: unverified`.
- Severity: HIGH.
- Note: No `status` field is present. Once `veracityStatus: unverified` is added, there is no `status: current` + unverified conflict (checks.mdx reporting rule: consistent with checks.mdx §1.8).

**1.9 — industry array valid**: N/A — not present.

**1.10 — niche array valid**: N/A — not present.

**1.11 — description well-formed**: FAIL
- Found: `What it means to run an orchestrator and a setup checklist.`
- Two failures: (a) "What it means" is not subject-first — it is a content-descriptor opening that describes the page rather than stating a subject-first fact. (b) "a setup checklist" describes the page's content type rather than the reader's outcome.
- 59 characters — within limit.
- Fix: Rewrite as subject-first: `{/* REVIEW: description — write as subject-first outcome, e.g. 'Running a go-livepeer orchestrator node provides GPU compute for video transcoding and AI inference on the Livepeer network. This page orients new operators to the setup sequence.' — verify against canonical description pattern */}`
- Severity: MEDIUM.

**1.12 — OG image block complete**: PASS
All 5 OG fields present. Using fallback image — acceptable for draft state.

**1.13 — keywords field quality**: FAIL
- Found: `livepeer, orchestrators, setup, checklist`
- Same failures as guide.mdx. `livepeer` and `orchestrators` are generic. `checklist` is a content-type descriptor.
- Note: `orchestrators` uses plural — inconsistent with `orchestrator` in audience token and domain terminology.
- Fix: Replace with searcher-intent-aligned terms: `livepeer orchestrator setup checklist`, `run go-livepeer orchestrator node`, `orchestrator setup requirements`, `go-livepeer first-time setup`.
- Severity: MEDIUM.

---

### Category 2 — Voice & Copy

**2.1 — UK English throughout**: PASS
No US spellings found. Page is minimal in prose content.

**2.2 — Zero banned words**: PASS
Scanned for all banned words. None found. Page has very little prose.

**2.3 — Zero banned phrases**: PASS
Scanned all visible text for banned phrases (checks.mdx §2.3). No instances of "This section covers", "This page covers", "and so on", "etc.", "rather than", "not just", "can generate", "depends on various", "Understanding X is essential", "As mentioned above", or any other listed banned phrase found in body prose or component text. The `## See also` heading is a Banned-tier heading term — that violation belongs to Cat 3.2, not Cat 2.3 (banned phrases in body prose).

**2.4 — Zero banned constructions**: PASS
- Line 20: `You earn from protocol rewards (LPT) and job fees (ETH).` — direct assertion. No banned constructions.
- No `This page [verb]`, no `not [X]` primary statements, no `if [condition]` in body prose.
- Note: The checklist items (lines 24–29) use `[number]. **Step** - [link]` format — not prose, no banned constructions.

**2.5 — Opening order correct**: PASS (partial)
- Line 20: `Running an orchestrator means operating a **go-livepeer** node that provides GPU compute (video transcoding and/or AI inference) to the Livepeer network. You earn from protocol rewards (LPT) and job fees (ETH).`
- Opens with the subject (running an orchestrator), defines the system, then states the outcome (earning). This order is value-before-mechanism: not fully correct (mechanism comes before value). The earning claim is the reader's primary motivator and should lead.
- Better order: "A go-livepeer orchestrator node earns protocol rewards (LPT) and job fees (ETH) by providing GPU compute — video transcoding and AI inference — to the Livepeer network."
- Severity: MEDIUM.

**2.6 — Paragraph discipline**: FAIL
- Line 20: Two-sentence paragraph. First sentence defines the role (mechanism). Second sentence states the earning outcome (value). The lead sentence should state the value — it does not. The final sentence ends on fact (ETH/LPT earnings) — correct.
- The paragraph structure is reasonable for orientation content but the opening order fails (mechanism before value).
- Severity: MEDIUM.

**2.7 — Audience register correct**: PASS
Language is operational. References `go-livepeer` (hardware-specific), `GPU compute`, `protocol rewards (LPT)`, `job fees (ETH)`. Appropriate for an orchestrator audience.

**2.8 — Per-audience prohibited phrases absent**: PASS
None of the orchestrator-prohibited phrases found: no "easy to set up", no "simple configuration", no "the network rewards you for", no "your orchestrator will automatically...".

**2.9 — No passive value statements**: FAIL (partial)
- Line 20: `You earn from protocol rewards (LPT) and job fees (ETH).` — This is an assertive value claim. However, it is vague: no mechanism (reward cut, fee cut, round frequency), no quantification. Checks.mdx §2.9: "Every value claim is quantified or concrete."
- Per Frameworks.mdx §2.2 orchestrator rules: "Present economics in vague terms ('can earn rewards') — DON'T." The current phrasing `"You earn from protocol rewards"` is direct but unquantified.
- Severity: MEDIUM (correct assertion form, insufficient quantification for the audience).

**2.10 — No hedging openers**: PASS
Opens with a factual definition, not a caveat or disclaimer.

**2.11 — Terminology locked and consistent**: FAIL
- Line 20: `GPU compute (video transcoding and/or AI inference)` — correct domain terms.
- Line 20: `protocol rewards (LPT) and job fees (ETH)` — correct.
- Line 40: `[Staking LPT](../advanced/staking-LPT)` — link text uses `LPT` correctly.
- Line 40: `[Rewards and fees](../advanced/rewards-and-fees)` — acceptable.
- Line 40: `[About orchestrators](../concepts/overview)` — `overview` as a page slug is acceptable; link text is fine.
- Line 40: `[Join a pool](../get-started/join-a-pool)` — `pool` terminology is consistent with CLAUDE.md. However, `../get-started/join-a-pool` is a relative link — verify existence (see Cat 8.1).
- No deprecated terms (`Broadcaster`, `Combined mode`, `Hybrid`, `Transcoder` as synonym for Orchestrator) found.
- Severity: PASS on terminology. Cat 8.1 covers the link validity separately.

---

### Category 3 — Section Naming & Headings

**3.1 — Every heading scores ≥20/25**: FAIL
- `## Setup checklist` — 20/25 (borderline PASS — see table).
- `## See also` — 4/25 (FAIL — banned tier standalone heading).

**3.2 — No banned or weak standalone heading terms**: FAIL (CRITICAL)
- `## See also` — `See Also` is in the **Banned** tier of standalone heading terms per Frameworks.mdx §4.1. Direct violation.
- `## Setup checklist` — `checklist` is not in the Banned or Avoid tiers. `Setup` is OK-tier. Acceptable.
- Severity: HIGH.

**3.3 — No literal contrast labels**: PASS — no `X vs Y` headings.

**3.4 — Domain-anchor rule applied**: FAIL
- `## See also` — no domain anchor, and is Banned-tier. Cannot be rescued by a domain anchor.

**3.5 — Heading names the concept, not examples**: FAIL
- `## See also` — names a cross-reference relationship, not a concept. Must be replaced or removed.

**3.6 — Title well-formed**: FAIL
- Found: `title: Setting up an Orchestrator`
- Gerund action phrase ("Setting up") violates the concept-derived title rule. CLAUDE.md: "1–3 words, concept-derived". An action phrase is not a concept.
- `sidebarTitle: Guide` — single generic word, Avoid-tier label. Does not match the title.
- Fix: `title: Orchestrator Setup` + `sidebarTitle: Orchestrator Setup` (matches guide.mdx pattern of `Setup Overview` but without the deprecated `overview` word).
- Note: However, if this page is deprecated in favour of guide.mdx (see Blocking Decision), this fix is moot.
- Severity: MEDIUM (escalates to CRITICAL if page is retained).

**3.7 — Expert editorial choice**: FAIL
- `## See also` — no expert editor would choose this. It is a bureaucratic placeholder.
- `title: Setting up an Orchestrator` — gerund form is a safe generic label, not an expert editorial choice.

---

### Category 4 — Page Structure & Content Architecture

**4.1 — One purpose, one audience, one job**: FAIL
This page serves two purposes simultaneously: (1) it orients the reader to "what an orchestrator is" and (2) it provides a setup checklist. These are two different jobs for two different points in the reader journey. An orientation page (discover/evaluate) and a setup checklist (setup/operate) should not be the same page. This is a scope problem.
- Severity: HIGH.

**4.2 — Purpose statement test**: FAIL
"This page lets the orchestrator [one concrete action]." — Cannot write this sentence without choosing between "understand what an orchestrator does" (orientation job) or "follow the setup checklist" (procedural job). Ambiguity confirms Cat 4.1 finding.

**4.3 — PREV/NEXT adjacency correct**: FAIL
- `s-guide.mdx` is NOT in docs.json. It has no defined navigation position. It has no PREV or NEXT page in any documented sequence.
- No adjacency can be evaluated.
- Severity: CRITICAL.

**4.4 — No dead ends**: FAIL
See Cat 8.1. All 6 links in the checklist (lines 24–29) and 5 links in the CardGroup (lines 32–38) use relative paths (`./hardware-requirements`, `./install-go-livepeer`, `./connect-to-arbitrum`, `./orch-config`, `./publish-offerings`, `./orchestrator-stats`). None of these files exist in `v2/orchestrators/setup/`. All are dead links.
- The `## See also` section (lines 40–42) contains 4 relative links: `../concepts/overview`, `../get-started/join-a-pool`, `../advanced/staking-LPT`, `../advanced/rewards-and-fees`. None of these paths exist in the current `v2/orchestrators/` directory structure. All are dead links.
- Severity: CRITICAL — 10 broken links total.

**4.5 — Prerequisites stated or linked**: FAIL
No prerequisites stated. The checklist begins with "Hardware" which implies there are hardware requirements, but no prerequisite knowledge or tooling is stated upfront.
- Severity: MEDIUM.

**4.6 — Out-of-scope is clear**: N/A (page scope itself is unclear — see Cat 4.1).

**4.7 — Information type per section correct**: FAIL
- Purpose is `overview` (invalid) — using corrected `orient` for evaluation.
- Opening paragraph (line 20): `narrative` — appropriate for `orient`.
- `## Setup checklist` (lines 22–29): `procedural` — numbered sequential steps. `procedural` is a primary type for `start`/`build`/`configure`, not for `orient`. For `orient`, primary types are `structural` and `narrative`. A procedural checklist on an orientation page is a type mismatch.
- This confirms the scope problem in Cat 4.1: the checklist belongs on a different page type (`instruction` with `purpose: start`).
- Severity: HIGH.

**4.8 — No content duplication from adjacent sections**: FAIL (critical)
This page is a structural duplicate of `guide.mdx`. Both pages:
- Cover the same setup sequence (requirements → install → connect → configure → run/activate → monitor)
- Are in the same directory (`v2/orchestrators/setup/`)
- Use `pageType: overview` (same deprecated value)
- Serve the same audience (`orchestrator`)
- `guide.mdx` is in docs.json and is the canonical setup overview. `s-guide.mdx` is not in docs.json and appears to be an older draft or superseded version.
- See also: `x-deprecated/dep-s-guide.mdx` exists — suggesting `s-guide.mdx` was itself a replacement for `dep-s-guide.mdx` but was later superseded by `guide.mdx`.
- Severity: CRITICAL.

**4.9 — Section orientation page present**: N/A — this page is not in the live navigation. `guide.mdx` is the section orientation page.

**4.10 — Cross-tab links at journey intersections**: FAIL
No cross-tab links. `## See also` section links (`../concepts/overview`, `../get-started/join-a-pool`) are within the same tab. The `staking-LPT` and `rewards-and-fees` links might point to delegator/economics content but the paths do not exist and cannot be verified.
- Severity: INFO (tab-level check — and page may be deprecated anyway).

---

### Category 5 — Layout, Components & Template

**5.1 — Correct template for pageType + pageVariant**: FAIL
`pageType: overview` is deprecated. Cannot evaluate against a canonical template.

**5.2 — Required sections present**: FAIL
If corrected to `concept` + `pageVariant: overview`: Overview section required. The opening paragraph serves this function but fails heading standards.
If the page is `instruction`: Prerequisites, Steps, Next Steps required. `## Setup checklist` provides a steps-equivalent but no prerequisites or next steps.

**5.3 — Only approved components used**: NOT-TESTED
`docs-guide/catalog/components-catalog.mdx` not read. Components used: `Columns` (line 31), `Card` (lines 33–37). `Columns` is potentially a non-standard component — the correct Mintlify component for card grid layouts is `CardGroup`. NOT-TESTED per reporting rules.

**5.4 — Avoided components absent**: PASS
No TODO/TBD, no Coming Soon, no PreviewCallout.

**5.5 — Information type → component mapping correct**: FAIL
- `## Setup checklist` (lines 22–29): procedural content rendered as a numbered markdown list. Per Frameworks.mdx §4.2: `procedural` → `<Steps>`. Should use Steps component, not bare markdown numbered list.
- `Columns` component (line 31): used to display Cards. `CardGroup` is the standard component for this pattern. `Columns` is an unknown component from the catalog's perspective.

**5.6 — MDX renders clean**: NOT-TESTED
Not executed locally. `<Columns cols={2}>` syntax would need to be verified — this component is not in the standard Mintlify component set.

**5.7 — No old-schema frontmatter**: FAIL
`pageType: overview` is old-schema. See Cat 1.2.

**5.8 — CSS uses custom properties only**: PASS
No inline CSS.

**5.9 — Generated file banners intact**: N/A
Not a generated file.

**5.10 — Component naming/import conventions**: FAIL (partial)
`Columns` — if this is a custom component, it should follow PascalCase convention (which it does). However, its use in place of `CardGroup` is a potential convention violation. NOT-TESTED fully.

---

### Category 6 — Veracity & Factual Accuracy

**6.1 — Every factual claim citable**: NOT-TESTED
Claims present:
- Line 20: `Running an orchestrator means operating a **go-livepeer** node that provides GPU compute (video transcoding and/or AI inference) to the Livepeer network.` — Factual. Verifiable against go-livepeer docs. NOT-TESTED.
- Line 20: `You earn from protocol rewards (LPT) and job fees (ETH).` — Factual claim about earning mechanism. Verifiable against protocol docs. NOT-TESTED.
- Lines 24–29: The 6 setup steps (Hardware, Install, Connect, Configure, Run and activate, Monitor) match the general pattern but link to pages that do not exist.

**6.2 — Code/commands tested**: N/A
No code blocks or CLI commands.

**6.3 — No deprecated API usage**: PASS
No API references.

**6.4 — Numbers are real**: N/A
No numbers.

**6.5 — REVIEW flags for unverified claims**: FAIL
- Line 20: Earning mechanism stated without quantification or source. Should carry a `{/* REVIEW: earnings claim — verify against protocol earnings model; add reward cut / fee cut mechanics and round frequency */}` flag.
- All link targets are unverifiable (dead links). Should carry REVIEW flags or be removed.
- Severity: MEDIUM.

**6.6 — veracityStatus honest**: FAIL
`veracityStatus` absent. Fix: add `veracityStatus: unverified`.

**6.7 — Authoritative vs AI-generated glossary**: N/A

**6.8 — Source staleness check**: INFO
`LPT` and `ETH` as earning currency types are stable. Setup step sequence may drift with releases.

**6.9 — No open-ended research tasks**: FAIL
All 10 link targets are unresolved and point to pages that do not exist. These are not "needs research" — they are dead links that require concrete resolution.

---

### Category 7 — Navigation & Information Architecture

**7.1 — Page exists in docs.json**: FAIL
`v2/orchestrators/setup/s-guide` is NOT in docs.json. File is a structural orphan from the navigation perspective.
- Severity: CRITICAL.

**7.2 — Navigation matches file system**: FAIL
File exists in file system at `v2/orchestrators/setup/s-guide.mdx` but has no docs.json entry. This is a file-system-only file — it will not render in navigation.

**7.3 — Tab entry portal routes to all sections**: N/A — section-level check.

**7.4 — No structural orphans**: FAIL
This page is a structural orphan. No navigation path reaches it.
- Severity: CRITICAL.

**7.5 — Audience journey complete**: FAIL
Page is not part of any documented journey. See Cat 7.1.

**7.6 — Cross-tab graduation paths exist**: FAIL
Not applicable while page is orphaned. `## See also` contains four links but all are to non-existent paths (see Cat 8.1).

**7.7 — File in correct lane**: FAIL (borderline)
File is at `v2/orchestrators/setup/s-guide.mdx` — in the publishable lane. However, it is not in docs.json and appears to be superseded. Per checks.mdx §7.7: publishable content should be in `v2/<section>/`; deprecated content should be in `x-deprecated/` or `x-archived/`. If this page is superseded, it should be moved to `v2/orchestrators/setup/x-deprecated/` (note: `x-deprecated/dep-s-guide.mdx` already exists in that folder, suggesting a prior version was deprecated — so `s-guide.mdx` is in the wrong lane if it is now also superseded by `guide.mdx`).
- Severity: HIGH.

**7.8 — File naming conventions**: PASS
`s-` prefix is defined in checks.mdx §7.8 as a setup-related prefix. `s-guide.mdx` follows this convention. However, given that `guide.mdx` exists as the canonical setup guide, the `s-` prefixed version appears to be a superseded draft.

**7.9 — _workspace/ TTL compliance**: N/A — file is in publishable lane (see Cat 7.7).

---

### Category 8 — Links & Rendering

**8.1 — All internal links resolve**: FAIL
All links in s-guide.mdx are relative paths. None resolve to files that exist in the current directory structure.

| Line | Link text | Relative path | Resolved path | Exists? | Status |
|------|-----------|---------------|---------------|---------|--------|
| 24 | Hardware requirements | `./hardware-requirements` | `v2/orchestrators/setup/hardware-requirements.mdx` | NO | FAIL |
| 25 | Install go-livepeer | `./install-go-livepeer` | `v2/orchestrators/setup/install-go-livepeer.mdx` | NO | FAIL |
| 26 | Connect to Arbitrum | `./connect-to-arbitrum` | `v2/orchestrators/setup/connect-to-arbitrum.mdx` | NO | FAIL |
| 27 | Configure your node | `./orch-config` | `v2/orchestrators/setup/orch-config.mdx` | NO | FAIL |
| 28 | Activate on the network | `./publish-offerings` | `v2/orchestrators/setup/publish-offerings.mdx` | NO | FAIL |
| 29 | Orchestrator stats and monitoring | `./orchestrator-stats` | `v2/orchestrators/setup/orchestrator-stats.mdx` | NO | FAIL |
| 33 | Hardware requirements (card) | `./hardware-requirements` | `v2/orchestrators/setup/hardware-requirements.mdx` | NO | FAIL |
| 34 | Install go-livepeer (card) | `./install-go-livepeer` | `v2/orchestrators/setup/install-go-livepeer.mdx` | NO | FAIL |
| 35 | Connect to Arbitrum (card) | `./connect-to-arbitrum` | `v2/orchestrators/setup/connect-to-arbitrum.mdx` | NO | FAIL |
| 36 | Configure your orchestrator (card) | `./orch-config` | `v2/orchestrators/setup/orch-config.mdx` | NO | FAIL |
| 37 | Orchestrator stats and monitoring (card) | `./orchestrator-stats` | `v2/orchestrators/setup/orchestrator-stats.mdx` | NO | FAIL |
| 37 | Activate on the network (card) | `./publish-offerings` | `v2/orchestrators/setup/publish-offerings.mdx` | NO | FAIL |
| 40 | About orchestrators | `../concepts/overview` | `v2/orchestrators/concepts/overview.mdx` | NO — `concepts/` dir exists but contains: `architecture.mdx`, `capabilities.mdx`, `incentive-model.mdx`, `role.mdx` only. No `overview.mdx`. Not in docs.json. FAIL |
| 40 | Join a pool | `../get-started/join-a-pool` | `v2/orchestrators/get-started/join-a-pool.mdx` | NO — no `get-started/` directory in orchestrators section |
| 40 | Staking LPT | `../advanced/staking-LPT` | `v2/orchestrators/advanced/staking-LPT.mdx` | NO — no `advanced/` directory in orchestrators section |
| 40 | Rewards and fees | `../advanced/rewards-and-fees` | `v2/orchestrators/advanced/rewards-and-fees.mdx` | NO — no `advanced/` directory in orchestrators section |

**Summary**: 16 broken link instances across 10 distinct broken targets. Setup step links (6 in numbered list + 6 in cards) all fail — files do not exist in `v2/orchestrators/setup/`. All 4 See also links fail — `concepts/overview.mdx` confirmed absent; `get-started/` and `advanced/` directories confirmed absent from `v2/orchestrators/`. Verified against file system and docs.json.
- Severity: CRITICAL — page is effectively non-functional.

**8.2 — All external links live**: PASS
No external links.

**8.3 — All snippet imports resolve**: N/A
No snippet imports.

**8.4 — All images load**: PASS
OG image uses fallback path — assumed valid.

**8.5 — Page renders without error**: NOT-TESTED
MDX structure appears valid. `<Columns cols={2}>` component — if not a registered Mintlify component, would cause a render error. NOT-TESTED.

**8.6 — No TODO/TBD/Coming Soon**: PASS
None found.

---

### Category 9 — Process & Governance

**9.1 — Human sign-off recorded**: FAIL
No `status` field. No evidence of human review. Page is not in docs.json — may have been excluded intentionally.

**9.2 — All consuming decisions in registry**: N/A
No structural decisions consumed.

**9.3 — Gate prerequisites met**: FAIL
Tab-level: IA not approved, terminology not locked, content pass not open. Page is pre-gate. Additionally, page is orphaned from navigation (Cat 7.1) — it would fail any gate check on navigation completeness.

**9.4 — Phase ordering respected**: N/A
No phases have run on this page.

**9.5 — Findings gathered before fixes**: PASS (this report)

**9.6 — Feedback routed**: N/A

---

## Banned Construction Scan

**Scope:** All visible text — body prose, headings, description, card titles, card descriptions, component props, checklist items, link text.

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|----------------|--------------|----------------|-------|
| 4 (description) | `What it means to run an orchestrator and a setup checklist.` | No `can/may/if/not` patterns. Self-reference construction but not a banned phrase per §2.3. | meta-description | BORDERLINE — "What it means" describes the page; flags Cat 1.11 but not §2.4 specifically. |
| 20 | `Running an orchestrator means operating a **go-livepeer** node that provides GPU compute (video transcoding and/or AI inference) to the Livepeer network.` | No banned patterns. `and/or` is acceptable. | factual statement | NO |
| 20 | `You earn from protocol rewards (LPT) and job fees (ETH).` | No banned patterns. `earn from` is direct. | value claim (asserted) | NO — passes §2.4 (not `can earn` or `may earn`) |
| 24–29 (list) | `Hardware - [link]`, `Install - [link]`, etc. | No prose, no banned patterns. | structural list | NO |
| 33–38 (card titles/descriptions) | `Hardware requirements`, `Install go-livepeer`, etc. | No card description text (cards have no description props, only titles and icons). | structural | NO |
| 40 | `[About orchestrators](../concepts/overview) | [Join a pool](../get-started/join-a-pool) | [Staking LPT](../advanced/staking-LPT) | [Rewards and fees](../advanced/rewards-and-fees)` | No banned patterns in link text. | structural | NO |

**Result**: No banned constructions found in body prose. No `can/may/if/not [X]` violations in prose. The `## See also` heading violates Cat 3.2 (Banned heading tier) but that is a heading check, not a banned construction per §2.4.

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| `Setup checklist` | 4 | 4 | 4 | 5 | 4 | **21/25** | PASS |
| `See also` | 1 | 1 | 2 | 2 | 4 | **10/25** (Banned tier) | FAIL |

**Score rationale:**

`Setup checklist` (21/25): Clear, domain-anchored, names the governing concept (a checklist for setup). Slight Conciseness penalty (could be `Setup Sequence` at 22/25 for more precision) but passes threshold.
- No rename required. Optional improvement: `Setup Sequence` (22/25).

`See also` (10/25): Generic cross-reference label. No precision (could be any link cluster). No depth (names the relationship, not the content). Low stability (would change if links change). Fails well below the 20/25 threshold. Moreover, `See Also` is in the **Banned** tier per Frameworks.mdx §4.1 — it cannot be improved with domain anchoring; it must be replaced.
- Rename suggestion (if section is retained): `Related Paths` (20/25) — names what the links represent (paths through the documentation that intersect with this page). However, given that all links are broken, the section should be removed entirely rather than renamed.

---

## Spelling/Typo Check

Scanned all visible text: headings, prose, checklist items, card titles, link text.

- Line 12 (keywords): `orchestrators` — plural. Inconsistency with domain term convention (`orchestrator` singular, consistent with audience token and page title). Not a typo but a terminology inconsistency.
- No spelling errors found.
- No other typographic issues found.

---

## Component Matrix

| Component | Used? | Appropriate for corrected `concept` pageType? | Notes |
|-----------|-------|-------------------------------|-------|
| `Columns` | Yes (line 31) | NOT-TESTED | `Columns` is not the standard `CardGroup` component. If custom, requires catalog verification. `docs-guide/catalog/components-catalog.mdx` not read. |
| `Card` | Yes (lines 33–37) | PASS — permitted for `concept` | Standard Mintlify component |
| (numbered markdown list) | Yes (lines 24–29) | FAIL | Procedural content should use `<Steps>` component per Frameworks.mdx §4.2. Bare numbered list is insufficient for procedural information type. |

NOT-TESTED: `docs-guide/catalog/components-catalog.mdx` not read. Component approval status for `Columns` is deferred.

---

## Cross-Category Connections

```
Root Cause A: Page is an orphaned structural duplicate of guide.mdx
Affects: Cat 4.8 + Cat 7.1 + Cat 7.4 + Cat 7.7 + Cat 4.3 + Cat 8.1
Fix: Deprecate s-guide.mdx — move to v2/orchestrators/setup/x-deprecated/dep-s-guide-v2.mdx
     (note: dep-s-guide.mdx already exists in x-deprecated — use dep-s-guide-v2.mdx or overwrite).
     No content work should proceed on this page until the deprecation decision is made.
     All Cat 8.1 link fixes are moot if page is deprecated.
```

```
Root Cause B: All link targets reference old IA structure (pre-rename)
Affects: Cat 4.4 + Cat 8.1
Fix (if page is retained): All relative links must be rewritten to current paths.
     setup steps: hardware-requirements→rcs-requirements, install-go-livepeer→rs-install,
     connect-to-arbitrum→connect-and-activate, orch-config→configure,
     publish-offerings→connect-and-activate, orchestrator-stats→r-monitor.
     See also section: all 4 links require path verification and correction.
     Fix is moot if page is deprecated.
```

```
Root Cause C: Dual scope (orientation + procedural checklist) in one page
Affects: Cat 4.1 + Cat 4.7 + Cat 5.2
Fix (if page is retained): Either (A) convert to pure orientation page — remove checklist,
     keep opening paragraph, add structural CardGroup matching guide.mdx pattern; OR
     (B) convert to instruction page with purpose: start — remove orientation paragraph,
     keep checklist, add Prerequisites section.
     Option A would create near-identical overlap with guide.mdx — further confirming deprecation.
```

---

## Blocking Decisions

```
Blocking Decision 1: Deprecate or retain s-guide.mdx
Context: s-guide.mdx is not in docs.json. It has no navigation position.
         guide.mdx covers the same content and IS in docs.json.
         x-deprecated/dep-s-guide.mdx already exists, suggesting a prior deprecation cycle.
         All 10+ links in s-guide.mdx are broken.
         Scope is dual (orientation + checklist) making single-purpose fix non-trivial.
Options: [A] Deprecate — move to v2/orchestrators/setup/x-deprecated/dep-s-guide-v2.mdx.
              All other findings become moot.
         [B] Retain and rebuild — rewrite from scratch with correct frontmatter,
              single purpose, fixed links, correct heading, aligned to current IA.
              Would require a full page brief before any content work.
If A: No further work needed. File moves to x-deprecated/.
If B: All Category 1–9 fixes listed below are required. Recommend filing a separate
      page brief before starting.
Recommendation: Option A (deprecate). Content needs are fully covered by guide.mdx.
                If a beginner-oriented setup checklist page is needed, create a new page
                under a new brief rather than rehabilitating this one.
```

```
Blocking Decision 2 (conditional on retaining the page): pageType
Options: [A] concept + pageVariant: overview  /  [B] instruction + pageVariant: quickstart
Context: If purpose is orientation → concept. If purpose is procedure → instruction.
         Current dual-scope makes this impossible to resolve without first resolving scope.
```

---

## Fix List (Conditional on Retaining the Page)

All fixes below are conditional on Blocking Decision 1 resolving to RETAIN. If DEPRECATE, no fixes required.

| # | Severity | Category | Fix |
|---|----------|----------|-----|
| F1 | CRITICAL | Cat 1.2, 5.7 | Change `pageType: overview` to `pageType: concept` + add `pageVariant: overview`. Resolve Blocking Decision 2 first. |
| F2 | CRITICAL | Cat 1.4 | Change `purpose: overview` to `purpose: orient`. |
| F3 | CRITICAL | Cat 7.1 | Add `v2/orchestrators/setup/s-guide` to docs.json Setup group. Requires human decision on placement relative to guide.mdx. |
| F4 | CRITICAL | Cat 4.4, 8.1 | Rewrite all relative links to current paths: `./hardware-requirements`→`/v2/orchestrators/setup/rcs-requirements`; `./install-go-livepeer`→`/v2/orchestrators/setup/rs-install`; `./connect-to-arbitrum`→`/v2/orchestrators/setup/connect-and-activate`; `./orch-config`→`/v2/orchestrators/setup/configure`; `./publish-offerings`→`/v2/orchestrators/setup/connect-and-activate`; `./orchestrator-stats`→`/v2/orchestrators/setup/r-monitor`. |
| F5 | CRITICAL | Cat 4.4, 8.1 | Remove `## See also` section entirely (lines 40–42). All 4 links are broken; paths reference non-existent directory structure. |
| F6 | HIGH | Cat 1.1, 1.6 | Add `complexity: beginner`. |
| F7 | HIGH | Cat 1.1, 1.7 | Add `lifecycleStage: setup`. |
| F8 | HIGH | Cat 1.8, 6.6 | Add `veracityStatus: unverified`. |
| F9 | HIGH | Cat 3.2 | Replace `## See also` with `## Related Paths` (conditional on F5 being replaced rather than removed). If section is removed per F5, F9 is moot. |
| F10 | MEDIUM | Cat 2.5, 2.6 | Rewrite opening sentence to lead with value: `A go-livepeer orchestrator node earns protocol rewards (LPT) and job fees (ETH) by providing GPU compute (video transcoding and AI inference) to the Livepeer network.` |
| F11 | MEDIUM | Cat 1.11 | Rewrite description: `{/* REVIEW: description — rewrite as subject-first outcome; verify against canonical description pattern before inserting */}` |
| F12 | MEDIUM | Cat 1.13 | Replace keywords: `livepeer, orchestrators, setup, checklist` → `livepeer orchestrator setup checklist`, `run go-livepeer orchestrator node`, `orchestrator setup requirements`, `go-livepeer first-time setup`. |
| F13 | MEDIUM | Cat 3.6 | Change `title: Setting up an Orchestrator` → `title: Orchestrator Setup`. Change `sidebarTitle: Guide` → `sidebarTitle: Orchestrator Setup`. |
| F14 | MEDIUM | Cat 5.5 | Replace numbered markdown list (lines 24–29) with `<Steps>` component. |
| F15 | MEDIUM | Cat 5.3 | Replace `<Columns cols={2}>` with `<CardGroup cols={2}>` (standard Mintlify component). |

---

## Summary

| Category | Verdict | Critical | High | Medium | Info |
|----------|---------|----------|------|--------|------|
| 1 — Frontmatter | FAIL | 2 | 3 | 2 | 0 |
| 2 — Voice & Copy | FAIL | 0 | 0 | 3 | 0 |
| 3 — Headings | FAIL | 0 | 1 | 2 | 0 |
| 4 — Structure | FAIL | 3 | 2 | 1 | 1 |
| 5 — Layout | FAIL | 0 | 0 | 2 | 0 |
| 6 — Veracity | FAIL | 0 | 0 | 2 | 1 |
| 7 — Navigation | FAIL | 2 | 1 | 0 | 1 |
| 8 — Links | FAIL | 1 | 0 | 0 | 0 |
| 9 — Process | FAIL | 0 | 2 | 0 | 0 |
| **TOTAL** | | **8** | **9** | **12** | **3** |

**Verdict: NEEDS WORK** (conditional on Blocking Decision 1)

The prose quality is acceptable — the two-sentence opening is well-formed and on-register for the orchestrator audience. Voice checks pass (banned words, banned phrases, banned constructions: all clean). The page fails on structural and navigation grounds:

- Eight CRITICALs: two deprecated frontmatter values, page absent from docs.json, page is a structural orphan, 16 broken link instances across all internal links, dual-scope structure, and orphaned navigation sequence.
- Nine HIGHs: three missing required frontmatter fields, one Banned-tier heading, dual-scope purpose failure (two checks), file-lane issue, two governance sign-off failures.

The most important finding is Blocking Decision 1: this page is not in docs.json, appears to be an older version of `guide.mdx` (which IS in docs.json and serves the same role), and all its links reference a prior IA structure. The recommended resolution is Option A (deprecate to `x-deprecated/`) — no content work should proceed until Alison decides.

---

*Report generated: 2026-03-24. Reviewed against checks.mdx §1–9, Frameworks.mdx §1–4, CLAUDE.md voice rules, docs.json lines 2856–2867, learnings.md P1–P40.*
