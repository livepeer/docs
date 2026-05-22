# Review: storyboard.mdx

**Page**: `v2/developers/build/ai-and-agents/agents/storyboard.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A4
**pageType (from frontmatter)**: `overview` (NON-CANONICAL — should be `concept`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 7,434
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 24) non-canonical |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Storyboard is an agent-powered creative platform..." subject-first; well-bounded |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 OG fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "Storyboard", "@livepeer/agent", "@livepeer/creative-kit", "Daydream" — specific |
| 1. Frontmatter | 1.14 | audience register | PASS | |
| 2. Voice | 2.1 | UK English | PASS | No US hits (line 94 `/analyze` is a slash-command literal) |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | "Storyboard is a web application…" subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | Storyboard, `@livepeer/agent`, `@livepeer/creative-kit`, Daydream consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Storyboard exposes…", "`@livepeer/agent`…", "Applications (Layer 2):…" |
| 2. Voice | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice | 2.15 | description not self-referential | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.21 | First-use defined | MIXED | "Scope" (line 109) named without definition — what is Scope vs BYOC vs Cascade? "Scope Orchestrators (LV2V, real-time video)" is the only inline gloss. "MetaHuman" is not defined |
| 2. Voice | 2.D1 | Code-first opening | N/A | concept page |
| 2. Voice | 2.D2 | API/method has code or link | MIXED | `AgentRunner`, `ToolRegistry`, `WorkingMemory`, `ArtifactStore`, `ChatPanel`, `InfiniteBoard`, `ProjectPipeline`, `CommandRouter`, `CapabilityResolver`, `ArtifactCard` — 10 named classes/components in prose, NO code example or repo permalink for any of them on this page |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pin for `@livepeer/agent` or `@livepeer/creative-kit` (and they are not on npm per brief) |
| 2. Voice | 2.D4 | Errors in main content | N/A | |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing adjacent | PASS | |
| 2. Voice | 2.D7 | Note not for primary content | N/A | No Note |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Capabilities" (21), "Three-Layer Architecture" (24 — well-formed), "LLM Provider Configuration" (24), "Building with the SDK" (22), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Storyboard" — 1 word |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the developer evaluate Storyboard as a creative-AI reference architecture" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | No prereq breadcrumb to `agents/overview` |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None — page jumps from concept to install (line 164) |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | `agent-sdk` page is linked twice but is an orphan/coming-soon |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | FAIL | §"LLM Provider Configuration" (lines 119–155) DUPLICATES §"Available providers" of `llm-provider-routing.mdx` (the same four-provider table — Gemini/Claude/OpenAI/Livepeer with the same env vars). Same table, two pages |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab graduation |
| 4. Structure | 4.11 | Discord test | MIXED | Reader knows what Storyboard is; cannot evaluate whether it's a product they can adopt today vs. a reference application only |
| 4. Structure | 4.12 | Page size | PASS | 7.4 KB |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | "Automatic fallback chains" (line 92) is a positive trade-off; no failure mode or "when not to use" |
| 4. Structure | 4.17 | Code blocks have language tag | MIXED | Line 50–53 ` ``` ` fenced block has NO language tag (it's an illustrative prompt example); line 100–109 has NO language tag (architecture diagram). Line 163–167 has `bash` |
| 4. Structure | 4.20 | API named has code or link | MIXED | 10 class/component names without links/code samples |
| 5. Layout | 5.1 | Correct template | MIXED | concept structure but non-canonical pageType |
| 5. Layout | 5.7 | No old-schema | FAIL | `pageType: overview`, `status: current` |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | URL `storyboard-rust.vercel.app` hardcoded line 40; `sdk.daydream.monster` hardcoded line 107; `daydream.live` hardcoded line 155; `daydream.monster/install.sh` line 164 — all should come from a data file or constant |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | Single Related Pages block at line 175 |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; Cards use plain `title=` not `<CustomCardTitle>` |
| 5. Layout | 5.20 | Code block icon + title | FAIL | Line 50 (no lang), line 100 (no lang), line 163 (`bash`, no icon, no title), table cells inside StyledTable — no icon/title on any |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural |
| 5. Layout | 5.22 | Nav Card uses CustomCardTitle | FAIL | |
| 5. Layout | 5.23 | StyledTable used | PASS | Two `<StyledTable variant="bordered">` (lines 57, 123) |
| 5. Layout | 5.24 | Max 1–2 tables | PASS | Two |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | Two tables — at limit |
| 5. Layout | 5.26 | CustomDivider placement | PASS | |
| 5. Layout | 5.27 | Mermaid governed | FAIL | Lines 100–109 contain an ASCII-art three-layer diagram inside a fenced code block (no language). This should be either a Mermaid diagram with `MermaidColours.jsx` per check 5.27, or a `<StyledTable>` |
| 5. Layout | 5.28 | Import ordering | MIXED | LinkArrow, CustomDivider (re-imported — note Mintlify auto-registers `<CustomDivider />` in some pages; line 31 imports it explicitly), StyledTable/TableRow/TableCell — ordering not strictly canonical |
| 5. Layout | 5.31 | Decision-critical visible | MIXED | The Layer 2 architecture is the central concept and is shown via fenced-code ASCII (line 100–109) — low scannability |
| 6. Veracity | 6.1 | Every claim citable | MIXED | "40+ AI capabilities" not cited; "25+ slash commands" not cited; "800-token budget" not cited; model lists in table have no source link |
| 6. Veracity | 6.2 | Code tested | NOT-TESTED | Install line (164–167) has no TESTED label |
| 6. Veracity | 6.4 | Numbers real | MIXED | "40+", "25+", "800-token", "6-scene", "4-shot" — quantities are specific but uncited |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.10 | Source authority | MIXED | Repo named once at end of `llm-provider-routing.mdx` (sibling) but on this page only `storyboard-rust.vercel.app` URL is given — no upstream repo URL on this page |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2555 |
| 7. Navigation | 7.4 | No structural orphans | FAIL | Links to `agents/agent-sdk` (lines 169 in-prose `<LinkArrow>` and 176 Related Pages Card) — page is file-orphan per brief |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation | FAIL | Zero cross-tab links |
| 8. Links | 8.1 | Internal links resolve | MIXED | `agent-sdk` file exists but is not in nav |
| 8. Links | 8.2 | External links live | NOT-TESTED | `storyboard-rust.vercel.app`, `daydream.live`, `daydream.monster`, `sdk.daydream.monster` — none verified 200 |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Page describes architecture but the "Building with the SDK" section (line 159) immediately routes the reader to a file-orphan (`agent-sdk`) for library use |
| 10. Completeness | 10.6 | Code samples working language | MIXED | Only a bash CLI snippet; no JS/TS library example, no Python |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Storyboard" | PASS | |
| sidebarTitle | Yes | "Storyboard" | PASS | |
| description | Yes | "Storyboard is an agent-powered..." | PASS | |
| pageType | Yes | overview | FAIL | NON-CANONICAL |
| audience | Yes | developer | PASS | |
| purpose / complexity / lifecycleStage / veracityStatus | No | — | FAIL | Required |
| keywords | Yes | array | PASS | |
| og:image (and 4 sub-fields) | Yes | developers.png | PASS | |
| status | Yes | current | INFO | Legacy |
| lastVerified | Yes | 2026-05-13 | PASS | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | OK | |
| `<CenteredContainer>` | Yes (1×) | — | OK | Note: import comes implicitly — line 34 uses `<CenteredContainer>` but only `LinkArrow`, `CustomDivider`, `StyledTable`/`TableRow`/`TableCell` are explicitly imported (line 30–32). `CenteredContainer` is not imported — potential render issue. Wait — file imports CustomDivider (line 31) but not CenteredContainer. This may rely on auto-resolution which Mintlify constraints forbid |
| `<Tip>` | Yes (1×) | Recommended | OK | |
| `<Tabs>` | No | Recommended (Capabilities by category) | — | Six capability rows in one StyledTable could be Tabs by category |
| `<Card>` / `<CardGroup cols={2}>` | Yes (1×) | Required (Related) | FAIL | Should be `<Columns>` + `<CustomCardTitle>` |
| Fenced code with icon + title | NO | Required where code | FAIL | Three fenced blocks (lines 50, 100, 163) — none have icon or title; two have no language tag |
| `<StyledTable>` | Yes (2×) | Recommended | OK | At limit of 1–2 |
| Mermaid | No | Should be used for line 100–109 ASCII diagram | FAIL | check 5.27 |

## Cross-page duplication and link gaps

- **OVERLAP CRITICAL**: §"LLM Provider Configuration" (lines 119–155) duplicates `llm-provider-routing.mdx` four-provider table and explanation. Two pages cover the same fact-set. Storyboard should reference `llm-provider-routing.mdx` once, not repeat the table.
- **OVERLAP**: §"Slash commands (25+)" enumerates `/story`, `/film`, `/stream`, `/talk`, `/analyze`, `/project` — none of these are explained, only listed. Reader has to "Type /help in the app" — but the app is `storyboard-rust.vercel.app` external, which means this is not a Livepeer-doc-deliverable.
- **LINK GAPS**:
  - No link to `livepeer/storyboard` GitHub repo on this page (the source is named only in `llm-provider-routing.mdx` line 137)
  - No link to MetaHuman / Unreal Engine docs context (mentioned in `agents/overview.mdx` line 135 — different page) — not really needed here but page references "Scope" without context
  - Two file-orphan links: `agents/agent-sdk` (line 169 `<LinkArrow>` and line 176 Card)
  - No cross-tab graduation links
  - No prereq link to `agents/overview.mdx`
- **STRANDED**: SDK-curious reader is sent to `agent-sdk` (file-orphan). Library-user reader has no JS/TS example on this page. App-curious reader is sent to an external vercel app, not docs.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | None |
| US spellings | 0 | None |
| Banned words | 0 | None |
| Banned phrases | 0 | None |
| Question headings | 0 | None |
| Studio refs | 0 | None |
| Self-reference | 0 | None |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Capabilities | 4 | 4 | 4 | 5 | 4 | 21 |
| Three-Layer Architecture | 5 | 5 | 5 | 5 | 4 | 24 |
| LLM Provider Configuration | 5 | 5 | 5 | 5 | 4 | 24 |
| Building with the SDK | 4 | 4 | 5 | 5 | 4 | 22 |
| Related Pages | exempt | | | | | — |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 50–53 | NO | NO | NO | NOT-TESTED | Illustrative prompt — should be `text` or styled `<Tip>` block |
| 100–109 | NO | NO | NO | NOT-TESTED | ASCII three-layer diagram — should be Mermaid (check 5.27) |
| 163–167 | bash | NO | NO | NOT-TESTED | Install + setup; needs `icon="terminal"`, `title="install.sh"`, TESTED label |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's question is "How do I build something like Storyboard?" The page describes Storyboard's architecture in detail but defers the answer to two pages (`agent-sdk`, `creative-kit`) that per the brief are "coming soon" pending npm publication. The reader can read the architecture but cannot actually build anything from this page. The "Building with the SDK" section (lines 159–169) gives a CLI snippet that requires a Daydream API key not explained on this page.
- **Fix step:** Add §"What you can build today" block immediately after the intro (line 42). Three bullets: (1) Use the live Storyboard app at storyboard-rust.vercel.app (no install needed). (2) Use the `livepeer` CLI to drive the 40+ models (requires Daydream API key from daydream.live). (3) Use `@livepeer/agent` and `@livepeer/creative-kit` as references — npm packages publish soon. Add Daydream API-key path in §"Building with the SDK" before the curl install.
- **Source/exemplar:** `_packet/5-whys-prompt.md` Layer 5 worked example; `.claude/references/layout/best-practice.md` "Mental model" header pattern.

### Layer 2 — Composition
- **Gap:** Three-layer architecture (lines 100–109) is shown as ASCII inside a no-language fenced code block — fails check 5.27 (Mermaid governed colours). Capabilities (lines 56–90) are presented as a 6-row StyledTable with comma-separated model strings — `<Tabs>` per capability category would be more scannable. No `<AccordionGroup>` for the 25+ slash commands. Related Pages uses non-governance pattern.
- **Fix step:** Convert ASCII architecture (lines 100–109) to a Mermaid `graph TD` using `MermaidColours.jsx`. Convert Capabilities table to `<Tabs>` with one Tab per category ("Image", "Video", "TTS", "3D", "Editing"). Add `<AccordionGroup>` of slash commands (one Accordion per command with its description). Convert Related Pages to `<Columns cols={2}>` + `<CustomCardTitle>`.
- **Source/exemplar:** `snippets/components/config/MermaidColours.jsx`; `_packet/component-matrix.md` Tabs/Accordion sections.

### Layer 3 — Cross-page integration
- **Gap:** No link to `livepeer/storyboard` repo on this page. Two file-orphan links to `agent-sdk`. No prereq breadcrumb to `agents/overview`. No cross-tab graduation. "Scope" mentioned without link to Scope/LV2V docs. Daydream is repeatedly mentioned without a link to its product page or pricing.
- **Fix step:** Add a "Source" line at top after the Tip: `Source: [livepeer/storyboard](https://github.com/livepeer/storyboard).` Add a prereq tip: `Background: [Agents on Livepeer overview](./overview)`. Mark `agent-sdk` link with `<Badge>Coming soon</Badge>` or remove until registered. Link Scope to `realtime-ai/overview` first reference. Link `daydream.live` and `daydream.monster` with a one-line note ("Daydream is the Livepeer-network managed gateway for Storyboard and Creative Kit traffic.").
- **Source/exemplar:** `livepeer/storyboard` README; brief reference to Daydream platform.

### Layer 4 — Veracity and source authority
- **Gap:** Quantitative claims ("40+ AI capabilities", "25+ slash commands", "800-token budget", "6-scene", "4-shot") have no source. Model list in §Capabilities (lines 57–90) has no source — these are upstream of Storyboard so should reference `livepeer/storyboard` `packages/creative-kit/...` source files. Install URL `storyboard.daydream.monster/install.sh` is not pinned to a tag or version. No TESTED label on the CLI block. Page mentions Creative Lab "apps/creative-lab/" (line 115) without a link — orphan reference.
- **Fix step:** Add citation footnote: "40+ capabilities and 25+ slash commands per `livepeer/storyboard packages/creative-kit/src/capabilities/`." Pin install script: "`Tested against tag vX.Y.Z`." Add `veracityStatus: unverified` to frontmatter. Add TESTED comment to install block. Either link or remove the Creative Lab reference at line 115.
- **Source/exemplar:** `livepeer/storyboard` repo manifest.

### Layer 5 — Product-forward depth
- **Gap:** Page reads like a feature brochure. It does not answer: (a) what production-readiness is this — alpha/beta/GA? (b) is this open-source or proprietary? (the packages are "available for developers" per line 42 but no licence stated, no npm presence today); (c) is there a hosted SaaS the developer can integrate into their app, or is this self-host only? (d) what does Daydream cost? (e) what's the catch — why would I NOT use Storyboard? The page also enumerates 40+ models and 25+ commands without prioritising — overwhelms first-time reader.
- **Fix step:** Add status badge near top: `<Badge>Reference application</Badge>` or `<Badge>Alpha — package release pending</Badge>`. Add §"What this is and what it is not" (3 bullets): "This is a reference architecture and a live demo app. Packages (`@livepeer/agent`, `@livepeer/creative-kit`) will publish to npm at vX.Y.Z. Today the app at storyboard-rust.vercel.app is the way to try Storyboard." Add §"Costs" — Daydream pricing reference. Add §"When to use Storyboard / when to use raw pipelines".
- **Source/exemplar:** `_packet/5-whys-prompt.md` worked example Layer 5 (maturity-badge + "when not to use" pattern).

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (top 5)**:
1. `CenteredContainer` used (line 34) but NOT imported (lines 30–32 only import LinkArrow, CustomDivider, StyledTable family) — possible render failure (HIGH, check 5.6 + 8.5)
2. Two file-orphan links to `agent-sdk` (HIGH, check 7.4)
3. ASCII architecture diagram (lines 100–109) in unlabelled fenced block — should be governed Mermaid (HIGH, check 5.27)
4. `pageType: overview` non-canonical (HIGH, check 1.2)
5. Heavy duplication of LLM provider table with `llm-provider-routing.mdx` (HIGH, check 4.8)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add missing `CenteredContainer` import to imports block (line 32+) | 30–32 | HIGH | S | check 5.6 (page may crash without it) |
| 2 | Change `pageType` to `concept`; add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` | 23–28 | HIGH | S | check 1.1 + 1.2 |
| 3 | Convert ASCII architecture diagram (lines 100–109) to a Mermaid `graph TD` with `MermaidColours.jsx` | 100–109 | HIGH | M | check 5.27 |
| 4 | Resolve `agent-sdk` file-orphan: either register in `docs.json` or replace `<LinkArrow>` (line 169) + Card (line 176) with `<Badge>Coming soon</Badge>` text | 169, 176 + docs.json | HIGH | M | check 7.4 |
| 5 | Convert Related Pages `<CardGroup cols={2}>` to `<Columns cols={2}>` with `<CustomCardTitle icon=... title=... horizontal />` per Card | 175–188 | HIGH | M | check 5.17 |
| 6 | Remove LLM Provider Configuration duplication (lines 119–155). Replace with one-sentence summary + link to `llm-provider-routing.mdx` | 119–155 | HIGH | M | check 4.8 |
| 7 | Add `icon` + `title` to fenced code blocks; add language tag to lines 50 and 100; add TESTED comment to bash block | 50, 100, 163 | HIGH | M | check 5.20 |
| 8 | Add §"What you can build today" decision block after intro | ~42 | HIGH | M | Layer 1 |
| 9 | Add "Source: [livepeer/storyboard](https://github.com/livepeer/storyboard)" line under header Tip | ~37 | HIGH | S | check 6.10, Layer 3 |
| 10 | Cite quantitative claims (40+, 25+, 800-token) with package paths | 48, 94, 111 | MEDIUM | S | check 6.1 |
| 11 | Add ≥3 cross-tab links to Related Pages | 175–188 | MEDIUM | S | check 7.6 |
| 12 | Pin install script to a version/tag; add `<Badge>Reference application</Badge>` near top | 164 + ~37 | MEDIUM | S | Layer 5, check 2.D3 |
| 13 | Remove legacy `status: current` | 26 | INFO | S | check 5.7 |
