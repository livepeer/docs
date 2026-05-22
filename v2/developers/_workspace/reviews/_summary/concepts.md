# Section summary: concepts/

**Pages reviewed**: 3 (landscape.mdx, infra-stack.mdx, repo-map.mdx)
**Review date**: 2026-05-11
**Reviewer**: agent A1
**Reviewed files on disk**: confirmed via `ls v2/developers/concepts/` — 3 files: landscape.mdx, infra-stack.mdx, repo-map.mdx

## IA gaps

**concepts/overview.mdx missing — IA slot empty.**

Detail and provenance:
- The brief states `overview.mdx` is listed in the locked IA at `v2/developers/_workspace/notes.mdx` line 13. Re-reading notes.mdx: line 13 is `<Tree.Folder name="concepts">` (the folder header). The four child files listed (lines 14–18) are `landscape.mdx`, `infra-stack.mdx`, `repo-map.mdx` — i.e., the active IA in notes.mdx contains 3 concept files, not 4. `overview.mdx` is NOT enumerated in the notes.mdx Tree.
- However, `overview.mdx` IS listed in the batch-roster (`v2/developers/_workspace/reviews/_packet/batch-roster.md` line 36) and IS referenced in the prior audit (`v2/developers/_workspace/audit-2026-05-14/current-state-developers.tsv` line 77 — 3,038 bytes recorded historically).
- The active `docs.json` (lines 2497–2499) routes 3 concept entries: landscape, infra-stack, repo-map. No `overview` route registered.
- On disk: only 3 files in `v2/developers/concepts/`.
- **Resolution required**: either (a) confirm overview.mdx is deliberately retired and remove the slot from batch-roster.md to bring the artefacts into alignment, OR (b) restore the overview.mdx page if a portal-style entry is needed for the concepts subgroup. Without an `overview.mdx`, the concepts subgroup has no portal — the reader entering /v2/developers/concepts/ has no orientation page and must pick blind from the sidebar.
- **Recommendation**: confirm decision in `decisions/registry.md` and either restore or formally retire. The current state has the IA-locked roster (batch-roster.md, prior audit) saying 4 files; live notes.mdx and docs.json saying 3 — that is silent drift.

## Verdict distribution
- PASS: 0
- MINOR: 0
- MODERATE: 0
- MAJOR: 2 (landscape.mdx, repo-map.mdx)
- NEEDS WORK: 1 (infra-stack.mdx)
- EMPTY-STUB: 0
- MISSING (IA gap): 1 (overview.mdx)

## Severity totals across pages

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 22 (landscape 5 + infra-stack 11 + repo-map 6) |
| MEDIUM | 16 (landscape 4 + infra-stack 7 + repo-map 5) |
| INFO | 15 (landscape 5 + infra-stack 4 + repo-map 6) |

Note: no CRITICAL findings. All three pages are structurally sound; the work is composition, integration, and product-forward depth.

## Top issues by frequency in this section

1. **Missing or non-conformant Related Pages footer (5.16 / 5.17 / 5.22 / 7.6)** — pages: landscape, infra-stack, repo-map (3/3). Landscape uses `<CardGroup cols={2}>` + bare `<Card>` instead of `<Columns cols={2}>` + `<CustomCardTitle horizontal />`. Infra-stack has no Related Pages section at all. Repo-map has only a single inline LinkArrow.
2. **Insufficient cross-tab graduation links (4.10 / 7.6)** — pages: landscape, infra-stack, repo-map (3/3). Cross-tab references are present in prose for some pages but rarely as clickable Cards. The concepts subgroup should be the primary cross-tab graduation surface for the Developers tab — currently it isn't.
3. **No data imports — hardcoded content (5.15 / CLAUDE.md hard rule)** — pages: landscape, infra-stack, repo-map (3/3). Persona/model lists, repo lists, Mermaid colours, all hardcoded. Should be `snippets/data/developers/personas.json` + `snippets/data/developers/repositories.json` + `MermaidColours.jsx` imports.
4. **Audience token vs content register mismatch (1.14 / 2.7 / 4.1)** — pages: landscape, infra-stack (2/3). Both declare `audience: developer` but content is multi-audience or builder-register. Repo-map is the only page where token + content match.
5. **Unsourced numerical / load-bearing claims (6.1 / 6.4 / 6.8)** — pages: landscape, infra-stack, repo-map (3/3). "11 native pipelines", "12 plugins live", "over 170 public repositories", "40 AI models", "PR #3641", "sub-three-second glass-to-glass" — none cited. `veracityStatus: verified` on landscape + repo-map is overclaimed.
6. **No version pins on SDKs/binaries (6.8)** — pages: landscape, infra-stack, repo-map (3/3). `go-livepeer`, `ai-runner`, `@livepeer/react`, etc. named without version.
7. **No first-use definitions for specialised terms (2.21)** — pages: landscape, infra-stack (2/3). LL-HLS, WebRTC, webhooks, TicketBroker, AISR, T2I/I2I/I2V/I2T/A2T/TTS/SAM2/LV2V abbreviations, Catalyst, FrameProcessor — first-use undefined or only inline-glossed too late.
8. **Opening Markdown HR `---` instead of `<CustomDivider />` (5.26)** — pages: landscape, repo-map (2/3). Inconsistent with the rest of the repo; infra-stack has no opening divider at all (3/3 with divider-placement issue).
9. **Reader-state / reader-addressed openings (2.13)** — pages: landscape, infra-stack (2/3). "You're treating Livepeer as…" (landscape ×5), "Looking for…" (infra-stack ×5). Both violate entity-led-voice rule.
10. **Mermaid uses hardcoded hex, no governed colours (5.8 / 5.27 / 5.34)** — pages: infra-stack (1/3). 5 Mermaid blocks × 8-10 classDef lines × 3 hex values per line = 100+ hardcoded hex literals.
11. **TODO-equivalent / unresolved migration comments in body (4.13 / 5.30 / 6.5 / 6.9 / 8.6)** — pages: infra-stack (1/3). Lines 27–37 are a published JSX comment explicitly listing four unresolved violations.
12. **Tables not StyledTable (5.5 / 5.23 / 5.24)** — pages: infra-stack, repo-map (2/3). Colour-convention table (infra-stack) + 9 repo tables (repo-map) all raw markdown.

