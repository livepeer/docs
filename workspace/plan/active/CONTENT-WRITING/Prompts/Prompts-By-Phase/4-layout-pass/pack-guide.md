# Phase 4 — Layout Pass: Pack Guide

**Prompt**: `layout-pass.md`
**Skill**: `ai-tools/ai-skills/content-pipeline-pass-b/SKILL.md`
**Resources**: `phase-resources.md`
**Test outputs**: `testing/`

---

## What This Phase Produces

A production-ready `.mdx` file: template applied, components placed, frontmatter complete, section headings checked against naming rubric, all Pass A `{/* REVIEW: */}` flags carried through. The file is ready to commit — modulo any flagged human-approval decisions and unresolved REVIEW flags.

This phase does not change content. If content needs changing, return to Pass A.

---

## When to Run This Phase

- After Pass A content is approved for a page
- After Pass A information type classification is complete — component selection in Phase 3 depends on it
- Per page, not batched

**Do not run** if Pass A verdict was REWRITE REQUIRED and the rewrite hasn't happened yet.

---

## Pre-flight (Human Steps Before Running)

- [ ] **Pass A approved**: confirm PASS or NEEDS WORK with fixes applied — not just "output exists"
- [ ] **Information type tags present**: Pass A Phase 4 should have classified every section. If missing, run that classification now before starting Phase 3 component selection.
- [ ] **Frontmatter validator status**: Decide before running whether to flag new-schema frontmatter values (`pageType: instruction`, `pageType: concept`, etc.) for the validator issue or to use old-schema values. Recommended: use canonical values and add the `{/* REVIEW: */}` validator note — surface the problem now, fix it in the validator later.
- [ ] **Template confirmed**: Check which template applies before the prompt runs — reduces the chance of Phase 1 picking the wrong one. The mapping table in the prompt is the authority.
- [ ] **Select from `phase-resources.md`**: Phase 4 is more mechanical than Phase 1–3. The template file and section-naming.md are the primary resources. The composable content guide is relevant if the page reuses content from elsewhere. Resist loading more.

---

## Running Order

1. Fill the context block — carry all taxonomy fields from Pass A
2. Pre-flight — confirm Pass A is approved and information types are classified
3. Phase 1 — template selection
4. Phase 2 — section structure mapping — pause for spot-check: does every section have a slot?
5. Phase 3 — component selection
6. Phase 4 — frontmatter completion
7. Phase 5 — section naming check
8. Phase 6 — render validation
9. Flag human-approval decisions, then write the file

Human review is recommended after Phase 4 (frontmatter) — canonical values and title/description quality are worth a human eye before the file is written.

---

## Dos

- **Do** carry every `{/* REVIEW: */}` flag from Pass A through to the MDX output. These are the handoff mechanism to the human verifier. Removing them — even when they seem minor — loses the verification trail.
- **Do** set `status: draft` whenever any REVIEW flag remains unresolved. `status: current` means verified and complete. Never skip this check.
- **Do** flag human-approval decisions explicitly before writing the file. Template gaps, ambiguous component choices, and naming ties should be surfaced, not silently resolved. The human decides; Pass B documents the decision taken.
- **Do** use `section-naming.md` for every `##` and `###`. "Overview" and "Introduction" are almost always replaceable with something specific — the naming rubric gives the scoring criteria for deciding.
- **Do** check the component registry (`snippets/components/`) before using a component. Using an unregistered component produces an MDX render error.

## Don'ts

- **Don't** rewrite content during this pass. If you notice a content problem (wrong information, missing step, voice violation), flag it as `{/* REVIEW: content issue — return to Pass A: [description] */}` and continue. Do not fix it here.
- **Don't** use `<Accordion>` for primary content. If a step, command, or CTA is inside an accordion, it's hidden from the reader's default view. Primary path content is never in an accordion.
- **Don't** use `<Tabs>` for visual variety. Tabs are for genuine reader self-selection (OS, config variant, persona path). If every reader needs to read both tabs, use sequential sections instead.
- **Don't** invent component names. Every component in the output must exist in `snippets/components/`. If you're unsure whether a component exists, flag it and use native markdown as the fallback.
- **Don't** produce old-schema frontmatter values (`how_to`, `quickstart`, `landing`, `faq`, `troubleshooting`). Use canonical values and add the validator note if needed.

---

## What Good Output Looks Like

**Good frontmatter**:
```yaml
title: Clearinghouse
description: The clearinghouse settles payment between your gateway and orchestrators — configure it before going live.
pageType: instruction
audience: gateway
purpose: configure
lifecycleStage: setup
complexity: intermediate
veracityStatus: unverified
status: draft
```

**Bad frontmatter**:
```yaml
title: Understanding the Clearinghouse Architecture and How to Configure It
description: This page explains the clearinghouse.
pageType: how_to
```

**Good component decision**: `Steps` — this section is a sequential procedure with 4 steps; reader cannot skip any; `<Steps>` required per Phase 3 rules.

**Bad component decision**: (silence — component applied without explanation)

**Good section naming flag**: `## Overview` → flagged: generic structure word. Replacement: `## Clearinghouse Role` (score: 22/25 — domain anchor present, conditional precision applied, noun phrase form correct).

**Good human-approval flag**: `Template gap: Pass A content includes a "Troubleshooting" section but instruction template has no troubleshooting slot. Default taken: placed as final `##` section before Next Steps. Flag for human review — may warrant a separate troubleshooting page.`

---

## Common Failure Modes

| Failure | Signal | Fix |
|---|---|---|
| REVIEW flags removed | Final MDX has no `{/* REVIEW: */}` flags despite Pass A having several | Re-run Phase 6 render validation; carry all flags from Pass A explicitly |
| `status: current` on draft page | Page has unresolved flags but status is current | Phase 6 gate failed — correct to `status: draft` |
| Component not in registry | MDX renders with error on `mintlify dev` | Check `snippets/components/` before using; use native markdown fallback and flag |
| All sections mapped to `## Overview` | Section mapping is vague | Run Phase 2 more carefully; every section needs a named template slot, not a generic heading |
| Old-schema pageType used | `pageType: how_to` in output | Use `pageType: instruction` and add validator note |
| Content changed in Pass B | WRITE mode content differs from Pass A approved content | Flag as content change, return to Pass A — Pass B does not rewrite |

---

## After Running — Testing & Iteration

Record your test run in `testing/`. Minimum entry:
- Date, tab, page path
- Template used
- Human-approval decisions flagged and how they were resolved
- Whether the MDX rendered clean on `mintlify dev`
- Updates to prompt or resource list

Update test status in `phase-resources.md` for resources used.
