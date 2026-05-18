# Review: overview.mdx (guides/local-development)

**Page**: `v2/developers/guides/local-development/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A12
**pageType (from frontmatter)**: `overview` (NON-CANONICAL)
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: NOT DECLARED
**Bytes**: 5,330
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Carries legacy `status: current` (line 23). |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Line 21: `pageType: overview` — not in canonical set `concept | tutorial | guide | instruction | navigation | reference | resource`. Should be `concept` (with `pageVariant: overview`) or `navigation` (page routes via Related Pages cards). |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not declared. Should be `overview`. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing. Should be `orient`. |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 22). |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing. |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing. Should be `build` or `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. Should be `unverified` until `<RELEASE_VERSION>` placeholders (lines 96, 101, 109) are pinned. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description subject-first ≤160 | PASS | Lines 4-6: "Running Livepeer components locally for development: options for local gateways, local orchestrators, and test networks." 130 chars, subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | Lines 16-20 present. |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | "livepeer", "developer setup" generic (lines 8, 15). Other entries OK. |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | PASS | OSS contributor persona (subsumed under developer); register matches. |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | Zero US-spelling hits outside `CenteredContainer` component identifier (line 28, 31, 33 — protected zone). |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No matches. |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No matches. |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | |
| 2. Voice & Copy | 2.5 | Opening order subject-first | PASS | Line 37: "Most developer tasks (calling AI pipelines, uploading assets, testing playback) require only an API key or a gateway endpoint." Subject-first. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | |
| 2. Voice & Copy | 2.7 | Audience register matches token | PASS | |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | BYOC, PyTrickle, ComfyStream canonical. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | Zero `—` characters. |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | All paragraph openers system-fact led: "Most developer tasks…", "The public community gateway…", "Download a pre-built binary…". |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | MIXED | Line 61: "Local gateway in broadcaster mode connected to mainnet orchestrators". Line 124: "Running a go-livepeer broadcaster node locally connected to mainnet." `broadcaster` is named as the go-livepeer runtime/CLI mode (`-broadcaster` flag) — legitimate technical reference to the binary's mode taxonomy, not deprecated-synonym usage. INFO. |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | |
| 2. Voice & Copy | 2.18 | Spell check passes | N/A | Visual scan clean. |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | MIXED | `TicketBroker` (referenced via local-gateway sibling) not defined here; `aiModels.json` (line 57) named without link to canonical schema. |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening | N/A | Overview page; orient not tutorial. |
| 2.D | 2.D2 | Every function/API named has code/link | MIXED | `dream-gateway.livepeer.cloud` shown with curl example (lines 81-84) PASS; `aiModels.json` named (line 57) but not linked to schema; `-orchAddr`, `-aiModels` flags named indirectly via siblings but the page itself doesn't show them. |
| 2.D | 2.D3 | Versions stated explicitly | FAIL | Lines 96, 101, 109: `<RELEASE_VERSION>` placeholder shown without any anchor on which tag to use. No `go-livepeer` version pinned. The page itself instructs reader to substitute a tag but does not name the current LTS or stable tag. |
| 2.D | 2.D4 | Error states in main content | N/A | Concept/orient page. |
| 2.D | 2.D5 | No prose explanations of self-evident code | PASS | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | PASS | Single `<Tip>` (line 32) is a legitimate header CTA. |
| 3. Headings | 3.1 | Every heading scores ≥20/25 | PASS | See Heading Score Table. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No `Basics/Notes/Overview/Background/Conclusion` in body H2s. Sidebar title is "Overview" (frontmatter line 3) — INFO; rubric flags `Overview` for body H2s, not sidebar. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule applied | PASS | "Choosing a Development Path" / "Community Gateway (No Setup)" / "Installing go-livepeer" — all domain-anchored. |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Local Development" — 2 words. |
| 3. Headings | 3.7 | Editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | concept/orient style applied. |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Job: route the developer to the right local-dev path. Clean. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer choose which local Livepeer setup matches their development scenario." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | PASS | Lives at top of `guides/local-development/` group; cards route to siblings + cross-section observability. |
| 4. Structure | 4.4 | No dead ends | PASS | Closing pointer (line 118) + Related Pages CardGroup (lines 122-132). NOTE: dual handoff — Related Pages footer + closing prose pointer — borderline 5.16 (one-or-the-other rule). |
| 4. Structure | 4.5 | Prerequisites stated or linked | MIXED | No `## Prerequisites` section. Page is concept/orient so explicit Prerequisites are arguably not required, but the install instructions (lines 90-114) assume Linux/macOS + sudo + wget + tar without naming them. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Line 32 `<Tip>` and line 37 intro both name when local infrastructure is NOT needed (most cases). Scope boundary explicit. |
| 4. Structure | 4.7 | Information type correct | PASS | Decision-routing + light install instructions. Concept/orient pageType matches. |
| 4. Structure | 4.8 | No content duplication | MIXED | Install instructions duplicate `go-livepeer` release process likely covered in Orchestrators tab. INFO. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | This IS the orientation entry for `local-development/`. |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | FAIL | Zero cross-tab links. All Related Pages cards (lines 122-132) stay inside `developers/`. Should graduate to `/v2/orchestrators/setup/...` (for OSS contributors building binaries), `/v2/about/network/architecture` (protocol orientation), or `/v2/gateways/setup/connect` (gateway operators). |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "should I run local infra?" cleanly. Does NOT answer "what's the latest go-livepeer release I should pin to?" — `<RELEASE_VERSION>` placeholder is non-actionable. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 5.3KB substantive. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | None. |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | MIXED | Line 86: "For sustained development load, run a local gateway to avoid rate limiting." Implicit trade-off but no §"Trade-offs" or explicit ETH-cost/maintenance comparison. |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | Three blocks all `bash` (lines 80, 94, 108). |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | Every function/API named has code/link | MIXED | `aiModels.json` (line 57) not linked. `dream-gateway.livepeer.cloud` linked via curl. |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | FAIL | `pageType: overview` is not in canonical set (see 1.2). Template choice unverifiable. |
| 5. Layout | 5.2 | Required sections present per pageType | MIXED | concept/navigation pageType requires intro + Related Pages — present. Choosing-a-path table is good orient pattern. No `## Prerequisites` (acceptable for concept). |
| 5. Layout | 5.3 | Only approved components used | PASS | `<Tip>`, `<CenteredContainer>`, `<CustomDivider />`, `<StyledTable>`, `<TableRow>`, `<TableCell>`, `<CardGroup>`, `<Card>`. All approved. |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | PASS | `<StyledTable>` for the decision matrix (lines 43-72). |
| 5. Layout | 5.6 | MDX renders clean | PASS | (Assumed; opening `---` Markdown HR at line 35 is a known render-equivalent for `<CustomDivider />` but inconsistent with the rest of the page using `<CustomDivider />` JSX.) |
| 5. Layout | 5.7 | No old-schema frontmatter values | FAIL | Line 21 `pageType: overview` is old-schema (canonical set is the 7-type list). Line 23 `status: current` is also legacy field — superseded by `veracityStatus`. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | |
| 5. Layout | 5.9 | Generated file banners intact | N/A | |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | Opening uses `---` Markdown HR (line 35) instead of `<CustomDivider />`. The page imports `LinkArrow` (line 27) but never uses it. |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | |
| 5. Layout | 5.15 | Data imports used | MIXED | Hardcoded decision matrix (lines 43-72) could be a `snippets/data/developers/local-dev-paths.json`. Also `<RELEASE_VERSION>` placeholder — go-livepeer release tag should come from a data file. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | MIXED | Both present (closing prose pointer at line 118 + Related Pages CardGroup at line 122). Rule says "one or the other, never both". |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`. `<Card>` uses bare `title="..."` not `<CustomCardTitle icon="..." title="..." horizontal />`. 3 cards instead of conventional 2/4. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block icon + title | FAIL | Lines 80, 94, 108 — all three bare `` ```bash `` with no `icon` or `title`. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural steps on this orient page. |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | FAIL | Related Pages cards (lines 122-132) use bare `title=` attributes, not `<CustomCardTitle>`. |
| 5. Layout | 5.23 | Tables use StyledTable | PASS | Lines 43-72 use `<StyledTable variant="bordered">`. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One table. |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening uses Markdown HR `---` (line 35) instead of `<CustomDivider />`. Subsequent dividers at lines 39, 74, 88, 116 — placement OK. No divider before Related Pages line 120 (FAIL — rule "ALWAYS before Related Pages"). |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | No Mermaid. |
| 5. Layout | 5.28 | Import section ordering | MIXED | Lines 27-29: element → wrapper → display. Convention is component → data → page → composable. Here element → wrapper → display; technically all components, ordering is fine. `LinkArrow` imported but unused (line 27). |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | One table positioned at top as decision matrix — appropriate for orient page. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | PASS | |
| 6. Veracity | 6.1 | Every factual claim citable | MIXED | `dream-gateway.livepeer.cloud` claim verifiable via curl — implicit citation. `aiModels.json` (line 57) needs schema link to `livepeer/go-livepeer`. |
| 6. Veracity | 6.2 | Code tested | FAIL | No TESTED/NOT-TESTED labels on the three code blocks. `<RELEASE_VERSION>` placeholder makes lines 96, 101, 109 literally non-runnable as shown. |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | |
| 6. Veracity | 6.4 | Numbers are real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent. Should be `unverified` until version pinned + commands TESTED. |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness check | FAIL | No version pinned. `<RELEASE_VERSION>` (lines 96, 101, 109) is unresolved. |
| 6. Veracity | 6.9 | No open-ended "needs more research" | PASS | |
| 6. Veracity | 6.10 | Source authority tiers respected | PASS | |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified against veracity-sources | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | docs.json line 2696. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Navigation | 7.3 | Portal routes to section | PASS | |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | PASS | OSS contributor + developer journey covered. |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | FAIL | Zero cross-tab links — see 4.10. |
| 7. Navigation | 7.7 | File in correct lane | PASS | |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | |
| 7. Navigation | 7.11 | Resources sub-structure correct | N/A | Guides page. |
| 7. Navigation | 7.12 | Guides scope correct | PASS | |
| 8. Links & Rendering | 8.1 | All internal links resolve | PASS | `/v2/developers/guides/local-development/local-gateway` (line 118, 123), `/v2/developers/guides/local-development/local-orchestrator` (line 126), `/v2/developers/guides/observability-and-debugging/tooling-and-metrics` (line 129) — all verified to resolve. |
| 8. Links & Rendering | 8.2 | All external links live | MIXED | `https://dream-gateway.livepeer.cloud` (line 78), `https://github.com/livepeer/go-livepeer/releases/...` (lines 96, 101, 109) not live-verified in this review. Release URLs depend on `<RELEASE_VERSION>` substitution. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | |
| 8. Links & Rendering | 8.4 | All images load | N/A | |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | (Assumed.) |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | |
| 9. Process & Governance | 9.1-9.6 | | N/A | |
| 10. Content Completeness | 10.1 | Every question in job list has page | PASS | |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | MIXED | Page routes to siblings well; install step relies on placeholder version. |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | PASS | |
| 10. Content Completeness | 10.5 | Self-containment holds | PASS | |
| 10. Content Completeness | 10.6 | Code samples have working language path | MIXED | bash provided; no Windows path (sibling testnet page is the only one handling Windows via cross-platform tooling). |
| 10. Content Completeness | 10.7 | Persona-specific guides present | PASS | OSS contributor persona served by sibling pages. |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Local Development" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "Running Livepeer components locally for development: options for local gateways, local orchestrators, and test networks." | PASS | 130 chars, subject-first |
| pageType | Yes | overview | FAIL | Non-canonical. Use `concept` + `pageVariant: overview`. |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `orient`. |
| complexity | No | — | FAIL | Add `beginner` or `intermediate`. |
| lifecycleStage | No | — | FAIL | Add `build`. |
| keywords | Yes | 8 keywords | MIXED | "livepeer", "developer setup" generic. |
| og:image | Yes | /snippets/assets/site/og-image/en/developers.png | PASS | |
| og:image:alt | Yes | "Livepeer Docs social preview image for Developers" | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Add `unverified`. |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy field; remove. Use `veracityStatus`. |
| pageVariant | No | — | INFO | Add `overview`. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (4×) | Required | — | Opening uses Markdown HR `---` (line 35) instead of `<CustomDivider />`. No divider before Related Pages (line 120). |
| `<Tabs>` / `<Tab icon>` | No | — | Recommended | Could split install instructions into Linux/macOS/Windows tabs with `icon` props. |
| `<StyledSteps>` / `<StyledStep>` | No | — | — | Orient page; not procedural. |
| `<Card>` / `<Columns cols={2}>` Related Pages | `<CardGroup>` (line 122) | Required | — | Wrong wrapper — should be `<Columns cols={2}>`. |
| `<CustomCardTitle icon ... />` | NO | Required inside Related Pages `<Card>` | — | Missing — bare `title=` attributes (lines 123, 126, 129). |
| Fenced code with icon + title | NO | Required | — | 3 bare `` ```bash `` blocks (lines 80, 94, 108). |
| `<Note>` / `<Tip>` / `<Warning>` | `<Tip>` line 32 | — | OK | Legitimate header CTA. |
| `<Accordion>` / `<Accordion icon>` | No | — | Recommended | An `<AccordionGroup>` per development path (Calling AI / Testing BYOC / End-to-end protocol) could replace the table for product feel. |
| `<StyledTable>` | Yes (line 43) | Required | — | PASS. |
| `<LinkArrow>` | Imported (line 27) but unused | — | — | Remove unused import or use in body. |
| `<CenteredContainer preset="readable90">` | Yes (line 31) | — | Approved | Wraps header `<Tip>`. |

## Cross-page duplication and link gaps

- **OVERLAP**: Install instructions (lines 90-114) likely duplicate go-livepeer install content in Orchestrators tab. Should link there as canonical, keeping local-dev install as a brief pointer.
- **LINK GAPS**: `<RELEASE_VERSION>` placeholder on lines 96, 101, 109 — should resolve to a concrete tag (e.g. `v0.8.7`) or pull from a data file.
- **LINK GAPS**: `aiModels.json` (line 57) named without link to canonical schema in `livepeer/go-livepeer`.
- **LINK GAPS**: `dream-gateway.livepeer.cloud` (lines 78, 53) — no link to its operating provider or origin.
- **LINK GAPS**: Zero cross-tab links. Missing graduations to `/v2/orchestrators/setup/...`, `/v2/about/network/architecture`, `/v2/gateways/setup/connect`.
- **STRANDED**: Dual handoff at line 118 (closing prose) + Related Pages (lines 120-132) — pick one. Closing prose at 118 says "[local gateway] is the next step" which is correct but conflicts with the 3-card layout offering 3 next steps. Pick a single primary CTA.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (3 hits in `CenteredContainer` import / JSX — protected zone, INFO only) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms (Broadcaster) | 2 | line 61 "broadcaster mode" + line 124 "broadcaster node" — both refer to the go-livepeer CLI flag/runtime mode, a legitimate technical reference. INFO. |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Choosing a Development Path | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Community Gateway (No Setup) | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Installing go-livepeer | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Related Pages | — | — | — | — | — | EXEMPT |

Title "Local Development": 5/4/5/5/4 = 23 PASS.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 80 | bash | NO | NO | — | FAIL 5.20; runnable curl. Add `icon="terminal"` `title="curl-text-to-image.sh"`. |
| 94 | bash | NO | NO | — | FAIL 5.20; uses `<RELEASE_VERSION>` placeholder — non-runnable as shown. Add `icon="terminal"` `title="install-linux.sh"`. |
| 108 | bash | NO | NO | — | FAIL 5.20; `<RELEASE_VERSION>` placeholder. Add `icon="terminal"` `title="install-macos.sh"`. |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The page successfully routes a reader to "should I run local infra?" — but it does not deliver the OSS contributor outcome it's actually positioned for: "I'm a new contributor; show me the canonical 5-minute path from clone to running stack." The decision matrix (lines 43-72) lists 5 scenarios; only the first ("calling AI pipelines") gets a runnable curl. The other four scenarios require the reader to navigate to a sibling page to find their actual command. The page implies the outcome but does not let the reader complete it.
- **Fix step:** Add an "Activation moment" `<AccordionGroup>` below the decision matrix with one `<Accordion icon="...">` per scenario, each containing a 3-line above-the-fold copy-paste command sequence that gets the reader to their first console output without leaving this page. Scenario 1: curl already present. Scenario 2: `livepeer -transcoder -aiModels ./aiModels.json` minimal command. Scenario 3: local broadcaster start command. Scenario 4: `yarn hardhat node` + `yarn hardhat deploy`. Scenario 5: same as scenario 4 + signer-proxy command. Each accordion then links to its sibling page for full detail.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` Activation pattern; `v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart.mdx` (above-the-fold curl pattern).

