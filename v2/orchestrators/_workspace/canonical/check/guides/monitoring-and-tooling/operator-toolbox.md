# Per-Page Quality Check Report
## `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2930–2933

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Operator Toolbox` | PASS | |
| `sidebarTitle` | Yes | `Operator Toolbox` | PASS | |
| `description` | Yes | `Every tool for monitoring, verifying, and operating your Livepeer orchestrator — Explorer, Prometheus metrics, Docker monitoring stack, community dashboards, and capability testing utilities.` | FAIL | 191 chars — exceeds 160-char limit. Em-dash present (P30). |
| `pageType` | Yes | `reference` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token set |
| `purpose` | Yes | `reference` | PASS | Read directly from frontmatter. Valid 15-value canonical purpose. |
| `complexity` | No | — | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying. |
| `lifecycleStage` | No | — | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. |
| `keywords` | Yes | livepeer, orchestrator, explorer, prometheus, grafana, monitoring, tools, dune, tools.livepeer.cloud, metrics | FAIL | Generic entries: `livepeer`, `orchestrator`, `monitoring`, `tools`, `metrics` violate check 1.13. |
| OG image block | Yes | 5 OG fields present, path `/snippets/assets/site/og-image/en/orchestrators.png` | PASS | |
| `industry` | No | — | FAIL | Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| `niche` | No | — | FAIL | Required (P41). Proposed: `niche: [infrastructure, web3]` — confirm before applying. |
| `veracityStatus` | No | — | FAIL | Required. Page has 5 active `{/* FACT CHECK */}` comments. Proposed: `veracityStatus: unverified` — confirm before applying. |

**Required field count:** 5/10 core fields present. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`. Also `industry` and `niche` absent (P41: required). Description 191 chars (exceeds 160). |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is valid. No deprecated value. |
| 1.3 | `pageVariant` valid if present | N/A | `pageVariant` absent. `reference` is not a deprecated type requiring migration. No co-fix needed (P42). |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` read directly from frontmatter — valid. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. 5 open `{/* FACT CHECK */}` comments indicate unverified content. `status: published` + absent `veracityStatus` is incoherent per checks.mdx §1.8. Proposed: `veracityStatus: unverified` — confirm before applying. |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required (P41). Proposed: `niche: [infrastructure, web3]` — confirm before applying. |
| 1.11 | `description` well-formed | FAIL | 191 chars — exceeds 160-char limit. Contains em-dash (`—`) in visible text (P30). Subject-first structure is correct. No self-reference. UK English. Proposed fix: `Tools for monitoring and operating your Livepeer orchestrator: Explorer, Prometheus metrics, Docker monitoring stack, Dune dashboards, and capability testing.` (159 chars) — confirm before applying. |
| 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1.13 | `keywords` field quality | FAIL | Generic entries: `livepeer`, `orchestrator`, `monitoring`, `tools`, `metrics` are not searcher-intent-aligned. Good entries: `prometheus`, `grafana`, `dune`, `tools.livepeer.cloud`. Replace weak entries with: `"livepeer prometheus monitoring setup"`, `"orchestrator active set check"`, `"go-livepeer metrics endpoint"`, `"livepeer docker monitoring stack"`. |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — every candidate listed):**
- `effectively` — ABSENT
- `essentially` — ABSENT
- `basically` — ABSENT
- `meaningful` — ABSENT
- `significant` — ABSENT
- `real` (as intensifier) — ABSENT
- `various` — ABSENT
- `several` — ABSENT
- `obviously` — ABSENT
- `clearly` — ABSENT

**Banned phrase scan:**
- "This section covers" — ABSENT
- "This page covers/explains/walks you through" — ABSENT
- "Understanding X is essential" — ABSENT
- "It is important to note" — ABSENT
- "As mentioned above" — ABSENT
- "and so on" / "etc." — ABSENT
- "rather than" — ABSENT
- "can generate" / "may produce" in value claims — ABSENT
- "depends on various" — ABSENT
- "not just X" — ABSENT

**Banned construction scan (P6 — every can/may/could/might sentence classified):**

| Location | Text | Classification |
|---|---|---|
| Line 35 | "These are the tools you reach for when you want to verify you are in the active set, track earnings, diagnose a routing problem, monitor GPU health, or understand what the network is doing." | NOT a banned construction. Declarative. PASS. |
| Card (Active Set) | "Check here to confirm you are in the set and track your rank trend." | NOT a banned construction. Imperative instruction. PASS. |
| Card (Reward Call) | "Any gaps here warrant investigation." | PASS. |
| Card (Earnings) | "Use this to verify your node is earning and to track long-term trend." | PASS. |
| Line 57, Card description | "Missed rounds mean lost inflation — for you and your delegators." | Em-dash violation (P30). Not a banned construction per 2.4. |
| Line 71, body | "Your published reward cut and fee share — verify these match what you configured on-chain" | Em-dash violation (P30). Not a banned construction per 2.4. |
| Warning body | "It has experienced intermittent availability, so keep Explorer and Prometheus in the loop as primary sources." | "in the loop" is informal. Not a banned construction per the framework. BORDERLINE — flag for human review. |
| Line 240 | "Use these dashboards for network trends. Use Explorer and Prometheus for per-node operations." | PASS. |
| Line 246 | "Tools for verifying your node is correctly serving jobs end-to-end." | PASS. |

**`not [X]` as primary statement scan:** Not found.
**`This page [verb]` self-reference scan:** Not found.
**CustomDivider `middleText` props (P20):** No `middleText` props present on CustomDivider instances. PASS.

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | "behaviour" (line 246) correctly UK. No US spellings found. |
| 2.2 | Zero banned words | PASS | All 10 banned words absent (shown above). |
| 2.3 | Zero banned phrases | PASS | All banned phrases absent. |
| 2.4 | Zero banned constructions | PASS | No `not [X]` as primary statement, `This page [verb]`, `can/may [verb]` in value claims, or `if [condition]` in body prose found. |
| 2.5 | Opening order correct | PASS | Line 35: "Your node is running. These are the tools you reach for..." — opens with operational state fact, leads with reader purpose. |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. No hedged paragraph endings visible. |
| 2.7 | Audience register correct | PASS | Operational and technical. Hardware-specific language (GPU, Prometheus, Docker). Numbers-driven. Orchestrator register throughout. |
| 2.8 | Per-audience prohibited phrases absent | PASS | None of: "Your orchestrator will automatically...", "The network rewards you for...", "Easy to set up / Simple configuration" found. |
| 2.9 | No passive value statements | PASS | Claims are operational and concrete. |
| 2.10 | No hedging openers | PASS | Opens with "Your node is running" — direct fact. |
| 2.11 | Terminology locked and consistent | PASS | Active set, reward cut, fee share, pool worker (not used generically on this page — referenced via Note). No deprecated terms (broadcaster, combined mode, hybrid). |

**Banned Construction Scan Table:**

| Location | Text | Category | Fix |
|---|---|---|---|
| Description field | "orchestrator — Explorer, Prometheus metrics..." | Em-dash (P30) | Replace `—` with `: ` in proposed description fix (see F-01) |
| Line 57, Card description | "lost inflation — for you and your delegators" | Em-dash (P30) | "lost inflation: you and your delegators both miss their share" |
| Line 71, body | "reward cut and fee share — verify these" | Em-dash (P30) | "reward cut and fee share. Verify these match what you configured on-chain." |

**Category 2 verdict: PASS** — Checks 2.1–2.11 all pass. Em-dash violations captured in F-02 (P30 cross-category).

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related Pages` heading not present on this page — no exemption needed.

