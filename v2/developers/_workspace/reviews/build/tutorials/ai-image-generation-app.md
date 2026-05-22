# Review: ai-image-generation-app.mdx

**Page**: `v2/developers/build/tutorials/ai-image-generation-app.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A8
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 13,262
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | all present incl `veracityStatus: verified` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` |
| 1. Frontmatter | 1.9 | industry | N/A | not present |
| 1. Frontmatter | 1.10 | niche | N/A | not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build and deploy a Next.js image generation app calling Livepeer AI. Server action, form, history, ~30 minutes." subject-led, 113 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords | PASS | specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "optimisation" (lines 280, 282) used; no US hits |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | none detected |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | line 40 starts subject-first: "By the end of this tutorial..." (acceptable activation pattern but borderline self-ref — see 2.15) |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer-coded |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | MIXED | line 40 opens "By the end of this tutorial you'll have..." — second-person reader address, not entity-led. Minor; matches tutorial-genre convention but rubric prefers system-led |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | PASS | |
| 2. Voice | 2.17–2.22 | terminology | PASS | |
| 2. Voice | 2.D1 | Code-first opening | FAIL | First fenced code at line 60. Lines 40-54 are 70 words of "Persona 1 activation moment" framing + Required Tools list. Tutorial activation should put `create-next-app` above the fold |
| 2. Voice | 2.D2 | API methods linked | MIXED | `@livepeer/ai` referenced; SDK source repo not linked at first mention (line 75) |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Node 20+ specified; `npx create-next-app@latest` (line 61) pulls latest — not pinned; `npm install @livepeer/ai` (line 75) not version-pinned |
| 2. Voice | 2.D4 | Errors in main | MIXED | Common Errors AccordionGroup at line 358-374 exists — but Accordions missing icons. Errors are in main flow, good |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | PASS | no `<Note>` for primary content |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "Project Bootstrap" (22), "Server Action" (24), "UI Form Component" (23), "Image Gallery" (24), "Page Composition" (22), "Production Considerations" (23), "Common Errors" (21), "Next Steps" (14 — banned). 8 pass / 1 fail |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 380: "## Next Steps" |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "AI Image Generation App" — descriptive but 4 words, slightly long for title-cased H1; sidebarTitle is "AI Image Gen App" (5 words) — abbreviation feels truncated |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | "This page lets the developer build and deploy a Next.js image-gen app on Livepeer" |
| 4. Structure | 4.3 | PREV/NEXT | PASS | follows ai-jobs-direct-quickstart |
| 4. Structure | 4.4 | No dead ends | MIXED | Next Steps CardGroup at 382-394 but plain Cards without CustomCardTitle |
| 4. Structure | 4.5 | Prerequisites stated | PASS | line 46 §Required Tools (should be renamed §Prerequisites per tutorial matrix) |
| 4. Structure | 4.6 | Out-of-scope | PASS | production hardening delegated to checklist |
| 4. Structure | 4.7 | Info type | PASS | procedural code-first |
| 4. Structure | 4.8 | No duplication | MIXED | overlaps with `build-a-chatbot-with-livepeer-llm.mdx` §Project Bootstrap (lines 58-89) — same `create-next-app` flow, same env var pattern. Should factor shared bootstrap to a snippet |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | zero cross-tab links; all 4 Next Steps cards point to v2/developers/ |
| 4. Structure | 4.11 | Discord test | PASS | code is complete, error paths covered |
| 4. Structure | 4.12 | Page size | PASS | 13.3 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | one Steps block per major H2 (Project Bootstrap, Server Action) — fine |
| 4. Structure | 4.15 | Trade-offs named | MIXED | §Production Considerations names 4 trade-offs but no "when not to use this" |
| 4. Structure | 4.16 | Context block | N/A | |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | all 9 fenced blocks have `bash`, `ts`, or `tsx` |
| 4. Structure | 4.18 | Code-first opening | FAIL | cross-ref 2.D1 |
| 4. Structure | 4.19 | Errors in main | PASS | Common Errors AccordionGroup in main flow |
| 4. Structure | 4.20 | API methods linked | MIXED | `livepeer.generate.textToImage` not linked to upstream SDK reference |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial template partial — Required Tools (Prerequisites), Steps, no dedicated Verification H2, Next Steps cards. Verification implicit in "Open http://localhost:3000" at line 336 |
| 5. Layout | 5.2 | Required sections | MIXED | Prerequisites (named "Required Tools"), Steps (multiple), Verification (line 336 — minimal), Related Pages (named "Next Steps") — present but partially mis-named |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | code-first procedural — but uses raw `<Steps>` not `<StyledSteps>` (5.21 FAIL) |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 25 `status: current` — legacy field |
| 5. Layout | 5.8 | CSS custom props | N/A | no inline styles |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | partial |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | PASS | no multi-variant content |
| 5. Layout | 5.15 | Data imports | MIXED | `MODELS` array (lines 181-183) hardcoded in tutorial — could pull from shared model-support data file |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | "Next Steps" H2 with `<CardGroup cols={2}>`; rubric requires `<Columns cols={2}>` named "Related Pages" |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup>` not `<Columns>`; cards lack `<CustomCardTitle>`; horizontal prop absent |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | FAIL | 5 `<Accordion>` at lines 359, 362, 365, 368, 371 — all missing `icon` prop |
| 5. Layout | 5.20 | Code icon+title | FAIL | All 9 fenced code blocks (lines 60, 74, 84, 102, 173, 248, 284, 304, 332) missing icon + title |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Raw `<Steps>` x2 at lines 58 and 98 — should be `<StyledSteps iconColor titleColor>` with `<StyledStep>`. Reference: sibling `ai-agent-on-livepeer.mdx` line 61 uses StyledSteps correctly |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | Next Steps cards lack CustomCardTitle |
| 5. Layout | 5.23 | StyledTable | N/A | no tables |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider | PASS | opening at 38, between H2s, before footer — placement OK |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "eleven native pipelines" (line 79) — should cite `aiModels.json`. "30-second to multi-minute cold load" (line 372) — unsourced |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No code block labelled TESTED |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "1024 × 1024" (lines 135-136) fits SDXL; line 79 "eleven native pipelines" needs source |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | PASS | `verified` |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `npx create-next-app@latest` and `npm install @livepeer/ai` unpinned; Next 15 stated but no point release |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | no link to `livepeer/ai` SDK repo at first mention (line 75); `dream-gateway.livepeer.cloud` not linked to its provenance |
| 6. Veracity | 6.11-6.12 | glossary | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | line 2629 |
| 7. Nav | 7.2–7.5 | mirrors / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | (cross-ref 4.10) |
| 7. Nav | 7.7–7.12 | lane / naming / TTL | PASS | |
| 8. Links | 8.1 | Internal | PASS | all internal links resolve (`/v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart`, `/v2/developers/build/ai-and-agents/model-support`, `/v2/developers/guides/production-hardening-checklist`, sibling chatbot tutorial — all verified) |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1 | tab job coverage | PASS | |
| 10. Completeness | 10.2 | zero-to-hero | PASS | |
| 10. Completeness | 10.3 | persona paths | PASS | |
| 10. Completeness | 10.4 | scope explicit | PASS | |
| 10. Completeness | 10.5 | self-containment | PASS | |
| 10. Completeness | 10.6 | working language path | PASS | TS for builder |
| 10. Completeness | 10.7 | persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "AI Image Generation App" | PASS | |
| sidebarTitle | Yes | "AI Image Gen App" | PASS | |
| description | Yes | "Build and deploy a Next.js image generation app..." | PASS | |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | unpinned SDK + framework erode the claim |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field — remove |
| pageVariant | No | — | INFO | could be `quickstart` |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (8×) | Required | placement correct |
| `<Tip>` (header CTA) | Yes (line 35) | Recommended | OK |
| `<Steps>` / `<Step>` (raw) | Yes (lines 58, 98) | — | FAIL 5.21 — should be StyledSteps |
| `<StyledSteps>` | No | Required | not imported / not used |
| `<Tabs>` / `<Tab icon>` | No | Recommended | not strictly needed (single language path) |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 + 5) | — | FAIL 5.19 — Accordions missing `icon` prop |
| `<StyledTable>` | No | — | not needed |
| Fenced code with icon+title | No | Required | FAIL 5.20 — 9 blocks missing |
| `<CardGroup cols={2}>` / `<Card>` | Yes (382) | — | FAIL 5.16+5.17 — should be `<Columns>` with `<CustomCardTitle>` |
| `<CustomCardTitle>` | No | Required for Related Pages | FAIL 5.17+5.22 |
| `<CenteredContainer>` | Yes (34) | — | OK |
| `<LinkArrow>` | Yes (40, 238, 352) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Project Bootstrap" (lines 56-89) duplicates `build-a-chatbot-with-livepeer-llm.mdx` §"Project Bootstrap" (lines 57-82) — same `create-next-app` invocation, same `.env.local` pattern. Both should pull from a shared snippet (e.g. `snippets/sections/nextjs-bootstrap.mdx`).
- **OVERLAP**: Common Errors entries (lines 359-374) overlap with chatbot tutorial (lines 361-376) — Cold-start, gateway 502, Next runtime caveats are repeated. Some can be cross-referenced.
- **LINK GAPS**: `@livepeer/ai` (line 75) not linked to `https://github.com/livepeer/livepeer-ai-js` or similar on first mention. `livepeer.generate.textToImage` (line 132) not linked to SDK reference. "Eleven native pipelines" (line 79) not linked to `ai-pipelines.mdx` or `aiModels.json`.
- **STRANDED**: Reader who finishes the tutorial has 4 Next Steps cards but no graduation path to Gateways (self-host) or Solutions (managed) — cross-tab gap.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | "optimisation" used correctly |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 1 | line 40: "By the end of this tutorial you'll have..." — borderline; matches tutorial-genre but technically self-ref |
| Banned heading | 1 | line 380: "## Next Steps" |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| Project Bootstrap | 22 |
| Server Action | 24 |
| UI Form Component | 23 |
| Image Gallery | 24 |
| Page Composition | 22 |
| Production Considerations | 23 |
| Common Errors | 21 |
| Next Steps | 14 — banned/weak |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 60 | bash | ✗ | ✗ | NOT-TESTED | `create-next-app` — unpinned |
| 74 | bash | ✗ | ✗ | NOT-TESTED | `npm install @livepeer/ai` — unpinned |
| 84 | bash | ✗ | ✗ | NOT-TESTED | `.env.local` |
| 102 | ts | ✗ | ✗ | NOT-TESTED | server action |
| 173 | tsx | ✗ | ✗ | NOT-TESTED | PromptForm.tsx; uses `const { useState } = React;` workaround for Mintlify constraint — works for display, but missing import comment makes example non-runnable as-is |
| 248 | tsx | ✗ | ✗ | NOT-TESTED | Gallery.tsx |
| 284 | ts | ✗ | ✗ | NOT-TESTED | next.config.ts |
| 304 | tsx | ✗ | ✗ | NOT-TESTED | page.tsx |
| 332 | bash | ✗ | ✗ | NOT-TESTED | `npm run dev` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's stated outcome is a "deployable Next.js app" but the tutorial stops at `npm run dev` (line 333). No actual deployment step (Vercel/Cloudflare/Docker). Production Considerations (line 340) names what changes but no concrete deploy command. Reader hits the wall at "now deploy it".
- **Fix step:** Add a final step (Step or new H2 after Page Composition) titled "Deploy to Vercel" with: `vercel --prod` command, env-var setup screenshot or list, and a 3-line note on what to put in `vercel.json` for server-action routing. Pattern: `huggingface-to-livepeer.mdx` Step 6b — concrete commands all the way to verification.
- **Source/exemplar:** Vercel CLI docs at https://vercel.com/docs/cli; the existing Production Considerations could be split into "before deploy" (4 bullets) and "after deploy" (rate-limit, cache, persist).

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` x2 not StyledSteps (5.21). All 9 code blocks missing icon+title (5.20). All 5 Common Errors Accordions missing `icon` (5.19). Next Steps CardGroup not Columns + plain Cards no CustomCardTitle (5.17). No Verification H2 distinct from Page Composition / "run dev".
- **Fix step:**
  1. Replace `<Steps>` at line 58 and line 98 with `<StyledSteps iconColor="var(--lp-color-accent)" titleColor="var(--accent)">` and `<StyledStep title="..." icon="...">`. Pattern: `ai-agent-on-livepeer.mdx` line 61.
  2. Add `icon="terminal" title="<file>.sh"` or `icon="code" title="<file>.ts"` to every code block (9 total).
  3. Add `icon="circle-question"` (or topical icon) to each of 5 `<Accordion>` (lines 359, 362, 365, 368, 371).
  4. Convert `<CardGroup cols={2}>` (line 382) to `<Columns cols={2}>`, rename H2 from "Next Steps" to "Related Pages" (drops banned heading), give each Card a `<CustomCardTitle icon="..." title="..." horizontal />`.
  5. Add `## Verification` H2 between "Page Composition" (line 300) and "Production Considerations" (line 340), listing the four observable signals: dev server starts, form renders, click Generate, image appears in gallery.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` lines 195-220 (`icon` + `title` on every block); `ai-agent-on-livepeer.mdx` line 61 (StyledSteps); `eliza-livepeer-plugin.mdx` lines 466-485 (AccordionGroup pattern — though those also miss icons).

