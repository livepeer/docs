# Exemplary Governance Frameworks

> Pointer + analysis. Do not copy files — emulate the patterns.
> These frameworks define the standards everything is measured against. Read them before writing any component or script.

---

### Script Framework Specification

**File:** `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`

**Why it's good:** Canonical reference for the entire script library. Each section is marked ENFORCED or GUIDE — no ambiguity about what's mandatory. The three-tier taxonomy (type/concern/niche) has classification tests that prevent mis-filing: "If a script does not spawn other scripts, it is NOT a dispatch." The enforcement tiers table (hard gate, soft gate, self-heal) clarifies where each rule is checked.

**Key patterns:**
- ENFORCED vs GUIDE markers on every section
- Classification test for each type: positive definition + negative exclusion
- Three-tier taxonomy with full niche enumeration per type x concern matrix
- 11-tag JSDoc standard with tag order, allowed values, and examples
- Enforcement tiers: hard gate (blocks commit), soft gate (warns in PR), self-heal (cron auto-fix)
- File layout specification: shebang → JSDoc → requires → config → functions → main → exports
- Non-type folders documented (config/, archive/)

**Watch out:** This is a specification, not a plan. It defines what scripts must look like — it does not describe how to write them or what to build next. Pair with `scripts.md` for examples.

---

### Component Framework Canonical

**File:** `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`

**Why it's good:** Full folder tree with all sub-niches and component assignments. The decision tree (6 questions, first match wins) is the classification standard — no guessing by name similarity. Status accuracy note at top: "Updated 2026-03-26 to reflect actual repo contents." The JSDoc tag reference documents each tag with allowed values, descriptions, and decision rules.

**Key patterns:**
- Decision tree for category placement: 6 ordered questions
- Full folder tree with comments explaining each level
- Component count table verified against live repo
- JSDoc tag reference: @component, @category, @subcategory, @status, @description, @dataSource, @aiDiscoverability
- @status values: stable, experimental, deprecated
- @subcategory must match folder name exactly (enforced by pre-commit)
- Forbidden tags list: 12 removed tags with reasons why each was dropped
- Published location noted: `docs-guide/frameworks/component-governance.mdx`

**Watch out:** The component entries within each sub-niche are noted as "aspirational and may not match current file names." The category-level structure and decision rules are verified accurate. Always check actual file existence before referencing specific components.

---

### Actions Governance Framework

**File:** `.github/workspace/framework-canonical.md`

**Why it's good:** Third governed surface aligned to the same taxonomy model as scripts and components. The key architectural insight (D-ACT-08) is that all workflow YAML files are dispatchers; the type classification comes from the script, not the workflow. Seven types with classification tests, seven concerns that name the part of the system (not the output kind), eight pipeline tags that classify when/authority. The naming convention (`type-concern-verb-name.yml`) compensates for GitHub's flat `.github/workflows/` constraint with a naming quality rule and bad/good name examples.

**Key patterns:**
- Architectural separation: workflows dispatch, scripts do the typed work (D-ACT-08)
- Seven types with positive classification tests: integrator, generator, validator, audit, remediator, dispatch, interface
- Seven concerns naming what part of the system: integrations, copy, maintenance, health, discoverability, governance, brand
- 11-verb closed enum (consolidated from 17): update, generate, check, scan, repair, dispatch, label, index, intake, close, assign
- Pipeline tags (P2-P6, manual, event-driven) with authority levels and error handling requirements per tag
- Naming quality rule: "If someone unfamiliar with the repo cannot guess the workflow's purpose from the filename alone, the name is bad"
- Self-documenting pipeline: generator script reads audit JSON, produces per-action MDX pages
- Decisions log updated at the time each decision is made (8 decisions, D-ACT-01 through D-ACT-08)

**Watch out:** The audit JSON (`actions-audit.json`) reflects confirmed names/types/concerns from the review but the actual workflow files have NOT been renamed yet. Renaming happens in Phase 6. The two new CI workflows (generate-action-docs, check-action-naming) are staged in the actions-library, not yet in `.github/workflows/`.