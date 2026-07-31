# Review: applications.mdx

**Page**: `v2/developers/learn/applications.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A2 (re-dispatch)
**pageType (from frontmatter)**: concept
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: explain
**Bytes**: 5,318
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Most present; `veracityStatus` missing — page uses old-schema `status: draft` (line 22). OG image block absent entirely |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | line 20: `pageType: concept` |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | not present |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | line 9: `purpose: explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | line 21: `audience: developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | line 8: `complexity: beginner` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | line 7: `lifecycleStage: discover` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Absent. Page has `status: draft` (line 22) which is non-canonical |
| 1. Frontmatter | 1.9 | industry array | N/A | not present |
| 1. Frontmatter | 1.10 | niche array | N/A | not present |
| 1. Frontmatter | 1.11 | description ≤160, subject-first | MIXED | Subject-first PASS (starts "A decision guide..."). Length 119 chars PASS. BUT the description is for "running your own gateway" not for "applications on Livepeer" — describes a different page |
| 1. Frontmatter | 1.12 | OG image block complete | FAIL | All 5 OG fields absent from frontmatter |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | `gateway`, `self-host`, `AI gateway`, `off-chain`, `cost` specific; `livepeer`, `developer`, `graduation`, `decision` generic |
| 1. Frontmatter | 1.14 | developer/builder split honoured | FAIL | Page is titled "Applications on Livepeer" but content is gateway self-hosting decision-matrix. Register and content mismatch the audience token's expected concern (composing apps, not deciding to self-host) |
| 2. Voice & Copy | 2.1 | UK English | PASS | grep clean |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | grep clean |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | grep clean |
| 2. Voice & Copy | 2.4 | Zero banned constructions | FAIL | line 83: "If you are ready to self-host... If you are not sure yet..." — two conditional gatekeepers in one sentence |
| 2. Voice & Copy | 2.5 | Opening order | PASS | line 28 opens "Livepeer applications combine..." subject-first |
| 2. Voice & Copy | 2.6 | Paragraph discipline | MIXED | Intro paragraph line 28 packs three jobs: define apps, define page purpose, name three audiences |
| 2. Voice & Copy | 2.7 | Audience register | FAIL | Title sets "applications" but body is "self-hosting decision" — register matches a different audience than the title implies |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | grep clean |
| 2. Voice & Copy | 2.13 | Entity-led voice | MIXED | Section intros mostly OK ("The practical path...", "This checklist..."). Page closer line 83 leads with "If you are ready..." — gatekeeper opening |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | FAIL | line 75: `**Video Gateway (on-chain broadcaster)**` — explicitly uses deprecated term "broadcaster" as a parenthetical synonym for Gateway. Check 2.16 disallows |
| 2. Voice & Copy | 2.17 | Universal terms consistent | MIXED | "Gateway" capitalised inconsistently — body uses "Gateway" (line 34, 36, 39), then "Gateways" lowercase in nav (line 50) |
| 2. Voice & Copy | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology | PASS | |
| 2. Voice & Copy | 2.21 | First-use definition | MIXED | "TicketBroker" not used. "BYOC" not defined on this page (mentioned only in description line 6); not a hard fail if Learn assumes prereq |
| 2. Voice & Copy | 2.22 | Terminology lock | PASS | |
| 2.D | 2.D1 | Code-first opening | N/A | concept page |
| 2.D | 2.D2 | API in prose has code/link | N/A | No API surfaces in prose |
| 2.D | 2.D3 | Versions explicit | FAIL | "go-livepeer Binary" line 61 — no version pin. `livepeer/go-livepeer:master` Docker tag is `master` (worst possible version pin — moving target) |
| 2.D | 2.D4 | Errors in main content | N/A | |
| 2.D | 2.D5 | No self-evident code commentary | N/A | No code blocks |
| 2.D | 2.D6 | No marketing adjacent | PASS | |
| 2.D | 2.D7 | Note not used for primary content | FAIL | line 77 `<Note>` carries the canonical relationship between public/Studio/self-hosted gateway — that's primary architectural content, not adjacent context. Also line 52 `<Warning>` is correctly placed |
| 3. Headings | 3.1 | Score ≥20/25 each | FAIL | Multiple headings fail — see Heading Score Table |
| 3. Headings | 3.2 | No banned/weak terms | MIXED | line 32: "Running Your Own Gateway" — not banned but uses Title Case (US-style). line 70: "The Two Gateway Types" — Title Case. line 86: "Next steps" — sentence-case but listed in 3.2 as Avoid (-3 to Precision) |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | All headings include "Gateway" |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | FAIL | "Applications on Livepeer" — concept-derived but mismatches body (body is about gateways, not applications) |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | Title Case mid-page ("Running Your Own Gateway", "The Two Gateway Types", "Self-Hosting Requirements") is inconsistent with sentence-case used elsewhere in `v2/developers/` |
| 3. Headings | 3.8 | Per-pageType naming | MIXED | |
| 3. Headings | 3.9 | Per-audience register | MIXED | |
| 3. Headings | 3.10 | Domain-anchor rule | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | **FAIL — CRITICAL** | Title and frontmatter say page is "Applications on Livepeer — decision guide for choosing between hosted APIs, direct gateways, BYOC pipelines, and frontend SDKs". Body is exclusively a gateway self-hosting decision matrix. Three of the four advertised surfaces (hosted APIs, BYOC, frontend SDKs) are never discussed. The original H1 from the source file ("When to Run Your Own Gateway") was renamed but the body was not rescoped |
| 4. Structure | 4.2 | Purpose statement test | FAIL | "This page lets the developer choose between hosted APIs, direct gateways, BYOC, frontend SDKs" — body does not deliver that |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Cards at line 87 cover Gateway setup, AI quickstart, "What is a Gateway" — but skip the broader applications journey |
| 4. Structure | 4.4 | No dead ends | PASS | Page does end with a Card grid (one of three pages that has any footer block) |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No Prerequisites section. Self-hosting requires ETH on Arbitrum, RPC endpoint, Docker — listed inside the body table but not pulled out as a prereq surface |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Out-of-scope should explicitly hand off "managed APIs" to Solutions tab, "BYOC" to `build/compute/byoc/`, "frontend SDKs" to `build/video/` SDKs — none of these graduations are present. Page reads as if it ignores its own scope statement |
| 4. Structure | 4.7 | Information type per section | MIXED | Decision matrix correctly in table format. But framing prose mismatches |
| 4. Structure | 4.8 | No duplication from adjacent pages | FAIL | "The Two Gateway Types" (line 70) duplicates `v2/gateways/concepts/role.mdx` and `v2/developers/concepts/landscape.mdx`. "Self-Hosting Requirements" duplicates Gateways setup/install pages. The whole page essentially re-creates content that lives in the Gateways tab |
| 4. Structure | 4.9 | Section orientation present | N/A | |
| 4. Structure | 4.10 | ≥3 cross-tab graduation links | MIXED | Three Cards at line 87–96 link to `/v2/gateways` (broken case), `/v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart`, `/v2/gateways/concepts/role`. Two cross-tab links to Gateways (with case bug). About / Solutions / Orchestrators not linked |
| 4. Structure | 4.11 | Discord test | FAIL | If the page is about applications, it does not answer "what makes a Livepeer-backed application?". If the page is about self-hosting, the title is wrong. Either way, fails its own job |
| 4. Structure | 4.12 | Page size appropriate | FAIL | 5.3 KB. Concept-page floor is ≥5 KB substantive but content is mostly redundant with Gateways tab. Effective substantive content is <2 KB once duplication is removed |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs / limitations named | PASS | Self-hosted vs hosted matrix names trade-offs explicitly |
| 4. Structure | 4.16 | Content-pass context completable | MIXED | Cannot complete because the scope is wrong |
| 4. Structure | 4.17 | Code block language tags | N/A | No code blocks |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | API in prose has code/link | N/A | |
| 5. Layout | 5.1 | Correct template for pageType | FAIL | `concept` template expects Related Pages footer with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle>`. Page uses `<CardGroup cols={3}>` instead with raw Card titles — fails 5.17 |
| 5. Layout | 5.2 | Required sections | FAIL | No Prerequisites; no proper Related Pages format |
| 5. Layout | 5.3 | Only approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component mapping | MIXED | Decision matrix → table OK. But uses raw markdown tables (line 34–42, 56–64, 72–75) — fails 5.23 |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `status: draft` is old schema; canonical is `veracityStatus` |
| 5. Layout | 5.8 | CSS custom props only | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Wrong template — page reads as a guides/decision page templated as a concept Learn page |
| 5. Layout | 5.12 | Section blocks from gold-standard | FAIL | Cards are `<CardGroup cols={3}>` raw titles, not `<Columns cols={2}><Card><CustomCardTitle horizontal>` |
| 5. Layout | 5.13 | Section ordering | MIXED | |
| 5. Layout | 5.14 | Multi-view layout rules | PASS | |
| 5. Layout | 5.15 | Data imports used | FAIL | go-livepeer port numbers (8937), Arbitrum RPC requirement, Docker image tag (`livepeer/go-livepeer:master`) hardcoded — canonical sources should be imported from `snippets/data/` |
| 5. Layout | 5.16 | Related Pages footer OR Next Step | MIXED | "Next steps" CardGroup present line 87–96, but uses wrong format (5.17) |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={3}>` with raw `title=` and `icon=` props on `<Card>`. Rubric requires `<Columns cols={2}>` with `<CustomCardTitle icon ... horizontal>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordion |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps not raw Steps | N/A | No procedural body |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | Cards line 88, 91, 94 have raw `title=` strings — should use `<CustomCardTitle>` per 5.22 |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Three raw markdown tables (lines 34–42, 56–64, 72–75) — should be `<StyledTable>` per 5.23 |
| 5. Layout | 5.24 | Max 1–2 tables | FAIL | Three tables on a 5 KB page |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | Three tables + CardGroup |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider line 30 — OK. Dividers between sections OK. But no divider before "Next steps" CardGroup — fails the always-before-Related rule |
| 5. Layout | 5.27 | Mermaid colours | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | Single import: Divider component |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW JSX flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Frontmatter `status: draft` on a published `v2/` page — either page is draft (move to workspace) or status should be `verified` |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | Port 8937 referenced — go-livepeer default port. ETH on Arbitrum One requirement — correct. None linked to source |
| 6. Veracity | 6.2 | Code TESTED | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API; version-pinned | FAIL | Docker tag `livepeer/go-livepeer:master` (line 61) — `master` is not version-pinned |
| 6. Veracity | 6.4 | Numbers real | PASS | "15 minutes" time-to-first-request is plausible but unsourced |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Uses resources/glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `lastVerified: 2026-03-17` — almost 2 months stale relative to today's date 2026-05-11 |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers | PASS | |
| 6. Veracity | 6.11 | Glossary defs match universal-terms | PASS | |
| 6. Veracity | 6.12 | Glossary defs verified | NOT-TESTED | |
| 7. Nav & IA | 7.1 | Page in docs.json, no orphans | PASS | docs.json line 2507 |
| 7. Nav & IA | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Nav & IA | 7.3 | Portal/index routes | PASS | |
| 7. Nav & IA | 7.4 | No structural orphans | PASS | |
| 7. Nav & IA | 7.5 | Audience journey | FAIL | Application-builder journey is not on the page — only gateway-decision is |
| 7. Nav & IA | 7.6 | ≥3 cross-tab graduations | FAIL | Two cross-tab links to Gateways (`/v2/Gateways` capital-G — broken case in production). About / Solutions / Orchestrators absent |
| 7. Nav & IA | 7.7 | File in correct lane | MIXED | File in `v2/` but `status: draft` — contradicts |
| 7. Nav & IA | 7.8 | Naming conventions | PASS | |
| 7. Nav & IA | 7.9 | _workspace TTL | N/A | |
| 7. Nav & IA | 7.10 | No stubs in nav | MIXED | 5.3 KB is borderline; net-substantive content <2 KB after duplication removed |
| 7. Nav & IA | 7.11 | Resources structure | N/A | |
| 7. Nav & IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | **FAIL** | Three `/v2/Gateways/...` paths (lines 50, 74, 75, 88) use capital-G — Mintlify case-sensitive production deploy will 404. Canonical lowercase route is `/v2/gateways/`. `/v2/Gateways` root has no `index.mdx` |
| 8. Links | 8.2 | External links live | N/A | |
| 8. Links | 8.3 | Snippet imports resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | NOT-TESTED | |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Governance | 9.1 | Human sign-off | N/A | |
| 9. Governance | 9.2 | Decisions in registry | N/A | |
| 9. Governance | 9.3 | Gate prereqs | FAIL | SCAFFOLD-NOTES.md flagged this page for scope rewrite; rewrite not done |
| 9. Governance | 9.4 | Phase ordering | FAIL | Page was moved before rescope. SCAFFOLD-NOTES.md states the body needs to move to `guides/gateways-as-developer/self-hosted-decision.mdx` |
| 9. Governance | 9.5 | Findings before fixes | PASS | |
| 9. Governance | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Tab job-list questions | FAIL | "How do I build an application?" — unanswered |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Page neither orients to app composition nor delivers the self-host journey end-to-end |
| 10. Completeness | 10.3 | Persona paths unblocked | FAIL | App-builder persona blocked — no content for them on this page |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Stated scope (apps) and actual scope (gateways) are different |
| 10. Completeness | 10.5 | Self-containment | FAIL | |
| 10. Completeness | 10.6 | Language paths | N/A | No code |
| 10. Completeness | 10.7 | Persona guides present | N/A | Section-level |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Applications on Livepeer" | FAIL | Title mismatches body (body is gateway self-host decision) |
| sidebarTitle | Yes | "Applications on Livepeer" | PASS | |
| description | Yes | "A decision guide for application developers choosing between hosted APIs, direct gateways, BYOC pipelines, and frontend SDKs." | FAIL | Promises content the body does not deliver |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | explain | PASS | |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | 9-item array | MIXED | `livepeer`, `developer`, `graduation`, `decision` generic |
| og:image | No | — | FAIL | All 5 OG fields absent |
| og:image:alt | No | — | FAIL | |
| og:image:type | No | — | FAIL | |
| og:image:width | No | — | FAIL | |
| og:image:height | No | — | FAIL | |
| veracityStatus | No | — | FAIL | Absent — old-schema `status: draft` used instead |
| lastVerified | Yes | "2026-03-17" | FAIL | 8 weeks stale |
| status | Yes | draft | FAIL | Old schema — non-canonical |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (4×) | Required | — | Placement OK except missing divider before "Next steps" CardGroup |
| `<Tabs>` / `<Tab icon>` | No | — | Recommended for "AI Gateway vs Video Gateway" content | Two-gateway content sits in raw markdown table — should be Tabs or two side-by-side Cards |
| `<StyledSteps>` | No | — | N/A | |
| `<Card>` / `<Columns cols={2}>` | `<CardGroup cols={3}>` used | Required for Related Pages | Yes — wrong format | Uses `<CardGroup>` with raw `title=` attributes; rubric requires `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon ... horizontal>` (5.17) |
| `<CustomCardTitle>` | No | Required inside nav Card (5.22) | — | Three cards at lines 88, 91, 94 use raw `title=` |
| Fenced code | No | — | — | No code blocks on page |
| `<Note>` / `<Warning>` | Yes — `<Warning>` line 52, `<Note>` line 77 | — | varies | `<Warning>` for OS support correctly placed. `<Note>` line 77 carries primary architectural fact — should be body prose (fails 2.D7) |
| `<Accordion>` | No | — | Recommended for "When to graduate" detail | Missing |
| `<StyledTable>` | No — three raw markdown tables | Required (5.23) | — | Lines 34–42, 56–64, 72–75 all raw markdown — fail 5.23 |
| Custom snippet imports | `Divider.jsx` only | — | — | No data imports (port numbers, Docker tag hardcoded) |

