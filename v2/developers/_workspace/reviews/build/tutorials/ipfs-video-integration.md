# Review: ipfs-video-integration.mdx

**Page**: `v2/developers/build/tutorials/ipfs-video-integration.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A9
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: — (absent — see 1.4)
**Bytes**: 6,070
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Has legacy `status: current` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` (line 17) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field absent. Canonical for tutorial: `build` or `integrate` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 18) |
| 1. Frontmatter | 1.6 | complexity | FAIL | absent |
| 1. Frontmatter | 1.7 | lifecycleStage | FAIL | absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | absent |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | line 4-5: "Upload a video to IPFS and play it back via Livepeer..." subject-first, 158 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields (lines 12-16) |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (web3.storage, decentralised video, NFT video) |
| 1. Frontmatter | 1.14 | audience match | PASS | developer register |
| 2. Voice | 2.1 | UK English | PASS | "decentralised" used (line 5, 33); only US-spelling hits are CenteredContainer (false-positive zone) |
| 2. Voice | 2.2 | Banned words | PASS | 0 |
| 2. Voice | 2.3 | Banned phrases | PASS | 0 |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | line 33: "Combining IPFS with Livepeer creates a fully decentralised video pipeline..." subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer register; typescript code, npm install |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 hits. Uses `--` (lines 80, 121) which renders as en-dash in HTML — not strictly em-dash but inconsistent style |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Livepeer transcodes...", "The Player delivers..." |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | PASS | Tip (28) + Prerequisites + code in Step 1 |
| 2. Voice | 2.D2 | API methods linked | MIXED | `client.asset.create`, `client.asset.get`, `signAccessJwt` not linked to GitHub or SDK docs. `tus-js-client`, `@web3-storage/w3up-client` not linked |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `npm install livepeer @web3-storage/w3up-client` (line 46) — no version pins |
| 2. Voice | 2.D4 | Errors in main | FAIL | No Common Errors section. Step 3 has bare-bones "throw new Error" but no troubleshooting Accordion |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | PASS | no `<Note>` used |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Prerequisites" (24), "Build the pipeline" (20), "Storing the CID on-chain (optional)" (22), `Related pages` (exempt) |
| 3. Headings | 3.2 | Banned/weak | PASS | |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Store and play videos on IPFS" — 6 words; sidebarTitle "IPFS Video Integration" is 3 words — preferred |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | upload + playback via IPFS |
| 4. Structure | 4.2 | Purpose test | PASS | "This page lets the developer upload a video to IPFS and play it back through Livepeer" |
| 4. Structure | 4.3 | PREV/NEXT | PASS | Related Pages routes to VOD asset upload + Token-Gated tutorial |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | PASS | §Prerequisites (line 39) lists Node version, livepeer.com API key, web3.storage token |
| 4. Structure | 4.6 | Out-of-scope | FAIL | No explicit out-of-scope. Reader doesn't know if this covers re-uploading existing assets or only fresh uploads |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | MIXED | Step 2 (line 84-100) asset creation overlaps with `vod-upload-and-playback.mdx` lines 117-136 — but signature is different (URL-based import vs TUS upload). Defensible split |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | Related Pages has 2 cards (line 167, 170), both internal `/v2/developers/`. Zero cross-tab. Should link to `/v2/about/network/architecture` or `/v2/solutions/...` |
| 4. Structure | 4.11 | Discord test | MIXED | Provides 4 Steps + on-chain NFT metadata example; doesn't address common failure modes (web3.storage auth, transcode failures, IPFS gateway latency) |
| 4. Structure | 4.12 | Page size | MIXED | 6.0 KB — light for tutorial; substantive threshold 5 KB. Minimum viable |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | Page introduces IPFS+Livepeer as combination but doesn't name trade-offs: cost of IPFS pinning vs centralised storage, w3s.link gateway availability, latency of fetching from IPFS during transcode |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | bash, typescript, tsx, json all tagged |
| 4. Structure | 4.18 | Code-first opening | PASS | |
| 4. Structure | 4.19 | Errors in main | FAIL | No Common Errors / Troubleshooting |
| 4. Structure | 4.20 | API methods linked | MIXED | `client.asset.create` not linked to SDK docs/source |
| 5. Layout | 5.1 | Correct template | MIXED | Has Prerequisites + StyledSteps + Related Pages; missing Verification and Common Errors |
| 5. Layout | 5.2 | Required sections | MIXED | Prerequisites PASS; Steps PASS (StyledSteps); Verification FAIL (no §Verification H2 or "How to confirm" block); Related Pages PASS |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | PASS | StyledSteps for procedural; fenced code for technical |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 19 `status: current` — legacy field |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | StyledSteps PASS but code blocks lack icon+title; no Common Errors; ASCII flow at line 42-44 instead of Mermaid |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | N/A | |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | "Related pages" H2 (164) with `<CardGroup>` — should be `<Columns>` |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (line 166); cards lack `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | N/A | no Accordions used (page would benefit from one for Common Errors) |
| 5. Layout | 5.20 | Code icon+title | FAIL | None of the 6 code blocks (lines 45, 56 inside StyledStep, 84, 103, 125, 149) have `icon` or `title` |
| 5. Layout | 5.21 | StyledSteps used | PASS | `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">` (line 53) with 4 StyledSteps. Hardcoded hex `#2d9a67` fails 5.34 — should be CSS custom property |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | cards lack `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | N/A | no tables |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major element | PASS | one StyledSteps |
| 5. Layout | 5.26 | CustomDivider | PASS | dividers placed correctly |
| 5. Layout | 5.27 | Mermaid | FAIL | line 42-44: ASCII flow `Viewer wallet → Lit Network → ...` is text not Mermaid. Page would benefit from a Mermaid `sequenceDiagram` showing upload → IPFS → Livepeer fetch → transcode → playback |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | FAIL | line 53: `iconColor="#2d9a67"` hardcoded hex — fails 5.34 |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Common in NFT video projects" (line 33) — unsourced. `w3s.link` gateway URL pattern given without citation to web3.storage docs |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | no TESTED labels |
| 6. Veracity | 6.3 | Deprecated API | MIXED | `@web3-storage/w3up-client` API per line 58-71 — should check that `w3Client.login`, `setCurrentSpace`, `uploadFile` are still the canonical methods (the w3up-client API evolved) |
| 6. Veracity | 6.4 | Numbers real | PASS | no specific numbers |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | absent |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No version pins; `w3up-client` API surface drifts; `livepeer` SDK version unstated |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No links to web3.storage docs, IPFS docs, Livepeer SDK docs, or w3up-client repo |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | 0 cross-tab cards in Related Pages |
| 7. Nav | 7.7 | Correct lane | PASS | |
| 7. Nav | 7.8–7.12 | naming / TTL / structure | PASS | |
| 8. Links | 8.1 | Internal | PASS | inline link to webhooks guide at line 121 + access-control link at line 145 are correct paths |
| 8. Links | 8.2 | External | NOT-TESTED | livepeer.com (42), web3.storage (43) — verify both resolve |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | MIXED | 4-step happy path covered; failure modes, version pinning, cost trade-offs not |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Store and play videos on IPFS" | MIXED | 6 words |
| sidebarTitle | Yes | "IPFS Video Integration" | PASS | 3 words |
| description | Yes | "Upload a video to IPFS..." | PASS | subject-first, 158 chars |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | missing |
| complexity | No | — | FAIL | missing |
| lifecycleStage | No | — | FAIL | missing |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | missing |
| lastVerified | Yes | 2026-04-05 | PASS | unquoted |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | optional |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (7×) | Required | PASS placement |
| `<Tip>` (header CTA) | Yes (28) | Recommended | PASS |
| `<CenteredContainer>` | Yes (27) | — | wraps Tip |
| `<StyledSteps>` / `<StyledStep>` | Yes (4 steps) | Required | PASS 5.21 — but hardcoded hex `#2d9a67` (line 53) fails 5.34 |
| `<Tabs>` / `<Tab icon>` | No | — | not needed |
| `<AccordionGroup>` / `<Accordion icon>` | No | Recommended for Common Errors | FAIL — page should have a Common Errors AccordionGroup |
| `<StyledTable>` | No | N/A | no tables (page has narrative description that could be table for "trade-off comparison") |
| Fenced code with icon+title | Yes (6 blocks, 0 with icon+title) | Required | FAIL 5.20 — all 6 blocks missing both |
| `<CardGroup cols={2}>` / `<Card>` | Yes (166) | — | FAIL 5.16+5.17 — should be `<Columns>` |
| `<CustomCardTitle>` | No | Required | FAIL — uses direct `title` attribute |

