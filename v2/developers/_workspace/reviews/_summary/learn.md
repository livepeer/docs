# Section summary: learn/

**Pages reviewed**: 3 (ai-and-agents, applications, video-and-livestream)
**Review date**: 2026-05-11
**Reviewer**: agent A2 (re-dispatch)

## Verdict distribution
- PASS: 0
- MINOR: 0
- MODERATE: 0
- MAJOR: 2 (ai-and-agents, video-and-livestream)
- NEEDS WORK: 1 (applications)
- EMPTY-STUB: 0

## Verdict table

| Page | Bytes | Verdict | Critical | High | Medium | Info |
|---|---|---|---|---|---|---|
| ai-and-agents.mdx | 12,551 | MAJOR | 0 | 7 | 9 | 3 |
| applications.mdx | 5,318 | NEEDS WORK | 2 | 12 | 7 | 2 |
| video-and-livestream.mdx | 7,690 | MAJOR | 1 | 9 | 8 | 3 |
| **Section total** | **25,559** | — | **3** | **28** | **24** | **8** |

## Severity totals across pages

| Severity | Count |
|---|---|
| CRITICAL | 3 |
| HIGH | 28 |
| MEDIUM | 24 |
| INFO | 8 |

CRITICAL breakdown:
- **applications.mdx — scope mismatch (4.1)**: title/description promise "applications on Livepeer / four access surfaces"; body delivers only a self-hosted-gateway decision matrix. SCAFFOLD-NOTES line 23 explicitly flagged this rescope; rescope was never performed.
- **applications.mdx — Studio reference in body prose (project rule 3)**: line 78 names "the Livepeer Studio AI API". Studio refs are not permitted outside `learn/where-to-find/studio-paths.mdx`.
- **video-and-livestream.mdx — deprecated term in prose (2.16)**: line 138 uses "broadcaster" as a synonym for Gateway. CLAUDE.md hard boundary lists "broadcaster" as banned.

## IA Gap (CRITICAL — section level)

### What the IA spec says

Per agent brief and `v2/developers/_workspace/SCAFFOLD-NOTES.md` line 60 + `audit-2026-05-14/current-state-developers.tsv` lines 117–123, the locked IA for `learn/` was:

- `learn/ai-and-agents.mdx`
- `learn/video-and-livestream.mdx`
- `learn/applications.mdx`
- `learn/where-to-find/contributing.mdx`
- `learn/where-to-find/observability.mdx`
- `learn/where-to-find/operating-a-gateway.mdx`
- `learn/where-to-find/opportunities.mdx`
- `learn/where-to-find/protocol-extending.mdx`
- `learn/where-to-find/solutions-paths.mdx`
- `learn/where-to-find/studio-paths.mdx`

That is **10 pages across 2 levels** (3 evaluation pages at `learn/` root + 7 routing-out pages at `learn/where-to-find/`).

### What disk has

`ls v2/developers/learn/` returns only the 3 evaluation pages. The `learn/where-to-find/` directory **does not exist on disk**. All 7 routing-out pages are missing.

The active IA in `v2/developers/_workspace/notes.mdx` (lines 19–23) shows ONLY the 3 evaluation pages — the published IA has been silently truncated from the audit IA. Either notes.mdx is the source of truth and the 7 where-to-find pages were intentionally cut, or the audit/SCAFFOLD-NOTES is the source of truth and the 7 pages are a genuine drift. The conflict between notes.mdx and SCAFFOLD-NOTES is itself a P0 governance finding.

### What docs.json has

`grep "where-to-find" docs.json` returns **zero matches**. docs.json mirrors the disk: it registers only the 3 evaluation pages at lines 2505–2507 of `docs.json`. No phantom entries — the navigation is consistent with disk.

### IA-drift impact

