# Brand and Copy Pipeline Design

> Content is consistent. UK English. Correct grammar. Correct spelling. 
> Consistent voice. Consistent terminology. Visual identity maintained.

---

## What "consistent" means for docs.livepeer.org

1. All pages use UK English (-ise, -our, -re)
2. Grammar is correct (a/an agreement, capitalisation, its/it's)
3. Proper nouns correctly capitalised (Livepeer, Ethereum, GitHub)
4. No banned words/phrases (copy governance rules enforced)
5. Copy patterns are assertive (no hedging, no conditional-if constructions)
6. Terminology is consistent across all pages (317+ terms harvested)
7. Visual identity: OG images, hero images, icons follow brand guidelines

---

## Current pipelines

### Working

| Pipeline | When | What it does |
|---|---|---|
| EN-GB style fix | Manual | style-homogenise.yml dispatches homogeniser script |
| Translation | Manual | translate-docs.yml + 5 scripts + 12 lib modules |
| Quality suite (PR) | PR (P2) | test-suite.yml checks component naming, scope, CSS, docs, immutability |

### Disconnected (scripts exist, no dispatcher)

| Script | Type | What it does |
|---|---|---|
| lint-copy.js | validator | Banned word/phrase enforcement |
| lint-patterns.js | validator | Tier 2 copy patterns (hedging, conditionals) |
| check-grammar-en-gb.js | validator | UK English grammar + autofix |
| check-proper-nouns.js | validator | Proper noun capitalisation |
| audit-copy-patterns.js | audit | Aggregate copy pattern violations |
| repair-spelling.js | remediator | Auto-correct from cspell dictionary |
| repair-ownerless-language.js | remediator | Remove human-owner dependency language |
| generate-hero-background.js | generator | Brand hero backgrounds (Puppeteer) |
| generate-hero-image.js | generator | Brand hero images (Puppeteer) |
| audit-icon-usage.js | audit | Icon usage audit |
| audit-glossary-gaps.js | audit | Glossary gap detection |
| terminology-search.js | audit | Terminology discovery |
| generate-glossary.js | generator | Glossary reference data |

**This is the most neglected concern.** 13 scripts, only 1 has a workflow (manual). Zero CI integration.

### Blocked

| Item | Status |
|---|---|
| 317+ terminology terms harvested | Blocked on human review (TERMINOLOGY-COLLATE plan) |
| Copywriting governance framework | Complete but in workspace/plan/complete/ (not enforced) |

---

## Proposed target state

### 2 new dispatchers

**1. PR Copy/Brand Gate (P3 advisory)**

Runs on every PR that changes MDX files. Advisory initially (P3), promote to P2 once baseline is clean.

```
PR opened (paths: v2/**/*.mdx)
  -> lint-copy.js (banned words/phrases)
  -> lint-patterns.js (hedging, conditionals)
  -> check-grammar-en-gb.js (UK English grammar)
  -> check-proper-nouns.js (capitalisation)
  -> Report pass/fail per check
```

4 scripts, one matrix workflow. This is the single highest-impact missing pipeline. Every PR currently merges without any copy/brand validation.

**2. Scheduled Brand Remediation (manual + optional cron)**

Fix what the PR gate catches over time. Run manually or on a schedule.

```
Manual dispatch (or weekly cron)
  -> repair-spelling.js (cspell dictionary fixes)
  -> repair-ownerless-language.js (remove owner-dependent language)
  -> style-and-language-homogenizer-en-gb.js (full EN-GB normalisation)
  -> audit-copy-patterns.js (aggregate violations report)
  -> audit-glossary-gaps.js (terminology gap report)
  -> audit-icon-usage.js (icon audit)
  -> For fixes: commit/PR
  -> For audits: step summary + artifact
```

Absorbs current style-homogenise.yml. Adds the disconnected repair and audit scripts.

**Standalone (manual CLI tools, not CI):**
- generate-hero-background.js, generate-hero-image.js (Puppeteer, needs local runtime)
- generate-glossary.js (manual until terminology review complete)
- terminology-search.js (manual discovery tool)

---

## Impact/effort

| # | Fix | Impact | Effort | Priority |
|---|---|---|---|---|
| 1 | Wire 4 lint/grammar validators to PR workflow | Brand enforcement on every PR. Currently zero | Low-medium (new workflow, 4 existing scripts) | HIGHEST PRIORITY in brand |
| 2 | Fix homogeniser: move to remediators/, retag as @type remediator | Governance alignment | 5 min | Quick win |
| 3 | Expand style-homogenise.yml to include spelling + ownerless repairs | Broader auto-fix | Low (add 2 script steps) | Quick win |
| 4 | Wire audit scripts to scheduled scan | Visibility into brand drift | Low | After PR gate |
| 5 | Review 317+ terms, unlock terminology pipeline | Terminology consistency | Blocked on human | When ready |
