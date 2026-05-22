# Review: overview.mdx (plugins-and-extensions)

**Page**: `v2/developers/build/plugins-and-extensions/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `overview` (non-canonical — should be `concept`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 3,882
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Has legacy `status: current` (line 15) |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 13) — not in canonical set `concept|tutorial|guide|instruction|navigation|reference|resource` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | Not used |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose` field absent — should be `orient` or `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 14) |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | `complexity` field absent |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | `lifecycleStage` field absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Field absent; only legacy `status: current` (line 15) |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "NaaP (Network as a Platform) is the official Livepeer network portal and plugin platform..." — subject-first, ~155 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields (lines 17-21) |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `NaaP`, `network as a platform`, `plugin platform`, `developer portal`, `operator dashboard` |
| 1. Frontmatter | 1.14 | audience register match | PASS | Developer prose, code refs |
| 2. Voice | 2.1 | UK English | PASS | No US hits |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 35: "NaaP is an official Livepeer project..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | NaaP consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "NaaP is...", "The platform gives operators..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | "NaaP (Network as a Platform)" defined inline on line 30 |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | concept-style overview, no code on this page |
| 2. Voice | 2.D2 | API/method has code or link | PASS | All references to `@naap/plugin-sdk` and operator routes are linked |
| 2. Voice | 2.D3 | Versions explicit | FAIL | Page references `@naap/plugin-sdk` CLI without a version pin |
| 2. Voice | 2.D4 | Errors in main content | N/A | |
| 2. Voice | 2.D5 | No prose for self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing adjacent | PASS | |
| 2. Voice | 2.D7 | Note not for primary | PASS | `<Tip>` and `<Warning>` are adjacent context, OK |
| 3. Headings | 3.1 | Heading score ≥20/25 | FAIL | Only one H2 — "Resources" (4+3+5+5+5 = 22 PASS); no other governing-concept H2s |
| 3. Headings | 3.2 | No banned/weak terms | PASS | "Resources" is OK per rubric |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor applied | MIXED | "Resources" lacks domain anchor — should be "NaaP Resources" or similar |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Plugins and extensions" (3 words) |
| 3. Headings | 3.7 | Expert editorial | MIXED | Title is generic; "NaaP" or "NaaP Overview" would be more findable |
| 3. Headings | 3.8 | pageType naming style | N/A | pageType invalid |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | MIXED | See 3.4 |
| 4. Structure | 4.1 | One purpose | PASS | Orient developer to NaaP |
| 4. Structure | 4.2 | Purpose statement test | MIXED | "lets the developer evaluate NaaP" but the page also routes to operator.livepeer.org/docs — risk of being a thin redirect page |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Links to naap-architecture and building-a-plugin (line 84) |
| 4. Structure | 4.4 | No dead ends | MIXED | Routes via prose paragraph on line 84 — no Related Pages footer |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Concept page |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Sends reader to operator.livepeer.org for the actual content; v2/ page risks becoming a stub-router |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | PASS | Plugin list properly deferred to architecture page |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links — no Gateways, Solutions, About, or Orchestrators references |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "what is NaaP?" but not "should I use NaaP vs. a standalone app?" or "is NaaP stable enough for production yet?" |
| 4. Structure | 4.12 | Page size | PASS | 3.9 KB substantive (above 2 KB stub threshold) |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No "when not to use NaaP" — beta-warning callout on line 39 mentions breaking changes but no "use case fit" guidance |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No code blocks on page |
| 4. Structure | 4.18 | Code-first opening | N/A | Concept overview |
| 4. Structure | 4.19 | Error states in main | N/A | |
| 4. Structure | 4.20 | API has code or link | PASS | All external references linked |
| 5. Layout | 5.1 | Correct template | FAIL | pageType is non-canonical; should be `concept` with concept template |
| 5. Layout | 5.2 | Required sections present | FAIL | Concept page lacks intro + ≥2 governing-concept H2s; only "Resources" H2 |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Resources is a `<StyledTable>` (good) but the closing paragraph on line 84 should be a `<Columns cols={2}>` Related Pages block |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 15: `status: current` legacy; superseded by `veracityStatus` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks from gold-standard | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | MIXED | Only one H2 |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | PASS | NaaP resource links are unique to this page |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Neither present. The closing paragraph (line 84) is in-prose next-step text, not a Card or CardGroup |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages block exists |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | N/A | No nav cards |
| 5. Layout | 5.23 | StyledTable not raw markdown | PASS | Lines 47-80 use `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider (line 33) OK; divider between H2 (line 43) and Resources OK; but final divider (line 82) precedes a closing prose paragraph, not a Related Pages block — the divider before Related Pages is required, present, but the Related Pages content itself is absent |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | PASS | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Factual claims citable | MIXED | "12 plugins" claim made on naap-architecture (sibling page) but the overview describes "modular tools" without quantification; "official Livepeer project" — `livepeer/naap` link present (line 35) |
| 6. Veracity | 6.2 | Code TESTED | N/A | No code blocks |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent; cannot judge honesty |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `@naap/plugin-sdk` version not stated; "active beta development" without a version range or expected stability date |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers | PASS | `livepeer/naap` repo cited (T1) |
| 6. Veracity | 6.11 | Glossary defs match | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2602 of docs.json |
| 7. Nav/IA | 7.2 | docs.json mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | No orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | PASS | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab graduation | FAIL | Zero cross-tab links |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | File naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs in nav | PASS | 3.9 KB |
| 7. Nav/IA | 7.11 | Resources structure | N/A | |
| 7. Nav/IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | `/v2/developers/build/plugins-and-extensions/naap-architecture` and `/v2/developers/build/plugins-and-extensions/building-a-plugin` resolve |
| 8. Links | 8.2 | External links live | NOT-TESTED | `livepeer/naap`, `operator.livepeer.org`, `/docs`, changelog all referenced |
| 8. Links | 8.3 | Snippets resolve | PASS | LinkArrow, StyledTable, CustomDivider, CenteredContainer imports resolve |
| 8. Links | 8.4 | Images load | N/A | OG image only |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | Out of reviewer scope |
| 10. Completeness | 10.1 | Job-list coverage | PASS | Plugins/NaaP path covered |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Page sends developer off-site for the actual development journey |
| 10. Completeness | 10.3 | Persona paths | PASS | Persona 3 (Plugins/Extensions builder) |
| 10. Completeness | 10.4 | Scope explicit | MIXED | Tells developer where to go but not when NaaP is the right choice |
| 10. Completeness | 10.5 | Self-containment | FAIL | Reader must click off-site to get actual orientation beyond a single Resources table |
| 10. Completeness | 10.6 | Language paths | N/A | No code on page |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Plugins and extensions" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "NaaP (Network as a Platform) is the official Livepeer network portal and plugin platform..." | PASS | Subject-first |
| pageType | Yes | overview | FAIL | Non-canonical — change to `concept` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Required; suggest `orient` |
| complexity | No | — | FAIL | Required; suggest `beginner` |
| lifecycleStage | No | — | FAIL | Required; suggest `discover` |
| keywords | Yes | [array] | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Required; suggest `verified` after linkcheck |
| lastVerified | Yes | 2026-05-15 | PASS | |
| status | Yes | current | FAIL | Legacy field — drop per check 5.7 |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (4×) | Required | — | Opening (line 33) OK; between H2s OK; final divider (line 82) precedes prose paragraph instead of Related Pages |
| `<Tabs>` / `<Tab icon>` | No | Recommended for variants | — | No variants on page |
| `<StyledSteps>` | No | — | — | Concept page |
| `<Columns cols={2}>` Related Pages | No | Required | Yes | Missing — closing prose paragraph (line 84) should be a Related Pages block |
| `<CustomCardTitle>` | No | Required inside nav Cards | — | No nav Cards |
| Fenced code with icon + title | No | — | — | No code on page |
| `<Tip>` | Yes (line 30) | — | — | Header CTA, OK |
| `<Warning>` | Yes (line 39) | — | — | Beta marker, OK |
| `<Accordion>` | No | Recommended for FAQ | — | Could host "When to choose NaaP vs. standalone app" |
| `<StyledTable>` | Yes (lines 47-80) | — | — | Used correctly for Resources table |
| `<CenteredContainer>` | Yes (line 29) | — | — | Header CTA wrapper |

