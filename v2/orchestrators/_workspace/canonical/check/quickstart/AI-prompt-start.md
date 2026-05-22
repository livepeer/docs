# Per-Page Quality Check — `v2/orchestrators/quickstart/AI-prompt-start.mdx`

**Reviewer:** Claude Code agent
**Date:** 2026-03-24
**Checks standard:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks standard:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**docs.json consulted:** Yes — lines 2847–2854 (quickstart group)

---

## Blocking Decision

**Blocking Decision:** The page's purpose field is missing from frontmatter (check 1.1 FAIL — 9 of 10 required fields present, `purpose` absent). All checks downstream of `purpose` are evaluated against the inferred type `configure` (step-oriented guide for adding AI to an existing node), but fixes in Category 1 must be resolved first.

No fundamental scope, audience, or structural rewrite is required — the page's concept is coherent and the content matches the title. The blocking decision is additive only.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Add AI to Your Node` | PASS | |
| `sidebarTitle` | Yes | `AI Prompt: Orchestrator Setup` | PASS | |
| `description` | Yes | 205 chars | FAIL | Exceeds 160-char limit (check 1.11) |
| `pageType` | Yes | `guide` | FAIL | `guide` is a valid 7-type value, but `pageType: instruction` with `pageVariant: quickstart` is the correct classification for a step-by-step node-configuration procedure. See Cat 1 finding 1.2. |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | No | — | FAIL | Required field. Absent entirely (check 1.1) |
| `complexity` | No | — | FAIL | Required field. Absent entirely (check 1.1) |
| `lifecycleStage` | No | — | FAIL | Required field. Absent entirely (check 1.1) |
| `keywords` | Yes | 10-item array | MEDIUM | Keywords quality issues — see check 1.13 |
| `og:image` | Yes (partial) | `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` | FAIL | Only 1 OG field present; check 1.12 requires all 5 OG fields |
| `lastVerified` | Yes | `2026-03-10` | INFO | Not a required field; noted |
| `status` | Yes | `review` | INFO | Present; `status: review` is not `status: current` so the veracityStatus conflict rule does not apply here |
| `veracityStatus` | No | — | FAIL | Required field (check 1.8). Missing entirely |
| `industry` | No | — | INFO | Optional field; not required but relevant for this page |
| `niche` | No | — | INFO | Optional field |

**Required field count:** 10 required fields; 5 absent (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, OG image block incomplete). FAIL.

---

## Category 1 — Frontmatter & Taxonomy

### 1.1 — All 10 required frontmatter fields present
**Result: FAIL**
Five required fields are absent: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, and the full OG image block. Additionally `description` is present but fails check 1.11.

Fix:
```yaml
purpose: 'configure'
complexity: 'intermediate'
lifecycleStage: 'setup'
veracityStatus: 'unverified'
```

### 1.2 — pageType uses 7-type canonical schema
**Result: FAIL (misclassification)**
Current value: `pageType: guide`. The page is a numbered step-by-step procedure (Step 1 → Step 4) that takes the reader from zero to a working AI node configuration. The correct classification per Frameworks.mdx §1.1 is `pageType: instruction` + `pageVariant: quickstart`. `guide` is reserved for opinionated guidance toward an outcome where the reader makes decisions across sections — this page is procedural with no branching until the final card group.

Fix:
```yaml
pageType: 'instruction'
pageVariant: 'quickstart'
```

### 1.3 — pageVariant valid if present
**Result: N/A — pageVariant absent**
Once 1.2 is fixed, `pageVariant: quickstart` will be added; that value is valid per checks.mdx 1.3.

### 1.4 — purpose uses 15-value canonical set
**Result: FAIL — field absent**
Fix: Add `purpose: 'configure'`. The purpose maps to the configure reader process: "identify requirement → locate parameter → understand effect → set value → confirm."

### 1.5 — audience token valid
**Result: PASS**
`audience: orchestrator` — valid 7-token value.

### 1.6 — complexity valid
**Result: FAIL — field absent**
Fix: Add `complexity: 'intermediate'`. The page assumes existing orchestrator operation and prior Docker knowledge.

### 1.7 — lifecycleStage valid
**Result: FAIL — field absent**
Fix: Add `lifecycleStage: 'setup'`. Reader is in first-time configuration of a new capability.

### 1.8 — veracityStatus present and honest
**Result: FAIL — field absent**
The page contains at minimum 8 inline `{/* REVIEW: */}` flags (lines 21, 25, 58, 61–62, 67, 130, 131–132, 230, 232, 262). Per check 1.8, `status: review` with unresolved REVIEW flags = `veracityStatus: unverified` is the correct and only valid value. `status: current` does not apply here.

Fix: Add `veracityStatus: 'unverified'` to frontmatter.

### 1.9 — industry valid if present
**Result: N/A — field absent (optional)**
Suggested value if added: `industry: ['technical', 'AI']`

### 1.10 — niche valid if present
**Result: N/A — field absent (optional)**
Suggested value if added: `niche: ['infrastructure', 'AI']`

### 1.11 — description well-formed
**Result: FAIL**
Current value (line 3):
> `An Experimental AI Prompt for setting up your GPU as a Livepeer Orchestrator. Add AI inference pipelines to an existing go-livepeer transcoding node — hardware check, aiModels.json configuration, and startup command update.`

Character count: 205 characters. Limit: 160.

