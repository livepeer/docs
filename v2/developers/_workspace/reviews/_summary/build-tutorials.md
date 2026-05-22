# Section summary: build/tutorials — A8 + A9 combined

**Pages in scope**: 14 (all tutorials in `v2/developers/build/tutorials/`)
**Pages reviewed**: 14 (A8 = 7 first half; A9 = 7 second half)
**Review date**: 2026-05-11
**Reviewer**: agent A9 (combined with A8)

## Verdict distribution (all 14 tutorials)

- PASS: 0
- MINOR: 0
- MODERATE: 3 (huggingface-to-livepeer, huggingface-to-livepeer-advanced, streamplace-byoc-integration)
- MAJOR: 10
- NEEDS WORK: 0
- EMPTY-STUB: 0
- IPFS borderline (MODERATE-MAJOR — placed under MODERATE based on size+scope)

Revised: 3 MODERATE + 11 MAJOR after recount including ipfs-video-integration as MODERATE. To keep this honest with the agent's verdict outputs, the distribution is:

- MODERATE: 4 (huggingface-to-livepeer, huggingface-to-livepeer-advanced, streamplace-byoc-integration, ipfs-video-integration)
- MAJOR: 10

## Per-page verdicts (A9's 7 only)

| Page (A9) | Verdict | Severity (C/H/M/I) | Top critical finding |
|---|---|---|---|
| `huggingface-to-livepeer-advanced.mdx` | MODERATE | 1/5/6/4 | Broken Related Pages link to `/v2/developers2/build/tutorials/huggingface-to-livepeer` (line 1186); `purpose: explain` mismatch; missing `veracityStatus`; CardGroup not Columns; H3-per-Step not StyledSteps |
| `ipfs-video-integration.mdx` | MODERATE | 0/7/5/3 | 4 frontmatter fields missing; 6 code blocks missing icon+title; hardcoded hex `#2d9a67`; no Common Errors; no Verification |
| `low-latency-live-streaming-app.mdx` | MAJOR | 0/8/5/3 | H2 "Next Steps" banned (3.2); 7 code blocks missing icon+title; 5 Accordions missing icon; raw `<Steps>` not StyledSteps; non-standard `const { useState } = React;` |
| `multi-tenant-billing-with-pymthouse.mdx` | MAJOR | 0/9/5/3 | H2 "Next Steps" banned; 2 raw `<Steps>` not StyledSteps; 2 raw markdown tables; 7 code blocks missing icon+title; veracityStatus contradicts in-body Warning |
| `streamplace-byoc-integration.mdx` | MODERATE | 0/7/5/4 | pageType `tutorial` mismatches content (router page); purpose `build` mismatch; orphan closing paragraph references `process_frame()` not present; 2 raw markdown tables |
| `token-gated-video.mdx` | MAJOR | 2/7/5/3 | **CRITICAL: Studio refs at lines 48, 56 (project rule 3)**; 4 frontmatter fields missing; 6 code blocks missing icon+title; hardcoded hex `#2d9a67`; no Common Errors |
| `vod-upload-and-playback.mdx` | MAJOR | 0/9/5/3 | H2 "Next Steps" banned; raw `<Steps>` not StyledSteps; 2 raw markdown tables; 9 code blocks missing icon+title; 5 Accordions missing icon; non-standard React import |

## Aggregate severity totals across all 14 tutorials

| Severity | A8 total | A9 total | Combined |
|---|---|---|---|
| CRITICAL | 1 | 3 | **4** |
| HIGH | 45 | 52 | **97** |
| MEDIUM | 28 | 36 | **64** |
| INFO | 14 | 23 | **37** |

CRITICAL breakdown (4 total):
- A8 (1): broken `/v2/developers2/` Related Pages links in `huggingface-to-livepeer.mdx` (lines 602, 611) — pointing to `huggingface-to-livepeer-advanced` and `comfystream-quickstart`.
- A9 (3): broken `/v2/developers2/` Related Pages link in `huggingface-to-livepeer-advanced.mdx` (line 1186); 2 Studio references in `token-gated-video.mdx` (lines 48, 56) violating project rule 3.

## Top cross-page patterns across all 14 tutorials

