# Review: overview.mdx (agents)

**Page**: `v2/developers/build/ai-and-agents/agents/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A4
**pageType (from frontmatter)**: `overview` (NON-CANONICAL — should be `concept`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 8,254
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 23) — canonical is `concept\|tutorial\|guide\|instruction\|navigation\|reference\|resource` |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `orient` or `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` valid |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry valid | N/A | |
| 1. Frontmatter | 1.10 | niche valid | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | MIXED | "How AI agents use Livepeer inference pipelines: ..." opens with "How" — borderline, not "this page" but not subject-first either |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 OG fields (lines 18–22) |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "elizaOS", "Agent SPE", "VTuber agents" — specific |
| 1. Frontmatter | 1.14 | audience register match | PASS | Developer register held |
| 2. Voice | 2.1 | UK English | PASS | "decentralised" line 39; no US hits |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Body opens "AI agents running on frameworks…" — subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | elizaOS, Agent SPE, BYOC consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "AI agents running…", "The Agent SPE…", "Livepeer is integrated…" |
| 2. Voice | 2.14 | No hedging verbs in value claims | MIXED | Line 76 "Any agent that can make HTTP requests can call Livepeer AI pipelines directly" — two `can` instances acceptable as capability statements but borderline |
| 2. Voice | 2.15 | description not self-referential | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "BYOC" defined inline first use (line 125 "BYOC (Bring Your Own Compute)") — OK. But `live-video-to-video`, `text-to-speech`, `llm` pipelines referenced without link to pipeline reference at first use |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | concept page |
| 2. Voice | 2.D2 | API/method has code or link | MIXED | "GENERATE_IMAGE" mentioned without code/link; pipeline names linked at section end but not at first reference |
| 2. Voice | 2.D3 | Versions explicit | PASS | "elizaOS v0.1.7-alpha.2 (PR #1525)"; "PR #2154" — pinned |
| 2. Voice | 2.D4 | Errors in main content | N/A | No error states named |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing adjacent to tech | PASS | |
| 2. Voice | 2.D7 | Note not for primary content | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Eliza Plugin" (21), "Using AI Pipelines from Agents" (24), "BYOC Containers for Agents" (24), "Autonomous Streaming Agents" (23), "Agent SPE" (22), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | None banned |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor applied | PASS | |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Building Agents with Livepeer" — 4 words (rubric says 1–3); slightly long |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming style | PASS | |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | "How agents use Livepeer" |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the developer choose an agent integration path" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Links to Eliza tutorial and AI pipelines via in-prose `<LinkArrow>`, but no header breadcrumb to the section's prereq (AI inference overview) |
| 4. Structure | 4.4 | No dead ends | PASS | CardGroup at end |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No "Prerequisites" section. Concept page can omit, but readers entering at this URL get no signal on what they need (Livepeer gateway URL, API key, GPU choices) |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Eliza tutorial linked; BYOC overview linked |
| 4. Structure | 4.7 | Info type per section | PASS | Concept + factual mix |
| 4. Structure | 4.8 | No content duplication | MIXED | "Eliza Plugin" section overlaps heavily with `eliza-integration.mdx` (same JSON config, same provider explanation). Two pages cover the same ground in different depth |
| 4. Structure | 4.9 | Section orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links (no Gateways, no Solutions, no About) — all internal to Developers tab |
| 4. Structure | 4.11 | Discord test | MIXED | Reader knows Livepeer-agent paths exist but cannot map persona ("I'm building X, which path?") |
| 4. Structure | 4.12 | Page size | PASS | 8.2 KB substantive |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No trade-offs/limitations/failure-conditions named. Agent SPE timeline is named but not flagged as a "when will X be ready" signal |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Code blocks have language tag | PASS | Single `json` block at line 53 |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | API/method has code or link | MIXED | `GENERATE_IMAGE` action named without elizaOS source link; pipeline names link out via `<LinkArrow>` at section level only |
| 5. Layout | 5.1 | Correct template | MIXED | concept structure OK but non-canonical pageType |
| 5. Layout | 5.2 | Required sections present | MIXED | OK for concept; Prerequisites missing for builder persona |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | The five sections (Eliza, Pipelines, BYOC, VTuber, SPE) are routing/decision content — `<Tabs>` (by integration path) or `<AccordionGroup>` would compress better than five H2s |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | `pageType: overview`, `status: current` are legacy |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks from gold-standard | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports used | MIXED | `dream-gateway.livepeer.cloud` hardcoded (line 66); pipeline names hardcoded — should reference data file if available |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | BOTH present — line 151 has a Next-Step paragraph ("The [Eliza Livepeer plugin tutorial] is the complete walkthrough…") AND a Related Pages CardGroup at line 153. Check 5.16: "one or the other, never both" — FAIL |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; Cards use plain `title=` prop not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon + title | FAIL | Line 53 fenced ` ```json ` block has no `icon` and no `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural steps |
| 5. Layout | 5.22 | Nav Card uses CustomCardTitle | FAIL | Cards use `title=` only |
| 5. Layout | 5.23 | StyledTable used | PASS | Lines 80–117 use `<StyledTable variant="bordered">` |
| 5. Layout | 5.24 | Max 1–2 tables | PASS | One table |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | |
| 5. Layout | 5.27 | Mermaid governed | N/A | |
| 5. Layout | 5.28 | Import ordering | MIXED | Imports at 29–31 mix elements + wrappers + displays — acceptable but could be reordered |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW JSX flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | MIXED | The four integration paths (Eliza / direct HTTP / BYOC / streaming agents) require scrolling and reading prose to compare. No decision matrix |
| 5. Layout | 5.32 | Reference tables at end | PASS | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Every claim citable | MIXED | PR #1525, PR #2154 specific (great); but "30,000 LPT" Phase 2 funding date / amount — no link to treasury proposal; VTuber/MetaHuman claim has no source |
| 6. Veracity | 6.2 | Code tested | NOT-TESTED | JSON block at line 53 has no TESTED label |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "30,000 LPT" needs proposal link; "Phase 2 (funded March 2025)" needs treasury link |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness | MIXED | Eliza versions explicit; no commit/tag for plugin source files |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | PR numbers cited (T1), but no direct URL link to the elizaOS repo PR pages |
| 6. Veracity | 6.11 | Glossary matches universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2554 |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | FAIL | Folder has 7 files: 4 are registered (overview, storyboard, llm-provider-routing, eliza-integration); 3 are unregistered orphans (`agent-sdk.mdx` 7,245B, `creative-kit.mdx` 6,904B, `eip-8004-identity.mdx` 630B stub). overview links to `agent-sdk` twice (lines 169 in-prose `<LinkArrow>` and 176 Card) but it is not in nav |
| 7. Navigation | 7.3 | Portal/index routes | PASS | |
| 7. Navigation | 7.4 | No structural orphans | FAIL | `agent-sdk.mdx` and `creative-kit.mdx` are file-orphans (full content but no nav entry). Brief states they are "coming soon" deferred pending npm. Page links to them as if they exist (line 169, 176, 185 in storyboard) |
| 7. Navigation | 7.5 | Audience journey | MIXED | Eliza path complete; BYOC path complete; SDK path stranded (links to unregistered page); VTuber path is informational only |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation | FAIL | Zero cross-tab links |
| 7. Navigation | 7.7 | Correct lane | PASS | |
| 7. Navigation | 7.8 | Naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | (`eip-8004-identity.mdx` stub is unregistered) |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | |
| 7. Navigation | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | MIXED | All linked files exist on disk (`agent-sdk`, `creative-kit`, `eliza-livepeer-plugin`, `ai-pipelines`, `byoc/overview`, `realtime-ai/overview`, `storyboard`). But `agent-sdk` route is not in docs.json so it is a file-orphan — link will 404 in nav |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 8. Links | 8.3 | Snippet imports resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | NOT-TESTED | |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Process | 9.1 | Human sign-off | NOT-TESTED | |
| 9. Process | 9.2 | Consuming decisions | NOT-TESTED | |
| 9. Process | 9.3–9.6 | Process/feedback | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list question | PASS | "How do I build an agent with Livepeer?" |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Eliza path leads to a tutorial; SDK path leads to a file-orphan |
| 10. Completeness | 10.3 | Persona paths unblocked | MIXED | Eliza dev unblocked; SDK dev blocked at link target |
| 10. Completeness | 10.4 | Scope boundaries explicit | MIXED | |
| 10. Completeness | 10.5 | Self-containment | PASS | Page works as orientation |
| 10. Completeness | 10.6 | Code samples working language | MIXED | Only JSON Eliza config; no TypeScript/Python integration example; no curl example |
| 10. Completeness | 10.7 | Persona-specific guides | N/A | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Building Agents with Livepeer" | MIXED | 4 words (rubric 1–3) |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "How AI agents use Livepeer..." | MIXED | Borderline subject-first; opens with "How" |
| pageType | Yes | overview | FAIL | NON-CANONICAL → `concept` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Required |
| complexity | No | — | FAIL | Required |
| lifecycleStage | No | — | FAIL | Required |
| keywords | Yes | array | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Required |
| status | Yes | current | INFO | Legacy |
| lastVerified | Yes | 2026-05-13 | PASS | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | Placement OK |
| `<CenteredContainer>` | Yes (1×) | — | OK | |
| `<Tip>` | Yes (1×) | Recommended | OK | |
| `<Tabs>` / `<Tab icon>` | No | Recommended (for four integration paths) | — | Eliza / direct HTTP / BYOC / streaming should be a Tabs row |
| `<StyledSteps>` | No | N/A | — | |
| `<Card>` / `<CardGroup cols={2}>` | Yes (1×, line 155) | Required for Related | FAIL | Should be `<Columns cols={2}>` and use `<CustomCardTitle>` |
| `<CustomCardTitle icon ... />` | No | Required | FAIL | |
| Fenced code with icon + title | No | Required where code | FAIL | Line 53 JSON block bare |
| `<Note>` / `<Info>` | No | — | — | |
| `<AccordionGroup>` / `<Accordion icon>` | No | Recommended (for SPE phase status / FAQ) | — | Could collapse SPE phase 1/2 detail |
| `<StyledTable>` | Yes (1×) | Recommended | OK | |
| `<LinkArrow>` | Yes (3×) | — | OK | |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Eliza Plugin" (lines 45–71) duplicates 70%+ of `eliza-integration.mdx`. Both pages describe modelProvider field, character file JSON, gateway URL. The two pages should differentiate: this overview gives the agent-framework choice, `eliza-integration.mdx` carries the implementation depth.
- **OVERLAP**: §"LLM Provider Configuration" content is on `storyboard.mdx` (lines 121–155) AND on `llm-provider-routing.mdx` — three pages cover the same four-provider table.
- **LINK GAPS**:
  - Lines 169 + 176: link to `agents/agent-sdk` (file exists, not in nav — file-orphan) — should either register or mark "Coming soon"
  - No link to elizaOS repo PR #1525 or PR #2154 directly (PRs are cited but not hyperlinked)
  - No link to Livepeer treasury proposal for Agent SPE Phase 1/2 funding (claim is unverifiable as written)
  - No cross-tab graduation links (Gateways, Solutions, About)
  - No prereq link to `/v2/developers/build/ai-and-agents/ai-pipelines` at top of page (it is the spine reference for the rest of the page)
- **STRANDED**: Reader who wants the `@livepeer/agent` SDK path is stranded — link target is not in navigation. Per brief, agent-sdk + creative-kit are "coming soon" pending npm; page should mark these prospects explicitly.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | None |
| US spellings | 0 | None |
| Banned words | 0 | None |
| Banned phrases | 0 | None |
| Banned constructions | 0 | None |
| Conditional gatekeeping | 0 | None |
| Hand-holding | 0 | None |
| Question headings | 0 | None |
| Studio refs | 0 | None |
| Hedging openers | 0 | None |
| Self-reference | 0 | None |
| Deprecated terms | 0 | None |
| Hedging `can` in value claims | 1 | Line 76: "Any agent that can make HTTP requests can call Livepeer AI pipelines directly" — borderline (capability rather than value), INFO |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Eliza Plugin | 5 | 4 | 4 | 4 | 4 | 21 |
| Using AI Pipelines from Agents | 5 | 5 | 5 | 5 | 4 | 24 |
| BYOC Containers for Agents | 5 | 5 | 4 | 5 | 5 | 24 |
| Autonomous Streaming Agents | 4 | 5 | 5 | 5 | 4 | 23 |
| Agent SPE | 4 | 5 | 4 | 5 | 5 | 23 |
| Related Pages | exempt | | | | | — |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 53 | json | NO | NO | NOT-TESTED | FAIL 5.20 — needs `icon="code"`, `title="character.json"` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** A developer reading "Building Agents with Livepeer" wants to pick a path: "Which of these is right for what I'm building?" The page lists four paths in five sequential H2 sections but does not give a decision tool. There is no comparison matrix and no "if you are building X, use Y" decision block. The reader has to read 8 KB linearly to compare options.
- **Fix step:** Add §"Choose your path" decision block immediately after the intro (around line 41). Use a `<StyledTable>` with three columns: integration type (Eliza plugin / direct HTTP / BYOC / streaming) | use case | prerequisite. Or use `<Tabs>` with one tab per path containing a 3-bullet summary.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` decision-matrix pattern; `_packet/component-matrix.md` concept block.

