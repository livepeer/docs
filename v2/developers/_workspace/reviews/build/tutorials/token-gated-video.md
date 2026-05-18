# Review: token-gated-video.mdx

**Page**: `v2/developers/build/tutorials/token-gated-video.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A9
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: — (absent — see 1.4)
**Bytes**: 9,191
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Has legacy `status: current` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` (line 17) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | absent |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 18) |
| 1. Frontmatter | 1.6 | complexity | FAIL | absent |
| 1. Frontmatter | 1.7 | lifecycleStage | FAIL | absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | absent |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | line 4-5: "Gate Livepeer video playback behind NFT ownership using Lit Protocol..." subject-first, 154 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords | PASS | specific |
| 1. Frontmatter | 1.14 | audience match | PASS | developer register |
| 2. Voice | 2.1 | UK English | PASS | only CenteredContainer false-positive (and "centralised" line 47 — UK form correct) |
| 2. Voice | 2.2 | Banned words | PASS | 0 |
| 2. Voice | 2.3 | Banned phrases | PASS | 0 |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | line 34: "Token-gated video combines Lit Protocol's decentralised access control..." subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | Lit Protocol, JWT, ACC all canonical |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 (uses `--` style at line 47, 80, 123, 150 — en-dash style) |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Token-gated video combines...", "A viewer proves NFT ownership..." |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | PASS | Tip → architecture flow → Prerequisites → first code in Step 1 |
| 2. Voice | 2.D2 | API methods linked | MIXED | `signAccessJwt` from `@livepeer/core/crypto` (140) not linked. `LitNodeClient` from `@lit-protocol/lit-node-client` not linked. `client.signingKey.create` (78) not linked to SDK docs |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `npm install livepeer @livepeer/react @lit-protocol/lit-node-client ethers` (61) — no version pins |
| 2. Voice | 2.D4 | Errors in main | FAIL | No Common Errors / Troubleshooting section |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | PASS | no `<Note>` used |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Token-gating architecture" (24), "Prerequisites" (24), "Build the gate" (22), "Extending the gate" (22), `Related pages` (exempt) |
| 3. Headings | 3.2 | Banned/weak | PASS | no banned terms |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Token-gate videos with Lit Protocol" — 5 words; sidebarTitle "Token-Gated Video" is 3 words — preferred |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT | PASS | Related Pages routes to access-control + IPFS sibling |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | PASS | §"Prerequisites" (53) lists Node 18+, NFT contract, Livepeer Studio API key + JWT-protected asset, React+ethers/wagmi familiarity |
| 4. Structure | 4.6 | Out-of-scope | FAIL | No explicit out-of-scope statement |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | PASS | unique content |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | 2 Related cards, both internal `/v2/developers/` (line 267, 270). Zero cross-tab |
| 4. Structure | 4.11 | Discord test | MIXED | "How do I gate a Livepeer video by NFT?" — page answers with full path. Doesn't cover failure modes (Lit network down, wallet not connected, NFT contract not on supported chain) |
| 4. Structure | 4.12 | Page size | PASS | 9.2 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | Page doesn't name: cost of Lit Protocol (mainnet vs testnet), latency added by Lit network call, what happens if Lit is offline, alternative to Lit (webhook-based gating) |
| 4. Structure | 4.17 | Every code block has lang tag | MIXED | typescript, tsx, bash all tagged; line 42 has no language (ASCII flow inside fenced block) |
| 4. Structure | 4.18 | Code-first opening | PASS | |
| 4. Structure | 4.19 | Errors in main | FAIL | No Common Errors |
| 4. Structure | 4.20 | API methods linked | MIXED | many SDK methods unlinked |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold: Prerequisites + StyledSteps + Related Pages; missing Verification + Common Errors |
| 5. Layout | 5.2 | Required sections | MIXED | Prerequisites PASS; Steps PASS (StyledSteps); Verification FAIL; Related Pages PASS |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | PASS | StyledSteps for procedural; StyledTable for gate-type comparison |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 19 `status: current` |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | StyledSteps PASS; StyledTable PASS; code blocks lack icon+title; hardcoded hex |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | N/A | |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | "Related pages" H2 (264) with `<CardGroup>` |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (266); cards lack `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | N/A | no Accordions (page should have one for Common Errors) |
| 5. Layout | 5.20 | Code icon+title | FAIL | None of 6 code blocks (lines 61, 73 inside StyledStep, 95, 117, 139, 178) have `icon` or `title` |
| 5. Layout | 5.21 | StyledSteps used | PASS | `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">` (line 68) with 5 StyledSteps. Same hardcoded hex `#2d9a67` (line 68) as ipfs-video-integration — fails 5.34 |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | |
| 5. Layout | 5.23 | StyledTable | PASS | line 230-260 uses `<StyledTable variant="bordered">` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | MIXED | StyledSteps + StyledTable + ASCII flow (42-44) |
| 5. Layout | 5.26 | CustomDivider | PASS | dividers placed correctly |
| 5. Layout | 5.27 | Mermaid | FAIL | line 42-44 ASCII flow `Viewer wallet → Lit Network → ...` is text not Mermaid. Should be Mermaid `sequenceDiagram` |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | FAIL | line 68 `iconColor="#2d9a67"` hardcoded hex — fails 5.34 |
| 6. Veracity | 6.1 | Claims citable | MIXED | "fully decentralised token-gated video pipeline" (29 inside Tip) — assertion not sourced. Lit + Livepeer integration claim not linked to either project's docs |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | Deprecated API | MIXED | Lit Protocol SDK API surface (`encryptString`, `decryptToString`) — should pin to SDK version; the API has evolved across Lit's v3 → v6 redesigns |
| 6. Veracity | 6.4 | Numbers real | PASS | |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | absent |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | All installed packages unpinned |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No links to Lit Protocol docs (developer.litprotocol.com), Livepeer access-control reference, ERC-721 EIP, wagmi docs |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | 0 cross-tab cards |
| 7. Nav | 7.7 | Correct lane | PASS | |
| 7. Nav | 7.8–7.12 | naming / TTL / structure | PASS | |
| 8. Links | 8.1 | Internal | PASS | inline link to access-control guide (71) resolves |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | MIXED | happy-path Lit+Livepeer integration covered; production hardening + failure modes not |

