# Orchestrators Tab — 3 Options for Autonomous Content Production

> **Goal**: Systematically upgrade every page in the orchestrators tab to publication quality
> with minimal human bottlenecks, using the governance system already built.

---

## Option A: "Assembly Line" — Sequential Section Sweeps

### Model
One section at a time, start-to-finish, using the existing 4-phase content pipeline.

### Process

```
For each section (Start Here → Concepts → Quickstart → Setup → Guides → Resources):

  Phase 1: VERIFY    — Resolve all P0 TODO/REVIEW items (human + AI research)
  Phase 2: REWRITE   — Apply voice rules, banned-word sweep, paragraph discipline
  Phase 3: QUANTIFY  — Fill every gap where a number should exist (from Explorer, go-livepeer, protocol)
  Phase 4: CONNECT   — Verify all cross-references, add missing forward/backward links
  Phase 5: QA        — Run quality gates (spelling, MDX, links, frontmatter, banned-word check)
```

### Input Per Section
1. `01-CORE-NEEDS-AND-STANDARDS.md` (this repo) — voice rules, standards
2. `02-CRITICAL-ANALYSIS.md` (this repo) — page-specific issues list
3. The copied page files in `/ORCHS/<section>/`
4. Context packs from `CONTENT-WRITING/context-packs/orchestrators-*.md`

### Prompt Template (Per Page)

```markdown
You are rewriting an orchestrator docs page.

INPUTS:
- Current page: [paste full .mdx]
- Issues for this page: [paste from 02-CRITICAL-ANALYSIS.md]
- Voice rules: [paste Section 4 from 01-CORE-NEEDS-AND-STANDARDS.md]
- Terminology lock: [paste Section 9]

RULES:
1. Fix every issue listed. Do not skip any.
2. Replace every vague claim with a number or remove it.
3. Every paragraph: one job. Lead sentence = fact. Final sentence = fact/number/next step.
4. UK English. No banned words. No banned phrases.
5. Preserve all frontmatter fields. Update `status: review`.
6. Preserve all component imports and JSX structure.
7. Do NOT add content you cannot verify — flag with `{/* TODO: [what needs verification] */}` instead.
8. Output the complete rewritten .mdx file.

OUTPUT: Full .mdx file ready for human review.
```

### Strengths
- Simple, predictable, easy to track progress
- Each section gets full attention before moving on
- Human review happens at natural section boundaries
- Uses existing pipeline phases directly

### Weaknesses
- Serial — slow if one section blocks (e.g., waiting for verified data)
- No cross-section consistency check until all sections are done
- Human bottleneck on P0 verification items

### Estimated Effort
- **AI passes**: ~73 page rewrites × 1 prompt each = ~73 prompts
- **Human review**: 7 section reviews (batch by section)
- **Calendar time**: 2-3 weeks with daily sessions

---

## Option B: "Parallel Tracks" — Issue-Type Sweeps Across All Pages

### Model
Instead of section-by-section, sweep the entire tab for one issue type at a time.

### Process

```
Track 1: STUB RESOLUTION   — Write or remove the 4 stub pages
Track 2: TODO CLEARANCE     — Resolve all 18 pages with TODO/REVIEW flags (requires human/research)
Track 3: BANNED-WORD SWEEP  — Automated find-and-replace across all 73 pages
Track 4: NUMBERS PASS       — Fill quantitative gaps (earnings, costs, thresholds) across all pages
Track 5: VOICE REWRITE      — Rewrite weak paragraphs (voice < 8/10) across all pages
Track 6: CROSS-REF AUDIT    — Verify all internal links resolve, add missing connections
Track 7: QA GATE            — Run full quality checks on every page
```

### Prompt Template (Per Track)

**Track 3 example (Banned-Word Sweep):**
```markdown
You are performing a banned-word and banned-phrase sweep on orchestrator docs.

INPUT: [paste full .mdx file]

BANNED WORDS: effectively, essentially, basically, meaningful, significant, various,
several, obviously, clearly, simply, just, easy

BANNED PHRASES: "This section covers", "This page [verb]", "Understanding X is essential",
"It is important to note", "can generate", "may produce"

BANNED CONSTRUCTIONS: "not [X]" in value statements, "if [condition]" in body prose,
"can/may [verb]" in value claims

RULES:
1. Find every violation.
2. Rewrite the sentence to remove the violation while preserving meaning.
3. Do not change sentences that have no violations.
4. Output the complete file with all fixes applied.
5. List all changes made at the end as a changelog.
```