**Heading Score Table (P2 — per-dimension breakdown, 5×5):**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Livepeer Explorer | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Node Metrics (Prometheus) | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Docker monitoring stack (fastest setup) | 3 | 3 | 3 | 4 | 3 | 16/25 | FAIL — parenthetical is a marketing qualifier, not a governing concept |
| Custom Prometheus setup | 4 | 3 | 4 | 4 | 4 | 19/25 | FAIL — 1 point below threshold |
| Cloud SPE Tools | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |
| Network Dashboards (Dune Analytics) | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Capability Testing | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Tool selection guide | 3 | 2 | 3 | 3 | 4 | 15/25 | FAIL — lowercase "guide" inconsistent; "guide" weak descriptor |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | 3 headings below threshold: "Docker monitoring stack (fastest setup)" (16), "Custom Prometheus setup" (19), "Tool selection guide" (15). |
| 3.2 | No banned or weak standalone heading terms | FAIL | "Tool selection guide" uses "guide" as a descriptor — weak standalone. No Banned-tier terms. No `See Also` or `See also`. |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings. |
| 3.4 | Domain-anchor rule applied | PASS | Headings include domain nouns (Explorer, Prometheus, Dune Analytics, SPE). |
| 3.5 | Heading names concept, not examples | PASS | Each heading names a tool or category, not examples. |
| 3.6 | Title well-formed | PASS | "Operator Toolbox" — 2 words, concept-derived, no banned forms. |
| 3.7 | Sounds like expert editorial choice | FAIL | "Docker monitoring stack (fastest setup)" embeds a marketing qualifier. "Tool selection guide" is bureaucratic. |