## Cross-page duplication and link gaps

- **OVERLAP — gateway types**: "The Two Gateway Types" section (lines 70–80) duplicates `v2/gateways/concepts/role.mdx` and overlaps `v2/developers/concepts/landscape.mdx`. Same content surfaced three times across the docs.
- **OVERLAP — self-hosting requirements**: "Self-Hosting Requirements" (lines 48–66) duplicates `v2/gateways/setup/install.mdx`, `v2/gateways/setup/prepare.mdx`. Learn page should reference, not re-state.
- **OVERLAP — hosted-vs-self-hosted decision**: "Running Your Own Gateway" table (lines 34–42) overlaps the decision matrix in `v2/gateways/quickstart/AI-prompt.mdx` and the `guides/gateways-as-developer/` series. SCAFFOLD-NOTES line 23 explicitly states "Decision-matrix content should move to `guides/gateways-as-developer/self-hosted-decision.mdx`".
- **LINK GAPS**:
  - Case bug: `/v2/Gateways` (capital G) appears at lines 50, 74, 75, 88. Canonical case is `/v2/gateways`. Production build will 404 on case-sensitive deploy.
  - No link to BYOC concept (mentioned in description, never linked).
  - No link to frontend SDK overview (`@livepeer/react`, mentioned in description, never linked).
  - No link to hosted-API offering (Solutions tab) — promised in description, never linked.
  - No link to LIP-92 or off-chain payment mode explanation.