**Track 4 example (Numbers Pass):**
```markdown
You are filling quantitative gaps in an orchestrator docs page.

INPUT: [paste full .mdx file]
ISSUES: [paste relevant gaps from 02-CRITICAL-ANALYSIS.md]

RULES:
1. Every claim that should have a number must get one.
2. Source numbers from: Livepeer Explorer, go-livepeer release notes, protocol documentation.
3. If you cannot verify a number, insert: `{/* TODO: Verify [claim] against [source] */}`
4. Format: ETH decimal, LPT plain, VRAM "X GB", time "~Y minutes"
5. Do not invent numbers. Only use verifiable data.
6. Output the complete file.
```

### Strengths
- **Tracks 1-3 can run in parallel** — no dependencies between stub resolution, TODO clearance, and banned-word sweep
- Consistent treatment: every page gets the same sweep (no section-by-section drift)
- Banned-word sweep (Track 3) is fully automatable — no human needed
- Clear separation of AI-solvable (Tracks 3, 5, 6) vs human-required (Tracks 1, 2, 4)

### Weaknesses
- Multiple passes over the same file creates merge complexity
- Harder to track "is page X done?" (answer depends on which tracks have passed over it)
- Voice rewrite (Track 5) may conflict with Numbers pass (Track 4) if run in parallel

### Estimated Effort
- **AI passes**: ~73 pages × 4 automated tracks = ~292 prompts (but each is narrower/faster)
- **Human review**: Per-track review (7 track reviews instead of 7 section reviews)
- **Calendar time**: 1-2 weeks — Tracks 1-3 run day 1-3, Tracks 4-5 days 3-7, Tracks 6-7 days 7-10

---

## Option C: "Page Scorecard" — Autonomous Quality Loop

### Model
Every page gets a machine-generated scorecard. Pages below threshold enter an autonomous rewrite loop.
The loop runs until the page passes or hits a human-required blocker.

### Process

```
┌─────────────────────────────────────────────────────┐
│  For each page:                                      │
│                                                      │
│  1. SCORE    — Generate scorecard (voice, numbers,   │
│                structure, gaps, cross-refs)           │
│  2. DECIDE   — Score ≥ 8/10 on all dimensions?       │
│                YES → mark DONE                        │
│                NO  → continue                         │
│  3. REWRITE  — Fix lowest-scoring dimension           │
│  4. RE-SCORE — Generate new scorecard                 │
│  5. LOOP     — Back to step 2 (max 3 iterations)     │
│  6. HUMAN    — If still < 8/10 after 3 loops,        │
│                flag for human review with scorecard   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Scorecard Template

```markdown
## Page Scorecard: [filename]

| Dimension | Score | Evidence | Fix Required |
|-----------|-------|----------|--------------|
| Voice compliance | X/10 | [specific violations found] | [rewrite needed Y/N] |
| Quantitative completeness | X/10 | [gaps found] | [numbers needed Y/N] |
| Structural correctness | X/10 | [layout issues] | [restructure needed Y/N] |
| Content gaps | X/10 | [missing content] | [additions needed Y/N] |
| Cross-references | X/10 | [broken/missing links] | [link fixes needed Y/N] |
| Frontmatter | X/10 | [missing fields] | [update needed Y/N] |
| Publication readiness | X/10 | [TODOs, REVIEW comments] | [resolution needed Y/N] |

**Overall**: X/10
**Lowest dimension**: [name]
**Action**: [DONE | REWRITE dimension X | HUMAN REVIEW]
```

### Autonomous Rewrite Prompt (Per Iteration)

```markdown
You are improving an orchestrator docs page. This is iteration [N] of max 3.

CURRENT PAGE: [paste .mdx]
PREVIOUS SCORECARD: [paste scorecard]
LOWEST DIMENSION: [e.g., "Quantitative completeness: 5/10"]
VOICE RULES: [paste from 01-CORE-NEEDS-AND-STANDARDS.md Section 4]

FOCUS: Improve the lowest-scoring dimension by at least 2 points.

RULES:
1. Fix the specific issues listed in the scorecard's "Evidence" column.
2. Do not regress other dimensions.
3. If you cannot fix an issue without human input, mark it:
   `{/* HUMAN: [what needs verification and why] */}`