### 1. Code blocks missing `icon` + `title` (5.20) — 12/14 pages
Only `huggingface-to-livepeer.mdx` (A8) and `huggingface-to-livepeer-advanced.mdx` (A9) have icon+title on every code block — best-in-batch.

The other 12 pages have ALL their code blocks bare:
- ai-agent-on-livepeer (6 blocks)
- ai-image-generation-app (9 blocks)
- build-a-chatbot-with-livepeer-llm (6 blocks)
- build-a-naap-plugin (14 blocks)
- build-a-vtuber-avatar-pipeline (multiple)
- eliza-livepeer-plugin (16 blocks)
- ipfs-video-integration (6 blocks)
- low-latency-live-streaming-app (7 blocks)
- multi-tenant-billing-with-pymthouse (7 blocks)
- streamplace-byoc-integration (N/A — no code, but page is mis-classified)
- token-gated-video (6 blocks)
- vod-upload-and-playback (9 blocks)

**Total bare code blocks across the section: ~95.** Largest single bulk-fix opportunity in the entire developers/ tab.

### 2. Raw `<Steps>` instead of `<StyledSteps>` (5.21) — 8/14 pages
Pages using raw `<Steps>`: ai-image-generation-app, build-a-chatbot-with-livepeer-llm, build-a-naap-plugin (x3), build-a-vtuber-avatar-pipeline (x2), eliza-livepeer-plugin (x4), low-latency-live-streaming-app, multi-tenant-billing-with-pymthouse (x2), vod-upload-and-playback.

Pages using `<StyledSteps>` correctly: ai-agent-on-livepeer (sibling A8 fix), ipfs-video-integration, token-gated-video. The latter two share a `#2d9a67` hardcoded-hex bug in `iconColor`.

Pages using neither (H-per-step pattern instead): huggingface-to-livepeer, huggingface-to-livepeer-advanced (design call shared across both).

### 3. Related Pages: CardGroup not Columns + no CustomCardTitle (5.16/5.17/5.22) — 13/14 pages
ALL pages except `huggingface-to-livepeer.mdx` and `huggingface-to-livepeer-advanced.mdx` (which still use CardGroup but include `arrow horizontal` correctly) use `<CardGroup cols={2}>` with direct `title=` attribute on each Card. No page uses `<Columns cols={2}>` + `<CustomCardTitle>` per rubric.

### 4. H2 "Next Steps" banned heading (3.2) — 8/14 pages
Pages with banned heading: ai-agent-on-livepeer (NO — uses "Related Pages" — PASS), ai-image-generation-app, build-a-chatbot-with-livepeer-llm, build-a-naap-plugin, build-a-vtuber-avatar-pipeline, eliza-livepeer-plugin, low-latency-live-streaming-app, multi-tenant-billing-with-pymthouse, streamplace-byoc-integration, vod-upload-and-playback.

Pages using "Related pages" (correct): ai-agent-on-livepeer, huggingface-to-livepeer, huggingface-to-livepeer-advanced, ipfs-video-integration, token-gated-video.

### 5. Accordions missing `icon` prop (5.19) — 6/14 pages
Pages with at least one `<Accordion>` lacking `icon`: ai-image-generation-app, build-a-chatbot-with-livepeer-llm, build-a-naap-plugin, eliza-livepeer-plugin, low-latency-live-streaming-app, multi-tenant-billing-with-pymthouse, vod-upload-and-playback.

Pages with every Accordion correctly iconed: huggingface-to-livepeer (15 accordions), huggingface-to-livepeer-advanced (15 accordions) — exemplary.

Pages with no Accordions (Common Errors gap): ipfs-video-integration, token-gated-video, streamplace-byoc-integration.

### 6. Raw markdown tables instead of `<StyledTable>` (5.23) — 5/14 pages
Pages with raw markdown tables: low-latency-live-streaming-app (1), multi-tenant-billing-with-pymthouse (2), streamplace-byoc-integration (2), vod-upload-and-playback (2). Plus A8: build-a-vtuber-avatar-pipeline (1).

Pages using `<StyledTable>` correctly: huggingface-to-livepeer (4), huggingface-to-livepeer-advanced (5), token-gated-video (1).

