# Review: ai-agent-on-livepeer.mdx

**Page**: `v2/developers/build/tutorials/ai-agent-on-livepeer.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A8
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 7,927
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | `veracityStatus` missing |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | not present in frontmatter |
| 1. Frontmatter | 1.9 | industry | N/A | not present |
| 1. Frontmatter | 1.10 | niche | N/A | not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build an AI agent using the Eliza framework with Livepeer as the model provider for decentralised GPU inference. Complete tutorial with working code." subject-led, 157 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | all 5 fields present |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (ai16z, Eliza, decentralised AI, LLM inference) |
| 1. Frontmatter | 1.14 | audience match | PASS | developer register honoured |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "centralised", "decentralisation" used; no US hits |
| 2. Voice | 2.2 | Banned words | PASS | none |
| 2. Voice | 2.3 | Banned phrases | FAIL | line 35: `<Tip>This tutorial walks through building...</Tip>` — banned phrase "This tutorial walks through" |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | line 44 starts with subject: "[Eliza]..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer-coded |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | Eliza, ai16z preserved |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | PASS | mostly system-led |
| 2. Voice | 2.14 | Hedging verbs in value | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | PASS | |
| 2. Voice | 2.17–2.22 | universal terms / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | FAIL | First fenced code at line 64 — opening Tip (35), citation Note (40-42), then 75 words of intro before the clone command. Tutorial activation moment should be the clone command above the fold. |
| 2. Voice | 2.D2 | API methods linked | PASS | Eliza repo linked at line 44 |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Node.js 22 stated; `pnpm install -g pnpm` unpinned; `git checkout main` (line 67) is a moving target — should be a release tag |
| 2. Voice | 2.D4 | Errors in main | FAIL | No Common Errors / Troubleshooting section. Cold-start mentioned (line 145) but no remediation for failures |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | FAIL | line 40-42 uses `<Note>` for the attribution/source — should be a footer reference or `<Info>`, not body Note |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Prerequisites" (24), "Build your agent" (22), "Extending the agent" (20 — borderline), "Supported LLM models" (23). All pass. |
| 3. Headings | 3.2 | Banned/weak | PASS | |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5–3.10 | per-pageType / register | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Build an AI agent on Livepeer" |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | "This page lets the developer build an Eliza agent on Livepeer" — clear |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | no prev/next link explicit; relies on docs.json adjacency only |
| 4. Structure | 4.4 | No dead ends | FAIL | Page ends with one paragraph linking to Eliza plugin tutorial (line 195) — no Related Pages section, no CardGroup |
| 4. Structure | 4.5 | Prerequisites stated | PASS | line 50 §Prerequisites — explicit Node.js 22, pnpm, API-key policy |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | extending section delegates to model-support |
| 4. Structure | 4.7 | Info type | PASS | procedural — StyledSteps used |
| 4. Structure | 4.8 | No duplication | MIXED | overlaps with `eliza-livepeer-plugin.mdx` §Model Provider Layer (lines 62-145) — same clone + env + character + run sequence. This page is the simpler variant of the Eliza plugin tutorial; should explicitly state when to choose which |
| 4. Structure | 4.9 | Orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | zero cross-tab graduation links (no Gateways, no Solutions, no About) |
| 4. Structure | 4.11 | Discord test | MIXED | a curious reader could complete it, but Verification step (5) is the only success signal — no instructions for what to do if the curl fails |
| 4. Structure | 4.12 | Page size | PASS | 7.9 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | StyledSteps for procedural content; one table for model list |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Cold-start time mentioned (line 145, 184); no production vs dev boundary beyond "API key for production" |
| 4. Structure | 4.16 | Context block | N/A | |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | all 6 fenced blocks have `bash` or `json` |
| 4. Structure | 4.18 | Code-first opening | FAIL | see 2.D1 |
| 4. Structure | 4.19 | Errors in main | FAIL | see 2.D4 |
| 4. Structure | 4.20 | API methods linked | PASS | |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold partial; missing Verification section as named section (Step 5 conflates test + verification); missing Related Pages footer |
| 5. Layout | 5.2 | Required sections | FAIL | Tutorial matrix requires: Prerequisites (present), Steps (present), Verification (Step 5 doubles as verify but no dedicated section), Related (ABSENT) |
| 5. Layout | 5.3 | Approved components | PASS | StyledSteps, CenteredContainer, Tip |
| 5. Layout | 5.4 | Avoided absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | One markdown table (line 186-191) for Supported LLM models — should be `<StyledTable>` per 5.23 |
| 5. Layout | 5.6 | MDX renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 25 `status: current` — legacy field |
| 5. Layout | 5.8 | CSS custom props | PASS | uses `var(--lp-color-accent)` and `var(--accent)` in StyledSteps |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | partial — header CTA + opening divider + StyledSteps present; Related Pages footer + Verification section missing |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | PASS | no multi-variant content here |
| 5. Layout | 5.15 | Data imports | PASS | not directly applicable (no contract addresses); model list could be hoisted to shared snippet shared with `model-support.mdx` |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | NEITHER present at footer. Line 195 has one inline pointer; no formal CardGroup or Columns block |
| 5. Layout | 5.17 | Related Pages format | FAIL | absent |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | N/A | no Accordions |
| 5. Layout | 5.20 | Code icon+title | FAIL | All 6 fenced blocks missing icon + title (lines 64, 76, 93, 132, 151, 159). Compare huggingface-to-livepeer.mdx where every block has `icon="terminal" title="..."` |
| 5. Layout | 5.21 | StyledSteps used | PASS | StyledSteps with `iconColor` + `titleColor` (line 61) — correct per 5.21 |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | N/A | no nav cards present |
| 5. Layout | 5.23 | StyledTable | FAIL | line 186-191 raw markdown table for model support — should be `<StyledTable variant="bordered">` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | 1 StyledSteps + 1 table |
| 5. Layout | 5.26 | CustomDivider | PASS | opening divider line 38, dividers between H2s — placement correct |
| 5. Layout | 5.27 | Mermaid | N/A | no diagrams |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Mirror.xyz Agent SPE guide" linked (line 41); the cold-start range "30-90 seconds" (line 145) and "30 seconds to 5 minutes" (line 184) come from where? Need source. SwarmZero example URL provided (line 178) |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No code block carries TESTED/NOT-TESTED label |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | model VRAM table (8/8/10/8 GB) unsourced |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | absent (1.8) |
| 6. Veracity | 6.7 | Glossary correct | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `git checkout main` (line 67) is a moving target. No SDK version pinned; `@livepeer/ai` not version-pinned. Eliza repo pinned to `main` (moving target) |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | Mirror.xyz is T3 (Web2 link). Should link to Eliza tag/release rather than `main` |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | line 2628 |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | (cross-ref 4.10) |
| 7. Nav | 7.7–7.12 | lane / naming / TTL | PASS | |
| 8. Links | 8.1 | Internal | PASS | only one internal link (line 195) and one to model-support (line 172) — both resolve |
| 8. Links | 8.2 | External | NOT-TESTED | Mirror.xyz, GitHub, SwarmZero docs not fetched in this review |
| 8. Links | 8.3 | Snippet imports | PASS | all 4 imports resolve |
| 8. Links | 8.4 | Images | N/A | no images |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1 | tab job coverage | PASS | |
| 10. Completeness | 10.2 | zero-to-hero | MIXED | this is the entry to AI-agent path; lack of Related Pages weakens hand-off |
| 10. Completeness | 10.3 | persona paths | PASS | |
| 10. Completeness | 10.4 | scope explicit | PASS | |
| 10. Completeness | 10.5 | self-containment | MIXED | community gateway dependency, no fallback explained if dream-gateway.livepeer.cloud is down |
| 10. Completeness | 10.6 | working language path | PASS | bash + json |
| 10. Completeness | 10.7 | persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Build an AI agent on Livepeer" | PASS | |
| sidebarTitle | Yes | "AI agent on Livepeer" | PASS | |
| description | Yes | "Build an AI agent using the Eliza framework..." | PASS | subject-led, 157 chars |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Missing — should be `unverified` at minimum |
| lastVerified | Yes | 2026-05-14 | PASS | |
| status | Yes | current | FAIL | legacy field — remove |
| pageVariant | No | — | INFO | `quickstart` would suit (this is a 30-minute activation moment) |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | placement correct |
| `<Tip>` (header CTA) | Yes (line 35) | Recommended | OK |
| `<Note>` (attribution) | Yes (line 40) | — | 5.D7 — Note used for primary attribution context, should be moved or use `<Info>` |
| `<StyledSteps>` / `<StyledStep icon>` | Yes (line 61) | Required | correct usage with `iconColor` + `titleColor` |
| `<Tabs>` / `<Tab icon>` | No | Recommended | not needed (single happy path) |
| `<AccordionGroup>` / `<Accordion icon>` | No | Recommended for Common Errors | MISSING — no errors / troubleshooting section |
| `<StyledTable>` | No | Required where tables present | FAIL — markdown table at line 186 |
| Fenced code with icon+title | No | Required | FAIL — 6 code blocks missing |
| `<Columns cols={2}>` Related Pages | No | Required | FAIL — entire footer missing |
| `<CustomCardTitle>` | No | Required if Related Pages | FAIL — no nav cards at all |
| `<CenteredContainer>` | Yes (line 34) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Build your agent" (lines 59-166) duplicates the §"Model Provider Layer" of `eliza-livepeer-plugin.mdx` (lines 62-145) almost step-for-step (clone → env → character → run → curl test). The Eliza tutorial extends with layers 2-5 (character depth, RAG, clients, swarms). This page is the entry; the relationship should be explicit and shared steps factored to a snippet.
- **OVERLAP**: §"Supported LLM models" (lines 186-191) restates a subset of `eliza-livepeer-plugin.mdx` line 238 knowledge entry and overlaps with `/v2/developers/build/ai-and-agents/model-support`.
- **LINK GAPS**: Mirror.xyz attribution is the only source link in the body; no link to Eliza release tag, no link to `dream-gateway.livepeer.cloud` policy page, no link to a Livepeer AI overview before the build. No cross-tab graduation: missing links to `/v2/gateways/`, `/v2/solutions/`, `/v2/about/network/`.
- **STRANDED**: Page ends with one short paragraph (line 195) linking to Eliza plugin tutorial. No CardGroup, no orientation back to AI overview, no production-hardening checklist, no model support reference. Reader hits a "now what?" wall.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 1 | line 35: "This tutorial walks through building..." |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | clean — REWRITE-STUB source successfully removed |
| Hedging openers | 0 | — |
| Self-reference | 2 | line 35: `<Tip>This tutorial...`; line 41: `<Note>This tutorial is adapted...` |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Prerequisites | 5 | 4 | 5 | 5 | 5 | 24 |
| Build your agent | 4 | 4 | 5 | 5 | 4 | 22 |
| Extending the agent | 4 | 4 | 4 | 4 | 4 | 20 |
| Supported LLM models | 5 | 4 | 5 | 5 | 4 | 23 |

All headings pass 3.1.

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 64 | bash | ✗ | ✗ | NOT-TESTED | git clone — pinned to `main` (moving target) |
| 76 | bash | ✗ | ✗ | NOT-TESTED | `.env` example |
| 93 | json | ✗ | ✗ | NOT-TESTED | character file |
| 132 | bash | ✗ | ✗ | NOT-TESTED | pnpm start |
| 138 | (none) | ✗ | ✗ | — | log output block — language tag also missing |
| 151 | bash | ✗ | ✗ | NOT-TESTED | curl smoke test |
| 159 | json | ✗ | ✗ | NOT-TESTED | expected response |

All blocks FAIL 5.20. The log block at line 138 also fails 4.17 (no language tag).

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Activation moment (the clone command) is below 60+ lines of preamble (Tip + Note + intro + "What you will build" + Prerequisites). For a "30 minutes from zero to running agent" promise, the first command should be the first thing the reader sees after the header CTA. Reader has to scroll past three orientation blocks to reach Step 1.
- **Fix step:** Move the attribution `<Note>` (lines 40-42) to a footer "Sources" Accordion (style: huggingface-to-livepeer.mdx §Sources, line 571). Compress intro to one sentence. Drop "What you will build" bullet into the Tip. The result: header CTA → opening divider → Prerequisites → Step 1 clone command, all within the first viewport.
- **Source/exemplar:** `v2/developers/build/tutorials/huggingface-to-livepeer.mdx` lines 31-49 (header CTA + one-sentence intro + "what you will verify" bullets) — that's the activation-moment pattern this page should adopt; sibling `huggingface-to-livepeer.mdx` is in the same folder.

### Layer 2 — Composition
- **Gap:** Tutorial scaffold incomplete. No Common Errors AccordionGroup. No Related Pages CardGroup at footer. Raw markdown table for model support. Code blocks lack `icon` + `title`. No Verification section distinct from the smoke test step.
- **Fix step:**
  1. Add `<AccordionGroup>` at end (before EOF) with 4-5 `<Accordion icon="circle-question">` entries for: "Cold-start times out", "Curl returns empty body", "Character file not loaded", "Model not supported". Pattern: `eliza-livepeer-plugin.mdx` lines 466-485.
  2. Replace markdown table at line 186-191 with `<StyledTable variant="bordered">` using `TableRow`/`TableCell` (import `StyledTable` already in line 29 — already imported but unused).
  3. Add `icon="terminal" title="<filename>"` to each of 6 fenced code blocks. Pattern: `huggingface-to-livepeer.mdx` line 195.
  4. Add `<Columns cols={2}>` Related Pages block before EOF with 4 `<Card>` + `<CustomCardTitle icon ... horizontal>` linking to Eliza plugin tutorial, Model Support, AI Pipelines, Production Hardening. Pattern: `eliza-livepeer-plugin.mdx` lines 491-506 (CardGroup) but converted to Columns.
  5. Add explicit `## Verification` H2 between Step 5 and "Extending the agent" — list the four observable signals: agent logs "ready", curl returns JSON, response includes generated text, no 502/timeouts.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx` lines 162-172 (Related Pages); `eliza-livepeer-plugin.mdx` AccordionGroup at 466-485.

