# References Knowledge System

> Per-category knowledge: exemplars (good work + why), best-practice (collated research), patterns (extracted rules linked to repo context).
> Read before designing, writing, laying out, or building.

---

## Structure

Each category folder contains up to 3 files:
- **`exemplars.md`** — pointers to the best work in the repo with analysis of WHY it's good
- **`best-practice.md`** — collated research from across the repo, verified against real sources
- **`patterns.md`** — extracted rules enforced by best practice, linked to repo context (frameworks, constraints)

Working docs:
- **`SOURCE-MAP.md`** — maps where research material lives per category (used for collation)

---

## Index

### [copy/](copy/) — Voice & Copy ✅ complete
- [exemplars.md](copy/exemplars.md) — Human-written only: gateway quickstart, primer, solutions, home
- [best-practice.md](copy/best-practice.md) — Voice principles, banned words/phrases, per-audience register, L0-L4 copy skills
- [patterns.md](copy/patterns.md) — 7 patterns: entity-led, fact-led, positive assertions, quantify-or-remove, majority-path-first, one-paragraph-one-job, no-forward-references

### [layout/](layout/) — Page Layout ✅ complete
- [exemplars.md](layout/exemplars.md) — 9 layouts: gateway quickstart (gold standard), blockchain contracts, setup options, join a pool, role, ecosystem, evolution, mental model, glossary
- [best-practice.md](layout/best-practice.md) — Page anatomy, page type templates, component selection, import organisation, multi-path pattern, Mintlify globals
- [patterns.md](layout/patterns.md) — 7 patterns: data-driven, component composition, badge colours, progressive disclosure, audience entry, verification log, divider spacing

### [ia-and-naming/](ia-and-naming/) — IA & Naming ✅ complete
- [exemplars.md](ia-and-naming/exemplars.md) — Section naming methodology, naming rules for ALL surfaces, orchestrators IA, heading rubric
- [best-practice.md](ia-and-naming/best-practice.md) — Label class taxonomy, naming methodology, conceptual layers, semantic validation, weak-label penalties, IA section flow
- [patterns.md](ia-and-naming/patterns.md) — 6 patterns: ownership-first IA, reader journey, data-driven IA, three naming fields, section group naming, diagnosis before generation

### [components/](components/) — Component Design ✅ patterns done
- [exemplars.md](components/exemplars.md) — ContractVerifier, SearchTable, SolutionItem + @aiDiscoverability
- [patterns.md](components/patterns.md) — 7 patterns: JSDoc header, prop signature, constants-inside-body, CSS variables, named exports, no React imports, category placement

### [scripts/](scripts/) — Script Design ✅ patterns done
- [exemplars.md](scripts/exemplars.md) — fetch-contract-addresses-v2.js
- [patterns.md](scripts/patterns.md) — 5 patterns: 11-tag JSDoc, type classification, config-driven, CLI flags, three-tier placement

### [prompts/](prompts/) — Prompt Design ✅ patterns done
- [exemplars.md](prompts/exemplars.md) — 3 gold standard prompts + "what makes a good prompt"
- [patterns.md](prompts/patterns.md) — 9 patterns: context block, diagnosis, multiple candidates, scoring rubric, penalties, structured output, problem statement, when-to-use, methodology
- [concern-audit-methodology.md](prompts/concern-audit-methodology.md) — 7-phase repeatable methodology for auditing any repo concern (actions, scripts, components, data, skills). Chains research → audit → design → build → reference integration. Candidate for `/audit-concern` skill.

### [plans/](plans/) — Design & Planning
- [exemplars.md](plans/exemplars.md) — 5 plans: plan-canonical, anti-scam SEO/AEO, component gov, script gov, pipeline architecture

### [data-patterns/](data-patterns/) — Data Architecture
- [exemplars.md](data-patterns/exemplars.md) — 4 patterns: contractAddressesData, configuration-flags, solutions data (aspirational), quickstart data (aspirational)

### [research/](research/) — Research Methodology
- [exemplars.md](research/exemplars.md) — 3 outputs: anti-scam SEO/AEO, mintlify constraints, placement reference

### [pipelines/](pipelines/) — Script Pipelines
- [exemplars.md](pipelines/exemplars.md) — 2 pipelines + anatomy template: contract addresses, changelogs

### [governance/](governance/) — Governance Frameworks
- [exemplars.md](governance/exemplars.md) — script-framework.md + component-framework-canonical.md

### [authoring/](authoring/) — Authoring Standards
- [exemplars.md](authoring/exemplars.md) — component composition template, page composition framework, thread skill, page authoring skill

### [skills/](skills/) — Skill Design
- [exemplars.md](skills/exemplars.md) — 6 skills: thread, diagnose, close, design, dispatch, propagate + "what makes a good skill"