Additional issues:
- Contains an em dash (`—`) — prohibited per CLAUDE.md em-dash rule (all visible text).
- Opens with "An Experimental AI Prompt" — not subject-first; starts with the document type rather than the reader outcome.

Fix (≤160 chars, subject-first, no em dash, UK English):
```
Add AI inference pipelines to a running go-livepeer transcoding node: hardware check, aiModels.json configuration, and startup command update.
```
Character count: 142. Subject is the action; em dash removed; "Experimental AI Prompt" framing removed.

### 1.12 — OG image block complete
**Result: FAIL**
Only `'og:image'` is present (line 9). A complete OG block requires all 5 OG fields. The other 4 fields are absent.

Fix: Add the standard OG block. The exact required fields are defined in Frameworks.mdx; the fix is to add the full 5-field block using the repo's standard OG snippet pattern. This should be resolved by checking an existing page that passes 1.12 for the complete block structure.

### 1.13 — keywords quality
**Result: MEDIUM**
Current keywords: `["livepeer", "orchestrator", "AI inference", "AI runner", "aiModels.json", "pipeline", "VRAM", "Cascade", "batch AI", "GPU"]`

Issues:
- `"livepeer"` — generic; fails 1.13 "not generic" rule.
- `"orchestrator"` — generic; fails rule.
- `"GPU"` — generic hardware term; not searcher-intent-aligned.
- `"pipeline"` — too general; not search-specific.

Good candidates already present: `"aiModels.json"`, `"AI runner"`, `"VRAM"`, `"Cascade"`, `"batch AI"`.

Fix: Replace generic terms with search-intent-aligned alternatives:
```yaml
keywords: ["aiModels.json configuration", "AI runner setup", "add AI inference to orchestrator", "VRAM requirements livepeer", "Cascade real-time AI", "batch AI pipeline livepeer", "livepeer ai-runner Docker", "GPU transcoding AI livepeer"]
```

---

## Category 2 — Voice & Copy

### 2.1 — UK English throughout
**Result: FAIL**
Violations found (confirmed by reading the file):

| Line | US form | UK fix |
|------|---------|--------|
| 113 | `"Field reference"` (heading) | No US spelling issue here — heading is checked in Cat 3 |
| 136 | `"Stop your current go-livepeer process, then restart it with the following additions."` — no US spelling | PASS |
| 45 | `"minimize"` — not present; no violation | — |

Actual violations:
- Line 3, description: `"startup"` used as noun — acceptable compound in UK English. No violation.
- No `-ize` endings found in body prose.
- Line 227: `"base64-encoded"` — technical compound, not a UK/US distinction.

**PASS** — No UK/US spelling violations found in body prose. The single violation is the em dash in the `description` field (covered under check 1.11 and the em-dash prohibition).

### 2.2 — Zero banned words
**Result: PASS**
Scan of all body prose for `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`:

- Line 35: "AI inference runs in a separate Docker container alongside your transcoding process." — no banned words.
- Line 51: "Use the table below to see which pipelines you can run based on your available VRAM" — no banned words.
- Line 92: "The `aiModels.json` file tells your orchestrator which AI pipelines and models to serve, what to charge, and whether to keep models warm in VRAM." — no banned words.
- Full scan: no instances found.

### 2.3 — Zero banned phrases
**Result: PASS**
Scanning for "This section covers", "This page covers/explains/walks you through", "Understanding X is essential", "It is important to note", "As mentioned above", "etc.", "rather than", "not just", "can generate", "may produce", "low but not zero", "once X is stable", "depends on various":

None found.

### 2.4 — Zero banned constructions
**Result: FAIL — see Banned Construction Scan section**
Specific finding: Line 238 — "Your AI runner is active. The next step depends on which pipeline type you want to specialise in." The phrase "depends on" without a ranked list is a borderline case; detailed in Banned Construction Scan.

### 2.5 — Opening order correct
**Result: FAIL**
Line 15: `"By the end of this guide, your orchestrator will accept AI inference jobs alongside transcoding."`

This opens with a self-referential framing ("By the end of this guide") rather than leading directly with a fact or the reader's outcome. Per checks.mdx 2.5: "Introduction opens with subject, not caveat or self-reference."

Also: the inline comment on line 13 — `{/* REVIEW: THIS CONTENT DOESNT SEEM TO MATCH ITS PURPOSE */}` — is a signal that the author themselves flagged this. The page content does match a quickstart/guide purpose, so the REVIEW flag may be residual concern about it being labelled as a different page type. Regardless, the opening sentence violates opening order.

Fix: Replace line 15 with a subject-first opening that states the reader's outcome directly:
```
Your orchestrator accepts AI inference jobs alongside transcoding after completing these four steps.
```

### 2.6 — Paragraph discipline
**Result: PASS**
Lead sentences generally state facts. Final sentences end on the next step or a concrete fact. No section closes on a hedge.

Notable: Line 238 paragraph ("Your AI runner is active...") is the weakest — addressed under 2.4.

### 2.7 — Audience register correct
**Result: PASS**
Register is operational and technical throughout. Hardware-specific language used (`VRAM`, `NVENC`, `nvidia-smi`, Docker passthrough, GPU allocation). Prerequisites are stated as hard requirements. Economics not covered (not in scope for this page). No hand-holding or marketing language.