**Category 3 verdict: FAIL** — 3 checks fail: 3.1, 3.2, 3.7

---

## Category 4 — PAGE STRUCTURE

**Navigation sequence from docs.json lines 2930–2933:**
- PREV: None (first in monitoring-and-tooling section)
- CURRENT: `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox`
- NEXT: `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations`

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: orient the orchestrator to available monitoring tools. One audience: orchestrator. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator identify the right tool for any monitoring or verification task." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | No prior page. Next is `explorer-operations`. This page introduces Explorer and links to it explicitly — correct handoff. Nav sequence read from docs.json lines 2930–2933. |
| 4.4 | No dead ends | PASS | Closing CardGroup links to Explorer Operations and Metrics & Alerting. |
| 4.5 | Prerequisites stated or linked | PASS | Opening assumes "Your node is running" — appropriate for an operate-purpose reference page. |
| 4.6 | Out-of-scope is clear | PASS | Note component (line 77–79) explicitly scopes Explorer. Warning component scopes tools.livepeer.cloud availability. |
| 4.7 | Information type per section correct | PASS | `purpose: reference` permits primary: `factual`, `technical`; secondary: `structural`. Sections are factual/structural tool descriptions with technical code blocks. Appropriate. |
| 4.8 | No content duplication from adjacent sections | INFO | Prometheus flags and Docker stack details overlap with `metrics-and-alerting.mdx`. This page positions itself at discovery level — acceptable. Monitor for drift. |
| 4.9 | Section orientation page present | PASS | This IS the orientation page for monitoring-and-tooling. |
| 4.10 | Cross-tab links at journey intersections | INFO | All links stay within the orchestrators tab. No cross-tab links present. For an operate-purpose page, at least one cross-tab link (e.g. to Explorer on About tab for protocol context) would strengthen the journey. Not a hard fail at single-page level. |

**Category 4 verdict: PASS** — No checks fail. 2 INFO items noted.

---

## Category 5 — LAYOUT & COMPONENTS

**Component inventory:**
- `StyledTable`, `TableRow`, `TableCell` — imported from `/snippets/components/wrappers/tables/Tables.jsx`
- `CustomDivider` — imported from `/snippets/components/elements/spacing/Divider.jsx`
- `CardGroup`, `Card` — Mintlify native
- `Note`, `Warning` — Mintlify native

**Dead import check (P9):**
- `StyledTable`, `TableRow`, `TableCell` — used in 3 tables. PASS.
- `CustomDivider` — used between sections (5 instances). PASS.
No dead imports.

**Component-vs-matrix cross-reference (P8):**
`pageType: reference` per `docs-guide/policies/component-layout-decisions.mdx` (read at lines 34–48):
- Required sections: `Reference` — present (Tool selection guide table). PASS.
- Preferred: `ParamField`, `ResponseField`, `CodeGroup`, `Tabs`, `Table`
- Avoid: TODO/TBD/Coming Soon

