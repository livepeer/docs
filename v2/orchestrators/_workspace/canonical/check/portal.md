# Quality Check: portal.mdx (v2)

**Page:** v2/orchestrators/portal.mdx
**Date:** 2026-03-24
**Run:** 2 (re-run with improved prompt)
**Verdict:** NEEDS WORK

## Summary

The orchestrator portal page is a navigation-type landing with a hero section and six-card grid linking to key orchestrator areas. Frontmatter is mostly complete but has field-format issues (industry/niche are strings instead of arrays, OG image type mismatch, description uses title case). The page contains TODO/REVIEW JSX comments in the source and uses `Columns` which is not in the approved component set for navigation pages. No banned words or phrases detected in visible prose. All internal links and imports resolve.

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | Yes | `Orchestrator Portal` | PASS | |
| sidebarTitle | Yes | `Portal` | PASS | |
| description | Yes | `Welcome To The Orchestrator Portal: Explore, Earn, Operate` | FAIL | Title Case violates subject-first rule; self-referential ("Welcome To The...Portal") |
| pageType | Yes | `navigation` | PASS | Valid 7-type value |
| audience | Yes | `orchestrator` | PASS | Valid 7-token value |
| purpose | Yes | `orient` | PASS | Valid 15-value set |
| complexity | Yes | `beginner` | PASS | |
| lifecycleStage | Yes | `discover` | PASS | |
| keywords | Yes | 12-item array | PASS | |
| OG image block | Yes | 5 fields present | FAIL | `og:image` points to `.svg`, `og:image:type` says `image/png` -- type mismatch |
| industry | Yes | `livepeer` (string) | FAIL | Must be array, max 2 entries from canonical set. `livepeer` is valid but should be `[livepeer]` |
| niche | Yes | `infrastructure` (string) | FAIL | Must be array. `infrastructure` is valid but should be `[infrastructure]` |
| veracityStatus | Yes | `verified` | FAIL | Page contains `{/* REVIEW: */}`-style TODO comments; `verified` requires zero REVIEW flags |

## Category 1: Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | PASS | All 10 present |
| 1.2 | pageType uses 7-type schema | PASS | `navigation` is canonical |
| 1.3 | pageVariant valid if present | N/A | No pageVariant field |
| 1.4 | purpose uses 15-value set | PASS | `orient` is canonical |
| 1.5 | audience uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | complexity single canonical value | PASS | `beginner` |
| 1.7 | lifecycleStage single canonical value | PASS | `discover` |
| 1.8 | veracityStatus present and honest | FAIL | Set to `verified` but page contains TODO/REVIEW comments in JSX (lines 36-57). Fix: change to `unverified` or remove all REVIEW/TODO comments |
| 1.9 | industry array valid | FAIL | Value is plain string `livepeer`, not an array. Fix: change to `industry: [livepeer]` |
| 1.10 | niche array valid | FAIL | Value is plain string `infrastructure`, not an array. Fix: change to `niche: [infrastructure]` |
| 1.11 | description well-formed | FAIL | Uses Title Case ("Welcome To The Orchestrator Portal"). Self-referential (names itself). Fix: replace with subject-first description, e.g. `description: 'GPU compute nodes that power AI and video on the Livepeer network'` |
| 1.12 | OG image block complete | FAIL | `og:image` is `.svg`, `og:image:type` is `image/png`. Fix: either change type to `image/svg+xml` or provide a PNG version of the image and update the path |

## Category 2: Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings detected |
| 2.2 | Zero banned words | PASS | None found in visible prose |
| 2.3 | Zero banned phrases | PASS | None found |
| 2.4 | Zero banned constructions | PASS | No "This page [verb]", no "not [X]" value statements. See banned construction scan below for can/may audit |
| 2.5 | Opening order correct | PASS | Hero opens with value proposition "GPUs for AI Video", then mechanism |
| 2.6 | Paragraph discipline | PASS | Prose blocks are short and purposeful |
| 2.7 | Audience register correct | PASS | Technical, operator-focused language throughout |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", no "the network rewards you for" |
| 2.9 | No passive value statements | PASS | No unquantified value claims in visible prose |
| 2.10 | No hedging openers | PASS | Page opens with direct value statement |
| 2.11 | Terminology locked and consistent | PASS | Uses "Orchestrators", "GPU", "pool" consistently. No deprecated terms |

### Banned Construction Scan

Sentences containing can/may/could/might/should:

1. **"Anyone can add a GPU to the Livepeer network and earn from idle GPU downtime - either by adding it to a pool or setting up their own orchestrator container."** (line 103)
   - Classification: Procedural instruction / factual capability statement
   - Verdict: PASS -- this is a factual statement about what is possible, not a value claim