### 2.8 — Per-audience prohibited phrases absent
**Result: PASS**
Scanning for orchestrator-prohibited phrases:
- "Your orchestrator will automatically..." — not present.
- "The network rewards you for..." — not present.
- "Easy to set up" / "Simple configuration" — not present.
- Earnings hedges without mechanism — not applicable; this page does not cover earnings.

### 2.9 — No passive value statements
**Result: PASS**
No unquantified "cost-effective" or "fast" claims. VRAM minimums are stated with specific numbers.

### 2.10 — No hedging openers
**Result: FAIL**
Line 15: "By the end of this guide, your orchestrator will accept AI inference jobs alongside transcoding." — this is a meta-framing sentence, not a hedge per se, but it opens with the document structure rather than the subject. Covered under 2.5.

### 2.11 — Terminology locked and consistent
**Result: PASS with one INFO**
- `aiModels.json` — correctly cased throughout.
- `ai-runner` — consistently hyphenated in Docker references.
- `go-livepeer` — consistently hyphenated.
- `Cascade` — appears in keywords and card title (line 249). CLAUDE.md requires Cascade to be defined at first use on every page. Cascade appears only in the card title at line 249 ("Set up real-time AI (Cascade)") — parenthetical usage implies definition but does not explicitly define the term.

INFO: Cascade is partially defined by the card description at line 250: "Configure ComfyStream for persistent video stream processing." This is a description of what Cascade does, not a definition of the term. At first prose use (the card title), Cascade is not defined independently.

Fix: In the `Related` section or in the card description, add a one-sentence definition or inline parenthetical. Example: "Configure ComfyStream for persistent video stream processing. Cascade is Livepeer's real-time AI subnet."

---

## Category 3 — Section Naming & Headings

All headings on this page (H2 and H3), excluding "Related" (structural element — not subject to checks):

1. `Prerequisites` (H2)
2. `Check your hardware` (H2)
3. `Step 1 — Pull the AI runner image` (H2)
4. `Step 2 — Configure aiModels.json` (H2)
5. `Field reference` (H3)
6. `Step 3 — Update your startup command` (H2)
7. `Step 4 — Verify AI is active` (H2)
8. `Check the logs` (H3)
9. `Test the AI runner directly` (H3)
10. `Confirm pipelines are advertised` (H3)
11. `Choose your AI path` (H2)

"Related" is an approved structural element — exempt from checks 3.1 and 3.2.

### 3.1 — Every heading scores ≥20/25
**Result: FAIL — see Heading Score Table**
`Field reference` scores 15/25.

### 3.2 — No banned or weak standalone heading terms
**Result: PASS**
No `Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next` found.
`Prerequisites` is in the OK tier.

### 3.3 — No literal contrast labels
**Result: PASS**
No X vs Y headings.

### 3.4 — Domain-anchor rule applied
**Result: PASS**
Step headings include the domain noun (AI runner, aiModels.json, startup command). Interpretable in isolation.

### 3.5 — Heading names the concept, not examples
**Result: PASS**
Step headings name the action, not specific examples.

### 3.6 — Title well-formed
**Result: PASS**
`Add AI to Your Node` — 5 words, concept-derived, imperative, no banned forms. Accurate.

### 3.7 — Expert editorial choice
**Result: FAIL — `Field reference`**
`Field reference` at H3 under Step 2 is a generic descriptor. The section contains the `aiModels.json` field schema. A stronger heading names the content: `aiModels.json Fields` or `Configuration Fields`.

---

## Category 4 — Page Structure & Content Architecture

### 4.1 — One purpose, one audience, one job
**Result: PASS**
Single job: add AI inference to an existing orchestrator node. Single audience: orchestrator. No scope bleed.

### 4.2 — Purpose statement test
**Result: PASS**
"This page lets the orchestrator add AI inference pipelines to a running go-livepeer transcoding node." — states cleanly.

### 4.3 — PREV_PAGE / NEXT_PAGE adjacency correct
**Result: PASS with INFO**
Navigation sequence from docs.json lines 2847–2854:
- PREV: `v2/orchestrators/quickstart/tutorial` (position 3 of 4)
- THIS: `v2/orchestrators/quickstart/AI-prompt-start` (position 4 of 4)
- NEXT: First item of the next group (Setup section — `v2/orchestrators/setup/guide` at line 2857)

The page is the last item in the Quickstart group. It assumes the reader has an existing orchestrator set up — consistent with having read `guide` and `video-transcoding` earlier in the group. The knowledge handoff is coherent.

INFO: As the last page in the Quickstart group, the final card group ("Choose your AI path") at lines 240–255 routes to pages in `guides/ai-and-job-workloads/` — this is appropriate as a section exit. However, both card targets need link verification (see Category 8).

### 4.4 — No dead ends
**Result: PASS**
The "Choose your AI path" card group at lines 240–255 provides two forward paths. No section is a dead end.

### 4.5 — Prerequisites stated or linked
**Result: PASS with REVIEW flags noted**
Prerequisites section (lines 17–29) is present. Five prerequisites are listed. Two contain `{/* REVIEW: confirm target paths */}` and `{/* REVIEW: confirm path */}` inline flags on links. The prerequisites are stated correctly; the path verification is outstanding.

### 4.6 — Out-of-scope is clear
**Result: PASS**
The Note at line 27–29 explicitly states scope: "This guide adds AI inference to an existing transcoding node. If you are setting up from scratch, start with Install go-livepeer." Scope boundary is clear.

