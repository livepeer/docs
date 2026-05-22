# Check Report: rs-install.mdx

**File:** `v2/orchestrators/setup/rs-install.mdx`
**Date:** 2026-03-24
**Checker:** Quality Check Agent (Batch 5 protocols applied)
**docs.json position:** Setup group, position 3 of 7 — PREV: `rcs-requirements` | NEXT: `configure` (docs.json lines 2860–2867)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Install go-livepeer'` | PASS | Subject-first, clear |
| `sidebarTitle` | Yes | `'Install'` | PASS | Correct short label |
| `description` | Yes | `'Install the go-livepeer binary on Linux, macOS, or via Docker. Covers prerequisites, GPU driver requirements, installation steps, and verification.'` | FAIL | 174 chars — exceeds 160-char limit (check 1.11). Also uses "Covers" which describes the page content rather than leading with subject outcome. |
| `pageType` | Yes | `'tutorial'` | PASS | 7-type canonical value |
| `audience` | Yes | `'orchestrator'` | PASS | 7-token canonical value |
| `purpose` | No | MISSING | FAIL | Required field absent (check 1.1). CRITICAL. |
| `complexity` | No | MISSING | FAIL | Required field absent (check 1.1). |
| `lifecycleStage` | No | MISSING | FAIL | Required field absent (check 1.1). |
| `keywords` | Yes | `["go-livepeer", "install", "orchestrator", "GPU", "NVIDIA", "Docker", "binary", "CUDA", "Linux"]` | FAIL | Terms like "install", "GPU", "binary" are too generic (check 1.13). "go-livepeer install guide" or "install go-livepeer Linux GPU" would be more searcher-intent-aligned. |
| `og:image` | Yes (partial) | `'/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg'` | FAIL | Only 1 OG field present. check 1.12 requires all 5 OG fields: `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`. Missing 4. |
| `status` | Yes | `'current'` | FAIL | `status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags (checks.mdx §1.8). File has one `{/* REVIEW: */}` flag at line 143. `veracityStatus` is also missing. |
| `pageVariant` | No | MISSING | INFO | Not required for `pageType: tutorial` unless variant applies. No issue. |
| `veracityStatus` | No | MISSING | FAIL | Required field absent (check 1.1). |
| `industry` | No | MISSING | FAIL | Required field absent (check 1.1, check 1.9). Correct value: `["technical", "livepeer"]` |
| `niche` | No | MISSING | FAIL | Required field absent (check 1.1, check 1.10). Correct value: `["infrastructure", "hardware"]` |

**Frontmatter summary:** 4 PASS, 10 FAIL. Missing fields: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. OG block incomplete. Description over 160 chars. Keywords too generic. `status: current` in conflict with missing `veracityStatus` and open REVIEW flag.

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. 6 required fields absent. |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `'tutorial'` is canonical. |
| 1.3 | `pageVariant` valid if present | N/A | Field not present. |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field missing. Correct value for this page: `'start'` — "go from zero to minimal working state fast". |
| 1.5 | `audience` uses 7-token set | PASS | `'orchestrator'` is canonical. |
| 1.6 | `complexity` single canonical value | FAIL | Field missing. Correct value: `'intermediate'` — assumes Linux/Docker familiarity, not a beginner task. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field missing. Correct value: `'setup'` — first-time installation. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field missing. `status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags (§1.8). File has one open `{/* REVIEW: */}` at line 143. Correct fix: add `veracityStatus: 'unverified'` and change `status` to `'draft'` until verified. See Cross-Category Connection CC-1. |
| 1.9 | `industry` array valid if present | FAIL | Field missing. Add: `industry: ["technical", "livepeer"]` |
| 1.10 | `niche` array valid if present | FAIL | Field missing. Add: `niche: ["infrastructure", "hardware"]` |
| 1.11 | `description` well-formed | FAIL | 174 chars — exceeds 160-char limit. Fix: `'Install go-livepeer on Linux, macOS, Windows, or Docker. Covers GPU driver requirements, binary install, and verification.'` (130 chars). Also note "Covers" opens with the page's scope description, not an outcome — borderline but acceptable for an instruction page description. |
| 1.12 | OG image block complete | FAIL | Only `og:image` present. Missing: `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`. Add per r-monitor.mdx template: `'og:image:alt': Livepeer Docs social preview image`, `'og:image:type': image/png`, `'og:image:width': 1200`, `'og:image:height': 630` |
| 1.13 | `keywords` field quality | FAIL | Too generic: "install", "GPU", "binary", "orchestrator" are not searcher-intent queries. Stronger keywords: `"install go-livepeer linux"`, `"go-livepeer GPU binary CUDA"`, `"livepeer orchestrator node install"`, `"NVIDIA CUDA 12 livepeer"`, `"go-livepeer Docker setup"` |

