# Phase 08: Layout, UX & Style — Final Assembly

> Human role: **FINAL SIGN-OFF**
> Automated: MDX component application, frontmatter completion, render verification

---

## Inputs required

- Verified page markdown from Phase 07 (veracityStatus set)
- Frontmatter contract from Phase 03
- Component library: `v2/resources/documentation-guide/component-library/component-library.mdx`
- Mintlify constraints: `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`

## Process

### Step 1: Run layout pass

**Tool**: `content-pipeline-pass-b` skill
**Location**: `ai-tools/ai-skills/content-pipeline-pass-b/SKILL.md`

Applies:
- MDX components (tables, accordions, callouts, cards, tabs, code blocks)
- Complete frontmatter (all 10 fields from canonical schema)
- OG image configuration
- Import statements (root-absolute paths, file extensions)

### Step 2: Complete frontmatter

Ensure all fields present with canonical values:

```yaml
---
title: ""
sidebarTitle: ""
description: ""
pageType: ""        # 7 canonical values
audience: ""        # 7 canonical values
purpose: ""         # 15 canonical values
status: current
lastVerified: ""    # ISO 8601 date
veracityStatus: ""  # verified / unverified / stale
keywords: []
og:image: /snippets/assets/media/og-images/fallback.png
og:image:alt: Livepeer Docs social preview image
og:image:type: image/png
og:image:width: 1200
og:image:height: 630
---
```

### Step 3: Validate structure

**Tool**: `lint-structure.js`
**Command**: `node operations/scripts/validators/content/structure/lint-structure.js v2/{tab}/{section}/{page}.mdx`

Must return: zero blocking issues.

### Step 4: Run final quality gate

**Tool**: `_MY_PROCESS/tools/page-quality-gate.sh`

```bash
./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/{tab}/{section}/{page}.mdx
```

Must return: **PASS (10/10 checks)**

### Step 5: Verify render (if possible)

```bash
npx mintlify dev
```

Check the page renders without errors in the local preview.

### Step 6: Human sign-off (HUMAN)

- [ ] Page reads naturally — not like AI-generated content
- [ ] Voice register matches the audience
- [ ] Information is complete for the stated purpose
- [ ] Next steps are clear (reader knows where to go)
- [ ] No editorial debt (zero TODOs, zero unresolved REVIEWs)
- [ ] Would I point someone to this page as an excellent resource?

## Output

- MDX-ready page, fully assembled
- page-quality-gate.sh PASS
- lint-structure.js zero blocking issues
- Human sign-off recorded

## Gate condition

- [ ] page-quality-gate.sh PASS
- [ ] lint-structure.js zero blocking
- [ ] Renders without errors
- [ ] Human approved

## Post-completion

After completing all pages for a tab, proceed to **FEEDBACK** phase.
