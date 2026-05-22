# Review: llm-provider-routing.mdx

**Page**: `v2/developers/build/ai-and-agents/agents/llm-provider-routing.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A4
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 5,139
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` valid |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `reference` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "@livepeer/agent supports four LLM backends…" subject-first, 127 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 OG fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "Gemini", "Claude", "OpenAI", "Daydream", `@livepeer/agent` — specific |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | "`@livepeer/agent` abstracts LLM access…" subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.14 | No hedging in value claims | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | `AgentRunner`, `ToolRegistry`, `WorkingMemoryStore`, `SessionMemoryStore`, `LivepeerProvider`, `GeminiProvider`, `ClaudeProvider` named inline; `SDK Service at sdk.daydream.monster` not explained on this page |
| 2. Voice | 2.D1 | Code-first opening | PASS | Code-adjacent voice (reference page) |
| 2. Voice | 2.D2 | API/method has code | PASS | TypeScript example (lines 85–109) shows constructor patterns; CLI block shows env-var usage |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No `@livepeer/agent` package version pinned (the package is not on npm per brief) |
| 2. Voice | 2.D4 | Errors in main content | FAIL | No error states named. "API key precedence" (line 133) is the only edge case. No retry/timeout/rate-limit behaviour, no error response shape |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2.Voice | 2.D7 | Note not for primary | N/A | |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Available providers" (22), "Swapping providers" (22), "CLI provider selection" (24) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "LLM provider routing" — 3 words |
| 4. Structure | 4.1 | One purpose | PASS | Reference for the four-provider abstraction |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the developer pick / swap an LLM provider" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Closing paragraph (line 139) links forward to `agent-sdk` (file-orphan); no prereq link back to `agents/overview` or `agents/storyboard` |
| 4. Structure | 4.4 | No dead ends | MIXED | Ends with single in-prose link to a file-orphan (`agent-sdk`); no Related Pages footer at all |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. Reader needs Node/TypeScript, env-var setup, the `@livepeer/agent` package — none stated |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Defers to `agent-sdk` page for runtime API but page is file-orphan |
| 4. Structure | 4.7 | Info type per section | PASS | Reference content |
| 4. Structure | 4.8 | No content duplication | FAIL | Same four-provider table appears in `storyboard.mdx` (lines 123–153) and in `agents/overview.mdx` (referenced in §Eliza Plugin) — 3-way duplication |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links |
| 4. Structure | 4.11 | Discord test | PASS | Page tells reader how to swap LLM providers in one read |
| 4. Structure | 4.12 | Page size | PASS | 5.1 KB |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No "Livepeer provider vs direct provider" comparison: cost, latency, observability, vendor lock-in trade-offs missing |
| 4. Structure | 4.17 | Code blocks have language tag | PASS | TypeScript (line 85), bash (lines 119, 124, 129) — all tagged |
| 5. Layout | 5.1 | Correct template (reference) | MIXED | Has body + ref table + code examples; missing Related Pages footer (check 5.16) |
| 5. Layout | 5.2 | Required sections (reference) | FAIL | Per check 5.2 / component-matrix.md, reference pages should have `<ParamField>` / `<ResponseField>` or `<StyledTable>` (present), AND a Related Pages footer (ABSENT) |
| 5. Layout | 5.7 | No old-schema | FAIL | `status: current` legacy |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | `sdk.daydream.monster`, `daydream.live` hardcoded — should reference data file |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Page has neither a `<CardGroup>` / `<Columns>` Related Pages section AT ALL nor a structured Next Step block — only a closing in-prose paragraph at line 139 |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs (could group the three swap variants in a Tabs block) |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon + title | FAIL | Lines 85, 119, 124, 129 — all four fenced blocks lack `icon` and `title` attributes |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav Card uses CustomCardTitle | N/A | No nav cards |
| 5. Layout | 5.23 | StyledTable used | PASS | Lines 42–77 |
| 5. Layout | 5.24 | Max 1–2 tables | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider at line 34 — but a SECOND divider at line 38 (before intro prose) — fails rubric ("NO divider between intro and first H2"). And the page has many H2 dividers — appropriate per rubric |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | StyledTable (displays), CustomDivider (elements), CenteredContainer (wrappers) — actually ordering is not strict |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Provider table is top-of-body |
| 5. Layout | 5.32 | Reference tables at end | FAIL | Per check 5.32, reference tables should be at END. This page leads with the provider table (line 42) — appropriate for the page's job. Borderline FAIL vs N/A — the page is provider-routing reference where the table IS the body. Mark as N/A in spirit |
| 6. Veracity | 6.1 | Every claim citable | MIXED | "AgentRunner calls `provider.complete()`" — uncited; "API key precedence" rule (line 133) — uncited |
| 6. Veracity | 6.2 | Code tested | NOT-TESTED | All four blocks unlabelled |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.10 | Source authority | PASS | Line 137 cites `livepeer/storyboard packages/agent/README.md` — explicit T1 source |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2556 |
| 7. Navigation | 7.4 | No structural orphans | FAIL | Closing in-prose link to `agent-sdk` (file-orphan) |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation | FAIL | Zero cross-tab |
| 8. Links | 8.1 | Internal links resolve | MIXED | `agent-sdk` exists on disk but not in nav |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 8. Links | 8.3 | Snippet imports resolve | PASS | StyledTable, CustomDivider, CenteredContainer — all imported |
| 10. Completeness | 10.6 | Code samples working language | PASS | TypeScript (the canonical language for an SDK reference) and bash; no Python (not required for a TS package) |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "LLM provider routing" | PASS | 3 words |
| sidebarTitle | Yes | "LLM Provider Routing" | INFO | Sentence-case vs Title-case mismatch with `title` |
| description | Yes | "..." | PASS | |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose / complexity / lifecycleStage / veracityStatus | No | — | FAIL | Required |
| keywords | Yes | array | PASS | |
| og:image (and 4 sub-fields) | Yes | developers.png | PASS | |
| status | Yes | current | INFO | Legacy |
| lastVerified | Yes | 2026-05-15 | PASS | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | OK but extra divider at line 38 between header CTA and intro fails 5.26 |
| `<CenteredContainer>` | Yes (1×) | — | OK | |
| `<Tip>` | Yes (1×) | Recommended | OK | |
| `<Tabs>` / `<Tab icon>` | No | Recommended (three provider variants in code) | — | Lines 85–109 are three swap variants — would render better in `<Tabs>` |
| `<StyledSteps>` | No | N/A | — | |
| `<Card>` / `<Columns cols={2}>` | No | Required at footer | FAIL | NO Related Pages footer at all |
| Fenced code with icon + title | NO | Required | FAIL | 4 of 4 blocks missing icon/title |
| `<StyledTable>` | Yes (1×) | Recommended | OK | |
| `<ParamField>` / `<ResponseField>` | No | Recommended (reference page) | — | API constructor args could be `<ParamField>` |

