# Review: pytrickle-quickstart.mdx

**Page**: `v2/developers/build/ai-and-agents/realtime-ai/pytrickle/pytrickle-quickstart.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: missing
**Bytes**: 7,571
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1.1 | 10 fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | pageType canonical | PASS | `tutorial` |
| 1.3 | pageVariant | N/A | `quickstart` recommended |
| 1.4 | purpose | FAIL | Missing |
| 1.5 | audience | PASS | |
| 1.6 | complexity | FAIL | Missing |
| 1.7 | lifecycleStage | FAIL | Missing |
| 1.8 | veracityStatus | FAIL | Missing |
| 1.11 | description well-formed | PASS | "Install PyTrickle, write a minimal FrameProcessor, and run it against a local test stream using http-trickle." subject-led, 124 chars |
| 1.12 | OG block | PASS | |
| 1.13 | keywords | PASS | |
| 1.14 | audience match | PASS | |
| 2.1-2.22 | Voice (universal) | PASS | |
| 2.D1 | Code-first | MIXED | Prerequisites listed before any code (lines 37-41), but the StyledSteps starts at line 45 — acceptable for a tutorial |
| 2.D2 | API methods | PASS | |
| 2.D3 | Versions explicit | FAIL | "Python 3.8+", "PyTorch installed" — Python pinned; PyTorch version not pinned; git installs at lines 50, 67 unpinned (HEAD) |
| 2.D4-D6 | | PASS | |
| 2.D7 | Note for primary | N/A | |
| 3.1 | Score ≥20/25 | MIXED | "Related Pages" exempt — no other H2s exist beyond Related Pages because the tutorial puts everything in a single StyledSteps block. This is unusual but valid |
| 3.2 | Banned/weak | PASS | |
| 3.6 | Title well-formed | PASS | "PyTrickle Quickstart" — 2 words |
| 4.1-4.4 | | PASS | |
| 4.5 | Prerequisites | PASS | Inline at line 37 |
| 4.6 | Out-of-scope | PASS | |
| 4.7-4.9 | | PASS | |
| 4.10 | ≥3 cross-tab | FAIL | |
| 4.11 | Discord test | PASS | |
| 4.12 | Page size | PASS | 7.6 KB |
| 4.13 | Zero TODO | PASS | |
| 4.14 | Flat layout | PASS | |
| 4.15 | Trade-offs named | MIXED | None explicitly — the page is single-path |
| 4.16 | Content-pass | PASS | |
| 4.17 | Code language tag | PASS | All blocks tagged |
| 4.18 | Code-first | MIXED | |
| 4.19 | Errors main | FAIL | No Common Errors / troubleshooting section — quickstart for a low-level SDK without one is risky |
| 4.20 | API has code | PASS | |
| 5.1 | Correct template | MIXED | tutorial; Verification step (StyledStep title="Verify the output" line 170) is the verification — acceptable; Prerequisites + Steps + Verification + Related all present |
| 5.2 | Required sections | PASS | |
| 5.3-5.4 | | PASS | |
| 5.5 | Info-type → component | PASS | StyledSteps |
| 5.6 | Renders | PASS (presumed) | |
| 5.7 | Old-schema | FAIL | `status: current` (line 23) |
| 5.8-5.10 | | PASS | |
| 5.13 | Section ordering | PASS | |
| 5.14 | Multi-view | N/A | |
| 5.15 | Data imports | MIXED | http-trickle repo path hardcoded multiple times |
| 5.16 | Related Pages OR Next Step | FAIL | Both: closing prose at line 190 ("You have a working PyTrickle service processing live frames. The [FrameProcessor reference]...") AND `<CardGroup>` at line 194 |
| 5.17 | Related Pages format | MIXED | `<CardGroup cols={2}>` not `<Columns>`; Cards with `arrow horizontal` props directly, not `<CustomCardTitle>` |
| 5.18 | Tab icon | N/A | No Tabs |
| 5.19 | Accordion icon | N/A | No Accordions |
| 5.20 | Code block icon+title | FAIL | All 9 code blocks (lines 49, 58, 66, 78, 122, 128, 137, 152, 173) missing `icon` + `title` |
| 5.21 | StyledSteps | PASS | EXEMPLARY |
| 5.22 | Nav cards CustomCardTitle | FAIL | |
| 5.23 | StyledTable | N/A | |
| 5.24-5.25 | | PASS | |
| 5.26 | CustomDivider | MIXED | Markdown `---` used (lines 35, 43, 182, 188) |
| 5.27 | Mermaid | MIXED | No diagram — flow of input stream → processor → output stream → ffplay would benefit from one |
| 5.28-5.34 | | PASS | |
| 6.1 | Claims citable | MIXED | "expected output: Processor ready / PyTrickle service running on port 8000" (lines 128-131) — directly tied to the code; no external citations needed |
| 6.2 | Code TESTED | NOT-TESTED | 9 blocks unlabelled |
| 6.3 | Deprecated API | PASS | |
| 6.4 | Numbers real | PASS | |
| 6.5 | REVIEW flags | N/A | |
| 6.6 | veracityStatus | FAIL | Missing |
| 6.7 | Glossary | PASS | |
| 6.8 | Source staleness | FAIL | `pip install -e .` (line 53), git clones (lines 50, 67) all pull HEAD; no commit/tag |
| 6.9-6.12 | | PASS / NOT-TESTED | |
| 7.1 | docs.json | PASS | line 2538 |
| 7.2-7.5 | | PASS | |
| 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | PASS | |
| 8.1 | Internal | PASS | |
| 8.2 | External | NOT-TESTED | |
| 8.3-8.6 | | PASS / N/A | |
| 9-10 | | NOT-TESTED / PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "PyTrickle Quickstart" | PASS | |
| sidebarTitle | Yes | "Quickstart" | PASS | |
| description | Yes | "Install PyTrickle..." | PASS | |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | |
| complexity | No | — | FAIL | |
| lifecycleStage | No | — | FAIL | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy |
| pageVariant | No | — | INFO | |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Not imported (markdown `---`) | Required | Should import |
| `<StyledSteps>` / `<StyledStep>` | Yes | Required (tutorial) | EXEMPLARY |
| `<AccordionGroup>` / `<Accordion>` | No | Recommended for troubleshooting | Common Errors absent |
| Fenced code with icon+title | No | Required | All 9 missing |
| `<Columns cols={2}>` Related Pages | No | Required | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav cards | |
| `<Tip>` (header CTA) | Yes | — | OK |
| `<StyledTable>` | No | — | |

## Cross-page duplication and link gaps

- **OVERLAP**: GreenTintProcessor green-tint pattern (lines 78-116) is a small variation of the FrameProcessor template that appears in `pytrickle/overview.mdx` and `ai-and-agents/overview.mdx`; acceptable as a concrete example.
- **LINK GAPS**: First `livepeer/pytrickle` mention (line 50) lacks a prose repo link (the URL is in the clone command, but no inline mention). First `livepeer/http-trickle` (line 67) — same. No link to comfystream-as-byoc final step explaining BYOC registration after this quickstart succeeds — the closing paragraph (line 186) references it but doesn't make the link explicit until Related Pages.
- **STRANDED**: Tutorial succeeds and reader has a working PyTrickle service — but they need 4 terminals open. Cleanup/shutdown not mentioned.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (only Python identifiers in code) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Self-reference | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| Related Pages | exempt |

Note: No body H2s — the tutorial is one `<StyledSteps>` block. Acceptable for short quickstarts but Common Errors / Verification could be promoted to H2 to scan the structure.

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 49 | bash | ✗ | ✗ | NOT-TESTED | git clone — unpinned |
| 58 | bash | ✗ | ✗ | NOT-TESTED | python verify |
| 66 | bash | ✗ | ✗ | NOT-TESTED | http-trickle clone — unpinned |
| 78 | python | ✗ | ✗ | NOT-TESTED | GreenTintProcessor |
| 122 | bash | ✗ | ✗ | NOT-TESTED | run script |
| 128 | plain | ✗ | ✗ | — | expected output (not exec) |
| 137 | bash | ✗ | ✗ | NOT-TESTED | http-trickle + ffmpeg |
| 152 | bash | ✗ | ✗ | NOT-TESTED | curl /start |
| 173 | bash | ✗ | ✗ | NOT-TESTED | ffplay verify |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Tutorial works but requires 4 terminals (line 138-139 says "second terminal", "third terminal", "fourth terminal"). The page never tells the reader to open them ahead of time, and there's no "Cleanup" or "How to stop" at the end. Reader is left with 4 long-running processes and no shutdown.
- **Fix step:** Add a §"Setup" preamble step before Step 1: "Open four terminals; you'll need them for the trickle server, the publisher, the curl client, and the output viewer." Add §"Cleanup" after Step 7 with `Ctrl+C` instructions per terminal and how to confirm the orchestrator is no longer publishing.
- **Source/exemplar:** Docker tutorials that pre-allocate ports / processes upfront.

### Layer 2 — Composition
- **Gap:** All 9 code blocks lack icon+title (5.20). No `<CustomDivider />` JSX (markdown `---`). No Common Errors / Troubleshooting section despite running a multi-process pipeline (4.19). Related Pages uses CardGroup (5.17, 5.22). No diagram of the data flow across the 4 terminals.
- **Fix step:** Add `icon` + `title` to every code block. Add an `<AccordionGroup>` Common Errors section after the StyledSteps: WebRTC port issues, FFmpeg version mismatch, http-trickle build failure, port 8000 already in use. Add a Mermaid sequence diagram showing the 4-process data flow. Convert Related Pages to Columns + CustomCardTitle.
- **Source/exemplar:** `comfystream-quickstart.mdx` Common Errors AccordionGroup pattern (line 181).

### Layer 3 — Cross-page integration
- **Gap:** Page closes by sending the reader to `comfystream-as-byoc.mdx` for the BYOC registration pattern — fine. But no "before you start, optionally do X" cross-link to the pytrickle/overview for context. http-trickle repo is cloned but never linked to its docs. No graduation to running this on a real orchestrator.
- **Fix step:** Add inline link in the opening paragraph: "For background, see [PyTrickle Overview](pytrickle/overview)". Add at line 50: `[livepeer/pytrickle](https://github.com/livepeer/pytrickle)`. Add at line 67: `[livepeer/http-trickle](https://github.com/livepeer/http-trickle)`. Add a cross-tab card to `/v2/orchestrators/setup/connect` for "publish this as a real orchestrator capability".
- **Source/exemplar:** Upstream URLs.

### Layer 4 — Veracity and source authority
- **Gap:** Git clones and `pip install -e .` pull HEAD; no commit or tag. No PyTorch version pin. http-trickle make build pulls HEAD. `veracityStatus` missing. No code TESTED.
- **Fix step:** Pin every git clone: `git clone -b vX.Y.Z https://github.com/livepeer/pytrickle.git` and same for http-trickle. Add `veracityStatus: unverified` (until pinning). Add `pip install torch==<version>` or note that PyTorch CPU build at version >= 2.0 is sufficient. Label each code block TESTED with date + Python version + OS.
- **Source/exemplar:** `livepeer/pytrickle` releases page.

### Layer 5 — Product-forward depth
- **Gap:** Tutorial is the happy path but doesn't show what production looks like. No "what's missing for production" section. The green-tint example is trivial — no hint of how to swap in a real model (asyncio.to_thread for blocking GPU work is in frame-processor.mdx but not flagged here). No mention of GPU vs CPU performance characteristics for the green-tint example.
- **Fix step:** Add §"From green tint to a real model" after Step 7: 4 bullets covering (1) replace process_video_async logic with model.forward, (2) use asyncio.to_thread for blocking inference, (3) move tensors to CUDA, (4) load model in `initialize()` not per-frame. Add §"What's needed for production" with: BYOC registration link, monitoring, graceful shutdown, restart-on-crash supervision.
- **Source/exemplar:** `frame-processor.mdx` lines 64-75 — the asyncio.to_thread pattern is already documented; this page should reference it explicitly.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 6 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. 4 required frontmatter fields missing (1.1, 1.4, 1.6, 1.7, 1.8).
2. All 9 code blocks missing `icon` + `title` (5.20); 3 git clones pull HEAD (2.D3, 6.8).
3. Related Pages: both in-prose closing paragraph (line 190) and CardGroup (line 194) present (5.16); CardGroup not Columns (5.17); plain Cards (5.22).
4. No Common Errors / Troubleshooting section for a 4-process pipeline (4.19) — high crash surface.
5. Zero cross-tab graduation links (4.10, 7.6).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add missing frontmatter: `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified`; add `pageVariant: quickstart` | 22-26 | HIGH | S | check 1.1+1.8 |
| 2 | Add `icon` + `title` to every code block: bash → `icon="terminal" title="install.sh"`; python → `icon="code" title="my_processor.py"` | 49, 58, 66, 78, 122, 137, 152, 173 | HIGH | M | check 5.20 |
| 3 | Pin every git clone: line 50 `git clone -b <tag> https://github.com/livepeer/pytrickle.git`; line 67 same for http-trickle | 50, 67 | HIGH | S | check 2.D3+6.8 |
| 4 | Convert `<CardGroup cols={2}>` (line 194) to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` | 194-231 | HIGH | M | check 5.17+5.22 |
| 5 | Delete closing prose at line 190 — check 5.16 | 190 | HIGH | S | check 5.16 |
| 6 | Add `## Common Errors` AccordionGroup after StyledSteps: WebRTC port blocked, FFmpeg missing, http-trickle build fail, port 8000 in use | new H2 after line 180 | HIGH | M | check 4.19; comfystream-quickstart line 181 |
| 7 | Add ≥3 cross-tab graduation cards | new cards | HIGH | S | check 4.10+7.6 |
| 8 | Add §"Setup" preamble before Step 1: instruct reader to open 4 terminals; add §"Cleanup" after Step 7 | new H2s | MEDIUM | S | layer 1 |
| 9 | Add inline upstream links: line 50 `[livepeer/pytrickle](https://github.com/livepeer/pytrickle)`; line 67 `[livepeer/http-trickle](https://github.com/livepeer/http-trickle)` | 50, 67 | MEDIUM | S | check 6.1+6.10 |
| 10 | Import `<CustomDivider />` and replace markdown `---` (4 places) | imports + rules | MEDIUM | S | check 5.26 |
| 11 | Remove legacy `status: current` field | 23 | MEDIUM | S | check 5.7 |
| 12 | Add §"From green tint to a real model" after StyledSteps | new H2 | MEDIUM | M | layer 5 |
| 13 | Add Mermaid sequence diagram showing the 4-process data flow | new diagram | INFO | M | check 5.27; layer 2 |
| 14 | Label code blocks TESTED with date / NOT-TESTED with reason | 9 code blocks | INFO | M | check 6.2 |