### Layer 2 — Composition
- **Gap:** Five sibling H2 sections all routing to other pages — this is essentially a navigation page. Per component-matrix.md, this composition is more naturally expressed as `<CardGroup>` of integration paths than as prose H2s. The Related Pages CardGroup at footer uses non-governance pattern (`<CardGroup cols={2}>` instead of `<Columns cols={2}>` + `<CustomCardTitle>`).
- **Fix step:** Convert §§"Eliza Plugin", "Using AI Pipelines", "BYOC Containers", "Autonomous Streaming Agents" into a `<CardGroup cols={2}>` of routing cards directly under a single §"Integration paths" H2, each card linking to the dedicated leaf page. Move detailed prose content to the leaf pages. Convert the footer to `<Columns cols={2}>` with `<CustomCardTitle icon=... />`.
- **Source/exemplar:** `_packet/component-matrix.md` lines 38–50 (navigation pattern); check 5.17.

### Layer 3 — Cross-page integration
- **Gap:** Two file-orphan links (lines 169, 176): `agents/agent-sdk` referenced but not in `docs.json`. PRs #1525 and #2154 cited without hyperlinks. SPE funding amounts (30,000 LPT) not cited. No cross-tab links. No prereq link to `ai-pipelines.mdx` (the page is the spine for the §"Using AI Pipelines from Agents" content).
- **Fix step:** Wrap PR mentions as links: `[PR #1525](https://github.com/elizaOS/eliza/pull/1525)`. Link SPE proposals (`[Phase 1 treasury proposal](https://...)`). Either remove the two `agent-sdk` references or mark the link target `<Badge>Coming soon</Badge>`. Add §"Prerequisites" or top-of-page Tip linking `ai-pipelines.mdx`. Add cross-tab card row pointing to `/v2/solutions` (managed agent hosting), `/v2/gateways/setup/connect` (self-host gateway), `/v2/about/protocol/governance` (SPE programme context).
- **Source/exemplar:** elizaOS repo `pull/1525` and `pull/2154`; livepeer governance forum.

