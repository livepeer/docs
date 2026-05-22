# Review: ai-sdks-overview.mdx

**Page**: `v2/developers/build/ai-and-agents/ai-sdks-overview.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: missing
**Bytes**: 8,181
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (lines 1-28) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` (line 24) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9-1.10 | industry/niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Installation, initialisation, and method coverage for the @livepeer/ai JavaScript SDK and livepeer-ai Python SDK." subject-led, 122 chars |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `@livepeer/ai`, `livepeer-ai`, `npm`, `pip`, `TypeScript` — specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 40: "Two official SDKs wrap the Livepeer AI gateway REST API..." subject-led |
| 2.6-2.22 | | Voice | PASS | |
| 2. Voice | 2.D1 | Code-first | N/A | reference |
| 2. Voice | 2.D2 | API has code | PASS | |
| 2. Voice | 2.D3 | Versions explicit | FAIL | Line 35 says "Pin to a specific version; both are in alpha"; but install commands at lines 54-59 and 129 give `npm install @livepeer/ai zod` and `pip install livepeer-ai` with no pin — the page contradicts its own guidance |
| 2. Voice | 2.D4 | Errors in main | PASS | Error-handling block at line 93 in main flow |
| 2. Voice | 2.D5 | Self-evident prose | PASS | |
| 2. Voice | 2.D6 | Marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | FAIL | `<Note>` at line 42-44 carries primary alpha warning — should be `<Warning>` not `<Note>` (also the same content is in the header CTA Tip at line 35) |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "@livepeer/ai" (24), "Livepeer AI" (22), "Pipeline Method Reference" (23), "Repositories and Versioning" (23), "Related Pages" (exempt) |
| 3. Headings | 3.2 | Banned/weak | PASS | No banned heading |
| 3. Headings | 3.3-3.10 | | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "AI SDKs" — 2 words |
| 4. Structure | 4.1-4.4 | | PASS | |
| 4. Structure | 4.5 | Prerequisites | N/A | reference |
| 4. Structure | 4.6 | Out-of-scope | PASS | |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | MIXED | Text-to-image example (lines 76-91) duplicates `ai-jobs-direct-quickstart.mdx` SDK Tab examples (lines 155-198) — same call, two pages |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | Zero cross-tab links |
| 4. Structure | 4.11 | Discord test | PASS | |
| 4. Structure | 4.12 | Page size | PASS | 8.2 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Alpha warning present; but no SDK-vs-curl trade-off, no JS-vs-Python guidance ("when do I pick which") |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Code language tag | PASS | All blocks tagged |
| 4. Structure | 4.18-4.20 | | PASS / N/A | |
| 5. Layout | 5.1 | Correct template | MIXED | reference; uses `<StyledTable>` for pipeline method reference (good) but no `<ParamField>` for client constructor signature |
| 5. Layout | 5.2 | Required sections | PASS | Reference data + Related Pages present |
| 5.3-5.4 | | Components | PASS | |
| 5. Layout | 5.5 | Info-type → component | PASS | StyledTable used at line 191 |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 26) |
| 5.8 | CSS | PASS | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view | PASS | StyledTable for cross-language method names |
| 5. Layout | 5.15 | Data imports | MIXED | Pipeline method names are SDK-controlled, may be acceptable hardcoded; but Repos section (line 254-256) hardcodes 2 repo URLs and an npm package name |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | Only Related Pages CardGroup, no in-prose Next Step duplication |
| 5. Layout | 5.17 | Related Pages format | MIXED | Uses `<CardGroup cols={2}>` at line 265 not `<Columns cols={2}>`; Cards use `<Card>` directly with `title=` + `icon=` + `arrow` + `horizontal` (line 266-302), not `<CustomCardTitle>` wrapper. Mintlify supports both patterns; rubric 5.17 specifies `<CustomCardTitle>` wrapper |
| 5. Layout | 5.18 | Tab icon | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon | N/A | |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All 9 fenced code blocks (lines 54, 64, 76, 97, 114, 129, 135, 145, 167) missing both `icon` and `title` |
| 5. Layout | 5.21 | StyledSteps | N/A | reference |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | Cards lack `<CustomCardTitle>` wrapper |
| 5. Layout | 5.23 | StyledTable | PASS | Pipeline method reference uses `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider | MIXED | Opening divider at line 38; dividers between sections OK; line 248 final divider before Related Pages — placement correct. But there's no opening `<CustomDivider />` imported at the top — review imports section (lines 30-32) lacks `CustomDivider` import even though the rendered code uses it implicitly (Mintlify global vs custom imported variant — need to confirm which is used; the file uses `---` markdown dividers, not the JSX component) |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29-5.30 | | N/A | |
| 5. Layout | 5.31 | Decision-critical | MIXED | Alpha status is hidden in `<Note>` mid-page (line 42) and at top in `<Tip>` (line 35) — duplicated, but neither is a strong `<Warning>` |
| 5. Layout | 5.32 | Reference tables end | MIXED | Pipeline Method Reference table (line 191) sits mid-page; matrix recommends end-of-page for reference tables |
| 5.33-5.34 | | | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Both SDKs are generated from the ai-runner OpenAPI spec" — no link to the spec |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No labels |
| 6. Veracity | 6.3 | Deprecated API | MIXED | Line 256 names "deprecated `livepeer/livepeer-ai-sdks` repository" — good, named explicitly. But no version in `@livepeer/ai` install — drift risk |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus | FAIL | Missing |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `@livepeer/ai` alpha-stage but install unpinned; same for `livepeer-ai` Python |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6.10-6.12 | | | MIXED / NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | line 2520 |
| 7.2-7.5 | | | PASS | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | | PASS | |
| 8. Links | 8.1 | Internal | PASS | All resolve |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8.3-8.6 | | | PASS / N/A | |
| 9. Process | | | NOT-TESTED | |
| 10. Completeness | | | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "AI SDKs" | PASS | |
| sidebarTitle | Yes | "AI SDKs" | PASS | |
| description | Yes | "Installation, initialisation..." | PASS | |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Missing — add `reference` |
| complexity | No | — | FAIL | Missing — add `intermediate` |
| lifecycleStage | No | — | FAIL | Missing — add `build` |
| keywords | Yes | array | PASS | |
| og:image (5 fields) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Missing |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Not imported as JSX (uses markdown `---`) | Required | MIXED — markdown horizontal rule renders but `<CustomDivider />` is the in-repo standard |
| `<StyledTable>` / `<TableRow>` / `<TableCell>` | Yes (line 191) | Required (reference) | Used for pipeline method names |
| `<ParamField>` | No | Recommended (reference) | Constructor signatures could use this |
| Fenced code with icon+title | No | Required | All 9 missing |
| `<Tabs>` | No | Recommended | Could group JS vs Python init/usage |
| `<Note>` | Yes (line 42) | Avoid for primary | FAIL 2.D7 |
| `<Tip>` | Yes (line 34 header CTA) | — | OK |
| `<Columns cols={2}>` Related Pages | No | Required | Uses `<CardGroup>` |
| `<CustomCardTitle>` | No | Required for nav cards | Cards use `<Card>` with `title=...` props directly |

## Cross-page duplication and link gaps

- **OVERLAP**: Text-to-image SDK example (lines 76-91) duplicates `ai-jobs-direct-quickstart.mdx` SDK Tab examples (lines 155-198). Two pages with the same example. ai-sdks-overview should be the canonical reference; the quickstart should tease and link.
- **LINK GAPS**: No link to the OpenAPI spec file ("generated from the ai-runner OpenAPI specification" — line 40 + 252, no link). No npm package page link (`https://www.npmjs.com/package/@livepeer/ai`). No PyPI link (`https://pypi.org/project/livepeer-ai/`).
- **STRANDED**: Reader who picks the SDK has no link to a CHANGELOG or release notes path.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| `<Note>` for primary | 1 | line 42-44 alpha warning |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| @livepeer/ai | 5 | 5 | 4 | 5 | 5 | 24 |
| Livepeer AI | 4 | 4 | 5 | 4 | 5 | 22 |
| Pipeline Method Reference | 5 | 4 | 4 | 5 | 5 | 23 |
| Repositories and Versioning | 5 | 4 | 4 | 5 | 5 | 23 |
| Related Pages | — | — | — | — | — | exempt |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 54 | bash | ✗ | ✗ | NOT-TESTED | install: needs pin |
| 64 | typescript | ✗ | ✗ | NOT-TESTED | client init |
| 76 | typescript | ✗ | ✗ | NOT-TESTED | t2i example |
| 97 | typescript | ✗ | ✗ | NOT-TESTED | error handling |
| 114 | typescript | ✗ | ✗ | NOT-TESTED | custom gateway |
| 129 | bash | ✗ | ✗ | NOT-TESTED | python install — needs pin |
| 135 | python | ✗ | ✗ | NOT-TESTED | python init |
| 145 | python | ✗ | ✗ | NOT-TESTED | python t2i |
| 167 | python | ✗ | ✗ | NOT-TESTED | async python |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page provides install + first example for each SDK, but doesn't help the reader who is choosing between curl/JS/Python. There's no "Why use the SDK over curl?" framing. SDK alpha-stage means many readers may stick with curl until GA — the page should say so explicitly.
- **Fix step:** Add a §"SDK vs direct REST" decision block before §"@livepeer/ai". Three rows: (1) "Use the SDK when..." — typed errors, retries, schema validation; (2) "Use curl when..." — quick test, no JS/Python toolchain; (3) "Wait for GA when..." — production deployment where breaking changes are unacceptable. Wrap in `<StyledTable>` or three `<Card>`s.
- **Source/exemplar:** OpenAI docs SDK vs API page; Stripe SDK page.

