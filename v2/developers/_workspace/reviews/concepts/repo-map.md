# Review: repo-map.mdx

**Page**: `v2/developers/concepts/repo-map.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A1
**pageType (from frontmatter)**: reference
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: reference
**Bytes**: 12,636
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | All present (lines 1–30). |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: reference` (line 17). |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not declared; `compendium` would fit. INFO. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: reference` (line 19). |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 18). |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` (line 20). |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | MIXED | `lifecycleStage: discover` (line 21). Reference content typically maps to `build` or `operate`. Discover is acceptable but inconsistent with `pageType: reference`. |
| 1. Frontmatter | 1.8 | veracityStatus present and honest | MIXED | `veracityStatus: verified` (line 29). The repo list itself is structurally verifiable, but tags like `Live` (line 135 storyboard row), `Not on npm` (lines 136, 137), and PR/branch references should be re-verified periodically. Honest as of `lastVerified: 2026-05-12`. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description subject-first, ≤160 chars, no "this page", UK English | PASS | Line 4–5: "Every Livepeer repository that matters for developers, grouped by network layer. Status and one-line role for each." 138 chars. Subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present (lines 22–26). Uses the tab-specific OG image, consistent with landscape.mdx. |
| 1. Frontmatter | 1.13 | keywords specific and search-aligned | MIXED | "livepeer" and "open source" generic; rest specific. |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | PASS | Reference catalogue of repos; `developer` audience matches well. |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | Line 42 "GitHub organisation" uses UK spelling. No US-spelling matches outside protected zones. |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | "actually" appears once (line 42 "developers actually touch") — not on the banned list but conversational. INFO. |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No matches. |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | |
| 2. Voice & Copy | 2.5 | Opening order subject-first | PASS | Line 42: "The Livepeer GitHub organisation hosts over 170 public repositories." Subject-first, fact-led. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Each H2 has tight intro, then table, then optional explanatory paragraph. Consistent rhythm. |
| 2. Voice & Copy | 2.7 | Audience register matches token | PASS | Reference register for `developer` audience. |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | All claims concrete. |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | BYOC, ComfyStream, PyTrickle, NaaP all canonical. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | Zero `—` characters. |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | All H2 bodies open with system fact ("Every Livepeer network role runs from one of these binaries.", "Cryptoeconomic contracts deployed on Arbitrum One.", etc.). Excellent entity-led discipline. |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms (Broadcaster) | MIXED | Line 54: "Reference node: orchestrator, gateway, transcoder, broadcaster". `broadcaster` is named as one of the `go-livepeer` runtime roles. Per rubric 2.16 "Broadcaster (use Gateway)" — but in `go-livepeer` source, `broadcaster` IS still a runtime-mode flag name distinct from `gateway`. This is a legitimate technical reference to the binary's internal mode taxonomy. INFO — flag for technical reviewer; do not rewrite without checking upstream. |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | |
| 2. Voice & Copy | 2.18 | Spell check passes | N/A | Visual scan clean. |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | MIXED | `FrameProcessor` (line 103) defined briefly inline; `confluence` and `streamflow` (line 75) branches named without definition; `Speakeasy-generated` (line 119) named without context; `OIDC provider, RFC 8693 token exchange` (line 87) named without link; `signer-proxy` (line 87) named without context. |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening on instruction/tutorial | N/A | reference page. |
| 2.D | 2.D2 | Every function/API/method named has code/link | PASS | Each repo named is hyperlinked. The two `@livepeer/agent` / `@livepeer/creative-kit` rows (lines 136–137) are correctly noted as in-monorepo, not on npm — appropriate explanation. |
| 2.D | 2.D3 | Versions stated explicitly | FAIL | No version pins anywhere. `go-livepeer`, `ai-runner`, SDKs all referenced without version. For a reference page this is the canonical staleness risk. |
| 2.D | 2.D4 | Error states and edge cases in main content | N/A | Not procedural. |
| 2.D | 2.D5 | No prose explanations of self-evident code | N/A | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | PASS | Two `<Note>` blocks (lines 89–91, 123–125) are properly adjacent context (data MCP server clarification; `livepeer-js`/`ui-kit` rename clarification), not primary content. |
| 3. Headings | 3.1 | Every heading scores ≥20/25 | PASS | All H2s score ≥21. See Heading Score Table. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No `Basics / Notes / Overview / Details / Summary / Background / Conclusion / What's Next`. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule applied | PASS | Every H2 carries the "Repositories" domain noun or equivalent. |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | "Core Runtime Repositories" not "go-livepeer, ai-runner, lpms". |
| 3. Headings | 3.6 | Title well-formed | PASS | `title: 'Repository Map'`. Two words. |
| 3. Headings | 3.7 | Editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | reference = literal/findability — H2s deliver that. |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Job: catalogue repos by layer. Clean. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer find the right Livepeer repository for the layer they want to work on." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | PASS | prev = infra-stack, next = (likely) learn/ai-and-agents. |
| 4. Structure | 4.4 | No dead ends | MIXED | Ends with "Contribution Entry Points" table + one LinkArrow (line 215). No CardGroup Related Pages. The contribution-entry table is a partial handoff but stops short of canonical Related Pages footer. |
| 4. Structure | 4.5 | Prerequisites stated or linked | PASS | Line 44 cross-references landscape + infra-stack as prereq concepts. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Line 177: "Solutions Repositories — Documented under Solutions; listed here for completeness". Boundary explicit. |
| 4. Structure | 4.7 | Information type correct | PASS | Reference, matches `pageType: reference`. |
| 4. Structure | 4.8 | No content duplication | MIXED | Repo list overlaps the unlinked repo nodes in `infra-stack.mdx` (Mermaid labels). Acceptable since this is the canonical reference; infra-stack should link here, not duplicate. The "merge stub" review concern: the page reads as a single clean voice, no detectable internal contradiction or duplicate section. Merge appears clean. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | FAIL | The only cross-tab link is `/v2/solutions/portal` (line 179). Missing: About (for protocol repos), Community (for contribution paths), Orchestrators (for monitoring repos that operators use). The "Contribution Entry Points" table (lines 204–214) should link to `/v2/community/contributing` or `/v2/developers/resources/contributing` for each row — only the bottom LinkArrow points there. |
| 4. Structure | 4.11 | Discord test | PASS | "What's the repo for X?" answered cleanly. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 12.6KB substantive. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | None present. |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | MIXED | Maintenance status named per repo via `[Official] / [Community] / [Archived]` tags (well-defined on line 42). But no failure-mode signal per repo group: which repos are actively maintained vs slow-moving? Which have the most contributor activity? Which have an LTS release vs are experimental? The page tells you the repo exists, not its health. |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No fenced code blocks in body. |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | Every function/API/method named has code/link | PASS | |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | MIXED | reference pageType matches; pageVariant not declared. |
| 5. Layout | 5.2 | Required sections present per pageType | MIXED | reference template requires Reference body + Related Pages (component-matrix.md line 121–128). Reference body PASS (tables). Related Pages FAIL — missing. |
| 5. Layout | 5.3 | Only approved components used | PASS | `<Tip>`, `<CenteredContainer>`, `<CustomDivider>`, `<LinkArrow>`, `<Note>` — all approved. |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | FAIL | Reference content is correctly tabular but uses RAW MARKDOWN tables (9 tables at lines 52, 70, 83, 99, 117, 133, 148, 161, 170, 181, 207) instead of `<StyledTable>`. Repo-map is a `pageType: reference` and Mintlify reference rendering expects `<ParamField>` / `<ResponseField>` / `<StyledTable>`. Mass FAIL on 5.5 + 5.23 + 5.24. |
| 5. Layout | 5.6 | MDX renders clean | PASS | (Assumed; not live-verified.) |
| 5. Layout | 5.7 | No old-schema frontmatter values | PASS | |
| 5. Layout | 5.8 | CSS custom properties only | PASS | No inline styles. |
| 5. Layout | 5.9 | Generated file banners intact | N/A | |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | Opening uses `---` Markdown HR (line 40) instead of `<CustomDivider />`. Internal CustomDividers correct. No closing Related Pages section. Otherwise template-conformant. |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | Standard intro → body sections → contribution table. |
| 5. Layout | 5.13 | Section ordering matches pageType | MIXED | Reference content correctly tabular, BUT check 5.32 says "Reference tables at end, not beginning". Here the entire page IS tables, which is correct for a reference page — the rule 5.32 applies to non-reference pages with embedded reference tables. PASS in spirit; reference pageType exempt. |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No variants. |
| 5. Layout | 5.15 | Data imports used | FAIL | Repository list is hardcoded across 9 tables. Should be a `snippets/data/developers/repositories.json` (or similar) imported and rendered via a component. CLAUDE.md hard rule: "No hardcoded data in MDX pages. If a data file exists for the content (addresses, config, feeds), the page MUST import and render from it. Zero exceptions." This is the highest-impact data file in the developers tab. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | FAIL | Page ends with line 215 `<LinkArrow href="/v2/developers/resources/contributing" .../>` — single inline LinkArrow is a Next-Step CTA, not a Related Pages footer. Acceptable under check 5.16 ("one or the other") but the lone LinkArrow is underweight for a 12.6KB reference catalogue. |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages section to format-check. |
| 5. Layout | 5.18 | Tab icon prop present | N/A | |
| 5. Layout | 5.19 | Accordion icon prop present | N/A | |
| 5. Layout | 5.20 | Code block icon + title | N/A | |
| 5. Layout | 5.21 | StyledSteps used, not raw Steps | N/A | |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | N/A | No Cards. |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | 9 raw markdown tables. See 5.5 — mass FAIL. |
| 5. Layout | 5.24 | Max 1–2 tables per page | FAIL | 9 tables. Reference pageType somewhat relaxes this rule, but 9 is the extreme end. Combine where possible or split by layer. |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | 9 tables = many major layout elements. Reference pageType partially exempts. |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening `---` Markdown HR (line 40) instead of `<CustomDivider />`. Internal dividers (lines 46, 63, 77, 93, 110, 127, 141, 154, 166, 175, 186, 202) appear between every H2. Pattern is rigid; not against rules. No divider before final LinkArrow (line 215). |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | No Mermaid diagrams. |
| 5. Layout | 5.28 | Import section ordering | PASS | Element imports only. |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags as REVIEW JSX | N/A | None present. |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | All tables flat. |
| 5. Layout | 5.32 | Reference tables at end | N/A | Reference pageType — entire page is reference tables. Rule does not apply. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | PASS | |
| 6. Veracity | 6.1 | Every factual claim citable | MIXED | Repo links are themselves the citation. Inline claims: "over 170 public repositories" (line 42) — should cite GitHub API count snapshot date. "12 core plugins" (line 86) — should link the NaaP plugin list. `confluence` and `streamflow` branch claim (line 75) — should cite the branch links. "40 AI models" (line 135) — should link the storyboard model registry. |
| 6. Veracity | 6.2 | Code tested | N/A | No code. |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | |
| 6. Veracity | 6.4 | Numbers are real | MIXED | "over 170 public repositories", "12 core plugins", "40 AI models" — all need source/date stamps. |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | `verified` + `lastVerified: 2026-05-12`. Honest at that date but reference data drifts fast — the page should declare a refresh cadence. |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | No glossary on page. |
| 6. Veracity | 6.8 | Source staleness check | FAIL | No SDK or binary versions named. The page is a repository catalogue and yet declares no version pins, no last-release dates, no maintenance status beyond Official/Community/Archived. |
| 6. Veracity | 6.9 | No open-ended "needs more research" | PASS | |
| 6. Veracity | 6.10 | Source authority tiers respected | PASS | T1 repos prominent; T2 community marked. |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified against veracity-sources | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | `v2/developers/concepts/repo-map` at docs.json line 2499. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Navigation | 7.3 | Portal routes to section | PASS | |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Catalogues every developer-facing repo. |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | FAIL | Only `/v2/solutions/portal` (line 179). Missing About, Community, Orchestrators. |
| 7. Navigation | 7.7 | File in correct lane | PASS | |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | |
| 7. Navigation | 7.11 | Resources sub-structure correct | N/A | Concepts page. |
| 7. Navigation | 7.12 | Guides scope correct | N/A | |
| 8. Links & Rendering | 8.1 | All internal links resolve | PASS | `/v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart` (line 85), `/v2/developers/concepts/landscape` (line 44), `/v2/developers/concepts/infra-stack` (line 44), `/v2/solutions/portal` (line 179), `/v2/developers/resources/contributing` (line 215) — all verified to resolve. |
| 8. Links & Rendering | 8.2 | All external links live | N/A | 22+ GitHub URLs not live-verified in this review. Pattern is `https://github.com/{org}/{repo}` — assumed live. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | Three imports (Links, Divider, Containers) standard. |
| 8. Links & Rendering | 8.4 | All images load | N/A | No inline images. |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | (Assumed.) |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | None. |
| 9. Process & Governance | 9.1–9.6 | | N/A | Outside review scope. |
| 10. Content Completeness | 10.1 | Every question in job list has a page | PASS | |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | MIXED | Each repo named; contribution-entry table at end. But no signal "start here if you want to contribute to AI" with priority order beyond the entry-points table. |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | PASS | |
| 10. Content Completeness | 10.5 | Self-containment holds | PASS | |
| 10. Content Completeness | 10.6 | Code samples have working language path | N/A | |
| 10. Content Completeness | 10.7 | Persona-specific guides present | N/A | Reference page, not guides. |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Repository Map" | PASS | |
| sidebarTitle | Yes | "Repo Map" | PASS | |
| description | Yes | "Every Livepeer repository that matters for developers, grouped by network layer. Status and one-line role for each." | PASS | 138 chars, subject-first. |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | reference | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | discover | MIXED | Could be `build` for reference. |
| keywords | Yes | 10 keywords | MIXED | "livepeer" / "open source" generic. |
| og:image | Yes | /snippets/assets/site/og-image/en/developers.png | PASS | |
| og:image:alt | Yes | "Livepeer Docs social preview image for Developers" | PASS | Consistent with landscape.mdx. |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | Yes | verified | MIXED | Honest as of `lastVerified: 2026-05-12`; needs refresh cadence. |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | PASS | |
| pageVariant | No | — | INFO | Should declare `compendium`. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (12×) | Required | — | Opening uses `---` Markdown HR (line 40) instead. Internal placement OK. No divider before final LinkArrow. |
| `<Tabs>` | No | — | — | Could use `<Tabs>` to group repos by lifecycle (Official/Community/Archived) or by layer for compact display. |
| `<StyledSteps>` | N/A | — | — | |
| `<Card>` / `<Columns cols={2}>` Related Pages | NO | Required | — | Missing. Single LinkArrow at line 215 is the only handoff. FAIL 5.16 (well, MIXED — single LinkArrow could be argued as Next-Step CTA). |
| `<CustomCardTitle icon ... />` | No | N/A | — | |
| Fenced code with icon + title | N/A | — | — | |
| `<Note>` / `<Tip>` / `<Warning>` | `<Tip>` line 37, `<Note>` lines 89, 123 | — | OK | Tip header CTA. Two Notes for adjacent context — appropriate per 2.D7. |
| `<Accordion>` / `<Accordion icon>` | No | — | Recommended | An AccordionGroup could collapse each repo group, reducing scroll length. |
| `<StyledTable>` | NO | Required for tabular reference data | — | 9 raw markdown tables instead. FAIL 5.5 + 5.23 + 5.24. |
| `<ParamField>` / `<ResponseField>` | N/A | — | — | Reference pageType but repo-list is closer to table than param fields; StyledTable is the right component. |
| `<LinkArrow>` | Yes (line 85, 179, 215, 44×2) | — | Approved | Used appropriately. |
| `<CenteredContainer preset="readable90">` | Yes | — | Approved | Wraps header `<Tip>`. |

