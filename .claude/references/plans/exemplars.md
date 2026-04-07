# Exemplary Plans

> Pointer + analysis. Do not copy files — emulate the patterns.

---

### Content Writing Pipeline — Plan Canonical (Gold Standard)

**File:** `workspace/plan/active/CONTENT-WRITING/plan-canonical.md`

**Why it's good:** This is the most mature plan in the repo. It opens with a corrected state snapshot verified by 5 audit agents against actual repo state — not assumed state. The "Product-Level Findings" section is exceptional: it critiques the plan's own output, identifying what it will NOT produce (no feedback loop, no reader journey checkpoint, untested Phase 1 outputs). Plans that interrogate themselves catch gaps before execution.

**Key patterns:**
- Corrected state snapshot with checkmarks (Complete / Missing / Structural Issues) — verified, not assumed
- Product-level self-critique section that names what the plan will fail to deliver
- Human decisions table with explicit "blocks Phase X" dependencies
- Clear scope boundary: "Not in scope now" stated up front
- Outcome test: "Before executing any phase, ask: if every task on this list is completed, does the stated outcome actually get achieved?"
- Design-canonical vs plan relationship explicitly documented — they are not the same document

**Watch out:** This plan is very large. When emulating, keep the structure but scope tighter — not every plan needs 12 phases.

---

### Anti-Scam SEO/AEO Strategy (Gold Standard Plan)

**File:** `workspace/thread-outputs/research/anti-scam-seo-aeo-strategy.md`

**Why it's good:** Classified as research but functions as a gold standard plan. Opens with a current state audit (what exists, what's missing), then builds a keyword strategy, content multiplication model, technical SEO levers, AEO strategy, and implementation priority matrix. Every recommendation is tied to a specific gap found in the audit. The "Critical gaps" list is numbered and actionable — not a wish list.

**Key patterns:**
- Current state audit table: Asset / Path / Status — shows exactly what exists before proposing anything
- Critical gaps as numbered list with specific consequences ("AI answer engines indexing your docs cannot find contract addresses")
- Keyword strategy tied to target pages — not floating keywords
- Implementation priority matrix at the end — not buried in prose
- Hub & spoke content model for SEO multiplication
- Structured data / schema markup recommendations with concrete examples

**Watch out:** This is a strategy doc, not an execution plan. It recommends but does not phase or dependency-order the work. When using this as a plan template, add phasing and gates.

---

### Component Governance Plan

**File:** `workspace/plan/active/COMPONENT-GOVERNANCE/plan.md`

**Why it's good:** Exemplary workflow protocol section. Branch strategy, worktree usage, import tracking protocol (5-step sequence before any file move), and human verification gates are all documented before the first task. The taxonomy section uses decision-rule questions ("Is it a single visual atom?") rather than descriptions.

**Key patterns:**
- Workflow protocol section before any tasks: branch, worktree, merge, deletion, sync policies
- Import tracking protocol: 5-step sequence (scan → identify → update → grep → move)
- Human verification gates: explicit "no task auto-advances without sign-off"
- Decision-rule questions for taxonomy placement
- Current state section shows exact folder structure with counts and issues

**Watch out:** Task list is very granular (20+ items). For smaller plans, group by phase rather than individual file moves.

---

### Script Governance Plan

**File:** `workspace/plan/active/SCRIPT-GOVERNANCE/plan.md`

**Why it's good:** Clean problem statement with numbers (1,599-line pre-commit hook, ~70 flat scripts, 3 overlapping grammar scripts). The three-tier taxonomy model (type / concern / niche) is explained with classification tests that prevent mis-filing. "Parallel work — not in scope but noted" section explicitly draws boundaries without losing context.

**Key patterns:**
- Problem statement with specific numbers — quantifies the mess before proposing structure
- Classification test: "If a script does not spawn other scripts, it is NOT a dispatch"
- Parallel work section: acknowledges related work without absorbing it into scope
- Future work section: flags things for later without pretending they don't exist
- Index/catalog policy: explicit rule about what never runs in pre-commit

**Watch out:** The taxonomy model is well-designed but the plan itself was never fully completed. Use as a taxonomy/structure reference, not as an execution template.

---

### Contracts Changelog Pipeline Architecture

**File:** `workspace/plan/active/CONTRACTS-CHANGELOG-PIPELINE/architecture.md`

**Why it's good:** Architecture doc with a mermaid diagram showing four layers (Config → Pipeline → Data → Display). The design goal is stated as a composability test: "adding a new changelog = one config entry + one page (no script changes)". Layer responsibilities are tabled with file, purpose, and location. This is how to design a pipeline that scales.

**Key patterns:**
- Design goal stated as a composability test — what should be true when the design is correct
- Four-layer architecture: Config → Pipeline → Data → Display
- Mermaid diagram showing data flow between layers
- Layer responsibilities table: file / purpose / location
- Explicit separation: config never changes for display changes, scripts never change for new entries

**Watch out:** This architecture was designed but not fully implemented. The contract addresses pipeline implements most of it; the changelog pipeline partially. Use as a design reference for new pipelines.