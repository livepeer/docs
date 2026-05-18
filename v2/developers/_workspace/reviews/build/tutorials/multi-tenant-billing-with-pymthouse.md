# Review: multi-tenant-billing-with-pymthouse.mdx

**Page**: `v2/developers/build/tutorials/multi-tenant-billing-with-pymthouse.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A9
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 17,970
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | All required present; legacy `status: current` (line 26) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` (line 16) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` (line 18) |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 17) |
| 1. Frontmatter | 1.6 | complexity | PASS | `advanced` (line 19) |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` (line 20) |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` (line 28) — but see 6.6 |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build a multi-tenant Livepeer app with OIDC auth..." subject-first, 162 chars (borderline) |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields (lines 21-25) |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (pymthouse, multi-tenant, OIDC, payment signing) |
| 1. Frontmatter | 1.14 | audience match | PASS | developer register |
| 2. Voice | 2.1 | UK English | PASS | only false-positive zone hits (`CenteredContainer`) |
| 2. Voice | 2.2 | Banned words | PASS | 0 |
| 2. Voice | 2.3 | Banned phrases | PASS | 0 |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | line 41 "By the end of this tutorial you'll have..." — tutorial-activation pattern; borderline against 2.13 entity-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer register; OIDC, RFC 8693, BigInt wei language correct |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | OIDC, Builder API, ticket-signing, BigInt all canonical |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | MIXED | line 41 reader-second-person; rest of body system-led (e.g. "Pymthouse exposes a standard OIDC discovery document...", "The route handler takes...") |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | MIXED | activation paragraph + Warning before first code at line 126; acceptable for advanced multi-system tutorial whose first job is positioning the architecture |
| 2. Voice | 2.D2 | API methods linked | MIXED | `provisionUser`, `mintUserToken`, `client_credentials` grant not linked to RFC; `/api/v1/oidc/token`, `/api/v1/apps/{clientId}/users` named but not linked to pymthouse API docs |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `create-next-app@latest` (line 127) — `latest`; pymthouse hosted-version unstated |
| 2. Voice | 2.D4 | Errors in main | PASS | §"Common Errors" AccordionGroup at line 425 with 5 entries |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | MIXED | line 45-47 `<Warning>` carries primary "community project in active beta" disclaimer — correctly Warning, good |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "Pymthouse Responsibilities" (22), "Pymthouse Setup" (22), "Project Bootstrap" (22), "User Provisioning" (22), "Inference Endpoint" (22), "Usage Dashboard" (22), "Production Considerations" (22), "Common Errors" (24), **"Next Steps" FAIL banned (3.2)** |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 449 "## Next Steps" — banned per 3.2 |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Multi-Tenant Billing with pymthouse" — 4 words; sidebarTitle "Multi-Tenant Billing" is 2 words — preferred |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | multi-tenant SaaS over Livepeer via pymthouse |
| 4. Structure | 4.2 | Purpose test | PASS | "Build a Next.js app with OIDC auth + per-user billing + payment signing" |
| 4. Structure | 4.3 | PREV/NEXT | PASS | |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | PASS | §"Required Tools" (51) lists Node 20+, pymthouse account, gateway, editor |
| 4. Structure | 4.6 | Out-of-scope | MIXED | No explicit "what this isn't" section but self-hosting trade-off (line 419) names what you take on. Subtle |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | PASS | unique content — only pymthouse tutorial in section |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | MIXED | 4 Related cards: 2 external (pymthouse.com, github.com/eliteprox), 2 internal (`/v2/developers/build/ai-and-agents/...`, `/v2/developers/guides/production-hardening-checklist`). Zero cross-tab inside docs. Should add `/v2/about/network/architecture` or `/v2/solutions/...` |
| 4. Structure | 4.11 | Discord test | PASS | full happy-path, Common Errors, Production Considerations, Self-hosting trade-off |
| 4. Structure | 4.12 | Page size | PASS | 17.9 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | PASS | §"Pymthouse Responsibilities" table makes the 3 problems pymthouse solves explicit; §"Production Considerations" names 5 hardening surfaces; §"Self-hosting trade-off" inline (line 419) |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | bash, ts, tsx all tagged |
| 4. Structure | 4.18 | Code-first opening | PASS | activation moment before code; advanced tutorial pattern |
| 4. Structure | 4.19 | Errors in main | PASS | |
| 4. Structure | 4.20 | API methods linked | MIXED | RFC 8693 named in table (line 68) without link; OIDC discovery URL pattern shown but no spec link |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold mostly present; uses raw `<Steps>` not `<StyledSteps>` |
| 5. Layout | 5.2 | Required sections | MIXED | Required Tools PASS; raw Steps (98, 124) — FAIL 5.21; Verification absent (no §"How to confirm" or §"First call"); Common Errors PASS; Next Steps PASS (banned heading) |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Pymthouse Responsibilities (lines 66-71), Billing Plan types (108-113) are raw markdown tables — should be `<StyledTable>` |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 26 `status: current` |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | Common Errors strong; Warning for beta caveat strong; missing StyledSteps + StyledTable + code icon+title + Card components |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | PASS | |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | "Next Steps" H2 (449) with `<CardGroup>` |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (451); cards lack `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | FAIL | All 5 Accordions (lines 428, 431, 434, 437, 440) lack `icon` |
| 5. Layout | 5.20 | Code icon+title | FAIL | All 7 fenced blocks lack `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Two raw `<Steps>` blocks (98, 124) — FAIL |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | |
| 5. Layout | 5.23 | StyledTable | FAIL | 2 raw markdown tables (66-71, 108-113) |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 2 tables |
| 5. Layout | 5.25 | Max 1 major element | MIXED | 2 tables + 1 AccordionGroup + 2 Steps + ASCII flow at line 74-90 |
| 5. Layout | 5.26 | CustomDivider | PASS | dividers; `---` at line 39 should be `<CustomDivider />` per 5.26 |
| 5. Layout | 5.27 | Mermaid | FAIL | ASCII flow at lines 74-90 (`Your App → POST /api/v1/oidc/token → Pymthouse → ...`) should be Mermaid `sequenceDiagram` |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | MIXED | Tailwind class strings inside JSX — PASS; `status: current` contradicts published |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Forty-five minutes to multi-tenant" (line 36) — claim uncited. RFC 8693 referenced without link |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | no TESTED labels |
| 6. Veracity | 6.3 | Deprecated API | MIXED | pymthouse is community-built (beta) — API surface is community-controlled; should pin to a release |
| 6. Veracity | 6.4 | Numbers real | MIXED | "Forty-five minutes" claim uncited; "under an hour" token TTL (415) plausible but unsourced |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | declares `verified` but the page itself warns pymthouse is in active beta + Verify compatibility (line 45-47). Claim weak; should be `unverified` to match the Warning |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `create-next-app@latest` (127); pymthouse version unstated |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | pymthouse repo linked (58, 419, 455); pymthouse.com linked (54). RFC 8693 named in table (line 68) without link; OIDC spec not linked |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | 0 cross-tab cards (all internal `developers/` or external) |
| 7. Nav | 7.7 | Correct lane | PASS | |
| 7. Nav | 7.8–7.12 | naming / TTL / structure | PASS | |
| 8. Links | 8.1 | Internal | PASS | LinkArrow paths resolve |
| 8. Links | 8.2 | External | NOT-TESTED | pymthouse.com, github.com/eliteprox/pymthouse, docs.pymthouse.com — verify all live |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | MIXED | Persona 3 (clearinghouse) coverage strong; the "what does this look like for the end user" — JWT validation flow in middleware, error messaging — implicit |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Multi-Tenant Billing with pymthouse" | MIXED | 4 words |
| sidebarTitle | Yes | "Multi-Tenant Billing" | PASS | 2 words |
| description | Yes | "Build a multi-tenant Livepeer app with OIDC auth..." | MIXED | 162 chars (borderline >160) |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | advanced | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | contradicted by Warning at line 45-47 stating beta + verify-compatibility |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (10×) | Required | PASS placement; `---` at line 39 should be `<CustomDivider />` |
| `<Tip>` (header CTA) | Yes (36) | Required | PASS |
| `<CenteredContainer>` | Yes (35) | — | wraps Tip |
| `<Warning>` | Yes (45-47) | — | PASS — correctly used for beta caveat |
| `<Steps>` / `<Step>` | Yes (2 blocks, 3+2 steps) | — | FAIL 5.21 |
| `<StyledSteps>` | No | Required for procedural | FAIL 5.21 |
| `<Tabs>` / `<Tab icon>` | No | — | |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 group, 5 accordions) | Required for Common Errors | FAIL 5.19 |
| `<StyledTable>` | No | Required | FAIL 5.23 — 2 raw markdown tables |
| Fenced code with icon+title | Yes (7 blocks, 0 with icon+title) | Required | FAIL 5.20 |
| `<CardGroup cols={2}>` / `<Card>` | Yes (451) | — | FAIL 5.16+5.17 |
| `<CustomCardTitle>` | No | Required | FAIL |
| `<LinkArrow>` | Yes (41, 54, 58, 421, 419) | — | PASS pattern |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Project Bootstrap" Steps (124-152) reprise the same Next.js bootstrap pattern as `low-latency-live-streaming-app.mdx` (76-114) and `vod-upload-and-playback.mdx` (76-107). Bootstrap is generic React/Next.js scaffolding; could be a snippet.
- **LINK GAPS**: RFC 8693 (line 68) not linked. OpenID Connect not linked. `client_credentials` grant not linked to RFC 6749. AI Jobs API endpoint (line 273 — `text-to-image` model_id) not linked to ai-pipelines reference.
- **STRANDED**: Reader who completes the tutorial has a working multi-tenant SaaS shell with pymthouse. Related Pages routes to pymthouse docs (external), pymthouse repo (external), AI Jobs Quickstart (sibling), Production Hardening (sibling). No card to `/v2/about/network/architecture` for the underlying Livepeer ticket-signing mechanism, no link to `/v2/solutions/...` for managed alternatives, no link to `/v2/orchestrators/` (the "earn fees" side that this clearinghouse pattern enables).

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | |
| US spellings | 0 | only CenteredContainer false-positive |
| Banned words | 0 | |
| Banned phrases | 0 | |
| Banned constructions | 0 | |
| Question headings | 0 | |
| Studio refs | 0 | |
| Self-reference | 1 | line 41 "By the end of this tutorial you'll have..." — tutorial-activation pattern |
| Banned heading | 1 | line 449 "## Next Steps" |
| Deprecated terms | 0 | |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| Pymthouse Responsibilities | 22 |
| Pymthouse Setup | 22 |
| Project Bootstrap | 22 |
| User Provisioning | 22 |
| Inference Endpoint | 22 |
| Usage Dashboard | 22 |
| Production Considerations | 22 |
| Common Errors | 24 |
| **Next Steps** | **banned (3.2)** |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 74 (ASCII) | (none / text) | ✗ | ✗ | N/A | ASCII flow — should be Mermaid |
| 127 (Step) | bash | ✗ | ✗ | NOT-TESTED | `create-next-app@latest` |
| 140 (Step) | bash | ✗ | ✗ | NOT-TESTED | env file |
| 162 | ts | ✗ | ✗ | NOT-TESTED | `src/lib/pymthouse.ts` (filename in prose only) |
| 255 | ts | ✗ | ✗ | NOT-TESTED | `src/app/api/inference/route.ts` |
| 311 | ts | ✗ | ✗ | NOT-TESTED | `src/app/api/usage/route.ts` |
| 367 | tsx | ✗ | ✗ | NOT-TESTED | dashboard page |

7 blocks all FAIL 5.20.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is "two end users authenticate via OIDC, run inference, get billed per-user". Page delivers the code path but the verification is "open `/dashboard` and see per-user balance" — implicit. No explicit success criteria. Reader could have all code in place but a misconfigured pymthouse client and not realise until the first failed inference call.
- **Fix step:** Add §"Verification" H2 before Production Considerations: 3 steps — (1) `curl POST /api/inference` with mock externalUserId → returns inference result; (2) `curl GET /api/usage` → returns user list with non-zero usage; (3) pymthouse dashboard shows the user in the registry and the request count matches. Each with expected response shape.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` Step 7 "Confirm the loop is closed" pattern.