**Studio framing — special rule.** Audit says 1 Studio source ref expected. Found at line 48: "**Livepeer Studio** -- creates a JWT-protected asset and provides a signing key". This is a CRITICAL finding per project rule 3. Also referenced at line 56 "A Livepeer Studio API key with a JWT-protected asset already created" and line 209: `https://livepeercdn.studio/asset/hls/...` (CDN URL, OK). The Studio refs at lines 48 + 56 are CRITICAL — should be Gateway / gateway-provider terminology.

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Token-gate videos with Lit Protocol" | MIXED | 5 words |
| sidebarTitle | Yes | "Token-Gated Video" | PASS | 3 words |
| description | Yes | "Gate Livepeer video playback behind NFT ownership..." | PASS | 154 chars |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | missing |
| complexity | No | — | FAIL | missing |
| lifecycleStage | No | — | FAIL | missing |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | missing |
| lastVerified | Yes | 2026-04-05 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (7×) | Required | PASS placement |
| `<Tip>` (header CTA) | Yes (29) | Recommended | PASS |
| `<CenteredContainer>` | Yes (28) | — | |
| `<StyledSteps>` / `<StyledStep>` | Yes (5 steps) | Required | PASS 5.21 — but hardcoded hex `#2d9a67` (68) fails 5.34 |
| `<Tabs>` / `<Tab icon>` | No | — | |
| `<AccordionGroup>` / `<Accordion icon>` | No | Recommended for Common Errors | FAIL — page lacks Common Errors |
| `<StyledTable>` | Yes (230) | Required | PASS 5.23 — gate-type comparison |
| Fenced code with icon+title | Yes (6 blocks, 0 with icon+title) | Required | FAIL 5.20 |
| `<CardGroup cols={2}>` / `<Card>` | Yes (266) | — | FAIL 5.16+5.17 |
| `<CustomCardTitle>` | No | Required | FAIL |
| Mermaid | No | Recommended | FAIL 5.27 |