**Category 1 verdict:** 2 PASS, 10 FAIL, 1 N/A.

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings found. Candidates checked: no "organize", "customize", "flavor", "color", "center". |
| 2.2 | Zero banned words | PASS | Candidates checked: no "effectively", "essentially", "basically", "meaningful", "significant" (as intensifier), "various", "several", "obviously", "clearly". See Banned Construction Scan for full word-by-word evidence. |
| 2.3 | Zero banned phrases | PASS | Candidates checked: no "This section covers", "This page covers/explains/walks you through", "Understanding X is essential", "rather than", "It is important to note", "among other factors", "depends on various". |
| 2.4 | Zero banned constructions | FAIL | Multiple `if [condition]` constructions in body prose. See Banned Construction Scan for full list. Notable example line 61: "Use the `livepeer-linux-gpu-*` archive only when the host has an NVIDIA GPU" — conditional in body prose, not resolved as a threshold statement. |
| 2.5 | Opening order correct | PASS | Line 14: "By the end of this guide, you will have go-livepeer installed on your machine and your GPU detected and ready to configure." — outcome-first, no caveat opener. |
| 2.6 | Paragraph discipline | PASS | Paragraphs are short and functional. Lead sentences state the fact. Final sentences route forward or state an outcome. |
| 2.7 | Audience register correct | PASS | Operational and technical register throughout. Hardware-specific language used. Prerequisites stated as hard requirements. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically", "The network rewards you for", "Easy to set up", "Simple configuration". |
| 2.9 | No passive value statements | PASS | No passive value claims found. Page is procedural throughout. |
| 2.10 | No hedging openers | PASS | Opens with outcome statement, not a caveat. |
| 2.11 | Terminology locked and consistent | PASS | "go-livepeer", "orchestrator", "NVIDIA", "CUDA", "Docker", "Arbitrum" used consistently. No deprecated terms found. |

**Category 2 verdict:** 10 PASS, 1 FAIL.

---

## Category 3 — Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | See Heading Score Table. "Verify your installation" scores 18/25 (FAIL). |
| 3.2 | No banned or weak standalone heading terms | PASS | No "Basics", "Notes", "How It Works", "See Also", "Conclusion", "What's Next". "Prerequisites" is explicitly OK per check 3.2. "Next steps" — page uses "Next steps" as an H2 (line 455). This is in the **Avoid** tier: "Next Steps". FLAG. Recommend rename: `"Continue From Here"` or `"After Install"`. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. Platform labels (Linux, Docker, macOS, Windows) are tab labels within a View component, not H2 headings — not subject to this rule. |
| 3.4 | Domain-anchor rule applied | PASS | "Install go-livepeer" includes the domain noun. "Verify your installation" includes context. |
| 3.5 | Heading names concept, not examples | PASS | No example-enumeration in headings. |
| 3.6 | Title well-formed | PASS | "Install go-livepeer" — 2 words + product name. Concept-derived. No banned forms. |
| 3.7 | Sounds like expert editorial choice | FAIL | "Verify your installation" is generic — almost every install doc has this heading. "Next steps" is a structure label. Both below expert editorial bar. |