| Symptom | Impact |
|---|---|
| 7 routing-out pages missing | The 3 evaluation pages have **no canonical "where to go next" surfaces to route OUT to**. This forces every Learn page to either re-state Solutions/Gateways/About content (fails check 4.6 + 4.8) or strand the reader. Both fail modes are visible in the 3 reviewed pages |
| `studio-paths.mdx` missing | Project rule 3 says Studio refs are only acceptable in `learn/where-to-find/studio-paths.mdx`. With the file absent, **every Studio reference anywhere in `v2/developers/` is a CRITICAL finding with no legitimate landing page to route to**. applications.mdx already trips this at line 78 |
| `solutions-paths.mdx` missing | No canonical "how to find Livepeer managed-API offerings" page. Solutions tab cross-tab graduations have no Developer-side hand-off point |
| `operating-a-gateway.mdx` missing | No canonical "developer wants to run a gateway" landing — instead, applications.mdx is mis-titled to fill the gap, and video-and-livestream.mdx duplicates Gateways tab self-host content |
| `contributing.mdx`, `protocol-extending.mdx`, `opportunities.mdx`, `observability.mdx` missing | Persona-specific graduation paths (OSS contributor, plugin author, treasury-funded builder, ops engineer) absent |
| Conflict: notes.mdx vs SCAFFOLD-NOTES | Documentation governance ambiguity — which file is the source of truth for IA? Resolve before fixing |

**Severity**: CRITICAL — section-level governance gap. The 3 evaluation pages cannot meet their stated job (Learn pages "evaluation + orientation" → route OUT to where-to-find) without the missing siblings.

### Recommended IA resolution

Either:
1. **Build the 7 missing pages** (matches audit IA + SCAFFOLD-NOTES) — restore `learn/where-to-find/` directory with 7 routing-out pages. Update notes.mdx to match. Update docs.json nav to expose the directory. Re-review.
2. **Confirm scope cut** (matches active notes.mdx) — update SCAFFOLD-NOTES to mark the 7 pages as PURGED. Move the 3 evaluation pages' "where to go next" routing into Related Pages footers (which currently don't exist) and inline cross-tab graduation links. Update audit TSV. Re-review.

Recommendation: option 1. The 3 evaluation pages are structurally incomplete without the routing-out tier, and option 2 forces every concept page to re-state cross-tab destinations inside Related Pages cards (high duplication risk across the tab).

## Top issues by frequency in this section

1. **Related Pages footer missing or wrong format (5.16 / 5.17)** — 3/3 pages. ai-and-agents and video-and-livestream have no footer block at all; applications uses `<CardGroup cols={3}>` with raw `title=` props instead of canonical `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle horizontal>`.
2. **Zero cross-tab graduation links (4.10 / 7.6)** — 3/3 pages. All outbound links stay inside `v2/developers/`. None route to Gateways, Solutions, About, or Orchestrators. This is mechanically caused by the missing `where-to-find/` siblings — every Learn page that needs to route OUT has nowhere canonical to send the reader.
3. **Old-schema frontmatter `status:` instead of `veracityStatus:` (1.8 / 5.7)** — 3/3 pages. ai-and-agents and video have `status: current`; applications has `status: draft`. None has the canonical `veracityStatus: verified|unverified|stale` field.
4. **Code blocks missing `title=` attribute (5.20)** — 2/3 pages with code (ai-and-agents 1 block, video-and-livestream 4 blocks). All have `icon=` but none have `title=`. Rubric requires both.
5. **No TESTED / NOT-TESTED label on any code block (6.2)** — 2/3 pages with code. 5 code blocks total across the section; 0 labelled.
6. **No Prerequisites section (4.5)** — 3/3 pages. Concept pages can defer prereqs to a Header CTA but currently no page provides one.
7. **Hardcoded data instead of imports (5.15)** — 3/3 pages. VRAM minimums (ai-and-agents), port numbers + Docker tag + CLI flags (applications, video-and-livestream) all hardcoded. Canonical sources exist but are not imported.
8. **`<Tab>` elements missing `icon` prop (5.18)** — 1/3 pages but where Tabs exist (video) both Tabs miss the icon.
9. **Deprecated term "broadcaster" in prose (2.16)** — 1/3 pages (video-and-livestream line 138) plus 1 partial in applications (line 75 explicit parenthetical synonym).
10. **Description over 160 chars (1.11)** — 2/3 pages (ai-and-agents 183 chars, video-and-livestream 169 chars).
11. **Page-internal duplication of Gateways / Solutions / About content (4.6 / 4.8)** — 3/3 pages. ai-and-agents re-states pipeline lists from Build; applications re-states Gateways tab self-host content; video-and-livestream re-states Build video overview + transport guides.
12. **`<Note>` used for primary content (2.D7)** — 2/3 pages (ai-and-agents line 181, applications line 77).

