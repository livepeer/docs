# Review: AI Jobs Quickstart

**File:** `v2/developers/get-started/ai-quickstart.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, description, pageType=instruction, audience=developer, purpose=start, keywords, OG image. Missing: sidebarTitle, complexity, lifecycleStage, status |
| VOICE | 2.1-2.22 | FAIL | "AI-ready summary (for humans and assistants)" — meta/self-referential heading. "Review status" section is internal process, not user content |
| HEADINGS | 3.1-3.10 | FAIL | Numbered heading style (## 1. Prerequisites) is non-standard. "Review status" and "Canonical references" are internal headings |
| STRUCTURE | 4.1-4.16 | FAIL | Contains placeholder `<MODEL_ID>` values. "Stakeholder signoff" section exposed to readers. Internal review checklist in published content |
| LAYOUT | 5.1-5.16 | FAIL | No Tip/CenteredContainer intro. No CustomDivider. No Related CardGroup. Raw numbered sections. Does not match the instruction template used by other pages |
| VERACITY | 6.1-6.12 | WARN | Placeholder model_id. "Final default pipeline flow still requires stakeholder approval" — unverifiable claim about internal process |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | WARN | "Next steps" links use old paths (/solutions/...) and /v2/gateways/... mixed. Some may not resolve |
| PROCESS | 9.1-9.6 | FAIL | No status field. "Stakeholder signoff required" section present. Clearly pre-review draft |
| COMPLETENESS | 10.1-10.5 | WARN | Covers the basic flow but placeholder values prevent a complete tutorial |

## Verdict

**FAIL** — This page is a raw research draft exposed in navigation. Contains internal process sections, placeholder model IDs, old /solutions/ link paths, and no design-system components. Needs a full rewrite to match the template and quality standard of sibling quickstart pages (contributor-quickstart, setup-paths).
