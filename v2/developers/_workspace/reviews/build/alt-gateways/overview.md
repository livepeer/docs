# Review: overview.mdx (alt-gateways)

**Page**: `v2/developers/build/alt-gateways/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `overview` (non-canonical — should be `concept`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 7,007
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Legacy `status: current` (line 23) |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 21) — not in canonical set |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing; suggest `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing; suggest `advanced` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing; suggest `evaluate` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Building non-Go gateway clients using the remote signer architecture..." — subject-led, ~155 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | Has `livepeer`, `gateway`, `Python`, `off-chain`, `OrchestratorSession`, `probabilistic micropayments` — `livepeer` is a generic keyword per check 1.13. Otherwise OK |
| 1. Frontmatter | 1.14 | audience register match | PASS | Advanced developer prose |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 38 "go-livepeer's broadcaster mode is the canonical gateway implementation..." — subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | OrchestratorSession, PaymentSession consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "go-livepeer's broadcaster mode...", "A gateway performing...", "The gateway connects..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | FAIL | "broadcaster" appears on lines 38 and 46 — deprecated term per project rule; should be "Gateway" or rewritten with "go-livepeer in gateway/broadcaster mode" framing |
| 2. Voice | 2.17 | Universal terms | MIXED | Mixes `gateway` (correct) and `broadcaster` (deprecated when used as a synonym) |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | MIXED | "broadcaster" use needs deprecation reframing |
| 2. Voice | 2.21 | First-use defined | MIXED | LV2V (line 87) not defined inline; `live-video-to-video` only appears as a backtick on line 82; "trickle stream" (line 82) not defined; "AI Service Registry" (line 110) not defined |
| 2. Voice | 2.22 | Terminology lock | MIXED | See 2.16 |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | concept |
| 2. Voice | 2.D2 | API/method has code or link | MIXED | `OrchestratorSession`, `PaymentSession`, `LiveVideoJob` named but only `OrchestratorSession` shown in code (line 102) — the other two get no example |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `go-livepeer` PRs #3791 #3822 cited (good) but no version pin for livepeer-python-gateway, no commit/tag on the examples link |
| 2. Voice | 2.D4 | Errors in main | FAIL | Signer-unavailability mentioned in a closing `<Note>` (line 143) — should be in main body per check 2.D4 |
| 2. Voice | 2.D5 | No prose for self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing adjacent | PASS | |
| 2. Voice | 2.D7 | Note not for primary | FAIL | The `<Note>` on line 143 contains a critical operational fact (signer unavailability blocks job submission) that belongs in main body per check 2.D7 |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | See heading table |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | MIXED | "Use Cases" — domain-light |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Alt-Gateway Overview" — 2 words but uses "alt" abbreviation which is non-canonical heading style |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming style | PASS | governing-concept |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | MIXED | See 3.4 |
| 4. Structure | 4.1 | One purpose | PASS | Concept overview of alt-gateways |
| 4. Structure | 4.2 | Purpose statement | PASS | "lets the developer evaluate non-Go gateway client paths" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Related Pages cards present |
| 4. Structure | 4.4 | No dead ends | PASS | Has Related Pages cards (lines 151-164) |
| 4. Structure | 4.5 | Prerequisites stated | MIXED | Implicitly developer-advanced; no explicit "you should already know X" |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Discovery-patterns section names alternatives but does not say "if you need on-chain discovery, see Gateways" |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | MIXED | Discovery-patterns substantially overlaps `v2/developers/guides/gateways-as-developer/orchestrator-selection-and-pricing.mdx` per the IA in notes.mdx — needs cross-link rather than re-print |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | 4 Related Pages cards all stay within `developers/` — no Gateways/Solutions/About |
| 4. Structure | 4.11 | Discord test | PASS | Answers "what's an alt-gateway?" and "should I build one?" |
| 4. Structure | 4.12 | Page size | PASS | 7 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Use Cases table is a partial trade-off matrix; signer unavailability mentioned in Note; but no production-readiness signal, no maturity statement |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | python tagged |
| 4. Structure | 4.18 | Code-first opening | N/A | concept |
| 4. Structure | 4.19 | Error states in main | FAIL | See 2.D4 — operational fact in Note |
| 4. Structure | 4.20 | API has code or link | MIXED | See 2.D2 |
| 5. Layout | 5.1 | Correct template | FAIL | pageType non-canonical |
| 5. Layout | 5.2 | Required sections present | PASS | Intro, ≥2 H2s, Related Pages |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Discovery-patterns uses 3 bold-prose-then-code subsections — would read better as Tabs or AccordionGroup |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 23: `status: current` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | PASS | |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | Related Pages present (lines 149-164) |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; uses plain `<Card title="..." icon="..." arrow horizontal>` not `<CustomCardTitle icon="..." title="..." horizontal>` per check 5.17 |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | FAIL | Python block (line 97) has no `icon` or `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | Related Pages cards (lines 152-163) use plain `title=`, not `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | PASS | Used (lines 64, 116) |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 2 tables |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider uses `---` markdown on line 36 not the `<CustomDivider />` component — inconsistent; subsequent dividers use the component |
| 5. Layout | 5.27 | Mermaid | N/A | No diagrams |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | Signer-unavailability hidden inside `<Note>` (line 143) |
| 5. Layout | 5.32 | Reference tables at end | PASS | Use Cases at end |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | go-livepeer PRs #3791 + #3822 cited (good); `livepeer/livepeer-python-gateway` repo named but not linked as a clickable URL on this page; AI Service Registry mentioned (line 110) but no contract address or RPC reference |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No TESTED label on python block |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | Python gateway examples link references HEAD of main branch with no tag |
| 6. Veracity | 6.9 | No open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | PRs cited (T1) but repo not linked |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2610 |
| 7. Nav/IA | 7.2 | docs.json mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | No orphans | MIXED | livepeer-python-gateway.mdx and remote-signer-integration.mdx are EMPTY-STUBs but in nav — readers click and land on "This page is in progress" |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Overview directs reader to two stub pages (Python gateway, remote signer) — journey breaks at sibling pages |
| 7. Nav/IA | 7.6 | ≥3 cross-tab graduation | FAIL | |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | File naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs in nav | FAIL | Two sibling stub pages registered in nav (livepeer-python-gateway, remote-signer-integration) |
| 7. Nav/IA | 7.11 | Resources structure | N/A | |
| 7. Nav/IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | All 4 card hrefs resolve |
| 8. Links | 8.2 | External links live | NOT-TESTED | `github.com/livepeer/livepeer-python-gateway/tree/main/examples` referenced |
| 8. Links | 8.3 | Snippets resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | Alt-gateway concept covered but the two child pages (Python, remote signer) are empty stubs — section is incomplete |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Overview promises "you can build a Python gateway" but the Python gateway child page is empty |
| 10. Completeness | 10.3 | Persona paths | PASS | Persona E (SDK/Alt-Gateway Builder) |
| 10. Completeness | 10.4 | Scope explicit | PASS | |
| 10. Completeness | 10.5 | Self-containment | MIXED | Concept-only; reader needs offsite repo + empty child pages to complete |
| 10. Completeness | 10.6 | Language paths | PASS | Python shown |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Alt-Gateway Overview" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "Building non-Go gateway clients..." | PASS | |
| pageType | Yes | overview | FAIL | Change to `concept` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `explain` or `evaluate` |
| complexity | No | — | FAIL | Add `advanced` |
| lifecycleStage | No | — | FAIL | Add `evaluate` or `build` |
| keywords | Yes | [array] | MIXED | Drop generic `livepeer`; keep specifics |
| og:image | Yes | developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Add `verified` |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Drop |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | Opening uses `---` markdown not the component (line 36) — inconsistent |
| `<Tabs>` / `<Tab icon>` | No | Recommended | Yes | Discovery-patterns (3 alternatives) reads as Tabs candidate |
| `<StyledSteps>` | No | — | — | Concept |
| `<Columns cols={2}>` Related Pages | No | Required | — | Uses `<CardGroup cols={2}>` instead — FAIL 5.17 |
| `<CustomCardTitle>` | No | Required inside nav Cards | — | Card title=... pattern used — FAIL 5.22 |
| Fenced code with icon + title | No | Required | — | Python block at line 97 has neither — FAIL 5.20 |
| `<Tip>` | Yes (line 32) | — | — | Header CTA OK |
| `<Note>` | Yes (line 143) | — | — | Contains critical operational fact — FAIL 2.D7 |
| `<Accordion>` | No | Recommended for FAQ | — | Discovery alternatives + signer trade-offs would benefit |
| `<StyledTable>` | Yes (lines 64, 116) | — | — | 2 tables — under cap |
| `<CenteredContainer>` | Yes (line 32) | — | — | |

