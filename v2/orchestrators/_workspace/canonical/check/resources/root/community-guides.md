# Per-Page Quality Check Report
## `v2/orchestrators/resources/community-guides.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (line 2971 — CONFIRMED IN NAV, under "Resources" group)
**Learnings applied:** P1–P90

---

## Pre-Check: File Integrity

Lines 1–10 read. File opens with `---` frontmatter delimiter at line 1. No content before the opening delimiter.

No corrupt prefix detected.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | `Community Guides & Tutorials` | PASS | Well-formed |
| sidebarTitle | Yes | `Community Guides` | PASS | Appropriate short form |
| description | Yes | `'Curated external tutorials, video walkthroughs, and community-maintained resources for Livepeer orchestrators — from setup through advanced operations.'` | FAIL | Contains em-dash (U+2014) at `orchestrators —` — P30/check 1.11 violation |
| pageType | Yes | `reference` | PASS | Valid 7-type canonical value |
| audience | Yes | `orchestrator` | PASS | Valid 7-token value |
| purpose | Yes | `reference` | PASS | Valid 15-value canonical set — read directly from file (P15) |
| complexity | No | — | FAIL | Required field missing |
| lifecycleStage | No | — | FAIL | Required field missing |
| keywords | Yes | 12 entries incl. `livepeer`, `orchestrator`, `community`, `tutorials`, tool names | BORDERLINE | Present; quality issue noted at check 1.13 |
| og:image block | Yes | All 5 OG fields present, path `/snippets/assets/site/og-image/en/orchestrators.png` | PASS | Complete; asset confirmed on disk |
| veracityStatus | No | — | FAIL | Required field missing |
| industry | No | — | FAIL | Required — user-confirmed Batch 1 (P41) |
| niche | No | — | FAIL | Required — user-confirmed Batch 1 (P41) |
| status | Yes | `review` | FAIL | Invalid enum. Valid values: `current`, `draft` only (P57) |

**Required field count:** 7/10 present (missing: `complexity`, `lifecycleStage`, `veracityStatus`)
**Additional required fields missing:** `industry`, `niche`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is valid |
| 1.3 | `pageVariant` valid if present | N/A | Not present; no deprecated pageType migration active |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` — read directly from file |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: review` is also wrong enum. Correct atomic fix (P84): change `status: review` to `status: draft` AND add `veracityStatus: unverified`. Do not keep `status: current` (not applicable here — current value is `review` which is wrong enum regardless). |
| 1.9 | `industry` array valid if present | FAIL | Field absent — required (P41). Proposed: `industry: [technical, business]` — confirm before applying (P51) |
| 1.10 | `niche` array valid if present | FAIL | Field absent — required (P41). Proposed: `niche: [web3, infrastructure]` — confirm before applying (P51) |
| 1.11 | `description` well-formed | FAIL | Em-dash (—) at `"orchestrators — from setup"`. P30/P74 violation. Otherwise: 157 chars (within 160), subject-first, UK English — all pass |
| 1.12 | OG image block complete | PASS | All 5 OG fields present; asset confirmed on disk |
| 1.13 | `keywords` field quality | BORDERLINE | Generic terms `livepeer`, `orchestrator`, `community` are weak per check 1.13. Tool-specific terms (Titan Node, Prometheus, Grafana) are stronger candidates. Human review recommended. |

**Category 1 verdict: 7 FAILs (1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11)**

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — candidates listed even when PASS):**