| Component used | In preferred list? | Assessment |
|---|---|---|
| `StyledTable`/`TableRow`/`TableCell` | Table (custom wrapper) | Within spirit of preferred `Table`. PASS. |
| `CardGroup`, `Card` | Not listed | Used for navigation handoffs at section end — technically outside preferred list. MEDIUM flag. |
| `Note` | Not listed | Standard Mintlify primitive used appropriately. INFO flag. |
| `Warning` | Not listed | Used appropriately for community-infrastructure caveat. INFO flag. |
| `CustomDivider` | Not listed | Purely presentational section separator. INFO flag. |

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | Reference page uses structured lookup format with tables. |
| 5.2 | Required sections present | PASS | `Reference` section present (Tool selection guide table). |
| 5.3 | Only approved components used | FAIL | `CardGroup`/`Card` not in preferred list for `reference` per component-layout-decisions.mdx (read). `Note`, `Warning`, `CustomDivider` also not listed. Approval file was read before flagging (P22). |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, Coming Soon, or PreviewCallout in rendered content. `{/* Draft note */}` and `{/* FACT CHECK */}` are MDX comments — not rendered. PASS. |
| 5.5 | Information type → component mapping correct | PASS | Factual/reference content in tables. Navigation links in Cards. Appropriate mapping. |
| 5.6 | MDX renders clean | PASS (assessed) | Imports resolved, JSX well-formed, no unclosed tags visible. Cannot fully verify without rendering. |
| 5.7 | No old-schema frontmatter | PASS | No 12-type pageType, no deprecated purpose aliases, no old audience tokens. |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex values or inline JS theme switching visible. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | PASS | PascalCase names, correct import paths from semantic subdirectories. |

**Category 5 verdict: FAIL** — 1 check fails: 5.3

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Location | Info Type | Status | Source |
|---|---|---|---|---|
| "top 100 active orchestrators receive transcoding work" | Line 53 (Card) | factual | UNVERIFIED | FACT CHECK comment present — Mehrdad/Rick to confirm |
| Explorer reads from Arbitrum subgraph | Line 43 | technical | UNVERIFIED | Explorer source / go-livepeer |
| AI performance leaderboard on Explorer | Line 75 (comment) | factual | UNVERIFIED | FACT CHECK: "Rick to confirm" |
| `-monitor` enables `/metrics` on port 7935 | Line 119 | technical | NOT-TESTED | go-livepeer CLI source |
| `livepeer/monitoring:latest` Docker image | Lines 139, 148 | technical | UNVERIFIED | Docker Hub / livepeer-monitoring repo |
| Livepeer Forum URL accessible | Line 193 (comment) | factual | UNVERIFIED | FACT CHECK: forum confirmed offline March 2026 |
| `tools.livepeer.cloud` AI capabilities URL | Line 205 | technical | UNVERIFIED | Live URL |
| Three Dune dashboard URLs | Lines 226–236 | factual | UNVERIFIED | FACT CHECK comment present |
| `livepeer/stream-tester` repo active | Line 250 (Card) | technical | UNVERIFIED | GitHub |
| `mikezupper/livepeer-ai-job-tester` maintained | Line 254 (Card) | technical | UNVERIFIED | FACT CHECK: Cloud SPE to confirm |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | 5 active `{/* FACT CHECK */}` inline comments signal unverified claims. Explorer AI leaderboard, Dune dashboard URLs, ai-job-tester repo, forum URL — all pending SME confirmation. |
| 6.2 | Code/commands tested | NOT-TESTED | `-monitor` flag and Docker run commands not testable from static review. Mark for live system testing before publication. |
| 6.3 | No deprecated API usage | PASS (assessed) | No removed flag names or deprecated endpoints visible. `livepeer/monitoring:latest` tag staleness risk flagged separately (6.8). |
| 6.4 | Numbers are real | FAIL | "top 100" confirmed unverified per inline FACT CHECK comment. Port `7935` is a known default. |
| 6.5 | REVIEW flags for unverified claims | PASS | `{/* FACT CHECK */}` comments used throughout — functionally equivalent to `{/* REVIEW */}`. Claims are flagged. |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent. With 5 unverified FACT CHECK comments, correct value is `unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references on this page. |
| 6.8 | Source staleness check | FAIL | `livepeer/monitoring:latest` tag unverified for currency. Dune dashboard URLs unverified. Forum URL confirmed offline. Three external tools unverified for maintained status. |

**Category 6 verdict: FAIL** — 4 checks fail: 6.1, 6.4, 6.6, 6.8

---

## Category 7 — NAVIGATION & IA

**docs.json confirmation (P47 — full path match):**
`"v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox"` confirmed at docs.json line 2930.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Full path confirmed at docs.json line 2930. |
| 7.2 | Navigation matches file system | PASS | File at correct path matches docs.json entry. |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check — not assessed at individual page level. |
| 7.4 | No structural orphans | PASS | In docs.json, reachable from navigation. |
| 7.5 | Audience journey complete | PASS | First in monitoring-and-tooling. Routes to deeper tool-specific pages. |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` — publishable lane. |
| 7.8 | File naming conventions | PASS | `operator-toolbox.mdx` — no deprecated prefix. Correct naming pattern. |
| 7.9 | _workspace/ TTL compliance | N/A | Not a workspace file. |