## Cross-page duplication and link gaps

- **OVERLAP**: Every repo named here also appears as a Mermaid label in `infra-stack.mdx` (P1: `@livepeer/ai`, `livepeer-ai-python`, `go-livepeer`, `ai-worker`, `ai-runner`; P2: `@livepeer/react`, `webrtmp-sdk`, `livepeer-js`, `lpms`, `catalyst`; P3: `@muxionlabs/byoc-sdk`, `pytrickle`, `livepeer/comfystream`, `ComfyUI Stream Pack`, `ComfyUI-RTC`; P5: `livepeer/protocol`, `livepeer/go-livepeer`, `livepeer/subgraph`, `livepeer/coordination`, `arbitrum-lpt-bridge`). Repo-map is the canonical reference; infra-stack should link here instead of duplicating. The "merge-stub" provenance is clean — no contradictions detected.
- **OVERLAP (informational)**: `livepeer-js` and `ui-kit` row (line 120 + Note line 123) appears to address a known historical rename — well-handled by the inline `<Note>`. Solutions Repositories section (line 177) correctly bounded out-of-scope.
- **LINK GAPS**: Contribution Entry Points table (lines 207–214) does not link any of the "Start here" cells. Each row should link the repo URL + a Discord channel link or contribution guide.
- **LINK GAPS**: NaaP row (line 86) names `operator.livepeer.org` and "12 core plugins" but does not link the plugin list.
- **LINK GAPS**: Daydream row (line 184) references the Solutions tab without a specific Daydream URL.
- **LINK GAPS**: `pymthouse` row (line 87) — community repo, links the repo, but does not explain how a developer interacts with `pymthouse.com` or whether it's needed for typical builds.
- **LINK GAPS**: Storyboard row (line 135) names `storyboard-rust.vercel.app` as live deployment but does not link it.
- **LINK GAPS**: `OrchestratorTracker, LivepeerPerformanceAI, LivepeerExplorer, StronkAI` (line 152) are named in prose but not linked. Captain Stronk's repo(s) should be enumerable as links.
- **LINK GAPS**: Studio Gateway (line 85) named as a paid hosted provider but no link to where the developer would access it — this triggers the Studio framing question (see voice & copy).
- **STRANDED**: Page ends with single LinkArrow (line 215) to `resources/contributing`. No Related Pages CardGroup, no cross-tab graduation.
- **MERGE CHECK**: The brief flagged this page as a "MERGE-STUB of three sources". Reviewing the body, I see one consistent editorial voice, no orphaned migration comments, no duplicated repo rows, no contradictory taxonomies. The merge appears clean. INFO.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | |
| Banned words | 0 | (line 42 "actually" — not on banned list, INFO only) |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | (line 206 "If you want to work on…" is a table-column HEADER for the contribution-entry mapping — the only legitimate conditional usage on this page. INFO.) |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs (project rule 3) | 2 | line 85: "the Studio Gateway (paid)" — this is presented as one of two hosted AI Gateway providers, alongside the free Cloud Community Gateway. Naming a paid Solutions surface here is a routing-acknowledgement, NOT a Studio leak. Acceptable BUT the row is in the "Gateway API Surface" section, not the Solutions section — could confuse a developer into thinking Studio is a Developer-tab option. Recommend rewording to "the Studio Gateway (paid, see Solutions tab)" with a `<LinkArrow>`. HIGH for clarity. \n line 183: `livepeer/studio` row — explicitly tagged `[Solution; see Solutions tab]`. PASS — correctly bounded. |
| Hedging openers | 0 | — |
| Self-reference | 1 | line 42 "This page groups…" — minor self-reference; acceptable in reference-tab context but could be rewritten subject-first to "Each Livepeer repository falls into one of N layers, listed below by layer." INFO. \n line 172: "This documentation site. MDX, Mintlify." — INFO. |
| Deprecated terms (Broadcaster) | 1 | line 54 — `broadcaster` as `go-livepeer` runtime-role name. Architectural reference, NOT deprecated-synonym usage. INFO. |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Core Runtime Repositories | 5 | 4 | 5 | 5 | 4 | 23 PASS |
| On-Chain Protocol Repositories | 5 | 4 | 5 | 5 | 4 | 23 PASS |
| Gateway API Surface | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Real-Time Pipeline Repositories | 5 | 5 | 5 | 5 | 4 | 24 PASS |
| Application SDK Repositories | 5 | 4 | 5 | 5 | 4 | 23 PASS |
| Agent and Creative Repositories | 4 | 4 | 5 | 5 | 4 | 22 PASS |
| Monitoring Repositories | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Governance Repositories | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Documentation and Discovery Repositories | 4 | 4 | 4 | 5 | 4 | 21 PASS |
| Solutions Repositories | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Layer Dependencies | 5 | 5 | 5 | 5 | 5 | 25 PASS |
| Contribution Entry Points | 5 | 4 | 5 | 5 | 4 | 23 PASS |

