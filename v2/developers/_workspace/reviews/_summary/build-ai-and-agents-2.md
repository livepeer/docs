# Section summary: build/ai-and-agents (Agent A4 — ai-stream-pack + agents + ecosystem-mcp)

**Pages in scope**: 13 (7 reviewed + 6 EMPTY-STUBS)
**Pages reviewed**: 7
**Review date**: 2026-05-11
**Reviewer**: agent A4

## Verdict distribution
- PASS: 0
- MINOR: 0
- MODERATE: 0
- MAJOR: 7
- NEEDS WORK: 0
- EMPTY-STUB: 6

## Per-page verdicts

| Page | Verdict | Severity (C/H/M/I) | Top critical finding |
|---|---|---|---|
| `ai-stream-pack/overview.mdx` | MAJOR | 0/8/5/2 | Section's product truth (5/6 node categories not yet shipped) buried in `<Note>`; pageType non-canonical |
| `agents/overview.mdx` | MAJOR | 0/8/5/2 | Two file-orphan links to `agent-sdk` (page exists but not in docs.json); heavy duplication with `eliza-integration.mdx` |
| `agents/storyboard.mdx` | MAJOR | 0/9/5/2 | `<CenteredContainer>` used but NOT imported — likely render failure; ASCII architecture diagram should be governed Mermaid |
| `agents/llm-provider-routing.mdx` | MAJOR | 0/7/4/2 | No Related Pages footer at all; page treats `@livepeer/agent` as shipped npm package while brief says deferred |
| `agents/eliza-integration.mdx` | MAJOR | 0/7/4/2 | No Related Pages footer; raw markdown table should be `<StyledTable>` |
| `ecosystem-mcp/overview.mdx` | MAJOR | 0/7/5/2 | Sibling `livepeer-data-mcp.mdx` is file-orphan in `v2/` — must be moved or banner-marked; both Next-Step and Related Pages present |
| `ecosystem-mcp/docs-mcp.mdx` | MAJOR | 0/9/4/2 | Instruction page uses NO `<StyledSteps>`; four client H2s should be `<Tabs>` per multi-view rule; `pageType: how_to` non-canonical |

## EMPTY-STUBS (6)

Each stub is ~600 bytes with frontmatter only and "This page is in progress." body.

| File | Target slot | Canonical source to populate from | One-line "what needs writing" |
|---|---|---|---|
| `ai-stream-pack/streamdiffusion.mdx` | AI Stream Pack — pipeline page | `livepeer/ComfyUI-Stream-Pack` (Foundation/Light nodes for StreamDiffusion); ComfyStream + StreamDiffusion repo `cumulo-autumn/StreamDiffusion` | Run StreamDiffusion v1 on Livepeer via the pack: model load, latent stream wiring, image-to-image params |
| `ai-stream-pack/streamdiffusion-v2.mdx` | AI Stream Pack — pipeline page | `livepeer/ComfyUI-Stream-Pack` + Daydream/dream-gateway notes; upstream StreamDiffusion v2 announcement | StreamDiffusion v2 differences (architecture, performance, breaking changes from v1); migration notes |
| `ai-stream-pack/superresolution.mdx` | AI Stream Pack — pipeline page | `livepeer/ComfyUI-Stream-Pack` super-resolution Foundation Node; upstream upscaler model card | Run super-resolution on Livepeer via the pack: scale factor, model selection, VRAM budget |
| `ai-stream-pack/audio-transcription.mdx` | AI Stream Pack — pipeline page | `livepeer/ComfyUI-Stream-Pack` LoadAudioTensor + transcription Foundation Node; whisper/parakeet model card | Wire `LoadAudioTensor` into a transcription pipeline; language config, latency budget, output schema |
| `ai-stream-pack/comfyui-rtc.mdx` | AI Stream Pack — pipeline page | `livepeer/ComfyUI-RTC` (separate repo if exists) or `livepeer/ComfyUI-Stream-Pack` browser bridge; ComfyStream WebRTC docs | Browser capture + playback via WebRTC node; signalling URL, ICE config, codec selection |
| `agents/eip-8004-identity.mdx` | Agents — reference page | EIP-8004 spec at `eips.ethereum.org/EIPS/eip-8004`; Livepeer agent identity proposal (if filed); on-chain identity registry contract | EIP-8004 identity in agent context: identity registry shape, agent attribution flow, on-chain verification of agent identity |

None of the six is registered in docs.json — confirmed via grep. Stubs are file-orphans on disk.

## Severity totals across pages reviewed

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 55 |
| MEDIUM | 32 |
| INFO | 14 |

## Top issues by frequency in this section