## Cross-page duplication and link gaps

- **OVERLAP CRITICAL**: Provider table here (lines 42–77) is identical in shape to `storyboard.mdx` lines 123–153. Same four rows: Gemini / Claude / OpenAI / Livepeer. Three sibling pages cover this fact-set.
- **LINK GAPS**:
  - No Related Pages footer at all (CARD GROUP MISSING)
  - Single closing in-prose link to `agent-sdk` (file-orphan)
  - No link to `daydream.live` from "Get one at `daydream.live`" — bare hostname in code voice (line 79)
  - No upstream link to `livepeer/storyboard packages/agent/providers/` directory (where each provider class lives) — line 137 only links to README, not source
  - No cross-tab graduation
- **STRANDED**: Reader who wants the runtime API past provider construction is sent to a file-orphan.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | None |
| US spellings | 0 | |
| Banned words | 0 | |
| Banned phrases | 0 | |
| Question headings | 0 | |
| Studio refs | 0 | |
| Self-reference | 0 | |
| Title vs sidebarTitle case mismatch | 1 | Line 2 "LLM provider routing" vs line 3 "LLM Provider Routing" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Available providers | 4 | 4 | 5 | 5 | 4 | 22 |
| Swapping providers | 4 | 4 | 5 | 5 | 4 | 22 |
| CLI provider selection | 5 | 5 | 5 | 5 | 4 | 24 |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 85 | typescript | NO | NO | NOT-TESTED | FAIL 5.20 |
| 119 | bash | NO | NO | NOT-TESTED | FAIL 5.20 |
| 124 | bash | NO | NO | NOT-TESTED | FAIL 5.20 |
| 129 | bash | NO | NO | NOT-TESTED | FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome: "Pick the right provider and swap easily." The page shows HOW to swap but not WHEN to pick which provider. There is no comparison of cost, latency, observability, vendor lock-in, or model coverage across the four providers. The Livepeer provider has a one-key convenience advantage but the trade-offs vs direct provider use are not stated.
- **Fix step:** Add §"When to use each provider" or extend the existing table with two columns: "Use when" and "Trade-off". e.g. Livepeer provider: Use when — one key for all models, you want to settle on Livepeer infrastructure. Trade-off — adds one network hop, observability via Daydream not native vendor dashboards.
- **Source/exemplar:** `_packet/5-whys-prompt.md` Layer 5 (trade-off block pattern).