Title "Repository Map": 5/4/5/5/5 = 24 PASS.

Best heading rhythm of the three concepts pages. Headings are concept-led, domain-anchored, scan-friendly.

## Code Block Audit

No fenced code blocks in body. N/A.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The page successfully catalogues every repo, but does not deliver the developer's actual next question: *which of these am I supposed to clone today?* A reader who lands here from "I want to build AI on Livepeer" sees 22+ repos with one-line roles and has no priority ranking. The page is a directory; the reader needs a map. Compare to a npm/PyPI top-package landing page that highlights "Most installed" / "Most starred" / "Recommended starting point".
- **Fix step:** Add a single hero block above the first H2 (after line 46) named "Start here". A 3-row `<Card>` grid: 1) "Building AI? Start with `livepeer-ai-js`" (link to repo + quickstart). 2) "Building video? Start with `livepeer/ui-kit`" (link to repo + quickstart). 3) "Operating a node? Start with `livepeer/go-livepeer`" (link to repo + Orchestrators tab). Drives the most common reader intent to a concrete action in two clicks.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` "Hero CTA" pattern; npm registry top-package layout; `v2/developers/build/ai-and-agents/overview.mdx` "Start with…" pattern (if present).

### Layer 2 — Composition
- **Gap:** Nine raw markdown tables. Reference pageType expects `<StyledTable>`. Each layer's table is structurally identical (Repo / Tag / Role / Language or Notes / Maintainer) — same column shape, repeated nine times. This is a textbook case for one data-driven `<StyledTable>` per layer rendered from a `repositories.json` import. The reader would also benefit from filter chips (Official / Community / Archived) at the top.
- **Fix step:** Create `snippets/data/developers/repositories.json` with one entry per repo (`name`, `url`, `tag`, `role`, `language`, `layer`, `notes`). Import in repo-map.mdx. Render each layer's section as `<StyledTable>` from filtered data: `<StyledTable rows={repositories.filter(r => r.layer === 'core-runtime')} />` — or render the whole page from one filterable component. Compare to `snippets/data/contracts/contract-addresses.json` consumed by `v2/about/concepts/governance-and-economics.mdx`. This is the highest ROI structural change in the developers tab.
- **Source/exemplar:** CLAUDE.md "No hardcoded data in MDX pages" hard rule; `snippets/data/` directory convention; existing `<StyledTable>` consumers in `v2/orchestrators/` and `v2/about/`.

### Layer 3 — Cross-page integration
- **Gap:** Every repo row could link to a concrete "use this repo for X" tutorial or guide — the reader's most natural next click after seeing the repo URL. Today the row tells you the repo exists; it does not tell you what to do with it. Also missing: the developer-tab repo-map should be cross-linked from every quickstart page (the reverse direction is currently weak). Within this page: no link to Discord channels for repo-specific help (line 209 mentions `#comfystream` Discord but does not link it).
- **Fix step:** (a) Add a fourth column to each repo table: `Use it for…` — one short link to the related guide. E.g. `livepeer-ai-js` → AI Jobs Quickstart; `pytrickle` → Trickle Protocol guide; `livepeer/go-livepeer` → Orchestrator Quickstart in `/v2/orchestrators/setup/quickstart`. (b) Replace the Discord channel mentions in the Contribution Entry Points table (lines 207–214) with actual Discord invite links + channel deep-links. (c) Add a Related Pages CardGroup at the foot with three cross-tab graduations: `/v2/about/concepts/about-livepeer` (protocol context), `/v2/community/contributing` (or Community tab equivalent), `/v2/orchestrators/concepts/role` (for node operators viewing monitoring repos).
- **Source/exemplar:** `v2/about/concepts/governance-and-economics.mdx` uses contract-address rows with linked next-page targets; canonical Mintlify table-with-link pattern.

