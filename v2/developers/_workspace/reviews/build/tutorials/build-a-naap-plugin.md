# Review: build-a-naap-plugin.mdx

**Page**: `v2/developers/build/tutorials/build-a-naap-plugin.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A8
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 19,117
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | all present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Scaffold, develop, and publish a NaaP plugin. Micro-frontend architecture, ShellContext, plugin manifest, marketplace publication." subject-led, 134 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords | PASS | specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "utilisation", "decentralised" used; no US hits |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | line 40 "By the end of this tutorial..."; line 42 self-ref "This is the Persona 2 and Persona 3 join" |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | NaaP, ShellContext preserved |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | MIXED | line 40 reader-led; later paragraphs entity-led |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology | PASS | |
| 2. Voice | 2.D1 | Code-first opening | FAIL | First fenced code at line 74 (ShellContext interface, descriptive not actionable). First actionable command at line 97 (`git clone naap`). 60+ lines of preamble before scaffold begins |
| 2. Voice | 2.D2 | API methods linked | MIXED | NaaP repo not linked at first mention (line 40); `@naap/plugin-sdk` not linked |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Node 20+ stated; `@naap/plugin-sdk` (line 130) unpinned; NaaP repo cloned without a tag (line 98) |
| 2. Voice | 2.D4 | Errors in main | PASS | Common Errors AccordionGroup at line 456 in main flow |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | PASS | uses `<Warning>` (line 44) for active-beta caveat — correct usage |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "Plugin Architecture" (24), "Platform Bootstrap" (22), "Plugin Scaffold" (22), "Frontend Implementation" (22), "Backend Routes" (24), "Database Schema" (24), "Inter-Plugin Communication" (24), "Marketplace Publication" (24), "Production Considerations" (23), "Common Errors" (21), "Next Steps" (banned). 11 pass / 1 fail |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 478: "## Next Steps" |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Build a NaaP Plugin" — 3 words after stop-word |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT | PASS | |
| 4. Structure | 4.4 | No dead ends | MIXED | Next Steps cards present but plain |
| 4. Structure | 4.5 | Prerequisites stated | PASS | line 50 (named "Required Tools") |
| 4. Structure | 4.6 | Out-of-scope | PASS | NaaP docs delegated for full reference |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | PASS | content distinct from other tutorials in folder |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | zero cross-tab links; NaaP repo and NaaP docs are upstream (good) but no Gateways/Solutions/About cards |
| 4. Structure | 4.11 | Discord test | PASS | reader can complete it |
| 4. Structure | 4.12 | Page size | PASS | 19.1 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | 3 Steps blocks for 3 distinct phases (Platform Bootstrap, Plugin Scaffold, Marketplace Publication) — multi-phase tutorial, justified |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Production Considerations lists 6; no "when not to use NaaP" |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | all 14 blocks have `bash`, `ts`, `tsx`, `json`, `sql` |
| 4. Structure | 4.18 | Code-first opening | FAIL | see 2.D1 |
| 4. Structure | 4.19 | Errors in main | PASS | |
| 4. Structure | 4.20 | API methods linked | MIXED | `useShell()`, `useAuth()`, `useEventBus()` hooks named — not linked to SDK reference |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold partial — multi-phase Steps + Common Errors + Next Steps; Verification implicit (no dedicated H2) |
| 5. Layout | 5.2 | Required sections | MIXED | Prerequisites (mis-named), 3 Steps blocks, Common Errors, Next Steps; Verification absent as H2 |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | technical/procedural — but raw `<Steps>` not StyledSteps; 2 markdown tables (lines 67, 154) should be `<StyledTable>` |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 25 `status: current` |
| 5. Layout | 5.8–5.10 | styles / banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | partial |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | "Plugin Architecture" table (lines 67-72) hardcoded; ShellContext interface (lines 74-87) hardcoded |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | "Next Steps" with CardGroup, not Columns/Related |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup>` not `<Columns>`; cards plain |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | FAIL | 5 `<Accordion>` at lines 457, 460, 463, 466, 469 — all missing `icon` |
| 5. Layout | 5.20 | Code icon+title | FAIL | All 14 fenced code blocks (74, 97, 104, 128, 134, 145, 166, 180, 267, 321, 342, 379, 410, 418) missing icon + title |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Raw `<Steps>` x3 at lines 95, 124, 408 — should be `<StyledSteps>` |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | Next Steps cards lack CustomCardTitle |
| 5. Layout | 5.23 | StyledTable | FAIL | Markdown tables at lines 67-72 ("Plugin Architecture") and line 154-162 (none — actually 154 is JSON manifest; checking: only table is line 67-72) — 1 markdown table not `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | MIXED | 3 Steps blocks + 1 table + 1 AccordionGroup — busy but justified by multi-phase scope |
| 5. Layout | 5.26 | CustomDivider | PASS | |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "12 default plugins" (line 116) — no source. "6-8 seconds" subsequent startup (line 57, 110) — no source. "ports 4001-4012" (line 89) — no source. "Vercel functions cold-start" (line 444) — no specific number |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No code block labelled TESTED |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | port range, plugin count, startup time all unsourced |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | PASS | `verified` |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | NaaP repo cloned without tag (line 98); SDK version not pinned |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | NaaP repo linked at footer; not at first mention (line 40) |
| 6. Veracity | 6.11-6.12 | glossary | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | line 2631 |
| 7. Nav | 7.2–7.5 | mirrors / orphans | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | |
| 7. Nav | 7.7–7.12 | lane / TTL | PASS | |
| 8. Links | 8.1 | Internal | PASS | tutorials cross-linked |
| 8. Links | 8.2 | External | NOT-TESTED | NaaP repo, NaaP docs links not fetched |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Build a NaaP Plugin" | PASS | |
| sidebarTitle | Yes | "NaaP Plugin" | PASS | |
| description | Yes | "Scaffold, develop, and publish..." | PASS | |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | unpinned repo + SDK |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | could be `quickstart` or omit |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (11×) | Required | placement OK |
| `<Tip>` (header CTA) | Yes (35) | Recommended | OK |
| `<Warning>` (active beta) | Yes (44) | Recommended | correct use — beta caveat |
| `<Steps>` / `<Step>` (raw) | Yes (3 blocks: 95, 124, 408) | — | FAIL 5.21 — should be StyledSteps |
| `<StyledSteps>` | No | Required | not imported |
| `<Tabs>` / `<Tab icon>` | No | — | not needed |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 + 5) | — | FAIL 5.19 — Accordions missing icons |
| `<StyledTable>` | No | Required | FAIL 5.23 — markdown table at 67 |
| Fenced code with icon+title | No | Required | FAIL 5.20 — 14 blocks missing |
| `<CardGroup cols={2}>` / `<Card>` | Yes (480) | — | FAIL 5.16+5.17 |
| `<CustomCardTitle>` | No | Required | FAIL |
| `<CenteredContainer>` | Yes (34) | — | OK |
| `<LinkArrow>` | Yes (30) | — | imported but not used in body |

## Cross-page duplication and link gaps

- **OVERLAP**: None significant with other tutorials. NaaP is a distinct platform; content is unique. The Eliza/chatbot/image-gen cluster doesn't overlap with this.
- **LINK GAPS**: NaaP repo (`https://github.com/livepeer/naap`) linked only in footer Card (line 484); should be at first mention (line 40). `@naap/plugin-sdk` (line 130) not linked to npm/repo. `operator.livepeer.org/docs/community/changelog` referenced (lines 46, 450) but not linked as anchor. `useShell()`, `useAuth()`, `useEventBus()` named but not linked to SDK hooks reference page.
- **STRANDED**: 4 Next Steps cards point to NaaP docs (good), NaaP repo (good), and 2 sibling tutorials. No graduation to Gateways/Solutions/About. Reader who wants to publish a plugin to the marketplace has the Plugin Publisher path documented but no "what runs on NaaP in production" overview link.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | "utilisation" used |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Self-reference | 2 | line 40 "By the end of this tutorial..."; line 42 "This is the Persona 2 and Persona 3 join" |
| Banned heading | 1 | line 478: "## Next Steps" |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| Plugin Architecture | 24 |
| Platform Bootstrap | 22 |
| Plugin Scaffold | 22 |
| Frontend Implementation | 22 |
| Backend Routes | 24 |
| Database Schema | 24 |
| Inter-Plugin Communication | 24 |
| Marketplace Publication | 24 |
| Production Considerations | 23 |
| Common Errors | 21 |
| Next Steps | 14 — banned/weak |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 74 | ts | ✗ | ✗ | — | ShellContext interface (illustrative) |
| 97 | bash | ✗ | ✗ | NOT-TESTED | git clone naap — unpinned |
| 104 | bash | ✗ | ✗ | NOT-TESTED | ./bin/start.sh |
| 128 | bash | ✗ | ✗ | NOT-TESTED | npm install -g @naap/plugin-sdk — unpinned |
| 134 | bash | ✗ | ✗ | NOT-TESTED | naap-plugin create |
| 145 | json | ✗ | ✗ | NOT-TESTED | plugin.json |
| 166 | bash | ✗ | ✗ | NOT-TESTED | naap-plugin dev |
| 180 | tsx | ✗ | ✗ | NOT-TESTED | src/index.tsx |
| 267 | ts | ✗ | ✗ | NOT-TESTED | src/api/orchestrators.ts |
| 321 | ts | ✗ | ✗ | NOT-TESTED | src/api/index.ts |
| 342 | sql | ✗ | ✗ | NOT-TESTED | migrations/001_init.sql |
| 379 | tsx | ✗ | ✗ | NOT-TESTED | eventBus example |
| 410 | bash | ✗ | ✗ | NOT-TESTED | naap-plugin validate |
| 418 | bash | ✗ | ✗ | NOT-TESTED | naap-plugin build --production |

