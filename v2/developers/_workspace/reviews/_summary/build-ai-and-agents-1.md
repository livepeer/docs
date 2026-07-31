# Section summary: build/ai-and-agents — A3 (root + realtime-ai)

**Pages in scope**: 14 (all CONTENT — re-dispatch confirmation: `pytrickle/data-channels.mdx` populated, no EMPTY-STUBS in this slate)
**Pages reviewed**: 14
**Review date**: 2026-05-17
**Reviewer**: agent A3

## Verdict distribution

- PASS: 0
- MINOR: 0
- MODERATE: 0
- MAJOR: 14
- NEEDS WORK: 0
- EMPTY-STUB: 0

## Per-page verdicts

| Page | Verdict | Severity (C/H/M/I) | Top critical finding |
|---|---|---|---|
| `ai-and-agents/overview.mdx` | MAJOR | 0/8/6/2 | ASCII protocol diagram instead of Mermaid (5.27); 5 raw markdown tables (5.23); Related Pages double-up; PyTrickle install unpinned despite `veracityStatus: verified` |
| `ai-and-agents/ai-jobs-direct-quickstart.mdx` | MAJOR | 0/9/5/2 | Raw `<Steps>` not `<StyledSteps>` (5.21); all 5 Tabs missing `icon`, all 4 Accordions missing `icon`, all 9 code blocks missing `icon`+`title`; no Verification section; alpha SDKs installed unpinned |
| `ai-and-agents/ai-pipelines.mdx` | MAJOR | 0/7/6/2 | No Related Pages footer at all (5.16); 9 raw markdown parameter tables instead of `<ParamField>`/`<ResponseField>` (5.5+5.23+5.24); 4 `<Note>` carrying primary content (2.D7); `veracityStatus` missing |
| `ai-and-agents/model-support.mdx` | MAJOR | 0/7/5/2 | 3 raw markdown tables (5.23+5.24); banned construction "This page lists..." at line 42 (2.4); Related Pages double-up + CardGroup not Columns; per-pipeline VRAM uncited (6.1) |
| `ai-and-agents/ai-sdks-overview.mdx` | MAJOR | 0/7/5/2 | 4 required frontmatter fields missing; SDK installs unpinned despite page declaring alpha-stage requires pinning (self-contradicting); `<Note>` for primary alpha warning (2.D7); all 9 code blocks missing icon+title |
| `realtime-ai/overview.mdx` | MAJOR | 0/7/4/2 | `pageType: overview` non-canonical (1.2, 5.7); 4 required frontmatter fields missing; Cascade architecture in prose+numbered list — no Mermaid (5.27); `<Note>` carries primary Beta + capability content (2.D7) |
| `realtime-ai/comfystream/overview.mdx` | MAJOR | 0/5/5/2 | 7 raw markdown tables (5.23+5.24); Related Pages double-up; CardGroup not Columns; first mentions of `livepeer/comfystream`, ComfyUI, Daydream, Embody all unlinked |
| `realtime-ai/comfystream/comfystream-quickstart.mdx` | MAJOR | 0/8/5/2 | Raw `<Steps>` x4 instead of `<StyledSteps>` (5.21); 3 deployment paths as separate H2s instead of `<Tabs>` (5.14); Accordions missing icon (5.19); code blocks missing icon+title (5.20); Docker image unpinned |
| `realtime-ai/comfystream/workflow-authoring.mdx` | MAJOR | 0/7/5/2 | `pageType: how_to` non-canonical; 4 frontmatter fields missing; self-reference + banned phrase "This guide covers..." (2.3+2.4); no Verification section; code blocks missing icon+title |
| `realtime-ai/comfystream/comfystream-as-byoc.mdx` | MAJOR | 0/7/5/2 | `pageType: how_to` non-canonical; 4 frontmatter fields missing; self-reference at line 40; AI Service Registry on-chain claim has no contract link; Related Pages double-up |
| `realtime-ai/pytrickle/overview.mdx` | MAJOR | 0/6/5/2 | `pageType: overview` non-canonical; 4 frontmatter fields missing; FrameProcessor class skeleton duplicated across 3 pages (4.8); Related Pages double-up; first `livepeer/pytrickle` mention has no repo link |
| `realtime-ai/pytrickle/pytrickle-quickstart.mdx` | MAJOR | 0/6/5/2 | 4 frontmatter fields missing; 3 git clones pull HEAD; no Common Errors / Troubleshooting for 4-process pipeline (4.19); Related Pages double-up; code blocks missing icon+title |
| `realtime-ai/pytrickle/frame-processor.mdx` | MAJOR | 0/6/5/2 | Reference page never links upstream `livepeer/pytrickle` repo (6.10); 4 frontmatter fields missing; 7 code blocks missing icon+title; PyTrickle version not pinned; Related Pages double-up |
| `realtime-ai/pytrickle/data-channels.mdx` | MAJOR | 0/6/4/2 | Page lacks Related Pages footer entirely (5.16+5.17); 4 frontmatter fields missing; page-size FAIL (3.1 KB < 5 KB substantive); internal inconsistency — `publish_data` method asserted here but not documented in `frame-processor.mdx` |