### Layer 2 — Composition
- **Gap:**
  1. Raw `<Steps>` x2 (5.21) — Pymthouse Setup (98) + Project Bootstrap (124).
  2. 2 raw markdown tables (66-71, 108-113) — 5.23 violation.
  3. Code blocks lack `icon` + `title` (5.20) — 7 blocks.
  4. Accordions lack `icon` (5.19) — 5 missing.
  5. ASCII sequence flow (74-90) should be Mermaid `sequenceDiagram` (5.27).
  6. `<CardGroup>` not `<Columns>` (5.16/5.17); cards lack `<CustomCardTitle>` (5.22).
  7. "Next Steps" banned heading (3.2).
  8. No `<Tabs>` for self-hosted vs hosted setup variants — could simplify the "self-hosting trade-off" prose at line 419.
- **Fix step:**
  1. Convert lines 98-118 and 124-152 to `<StyledSteps>` with `<StyledStep title icon>`.
  2. Convert lines 66-71 and 108-113 to `<StyledTable variant="bordered">`.
  3. Add `icon="terminal"`/`icon="code"` + `title="src/.../route.ts"` to all 7 code blocks.
  4. Add `icon` prop to 5 Accordions (429, 432, 435, 438, 441) — e.g. `icon="key"`, `icon="ban"`, `icon="credit-card"`, `icon="scale-balanced"`, `icon="route"`.
  5. Replace ASCII flow (74-90) with Mermaid `sequenceDiagram` showing the 7-step user-initiated-inference flow with each participant labelled.
  6. Convert `<CardGroup cols={2}>` (451) to `<Columns cols={2}>` + `<CustomCardTitle icon title horizontal />`.
  7. Rename "Next Steps" (449) → "Related Pages".
  8. Consider `<Tabs>` for "Hosted vs Self-hosted" comparison instead of inline prose at line 419 (defer to design pass).
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` icon+title patterns; `low-latency-live-streaming-app.mdx` Common Errors AccordionGroup (same `<Accordion icon>` gap).

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab Related cards. RFC 8693, RFC 6749 (OAuth 2.0), OIDC core spec all referenced without links. AI Jobs API endpoint `model_id: 'ByteDance/SDXL-Lightning'` (line 282) named without link to model registry or ai-pipelines page.
- **Fix step:**
  1. Add to Related Pages: card to `/v2/about/network/architecture` ("How probabilistic micropayments work"), `/v2/orchestrators/setup/connect` ("The receiving side of the ticket"), `/v2/developers/build/ai-and-agents/ai-pipelines` ("AI Jobs API reference").
  2. Add inline links at first mention: RFC 8693 (line 68) → `https://datatracker.ietf.org/doc/html/rfc8693`; OAuth 2.0 (68) → RFC 6749; OIDC core → `https://openid.net/specs/openid-connect-core-1_0.html`; `client_credentials` grant → RFC 6749 §4.4.
  3. Link `model_id: 'ByteDance/SDXL-Lightning'` (282) to the SDXL Lightning model card.
