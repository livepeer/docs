# Review: docs-mcp.mdx

**Page**: `v2/developers/build/ai-and-agents/ecosystem-mcp/docs-mcp.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A4
**pageType (from frontmatter)**: `how_to` (NON-CANONICAL — should be `instruction` or `guide`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 4,343
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: how_to` (line 22) NOT in canonical set (`concept\|tutorial\|guide\|instruction\|navigation\|reference\|resource`). Should be `instruction` |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `integrate` or `configure` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `beginner` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `setup` or `build` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Connect Cursor, Claude Desktop, Windsurf..." subject-first |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 OG fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "Cursor", "Claude Desktop", "Windsurf", "Mintlify MCP" — specific |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | "The Livepeer documentation site exposes…" subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.14 | No hedging in value | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | MCP defined on overview; SSE expanded inline ("Server-Sent Events") line 39 |
| 2. Voice | 2.D1 | Code-first opening | MIXED | First H2 is "Cursor" then immediately a JSON config block — this is appropriate for an instruction page |
| 2. Voice | 2.D2 | API/method has code | PASS | All four client integrations show concrete config |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pin for Cursor, Claude Desktop, Windsurf, VS Code Copilot, or the Mintlify MCP itself |
| 2. Voice | 2.D4 | Errors in main content | MIXED | §"Verification" (lines 116–120) includes one failure mode ("If the tool answers from training data instead of documentation, check that the MCP server is listed as active…") — good. But no specific error string from any of the four clients when the URL fails or auth changes |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Cursor" (18 — single product name, no domain anchor), "Claude Desktop" (18), "Windsurf" (18), "VS Code Copilot" (19), "Verification" (avoid-tier — 19), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | MIXED | "Verification" is OK-tier. None banned |
| 3. Headings | 3.4 | Domain-anchor applied | FAIL | Single-product H2s ("Cursor", "Windsurf") fail domain-anchor — should be "Cursor MCP setup", "Windsurf MCP setup" or all wrapped under one H2 "Connecting MCP clients" with `<Tabs>` |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Docs MCP" — 3 words |
| 3. Headings | 3.8 | pageType naming style | MIXED | Instruction pages should use task-oriented H2s ("Connect Cursor", "Connect Windsurf") not bare product names |
| 4. Structure | 4.1 | One purpose | PASS | Connect any MCP client to the Livepeer docs MCP |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the developer connect [client] to the Livepeer docs MCP" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Sibling overview linked |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages at end |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No "Prerequisites" section. Reader needs: an MCP-compatible client installed (Cursor 0.x+, Claude Desktop, Windsurf with Cascade, VS Code with Copilot+MCP). Required version per client absent |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | |
| 4. Structure | 4.7 | Info type per section | PASS | Procedural |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab |
| 4. Structure | 4.11 | Discord test | PASS | Reader can connect their MCP client after reading |
| 4. Structure | 4.12 | Page size | PASS | 4.3 KB |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No mention of: rate limits, refresh cadence (how often the indexed corpus updates), auth model (truly keyless — what does that mean for usage limits?), data privacy (queries leave the dev machine for docs.livepeer.org) |
| 4. Structure | 4.17 | Code blocks have language tag | PASS | All `json` tagged |
| 4. Structure | 4.18 | Code-first opening on instruction | MIXED | Page IS an instruction page (`pageType: how_to`); opens with Tip + intro prose, then config blocks — appropriate |
| 5. Layout | 5.1 | Correct template (instruction) | FAIL | Per check 5.2 / component-matrix.md instruction block: required sections are Prerequisites, `<StyledSteps>`, Verification, Next Steps. Page has NO Prerequisites, NO StyledSteps (uses bare H2 + JSON), HAS Verification, has Related Pages instead of Next Steps |
| 5. Layout | 5.2 | Required sections present | FAIL | Missing Prerequisites + StyledSteps |
| 5. Layout | 5.7 | No old-schema | FAIL | `pageType: how_to`, `status: current` |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.14 | Multi-view rules | FAIL | Four client integrations are language/platform-variant content — should be `<Tabs>` with one Tab per client, not four sequential H2s |
| 5. Layout | 5.15 | Data imports | MIXED | `https://docs.livepeer.org/mcp` hardcoded six times — should be a single constant |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | BOTH present — line 124 in-prose Next-Step + line 128 Related Pages CardGroup |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; plain `title=` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs (should be — see 5.14) |
| 5. Layout | 5.20 | Code block icon + title | FAIL | All five fenced JSON blocks (lines 48, 71, 100) missing `icon` and `title` |
| 5. Layout | 5.21 | StyledSteps not raw Steps | FAIL | Page is procedural; uses H2 + numbered prose (e.g. "Open or create… Add… Restart Cursor.") — should be `<StyledSteps>` per check 5.21 |
| 5. Layout | 5.22 | Nav Card uses CustomCardTitle | FAIL | |
| 5. Layout | 5.23 | StyledTable used | N/A | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | |
| 6. Veracity | 6.1 | Every claim citable | MIXED | "endpoint uses SSE (Server-Sent Events) transport and requires no API key" (line 39) — uncited. "Once connected, ask the tool…" (line 117) — example questions not verified |
| 6. Veracity | 6.2 | Code tested | NOT-TESTED | No TESTED label on any block; reader expected to copy-paste blind |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.10 | Source authority | MIXED | Mintlify named, not linked. Cursor/Claude Desktop/Windsurf/VS Code MCP docs not linked |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2564 |
| 7. Navigation | 7.4 | No structural orphans | PASS | Links resolve |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation | FAIL | |
| 8. Links | 8.1 | Internal links resolve | PASS | `ecosystem-mcp/overview`, `ai-pipelines` exist |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | For each client, the reader can complete the connection |
| 10. Completeness | 10.6 | Code samples working language | PASS | JSON config + Settings UI; appropriate for instruction |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Livepeer Docs MCP" | PASS | 3 words |
| sidebarTitle | Yes | "Docs MCP" | PASS | |
| description | Yes | "Connect Cursor, Claude Desktop..." | PASS | |
| pageType | Yes | how_to | FAIL | NOT in canonical set → use `instruction` |
| audience | Yes | developer | PASS | |
| purpose / complexity / lifecycleStage / veracityStatus | No | — | FAIL | |
| keywords | Yes | array | PASS | |
| og:image (and 4 sub-fields) | Yes | developers.png | PASS | |
| status | Yes | current | INFO | Legacy |
| lastVerified | Yes | 2026-05-13 | PASS | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | OK | |
| `<CenteredContainer>` | Yes (1×) | — | OK | |
| `<Tip>` | Yes (1×) | Recommended | OK | |
| `<Tabs>` / `<Tab icon>` | NO | Required for the four client variants | FAIL | Single H2 + `<Tabs>` with `<Tab title="Cursor" icon="code">`, `<Tab title="Claude Desktop" icon="anthropic">`, `<Tab title="Windsurf" icon="wind">`, `<Tab title="VS Code Copilot" icon="github">` is the correct shape |
| `<StyledSteps>` / `<StyledStep>` | NO | Required for procedural | FAIL | Each client's setup is a 3–4 step procedure, should be StyledSteps |
| `<Card>` / `<CardGroup cols={2}>` | Yes (1×) | Required (Related) | FAIL | Should be `<Columns cols={2}>` + `<CustomCardTitle>` |
| Fenced code with icon + title | NO | Required where code | FAIL | 3+ JSON blocks missing |
| `<Check>` / `<Warning>` | NO | Recommended (instruction) | — | Verification block could use `<Check>` |