### 7. Missing required frontmatter fields (1.1/1.4/1.6/1.7/1.8) — 6/14 pages
Pages missing `purpose`/`complexity`/`lifecycleStage`/`veracityStatus` (some combination of 4): ai-agent-on-livepeer (partial), ai-image-generation-app (most), build-a-chatbot-with-livepeer-llm (most), build-a-naap-plugin (most), build-a-vtuber-avatar-pipeline (most), eliza-livepeer-plugin (most), ipfs-video-integration (4 missing), token-gated-video (4 missing).

A9-built pages (low-latency, multi-tenant, streamplace, vod) have all required fields present.

### 8. Legacy `status:` field present — 12/14 pages
Every tutorial except huggingface-to-livepeer (`status: draft` — also wrong, contradicts published location) and huggingface-to-livepeer-advanced (same) carries `status: current`. All 14 pages have the legacy field in some form.

### 9. Unpinned installs / versions (2.D3 + 6.8) — 12/14 pages
Pages with unpinned `npm install`, `create-next-app@latest`, Docker `latest`, SDK alpha tags: virtually every tutorial except partial pinning on huggingface-to-livepeer-advanced (Path 2 pins `ai-runner v0.14.0`, `live-base-57efd92`).

Most common offenders: `create-next-app@latest`, `@livepeer/react`, `livepeer` SDK, `tus-js-client`, `@web3-storage/w3up-client`, `@lit-protocol/lit-node-client`, `livepeer/ai-runner:latest`.

### 10. Zero cross-tab graduation links (4.10/7.6) — 10/14 pages
Pages with ≥3 cross-tab Related Pages cards: 0 of 14. Pages with 1-2 cross-tab cards: huggingface-to-livepeer (2 orchestrator), huggingface-to-livepeer-advanced (3 orchestrator), low-latency-live-streaming-app (1 gateway), streamplace-byoc-integration (1 solutions).

Pages with 0 cross-tab cards: ipfs-video-integration, token-gated-video, vod-upload-and-playback, multi-tenant-billing-with-pymthouse, plus most of A8 set.

### 11. No Verification H2 / no explicit success criteria (5.2) — 9/14 pages
Pages with explicit "Verification" / "Confirm the loop" / similar H2: huggingface-to-livepeer (Step 7 "Confirm the loop is closed"). All others fold verification into the final step or omit it entirely.

A9 specifically: ipfs-video-integration, low-latency-live-streaming-app, multi-tenant-billing-with-pymthouse, token-gated-video, vod-upload-and-playback all need a §"Verification" H2.