### 4.7 — Information type per section is correct
**Result: PASS**
`configure` purpose permits: primary = `procedural`, `technical`, `factual`; secondary = `conceptual`. Sections are:
- Prerequisites: factual/structural ✓
- Check your hardware: procedural + technical (VRAM table) ✓
- Steps 1–4: procedural + technical ✓
- Field reference table: factual/reference ✓
- Choose your AI path: structural (routing) ✓

All information types are within permitted range.

### 4.8 — No content duplication from adjacent sections
**Result: PASS**
No duplication with the previous `tutorial` page in the quickstart group — that page covers a different path. The VRAM table here is a summary; the `model-hosting` guide would contain detail.

### 4.9 — Section orientation page present
**Result: N/A — section-level check only**
The Quickstart section has `v2/orchestrators/quickstart/guide` as its entry page. Not evaluated per-page.

### 4.10 — Cross-tab links at journey intersections
**Result: N/A — tab-level check only**

---

## Category 5 — Layout, Components & Template

### 5.1 — Correct template for pageType + pageVariant
**Result: CONDITIONAL FAIL**
Currently classified as `pageType: guide`. Per checks.mdx 5.1, a `guide` requires: Overview + Steps or H2 sections. The page has H2 sections but no formal "Overview" section. If reclassified to `instruction` + `pageVariant: quickstart` (recommended fix from 1.2), the required template is: Prerequisites + Steps. Both are present. Post-fix: PASS.

### 5.2 — Required sections present
**Result: PASS (against instruction/quickstart template, if 1.2 fix applied)**
Prerequisites section: present (lines 17–29).
Steps: present (Steps 1–4, lines 72–233).
The page also has a next-step card group which serves as the "Next Steps" section expected by a quickstart template.

### 5.3 — Only approved components used
**Result: NOT-TESTED**
`docs-guide/catalog/components-catalog.mdx` was not read. Components used (Note, Warning, CardGroup, Card) are in the guide/instruction Preferred list per checks.mdx component matrix. Based on the matrix, these components appear appropriate, but full approval status is NOT-TESTED.

### 5.4 — Avoided components absent
**Result: PASS**
No TODO/TBD text components, no `Coming Soon`, no `PreviewCallout`. Inline REVIEW comments are MDX comments, not rendered components.

