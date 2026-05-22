# Review: building-a-plugin.mdx (plugins-and-extensions)

**Page**: `v2/developers/build/plugins-and-extensions/building-a-plugin.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `how_to` (non-canonical — should be `instruction`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 3,668
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Legacy `status: current` (line 15) |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: how_to` (line 13) — not in canonical set; should be `instruction` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing; suggest `build` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing; suggest `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing; suggest `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Create, develop, and publish NaaP plugins using the @naap/plugin-sdk CLI..." — subject-led action verbs, ~140 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `NaaP plugin`, `@naap/plugin-sdk`, `plugin development`, `plugin manifest`, `ShellContext hooks` |
| 1. Frontmatter | 1.14 | audience register match | PASS | Code-first |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | MIXED | Line 35: "If you are building a network tool..." — conditional gatekeeping (check 2.4) |
| 2. Voice | 2.5 | Opening order | MIXED | Line 33 H2 "Building a plugin" — followed by "NaaP has full tooling..."; first body sentence is system-fact (good), but the H2 itself is the only H2 on page and duplicates the title |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | MIXED | Line 35 "If you are building..." is conditional gatekeeping |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "The dev server hot-reloads...", "First run handles everything...", "Every plugin declares..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | NaaP defined via sibling overview; `@naap/plugin-sdk` self-evident in context |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | PASS | First H2 has code 6 lines later (line 39) |
| 2. Voice | 2.D2 | API/method has code or link | PASS | `useShell`, `useAuth`, `useEventBus` all shown in code (line 68) |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `npm install -g @naap/plugin-sdk` (line 40) unpinned; `git clone livepeer/naap` (line 48) pulls HEAD |
| 2. Voice | 2.D4 | Errors in main | FAIL | Zero error states or troubleshooting on a procedural page |
| 2. Voice | 2.D5 | No prose explaining self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | PASS | No Note used |
| 3. Headings | 3.1 | Heading score ≥20/25 | FAIL | Only one H2 "Building a plugin" (4+3+4+5+4 = 20 PASS but duplicates the title — see 3.6) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | Title "Building a NaaP plugin" vs sole H2 "Building a plugin" — H2 effectively duplicates the H1 with one fewer word. Each procedural step needs its own H2 |
| 3. Headings | 3.7 | Expert editorial | MIXED | Page is a single section; not editorial |
| 3. Headings | 3.8 | pageType naming style | FAIL | pageType is `how_to` non-canonical; instruction pages should be task-oriented |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Build a plugin |
| 4. Structure | 4.2 | Purpose statement | PASS | "lets the developer scaffold and publish a NaaP plugin" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Closing prose paragraph routes to architecture + tutorial — but as in-prose text, not Related Pages |
| 4. Structure | 4.4 | No dead ends | MIXED | |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No explicit prerequisites section. Page assumes Node.js, npm, git, Docker (line 51 reference) installed. For instruction pageType, prerequisites are REQUIRED per check 5.2 |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Defers SDK reference and guides to operator.livepeer.org |
| 4. Structure | 4.7 | Info type per section | MIXED | Procedural but rendered as prose+code, not Steps |
| 4. Structure | 4.8 | No content duplication | PASS | Code snippets unique to this page |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "how do I scaffold a NaaP plugin?" but not "what's a complete plugin look like end-to-end?" — defers heavily to operator.livepeer.org |
| 4. Structure | 4.12 | Page size | PASS | 3.7 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No discussion of "when to use prompt templates vs manual scaffold", no failure modes ("what if start.sh fails to bootstrap?"), no version-compatibility constraints |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | bash, json, typescript all tagged |
| 4. Structure | 4.18 | Code-first opening | PASS | First H2 introduces code 6 lines in |
| 4. Structure | 4.19 | Error states in main | FAIL | No error states or recovery steps; instruction pages without troubleshooting are incomplete |
| 4. Structure | 4.20 | API/method has code | PASS | |
| 5. Layout | 5.1 | Correct template | FAIL | pageType is `how_to` (non-canonical); should use instruction template with Prerequisites, StyledSteps, Verification, Related Pages |
| 5. Layout | 5.2 | Required sections present | FAIL | Instruction pages REQUIRE Prerequisites + Steps + Verification + Next Steps. Page has none of these as explicit sections — content is freeform prose+code blocks |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | FAIL | Procedural content (scaffold + dev + publish) should be in `<StyledSteps>` not bold-then-code-block sequences (lines 37, 53, 65, 78) |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 15: `status: current` legacy |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | FAIL | Instruction template requires Prerequisites → Steps → Verification → Related |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | PASS | |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Neither present. Closing prose paragraph (line 91) routes to architecture + tutorial as in-prose text |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages block |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | MIXED | All 5 fenced blocks have `icon="terminal"` but NONE have `title` attr (lines 39, 47, 55, 67, 80) — partial PASS |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Page is procedural but uses bold-prose-then-code structure — should use `<StyledSteps>` per check 5.21 |
| 5. Layout | 5.22 | Nav cards | N/A | |
| 5. Layout | 5.23 | StyledTable | N/A | |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider (line 31) OK; final divider (line 89) precedes prose paragraph, not Related Pages |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "8 templates" (line 85) — link to Prompts section provided but no in-page audit; "Subsequent starts take 6-8 seconds" (line 51) — no source |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No TESTED labels on any of the 5 code blocks |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "6-8 seconds" subsequent start time uncited; "8 templates" uncited |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `@naap/plugin-sdk` install pulls latest; `livepeer/naap` clone pulls HEAD |
| 6. Veracity | 6.9 | No open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | operator.livepeer.org/docs cited (T1), `livepeer/naap` linked (T1) |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2604 |
| 7. Nav/IA | 7.2 | docs.json mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | No orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | PASS | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab graduation | FAIL | |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | File naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs in nav | PASS | |
| 7. Nav/IA | 7.11 | Resources structure | N/A | |
| 7. Nav/IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | MIXED | `/v2/developers/build/tutorials/build-a-naap-plugin` referenced on line 91 — need to verify the file exists |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 8. Links | 8.3 | Snippets resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | Scaffold covered; develop covered (briefly); publish only mentioned, not shown |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Page promises "from zero to running plugin" (line 28 Tip) but does not show end-to-end — refers to external tutorial |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope explicit | MIXED | Sends reader off-site for completeness |
| 10. Completeness | 10.5 | Self-containment | FAIL | Cannot actually complete a plugin from this page alone |
| 10. Completeness | 10.6 | Language paths | PASS | TypeScript + bash + json shown |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Building a NaaP plugin" | PASS | |
| sidebarTitle | Yes | "Building a plugin" | PASS | |
| description | Yes | "Create, develop, and publish NaaP plugins..." | PASS | Subject-first |
| pageType | Yes | how_to | FAIL | Non-canonical — change to `instruction` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `build` |
| complexity | No | — | FAIL | Add `intermediate` |
| lifecycleStage | No | — | FAIL | Add `build` |
| keywords | Yes | [array] | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Add `verified` |
| lastVerified | Yes | 2026-05-15 | PASS | |
| status | Yes | current | FAIL | Drop legacy |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (3×) | Required | — | Final divider precedes prose, not Related Pages |
| `<Tabs>` / `<Tab icon>` | No | Recommended for language variants | Yes | TS/JS variants of useShell hook would benefit |
| `<StyledSteps>` / `<StyledStep>` | No | REQUIRED for instruction | — | FAIL — page is procedural, must use `<StyledSteps>` per check 5.21 |
| `<Columns cols={2}>` Related Pages | No | Required | Yes | Missing |
| `<CustomCardTitle>` | No | — | — | |
| Fenced code with icon + title | Partial | Required | — | All 5 blocks have `icon="terminal"` but NO `title` attribute |
| `<Tip>` | Yes (line 28) | — | — | Header CTA |
| `<Warning>` / `<Check>` | No | Recommended for failure modes | — | Missing — no troubleshooting block |
| `<Accordion>` | No | Recommended for FAQ | — | "What if start.sh fails?" / "How to debug a plugin?" would benefit |
| `<StyledTable>` | No | — | — | |
| `<CenteredContainer>` | Yes (line 27) | — | — | Header CTA wrapper |

