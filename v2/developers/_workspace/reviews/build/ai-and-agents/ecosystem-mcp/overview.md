# Review: overview.mdx (ecosystem-mcp)

**Page**: `v2/developers/build/ai-and-agents/ecosystem-mcp/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A4
**pageType (from frontmatter)**: `overview` (NON-CANONICAL)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 6,031
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 23) non-canonical |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `orient` or `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | MIXED | "How AI agents and coding tools access..." opens with "How"; not "this page" but not subject-first |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 OG fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "Model Context Protocol", "Cursor", "Windsurf" — specific |
| 2. Voice | 2.1 | UK English | PASS | "standardised" line 38; no US |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | "The Model Context Protocol (MCP) is…" subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | MCP, JSON-RPC, Mintlify consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.14 | No hedging in value | PASS | |
| 2. Voice | 2.15 | description not self-referential | MIXED | "this documentation corpus" appears on line 33 and 40 — references the docs site rather than the page itself; tolerable but on rubric watch |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | MCP, JSON-RPC, SSE defined on first use |
| 2. Voice | 2.D1 | Code-first opening | N/A | concept |
| 2. Voice | 2.D2 | API/method has code | PASS | Python MCP wrapper example included (lines 64–100) |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pin for `mcp` Python SDK, `@livepeer/ai`, `livepeer-ai`, or the OpenAPI YAML |
| 2. Voice | 2.D4 | Errors in main content | FAIL | No error states — what if `httpx.AsyncClient.post` returns 4xx? What if `data["images"][0]["url"]` is missing? |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Livepeer Docs MCP" (24), "Using Livepeer AI Pipelines as MCP Tools" (24), "LLMS.txt Reference" (22), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "MCP and Livepeer" — 3 words; "and" pattern is conjunction-led, borderline |
| 4. Structure | 4.1 | One purpose | PASS | Orientation for two MCP surfaces |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the developer understand the two MCP surfaces Livepeer exposes" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Links to `docs-mcp` page; introduces both surfaces |
| 4. Structure | 4.4 | No dead ends | PASS | CardGroup at line 116 |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. Reader needs an MCP-compatible client OR Python `mcp` SDK |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | docs-mcp linked for connection details; OpenAPI linked for full schema |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | MIXED | §"Livepeer Docs MCP" (lines 44–50) duplicates §1 of `docs-mcp.mdx` lines 37–40. Acceptable as overview teaser, but content is near-identical |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab |
| 4. Structure | 4.11 | Discord test | PASS | Reader gets both MCP surfaces explained |
| 4. Structure | 4.12 | Page size | PASS | 6 KB |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No discussion of: when to use docs MCP vs llms.txt vs wrapping the API; rate limits on the public MCP endpoint; auth model |
| 4. Structure | 4.17 | Code blocks have language tag | PASS | `python` tagged line 64 |
| 4. Structure | 4.20 | API/method has code or link | MIXED | OpenAPI YAML URL mentioned but as text; `@livepeer/ai` JS SDK and `livepeer-ai` Python SDK named without links |
| 4. Verify livepeer-data-mcp not mentioned | — | Special brief check | PASS | grep confirms zero references to `livepeer-data-mcp` on this page — matches brief ("intentionally dropped from IA, internal-only") |
| 5. Layout | 5.1 | Correct template | MIXED | concept structure; non-canonical pageType |
| 5. Layout | 5.7 | No old-schema | FAIL | `pageType: overview`, `status: current` |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | `https://docs.livepeer.org/mcp`, `dream-gateway.livepeer.cloud`, `https://docs.livepeer.org/api/ai-worker.yaml`, `https://docs.livepeer.org/llms.txt` — all hardcoded |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | BOTH present — line 114 has in-prose Next-Step + line 116 has Related Pages CardGroup; rubric requires one or the other |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; plain `title=` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.20 | Code block icon + title | FAIL | Line 64 Python block has no `icon` and no `title` |
| 5. Layout | 5.21 | StyledSteps | N/A | |
| 5. Layout | 5.22 | Nav Card uses CustomCardTitle | FAIL | |
| 5. Layout | 5.23 | StyledTable used | N/A | No tables |
| 5. Layout | 5.26 | CustomDivider placement | PASS | |
| 5. Layout | 5.27 | Mermaid | N/A (recommended for "two surfaces" architecture diagram) | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.31 | Decision-critical visible | MIXED | Two MCP surfaces are split across two H2s — could be a `<CardGroup>` decision matrix |
| 6. Veracity | 6.1 | Every claim citable | MIXED | "Livepeer has two relevant MCP surfaces" — third surface (`livepeer-data-mcp`) exists on disk; statement is true for public surface but implicit. "follows the emerging `llms.txt` convention" — uncited |
| 6. Veracity | 6.2 | Code tested | NOT-TESTED | Python wrapper unlabelled |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.10 | Source authority | MIXED | Mintlify named for the docs MCP; mcp SDK named without link; OpenAPI YAML URL given |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2563 |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | FAIL | Folder has 3 files (`overview`, `docs-mcp`, `livepeer-data-mcp`). `livepeer-data-mcp.mdx` is on disk but NOT registered — file-orphan (matches brief "intentionally dropped from IA, internal-only"). Either move it out of `v2/` or register a `<Warning>` banner stating it is internal |
| 7. Navigation | 7.4 | No structural orphans | FAIL | `livepeer-data-mcp.mdx` is file-orphan |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation | FAIL | |
| 8. Links | 8.1 | Internal links resolve | PASS | `docs-mcp`, `ai-pipelines`, `ai-sdks-overview`, `agents/overview` all exist |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 10. Completeness | 10.6 | Code samples working language | MIXED | Python wrapper example; no TypeScript wrapper despite `@livepeer/ai` JS SDK being the page's first SDK mention |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "MCP and Livepeer" | MIXED | Conjunction-led |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "How AI agents..." | MIXED | "How"-led |
| pageType | Yes | overview | FAIL | NON-CANONICAL |
| audience | Yes | developer | PASS | |
| purpose / complexity / lifecycleStage / veracityStatus | No | — | FAIL | |
| keywords | Yes | array | PASS | |
| og:image (and 4 sub-fields) | Yes | developers.png | PASS | |
| status | Yes | current | INFO | Legacy |
| lastVerified | Yes | 2026-05-13 | PASS | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | OK | |
| `<CenteredContainer>` | Yes (1×) | — | OK | |
| `<Tip>` | Yes (1×) | Recommended | OK | |
| `<Tabs>` / `<Tab icon>` | No | Recommended | — | Could group "Docs MCP" vs "Pipelines as MCP" decision view |
| `<StyledSteps>` | No | N/A | — | |
| `<Card>` / `<CardGroup cols={2}>` | Yes (1×) | Required (Related) | FAIL | Should be `<Columns cols={2}>` + `<CustomCardTitle>` |
| Fenced code with icon + title | NO | Required | FAIL | Python block at line 64 missing |
| `<StyledTable>` | No | — | — | Could compare two MCP surfaces |
| `<LinkArrow>` | Yes (1×) | — | OK | |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Livepeer Docs MCP" (lines 44–50) repeats core of `docs-mcp.mdx` lines 37–40. Acceptable as teaser but tighten.
- **LINK GAPS**:
  - No hyperlink for "mcp SDK" reference (line 62 — bare text, no URL to `modelcontextprotocol.io` or `github.com/modelcontextprotocol/python-sdk`)
  - No hyperlink for `llms.txt` "convention" (line 105 — could link to `llmstxt.org`)
  - `@livepeer/ai` JS SDK and `livepeer-ai` Python SDK named without links (line 58)
  - OpenAPI YAML mentioned but not hyperlinked in text body (line 60 — `https://docs.livepeer.org/api/ai-worker.yaml` is bare text)
  - No cross-tab graduation
