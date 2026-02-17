# AI Task List vs PLAN — Gap Analysis and Comprehensive Plan

This document compares the **AI Task List** (user-provided checklist) with the **docs/PLAN** task set, identifies items **not in PLAN** or **incomplete**, and provides a comprehensive plan for addressing them.

---

## 1. Mapping: AI Task List → PLAN

| # | AI Task List Item | PLAN Task | Status |
|---|-------------------|-----------|--------|
| 1 | Consolidate components, docs/examples, global styles | 01-components-consolidate | ✅ In PLAN (complete) |
| 2 | Full audit of components – unused? | 02-components-audit-unused | ✅ In PLAN (complete) |
| 3 | FULL RUNNING COMPONENT LIBRARY WIKI | 03-component-library-wiki | ✅ In PLAN (remaining) |
| 4 | SETUP GUIDES FOR AI AGENTS FOR NETWORK NODES | 04-ai-setup-guides-network-nodes | ✅ In PLAN (remaining) |
| 5 | Homogenise styling across full repo | 05-homogenise-styling | ✅ In PLAN (complete) |
| 6 | Separate data and components in MDX pages | 06-separate-data-and-components-mdx | ✅ In PLAN (remaining) |
| 7 | Break long pages into logical sections | 07-break-long-pages-into-sections | ✅ In PLAN (remaining) |
| 8 | Automation/scripts: SEO, i18n, broken links, spelling UK, component library, etc. | 08-automation-and-scripts | ✅ In PLAN (remaining) |
| 9 | Suggest AI guides to put in repo | 09-ai-guides-in-repo | ✅ In PLAN (remaining) |
| 10 | Documentation guide in resources (features & usage) | 10-documentation-guide-resources | ✅ In PLAN (complete) |
| 11 | Mintlify AI: additional RAG content; create issues in repo | 11-mintlify-ai-investigation | ✅ In PLAN (remaining) |
| 12 | Full guide for docs contributions + stretch (non-markdown pipeline, issue templates, auto-tagging) | 12-contribution-guide-full-and-stretch | ✅ In PLAN (remaining) |
| 13 | Full audit – repeated content and suggestions | 13-audit-repeated-content | ✅ In PLAN (complete) |
| 14 | Full audit – v1 (relevant) in v2, table report | 14-audit-v1-to-v2-coverage | ✅ In PLAN (complete) |
| 15 | Full audit – v2 pages missing/incomplete | 15-audit-v2-missing-incomplete | ✅ In PLAN (complete) |
| 16 | RFP goals met? If not, which and suggestions | 16-rfp-goals-assessment | ✅ In PLAN (complete) |
| 17 | REVIEW ALL PAGES: formatting, long text, bad styling, layout, media/mermaid/images | 17-per-page-resources-and-media | ⚠️ **Partial** – 17 is “per-page resources/media”; visual/layout review is different |
| 18 | Script to check page imports (MDX controls import; Mintlify components → MDX must import) | — | ❌ **NOT IN PLAN** |
| 19 | All pages – English UK spelling (or optimal approach) | 08 (spelling mentioned) | ⚠️ **Partial** – 08 proposes tooling; no dedicated “apply UK everywhere” task |
| 20 | Homogeneous copy – suggest AI models / approach | — | ❌ **NOT IN PLAN** |
| 21 | Ensure glossary stays up to date | — | ❌ **NOT IN PLAN** |
| 22 | Full audit of all files – what should be removed? | — | ❌ **NOT IN PLAN** |
| 23 | PLATFORMS: pages owned by platform; fill Studio from v1 | 14/15 (content) | ⚠️ **Partial** – no dedicated “platform ownership” + “Studio fill” task |
| 24 | FILL IN REFERENCES SECTION (from other sections) | — | ❌ **NOT IN PLAN** |
| 25 | Add link to show internal tab on a reference page (or somewhere) | — | ❌ **NOT IN PLAN** |
| 26 | Pre-commit hook: verify ALL PAGES run in browser; NEVER TO BE SKIPPED | — | ❌ **NOT IN PLAN** (pre-commit currently uses `--skip-browser`) |

---

## 2. Tasks NOT in PLAN (Summary)

These items from the AI Task List have **no** dedicated PLAN task (or only a loose mention):

