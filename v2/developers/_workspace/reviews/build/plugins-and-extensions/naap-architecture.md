# Review: naap-architecture.mdx (plugins-and-extensions)

**Page**: `v2/developers/build/plugins-and-extensions/naap-architecture.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `concept`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 6,551
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Legacy `status: current` (line 15) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` (line 13) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing; suggest `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing; suggest `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing; suggest `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing; suggest `verified` |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "NaaP micro-frontend architecture: the Next.js 15 shell, ShellContext interface, UMD plugin loading..." — subject-first, ~165 chars (borderline, just under 160 once trimmed) |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `NaaP`, `micro-frontend`, `ShellContext`, `plugin architecture`, `UMD` |
| 1. Frontmatter | 1.14 | audience register match | PASS | TypeScript interface, plugin internals — developer register |
| 2. Voice | 2.1 | UK English | PASS | "authorisation" on line 44 OK |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 38: "NaaP is a micro-frontend architecture..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | NaaP, ShellContext, UMD consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | (Note: "on mount - this" line 38 uses ASCII hyphen with spaces, which mimics em-dash but is technically `-` not `—`. Quote: line 38 "Each plugin gets a `ShellContext` object on mount - this is the entire interface" — the ` - ` pattern reads like an em-dash. **INFO**: rewrite as a colon or split sentence) |
| 2. Voice | 2.13 | Entity-led voice | PASS | "NaaP is...", "The shell provides...", "Plugins own..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | UMD bundles defined contextually; ShellContext shown inline (line 42) |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | concept |
| 2. Voice | 2.D2 | API/method has code or link | PASS | ShellContext, useShell, etc., shown |
| 2. Voice | 2.D3 | Versions explicit | MIXED | "Next.js 15" pinned. `@naap/plugin-sdk` not version-pinned anywhere on page |
| 2. Voice | 2.D4 | Errors in main | N/A | |
| 2. Voice | 2.D5 | No prose for self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing adjacent | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No Note used |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | See heading table below |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | "Micro-frontend design", "Installed plugins" both anchored |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "NaaP architecture" (2 words) |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming style | PASS | governing-concept |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Explain NaaP architecture |
| 4. Structure | 4.2 | Purpose statement | PASS | "lets the developer understand the NaaP architecture" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Closing prose paragraph (line 162) routes to building-a-plugin only; no link back to overview |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing prose not a Related Pages block |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | Page assumes knowledge of: micro-frontends, UMD, Next.js API routes, Vercel, Neon, RBAC. No prereq block |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Refers reader to building-a-plugin for the CLI — OK; but `ShellContext` interfaces (`IAuthService` etc.) are listed without saying "interface definitions live at operator.livepeer.org/docs/api-reference/sdk-hooks" |
| 4. Structure | 4.7 | Info type per section | PASS | concept + reference data |
| 4. Structure | 4.8 | No content duplication | PASS | Architecture not duplicated elsewhere in v2/ |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links — page is entirely internal |
| 4. Structure | 4.11 | Discord test | PASS | Answers "what is the NaaP architecture?" |
| 4. Structure | 4.12 | Page size | PASS | 6.5 KB substantive |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No mention of UMD vs ES module trade-offs, no mention of "what if a plugin schema conflicts", no isolation guarantees |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | typescript, mermaid both tagged |
| 4. Structure | 4.18 | Code-first opening | N/A | concept |
| 4. Structure | 4.19 | Error states in main | N/A | |
| 4. Structure | 4.20 | API has code or link | PASS | |
| 5. Layout | 5.1 | Correct template | PASS | concept |
| 5. Layout | 5.2 | Required sections present | MIXED | Has Header CTA, intro, 2 H2s, Mermaid; missing Related Pages footer |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | ShellContext interface should arguably be inside `<Accordion>` or a `<Tabs>` (interface signature vs prose explanation) but TypeScript block is fine. Plugin table is `<StyledTable>` (good) |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 15: `status: current` |
| 5. Layout | 5.8 | CSS custom properties | MIXED | Mermaid block (lines 62-97) uses hardcoded hex `#1a1a1a`, `#fff`, `#2d9a67`, `#0d0d0d` — should reference `MermaidColours.jsx` per check 5.27 |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | MIXED | Plugin list (8 plugins on lines 106-156) is hardcoded — but matches one source-of-truth and may not warrant a data module. INFO. |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Neither present. Closing prose paragraph (line 162) routes only to building-a-plugin |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages block exists |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | MIXED | typescript block (line 42) has `icon="terminal"` but no `title`; mermaid block has no icon or title |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards | N/A | No nav cards |
| 5. Layout | 5.23 | StyledTable | PASS | Plugin table uses `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | Two consecutive `<CustomDivider />` on lines 158 and 160 — only ONE divider should appear before Related Pages; double divider is a duplication bug |
| 5. Layout | 5.27 | Mermaid governance | FAIL | Mermaid block uses hardcoded hex theme on line 63 instead of `MermaidColours.jsx`. ScrollableDiagram wrapper is used (good) |
| 5. Layout | 5.28 | Import ordering | PASS | Components → no data imports → no page imports |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | PASS | Plugin table is at end |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | FAIL | Hardcoded hex in Mermaid theme block (lines 63, 96) |
| 6. Veracity | 6.1 | Claims citable | MIXED | "12 plugins" claim (line 102) — but only 8 plugins listed in the table on lines 106-156. Quantification conflict. No link to a plugin registry or source-of-truth |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No TESTED/NOT-TESTED labels on TypeScript or Mermaid blocks |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | FAIL | "12 plugins" vs 8 rows in table |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | Next.js 15 pinned (good); but ports "4001-4012" (line 57) not linked to a source; `pymthouse` (line 123) not linked to repo or docs |
| 6. Veracity | 6.9 | No open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | ShellContext interface declared but not linked to source file in `livepeer/naap` repo |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2603 |
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
| 8. Links | 8.1 | Internal links resolve | PASS | `/v2/developers/build/plugins-and-extensions/building-a-plugin` resolves |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 8. Links | 8.3 | Snippets resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope explicit | MIXED | |
| 10. Completeness | 10.5 | Self-containment | MIXED | TypeScript service interfaces (IAuthService etc.) named but never defined or linked |
| 10. Completeness | 10.6 | Language paths | PASS | TS shown |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "NaaP architecture" | PASS | |
| sidebarTitle | Yes | "Architecture" | PASS | |
| description | Yes | "NaaP micro-frontend architecture..." | PASS | Subject-first |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `explain` |
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
| status | Yes | current | FAIL | Drop legacy field |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | — | Opening OK; double divider on lines 158/160 violates 5.26 |
| `<Tabs>` / `<Tab icon>` | No | Recommended for variants | Yes | "Local development (Express :4001-4012)" vs "Production (Vercel routes)" begs Tabs |
| `<StyledSteps>` | No | — | — | Concept |
| `<Columns cols={2}>` Related Pages | No | Required | Yes | Missing |
| `<CustomCardTitle>` | No | — | — | No nav cards |
| Fenced code with icon + title | Partial | Required where code present | — | typescript line 42 has icon but no title; mermaid line 62 lacks both |
| `<Tip>` | Yes (line 31) | — | — | Header CTA OK |
| `<Accordion>` | No | Recommended for edge cases | — | "Plugin schema isolation rules" + "UMD vs ESM" trade-offs would benefit |
| `<StyledTable>` | Yes (lines 106-156) | — | — | Plugin table |
| `<ScrollableDiagram>` | Yes (line 61) | — | — | Good — required for Mermaid overflow |
| Mermaid hardcoded theme | Yes (line 63) | — | — | FAIL 5.27 — should use `MermaidColours.jsx` |

## Cross-page duplication and link gaps

- **OVERLAP**: None significant; architecture lives only here.
- **LINK GAPS**:
  - ShellContext interface (line 43-55) — none of the 10 service interfaces (`IAuthService`, `IEventBus` etc.) link to operator.livepeer.org/docs/api-reference/sdk-hooks or to a `livepeer/naap` source file.
  - No upstream link to `livepeer/naap` repo on this page — only on the overview.
  - "pymthouse as a billing provider" (line 123) — not linked.
  - "Vercel" "Neon" referenced as deployment targets — not linked, no version notes.
  - Plugin Marketplace (line 116) — no link to the plugin itself in the repo or operator.livepeer.org.
- **STRANDED**: Reader who finishes this page is told to read building-a-plugin; no upward link back to overview, no graduation to "I want to actually use NaaP today" (operator.livepeer.org).

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | (line 38 uses ` - ` ASCII hyphen with spaces, INFO — reads like em-dash) |
| US spellings | 0 | line 44 "authorisation" — UK English correctly used |
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
| Micro-frontend design | 5 | 4 | 5 | 5 | 4 | 23 |
| Installed plugins | 4 | 3 | 4 | 5 | 5 | 21 |

Both PASS (≥20/25).

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 42 | typescript | ✓ terminal | ✗ | NOT-TESTED | Title missing — should be `title="ShellContext.ts"` per 5.20 |
| 62 | mermaid | ✗ | ✗ | NOT-TESTED | Title missing, icon missing. Hardcoded theme hex — should reference `MermaidColours.jsx` per 5.27 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader leaves understanding the architecture but cannot answer "do I have everything I need to design a plugin?" The page shows the ShellContext interface but the 10 listed services (`IAuthService`, `IEventBus`, etc.) are named without any guidance on which subset a typical plugin uses, what each requires for permissions, and which are mandatory vs optional. The reader knows the structure but not the design decisions they must make.
- **Fix step:** Insert a §"Plugin design decisions" between "Micro-frontend design" (line 36) and "Installed plugins" (line 102) with three sub-headings: "Which services does my plugin need?" (matrix: minimal-read-only / interactive / data-write / cross-plugin); "Which schemas should I own?" (one PostgreSQL schema per plugin); "Which routes do I claim?" (`/api/v1/[plugin-name]/*`). Use `<StyledTable>` or `<Accordion>` to render.
- **Source/exemplar:** `livepeer/naap/docs/architecture.md` or operator.livepeer.org/docs/concepts/architecture (the upstream NaaP docs decision matrix).

### Layer 2 — Composition
- **Gap:** No `<Tabs>` despite the page explicitly contrasting two deployment modes — "production (Vercel)" vs "local development (Express on 4001-4012)" on line 57. No `<AccordionGroup>` for the 10 ShellContext services. No `<Columns>` Related Pages. Double `<CustomDivider />` on lines 158/160 violates check 5.26. Mermaid hardcoded theme violates 5.27.
- **Fix step:** (a) Convert line 57 prose into `<Tabs>` block with `<Tab title="Production" icon="cloud">` and `<Tab title="Local dev" icon="laptop">`. (b) Replace double divider on lines 158-160 with a single `<CustomDivider />`. (c) Replace the `%%{init: {'theme': 'base', 'themeVariables': ...}}%%` block with the project's `MermaidColours.jsx` import pattern — see `snippets/components/config/MermaidColours.jsx`. (d) Add EOF Related Pages block (see Layer 3).
- **Source/exemplar:** `snippets/components/config/MermaidColours.jsx`; check 5.26+5.27.

### Layer 3 — Cross-page integration
- **Gap:** ShellContext service names (`IAuthService` etc.) link nowhere. `pymthouse` named on line 123 unsourced. `livepeer/naap` repo not linked from this page (only from the sibling overview). No back-link from building-a-plugin → this page beyond a closing paragraph. No graduation to `v2/about/governance` (NaaP touches lazy-consensus governance).
- **Fix step:** Add to line 40 closing: "...the entire interface between a plugin and the platform. See the [SDK hooks reference](https://operator.livepeer.org/docs/api-reference/sdk-hooks) for full service signatures." Add to line 123: "[pymthouse](https://github.com/pymthouse)" with a real URL. Add EOF Related Pages with 4 cards: building-a-plugin (next), overview (prev), `https://github.com/livepeer/naap` (source), `https://operator.livepeer.org/docs/architecture` (deeper).
- **Source/exemplar:** operator.livepeer.org/docs/api-reference/sdk-hooks; `livepeer/naap/README.md`.

### Layer 4 — Veracity and source authority
- **Gap:** "12 plugins" stated on line 102, but only 8 listed in the table on lines 106-156. Quantitative mismatch — either the table is incomplete or the count is wrong. `lastVerified: 2026-05-15` claims verification, but the architectural claims ("Vercel", "Neon", "PostgreSQL schema isolation") have no source links. Mermaid diagram and TypeScript interface lack TESTED labels. ShellContext interface declared without linking to its source file in `livepeer/naap`.
- **Fix step:** (a) Audit the actual installed-plugin count against `livepeer/naap/packages/registry/installed-plugins.json` or equivalent; update either the "12" claim or add the 4 missing rows. (b) Add `// TESTED: 2026-05-15 against livepeer/naap@v0.X.Y` comment to the TypeScript block. (c) Add citation to ShellContext: "Source: [`packages/shell/src/types/ShellContext.ts`](https://github.com/livepeer/naap/blob/main/packages/shell/src/types/ShellContext.ts)" inline after line 42. (d) Add `veracityStatus: verified` to frontmatter.
- **Source/exemplar:** `livepeer/naap` package tree; ShellContext source file.

### Layer 5 — Product-forward depth
- **Gap:** Architecture page reads like a wiki — describes the design but doesn't tell the reader what the design buys them, what the failure modes are, or what they cannot do. No "Plugin isolation guarantees" (can plugin A read plugin B's schema?), no "Security model" (auth tokens — refreshed how?), no "Performance budget" (how long can `useShell()` block?), no "Reliability story" (what happens if Vercel routes are slow?). The 8-plugin table shows what exists but not when each plugin is loaded, what permissions each needs, or whether they share data.
- **Fix step:** Add §"What this architecture guarantees" with three subsections: "Isolation" (one PostgreSQL schema per plugin, no cross-plugin DB reads), "Auth" (token refresh model, RBAC enforcement layer), "Performance" (UMD bundle size limit, expected mount time). Add §"Failure modes" with three bullets: "If a plugin throws on mount, the shell shows an error boundary instead of crashing"; "If the Vercel API route times out, the plugin's fetch returns a 5xx envelope and the shell surfaces a toast"; "If the PostgreSQL schema migration fails, plugin install rolls back and Plugin Marketplace marks the plugin as unhealthy". Add an `<Accordion>` group for "When NOT to model your plugin this way" (e.g. heavy-compute plugins should run as standalone services).
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — gateway architecture page failure-modes pattern; the existing `v2/about/network/architecture.mdx` "Reliability" section.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current` (checks 1.1, 1.4, 1.6, 1.7, 1.8, 5.7)
2. Quantification conflict: "12 plugins" (line 102) vs 8 rows in the table (lines 106-156) — check 6.4
3. Mermaid block (lines 62-97) uses hardcoded hex theme instead of `MermaidColours.jsx` — check 5.27+5.34
4. Double `<CustomDivider />` on lines 158/160 — check 5.26
5. No Related Pages footer; closing prose on line 162 violates 5.16+5.17. Zero cross-tab graduation links (4.10, 7.6)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: explain`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: verified`. Drop `status: current` | 13-16 | HIGH | S | check 1.1+5.7 |
| 2 | Reconcile "12 plugins" claim (line 102) with the 8-row table (lines 106-156). Either expand the table to all 12 or correct the count | 102, 106-156 | HIGH | M | check 6.4 |
| 3 | Replace hardcoded Mermaid theme block (line 63) with `MermaidColours.jsx` import pattern; check 5.27 | 62-97 | HIGH | M | `snippets/components/config/MermaidColours.jsx` |
| 4 | Delete the duplicate `<CustomDivider />` on line 158 OR line 160 — keep one | 158-160 | HIGH | S | check 5.26 |
| 5 | Replace closing prose paragraph (line 162) with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` + 4 `<Card>` blocks (overview, building-a-plugin, `livepeer/naap` repo, operator.livepeer.org/docs/architecture) | 162 + EOF | HIGH | M | check 5.16+5.17+5.22 |
| 6 | Add `title="ShellContext.ts"` to TypeScript fence on line 42 | 42 | HIGH | S | check 5.20 |
| 7 | Add `title="naap-request-flow"` + `icon="diagram-project"` to Mermaid fence on line 62 | 62 | HIGH | S | check 5.20 |
| 8 | Add inline link on line 42-43 to ShellContext source file in `livepeer/naap` repo | 42-43 | HIGH | S | check 6.10 |
| 9 | Add ≥3 cross-tab links in Related Pages: `/v2/gateways/setup/connect` (operator path), `/v2/about/governance/*` (governance plugins), `/v2/solutions/managed-gateway` or equivalent | EOF | HIGH | S | check 4.10+7.6 |
| 10 | Convert line 57 prose ("production (Vercel) ... local development ... ports 4001-4012") into a `<Tabs>` block with `<Tab title="Production" icon="cloud">` and `<Tab title="Local dev" icon="laptop">` | 57 | MEDIUM | M | layer 2; check 5.18 |
| 11 | Add §"Plugin design decisions" between H2-1 and H2-2 with sub-decisions for plugin authors | between 100 and 102 | MEDIUM | M | layer 1 |
| 12 | Add §"What this architecture guarantees" (isolation, auth, performance) and §"Failure modes" before Installed plugins H2 | new sections | MEDIUM | M | layer 5 |
| 13 | Rewrite line 38 " - " ASCII hyphen pseudo-em-dash as colon or split-sentence | 38 | INFO | S | check 2.12 |
| 14 | Link `pymthouse` on line 123 to its repo or product page | 123 | INFO | S | check 8.1 |