- **STRANDED**: Reader wanting to actually wrap the API as an MCP tool gets a Python skeleton but no production patterns (auth, rate limit, batching, model selection).
- **livepeer-data-mcp**: page correctly does NOT mention it (verified by grep) — matches brief. But the file on disk is still orphan — recommend moving to `_workspace/` or adding internal-only banner.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | None |
| US spellings | 0 | |
| Banned words | 0 | |
| Banned phrases | 0 | |
| Question headings | 0 | |
| Studio refs | 0 | |
| Self-reference about page | 0 | (uses "this documentation corpus" referring to the corpus, not the page) |
| Deprecated terms | 0 | |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Livepeer Docs MCP | 5 | 5 | 5 | 5 | 4 | 24 |
| Using Livepeer AI Pipelines as MCP Tools | 5 | 5 | 5 | 5 | 4 | 24 |
| LLMS.txt Reference | 4 | 4 | 5 | 4 | 5 | 22 |
| Related Pages | exempt | | | | | — |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 64–100 | python | NO | NO | NOT-TESTED | FAIL 5.20 — needs `icon="python"`, `title="livepeer_ai_mcp_server.py"` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is to decide which MCP path fits their use case. Page has two H2s ("Livepeer Docs MCP", "Using Pipelines as MCP Tools") but no decision matrix. Reader scanning for "I want MCP for X" must read 6 KB. Also: the Python example shows a single tool wrapper; production agents need 9 pipelines wrapped, so the page implies more work than it shows.
- **Fix step:** Add §"Choose your MCP path" decision matrix immediately after the intro (line 41). 3-row `<StyledTable>`: column 1 "What you want", column 2 "Use", column 3 "Effort". Rows: (1) Give Cursor/Claude access to Livepeer docs → docs MCP → no code; (2) Give an agent access to Livepeer AI inference → wrap pipelines as MCP tools → write ~50 lines Python per tool; (3) Discover docs structurally → llms.txt → no code.
- **Source/exemplar:** `_packet/component-matrix.md` concept block — decision matrix pattern.