- **STRANDED**: Page closes with three Cards but two of them point at the SAME tab destination (`/v2/Gateways` and `/v2/gateways/concepts/role`). Third Card is a "back to AI quickstart" reverse link. App-builder reader exits with no clear forward move.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | grep clean |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 1 | line 83: "If you are ready to self-host... If you are not sure yet..." |
| Conditional gatekeeping | 1 | line 83 (same construction) |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | **1 — CRITICAL** | line 78: "the Livepeer Studio AI API are both off-chain AI Gateway implementations" |
| Hedging openers | 0 | — |
| Self-reference | 1 | line 28: "This page gives application developers the decision frame..." |
| Deprecated terms | 1 | line 75: "Video Gateway (on-chain broadcaster)" — uses "broadcaster" as a synonym for Gateway |
| `<Note>` for primary content | 1 | line 77 — primary architectural fact wrapped in Note |
| Title-case headings | 4 | lines 32, 48, 70 — `Running Your Own Gateway`, `Self-Hosting Requirements`, `The Two Gateway Types`. Repo convention is sentence-case for H2 |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Running Your Own Gateway | 4 | 3 | 3 | 4 | 4 | **18** FAIL — Title Case + not a Learn-page concept heading. Better: "Self-hosted gateway trade-offs" |
| Self-Hosting Requirements | 4 | 3 | 4 | 4 | 4 | **19** FAIL — Title Case. Better: "Self-hosting requirements" |
| The Two Gateway Types | 3 | 3 | 4 | 4 | 3 | **17** FAIL — generic + Title Case. Better: "AI gateway and video gateway" |
| Next steps | 1 | 1 | 3 | 4 | 5 | **14** FAIL — banned-list "Next Steps" (2.B5 / 3.2). `Related Pages` exemption does NOT apply here |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| — | — | — | — | — | No code blocks present |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** **The page does not deliver its stated outcome at all.** Title and description promise a decision guide for "applications on Livepeer" — hosted APIs, direct gateways, BYOC, frontend SDKs. Body delivers only a self-hosted-vs-hosted-gateway decision matrix. An application developer who lands here looking for "how do I compose an application" gets sent to gateway setup pages. The reader hits the "now what?" wall on the first H2.
- **Fix step:** Rewrite the body to deliver the promised scope: four sections, one per access surface (hosted REST/AI APIs, direct gateway client, BYOC pipelines, frontend `@livepeer/react`). Each section: one-line definition, one composition diagram, one decision-question, one outbound link. Move the current gateway-decision content out to `v2/developers/guides/gateways-as-developer/self-hosted-decision.mdx` per SCAFFOLD-NOTES line 23.
- **Source/exemplar:** `v2/developers/_workspace/SCAFFOLD-NOTES.md` line 23 (the prescribed move). `.claude/references/layout/best-practice.md` Multi-Path Layout Pattern.