## Cross-page duplication and link gaps

- **OVERLAP**: minimal — page is purpose-built for connection instructions
- **LINK GAPS**:
  - No upstream link to Cursor's MCP docs (cursor.com/docs/mcp or similar)
  - No upstream link to Claude Desktop's MCP docs
  - No upstream link to Windsurf MCP docs
  - No upstream link to VS Code Copilot MCP docs
  - No link to Mintlify's MCP feature page (the docs MCP is Mintlify-provided per overview page)
  - No link to MCP protocol spec at `modelcontextprotocol.io`
  - No cross-tab graduation
- **STRANDED**: After connecting, reader has no concrete usage path. Verification block tells them what to type but doesn't anchor it to the actual `text-to-image` workflow or any other Livepeer-specific surface they would query.

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

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Cursor | 3 | 3 | 4 | 4 | 4 | 18 (no domain anchor) |
| Claude Desktop | 3 | 3 | 4 | 4 | 4 | 18 |
| Windsurf | 3 | 3 | 4 | 4 | 4 | 18 |
| VS Code Copilot | 3 | 3 | 4 | 4 | 4 | 17 |
| Verification | 4 | 4 | 4 | 4 | 5 | 21 |
| Related Pages | exempt | | | | | — |

Four product-name H2s fail Precision + Depth — they need domain anchoring or should be Tabs.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 48 | json | NO | NO | NOT-TESTED | FAIL 5.20 — needs `icon="code"`, `title=".cursor/mcp.json"` |
| 71 | json | NO | NO | NOT-TESTED | FAIL 5.20 — `title="claude_desktop_config.json"` |
| 100 | json | NO | NO | NOT-TESTED | FAIL 5.20 — `title="settings.json"` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is to connect their MCP client to Livepeer docs MCP. Page mostly delivers this but with four redundant H2s. The reader who uses two clients (e.g. Cursor + Claude Desktop) has to scroll past two unrelated setups. There is no "first test query" anchored in Livepeer-specific reality — Verification block's example questions ("What pipelines does the Livepeer AI network support?") test surface, not depth.
- **Fix step:** Consolidate four client H2s into one `<Tabs>` block with one Tab per client. After Verification, add §"What to query" — three example prompts that exercise the docs MCP: (1) "Show the request schema for `text-to-image`" (verifies API page is indexed); (2) "What is BYOC?" (verifies concept-page indexing); (3) "Which Livepeer models support image-to-video?" (verifies cross-doc retrieval).
- **Source/exemplar:** `_packet/component-matrix.md` instruction block; check 5.14 (multi-view rule — Tabs for platform variants).