Candidates checked: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`.

- Line 56: "Community-maintained guides, tutorials, and resources..." — none found
- Line 279: "The primary community support channel for orchestrators is Discord." — none found
- All table cell text: scanned — none found
- `significant`, `various`, `several` — absent from all visible text

No banned words found.

**Banned phrase scan:**

- "This section covers" / "This page covers/explains" — absent
- "rather than" — absent
- "and so on" / "etc." — absent
- "not just X" — absent

No banned phrases found.

**Banned Construction Scan (P58 — completed before check 2.4 result set):**

Scope: body prose, headings, description field, table cells, card titles, Note/Warning/Tip text, component props.

Em-dash scan (P74 — three explicit scan targets):
1. `description` field (line 4): `"orchestrators — from setup through advanced operations"` — em-dash present — FAIL (P30, tracked in F-02)
2. H2/H3 heading text: Setup & Installation, AI Workloads, Monitoring & Operations, Economics & Strategy, Pool Operators & Workers, Video & Educational Content, Developer & Research Resources, Discord & Forum — no em-dashes found
3. Body prose line 56: `"These are not maintained by the Livepeer Foundation — verify currency before following instructions."` — em-dash present — FAIL (P30, tracked in F-07)

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 4 | `orchestrators — from setup through advanced operations` | em-dash | P30 violation (description field) | YES — F-02 |
| 56 | "These are not maintained by the Livepeer Foundation — verify currency before following instructions." | em-dash | P30 violation (body prose) | YES — F-07 |
| 56 | "These are not maintained by the Livepeer Foundation" | `not maintained` | Secondary clause; not a primary `not [X]` value statement | PASS |
| 59 | "Have a guide to add? Open a PR or post in the Livepeer Forum." | — | Rhetorical call to action | PASS |

No `can/may/could/might` value claims. No `if [condition]` in body prose. No `This page [verb]` opener (opens with "Community-maintained guides..." — line 56). No `rather than`. No `That means`/`This shows`.

Per P62: em-dashes alone are not check 2.4 violations. Check 2.4 result is PASS. Em-dashes tracked under P30 — see F-02, F-07 in fix list.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings detected: `curated`, no `-ize` endings, no `behavior`/`color` patterns |
| 2.2 | Zero banned words | PASS | None found (P24 scan above) |
| 2.3 | Zero banned phrases | PASS | None found |
| 2.4 | Zero banned constructions | PASS | No banned construction patterns found. Em-dashes tracked under P30 — see F-02, F-07. Not a check 2.4 violation per P62. |
| 2.5 | Opening order correct | PASS | Opens with subject: "Community-maintained guides, tutorials, and resources for Livepeer orchestrators." Fact first, no caveat opener |
| 2.6 | Paragraph discipline | PASS | Discord & Forum section has clean lead sentence; ends on concrete next steps |
| 2.7 | Audience register correct | PASS | Peer-technical register appropriate for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found |
| 2.9 | No passive value statements | PASS | No vague value claims; all descriptions are concrete |
| 2.10 | No hedging openers | PASS | Opens with concrete statement, no disclaimer opener |
| 2.11 | Terminology locked and consistent | PASS | `pool worker`, `orchestrator`, `active set`, `LPT` used consistently |

**Category 2 verdict: 0 FAILs**

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading Score Table (P2 — per-dimension breakdown):**

Note: "Related Pages" exemption applies only to exact heading text "Related Pages" (P16, P53). "See Also" is Banned-tier and is scored and checked normally.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Setup & Installation | 4 | 3 | 4 | 5 | 5 | 21/25 |
| AI Workloads | 4 | 4 | 4 | 5 | 5 | 22/25 |
| Monitoring & Operations | 4 | 3 | 4 | 5 | 4 | 20/25 |
| Economics & Strategy | 4 | 3 | 4 | 5 | 4 | 20/25 |
| Pool Operators & Workers | 5 | 4 | 5 | 5 | 4 | 23/25 |
| Video & Educational Content | 3 | 2 | 3 | 4 | 4 | 16/25 — FAIL |
| Developer & Research Resources | 3 | 3 | 3 | 4 | 3 | 16/25 — FAIL |
| Discord & Forum | 5 | 3 | 5 | 5 | 5 | 23/25 |
| See Also | 1 | 1 | 1 | 2 | 3 | 8/25 — FAIL |

Failing headings: `Video & Educational Content` (16/25), `Developer & Research Resources` (16/25), `See Also` (8/25).
Multiple heading failures = one check 3.1 FAIL (P85).

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | `Video & Educational Content` 16/25, `Developer & Research Resources` 16/25, `See Also` 8/25 — all fail threshold. One check ID, three sub-findings (P85) |
| 3.2 | No banned or weak standalone heading terms | FAIL | `See Also` is explicitly Banned-tier per checks.mdx §3.2. P53: "Related Pages" is the only exempt heading — `See Also` is not exempt |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | All headings interpretable in isolation for this resource aggregator page |
| 3.5 | Heading names concept, not examples | PASS | Headings categorise by domain, not by tool names |
| 3.6 | Title well-formed | PASS | "Community Guides & Tutorials" — concept-derived, no banned forms |
| 3.7 | Sounds like expert editorial choice | BORDERLINE | `Video & Educational Content` and `Developer & Research Resources` read as generic category labels, not expert editorial choices. `Video Walkthroughs` and `Open Source & Data` would be stronger. Human decision required. |

**Category 3 verdict: 2 FAILs (3.1, 3.2)**

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | One audience: orchestrators. One job: find curated external community resources |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator find curated external community resources, tutorials, and tools." — resolves cleanly |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json position: after `glossary` (line 2970), before `community-pools` (line 2972). Reader arriving from Glossary needs no prerequisite knowledge to use this page. Reader leaving to Community Pools has appropriate context. Sequence confirmed from docs.json (P25). |
| 4.4 | No dead ends | PASS | Every section links outward to resources; "See Also" card group provides internal navigation |
| 4.5 | Prerequisites stated or linked | PASS | Line 56 Note flags community-maintained nature — sufficient for a resource aggregator |
| 4.6 | Out-of-scope is clear | PASS | Implicit from page structure; aggregator scope is clear |
| 4.7 | Information type per section correct | PASS | `purpose: reference` — structural/reference content throughout is appropriate |
| 4.8 | No content duplication from adjacent sections | PASS | No duplication with Glossary or Community Pools adjacent pages |
| 4.9 | Section orientation page present | N/A | Page-level check only |
| 4.10 | Cross-tab links at journey intersections | PASS | 4 cross-tab links confirmed: `v2/developers/build/model-support`, `v2/developers/build/byoc`, `v2/developers/resources/awesome-livepeer`, `v2/community/livepeer-connect/events-and-community-streams` |

**Category 4 verdict: 0 FAILs**

---

## Category 5 — LAYOUT & COMPONENTS

For `pageType: reference` — Preferred: ParamField, ResponseField, CodeGroup, Tabs, Table. Avoid: TODO/TBD/Coming Soon. Required: Reference section.

Note: `component-layout-decisions.mdx` not read in this session. Results based on quick-reference matrix from checks.mdx §5 (P72).

**Component Matrix:**

| Component | Used? | Appropriate for `reference`? | Notes |
|---|---|---|---|
| StyledTable | Yes | YES — Table is preferred for reference | Used across all content sections |
| TableRow / TableCell | Yes | YES — Part of StyledTable | — |
| CustomDivider | Yes | YES — structural spacing, not in avoid list | — |
| Note | Yes | YES — informational callout | — |
| CardGroup | Yes | YES — not in avoid list for reference | Used in "See Also" section |
| Card | Yes | YES — navigation | — |

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | `reference` with table-based sections — appropriate |
| 5.2 | Required sections present | PASS | Reference content present throughout (tables of resources by category) |
| 5.3 | Only approved components used | PASS | All components appropriate per quick-reference matrix |
| 5.4 | Avoided components absent | PASS | Lines 29–51: `{/* TODO: ... */}` is an MDX comment — not rendered. Not a check 5.4 violation (P78). No rendered TODO/TBD/Coming Soon components present. |
| 5.5 | Information type to component mapping | PASS | Reference content → Tables; navigation → CardGroup |
| 5.6 | MDX renders clean | PASS | Imports resolve; JSX structure correct; no unclosed tags visible |
| 5.7 | No old-schema frontmatter | FAIL | `status: review` is not a valid enum value — wrong enum error (P57). Root cause shared with check 1.8 (P80 — still listed here) |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS or hardcoded colours |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct relative paths |

**Category 5 verdict: 1 FAIL (5.7)**

---

## Category 6 — VERACITY

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | NOT-TESTED | External URLs (livepeer.cloud, forum.livepeer.org, speedybird.xyz, livepeer.tools, titannode.io, videominer.org, livepool.io, stronk-tech GitHub, thegraph.com subgraph) not verified in this session. Human spot-check required. |
| 6.2 | Code/commands tested | N/A | No code blocks on this page |
| 6.3 | No deprecated API usage | N/A | No API references |
| 6.4 | Numbers are real | PASS | No specific numbers present. LPT stake threshold correctly redirected to live Explorer rather than a hardcoded figure |
| 6.5 | REVIEW flags for unverified claims | FAIL | No `{/* REVIEW: [claim] — [source] */}` flags present. The `{/* TODO */}` block (lines 29–51) does not satisfy check 6.5 format requirements (P61). Forum post dated "2021" (line 79) and all community tool URLs are unverified claims with no REVIEW flags |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: review` is wrong enum. Given unverified external links, correct value is `unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Community tool URLs (Speedy Bird, livepeer.tools, Titan Node, Video Miner, LivePool) have no staleness marker. Forum post "Forum (2021)" flagged — 5-year-old post. Staleness tier: MEDIUM (community tools change occasionally, P77) |
| 6.9 | No open-ended research tasks | FAIL | `{/* TODO */}` block (lines 29–51) contains tasks with no named source or responsible person: "Ensure authoring skill is used to validate page style/copy" — no deadline, no assignee, no source. Both check 6.9 FAIL and check 6.5 FAIL (P70) |

**Category 6 verdict: 4 FAILs (6.5, 6.6, 6.8, 6.9) — 1 NOT-TESTED (6.1) — not counted in FAIL total (P59)**

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed at line 2971 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry exactly |
| 7.3 | Tab entry portal routes to all sections | N/A | Page-level check |
| 7.4 | No structural orphans | PASS | Reachable via Resources group |
| 7.5 | Audience journey complete | PASS | Appropriate position: after Glossary, before Community Pools — aggregator page fits between reference resources |
| 7.6 | Cross-tab graduation paths exist | PASS | Cross-tab links to developers and community tabs present |
| 7.7 | File in correct lane | PASS | Publishable content in `v2/orchestrators/resources/` |
| 7.8 | File naming conventions | PASS | `community-guides.mdx` — standard filename, no problematic prefix |
| 7.9 | _workspace/ TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: 0 FAILs**

---

## Category 8 — LINKS & RENDERING

Internal link verification (filesystem check — P7):
- `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — EXISTS
- `/v2/developers/build/model-support` — EXISTS
- `/v2/developers/build/byoc` — EXISTS
- `/v2/orchestrators/guides/advanced-operations/pool-operators` — EXISTS
- `/v2/orchestrators/guides/deployment-details/join-a-pool` — EXISTS
- `/v2/developers/resources/awesome-livepeer` — EXISTS
- `/v2/community/livepeer-connect/events-and-community-streams` — EXISTS
- `/v2/orchestrators/resources/faq` — EXISTS
- `/v2/orchestrators/resources/community-pools` — EXISTS
- `/v2/orchestrators/resources/technical/cli-flags` — CONFIRMED in docs.json line 2976
- `/v1/orchestrators/guides/gateway-introspection` — EXISTS
- `/v1/delegators/guides/yield-calculation` — EXISTS
- Snippets: `Tables.jsx`, `Divider.jsx` — both EXIST on disk

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 13 internal links verified — all resolve |
| 8.2 | All external links live | NOT-TESTED | External links (livepeer.cloud, forum.livepeer.org, github.com/livepeer/comfystream, speedybird.xyz, livepeer.tools, titannode.io, videominer.org, livepool.io, stronk-tech GitHub, youtube.com, thegraph.com subgraph URL) not verified in this session |
| 8.3 | All snippet imports resolve | PASS | Tables.jsx and Divider.jsx both confirmed on disk |
| 8.4 | All images load | PASS | OG image `/snippets/assets/site/og-image/en/orchestrators.png` confirmed on disk |
| 8.5 | Page renders without error | PASS | No unclosed tags, correct JSX structure, all imports resolve |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | `{/* TODO */}` block is an MDX comment — not rendered (P78). No rendered placeholder content present. |