### 12. ASCII flow / sequence as fenced text instead of Mermaid (5.27) — 5/14 pages
Pages with ASCII sequence/flow that should be Mermaid: ipfs-video-integration (line 42-44), multi-tenant-billing-with-pymthouse (line 74-90), token-gated-video (line 42-44), build-a-vtuber-avatar-pipeline (lines 62-70), and partial in huggingface tutorials (decision flow IS Mermaid but doesn't import `MermaidColours.jsx`).

### 13. Non-standard React import `const { useState } = React;` — 2/14 pages
**Verified runtime fragility.** `low-latency-live-streaming-app.mdx` (lines 158, 240) and `vod-upload-and-playback.mdx` (lines 177, 338) use `const { useState } = React;` instead of standard `import { useState } from 'react';`. This pattern assumes `React` is in module scope globally, which only works with specific bundler/runtime contracts. Should be fixed in both pages.

### 14. Self-reference / "By the end of this tutorial you'll have..." pattern — 7/14 pages
Tutorial-activation pattern (line 41 in low-latency, multi-tenant, vod; sibling tutorials in A8 set use similar). Acceptable per tutorial template but borderline against 2.13 entity-led voice. Suggest a section-wide style decision: either accept "By the end..." as canonical for tutorial activation OR rewrite to entity-led ("The finished app has...").

## Cross-page duplication and link gaps in this section

### The critical broken-link family (CRITICAL 8.1 finding)

**Three Related Pages cards in two flagship HuggingFace tutorials point to `/v2/developers2/` legacy paths that don't render**:

1. `huggingface-to-livepeer.mdx` line 602: `href="/v2/developers2/build/tutorials/huggingface-to-livepeer-advanced"` — should be `/v2/developers/build/tutorials/huggingface-to-livepeer-advanced`
2. `huggingface-to-livepeer.mdx` line 611: `href="/v2/developers2/build/tutorials/comfystream-quickstart"` — canonical path: `/v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart`
3. `huggingface-to-livepeer-advanced.mdx` line 1186: `href="/v2/developers2/build/tutorials/huggingface-to-livepeer"` — should be `/v2/developers/build/tutorials/huggingface-to-livepeer`

All three render 404 in the live site. `developers2/` is a legacy parallel directory not in docs.json. **The two HuggingFace tutorials reference each other through broken links** — readers cross-navigating between them hit dead ends. This is the most critical finding across the section.

### Bootstrap scaffold duplicated 3 ways

§"Project Bootstrap" Steps in `low-latency-live-streaming-app.mdx`, `multi-tenant-billing-with-pymthouse.mdx`, and `vod-upload-and-playback.mdx` all reprise an identical `npx create-next-app@latest --typescript --tailwind --app --src-dir --import-alias` scaffold. Could be a shared snippet.

### Asset Lifecycle / Stream Creation overlap

`vod-upload-and-playback.mdx` §"Upload Endpoints" + §"Asset Lifecycle" overlaps in structure with `low-latency-live-streaming-app.mdx` §"Stream Creation Endpoint" — both create-server-side, return-playback-id. Different artefact (Stream vs Asset) but identical pattern.

### Path 1 sibling duplication

`huggingface-to-livepeer-advanced.mdx` Path 1 (lines 311-491) reprises sibling `huggingface-to-livepeer.mdx` Steps 1-7 with subtle differences. Defensible standalone Path 1 inside the advanced tutorial, but high duplication risk if sibling diverges.

### Streamplace orphan content

`streamplace-byoc-integration.mdx` line 114 closes with "Your Streamplace BYOC container is running on the network. The same container pattern works for any Python model; swap the inference logic inside `process_frame()` and redeploy" — but the page contains no walkthrough and no `process_frame()` reference. Residual content from a different draft.

### Upstream repo / spec links missing

Across the section, the following upstream sources are named but rarely linked:
- TUS protocol → `https://tus.io/` (vod-upload-and-playback only mention)
- WHIP RFC → `https://datatracker.ietf.org/doc/draft-ietf-wish-whip/` (low-latency)
- WHEP RFC → `https://datatracker.ietf.org/doc/draft-ietf-wish-whep/` (low-latency)
- Lit Protocol docs → `https://developer.litprotocol.com/` (token-gated)
- web3.storage / w3up-client → `https://github.com/storacha/w3up` (ipfs)
- RFC 8693 (token exchange) → `https://datatracker.ietf.org/doc/html/rfc8693` (multi-tenant)
- C2PA spec → `https://c2pa.org/specifications/` (streamplace)
- AT Protocol → `https://atproto.com/specs` (streamplace)
- ERC-721 EIP → `https://eips.ethereum.org/EIPS/eip-721` (token-gated, ipfs)

Only the two HuggingFace tutorials maintain consistent upstream-repo linking discipline (§Sources accordion + inline source references).

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)

The section promises end-to-end tutorials across the five Livepeer personas: AI (5 tutorials), Video (vod, live-latency, ipfs, token-gated = 4 tutorials), HuggingFace (2 tutorials), Plugin/Integration (naap, eliza, streamplace, vtuber, multi-tenant = 5 tutorials). Cross-page reader journey is broken in three places:

- **Verification gap.** 9 of 14 tutorials have no §"Verification" H2 with explicit success criteria. Reader completes happy-path code and `npm run dev` activates the app, but can't tell whether the system is working at the protocol level. The two best veracity examples (huggingface-to-livepeer Step 7, huggingface-to-livepeer-advanced "Path N done" sub-headings) should be the template.
- **Decision-time gap.** Most tutorials open with the activation moment ("By the end of this tutorial you'll have...") but don't help the reader decide whether they should follow this path. No "When to use this vs other options" framing on most pages. Reader picks a tutorial based on title alone.
- **Cross-tab graduation gap.** ALL 14 tutorials end inside `developers/`. Reader who completes a tutorial has a working app but no signpost to: production (Gateways), managed alternative (Solutions), protocol context (About), node-op angle (Orchestrators). The section is structurally inward-looking.

