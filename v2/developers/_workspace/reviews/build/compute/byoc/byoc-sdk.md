# Review: byoc-sdk.mdx

**Page**: `v2/developers/build/compute/byoc/byoc-sdk.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A6
**pageType (from frontmatter)**: `reference` (line 8)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 2,977
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` |
| 1. Frontmatter | 1.3 | pageVariant | INFO | Absent; `specification` would fit |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `reference` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "The @muxionlabs/byoc-sdk: scaffold, test, and deploy..." 130 chars |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords specific | PASS | All specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "optimised" (line 47) ✓ UK |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 33: "The `@muxionlabs/byoc-sdk` is a developer tool..." — subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | PASS | "BYOC" used without expansion (acceptable on a reference page since overview/quickstart expand it); naming collision exists upstream but this page doesn't aggravate |
| 2. Voice | 2.12 | Em-dashes | PASS | Zero |
| 2. Voice | 2.13 | Entity-led voice | PASS | "The `@muxionlabs/byoc-sdk`", "The SDK", paragraphs lead with entity |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | MIXED | "AI Video SPE" (line 6, 33) — historic name; "formerly AI Video SPE" is OK as a tombstone but if SPE is the current acronym for another entity, this could collide. Verify against terminology lock |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | NOT-TESTED | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "FrameProcessor" (line 45) named without link to reference page (sister page `byoc-architecture` defines it but no link here); "StreamDiffusion V2" (line 59) named without definition or upstream-pipeline link |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first opening | N/A | Reference |
| 2. Voice | 2.D2 | API/method has code | MIXED | Reference page about a CLI SDK — no actual CLI command shown. Page describes capabilities but doesn't include a single `byoc-sdk` invocation |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No SDK version, no go-livepeer compatibility matrix; "Check the repository for current version" (line 62) defers responsibility |
| 2. Voice | 2.D4 | Errors in main content | N/A | Reference |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | No code, no prose-explaining-code issue |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | FAIL | Line 61-63 `<Note>` carries primary content (maintenance + compatibility — the page's only governance claim) — should be `<Warning>` or `<Info>` for maintenance scope; 2.D7 forbids `<Note>` for primary |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Capabilities" (22), "Related repositories" (23) |
| 3. Headings | 3.2 | Banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | MIXED | "Capabilities" is ambiguous standalone — could mean BYOC capabilities (the network construct) or SDK features. Per 3.4 domain-anchor rule, should be "SDK capabilities" or "Tooling" |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "BYOC SDK" — 2 words |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | MIXED | |
| 4. Structure | 4.1 | One purpose | PASS | Reference `@muxionlabs/byoc-sdk` |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer locate the BYOC SDK and its repos" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Parent compute/overview missing |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing pointer at line 67; no Related Pages footer |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Reference |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | |
| 4. Structure | 4.7 | Info type per section | MIXED | Reference page — should ship `<ParamField>` / `<ResponseField>` for the actual SDK CLI commands. Currently ships only a list of capabilities + a repo table |
| 4. Structure | 4.8 | No content duplication | MIXED | Related repositories table partly overlaps `byoc-quickstart.mdx` Next Steps card to `/sdks` route — but the cards point to different pages. Minor |
| 4. Structure | 4.9 | Section orientation | FAIL | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero |
| 4. Structure | 4.11 | Discord test | FAIL | "What does the byoc-sdk do?" — page lists capabilities but never shows a CLI invocation or a scaffold output structure. Reader can't decide whether to use it without clicking through to the repo |
| 4. Structure | 4.12 | Page size | FAIL | 2.9 KB — below the ≥5 KB substantive threshold for reference page |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No mention of: SDK maintained by third party (MuxionLabs not Livepeer core), version-compat unknown, alternative paths (writing the container by hand per byoc-quickstart). The `<Note>` flags it but doesn't surface as a trade-off |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No code blocks (consequence of missing CLI examples) |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states main | N/A | |
| 4. Structure | 4.20 | API/method has code/link | FAIL | "Scaffold", "Local test harness", "Docker build utilities", "Deployment helpers" (lines 45-48) named as SDK capabilities — none have CLI invocations, none have repo-deep links to the command implementation |
| 5. Layout | 5.1 | Correct template | MIXED | Reference template needs `<ParamField>` / `<ResponseField>` blocks for CLI commands; page is prose-list-only |
| 5. Layout | 5.2 | Required sections | FAIL | Reference matrix requires Related Pages footer; this page has prose pointer (line 67) only |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | FAIL | CLI tool reference should use `<ParamField>` / `<CodeGroup>` showing actual commands. Page is bullet list + repo table |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 10) legacy field |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | MIXED | Reference tables at END is required per 5.32; "Related repositories" table is positioned correctly. But the Note appears AFTER the repo table — Notes should generally appear earlier in the flow, not as a tombstone |
| 5. Layout | 5.14 | Multi-view | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | Repo table hardcoded. The "Related repositories" set (muxionlabs/byoc-sdk, byoc-example-apps, runner-router, StreamDiffusionV2) could pull from a shared snippet shared with `byoc-architecture` / `byoc-quickstart` / `byoc-production` |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | NEITHER — only a closing prose paragraph |
| 5. Layout | 5.17 | Related Pages format | FAIL | No section |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon | N/A | |
| 5. Layout | 5.20 | Code block icon+title | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | N/A | No nav cards |
| 5. Layout | 5.23 | StyledTable | PASS | `<StyledTable>` would be used IF the repo table were styled — currently raw markdown (FAIL) |
| 5. Layout | 5.23 | StyledTable (re-evaluated) | FAIL | Related repositories table (lines 54-59) is raw markdown |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider at line 31; divider at line 39 between intro/Source line and first H2 — borderline; rubric forbids divider between intro and first H2 |
| 5. Layout | 5.27 | Mermaid | N/A | Reference — diagram not strictly required |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | PASS | Table at lines 54-59 is at end ✓ |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | Repo URLs are first-party citations (✓); but capability claims ("scaffold", "local test harness", etc.) have no commits / README anchors |
| 6. Veracity | 6.2 | Code TESTED | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary | NOT-TESTED | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No SDK version, no compatibility matrix, line 62 explicitly says "Check the repository for current version" — defers staleness instead of pinning |
| 6. Veracity | 6.9 | Open-ended research | FAIL | Line 62: "Check the repository for current version and compatibility with your go-livepeer version" — explicit "needs more research" task baked into the page |
| 6. Veracity | 6.10 | Source authority | PASS | Repos linked as anchor text (T1 ✓) |
| 6. Veracity | 6.11 | Glossary defs | NOT-TESTED | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | NOT-TESTED | |
| 7. Nav/IA | 7.2 | Mirrors fs | FAIL | Parent missing |
| 7. Nav/IA | 7.3 | Portal routes | FAIL | |
| 7. Nav/IA | 7.4 | Orphans | MIXED | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | Zero |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | FAIL | 2.9 KB — below substantive threshold |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | Two links at line 67 resolve |
| 8. Links | 8.2 | External | NOT-TESTED | 4 github URLs — assume live |
| 8. Links | 8.3 | Snippets | PASS | CustomDivider imported (line 24) |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | NOT-TESTED | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | FAIL | "How do I scaffold a BYOC container?" not answered — no command shown |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | |
| 10. Completeness | 10.3 | Persona paths | MIXED | |
| 10. Completeness | 10.4 | Scope | PASS | Bounded to SDK reference |
| 10. Completeness | 10.5 | Self-containment | FAIL | Reader can't use the SDK from this page — must read the repo README |
| 10. Completeness | 10.6 | Language paths | N/A | |
| 10. Completeness | 10.7 | Persona guides | MIXED | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "BYOC SDK" | PASS | 2 words |
| sidebarTitle | Yes | "BYOC SDK" | PASS | |
| description | Yes | "The @muxionlabs/byoc-sdk..." | PASS | 130 chars |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Missing — `reference` |
| complexity | No | — | FAIL | Missing — `intermediate` |
| lifecycleStage | No | — | FAIL | Missing — `build` |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Missing |
| status | Yes | current | FAIL | Legacy |
| lastVerified | Yes | 2026-05-15 | PASS | |
| pageVariant | No | — | INFO | `specification` recommended |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (4×) | Required | — | Imported ✓; line 39 placement marginal |
| `<CenteredContainer>` | Yes (1×) | — | — | OK |
| `<Tip>` | Yes (1×) | Recommended | — | OK |
| `<Note>` | Yes (1×, line 61) | Avoid for primary | — | Carries primary governance content (FAIL 2.D7) — should be `<Warning>` or `<Info>` |
| `<StyledTable>` | No | Required | — | Repo table 54-59 raw markdown (FAIL 5.23) |
| `<Columns>` / `<Card>` | No | Required (Related Pages) | — | None (FAIL 5.16) |
| `<CustomCardTitle>` | No | Required | — | None |
| `<ParamField>` / `<ResponseField>` | No | Required for CLI/SDK reference | — | None — page has no CLI commands at all |
| `<CodeGroup>` | No | Recommended for CLI examples | — | None |
| Fenced code w/ icon+title | No | Required (when code present) | — | No code blocks (issue) |
| Mermaid | No | — | — | Could diagram the scaffold output directory structure |