## Severity totals across pages reviewed

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 96 |
| MEDIUM | 67 |
| INFO | 28 |

## Top issues by frequency in this section

1. **Related Pages double-up: in-prose Next-Step paragraph AND `<CardGroup>` both present** (12/14 pages) — check 5.16 forbids both. Pages: ai-and-agents/overview, ai-jobs-direct-quickstart, model-support, ai-sdks-overview (NO — only CardGroup), realtime-ai/overview, comfystream/overview, comfystream-quickstart, workflow-authoring, comfystream-as-byoc, pytrickle/overview, pytrickle-quickstart, frame-processor, ai-pipelines (no footer at all), data-channels (no footer at all).

2. **`<CardGroup cols={2}>` instead of `<Columns cols={2}>` + `<CustomCardTitle>`** (12/14 pages) — check 5.17+5.22. Pages: ai-and-agents/overview, ai-jobs-direct-quickstart, model-support, ai-sdks-overview, realtime-ai/overview, comfystream/overview, comfystream-quickstart, workflow-authoring, comfystream-as-byoc, pytrickle/overview, pytrickle-quickstart, frame-processor.

3. **Fenced code blocks missing `icon` + `title`** (12/14 pages) — check 5.20. ONLY `ai-pipelines.mdx` has icons on its 9 curl blocks (still missing `title`); `data-channels.mdx` 2 blocks missing both. All other pages (10) have every code block missing both. Total: ~55 code blocks across the section.

4. **Zero cross-tab graduation links** (14/14 pages) — check 4.10+7.6. No page links to Gateways, Solutions, or About tabs. All cross-page navigation stays inside `developers/`.

5. **Banned heading "Next Steps"** (8/14 pages) — check 3.2. Pages: ai-and-agents/overview, ai-jobs-direct-quickstart, model-support, ai-sdks-overview (uses "Related Pages" — PASS), realtime-ai/overview, comfystream/overview, comfystream-quickstart. ai-pipelines and data-channels have no footer at all. ai-sdks-overview, workflow-authoring, comfystream-as-byoc, pytrickle/overview, pytrickle-quickstart, frame-processor use "Related Pages" correctly.

6. **`pageType` non-canonical or `status: current` legacy field present** (14/14 pages) — check 1.2, 5.7. Non-canonical pageType: realtime-ai/overview (`overview`), comfystream/workflow-authoring (`how_to`), comfystream/comfystream-as-byoc (`how_to`), pytrickle/overview (`overview`). Every page carries the legacy `status: current` field. ai-and-agents/overview, ai-pipelines, model-support, ai-jobs-direct-quickstart, ai-sdks-overview, comfystream/overview, comfystream-quickstart use canonical pageType but still ship `status: current`.