**Category 8 verdict: 0 FAILs — 1 NOT-TESTED (8.2) — not counted in FAIL total (P59)**

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human review sign-off. `status: review` (wrong enum) and TODO block at lines 29–51 indicate this page has not been formally approved |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions (deprecations, merges) consumed by this page require registry entries |
| 9.3 | Gate prerequisites met | FAIL | Wrong-enum `status`, missing required frontmatter fields, and TODO block indicate content-pass gate not met |
| 9.4 | Phase ordering respected | N/A | Cannot determine from page state alone |
| 9.5 | Findings gathered before fixes | N/A | Not evaluable from page state |
| 9.6 | Feedback routed | N/A | Not evaluable from page state |

**Category 9 verdict: 2 FAILs (9.1, 9.3)**

---

## Spelling/Typo Check

All visible text scanned: headings, table cells, link text, prose, card descriptions, Note text.

- Titan Node, Video Miner, Daydream, ComfyStream, Speedy Bird, Stronk-Tech — all correctly spelled
- "OrchestratorSiphon" (line 149) — compound proper noun, correct
- "aiModels.json" (line 75) — technical filename, correct
- All headings: no typos detected

No typos found.

---

## Cross-Category Connections

**Root Cause A:** `status: review` (wrong enum) + missing `veracityStatus` — incoherent state
Affects: 1.1, 1.8, 5.7, 9.1, 9.3
Fix: F-01 (atomic: change `status` to `draft` AND add `veracityStatus: unverified`)

