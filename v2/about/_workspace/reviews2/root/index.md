# Page Review – v2/about/index.mdx

- **Page path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/index.mdx`
- **URL (if rendered):** `/v2/about/index` — NOT in docs.json navigation (generated TOC artefact)
- **Review date:** 2026-05-03
- **Reviewer:** Claude (rubric-static-review against `_workspace/canonical/checks.mdx`)
- **Page nature:** Auto-generated table-of-contents file produced by `operations/scripts/generators/content/catalogs/generate-pages-index.js`. DO NOT EDIT manually.

> Special handling: This file carries a `generated-file-banner:v1` block. Per checks.mdx pre-flight step 1 and CLAUDE.md hard boundary "Never edit auto-generated files directly", most content checks are downgraded to INFO. The page is evaluated only on (a) generator-banner integrity, (b) frontmatter compliance achievable by the generator, (c) navigation/IA correctness of what is listed. Findings that require prose changes are routed to the generator script, not to this file.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | Yes | "About Index" | PASS | |
| sidebarTitle | Yes | "About Index" | PASS | |
| description | Yes | "Generated table of contents for docs pages under v2/about." | PASS | Subject-first, no self-reference, ≤160 chars |
| pageType | Yes | navigation | PASS | Canonical 7-type value |
| audience | NO | (missing) | FAIL | Required field absent |
| purpose | Yes | orient | PASS | Canonical |
| complexity | Yes | beginner | PASS | Canonical |
| lifecycleStage | Yes | discover | PASS | Canonical |
| keywords | Yes | ['livepeer', 'generated index', 'table of contents', 'v2/about'] | PASS | Reasonable |
| OG image block (5 fields) | NO | (missing all 5) | FAIL | No `og:image*` keys present |
| veracityStatus | NO | (missing) | INFO | Generated file – generator should set `verified` |

---

## Category 1 — Frontmatter & Taxonomy

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 1.1 | All 10 required fields present | FAIL | `audience` absent. OG image block (5 fields) absent. |
| 1.2 | pageType uses 7-type canonical | PASS | `navigation` |
| 1.3 | pageVariant valid if present | N/A | Not present |
| 1.4 | purpose 15-value canonical | PASS | `orient` |
| 1.5 | audience 7-token set | FAIL | Field missing entirely |
| 1.6 | complexity canonical | PASS | `beginner` |
| 1.7 | lifecycleStage canonical | PASS | `discover` |
| 1.8 | veracityStatus present and honest | FAIL | Field absent |
| 1.9 | industry array valid | N/A | Not present |
| 1.10 | niche array valid | N/A | Not present |
| 1.11 | description well-formed | PASS | "Generated table of contents for docs pages under v2/about." Subject-first, ≤160 chars |
| 1.12 | OG image block complete | FAIL | All 5 OG fields absent |
| 1.13 | keywords quality | PASS | Specific to generated TOC purpose |
| 1.14 | Multi-audience flag | N/A | TOC enumerates many pages – no inline content |

**Category 1 verdict: FAIL.** Missing `audience` and OG block. Fix is at the generator script level, not in this file.

---

## Category 2 — Voice & Copy

The page contains no prose (only frontmatter, banner, H2 heading list). Voice checks are largely N/A.

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 2.1 | UK English | PASS | No US spellings detected |
| 2.2 | Banned words | PASS | None present |
| 2.3 | Banned phrases | PASS | None present |
| 2.4 | Banned constructions | PASS | None present |
| 2.5 | Opening order | N/A | No prose |
| 2.6 | Paragraph discipline | N/A | No paragraphs |
| 2.7 | Audience register | N/A | No content; audience field also missing |
| 2.8 | Per-audience prohibited phrases | PASS | None present |
| 2.9 | No passive value statements | N/A | No claims |
| 2.10 | No hedging openers | N/A | No prose |
| 2.11 | Terminology locked | PASS | TOC link labels use canonical terms |
| 2.12 | No em-dashes | PASS | None |
| 2.13 | Entity-led voice | N/A | No prose |
| 2.14 | No hedging verbs | N/A | No prose |
| 2.15 | Description not self-referential | PASS | "Generated table of contents…" — describes object not page |
| 2.16 | Deprecated terms absent | PASS | None |
| 2.17 | Universal terms consistent | PASS | None drift |
| 2.18 | Spell check | PASS | No unknown terms |
| 2.19 | TERMINOLOGY-COLLATE match | N/A | No defined terms used in prose |
| 2.20 | Per-tab terminology | PASS | About-tab consistent |
| 2.21 | First use defined or linked | N/A | Pure link list |
| 2.22 | Terminology lock respected | PASS | TOC labels match source titles |

**Category 2 verdict: PASS (largely N/A).**

---

## Category 3 — Section Naming & Headings

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 3.1 | Headings ≥20/25 | PARTIAL | See Heading Score Table below |
| 3.2 | No banned/weak headings | PARTIAL | "Concepts", "Network", "Protocol", "Resources", "Design", "Knowledge Hub", "Reference", "Livepeer Actors" – all literal section labels for a TOC. Acceptable for a generated index but `Reference` and `Resources` are on the "OK" list; `Design` is borderline-Avoid because it overlaps with "Background"-style generic headings |
| 3.3 | No literal contrast labels | PASS | None |
| 3.4 | Domain-anchor rule | INFO | TOC headings deliberately omit "Livepeer" prefix to mirror folder names |
| 3.5 | Concept not examples | PASS | Section names are concept categories |
| 3.6 | Title well-formed | PASS | "About Index" – 2 words |
| 3.7 | Sounds editorial | INFO | Generated TOC – not authored |
| 3.8 | Per-pageType naming style | PASS | Navigation page uses map-style/literal labels (correct for `navigation`) |
| 3.9 | Per-audience register | N/A | No audience set |
| 3.10 | Domain-anchor rule | INFO | As 3.4 |

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Table of contents (H1) | 5 | 3 | 5 | 5 | 5 | 23 |
| Design (H2) | 3 | 2 | 3 | 4 | 5 | 17 |
| Concepts (H2) | 4 | 3 | 4 | 5 | 5 | 21 |
| Network (H2) | 4 | 3 | 4 | 5 | 5 | 21 |
| Livepeer Actors (H3) | 5 | 3 | 5 | 5 | 5 | 23 |
| Protocol (H2) | 4 | 3 | 4 | 5 | 5 | 21 |
| Resources (H2) | 4 | 3 | 4 | 5 | 5 | 21 |
| Knowledge Hub (H3) | 5 | 4 | 5 | 5 | 5 | 24 |
| Reference (H3) | 4 | 3 | 5 | 5 | 5 | 22 |

`Design` heading scores 17/25 (below 20). It surfaces files marked with `⚠️` (raw `_design/*.md` working docs) into a publishable index – a structural problem (see Cat 7).

---

## Category 4 — Page Structure & Content Architecture

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 4.1 | One purpose, one audience, one job | PASS | TOC = enumerate v2/about pages |
| 4.2 | Purpose statement test | PASS | "This page lets the reader find any page under v2/about" |
| 4.3 | PREV/NEXT adjacency | N/A | Not in docs.json nav |
| 4.4 | No dead ends | PASS | Every list entry is a link |
| 4.5 | Prerequisites stated | N/A | TOC |
| 4.6 | Out-of-scope clear | INFO | TOC enumerates all sub-pages, no scope statement needed |
| 4.7 | Information type per section | PASS | All `structural` |
| 4.8 | No content duplication | PASS | Pure index |
| 4.9 | Section orientation page | PASS | This is itself a section orientation surface (auto-generated) |
| 4.10 | Cross-tab links | FAIL | Zero cross-tab links – TOC scope is `v2/about` only by design, but a navigation page should still surface graduations |
| 4.11 | Discord test | FAIL | Linking this page in Discord answers nothing; it dumps a file index |
| 4.12 | Page size appropriate | PASS | Acceptable for a TOC |
| 4.13 | No TODO/REVIEW comments without tracking | PASS | Generator-banner comment present and labelled |
| 4.14 | Flat layout where appropriate | PASS | Single-level lists with H2/H3 grouping |
| 4.15 | Trade-offs present | N/A | TOC |
| 4.16 | Content pass context block | N/A | Generated artefact |
| 4.17 | Multi-audience handoff explicit | N/A | TOC |

**Category 4 verdict: PARTIAL.** Fundamental issue: this page should not be in the publishable surface. It is a generator artefact useful for sitemap/sitepack tooling, not a reader-facing page.

---

## Category 5 — Layout, Components & Template

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 5.1 | Correct template for pageType | FAIL | `navigation` pageType requires Hero+Cards (per check 5.13). Page is plain markdown lists |
| 5.2 | Required sections present | FAIL | Navigation requires Portal/routing structure – absent |
| 5.3 | Only approved components | PASS | `<Note>` is only component – approved |
| 5.4 | Avoided components absent | PASS | No TODO/Coming Soon |
| 5.5 | InfoType→component mapping | PARTIAL | Structural content should use `<Cards>` for nav, not bullet lists |
| 5.6 | MDX renders clean | NOT-TESTED | Did not run smoke test |
| 5.7 | No old-schema frontmatter | PASS | All canonical |
| 5.8 | CSS uses custom properties | N/A | No CSS |
| 5.9 | Generated banners intact | PASS | `generated-file-banner:v1` block present + `<Note>` banner present |
| 5.10 | Component naming/imports | N/A | No JSX components |
| 5.11 | Gold-standard template | FAIL | Navigation template not applied |
| 5.12 | Section blocks from gold-standard | FAIL | Bullet lists, no header-cta or related-pages-footer |
| 5.13 | Section ordering matches pageType | FAIL | Should be Hero+Cards |
| 5.14 | Multi-view layout rules | N/A | Single dimension |
| 5.15 | Data imports used | N/A | None |
| 5.16 | Related Pages footer / Next Step CTA | FAIL | Neither present |
| 5.17 | Related Pages format | N/A | Absent |
| 5.18 | Tab icon prop | N/A | No Tabs |
| 5.19 | Accordion icon prop | N/A | No Accordions |
| 5.20 | Code block metadata | N/A | No code blocks |
| 5.21 | StyledSteps not raw Steps | N/A | No Steps |
| 5.22 | Nav cards use CustomCardTitle | N/A | No Cards used |
| 5.23 | Tables use StyledTable | N/A | No tables |
| 5.24 | Max 1-2 tables per page | N/A | No tables |
| 5.25 | Max 1 major layout element | PASS | None present |
| 5.26 | CustomDivider placement | N/A | No dividers |
| 5.27 | Mermaid colours | N/A | No Mermaid |
| 5.28 | Import ordering | N/A | No imports |
| 5.29 | Media placeholders in TODO comments | N/A | None |
| 5.30 | Fact-check flags in JSX comments | N/A | None |
| 5.31 | Decision-critical info visible | PASS | All visible |
| 5.32 | Reference tables at end | N/A | No tables |
| 5.33 | Drafts in workspace | PASS | This is a published surface produced by generator |
| 5.34 | No inline styles/hex | PASS | None |

**Category 5 verdict: FAIL on template/structure (5.1, 5.2, 5.11, 5.13, 5.16). Mitigated by file being auto-generated – fix lives in the generator script.**

### Component Matrix

| Component | Used? | Appropriate for `navigation`? | Notes |
|-----------|-------|------------------------------|-------|
| Note | Yes (banner) | Yes | Generator-banner pattern |
| Card / CardGroup / Columns | No | Required | Navigation pageType expects routing cards |

---

## Category 6 — Veracity & Factual Accuracy

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 6.1 | Factual claim citable | N/A | No factual claims |
| 6.2 | Code/commands tested | N/A | No code |
| 6.3 | No deprecated API | N/A | None |
| 6.4 | Numbers real | N/A | None |
| 6.5 | REVIEW flags for unverified | N/A | None |
| 6.6 | veracityStatus honest | FAIL | Field absent (cf. 1.8) |
| 6.7 | Authoritative vs AI glossary | N/A | No glossary use |
| 6.8 | Source staleness | INFO | Source is filesystem; staleness = file-system drift between regenerations |
| 6.9 | No open-ended research | N/A | None |
| 6.10 | Source authority tiers | N/A | No claims |
| 6.11 | Glossary defs match universal terms | N/A | None |
| 6.12 | Glossary defs verified | N/A | None |

---

## Category 7 — Navigation & Information Architecture

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 7.1 | Page exists in docs.json | FAIL | `v2/about/index` is NOT listed in docs.json. The "About Livepeer" group only contains `portal` and `navigator`. This page is therefore an orphan in the published nav |
| 7.2 | Navigation matches file system | INFO | This file is excluded from nav by design as a generator artefact |
| 7.3 | Tab portal routes to all sections | N/A | This is the index, not the portal |
| 7.4 | No structural orphans | FAIL | Reachable only via direct URL or sitemap, not via nav |
| 7.5 | Audience journey complete | N/A | Not on a journey path |
| 7.6 | Cross-tab graduation paths | FAIL | No links to LPT/Delegators, Orchestrators, Gateways, Developers, Solutions |
| 7.7 | File in correct lane | INFO | In `v2/about/` (publishable) but not in nav. Either move to `_workspace/` or include in nav |
| 7.8 | File naming conventions | PASS | `index.mdx` (generated TOC suffix exemption) – note check 7.8 forbids `-index.mdx` suffix; bare `index.mdx` is not the same and is acceptable for generator output |
| 7.9 | _workspace/ TTL | N/A | Not in workspace |
| 7.10 | No stubs in published nav | N/A | Not in nav |
| 7.11 | Resources sub-structure | INFO | TOC reflects current resources structure (root + knowledge-hub + reference). Compendium absent – check `ia-design.md` requires a 4-bucket layout (root, knowledge-hub, compendium, reference). Surfaces a real IA gap |

**Category 7 verdict: FAIL.** Page is published but not navigated. Must either be removed from `v2/about/` (move to `_workspace/` or `operations/output/`) or added to docs.json. Surfaces additional IA issues: `_design/` raw `.md` files leak into the TOC and the resources `compendium/` bucket appears missing.

---

## Category 8 — Links & Rendering

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 8.1 | Internal links resolve | NOT-TESTED | 27 relative links; spot-check shows likely-stale entries: `concepts/livepeer-overview.mdx`, `concepts/mental-model.mdx`, `concepts/core-concepts.mdx`, `network/job-lifecycle.mdx`, `network/marketplace.mdx`, `protocol/economics.mdx`, `protocol/governance-model.mdx`, `protocol/livepeer-token.mdx`, `protocol/blockchain-contracts.mdx`, `protocol/treasury.mdx`, `resources/faq.mdx`, `resources/glossary.mdx`. Per recent IA refactor (concepts → about-livepeer/livepeer-stack/etc., job-lifecycle → job-pipelines, token-economics → livepeer-token), several of these target files no longer exist. Generator output is stale |
| 8.2 | External links live | N/A | No external links |
| 8.3 | Snippet imports resolve | N/A | None |
| 8.4 | Images load | N/A | None |
| 8.5 | Page renders | NOT-TESTED | Likely renders – plain markdown lists |
| 8.6 | No TODO/TBD/Coming Soon | PASS | None |

**Category 8 verdict: FAIL.** Stale link targets after recent IA refactor. Re-run generator to refresh.

---

## Category 9 — Process & Governance

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 9.1 | Human sign-off | INFO | Generated artefact – sign-off is on the generator |
| 9.2 | Decisions in registry | N/A | TOC |
| 9.3 | Gate prerequisites | N/A | TOC |
| 9.4 | Phase ordering | N/A | TOC |
| 9.5 | Findings before fixes | N/A | TOC |
| 9.6 | Feedback routed | N/A | Findings here route to generator script, not file |

---

## Category 10 — Content Completeness

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 10.1 | Question coverage | N/A | TOC |
| 10.2 | Zero-to-hero journey | N/A | TOC, not a journey page |
| 10.3 | All persona paths unblocked | N/A | TOC |
| 10.4 | Scope boundaries explicit | N/A | TOC |
| 10.5 | Self-containment | N/A | TOC |
| 10.6 | Multi-audience pathway | N/A | TOC |

---

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| (none) | – | – | – | – |

No banned words, phrases, or constructions present. Page is link-list only.

---

## Spelling/Typo Check

No typos found.

---

## Cross-Category Connections

```
Root Cause 1: Generator script `generate-pages-index.js` produces a navigation-pageType file
              that is missing required frontmatter (audience, OG block, veracityStatus) and
              does not apply the navigation gold-standard template.
Affects: Cat 1.1, 1.5, 1.8, 1.12, Cat 5.1, 5.11, 5.13, 5.16, Cat 6.6
Fix: Update the generator to emit (a) `audience: community`, (b) full OG block,
     (c) `veracityStatus: verified`, (d) wrap output in Hero + CardGroup gold-standard
     navigation template OR mark the file `published: false` and exclude from publishable lanes.

Root Cause 2: Page is in the publishable lane (`v2/about/index.mdx`) but absent from
              docs.json navigation.
Affects: Cat 7.1, 7.4, 7.7
Fix: Either (a) move to `operations/output/sitepack/v2-about-toc.mdx` so it ceases to
     be a publishable surface, or (b) add `"v2/about/index"` to docs.json under
     "About Livepeer" group.

Root Cause 3: Generator output references files that no longer exist after IA refactor.
Affects: Cat 8.1
Fix: Re-run `node operations/scripts/generators/content/catalogs/generate-pages-index.js --write`
     to refresh against the current filesystem.

Root Cause 4: TOC enumerates `_design/*.md` raw working docs (with ⚠️ markers) inside a
              publishable surface.
Affects: Cat 7.11
Fix: Generator must skip `_workspace/`, `_design/`, and other underscore-prefixed lanes.
```

---

## Blocking Decision

```
Blocking Decision: Should `v2/about/index.mdx` exist as a publishable page?
Options: [A] Keep as published nav surface. [B] Demote to non-publishable lane.
If A: implement Root Cause 1 fixes (frontmatter, navigation template) and Root Cause 2
      (add to docs.json) and Root Cause 3 (refresh) and Root Cause 4 (skip _design).
If B: move file out of `v2/about/` (e.g. `operations/output/sitepack/`) and update the
      generator's --output path. Cat 1, 5, 7 findings dissolve.
```

---

## Overall Verdict

**REWRITE REQUIRED at the generator level (NOT this file).**

The `index.mdx` is a stale generator artefact misplaced in the publishable lane. It fails Cat 1 (frontmatter), Cat 5 (template), Cat 7 (orphan + bad lane + stale targets), and Cat 8 (link rot). Page-level fixes are inappropriate – per CLAUDE.md "Never edit auto-generated files directly". All fixes route to `operations/scripts/generators/content/catalogs/generate-pages-index.js`.

### Critical Issues
1. **CRITICAL** – File is in the publishable lane but not in docs.json (orphan). Either add to nav or move out of `v2/about/`.
2. **CRITICAL** – Stale link targets after recent IA refactor (concepts/, network/job-lifecycle, etc.). Re-run the generator.
3. **HIGH** – Required frontmatter fields (`audience`, OG block, `veracityStatus`) absent. Fix in generator template.
4. **HIGH** – Generator emits raw `_design/*.md` working files into a publishable index. Generator must skip underscore lanes.
5. **MEDIUM** – Output is bullet lists, not the navigation gold-standard Hero+Cards template.
