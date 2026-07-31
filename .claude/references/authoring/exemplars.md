# Exemplary Authoring Standards

> Pointer + analysis. Do not copy files — emulate the patterns.
> These files define HOW to write components, pages, and skills. Read before authoring.

---

### Component Composition Template (Recently Verified)

**File:** `snippets/components/component-composition-template.mdx`

**Why it's good:** Verified and updated 2026-03-28. Three sections: ALWAYS DO, NEVER DO, and JSDOC HEADER STANDARD. The ALWAYS DO section covers modularity, accessibility (WCAG 2.1 AA), styles (CSS variables only), prop signatures (className, style, ...rest), complex prop shapes, exports (named only), and Mintlify platform globals. The NEVER DO section corrects common misconceptions with specific examples (imports, export-used file-scope constants, hardcoded data/colours). The forbidden tags list with reasons prevents tag drift.

**Key patterns:**
- ALWAYS DO / NEVER DO structure — unambiguous
- Accessibility section: keyboard access, semantic HTML, aria-labels, prefers-reduced-motion, scrollable regions
- Style rules: CSS variables only, named const before return, spread user style AFTER internal defaults
- Prop signature standard: className="", style={}, ...rest always last
- Complex prop shapes: TypeScript-like interface comment above @param
- Import correction: components CAN import other components, but MDX pages should remain the owner of shared data/constants used in page composition
- Export-used constants: in MDX-facing JSX, keep them inside the function body or move them into a non-component helper module (discovered bug 2026-03-28)
- Forbidden tags list: 12 removed tags with reasons (prevents re-introduction)
- Full JSDoc tag reference with values, descriptions, and decision trees

**Watch out:** This is a template/standard file, not a component. It lives in `snippets/components/` alongside real components. Do not import it.

---

### Page Composition Framework (Start of Template)

**File:** `snippets/templates/pages/page-composition-framework.mdx`

**Why it's good:** Defines the anatomy of a page: Header → Introduction → Body → Footer. Each section specifies what elements it contains, what components to use, and content rules (DO/DON'T). The heading rules are exceptionally specific: "Under 3 words", "No questions", "No question frame words", "No numbers", "No comparators" with ✘/✔ examples.

**Key patterns:**
- Page anatomy: Header → Introduction → Body → Footer
- Import organisation: COMPONENT IMPORTS → DATA IMPORTS → MDX PAGE IMPORTS → MDX COMPOSABLE IMPORTS
- Header CTA options enumerated: definition/value prop, clarity callout, CTA card, code start, mental model, page help
- Heading rules with ✘/✔ examples:
  - ✘ How Pools Work → ✔ Pool Mechanics
  - ✘ What You Earn → ✔ Rewards, Incentives
  - ✘ Three Setup Paths → ✔ Deployment Types
  - ✘ The Two Workload Types → ✔ AI Runtime Pipelines
- Footer: Related Pages pattern with Columns + Card
- Page taxonomy guide: max one major layout element per page

**Watch out:** This is a work-in-progress template ("start of a template"). Some import examples use incorrect syntax (quoted imports). The content rules and heading examples are the most valuable parts. The template structure may evolve.

---

### Thread Skill (Best-Structured Skill)

**File:** `ai-tools/ai-skills/thread/SKILL.md`

**Why it's good:** Mode detection (START vs STATUS) before any action. Step-by-step with clear triggers and outputs. Anti-loop discipline (Step 6): after 2 failed attempts, STOP and propose a different approach. Test log at the bottom tracks real usage with failures noted.

**Key patterns:**
- YAML frontmatter: name, description, metadata (version, category, status)
- Mode detection as Step 0 — determines behaviour before any work
- Step-by-step with numbered phases
- Phase transition protocol: restate outcome, confirm before proceeding
- Backlog capture: log tangent, acknowledge, continue — don't chase or ignore
- Drift detection: after 3+ actions without outcome reference, check in
- Anti-loop discipline: 2 failures → STOP → root-cause → different approach
- Session close template: finalisation report structure
- Test log: date, what it was used on, what worked, what didn't, what changed
- Known limitations documented honestly

**Watch out:** This skill is for session management. When writing domain-specific skills, the mode detection + step structure + test log pattern applies. The session-close template is specific to the thread skill.

---

### Page Authoring Skill

**File:** `ai-tools/ai-skills/page-authoring/SKILL.md`

**Why it's good:** The canonical skill for writing MDX pages. Contains voice rules, component selection guidance, and Mintlify constraint reminders. Read this before writing any page — it integrates the component standards, page composition framework, and content rules into a single operational reference.

**Key patterns:**
- Pre-flight checks before writing
- Component selection guidance: when to use each component type
- Voice rules integrated with page structure
- Mintlify constraints as reminders (links to canonical reference)
- Review checklist for post-authoring verification

**Watch out:** This skill references other canonical documents. Always read the referenced documents — do not rely solely on the skill's summaries.