### Layer 2 — Composition
- **Gap:** No `<Tabs>` for the three MCP-via-Livepeer paths. Related Pages uses non-governance pattern. Both Next-Step paragraph and Related Pages CardGroup present (check 5.16 violation). Python example would render better wrapped in a fenced block with title/icon.
- **Fix step:** Convert Related Pages to `<Columns cols={2}>` + `<CustomCardTitle>`. Remove the in-prose Next-Step paragraph at line 114 (keep only the Related Pages block). Add icon/title to Python block.
- **Source/exemplar:** `_packet/component-matrix.md`; check 5.16.

### Layer 3 — Cross-page integration
- **Gap:** Bare-text references that should be links: `mcp SDK`, `llms.txt convention`, `@livepeer/ai`, `livepeer-ai`, OpenAPI YAML URL. No cross-tab graduation. No link to the source of `ai-worker.yaml` (which lives in `livepeer/ai-runner` or `livepeer/docs` repo). No link to Mintlify MCP feature page (the docs MCP at `docs.livepeer.org/mcp` is a Mintlify product, page does not say which version or when it was activated).
- **Fix step:** Hyperlink: `[mcp Python SDK](https://github.com/modelcontextprotocol/python-sdk)`, `[llms.txt convention](https://llmstxt.org)`, `[\`@livepeer/ai\`](https://www.npmjs.com/package/@livepeer/ai)`, `[\`livepeer-ai\`](https://pypi.org/project/livepeer-ai/)`, `[OpenAPI YAML](https://docs.livepeer.org/api/ai-worker.yaml)`. Add cross-tab cards: `/v2/solutions` (Daydream / managed inference), `/v2/gateways/setup/connect` (run a gateway behind the wrapped tool).
- **Source/exemplar:** SDK npm/pypi pages; modelcontextprotocol.io.