**Section-level fix:** (1) Add §"Verification" H2 with 3-4 concrete success checks to the 9 tutorials missing it. (2) Add §"When to use this" Tip at top of each tutorial with 2-3 decision bullets. (3) Every Related Pages CardGroup should include ≥1 cross-tab card (gateways, solutions, about, orchestrators as appropriate).

### Layer 2 — Composition (section level)

The section has 14 pages and ~14 of the same structural violations repeated almost universally:

- 12/14 pages have code blocks missing `icon` + `title` (~95 bare blocks total).
- 8/14 pages use raw `<Steps>` instead of `<StyledSteps>`.
- 13/14 pages use `<CardGroup>` not `<Columns>`; cards lack `<CustomCardTitle>`.
- 8/14 pages have H2 "Next Steps" banned heading.
- 6/14 pages have Accordions without `icon` prop.
- 5/14 pages have raw markdown tables.
- 5/14 pages have ASCII flows that should be Mermaid.
- 6/14 pages have missing required frontmatter fields.
- 12/14 pages carry legacy `status:` field.
- 2/14 pages use non-standard `const { useState } = React;` import.
- 2/14 pages have hardcoded hex `#2d9a67` in StyledSteps `iconColor` (5.34 violation).

The two HuggingFace tutorials (huggingface-to-livepeer, huggingface-to-livepeer-advanced) are the in-section exemplars for icon+title on code blocks (30/30 between them) and Accordion icons (30/30 between them) and StyledTable usage (9/9 between them). They lack StyledSteps (use H2/H3-per-step instead — design call needed) and use CardGroup not Columns. **Use these two pages as the patch template for the other 12 on icon+title + Accordion icons + StyledTable.**

**Section-level fix:** A single propagation pass that:
1. Converts every `<CardGroup cols={2}>` Related Pages to `<Columns cols={2}>` + `<CustomCardTitle icon title horizontal />` (13 pages).
2. Adds `icon="terminal"` + `title="<filename>"` to every bash block; `icon="code"` + per-file `title=` to every ts/tsx/python/json/dockerfile block (~95 blocks).
3. Converts raw `<Steps>` to `<StyledSteps iconColor="var(--accent)" titleColor="var(--accent)">` + `<StyledStep title icon>` (8 pages); fixes hardcoded `#2d9a67` to CSS custom property (2 pages).
4. Renames "Next Steps" → "Related Pages" (8 pages).
5. Adds `icon` to every Accordion (6 pages).
6. Converts raw markdown tables to `<StyledTable variant="bordered">` (5 pages).
7. Removes legacy `status:` field (14 pages).

This is a section-wide remediation, not per-page surgery.

### Layer 3 — Cross-page integration (section level)

Inter-page graph is reasonably dense INSIDE the section but stops at the section boundary:

- **The critical broken-link family**: 3 cards in 2 flagship HuggingFace tutorials point to `/v2/developers2/` paths that 404. **Highest-priority fix in the section.**
- Zero cards across all 14 tutorials link to `/v2/about/` (protocol context).
- 1 card across all 14 tutorials links to `/v2/gateways/`.
- 1 card across all 14 tutorials links to `/v2/solutions/`.
- 5 cards across all 14 tutorials link to `/v2/orchestrators/` (all in HuggingFace tutorials).

**Upstream repos / specs**: TUS, WHIP/WHEP RFCs, Lit Protocol docs, web3.storage, RFC 8693, C2PA, AT Protocol, ERC-721 are all named without prose-level inline links on most pages. Only the two HuggingFace tutorials maintain Sources-accordion discipline.

**Section-level fix:**
1. **CRITICAL — fix the 3 broken `/v2/developers2/` links** in the HuggingFace tutorials immediately.
2. Every Related Pages CardGroup should have ≥1 cross-tab card. Pattern: 2 sibling pages + 1 prereq page + 1 cross-tab graduation card.
3. Add inline upstream-spec/repo links at first mention on every page. Standard pattern from the HuggingFace tutorials: "First mention links to repo/spec."
4. Consider a §Sources accordion footer pattern for tutorials with substantive technical claims — token-gated, ipfs, multi-tenant, low-latency would all benefit.