## Cross-page duplication and link gaps

- **OVERLAP**: Step 2 (line 83-100) asset creation overlaps with sibling `vod-upload-and-playback.mdx` Step 2 (line 117-136). This page uses URL-based import (`url: ipfsUrl`); sibling uses TUS resumable upload. Defensible split but the relationship should be cross-linked.
- **LINK GAPS**: No link to web3.storage docs, `@web3-storage/w3up-client` repo, IPFS official docs, Livepeer SDK docs, or `asset.ready` webhook spec at the inline mention (line 121).
- **STRANDED**: Reader who completes 4 steps has a Livepeer playback ID. Related Pages routes to "Upload a Video Asset" (sibling) + "Token-Gated Video" (sibling). No graduation to Gateways for self-host, no link to NFT metadata standards beyond inline mention of ERC-721. Reader who wants to package IPFS-based assets into an NFT mint flow has no next step from this page.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | uses `--` (80, 121, 123) — en-dash style, not strictly forbidden but inconsistent with em-dash policy |
| US spellings | 0 | only `CenteredContainer` false-positive |
| Banned words | 0 | |
| Banned phrases | 0 | |
| Banned constructions | 0 | |
| Question headings | 0 | |
| Studio refs | 0 | line 129: `https://livepeercdn.studio/asset/hls/...` — this is a CDN URL, not Studio API/dashboard. Acceptable; no UI-level Studio reference |
| Self-reference | 1 | line 35: "What you will build:" — minor |
| Banned heading | 0 | |
| Deprecated terms | 0 | |

