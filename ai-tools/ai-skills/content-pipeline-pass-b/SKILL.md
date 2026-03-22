---
name: content-pipeline-pass-b
version: "1.0"
category: content-pipeline
description: >-
  Level 2 Pass B — layout and style application for a single Livepeer docs page.
  Takes approved Pass A content (plain markdown) and produces a production-ready
  MDX file: template selection, component placement, frontmatter completion,
  section naming check, and render validation. Does not rewrite content.
invoke_when:
  - "apply the layout to this page"
  - "Pass B for [page path]"
  - "convert to MDX"
  - "apply template and components to [page]"
  - "finalise the MDX for [page]"
  - "complete the frontmatter for [page]"
---

SKILL: Content Pipeline — Level 2 Pass B (Layout & Style)

Goal
Produce a production-ready `.mdx` file from approved Pass A content. Pass B applies the MDX layer: template selection, section structure, component placement, frontmatter completion, section naming check, and render validation. It does not change content.

Constraints
- Do not rewrite or edit content. If content changes are needed, return to Pass A.
- Do not invent component choices not supported by the component decision rules. Flag ambiguous cases.
- Do not write `status: current` if any `{/* REVIEW: */}` flags remain unresolved — use `status: draft`.
- Do not remove `{/* REVIEW: */}` flags from Pass A — they must appear in the final MDX output.
- Do not use components that are not registered in `snippets/components/`.
- Frontmatter must use canonical enum values only. Do not invent new values.

When to load references
- Load `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/4-layout-pass/layout-pass.md` — full prompt with phases and quality gates.
- Load `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md` — for Phase 5 section naming check.
- Load the target template file from `snippets/templates/pages/` — based on PAGE_TYPE + PAGE_VARIANT.
- Load the Pass A output (approved content or paste directly).

Workflow
1. Confirm PAGE_TYPE, PAGE_VARIANT, and all taxonomy field values are available (from Pass A output).
2. Run Phase 1 (template selection): match pageType + pageVariant to the correct template.
3. Run Phase 2 (section structure mapping): map every content section to a template slot and heading level.
4. Run Phase 3 (component selection): apply component decision rules to every section.
5. Run Phase 4 (frontmatter completion): produce the complete frontmatter block with all required fields.
6. Run Phase 5 (section naming check): check every `##` and `###` heading against the naming rubric. Flag generic structure words.
7. Run Phase 6 (render validation): check MDX syntax, component validity, link paths, UK English.
8. Flag any decisions requiring human approval before writing the file.
9. Write the final `.mdx` file to PAGE_PATH.

Deliverable Format
- Final `.mdx` file written to `PAGE_PATH`.
- List of any flagged decisions that required a default choice (template gap, ambiguous component, naming tie).
- Confirmation that all `{/* REVIEW: */}` flags from Pass A are present in the output.

Failure Modes / Fallback
- If Pass A output is not approved: do not run Pass B. Return the Pass A review report to the user.
- If PAGE_TYPE does not match any template: use the closest match and flag the gap. Do not proceed without noting the decision.
- If a content section does not map to any template slot: flag it as a structural decision requiring human approval. Do not silently drop the section.
- If a `<Card href="">` value cannot be verified as a valid repo path: leave the href as a placeholder and add a `{/* REVIEW: verify link */}` flag.
- If any component is not found in the component registry: flag it and use a native markdown fallback.

Validation Checklist
- [ ] Template matched to pageType + pageVariant
- [ ] Every content section mapped to a template slot with a heading level
- [ ] Component decisions follow Phase 3 rules — no accordion hiding of primary content
- [ ] Frontmatter complete: all required fields with canonical enum values
- [ ] Title: 1–3 words, concept-derived, no banned forms
- [ ] Description: subject-first, <= 160 chars, no "This page"
- [ ] Section headings checked against naming rubric — no unresolved generic structure words
- [ ] All `{/* REVIEW: */}` flags from Pass A present in output
- [ ] No MDX syntax errors
- [ ] UK English throughout
- [ ] `status: draft` if any REVIEW flags remain; `status: current` only if all verified
