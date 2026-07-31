# Discoverability Pipeline Design

> Search engines, AI crawlers, and LLMs can find and understand content.
> If discoverability breaks, the site exists but nobody finds it.

---

## What "discoverable" means for docs.livepeer.org

1. AI sitemap regenerates on every content change
2. llms.txt and llms-full.txt regenerate on every content change
3. Companion files (glossary JSON) regenerate on content change
4. SEO metadata (title, description, keywords, OG images) is correct and current
5. Anti-scam: Livepeer contract pages dominate search results for contract addresses

---

## Current pipelines

### Working

| Pipeline | When | What it does | Has verify pair? |
|---|---|---|---|
| AI companions gen+verify | Push + PR | Generate glossary companion JSON, verify on PR | Yes |
| AI sitemap gen+verify | Push + PR | Generate sitemap-ai.xml, verify on PR | Yes |
| llms.txt gen+verify | Push + PR | Generate llms.txt, verify on PR | Yes |

### Broken

| Pipeline | Problem |
|---|---|
| SEO metadata refresh | P0: seo-refresh.yml has no commit step. Writes vanish |

### Missing

| Need | What exists | Gap |
|---|---|---|
| OG image generation | generate-og-images.js + og-image-policy.js | No workflow dispatches it |
| llms-full.txt | Script supports --full flag | Not being generated or committed |
| Anti-scam SEO dominance | Plan exists (seo-aeo-anti-scam-plan.md), Phase 1 infrastructure ready | Phase 2-3 execution pending |

---

## Proposed target state

### 1 consolidated generator + 1 consolidated validator (replace 6 workflows)

**1. Post-Merge Discoverability Generator (P4)**

Shares matrix dispatcher with maintenance generators.

```
Push to deploy branch
  -> Matrix: [ai-companions, ai-sitemap, llms-files]
  -> Each: run script --write, diff, commit if changed
```

Replaces: generate-ai-companions.yml, generate-ai-sitemap.yml, generate-llms-files.yml

**2. PR Discoverability Verifier (P3)**

Shares matrix dispatcher with maintenance validators.

```
PR opened
  -> Matrix: [check-ai-companions, verify-ai-sitemap, verify-llms-files]
  -> Each: run script --check, report pass/fail
```

Replaces: check-ai-companions.yml, verify-ai-sitemap.yml, verify-llms-files.yml

**3. Fix SEO refresh (standalone)**

Add the missing commit step to seo-refresh.yml. Keep as manual dispatch.

**4. Wire OG image generation (standalone, manual)**

New workflow for generate-og-images.js. Manual dispatch (needs Puppeteer). Consider adding to post-merge for section-level defaults.

**5. Enable llms-full.txt**

Add --full flag to llms.txt generator workflow. One line change.

---

## Impact/effort

| # | Fix | Impact | Effort | Priority |
|---|---|---|---|---|
| 1 | Fix seo-refresh.yml commit step | SEO metadata can actually be updated | 5 min | Quick win |
| 2 | Enable llms-full.txt generation | Full LLM index available | 1 line change | Quick win |
| 3 | Wire OG image generation workflow | Social sharing images auto-generated | Low (new workflow, existing script) | Medium |
| 4 | Add concurrency + error handling to 3 generators | Reliability | Low (add to each) | Quick win |
| 5 | Fix hardcoded branch in verify-ai-sitemap + verify-llms-files | Uses vars.DEPLOY_BRANCH | 5 min each | Quick win |
| 6 | Consolidate 6 workflows into 2 matrices | Reduce count | High | After fixes |
