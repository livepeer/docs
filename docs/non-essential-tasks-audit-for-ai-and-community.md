# Non-Essential Tasks — Full Audit for AI & Community

*Tasks that you or the community can do (or that can be translated into AI tasks / GitHub issues). Not required for RFP go-live.*

---

## 1. Style & copy homogenisation

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Unify WIP / Coming Soon / Under construction wording** | All MDX | AI or community | Today: mix of `<Danger> WIP Section</Danger>`, `<Note>Coming Soon</Note>`, "Page is under construction. Feedback Welcome!", "This page is still cooking...". Pick one convention (e.g. "Under construction — feedback welcome") and apply everywhere. |
| **Callout copy in one place** | `snippets/.../previewCallouts.jsx` | AI or dev | Move strings to a shared copy file (e.g. `snippets/copy/callouts.json` or `.md`) so "Page is under construction", "This page is still cooking...", "Check the github issues", "quick form" etc. are editable without touching JSX. |
| **Frontmatter quote style** | All MDX | AI | Normalise `title: 'X'` vs `title: "X"` (and same for `description`, `og:image`) for consistency and to avoid SEO script edge cases. |
| **Doc's vs Docs** | All MDX | AI | Standardise "Doc's" → "Docs" (or define when possessive is intended) for consistency. |
| **Light mode colours** | CSS / theme | Community | Fix colours in light mode (called out in Braindump as stretch). Audit contrast and hero/card colours. |

---

## 2. Strings → own files (i18n / copy ready)

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Extract callout strings** | `previewCallouts.jsx` | AI or dev | As above: all user-facing text in callouts into e.g. `snippets/copy/callouts.json` (or per-component files). Enables future i18n and single-edit copy. |
| **Portal / landing copy to data files** | Portal MDX pages | AI | Move repeated hero intros, CTA text, section headings from inline MDX into e.g. `snippets/data/portals/*.json` or `.mdx` data files so copy can be edited in one place. |
| **Glossary / terminology one source** | `livepeer-glossary.mdx` + scattered terms | AI | Single glossary source (JSON/MDX) and reference from other pages so terminology stays consistent (and can feed a future i18n glossary). |
| **Button/link label inventory** | All MDX | AI | List all CTA labels ("Get started", "Read more", "View on GitHub", etc.) and move to shared copy file for consistency and A11y. |

---

## 3. Component library & runnable wiki

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Component library wiki (runnable)** | `09_internal/.../components.mdx` + snippets | Community or AI | Expand internal Components page into a full wiki: every custom component in `snippets/components` with (1) short description, (2) props/usage, (3) **runnable example** (copy-paste snippet that works in Mintlify). Optionally add to "about these docs". |
| **Mintlify components cheat sheet** | One MDX page | Community | Single page: Note, Info, Warning, Tip, Card, Tabs, Accordion, Expandable, Tile, Columns — with one minimal runnable example each and link to Mintlify docs. |
| **"HELP APPRECIATED" & "UNDER CONSTRUCTION" components** | New snippet components | Community | Implement two standard components (as per Braindump) so pages use same look and copy; optionally drive copy from strings file. |
| **Show/hide sidebar component** | Mintlify / layout | Community | Stretch: add toggle to show/hide left sidebar if supported by stack. |

---

## 4. Scripts & automation (CI / community)

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Run add-callouts in CI** | GitHub Actions | Community | Run `add-callouts.js --dry-run` (or apply with review) so new pages get consistent callouts. |
| **Run SEO generator in CI** | GitHub Actions | Community | Run `seo-generator-safe.js` on changed MDX (dry-run or apply) to keep keywords/og:image in sync. |
| **Broken link checker** | All MDX + docs.json | AI or community | Add link checker (e.g. lychee, markdown-link-check) to CI; fix or exclude false positives. |
| **Spell-check / terminology check** | All MDX | AI | Add spell-check (e.g. cspell) and optional glossary term check so "Arbitrum" etc. stay consistent. |
| **Fix known typos** | One-off | AI | e.g. `artibtrum` → `arbitrum` in `artibtrum-exchanges.mdx` (file name + content + links), and any other typos found by grep/spell-check. |

---

## 5. MDX / build hygiene (fix existing errors)

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Fix Acorn parsing errors** | 12 files (see report) | AI or community | `v2/tests/reports/errors/20260112-145047-mdx-errors.md` lists 12 files with "Could not parse expression with acorn" — fix invalid JS/JSX in MDX (e.g. unescaped `{`, bad expressions). |
| **Fix tag mismatches** | 2 files | AI or community | `gateway-explainer.mdx`: `</Accordian>` → `</Accordion>`. `community-projects.mdx`: fix `</Danger>` placement. |
| **Fix invalid snippet imports** | 8 paths (see report) | Community | Snippets using `react` or relative paths: either move to valid snippet paths or document allowed deps. |
| **Fix missing snippet files** | 4 missing | Community | Add or redirect: `snippets/variables.mdx`, `snippets/variables/home.mdx`, etc., per error report. |
| **Resolve docs.json missing refs** | 30+ entries | Community or AI | Navigation warnings: either add missing pages or remove from docs.json. |

---