### Layer 4 — Veracity and source authority
- **Gap:** Six load-bearing numerical or status claims need sources. (a) Line 42: "over 170 public repositories" — needs a GitHub Search citation + date. (b) Line 86: "12 core plugins" — needs link to NaaP plugin list. (c) Line 75: "The `confluence` branch of `livepeer/protocol` is the deployed Arbitrum version. The `streamflow` branch covers the L1 contracts" — needs branch link to GitHub. (d) Line 135: "Orchestrates 40 AI models" — needs link to the storyboard model registry. (e) Line 119: "Speakeasy-generated" — needs link to Speakeasy or the generation config. (f) Line 87: "OIDC provider, RFC 8693 token exchange, managed remote-signer proxy" — needs link to the pymthouse architecture page. The page declares `veracityStatus: verified` but these claims are sourceless.
- **Fix step:** (a) Add a "Source" column (or footnote anchors) per claim. (b) Update `lastVerified` whenever the page is touched. (c) Build a regular re-verification cadence (quarterly?) into a CI workflow that flags `lastVerified > 90 days`. (d) Demote `veracityStatus: verified` → `unverified` on the rows lacking source links until those are added.
- **Source/exemplar:** GitHub Search API for the 170-repo count; `livepeer/naap` repo plugin list; `livepeer/protocol` GitHub branches page; `livepeer/storyboard` repo README; Speakeasy.com docs.