All 14 blocks FAIL 5.20.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Tutorial promises a "plugin running locally inside the operator.livepeer.org shell" plus a "plugin.json manifest ready to publish to the marketplace". The local-running outcome is delivered (lines 95-172). The marketplace-publish outcome stops at "Approved plugins appear in the Plugin Marketplace plugin for any operator to install" (line 431) — no signal of the review SLA, no example of an approved plugin, no link to the marketplace catalogue. Reader is told to wait for review without a feedback loop.
- **Fix step:** Add a `<Note icon="circle-info">` block at the end of §"Marketplace Publication" (after line 432) stating: "Review SLA: typically X business days. Track status in the Plugin Publisher dashboard. See the [Plugin Marketplace](operator.livepeer.org/plugin-marketplace) for approved plugin examples." Verify the review SLA with the NaaP team; add `{/* REVIEW: review SLA */}` if unknown. Add one concrete approved-plugin example.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` §Step 7 "Confirm the loop is closed" — the close-the-loop pattern this tutorial should adopt for publication.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` x3 (5.21). All 14 code blocks missing icon+title (5.20). 5 Accordions missing icon (5.19). Markdown architecture table at line 67 (5.23). Next Steps CardGroup not Columns (5.16/5.17/5.22). No Verification H2. No `<Tabs>` for split (e.g. Frontend SDK vs Backend SDK) where the page could compress 200 lines.
- **Fix step:**
  1. Replace all 3 `<Steps>` blocks (lines 95, 124, 408) with `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`. Pattern: `ai-agent-on-livepeer.mdx` line 61.
  2. Add `icon` + `title` to every fenced code block (14 total). For TypeScript files use `icon="code"`, bash `icon="terminal"`, SQL `icon="database"`.
  3. Add `icon="circle-question"` to each `<Accordion>` (lines 457, 460, 463, 466, 469).
  4. Replace markdown table at lines 67-72 with `<StyledTable variant="bordered">` using `TableRow`/`TableCell`.
  5. Convert `<CardGroup cols={2}>` (line 480) to `<Columns cols={2}>`; rename §"Next Steps" → §"Related Pages"; add `<CustomCardTitle icon title horizontal>` to each Card.
  6. Add `## Verification` H2 between "Marketplace Publication" (line 404) and "Production Considerations" (line 436), listing observable signals: plugin loads at /[plugin-id] route, backend API responds, schema migration applied, eventBus publishes.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` for icon+title pattern; `ai-agent-on-livepeer.mdx` line 61 for StyledSteps.

### Layer 3 — Cross-page integration
- **Gap:** NaaP repo linked only at footer card. No first-mention links. No graduation to Gateways/Solutions/About. No link to Livepeer's orchestrator-operator persona pages (the natural cross-tab for this developer-tab content). The Plugin Marketplace plugin is referenced by name but not linked.
- **Fix step:** Add inline links: line 40 `[NaaP repo](https://github.com/livepeer/naap)` and `[operator.livepeer.org](https://operator.livepeer.org)`; line 130 `[@naap/plugin-sdk](https://www.npmjs.com/package/@naap/plugin-sdk)`. Add to Related Pages: `/v2/orchestrators/portal` ("NaaP is the operator portal") or `/v2/about/network/operators` for cross-tab coverage.
- **Source/exemplar:** Upstream URLs; `huggingface-to-livepeer.mdx` line 72 (source-named inline link pattern).

### Layer 4 — Veracity and source authority
- **Gap:** "12 default plugins" (line 116) — no source. "ports 4001-4012" (line 89) — no source. "6-8 seconds" subsequent start (line 57, 110) — no source. NaaP repo cloned without tag. SDK unpinned. No code TESTED.
- **Fix step:**
  1. Pin the NaaP clone: `git clone https://github.com/livepeer/naap.git && cd naap && git checkout v<tag>` (verify current release tag). Mark with `{/* REVIEW: pin tag */}` if unknown.
  2. Pin `@naap/plugin-sdk`: `npm install -g @naap/plugin-sdk@<version>`.
  3. Source the "12 default plugins" claim — link to `livepeer/naap/plugins/` directory listing.
  4. Source port range and startup-time figures — cite `naap/bin/start.sh` or NaaP README.
  5. Label every code block TESTED (date + env) or NOT-TESTED with reason.
- **Source/exemplar:** `livepeer/naap` repo README; `huggingface-to-livepeer.mdx` §Sources accordion (lines 571-593).

### Layer 5 — Product-forward depth
- **Gap:** No maturity signal beyond the Warning at line 44 ("active beta. Breaking changes ... may occur"). No statement of: who else has shipped a plugin (case study), expected plugin review feedback, what cannot be a plugin (boundaries of the platform), production cost model (hosting? bandwidth? compute via shared shell?). The "Persona 2 and Persona 3 join" framing (line 42) is internal-marketing copy.
- **Fix step:**
  1. Add §"What NaaP plugins are good for" (3-bullet `<Info>` block): orchestrator-side tooling, governance UI, operator dashboards. And §"What they aren't good for": end-user video playback, on-chain mutation, gateway routing.
  2. Replace Persona-join framing at line 42 with reader signal: "Plugins extend operator.livepeer.org without forking the host app. Use this path when your tool is operator-facing and uses Livepeer infrastructure data."
  3. Add cost-signal paragraph in Production Considerations: "Marketplace hosts the bundle; you own backend hosting cost if your plugin runs a custom service tier."
  4. Add one named approved-plugin reference if available, with a link.
- **Source/exemplar:** `.claude/references/layout/exemplars.md`; NaaP marketplace if it exposes a plugin catalogue.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Raw `<Steps>` x3 not StyledSteps (5.21).
2. All 14 code blocks missing icon + title (5.20). Largest violation of any A8 page.
3. 5 Accordions missing icon (5.19); markdown architecture table at line 67 not StyledTable (5.23).
4. Next Steps banned heading + CardGroup not Columns + plain Cards (3.2, 5.16, 5.17, 5.22).
5. NaaP repo unpinned + SDK unpinned; no source for "12 default plugins", port range, startup time (6.8, 6.1).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace `<Steps>` blocks at lines 95, 124, 408 with `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`; import from `/snippets/components/displays/steps/Steps.jsx` | 32, 95-118, 124-172, 408-432 | HIGH | L | check 5.21 |
| 2 | Add `icon` + `title` to every fenced code block (14 total): bash → `icon="terminal"`, ts/tsx → `icon="code"`, json → `icon="code"`, sql → `icon="database"` | 74, 97, 104, 128, 134, 145, 166, 180, 267, 321, 342, 379, 410, 418 | HIGH | L | check 5.20 |
| 3 | Add `icon="circle-question"` to each Accordion | 457, 460, 463, 466, 469 | HIGH | S | check 5.19 |
| 4 | Convert markdown table at lines 67-72 to `<StyledTable variant="bordered">` with `TableRow`/`TableCell` | 67-72 | HIGH | S | check 5.23 |
| 5 | Convert `<CardGroup>` (line 480) to `<Columns cols={2}>`; rename §"Next Steps" → §"Related Pages"; add `<CustomCardTitle icon title horizontal>` per Card | 478-493 | HIGH | M | check 5.16+5.17+5.22 |
| 6 | Add `## Verification` H2 between "Marketplace Publication" (404) and "Production Considerations" (436); list observable signals (plugin route, backend API, schema applied, eventBus) | new H2 | MEDIUM | M | tutorial matrix |
| 7 | Rename §"Required Tools" → §"Prerequisites" | 50 | MEDIUM | S | check 4.5+5.2 |
| 8 | Add ≥1 cross-tab card to Related Pages (`/v2/orchestrators/portal` or `/v2/about/network/operators`) | Related Pages | HIGH | S | check 4.10+7.6 |
| 9 | Remove legacy `status: current` | 25 | MEDIUM | S | check 5.7 |
| 10 | Pin NaaP clone (`git checkout v<tag>`) and `@naap/plugin-sdk` install | 98, 130 | HIGH | S | check 2.D3+6.8 |
| 11 | Add inline links at first mention: NaaP repo (line 40), `@naap/plugin-sdk` (line 130), `operator.livepeer.org` | 40, 130 | MEDIUM | S | check 6.10 |
| 12 | Source the "12 default plugins" / port range / 6-8s startup claims — link to `livepeer/naap/plugins/` and `naap/bin/start.sh` | 89, 116, 57 | MEDIUM | S | check 6.1+6.4 |
| 13 | Label every code block TESTED (date + env) or NOT-TESTED (reason) | 14 blocks | MEDIUM | L | check 6.2 |
| 14 | Replace "Persona 2 and Persona 3 join" framing (line 42) with reader-signal copy | 42 | MEDIUM | S | layer 5 |
| 15 | Add §"What NaaP plugins are good for / not good for" block before Production Considerations | before line 436 | INFO | M | layer 5 |
| 16 | Add `pageVariant: quickstart` (or omit if unsure) | frontmatter | INFO | S | check 1.3 |