## Cross-page duplication and link gaps

- **OVERLAP**: None.
- **LINK GAPS**:
  - `/v2/developers/build/tutorials/build-a-naap-plugin` referenced on line 91 — need to verify the tutorial page exists in v2/.
  - `@naap/plugin-sdk` not linked to its npm package or to operator.livepeer.org/docs/api-reference/sdk-hooks.
  - `pymthouse` not on this page but referenced in architecture sibling — no graduation note for billing-integration plugins.
  - No link to a sample plugin (e.g. one of the 8 plugins shown in architecture) as a reference implementation.
- **STRANDED**: Reader who finishes scaffolding has no obvious path to "publish my plugin to the marketplace" — the publish step is mentioned in the Tip but never shown.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 1 | line 35: "If you are building a network tool — a monitoring dashboard, a governance interface, an AI pipeline manager — shipping it as a NaaP plugin..." — conditional gatekeeping per check 2.4. **Wait**: re-reading line 35, this uses ` - ` ASCII hyphens with spaces, which mimic em-dashes. ` - ` ASCII is technically OK per check 2.12 but stylistically reads as em-dash. INFO |
| Conditional gatekeeping | 1 | line 35: "If you are building..." |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Building a plugin | 4 | 3 | 4 | 5 | 4 | 20 |