### 5.5 — Information type → component mapping correct
**Result: PASS**
Procedural content uses bash/JSON code blocks and prose steps, not Steps/Step Mintlify components. This is acceptable for a guide page, though note that `instruction` template prefers `<Steps>` / `<Step>` components. Currently the steps are heading-delimited (## Step 1, ## Step 2, etc.).

INFO: If reclassified to `instruction`, converting to `<Steps>` / `<Step>` components would align with checks.mdx 5.5 mapping. Not a blocking issue for content quality.

### 5.6 — MDX renders clean
**Result: NOT-TESTED**
`npx mintlify dev` not run. No obvious JSX errors or unclosed tags visible in the file. Inline MDX comments (`{/* REVIEW: */}`) are valid MDX syntax. CardGroup and Card usage appears syntactically correct (lines 240–255).

### 5.7 — No old-schema frontmatter
**Result: PASS**
`pageType: guide` is valid in both old and new schemas. Once migrated to `instruction`, still valid new-schema.

### 5.8 — CSS uses custom properties only
**Result: N/A — no inline CSS found**

### 5.9 — Generated file banners intact
**Result: N/A — no generated-file-banner present**

### 5.10 — Component naming/import conventions
**Result: PASS**
No custom component imports. All components are Mintlify built-ins.

---

## Category 6 — Veracity & Factual Accuracy

### 6.1 — Every factual claim citable
**Result: FAIL — multiple unverified claims**

Claims requiring verification (all flagged or verifiable):

| Line | Claim | Status | Risk |
|------|-------|--------|------|
| 22 | "Your orchestrator is in the Top 100 active set" | NOT-TESTED | Active set size (100) is a high-staleness term per Frameworks.mdx §3.4 — verify against Explorer before publication |
| 24 | "at least **4GB of VRAM** available to run at least one AI pipeline" | NOT-TESTED | Consistent with table at line 54 (`image-to-text: 4GB`) but unverified |
| 47 | RTX 3090, 24576 MiB — example output | NOT-TESTED | Example output is plausible; not confirmed against actual nvidia-smi |
| 54 | `image-to-text: 4GB` | NOT-TESTED | Flagged in veracity concern at line 67 REVIEW comment |
| 55 | `segment-anything-2: 6GB` | NOT-TESTED | Flagged; SAM2 VRAM requirements noted as inconsistent in REVIEW-REGISTRY.md |
| 56 | LLM: 8GB, 7–8B quantised models | NOT-TESTED | Plausible; unverified |
| 57 | `audio-to-text: 12GB` | NOT-TESTED | Inconsistency noted in REVIEW-REGISTRY session log — check against Whisper requirements |
| 58 | `image-to-video: 16GB+` | {/* REVIEW */} flag present at line 58 | Known unverified |
| 61 | `upscale: {/* REVIEW */}` | REVIEW flag — value intentionally missing | Unverified |
| 62 | `text-to-speech: {/* REVIEW */}` | REVIEW flag — value intentionally missing | Unverified |
| 83–84 | segment-anything-2 uses a separate Docker image | NOT-TESTED | Unverified against current go-livepeer release |
| 107–110 | JSON example with `price_per_unit: 4768371` | NOT-TESTED | Pricing value plausible; not verified against current market rates |
| 122 | `SFAST` up to +25% speed, `DEEPCACHE` up to +50% speed | NOT-TESTED | Performance claims require a cited benchmark |
| 127 | "During Beta, only one warm model per GPU is supported" | NOT-TESTED | Beta status and limitation need verification against current release |
| 203 | Log line timestamp `2024/05/01` | NOT-TESTED | Example output; timestamp is stale relative to 2026-03-10 lastVerified |
| 216 | `http://localhost:8000/docs` for Swagger UI | NOT-TESTED | Port and path need verification against current ai-runner container |

### 6.2 — Code/commands tested
**Result: FAIL — NOT-TESTED**
- Line 40–41: `nvidia-smi --query-gpu=index,name,memory.total,memory.free --format=csv` — NOT-TESTED: flag syntax not confirmed against current nvidia-smi
- Line 77: `docker pull livepeer/ai-runner:latest` — NOT-TESTED: tag existence not confirmed
- Line 83: `docker pull livepeer/ai-runner:segment-anything-2` — NOT-TESTED
- Lines 144–168: Full livepeer startup command — NOT-TESTED
- Lines 173–191: Docker run command — NOT-TESTED; note potential path issue on line 190: `-aiModelsDir ~/.lpData/models` uses host-expanded path inside Docker run args which contradicts the Note at line 193–195 ("must be the host machine path")

### 6.3 — No deprecated API usage
**Result: NOT-TESTED**
Flags `-aiWorker`, `-aiModels`, `-aiModelsDir` — not confirmed against current go-livepeer CLI reference. These are high-staleness items per Frameworks.mdx §3.4.

### 6.4 — Numbers are real
**Result: FAIL**
VRAM figures in the table (lines 54–62) are partially flagged as unverified. Rows for `upscale` and `text-to-speech` contain `{/* REVIEW */}` in place of VRAM values, confirming they are not real numbers yet.

### 6.5 — REVIEW flags for unverified claims
**Result: PASS**
Eight `{/* REVIEW: */}` flags present at lines 21, 25, 58, 61–62, 67, 130, 230, 232, 262. They correctly mark unverified claims. Format is consistent with checks.mdx §6.5.

### 6.6 — veracityStatus honest
**Result: FAIL — field absent (covered under 1.8)**
Correct value when added: `unverified`.

### 6.7 — Authoritative vs AI-generated glossary
**Result: N/A — no glossary citations on this page**

### 6.8 — Source staleness check
**Result: FAIL — HIGH RISK**
Active set size (100) at line 22, CLI flags (lines 137–139), Docker image tags (lines 77, 83), and Beta limitation (line 127) are all high-staleness items per Frameworks.mdx §3.4. None have source citations.

### 6.9 — No open-ended research tasks
**Result: FAIL**
Line 230: `{/* REVIEW: confirm the exact livepeer_cli command to view advertised AI capabilities; not found in this research pass. Check go-livepeer CLI reference or ask in #orchestrating. */}` — this is an explicit open-ended research task with no named source and no concrete next step beyond "ask in Discord."

Fix: Either resolve the CLI command through the go-livepeer CLI reference, or remove the "Confirm pipelines are advertised" H3 section and the REVIEW comment from publication scope until verified.

---

## Category 7 — Navigation & Information Architecture

### 7.1 — Page exists in docs.json
**Result: PASS**
Confirmed at docs.json line 2853: `"v2/orchestrators/quickstart/AI-prompt-start"`.

### 7.2 — Navigation matches file system
**Result: PASS**
File exists at `v2/orchestrators/quickstart/AI-prompt-start.mdx`. docs.json entry matches.

### 7.3 — Tab entry portal routes to all sections
**Result: N/A — tab-level check**

### 7.4 — No structural orphans
**Result: PASS**
Page is reachable from the Quickstart group in docs.json.

### 7.5 — Audience journey complete
**Result: PASS**
Page is position 4 of 4 in the Quickstart group. It extends the journey from basic transcoding setup into AI inference. The card group at the end routes into the AI workloads guides section.

### 7.6 — Cross-tab graduation paths exist
**Result: N/A — tab-level check**

### 7.7 — File in correct lane
**Result: PASS**
Published content in `v2/orchestrators/quickstart/`. Not in `_workspace/`.

### 7.8 — File naming conventions
**Result: INFO**
File name `AI-prompt-start.mdx` does not follow a documented prefix convention (`s-`, `r-`, `rs-`, `rcs-`). The name is a legacy carry-over and the convention for quickstart pages does not mandate a prefix. No fix required; noted for awareness.

### 7.9 — _workspace/ TTL compliance
**Result: N/A — file is not in _workspace/**

---

## Category 8 — Links & Rendering

### 8.1 — All internal links resolve
**Result: FAIL**

Links in the page and their verification status against docs.json:

| Line | Link target | In docs.json? | Result |
|------|-------------|---------------|--------|
| 21 | `/v2/orchestrators/setup/rs-install` | Yes — line 2858 | PASS |
| 21 | `/v2/orchestrators/quickstart/guide` | Yes — line 2850 | PASS |
| 25 | `/v2/orchestrators/guides/advanced-operations/large-scale-operations` | NOT FOUND | FAIL — path does not exist in docs.json; advanced-operations group (lines 2938–2943) does not include `large-scale-operations` |
| 64 | `/v2/orchestrators/guides/workloads-and-ai/job-types` | NOT FOUND | FAIL — Workloads and AI group (lines 2894–2904) does not include `job-types` |
| 86 | `/v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` | NOT FOUND | FAIL — not in Workloads and AI group (lines 2894–2904) |
| 130 | `/v2/orchestrators/guides/workloads-and-ai/job-types` | NOT FOUND | FAIL — same as line 64 |
| 130 | `/v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` | NOT FOUND | FAIL — same as line 86 |
| 232 | `/v2/orchestrators/setup/activate` | NOT FOUND | FAIL — setup group (lines 2857–2868) does not include `activate`; closest is `connect-and-activate` at line 2864 |
| 244 | `/v2/orchestrators/guides/workloads-and-ai/batch-ai-setup` | NOT FOUND | FAIL — not in Workloads and AI group |
| 254 | `/v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup` | Yes — line 2901 | PASS |
| 261 | `/v2/orchestrators/guides/workloads-and-ai/job-types` | NOT FOUND | FAIL — same as above |
| 262 | `/v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` | NOT FOUND | FAIL — same as above |

**Summary:** 8 broken internal links out of 12. 4 distinct broken targets:
1. `/v2/orchestrators/guides/advanced-operations/large-scale-operations` — likely an uncommitted or renamed page
2. `/v2/orchestrators/guides/workloads-and-ai/job-types` — appears multiple times; page not in nav
3. `/v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` — not in nav
4. `/v2/orchestrators/setup/activate` — closest match is `connect-and-activate`
5. `/v2/orchestrators/guides/workloads-and-ai/batch-ai-setup` — not in nav

Note: Several of these links have inline `{/* REVIEW: confirm path */}` flags, indicating the author already suspected they were unresolved.

### 8.2 — All external links live
**Result: NOT-TESTED**
External links: `https://explorer.livepeer.org` (line 232). Not tested. Explorer is a known live URL; staleness risk is low.