## Cross-page duplication and link gaps

- **OVERLAP**: Step 1 "Create a JWT-protected Livepeer asset" overlaps with content in `/v2/developers/guides/auth-and-security/access-control` (linked at line 71). Defensible — this page references that one and shows the Lit-specific path.
- **LINK GAPS**: Lit Protocol docs not linked (developer.litprotocol.com); `@lit-protocol/lit-node-client` package on npm not linked; ERC-721 EIP not linked; wagmi docs not linked; `signAccessJwt` from `@livepeer/core/crypto` not linked to source.
- **STRANDED**: Reader who completes the gate has a working NFT-gated playback. Related Pages routes to Access Control (sibling) + IPFS (sibling). No cross-tab card; no link to Solutions; no link to `/v2/about/network/` to understand JWT access-control mechanism at protocol level.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | uses `--` style — en-dash, inconsistent |
| US spellings | 0 | only CenteredContainer false-positive |
| Banned words | 0 | |
| Banned phrases | 0 | |
| Banned constructions | 0 | |
| Question headings | 0 | |
| **Studio refs** | **2** | **line 48: "Livepeer Studio -- creates a JWT-protected asset"; line 56: "A Livepeer Studio API key with a JWT-protected asset already created" — CRITICAL per project rule 3** |
| Self-reference | 1 | line 36 "What you will build:" — tutorial pattern, acceptable |
| Banned heading | 0 | |
| Deprecated terms | 0 | |

## Heading Score Table

| Heading | Total |
|---|---|
| Token-gating architecture | 24 |
| Prerequisites | 24 |
| Build the gate | 22 |
| Extending the gate | 22 |
| Related pages | exempt |

All PASS 3.1.

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 42 | (none) | ✗ | ✗ | N/A | ASCII flow — should be Mermaid |
| 60 | bash | ✗ | ✗ | NOT-TESTED | `npm install` — unpinned |
| 73 (StyledStep) | typescript | ✗ | ✗ | NOT-TESTED | Step 1 asset create |
| 95 (StyledStep) | typescript | ✗ | ✗ | NOT-TESTED | Step 2 ACCs |
| 117 (StyledStep) | typescript | ✗ | ✗ | NOT-TESTED | Step 3 encrypt |
| 139 (StyledStep) | typescript | ✗ | ✗ | NOT-TESTED | Step 4 decrypt + sign |
| 178 (StyledStep) | tsx | ✗ | ✗ | NOT-TESTED | Step 5 Player |

All 6 blocks FAIL 5.20.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is a working NFT-gated video. Page delivers happy-path code but doesn't verify the gate actually gates. Reader could ship the code with `accessControlConditions` containing a contract they don't own and never know the gate fails open until a viewer reports they can't watch. No verification: "Try the gate from a wallet that doesn't hold the NFT; the Player should show the unlock prompt, not play."
- **Fix step:** Add §"Verification" H2 after `</StyledSteps>` (before §"Extending the gate"): 3 checks — (1) connect a wallet WITH the NFT → Player loads + plays; (2) connect a wallet WITHOUT the NFT → Player shows unlock prompt; (3) tamper with the JWT (drop a character) → Player returns 403. Each with expected response.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` Step 7 "Confirm the loop is closed" pattern + Lit Protocol docs' "test on testnet first" guidance.

### Layer 2 — Composition
- **Gap:**
  1. Code blocks lack `icon` + `title` (5.20) — 6 blocks bare.
  2. Hardcoded hex `#2d9a67` in StyledSteps (5.34).
  3. No Common Errors / Troubleshooting AccordionGroup (4.19/2.D4).
  4. `<CardGroup>` not `<Columns>` (5.16/5.17); cards lack `<CustomCardTitle>` (5.22).
  5. ASCII flow at line 42-44 should be Mermaid `sequenceDiagram` (5.27).
  6. No Verification section (5.2).