## Cross-page duplication and link gaps

- **OVERLAP**: Discovery-patterns section (lines 91-110) overlaps with the planned `gateways-as-developer/orchestrator-selection-and-pricing.mdx` per the IA in notes.mdx (line 90-91); needs a cross-link or de-dup decision.
- **LINK GAPS**:
  - `livepeer/livepeer-python-gateway` referenced 4 times (lines 40, 60, 87, 126) — only the examples link is a real URL; the repo root is not linked.
  - go-livepeer PRs #3791 and #3822 cited (line 38) but not hyperlinked.
  - "AI Service Registry on Arbitrum One" (line 110) — no contract address, no Arbiscan link, no Explorer-API URL.
  - "Livepeer Explorer API" (line 108) — not linked.
  - "trickle stream setup" (line 82) — no link to pytrickle or trickle protocol spec.
  - Sibling pages livepeer-python-gateway.mdx and remote-signer-integration.mdx are stubs — overview ships the reader to empty pages.
- **STRANDED**: Reader who decides "I need this" lands on stub child pages with "This page is in progress" — the overview's downstream journey is broken.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 2 | line 38: "go-livepeer's broadcaster mode is the canonical gateway implementation"; line 46: "In the standard go-livepeer broadcaster, the node manages its own keystore" — "broadcaster" deprecated per project rule, use "Gateway" or "go-livepeer in gateway mode" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Remote Signer Model | 5 | 4 | 5 | 5 | 4 | 23 |
| Livepeer Python Gateway | 5 | 4 | 5 | 5 | 3 | 22 |
| Discovery Patterns | 4 | 3 | 4 | 5 | 5 | 21 |
| Use Cases | 3 | 3 | 4 | 5 | 5 | 20 |