### Layer 2 — Composition
- **Gap:** Three raw markdown tables (lines 34–42, 56–64, 72–75) on a page that defines four access surfaces — that's an information-architecture mismatch. The four access surfaces should be a `<Tabs>` block or a `<CardGroup cols={2}>` of four `<Card>`s with `<CustomCardTitle>`. Related Pages at the footer uses `<CardGroup cols={3}>` with raw `title=` props instead of the canonical `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle horizontal>`. No `<Accordion>` for the per-surface deep-detail. No `<StyledTable>` anywhere — three raw markdown tables fail 5.23.
- **Fix step:** (a) Replace H1 body with `<Tabs>` of four `<Tab>` (Hosted API / Direct Gateway / BYOC / Frontend SDK), each with one diagram + decision question + link. (b) Replace `<CardGroup cols={3}>` at line 87 with `<Columns cols={2}>` + four `<Card>` using `<CustomCardTitle icon="..." horizontal title="...">`. (c) Add `<CustomDivider />` line before the new Related Pages block.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx` Related Pages format (canonical). Component matrix `concept` row.

### Layer 3 — Cross-page integration
- **Gap:** Page promises four access surfaces and links to none of their landing pages. No link to BYOC overview (`build/compute/byoc/`). No link to frontend SDK reference (`@livepeer/react`). No link to managed-API offering (Solutions tab). The two gateway links use a capital-G path (`/v2/Gateways`) that is non-canonical and likely breaks production case-sensitive routing. SCAFFOLD-NOTES line 23 explicitly identifies the move target — page does not exist either.
- **Fix step:** Fix all `/v2/Gateways` → `/v2/gateways` (lowercase). Add a Related Pages block with one `<Card>` per access surface: Hosted API (Solutions tab landing); Direct Gateway (`v2/gateways`); BYOC (`v2/developers/build/compute/byoc/overview`); Frontend SDK (`v2/developers/build/video/overview`). Add link from this page to `v2/developers/guides/gateways-as-developer/self-hosted-decision.mdx` for the moved-out detail.
- **Source/exemplar:** SCAFFOLD-NOTES.md line 23; docs.json route registry (lowercase `/v2/gateways`).

### Layer 4 — Veracity and source authority
- **Gap:** Docker image tag `livepeer/go-livepeer:master` (line 61) is the worst possible version pin — `master` is a moving target. "About 15 minutes with Docker" time-to-first-request (line 65) is plausible but unsourced. `<Note>` at line 77 asserts that public, Studio, and self-hosted gateways are "the same go-livepeer binary" — strong protocol claim with no source link. Port 8937 (line 64) is correct as default — no source link.
- **Fix step:** Replace `livepeer/go-livepeer:master` with a tagged release (current canonical: check `livepeer/go-livepeer` latest release tag). Link the protocol claim at line 77 to the go-livepeer README or release notes that confirm the binary unification. Source the port number to `go-livepeer/cmd/livepeer/main.go` or the README defaults section. Replace `status: draft` + `lastVerified: 2026-03-17` with `veracityStatus: verified` + current date once content is rescoped.
- **Source/exemplar:** `livepeer/go-livepeer` repo README; latest release tag.

### Layer 5 — Product-forward depth
- **Gap:** The page reads like a leftover. Title is from one scope (apps), body is from another (gateways), source provenance is "from old applications-on-livepeer.mdx with prior scope mismatch" per SCAFFOLD-NOTES — and the prior mismatch was NOT resolved during the move. There is no product-signal anywhere: no maturity badges, no costs, no "when not to self-host". A first-time developer cannot tell from this page whether running their own gateway is a normal thing to do at the start of a project or a heavyweight migration at scale.
- **Fix step:** After rescoping body to "applications on Livepeer", add a `<Tip>` Header CTA: "Most applications start on hosted APIs and graduate to self-hosting only when cost, routing, or data-control demands it." Add a "Maturity and graduation signals" section with three concrete graduation triggers (monthly spend threshold, sub-200ms requirement, custom orchestrator routing) with order-of-magnitude numbers. Add a `<Accordion title="When not to self-host" icon="circle-xmark">` covering the negative case.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` graduation-page pattern; `v2/about/_workspace/reviews2/network/architecture.md` exemplar for product-forward callouts.