- **Source/exemplar:** Sibling `huggingface-to-livepeer.mdx` Sources accordion + this tutorial's Warning pointer to pymthouse repo.

### Layer 4 — Veracity and source authority
- **Gap:**
  1. `veracityStatus: verified` declared while the Warning at line 45-47 explicitly tells reader to "Verify compatibility with the current go-livepeer release before production deployment" — internal contradiction.
  2. `create-next-app@latest` unpinned.
  3. Pymthouse API surface (admin token endpoint, user provisioning endpoint, usage endpoint) named but pymthouse release/tag not pinned. Community-built means API drift risk is high.
  4. "Forty-five minutes to multi-tenant" (36) — claim uncited.
  5. RFC 8693 / RFC 6749 referenced without links.
  6. No TESTED labels.
- **Fix step:**
  1. Change `veracityStatus: verified` → `veracityStatus: unverified` until the Warning is resolved with a known-compatible pymthouse version. Or pin pymthouse version and verify against it, then keep `verified`.
  2. Pin `create-next-app@<version>`.
  3. Add a line to the Warning naming the verified pymthouse version: "Verified against pymthouse v<X.Y.Z>".
  4. Replace "Forty-five minutes" with sourced timing or remove the claim.
  5. Add RFC links inline.
  6. Add TESTED labels.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` Path 2 pinning pattern (`ai-runner v0.14.0`).

### Layer 5 — Product-forward depth
- **Gap:**
  1. `<Warning>` correctly flags beta + verify compatibility but doesn't say "use at your own risk for production" explicitly — for a clearinghouse handling real wei + real user money, this is a much bigger signal than a typical beta caveat.
  2. No cost signal. Pymthouse hosted is "free during beta"; what happens post-beta? What's the typical per-request overhead vs going direct?
  3. No "When NOT to use pymthouse" — direct integration is simpler; pymthouse is the right choice only if you have multiple end-users you need to bill. No decision framing.
  4. No production-readiness checklist beyond §"Production Considerations". For a system signing payment tickets on behalf of users, the security surface should be called out explicitly (key custody, audit logging, ticket-replay protection).
- **Fix step:**
  1. Strengthen the Warning (45-47) to add: "Pymthouse signs payment tickets on behalf of your users. Loss of the pymthouse session token or signer key means loss of funds. Treat the deployment as you would a custody product."
  2. Add §"Costs" subsection after §"Pymthouse Responsibilities" or in §"Production Considerations" naming the hosted-beta-vs-future pricing question with `{/* REVIEW: confirm post-beta pricing */}`.
  3. Add §"When to use pymthouse" decision block before §"Required Tools": 3 bullets — "Use pymthouse when: multiple end-users + per-user billing + auth needed. Skip pymthouse when: single-user app, internal app, or building your own auth+billing layer."
  4. Add a §"Security checklist" subsection at the end of §"Production Considerations": key custody, audit logging, ticket-replay protection, OIDC token storage, secret rotation.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` Path 2 Warning (525) — pattern for surfacing the reality gap. `streamplace-byoc-integration.mdx` is the navigational counterpart for "this is a community/SPE-built path".

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 3
**Critical findings (1–5)**:
1. H2 "Next Steps" (line 449) banned per 3.2.
2. Raw `<Steps>` (98, 124) — should be `<StyledSteps>` (5.21).
3. 2 raw markdown tables (66-71, 108-113) — should be `<StyledTable>` (5.23).
4. All 7 code blocks lack `icon` + `title` (5.20).
5. `veracityStatus: verified` contradicts the in-body Warning that pymthouse is beta + Verify compatibility (1.8 + 6.6).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Rename H2 "Next Steps" (449) → "Related Pages" | 449 | HIGH | S | check 3.2 |
| 2 | Convert raw `<Steps>` (98, 124) to `<StyledSteps>` + `<StyledStep title icon>`; add Steps.jsx import | 31-33, 98-118, 124-152 | HIGH | M | check 5.21 |
| 3 | Convert 2 raw markdown tables (66-71, 108-113) to `<StyledTable variant="bordered">`; add Tables.jsx import | 31-33, 66-71, 108-113 | HIGH | M | check 5.23 |
| 4 | Add `icon` + `title` to all 7 fenced blocks (127, 140, 162, 255, 311, 367, plus ASCII at 74) | 7 blocks | HIGH | M | check 5.20 |
| 5 | Add `icon` prop to all 5 Accordions (428, 431, 434, 437, 440) | 428, 431, 434, 437, 440 | HIGH | S | check 5.19 |
| 6 | Convert `<CardGroup cols={2}>` (451) to `<Columns cols={2}>`; wrap titles in `<CustomCardTitle icon title horizontal />` | 449-464 | HIGH | M | check 5.16+5.17+5.22 |
| 7 | Resolve veracityStatus contradiction: pin pymthouse version in Warning and keep `verified`, OR change to `unverified` | 28, 45-47 | HIGH | S | check 1.8+6.6 |
| 8 | Pin `create-next-app@latest` (127); add pymthouse version pin to Warning | 127, 45-47 | HIGH | S | check 2.D3+6.8 |
| 9 | Replace ASCII flow (74-90) with Mermaid `sequenceDiagram`; use `MermaidColours.jsx` | 74-90 | HIGH | M | check 5.27 |
| 10 | Add §"Verification" H2 before Production Considerations with 3 success checks | after 403 | MEDIUM | M | tutorial matrix |
| 11 | Remove legacy `status: current` field | 26 | MEDIUM | S | check 5.7 |
| 12 | Add cross-tab Related Pages cards (about/network/architecture, orchestrators/setup/connect, ai-pipelines reference) | Related Pages | MEDIUM | S | check 4.10+7.6 |
| 13 | Add inline links at first mention: RFC 8693, RFC 6749, OIDC core spec, SDXL Lightning model card | 68 + new at 282 | MEDIUM | M | check 6.10 |
| 14 | Strengthen Warning (45-47) with custody/security framing; add Security checklist subsection to Production Considerations | 45-47 + within 402 | MEDIUM | S | layer 5 |
| 15 | Replace `---` at line 39 with `<CustomDivider />` | 39 | INFO | S | check 5.26 |
| 16 | Source or remove "Forty-five minutes to multi-tenant" claim (36) | 36 | INFO | S | check 6.1 |
| 17 | Add §"When to use pymthouse" decision Tip before Required Tools | after 36 | INFO | M | layer 5 |