## Cross-page duplication and link gaps

- **OVERLAP**: None significant — overview correctly defers to architecture and building pages.
- **LINK GAPS**:
  - No upstream `@naap/plugin-sdk` package or releases linked (only repo root).
  - No link to NaaP product Notion page or `Roadmap` if one exists at operator.livepeer.org/docs.
  - No cross-tab links: missing Gateways (operator self-host), Solutions (managed alternative), About (protocol context).
  - No link to `v2/developers/build/tutorials/build-a-naap-plugin` (referenced in building-a-plugin sibling but not from this overview).
- **STRANDED**: Reader who wants to evaluate NaaP gets a Resources table and is shipped off-site. No internal decision frame ("is NaaP the right choice for me?"), no inline preview of plugin categories.

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
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Resources | 4 | 3 | 5 | 5 | 5 | 22 |

Only one H2 on the page — single-section concept page risks Discord-test fail.

## Code Block Audit

No code blocks on this page.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises "developer portal and plugin platform" but the developer who lands here cannot tell whether to (a) build a NaaP plugin, (b) build a standalone app outside NaaP, or (c) just use the NaaP portal as an end user. There is no decision frame, no "who should build a plugin" criteria, no "first 10 minutes" preview of what the platform looks like once you sign in.
- **Fix step:** Before the `<Warning>` on line 39, insert a §"When to choose NaaP" with three bullets: "Build a plugin if you ship a tool for orchestrators / governance / monitoring that benefits from shared auth + DB"; "Use the NaaP portal as a user if you operate Livepeer infrastructure today"; "Build standalone if you ship a consumer-facing app — see Applications instead". Add `<Frame>` or an `<img>` of the operator.livepeer.org dashboard as a single-glance product preview.
- **Source/exemplar:** `v2/about/_workspace/reviews2/network/architecture.md` Layer 1 — decision matrix before mechanism.