7. **Missing required frontmatter fields** (8/14 pages) — check 1.1+1.4+1.6+1.7+1.8. Pages missing `purpose`/`complexity`/`lifecycleStage`/`veracityStatus` (some combination of 4): ai-sdks-overview, realtime-ai/overview, comfystream/workflow-authoring, comfystream/comfystream-as-byoc, pytrickle/overview, pytrickle/pytrickle-quickstart, pytrickle/frame-processor, pytrickle/data-channels. ai-pipelines missing only `veracityStatus`.

8. **Raw `<Steps>` instead of `<StyledSteps>` (5.21)** (2/14 pages) — Pages: ai-jobs-direct-quickstart (one `<Steps>` block); comfystream-quickstart (four `<Steps>` blocks). The other quickstarts (workflow-authoring, comfystream-as-byoc, pytrickle-quickstart) all correctly use `<StyledSteps>` — those are the in-repo exemplars to mirror.

9. **Raw markdown tables instead of `<StyledTable>` / `<ParamField>`** (7/14 pages) — check 5.23+5.24. ai-and-agents/overview (5 tables), ai-pipelines (9 inside Accordions), model-support (3), ai-jobs-direct-quickstart (1), comfystream/overview (7), comfystream-quickstart (2), realtime-ai/overview (path-choice not present here — N/A). The other pages have no tables or use StyledTable correctly (ai-sdks-overview, frame-processor, pytrickle/overview).

10. **Tabs missing `icon` prop (5.18)** (1/14 pages with Tabs) — `ai-jobs-direct-quickstart` has 5 `<Tab>` elements, none with `icon`. ai-pipelines correctly uses `<Accordion icon=...>` (5.19 EXEMPLARY). `comfystream-quickstart` should use `<Tabs>` (per 5.14) and currently uses 3 separate H2s — see issue #11.

11. **Multi-path content as sequential H2s instead of `<Tabs>` (5.14)** (1/14 pages) — `comfystream-quickstart` ships RunPod / Docker / Local Install as 3 separate H2 sections with 4 `<Steps>` blocks. Should be a single `<Tabs>` with 3 `<Tab>` per path.

12. **Unpinned installs / git clones / Docker images** (8/14 pages) — check 2.D3+6.8. Pages: ai-and-agents/overview (PyTrickle HEAD), ai-jobs-direct-quickstart (alpha SDKs unpinned), ai-pipelines (ai-runner not pinned), ai-sdks-overview (alpha SDKs unpinned despite page asserting they need pinning), comfystream-quickstart (Docker `latest`, git HEAD), workflow-authoring (git HEAD), comfystream-as-byoc (ComfyStream version unpinned), pytrickle/overview + frame-processor + pytrickle-quickstart (no PyTrickle version pinned; git clones HEAD).

13. **Upstream `livepeer/*` repo not linked at first mention** (10/14 pages) — Pages where the repo is named without an inline link: ai-and-agents/overview (PyTrickle, ComfyStream, muxionlabs), ai-pipelines (ai-runner), model-support (ai-runner), realtime-ai/overview (comfystream, pytrickle), comfystream/overview (comfystream, ComfyUI, docs.comfystream.org first-mention), comfystream-quickstart (comfystream, docs.comfystream.org), workflow-authoring (comfystream), pytrickle/overview (pytrickle, http-trickle), pytrickle-quickstart (pytrickle in prose), frame-processor (pytrickle — never linked), data-channels (pytrickle, TrickleSubscriber, LiveVideoToVideo, publish_data).

14. **`<Note>` for primary content (2.D7)** (3/14 pages) — Pages: ai-pipelines (4 Notes carrying primary content: multipart fact, SVD output spec, TTS runner requirement, LLM beta+model list), ai-sdks-overview (alpha-stage Note), realtime-ai/overview (Beta + capabilities check Note).