### Layer 4 — Veracity (section level)

Three veracity gaps repeat across the section:

- **Unpinned installs.** 12 of 14 tutorials use `create-next-app@latest`, `npm install <package>` without version, `livepeer/ai-runner:latest`, or git+https HEAD pulls. Multiple pages claim `veracityStatus: verified` while shipping unpinned commands — the claim doesn't hold.
- **No TESTED labels.** Zero pages across the section carry TESTED date+env labels on code blocks. Even the highest-veracity pages (HuggingFace tutorials with §Sources accordions) lack per-block TESTED metadata.
- **Specific verifiable claims uncited.** "Forty-five minutes to multi-tenant", "Time to first stream is under fifteen minutes", "Common in NFT video projects", "fully decentralised token-gated video pipeline" — all assertions across pages without sources.

The token-gated-video page additionally has 2 Studio references (lines 48, 56) that violate project rule 3 — CRITICAL.

**Section-level fix:**
1. Pin every install/clone to a tag or commit + add `{/* REVIEW: confirm latest tag */}` where unknown.
2. Add TESTED date+env labels to every code block (or NOT-TESTED with source-file reference).
3. Replace marketing-tone unsourced claims with sourced wording or remove.
4. **Replace "Livepeer Studio" at token-gated-video.mdx lines 48, 56 with "your Livepeer gateway provider"** — CRITICAL project-rule fix.
5. Where `veracityStatus: verified` is declared but installs are unpinned, either pin OR downgrade to `unverified` (multi-tenant-billing-with-pymthouse, low-latency-live-streaming-app, streamplace-byoc-integration, vod-upload-and-playback all need this resolution).

### Layer 5 — Product-forward depth (section level)