### 8.3 — All snippet imports resolve
**Result: N/A — no snippet imports**

### 8.4 — All images load
**Result: N/A — no images on this page**
OG image path `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` — not verified; this is a standard shared asset used across pages and likely exists.

### 8.5 — Page renders without error
**Result: NOT-TESTED**
No `npx mintlify dev` run. No obvious rendering issues in MDX syntax.

### 8.6 — No TODO/TBD/Coming Soon in published content
**Result: FAIL**
The `{/* REVIEW: */}` flags are MDX comments and do not render. However, the VRAM table rows for `upscale` (line 61) and `text-to-speech` (line 62) contain `{/* REVIEW */}` where the VRAM value should be — these cells will render as empty in the published table, which is visible to readers as blank cells.

Fix: Either provide the correct VRAM values or remove those rows from the table until values are verified.

---

## Category 9 — Process & Governance

### 9.1 — Human sign-off recorded
**Result: FAIL**
`status: review` — the page has not received human sign-off. No evidence of explicit approval.

### 9.2 — All consuming decisions in registry
**Result: NOT-TESTED**
No structural decisions are explicitly called out on this page. Page structure follows the standard quickstart format. Not blocking.

### 9.3 — Gate prerequisites met
**Result: FAIL**
Per tab-status.md, Orchestrators tab: IA Approved = Draft only, Terminology = No, Content Scan = In progress, Content Pass Open = No. All downstream gates blocked. This page has not met the prerequisites to be in publishable state. (Expected — this is a review-in-progress.)

### 9.4 — Phase ordering respected
**Result: INFO**
Section naming (Phase 8) has not been formally run yet. Veracity flags are present. No orphaned veracity markers from naming changes detected.

### 9.5 — Findings gathered before fixes
**Result: PASS**
This check report is the findings phase. No fixes have been applied.

### 9.6 — Feedback routed
**Result: N/A — this is the findings document**

---

## Banned Construction Scan

Scope: all body prose, headings, description, Note/Warning text, table cells, card descriptions, component props.