15. **No diagram where one would help (5.27)** (8/14 pages) — Pages that should add a Mermaid: ai-and-agents/overview (ASCII protocol flow → Mermaid sequence), realtime-ai/overview (Cascade architecture flow), comfystream/overview (4 pipeline modes), comfystream-quickstart (3-path data flow), workflow-authoring (batch vs streaming workflow nodes), comfystream-as-byoc (registration sequence), pytrickle/overview (SDK boundary), pytrickle-quickstart (4-process data flow), data-channels (video + data channel sharing one connection).

16. **No Verification section on instruction/tutorial pages (5.2)** (3/5 instruction/tutorial pages) — Pages: ai-jobs-direct-quickstart, workflow-authoring, comfystream-as-byoc (verification inside StyledStep, not as H2). The other tutorials (comfystream-quickstart, pytrickle-quickstart) have explicit Verification.

17. **Page size FAIL** (1/14 pages) — `pytrickle/data-channels.mdx` is 3.1 KB; reference page substantive threshold is ≥5 KB.

## Cross-page duplication and link gaps in this section

- **FrameProcessor class skeleton** duplicated 4 times: `ai-and-agents/overview.mdx` lines 102-130 + `pytrickle/overview.mdx` lines 48-74 + `pytrickle/frame-processor.mdx` lines 46+ + `pytrickle/pytrickle-quickstart.mdx` lines 78-116 (variant). Canonical version should live in frame-processor.mdx; other pages should tease + LinkArrow.
- **StreamServer wrapper** duplicated: `pytrickle/overview.mdx` lines 82-96 vs `pytrickle/frame-processor.mdx` lines 188-220.
- **HTTP endpoints table** duplicated: `ai-and-agents/overview.mdx` lines 87-92 vs `pytrickle/frame-processor.mdx` line 224.
- **Hardware requirements (VRAM)** duplicated 3 times: `model-support.mdx` line 90 + `comfystream/overview.mdx` lines 163-166 + `comfystream-quickstart.mdx` lines 54-56. Should pull from a single snippet.
- **ComfyStream summary** in `realtime-ai/overview.mdx` (lines 62-75) restates `comfystream/overview.mdx` first 3 sections — acceptable router but install command should not repeat.
- **Text-to-image SDK example** in `ai-jobs-direct-quickstart.mdx` (lines 155-198) overlaps with `ai-sdks-overview.mdx` (lines 76-91).
- **Pipeline catalogue** duplicated: `ai-pipelines.mdx` per-pipeline tables vs `model-support.mdx` catalogue table — different lenses (request shape vs architecture/VRAM), defensible.
- **Cross-tab gap**: `ai-pipelines.mdx` and `data-channels.mdx` ship no Related Pages footer at all; `data-channels.mdx` `publish_data` method asserted but absent from `frame-processor.mdx` reference (internal contradiction).
- **`comfystream-as-byoc.mdx` "AI Service Registry on-chain"** — strong factual claim never linked to a contract address or registry page.

## Special-focus brief checks (results)