1. **Script to check page imports** – Enforce that if a component needs a Mintlify component, the MDX page must import it.
2. **UK English spelling – full pass** – Either a one-off pass or a documented “optimal way” (tooling is in 08; execution not a standalone task).
3. **Homogeneous copy / AI models** – Suggest how to make all copy homogeneous and whether AI models can help.
4. **Glossary – keep up to date** – Process or automation so the glossary stays current.
5. **Full audit of all files – what to remove** – Repo-wide file audit (dead code, duplicates, obsolete assets), not just content audits.
6. **Fill in References section** – Populate `v2/pages/09_internal/references.mdx` (and any other “References” sections) from other sections.
7. **Link to show internal tab** – Add a link somewhere (e.g. a reference page) that reveals/shows the internal tab.
8. **Pre-commit: full browser verification, never skipped** – Require that all pages are verified in the browser on every commit (currently pre-commit uses `--skip-browser`).

---

## 3. Tasks Partially in PLAN (Gaps)

| Item | In PLAN | Gap |
|------|--------|-----|
| **Review all pages** (formatting, long text, styling, layout, media) | Task 17 = per-page **resources and media** (videos, blogs) | No dedicated task for **visual/layout/formatting review** of every page. |
| **UK spelling** | Task 08 = propose tooling (e.g. cspell) | No dedicated task to **run UK spelling across all pages** and fix. |
| **Platform ownership + Studio from v1** | 14/15 = v1→v2 coverage and missing/incomplete | No explicit **“pages owned by platform”** and **“fill Studio from v1”** task. |

---

## 4. Comprehensive Plan for Missing or Incomplete Items

Below are concrete plans for each gap: either a **new PLAN task** or an **extension to an existing task**.

---

### 4.1 Script to check page imports (NEW TASK)

- **Goal:** Ensure that for every MDX page, if it uses a component that depends on a Mintlify (or other) component, that dependency is imported in the MDX (since MDX controls imports).
- **Scope:**
  - Define rules: which components require which Mintlify (or other) imports.
  - Implement a script (e.g. in `v2/scripts/` or `snippets/scripts/`) that parses MDX and component usage and checks imports.
  - Integrate into CI and/or pre-commit (optional).
- **Deliverables:** Script, short doc in style-guide or component-library, and optionally a report under `docs/PLAN/reports/`.
- **Suggested PLAN number:** 22 (e.g. `22-page-imports-check-script.md`).

---

### 4.2 UK English spelling – full pass (EXTEND 08 or NEW)

- **Option A (preferred):** Extend **Task 08** deliverable to include: “Run cspell (or chosen tool) with UK dictionary across all content; produce list of files/lines to fix; one PR that applies fixes (or document why some are excluded).”
- **Option B:** New small task: “Apply UK English spelling across all docs (tool + manual review); document approach in style guide.”
- **Deliverables:** Config (e.g. cspell), one-off report of changes, and a “Spelling (UK)” subsection in the style guide or docs guide.

---

### 4.3 Homogeneous copy / AI models (NEW TASK or 18)

- **Goal:** Recommend how to make copy homogeneous (tone, terminology, structure) and whether AI models are suitable (e.g. for suggestions, not auto-publish).
- **Scope:** Research and document: style/voice guidelines, tooling (AI or not), and safe workflow (review before merge).
- **Placement:** Either a new task (e.g. “22 or 23 – homogeneous copy and AI”) or fold into **Task 18 (other suggestions)** as a high-impact suggestion with a short doc.
- **Deliverables:** Short doc (and optionally a report) with recommendations and links.

---

### 4.4 Glossary – keep up to date (NEW TASK)

- **Goal:** Ensure the glossary is maintained (new terms, deprecated terms, cross-links).
- **Scope:**
  - Where the glossary lives (e.g. single MDX, or fragment).
  - Process: who adds/updates, how often, and how it’s reviewed.
  - Optional: script that extracts terms from docs and flags missing glossary entries (or orphan glossary terms).
- **Deliverables:** Process doc (in resources or CONTRIBUTING), optional script, and a “Glossary maintenance” note in the contribution guide.
- **Suggested PLAN number:** 23 (e.g. `23-glossary-maintenance.md`).

---

### 4.5 Full audit of all files – what to remove (NEW TASK)

- **Goal:** Repo-wide file audit: identify dead code, duplicate assets, obsolete scripts, old v1 leftovers, and suggest removals or consolidation.
- **Scope:** Whole repo (excluding only standard tooling folders if agreed). Output: list of files/dirs with recommendation (keep / remove / merge).
- **Deliverables:** Report in `docs/PLAN/reports/` (e.g. `22-repo-files-audit-report.md` or similar) with tables and optional follow-up PRs.
- **Suggested PLAN number:** 24 (e.g. `24-audit-repo-files-removal.md`).

---

### 4.6 Fill in References section (NEW TASK)

