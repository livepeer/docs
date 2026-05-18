# Section summary: build/plugins-and-extensions + build/alt-gateways + build/applications (Agent A7)

**Pages in scope**: 13 (9 reviewed + 2 EMPTY-STUB + 2 IA gaps)
**Pages reviewed**: 9
**Review date**: 2026-05-11
**Reviewer**: agent A7

## Verdict distribution
- PASS: 0
- MINOR: 0
- MODERATE: 0
- MAJOR: 9
- NEEDS WORK: 0
- EMPTY-STUB: 2

## Per-page verdicts

| Page | Verdict | Severity (C/H/M/I) | Top critical finding |
|---|---|---|---|
| `plugins-and-extensions/overview.mdx` | MAJOR | 0/8/5/2 | `pageType: overview` non-canonical; no Related Pages; closing prose strands reader at operator.livepeer.org without decision frame |
| `plugins-and-extensions/naap-architecture.mdx` | MAJOR | 0/9/5/2 | Mermaid hardcoded theme hex instead of `MermaidColours.jsx`; "12 plugins" claim conflicts with 8-row table; double `<CustomDivider />` |
| `plugins-and-extensions/building-a-plugin.mdx` | MAJOR | 0/11/4/2 | `pageType: how_to` non-canonical (should be `instruction`); procedural content not in `<StyledSteps>`; no Prerequisites/Verification/Related sections required by instruction template |
| `alt-gateways/overview.mdx` | MAJOR | 0/10/6/2 | "broadcaster" deprecated term used on lines 38+46; Related Pages uses `<CardGroup>` + plain `<Card title=...>`; signer-unavailability operational fact buried in `<Note>` |
| `alt-gateways/browser-and-mobile.mdx` | MAJOR | 0/9/5/2 | ASCII flow diagram should be Mermaid; escaped backticks in tsx fence render literally; mobile content thin despite "mobile" framing |
| `applications/overview.mdx` | MAJOR | 0/8/5/2 | CardGroup cards use plain `title=` not `<CustomCardTitle>`; only one H2; no decision matrix for the three paths |
| `applications/frontend-react-player.mdx` | MAJOR | 0/9/5/2 | Reference page uses bullet list for primitives (should be `<StyledTable>`); escaped backticks on lines 53 + 120 render literally |
| `applications/frontend-react-broadcast.mdx` | MAJOR | 0/9/5/2 | Escaped backticks in JSX attribute (line 49); "Get the stream key from the stream creation API response" left unlinked; reference uses bullet list |
| `applications/frontend-core-web.mdx` | MAJOR | 0/8/5/2 | Three frameworks as separate H2s should be `<Tabs>`; escaped backticks on lines 51 + 100 render literally; Svelte/Angular claimed in description but no code |

## IA Gap section (HIGH severity)

Per `notes.mdx` (commit `6c15a379b`, lines 103-104) the plugins-and-extensions IA was planned with 5 files:

```
plugins-and-extensions/
├── overview.mdx
├── naap-architecture.mdx
├── building-a-plugin.mdx
├── plugin-runtime.mdx     ← MISSING
└── plugin-registry.mdx    ← MISSING (notes: "the 12 plugins, where to find more")
```

**Status on disk:** `plugin-runtime.mdx` and `plugin-registry.mdx` do **NOT** exist in `v2/developers/build/plugins-and-extensions/`. They are also **NOT** in docs.json. The directory ships only 3 of 5 planned files.

**Impact:**
1. `naap-architecture.mdx` claims "12 plugins" (line 102) and lists only 8 rows in the table (lines 106-156) — `plugin-registry.mdx` would have been the canonical home for the full 12-plugin registry. The mismatch in the architecture page is directly attributable to the missing registry page absorbing the responsibility.
2. NaaP plugin lifecycle (load, mount, unmount, error-boundary) has no documentation home — `plugin-runtime.mdx` was planned for this.
3. Reader who finishes `naap-architecture.mdx` has no canonical link for "where else can I find plugins" or "how does a plugin load at runtime?".

**Severity: HIGH** (system documentation gap; not CRITICAL because the architecture page partially covers both topics).

**Recommendation:** Decide whether to:
- (a) Create both pages (canonical sources: `livepeer/naap/packages/registry/`, `livepeer/naap/packages/shell/src/runtime/`)
- (b) Promote registry content into `naap-architecture.mdx` (expand the 8-row table to 12) and fold runtime content into the same page (add §"Plugin runtime")
- (c) Remove the planned IA entries from notes.mdx if the consolidated approach in `naap-architecture.mdx` is intentional