### Layer 2 — Composition
- **Gap:** Page is a `<Tip>` + 2 paragraphs + `<Warning>` + 1 `<StyledTable>` + 1 prose closing line. Zero `<Columns>` Related Pages, zero `<Accordion>` for FAQ-style "when not to use", zero `<Tabs>` for "I want to build a plugin" vs "I want to extend the shell". No `<Frame>` for product screenshot.
- **Fix step:** Add at EOF, replacing the line-84 prose paragraph:
  ```
  <CustomDivider />
  ## Related Pages
  <Columns cols={2}>
    <Card href="/v2/developers/build/plugins-and-extensions/naap-architecture" horizontal>
      <CustomCardTitle icon="diagram-project" title="Architecture" />
      Micro-frontend shell, ShellContext, request flow.
    </Card>
    <Card href="/v2/developers/build/plugins-and-extensions/building-a-plugin" horizontal>
      <CustomCardTitle icon="hammer" title="Build a plugin" />
      Three-command scaffold and SDK hooks.
    </Card>
    <Card href="/v2/developers/build/tutorials/build-a-naap-plugin" horizontal>
      <CustomCardTitle icon="graduation-cap" title="Plugin tutorial" />
      End-to-end walkthrough from zero.
    </Card>
    <Card href="https://operator.livepeer.org" horizontal>
      <CustomCardTitle icon="up-right-from-square" title="Live platform" />
      Use NaaP today at operator.livepeer.org.
    </Card>
  </Columns>
  ```
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx` Related Pages format; check 5.16+5.17+5.22.

### Layer 3 — Cross-page integration
- **Gap:** No links to Gateways (operators are the primary NaaP user — `v2/gateways/setup/connect` would be the most useful prereq); no link to About (NaaP is governance-adjacent); no internal link to the tutorial at `build/tutorials/build-a-naap-plugin`; no link to the NaaP changelog feed page in resources (the changelog is referenced on line 40 but as an external URL only); upstream `@naap/plugin-sdk` npm page is not linked.
- **Fix step:** Add to line 35 inline: "...maintained in the [`livepeer/naap`](https://github.com/livepeer/naap) repository ([`@naap/plugin-sdk` on npm](https://www.npmjs.com/package/@naap/plugin-sdk))." Add to Related Pages: a card to `/v2/gateways/setup/connect` ("Operator setup — NaaP's primary audience") and `/v2/about/governance/proposals` ("Governance plugins on NaaP").
- **Source/exemplar:** `https://github.com/livepeer/naap`; `v2/gateways/setup/connect.mdx`.