### Layer 4 — Veracity and source authority
- **Gap:** "Phase 1 (funded January 2025)" and "Phase 2 (funded March 2025, 30,000 LPT)" claims have no on-chain or governance citation. "Primary production use case for agent-driven live-video-to-video traffic on the network as of 2025" (line 139) is a strong claim with no source. `veracityStatus` field missing. JSON config block has no TESTED label.
- **Fix step:** Add `veracityStatus: unverified` and `lastVerified: 2026-05-11`. Add citation to SPE governance proposal (forum.livepeer.org or arbiscan proposal ID) for funding claims. Replace the "primary production use case" claim with either a verifiable metric (e.g. % of LV2V job count from agents — cite analytics) or downgrade to "the most prominent production use case the Agent SPE supports". Add `<!-- TESTED 2026-05-11 -->` comment to JSON block.
- **Source/exemplar:** Livepeer treasury proposals; `aiModels.json` from ai-runner repo.

### Layer 5 — Product-forward depth
- **Gap:** Page treats all four integration paths as equally valid but gives no maturity, cost, or production-readiness signal per path. Eliza plugin is shipped (PR #1525 merged). Direct HTTP is shipped. BYOC is shipped. Autonomous streaming agents (Phase 2) is a roadmap deliverable described in present tense. The reader cannot tell "what is production today" vs "what is being built". `agent-sdk` and `creative-kit` exist as full pages but are deferred — page does not say so. The Agent SPE block reads like a brochure ("The programme is run by Titan-Node, Phoenix, and DeFine") without telling the developer what they get if they engage.
- **Fix step:** Add maturity column to the integration paths comparison (Layer 1). Add status badges per path: `<Badge>GA</Badge>` for Eliza/HTTP/BYOC, `<Badge>Roadmap</Badge>` for autonomous streaming, `<Badge>Coming soon</Badge>` for `@livepeer/agent` SDK. Reframe §"Agent SPE" from "what the programme is" to "how to engage" — link to elizaOS Discord channel, treasury forum, contact path.
- **Source/exemplar:** `_packet/5-whys-prompt.md` worked example (maturity-badge pattern); `.claude/references/layout/exemplars.md`.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (top 5)**:
1. Two file-orphan links to `agent-sdk` (lines 169, 176) — link target exists on disk but is not in `docs.json` (HIGH, check 7.4 + 8.1)
2. `pageType: overview` non-canonical (HIGH, check 1.2)
3. 4 required frontmatter fields missing (HIGH, check 1.1)
4. Both Related Pages CardGroup AND Next-Step paragraph present at lines 151–192 — check 5.16 requires one or the other (HIGH)
5. Heavy content duplication with `eliza-integration.mdx` (HIGH, check 4.8)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add to frontmatter: `pageType: concept`, `purpose: orient`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` | 22–28 | HIGH | S | check 1.1 + 1.2 |
| 2 | Resolve the agent-sdk file-orphan: either register `agents/agent-sdk` + `agents/creative-kit` in `docs.json`, OR remove the in-prose `<LinkArrow>` at line 169 and the Card at line 176 and replace with text marker "@livepeer/agent SDK (coming soon when npm package publishes)" | 169, 176 + docs.json | HIGH | M | check 7.4, brief |
| 3 | Remove either the Next-Step paragraph at line 151 OR the Related Pages CardGroup at line 153 — pick one | 149–152 OR 153–192 | HIGH | S | check 5.16 |
| 4 | Add `icon="code"` and `title="character.json"` to JSON block | 53 | HIGH | S | check 5.20 |
| 5 | Convert Related Pages from `<CardGroup cols={2}>` to `<Columns cols={2}>` and wrap each Card title in `<CustomCardTitle icon=... title=... horizontal />` | 153–192 | HIGH | M | check 5.17, 5.22 |
| 6 | Add §"Choose your path" decision matrix (StyledTable or Tabs) immediately after intro, summarising the four integration paths with maturity badges | ~41 | HIGH | M | Layer 1, 5 |
| 7 | Trim duplicated Eliza content (lines 45–71) and route to `eliza-integration.mdx` for depth — keep just the path-choice level here | 45–71 | HIGH | M | check 4.8 |
| 8 | Hyperlink PR citations: `PR #1525` → elizaOS pull URL; `PR #2154` → elizaOS pull URL | 49, 68 | MEDIUM | S | check 6.10 |
| 9 | Add ≥3 cross-tab links to Related Pages (Solutions, Gateways, About protocol/governance) | 153–192 | MEDIUM | S | check 7.6 |
| 10 | Cite SPE funding claims with treasury proposal links | 145, 135 | MEDIUM | S | check 6.1, 6.4 |
| 11 | Remove legacy `status: current` field | 25 | INFO | S | check 5.7 |
| 12 | Tighten title 4→3 words: "Build Agents with Livepeer" or "Agents on Livepeer" | 2 | INFO | S | check 3.6 |