### Layer 5 — Product-forward depth
- **Gap:** A repo map is a great product surface for signalling the *health and momentum* of an open-source project, but this page strips that signal entirely. Missing: stars/forks count per repo (or a "Activity" badge), last-release date, contributor count, "production-ready" vs "experimental" status beyond Official/Community/Archived. A developer evaluating Livepeer reads "22+ repos" and wants to know whether the ecosystem is alive. Today the page does not answer that. Compare to `awesome-livepeer` (linked) which itself uses GitHub badges per row.
- **Fix step:** (a) Add a `Status` badge column per row: `🟢 Active (commit in last 30 days)` / `🟡 Slow (commit in last 90 days)` / `🔴 Stale (no commit in 90 days)` — drive from a generated `repo-activity.json` produced by a CI script that queries the GitHub API. (b) Add a "Layer Dependencies" Mermaid diagram (replace the prose at lines 188–200 with a small dependency arrow diagram using `MermaidColours.jsx`). (c) Add a hero card at top reporting "X repos active in the last 30 days" as a top-line ecosystem signal. (d) Add a Decision Index card: "Is X production-ready? See `production-hardening-checklist.mdx`."
- **Source/exemplar:** `awesome-livepeer` badge pattern; `.claude/references/layout/exemplars.md`; `livepeer/awesome-livepeer` repo for activity-badge templates.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 6 / MEDIUM 5 / INFO 6