| Line | Sentence / Prop | Word/Pattern | Classification | Flag? |
|------|----------------|--------------|----------------|-------|
| 3 | "An Experimental AI Prompt for setting up your GPU as a Livepeer Orchestrator." | `"setting up"` after self-referential opener | Rhetorical | No |
| 21 | "go-livepeer is installed and running as a transcoding orchestrator on Arbitrum mainnet" | None | — | No |
| 23 | "Docker is installed with `nvidia-container-toolkit` enabled (GPU passthrough required for the AI runner containers)" | Conditional prerequisite | Procedural | No |
| 24 | "Your GPU has at least **4GB of VRAM** available to run at least one AI pipeline (see the hardware check below)" | `"at least"` — boundary statement | Conditional caveat (acceptable) | No |
| 27–29 | "If you are setting up from scratch, start with Install go-livepeer." | `if [condition]` | Conditional caveat (acceptable — clear routing instruction, not a value claim) | No |
| 35–36 | "If both share the same GPU, VRAM is split between them." | `if [condition]` | Conditional caveat (acceptable — mechanical fact) | No |
| 50 | "Use the table below to see which pipelines you can run based on your available VRAM" | `"you can run"` | Procedural | No |
| 66–68 | "If your GPU does not have enough free VRAM to run both transcoding and your chosen AI pipeline, AI runner containers will fail to start. Either select a lower-VRAM pipeline, dedicate a second GPU exclusively to AI, or stop transcoding on that GPU before enabling AI." | `if [condition]`, `"not [X]"` in Warning | Conditional caveat (acceptable — Warning context, routes to resolution) | No |
| 80–82 | "If you plan to run the `segment-anything-2` pipeline, also pull its pipeline-specific image" | `if [condition]` | Conditional caveat (acceptable) | No |
| 120 | `"warm"` field: "If `true`, model is preloaded into VRAM on startup" | `if [condition]` | Reference/procedural (acceptable in reference tables) | No |
| 127 | "During Beta, only one warm model per GPU is supported. Set `"warm": true` for the model you want pre-loaded; additional models will load on demand when requested." | `"will load on demand"` | Procedural — asserts behaviour directly | No |
| 136 | "Stop your current go-livepeer process, then restart it with the following additions." | None | — | No |
| 171 | "If you are running via Docker, mount the Docker socket so the orchestrator can manage ai-runner containers" | `if [condition]` | Conditional caveat (acceptable) | No |
| 171 | "so the orchestrator **can manage** ai-runner containers" | `can [verb]` | Procedural capability — not a value claim (it describes a required capability, not an optional feature) | BORDERLINE — flag for human review |
| 193–195 | "The `-aiModelsDir` path must be the **host machine path**, not the path inside the Docker container." | `not [X]` | Conditional negative — this is a constraint statement, not a positive value claim. Acceptable in Warning context. | BORDERLINE — flag for human review |
| 203 | "you should see a line like this for each model configured as warm" | `"you should see"` | Procedural (verification instruction) | No |
| 209 | "check that" | Procedural | No |
| 227 | "A successful response returns a JSON object..." | None | PASS | No |
| 238 | "The next step depends on which pipeline type you want to specialise in." | `"depends on"` without ranked list | BORDERLINE — per checks.mdx §2 and Frameworks.mdx §2.1, `"depends on"` without a ranked list is a banned construction. However the card group immediately below provides the two options. Borderline: the options are presented, but the sentence itself has no ranking. | FLAG |

**Flagged items:**
1. Line 171: `"can manage"` — borderline; likely acceptable as capability description, but verify with human review.
2. Line 193: `"not the path inside the Docker container"` — borderline; Warning context, but `not [X]` pattern. Acceptable as a constraint, not a value claim.
3. Line 238: `"depends on which pipeline type you want to specialise in"` — FAIL per banned construction rule. Options are presented in the card group, but the sentence doesn't resolve the condition.

Fix for line 238: Replace with a direct statement that names both options:
```
Two paths are available: batch AI inference (image, audio, video generation) or real-time AI using Cascade (persistent video stream processing).
```

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| Prerequisites | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Check your hardware | 4 | 4 | 4 | 4 | 4 | 20 | PASS (borderline) |
| Step 1 — Pull the AI runner image | 5 | 4 | 4 | 5 | 3 | 21 | PASS |
| Step 2 — Configure aiModels.json | 5 | 5 | 5 | 5 | 4 | 24 | PASS |
| Field reference | 2 | 2 | 3 | 3 | 5 | 15 | FAIL |
| Step 3 — Update your startup command | 4 | 4 | 4 | 5 | 3 | 20 | PASS (borderline) |
| Step 4 — Verify AI is active | 4 | 4 | 4 | 5 | 4 | 21 | PASS |
| Check the logs | 4 | 3 | 4 | 4 | 5 | 20 | PASS (borderline) |
| Test the AI runner directly | 4 | 4 | 4 | 4 | 4 | 20 | PASS (borderline) |
| Confirm pipelines are advertised | 4 | 3 | 4 | 4 | 3 | 18 | FAIL |
| Choose your AI path | 4 | 3 | 3 | 4 | 5 | 19 | FAIL |

**Failing headings (< 20):**

**`Field reference` (15/25):** Generic descriptor. Does not name what the field reference is for. Fix: `aiModels.json Field Reference` (24/25) or `Configuration Fields` (22/25).

**`Confirm pipelines are advertised` (18/25):** Depth = 3 because "advertised" is the mechanism, not the concept. Stability = 4. Clarity = 4 but requires knowing the protocol concept. Fix: `On-Chain Pipeline Advertisement` (21/25) or `Advertise AI Capabilities` (21/25).

**`Choose your AI path` (19/25):** Depth = 3 (the "path" concept is vague without domain anchor). Stability = 3 (breaks if the options change). Fix: `AI Pipeline Type` (21/25) or `Next Steps by Pipeline Type` — the latter borrows a weak standalone term (`Next Steps`). Use `AI Pipeline Type` instead.

---

## Spelling/Typo Check

Scan of all visible text:

- Line 54: `Caption generation; lowest barrier to entry` — no typo. Semicolon usage in table cells: consistent.
- Line 56: `LLM (\`llm\`)` — intentional repetition of pipeline name; no error.
- Line 100: `"warm model — the minimal working configuration"` — em dash present in body prose. FAIL — em dash prohibition applies. Fix: replace with comma or hyphen: `warm model, the minimal working configuration`.
- Line 127: `"pre-loaded"` — hyphenated. Consistent with usage elsewhere.
- Line 215: `"Swagger UI"` — proper noun; correct.
- Line 244–247: Card title `"Set up batch AI inference"` — no typos.
- Line 249–253: Card title `"Set up real-time AI (Cascade)"` — no typos.