## Heading Score Table

| Heading | Total |
|---|---|
| Prerequisites | 24 |
| Build the pipeline | 20 |
| Storing the CID on-chain (optional) | 22 |
| Related pages | exempt |

All headings PASS 3.1 (minimum 20).

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 45 | bash | ✗ | ✗ | NOT-TESTED | `npm install livepeer @web3-storage/w3up-client` — unpinned |
| 56 | typescript (in StyledStep) | ✗ | ✗ | NOT-TESTED | Step 1 upload |
| 84 | typescript (in StyledStep) | ✗ | ✗ | NOT-TESTED | Step 2 asset.create |
| 103 | typescript (in StyledStep) | ✗ | ✗ | NOT-TESTED | Step 3 polling |
| 125 | tsx (in StyledStep) | ✗ | ✗ | NOT-TESTED | Step 4 Player |
| 149 | json | ✗ | ✗ | NOT-TESTED | NFT metadata |

All 6 blocks FAIL 5.20. All NOT-TESTED.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is "a video on IPFS, transcoded by Livepeer, playable via the Player". Page delivers happy-path steps but doesn't tell the reader what success looks like beyond `console.log` outputs. No verification block: "the playback URL should return HTTP 200 with HLS manifest", "the CID should resolve at `https://w3s.link/ipfs/<cid>` within ~30 seconds of upload", "transcoding typically takes 1-5 minutes". Reader runs the code, sees no errors, but can't confirm the pipeline actually works until they try to play back — and even then, no clarity on what could go wrong.
- **Fix step:** Add §"Verification" H2 after the StyledSteps (before "Storing the CID on-chain"). Three checks: (1) `curl https://w3s.link/ipfs/<cid>` returns 200; (2) `asset.status.phase === 'ready'` within 5 minutes; (3) HLS manifest at `https://livepeercdn.studio/asset/hls/<playbackId>/index.m3u8` returns 200 + valid manifest. Each check with sample curl + expected response.
- **Source/exemplar:** Sibling `vod-upload-and-playback.mdx` Common Errors Accordion + `huggingface-to-livepeer.mdx` Step 7 verification.

### Layer 2 — Composition
- **Gap:** Page has StyledSteps (good) but misses:
  1. Code blocks lack `icon` + `title` (5.20) — 6 blocks all bare.
  2. No Common Errors AccordionGroup (4.19 / 2.D4).
  3. Related Pages uses CardGroup not Columns (5.16/5.17).
  4. ASCII text flow at line 42-44 should be Mermaid (5.27 recommendation).
  5. StyledSteps uses hardcoded hex `#2d9a67` (line 53) instead of CSS custom property — fails 5.34.
  6. No StyledTable for asset lifecycle phases or IPFS gateway trade-offs.