No other instances of can/may/could/might/should in visible prose.

## Category 3: Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores >=20/25 | N/A | No rendered H2/H3 headings on this page. All headings are inside JSX comments (commented out). The visible "headings" are card titles and hero text, scored below for completeness |
| 3.2 | No generic descriptors as headings | PASS | No standalone "Overview", "Getting Started" etc. |
| 3.3 | No literal contrast labels | PASS | No "X vs Y" |
| 3.4 | Domain-anchor rule applied | N/A | No rendered headings |
| 3.5 | Heading names concept not examples | N/A | No rendered headings |
| 3.6 | Title well-formed | PASS | "Orchestrator Portal" -- 2 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | PASS | "Orchestrator Portal" is appropriate for a navigation entry point |

### Heading Score Table

No rendered markdown headings exist. Card titles are scored as navigational elements:

| Card Title | Precision | Depth | Stability | Clarity | Conciseness | Total |
|------------|-----------|-------|-----------|---------|-------------|-------|
| Find Your Path | 3 | 2 | 5 | 4 | 5 | 19 |
| Quickstart: Verify Your Hardware | 5 | 4 | 4 | 5 | 4 | 22 |
| Full Setup Guide | 4 | 3 | 5 | 5 | 5 | 22 |
| Is It Worth It? | 3 | 3 | 5 | 4 | 5 | 20 |
| AI and Workloads | 4 | 3 | 5 | 4 | 4 | 20 |
| Earning and Staking | 4 | 3 | 5 | 4 | 4 | 20 |

Note: "Find Your Path" scores lower on precision/depth as it does not name the concept (navigator/decision tree). Per R9, second-person voice is allowed on navigation pages so the phrasing is not a voice violation.

## Category 4: Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Single purpose: orient orchestrators to the tab's content areas |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator find the right starting point for their journey." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | Portal is first in "Start Here" group; next page is `navigator`. Reader moves from orientation to path selection |
| 4.4 | No dead ends | PASS | Six cards link to deeper content; all resolve |
| 4.5 | Prerequisites stated or linked | N/A | Navigation page; no prerequisites needed |
| 4.6 | Out-of-scope is clear | PASS | Cards scope the tab's content clearly |
| 4.7 | Information type per section correct | PASS | `informationType: structural` is correct for a navigation page |
| 4.8 | No content duplication | PASS | No repeated content from adjacent pages |
| 4.9 | Section orientation page present | PASS | This IS the section orientation page for the orchestrators tab |
| 4.10 | Cross-tab links at journey intersections | FAIL | Zero cross-tab links. The portal links only within the orchestrators tab. Fix: add at least one cross-tab card or link, e.g. a link to the delegator staking page, or the gateway portal for dual-role operators, or the About tab for Livepeer overview. Concrete options: (a) Add a card linking to `/v2/about/livepeer-overview` for newcomers; (b) Add a card or inline link to `/v2/gateways/portal` for orchestrators also running gateways; (c) Add a link to `/v2/lpt/token-portal` for staking context |

## Category 5: Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | Navigation page uses Card-based routing as expected |
| 5.2 | Required sections present | PASS | Portal/routing section present with card grid |
| 5.3 | Only approved components used | FAIL | Uses `Columns` component. The navigation pageType preferred components are `Card, CardGroup`. `Columns` is not listed as preferred. Fix: replace `<Columns cols={2}>` with `<CardGroup cols={2}>` if the same layout is achieved, or document `Columns` as an approved component for portal pages |
| 5.4 | Avoided components absent | FAIL | TODO/TBD comments present in JSX (lines 36-57). While these are JSX comments and not rendered, they indicate the page is not finished. Fix: resolve all TODO items and remove the comments, or move them to `_workspace/` |
| 5.5 | Information type to component mapping | PASS | Structural content uses Card routing -- correct mapping |
| 5.6 | MDX renders clean | PASS | No unclosed tags, imports all resolve (verified). Note: actual render not tested in browser |
| 5.7 | No old-schema frontmatter | PASS | All enum values are canonical 7-type |
| 5.8 | CSS uses custom properties only | PASS | Only inline style found is `style={{width: "70%", minWidth: "500px"}}` on a div (line 106) -- layout sizing, not colour. Hero components use `var(--accent)` in commented-out section |
| 5.9 | Generated file banners intact | N/A | No generated-file-banner found; page is not generated |
| 5.10 | Component naming/import conventions | PASS | PascalCase names, correct import paths, all from semantic subdirectories |