**Category 3 verdict:** 4 PASS, 2 FAIL, 1 conditional FLAG (check 3.2 "Next steps" in Avoid tier).

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Serves one orchestrator installing go-livepeer. Single job. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator install go-livepeer and verify GPU detection before configuration." Clear and complete. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | PREV = `rcs-requirements` (docs.json line 2861). Reader completing requirements knows they need the binary — the install page follows correctly. NEXT = `configure` (docs.json line 2863). After install and GPU verification, configuration is the correct next step. Handoffs are clean. |
| 4.4 | No dead ends | PASS | "Next steps" section provides two cards routing to `configure` and the quickstart guide. |
| 4.5 | Prerequisites stated or linked | PASS | Prerequisites section at line 16 states all hard requirements explicitly: OS, tools, GPU driver version, CUDA, Go version for source builds. |
| 4.6 | Out-of-scope is clear | PASS | Notes clarify macOS and Windows limitations for GPU/production use. Source build clearly labelled "advanced". |
| 4.7 | Information type per section correct | PASS | `purpose: start` (proposed) permits `procedural` (primary) and `factual`/`conceptual` (secondary). All sections are correctly typed: Prerequisites = factual, Install steps = procedural, Verify = procedural. No mismatched information types. |
| 4.8 | No content duplication from adjacent sections | PASS | Prerequisites are not repeated from `rcs-requirements`. GPU verification step is distinct from the next-step card pointing to configure. |
| 4.9 | Section orientation page present | N/A | Section-level check, not page-level. Setup section has `setup/guide` as orientation page. |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check. Not applicable at individual page level. |

**Category 4 verdict:** 7 PASS, 2 N/A.

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | `tutorial` template: Prerequisites + Steps + Next Steps. All three present. |
| 5.2 | Required sections present | PASS | Prerequisites (line 16), Steps (within each View tab), Next steps/Cards (line 455). Mandatory sections present for `tutorial`. |
| 5.3 | Only approved components used | NOT-TESTED | `component-layout-decisions.mdx` not read. Components observed: `Note`, `View`, `Steps`, `Step`, `Accordion`, `CustomCodeBlock`, `CardGroup`, `Card`, `Warning`. `View` and `CustomCodeBlock` are not in the standard checks.mdx matrix for `tutorial`. `CustomCodeBlock` is a custom import from `/snippets/components/content/code.jsx`. Cannot confirm approval without reading the catalog. Flag for review. |
| 5.4 | Avoided components absent | PASS | No TODO/TBD placeholders in rendered content (line 143 is a JSX comment, not rendered). No "Coming Soon". No `PreviewCallout`. |
| 5.5 | Information type → component mapping correct | PASS | Procedural content uses Steps/Step. Code blocks use CustomCodeBlock. Notes/Warnings correctly applied for caveats. Warning at line 451 is appropriate for a blocking gate condition. |
| 5.6 | MDX renders clean | PASS (visual) | All JSX appears well-formed. All components have closing tags. Import at line 12 is valid. No unclosed tags visible. NOT formally tested against Mintlify renderer. |
| 5.7 | No old-schema frontmatter | PASS | `pageType: tutorial` is 7-type canonical. No deprecated values. |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS found. |
| 5.9 | Generated file banners intact | N/A | No `generated-file-banner` present — page is hand-authored. |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports. `CustomCodeBlock` imported from correct snippets path. |