## Cross-page duplication and link gaps in this section

**Duplication**:
- **Persona/Mental Model taxonomy is duplicated across landscape and infra-stack.** landscape uses "AI Inference / Video Platform / Compute Primitives / Live Video / Protocol Mental Model" H2s. infra-stack uses "Persona 1 AI / Persona 2 Video Platform / Persona 3 Compute Primitives / Persona 4 Live-Video-First / Persona 5 Protocol" H2s. Same taxonomy, two names, two pages. Should share `snippets/data/developers/personas.json`.
- **Repo names duplicated across infra-stack and repo-map.** Every named repo in infra-stack's Mermaid labels also appears in repo-map's tables. repo-map is the canonical surface; infra-stack should link to it, not duplicate. (Mermaid label text can't be a hyperlink without `click` syntax — see fix below.)
- **Layer Disambiguation in landscape (lines 86–96) overlaps about-tab `livepeer-stack.mdx`.** Acceptable for an orientation page; flag for cross-tab harmonisation.

**Link gaps (section-wide)**:
- **No cross-tab graduation Cards in any of the three concepts pages.** Concepts is the natural place to route readers to Gateways (self-host) / Solutions (managed) / About (protocol) / Orchestrators (operate) / Community (contribute). All three pages reference these tabs in prose but never link them as scannable Cards.
- **No upstream repo links from landscape or infra-stack.** Repo names appear as prose / Mermaid labels but not as hyperlinks. Repo-map is the canonical link target — the other two pages should `<LinkArrow href="/v2/developers/concepts/repo-map#core-runtime-repositories" />` etc.
- **No glossary anchor links from any page.** TicketBroker, BYOC, FrameProcessor, LL-HLS, etc. should link to `/v2/developers/resources/glossary#term`.
- **No Mermaid `click` syntax usage in infra-stack.** Every `Guide:` label is a phantom; clickable Mermaid would route directly.

**Stranded endings**:
- landscape ends with a 2-Card same-subgroup pair (no cross-tab). MIXED.
- infra-stack ends with mid-prose paragraph. FAIL — most stranded of the three.
- repo-map ends with single LinkArrow. MIXED.

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)
The concepts subgroup's job is to deliver one outcome: **"I know which Livepeer mental model and infrastructure fits my build, and I know what to read next."** Today the section delivers half: the reader can identify their mental model (landscape), see the infra each persona touches (infra-stack), and find every repo (repo-map). What's missing: a single decision-table that combines mental-model + infrastructure + repository + first-guide in one view. The reader has to assemble that from three pages.

**Section-level fix**: Restore `concepts/overview.mdx` as a portal page that opens with one `<StyledTable>`: columns `Mental Model | Activation | First Repo | First Guide | Graduation tab`. Five rows. That table is the section's promise delivered in one viewport. The three child pages then provide depth on each axis. Without an overview.mdx, the section is three flat siblings with no front door.

### Layer 2 — Composition (section level)
Two composition patterns are missing across the section:

(a) **No `<Tabs>` usage anywhere in the section.** Both landscape (5 mental models) and infra-stack (5 personas) are textbook `<Tabs>` cases — multi-variant content of identical structure. Today both render as five flat repeated H2s. Convert to `<Tabs>` and the reader can compare without scrolling.