## Category 6: Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | PASS | Claims are general and accurate: "Orchestrators are the GPU compute nodes that power the Livepeer network" -- consistent with official positioning. NOT-TESTED: not verified against a primary source document in this session, but consistent with all repo content |
| 6.2 | Code/commands tested | FAIL | `docker pull livepeer/go-livepeer:master` -- NOT-TESTED. The `master` tag may not exist on Docker Hub (many projects use `latest`). Fix: verify the correct Docker Hub tag at `https://hub.docker.com/r/livepeer/go-livepeer/tags` and update if needed |
| 6.3 | No deprecated API usage | N/A | No API calls on this page |
| 6.4 | Numbers are real | N/A | No specific numbers on this page |
| 6.5 | REVIEW flags for unverified claims | FAIL | The docker command tag (`master`) is unverified but has no REVIEW flag. Fix: add `{/* REVIEW: verify docker tag master vs latest on Docker Hub */}` before the code block, or verify and remove the concern |
| 6.6 | veracityStatus honest | FAIL | Set to `verified` but TODO/REVIEW comments exist (lines 36-57) and the docker command is unverified. Fix: change to `unverified` until all items resolved |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Docker image tag `master` is a fast-changing reference (new builds on every merge). NOT-TESTED. Fix: add a REVIEW flag noting staleness risk for the docker tag |
| 6.9 | No open-ended research tasks | FAIL | The TODO block (lines 36-57) contains open-ended items like "Ensure authoring skill is used to validate page style/copy" and "Accuracy is verified across repo as much as possible". Fix: convert each TODO to a concrete task with a named source and next step, or remove completed items |

## Category 7: Navigation & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/portal` at line 2833 of docs.json |
| 7.2 | Navigation matches file system | PASS | File exists at expected path |
| 7.3 | Tab entry portal routes to all sections | FAIL | Portal cards link to 6 destinations covering Start Here, Quickstart, Setup, Guides (3 subgroups). Missing from cards: Concepts group (`/v2/orchestrators/concepts/role`), Config and Optimisation group, Reference group, Troubleshooting group, Operations group (if any). Fix: either add cards for missing groups or accept that the portal intentionally curates the top 6 entry points. If intentional, document this decision |
| 7.4 | No structural orphans | PASS | Page is reachable from docs.json navigation |
| 7.5 | Audience journey complete | PASS | Entry (portal) -> path selection (navigator) -> quickstart -> setup -> guides flow is intact |
| 7.6 | Cross-tab graduation paths | FAIL | No cross-tab links on this page. See 4.10 for fix options |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/`, which is the publishable lane |
| 7.8 | File naming conventions | PASS | `portal.mdx` follows convention for tab entry pages |
| 7.9 | _workspace/ TTL compliance | N/A | File is not in _workspace/ |

## Category 8: Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | See link verification below |
| 8.2 | All external links live | NOT-TESTED | `https://github.com/livepeer/go-livepeer` -- not fetched in this session. Known public repo, likely live |
| 8.3 | All snippet imports resolve | PASS | All 6 imports verified to exist on disk |
| 8.4 | All images load | PASS | OG image SVG exists at path. LogoHeroContainer uses internal component |
| 8.5 | Page renders without error | PASS | No syntax errors visible. All imports resolve. NOT-TESTED in browser |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | Lines 36-57 contain TODO comments in JSX. While not rendered to the user, they indicate incomplete work in a publishable page. Fix: resolve or move to `_workspace/canonical/` as a task list |

### Link Verification

| Link | Target | Status |
|------|--------|--------|
| `/v2/orchestrators/navigator` | `v2/orchestrators/navigator.mdx` | EXISTS |
| `/v2/orchestrators/quickstart/guide` | `v2/orchestrators/quickstart/guide.mdx` | EXISTS |
| `/v2/orchestrators/setup/guide` | `v2/orchestrators/setup/guide.mdx` | EXISTS |
| `/v2/orchestrators/guides/operator-considerations/operator-rationale` | `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | EXISTS |
| `/v2/orchestrators/guides/ai-and-job-workloads/workload-options` | `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` | EXISTS |
| `/v2/orchestrators/guides/staking-and-rewards/earning-model` | `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx` | EXISTS |
| `https://github.com/livepeer/go-livepeer` | External | NOT-TESTED (known public repo) |
| `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` | OG image | EXISTS |
| `/snippets/components/scaffolding/portals/Portals.jsx` | Import | EXISTS |
| `/snippets/components/scaffolding/frame-mode/FrameMode.jsx` | Import | EXISTS |
| `/snippets/components/elements/spacing/Divider.jsx` | Import | EXISTS |
| `/snippets/components/elements/links/Links.jsx` | Import | EXISTS |
| `/snippets/components/scaffolding/heroes/HeroGif.jsx` | Import | EXISTS |
| `/snippets/components/displays/code/Code.jsx` | Import | EXISTS |