- **Fix step:**
  1. Add `icon="terminal"` + `title="install.sh"` to line 45; `icon="code"` + `title="step1-upload.ts"` etc. to each StyledStep code block; `icon="code"` + `title="nft-metadata.json"` to line 149.
  2. Add `<AccordionGroup>` before §"Storing the CID on-chain" with 5 common errors: web3.storage auth fail, CID not resolving, asset stuck at `waiting`/`processing`, playback returns 403, IPFS gateway timeout. Each Accordion needs `icon` prop.
  3. Convert `<CardGroup cols={2}>` (166) to `<Columns cols={2}>` with `<CustomCardTitle icon title horizontal />`.
  4. Replace ASCII flow at line 42-44 with a Mermaid `flowchart LR` showing `Browser → web3.storage → IPFS → Livepeer (fetch) → Transcode → HLS CDN → Player`. Use `MermaidColours.jsx`.
  5. Replace `iconColor="#2d9a67"` with `iconColor="var(--accent)"` or another CSS token.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` icon+title pattern; `low-latency-live-streaming-app.mdx` Common Errors Accordion.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links. No link to web3.storage / IPFS / w3up-client docs. Inline mention of `asset.ready` webhook (line 121) links to `live-events` page (correct) but no link to webhook setup. NFT metadata example references ERC-721 without linking to a reference.
- **Fix step:**
  1. Add cross-tab Related Pages cards: `/v2/gateways/setup/connect` ("Run your own gateway"), `/v2/about/network/architecture` ("How Livepeer transcoding works").
  2. Add inline links at first mention: web3.storage → `https://web3.storage/docs/`, `w3up-client` → `https://github.com/storacha/w3up`, IPFS gateway pattern → `https://docs.ipfs.tech/concepts/ipfs-gateway/`.
  3. Add link to `/v2/developers/build/video/live-events` for the webhook subscription path at line 121.
  4. Add link to ERC-721 metadata standard (`https://eips.ethereum.org/EIPS/eip-721`) at line 149 prose.
- **Source/exemplar:** `low-latency-live-streaming-app.mdx` Next Steps includes 4 cards across tabs.

### Layer 4 — Veracity and source authority
- **Gap:**
  1. `@web3-storage/w3up-client` API surface (lines 58-71) is version-dependent — package evolved through multiple major versions. Without a pin, code will silently drift.
  2. `livepeer` SDK (line 46, 86) version unstated.
  3. "Common in NFT video projects" (line 33) — unsourced.
  4. No TESTED labels.
  5. `veracityStatus` absent.
- **Fix step:**
  1. Pin npm install: `npm install livepeer@<pinned-version> @web3-storage/w3up-client@<pinned-version>`. Add `{/* REVIEW: confirm latest stable */}`.
  2. Replace "Common in NFT video projects" with sourced statement OR remove the assertion.
  3. Add `veracityStatus: verified` (after pinning) or `unverified` (current state).
  4. Add TESTED date+env to each code block once pinned.
  5. Cite source for `w3s.link` URL pattern (web3.storage docs).
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` Path 2 pyproject.toml pins `ai-runner v0.14.0` (line 560) — same discipline should apply here.

### Layer 5 — Product-forward depth
- **Gap:**
  1. No "When to use IPFS vs S3/CDN" framing. Reader doesn't know if they should integrate IPFS — page assumes the decision is already made.
  2. No cost signal. IPFS pinning costs (web3.storage tiers, alternative pinning services like Pinata, Filecoin deals) are absent.
  3. No latency signal. Page says nothing about IPFS fetch latency during transcode (typically slower than S3 cold-fetch).
  4. No "What this isn't for" — does this work for live streams? (No.) For multi-gigabyte files? (Maybe, depending on w3up-client TUS support.)
  5. Reader scanning to evaluate: page has no "Maturity" or "Use case" signal at top.
- **Fix step:**
  1. Add §"When to use this" or a `<Tip>` after the opening Tip: "Use this pattern when permanence + content-addressing matter (NFT mints, dApp archives, censorship-resistant publishing). For SaaS VOD without web3 framing, the direct upload tutorial is faster."
  2. Add §"Trade-offs" Accordion before Related Pages: "Cost — web3.storage free tier covers <X GB", "Latency — IPFS fetch adds ~5-30s to transcode kick-off vs S3 URL", "Permanence — IPFS pins must be refreshed; web3.storage handles this on paid tiers", "Live — IPFS pattern is VOD-only; live streams require S3 or direct ingest".
  3. Add `<Badge>` near header: `<Badge>Tutorial — VOD only; for live streams see Low-Latency Streaming</Badge>`.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` decision-block pattern.