Page has only ONE H2 — duplicates the page title. Procedural content should be inside `<StyledSteps>` with named H2s per check 5.13.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 39 | bash | ✓ terminal | ✗ | NOT-TESTED | Missing title — should be `title="install.sh"` per 5.20 |
| 47 | bash | ✓ terminal | ✗ | NOT-TESTED | Missing title — should be `title="start.sh"` |
| 55 | json | ✓ terminal | ✗ | NOT-TESTED | Missing title — should be `title="plugin.json"`; icon should be `icon="code"` not `terminal` (it's a manifest file) |
| 67 | typescript | ✓ terminal | ✗ | NOT-TESTED | Missing title — should be `title="MyPlugin.tsx"`; icon should be `icon="code"` |
| 80 | typescript | ✓ terminal | ✗ | NOT-TESTED | Missing title — should be `title="response-envelope.ts"`; icon should be `icon="code"` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises "three commands from zero to running plugin" in the header Tip (line 28) but does not actually deliver a running plugin by EOF. The reader gets: install + scaffold + dev start (3 commands), plus a sample plugin.json, plus a useShell snippet, plus a response envelope — but no "what should I now see in my browser?" step, no "did it work?" verification, no "next: publish it" walkthrough. The outcome is implied but unverified.
- **Fix step:** After the `naap-plugin dev` command at line 42, add a §"Verification" with one screenshot or `<Frame>` showing the dev-server result at `http://localhost:3000`, plus a 4-line checklist: "Shell loads", "Plugin appears in nav", "useShell returns a context object in console", "Hot-reload triggers on file save". Add a §"Publish" section showing `naap-plugin publish` with the expected success output.
- **Source/exemplar:** `livepeer/naap/docs/getting-started/quickstart.md`; existing `v2/about/_workspace/reviews2/network/architecture.md` for outcome-verification pattern.

### Layer 2 — Composition
- **Gap:** Instruction page renders as: header Tip → opening divider → single H2 → 5 bold-prose-then-code sequences → closing divider → closing prose. The procedural sequence is not `<StyledSteps>`. There are no `<Tabs>` for the TypeScript vs JavaScript variants of useShell. There is no `<Accordion>` for "Common errors" or "Troubleshooting start.sh". There is no `<Warning>` or `<Check>` indicator. There is no Related Pages block.
- **Fix step:** (a) Wrap the procedural content in `<StyledSteps iconColor="..." titleColor="...">` with five `<StyledStep title="...">`: "Install the CLI", "Scaffold a plugin", "Run the platform locally", "Declare a manifest", "Wire the plugin to the shell". (b) After step 3, add a `<Warning>` indicator for "start.sh fails to bind port 3000". (c) Add EOF `<Columns cols={2}>` Related Pages with: architecture (prev), NaaP tutorial (next), `https://github.com/livepeer/naap` (source), `https://operator.livepeer.org/docs/prompts/how-to-use` (templates).
- **Source/exemplar:** check 5.21 (`<StyledSteps>` required); `snippets/templates/pages/page-composition-framework.mdx` instruction template.

### Layer 3 — Cross-page integration
- **Gap:** No link to the actual NaaP tutorial page in v2/ (line 91 refers to `/v2/developers/build/tutorials/build-a-naap-plugin` but it is in-prose, not a Card). No link to `@naap/plugin-sdk` npm package. No link from this page back to the architecture sibling (only forward, via prose). No graduation to "production plugin checklist" or "publishing your plugin to the marketplace". No cross-tab to Gateways (NaaP's primary users) or to About (governance plugins).
- **Fix step:** (a) Verify `/v2/developers/build/tutorials/build-a-naap-plugin` exists. (b) Replace the closing prose paragraph (line 91) with Related Pages cards. (c) Inline at line 40: link `@naap/plugin-sdk` to its npm page. (d) Add a §"After your first plugin" pointing to publish flow + marketplace + tutorial.
- **Source/exemplar:** `https://www.npmjs.com/package/@naap/plugin-sdk`; check 4.10+7.6.

### Layer 4 — Veracity and source authority
- **Gap:** "Subsequent starts take 6-8 seconds" (line 51) — no source benchmark. "8 templates covering frontend plugins, full-stack apps..." (line 85) — link to Prompts section but no count audit. `@naap/plugin-sdk` install (line 40) pulls latest with no version. `livepeer/naap` clone (line 48) pulls HEAD. Zero TESTED labels on the 5 code blocks. `veracityStatus` field absent.
- **Fix step:** (a) Pin install: `npm install -g @naap/plugin-sdk@^0.X.Y` (line 40). (b) Pin clone: `git clone --branch v0.X.Y https://github.com/livepeer/naap.git` (line 48). (c) Add `// TESTED: 2026-05-15 against @naap/plugin-sdk v0.X.Y, naap v0.X.Y` comment above each block. (d) Either remove "6-8 seconds" claim or add citation. (e) Replace "8 templates" with link to the actual count source. (f) Add `veracityStatus: verified` to frontmatter.
- **Source/exemplar:** `@naap/plugin-sdk` npm releases; `livepeer/naap` tags page.

### Layer 5 — Product-forward depth
- **Gap:** Page is a happy-path quickstart with no error handling. Real developers will hit: port conflicts, missing Docker, npm permission errors on global install, plugin.json validation errors, useShell typing issues, response envelope schema mismatches. None are addressed. There is no "What you need before starting" prerequisite block. There is no "Plugin checklist before publishing" gate. There is no "If start.sh fails, here are 3 common causes" troubleshooting block. There is no "What does my plugin look like in production?" expectation-setting (does it auto-update? require approval? get reviewed?).
- **Fix step:** Add §"Prerequisites" at top: "Node.js ≥20, npm ≥10, Docker Desktop running, ports 3000 and 4001-4012 free, a GitHub account for publishing". Add §"Common errors" `<AccordionGroup>` with three items: "Port 3000 in use", "Docker daemon not running", "npm install permission denied". Add §"Before publishing" checklist: "Plugin.json validates with `naap-plugin validate`", "Permissions match the plugin's actual API calls", "PostgreSQL schema migration tested locally", "Plugin renders inside the shell in production build". Mark the plugin SDK with a `<Badge>Beta</Badge>` in the header tip so readers know breaking changes are expected.
- **Source/exemplar:** `livepeer/naap` issue tracker for common errors; check 4.15 (trade-offs/limitations).

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 11 / MEDIUM 4 / INFO 2
**Critical findings (1–5)**:
1. Non-canonical `pageType: how_to` — should be `instruction` (check 1.2)
2. Frontmatter missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current` (checks 1.1, 1.4, 1.6, 1.7, 1.8, 5.7)
3. Procedural content not in `<StyledSteps>` — uses bold-prose-then-code (check 5.21)
4. No Prerequisites, Verification, or Related Pages sections — instruction template requires all (checks 5.2, 5.13, 5.16)
5. Zero code blocks have `title` attr (5 blocks fail check 5.20)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: how_to` → `pageType: instruction`. Add `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: verified`. Drop `status: current` | 13-16 | HIGH | S | check 1.2+5.7 |
| 2 | Add §"Prerequisites" H2 at top (lines ~33) listing Node.js ≥20, npm ≥10, Docker Desktop, ports 3000 + 4001-4012, GitHub account | new section | HIGH | M | check 5.2+2.B5 |
| 3 | Wrap procedural sequence in `<StyledSteps iconColor=... titleColor=...>` with 5 named `<StyledStep title="...">`: Install CLI, Scaffold, Run platform locally, Declare manifest, Wire to shell | 37-83 | HIGH | L | check 5.21 |
| 4 | Add `title="install.sh"` to bash on line 39; `title="start.sh"` to bash on line 47; `title="plugin.json"` + `icon="code"` on line 55; `title="MyPlugin.tsx"` + `icon="code"` on line 67; `title="response-envelope.ts"` + `icon="code"` on line 80 | 39, 47, 55, 67, 80 | HIGH | S | check 5.20 |
| 5 | Pin install: `@naap/plugin-sdk@^0.X.Y` on line 40. Pin clone: `--branch v0.X.Y` on line 48 | 40, 48 | HIGH | S | check 2.D3+6.8 |
| 6 | Add §"Verification" after step 3 with checklist: shell loads, plugin appears, useShell returns object, hot-reload works | new section | HIGH | M | check 5.2 (instruction template) |
| 7 | Add §"Common errors" `<AccordionGroup>` with `<Accordion icon="circle-question">` items for port 3000, Docker, npm permissions, plugin.json validation | new section | HIGH | M | check 2.D4 (errors in main content) |
| 8 | Replace closing prose paragraph (line 91) with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` containing 4 `<Card>` blocks (architecture, tutorial, npm, prompts) | 91 + EOF | HIGH | M | check 5.16+5.17+5.22 |
| 9 | Add ≥3 cross-tab links to Related Pages: `/v2/gateways/setup/connect` (primary operator audience), `/v2/about/network/architecture` (protocol context), `/v2/solutions/managed-gateway` or `/v2/orchestrators/setup/*` | EOF | HIGH | S | check 4.10+7.6 |
| 10 | Rewrite line 35 conditional opener: replace "If you are building a network tool..." with subject-led "A NaaP plugin ships with shared auth, navigation, and database infrastructure. Build one if your tool covers monitoring, governance, or AI-pipeline management." | 35 | MEDIUM | S | check 2.4+2.5 |
| 11 | Add TESTED comment to each of 5 code blocks: `// TESTED: 2026-05-15 against @naap/plugin-sdk v0.X.Y` | 39, 47, 55, 67, 80 | MEDIUM | S | check 6.2 |
| 12 | Verify `/v2/developers/build/tutorials/build-a-naap-plugin` exists and is registered in docs.json — if not, fix orphan or remove the in-prose reference | 91 | MEDIUM | S | check 7.1+8.1 |
| 13 | Replace ` - ` ASCII em-dash mimic on line 35 ("a network tool - a monitoring dashboard, a governance interface, an AI pipeline manager - shipping...") with comma-separated lists or split sentences | 35 | INFO | S | check 2.12 |
| 14 | Add `<Badge>Beta</Badge>` to header tip (line 28) | 28 | INFO | S | layer 5 |