(b) **No section-level `<AccordionGroup>` for FAQ / decision-tree content.** "Which mental model fits me?" "Coming from OpenAI / Mux / Modal" "When to use BYOC vs AI Inference Mental Model" — these are decision-tree questions, currently rendered as flat prose H2s. Component-matrix.md line 60: concept pageType should use `<Accordion>` for "mental models, edge cases, FAQ-style".

Source/exemplar: `snippets/templates/pages/page-composition-framework.mdx`; `v2/about/concepts/livepeer-stack.mdx` uses `<Tabs>` for actor-type selection.

### Layer 3 — Cross-page integration (section level)
The concepts subgroup is the **Developers tab's primary cross-tab graduation surface**. It should be the single best place to route to Solutions / Gateways / About / Orchestrators / Community. Today none of the three pages does this with clickable Cards. The graduation prose is present but the navigation is missing.

Section-level fix: every concepts page should end with a canonical Related Pages CardGroup containing at least one same-subgroup Card AND two cross-tab Cards. Suggested cross-tab targets per page:
- landscape: → `/v2/gateways/concepts/role` (for self-host graduation) + `/v2/solutions/portal` (for managed graduation)
- infra-stack: → `/v2/orchestrators/concepts/role` (for Persona 5) + `/v2/gateways/concepts/role` (for Persona 2/4)
- repo-map: → `/v2/about/concepts/about-livepeer` (for protocol context) + `/v2/orchestrators/concepts/role` (for operator context)

Additionally: every Mermaid `Guide:` label in infra-stack should either be Mermaid-`click`-clickable or replaced by an out-of-diagram clickable Card list below the Mermaid.

### Layer 4 — Veracity (section level)
A consistent pattern across the section: numerical claims ("11 native pipelines", "12 plugins live", "over 170 public repositories", "40 AI models", "sub-three-second", "PR #3641") declared without source links, yet two of three pages declare `veracityStatus: verified`. The pages are honest in spirit (the claims are correct) but the audit trail is absent. A re-verification engineer cannot tell whether the claim was sourced or assumed.

Section-level fix: implement a `Sources` footnote section per concepts page, populated with `[1] livepeer/ai-runner aiModels.json (verified 2026-05-12)`, `[2] livepeer/go-livepeer PR #3641 …` etc. Inline footnote anchors next to numbers and named PRs. Run a quarterly re-verification CI job that flags `lastVerified > 90 days`.

Specifically untrustworthy claims that should be cited section-wide:
- 11 native pipelines (landscape line 48, infra-stack line 85 implicit) → `aiModels.json`
- 12 plugins live (infra-stack line 223) → NaaP plugin list
- over 170 public repositories (repo-map line 42) → GitHub search snapshot
- 40 AI models (repo-map line 135) → storyboard model registry
- sub-three-second glass-to-glass (landscape line 76) → tutorial latency measurement
- PR #3641 (landscape line 66, infra-stack line 224) → `livepeer/go-livepeer` PR
- AISR / AIServiceRegistry status (infra-stack line 386) → contract README

### Layer 5 — Product-forward depth (section level)
Three concepts pages, zero maturity signals. None of: production-readiness badge, cost expectation, "when not to use" callout, contributor-activity signal, deprecation warning. A developer evaluating Livepeer from scratch reads the concepts subgroup and learns *what Livepeer is*, but does not learn *whether Livepeer is right for their use case at this moment in time*. That is the meta-question the section should answer.

Section-level fix: add three product signals to every concepts page header:
1. **Maturity badge** per mental model / per persona / per repo group. `Production` / `Beta` / `Reference`. Drives developer confidence in two seconds.
2. **Cost expectation** in plain English per model. AI Inference: "per-pipeline pricing, ~$X per 1k tokens at the community gateway" (with citation). Compute Primitives: "per-second GPU billing, settled probabilistically on Arbitrum (small ETH balance required)". 
3. **"When not to pick this" callout** per model. AI Inference "Not for: sub-100ms first-token latency or model exclusivity. Use Compute Primitives instead." Live Video "Not for: VOD-only workflows. Use Video Platform Mental Model instead."

Compare to `.claude/references/layout/exemplars.md` and `v2/gateways/concepts/business-model.mdx` (the gold-standard "should I use this at all?" page in docs-v2).

## Prioritised section remediation