## Summary

**Verdict**: MODERATE
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 3
**Critical findings (1–5)**:
1. 4 frontmatter fields missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (1.1, 1.4, 1.6, 1.7, 1.8).
2. All 6 code blocks lack `icon` + `title` (5.20).
3. Hardcoded hex `#2d9a67` in StyledSteps (line 53) — fails 5.34 (CSS custom properties only).
4. No Common Errors / Troubleshooting Accordion (4.19/2.D4).
5. No Verification section — reader can't confirm pipeline works (4.x, tutorial scaffold).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter; remove `status: current` | 17-21 | HIGH | S | check 1.1+1.4+1.6+1.7+1.8 |
| 2 | Add `icon="terminal" title="install.sh"` to line 45 npm install; add `icon="code"` + per-step `title="...ts"` to lines 56, 84, 103, 125, 149 | 45, 56, 84, 103, 125, 149 | HIGH | M | check 5.20 |
| 3 | Replace hardcoded `iconColor="#2d9a67"` (line 53) with `iconColor="var(--accent)"` or another CSS token | 53 | HIGH | S | check 5.34 |
| 4 | Add §"Verification" H2 after StyledSteps with 3 verification checks (CID resolves, asset ready, HLS manifest returns 200) | after 141 | HIGH | M | tutorial matrix |
| 5 | Add `<AccordionGroup>` §"Common Errors" with 5 entries (web3.storage auth, CID not resolving, asset stuck, playback 403, IPFS gateway timeout); each Accordion has `icon` prop | new section | HIGH | M | check 4.19+2.D4 |
| 6 | Convert `<CardGroup cols={2}>` (166) to `<Columns cols={2}>`; wrap each Card title in `<CustomCardTitle icon title horizontal />` | 166-173 | HIGH | M | check 5.16+5.17+5.22 |
| 7 | Add ≥1 cross-tab card to Related Pages (`/v2/gateways/setup/connect` and `/v2/about/network/architecture`) | Related Pages | HIGH | S | check 4.10+7.6 |
| 8 | Pin npm install: `livepeer@<version> @web3-storage/w3up-client@<version>`; add `{/* REVIEW: confirm latest stable */}` | 45 | HIGH | S | check 2.D3+6.8 |
| 9 | Replace ASCII flow at line 42-44 with Mermaid `flowchart LR` using `MermaidColours.jsx`; add import | 23, 42-44 | MEDIUM | M | check 5.27 |
| 10 | Add `<StyledTable>` to compare IPFS vs traditional CDN trade-offs (cost, latency, permanence, live support) OR add §"Trade-offs" Accordion | new section before Related Pages | MEDIUM | M | layer 5 |
| 11 | Add inline links at first mention: web3.storage docs, w3up-client repo, IPFS gateway concept, ERC-721 EIP | 33, 35, 46, 75, 149 | MEDIUM | S | check 6.10 |
| 12 | Shorten title from "Store and play videos on IPFS" to 1-3 words concept-derived OR keep sidebarTitle and rewrite title | 2 | MEDIUM | S | check 3.6 |
| 13 | Add TESTED date+env to every code block once pinned | 6 blocks | MEDIUM | M | check 6.2 |
| 14 | Add `<Badge>` near header signalling "VOD-only" maturity | after Tip | INFO | S | layer 5 |
| 15 | Source the "Common in NFT video projects" claim (line 33) or remove | 33 | INFO | S | check 6.1 |
| 16 | Add §"When to use this" Tip before Prerequisites with decision criteria | after CenteredContainer Tip | INFO | M | layer 5 |