## Cross-page duplication and link gaps

- **OVERLAP**: Repository list (lines 54-59) overlaps with `byoc-quickstart.mdx` ComfyStream-as-BYOC pointer + `byoc-architecture.mdx` (would benefit from same list).
- **LINK GAPS**:
  - "FrameProcessor" (line 45) — no link to `pytrickle/frame-processor.mdx` reference.
  - "NVIDIA CUDA base images" (line 47) — no link to a canonical Docker NVIDIA image.
  - "StreamDiffusion V2" (line 59) — no link to upstream paper / repo of StreamDiffusion (the algorithm) vs the checkpoint repo (already linked).
  - "Local trickle server" (line 46) — no link to PyTrickle.
  - go-livepeer compatibility matrix — line 62 says "check the repository" instead of stating the supported go-livepeer versions.
- **MISSING CONTENT**:
  - Actual CLI invocation example: `byoc-sdk scaffold my-pipeline` or similar.
  - Scaffold output directory layout (what files are generated).
  - Version installation command: `npm install -g @muxionlabs/byoc-sdk` (Node CLI).
  - Compatibility matrix: SDK version × go-livepeer version × PyTrickle version.
  - Differences between writing the container by hand (per byoc-quickstart) vs scaffolding via SDK.
- **STRANDED**: Page ends pointing to byoc-quickstart and byoc-architecture; reader who wants "how do I actually run the scaffold command?" has to leave the docs and read the GitHub README. The brief identifies `muxionlabs/byoc-sdk` as a load-bearing repo — this is the page that should document it usefully.
- **IA-DRIFT**: Section root missing.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 1 | "AI Video SPE" (lines 6, 33) — verify against terminology lock; "SPE" is also used elsewhere |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Capabilities | 3 | 3 | 4 | 4 | 5 | 19 (FAIL — collides with "BYOC capability" network construct; rename "SDK Capabilities" or "Tooling") |
| Related repositories | 5 | 4 | 5 | 5 | 4 | 23 |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| — | — | — | — | — | NO code blocks on the page. For a CLI SDK reference, this is itself a finding (FAIL 4.20 + 10.1) |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises to be the reference for `@muxionlabs/byoc-sdk` — a CLI tool — but shows zero CLI commands. Reader who lands here cannot scaffold, build, or deploy without leaving the docs. The "Capabilities" section reads as a marketing description (scaffold / local test / Docker build / deployment helpers) without naming a single command. Discord test fails (4.11): a reader asking "what does byoc-sdk do?" gets a paragraph not a runnable line.
- **Fix step:** Add §"Install" with the package install command (`npm install -g @muxionlabs/byoc-sdk` or `pip install ...` whichever applies — `{/* REVIEW: confirm package manager */}`). Add §"Commands" with `<ParamField>` or `<CodeGroup>` listing the actual CLI invocations: `byoc-sdk scaffold <name>`, `byoc-sdk test`, `byoc-sdk build`, `byoc-sdk deploy`. Add a "Scaffold output" example showing the generated directory layout. Add a §"When to use the SDK vs by hand" decision frame: SDK = production scaffold + tooling; by-hand = learning the contract per byoc-quickstart.
- **Source/exemplar:** brief lists `muxionlabs/byoc-sdk` as a load-bearing repo; rubric reference matrix requires `<ParamField>` / `<ResponseField>` structured data.