### Layer 2 — Composition
- **Gap:** Page is procedural but uses no `<StyledSteps>` (check 5.21 FAIL). Multi-client content should be `<Tabs>` per check 5.14. Related Pages uses non-governance pattern. Both Next-Step paragraph and Related Pages CardGroup present (check 5.16). No `<Check>` for verification success markers.
- **Fix step:** Replace four H2s with one §"Connect an MCP client" H2 wrapping `<Tabs>`. Inside each Tab, use `<StyledSteps>` with 3 steps (open config / paste JSON / restart). Add `<Check>` markers around expected outcomes. Convert Related Pages to `<Columns cols={2}>` + `<CustomCardTitle>`. Remove the in-prose Next-Step at line 124 OR the Related Pages — keep one.
- **Source/exemplar:** `_packet/component-matrix.md` instruction block; check 5.14, 5.18, 5.21.

### Layer 3 — Cross-page integration
- **Gap:** No upstream documentation links for the four clients (Cursor / Claude Desktop / Windsurf / VS Code Copilot MCP docs). No protocol spec link to `modelcontextprotocol.io`. No link to Mintlify's MCP feature page. No cross-tab graduation. No prereq link to the ecosystem-mcp overview (the reverse link is present from overview to this page, but not bidirectional).
- **Fix step:** Each Tab gets an upstream link beneath the steps: "Cursor MCP docs: <cursor URL>". Add a top-of-page Tip: "Background: [MCP and Livepeer overview](./overview)". Add Related Pages cross-tab card: `/v2/solutions` (managed inference) or `/v2/developers/build/ai-and-agents/ai-pipelines` (the surface the MCP queries).
- **Source/exemplar:** modelcontextprotocol.io; vendor MCP docs.