### Layer 2 — Composition
- **Gap:** All 9 code blocks lack `icon` + `title` (5.20). No `<Tabs>` to group JS install + JS init + JS example as a JS view, and same for Python (the two SDK sections are sequential H2s instead). Cards use plain `<Card>` not `<CustomCardTitle>` (5.17+5.22). Repositories section (lines 250-258) is a 2-bullet list — would fit a `<StyledTable>` showing JS / Python / package / repo / status.
- **Fix step:** Add `icon="terminal"` + `title="install.sh"` etc. to each code block. Wrap §"@livepeer/ai" + §"Livepeer AI" inside one `<Tabs>` block: `<Tab title="TypeScript" icon="js">` and `<Tab title="Python" icon="python">`. Convert Repositories section to `<StyledTable>` with columns: SDK | Repo | Package | Registry | Status. Convert Related Pages CardGroup to `<Columns cols={2}>` with `<CustomCardTitle icon ... horizontal>` per check 5.17.
- **Source/exemplar:** Stripe/Mintlify SDK pages with Tabs per language.

### Layer 3 — Cross-page integration
- **Gap:** No link to npm or PyPI package pages. No link to the OpenAPI spec. No CHANGELOG link. No graduation to a "build an app" tutorial (`ai-image-generation-app.mdx` exists but isn't linked).
- **Fix step:** Add inline links: line 254 → `[npm](https://www.npmjs.com/package/@livepeer/ai)`, `[PyPI](https://pypi.org/project/livepeer-ai/)`. Add line 40 inline link to OpenAPI spec: `[OpenAPI spec](https://github.com/livepeer/ai-runner/blob/main/openapi.yaml)` (verify path). Add a Related Pages card: "Build an AI image generation app" → `/v2/developers/build/tutorials/ai-image-generation-app`.
- **Source/exemplar:** npm + PyPI package URLs; in-repo `ai-image-generation-app.mdx` tutorial.

### Layer 4 — Veracity and source authority
- **Gap:** Frontmatter lacks `veracityStatus` — given the unpinned alpha-stage installs, honest value is `unverified`. SDK example code (lines 64-91, 135-167) not TESTED. `<Note>` at line 42 says "alpha" but no version range or release date.
- **Fix step:** Add `veracityStatus: unverified` (line 27 region). Pin every install: `npm install @livepeer/ai@<latest> zod` and `pip install livepeer-ai==<latest>`. Label code blocks TESTED with date / NOT-TESTED with reason. Add release/alpha version reference in the Note: "Current alpha: vX.Y.Z (released YYYY-MM-DD)".
- **Source/exemplar:** npm registry; PyPI; `livepeer/livepeer-ai-js` releases.

### Layer 5 — Product-forward depth
- **Gap:** Page is install-and-go, but doesn't address production concerns: retry policy, timeout, streaming (for LLM), browser usage caveats, bundle size, tree-shaking, peer dependencies. The "browser runtimes" claim at line 50 ("supports Node.js, Bun, and browser runtimes") is unsupported — bundle size for an alpha SDK matters. No "production checklist".
- **Fix step:** Add §"Production considerations" with: (a) bundle size (KB minified); (b) browser support matrix; (c) retry behaviour (built-in or not); (d) timeout default; (e) streaming support (LLM pipeline). Add §"Migration" — what changes between alpha versions, semver policy.
- **Source/exemplar:** AWS SDK / OpenAI SDK "advanced" sections; Stripe Node.js docs "production" page.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Four required frontmatter fields missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (1.1, 1.4, 1.6, 1.7, 1.8).
2. SDK installs unpinned (`npm install @livepeer/ai zod`, `pip install livepeer-ai`) despite page itself stating alpha-stage requires pinning (lines 35 + 42-44). Self-contradicting (2.D3, 6.8).
3. All 9 code blocks missing `icon` + `title` (5.20).
4. `<Note>` at line 42 carries primary alpha warning — should be `<Warning>` (2.D7).
5. Related Pages uses `<CardGroup>` + plain `<Card title=...>` instead of `<Columns cols={2}>` + `<CustomCardTitle>` (5.17, 5.22).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add missing frontmatter: `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` (until installs pinned) | 24-27 | HIGH | S | check 1.1+1.4+1.6+1.7+1.8 |
| 2 | Pin every install: `npm install @livepeer/ai@<latest-alpha> zod` (line 54); `pip install livepeer-ai==<latest-alpha>` (line 129). Add `{/* REVIEW: pin alpha version */}` if unknown | 54, 56, 58, 129 | HIGH | S | check 2.D3+6.8 |
| 3 | Replace `<Note>` (line 42-44) with `<Warning>` carrying the same content; remove duplication with the header CTA Tip or move the strong warning here only | 42-44 | HIGH | S | check 2.D7 |
| 4 | Add `icon` + `title` to every fenced code block (9 total): bash → `icon="terminal" title="install.sh"`; typescript → `icon="code" title="livepeer.ts"`; python → `icon="code" title="livepeer.py"` | 54, 64, 76, 97, 114, 129, 135, 145, 167 | HIGH | M | check 5.20 |
| 5 | Convert Related Pages from `<CardGroup cols={2}>` (line 265) to `<Columns cols={2}>` with `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` per check 5.17. Drop `arrow` + `horizontal` props on `<Card>` once wrapped | 265-302 | HIGH | M | check 5.17+5.22 |
| 6 | Add ≥3 cross-tab graduation cards in Related Pages: `/v2/gateways/setup/connect`, `/v2/about/network/architecture`, `/v2/solutions/managed-gateway` | 265-302 | HIGH | S | check 4.10+7.6 |
| 7 | Remove legacy `status: current` field | 26 | MEDIUM | S | check 5.7 |
| 8 | Add inline links at line 254 to npm + PyPI + OpenAPI spec | 254-256 | MEDIUM | S | check 6.1+6.10 |
| 9 | Label code blocks TESTED with date / NOT-TESTED with reason | 9 code blocks | MEDIUM | M | check 6.2 |
| 10 | Convert markdown `---` horizontal rules (lines 38, 46, 121, 185, 248, 259) to `<CustomDivider />` JSX component — and import it (line 30-32) | imports + rules | MEDIUM | S | check 5.26 |
| 11 | Add §"SDK vs direct REST" decision block before §"@livepeer/ai" | line 47 | MEDIUM | M | layer 1 |
| 12 | Add §"Production considerations" — bundle size, retry policy, timeout, streaming support | new H2 | INFO | M | layer 5 |
| 13 | Wrap §"@livepeer/ai" + §"Livepeer AI" in a `<Tabs>` block with `<Tab icon="js">` / `<Tab icon="python">` | 48-184 | INFO | L | layer 2 |
| 14 | Tighten/de-duplicate t2i example with `ai-jobs-direct-quickstart.mdx` — keep canonical example here; quickstart should tease | 76-91 + cross-page | INFO | M | check 4.8 |