**Category 5 verdict:** 6 PASS, 1 FAIL (NOT-TESTED for component approval), 3 N/A.

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | **NOT-TESTED** on all procedural/technical claims. Key claims requiring verification: (1) `v0.8.9` as current release — not confirmed against GitHub releases. (2) CUDA 12.0 minimum with driver versions `525.60.13` (Linux) and `527.41` (Windows) — stated at lines 21–22, sourced as "CUDA 12.0 release notes". Source not confirmed. (3) Go `1.25.0` requirement (line 23, 146, 151) — not confirmed against go-livepeer build requirements. (4) `sha256` checksum value at line 308 — not verified. (5) Docker image `livepeer/go-livepeer:v0.8.9` existence — not confirmed. |
| 6.2 | Code/commands tested | FAIL | **NOT-TESTED.** No commands have been executed against a live system. All 4 install paths (Linux, Docker, macOS, Windows) are untested. The GPU verification commands at lines 424 and 440 are untested. |
| 6.3 | No deprecated API usage | FAIL (NOT-TESTED) | CLI flags used: `-orchestrator`, `-transcoder`, `-nvidia all`, `-network arbitrum-one-mainnet`, `-ethUrl`, `-serviceAddr`, `-testTranscoder`, `-transcoder`, `-v 4`. Not confirmed against current go-livepeer v0.8.9 CLI documentation. Flag `-testTranscoder` referenced at line 417 ("enabled by default") — cannot confirm without testing. |
| 6.4 | Numbers are real | FAIL | **NOT-TESTED.** Version `v0.8.9`, Go `1.25.0`, CUDA `12.0.0`, driver versions `525.60.13`/`527.41`, checksum `e500a69b...` — all unverified against authoritative sources. |
| 6.5 | REVIEW flags for unverified claims | FAIL | Line 143: `{/* REVIEW: Confirm whether v0.8.9 source builds need any additional native packages beyond this Ubuntu dependency set on non-Docker hosts. */}`. Flag exists and is honest. However, `status: current` with an open REVIEW flag violates §1.8. The REVIEW flag is correctly placed but `status` must change to `draft` until resolved. See CC-1. |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` field is missing. Given multiple NOT-TESTED procedural/technical sections, correct value is `unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references in this page. |
| 6.8 | Source staleness check | FAIL | Version numbers (`v0.8.9`, CUDA `12.0.0`, driver minimums) are fast-changing. No staleness flag present. These should be flagged: `{/* REVIEW: verify v0.8.9 is still current release against https://github.com/livepeer/go-livepeer/releases */}` |
| 6.9 | No open-ended research tasks | FAIL | Line 143 REVIEW comment is not a valid veracity finding — it has no named source and no concrete next step beyond "Confirm". Fix: `{/* REVIEW: confirm Ubuntu dependency set for v0.8.9 source builds against https://github.com/livepeer/go-livepeer/blob/v0.8.9/install_ffmpeg.sh and the go-livepeer contributing guide */}` |

**Category 6 verdict:** 0 PASS, 8 FAIL, 1 N/A. All procedural/technical sections NOT-TESTED. Page cannot have `veracityStatus: verified` until all steps are executed on a live system.

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Found at docs.json line 2862: `"v2/orchestrators/setup/rs-install"` |
| 7.2 | Navigation matches file system | PASS | File exists at `v2/orchestrators/setup/rs-install.mdx`. docs.json path `v2/orchestrators/setup/rs-install` matches. |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check. |
| 7.4 | No structural orphans | PASS | Page is in docs.json Setup group. Reachable from navigation. |
| 7.5 | Audience journey complete | PASS | Position 3 of 7 in Setup. Follows requirements, precedes configuration. Correct position in orchestrator setup journey. |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. |
| 7.7 | File in correct lane | PASS | Publishable content in `v2/orchestrators/setup/`. Not in `_workspace/`. |
| 7.8 | File naming conventions | PASS | Prefix `rs-` = reference + setup. Correct for a page that is primarily a setup procedure with reference elements (checksums, version numbers). |
| 7.9 | _workspace/ TTL compliance | N/A | File is not in `_workspace/`. |