### Layer 2 — Composition
- **Gap:** `<CardGroup>` (line 122) used instead of `<Columns cols={2}>` + `<CustomCardTitle horizontal>`. Code blocks (lines 80, 94, 108) lack `icon` + `title`. Opening uses Markdown HR `---` (line 35) instead of `<CustomDivider />`. No divider before Related Pages (line 120). Install instructions (lines 90-114) should be `<Tabs>` with `<Tab icon="linux">` / `<Tab icon="apple">` / `<Tab icon="windows">` (Windows path missing entirely). Imported `LinkArrow` (line 27) is unused.
- **Fix step:** (a) Wrap Related Pages cards in `<Columns cols={2}>` with `<CustomCardTitle icon="server" title="Local Gateway" horizontal />` per card and trim Card description to ≤10 words. (b) Add `icon="terminal"` + `title="install-{platform}.sh"` to every fenced bash block. (c) Replace line 35 `---` with `<CustomDivider />`. (d) Add `<CustomDivider />` before line 120 `## Related Pages`. (e) Convert lines 90-114 into `<Tabs>` block with Linux / macOS / Windows tabs (each `<Tab icon="..."`). (f) Remove unused `LinkArrow` import.
- **Source/exemplar:** `_packet/component-matrix.md` lines 100-117 (`guide`/`concept` pageType) + 195-204 (Tabs check 5.18) + `snippets/templates/pages/page-composition-framework.mdx`.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links. OSS contributor persona — for whom this page is the most important entry point — has natural graduations to `/v2/orchestrators/setup/...` (where the contributor learns the operator side they're testing against) and `/v2/about/network/architecture` (protocol orientation). Within `developers/`, the natural prereq for "I want to do anything BYOC" is the BYOC overview at `/v2/developers/build/compute/byoc/overview` — not linked.
- **Fix step:** Replace one `<Card>` in Related Pages (line 122-132) with a cross-tab graduation card to `/v2/orchestrators/concepts/role` or `/v2/orchestrators/setup/quickstart`. Add a 4th card pointing to BYOC overview. Add an inline `<LinkArrow href="https://github.com/livepeer/go-livepeer" label="go-livepeer source" />` near line 90 ("Installing go-livepeer") so the reader has the upstream repo in hand.
- **Source/exemplar:** `_packet/review-rubric.md` check 4.10 + 7.6 (≥3 cross-tab graduations); `livepeer/go-livepeer` repo.

### Layer 4 — Veracity and source authority
- **Gap:** Three claims sourceless or version-soft. (a) Lines 96, 101, 109: `<RELEASE_VERSION>` placeholder — go-livepeer release tag never anchored to a concrete value or data source. The reader's first action ("download a binary") is non-runnable as written. (b) Line 78: "active mainnet orchestrators" — no link to the network capabilities endpoint that would prove the route is live. (c) Line 53: "community gateway at `dream-gateway.livepeer.cloud`" — no link to who operates it / where to file an issue.
- **Fix step:** (a) Replace `<RELEASE_VERSION>` with `{GO_LIVEPEER_LATEST_TAG}` pulled from `snippets/data/developers/go-livepeer-version.json` (single source of truth, regenerated by CI). Until that exists, hard-code the current stable tag with a `{/* REVIEW: confirm latest tag */}` comment. (b) Link `tools.livepeer.cloud/ai/network-capabilities` near "active mainnet orchestrators". (c) Add a footnote link on `dream-gateway.livepeer.cloud` to its operating-org page or repo.
- **Source/exemplar:** `livepeer/go-livepeer` GitHub releases; `tools.livepeer.cloud`; CLAUDE.md "No hardcoded data" rule.

### Layer 5 — Product-forward depth
- **Gap:** The page reads as a "guide menu" — five scenarios, three install commands, three Related-Pages links. It does not signal the OSS contributor's actual meta-question: "Is this a real maintained path, or am I going to hit a wall in 20 minutes?" Missing: maturity signal (latest release date, contributor count, "first issue" label link), what NOT to use local infra for (the 80% case the `<Tip>` hints at), and a "what success looks like" line per scenario. The decision matrix is utilitarian; it could be a product moment.
- **Fix step:** (a) Add `<Badge>go-livepeer v0.8.7 — released 2026-04-15</Badge>` next to the title (driven from a snippet so it auto-refreshes). (b) Reframe the closing prose (line 118) as a 1-sentence "Most developers stop at scenario 1; if you do need local infra, here's the 30-minute path" instead of the current 2-sentence pointer. (c) Add a "Verification" mini-section above the decision matrix: "You know local infra is working when (a) the local broadcaster logs `Started node ...`, (b) the orchestrator logs `Registered ...`, (c) a test stream returns an `.m3u8` manifest." — gives every scenario an objective success criterion.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` `gateway-quickstart` maturity badge pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 4

**Critical findings (top 5)**:
1. **`pageType: overview` non-canonical (1.2 / 5.7)** — line 21. Use `concept` + `pageVariant: overview`. HIGH.
2. **Frontmatter incomplete (1.1 / 1.4 / 1.6 / 1.7 / 1.8)** — missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current` present. HIGH.
3. **Related Pages format wrong (5.17 / 5.22)** — `<CardGroup>` not `<Columns cols={2}>`; bare `title=` not `<CustomCardTitle>`. HIGH.
4. **Code blocks missing icon + title (5.20)** — 3 blocks (lines 80, 94, 108) bare `` ```bash ``. HIGH.
5. **Versioning unresolved (2.D3 / 6.8)** — `<RELEASE_VERSION>` placeholder on lines 96, 101, 109; first install command non-runnable. HIGH.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: overview` → `pageType: concept` and add `pageVariant: overview`. Remove legacy `status: current` field. | 21, 23 | HIGH | S | check 1.2, 5.7 |
| 2 | Add `purpose: orient`, `complexity: beginner`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter. | 22-24 | HIGH | S | check 1.1, 1.4, 1.6, 1.7, 1.8 |
| 3 | Convert Related Pages `<CardGroup cols={2}>` (line 122) to `<Columns cols={2}>` + per-card `<CustomCardTitle icon="..." title="..." horizontal />`. Add a 4th card cross-tab graduation to `/v2/orchestrators/setup/quickstart` or BYOC overview. Trim each description to ≤10 words. | 120-132 | HIGH | M | check 5.17, 5.22, 4.10, 7.6 |
| 4 | Add `icon="terminal"` + `title="curl-text-to-image.sh"` to block at line 80; `icon="terminal"` + `title="install-linux.sh"` to line 94; `icon="terminal"` + `title="install-macos.sh"` to line 108. | 80, 94, 108 | HIGH | S | check 5.20 |
| 5 | Resolve `<RELEASE_VERSION>` placeholder. Hard-code current stable tag (e.g. `v0.8.7`) with `{/* REVIEW: confirm latest tag at next release */}`; long-term, import from `snippets/data/developers/go-livepeer-version.json`. | 96, 101, 109 | HIGH | M | check 2.D3, 6.8 |
| 6 | Add `<CustomDivider />` before `## Related Pages` at line 120. Replace Markdown HR `---` at line 35 with `<CustomDivider />`. | 35, 120 | HIGH | S | check 5.26 |
| 7 | Remove dual handoff: either delete the closing prose pointer at line 118 OR delete Related Pages CardGroup at 120-132. Recommend keep Related Pages (richer); delete line 118. | 118 | HIGH | S | check 5.16 |
| 8 | Convert install instructions (lines 90-114) into `<Tabs>` block with `<Tab title="Linux" icon="linux">` / `<Tab title="macOS" icon="apple">` / `<Tab title="Windows" icon="windows">`. Add Windows path (currently missing). | 90-114 | MEDIUM | M | check 5.18, Layer 2 |
| 9 | Link `aiModels.json` (line 57) to canonical schema in `livepeer/go-livepeer`. | 57 | MEDIUM | S | check 2.D2, 4.20 |
| 10 | Add inline `<LinkArrow href="https://github.com/livepeer/go-livepeer">go-livepeer source</LinkArrow>` near line 90. | 90 | MEDIUM | S | Layer 3 |
| 11 | Remove unused `LinkArrow` import at line 27 (or use it). | 27 | INFO | S | check 5.28 |
| 12 | Drop "livepeer" and "developer setup" generic keywords; replace with specific entries (e.g. "go-livepeer install", "hardhat devnet"). | 7-15 | INFO | S | check 1.13 |
| 13 | Add an "Activation moment" `<AccordionGroup>` below the decision matrix with one `<Accordion icon>` per scenario, each containing the 3-line above-the-fold command sequence. | After line 72 | MEDIUM | L | Layer 1 |
| 14 | Add `<Badge>go-livepeer {LATEST_TAG} — released {DATE}</Badge>` near the title, driven from a data snippet. | After title | INFO | M | Layer 5 |