**Category 7 verdict: PASS** — No checks fail.

---

## Category 8 — LINKS & RENDERING

**Internal link verification (P7, P47 — full path match against docs.json):**

| Link in page | Full path checked | docs.json line | Result |
|---|---|---|---|
| `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | 2932 | PASS |
| `/v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | 2931 | PASS |

**External links (assessed — live verification required pre-publication):**

| URL | Status |
|---|---|
| `https://explorer.livepeer.org` | Live (well-known) |
| `https://github.com/livepeer/livepeer-monitoring` | NOT-TESTED |
| `https://github.com/livepeer/stream-tester` | NOT-TESTED |
| `https://github.com/mikezupper/livepeer-ai-job-tester` | UNVERIFIED — FACT CHECK comment present |
| Dune dashboard URLs (3) | UNVERIFIED — FACT CHECK comment present |
| `https://tools.livepeer.cloud` | NOT-TESTED |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | Both internal links verified against docs.json with full path match. |
| 8.2 | All external links live | NOT-TESTED | External links not verified via live fetch. FACT CHECK comments flag unverified URLs. Forum confirmed offline. |
| 8.3 | All snippet imports resolve | PASS | `Tables.jsx` and `Divider.jsx` are standard library components used across the codebase. |
| 8.4 | All images load | N/A | No body images. OG image path is standard across orchestrator pages. |
| 8.5 | Page renders without error | PASS (assessed) | No JSX errors, unclosed tags, or import issues visible. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | `{/* Draft note */}` and `{/* FACT CHECK */}` are MDX comments — not rendered in output. |

**Category 8 verdict: PASS** — No checks fail. External link verification required before publication.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off. `status: published` with 5 open FACT CHECK comments and missing `veracityStatus` indicates premature publication status. |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions unique to this page. D-NAV-01 not applicable. |
| 9.3 | Gate prerequisites met | FAIL | Per tab-status.md: Orchestrators tab — IA Approved: Draft only, Terminology: No, Content Pass Open: No. Page should not be in `status: published`. |
| 9.4 | Phase ordering respected | INFO | Cannot verify from static review. |
| 9.5 | Findings gathered before fixes | INFO | Cannot verify from static review. |
| 9.6 | Feedback routed | INFO | Cannot verify from static review. |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

**CC-1: Missing fields + status coherence (checks 1.1, 1.6, 1.7, 1.8, 9.1, 9.3)**
Root cause: page was marked `status: published` before veracity pass and gate prerequisites were met. Fix: add missing frontmatter fields including `veracityStatus: unverified`, and review `status` value.