The section reads as a feature catalogue (here's how to do VOD, here's how to do live, here's how to gate by NFT), not a product evaluation. A developer arriving at any tutorial wants to know:

- Is this in production? (No maturity badges on any tutorial.)
- Is this the right path for me? (Most tutorials don't have a "When to use this" decision block.)
- What does it cost? (No cost signal on any tutorial.)
- What's the latency / SLO? (Only low-latency-live-streaming-app has a Latency Budget table.)
- What happens at scale? (Production Considerations sections cover hardening but not scale.)
- What can go wrong? (5 of 14 tutorials have Common Errors; rest don't.)
- Is the dependency stable? (No version pins; no maturity badges; no "tracks vX.Y.Z" framing.)

**Section-level fix:** Add to each tutorial:
1. `<Badge>` near header with maturity status: `<Badge>Production — tracks <library> v<X.Y.Z></Badge>` or `<Badge>Beta</Badge>` as appropriate.
2. §"When to use this" Tip at top with 2-3 decision bullets (when to choose this vs alternative paths).
3. §"Trade-offs" or §"Cost considerations" sub-section before Related Pages.
4. §"Security checklist" or §"Production-readiness" sub-block within Production Considerations.

The two HuggingFace tutorials and `multi-tenant-billing-with-pymthouse.mdx` already partially cover Trade-offs / Production Considerations. The other 11 tutorials need this section-wide upgrade.

## Prioritised section remediation

| # | Step | Pages affected | Effort | Severity |
|---|---|---|---|---|
| 1 | **CRITICAL** — Fix 3 broken `/v2/developers2/` Related Pages links: huggingface-to-livepeer lines 602+611, huggingface-to-livepeer-advanced line 1186 | 2 | S | CRITICAL |
| 2 | **CRITICAL** — Replace 2 Studio references in token-gated-video.mdx lines 48+56 with "Livepeer gateway provider" per project rule 3 | 1 | S | CRITICAL |
| 3 | Add `icon` + `title` to every fenced code block across the section (~95 blocks); use `icon="terminal"` for shell, `icon="code"` for ts/python/json/dockerfile, `icon="docker"` for Docker | 12 | L | HIGH |
| 4 | Convert every `<CardGroup cols={2}>` Related Pages to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon title horizontal />` | 13 | L | HIGH |
| 5 | Rename H2 "Next Steps" → "Related Pages" | 8 | S | HIGH |
| 6 | Convert raw `<Steps>` to `<StyledSteps>` + `<StyledStep title icon>` on 8 pages; replace hardcoded `iconColor="#2d9a67"` with `iconColor="var(--accent)"` on 2 pages (ipfs, token-gated) | 8 | M | HIGH |
| 7 | Add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` to 6 pages missing them; remove legacy `status:` field from all 14 | 14 | M | HIGH |
| 8 | Pin every install command: `create-next-app@<X>`, `@livepeer/react`, `livepeer` SDK, `tus-js-client`, `@web3-storage/w3up-client`, `@lit-protocol/lit-node-client`, `livepeer/ai-runner:<tag>`, alpha-SDK pins | 12 | M | HIGH |
| 9 | Add `icon` prop to every `<Accordion>` on 6 pages | 6 | S | HIGH |
| 10 | Add ≥1 cross-tab Related Pages card on every page: `/v2/gateways/`, `/v2/about/network/architecture`, `/v2/solutions/`, `/v2/orchestrators/` as appropriate | 14 | M | HIGH |
| 11 | Fix non-standard `const { useState } = React;` on `low-latency-live-streaming-app.mdx` (158, 240) and `vod-upload-and-playback.mdx` (177, 338) → standard `import { useState } from 'react';` | 2 | S | HIGH |
| 12 | Convert raw markdown tables to `<StyledTable variant="bordered">` on 5 pages (low-latency 1, multi-tenant 2, streamplace 2, vod 2, vtuber 1 = 8 tables) | 5 | M | HIGH |
| 13 | Resolve veracityStatus contradictions: pin OR downgrade to `unverified` on multi-tenant, low-latency, streamplace, vod (declares verified while unpinned) | 4 | S | HIGH |
| 14 | Add §"Verification" H2 to 9 tutorials missing explicit success criteria (ipfs, low-latency, multi-tenant, token-gated, vod + 4 A8 pages) | 9 | M | MEDIUM |
| 15 | Add Common Errors `<AccordionGroup>` to tutorials lacking one (ipfs, token-gated, streamplace) | 3 | M | MEDIUM |
| 16 | Replace ASCII flows with Mermaid diagrams using `MermaidColours.jsx`: ipfs (42-44), multi-tenant (74-90), token-gated (42-44), vtuber (62-70); add `MermaidColours` import to huggingface-to-livepeer-advanced for the decision flow | 5 | L | MEDIUM |
| 17 | Add inline upstream-spec/repo links at first mention across the section: TUS, WHIP/WHEP RFCs, Lit docs, web3.storage, RFC 8693, C2PA, AT Protocol, ERC-721 | 14 | M | MEDIUM |
| 18 | Streamplace fix: change `pageType: tutorial` → `pageType: navigation`, `purpose: build` → `purpose: orient`, `lifecycleStage: build` → `lifecycleStage: discover`; remove orphan paragraph at line 114 referencing `process_frame()` | 1 | S | MEDIUM |
| 19 | HF tutorials design call: H-per-Step pattern (huggingface-to-livepeer + huggingface-to-livepeer-advanced) — accept as multi-section infrastructure exception OR refactor to `<StyledSteps>` | 2 | L | MEDIUM |
| 20 | Add `<Badge>` maturity signals + §"When to use this" decision Tip + §"Trade-offs" sub-section to tutorials lacking these | 11 | L | MEDIUM |
| 21 | Add TESTED date+env label on every code block once installs pinned | 14 | M | MEDIUM |
| 22 | Replace `---` YAML separators with `<CustomDivider />` at opening (low-latency 39, multi-tenant 39, vod 40, ipfs n/a, token-gated n/a, streamplace 39) | 4 | S | MEDIUM |
| 23 | Decision on `<Note>` for primary content: ai-pipelines + ai-sdks-overview need 2.D7 fixes (Note → Warning or inline prose) | covered in adjacent ai-and-agents review | — | covered |
| 24 | Section-wide style decision: accept "By the end of this tutorial you'll have..." as canonical tutorial-activation pattern OR rewrite all 7 pages to entity-led voice | 7 | M | INFO |
| 25 | Consider shared bootstrap snippet for `npx create-next-app@latest --typescript --tailwind --app --src-dir --import-alias` (duplicated 3 ways across low-latency, multi-tenant, vod) | 3 → 1 snippet | M | INFO |
| 26 | Reduce description from 197 to ≤160 chars: huggingface-to-livepeer (4-6), huggingface-to-livepeer-advanced (4-6); minor descriptions to refine: multi-tenant 162 (borderline) | 2 | S | INFO |
| 27 | Verify OG image paths: `/snippets/assets/media/og-images/en/developers.png` (HF tutorials) vs `/snippets/assets/site/og-image/en/developers.png` (most others) — pick one canonical path and fix inconsistency | 14 | S | INFO |

## Special-focus brief checks (results)

- **REWRITE-STUB Studio verification**: ipfs-video-integration: 0 Studio refs in body (`livepeercdn.studio` URL at line 129 is a CDN host, not a Studio API/dashboard reference — acceptable). **token-gated-video: 2 Studio refs at lines 48, 56 — CRITICAL**.
- **NET-NEW tutorial structural compliance** (low-latency, multi-tenant, streamplace, vod, huggingface-advanced):
  - All declare `purpose: build` (correct, except streamplace which should be `orient`).
  - All declare `veracityStatus: verified` but most contradict via unpinned installs.
  - 4 of 5 use raw `<Steps>` not StyledSteps.
  - 4 of 5 use "Next Steps" banned heading.
  - huggingface-advanced declares `purpose: explain` (wrong for tutorial) and is the bug-shared sibling of huggingface-to-livepeer.
- **5.20 code block icon+title**: 12/14 pages FAIL. Only huggingface-to-livepeer + huggingface-to-livepeer-advanced PASS. ~95 bare blocks section-wide.
- **5.21 StyledSteps vs raw Steps**: 8 pages have raw Steps; 3 use StyledSteps correctly (with 2 hardcoded-hex bugs); 2 use H-per-step pattern (design call).
- **2.12 em-dashes**: 0 hits across all 14 pages. PASS section-wide.
- **2.D3 versions stated explicitly**: 12 of 14 pages have unpinned installs. SYSTEMIC FAIL.
- **5.16 Related Pages footer**: All 14 pages have a Related Pages or "Next Steps" footer; 13 of 14 use `<CardGroup>` not `<Columns>`.
- **2.16 deprecated terms**: 0 hits. "broadcaster" in low-latency-live-streaming-app.mdx refers to the WebRTC stream-source role (term of art in WHIP/WebRTC), not the deprecated Livepeer network role — defensible but worth a voice-rule note for future audits.
- **8.1 broken links**: 3 confirmed `/v2/developers2/` paths in HuggingFace tutorial pair — CRITICAL.
- **Studio rule (project rule 3)**: 2 confirmed violations in token-gated-video.mdx — CRITICAL.
- **`const { useState } = React;` non-standard pattern**: 4 occurrences across 2 pages — HIGH (runtime fragility, not stylistic).

## Combined verdict

The section is **MAJOR-grade across the board**. 10 of 14 pages MAJOR; 4 of 14 MODERATE; 0 MINOR/PASS. The two HuggingFace tutorials are the strongest in source discipline and component compliance but are dragged to MODERATE by the developers2 broken-link family and shared design issues (purpose mismatch, status: draft, H-per-step pattern). The other 12 pages share the same ~10 structural violations and need a section-wide remediation pass — not 14 separate fixes.

**Section-level critical-path:**
1. Fix the 3 broken `/v2/developers2/` links (CRITICAL).
2. Fix the 2 Studio refs in token-gated-video.mdx (CRITICAL).
3. Bulk-add icon+title to ~95 code blocks (HIGH).
4. Bulk-convert CardGroup → Columns + CustomCardTitle (HIGH).
5. Bulk-convert raw `<Steps>` → `<StyledSteps>` (HIGH).
6. Bulk-rename "Next Steps" → "Related Pages" (HIGH).
7. Bulk-pin install commands (HIGH).
8. Resolve frontmatter gaps + legacy `status:` field (HIGH).

After those 8 bulk actions, the section moves to MINOR/MODERATE; depth-quality work (Verification sections, Mermaid replacements, cross-tab cards, decision Tips, Badge maturity signals) is the second pass.
