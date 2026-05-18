# Review: eliza-integration.mdx

**Page**: `v2/developers/build/ai-and-agents/agents/eliza-integration.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A4
**pageType (from frontmatter)**: `concept`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 4,369
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` valid |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `explain` or `integrate` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "The Livepeer model provider plugin..." subject-first, 146 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 OG fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "ai16z", "plugin-livepeer", "model provider" — specific |
| 2. Voice | 2.1 | UK English | PASS | "decentralised" line 7, 35 |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | "[Eliza](...) is an open-source multi-agent framework…" subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | Eliza, ai16z, plugin-livepeer, Agent SPE consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "[Eliza]…", "The plugin was built…", "The plugin implements…" |
| 2. Voice | 2.14 | No hedging in value | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "RAG" used line 102 without definition; "Ollama-compatible" line 71, 89 not defined; "IModelProvider" interface mentioned without link to source |
| 2. Voice | 2.D1 | Code-first opening | PASS | Concept page; "Minimal setup" appears early with JSON example |
| 2. Voice | 2.D2 | API/method has code | MIXED | `IModelProvider`, `generate()`, `provider.generate()` named — only `generate()` is shown in numbered list (lines 79–81) without code |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No Eliza version pinned (the framework version `plugin-livepeer` targets) |
| 2. Voice | 2.D4 | Errors in main content | FAIL | No error states. Cold-model 30–90s load is noted but no error reproduction, no timeout config, no retry guidance |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Minimal setup" (21), "Plugin architecture" (24), "Supported models" (22), "Extending the agent" (22) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Eliza integration" — 2 words |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Plugin reference + concept |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the developer integrate Eliza with Livepeer" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | No prereq breadcrumb back to `agents/overview`; closing paragraph links forward to tutorials |
| 4. Structure | 4.4 | No dead ends | MIXED | Page ends with in-prose paragraph linking two tutorials but NO Related Pages footer |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None as a Prerequisites section. Reader needs Eliza installed, character file, gateway URL — listed inline in code but not flagged |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Tutorials linked at end |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | FAIL | Eliza modelProvider config block (lines 43–58) duplicates `agents/overview.mdx` lines 49–66 (same JSON shape). LIVEPEER_GATEWAY_URL env-var setup duplicates `agents/overview.mdx` line 66 |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab |
| 4. Structure | 4.11 | Discord test | PASS | Reader knows how to set Livepeer as Eliza's modelProvider |
| 4. Structure | 4.12 | Page size | PASS | 4.4 KB — at low end of substantive |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Cold/warm model behaviour mentioned (line 89); no other trade-offs (privacy, latency, request cost, observability) |
| 4. Structure | 4.17 | Code blocks have language tag | MIXED | `json`, `bash` tagged on three blocks; one fenced block at line 60 has NO language (a `.env` snippet — should be `env` or `bash`) |
| 5. Layout | 5.1 | Correct template (concept) | MIXED | Concept structure OK; missing Related Pages footer |
| 5. Layout | 5.2 | Required sections | MIXED | Concept does not strictly require Prerequisites but the page IS partly procedural (setup + run) — Prerequisites should be stated |
| 5. Layout | 5.7 | No old-schema | FAIL | `status: current` legacy |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | `dream-gateway.livepeer.cloud` hardcoded (line 62) |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | NO Related Pages footer; only in-prose paragraph at line 110 |
| 5. Layout | 5.17 | Related Pages format | N/A | None present |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.20 | Code block icon + title | FAIL | All four fenced blocks missing `icon` and `title` |
| 5. Layout | 5.21 | StyledSteps | MIXED | Numbered list 1–3 at lines 79–81 inside "Plugin architecture" describes a sequence — should be `<StyledSteps>` per 5.21 (depends on whether that's procedural for the reader or descriptive of the plugin internals; closer to descriptive, so N/A is acceptable) |
| 5. Layout | 5.22 | Nav Card uses CustomCardTitle | N/A | |
| 5. Layout | 5.23 | StyledTable used | FAIL | Lines 91–96 use raw markdown table (`\| Model \| Warm \| VRAM \|`) — should be `<StyledTable>` per check 5.23 |
| 5. Layout | 5.24 | Max 1–2 tables | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider at line 33, divider before first H2 — but page is concept and starts with body prose without `<Tip>` divider gap (line 33–35: Tip ends, then `<CustomDivider />`, then prose) which is acceptable |
| 5. Layout | 5.27 | Mermaid | N/A | No diagram (could benefit from one for the 3-step plugin flow) |
| 5. Layout | 5.28 | Import ordering | PASS | CustomDivider (elements), CenteredContainer (wrappers) |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Minimal setup at top |
| 6. Veracity | 6.1 | Every claim citable | MIXED | "approved April 2025 with 30,000 LPT" — no link to governance proposal. "first production AI agent pipeline on Livepeer" — strong claim, no source |
| 6. Veracity | 6.2 | Code tested | NOT-TESTED | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "30,000 LPT", "8 GB", "10 GB" — specific but uncited; "30-90 seconds" cold-load — uncited |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.8 | Source staleness | FAIL | No Eliza version pin |
| 6. Veracity | 6.10 | Source authority | MIXED | Eliza repo linked once (line 35) |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2557 |
| 7. Navigation | 7.4 | No structural orphans | PASS | All linked targets exist |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation | FAIL | Zero |
| 8. Links | 8.1 | Internal links resolve | PASS | `tutorials/ai-agent-on-livepeer`, `tutorials/eliza-livepeer-plugin` exist |
| 8. Links | 8.2 | External links live | NOT-TESTED | `github.com/elizaos/eliza`, `dream-gateway.livepeer.cloud` |
| 10. Completeness | 10.6 | Code samples working language | MIXED | JSON + bash; no TypeScript provider implementation snippet despite §"Plugin architecture" describing the interface |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Eliza integration" | PASS | 2 words |
| sidebarTitle | Yes | "Eliza Integration" | INFO | Title-case mismatch with `title` (sentence-case) |
| description | Yes | "..." | PASS | |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose / complexity / lifecycleStage / veracityStatus | No | — | FAIL | Required |
| keywords | Yes | array | PASS | |
| og:image (and 4 sub-fields) | Yes | developers.png | PASS | |
| status | Yes | current | INFO | Legacy |
| lastVerified | Yes | 2026-05-15 | PASS | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | OK | |
| `<CenteredContainer>` | Yes (1×) | — | OK | |
| `<Tip>` | Yes (1×) | Recommended | OK | |
| `<Tabs>` / `<Tab icon>` | No | Recommended | — | "Minimal setup" has JSON + .env + bash — would render in Tabs |
| `<StyledSteps>` | No | N/A | — | |
| `<Card>` / `<Columns cols={2}>` | No | Required at footer | FAIL | No Related Pages |
| Fenced code with icon + title | NO | Required | FAIL | 4 blocks missing |
| `<StyledTable>` | No | Required | FAIL | Raw markdown table at lines 91–96 should be `<StyledTable>` |

## Cross-page duplication and link gaps

- **OVERLAP CRITICAL**: §"Minimal setup" JSON + env block (lines 43–66) duplicates `agents/overview.mdx` lines 49–66. Same configuration appears on two pages.
- **OVERLAP**: §"Plugin architecture" describes the IModelProvider flow that `agents/overview.mdx` also references at high level (line 49 — image generation provider context).
- **LINK GAPS**:
  - No Related Pages footer (`<Columns cols={2}>` block) — fails check 5.16
  - No upstream link to `plugin-livepeer` source code (only Eliza monorepo linked)
  - No link to PR #1525 / #2154 (referenced in sibling `agents/overview.mdx` but not here)
  - No link to Agent SPE governance proposal (claim "approved April 2025 with 30,000 LPT" is uncited)
  - No link to Ollama compatibility doc
  - No cross-tab graduation
- **STRANDED**: Page ends with one in-prose paragraph linking two tutorials. No structured navigation footer.

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
| Title/sidebarTitle case mismatch | 1 | Line 2 "Eliza integration" vs line 3 "Eliza Integration" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Minimal setup | 4 | 4 | 4 | 5 | 4 | 21 |
| Plugin architecture | 5 | 5 | 5 | 5 | 4 | 24 |
| Supported models | 4 | 4 | 5 | 5 | 4 | 22 |
| Extending the agent | 4 | 5 | 4 | 5 | 4 | 22 |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 43 | json | NO | NO | NOT-TESTED | FAIL 5.20 — needs `icon="code"`, `title="character.json"` |
| 60 | (none) | NO | NO | NOT-TESTED | FAIL 4.17 + 5.20 — missing language tag (should be `bash` or `env`), no icon/title |
| 67 | bash | NO | NO | NOT-TESTED | FAIL 5.20 |
| 91–96 (table) | — | — | — | — | Raw markdown table — should be `<StyledTable>` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome: "Run Eliza on Livepeer-routed inference." Page gives the config and a description but no end-to-end "5-minute first run" path. The minimal setup block (lines 43–69) shows three artefacts (character.json, .env, pnpm command) but doesn't anchor them to a directory layout or assume Eliza pre-installed. After running, no verification step ("expected first response shape"). No troubleshooting for the common failure ("LLM timeout / 503 from gateway").
- **Fix step:** Add a Prerequisites block ("Eliza installed: `npm i -g elizaos` or repo clone path; Node 18+; Livepeer API key (community gateway is keyless)"). Add §"Verify the integration" — three bullets: (1) start agent, (2) send first prompt via configured client, (3) expected log line confirming the request hit `LIVEPEER_GATEWAY_URL`. Add §"Common errors" with two `<Accordion>` blocks (timeout / cold model / 4xx).
- **Source/exemplar:** `_packet/component-matrix.md` instruction block (Prerequisites + Verification).

### Layer 2 — Composition
- **Gap:** Raw markdown table at lines 91–96 fails check 5.23. No Related Pages footer (check 5.16). No `<Tabs>` for the three setup artefacts (character.json / .env / pnpm). No `<AccordionGroup>` for "Extending the agent" content (lines 100–106) which lists three independent extensions.
- **Fix step:** Convert lines 91–96 to `<StyledTable variant="bordered">`. Add Related Pages `<Columns cols={2}>` with cards: Agents overview, Storyboard, LLM provider routing, AI pipelines, Eliza tutorial. Group Minimal setup as `<Tabs>` (`<Tab title="character.json" icon="code">`, `<Tab title=".env" icon="key">`, `<Tab title="pnpm" icon="terminal">`). Convert §"Extending the agent" to `<AccordionGroup>` with one `<Accordion icon=... title="Client connectors">`, `<Accordion icon=... title="Knowledge / RAG">`, `<Accordion icon=... title="Multi-agent">`.
- **Source/exemplar:** `_packet/component-matrix.md` concept block; check 5.23.

### Layer 3 — Cross-page integration
- **Gap:** No upstream link to the actual `plugin-livepeer` source files (the page describes the plugin's interface but doesn't show where it lives in the elizaOS repo). No PR links. No SPE proposal link. No cross-tab graduation. Two sibling pages (`agents/overview`, `agents/storyboard`) cover related Livepeer-side content without bidirectional linking.
- **Fix step:** Add inline link: `[plugin-livepeer source](https://github.com/elizaOS/eliza/tree/main/packages/plugin-livepeer)`. Cite PR #1525 and #2154 with URL links inline. Add SPE governance proposal link to the "30,000 LPT" claim. Add cross-tab cards: `/v2/gateways/setup/connect` (run your own Livepeer gateway), `/v2/solutions` (managed Livepeer integration).
- **Source/exemplar:** elizaOS monorepo source tree; livepeer governance forum.

### Layer 4 — Veracity and source authority
- **Gap:** "First production AI agent pipeline on Livepeer" is uncited and contested by `agents/overview.mdx` which calls VTuber the primary production use case. "Approved April 2025 with 30,000 LPT" uncited. Cold-model "30-90 seconds" uncited. Model VRAM figures (8 GB, 10 GB) — these match `aiModels.json` upstream, but no link. `veracityStatus` missing.
- **Fix step:** Replace "first production AI agent pipeline" with a verifiable claim or remove. Cite SPE proposal. Cite cold-load latency to a Livepeer telemetry note or `ai-runner` README. Cite VRAM figures to `livepeer/ai-runner/aiModels.json`. Add `veracityStatus: unverified` and `lastVerified: 2026-05-11`.
- **Source/exemplar:** `livepeer/ai-runner/aiModels.json`; SPE proposal at `forum.livepeer.org`.

### Layer 5 — Product-forward depth
- **Gap:** Page does not state production-readiness of the plugin: is it actively maintained? When was the last commit? Has it kept up with Eliza's breaking changes? It does not say what alternatives exist (Eliza supports OpenAI/Anthropic/Google natively — when would I choose Livepeer over those?). The "community gateway" routing implies a free tier, but no expectation is set: rate limits, throttling, model coverage.
- **Fix step:** Add `<Badge>Maintained — community gateway support</Badge>` near title. Add §"When to use Livepeer for Eliza inference" with three bullets: (1) cost-sensitive — decentralised GPU pricing; (2) decentralisation requirement; (3) Livepeer-stack alignment for downstream video work. Add §"What you get on the community gateway" line: model list, soft rate limits, where to upgrade.
- **Source/exemplar:** `_packet/5-whys-prompt.md` Layer 5 (maturity-badge + when-to-use pattern).

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 4 / INFO 2
**Critical findings (top 5)**:
1. NO Related Pages footer (HIGH, check 5.16)
2. Raw markdown table at lines 91–96 should be `<StyledTable>` (HIGH, check 5.23)
3. 4 required frontmatter fields missing (HIGH, check 1.1)
4. Code block at line 60 missing language tag (HIGH, check 4.17)
5. Heavy duplication with `agents/overview.mdx` Eliza section (HIGH, check 4.8)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add Related Pages footer with `<Columns cols={2}>` and four `<Card>` blocks using `<CustomCardTitle>` | EOF | HIGH | M | check 5.16, 5.17 |
| 2 | Convert markdown table (lines 91–96) to `<StyledTable variant="bordered">` with `<TableRow header>` / `<TableCell header>` | 91–96 | HIGH | S | check 5.23 |
| 3 | Add `purpose: explain`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter | 8–11 | HIGH | S | check 1.1 |
| 4 | Add language tag (`bash` or `env`) + icon + title to fenced block at line 60; add icon/title to JSON (line 43) and bash (line 67) blocks | 43, 60, 67 | HIGH | S | check 4.17, 5.20 |
| 5 | Trim Minimal Setup duplication: refactor to refer to `agents/overview.mdx` for the modelProvider value; keep only Eliza-specific config detail here | 43–69 | HIGH | M | check 4.8 |
| 6 | Add §"Prerequisites" and §"Verify the integration" sections | ~37 and ~69 | MEDIUM | M | Layer 1, check 4.5 |
| 7 | Replace strong/uncited claim "first production AI agent pipeline" with verifiable language or cite source | 37 | MEDIUM | S | check 6.1 |
| 8 | Add upstream `plugin-livepeer` source link + PR #1525 / #2154 URLs | 35, 37 | MEDIUM | S | check 6.10 |
| 9 | Normalise sidebarTitle case to match title | 3 | INFO | S | check 1.11 |
| 10 | Remove legacy `status: current` | 10 | INFO | S | check 5.7 |