- **livepeer/comfystream linked where it should be**: NEAR FAIL. Repo URL appears only in code blocks (`pip install git+https://github.com/livepeer/comfystream.git`). No prose-level repo link on first mention in `realtime-ai/overview`, `comfystream/overview`, `comfystream-quickstart`, `workflow-authoring`, `comfystream-as-byoc`. Should be inline link at first mention on each page.
- **livepeer/pytrickle linked where it should be**: FAIL. Same pattern — repo URL only in install commands, never as prose link. `frame-processor.mdx` (the reference page for the pytrickle API!) never names the upstream repo.
- **5.20 code block icon+title (HIGH frequency)**: CONFIRMED — 11/14 pages have at least one code block missing both attributes; `ai-pipelines.mdx` has icon but no title on 9 blocks; only `ai-sdks-overview.mdx` lacks both on 9 blocks. Total code blocks missing metadata: ~55.
- **5.21 StyledSteps vs raw Steps**: 2 violators (ai-jobs-direct-quickstart, comfystream-quickstart). 3 quickstarts get it right (workflow-authoring, comfystream-as-byoc, pytrickle-quickstart) — these are the in-repo exemplars.
- **2.D1 code-first opening on instruction/tutorial**: ai-jobs-direct-quickstart FAILS (100 words of prose before first command). comfystream-quickstart marginal (75 words + table before first command). The other tutorials are acceptable.
- **5.16 Related Pages footer**: 12/14 pages have it as a CardGroup (wrong format per 5.17); 2 pages (`ai-pipelines`, `data-channels`) have NO footer at all.
- **5.18 Tab icon**: ai-jobs-direct-quickstart is the only page with `<Tab>` elements, and all 5 lack `icon` prop.
- **2.12 em-dashes**: zero across all 14 pages. PASS.
- **2.D3 versions stated explicitly**: 8/14 pages have unpinned installs. SYSTEMIC FAIL.
- **4.17 every code block has language tag**: PASS overall — only one block (ASCII flow at line 73 of ai-and-agents/overview.mdx) lacks a language tag.

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)

The section's promise is "build AI and agents on Livepeer". The reader journey across these 14 pages is broken in three places:

- **Decision-first content missing.** `ai-and-agents/overview` opens with a selection-criteria table (good), but `realtime-ai/overview` doesn't have a "ComfyStream vs PyTrickle" decision matrix; the reader has to read both overviews to choose. `comfystream/overview` does have a decision matrix but it's at line 178 — too late.
- **Verification missing in tutorials.** Three of five instruction/tutorial pages don't have a dedicated Verification H2 (ai-jobs-direct-quickstart, workflow-authoring, comfystream-as-byoc). Reader completes the steps but isn't told what success looks like.
- **No production handoff.** Every quickstart succeeds locally; none links to a Gateways/Solutions production path. Reader who finishes ComfyStream quickstart wants to know "now how do I actually run this for paying users?" — they have to navigate to `comfystream-as-byoc` (covered), then `byoc/...` (covered), but the chain is implicit not signposted.

**Section-level fix:** Add a decision matrix at the top of `ai-and-agents/overview` AND `realtime-ai/overview` (cross-link the same content). Add §"Verification" H2 to the three tutorials that miss it. Add a "production path" CardGroup in each tutorial's Related Pages pointing at Gateways/Solutions.

### Layer 2 — Composition (section level)

The section has 14 pages and roughly the same component-set violations on every page:

- `<CardGroup>` everywhere instead of `<Columns cols={2}>` + `<CustomCardTitle>` (12/14).
- Code blocks missing `icon` + `title` (12/14).
- 7 pages have raw markdown tables where `<StyledTable>` is required.
- 3 pages have `<Note>` carrying primary content (ai-pipelines is the worst at 4 instances).
- 8 pages need a Mermaid diagram (Cascade architecture in particular).
- 2 quickstarts use raw `<Steps>` instead of `<StyledSteps>`.

**Section-level fix:** A single propagation pass that converts every `<CardGroup cols={2}>` → `<Columns cols={2}>` with `<CustomCardTitle>` template; adds `icon="terminal" title="<file>"` defaults to every fenced bash; adds `icon="code" title="<file>.py"` to every python; promotes 4 critical `<Note>` to `<Warning>`; converts the 7 raw-markdown table pages to `<StyledTable>`. This is essentially a docs-wide remediation, not per-page surgery.

### Layer 3 — Cross-page integration (section level)

The inter-page graph is dense INSIDE the section but stops at the section boundary:

- Every page Related Pages card links only within `developers/build/ai-and-agents/`.
- Zero links to `/v2/gateways/setup/connect` (the self-host production path for these workloads).
- Zero links to `/v2/about/network/architecture` (the protocol context).
- Zero links to `/v2/orchestrators/` (the "earn fees" angle that BYOC pages should expose).
- Zero links to `/v2/solutions/` (the managed alternative to running compute yourself).