- **Fix step:**
  1. Add `icon="terminal"` + `title="install.sh"` to line 60; `icon="code"` + `title="step1-create-asset.ts"` etc. to each StyledStep code block.
  2. Replace `iconColor="#2d9a67"` (68) with `iconColor="var(--accent)"`.
  3. Add `<AccordionGroup>` §"Common Errors" before §"Extending the gate" with 5 entries: Lit network offline, wallet not connected, NFT contract not on supported chain, JWT signing-key mismatch, ACC evaluation fail. Each Accordion needs `icon` prop.
  4. Convert `<CardGroup cols={2}>` (266) to `<Columns cols={2}>` + `<CustomCardTitle icon title horizontal />`.
  5. Replace ASCII flow at line 42-44 with Mermaid `sequenceDiagram` showing Viewer wallet → Lit network → Signed JWT → Livepeer CDN → Playback. Use `MermaidColours.jsx`.
  6. Add §"Verification" H2 as described in Layer 1.
- **Source/exemplar:** `ipfs-video-integration.mdx` for the StyledSteps hex issue (shared bug); `low-latency-live-streaming-app.mdx` Common Errors pattern.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab cards. Lit Protocol docs never linked. ERC-721 EIP never linked. wagmi/ethers never linked.
- **Fix step:**
  1. Add cross-tab Related cards: `/v2/about/network/architecture` ("How JWT access control works at protocol level"), `/v2/gateways/setup/connect` ("Self-host the CDN that validates JWTs"), `/v2/solutions/...` (managed access-control alternative).
  2. Add inline links at first mention: Lit Protocol → `https://developer.litprotocol.com/`, `LitNodeClient` → npm or repo, ACC → Lit ACC docs, ERC-721 → EIP-721, wagmi → `https://wagmi.sh/`, `signAccessJwt` → `@livepeer/core/crypto` source.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` Sources accordion pattern.

### Layer 4 — Veracity and source authority
- **Gap:**
  1. `livepeer @livepeer/react @lit-protocol/lit-node-client ethers` all unpinned (61).
  2. Lit Protocol API surface has changed substantially across versions; unpinned + uncited.
  3. "fully decentralised token-gated video pipeline" (29 inside Tip) — strong claim, uncited.
  4. No TESTED labels.
  5. `veracityStatus` absent.
  6. **Studio references at lines 48, 56 — should be Gateway / gateway-provider per project rule 3.** Livepeer's hosted Studio is replaced in v2 by neutral gateway-provider framing.
- **Fix step:**
  1. Pin all installed packages at line 61.
  2. Pin Lit Protocol client to a specific major (`@lit-protocol/lit-node-client@<version>`); call out the supported version in §"Prerequisites".
  3. Source the "fully decentralised" claim or rewrite to remove the marketing tone.
  4. Add TESTED labels.
  5. Add `veracityStatus: verified` (after pinning) or `unverified`.
  6. **Replace "Livepeer Studio" (48, 56) with "your Livepeer gateway provider" or "a gateway exposing the Asset API". The JWT playback policy is gateway-level, not Studio-specific.** This is a CRITICAL fix.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` Path 2 pinning + sibling tutorials' gateway-provider framing.

### Layer 5 — Product-forward depth
- **Gap:**
  1. No "When to use Lit vs webhook-based gating" decision block. Livepeer supports both; this page only covers one and doesn't tell reader why.
  2. No cost signal. Lit Protocol mainnet charges per request; reader doesn't know.
  3. No latency signal. Adding Lit + JWT signing adds 1-3 seconds to first-frame; not mentioned.
  4. No "What if Lit is down" — Lit network availability is a hard dependency; not stated.
  5. No `<Badge>` for Lit Protocol maturity.
- **Fix step:**
  1. Add §"When to use Lit vs webhook gating" Tip before Prerequisites: 3 bullets — "Use Lit if: fully decentralised gate matters, you don't want a centralised gating server. Use webhook gating if: latency-critical, gating server already exists, simpler ops. Compare to [Access Control](/v2/developers/guides/auth-and-security/access-control)."
  2. Add §"Trade-offs" Accordion before Related Pages: cost (Lit mainnet per-request fees), latency (1-3s added), availability (Lit network dependency), wallet-UX (signature prompt for every unlock).
  3. Add `<Badge>` near header: `<Badge>Lit Protocol mainnet — production; testnet for development</Badge>`.