## EMPTY-STUB section (2)

Each stub is 573-620 bytes with frontmatter only and "This page is in progress." body. Both are in docs.json (lines 2611-2612) — readers click and land on empty pages. **Severity: HIGH** (registered stubs in nav).

| File | Bytes | Target slot | Canonical source to populate from | One-line "what needs writing" |
|---|---|---|---|---|
| `alt-gateways/livepeer-python-gateway.mdx` | 573 | Alt-gateway — implementation page | `j0sh/livepeer-python-gateway` (or `livepeer/livepeer-python-gateway`) — install, configure, run; OrchestratorSession + PaymentSession + LiveVideoJob classes; trickle-stream LV2V setup | Install/configure/run the Python gateway: signer URL config, orchestrator selection, LV2V session setup, payment ticket lifecycle, examples folder walkthrough |
| `alt-gateways/remote-signer-integration.mdx` | 620 | Alt-gateway — integration guide | `Remote_signers.md` Notion export; go-livepeer PRs #3791 + #3822; clearinghouse pattern; off-chain signing flow | Off-chain signer mode of go-livepeer + clearinghouse pattern: HTTP API surface, unsigned-ticket flow, signed-ticket return, balance management, deployment topology, failure modes when signer unreachable |

**Frontmatter on stubs:** both correctly mark `veracityStatus: unverified` and lack `status: current` (good — already cleaner than the 9 reviewed pages). Page sizes 573-620 B violate check 7.10 ("no stubs in published nav, every nav entry >2KB substantive").

## Severity totals across pages reviewed

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 81 |
| MEDIUM | 45 |
| INFO | 18 |

## Top issues by frequency in this section

1. **Frontmatter taxonomy violations** (9/9 pages) — every page missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Every page has legacy `status: current`. Pages: all 9 reviewed.
2. **Non-canonical `pageType`** (4/9 pages) — `overview` on plugins-and-extensions/overview, alt-gateways/overview, applications/overview; `how_to` on building-a-plugin (should be `instruction`).
3. **No Related Pages footer per spec** (9/9 pages — 7 have NO footer at all; 2 use `<CardGroup>` + plain `<Card title=...>` instead of `<Columns cols={2}>` + `<CustomCardTitle>`). Closing prose paragraphs replace the required Related Pages on 7 pages.
4. **Code blocks missing `icon` + `title`** (9/9 pages, ~24 code blocks total) — every fenced block on every page fails check 5.20. building-a-plugin.mdx has `icon` but lacks `title` on all 5 blocks (partial). All other 8 pages lack both.
5. **Zero cross-tab graduation links** (9/9 pages) — no links to Gateways / Solutions / About from any page in this section. Persona-E builders, plugin authors, and frontend developers all stranded inside developers/.
6. **MDX rendering bug — escaped backticks** (5 pages, 7 instances) — `\`...\``  pattern inside tsx/vue fences and JSX attributes will render literally instead of as JS template literals. Pages: alt-gateways/browser-and-mobile (line 46), applications/frontend-react-player (lines 53, 120), applications/frontend-react-broadcast (line 49), applications/frontend-core-web (lines 51, 100).
7. **Reference pages use bullet lists instead of `<StyledTable>`** (3/9) — frontend-react-player.mdx (Player components), frontend-react-broadcast.mdx (Broadcast components), naap-architecture.mdx ShellContext services. Check 5.5+5.23.
8. **`<StyledSteps>` missing on procedural content** (1/9 — instruction page) — building-a-plugin.mdx is procedural but renders as bold-prose-then-code instead of `<StyledSteps>` per check 5.21.
9. **Multi-variant content not in `<Tabs>`** (4/9) — alt-gateways/overview Discovery Patterns; alt-gateways/browser-and-mobile platform variants; applications/overview language paths; applications/frontend-core-web framework integrations. Check 5.14+5.18.
10. **Mermaid governance violations** (1/9) — naap-architecture uses hardcoded hex theme instead of `MermaidColours.jsx`; alt-gateways/browser-and-mobile uses ASCII flow diagram instead of Mermaid entirely.
11. **Versions unpinned** (9/9) — `@livepeer/react`, `@naap/plugin-sdk`, hls.js, livepeer-python-gateway, `livepeer/naap` clone all reference HEAD or latest with no version anchor.
12. **No TESTED labels on any code blocks** (9/9, ~24 blocks).
13. **Deprecated term "broadcaster" used as Gateway synonym** (1/9) — alt-gateways/overview.mdx lines 38, 46.
14. **Critical operational fact buried in `<Note>`** (1/9) — alt-gateways/overview.mdx line 143 (signer unavailability blocks job submission) violates check 2.D7.
15. **Quantification conflict** (1/9) — naap-architecture.mdx claims "12 plugins" but lists 8; tied to the missing `plugin-registry.mdx` IA gap.