All PASS but "Use Cases" is borderline; "Integration paths" would score higher.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 97 | python | ✗ | ✗ | NOT-TESTED | Missing `icon="python"` + `title="orchestrator_session.py"` — FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises evaluation of alt-gateway paths but does not give the reader a sharp answer to "should I actually use the Python gateway today?". Production-readiness, maintenance status, and "who runs this in production" are absent. The Use Cases table on lines 116-141 lists scenarios but doesn't say which scenarios have a shipped, tested implementation vs which are conceptual. The reader leaves uncertain whether to clone the Python repo or wait.
- **Fix step:** Add a §"Maturity and production usage" between the intro and "Remote Signer Model" with three concrete data points: "Python gateway: experimental, j0sh-maintained, no tagged release"; "Remote signer (go-livepeer mode): merged in PRs #3791/#3822, available since go-livepeer v0.X.Y"; "Browser/mobile pattern: documented, used by [named projects]". Use `<StyledTable>` or a `<Badge>` row.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` maturity badge pattern; existing BYOC overview's "Production Deployments" section.

### Layer 2 — Composition
- **Gap:** Discovery-patterns section (lines 91-110) is three bold-prose-then-content alternatives — perfect Tabs candidate. The page uses `---` markdown horizontal rule (line 36) instead of `<CustomDivider />` for the opening divider — inconsistent with the other 4 dividers using the component. Related Pages uses `<CardGroup cols={2}>` + plain `<Card title=...>` instead of `<Columns cols={2}>` + `<CustomCardTitle>` per check 5.17/5.22. The critical operational fact (signer unavailability) is buried in a `<Note>` per check 2.D7.
- **Fix step:** (a) Replace `---` on line 36 with `<CustomDivider />`. (b) Convert Discovery-patterns into a `<Tabs>` block with three `<Tab>` items: `<Tab title="Explicit list" icon="list">`, `<Tab title="Explorer API" icon="magnifying-glass">`, `<Tab title="AI Service Registry" icon="microchip">`. (c) Convert Related Pages from `<CardGroup>` to `<Columns cols={2}>` + `<Card horizontal>` + `<CustomCardTitle icon="..." title="...">`. (d) Promote the line-143 `<Note>` content into a §"Signer availability" body paragraph or `<Warning>` block.
- **Source/exemplar:** check 5.17+5.22+2.D7; `snippets/templates/pages/page-composition-framework.mdx`.

### Layer 3 — Cross-page integration
- **Gap:** `livepeer/livepeer-python-gateway` repo never linked as a real URL — readers can't click through. go-livepeer PRs #3791/#3822 cited but not hyperlinked. AI Service Registry contract address + Arbiscan link absent. Livepeer Explorer API endpoint absent. No cross-tab links to Gateways setup (operator path) or Solutions (managed alternative). Two sibling stubs (Python gateway, remote signer) are linked in nav but empty.
- **Fix step:** (a) Inline links on first mention: line 38 → `[#3791](https://github.com/livepeer/go-livepeer/pull/3791)` + `[#3822](https://github.com/livepeer/go-livepeer/pull/3822)`; line 40/60 → `[livepeer/livepeer-python-gateway](https://github.com/livepeer/livepeer-python-gateway)`. (b) Add to line 110: AI Service Registry address with Arbiscan link. (c) Add to line 108: link to Livepeer Explorer API docs. (d) Add ≥3 cross-tab Related Pages cards: `/v2/gateways/setup/connect` (operator self-host equivalent), `/v2/about/network/architecture` (protocol), `/v2/solutions/managed-gateway` or equivalent. (e) Flag the two sibling stubs as priority fill targets.
- **Source/exemplar:** `livepeer/go-livepeer/pull/3791`; `livepeer/livepeer-python-gateway`; Arbiscan for the registry contract.

### Layer 4 — Veracity and source authority
- **Gap:** Page is concept-only but makes architectural claims that need anchors: "remote signer architecture (added in go-livepeer PRs #3791 and #3822)" — PRs not hyperlinked. `OrchestratorSession`, `PaymentSession`, `LiveVideoJob` class names declared but no link to source files. "AI Service Registry on Arbitrum One" — no contract address. Python block lacks TESTED label. `veracityStatus` field absent despite `lastVerified: 2026-05-13`.
- **Fix step:** (a) Hyperlink both PR numbers on line 38. (b) Add inline links to the class definitions: `[OrchestratorSession](https://github.com/livepeer/livepeer-python-gateway/blob/main/src/orchestrator_session.py)` etc. (c) Add the AI Service Registry contract address + Arbiscan URL to line 110. (d) Add `// TESTED: 2026-05-13 against livepeer-python-gateway commit-sha` comment to the Python block. (e) Add `veracityStatus: verified` to frontmatter.
- **Source/exemplar:** `livepeer/livepeer-python-gateway` source tree; Arbiscan AI Service Registry.

### Layer 5 — Product-forward depth
- **Gap:** Page reads as a feature description with no "should I use this?" gate. There is no production-readiness signal, no statement of who maintains the Python gateway (j0sh personally? a team?), no "what if the maintainer stops shipping?" risk, no comparison against go-livepeer in dual mode. Operational fact (signer unavailability blocks job submission) is buried in a `<Note>` — should be a `<Warning>` in main body. No mention of testnet vs mainnet support. No cost expectations.
- **Fix step:** Add §"Operational realities" with three subsections: "Maintenance" ("Python gateway is j0sh-maintained; no semver-tagged releases; track main HEAD or pin to a commit"), "Failure modes" ("Signer unavailability blocks job submission" promoted from Note; "Discovery without on-chain dependency means stale orchestrator data"), "Production users" ("This pattern is used by [project X]" or "No public production deployment yet — beta path"). Add `<Badge>Experimental</Badge>` near the H1 to set expectations. Add §"When to choose this over go-livepeer in gateway mode" with a 3-bullet decision frame.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` maturity-badge + when-not-to-use patterns; BYOC overview's "Production Deployments" section.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 10 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current`; `pageType: overview` non-canonical (checks 1.1, 1.2, 5.7)
2. "broadcaster" used as Gateway synonym on lines 38 + 46 — deprecated term per project rule (check 2.16)
3. Related Pages uses `<CardGroup>` + plain `<Card title=...>` instead of `<Columns cols={2}>` + `<CustomCardTitle>` (checks 5.17, 5.22)
4. Critical operational fact (signer unavailability blocks job submission) buried in `<Note>` on line 143 — violates 2.D7
5. Two sibling stub pages registered in nav (livepeer-python-gateway, remote-signer-integration) — overview routes reader to empty pages (check 7.10)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: overview` → `pageType: concept`. Add `purpose: explain`, `complexity: advanced`, `lifecycleStage: evaluate`, `veracityStatus: verified`. Drop `status: current`. Drop generic `livepeer` from keywords | 21-23 | HIGH | S | check 1.2+5.7+1.13 |
| 2 | Replace "broadcaster" on line 38: "go-livepeer's gateway implementation is the canonical reference". Rewrite line 46: "In the standard go-livepeer gateway, the node manages its own keystore" | 38, 46 | HIGH | S | check 2.16 |
| 3 | Convert Related Pages (lines 149-164) from `<CardGroup cols={2}>` to `<Columns cols={2}>` with `<Card horizontal>` + `<CustomCardTitle icon="..." title="..." />` for all 4 cards | 149-164 | HIGH | M | check 5.17+5.22 |
| 4 | Promote `<Note>` on line 143 to a body paragraph or `<Warning>` block under a new §"Signer availability" — critical operational fact must not hide in Note | 143 | HIGH | S | check 2.D7+5.31 |
| 5 | Add `icon="python"` + `title="orchestrator_session.py"` to python block on line 97 | 97 | HIGH | S | check 5.20 |
| 6 | Replace `---` markdown horizontal rule (line 36) with `<CustomDivider />` for consistency | 36 | HIGH | S | check 5.26 |
| 7 | Add ≥3 cross-tab cards to Related Pages: `/v2/gateways/setup/connect` (operator self-host), `/v2/about/network/architecture` (protocol context), `/v2/solutions/managed-gateway` or equivalent. Replace one internal card if needed | 151-164 | HIGH | S | check 4.10+7.6 |
| 8 | Hyperlink go-livepeer PRs on line 38: `[#3791](https://github.com/livepeer/go-livepeer/pull/3791)`, `[#3822](https://github.com/livepeer/go-livepeer/pull/3822)`. Hyperlink `livepeer/livepeer-python-gateway` on line 40 and 60 | 38, 40, 60 | HIGH | S | check 6.1+6.10 |
| 9 | Add inline link to AI Service Registry contract on line 110 (Arbiscan + contract address) and Livepeer Explorer API docs on line 108 | 108, 110 | HIGH | S | check 6.1 |
| 10 | Convert Discovery-patterns section (lines 91-110) into a `<Tabs>` block with three `<Tab>` items (Explicit list, Explorer API, AI Service Registry) — each with `icon` prop | 91-110 | MEDIUM | M | check 5.18; layer 2 |
| 11 | Add §"Maturity and production usage" between intro and "Remote Signer Model" with maturity table (Python gateway status, remote-signer release version, browser pattern users) | new section after line 42 | MEDIUM | M | layer 1+5 |
| 12 | Add `<Badge>Experimental</Badge>` to the page header near the `<Tip>` callout | line 32 | MEDIUM | S | layer 5 |
| 13 | Pin examples link on line 87 to a commit SHA or tag: `tree/v0.X.Y/examples` instead of `tree/main/examples` | 87 | MEDIUM | S | check 2.D3+6.8 |
| 14 | Add definitions on first use: "live-video-to-video (LV2V)" on line 82; "trickle stream" link or define inline; "AI Service Registry" define inline on line 110 | 82, 110 | MEDIUM | S | check 2.21 |
| 15 | Flag the two empty sibling pages (livepeer-python-gateway.mdx, remote-signer-integration.mdx) to fill priority — see section summary | sibling files | INFO | XL | check 7.10 |
| 16 | Rename "Use Cases" H2 to "Integration paths" for higher heading score and domain-anchor | 114 | INFO | S | check 3.1+3.4 |