## 6. Docs structure & content polish (non-blocking)

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Remove or hide TODO / FIXME from public** | All MDX | AI | Replace or move in-page TODOs (e.g. `<Expandable title="TODO">`) to GitHub issues; leave a short "Last updated" or "Help wanted" callout where appropriate. |
| **Standardise portal hero images** | Portal pages | Community | Add hero images to portals that don’t have them (Braindump "after content"). |
| **Rename Landing → Portal** | IA / docs.json / anchors | Community | Rename any "Landing" to "Portal" in nav and breadcrumbs. |
| **Strike incomplete preview pages in docs.json** | docs.json | Community | Mark or remove pages that are not ready for public (per Braindump). |
| **Naming convention README** | Repo root or docs | Community | Document URL/folder naming rules so renames are consistent. |

---

## 7. SEO & metadata (bulk / scripted)

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Bulk add missing description** | MDX without description | AI | Find pages with no `description` in frontmatter; add one-line description (from first paragraph or title). |
| **Bulk og:image by section** | All MDX | Script already exists | Run `seo-generator-safe.js` (or update-og-image scripts) so every page has section-appropriate og:image. |
| **Keywords from path** | All MDX | Script already exists | Run SEO generator so keywords are derived from path/title consistently. |

---

## 8. Code blocks & runnability

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Audit code blocks for language tags** | All MDX | AI | Ensure every ``` block has correct language (bash, json, javascript, etc.) for syntax highlight and future "run" UX. |
| **Add "copy" to code blocks** | Mintlify / config | Community | If not default, enable copy-button on code blocks. |
| **Runnable snippets list** | Dev quickstarts | Community | Identify curl/bash/Node snippets that should be "tested" periodically; list in a README or automation so community can verify. |
| **One-click runnable examples** | Optional | Community | Where stack allows (e.g. Mintlify or external), add runnable examples for key quickstarts. |

---

## 9. A11y & quality (non-blocking)

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Alt text for images** | All MDX | AI | Audit `<img>` and image components; add or improve alt text. |
| **Heading hierarchy** | All MDX | AI | Check h1 → h2 → h3 order (no skips); fix where broken. |
| **Link text** | All MDX | AI | Replace "click here" / "link" with descriptive link text. |
| **A11y lint in CI** | Build | Community | Add a11y check (e.g. axe or pa11y) to CI on built docs. |

---

## 10. Internal / contributor docs (nice-to-have)

| Task | Scope | Delegatable to | Notes |
|------|--------|----------------|-------|
| **Scripts README index** | `v2/scripts/dev/` | Community | Single README listing every script (add-callouts, seo-generator, update-og-image, etc.) with one-line purpose and how to run. |
| **Contributor "first issue" labels** | GitHub | Maintainer | Label issues from this audit as `good first issue` / `documentation` / `help wanted` so community can pick them. |
| **Deepwiki / automation note** | Internal docs | Community | Document idea from Phase 3: "deepwiki for different repos + n8n" as future automation for keeping 3rd-party refs up to date. |

---

## 11. Quick reference — one-line issue titles (copy to GitHub)

Use these as issue titles; body can link to this doc and the relevant file/section.

- **Style:** Unify WIP / Coming Soon / Under construction wording across MDX
- **Copy:** Move callout strings to shared copy file (i18n-ready)
- **Copy:** Normalise frontmatter quote style (single vs double) in MDX
- **Copy:** Standardise "Doc's" vs "Docs" usage
- **UI:** Fix light mode colours (contrast, heroes)
- **Components:** Extract callout strings to JSON/data file
- **Components:** Move portal/landing copy to data files
- **Glossary:** Single glossary source and reference from pages
- **Components:** Component library wiki with runnable examples (snippets)
- **Components:** Mintlify components cheat sheet with examples
- **Components:** Add HELP APPRECIATED and UNDER CONSTRUCTION components
- **CI:** Run add-callouts script in CI (dry-run or apply)
- **CI:** Run SEO generator in CI on changed MDX
- **CI:** Add broken link checker (lychee / markdown-link-check)
- **CI:** Add spell-check and optional glossary check
- **Fix:** Correct typo artibtrum → arbitrum (file name + content + links)
- **Fix:** Resolve Acorn parsing errors in 12 MDX files
- **Fix:** Fix Accordion/Danger tag mismatches in gateway-explainer and community-projects
- **Fix:** Fix invalid snippet imports (react, relative paths)
- **Fix:** Add or redirect missing snippet files
- **Fix:** Resolve docs.json missing file references
- **Content:** Remove or move in-page TODOs to GitHub issues
- **Content:** Add hero images to portals missing them
- **IA:** Rename Landing → Portal in nav/breadcrumbs
- **IA:** Strike or hide incomplete pages in docs.json
- **Docs:** Add URL/folder naming convention README
- **SEO:** Bulk add missing frontmatter description to MDX
- **SEO:** Bulk set og:image per section (use existing script)
- **Code:** Audit and fix code block language tags
- **Code:** Enable copy button on code blocks if not default
- **Docs:** List runnable snippets for community to verify
- **A11y:** Audit and add image alt text
- **A11y:** Fix heading hierarchy in MDX
- **A11y:** Replace generic link text with descriptive text
- **CI:** Add a11y lint (axe/pa11y) to docs build
- **Docs:** Scripts README index (all dev scripts)
- **Meta:** Label good-first-issue for audit tasks

---

*Source: livepeer-docs-fork v2, Notion Docs v2 / Ally Braindump, and `v2/tests/reports/errors/20260112-145047-mdx-errors.md`. Update as tasks are done or new ones are found.*