### Layer 3 — Cross-page integration
- **Gap:** Reader's likely next move after running the agent is one of: (a) extend with character depth + RAG (Eliza tutorial), (b) ship to a real Slack/Discord channel (Eliza tutorial), (c) self-host an orchestrator that pins the model warm (Orchestrators tab), (d) switch to a paid gateway (Solutions tab). Only (a) is linked, and only inline. No cross-tab graduation.
- **Fix step:** Add Related Pages CardGroup with at least 4 cards:
  - `/v2/developers/build/tutorials/eliza-livepeer-plugin` — "Layer in RAG, clients, swarms"
  - `/v2/developers/build/ai-and-agents/model-support` — "Warm models, VRAM, custom paths"
  - `/v2/gateways/setup/connect` — "Self-host an orchestrator with the model warm"
  - `/v2/developers/guides/production-hardening-checklist` — "Rate limits, auth, observability"
  Add Eliza release link at line 65: `git checkout <tag>` not `main`. Add `dream-gateway.livepeer.cloud` reference link to a community gateway info page at first mention (line 54).
- **Source/exemplar:** `v2/gateways/setup/connect.mdx`; Eliza releases at https://github.com/elizaos/eliza/releases.

### Layer 4 — Veracity and source authority
- **Gap:** Mirror.xyz is the only source. The 30-90s cold-start figure (line 145) and 30-second-to-5-minute window (line 184) appear without provenance. Model VRAM (8/8/10/8 GB) unsourced. Eliza `git checkout main` is a moving target. `@livepeer/ai` and `pnpm` unpinned. No code block carries TESTED/NOT-TESTED.
- **Fix step:** 
  1. Add `veracityStatus: unverified` to frontmatter (line 27 area).
  2. Pin Eliza to a release tag: `git checkout v0.1.x` (verify current stable tag in https://github.com/elizaos/eliza/releases) with `{/* REVIEW: pin tag */}` until verified.
  3. Source cold-start figures: cite either `livepeer/ai-runner` README or a previous tutorial that established the number; ai-image-generation-app.mdx (sibling) uses "30 seconds to multi-minute" without source either — both should link to the same canonical source (suggest `ai-runner` README or `model-support.mdx`).
  4. Move VRAM table to import from a shared data snippet shared with `model-support.mdx` rather than hardcoded here.
  5. Label every code block TESTED with date or NOT-TESTED with reason.
- **Source/exemplar:** `livepeer/ai-runner` README; `livepeer/comfystream` releases for the pinning pattern; `huggingface-to-livepeer.mdx` §Sources (lines 571-593) for the source-disclosure pattern.

### Layer 5 — Product-forward depth
- **Gap:** No maturity signal. No statement of when to use Eliza on Livepeer vs alternatives (OpenAI direct, Anthropic, Replicate). No statement of cost — the community gateway is "unauthenticated" (line 54) but production cost (per-token, per-second) is silent. No "what could go wrong" beyond cold-start. The "30 minute" promise is the only signal of difficulty — no statement of "this is a building block; here's what you do with it".
- **Fix step:**
  1. Add §"When to use this" block (style: `<Tip>` or `<Info>` after Prerequisites) — three bullets: "If you want decentralised inference instead of a single-provider lock-in", "If you already use Eliza for agents", "If you want to swap models cheaply".
  2. Add §"When not to use this" block — two bullets: "If you need sub-second cold-start guarantees, run an orchestrator with model pinned warm or use a paid gateway", "If your agent ships a single, very large model (>34B), evaluate cost vs centralised options first".
  3. Add cost-signal paragraph after Step 5: "Community gateway is free for development. Production cost scales with output tokens; per-token pricing varies by model and orchestrator."
  4. Add maturity badge near header CTA: `<Badge>Production-ready (Eliza on Livepeer)</Badge>` once verified.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — flagship-tutorial pattern; `comfystream/overview.mdx` for the production-readiness signal block.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 6 / MEDIUM 4 / INFO 2
**Critical findings (1–5)**:
1. No Related Pages / Next Steps section — reader stranded (5.16, 4.4). Compare every sibling tutorial which has CardGroup at footer.
2. Code blocks (6 total) missing `icon` + `title` (5.20). Pattern fixed in sibling `huggingface-to-livepeer.mdx`.
3. Missing veracityStatus + legacy `status: current` field (1.8, 5.7).
4. No Common Errors / Troubleshooting block (2.D4, 4.19) — reader who hits a failure has no map.
5. Markdown table at line 186 must be `<StyledTable>` (5.5, 5.23). `StyledTable` is already imported (line 29) but never used.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `<Columns cols={2}>` Related Pages block before EOF with 4 cards (Eliza plugin tutorial, Model Support, Self-host gateway, Production Hardening) using `<CustomCardTitle icon ... horizontal>` | 195 (replace inline paragraph) | HIGH | M | check 5.16+5.17; `eliza-livepeer-plugin.mdx` lines 491-506 |
| 2 | Add `icon="terminal" title="<filename>"` (or `icon="code"` for json) to every fenced code block | 64, 76, 93, 132, 138, 151, 159 | HIGH | S | check 5.20; `huggingface-to-livepeer.mdx` line 195 |
| 3 | Add `<AccordionGroup>` Common Errors block with 4-5 `<Accordion icon="circle-question">` entries (cold-start timeout, curl empty body, character file not loaded, model unsupported, env mismatch) before EOF | new H2 §Common Errors | HIGH | M | check 2.D4+4.19+5.19; `eliza-livepeer-plugin.mdx` lines 466-485 |
| 4 | Replace markdown table at line 186-191 with `<StyledTable variant="bordered">` using `TableRow`/`TableCell` (already imported at line 29) | 186-191 | HIGH | S | check 5.23 |
| 5 | Add `veracityStatus: unverified` to frontmatter; remove legacy `status: current` field | 25-27 | HIGH | S | check 1.8+5.7+6.6 |
| 6 | Pin Eliza to a release tag at line 67 (`git checkout v<tag>` with `{/* REVIEW: pin tag */}`) instead of `main` (moving target) | 67 | HIGH | S | check 2.D3+6.8 |
| 7 | Rewrite header `<Tip>` to remove "This tutorial walks through" banned phrase — e.g. "Build a working Eliza agent that routes inference through Livepeer in 30 minutes." Move attribution `<Note>` (lines 40-42) into a footer `<Accordion title="Sources" icon="github">` | 35, 40-42 | MEDIUM | S | check 2.3+2.D7+5.19 |
| 8 | Add `## Verification` H2 between Step 5 (line 164) and "Extending the agent" — list four observable success signals (logs ready, curl returns JSON, response contains text, no errors) | 165-170 | MEDIUM | M | tutorial matrix Verification requirement |
| 9 | Add language tag (`text` or `log`) to fenced log block at line 138 | 138 | MEDIUM | S | check 4.17 |
| 10 | Add TESTED date or NOT-TESTED reason to every code block | 64, 76, 93, 132, 151, 159 | MEDIUM | M | check 6.2 |
| 11 | Add §"When to use this" / §"When not to use this" callouts (`<Info>` / `<Warning>`) after Prerequisites to set production-readiness expectation | new H2 / callout | MEDIUM | M | layer 5; `.claude/references/layout/exemplars.md` |
| 12 | Add cross-tab graduation links inside the Related Pages: at least one Gateways and one Solutions URL | Related Pages | HIGH | S | check 4.10+7.6 |
| 13 | Hoist Supported LLM Models data into a shared snippet imported here + on `model-support.mdx` instead of duplicating | line 186-191 | INFO | M | check 5.15 |
| 14 | Add `pageVariant: quickstart` (30-minute scope matches the variant) | frontmatter | INFO | S | check 1.3 |