### Layer 3 — Cross-page integration
- **Gap:** All 4 Next Steps cards point inside `v2/developers/`. No cross-tab graduation. No link to `@livepeer/ai` GitHub repo. No link to Vercel server-actions docs. The "AI Jobs Quickstart" graduation reference at line 40 is good but not echoed in Related Pages.
- **Fix step:** In Related Pages, replace one developer-tab card with a cross-tab card to `/v2/gateways/setup/connect` ("Self-host a gateway") and one to `/v2/solutions/managed-gateway` or `/v2/about/network/architecture` ("How the network routes inference"). Add inline link at line 75 to the `@livepeer/ai` SDK repo. Add inline link at line 79 to `ai-pipelines.mdx` ("eleven native pipelines").
- **Source/exemplar:** `v2/gateways/setup/connect.mdx`; `@livepeer/ai` SDK repo (GitHub).

### Layer 4 — Veracity and source authority
- **Gap:** `npx create-next-app@latest` (line 61) and `npm install @livepeer/ai` (line 75) unpinned. "Eleven native pipelines" (line 79) — `huggingface-to-livepeer.mdx` lines 76-147 lists ten pipelines. Number inconsistency between sibling tutorials. "30-second to multi-minute" cold-start (line 372) lacks source. No code block carries TESTED. `veracityStatus: verified` is fragile because the pinned versions aren't.
- **Fix step:**
  1. Pin Next.js: `npx create-next-app@15.x` (verify current LTS) with `{/* REVIEW: pin to exact tag */}` if unsure.
  2. Pin SDK: `npm install @livepeer/ai@<version>` — verify against the published `@livepeer/ai` registry.
  3. Reconcile "eleven" vs "ten" pipelines: cite either `ai-runner` repo's `pipelines/` directory listing or `aiModels.json`. Cross-update sibling tutorials so the number agrees.
  4. Source cold-start figure — link to `model-support.mdx` once that page has a sourced claim; if not, mark `{/* REVIEW: source cold-start window */}`.
  5. Label every code block TESTED with date or NOT-TESTED with reason.