## Cross-page duplication and link gaps in this section

- **Self-hosted gateway content** is re-stated in 2/3 pages — applications.mdx and video-and-livestream.mdx both carry significant subsections that duplicate `v2/gateways/setup/guide.mdx`. SCAFFOLD-NOTES line 23 already prescribed moving applications.mdx's self-host matrix to `guides/gateways-as-developer/self-hosted-decision.mdx`. Same move applies to video-and-livestream's self-host section.
- **Pipeline / model / API names without canonical links** — across all 3 pages: `livepeer/go-livepeer`, `livepeer/comfystream`, `livepeer/pytrickle`, `livepeer/ai-runner`, `livepeer/ComfyUI-Stream-Pack`, `@livepeer/react`, `explorer.livepeer.org`, TicketBroker contract, LIP-92, Eliza framework. Each named in prose without a hyperlink at first use.
- **Cross-tab graduation deserts** — no page in the section links to Gateways, Solutions, About, or Orchestrators tabs. This is mechanically caused by the missing `learn/where-to-find/` directory.
- **Case-sensitive link bug (applications.mdx)** — 4 paths use `/v2/Gateways/...` (capital G); canonical is lowercase. Production case-sensitive deploy will 404.
- **Self-reference (applications.mdx line 28)** — uses "This page gives..." phrasing. Should be subject-led.
- **`status: draft` in published nav (applications.mdx)** — page is in `v2/` (published lane) but frontmatter declares draft. Either lane or status is wrong.

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)
- **Gap:** The Learn section's stated job is "evaluation + orientation" — the developer should leave each page with a confident decision about which Livepeer surface fits their use case AND a clear next destination. Today, **no page in the section delivers both**. Each page presents content (some accurate, some scope-broken) but none provides (a) a 30-second decision tree, (b) a production-readiness signal, (c) a cost expectation, (d) a canonical "next page" Card grid. A first-time Livepeer evaluator leaves the Learn section knowing more about pipelines than they did 5 minutes ago, but with no firm decision and no clear next click.
- **Fix step:** Establish a 4-element pattern that every Learn page implements: (1) Header CTA with maturity + cost signal, (2) one-question decision block (`<Tip>` or `<AccordionGroup>`), (3) main body, (4) Related Pages footer with `<Columns cols={2}>` of exactly 4–6 `<Card>`s, with at least 2 cross-tab cards. Codify the pattern in `snippets/templates/pages/learn-page-template.mdx` and apply to all 3 pages plus the 7 missing where-to-find pages once built.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` Multi-Path Layout Pattern + production-readiness pattern; `v2/about/_workspace/reviews2/network/architecture.md`.

### Layer 2 — Composition (section level)
- **Gap:** Composition discipline is uneven across the 3 pages. ai-and-agents uses 3 StyledTables (exceeds 1–2 ceiling) and has zero Tabs / Cards / Accordions. applications uses 3 raw markdown tables (fails 5.23) and one CardGroup with the wrong format (fails 5.17). video-and-livestream uses 1 StyledTable + 1 raw markdown table (raw fails 5.23) + 1 Tabs block with both Tabs missing icon props (fails 5.18). 0/3 pages have a canonical Related Pages footer. The pattern is "tables-as-primary-IA + bold-led prose paragraphs" — visually it's wall-of-text + table, never Cards / Tabs / Accordions.
- **Fix step:** Set a section quota: every Learn page must include at least one `<Tabs>` block (decision variants) OR `<CardGroup>` (sibling concepts) OR `<AccordionGroup>` (collapsible deep-detail). All raw markdown tables → `<StyledTable>`. All `<Tab>` → `icon` prop. All fenced code → `icon` + `title`. Related Pages mandatory at EOF in canonical format.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx`; component matrix `concept` row.