### Layer 2 — Composition
- **Gap:** No Related Pages footer (`<Columns cols={2}>` block) — fails check 5.16 outright. Three swap variants in one TypeScript block (lines 85–109) would scan better as `<Tabs>` with one Tab per provider. No `<ParamField>` for constructor args. Extra `<CustomDivider />` at line 38 breaks 5.26 (no divider between intro and first H2).
- **Fix step:** Add `<Columns cols={2}>` Related Pages block at EOF with four cards: Agents overview, Storyboard, Eliza integration, AI pipelines. Wrap the TypeScript swap example in `<Tabs>` (`<Tab title="Gemini" icon="google">` / `<Tab title="Claude" icon="bolt">` / `<Tab title="Livepeer" icon="layer-group">`). Remove the extra divider at line 38. Add `<ParamField path="apiKey" type="string">` blocks for constructor args.
- **Source/exemplar:** `_packet/component-matrix.md` reference section; check 5.16, 5.18.

### Layer 3 — Cross-page integration
- **Gap:** No Related Pages footer; no cross-tab graduation; orphan link to `agent-sdk`. Page is the most reference-shaped of the four agent pages but ends without scaffolding the reader's next move.
- **Fix step:** Add Related Pages footer linking: `agents/overview`, `agents/storyboard`, `agents/eliza-integration`, `ai-pipelines`, `solutions/managed-inference` (cross-tab), `gateways/setup/connect` (cross-tab), `about/protocol` (cross-tab). Either register `agent-sdk` in nav or replace the in-prose orphan link with `<Badge>Coming soon</Badge>`.
- **Source/exemplar:** `livepeer/storyboard packages/agent/providers/`.

### Layer 4 — Veracity and source authority
- **Gap:** "API key precedence" rule (line 133) — no source. `provider.complete()` semantic — no source. No TESTED labels. Daydream gateway URL `sdk.daydream.monster` not explained or linked. `veracityStatus` missing.
- **Fix step:** Cite precedence rule to `packages/agent/cli/src/...`. Cite `provider.complete()` to the provider interface file. Add `<!-- TESTED 2026-05-11 against livepeer/storyboard@<sha> -->` per block. Add `veracityStatus: unverified`. Add link or one-line gloss for `sdk.daydream.monster`.
- **Source/exemplar:** `livepeer/storyboard` source tree.

### Layer 5 — Product-forward depth
- **Gap:** Page reads as if `@livepeer/agent` is a published npm package. Per brief, it is deferred / coming soon. Page does not flag this. A reader who runs `npm i @livepeer/agent` today gets an error. No mention of how to install/build from source today, no GitHub release link, no roadmap.
- **Fix step:** Add §"Install" or §"Status" block at top: "`@livepeer/agent` is published as part of the `livepeer/storyboard` monorepo. The standalone npm package is coming soon. Today: clone `livepeer/storyboard` and use `pnpm install` to build the package locally." Add `<Badge>Pre-release</Badge>` near title.
- **Source/exemplar:** brief — "agent-sdk and creative-kit as coming soon (deferred pending npm)".

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 4 / INFO 2
**Critical findings (top 5)**:
1. NO Related Pages footer block (HIGH, check 5.16)
2. 4 required frontmatter fields missing (HIGH, check 1.1)
3. All 4 fenced code blocks missing icon/title (HIGH, check 5.20)
4. Heavy duplication with `storyboard.mdx` provider table (HIGH, check 4.8)
5. Page treats `@livepeer/agent` as shipped while brief says deferred — install path absent (HIGH, Layer 5)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add Related Pages footer with `<Columns cols={2}>` + four `<Card>` blocks (using `<CustomCardTitle>`) | EOF | HIGH | M | check 5.16, 5.17 |
| 2 | Add `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter | 7–10 | HIGH | S | check 1.1 |
| 3 | Add `icon` + `title` attributes to all 4 fenced code blocks; add TESTED comment | 85, 119, 124, 129 | HIGH | S | check 5.20, 6.2 |
| 4 | Add §"Install" or §"Status" section noting `@livepeer/agent` is a pre-release in the storyboard monorepo (not yet on npm) | ~36 | HIGH | M | brief, Layer 5 |
| 5 | Remove the extra `<CustomDivider />` at line 38 (between header CTA and intro) | 38 | MEDIUM | S | check 5.26 |
| 6 | Add §"When to use each provider" or trade-off column in the table | 42–77 | MEDIUM | M | Layer 1 |
| 7 | Convert lines 85–109 to `<Tabs>` with one Tab per provider (Gemini, Claude, OpenAI, Livepeer) and `icon` props | 85–109 | MEDIUM | M | check 5.18, Layer 2 |
| 8 | Resolve `agent-sdk` link orphan (line 139) — either register in `docs.json` or replace with `<Badge>Coming soon</Badge>` | 139 + docs.json | MEDIUM | S | check 7.4 |
| 9 | Normalise sidebarTitle case ("LLM provider routing") to match `title` | 3 | INFO | S | check 1.11 |
| 10 | Remove legacy `status: current` | 9 | INFO | S | check 5.7 |