### Layer 4 — Veracity and source authority
- **Gap:** "Endpoint uses SSE transport and requires no API key" (line 39) — uncited. No TESTED labels on three config blocks. No verification timestamp on docs.livepeer.org/mcp uptime. `veracityStatus` missing. Sample prompts in §Verification are unverified.
- **Fix step:** Cite Mintlify's MCP docs for SSE transport and keyless access. Add TESTED comment to each config block ("`Tested 2026-05-11 with Cursor 0.42, Claude Desktop 0.7, Windsurf 1.0, VS Code Copilot vX`"). Run the sample prompts and capture expected output snippets. Add `veracityStatus: unverified` and `lastVerified: 2026-05-11`.
- **Source/exemplar:** Mintlify MCP docs; live test against each client.

### Layer 5 — Product-forward depth
- **Gap:** Page does not state: how often the indexed docs corpus refreshes, rate limits, data privacy (queries leave the developer machine), or what the developer's queries look like server-side. Reader cannot decide "is this safe for sensitive client work?" or "will this work offline?" or "what happens when docs change?". Verification block reassures the connection works but does not signal long-term reliability.
- **Fix step:** Add §"What to expect" before Verification: (1) refresh cadence (on docs deploy), (2) rate limits (none stated; tracked at the Mintlify provider level), (3) privacy posture (queries are processed by the docs MCP server on docs.livepeer.org), (4) offline behaviour (none — the connection requires network access to docs.livepeer.org/mcp).
- **Source/exemplar:** `_packet/5-whys-prompt.md` Layer 5 (production-readiness pattern).

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 4 / INFO 2
**Critical findings (top 5)**:
1. `pageType: how_to` non-canonical → must be `instruction` (HIGH, check 1.2)
2. Page is an instruction page but uses NO `<StyledSteps>` (HIGH, check 5.21)
3. Four client H2s should be `<Tabs>` per multi-view rule (HIGH, check 5.14)
4. Three required instruction sections missing: Prerequisites, StyledSteps, Next Steps (HIGH, check 5.2)
5. All code blocks missing `icon` + `title` (HIGH, check 5.20)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: how_to` → `instruction`; add `purpose: integrate`, `complexity: beginner`, `lifecycleStage: setup`, `veracityStatus: unverified` | 22–25 | HIGH | S | check 1.1 + 1.2 |
| 2 | Replace four client H2s with one §"Connect an MCP client" H2 containing `<Tabs>` (one Tab per client with `icon` prop) | 43–112 | HIGH | M | check 5.14, 5.18 |
| 3 | Inside each Tab, wrap the 3-step procedure in `<StyledSteps>` with `<StyledStep iconColor titleColor title=...>` blocks | 43–112 | HIGH | M | check 5.21 |
| 4 | Add §"Prerequisites" section before client setup (MCP-compatible client installed; minimum version per client) | ~41 | HIGH | M | check 4.5, 5.2 |
| 5 | Add `icon="code"` + appropriate `title` to all JSON config blocks; add TESTED comments | 48, 71, 100 | HIGH | S | check 5.20, 6.2 |
| 6 | Convert Related Pages `<CardGroup cols={2}>` to `<Columns cols={2}>` with `<CustomCardTitle>` | 128–148 | HIGH | M | check 5.17, 5.22 |
| 7 | Remove either Next-Step paragraph at line 124 OR Related Pages CardGroup at line 128 | 124–148 | HIGH | S | check 5.16 |
| 8 | Add §"Next Steps" with explicit handoff to a usage page (e.g. example MCP queries against Livepeer docs) | end | HIGH | M | check 5.2 (Next Steps required for instruction) |
| 9 | Add upstream client MCP docs links beneath each Tab (Cursor, Claude Desktop, Windsurf, VS Code Copilot) | 43–112 | MEDIUM | S | check 6.10 |
| 10 | Add §"What to expect" block (refresh cadence, rate limits, privacy posture, offline behaviour) before Verification | ~114 | MEDIUM | M | Layer 5 |
| 11 | Add example queries section after Verification with three Livepeer-specific prompts | ~120 | MEDIUM | M | Layer 1 |
| 12 | Add cross-tab links to Related Pages | 128–148 | MEDIUM | S | check 7.6 |
| 13 | Remove legacy `status: current` | 24 | INFO | S | check 5.7 |