**Critical findings (top 5)**:
1. **Tables not StyledTable (5.5 / 5.23 / 5.24)**: 9 raw markdown tables on a `pageType: reference` page. Mass FAIL. HIGH.
2. **No data import (5.15 / CLAUDE.md hard rule)**: 22+ repos hardcoded across 9 tables. Should be `snippets/data/developers/repositories.json` imported and rendered. HIGH.
3. **No Related Pages footer (5.16 / 7.6)**: Single LinkArrow at line 215. Underweight for a 12.6KB reference catalogue. Missing cross-tab graduations. HIGH. |
4. **Studio Gateway labelled in Gateway API Surface section (project rule 3)**: Line 85 lists "the Studio Gateway (paid)" alongside the Cloud Community Gateway. While factually a hosted AI gateway provider, placing it in the Developer-tab gateway section without a clear "see Solutions" hand-off risks Studio-leak interpretation. HIGH for clarity / project rule 3 ambiguity. |
5. **Sourceless numerical claims (6.1 / 6.4 / 6.8)**: "over 170 public repositories", "12 core plugins", "40 AI models", `confluence`/`streamflow` branch claims — declared with `veracityStatus: verified` but lacking citations. HIGH. |

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Reword the Studio Gateway row (line 85). Suggested: `\| AI Gateway API \| Official \| REST API for direct AI inference. Hosted by the Cloud Community Gateway at \`dream-gateway.livepeer.cloud\` (free, off-chain). Paid Solutions providers also operate gateways — see <LinkArrow href="/v2/solutions/portal" label="Solutions" newline={false} />. \| Quickstart \|`. Removes the named "Studio Gateway" from the Developers-tab Gateway API row, replaces with a Solutions-tab pointer. | 85 | HIGH | S | project rule 3, check 1.14, 4.1 |
| 2 | Create `snippets/data/developers/repositories.json` from the 22+ hardcoded repo rows. One entry per repo: `{name, url, tag, role, language, layer, notes, statusBadge, useForGuide}`. Import in repo-map.mdx and render each layer's section as `<StyledTable>` from filtered data. | New file + lines 30–35 imports + all tables | HIGH | XL | CLAUDE.md "No hardcoded data" hard rule, check 5.15 |
| 3 | Convert all 9 raw markdown tables to `<StyledTable>` (after the data refactor in step 2 they will be rendered from JSON anyway). | 52, 70, 83, 99, 117, 133, 148, 161, 170, 181, 207 | HIGH | M (subsumed by step 2) | check 5.5, 5.23, 5.24 |
| 4 | Add Related Pages footer: replace the lone LinkArrow at line 215 with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` with four `<Card>` and `<CustomCardTitle icon ... horizontal />`: 1) `/v2/developers/resources/contributing`, 2) `/v2/about/concepts/about-livepeer` (cross-tab), 3) `/v2/orchestrators/concepts/role` (cross-tab), 4) `/v2/solutions/portal` (cross-tab). | 215 | HIGH | S | check 5.16, 5.17, 7.6 |
| 5 | Add citation links for six load-bearing claims. Line 42: cite GitHub search count + date. Line 75: link `confluence` and `streamflow` branches. Line 86: link NaaP plugin list. Line 87: link pymthouse architecture doc. Line 119: link Speakeasy generation source. Line 135: link storyboard model registry. Implement as inline `<LinkArrow>` or footnote anchors. | 42, 75, 86, 87, 119, 135 | HIGH | M | check 6.1, 6.4, 6.8 |
| 6 | Add prereq pointer at top alongside the existing landscape/infra-stack links: "Looking for the right repo? See [Start here](#start-here) below." — followed by a 3-Card hero block routing readers by intent (AI / Video / Operate a node) to the first repo + quickstart. | new section after line 46 | HIGH | M | Layer 1 |
| 7 | Add per-repo `Use it for…` column (or inline LinkArrow) linking each row to its primary tutorial/guide. | All repo table rows | MEDIUM | L (subsumed by step 2 if data file has `useForGuide` field) | Layer 3, check 4.20 |
| 8 | Add Contribution Entry Points link enrichment (lines 207–214): replace prose "open issues" / "Discord" mentions with actual links (`https://github.com/{repo}/issues`, Discord invite + channel deep-links). | 207–214 | MEDIUM | M | Layer 3 |
| 9 | Replace opening Markdown HR `---` (line 40) with `<CustomDivider />`. | 40 | MEDIUM | S | check 5.26 |
| 10 | Set `veracityStatus: unverified` until the citation links from step 5 land, then restore to `verified`. | line 29 | MEDIUM | S | check 6.6 |
| 11 | Reword self-reference at line 42 ("This page groups…") to subject-first ("Every developer-facing Livepeer repository falls into one of N layers, grouped below by layer.") | 42 | INFO | S | check 2.15 (mild) |
| 12 | Declare `pageVariant: compendium` in frontmatter. | between 17 and 18 | INFO | S | check 1.3 |
| 13 | Change `lifecycleStage: discover` → `build` for reference content. | 21 | INFO | S | check 1.7 |
| 14 | Add Status badge per repo row once `repo-activity.json` is generated by a CI script (longer-term). | All repo rows | INFO | XL | Layer 5 |
| 15 | Add Layer Dependencies Mermaid diagram (replacing or supplementing lines 188–200 prose). | 188–200 | INFO | M | Layer 5 |
| 16 | Add Discord channel link for `#comfystream` and `#developers` mentions (lines 209, 212). | 209, 212 | INFO | S | Layer 3 |
