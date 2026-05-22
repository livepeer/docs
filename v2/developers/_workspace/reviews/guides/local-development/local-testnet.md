# Review: local-testnet.mdx

**Page**: `v2/developers/guides/local-development/local-testnet.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A12
**pageType (from frontmatter)**: `instruction` (canonical)
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: `build`
**Bytes**: 11,006
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Has `pageType`, `purpose`, `audience`, `complexity`, `lifecycleStage`, `keywords`, OG block. Missing `veracityStatus`. Has `lastVerified: 2026-03-28T...` (line 25). |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: instruction` (line 22). |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not declared. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: build` (line 23). |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 24). |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` (line 8). |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | MIXED | `lifecycleStage: operate` (line 7). Page is about local development — should be `build`. `operate` implies production. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. Should be `unverified` until commands TESTED. |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description subject-first ≤160 | PASS | Lines 4-6: "Deploy the full Livepeer protocol stack locally using Hardhat and connect go-livepeer nodes to your own contracts for development and testing." 154 chars. Subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | MIXED | Uses `/snippets/assets/media/og-images/fallback.png` (line 17) — fallback image rather than developer-tab specific. Other 4 local-dev pages use `/snippets/assets/site/og-image/en/developers.png`. Inconsistent. |
| 1. Frontmatter | 1.13 | keywords specific | PASS | All specific (testnet, hardhat, deploy contracts, go-livepeer, developer). |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | PASS | OSS contributor + protocol-developer persona. |
| 2. Voice & Copy | 2.1 | UK English throughout | MIXED | Line 192: "Automatically initialises a new round when needed" — UK ✓. Line 242: "After the next round initialises" — UK ✓. Line 182 `-initializeRound` is a go-livepeer CLI flag (US-spelled identifier in upstream binary) — protected zone, INFO only. PASS. |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | |
| 2. Voice & Copy | 2.5 | Opening order subject-first | PASS | Line 31: "Running a local Livepeer stack lets you develop against real protocol contracts without spending ETH or affecting mainnet state." Subject-first. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | |
| 2. Voice & Copy | 2.7 | Audience register matches token | PASS | |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | Hardhat, Controller, BondingManager, TicketBroker, ServiceRegistry, BondingVotes — all canonical. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | Note: line 34 `<Tip>` contains an EN-DASH (`–`) not em-dash, in "the same deploy script applies – swap…". Em-dash check is for `—` (U+2014); EN-DASH (`–`, U+2013) is technically distinct but the project's UK style guide and 2.12 typically read both as banned narrative dashes. Quoted: "the same deploy script applies – swap the Hardhat network target". MEDIUM — replace with comma or semicolon. |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | Section openers: "Running a local Livepeer stack…", "You need the following installed…", "The deploy script…", "With contracts deployed…", "The same deploy script…", "The local testnet…" — all system-led. |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | PASS | No `Broadcaster`, `Pool worker`, `Hybrid mode` references. Uses `gateway` consistently (line 205 `-gateway` flag). |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | |
| 2. Voice & Copy | 2.18 | Spell check | N/A | |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | MIXED | `delta` branch of `livepeer/protocol` (lines 57, 263) used as the branch name without explaining what `delta` is (mainnet release branch). `confluence` and `streamflow` branches (referenced via repo-map.mdx) not mentioned here. `cast send` (lines 217, 230, 236) used without inline definition or link to Foundry docs. |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening on instruction | MIXED | Page opens with intro paragraph + Tip + Prerequisites — then Steps. Acceptable for instruction (Prerequisites first). |
| 2.D | 2.D2 | Every function/API named has code/link | PASS | Every Hardhat command shown; every go-livepeer flag shown; every `cast send` call shown with parameters. |
| 2.D | 2.D3 | Versions stated explicitly | MIXED | Line 44: "Node.js v18 or later" PASS. Line 45: "Go 1.21 or later" PASS. Line 57: `git checkout delta` (branch, not tag — version-soft). No go-livepeer tag pinned. Hardhat version not pinned. |
| 2.D | 2.D4 | Error states in main content | FAIL | No error-state handling. Common failures (contract compilation error, deploy script failing, hardhat node port collision, faucet rate limit hit, bond `approve` reverting due to insufficient allowance) not addressed. |
| 2.D | 2.D5 | No prose explanations of self-evident code | PASS | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | MIXED | Line 138 `<Info>` contains primary governance content about `LivepeerTokenFaucet` gating (`if (!isProdNetwork(hre.network.name))`). This is decision-relevant info that should be in main prose. Line 33 `<Tip>` covers Sepolia scope — appropriate as header callout. Line 262 `<Warning>` covers `arbitrumSepolia` config — appropriate. |
| 3. Headings | 3.1 | Every heading ≥20/25 | PASS | See Heading Score Table. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule applied | PASS | "Deploy the protocol contracts", "Connect go-livepeer to your local contracts", "Deploying to Arbitrum Sepolia" — domain-anchored. |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Deploy a local testnet" — 4 words (lower bound of well-formed). |
| 3. Headings | 3.7 | Editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | instruction = task-oriented. |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Job: deploy local protocol + connect go-livepeer nodes. Tightly scoped. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer deploy the Livepeer protocol contracts to a local Hardhat node and connect go-livepeer nodes against them." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | MIXED | No top-of-page prereq link to local-development/overview. No tail-of-page link forward — closing prose (line 268) is a summary, not a next step. |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages (lines 270-285) with 4 cards including 2 GitHub repos. |
| 4. Structure | 4.5 | Prerequisites stated or linked | PASS | `## Prerequisites` section (line 39) with 4 items: Node.js v18+, yarn, Go 1.21+, git, Ethereum wallet. Comprehensive. |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Line 33 `<Tip>` bounds the page to "local Hardhat deployment only" with a pointer to `arbitrumSepolia` further down. Acceptable. |
| 4. Structure | 4.7 | Information type correct | PASS | Procedural + reference. |
| 4. Structure | 4.8 | No content duplication | MIXED | Lines 168-208 (go-livepeer orchestrator + gateway start commands) overlap with `local-gateway.mdx` and `local-orchestrator.mdx`. Acceptable because the local-testnet context (`-network offchain` + `-ethController <address>`) is distinct. Different flag set; arguably correct duplication. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | MIXED | Cross-tab cards: `/v2/about/protocol/blockchain-contracts` (line 273) ✓, `/v2/about/resources/reference/livepeer-contract-addresses` (line 276) ✓, two GitHub repos (lines 279, 282). 2 cross-tab to About, plus upstream repos. Could add `/v2/orchestrators/setup/...` for "moving from devnet to real network operator". |
| 4. Structure | 4.11 | Discord test | PASS | Answers "how do I deploy local contracts and run go-livepeer against them?" — yes, end-to-end. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 11KB — substantive. Longest page in subgroup. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | MIXED | Line 263 `<Warning>` names `arbitrumSepolia` config caveat. Line 102 names `gethDev` short round lengths. No general "limitations of local testnet vs Sepolia vs mainnet" comparison. |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | All 11 fenced blocks tagged `bash`. |
| 4. Structure | 4.18 | Code-first opening | MIXED | See 2.D1. |
| 4. Structure | 4.19 | Error states in main content | FAIL | See 2.D4. |
| 4. Structure | 4.20 | Every function/API named has code/link | PASS | Every contract name in §"Deployed components" (lines 122-136) named via raw markdown table; could be linked to source files but table format is acceptable for reference. |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | PASS | instruction matches procedural body + Prerequisites + Reference table + Steps + Related Pages. |
| 5. Layout | 5.2 | Required sections present per pageType | MIXED | instruction matrix: Prerequisites ✓, Steps ✓ (two Steps blocks), Verification — MISSING (Step 6 "Bond LPT and activate an orchestrator" ends with "After the next round initialises… your orchestrator enters the active set and can call `reward()`" — that's narrative direction, not a verification command). Next Steps — Related Pages ✓. |
| 5. Layout | 5.3 | Only approved components used | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | MIXED | Procedural body uses raw `<Steps>` not `<StyledSteps>` — FAIL 5.21. Reference table (lines 122-136) uses raw markdown — should be `<StyledTable>` per 5.23. Flags table at lines 187-192 also raw markdown. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter values | PASS | |
| 5. Layout | 5.8 | CSS custom properties only | PASS | |
| 5. Layout | 5.9 | Generated file banners intact | N/A | |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | Header CTA `<Tip>` (line 33) is not wrapped in `<CenteredContainer>` — other local-dev pages wrap their Tip. No opening `<CustomDivider />` before intro (line 31). Dividers placed correctly between sections. |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | |
| 5. Layout | 5.15 | Data imports used | MIXED | Contract list (lines 122-136) hardcoded. Could be `snippets/data/about/protocol-contracts.json` (or there may be an existing data source — needs propagate check). Hardhat config values (lines 96-100 table) hardcoded — could pull from `migrations.config.ts` via a snippet. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | MIXED | Both present: closing prose (line 268) + Related Pages CardGroup (line 272). Dual handoff borderline. |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (line 272) not `<Columns cols={2}>`. Bare `title=` not `<CustomCardTitle>`. Heading is `## Related pages` (line 270) — sentence-case instead of title-case `## Related Pages`. |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon + title | MIXED | All 11 blocks have `icon="terminal"` but no `title=` attribute. Per 5.20 both required. Lines: 54, 62, 68, 78, 88, 108, 150, 162, 171, 198, 216, 228 — `icon="terminal"` present, `title=` absent on every block. Partial PASS — icon present is better than none. |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Lines 52-114 use raw `<Steps>` not `<StyledSteps>`. Lines 148-244 second block also raw `<Steps>`. 13 `<Step>` instances total. |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | FAIL | Related Pages cards (lines 273-284) bare `title=`. |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | 3 raw markdown tables: lines 96-100 (Hardhat config), 122-136 (Deployed components — 13 rows), 187-192 (Flag purposes). All should be `<StyledTable>`. |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 3 tables. |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | 2 Steps blocks + 3 tables = 5 major elements. instruction pageType permits multiple Step blocks; tables are the issue. |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | No opening `<CustomDivider />` before intro (line 31). Internal dividers at 37, 48, 116, 142, 246, 266 OK. Divider before Related Pages at line 266 — PASS. |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | No Mermaid. A sequence diagram showing Hardhat node ↔ Controller ↔ go-livepeer would help. |
| 5. Layout | 5.28 | Import section ordering | MIXED | Lines 28-29: `CustomDivider`, `LinkArrow` — both element imports. `LinkArrow` (line 29) imported but never used in body. |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | |
| 5. Layout | 5.32 | Reference tables at end | MIXED | Deployed components table (lines 122-136) is mid-page reference; could move to end or wrap as collapsed Accordion. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | PASS | |
| 6. Veracity | 6.1 | Every factual claim citable | MIXED | Many citation-worthy claims: "Hardhat starts a local JSON-RPC node at `http://127.0.0.1:8545` with chain ID `31337`" (line 82) — verifiable per Hardhat docs but no link. "Faucet seeded with `6,343,700 LPT` (`genesis.crowdSupply`)" (line 102) — needs link to `migrations.config.ts`. "20 accounts with 10,000 ETH each" (line 82) — Hardhat default; needs link. `roundLength: 5760` (line 263) — needs source. |
| 6. Veracity | 6.2 | Code tested | FAIL | No TESTED/NOT-TESTED labels on the 11 code blocks. |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | |
| 6. Veracity | 6.4 | Numbers are real | MIXED | Several numeric claims (6,343,700 LPT, 500,000 LPT, 50 blocks, 7 rounds, 1 hour, 5760 blocks) — all need source citations from `migrations.config.ts`. |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness check | MIXED | Branch `delta` (lines 57, 263) — branch name, not tag. `lastVerified: 2026-03-28` (line 25) — older than the other 3 local-dev pages (2026-05-13). If branch HEAD has moved since 28 March, page may be stale. |
| 6. Veracity | 6.9 | No open-ended needs-research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers respected | PASS | Direct links to `livepeer/protocol` and `livepeer/go-livepeer` repos in Related Pages. |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | docs.json line 2699. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Navigation | 7.3 | Portal routes to section | PASS | |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | PASS | |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | MIXED | 2 About-tab links + 2 GitHub repo links. Could add Orchestrators graduation. |
| 7. Navigation | 7.7 | File in correct lane | PASS | |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | |
| 7. Navigation | 7.11 | Resources sub-structure correct | N/A | |
| 7. Navigation | 7.12 | Guides scope correct | PASS | |
| 8. Links & Rendering | 8.1 | All internal links resolve | PASS | `/v2/about/protocol/blockchain-contracts` (line 273), `/v2/about/resources/reference/livepeer-contract-addresses` (line 276) — verified. |
| 8. Links & Rendering | 8.2 | All external links live | MIXED | `https://github.com/livepeer/protocol.git` (line 55), `https://github.com/livepeer/protocol/tree/delta` (line 279), `https://github.com/livepeer/go-livepeer.git` (line 151), `https://github.com/livepeer/go-livepeer` (line 282) — all repo URLs assumed live. The `delta` branch on `livepeer/protocol` should be verified to still exist. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | |
| 8. Links & Rendering | 8.4 | All images load | N/A | |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | |
| 9. Process & Governance | 9.1-9.6 | | N/A | |
| 10. Content Completeness | 10.1 | Every question in job list has page | PASS | |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | PASS | End-to-end: clone → compile → deploy → start nodes → faucet → bond → activate orchestrator. Most complete page in subgroup. |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | PASS | |
| 10. Content Completeness | 10.5 | Self-containment holds | PASS | |
| 10. Content Completeness | 10.6 | Code samples have working language path | PASS | bash. |
| 10. Content Completeness | 10.7 | Persona-specific guides present | PASS | OSS contributor persona end-to-end path. |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Deploy a local testnet" | PASS | |
| sidebarTitle | Yes | "Local testnet" | PASS | |
| description | Yes | 154 chars | PASS | |
| pageType | Yes | instruction | PASS | Canonical. |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | operate | MIXED | Should be `build` — page is local-dev, not production operate. |
| keywords | Yes | 7 keywords | PASS | "livepeer", "developer" generic — INFO. |
| og:image | Yes | fallback.png | MIXED | Other 4 local-dev pages use developers.png. Inconsistent. |
| og:image:alt | Yes | "Livepeer Docs social preview image" | MIXED | Other pages use "...for Developers". |
| og:image:type/width/height | Yes | image/png 1200×630 | PASS | |
| veracityStatus | No | — | FAIL | Missing. |
| lastVerified | Yes | 2026-03-28T00:00:00.000Z | MIXED | Older than sibling pages; branch HEAD may have drifted. |
| status | No | — | PASS | (Legacy field correctly absent.) |
| pageVariant | No | — | INFO | Not required for instruction. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | No opening `<CustomDivider />` before intro line 31. Divider before Related Pages line 266 — PASS. |
| `<Tabs>` / `<Tab icon>` | No | — | — | Sepolia + local could be 2 Tabs; today the Sepolia path is appended as its own H2 at line 248. |
| `<StyledSteps>` / `<StyledStep>` | NO | Required for instruction | — | Raw `<Steps>` × 2 blocks (lines 52, 148) with 13 raw `<Step>` instances. FAIL 5.21. |
| `<Card>` / `<Columns>` Related Pages | `<CardGroup>` (line 272) | Required | — | Wrong wrapper + heading is `## Related pages` (sentence-case, line 270). |
| `<CustomCardTitle>` | NO | Required | — | Bare `title=`. |
| Fenced code with icon + title | MIXED | Required | — | All 11 blocks have `icon="terminal"` ✓; all 11 missing `title=`. |
| `<Note>` / `<Info>` / `<Tip>` / `<Warning>` | `<Tip>` line 33 (no CenteredContainer wrapper), `<Info>` line 138, `<Warning>` line 262 | — | varies | `<Info>` line 138 carries decision-relevant gating info — FAIL 2.D7. `<Tip>` line 33 contains EN-DASH (FAIL 2.12). `<Warning>` line 262 appropriate. |
| `<Accordion>` | No | — | Recommended | "Deployed components" table (122-136, 13 rows) could be AccordionGroup with per-contract collapsible detail. |
| `<StyledTable>` | NO | Required for tabular data | — | 3 raw markdown tables. FAIL 5.5 + 5.23 + 5.24. |
| `<LinkArrow>` | Imported (line 29) but unused | — | — | Remove or use. |
| `<CenteredContainer>` | No | — | Recommended | Header `<Tip>` (line 33) not wrapped — inconsistent with other 3 local-dev pages. |

## Cross-page duplication and link gaps

- **OVERLAP**: Lines 168-208 (go-livepeer orchestrator + gateway start commands) overlap conceptually with `local-orchestrator.mdx` and `local-gateway.mdx`. The local-testnet context (`-network offchain` + `-ethController <address>`) is distinct enough to justify duplication; acceptable.
- **OVERLAP**: Contract list (lines 122-136) overlaps `v2/about/protocol/blockchain-contracts.mdx` (linked in Related Pages). Should pull from a shared data source.
- **LINK GAPS**: `delta` branch name (lines 57, 263) used without explanation — link to branch URL `livepeer/protocol/tree/delta` or define "delta is the mainnet protocol release branch". Line 263 in `<Warning>` references "the current delta branch" without anchor.
- **LINK GAPS**: `cast` (Foundry) commands (lines 217, 230, 236) used without link to Foundry book or installation guide. `cast` is required to follow Step 7-8 of section 2; reader can't proceed without it but it's not stated as a prereq.
- **LINK GAPS**: Hardhat docs link absent. Page uses `yarn hardhat` commands throughout but never links to Hardhat docs.
- **LINK GAPS**: No reference to `livepeer/protocol/deploy/migrations.config.ts` despite citing its values 6 times (lines 92, 96-100, 102, 263).
- **LINK GAPS**: `gethDev` network config (line 92) — legacy name referencing the "geth dev mode" pattern. Should link to where the config lives in `livepeer/protocol`.
- **STRANDED**: After successful deployment, the reader is told "your orchestrator enters the active set and can call `reward()`" (line 242). What does the reader do next? Run a test transcoding job? Run a test AI job? Where does the reader graduate to? The page ends with a summary, not a next step.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | (zero em-dashes `—`) |
| En-dashes (`–`) | 1 | line 34: "the same deploy script applies – swap the Hardhat network target for `arbitrumSepolia` and provide a funded Sepolia wallet." MEDIUM. Project style typically reads EN-DASH the same as em-dash. |
| US spellings | 0 | (3 hits on `-initializeRound` CLI flag — protected zone, US-spelled identifier in upstream binary) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Prerequisites | 5 | 4 | 5 | 5 | 5 | 24 PASS (OK heading term) |
| Deploy the protocol contracts | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Deployed components | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Connect go-livepeer to your local contracts | 5 | 4 | 5 | 5 | 4 | 23 PASS |
| Deploying to Arbitrum Sepolia | 5 | 4 | 5 | 5 | 4 | 23 PASS |
| Related pages | — | — | — | — | — | EXEMPT (but lowercase — see 5.17) |

Step titles (raw `<Step>` not StyledStep, but scored):
- "Clone the protocol repo" — 5/3/5/5/4 = 22 PASS
- "Install dependencies" — 5/3/5/5/5 = 23 PASS
- "Compile the contracts" — 5/3/5/5/5 = 23 PASS
- "Start a local Hardhat node" — 5/4/5/5/4 = 23 PASS
- "Deploy all contracts" — 5/3/5/5/5 = 23 PASS
- "Note the Controller address" — 5/3/5/5/4 = 22 PASS
- "Build go-livepeer" — 5/3/5/5/5 = 23 PASS
- "Get the Controller address" — 5/3/5/5/4 = 22 PASS (duplicate verb with earlier "Note" step — minor)
- "Start an orchestrator node" — 5/4/5/5/4 = 23 PASS
- "Start a gateway node" — 5/4/5/5/5 = 24 PASS
- "Request test LPT from the faucet" — 5/4/5/5/4 = 23 PASS
- "Bond LPT and activate an orchestrator" — 5/4/5/5/4 = 23 PASS

Title "Deploy a local testnet": 5/4/5/5/4 = 23 PASS.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 54 | bash | ✓ terminal | NO | — | Add `title="clone-protocol.sh"`. |
| 62 | bash | ✓ terminal | NO | — | Add `title="install-deps.sh"`. |
| 68 | bash | ✓ terminal | NO | — | Add `title="compile-contracts.sh"`. |
| 78 | bash | ✓ terminal | NO | — | Add `title="hardhat-node.sh"`. |
| 88 | bash | ✓ terminal | NO | — | Add `title="deploy-contracts.sh"`. |
| 108 | bash | ✓ terminal | NO | — | Add `title="get-controller-address.sh"`. |
| 150 | bash | ✓ terminal | NO | — | Add `title="build-go-livepeer.sh"`. |
| 162 | bash | ✓ terminal | NO | — | Add `title="get-controller-address.sh"`. (duplicate with line 108 — same purpose, different repo context) |
| 171 | bash | ✓ terminal | NO | — | Add `title="start-orchestrator.sh"`. |
| 198 | bash | ✓ terminal | NO | — | Add `title="start-gateway.sh"`. |
| 216 | bash | ✓ terminal | NO | — | Add `title="faucet-request.sh"`. |
| 228 | bash | ✓ terminal | NO | — | Add `title="bond-lpt.sh"`. |
| 252 | bash | ✓ terminal | NO | — | Add `title="deploy-arbitrum-sepolia.sh"`. |

13 blocks — all `icon` present, all `title` absent. No TESTED labels.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The reader's outcome is "I have a fully functioning local Livepeer protocol with my orchestrator activated, ready to process a real job". The page gets them to Step 8 ("Bond LPT and activate an orchestrator") and asserts "your orchestrator enters the active set and can call `reward()`" (line 242) — but there's no verification: how does the reader confirm the orchestrator is in the active set? No `cast call` query, no `livepeer_cli` status command, no explicit log-line pattern. Then the page ends with a summary, not a "now go transcode a video" or "now run a BYOC job" step.
- **Fix step:** (a) Add a `## Verification` H2 between current Step 8 and the Arbitrum Sepolia section. 3 verification commands: (i) `cast call <BONDING_MANAGER> "isActiveTranscoder(address)" <YOUR_ADDR>` expecting `true`; (ii) `cast call <ROUNDS_MANAGER> "currentRound()"` showing round advanced after Step 5; (iii) `livepeer_cli -o` showing the local orchestrator status (need to verify this CLI flag against go-livepeer source). (b) Replace the closing summary (line 268) with a concrete next step: "Now run a transcoding job: see [transcoding-direct-quickstart](/v2/developers/build/video/transcoding-direct-quickstart) using your gateway address as the API target."
- **Source/exemplar:** `_packet/component-matrix.md` instruction matrix Verification Required; `livepeer/protocol` test scripts for active-set queries.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` (FAIL 5.21) — major composition violation. 3 raw markdown tables (FAIL 5.23 + 5.24). Header `<Tip>` line 33 not wrapped in `<CenteredContainer>` (inconsistent with sibling pages). `<Info>` line 138 carries primary content (FAIL 2.D7). No opening `<CustomDivider />` before intro. Sepolia section (lines 248-264) appended as separate H2 instead of being a `<Tab>` paired with the local-Hardhat path.
- **Fix step:** (a) Convert both `<Steps>` blocks to `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`. Add icon per step (`code-fork` clone, `cube` install, `gear` compile, `server` hardhat-node, `rocket` deploy, `note-sticky` note-address, `hammer` build, `note-sticky` get-address, `server` start-orch, `server` start-gateway, `coin` faucet, `lock` bond). (b) Convert 3 raw markdown tables to `<StyledTable>`. (c) Wrap line 33 `<Tip>` in `<CenteredContainer preset="readable90">` to match siblings. (d) Promote line 138 `<Info>` content into main prose. (e) Add `<CustomDivider />` before line 31 intro. (f) Convert "Deploy the protocol contracts" + "Deploying to Arbitrum Sepolia" into `<Tabs>` with `<Tab title="Local Hardhat" icon="laptop">` and `<Tab title="Arbitrum Sepolia" icon="ethereum">` — or keep sequential if Sepolia is genuinely a downstream destination. (g) Heading line 270 `## Related pages` → `## Related Pages` (title case).
- **Source/exemplar:** `_packet/component-matrix.md` instruction matrix; `byoc-quickstart.mdx` review for StyledSteps + Tab pattern.

### Layer 3 — Cross-page integration
- **Gap:** Several glaring missing links: (a) `delta` branch reference (lines 57, 263) not anchored. (b) `cast` (Foundry) used 3× as a prereq tool but never named in Prerequisites and never linked. (c) Hardhat used throughout without a Hardhat docs link. (d) `migrations.config.ts` cited 6× without a link. (e) `gethDev` network config (line 92) — legacy naming without source. (f) No graduation to "now what?" — reader has a local testnet but no link to a tutorial that uses it. (g) About-tab links are good (2 cross-tab cards), but missing graduation to Orchestrators tab where the active-set / reward-call concepts live.
- **Fix step:** (a) Link `delta` (lines 57, 263) to `https://github.com/livepeer/protocol/tree/delta`. (b) Add `cast` (Foundry) to Prerequisites with link to Foundry book installation. (c) Add inline `<LinkArrow href="https://hardhat.org/docs">Hardhat documentation</LinkArrow>` in the intro. (d) Link `migrations.config.ts` to its source path on every citation. (e) Add `{/* REVIEW: link gethDev config to source in livepeer/protocol */}` placeholder. (f) Replace closing summary with concrete next-step: `transcoding-direct-quickstart` or `byoc-quickstart` or `ai-jobs-direct-quickstart` using the local stack as target. (g) Replace one Related Pages card with a cross-tab graduation to `/v2/orchestrators/concepts/role` (active set, reward call concepts).
- **Source/exemplar:** `livepeer/protocol/deploy/migrations.config.ts`; Foundry book; Hardhat docs.

### Layer 4 — Veracity and source authority
- **Gap:** Several numeric and structural claims need sources. (a) Line 82: "20 accounts with 10,000 ETH each" — Hardhat default; need link to Hardhat node docs. (b) Line 102: "Faucet seeded with `6,343,700 LPT` (`genesis.crowdSupply`)" — need link to `migrations.config.ts`. (c) Line 102: "deployer receives `500,000 LPT` (`genesis.companySupply`)" — same. (d) Line 96-100 table values (`roundLength: 50`, `unbondingPeriod: 7`, etc.) — need source. (e) Line 263: `roundLength: 5760` — same. (f) `lastVerified: 2026-03-28` is older than siblings (2026-05-13) — `delta` branch may have drifted in those ~6 weeks. (g) No TESTED labels on 13 code blocks.
- **Fix step:** (a) Add inline citation `(per migrations.config.ts)` with LinkArrow after each value claim. (b) Re-run the entire deploy flow against current `delta` HEAD and bump `lastVerified` to today. (c) Add `veracityStatus: unverified` until re-verification. (d) Add TESTED labels with date + go-livepeer tag + Hardhat version. (e) Pin Hardhat version in Prerequisites (current page just says "Node.js v18 or later and yarn").
- **Source/exemplar:** `livepeer/protocol/deploy/migrations.config.ts`; `livepeer/protocol/deploy/deploy_contracts.ts`.

### Layer 5 — Product-forward depth
- **Gap:** This is the most complete page in the subgroup — but it reads as a script transcription, not a product moment. Missing: time/effort estimate ("this takes 15-30 minutes"), what success looks like at each stage (orchestrator dashboard? `cast call` reading active set?), the "why" of `delta` branch choice, a "this is which version of the protocol" Badge, a comparison frame against the alternatives (Sepolia / Mainnet) beyond the bare config table. The reader doesn't know if `delta` is the current mainnet branch or a feature branch.
- **Fix step:** (a) Add `<Badge>livepeer/protocol delta branch — Arbitrum One mainnet equivalent</Badge>` near title with a one-line explanation: "`delta` is the protocol release deployed to mainnet; cloning this branch gives you a contract suite identical to production." (b) Add "Expected effort" callout near intro: "30-45 minutes from clone to active orchestrator. Requires ~2 GB disk for protocol + go-livepeer build." (c) Add a "Local vs Sepolia vs Mainnet" `<StyledTable>` comparison near the start of "Deploying to Arbitrum Sepolia" (line 248) — 3 columns × rows for: ETH cost, on-chain finality, can-test-payments, can-test-active-set, reset-behaviour. (d) Add Discord channel link in footer for live help (`#governance` or `#protocol` for protocol questions).
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — product-effort-badge pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 7 / INFO 3

**Critical findings (top 5)**:
1. **Raw `<Steps>` not `<StyledSteps>` (5.21)** — 2 blocks, 13 step instances (lines 52, 148). HIGH.
2. **3 raw markdown tables not `<StyledTable>` (5.23 / 5.24)** — lines 96-100, 122-136, 187-192. HIGH.
3. **Related Pages format wrong (5.17 / 5.22)** — `<CardGroup>` + bare `title=` + lowercase `## Related pages`. HIGH.
4. **All 13 code blocks missing `title=` attribute (5.20)** — `icon` present but `title=` absent. MEDIUM (partial PASS — icon better than nothing). |
5. **`<Info>` (line 138) carries primary content (2.D7)** + **EN-DASH on line 34 (2.12 spirit)** + **lifecycleStage: operate wrong (1.7)**. MEDIUM/HIGH. |

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Convert both raw `<Steps>` blocks (lines 52, 148) to `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`. Add icon prop per Step. Same import as siblings. | 52-114, 148-244 | HIGH | L | check 5.21 |
| 2 | Convert 3 raw markdown tables to `<StyledTable>`: lines 96-100 (Hardhat config), 122-136 (Deployed components — 13 rows), 187-192 (Flag purposes). Add `<TableRow header>` + `<TableCell header>` headers. | 96-100, 122-136, 187-192 | HIGH | L | check 5.23, 5.24 |
| 3 | Convert Related Pages `<CardGroup>` (line 272) to `<Columns cols={2}>` + per-card `<CustomCardTitle icon title horizontal />`. Fix heading line 270 `## Related pages` → `## Related Pages` (title case). Add cross-tab card to `/v2/orchestrators/concepts/role`. | 270-285 | HIGH | M | check 5.17, 5.22 |
| 4 | Add `title=` to every code block (13 blocks total). Suggested filenames in §"Code Block Audit". Add TESTED labels with date + branch SHA + tool versions. | 54, 62, 68, 78, 88, 108, 150, 162, 171, 198, 216, 228, 252 | HIGH | M | check 5.20, 6.2 |
| 5 | Add `## Verification` H2 between Step 8 of section 2 and "Deploying to Arbitrum Sepolia". 3 commands: `cast call BondingManager isActiveTranscoder`, `cast call RoundsManager currentRound`, `livepeer_cli -o` (verify flag). | After 244 | HIGH | M | check 5.2, Layer 1 |
| 6 | Replace EN-DASH on line 34 with comma or semicolon. `<Tip>` text: "the same deploy script applies, swap the Hardhat network target for `arbitrumSepolia` and provide a funded Sepolia wallet." | 34 | HIGH | S | check 2.12 spirit |
| 7 | Promote `<Info>` content (line 138) into main prose: "`LivepeerTokenFaucet` is the only contract that is skipped on production networks (`mainnet`, `arbitrumMainnet`). The deploy script gates it with `if (!isProdNetwork(hre.network.name))`." | 138-140 | MEDIUM | S | check 2.D7 |
| 8 | Change `lifecycleStage: operate` → `lifecycleStage: build`. | 7 | MEDIUM | S | check 1.7 |
| 9 | Add `veracityStatus: unverified` to frontmatter. Re-verify the deploy commands against current `delta` HEAD and bump `lastVerified`. | After 25 | MEDIUM | M | check 1.8, 6.6 |
| 10 | Wrap line 33 `<Tip>` in `<CenteredContainer preset="readable90">` to match sibling pages. Add `<CustomDivider />` before line 31 intro. | 31, 33 | MEDIUM | S | check 5.11, 5.26 |
| 11 | Replace closing summary (line 268) with concrete next-step LinkArrow to `transcoding-direct-quickstart` or `byoc-quickstart` using the local stack. Remove dual-handoff with Related Pages. | 268 | MEDIUM | S | check 5.16, Layer 3 |
| 12 | Add `cast` (Foundry) to Prerequisites (after line 46) with link to Foundry book installation. | After 46 | MEDIUM | S | check 4.5, Layer 3 |
| 13 | Link `delta` branch (lines 57, 263) to `https://github.com/livepeer/protocol/tree/delta` on first use. | 57, 263 | MEDIUM | S | check 2.21, Layer 3 |
| 14 | Add inline LinkArrow to `migrations.config.ts` after each cited config value (lines 92, 96-100 table, 102, 263). | 92, 96-100, 102, 263 | MEDIUM | M | check 6.1, 6.4 |
| 15 | Replace OG image to match siblings: `/snippets/assets/site/og-image/en/developers.png` + alt "...for Developers". | 17, 18 | INFO | S | check 1.12, sibling consistency |
| 16 | Remove unused `LinkArrow` import (line 29) OR use in body. | 29 | INFO | S | check 5.28 |
| 17 | Drop "livepeer" + "developer" generic keywords. | 10, 16 | INFO | S | check 1.13 |
| 18 | Add `<Badge>livepeer/protocol delta — Arbitrum One mainnet equivalent</Badge>` + 1-line "Expected effort" callout near intro. | After title | MEDIUM | M | Layer 5 |
| 19 | Add "Local vs Sepolia vs Mainnet" comparison `<StyledTable>` at start of section "Deploying to Arbitrum Sepolia". | After 248 | MEDIUM | M | Layer 5 |