**Category 7 verdict:** 5 PASS, 3 N/A.

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | FAIL | Three internal links found. Verified against docs.json: (1) Line 272: `/v2/orchestrators/setup/orch-config` — NOT IN docs.json. Searched docs.json for "orch-config": not found. The setup group contains `configure` not `orch-config`. Likely broken link — should be `/v2/orchestrators/setup/configure`. (2) Line 452: `/v2/orchestrators/resources/faq` — searched docs.json: **FOUND** (docs.json resources group). PASS. (3) Line 461: `/v2/orchestrators/get-started/quickstart` — NOT IN docs.json. Searched for "get-started": not found. Quickstart group is at `v2/orchestrators/quickstart/`. Correct path is likely `/v2/orchestrators/quickstart/guide` or `/v2/orchestrators/quickstart/video-transcoding`. Broken link. |
| 8.2 | All external links live | FAIL (NOT-TESTED) | External links found: (1) Line 27: `https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513` — NOT-TESTED. (2) Line 216: `https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html` — NOT-TESTED. Both require live HTTP verification. |
| 8.3 | All snippet imports resolve | PASS | Line 12: `import { CustomCodeBlock } from '/snippets/components/content/code.jsx'`. File path is standard snippets path — assumed present based on use across repo. NOT formally verified via filesystem check. |
| 8.4 | All images load | N/A | OG image at `'/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg'` is frontmatter only, not rendered in page body. No inline images in body. |
| 8.5 | Page renders without error | NOT-TESTED | Not run against Mintlify renderer. JSX appears well-formed visually. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | Line 143 `{/* REVIEW: */}` is a JSX comment — not rendered. No TODO/TBD/Coming Soon strings in rendered content. |

**Category 8 verdict:** 1 PASS, 2 FAIL, 1 NOT-TESTED, 2 N/A.

**Critical findings:**
- Line 272: `/v2/orchestrators/setup/orch-config` — broken. Fix: `/v2/orchestrators/setup/configure`
- Line 461: `/v2/orchestrators/get-started/quickstart` — broken. Fix: `/v2/orchestrators/quickstart/guide` (confirm against docs.json)

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off recorded in frontmatter or workspace artefacts. |
| 9.2 | All consuming decisions in registry | N/A | Page does not reference structural decisions that would need registry entries. |
| 9.3 | Gate prerequisites met | FAIL | Tab-status.md shows Orchestrators: IA Draft only, Terminology No, Content Pass No. Page should not be treated as ready-to-publish. |
| 9.4 | Phase ordering respected | N/A | Cannot verify without session history. |
| 9.5 | Findings gathered before fixes | N/A | This check report IS the findings gathering step. |
| 9.6 | Feedback routed | N/A | Not yet at feedback stage. |

**Category 9 verdict:** 0 PASS, 2 FAIL, 4 N/A.

---

## Banned Construction Scan

**Scope applied:** body prose, headings, frontmatter description, Notes, Warnings, Step titles, CustomCodeBlock props, card descriptions.