- **Source/exemplar:** `multi-tenant-billing-with-pymthouse.mdx` Pymthouse-Responsibilities table for similar "what this layer adds" framing; `low-latency-live-streaming-app.mdx` Latency Budget table for the trade-off format.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 2 / HIGH 7 / MEDIUM 5 / INFO 3
**Critical findings (1–5)**:
1. **Studio references at lines 48, 56 — CRITICAL per project rule 3.** Page is in `v2/developers/`; Studio refs allowed only in `learn/where-to-find/studio-paths.mdx`.
2. 4 frontmatter fields missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (1.1, 1.4, 1.6, 1.7, 1.8).
3. All 6 code blocks lack `icon` + `title` (5.20).
4. Hardcoded hex `#2d9a67` in StyledSteps (line 68) fails 5.34.
5. No Common Errors / Verification sections (4.19/5.2).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | **CRITICAL**: Replace "Livepeer Studio" (lines 48, 56) with "your Livepeer gateway provider" or "a gateway exposing the Asset API" | 48, 56 | CRITICAL | S | project rule 3 |
| 2 | Add `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter; remove `status: current` | 17-21 | HIGH | S | check 1.1+1.4+1.6+1.7+1.8 |
| 3 | Add `icon="terminal"` + `title="install.sh"` to line 60; add `icon="code"` + per-step `title="..."` to lines 73, 95, 117, 139, 178 | 6 blocks | HIGH | M | check 5.20 |
| 4 | Replace hardcoded `iconColor="#2d9a67"` (68) with `iconColor="var(--accent)"` | 68 | HIGH | S | check 5.34 |
| 5 | Add §"Common Errors" `<AccordionGroup>` with 5 entries (Lit offline, wallet disconnected, chain unsupported, signing-key mismatch, ACC eval fail); each `<Accordion icon>` | new section before line 264 | HIGH | M | check 4.19+2.D4 |
| 6 | Add §"Verification" H2 with 3 success criteria (NFT holder plays, non-holder sees unlock, tampered JWT returns 403) | new section after `</StyledSteps>` line 222 | HIGH | M | tutorial matrix |
| 7 | Convert `<CardGroup cols={2}>` (266) to `<Columns cols={2}>`; wrap titles in `<CustomCardTitle icon title horizontal />` | 264-273 | HIGH | M | check 5.16+5.17+5.22 |
| 8 | Pin installed packages at line 60: `livepeer@<X> @livepeer/react@<X> @lit-protocol/lit-node-client@<X> ethers@<X>`; add `{/* REVIEW: confirm latest stable */}` | 60 | HIGH | S | check 2.D3+6.8 |
| 9 | Add cross-tab Related Pages cards (`/v2/about/network/architecture`, `/v2/gateways/setup/connect`, `/v2/solutions/...`) for ≥3 cross-tab | Related Pages | MEDIUM | S | check 4.10+7.6 |
| 10 | Replace ASCII flow at line 42-44 with Mermaid `sequenceDiagram` using `MermaidColours.jsx` | 22-26, 42-44 | MEDIUM | M | check 5.27 |
| 11 | Add inline links at first mention: Lit Protocol docs, ACC reference, ERC-721 EIP, wagmi docs, `signAccessJwt` source | 34, 47, 95, 140, 184 | MEDIUM | M | check 6.10 |
| 12 | Add §"When to use Lit vs webhook gating" Tip before Prerequisites with 3 decision bullets | after 39 | MEDIUM | M | layer 5 |
| 13 | Add `<Badge>` near header for Lit Protocol maturity | after CenteredContainer Tip | MEDIUM | S | layer 5 |
| 14 | Add §"Trade-offs" Accordion (cost, latency, availability, wallet-UX) before Related Pages | new section | INFO | M | layer 5 |
| 15 | Add TESTED date+env to every code block once pinned | 6 blocks | INFO | M | check 6.2 |
| 16 | Shorten title from "Token-gate videos with Lit Protocol" (5 words) to ≤3 words concept-derived | 2 | INFO | S | check 3.6 |