**CC-2: Veracity gaps + external links (checks 6.1, 6.4, 6.6, 6.8, 8.2)**
5 open FACT CHECK comments drive the unverified veracityStatus and the external link NOT-TESTED finding. One veracity pass with SME sign-off resolves all.

**CC-3: Heading quality + em-dash in description (checks 1.11, 3.1, 3.2, 3.7)**
Em-dash in `description` field is a P30 and 1.11 violation. Heading review should batch with description fix.

**CC-4: Component approval (check 5.3)**
Independent. Low priority. CardGroup/Card usage at section boundaries is functionally appropriate and widespread across the codebase.

---

## Blocking Decisions

None. All fixes are actionable without human structural decision.

---

## Verdict Summary

**Overall: NEEDS WORK**

**18 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.7, 5.3, 6.1, 6.4, 6.6, 6.8, 9.1, 9.3**

---

## Prioritised Fix List

**F-01** — CRITICAL — Add missing required frontmatter fields
Affects: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10
Add to frontmatter (all values proposed — confirm before applying):
```yaml
complexity: intermediate
lifecycleStage: operate
veracityStatus: unverified
industry: [technical, livepeer]
niche: [infrastructure, web3]
```

**F-02** — HIGH — Fix description field (length + em-dash)
Affects: 1.11, P30
Current: 191 chars, contains em-dash.
Proposed (159 chars — confirm before applying): `Tools for monitoring and operating your Livepeer orchestrator: Explorer, Prometheus metrics, Docker monitoring stack, Dune dashboards, and capability testing.`

**F-03** — HIGH — Remove em-dashes from visible body text (P30)
Affects: P30 (Category 2 Banned Construction Scan)
Location 1, line 57 Card description: `"Missed rounds mean lost inflation — for you and your delegators."`
Fix: `"Missed rounds mean lost inflation: you and your delegators both miss their share."`
Location 2, line 71 body: `"Your published reward cut and fee share — verify these match what you configured on-chain"`
Fix: `"Your published reward cut and fee share. Verify these match what you configured on-chain."`

**F-04** — HIGH — Resolve 5 open FACT CHECK comments before publication
Affects: 6.1, 6.4, 6.8, 8.2
1. Explorer AI performance leaderboard — Rick to confirm live/functional post-RaidGuild engagement
2. Livepeer Forum URL — confirmed offline; remove or replace with alternative link
3. Three Dune dashboard URLs — verify public/current before publication
4. `mikezupper/livepeer-ai-job-tester` repo — Cloud SPE to confirm maintained and compatible

**F-05** — HIGH — Review `status` field (P39 logic)
Affects: 9.1, 9.3
`status: published` is inconsistent with `veracityStatus: unverified` and open FACT CHECK comments. Consider changing to `status: draft` until veracity pass completes.

**F-06** — MEDIUM — Replace weak keywords (check 1.13)
Affects: 1.13
Remove: `livepeer`, `orchestrator`, `monitoring`, `tools`, `metrics`
Add: `"livepeer prometheus monitoring setup"`, `"orchestrator active set verification"`, `"go-livepeer metrics endpoint"`, `"livepeer docker monitoring stack"`, `"dune livepeer analytics dashboard"`

**F-07** — MEDIUM — Rename weak headings (checks 3.1, 3.2, 3.7)
Affects: 3.1, 3.2, 3.7
"Docker monitoring stack (fastest setup)" → `"Docker Monitoring Stack"` (remove marketing qualifier)
"Custom Prometheus setup" → `"Custom Prometheus Configuration"` (reaches 20/25)
"Tool selection guide" → `"Diagnostic Tool Reference"` (removes weak "guide" descriptor)
Note: none of the proposed replacements use Banned-tier or Avoid-tier standalone terms (P18 validated).

**F-08** — LOW — Component approval for layout pass (check 5.3)
Affects: 5.3
`CardGroup`/`Card` not in preferred list for `reference` pageType. Flag for layout pass review. Do not block publication.