## Cross-page duplication and link gaps in this section

- **livepeercdn.studio HLS URL pattern** (`https://livepeercdn.studio/hls/{playbackId}/index.m3u8`) duplicated across 4 application pages (overview, frontend-react-player, frontend-core-web, alt-gateways/browser-and-mobile) and the WebRTC variant on broadcast page — candidate for shared data module.
- **`livepeer/ui-kit` repo** linked only on frontend-react-player and frontend-react-broadcast — should appear on the applications overview and core-web pages too.
- **`livepeer/naap` repo** linked only on plugins-and-extensions/overview — should be on naap-architecture and building-a-plugin too.
- **`livepeer/livepeer-python-gateway` repo** named 4 times on alt-gateways/overview but only the `/tree/main/examples` URL is hyperlinked — repo root never linked.
- **WHIP spec** mentioned on broadcast page but not linked to IETF draft; ingest endpoint mentioned on broadcast page but documented nowhere as a referenced URL pattern.
- **Stream-creation flow** referenced ("Get the stream key from the stream creation API response", frontend-react-broadcast line 71) without link to the actual stream-creation page in v2/.
- **AI Service Registry contract** referenced on alt-gateways/overview (line 110) without Arbiscan link or contract address.
- **go-livepeer PRs #3791 and #3822** cited on alt-gateways/overview (line 38) without GitHub hyperlinks.

## Special-focus brief checks (results)

- **alt-gateways subsumes Persona E (SDK/Alt-Gateway Builder) per Task 1 §F.1**: PARTIAL. alt-gateways/overview.mdx + browser-and-mobile.mdx cover the concept, but the two child pages that complete Persona E (livepeer-python-gateway implementation + remote-signer-integration) are EMPTY STUBS. Persona E journey is broken at sibling-page level.
- **applications/frontend-* pages must reference @livepeer/ui-kit not deprecated names**: PASS. All 4 applications pages use `@livepeer/react` (the ui-kit npm name). No `livepeer.js` or `livepeer/sdk` references found. Per `diagrams2.mdx` verification §2, livepeer.js = ui-kit (collapsed), and these pages correctly use the collapsed name.
- **plugins-and-extensions pages serve Persona 3**: PASS. All 3 pages target plugin authors / extension builders. building-a-plugin.mdx is the primary builder-path artefact.
- **Verify upstream repo links**:
  - **livepeer/naap**: linked correctly on plugins-and-extensions/overview line 35 + line 77 + line 48 of building-a-plugin (as clone URL). Not linked on naap-architecture.
  - **j0sh/livepeer-python-gateway** (or livepeer/livepeer-python-gateway): mentioned 4× on alt-gateways/overview but only `tree/main/examples` is a real URL (line 87). The repo root itself is referenced as backtick-quoted text without being hyperlinked. Need to verify whether the canonical home is `j0sh/livepeer-python-gateway` (per brief) or `livepeer/livepeer-python-gateway` (per page text).
  - **livepeer/ui-kit**: linked on frontend-react-player (line 134) and frontend-react-broadcast (line 102) only. Should be on applications/overview and frontend-core-web (for the hls.js + ui-kit ecosystem note).
- **naap-architecture was SPLIT from `guides/beta-projects/naap.mdx` — check the split was clean**: The architecture page reads as standalone — no leftover guide-style content. However the split appears to have **dropped** the planned `plugin-runtime.mdx` and `plugin-registry.mdx` companions (IA gap above). The "12 plugins" claim in architecture (line 102) appears to be inherited from a planned-but-not-created `plugin-registry.mdx` aggregation.

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)