**Section-level fix:** Every Related Pages CardGroup should have at least 1 of its 4 cards be a cross-tab link. A 4-card pattern: 2 sibling pages + 1 prereq page + 1 graduation page. For the BYOC/PyTrickle/ComfyStream pages, the graduation card should point to `/v2/orchestrators/setup/connect` (so the reader knows how to publish this as a real capability).

**Upstream repos**: `livepeer/comfystream`, `livepeer/pytrickle`, `livepeer/ai-runner`, `livepeer/http-trickle` are all named without prose-level links on multiple pages. The repo URLs appear inside `pip install git+...` commands but never as anchor links. Standard pattern (in `agents/` reviews) is "First mention links to repo." Apply to every page in this section.

### Layer 4 — Veracity (section level)

Three veracity gaps repeat across the section:

- **Unpinned installs.** PyTrickle, ComfyStream, alpha SDKs (`@livepeer/ai`, `livepeer-ai`) all installed from HEAD or `latest`. Multiple pages claim `veracityStatus: verified` while shipping unpinned commands — the claim doesn't hold.
- **`aiModels.json` is the source of truth** for warm models, defaults, and VRAM — never linked from `ai-pipelines.mdx` or `model-support.mdx` despite both being downstream of that file.
- **Phase 4 claims** (`ai-and-agents/overview`, `comfystream/overview`, `ai-pipelines.mdx`) are factual statements about a Q1 2026 release but no PR / release notes link supports them. Hardware specs (CUDA 12.8, driver 570.124.06) are pinned in some pages but not others.

**Section-level fix:** (1) Pin every install/clone to a tag or commit + add `{/* REVIEW: confirm latest tag */}`. (2) Add inline `aiModels.json` link in `ai-pipelines.mdx` Shared Conventions and `model-support.mdx` intro. (3) Add Phase 4 PR/release URL as `<Tip>` or `{/* REVIEW: link Phase 4 PR */}` placeholder.

### Layer 5 — Product-forward depth (section level)