### Layer 3 — Cross-page integration (section level)
- **Gap:** The Learn section is **structurally a routing tier** — its job is to route OUT to evaluation destinations (Solutions managed, Gateways self-host, About protocol, Orchestrators node-op). The missing `learn/where-to-find/` directory is the routing infrastructure. Without those 7 pages, every Learn evaluation page is forced to either re-state Solutions/Gateways content (creating duplication) or strand the reader (creating dead-ends). Both fail modes are visible across all 3 reviewed pages. Inter-section prereq chain also broken: no Learn page links to `v2/developers/concepts/landscape` or `v2/developers/concepts/infra-stack` as a prereq, despite those being the structural prereqs.
- **Fix step:** Build the 7 `learn/where-to-find/` pages OR explicitly purge them from the IA and replace with inline cross-tab Card grids in every Learn page's Related Pages footer. Add a Prerequisites block at the top of every Learn page linking `concepts/landscape` + `concepts/infra-stack`.
- **Source/exemplar:** SCAFFOLD-NOTES.md line 60; audit-2026-05-14 TSV lines 117–123.

### Layer 4 — Veracity (section level)
- **Gap:** Across all 3 pages, factual claims appear without source links. Pattern: upstream repos named in prose (`go-livepeer`, `ai-runner`, `comfystream`, `pytrickle`) but never hyperlinked. Hardware claims (VRAM minimums, GPU recommendations) sourced from `aiModels.json` but the file is not cited. Default port numbers (1935, 8935, 8937) hardcoded across pages without a canonical-defaults import. Five code blocks across the section, zero labelled TESTED. Two pages have `lastVerified` dates (one of them in the future — video-and-livestream `2026-05-14` against today `2026-05-11`). Old-schema `status:` field on all 3 pages instead of canonical `veracityStatus:`.
- **Fix step:** (1) Run a section-wide "first-mention hyperlink" pass — every upstream repo gets a GitHub link at first mention on every page. (2) Migrate hardcoded ports / VRAM / model lists / pricing values to imports from `snippets/data/`. (3) Label every code block TESTED with date or NOT-TESTED with reason. (4) Replace `status:` → `veracityStatus:` everywhere. (5) Fix the future-dated `lastVerified` on video-and-livestream.
- **Source/exemplar:** `livepeer/ai-runner/runner/aiModels.json`; `livepeer/go-livepeer/cmd/livepeer/starter`.

### Layer 5 — Product-forward depth (section level)
- **Gap:** The Learn section reads like a wiki, not a product. Across 3 pages there are zero maturity badges, zero cost expectations, zero "when not to use" sections, zero competitor-comparison framings, zero production-deployment checkpoints. A developer arrives at Learn to evaluate Livepeer for a real project — and leaves without learning whether the product is production-ready, whether it's affordable, or whether the competition (Cloudflare Stream, Mux, OpenAI, Replicate) is a better fit. This is the single largest gap in the section and the one that makes Wonderland's "LOW standard" verdict legible.
- **Fix step:** Add three section-level patterns: (a) **maturity-and-cost Header CTA** — every Learn page opens with a `<Card>` or `<Tip>` containing a `<Badge>` for maturity (production / beta) and a one-line cost expectation; (b) **fit-decision block** — every Learn page includes a "When this fits" + "When this does not fit" pair, the negative case being a single `<Accordion>` with 2 bullets pointing at alternative tools / providers; (c) **production-checklist** — every Learn page ends its body (before Related Pages) with a 3-bullet `<Tip title="Production readiness">` checklist (SLA, failover behaviour, recommended starter quickstart). These three patterns convert each Learn page from "wiki entry" to "evaluation tool".
- **Source/exemplar:** `.claude/references/layout/exemplars.md` decision-page pattern; `v2/about/_workspace/reviews2/network/architecture.md` gold-standard exemplar.

## Prioritised section remediation