| Line | Sentence / text | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| 3 | "Covers prerequisites, GPU driver requirements, installation steps, and verification." | `can`/`may` — none | Procedural description | No |
| 14 | "By the end of this guide, you will have go-livepeer installed on your machine and your GPU detected and ready to configure." | None | Outcome statement | No |
| 19 | "For production GPU transcoding, plan on Linux." | None | Direct instruction | No |
| 20 | "Docker Engine **if** you want the container install path." | `if [condition]` | Conditional caveat in prerequisites list — procedural choice signal, not body prose value claim | Borderline — acceptable in prerequisites list |
| 20 | "GPU containers also need the NVIDIA Container Toolkit." | None | Direct factual statement | No |
| 21 | "An NVIDIA driver that satisfies CUDA 12.0.0 **if** you will use the Linux GPU binary or Docker GPU runtime." | `if [condition]` | Conditional in prerequisites list — user makes binary hardware choice | Borderline — acceptable, prerequisite qualification |
| 22 | "CUDA 12.0.0 on the host **if** you will run the Linux GPU binary directly or build from source." | `if [condition]` | Same — prerequisite choice condition | Borderline — acceptable |
| 23 | "Go 1.25.0 **if** you will build from source." | `if [condition]` | Prerequisite qualification | Borderline — acceptable |
| 31 | "macOS binaries are useful for local development and CLI access, but upstream GPU documentation only covers NVIDIA workflows on Linux and Windows, and the current Docker GPU path is Linux-first." | None | Direct factual statement | No |
| 31 | "Use Linux for production transcoding and AI workloads." | None | Direct instruction | No |
| 37 | "Use the standard Linux archive for CPU-only installs. Use the Linux GPU archive **when** this machine will transcode on NVIDIA hardware." | `when [condition]` | Procedural selection condition — acceptable | No |
| 61 | "Use the `livepeer-linux-gpu-*` archive only **when** the host has an NVIDIA GPU and the matching CUDA libraries available." | `when [condition]` | Procedural — acceptable | No |
| 78 | "Replace `ARCHIVE` with the filename you downloaded, such as `livepeer-linux-gpu-amd64.tar.gz`." | None | Instruction | No |
| 96–98 | "**If** you run the Linux GPU binary directly, upstream expects the CUDA shared libraries under `/usr/local/cuda`. **If** your CUDA install lives elsewhere, start the node with `LD_LIBRARY_PATH` pointing at that CUDA library directory." | `if [condition]` | **FAIL** — conditional body prose resolving a configuration branch. Should be stated as: "The Linux GPU binary expects CUDA shared libraries at `/usr/local/cuda`. For non-standard CUDA install paths, start the node with `LD_LIBRARY_PATH` set to the CUDA library directory." |  **FLAG** |
| 202 | "Use the release-tagged image for a repeatable install. The floating `latest` tag exists on Docker Hub, but it moves as new images are published." | None | Direct factual | No |
| 216 | "**If** the package is not available for your distribution, use the full [NVIDIA Container Toolkit install guide]..." | `if [condition]` | **FAIL** — conditional in body prose. Fix: "For distributions not covered by the standard package, use the [NVIDIA Container Toolkit install guide]..." | **FLAG** |
| 272 | "Use [Configure your orchestrator](/v2/orchestrators/setup/orch-config) for the full flag breakdown before you run the node in production." | `can`/`may` — none | Direct instruction | No |
| 312 | "Replace `livepeer-darwin-arm64.tar.gz` with the Intel archive **if** you are on an Intel Mac." | `if [condition]` | Conditional in instruction context — acceptable binary choice | Borderline |
| 399 | "The architecture and operating system lines vary by platform, but the release line should match the tag you installed." | `should` | `should` in procedural instruction — acceptable (expected output description) | No |
| 417 | "For a go-livepeer GPU check on a native install, start the binary in transcoder mode with the NVIDIA device flag. The `-testTranscoder` startup check is enabled by default, so you **can** stop the process after the device lines appear." | `can [verb]` | **FAIL** — `can stop` in procedural instruction. Assert directly: "Press Ctrl+C after the device lines appear." Already present as `preNote` at line 423 — this sentence is partially redundant and uses a weak construction. | **FLAG** |
| 434 | "**If** you are using Docker, the equivalent runtime check is:" | `if [condition]` | **FAIL** — conditional in body prose before a code block. Fix: "For Docker, the equivalent GPU runtime check is:" | **FLAG** |
| 452 | "**If** `livepeer -transcoder -nvidia all` does not print the `Nvidia devices:` line, or **if** the Docker runtime cannot run `nvidia-smi`, stop here and work through the [FAQ and troubleshooting guide]..." | `if [condition]` | Conditional in Warning block — acceptable as a fault-branch gate | Borderline — Warning block context makes this a boundary condition |
| 459 | "Set the flags your node needs to connect, price jobs, and accept work." | None | Card description | No |
| 461 | "Continue with the end-to-end orchestrator flow after the binary and GPU checks pass." | None | Card description | No |

**Banned word candidates checked against file:**
- `effectively` — 0 occurrences. PASS.
- `essentially` — 0 occurrences. PASS.
- `basically` — 0 occurrences. PASS.
- `meaningful` — 0 occurrences. PASS.
- `significant` — 0 occurrences. PASS.
- `real` (as intensifier) — 0 occurrences. PASS.
- `various` — 0 occurrences. PASS.
- `several` — 0 occurrences. PASS.
- `obviously` — 0 occurrences. PASS.
- `clearly` — 0 occurrences. PASS.