4. Output the complete rewritten .mdx file.
5. Then output a new scorecard for the rewritten version.
```

### Strengths
- **Most autonomous** — pages that are already good (8+/10) pass through with no work
- **Self-correcting** — scorecard catches regressions between iterations
- **Prioritises worst pages** — effort concentrates where it's most needed
- **Clear human escalation** — human only reviews pages that failed 3 auto-passes
- **Measurable** — every page has a before/after score

### Weaknesses
- Scorecard quality depends on AI judgment — may miss subtle voice issues
- 3 iterations × 73 pages = up to 219 scoring + 219 rewrite prompts (worst case)
- Risk of "teaching to the test" — page passes scorecard but misses spirit of the voice
- Requires well-calibrated scoring rubric (who validates the scorer?)

### Estimated Effort
- **AI passes**: Best case 73 scores + ~30 rewrites; worst case 219 scores + 219 rewrites
- **Human review**: Only pages that fail 3 loops (~15-20 estimated, mostly Resources section)
- **Calendar time**: 1-2 weeks — scoring is fast; rewrites are the bottleneck

---

## Comparison Matrix

| Criterion | Option A: Assembly Line | Option B: Parallel Tracks | Option C: Scorecard Loop |
|-----------|------------------------|--------------------------|-------------------------|
| **Autonomy** | Low — human reviews each section | Medium — some tracks are fully automated | High — human only for failures |
| **Speed** | 2-3 weeks | 1-2 weeks | 1-2 weeks |
| **Consistency** | Good within section, drift across sections | Excellent — same sweep hits all pages | Good — scorecard standardises |
| **Quality ceiling** | High — full human attention per section | High — but merge complexity risk | Medium-High — depends on scorer calibration |
| **Complexity** | Low | Medium (merge management) | Medium (scoring rubric) |
| **Best for** | Small team, careful approach | Larger team, parallel capacity | Solo operator, maximum automation |
| **Risk** | Slow; serial bottleneck | File merge conflicts between tracks | Score inflation; "teaching to test" |

---

## Recommendation

**Use Option C (Scorecard Loop) as the primary engine, with Option B's Track structure for the initial sweep.**

### Hybrid Approach

```
Week 1: Run Option B Tracks 1-3 in parallel
  - Track 1: Human resolves stubs (4 pages)
  - Track 2: Human + AI resolves TODOs (18 pages)
  - Track 3: AI runs banned-word sweep (all 73 pages) — fully automated

Week 2: Run Option C Scorecard Loop on all pages
  - Score every page
  - Auto-rewrite pages scoring < 8/10 (up to 3 iterations)
  - Flag failures for human review

Week 3: Human review of flagged pages + final cross-reference audit
  - Review ~15-20 human-escalated pages
  - Run full QA gate on entire tab
  - Final publication readiness check
```

### Why This Hybrid Works
1. **Tracks 1-3 clear the mechanical debt** (stubs, TODOs, banned words) that would otherwise pollute every scorecard iteration
2. **Scorecard loop handles the judgment calls** (voice quality, numbers, structure) that benefit from iterative improvement
3. **Human effort is concentrated** where it matters: stub content, data verification, and the ~20% of pages that resist automation

### Success Criteria
- Every page scores ≥ 8/10 on all 7 scorecard dimensions
- Zero P0 blockers remaining
- Zero TODO/REVIEW comments in published content
- All cross-references resolve
- Quality gate passes clean

---

## Appendix: Files in ORCHS Working Folder

All 118 orchestrator .mdx files have been copied to:
```
/workspace/plan/active/ORCHS/
├── portal.mdx
├── navigator.mdx
├── index.mdx
├── concepts/
├── quickstart/
├── setup/
├── guides/
│   ├── operator-considerations/
│   ├── deployment-details/
│   ├── ai-and-job-workloads/
│   ├── staking-and-rewards/
│   ├── payments-and-pricing/
│   ├── config-and-optimisation/
│   ├── monitoring-and-tooling/
│   ├── advanced-operations/
│   ├── roadmap-and-funding/
│   └── tutorials/
└── resources/
    ├── technical/
    └── compendium/
```

**No files in `/v2/orchestrators/` have been modified. All edits happen in `/workspace/plan/active/ORCHS/` only.**