**Strongest cross-page gap:** All three subsections promise builder outcomes but fall short of completing them:
- **plugins-and-extensions** orients the reader to NaaP but ships them to operator.livepeer.org/docs for the actual development path. building-a-plugin.mdx is a happy-path quickstart with no prerequisites, no verification, no troubleshooting. No internal reference for plugin lifecycle or the registry.
- **alt-gateways** explains the concept but the two child pages that would complete the Persona E build journey (livepeer-python-gateway, remote-signer-integration) are empty stubs.
- **applications** routes the reader to three framework paths but never compares them on cost, bundle size, latency, or production-readiness. Each child page lists primitives in bullet form without `<StyledTable>` and without composed use-case recipes.

**Fix:** Each subsection needs (1) a decision frame at the overview level (StyledTable comparison of options), (2) prerequisites at the start of every procedural / reference page, (3) verification or production-checklist at the end. Section-wide remediation should also fill the two empty stubs in alt-gateways and decide the policy on the two missing plugins-and-extensions IA pages.

### Layer 2 — Composition (section level)

**Missing patterns across the section:**
- 0/9 pages use `<Tabs>` despite 4 pages having multi-variant content (Discovery Patterns / browser-vs-mobile platforms / frontend frameworks / language paths).
- 0/9 pages use `<Columns cols={2}>` + `<CustomCardTitle>` for Related Pages. 2 pages use `<CardGroup>` + plain `<Card title=...>`. 7 pages have NO Related Pages block — closing prose paragraph used instead.
- 0/9 pages use `<AccordionGroup>` for trade-offs, FAQ, common-errors, or "when not to use" content.
- 1/9 (naap-architecture) uses Mermaid — and the one Mermaid instance violates check 5.27 with hardcoded theme hex.
- 0/9 instruction-style pages (building-a-plugin) use `<StyledSteps>`.
- 2/9 reference pages (frontend-react-player, frontend-react-broadcast) use bullet lists where `<StyledTable>` is required.
- 5 pages contain 7 instances of escaped-backtick template literals that will render literally.

**Fix:** Section-wide remediation needed: (a) author one `<Tabs>` exemplar and propagate to 4 pages; (b) standardise Related Pages footer to `<Columns cols={2}>` + `<Card horizontal>` + `<CustomCardTitle>` across all 9 pages; (c) convert reference bullet lists to `<StyledTable>`; (d) wrap building-a-plugin procedural content in `<StyledSteps>`; (e) global find/replace `\`...\``  escaped backticks to unescaped form inside fenced code blocks.

### Layer 3 — Cross-page integration (section level)

**Inter-section navigation gaps:**
- 9/9 pages lack cross-tab graduation (Gateways, Solutions, About, Orchestrators) — every page is a developers/ island.
- 7/9 pages have NO Related Pages block — readers leave each page via in-prose closing paragraphs that route to at most 1-2 sibling pages.
- No bidirectional linking between plugins-and-extensions/overview and naap-architecture; no back-link from building-a-plugin to overview.
- No link from alt-gateways/overview to the `v2/developers/guides/gateways-as-developer/` parent that the IA notes positioned as the parent group.
- 2 sibling pages registered in nav are empty stubs (livepeer-python-gateway, remote-signer-integration).
- 2 sibling pages planned in notes.mdx do not exist (plugin-runtime, plugin-registry).
- Upstream repo links are inconsistent: 3 repos each linked on 1-2 pages instead of every page where they're mentioned.
- WHIP, hls.js, Radix, AI Service Registry, Livepeer Explorer API, RFC 8216 all referenced without hyperlinks.

**Fix:** (a) Add standardised Related Pages footer to all 9 pages with: 2 internal cards (sibling pages), 1 upstream repo card, 2 cross-tab cards (Gateways or Solutions or About). (b) Fill or replace the 2 empty stubs. (c) Decide on the 2 IA-gap pages. (d) Ensure each upstream repo is hyperlinked on first mention of every page.

### Layer 4 — Veracity (section level)