| # | Step | Pages affected | Effort | Reasoning |
|---|---|---|---|---|
| 1 | Resolve the overview.mdx IA gap. Confirm in `decisions/registry.md` whether overview.mdx is deliberately retired or needs restoring. If restoring, build as a portal with the section-summary decision table. If retiring, update `batch-roster.md` and `audit-2026-05-14/current-state-developers.tsv` to reflect 3 active concepts files. | overview.mdx (missing), batch-roster, audit TSV | M | IA hygiene blocker |
| 2 | Add canonical Related Pages footers to all three pages. Use `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` + 4 `<Card>` each holding `<CustomCardTitle icon ... title ... horizontal />`. Per-page link targets enumerated in Layer 3 above. | landscape, infra-stack, repo-map (3/3) | M | Highest reach fix; closes 5.16 / 5.17 / 7.6 across the section |
| 3 | Create `snippets/data/developers/personas.json` from the duplicated 5-persona / 5-mental-model lists. Update landscape.mdx and infra-stack.mdx to import and render from it. Single source of truth eliminates section-wide duplication. | landscape, infra-stack | L | Closes 5.15 + 4.8 duplication. Highest ROI structural fix in the section. |
| 4 | Create `snippets/data/developers/repositories.json` from the 22+ repos in repo-map.mdx. Render the 9 tables from filtered data via `<StyledTable>`. | repo-map | XL | Closes 5.5 + 5.15 + 5.23 + 5.24. Second-highest ROI structural fix. |
| 5 | Add a Sources footnote section to every concepts page citing numerical claims and named PRs/repos. Demote `veracityStatus: verified` → `unverified` on pages with sourceless claims until citations land. | landscape, infra-stack, repo-map | M | Closes 6.1 / 6.4 / 6.8 across the section |
| 6 | Reconcile audience tokens with content register: change `audience: developer` → `audience: builder` on landscape, OR rewrite landscape body to lead with system-fact (entity-led) language. For infra-stack, either keep `audience: developer` and route Persona 5 off-page, or declare multi-audience handling. | landscape, infra-stack | M | Closes 1.14 / 2.7 / 4.1 |
| 7 | Replace opening Markdown HR `---` with `<CustomDivider />` for consistency. Add the opening divider to infra-stack (currently missing). | landscape, infra-stack, repo-map | S | Closes 5.26 across the section |
| 8 | Address infra-stack-specific blockers: (a) resolve the migration JSX comment block (lines 27–37); (b) replace Mermaid hardcoded hex with `MermaidColours.jsx` import; (c) wrap each Mermaid in `<ScrollableDiagram>`; (d) add Mermaid `click` syntax or below-diagram clickable Cards for every `Guide:` label. | infra-stack | XL | NEEDS WORK verdict driven primarily by these four issues |
| 9 | Add maturity badges + cost-expectation + "when not to use" callouts per mental-model / per persona / per repo group. | landscape (5 models), infra-stack (5 personas), repo-map (repo groups) | L | Closes Layer 5 across the section; biggest product-forward upgrade |
| 10 | Add `<Tabs>` refactor for the five-mental-model / five-persona sections (one Tab per variant). | landscape, infra-stack | L | Closes 5.14 + Layer 2 |
| 11 | Add prereq pointer at top of infra-stack ("Read [Landscape](/v2/developers/concepts/landscape) first if you have not identified your persona."). | infra-stack | S | Closes 4.5 + 10.5 |
| 12 | Add first-use definitions or glossary links for: LL-HLS, WebRTC, webhooks, TicketBroker, AISR, T2I/I2I/I2V/I2T/A2T/TTS/SAM2/LV2V, Catalyst, FrameProcessor. | landscape, infra-stack | M | Closes 2.21 |
| 13 | Add version pins (or a versions sidebar) for go-livepeer, ai-runner, @livepeer/react, SDKs across all three pages. | landscape, infra-stack, repo-map | M | Closes 2.D3 + 6.8 |
| 14 | Reword the Studio Gateway row in repo-map.mdx (line 85) to route via Solutions tab. | repo-map | S | Closes project-rule-3 ambiguity |
| 15 | Reframe reader-state openings ("You're treating…", "Looking for…") to entity-led ("The AI gateway accepts…", "The AI persona reaches Livepeer through…"). | landscape, infra-stack | M | Closes 2.13 |
| 16 | Compress landscape description to ≤160 chars. | landscape | S | Closes 1.11 |
| 17 | Add `veracityStatus: unverified` to infra-stack frontmatter (missing). | infra-stack | S | Closes 1.8 |

## Verdict table (section-wide)

| Page | Verdict | CRITICAL | HIGH | MEDIUM | INFO |
|---|---|---|---|---|---|
| landscape.mdx | MAJOR | 0 | 5 | 4 | 5 |
| infra-stack.mdx | NEEDS WORK | 0 | 11 | 7 | 4 |
| repo-map.mdx | MAJOR | 0 | 6 | 5 | 6 |
| **concepts/overview.mdx** | **MISSING (IA slot empty)** | **—** | **—** | **—** | **—** |