### Layer 2 — Composition
- **Gap:** Reference page with no `<ParamField>` / `<ResponseField>` blocks (5.5 FAIL). Raw markdown repo table (5.23 FAIL). No Related Pages footer (5.16 FAIL). `<Note>` carries primary governance content (2.D7 FAIL). No `<CodeGroup>` showing CLI usage. No `<Tabs>` for variant (Node CLI vs Python CLI vs Docker entrypoint, if applicable).
- **Fix step:** (a) Convert repo table (54-59) to `<StyledTable>` with explicit columns Repo / Purpose / Latest version / Compatibility. (b) Add `<Columns cols={2}>` Related Pages with 4 cards + `<CustomCardTitle>`. (c) Promote line 61 `<Note>` to `<Warning>` or `<Info>` per 2.D7 (and surface the compatibility-unknown fact as a real trade-off, not a tombstone). (d) Add §"Commands" with `<ParamField>` per CLI flag. (e) Add `<CodeGroup>` with three Tabs showing scaffold / test / deploy invocations.
- **Source/exemplar:** `_packet/component-matrix.md` reference row; `byoc-architecture.mdx` (also missing Related Pages — same fix).

### Layer 3 — Cross-page integration
- **Gap:** Page ends with prose pointer to quickstart + architecture only. No cross-tab. No link to `pytrickle/frame-processor.mdx` despite "FrameProcessor boilerplate" being a capability (line 45). No link to per-second-compute (the SDK's `deploy` command sets `price_per_unit`). No mention of the relationship to `muxionlabs/livepeer-app-pipelines` (named in the brief but absent from this page).
- **Fix step:** (a) Inline link `pytrickle/frame-processor.mdx` at "FrameProcessor boilerplate" (line 45). (b) Add Related Pages with 4 cards: byoc-quickstart, byoc-architecture, `pytrickle/frame-processor`, `/v2/developers/guides/payments/per-second-compute`. (c) Add a 5th row to the repo table for `muxionlabs/livepeer-app-pipelines` (per brief). (d) Add ≥1 cross-tab link: `/v2/orchestrators/setup/capabilities` (where operators register what the SDK builds).
- **Source/exemplar:** brief upstream repos list; `byoc-quickstart.mdx` Next Steps already cards `/v2/developers/resources/reference/sdks` — copy that direction.

### Layer 4 — Veracity and source authority
- **Gap:** Line 62 explicitly says "Check the repository for current version and compatibility" — that is a 6.9 violation (open-ended research baked into the page). No SDK version, no compatibility matrix, no install command pinning. The capability claims (scaffold / test / build / deploy) cite no commit, README anchor, or release note. `veracityStatus` absent.
- **Fix step:** (a) Add `veracityStatus: unverified` to frontmatter. (b) Replace line 62 prose with an explicit compatibility table: SDK version × go-livepeer version × PyTrickle version, with `{/* REVIEW: confirm matrix */}` where unknown. (c) Pin the install command. (d) Anchor each capability claim to a commit or README section: "Scaffold: see [`packages/cli/scaffold.ts`](https://github.com/muxionlabs/byoc-sdk/blob/main/...)". (e) Add Date of last upstream verification + release tag check.
- **Source/exemplar:** rubric 6.9 (no open-ended research); brief on muxionlabs repos.

### Layer 5 — Product-forward depth
- **Gap:** Page is a directory of names without a product perspective. Reader can't tell: (a) is this SDK production-ready or experimental? (b) is it the recommended path or an alternative? (c) what's the maintenance signal — last release, open issues, active maintainer count? (d) is there a Livepeer-team-blessed alternative? The `<Note>` says "maintained by MuxionLabs not the core team" — that is a high-stakes governance fact buried at the bottom. Reader who arrives here without knowing MuxionLabs is third-party may assume Livepeer-team authority and integrate the SDK with that confidence.
- **Fix step:** (a) Lift the `<Note>` content to a `<Warning>` at the TOP of the body: "This SDK is third-party. Maintenance, compatibility, and breaking-change cadence are MuxionLabs's responsibility, not Livepeer core's. Use the by-hand path per [byoc-quickstart] for the canonical contract." (b) Add `<Badge>Third-party — beta</Badge>` near the title. (c) Add §"Decision: SDK vs by hand" frame so reader can choose with eyes open. (d) Surface "container size / cold start / debugging cost" trade-offs (brief): the SDK abstracts those concerns but doesn't eliminate them — reader should know which still matter.
- **Source/exemplar:** brief MuxionLabs status; `.claude/references/layout/exemplars.md` maturity badge.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 11 / MEDIUM 4 / INFO 2
**Critical findings (1–5)**:
1. **Reference page with zero CLI commands** for a CLI SDK. Discord test fails. 10.1, 10.5, 4.11, 4.20 all FAIL on the same root cause.
2. No Related Pages footer (5.16 + 5.17 FAIL).
3. 4 required frontmatter fields missing; legacy `status: current` present.
4. `<Note>` (lines 61-63) carries primary governance content (third-party maintenance + compatibility unknown) — should be a top-of-body `<Warning>` not a tombstone (2.D7).
5. Page size 2.9 KB — below substantive threshold (4.12). Line 62 contains explicit open-ended research deferral (6.9 FAIL).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add §"Install" with package install command (`{/* REVIEW: confirm npm or pip */}`) | new section after line 38 | HIGH | S | check 10.1, 10.5 |
| 2 | Add §"Commands" with `<ParamField>` or `<CodeGroup>` listing actual CLI invocations: scaffold, test, build, deploy | new section | HIGH | L | check 5.5, 4.20 |
| 3 | Add `<Columns cols={2}>` Related Pages footer with 4 `<Card>` + `<CustomCardTitle>` before EOF: byoc-quickstart, byoc-architecture, `pytrickle/frame-processor`, `/v2/developers/guides/payments/per-second-compute` | EOF | HIGH | M | check 5.16, 5.17, 5.22 |
| 4 | Add `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` | 8-22 | HIGH | S | check 1.1 |
| 5 | Remove `status: current` (line 10) | 10 | MEDIUM | S | check 5.7 |
| 6 | Promote `<Note>` (lines 61-63) to `<Warning>` and move to TOP of body (after line 32 Tip); add `<Badge>Third-party — beta</Badge>` near title | 32, 61-63 | HIGH | M | check 2.D7, 4.15 |
| 7 | Convert repo table (54-59) to `<StyledTable>` with columns Repo / Purpose / Latest version / Compatibility | 54-59 | HIGH | M | check 5.23 |
| 8 | Add 5th row to repo table for `muxionlabs/livepeer-app-pipelines` (per brief) | 54-59 | MEDIUM | S | brief |
| 9 | Replace line 62 prose ("Check the repository...") with explicit compatibility table: SDK version × go-livepeer version × PyTrickle version, with `{/* REVIEW: confirm matrix */}` | 62 | HIGH | M | check 6.9 |
| 10 | Rename H2 "Capabilities" → "SDK capabilities" or "Tooling" (avoid collision with BYOC capability network construct) | 41 | MEDIUM | S | check 3.4 |
| 11 | Inline link `pytrickle/frame-processor.mdx` at first "FrameProcessor" mention (line 45) | 45 | HIGH | S | check 2.21, 6.10 |
| 12 | Add ≥1 cross-tab link in Related Pages: `/v2/orchestrators/setup/capabilities` | EOF | HIGH | S | check 4.10, 7.6 |
| 13 | Add §"Decision: SDK vs by hand" frame so reader chooses with informed trade-offs | new section | HIGH | M | brief; 4.15 |
| 14 | Add explicit version pin for SDK install + go-livepeer compatibility statement | section 1 + 9 | HIGH | M | check 2.D3, 6.8 |
| 15 | Anchor each capability claim (scaffold, test, build, deploy) to a commit / README section in `muxionlabs/byoc-sdk` | section 2 | HIGH | M | check 6.1, 6.10 |
| 16 | Verify "AI Video SPE" terminology against the project terminology lock; either retain "formerly AI Video SPE" tombstone or remove | 6, 33 | INFO | S | check 2.16 |
| 17 | Expand page to ≥5 KB substantive by adding Install / Commands / Decision / Related Pages | full page | MEDIUM | implicit | check 4.12 |
| 18 | Remove divider at line 39 (between intro/source and first H2) | 39 | MEDIUM | S | check 5.26 |
| 19 | Add `pageVariant: specification` to frontmatter | 8 | INFO | S | check 1.3 |
| 20 | Add Mermaid showing scaffold output directory tree OR a `<Frame>` showing tree as code with `icon` + `title` | new section | INFO | M | check 5.27 |