| # | Step | Pages affected | Severity | Effort |
|---|---|---|---|---|
| 1 | **IA-drift resolution decision**: build 7 `learn/where-to-find/` pages OR purge them from SCAFFOLD-NOTES/audit and route inline. Decide source-of-truth conflict between notes.mdx and SCAFFOLD-NOTES first | section-wide | CRITICAL | XL (option 1) / M (option 2) |
| 2 | Rescope applications.mdx: write four-section body (Hosted API / Direct Gateway / BYOC / Frontend SDK). Move existing gateway-decision matrix to `v2/developers/guides/gateways-as-developer/self-hosted-decision.mdx` per SCAFFOLD-NOTES line 23 | applications | CRITICAL | L |
| 3 | Remove Studio reference at applications.mdx line 78. Either route via `learn/where-to-find/studio-paths.mdx` (build target — see #1) or rewrite to drop Studio entirely | applications | CRITICAL | S |
| 4 | Replace "broadcaster" in prose at video-and-livestream.mdx line 138 with "Gateway" (keep `-broadcaster` CLI flag in code) | video-and-livestream | CRITICAL | S |
| 5 | Add canonical Related Pages footer (`<Columns cols={2}>` + `<Card>` + `<CustomCardTitle horizontal>`) to all 3 pages. Minimum 4 cards, minimum 2 cross-tab cards per page | 3 pages | HIGH | M |
| 6 | Migrate all 3 pages from `status:` (old schema) to `veracityStatus:` canonical | 3 pages | HIGH | S |
| 7 | Fix case-sensitive link bug `/v2/Gateways` → `/v2/gateways` (4 instances) on applications.mdx | applications | HIGH | S |
| 8 | Add `title=` attribute to all 5 code blocks across the section (1 in ai-and-agents, 4 in video-and-livestream) | ai-and-agents, video-and-livestream | HIGH | S |
| 9 | Add `icon` prop to both `<Tab>` elements in video-and-livestream (lines 96, 114): `icon="js"`, `icon="python"` | video-and-livestream | HIGH | S |
| 10 | Label all 5 code blocks TESTED with date or NOT-TESTED with reason | ai-and-agents, video-and-livestream | HIGH | S |
| 11 | Fix future-dated `lastVerified: 2026-05-14` on video-and-livestream to current date or earlier real verification date | video-and-livestream | HIGH | S |
| 12 | Add OG image block to applications.mdx (missing all 5 fields) | applications | HIGH | S |
| 13 | Convert raw markdown tables to `<StyledTable>`: 3 in applications, 1 in video-and-livestream | applications, video-and-livestream | HIGH | M |
| 14 | Trim descriptions to ≤160 chars: ai-and-agents (183 → 160), video-and-livestream (169 → 160), applications (rescope replaces) | 3 pages | MEDIUM | S |
| 15 | Convert prose-paragraph sibling lists to `<Tabs>` or `<CardGroup>`: ai-and-agents real-time tools (lines 152–159); video workload types (lines 51–57); applications four access surfaces (rescope output) | 3 pages | MEDIUM | M |
| 16 | Replace `<Note>` for primary content with `<Warning>` or body prose: ai-and-agents line 181; applications line 77 | ai-and-agents, applications | MEDIUM | S |
| 17 | Add Prerequisites block at top of each page linking `concepts/landscape` + `concepts/infra-stack` | 3 pages | MEDIUM | M |
| 18 | Migrate hardcoded ports / VRAM / Docker tags / CLI flags to imports from `snippets/data/` (canonical sources) | 3 pages | MEDIUM | L |
| 19 | Hyperlink upstream repos at first mention: `go-livepeer`, `ai-runner`, `comfystream`, `pytrickle`, `ComfyUI-Stream-Pack`, `@livepeer/react` | 3 pages | MEDIUM | S |
| 20 | Convert page-internal headings to consistent sentence-case: applications uses Title Case ("Running Your Own Gateway", "Self-Hosting Requirements", "The Two Gateway Types") | applications | MEDIUM | S |
| 21 | Rename weak headings: ai-and-agents "Choose your path" (18/25); video "Access paths" (19/25), "Pricing" (19/25); applications "Next steps" (banned-list) | 3 pages | MEDIUM | S |
| 22 | Add section-level product-forward Header CTA pattern (maturity + cost), fit-decision block, production-checklist `<Tip>` to all 3 Learn pages | 3 pages | MEDIUM | L |
| 23 | Trim generic keywords: ai-and-agents `pipeline`; applications `livepeer`, `developer`, `graduation`, `decision` | ai-and-agents, applications | INFO | S |