- **Source/exemplar:** `livepeer/ai-worker/runner/src/runner/pipelines/` for pipeline count; `huggingface-to-livepeer.mdx` for the disciplined source-disclosure pattern.

### Layer 5 — Product-forward depth
- **Gap:** No maturity signal. No statement of cost for production deployment (per-image, per-second). No "when not to use this" section (e.g. "if you need <500ms first-token latency, hosted inference is faster", "if your images are 1024×1024+ you'll hit cold-start on the community gateway"). The "Persona 1 builder activation moment" framing (line 42) reads as internal marketing rather than reader signal.
- **Fix step:**
  1. Add `<Tip>` or `<Info>` after Required Tools: "Best for: prototypes, demos, internal tools. For production scale (>100 generations/day), pair this with the Production Hardening Checklist or migrate to a paid gateway."
  2. Add §"Cost expectations" near Production Considerations: per-image cost on community gateway = free for dev; production cost varies by orchestrator selection (cite Solutions tab for ranges).
  3. Replace "Persona 1 builder activation moment" copy at line 42 with reader-signal copy: "This proves the API works for a UI-shaped surface. Next: deployment, auth, rate limits."
  4. Add a `<Badge>Verified 2026-05-12</Badge>` near header CTA to give a freshness signal.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — flagship-quickstart pattern; SDK provider docs typically pair the quickstart with a "Best for" block.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 4 / INFO 2