**Root Cause B:** Em-dash in description field (line 4) and body prose (line 56)
Affects: 1.11, Cat 2 P30 prohibition
Fix: F-02 (description), F-07 (prose)

**Root Cause C:** Missing required fields (`complexity`, `lifecycleStage`, `industry`, `niche`)
Affects: 1.1, 1.6, 1.7, 1.9, 1.10
Fix: F-03, F-04

**Root Cause D:** TODO block (lines 29–51) — open-ended tasks, no owner, wrong format
Affects: 6.5, 6.9, 9.1, 9.3
Fix: F-08

**Root Cause E:** `See Also` heading — Banned-tier, low score
Affects: 3.1, 3.2
Fix: F-05

---

## Verdict Summary

**Total FAIL count:** 16
**FAIL check IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 5.7, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3

**PASS count:** 34
**BORDERLINE count:** 2 (1.13, 3.7)
**NOT-TESTED count:** 2 (6.1, 8.2) — not counted in FAIL total (P59)

**Overall verdict: NEEDS WORK**

---

## Fix List

**F-01** — Change `status: review` to `status: draft` AND add `veracityStatus: unverified` (atomic fix, P84). Apply both changes together. Resolves: 1.8, 5.7.
```
status: draft
veracityStatus: unverified
```

**F-02** — Remove em-dash from frontmatter `description` field (check 1.11, P30, P74). Proposed replacement (P75 self-check: no em-dash, no banned words, UK English — passes):
```
description: 'Curated external tutorials, video walkthroughs, and community-maintained resources for Livepeer orchestrators, from setup through advanced operations.'
```