## Summary

**Verdict**: NEEDS WORK
**Severity counts**: CRITICAL 2 / HIGH 12 / MEDIUM 7 / INFO 2
**Critical findings (1–5 max)**:
1. **Scope mismatch (4.1, CRITICAL)**: Title and description promise "applications on Livepeer / four access surfaces". Body delivers only a self-hosted-gateway decision matrix. Three of the four advertised surfaces are absent. SCAFFOLD-NOTES explicitly flagged this for rescope; rescope never happened.
2. **Studio reference (CRITICAL, project rule 3)**: line 78 names "the Livepeer Studio AI API" in body prose. Zero Studio refs allowed outside `learn/where-to-find/studio-paths.mdx` (which does not exist). Must be removed or rerouted.
3. **Broken-case internal links (8.1, HIGH)**: four `/v2/Gateways/...` paths use capital-G; canonical is lowercase. Production deploy is case-sensitive and these will 404.
4. **Deprecated term in body (2.16, HIGH)**: line 75 says "Video Gateway (on-chain broadcaster)" — `broadcaster` is the deprecated synonym for Gateway per CLAUDE.md domain terms.
5. **Old-schema frontmatter + missing OG block (1.7, 1.8, 1.12, HIGH)**: page uses `status: draft` not `veracityStatus`; OG image block entirely absent.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | **Rescope page**: delete current body, write four-section body covering Hosted APIs / Direct Gateway / BYOC / Frontend SDKs. Move existing gateway-decision matrix to `v2/developers/guides/gateways-as-developer/self-hosted-decision.mdx` per SCAFFOLD-NOTES | 28–97 (full body) | CRITICAL | L | SCAFFOLD-NOTES.md line 23 |
| 2 | Remove Studio reference at line 78. Replace with: "The public Gateway at `dream-gateway.livepeer.cloud` is an off-chain AI Gateway running the same go-livepeer binary you would self-host." | line 78 | CRITICAL | S | project rule 3 |
| 3 | Fix four `/v2/Gateways` paths to lowercase `/v2/gateways` | lines 50, 74, 75, 88 | HIGH | S | check 8.1 |
| 4 | Remove "(on-chain broadcaster)" parenthetical at line 75 | line 75 | HIGH | S | check 2.16 |
| 5 | Replace `status: draft` with `veracityStatus: verified` (after rescope ships) or `veracityStatus: unverified` (if shipping before rescope) | line 22 | HIGH | S | check 1.8 |
| 6 | Add OG image block to frontmatter: `og:image: /snippets/assets/site/og-image/en/developers.png`, plus `og:image:alt`, `og:image:type`, `og:image:width: 1200`, `og:image:height: 630` | after line 23 | HIGH | S | check 1.12 |
| 7 | Convert three raw markdown tables to `<StyledTable>` after rescope | 34–42, 56–64, 72–75 (post-rescope, may be deleted) | HIGH | M | check 5.23 |
| 8 | Replace `<CardGroup cols={3}>` Next-steps block with `<Columns cols={2}>` + four `<Card>` with `<CustomCardTitle icon="..." horizontal title="...">`, descriptions ≤10 words | 87–97 | HIGH | M | check 5.17 / 5.22 |
| 9 | Add `<CustomDivider />` before Related Pages CardGroup | before line 86 | HIGH | S | check 5.26 |
| 10 | Replace `livepeer/go-livepeer:master` with current tagged release | line 61 | HIGH | S | check 6.3 |
| 11 | Convert `<Note>` at line 77 to body prose or `<Tip>` | line 77 | HIGH | S | check 2.D7 |
| 12 | Replace line 83 conditional-gatekeeping closer with subject-led sentence: "Self-hosting starts with the [local gateway setup](/v2/developers/guides/local-development/local-gateway). The [navigator](/v2/developers/navigator) maps each access surface to its quickstart." | line 83 | HIGH | S | check 2.4 |
| 13 | Remove self-reference "This page gives..." from intro line 28 | line 28 | MEDIUM | S | check 2.15 |
| 14 | Convert H2 headings to sentence case: "Self-hosted gateway trade-offs", "Self-hosting requirements", "AI gateway and video gateway", "Related pages" | lines 32, 48, 70, 86 | MEDIUM | S | check 3.7 |
| 15 | Add Prerequisites block after intro: links to `concepts/landscape`, `concepts/infra-stack`, gateway-role page | after line 30 | MEDIUM | M | check 4.5 |
| 16 | Update `lastVerified` to current date after rescope | line 23 | MEDIUM | S | check 6.8 |
| 17 | Trim generic keywords (`livepeer`, `developer`, `graduation`, `decision`) | line 10–19 | INFO | S | check 1.13 |