## Category 9: Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off. `lastVerified: 2026-03-16` exists but does not confirm human review. Fix: obtain explicit human approval and record it |
| 9.2 | All consuming decisions in registry | NOT-TESTED | Would require reading the full decision registry. The page does not reference specific decisions |
| 9.3 | Gate prerequisites met | NOT-TESTED | Would require checking tab-status.md for orchestrators tab gate state |
| 9.4 | Phase ordering respected | N/A | No heading changes or veracity markers that would indicate ordering issues |
| 9.5 | Findings gathered before fixes | PASS | This is the structured review (run 2) |
| 9.6 | Feedback routed | N/A | First structured review findings; routing happens after this report |

## Spelling/Typo Check

All visible text scanned:
- "GPUs for AI Video" -- correct
- "Run - Provide - Earn" -- correct
- "Orchestrators are the GPU compute nodes that power the Livepeer network." -- correct
- "Anyone can add a GPU to the Livepeer network and earn from idle GPU downtime" -- correct
- "docker pull livepeer/go-livepeer:master" -- correct syntax
- All card titles and descriptions -- no misspellings found
- "Costs, revenue streams, break-even analysis" -- correct
- "Video transcoding, AI diffusion, LLM, live AI, audio" -- correct
- "Service fees, inflation rewards, delegation, reward calling, and governance participation." -- correct

**Result: No spelling or typographical errors found.**

## Component Matrix (R10)

| Component | Used? | Appropriate for `navigation` pageType? | Notes |
|-----------|-------|----------------------------------------|-------|
| Card | Yes | Yes (preferred) | Correct usage |
| Columns | Yes | **Questionable** | Not in preferred set for navigation. `CardGroup` is preferred. Flag for review |
| Tip | Yes | Acceptable | Used inside hero callout |
| CustomCodeBlock | Yes | **Questionable** | Code blocks are not typical for navigation pages. Used in hero overview to show the docker pull command. Borderline acceptable as a value-add but not standard |
| HeroSectionContainer + children | Yes | Acceptable | Portal-specific scaffolding components |
| PortalContentContainer + children | Yes | Acceptable | Portal-specific scaffolding components |

## Cross-Category Connections

### Root Cause 1: Page not fully finished
- **1.8** (veracityStatus dishonest) + **5.4** (TODO comments present) + **6.6** (veracityStatus dishonest) + **6.9** (open-ended research tasks) + **8.6** (TODO in published content) + **9.1** (no human sign-off)
- These all stem from the same root cause: the page was published in a draft-like state with TODO comments still present. The veracityStatus was set to `verified` prematurely.
- **Fix:** Resolve all TODO items, remove the comment block, then update veracityStatus to `verified` only after human sign-off.

### Root Cause 2: Description and OG block quality
- **1.11** (description not subject-first) + **1.12** (OG image type mismatch)
- Both are frontmatter quality issues that were likely set once and not revisited.
- **Fix:** Update description to subject-first UK English, fix OG image type to match actual file format.

### Root Cause 3: Missing cross-tab connectivity
- **4.10** (no cross-tab links) + **7.6** (no cross-tab graduation paths)
- Portal focuses exclusively within the orchestrators tab. For a tab entry page, at least one cross-tab link is expected.
- **Fix:** Add one or more cross-tab links (see specific options under 4.10).

### Root Cause 4: Docker command unverified
- **6.2** (code untested) + **6.5** (missing REVIEW flag) + **6.8** (source staleness)
- The `docker pull livepeer/go-livepeer:master` command has not been verified and has staleness risk.
- **Fix:** Verify the correct tag on Docker Hub. If `master` is correct, add a REVIEW flag noting staleness risk. If not, update to the correct tag (likely `latest`).

## Verdict Rationale

**NEEDS WORK.** The page is structurally sound as a navigation portal -- all internal links resolve, the card grid covers the main content areas, voice is clean, and no banned constructions appear. However, it has multiple concrete issues that prevent a PASS:

1. Frontmatter issues: description format (title case, self-referential), OG image type mismatch, industry/niche as strings not arrays, dishonest veracityStatus
2. TODO/REVIEW comments in a published page with `veracityStatus: verified`
3. Unverified docker command with no REVIEW flag
4. Zero cross-tab links on a tab entry page
5. No recorded human sign-off

None of these require a page rewrite -- they are specific, fixable items. Once addressed, the page is ready for re-check.