### Layer 4 — Veracity and source authority
- **Gap:** "Mintlify-provided MCP server" claim — no link to Mintlify's MCP docs explaining what version/capabilities they expose. "Following the emerging `llms.txt` convention" — uncited. Python example has no TESTED label. `veracityStatus` missing. The implicit "two MCP surfaces" framing hides a third — `livepeer-data-mcp` exists on disk; even if internal, it should be acknowledged or removed.
- **Fix step:** Cite Mintlify MCP feature docs. Cite llmstxt.org. Add TESTED comment + `veracityStatus: unverified`. Move `livepeer-data-mcp.mdx` from `v2/` to `_workspace/` or add an internal-only `<Warning>` banner to it.
- **Source/exemplar:** Mintlify docs `mintlify.com/docs`; llmstxt.org.

### Layer 5 — Product-forward depth
- **Gap:** Page reads like an explainer, not a builder's reference. Reader cannot evaluate (a) is the docs MCP rate-limited? (b) is it free-tier? (c) what is `docs.livepeer.org/mcp`'s uptime story? (d) how often is it refreshed when docs change? (e) is wrapping the pipelines as MCP a sanctioned pattern or a hobbyist DIY? (f) is there a Livepeer-provided AI MCP server (the answer is no today, but the page does not say that explicitly).
- **Fix step:** Add §"Status and limits" block after the intro: "Docs MCP is free, no key required, refreshed on docs deploy. There is no Livepeer-managed AI pipeline MCP server today — wrapping the API is the developer pattern." Add explicit roadmap statement if internal direction is to ship a managed AI MCP.
- **Source/exemplar:** `_packet/5-whys-prompt.md` Layer 5.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 2
**Critical findings (top 5)**:
1. `pageType: overview` non-canonical (HIGH, check 1.2)
2. 4 required frontmatter fields missing (HIGH, check 1.1)
3. Both Related Pages AND Next-Step paragraph present (HIGH, check 5.16)
4. Sibling file `livepeer-data-mcp.mdx` is file-orphan — must be moved or banner-marked internal (HIGH, check 7.4)
5. Code block missing `icon` + `title` (HIGH, check 5.20)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: overview` → `concept`; add `purpose: orient`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` | 22–28 | HIGH | S | check 1.2 + 1.4–1.8 |
| 2 | Move `livepeer-data-mcp.mdx` out of `v2/` to `_workspace/` (or add internal-only `<Warning>` banner) — file is an orphan in `v2/` per brief | folder move | HIGH | M | check 7.4, brief |
| 3 | Remove either Next-Step paragraph (line 114) OR Related Pages CardGroup (line 116) per check 5.16 | 112–153 | HIGH | S | check 5.16 |
| 4 | Convert Related Pages `<CardGroup cols={2}>` to `<Columns cols={2}>` with `<CustomCardTitle icon=... title=... horizontal />` | 116–153 | HIGH | M | check 5.17, 5.22 |
| 5 | Add `icon="python"` and `title="livepeer_ai_mcp_server.py"` to Python block; add TESTED comment | 64 | HIGH | S | check 5.20, 6.2 |
| 6 | Add §"Choose your MCP path" decision matrix (`<StyledTable>` with 3 rows) after intro | ~41 | HIGH | M | Layer 1 |
| 7 | Hyperlink bare-text references: `mcp SDK`, `llms.txt convention`, `@livepeer/ai`, `livepeer-ai`, OpenAPI YAML URL | 60, 62, 105 | MEDIUM | S | check 6.10, Layer 3 |
| 8 | Add §"Status and limits" block (free tier, rate limits, no Livepeer-managed AI MCP today) | ~41 | MEDIUM | M | Layer 5 |
| 9 | Add ≥3 cross-tab links to Related Pages | 116–153 | MEDIUM | S | check 7.6 |
| 10 | Verify and link Mintlify MCP feature docs as citation source | 38, 46 | MEDIUM | S | check 6.10 |
| 11 | Remove legacy `status: current` | 25 | INFO | S | check 5.7 |
| 12 | Tighten title to subject-led: "Livepeer MCP surfaces" or similar | 2 | INFO | S | check 3.6 |