### Layer 4 — Veracity and source authority
- **Gap:** "official Livepeer project" — `livepeer/naap` repo cited, OK. "active beta development" — no version, no release tag, no release-cycle statement. Beta-warning callout points to a changelog but does not anchor a stability promise. `lastVerified: 2026-05-15` is set but `veracityStatus` is missing — the verification claim has no honesty signal.
- **Fix step:** Add `veracityStatus: verified` to frontmatter. Replace line 40 changelog reference with a pinned version: "as of `@naap/plugin-sdk` v0.X.Y (see [changelog](https://operator.livepeer.org/docs/community/changelog))". Add to header CTA tip "Currently @naap/plugin-sdk v0.X — breaking changes possible between minors."
- **Source/exemplar:** `livepeer/naap` releases page; `@naap/plugin-sdk` npm version history.

### Layer 5 — Product-forward depth
- **Gap:** Page reads as a referral page to operator.livepeer.org. No maturity badge (beta status is in a body Warning, not in a header). No mention of who actually runs plugins in production today. No cost / pricing signal (free? paid? subsidised by Livepeer Inc?). No "what could go wrong" — what happens if a plugin breaks the shell? Plugin Marketplace is referenced on architecture page but not here. No mention of governance status — is NaaP funded by Livepeer DAO or by Livepeer Inc?
- **Fix step:** Add `<Badge>Beta</Badge>` next to the H1 (Mintlify supports inline Badge). Add §"NaaP in production" with one sentence per shipped plugin team. Add §"What NaaP is not" with: "Not a hosted gateway — see Gateways"; "Not a managed video API — see Solutions"; "Not a smart-contract registry — see About".
- **Source/exemplar:** `.claude/references/layout/exemplars.md` gateway-quickstart maturity-badge pattern; existing `comfystream/overview.mdx` "Relationship to BYOC" decision-table pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Non-canonical `pageType: overview` (line 13) — should be `concept` (check 1.2)
2. Missing required frontmatter: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (checks 1.4, 1.6, 1.7, 1.8); legacy `status: current` (check 5.7)
3. No Related Pages block — closing prose paragraph on line 84 violates check 5.16+5.17; reader stranded without a structured next step
4. Zero cross-tab graduation links (4.10, 7.6)
5. No decision frame for when NaaP is the right choice — page reads as referral to operator.livepeer.org rather than a self-contained orientation

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: overview` → `pageType: concept`. Add `purpose: orient`, `complexity: beginner`, `lifecycleStage: discover`, `veracityStatus: verified`. Remove legacy `status: current` | 13-15 | HIGH | S | check 1.2, 1.4, 1.6, 1.7, 1.8, 5.7 |
| 2 | Replace closing prose paragraph at line 84 with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` containing 4 `<Card>` blocks with `<CustomCardTitle>` (architecture, build-a-plugin, NaaP tutorial, operator portal) | 84 | HIGH | M | check 5.16+5.17+5.22 |
| 3 | Add §"When to choose NaaP" decision block before the `<Warning>` (line 39) with 3 bullets routing reader to plugin-vs-standalone-app decision | 38 | HIGH | M | layer 1; `comfystream/overview.mdx` "Relationship to BYOC" pattern |
| 4 | Add ≥3 cross-tab Related Pages cards: `/v2/gateways/setup/connect` (operator primary user), `/v2/about/network/architecture` (protocol context), `/v2/solutions/managed-gateway` or equivalent | 84 | HIGH | S | check 4.10+7.6 |
| 5 | Add `<Badge>Beta</Badge>` or similar maturity marker to the header CTA in the `<Tip>` (line 30) | 30 | MEDIUM | S | layer 5 |
| 6 | Pin `@naap/plugin-sdk` to a specific version in the header tip (line 30) and link to npm | 30, 35 | MEDIUM | S | check 2.D3+6.8 |
| 7 | Add §"NaaP in production" listing the named teams running plugins (Daydream Video, Plugin Marketplace, etc.) — or remove "official platform" claim if not deployed | new section | MEDIUM | M | layer 5 |
| 8 | Rename H2 "Resources" to "NaaP Resources" or "External resources" for domain-anchor | 45 | INFO | S | check 3.4+3.10 |
| 9 | Add at least one second H2 covering "Plugin model" or "Architecture summary" — currently the only H2 is "Resources" which leaves the page mostly intro prose | new H2 before line 45 | MEDIUM | M | check 5.2 |
| 10 | Add a `<Frame>` product screenshot of the operator dashboard or a Mermaid diagram of the shell+plugins relationship near the top | line ~37 | INFO | M | layer 1 + 5 |