**Findings:**
1. Line 100: Em dash in body prose — `warm model — the minimal working configuration`. Fix: `warm model, the minimal working configuration`.
2. (Description em dash already flagged under 1.11.)

No spelling errors found.

---

## Component Matrix

| Component | Used? | Appropriate for `guide` (current) / `instruction` (proposed)? | Notes |
|-----------|-------|----------------------------------------------------------------|-------|
| `Note` | Yes (lines 27, 126, 193) | PASS — in Preferred list for both guide and instruction | |
| `Warning` | Yes (line 66) | PASS — in Preferred list for both | |
| `CardGroup` | Yes (line 240) | PASS — in Preferred list for guide; acceptable for instruction | |
| `Card` | Yes (lines 241, 248) | PASS — in Preferred list for guide; acceptable for instruction | |
| Code blocks (``` bash, json ```) | Yes (multiple) | PASS — standard in all procedural pageTypes | |
| Tables (pipe syntax) | Yes (lines 52, 115) | PASS | |
| Steps/Step Mintlify components | No | INFO — heading-delimited steps used instead; Steps/Step is preferred for instruction pageType | |

**NOT-TESTED note:** Exact approval status not confirmed against `docs-guide/catalog/components-catalog.mdx` as that file was not read.

---

## Cross-Category Connections

```
Root Cause 1: Missing frontmatter fields (purpose, complexity, lifecycleStage, veracityStatus, OG block)
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.12 + Cat 9.1
Fix: Single frontmatter block addition. All five fields have clear correct values.
```

```
Root Cause 2: Broken internal links (8 of 12)
Affects: Cat 8.1 + Cat 4.4 (partially — dead-end risk if card target 244 is broken) + Cat 6.9 (open research tasks on linked pages)
Fix: Resolve each link target independently. Four distinct broken paths. Several have {/* REVIEW: confirm path */} flags already in place.
```

```
Root Cause 3: Unverified VRAM values in table (rows: upscale, text-to-speech)
Affects: Cat 6.1 + Cat 6.4 + Cat 8.6 (blank rendered cells in published table)
Fix: Either source VRAM values from go-livepeer AI docs or remove rows until verified.
```

```
Root Cause 4: Em dash prohibition
Affects: Cat 1.11 (description) + Spelling/Typo Check (line 100, body prose)
Fix: Two instances — description rewrite (already in Cat 1.11 fix), and line 100 comma substitution.
```

```
Root Cause 5: Opening sentence violation (Cat 2.5 + Cat 2.10)
Both reference the same line 15. Single fix: rewrite opening sentence.
```

---

## Blocking Decisions

No fundamental scope, audience, or purpose ambiguity. All blocking items are additive fixes or verification tasks.

**Highest priority before publication:**

1. **Add five missing frontmatter fields** (Cat 1.1) — single-block fix, no content decisions required.
2. **Resolve 8 broken internal links** (Cat 8.1) — requires confirming correct paths for `job-types`, `ai-workloads-guide`, `batch-ai-setup`, `large-scale-operations`, and `activate`. Four of these have `{/* REVIEW: confirm path */}` flags already.
3. **Resolve or remove empty VRAM cells** (upscale, text-to-speech rows) — VRAM values missing or provide sourced values.
4. **Rename three failing headings** — `Field reference`, `Confirm pipelines are advertised`, `Choose your AI path`.
5. **Rewrite description** to ≤160 chars, no em dash (Cat 1.11).
6. **Rewrite opening sentence** (line 15) — remove "By the end of this guide" framing.
7. **Fix line 100 em dash** in body prose.
8. **Fix line 238 banned construction** — replace "depends on" with direct statement.

---

## Verdict

**NEEDS WORK**

The page has a coherent structure, correct audience register, and useful technical content. It is not a rewrite candidate. The primary issues are:
- 5 missing required frontmatter fields (all have clear correct values)
- 8 broken internal links (4 distinct target paths need resolution)
- 3 heading fails (below 20/25 threshold)
- 2 em dash instances
- 1 open-ended research task (line 230) that must be resolved before publication
- Unverified VRAM values producing blank table cells

**Check results summary:**

| Category | Checks Run | PASS | FAIL | INFO / N/A / NOT-TESTED |
|----------|-----------|------|------|------------------------|
| 1 — Frontmatter | 13 | 5 | 6 | 2 INFO |
| 2 — Voice & Copy | 11 | 7 | 3 | 1 INFO |
| 3 — Headings | 7 | 5 | 2 | — |
| 4 — Structure | 10 | 7 | — | 3 N/A |
| 5 — Layout | 10 | 5 | 1 | 4 NOT-TESTED / N/A |
| 6 — Veracity | 9 | 1 | 5 | 3 FAIL / NOT-TESTED |
| 7 — Navigation | 9 | 5 | — | 4 N/A |
| 8 — Links | 6 | 2 | 2 | 2 NOT-TESTED |
| 9 — Governance | 6 | 1 | 2 | 3 INFO/N/A |

**Total FAIL findings:** 21 (across all categories, some shared root cause)
**Blocking for publication:** Root Causes 1, 2, 3 (frontmatter, broken links, empty table cells)
**Non-blocking but required before shipping:** Root Causes 4, 5 (em dashes, opening sentence), heading renames, line 230 open research task

---

_Check complete. No fixes applied. All findings are for human review and approval before execution._