**F-03** — Add missing required frontmatter fields `complexity` and `lifecycleStage` (checks 1.6, 1.7). Proposed — confirm before applying (P51):
```
complexity: intermediate
lifecycleStage: operate
```

**F-04** — Add missing required frontmatter fields `industry` and `niche` (checks 1.9, 1.10, P41). Proposed — confirm before applying (P51):
```
industry: [technical, business]
niche: [web3, infrastructure]
```

**F-05** — Rename `## See Also` heading (checks 3.1, 3.2). `See Also` is Banned-tier per checks.mdx §3.2; only "Related Pages" is exempt (P53). Proposed: `## Related Pages`. Confirm before applying.

**F-06** — Refactor two headings scoring below 20/25 (check 3.1 sub-findings):
- `## Video & Educational Content` (16/25) → proposed: `## Video Walkthroughs` — confirm before applying (P75 self-check: no banned terms, not in avoid list — passes)
- `## Developer & Research Resources` (16/25) → proposed: `## Open Source & Data` — confirm before applying (P75 self-check: passes)

**F-07** — Remove em-dash from body prose at line 56 (P30, P74). Current: `"These are not maintained by the Livepeer Foundation — verify currency before following instructions."` Proposed (P75 self-check: no em-dash, no banned words — passes): `"These are not maintained by the Livepeer Foundation. Verify currency before following instructions."`

**F-08** — Convert or resolve the TODO block at lines 29–51 (checks 6.5, 6.9, P70). `{/* TODO */}` format does not satisfy check 6.5; tasks have no named owner. Action required: (a) convert open veracity items to `{/* REVIEW: [specific claim] — verify against [source]. [Name] to confirm. */}` format, or (b) resolve items and remove the block. Human task — cannot be resolved by agent alone.

**F-09** — Add `{/* REVIEW: */}` flags for unverified external link currency (check 6.5). Specific items: the 2021 Forum post (line 79) and community tool URLs (Speedy Bird, livepeer.tools, Titan Node, Video Miner, LivePool). Required format: `{/* REVIEW: [URL] — verify still active and content current. [Name] to confirm. */}`

**F-10** — Add staleness notation for community tool links (check 6.8, P77). Staleness tier: MEDIUM (community tools change occasionally). Recommend adding a periodic-review note in the page footer or a REVIEW comment block near the community tool table rows.

**F-11** — Obtain and record human sign-off before page can advance (check 9.1). The `status: draft` from F-01 correctly signals this is not yet approved.
