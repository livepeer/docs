# Review: eliza-livepeer-plugin.mdx

**Page**: `v2/developers/build/tutorials/eliza-livepeer-plugin.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A8
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 20,421
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | all present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity | PASS | `advanced` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build an Eliza AI agent on Livepeer. Character files, RAG via knowledge files, Slack and Discord clients, multi-agent swarms with SwarmZero." subject-led, 145 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords | PASS | specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "specialised", "skeptical" — note: "skeptical" is the US spelling (UK = "sceptical"). Line 193: `"skeptical of hype"` — flag |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | line 43 "By the end of this tutorial..."; line 45 self-ref "This is the Persona 1 deep activation moment" |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8–2.10 | prohibited / passive / hedging | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | Eliza, ai16z, SwarmZero, BYOC, PyTrickle preserved |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | MIXED | line 43-45 reader-led; later entity-led |
| 2. Voice | 2.14–2.16 | hedging / deprecated | PASS | |
| 2. Voice | 2.17–2.22 | universal terms / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | FAIL | First fenced code at line 68. Lines 43-57 are 100+ words of framing including "Persona 1 deep activation moment" before the clone command |
| 2. Voice | 2.D2 | API methods linked | MIXED | Eliza repo linked at line 69; SwarmZero example linked at line 178 of `ai-agent-on-livepeer.mdx` — equivalent here line 364 prose mentions SwarmZero but no first-mention link in this tutorial body (only at line 425 in code path) |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Node 22+, Python 3.11+ stated; Eliza on `main` (line 70 — moving target); SwarmZero `pip install swarmzero` unpinned (line 370) |
| 2. Voice | 2.D4 | Errors in main | PASS | Common Errors AccordionGroup at line 466 in main flow |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | PASS | no `<Note>` for primary |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "Model Provider Layer" (24), "Character File Depth" (23), "RAG Knowledge" (24), "Slack and Discord Clients" (23), "Multi-Agent Swarms" (24), "Production Considerations" (23), "Common Errors" (21), "Next Steps" (banned). 8 pass / 1 fail |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 491: "## Next Steps" |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Eliza Livepeer Plugin" — 3 words |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT | PASS | builds on `ai-agent-on-livepeer.mdx`; line 45 references it directly |
| 4. Structure | 4.4 | No dead ends | MIXED | Next Steps cards present but plain |
| 4. Structure | 4.5 | Prerequisites stated | PASS | line 49 §Required Tools — explicit Node 22, pnpm, gateway URL, optional Slack/Discord admin, optional Python 3.11+ |
| 4. Structure | 4.6 | Out-of-scope | PASS | model-support delegated; production-hardening delegated |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | FAIL | §"Model Provider Layer" (lines 62-145) duplicates `ai-agent-on-livepeer.mdx` §"Build your agent" (lines 59-166) almost step-for-step. Should be a "if you completed the entry tutorial, skip to Layer 2" call-out, or factor shared steps to a snippet |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | zero cross-tab links; all 4 Next Steps cards point to `/v2/developers/` |
| 4. Structure | 4.11 | Discord test | PASS | code complete for each layer |
| 4. Structure | 4.12 | Page size | PASS | 20.4 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | 4 Steps blocks for 4 major layers — multi-phase tutorial, justified |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Production Considerations names 6; "RAG quality depends on corpus" at line 281 is a strong direct claim. Missing: when not to use Eliza |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | all 16 fenced blocks have `bash`, `json`, `yaml`, `python` |
| 4. Structure | 4.18 | Code-first opening | FAIL | see 2.D1 |
| 4. Structure | 4.19 | Errors in main | PASS | |
| 4. Structure | 4.20 | API methods linked | MIXED | |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold partial — Prerequisites (mis-named), 4 Steps blocks, no Verification H2, Next Steps |
| 5. Layout | 5.2 | Required sections | MIXED | Prerequisites (mis-named), Steps (raw), Verification (absent as H2; line 268 "Verify retrieval" inside Step), Related (mis-named "Next Steps") |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | procedural — raw `<Steps>` x4 (5.21); markdown table at line 154 (5.23) |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 28 `status: current` |
| 5. Layout | 5.8–5.10 | styles / banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | partial |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | character-file fields table (line 154) hardcoded |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | "Next Steps" CardGroup — should be Columns |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup>` not `<Columns>`; cards plain |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | FAIL | 6 `<Accordion>` at lines 467, 470, 473, 476, 479, 482 — all missing `icon` |
| 5. Layout | 5.20 | Code icon+title | FAIL | All 16 fenced code blocks (68, 80, 95, 118, 135, 166, 236, 252, 259, 271, 293, 327, 340, 370, 378, 430) missing icon + title |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Raw `<Steps>` x4 at lines 66, 226, 289, 368 — should be `<StyledSteps>` |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | Next Steps cards plain |
| 5. Layout | 5.23 | StyledTable | FAIL | Markdown table at lines 154-162 — should be `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | MIXED | 4 Steps blocks + 1 table + 1 AccordionGroup — busy but justified by 5-layer scope |
| 5. Layout | 5.26 | CustomDivider | PASS | |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Eight fields shape behaviour" (line 151) — no source. "Eliza supports retrieval-augmented generation via the `knowledge` array" (line 223) — needs Eliza docs link. "SwarmZero is a Python framework that orchestrates multi-agent workflows" (line 363) — no link. Several specific claims (30-90s cold-start, 128k Llama context) unsourced. The line-238 RAG knowledge entry contains its own factual claims (e.g. "go-livepeer PR #3641") — strong precision but the page itself uses it as example data |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No code block labelled TESTED |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "5-20 agents per workflow" (line 440) — order-of-magnitude claim, no source. "10 MB / 10 GB corpus" thresholds (line 452) — opinion not cited |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | PASS | `verified` — but unpinned versions weaken |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | Eliza on `main` (line 70); SwarmZero unpinned (line 370) |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | Eliza repo linked at line 69 (good); SwarmZero docs/repo not linked at first mention (363) |
| 6. Veracity | 6.11-6.12 | glossary | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | line 2633 |
| 7. Nav | 7.2–7.5 | mirrors / orphans | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | |
| 7. Nav | 7.7–7.12 | lane / TTL | PASS | |
| 8. Links | 8.1 | Internal | PASS | sibling tutorials, model-support, ai-pipelines, production-hardening — all resolve |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Eliza Livepeer Plugin" | PASS | |
| sidebarTitle | Yes | "Eliza Agent" | PASS | |
| description | Yes | "Build an Eliza AI agent on Livepeer..." | PASS | |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | advanced | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | unpinned Eliza + SwarmZero weakens |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | n/a |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (10×) | Required | placement OK |
| `<Tip>` (header CTA) | Yes (38) | Recommended | OK |
| `<Steps>` / `<Step>` (raw) | Yes (4 blocks: 66, 226, 289, 368) | — | FAIL 5.21 |
| `<StyledSteps>` | No | Required | not imported |
| `<Tabs>` / `<Tab icon>` | No | — | not needed |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 + 6) | — | FAIL 5.19 |
| `<StyledTable>` | No | Required | FAIL 5.23 |
| Fenced code with icon+title | No | Required | FAIL 5.20 — 16 blocks |
| `<CardGroup cols={2}>` / `<Card>` | Yes (493) | — | FAIL 5.16+5.17 |
| `<CustomCardTitle>` | No | Required | FAIL |
| `<CenteredContainer>` | Yes (37) | — | OK |
| `<LinkArrow>` | Yes (186, 188, 192, 460, 494, 497, 500, 503) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Model Provider Layer" (lines 62-145) duplicates `ai-agent-on-livepeer.mdx` §"Build your agent" (lines 59-166) almost identically. Both clone Eliza, configure env, create character, run, smoke-test. This page is the "advanced" variant; relationship should be a `<Note icon="circle-info">` at the start: "Already completed [Build an AI agent on Livepeer](../ai-agent-on-livepeer)? Skip to Layer 2: Character File Depth." Otherwise shared steps should be in a snippet.
- **OVERLAP**: §"Required Tools" overlaps with `ai-agent-on-livepeer.mdx` Prerequisites (lines 50-55) and `build-a-chatbot-with-livepeer-llm.mdx` Required Tools (lines 47-54). Same Node + gateway pattern.
- **LINK GAPS**: SwarmZero (line 363) not linked at first mention. `LIVEPEER_API_KEY` referenced but no link to an API-key acquisition page. Eliza on `main` (line 70) should be a tag. Slack OAuth scopes named (line 301-307) but no link to Slack docs. Discord intent (line 480) named but not linked to Developer Portal.
- **STRANDED**: 4 Next Steps cards developer-tab only. Reader who shipped an Eliza agent has no graduation path to Gateways (self-host with model pinned warm) or Solutions (managed deployment).

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 1 | line 193: `"skeptical of hype"` — UK spelling is "sceptical" |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Self-reference | 2 | line 43 "By the end of this tutorial..."; line 45 "This is the Persona 1 deep activation moment" |
| Banned heading | 1 | line 491: "## Next Steps" |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| Model Provider Layer | 24 |
| Character File Depth | 23 |
| RAG Knowledge | 24 |
| Slack and Discord Clients | 23 |
| Multi-Agent Swarms | 24 |
| Production Considerations | 23 |
| Common Errors | 21 |
| Next Steps | 14 — banned/weak |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 68 | bash | ✗ | ✗ | NOT-TESTED | git clone Eliza — unpinned `main` |
| 80 | bash | ✗ | ✗ | NOT-TESTED | .env |
| 95 | json | ✗ | ✗ | NOT-TESTED | minimal character file |
| 118 | bash | ✗ | ✗ | NOT-TESTED | pnpm start |
| 124 | (none) | ✗ | ✗ | — | log output — language tag also missing (4.17) |
| 135 | bash | ✗ | ✗ | NOT-TESTED | curl smoke test |
| 166 | json | ✗ | ✗ | NOT-TESTED | extended character file |
| 236 | json | ✗ | ✗ | NOT-TESTED | knowledge array |
| 252 | bash | ✗ | ✗ | NOT-TESTED | mkdir knowledge |
| 259 | json | ✗ | ✗ | NOT-TESTED | directory reference |
| 271 | bash | ✗ | ✗ | NOT-TESTED | curl RAG test |
| 293 | yaml | ✗ | ✗ | NOT-TESTED | Slack manifest |
| 327 | bash | ✗ | ✗ | NOT-TESTED | env credentials |
| 340 | json | ✗ | ✗ | NOT-TESTED | clients enable |
| 346 | (none) | ✗ | ✗ | — | log lines — language tag missing |
| 370 | bash | ✗ | ✗ | NOT-TESTED | pip install swarmzero — unpinned |
| 378 | python | ✗ | ✗ | NOT-TESTED | swarm.py |
| 430 | bash | ✗ | ✗ | NOT-TESTED | python swarm.py |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Outcome promises "production-shaped agent". Tutorial delivers the 5-layer pipeline up to a SwarmZero example. Production Considerations (line 444) names 6 things; none have concrete commands. Reader knows what production agents need but doesn't have one. "Production-shaped" without an end-to-end deployment story stops short of the promise.
- **Fix step:** Add one concrete deployment recipe in Production Considerations: "Deploy to Fly.io / Railway / Vercel: `fly launch --image <eliza-image>` with env vars, or compose file template, with `{/* REVIEW: verify deploy target */}`. Alternatively, narrow the outcome statement at line 43 from "production-shaped agent" to "an agent that demonstrates the 5 layers" and route production to a separate deploy guide.
- **Source/exemplar:** Eliza docs `Deployment` section if available; `vod-upload-and-playback.mdx` (sibling) shows the "demo → ship-ready" split honestly.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` x4 (5.21). All 16 code blocks missing icon+title (5.20); 2 log blocks (124, 346) also missing language tag (4.17). 6 Accordions missing icon (5.19). Markdown character-fields table at 154 (5.23). Next Steps mis-named + CardGroup not Columns + plain Cards (5.16/5.17/5.22). No Verification H2 (line 268 "Verify retrieval" sits inside a Step, not as an H2 for the whole tutorial).
- **Fix step:**
  1. Replace all 4 `<Steps>` blocks (lines 66, 226, 289, 368) with `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`.
  2. Add `icon` + `title` to every fenced code block (16). For Python `icon="code"`; YAML `icon="file"`.
  3. Add `text` language tag to log blocks at 124 and 346.
  4. Add `icon="circle-question"` (or topical icon) to each `<Accordion>` (467, 470, 473, 476, 479, 482).
  5. Replace markdown table at lines 154-162 with `<StyledTable variant="bordered">` using `TableRow`/`TableCell`.
  6. Convert `<CardGroup>` (493) to `<Columns cols={2}>`; rename §"Next Steps" → §"Related Pages"; add `<CustomCardTitle icon title horizontal>` per Card.
  7. Add `## Verification` H2 after the Multi-Agent Swarms section and before Production Considerations (around line 442) — list 5 observable signals (one per layer): plugin loads, character voice persistent, RAG returns scoped facts, Slack/Discord responds to mention, swarm hands off output.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` for icon+title; `ai-agent-on-livepeer.mdx` line 61 for StyledSteps.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links. SwarmZero not linked at first mention. No prereq link to `ai-agent-on-livepeer.mdx` at the top (only at line 45 inline). Slack and Discord docs not linked. The agent-on-livepeer entry tutorial linkage is implicit only.
- **Fix step:** Add explicit prereq `<Note>` at line 48 (after Prerequisites): "Skip the basics? Start with [Build an AI agent on Livepeer](../ai-agent-on-livepeer.mdx) for the 30-minute entry tutorial." Add inline links: line 363 `[SwarmZero](https://github.com/swarmzeroai/swarmzero)` (verify URL); line 286 link to Slack apps / Discord developer portal at first mention. Add to Related Pages ≥1 Gateways + ≥1 Solutions or About card.
- **Source/exemplar:** Upstream URLs; `huggingface-to-livepeer.mdx` line 72 inline-source pattern.

### Layer 4 — Veracity and source authority
- **Gap:** Eliza on `main` (line 70). SwarmZero unpinned. "Eight fields shape behaviour" (line 151) — should source the field count from Eliza repo. "5-20 agents per workflow" / "10 MB / 10 GB corpus" (lines 440, 452) — engineering opinions stated as facts. The knowledge example at line 238 cites `go-livepeer PR #3641` (precise! good); the rest of the prose doesn't reach that standard.
- **Fix step:**
  1. Pin Eliza to release tag: `git checkout v<X>` with `{/* REVIEW: pin tag */}`.
  2. Pin SwarmZero: `pip install swarmzero==<version>`.
  3. Source the "8 fields" claim — link to `elizaos/eliza/packages/core/src/types.ts` or whichever file defines the character schema.
  4. Cite or soften "5-20 agents per workflow" / "10 MB / 10 GB corpus" — either link to a SwarmZero benchmark or rewrite as "in common workflows" / "rule of thumb".
  5. Label every code block TESTED with date + env (e.g. "TESTED 2026-05-10, Eliza v<X>, Node 22.1") or NOT-TESTED with reason.
- **Source/exemplar:** `livepeer/comfystream` releases; `huggingface-to-livepeer.mdx` §Sources accordion pattern.

### Layer 5 — Product-forward depth
- **Gap:** No maturity signal beyond `complexity: advanced`. No statement of "Eliza on Livepeer is production-ready for X but not Y". No cost expectation (5 layers × N tokens × M users per day = ?). No "when not to use Eliza" (e.g. "if your agent needs sub-second response on Slack at scale, Eliza's polling model is too slow; use a dedicated chat service"). Persona-1 framing at line 45 is internal-marketing copy.
- **Fix step:**
  1. Add `<Info>` "When this fits" block after Required Tools: "Best for: persistent agents with character + RAG. If you need: simple Q&A, use the LLM chatbot tutorial. Heavy multi-tenant scale, run a dedicated gateway with rate limits. Real-time voice/avatar, see VTuber tutorial."
  2. Replace Persona-1 framing at line 45 with reader-signal copy.
  3. Add cost-signal note in Production Considerations: "Per-user cost scales with conversation length × RAG retrievals. A 10-message Slack thread with 4 retrievals at Llama 3.1 8B input/output sizes typically costs $X — link to Solutions pricing".
  4. Add `<Badge>Verified <date></Badge>` near header CTA.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` flagship-tutorial pattern; `comfystream/overview.mdx` for "when to use / when not to use" precedent.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Raw `<Steps>` x4 not StyledSteps (5.21).
2. All 16 code blocks missing icon + title (5.20); 2 log blocks also missing language tag (4.17).
3. 6 Accordions missing icon (5.19); markdown table at 154 not StyledTable (5.23).
4. Next Steps banned heading + CardGroup not Columns + plain Cards (3.2, 5.16, 5.17, 5.22); zero cross-tab links (4.10/7.6).
5. Eliza unpinned + SwarmZero unpinned (6.8); "skeptical" should be "sceptical" UK spelling (2.1).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace `<Steps>` blocks (66, 226, 289, 368) with `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`; import from `/snippets/components/displays/steps/Steps.jsx` | 33, 66-143, 226-279, 289-358, 368-438 | HIGH | L | check 5.21 |
| 2 | Add `icon` + `title` to every fenced code block (16 total) | 68, 80, 95, 118, 135, 166, 236, 252, 259, 271, 293, 327, 340, 370, 378, 430 | HIGH | L | check 5.20 |
| 3 | Add language tag (`text`) to log blocks at 124 and 346 | 124, 346 | MEDIUM | S | check 4.17 |
| 4 | Add `icon="circle-question"` (or topical icon) to each Accordion | 467, 470, 473, 476, 479, 482 | HIGH | S | check 5.19 |
| 5 | Convert markdown table at lines 154-162 to `<StyledTable variant="bordered">` | 154-162 | HIGH | S | check 5.23 |
| 6 | Convert `<CardGroup>` (493) to `<Columns cols={2}>`; rename §"Next Steps" → §"Related Pages"; add `<CustomCardTitle icon title horizontal>` per Card | 491-506 | HIGH | M | check 5.16+5.17+5.22 |
| 7 | Replace "skeptical" with "sceptical" UK spelling | 193 | MEDIUM | S | check 2.1 |
| 8 | Add `## Verification` H2 between Multi-Agent Swarms (end ~441) and Production Considerations (444); list 5 observable signals (one per layer) | new H2 | MEDIUM | M | tutorial matrix |
| 9 | Rename §"Required Tools" → §"Prerequisites" | 49 | MEDIUM | S | check 4.5+5.2 |
| 10 | Add ≥2 cross-tab cards to Related Pages: Gateways (`/v2/gateways/setup/connect` or similar) and Solutions or About | Related Pages | HIGH | S | check 4.10+7.6 |
| 11 | Remove legacy `status: current` | 28 | MEDIUM | S | check 5.7 |
| 12 | Pin Eliza to a release tag (line 70: `git checkout v<tag>` not `main`); pin SwarmZero (`pip install swarmzero==<version>`) | 70, 370 | HIGH | S | check 2.D3+6.8 |
| 13 | Add `<Note>` at line 48 (prereq pointer): "Skip the basics? Start with Build an AI agent on Livepeer" | after 48 | MEDIUM | S | layer 3 |
| 14 | Add inline links at first mention: SwarmZero (363), Slack apps + Discord developer portal (286-321) | 286, 320, 363 | MEDIUM | S | check 6.10 |
| 15 | Label every code block TESTED (date + env) or NOT-TESTED (reason) | 16 blocks | MEDIUM | L | check 6.2 |
| 16 | Source the "8 fields shape behaviour" claim (link to Eliza types file); cite or soften "5-20 agents" + "10 MB / 10 GB" thresholds | 151, 440, 452 | MEDIUM | S | check 6.1+6.4 |
| 17 | Add `<Info>` "When this fits / When not to use" block after Required Tools | after 58 | INFO | M | layer 5 |
| 18 | Hoist §"Model Provider Layer" shared content with `ai-agent-on-livepeer.mdx` to a snippet or add explicit skip pointer | 62-145 | INFO | M | check 4.8 |