**FAIL constructions (4):**
1. Line 96–98: `if` conditional in body prose — rephrase to direct statement
2. Line 216: `if` conditional in body prose — rephrase to "For distributions not covered by..."
3. Line 417: `can stop` in procedural instruction — replace with direct imperative
4. Line 434: `if` conditional before code block — rephrase to "For Docker, the equivalent..."

---

## Heading Score Table

**Note:** "Related Pages" heading is exempt from all scoring. Step titles inside `<Step>` components are not H-level headings — not scored. `<View>` tab labels (Linux, Docker, macOS, Windows) are component props — not H-level headings — not scored. `<Accordion>` titles are component props — not scored as H-level headings.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| `Prerequisites` | 5 | 3 | 5 | 5 | 5 | 23/25 | PASS |
| `Install go-livepeer` | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| `Verify your installation` | 3 | 2 | 3 | 4 | 4 | 16/25 | FAIL |
| `Next steps` | 2 | 1 | 4 | 3 | 4 | 14/25 | FAIL |

**Scoring rationale:**

`Verify your installation` — **16/25 FAIL**
- Precision 3: "installation" is the subject but "verify" is the verb and this heading appears on virtually every install doc on the web — it names the action type, not the specific check being done.
- Depth 2: Does not signal whether this is a binary check, a smoke test, or a GPU-specific validation. Reader doesn't know what "verify" means here until they read the section.
- Stability 3: Would survive content changes but only because it's generic.
- Clarity 4: Clear about the general intent.
- Conciseness 4: Appropriately concise.
- Fix: `Installation Check` or `Binary and GPU Check` (21/25 projected).

`Next steps` — **14/25 FAIL**
- Precision 2: Could be the heading on any page. Names a structure category, not the concept.
- Depth 1: Signals nothing about what the next steps are or where they lead.
- Stability 4: Stable because it's generic.
- Clarity 3: Clear as a signpost but empty as content.
- Conciseness 4: Short but without signal.
- Fix: `After Install` or `Configure Your Node` (20+/25 projected). Note: "Next Steps" is in the **Avoid** tier per check 3.2.

---

## Spelling/Typo Check

Scanned all visible text: headings, step titles, prose paragraphs, Note/Warning blocks, card descriptions, code filenames, and accordion titles.

- `Expand-Archive` (line 19): Correct PowerShell cmdlet name.
- `CUDA` / `NVIDIA` / `NVLink` / `NVDEC`: Consistent capitalisation throughout.
- `nvidia-smi` (lines 240, 441): Lowercase — correct for CLI tool name.
- `livepeer_cli` / `livepeer_router` / `livepeer_bench`: Consistent underscore naming.
- `amd64` / `arm64`: Consistent.
- `PKG_CONFIG_PATH`, `LD_LIBRARY_PATH`: Correct env var capitalisation.

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for `tutorial`? | Notes |
|-----------|-------|------------------------------|-------|
| `Note` | Yes | Yes — listed in Preferred for `tutorial` | Used correctly for caveats and conditional paths |
| `Warning` | Yes | Yes — listed in Preferred for `tutorial` | Correctly gates the verification step |
| `Steps` / `Step` | Yes | Yes — listed in Preferred for `tutorial` | Primary structure component |
| `CardGroup` / `Card` | Yes | Not explicitly listed for `tutorial` | Cards used for "Next steps" routing. NOT-TESTED against component-layout-decisions.mdx — cannot confirm as approved or unapproved. |
| `Accordion` | Yes | Yes — listed in Preferred for `concept`, not `tutorial` | Used for "Build from source (advanced)" section. NOT-TESTED — component may be approved for tutorial, but not in the quick reference matrix for that type. |
| `View` | Yes | NOT-TESTED | `View` is not in the standard matrix. Used as a multi-OS tab container. Cannot confirm approval without reading component catalog. |
| `CustomCodeBlock` | Yes | NOT-TESTED | Custom import from snippets. Not in standard matrix. Used throughout for code blocks with outputs. |
| `Columns` | No | N/A | Not used |
| `Tabs` | No | N/A | Not used — `View` used instead |