**Critical findings (1–5)**:
1. Raw `<Steps>` x2 not StyledSteps (5.21) — pattern fixed in sibling `ai-agent-on-livepeer.mdx`.
2. All 9 code blocks missing `icon` + `title` (5.20).
3. 5 Common Errors Accordions missing `icon` (5.19).
4. Next Steps banned heading + CardGroup not Columns + plain Cards (3.2, 5.16, 5.17, 5.22).
5. Zero cross-tab graduation links (4.10, 7.6). No deployment step or Verification H2.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace `<Steps>` blocks (lines 58, 98) with `<StyledSteps iconColor="var(--lp-color-accent)" titleColor="var(--accent)">` and `<StyledStep title icon>`; import `StyledSteps, StyledStep` from `/snippets/components/displays/steps/Steps.jsx` | 30, 58-90, 98-163 | HIGH | M | check 5.21; `ai-agent-on-livepeer.mdx` line 32, 61 |
| 2 | Add `icon` + `title` to all 9 fenced code blocks: bash → `icon="terminal" title="install.sh"`, ts/tsx → `icon="code" title="actions.ts"` etc. | 60, 74, 84, 102, 173, 248, 284, 304, 332 | HIGH | M | check 5.20; `huggingface-to-livepeer.mdx` line 195 |
| 3 | Add `icon="circle-question"` to each `<Accordion>` | 359, 362, 365, 368, 371 | HIGH | S | check 5.19 |
| 4 | Convert `<CardGroup cols={2}>` (line 382) to `<Columns cols={2}>`; rename §"Next Steps" → §"Related Pages"; give each `<Card>` a `<CustomCardTitle icon="..." title="..." horizontal />`; description ≤10 words | 380-395 | HIGH | M | check 5.16+5.17+5.22; `huggingface-to-livepeer.mdx` lines 599-614 |
| 5 | Rename §"Required Tools" → §"Prerequisites" to match tutorial matrix | 46 | MEDIUM | S | check 4.5+5.2 |
| 6 | Add `## Verification` H2 between "Page Composition" (300) and "Production Considerations" (340) listing 4 observable signals | new H2 | MEDIUM | M | tutorial matrix Verification requirement |
| 7 | Replace one developer-tab Next Steps card with a Gateways cross-tab card; add one Solutions or About card for ≥3 cross-tab coverage | Related Pages | HIGH | S | check 4.10+7.6 |
| 8 | Remove legacy `status: current` from frontmatter | 25 | MEDIUM | S | check 5.7 |
| 9 | Pin `create-next-app` and `@livepeer/ai` to exact versions; add `{/* REVIEW: pin */}` if unverified | 61, 75 | HIGH | S | check 2.D3+6.8 |
| 10 | Reconcile "eleven native pipelines" (line 79) with sibling tutorials that say "ten" — cite `livepeer/ai-worker/runner/src/runner/pipelines/` and use one number | 79 | HIGH | S | check 6.1+6.4 |
| 11 | Add inline link at line 75 to `@livepeer/ai` SDK GitHub repo on first mention | 75 | MEDIUM | S | check 2.D2+6.10 |
| 12 | Label every code block TESTED (date) or NOT-TESTED (reason) | 9 blocks | MEDIUM | M | check 6.2 |
| 13 | Add deployment step (e.g. `vercel --prod`) before Production Considerations, OR explicit hand-off to a Vercel deploy guide | new step or note | MEDIUM | M | layer 1 |
| 14 | Add `<Info>` "Best for / When not to use" callout near top to set production-readiness expectation | after line 54 | INFO | M | layer 5 |
| 15 | Hoist Next.js bootstrap to a shared snippet shared with chatbot tutorial (lines 56-89 → snippet) | 56-89 | INFO | M | check 5.15 + 4.8 |
| 16 | Add `pageVariant: quickstart` | frontmatter | INFO | S | check 1.3 |