- **Goal:** Populate the **References** section (e.g. `v2/pages/09_internal/references.mdx`) from content that already exists elsewhere (RFP requirements, repos, products, etc.).
- **Scope:**
  - Decide what “References” should contain (e.g. RFP requirements, repo list, product list).
  - Pull from other sections/pages and centralise links and short descriptions.
- **Deliverables:** Updated References page(s) and a short note in the doc guide or IA doc.
- **Suggested PLAN number:** 25 (e.g. `25-fill-references-section.md`).

---

### 4.7 Link to show internal tab (NEW TASK – small)

- **Goal:** Add a link (e.g. on a reference page or in a defined “somewhere”) that allows users to show or access the internal tab.
- **Scope:** Decide placement (which page, which label), implement link, and document in internal overview or references.
- **Deliverables:** One small PR (link + optional one-line doc).
- **Suggested PLAN number:** 26 (e.g. `26-internal-tab-link.md`) or folded into 25.

---

### 4.8 Pre-commit: full browser verification, never skipped (NEW TASK)

- **Goal:** Pre-commit hook must verify that **all** docs pages still run in the browser, and this check must **not** be skippable.
- **Scope:**
  - Current state: pre-commit runs tests with `--skip-browser` (see `.githooks/pre-commit` and test runner).
  - Change: run full browser test suite on commit (or a defined “critical path” of pages) and remove/bypass any “skip browser” option for pre-commit.
  - Performance: if full suite is too slow, define a smaller “smoke” set of pages that must load; document in GIT-HOOKS.md.
- **Deliverables:** Updated pre-commit (and possibly test runner), updated `docs/CONTRIBUTING/GIT-HOOKS.md`, and a note in PLAN or automation report.
- **Suggested PLAN number:** 27 (e.g. `27-pre-commit-full-browser-verification.md`).

---

### 4.9 Review all pages – formatting, layout, styling (EXTEND 17 or NEW)

- **Goal:** Review every v2 page for: formatting issues, long unbroken text, bad styling/layout, and opportunities for better data layout or media (mermaid, images).
- **Gap:** Task 17 focuses on **adding** resources/media; it does not explicitly cover **visual and layout review**.
- **Option A:** Extend Task 17 scope to include “per-page layout and formatting review” and add a checklist (formatting, line length, styling, media).
- **Option B:** New task “Per-page layout and formatting review” with its own checklist and report.
- **Deliverables:** Checklist, report (or section in 17’s report), and optionally PRs that fix the highest-impact issues.

---

### 4.10 Platform ownership + fill Studio from v1 (NEW TASK or EXTEND 14/15)

- **Goal:** (1) Clarify that pages are “owned” by the relevant platform/section. (2) Fill Studio-related content from v1 where still relevant.
- **Scope:**
  - Ownership: document or implement (e.g. CODEOWNERS or a simple table) which section owns which pages.
  - Studio: use v1→v2 coverage and Studio inventory to add or complete Studio content in v2.
- **Deliverables:** Ownership table or doc, and updated Studio pages (or a report listing what was added and where).
- **Suggested PLAN number:** 28 (e.g. `28-platform-ownership-and-studio-fill.md`) or an addendum to 14/15.

---

## 5. Suggested New PLAN Task Numbers (Summary)

| New # | Brief title | Purpose |
|-------|-------------|--------|
| 22 | Page imports check script | Script + doc: MDX must import Mintlify (etc.) when component needs it |
| 23 | Glossary maintenance | Process + optional script to keep glossary up to date |
| 24 | Audit repo files – removal | Repo-wide file audit; recommend what to remove |
| 25 | Fill References section | Populate References from other sections |
| 26 | Internal tab link | Add link to show internal tab (or fold into 25) |
| 27 | Pre-commit full browser verification | All pages (or smoke set) run in browser on commit; never skipped |
| 28 | Platform ownership and Studio fill | Ownership model + fill Studio from v1 |

**Optional / extend existing:**

- **UK spelling full pass** – extend Task 08 or tiny standalone task.
- **Homogeneous copy / AI** – new task or Task 18.
- **Per-page layout/formatting review** – extend Task 17 or new task.

---

## 6. Next Steps

1. **Prioritise** which of the new tasks (22–28) and extensions to do first (e.g. 27 and 25 for reliability and completeness).
2. **Add task briefs** under `docs/PLAN/` for each chosen new task (use `TASK-TEMPLATE.md`).
3. **Update** `docs/PLAN/README.md` with the new task table and optional priority.
4. **Run** existing remaining PLAN tasks (03, 04, 06–09, 11, 12, 17, 18, 19, 21) in parallel where possible; then execute the new plan items in order of priority.

---

*Generated from AI Task List vs PLAN comparison. Last substantive update: 2025-02-17.*