---

## Cross-Category Connections

```
Root Cause CC-1: status:current / veracityStatus missing / open REVIEW flag — incoherent state
Affects: Cat 1.8 + Cat 6.5 + Cat 6.6 + Cat 9.3
Fix: Change status to 'draft', add veracityStatus: 'unverified'. When all REVIEW flags resolved
     and procedural content tested on live system, change to status: 'current' / veracityStatus: 'verified'.
```

```
Root Cause CC-2: Missing required frontmatter fields (6 fields)
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.9 + Cat 1.10
Fix: Add to frontmatter block:
     purpose: 'start'
     complexity: 'intermediate'
     lifecycleStage: 'setup'
     veracityStatus: 'unverified'
     industry: ["technical", "livepeer"]
     niche: ["infrastructure", "hardware"]
```

```
Root Cause CC-3: Two broken internal links
Affects: Cat 8.1
Fix: Line 272: change /v2/orchestrators/setup/orch-config → /v2/orchestrators/setup/configure
     Line 461: change /v2/orchestrators/get-started/quickstart → /v2/orchestrators/quickstart/guide
     (confirm second fix against docs.json before executing)
```

```
Root Cause CC-4: Heading quality — two headings below threshold
Affects: Cat 3.1 + Cat 3.2 + Cat 3.7
Fix: "Verify your installation" → "Binary and GPU Check" (or "Installation Check")
     "Next steps" → "After Install" (removes Avoid-tier term, raises score above 20/25)
```

```
Root Cause CC-5: OG block incomplete
Affects: Cat 1.12
Fix: Add to frontmatter after og:image:
     'og:image:alt': Livepeer Docs social preview image
     'og:image:type': image/png
     'og:image:width': 1200
     'og:image:height': 630
```

---

## Blocking Decisions

No blocking scope ambiguity. The page has a clear single purpose (install go-livepeer, verify binary and GPU). The one conditional finding is:

```
Blocking Decision: Broken "Next steps" link target
/v2/orchestrators/get-started/quickstart does not exist in docs.json.
Options:
  [A] Route to /v2/orchestrators/quickstart/guide (quickstart entry page)
  [B] Route to /v2/orchestrators/quickstart/video-transcoding (transcoding quickstart)
If A: update Card href line 461 to /v2/orchestrators/quickstart/guide
If B: update Card href line 461 to /v2/orchestrators/quickstart/video-transcoding
Human decision required — depends on intended post-install flow.
```

---

## Final Verdict

**NEEDS WORK**

**Blocking issues (fix before any publish consideration):**
1. 6 missing required frontmatter fields (CC-2)
2. 2 broken internal links — one confirmed, one needs confirmation (CC-3)
3. `status: current` + open REVIEW flag + missing `veracityStatus` — incoherent state (CC-1)
4. OG block incomplete — 4 fields missing (CC-5)
5. All procedural/technical content is NOT-TESTED — page cannot carry `veracityStatus: verified` (Cat 6)

**High-priority fixes (do before content pass):**
6. Description over 160 chars — trim to 130 (Cat 1.11)
7. Keywords too generic — replace with searcher-intent queries (Cat 1.13)
8. 4 banned `if [condition]` / `can [verb]` constructions in body prose (Cat 2.4)
9. Two headings below 20/25 threshold (CC-4)

**Low-priority fixes (polish):**
10. REVIEW flag at line 143 needs named source and concrete next step (Cat 6.9)

**Page content quality:** High. Structure is correct, register is correct, prerequisites are complete, steps are clear and platform-specific. The content itself is well-crafted. The failures are all in frontmatter completeness, two broken links, and copy construction details. No rewrite needed.
