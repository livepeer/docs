---
name: rubric-static-review
version: "1.0"
description: >-
  Static-only rubric-based code review scored 0-100 by category with concrete code evidence and prioritized recommendations. Use when asked to review a repository without running build, test, or runtime commands.
invoke_when:
  - "review this repository without running tests"
  - "score the repo with a static rubric"
  - "perform a static-only code review"
---

SKILL: Rubric-Based Static Code Review (0–100)

Goal
Perform a static-only code review (NO build/test/run). Score the project across 5–10 categories (0–100 each) using a consistent rubric. Evaluate each category independently and thoroughly, citing concrete evidence from the codebase for any major claim.

Constraints
- Static review only: do not assume runtime behavior unless directly evidenced in code/config.
- Be explicit about uncertainty when evidence is missing.
- Prefer actionable, engineering-focused feedback over style nits.
- Use project context if present; otherwise infer cautiously from structure and dependencies.

Step 1 — Choose categories (5–10)
Select categories that best fit the repo. Common options include (but are not limited to):
- Architecture & boundaries (modularity, layering, coupling)
- Correctness & safety (error handling, edge cases, invariants)
- Security & auth (secrets handling, authZ/authN, input validation)
- Reliability & resilience (timeouts, retries, idempotency, failure modes)
- Performance & scalability (hot paths, caching, complexity, allocations)
- Data & persistence (schema discipline, migrations, consistency, integrity)
- Anti-cheat / abuse resistance (if applicable)
- Observability (logging, metrics, tracing, debugging ergonomics)
- Testing & quality gates (unit/integration, coverage signals, CI)
- Configuration & DevEx (local setup, env management, docs, tooling)
- Maintainability (DRY/OOP where relevant, readability, conventions)

Step 2 — Score each category (0–100)
For each category:
- Start at 50 (neutral baseline).
- Add points for strong evidence of good practice; subtract points for risks, gaps, or code smells.
- Explain the scoring with specific findings (files/modules/patterns) and severity.
- Calibrate the score:
  - 90–100: exemplary, low risk, well-instrumented and well-tested
  - 70–89: solid, a few meaningful gaps
  - 50–69: mixed, notable risks or missing fundamentals
  - 30–49: weak, systemic issues, likely to cause bugs/incidents
  - 0–29: critical, unsafe/unmaintainable, major redesign needed

Deliverable Format

A) Executive Scorecard (output first)
- List the chosen categories with their 0–100 scores.
- Include a 1–2 sentence summary of overall health and top risks.

B) Category Deep Dives (one section per category)
For each category, include:
1) Score + short rationale
2) What adds points (strengths)
3) What removes points (issues/risks)
4) Recommendations (prioritized)
   - Order: Critical → High → Medium → Low
   - Within each severity: Easy wins → Larger investments
   - For every recommendation:
     - Description (what to change)
     - Pros
     - Cons / tradeoffs
     - Suggested approach (practical next steps)

C) Cross-Cutting “Top Actions” Summary (end)
- Top 5–10 actions across the whole repo, prioritized.
- Identify quick wins (≤1 day), short projects (≤1 week), and strategic refactors (&gt;1 week).
- Call out any “must-fix before ship” items.

Tone & Rigor
- Be precise and concrete.
- Avoid generic advice; tie each point to observed code patterns.
- If a category isn’t applicable, replace it with a more relevant one rather than scoring it artificially.