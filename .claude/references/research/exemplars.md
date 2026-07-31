# Exemplary Research Outputs

> Pointer + analysis. Do not copy files — emulate the patterns.
> Good research synthesises and recommends — it does not just list facts.

---

### Anti-Scam SEO/AEO Strategy (Gold Standard)

**File:** `workspace/thread-outputs/research/anti-scam-seo-aeo-strategy.md`

**Why it's good:** Also referenced in `plans.md` as a gold standard plan. As research, it demonstrates the full arc: current state audit with evidence table → gap identification with consequences → keyword strategy with target pages → content model → technical levers → implementation priority matrix. Every recommendation traces back to a specific gap found in the audit. The "Critical gaps" section names 8 specific deficiencies with actionable consequences.

**Key patterns:**
- Evidence-first: audit table shows what exists (Asset / Path / Status) before proposing anything
- Gap → Consequence framing: "llms.txt is blind to contracts" → "AI answer engines cannot find contract addresses"
- Keyword strategy tied to target pages — not floating keywords
- Hub & spoke content model: one canonical page, many supporting pages that link to it
- Technical SEO levers as specific, implementable items (structured data, robots.txt, FAQ schema)
- Implementation priority matrix: what to do first, what to defer
- Actionable throughout — no section is just informational

**Watch out:** This is research AND a plan. When writing pure research (no execution plan needed), the priority matrix section can be replaced with a recommendations section.

---

### Mintlify Constraints Research Packet (Gold Standard)

**File:** `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/thread-outputs/research/mintlify-constraints-reference.md`

**Operational successor:** `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`

**Why it's good:** "Top mistakes Claude makes" framing — directly addresses the consumer (Claude) and the failure modes. Each constraint has WRONG/RIGHT code examples with source evidence (Mintlify docs, repo evidence with file counts). The nuance sections are exceptional: "Relative imports DO resolve... We prefer root-absolute paths because they are [4 reasons]". This distinguishes between "doesn't work" and "works but we prefer not to". It is still the best evidence packet for how the repo discovered and verified these Mintlify behaviours.

**Key patterns:**
- Consumer-first framing: "Top mistakes Claude makes" — names the reader and the failure
- WRONG/RIGHT code blocks for every constraint
- Source evidence: "Repo evidence: 14 JSX files, 47 hook usages, zero React imports"
- Nuance sections: what works vs what we prefer, with reasoning
- Cross-file import rules: what works in JSX-to-JSX vs what fails in JSX-to-data
- Verified date and source list in the header

**Watch out:** Treat this as the research packet, not the live operational contract. The canonical operational source is `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`.

---

### Component/Script Placement Reference

**File:** `workspace/thread-outputs/research/component-script-placement-reference.md`

**Why it's good:** Decision-tree format — "ask these questions in order" for component placement, three-tier model for script placement. Synthesises two governance frameworks (component + script) into a single quick-reference. Placement path templates show the exact folder structure. Common mistakes table prevents the most frequent errors.

**Key patterns:**
- Decision-tree questions in order (first match wins)
- Sub-niche enumeration by category — complete reference
- Placement path template: `snippets/components/<category>/<subniche>/ComponentName.jsx`
- Common mistakes table: Wrong / Right / Why
- Required JSDoc header summary (7-tag and 11-tag)
- Two systems (components + scripts) in one reference — reduces context-switching

**Watch out:** This is a synthesis/quick-reference, not the source of truth. The canonical frameworks are `component-framework-canonical.md` and `script-framework.md`. If they diverge, the frameworks win.

---

### GitHub Actions Repo Analysis (Gold Standard — Concern Audit)

**File:** `workspace/thread-outputs/research/actions-repo-analysis-report.md`
**Companion:** `workspace/thread-outputs/research/actions-best-practices-report.md`

**Why it's good:** Best repo analysis in the repo. Follows concern-audit methodology: inventory → tiered gold-standard identification → P0 bugs table → systematic gap analysis (7 categories) → classification by type/concern/pipeline-tag → consolidation candidates → risk matrix → framework alignment gaps → prior audit cross-reference → actionable recommendations.

**Key patterns:**
- Tiered gold-standard identification (Exemplary / Well-Structured / Adequate)
- P0 bugs separated from analysis — immediate action items first
- Classification mapping to existing taxonomy (type × concern × pipeline-tag)
- Risk assessment: High / Medium / Low with affected workflows and impact
- Framework alignment table: concept / current state / gap

**Watch out:** Point-in-time analysis. Verify P0 items against current files before acting.