The section reads as a feature catalogue (here's BYOC, here's ComfyStream, here's PyTrickle), not a product evaluation. A senior engineer arriving at `realtime-ai/overview` asks:

- Is this in production today? (Answer hidden in `<Note>` and never on a Badge.)
- What does it cost? (Per-second-compute page exists, never linked from these pages.)
- What's the SLO? (Not stated.)
- What happens at scale? (Not stated.)
- What's the maintenance signal? (No "Phase 4 / Stable / Beta" badge.)

**Section-level fix:** Add a `<Badge>` component near each page header with maturity status: `<Badge>Beta — production-tested with Embody, Streamplace, Daydream</Badge>` for ComfyStream/PyTrickle/BYOC pages; `<Badge>Production</Badge>` for AI Jobs Direct API; `<Badge>Alpha</Badge>` for the SDKs. Add a §"Costs" subsection on the top-level pages (`ai-and-agents/overview`, `realtime-ai/overview`) linking to per-second-compute. Add a §"What can go wrong" / "Trade-offs" subsection to every concept page (currently only `frame-processor.mdx` and `pytrickle/overview.mdx` partial cover this through their async-blocking warnings).

## Prioritised section remediation

| # | Step | Pages affected | Effort |
|---|---|---|---|
| 1 | Convert every `<CardGroup cols={2}>` Related Pages to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` (12/14 pages); add Related Pages to `ai-pipelines` and `data-channels` (currently missing); delete duplicate in-prose Next-Step paragraph alongside the CardGroup on 11 pages; rename H2 "Next Steps" → "Related Pages" on 7 pages | 14 | L |
| 2 | Add `icon` + `title` to every fenced code block across the section (~55 blocks total); use `icon="terminal"` for shell, `icon="code"` for python/ts, `icon="docker"` where Docker | 12 | L |
| 3 | Add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` to 8 pages missing them; remove legacy `status: current` from all 14 pages; correct non-canonical `pageType` (overview → concept; how_to → instruction) on 4 pages | 14 | M |
| 4 | Add ≥3 cross-tab graduation cards to every Related Pages section: `/v2/gateways/setup/connect`, `/v2/orchestrators/setup/connect`, `/v2/about/network/architecture`, `/v2/solutions/...` as appropriate | 14 | M |
| 5 | Pin every install command: PyTrickle git clones, ComfyStream Docker image, alpha SDKs (`@livepeer/ai`, `livepeer-ai`), git+https installs. Add `{/* REVIEW: pin latest tag */}` placeholder where version unknown | 8 | M |
| 6 | Add inline upstream-repo links at first mention on every page: `livepeer/comfystream`, `livepeer/pytrickle`, `livepeer/ai-runner`, `livepeer/http-trickle`, `livepeer/livepeer-ai-js`, `livepeer/livepeer-ai-python` | 10 | M |
| 7 | Convert raw `<Steps>` to `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>` on ai-jobs-direct-quickstart and comfystream-quickstart; mirror the existing correct usage in workflow-authoring.mdx | 2 | M |
| 8 | Convert 3-path H2 layout to `<Tabs>` (RunPod / Docker / Local Install) on `comfystream-quickstart` per check 5.14 | 1 | M |
| 9 | Add `icon` to every `<Tab>` and `<Accordion>` (ai-jobs-direct-quickstart 5 Tabs + 4 Accordions; comfystream-quickstart 5 Accordions) | 2 | S |
| 10 | Convert raw markdown tables to `<StyledTable variant="bordered">` (7 pages). For `ai-pipelines.mdx`, replace 9 parameter tables with `<ParamField>` blocks (Mintlify global, no import needed) | 7 | L |
| 11 | Promote 4 `<Note>` blocks on `ai-pipelines.mdx` carrying primary content to inline prose or `<Warning>` (image-to-image multipart fact, SVD output spec, TTS runner requirement, LLM beta+model list); promote alpha-warning `<Note>` on `ai-sdks-overview` to `<Warning>`; promote Beta `<Note>` on `realtime-ai/overview` to `<Warning>` | 3 | S |
| 12 | Add Mermaid diagrams (using `MermaidColours.jsx`) on 8 pages: Cascade architecture, ComfyStream pipeline modes, 4-process PyTrickle data flow, BYOC registration sequence, video+data channel sharing | 8 | L |
| 13 | Add §"Verification" H2 to ai-jobs-direct-quickstart, workflow-authoring, comfystream-as-byoc | 3 | M |
| 14 | Add §"Common Errors" AccordionGroup to pytrickle-quickstart (4-process pipeline without troubleshooting is risky) | 1 | M |
| 15 | Add `<Badge>` maturity signals + §"Costs" / §"Trade-offs" / §"What can go wrong" sections to concept/overview pages | 6 | L |
| 16 | De-duplicate FrameProcessor class skeleton: keep canonical in `frame-processor.mdx`; tease + LinkArrow on `pytrickle/overview` and `ai-and-agents/overview` | 3 | M |
| 17 | Resolve `publish_data` contradiction: document on `frame-processor.mdx` (StreamServer or FrameProcessor — clarify) or remove from `data-channels.mdx` | 2 | S |
| 18 | Reword self-references / banned phrases at: `model-support.mdx` line 42 ("This page lists..."), `workflow-authoring.mdx` line 40 ("This guide covers..."), `comfystream-as-byoc.mdx` line 40 ("This page assumes..."), `data-channels.mdx` line 87 ("page covers...") | 4 | S |
| 19 | Pin/link `aiModels.json` as the source of truth: inline link in `ai-pipelines.mdx` Shared Conventions and `model-support.mdx` intro; consider extracting catalogue to a shared snippet | 2 | M |
| 20 | Add `pageVariant` where appropriate (`quickstart` for tutorial pages, `overview` for concept pages, `specification` for reference pages) | 8 | S |