1. **Non-canonical `pageType` value** (5/7 pages) — `overview` used on ai-stream-pack/overview, agents/overview, storyboard, ecosystem-mcp/overview; `how_to` on docs-mcp. Canonical set is `concept|tutorial|guide|instruction|navigation|reference|resource`. Pages: all overviews + storyboard + docs-mcp.
2. **4 required frontmatter fields missing on every page** (7/7) — `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` absent. Pages: all 7.
3. **Code blocks missing `icon` + `title`** (7/7) — every fenced block on every page fails check 5.20. Pages: all 7.
4. **Related Pages format wrong** (6/7) — `<CardGroup cols={2}>` instead of `<Columns cols={2}>`; plain `title=` instead of `<CustomCardTitle>`. Pages: ai-stream-pack overview, agents/overview, storyboard, ecosystem-mcp/overview, docs-mcp. `llm-provider-routing` is missing the footer entirely.
5. **Zero cross-tab graduation links** (7/7) — no links to Gateways / Solutions / About from any page in this section. Pages: all 7.
6. **No `<StyledSteps>` for procedural content** (3/7) — ai-stream-pack/overview lines 105–108 (numbered markdown); docs-mcp lines 43–112 (four client setups); eliza-integration line 79–81 (descriptive numbered). Pages: ai-stream-pack/overview, docs-mcp, partial eliza-integration.
7. **Content duplication of LLM provider table** (3 pages) — same four-provider Gemini/Claude/OpenAI/Livepeer table appears in storyboard, llm-provider-routing, agents/overview.
8. **File-orphans in v2/** — `agents/agent-sdk.mdx` (7,245 B), `agents/creative-kit.mdx` (6,904 B), `ecosystem-mcp/livepeer-data-mcp.mdx` (3,084 B): full-content pages NOT in docs.json. Plus the 6 stub files all unregistered. Pages: agents/overview and storyboard link to `agent-sdk` (4 places total).
9. **Legacy `status: current` field on every page** (7/7) — superseded by `veracityStatus`.
10. **Both Next-Step in-prose paragraph AND Related Pages CardGroup present** (3/7) — agents/overview, ecosystem-mcp/overview, docs-mcp. Check 5.16 forbids both.
11. **Raw markdown table where `<StyledTable>` required** (1/7) — eliza-integration lines 91–96.
12. **Non-governed ASCII diagram where Mermaid required** (1/7) — storyboard lines 100–109 (fenced code, no language, three-layer architecture).
13. **Page identifies `@livepeer/agent` / `@livepeer/creative-kit` as available but brief says deferred** — storyboard, llm-provider-routing, agents/overview link to a non-published SDK with no "coming soon" marker.

## Cross-page duplication and link gaps

- **Provider table** duplicated in storyboard / llm-provider-routing / agents/overview (3 pages)
- **Eliza modelProvider config** duplicated in agents/overview / eliza-integration (2 pages)
- **Docs MCP teaser** duplicated in ecosystem-mcp/overview §"Livepeer Docs MCP" and docs-mcp.mdx body
- **agent-sdk file-orphan** linked from agents/overview (lines 169 + 176) and storyboard (lines 169 + 176)
- **livepeer-data-mcp file-orphan** sits in `v2/` but is not in nav and not mentioned in the section overview (correctly excluded per brief, but file should be moved out of `v2/` to `_workspace/` or banner-marked internal-only)

## Special-focus brief checks (results)

- **agents/overview.mdx should mention agent-sdk and creative-kit as "coming soon"**: FAIL. The page links to `agent-sdk` (in-prose at line 169 and Card at line 176) as a live page. It does NOT mark either as "coming soon" / "pending npm". creative-kit is not referenced from this page (but is the Layer-1 layer named in storyboard).
- **ecosystem-mcp/overview.mdx should NOT mention livepeer-data-mcp**: PASS. `grep -i "livepeer-data-mcp"` returns zero hits on the page. The orphan file is sibling on disk but the page omits it correctly.
- **Upstream repo links verified**:
  - Storyboard repo: `https://github.com/livepeer/storyboard` cited in `llm-provider-routing.mdx` line 137 (only sibling page) — VERIFIED format. Not on `storyboard.mdx` body — link missing on the primary Storyboard page (gap).
  - Eliza repo: `https://github.com/elizaos/eliza` cited in `eliza-integration.mdx` line 35 — VERIFIED format. (Note: ai16z renamed to elizaOS; ai16z reference on line 35 retained as historical org context.) Also referenced in `agents/overview.mdx` without inline link to the repo.
  - EIP-8004 spec: NOT linked anywhere. eip-8004-identity.mdx is a stub. Canonical source `https://eips.ethereum.org/EIPS/eip-8004`.
  - ComfyUI-Stream-Pack repo: referenced inline in `ai-stream-pack/overview.mdx` line 38 (`livepeer/ComfyUI-Stream-Pack`) and raw URL in clone command line 94. NOT formatted as a clickable link in body.

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)
**Strongest cross-page gap:** A developer arriving in `build/ai-and-agents` cannot determine which integration path to take. Each subsection (ai-stream-pack, agents, ecosystem-mcp) is presented as siblings under one nav group, but they answer three different questions: (1) ai-stream-pack — how to extend ComfyUI with real-time nodes (advanced infra audience); (2) agents — how to plug Livepeer inference into an agent framework (4 distinct paths inside); (3) ecosystem-mcp — how to expose Livepeer to MCP-compatible AI tools (devtool integration). The current pages do not orient the reader to the three different journeys. There is no top-of-section decision matrix anywhere in this scope.

**Fix:** The parent `ai-and-agents/overview` page (not in this batch but exists in nav) needs to scope the three child sections and route by intent. Each child overview should have a §"Choose your path" decision block: ai-stream-pack ("Which pipeline matches your workflow?"), agents ("Which integration path matches your runtime?"), ecosystem-mcp ("Which MCP surface matches your tool?").

### Layer 2 — Composition (section level)
**Missing patterns:**
- 0/7 pages use `<Tabs>` for multi-variant content (docs-mcp NEEDS Tabs for four clients; storyboard NEEDS Tabs for capability categories; llm-provider-routing NEEDS Tabs for provider swap; eliza-integration NEEDS Tabs for the three setup artefacts).
- 0/7 pages use `<AccordionGroup>` for trade-offs, FAQ, or "when not to use" content despite all benefiting from it (especially storyboard's 25+ slash commands and ecosystem-mcp's expected-behaviour matrix).
- 6/7 pages use `<CardGroup cols={2}>` instead of `<Columns cols={2}>` + `<CustomCardTitle>` for Related Pages. The seventh has no Related Pages at all.
- 1/7 uses governed Mermaid where appropriate; 1 (storyboard) uses ASCII art instead.
- 3/7 pages have procedural content where `<StyledSteps>` is required and is absent.

**Fix:** Section-wide remediation: (a) author one Tabs pattern, propagate to 4 pages; (b) introduce AccordionGroup on trade-off/limitation sections; (c) standardise Related Pages footer to `<Columns cols={2}>` + `<CustomCardTitle>`; (d) convert all procedural numbered markdown to `<StyledSteps>`.

### Layer 3 — Cross-page integration (section level)
**Inter-section navigation gaps:**
- No bidirectional linking between `agents/overview` ↔ `ai-pipelines` (the page agents/overview points at for endpoint shapes)
- No prereq breadcrumb anywhere — every page assumes the reader arrives correctly oriented
- `agent-sdk` referenced 4 times across 2 pages but not registered in docs.json — broken nav from `agents/overview` and `storyboard`
- `livepeer-data-mcp` in v2/ but excluded from nav — file should be moved out of `v2/`
- 7/7 pages lack cross-tab graduation (Gateways / Solutions / About)
- 0/7 link to Daydream as a managed alternative explicitly, despite repeated mention of Daydream URLs

**Fix:** (a) Resolve `agent-sdk` orphan and `livepeer-data-mcp` orphan at decision level — either register them or move them. (b) Every page in this section gets minimum 3 cross-tab links to Solutions (managed inference paths), Gateways (self-hosted gateway), and About (protocol or governance). (c) Every concept page gets a prereq Tip at top.

### Layer 4 — Veracity (section level)
**Repeated unverified claims:**
- "Agent SPE Phase 1/2 funded, 30,000 LPT" — claimed on agents/overview and eliza-integration; cited nowhere
- "First production AI agent pipeline on Livepeer" — claimed on eliza-integration; contested on agents/overview which calls VTuber the "primary production use case"
- "40+ AI capabilities, 25+ slash commands" — Storyboard quantities cited with no source
- LLM provider precedence rule, AgentRunner internals, plugin generate() flow — no source citations
- Cold model load times "30-90 seconds" — uncited
- Every code block on every page lacks a TESTED label
- 7/7 pages missing `veracityStatus` field; 7/7 have legacy `status: current`

**Fix:** Add `veracityStatus: unverified` and `lastVerified: 2026-05-11` to all 7 frontmatters. Resolve the "primary production use case" conflict between eliza-integration and agents/overview. Cite all SPE funding claims to governance proposals. Cite quantitative claims to source files. Add TESTED comments to all code blocks (or NOT-TESTED + justification).

### Layer 5 — Product-forward depth (section level)
**What's missing to feel like product, not wiki:**
- No maturity badges on any page (every page reads as if everything is GA, but `agent-sdk` and `creative-kit` are pre-release; Storyboard has package-publish pending; the docs MCP is keyless beta-grade)
- No "When not to use" sections anywhere — every page is one-sided advocacy
- No cost or rate-limit signals (community gateway, Daydream pricing, docs MCP rate limits)
- No production-readiness / SLO statements
- No "what could go wrong" sections (only docs-mcp has a Verification block, and only with one failure mode)
- No links to live status / Discord / forum where the reader could ask questions

**Fix:** Each page gets a `<Badge>` near the top (`<Badge>GA</Badge>` / `<Badge>Beta</Badge>` / `<Badge>Pre-release</Badge>` / `<Badge>Reference architecture</Badge>` / `<Badge>Community-supported</Badge>`). Each concept page adds a §"When not to use" or §"Trade-offs". Each page lists cost/rate-limit signals where relevant. Section gets a shared §"Get help" footer block (Discord, forum, GitHub issues for the relevant repo).

## Prioritised section remediation

| # | Step | Pages affected | Effort | Severity |
|---|---|---|---|---|
| 1 | Frontmatter sweep: convert all `pageType: overview` → `concept`, `pageType: how_to` → `instruction`. Add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` to all 7 frontmatters. Remove legacy `status: current` | 7 pages | M | HIGH |
| 2 | Resolve file-orphans: decide policy for `agents/agent-sdk.mdx`, `agents/creative-kit.mdx`, `ecosystem-mcp/livepeer-data-mcp.mdx`. Option A — register in docs.json with `<Badge>Pre-release</Badge>`. Option B — move to `_workspace/` and replace links with text markers ("Coming soon — package release pending"). User decision required. | 3 orphan files + 4 link sites | L | HIGH |
| 3 | Fix `<CenteredContainer>` import on `storyboard.mdx` line 30–32 — currently used but unimported (potential render failure) | storyboard.mdx | S | HIGH |
| 4 | Add `icon` + `title` to all fenced code blocks (~15 blocks across 7 pages) | 7 pages | M | HIGH |
| 5 | Convert all Related Pages from `<CardGroup cols={2}>` to `<Columns cols={2}>` with `<CustomCardTitle icon=... title=... horizontal />`. Add Related Pages block to `llm-provider-routing.mdx` and `eliza-integration.mdx` which lack it | 7 pages | M | HIGH |
| 6 | Convert procedural numbered lists to `<StyledSteps>` on ai-stream-pack/overview (lines 105–108), docs-mcp (each client setup), eliza-integration (lines 79–81 if procedural) | 3 pages | M | HIGH |
| 7 | Convert docs-mcp four client H2s into a single `<Tabs>` block with `icon` props | docs-mcp | M | HIGH |
| 8 | Convert ASCII architecture diagram in storyboard.mdx (lines 100–109) to governed Mermaid using `MermaidColours.jsx` | storyboard | M | HIGH |
| 9 | Convert raw markdown table in eliza-integration (lines 91–96) to `<StyledTable>` | eliza-integration | S | HIGH |
| 10 | Decide single source of truth for LLM provider table (probably `llm-provider-routing.mdx`) and trim duplication from storyboard and agents/overview | 3 pages | M | HIGH |
| 11 | Decide single source of truth for Eliza minimal-setup config (probably `eliza-integration.mdx`) and trim duplication from agents/overview | 2 pages | M | HIGH |
| 12 | Add ≥3 cross-tab graduation links to Related Pages on every page (Solutions, Gateways, About) | 7 pages | M | MEDIUM |
| 13 | Add maturity `<Badge>` near the top of every page; add §"When not to use" or trade-off block on the four concept/overview pages | 7 pages | L | MEDIUM |
| 14 | Cite SPE funding claims; resolve "primary production use case" conflict between eliza-integration and agents/overview | 2 pages | S | MEDIUM |
| 15 | Add TESTED / NOT-TESTED labels to every code block | 7 pages (~15 blocks) | M | MEDIUM |
| 16 | Fill 6 EMPTY-STUBS using canonical sources listed above (streamdiffusion, streamdiffusion-v2, superresolution, audio-transcription, comfyui-rtc, eip-8004-identity) | 6 files | XL | (separate work) |
| 17 | Decision-block per page: ai-stream-pack/overview "Status / when to use"; agents/overview "Choose your path" matrix; ecosystem-mcp/overview "Choose your MCP path"; docs-mcp "What to query" | 3 pages | M | MEDIUM |