**Repeated unverified claims:**
- "12 plugins" on naap-architecture conflicts with the 8-row table; "12 templates / 25+ slash commands / 40+ AI capabilities" pattern of unsourced quantification recurs across NaaP and adjacent docs.
- All `@livepeer/react`, `@naap/plugin-sdk`, hls.js, livepeer-python-gateway version references are HEAD-pinned or unpinned.
- Zero TESTED labels on the ~24 code blocks in the section.
- `veracityStatus` field absent on all 9 reviewed pages; legacy `status: current` present on all 9. `lastVerified` is set on all 9 (2026-05-13 to 2026-05-15) — verification claimed without the canonical field that makes the claim honest.
- "broadcaster" deprecated synonym used on alt-gateways/overview lines 38+46.
- Phase 4 / PR claims (e.g. PRs #3791, #3822 on alt-gateways) cited as text without hyperlinks.
- "Safari has native HLS support" — well-known but unanchored.
- "Radix pattern" referenced on frontend-react-player without link.

**Fix:** Add `veracityStatus: verified` and drop `status: current` from all 9 pages. Pin all npm versions. Add TESTED comments. Hyperlink all referenced PRs, repos, and external specs. Resolve the "12 plugins" / 8-row mismatch by either expanding the table or correcting the count. Replace "broadcaster" deprecated term with "Gateway".

### Layer 5 — Product-forward depth (section level)

**What's missing to feel like product, not wiki:**
- No maturity badges on any page. NaaP plugin SDK is in beta with breaking changes (warned in body Warning, not headlined). livepeer-python-gateway is j0sh-maintained / experimental. `@livepeer/react` is GA. `@naap/plugin-sdk` is pre-1.0. None of this is signalled in the page header.
- No "When not to use" sections anywhere across 9 pages.
- No production-readiness statements (no SLO, no cost guidance, no rate-limit signals).
- No failure-modes / "what could go wrong" sections (except the buried Note on alt-gateways/overview and the inline error-recovery on frontend-core-web).
- Reference pages (frontend-react-player, frontend-react-broadcast) read as primitive lists without composed-recipe examples for real use cases.
- Plugin pages refer to operator.livepeer.org/docs heavily — v2/ is a referral surface rather than a self-contained product doc.
- Browser-and-mobile is mostly browser; mobile content is one paragraph.
- No "Get help" footer (Discord, GitHub issues, forum) on any page.
- No screenshots / `<Frame>` / product preview on any of the 9 pages despite NaaP being a UI product, the React Player / Broadcast being visual components, and the frontend pages being framework integrations where a screenshot would orient the reader.

**Fix:** Each page gets a `<Badge>` near the header CTA (`GA` / `Beta` / `Experimental` / `Reference architecture` / `Pattern documented`). Each concept page adds a §"When not to use" or §"Trade-offs". Each instruction/reference page adds a §"Common errors" `<AccordionGroup>`. Section gets a shared §"Get help" footer block (Discord, forum, GitHub issues for the relevant repo). Reference pages add §"Use-case recipes" with composed snippets. Add screenshots/Frames where the page describes UI.

## Prioritised section remediation

| # | Step | Pages affected | Effort | Severity |
|---|---|---|---|---|
| 1 | Frontmatter sweep: drop `status: current`, add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus: verified` to all 9 pages. Convert non-canonical pageTypes: 3× `overview` → `concept`; 1× `how_to` → `instruction` | 9 pages | M | HIGH |
| 2 | Fix all 7 instances of escaped-backtick template literals (`\`...\``  → `` `...` ``) inside tsx/vue fences and JSX attributes | 5 pages: browser-and-mobile, frontend-react-player×2, frontend-react-broadcast, frontend-core-web×2 | S | HIGH |
| 3 | Add `icon` + `title` to ~24 fenced code blocks across all 9 pages. Where the code is a TypeScript/JSX file, use `icon="code"` + `title="filename.tsx"`; bash → `icon="terminal"` + `title="install.sh"`; etc. | 9 pages | M | HIGH |
| 4 | Replace closing-prose-paragraph next-step on 7 pages with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` containing `<Card horizontal>` + `<CustomCardTitle icon=... title=... />` cards. Convert 2 existing `<CardGroup>`-pattern footers to the same form | 9 pages | L | HIGH |
| 5 | Add ≥3 cross-tab cards to every Related Pages block: minimum `/v2/gateways/setup/connect` (operator path), `/v2/about/network/architecture` (protocol), `/v2/solutions/managed-gateway` or equivalent | 9 pages | M | HIGH |
| 6 | Replace "broadcaster" deprecated term on alt-gateways/overview lines 38 + 46 with "Gateway" or rewrite | 1 page | S | HIGH |
| 7 | Promote `<Note>` on alt-gateways/overview line 143 (signer unavailability) to main-body `<Warning>` or new §"Signer availability" section | 1 page | S | HIGH |
| 8 | Replace hardcoded Mermaid hex theme on naap-architecture (line 63) with `MermaidColours.jsx` reference per check 5.27 | 1 page | M | HIGH |
| 9 | Convert ASCII flow diagram on alt-gateways/browser-and-mobile (lines 64-76) to governed Mermaid using `MermaidColours.jsx` | 1 page | M | HIGH |
| 10 | Convert procedural content on building-a-plugin.mdx (lines 37-83) into `<StyledSteps>` with named `<StyledStep>` items + add Prerequisites + Verification + Common-errors sections | 1 page | L | HIGH |
| 11 | Convert reference bullet lists to `<StyledTable>` on frontend-react-player (lines 82-107) and frontend-react-broadcast (lines 77-99) | 2 pages | L | HIGH |
| 12 | Reconcile naap-architecture "12 plugins" claim with 8-row table — either expand table to 12 (and decide whether to create `plugin-registry.mdx`) or correct the count | 1 page + IA decision | M | HIGH |
| 13 | Convert multi-variant content to `<Tabs>` with `icon` props: alt-gateways/overview Discovery Patterns; browser-and-mobile platform variants; applications/overview language paths; frontend-core-web framework integrations | 4 pages | L | HIGH |
| 14 | Fill 2 EMPTY-STUB pages: livepeer-python-gateway.mdx + remote-signer-integration.mdx | 2 pages | XL | HIGH |
| 15 | Decide IA-GAP policy: create `plugin-runtime.mdx` + `plugin-registry.mdx`, OR fold content into naap-architecture, OR remove from planned IA in notes.mdx | 0-2 pages | XL | HIGH |
| 16 | Hyperlink all upstream repos on first mention per page: `livepeer/naap`, `livepeer/ui-kit`, `livepeer/livepeer-python-gateway` (or `j0sh/livepeer-python-gateway`), `@naap/plugin-sdk` npm, `@livepeer/react` npm, hls.js, Radix UI, WHIP IETF draft, RFC 8216, AI Service Registry contract | 9 pages | M | MEDIUM |
| 17 | Pin all version references: `@livepeer/react@^X.Y`, `@naap/plugin-sdk@^X.Y`, `hls.js@^1.5`, `livepeer-python-gateway` commit/tag, `livepeer/naap` clone tag | 9 pages | M | MEDIUM |
| 18 | Add `<Badge>` maturity marker near header CTA on every page: GA / Beta / Experimental / Reference architecture / Pattern documented | 9 pages | S | MEDIUM |
| 19 | Add §"When not to use" or "Trade-offs" or "Production checklist" section on concept/reference pages | 7 pages (excluding the 2 stubs and building-a-plugin) | L | MEDIUM |
| 20 | Add TESTED labels / NOT-TESTED with reason to all ~24 code blocks | 9 pages | M | MEDIUM |
| 21 | Add Prerequisites section to building-a-plugin (Node.js, npm, Docker, ports, GitHub) and to frontend-react-broadcast (stream-creation prereq, HTTPS, browser support) | 2 pages | M | MEDIUM |
| 22 | Add decision-matrix `<StyledTable>` to applications/overview comparing the 3 paths on framework / bundle / latency / use case | 1 page | M | MEDIUM |
| 23 | Add maturity / production-readiness statements: livepeer-python-gateway as j0sh-maintained experimental; `@naap/plugin-sdk` as pre-1.0 beta; `@livepeer/react` as GA; alt-gateway pattern as documented but Persona E in progress | 9 pages | M | MEDIUM |
| 24 | Extract livepeercdn.studio HLS URL pattern to a shared data module (`snippets/data/applications/playback-host.js` or similar) and import on the 4-5 pages that hardcode it | 4-5 pages + new data module | M | INFO |
| 25 | Resolve double `<CustomDivider />` on naap-architecture lines 158-160 — keep one | 1 page | S | HIGH |
| 26 | Replace `---` markdown horizontal rule on alt-gateways/overview line 36 with `<CustomDivider />` component for consistency | 1 page | S | HIGH |
| 27 | Add §"Get help" footer block (Discord, forum, GitHub issues per relevant repo) to all 9 pages — could live above the Related Pages block | 9 pages | M | INFO |
| 28 | Add screenshots / `<Frame>` previews where pages describe UI: NaaP overview (operator dashboard), React Player (composed player), React Broadcast (broadcast UI) | 3 pages | M | INFO |
