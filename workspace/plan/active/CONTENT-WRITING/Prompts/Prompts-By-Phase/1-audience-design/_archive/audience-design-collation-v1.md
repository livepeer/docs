# Livepeer Docs — Audience Design Collation Prompt
## Prompt B · Multi-Run Synthesis · v1

**Your task**: Read all input run files listed in the Context Block. Synthesise them into one canonical audience design document using the rules below. Do not favour any single run — evaluate every element across all runs and apply the decision rules explicitly.

**No new reasoning.** Your job is synthesis and conflict resolution, not original design. Do not introduce claims, personas, sections, or jobs that do not appear in at least one input run. If something is worth adding, flag it — do not add it.

---

## Context Block

```
TAB: [tab slug — e.g. Orchestrators]
RUN FILES:
  - [path to run 1]
  - [path to run 2]
  - [path to run 3]
  - [path to run 4 — optional]
```

---

## Phase 1 — Inventory

Read all run files. For each run, extract and record:

1. **TERMINOLOGY_LOCK** — the full term list and any `[verify-against]` or `[verify-live]` flags
2. **Arriving question** — the single question the reader arrives with
3. **Personas** — name, entry vector, arriving with, wants to leave with, Vol/Depth/Impact scores, Total
4. **Primary persona** — which persona was designated primary
5. **Self-identification decision** — callout or dedicated disambiguation section, and the reasoning given
6. **Entry blockers** — what was identified and the section order consequence
7. **Jobs to be Done** — all jobs with their full format
8. **Section structure** — every section with all fields: reader question, job, purpose, pageType, entry state, exit state, lifecycleStage
9. **Persona path validation** — what structural blocks, knowledge gaps, or missing sections were found
10. **Addendum flags** — anything the run flagged as unclear, conflicting, or uncertain

Do not skip any run. Present the inventory as a compact comparison — not full quotes, but enough detail to apply the decision rules.

**Gate**: All runs inventoried before Phase 2 begins.

---

## Phase 2 — Terminology Lock Synthesis

### Step 2.1 — Build the canonical term set

For each term that appears in any run's TERMINOLOGY_LOCK:

1. **Appears in 3+ runs** → include in canonical lock; use the most precisely worded definition
2. **Appears in 2 runs** → include if grounded in the Product Context block; note as `[2-run consensus]`
3. **Appears in 1 run only** → exclude unless it is clearly required to cover a distinct participation path with no substitute; if excluded, note it as `[single-run: not included]`

### Step 2.2 — Resolve verification flags

For any term marked `[verify-against]` or `[verify-live]` in any run: carry the flag into the canonical lock regardless of whether all runs flagged it. A flag from one run is sufficient — absence of a flag in other runs does not mean the claim is verified.

### Step 2.3 — Conflicts and discrepancies

If two runs assign different definitions to the same term: note it as `[DEFINITION CONFLICT: {term} — run A says {X}, run B says {Y}]`. Do not pick one — flag it for human resolution. Do not include a contested definition in the canonical lock.

---

## Phase 3 — Arriving Question

Compare arriving questions across all runs.

- If all runs produced substantially the same question: use it (or the most precisely worded version)
- If runs diverged: identify the shared core, produce a synthesised question that captures it, and note what each run emphasised differently in the Collation Notes

---

## Phase 4 — Persona Synthesis

### Step 4.1 — Identify distinct persona archetypes

Group personas across all runs by underlying arriving state (not by name — names will vary). Each distinct arriving state + motivation combination is one archetype.

### Step 4.2 — Score each archetype

For each archetype:
- **Consensus score**: how many runs included this archetype (or a close equivalent)? 4 = unanimous, 3 = strong, 2 = moderate, 1 = single-run
- **Vol/Depth/Impact**: use the median score across runs that included it; if scores diverge significantly, note the range and use the lower value

### Step 4.3 — Canonical persona list

Include archetypes with consensus score ≥ 2. Single-run archetypes: include only if their consensus score is 1 AND at least one run gave them Impact=3 AND they represent a setup path with no overlap with existing archetypes. Otherwise exclude and note in Collation Notes.

**Canonical persona format** (same as audience design output):

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |

For each persona, use:
- **Name**: the most descriptive name across runs (not necessarily the most common)
- **Entry vector**: the most specific version across runs
- **Arriving with / Wants to leave with**: the most concrete version across runs
- **Scores**: consensus median

### Step 4.4 — Primary persona

If all runs agreed on the same primary persona: confirm it.
If runs disagreed: identify which archetype scored highest on Total across the canonical set. State the tie-breaking reasoning if needed.

### Step 4.5 — Self-identification decision

- If 3+ runs produced a dedicated disambiguation section: canonical decision is dedicated section
- If 2+ runs produced a routing callout: canonical decision is routing callout in the section named most consistently
- If runs split: note the split in Collation Notes and default to the dedicated disambiguation section (erring toward the stronger design)

### Step 4.6 — Entry blockers

Union of all blockers identified across all runs, deduplicated. If one run identified a blocker others missed, include it — absence of a flag in other runs does not mean the blocker doesn't exist.

---

## Phase 5 — Jobs to be Done Synthesis

### Step 5.1 — Group jobs by underlying need

Cluster jobs across all runs by the situation + outcome they address (ignore wording). Each distinct need is one canonical job.

### Step 5.2 — Select canonical wording

For each job:
- Situation: most specific version across runs
- Action: most concrete version across runs
- Outcome: most verifiable version across runs

### Step 5.3 — Coverage check

Canonical job set must cover: arrival jobs, active-use jobs, reference/return-visit jobs, and edge cases specific to this tab. If any category is missing, flag it in Collation Notes — do not invent a job.

---

## Phase 6 — Ideal Journey Synthesis

**Linear stages**: include a stage if it appears in 2+ runs. Merge near-duplicate stages. Use the most descriptive stage name and the most accurate lifecycleStage enum value across the runs that included it.

**On-demand categories**: union of all categories across runs, deduplicated. Include any category that appears in 2+ runs; note single-run categories in Collation Notes.

**Cross-tab routes**: union of all routes across all runs, deduplicated.

---

## Phase 7 — Section Structure Synthesis

This is the most important phase. Apply the rules below strictly.

### Step 7.1 — Identify structural consensus

For each section that appears across runs, group by function (what reader question it answers), not by name. Count how many runs included a section serving that function.

### Step 7.2 — Canonical section inclusion rule

- **3+ runs included it** → include in canonical structure
- **2 runs included it** → include if it serves a job not covered by any other section; otherwise merge into the most similar existing section and note the decision
- **1 run only** → exclude unless it is the only section covering a critical job for a primary or high-impact persona; flag as `[single-run section]` if included

### Step 7.3 — Select canonical field values per section

For each included section, across all runs that included it:
- **Reader question**: most specific version
- **Job**: the job reference shared by the most runs (if different runs named different jobs, use the job that best describes the actual function)
- **purpose**: if runs disagreed, use the value that most precisely matches the canonical enum definition for what the section does
- **pageType**: if runs disagreed, use `navigation` for routing sections, `instruction` for step-by-step sections, `concept` for explanatory sections, `guide` for decision/operational sections — apply the canonical definitions strictly
- **Entry state**: most specific version; must be a concrete state, not a role label
- **Exit state**: most concrete version; must be an action or decision — if any run used "understands X", replace it with the concrete equivalent from another run or derive it from the exit state description
- **lifecycleStage**: most accurate enum value; if runs disagreed, apply the canonical definition

### Step 7.4 — Section load flag

If any run flagged a section as `[⚠ Design flag: may need to split]`, carry that flag into the canonical section table regardless of whether all runs flagged it.

### Step 7.5 — Section count

If the canonical set falls outside 8–12: note it in Collation Notes with reasoning. Do not force sections in or out purely to hit the range.

### Step 7.6 — Disambiguation section

The canonical structure must have a disambiguation section as S1 if the self-identification decision (Phase 4.5) determined one is required. It must have `purpose: orient` and `pageType: navigation`. If any run produced a different pageType for the disambiguation section, override it.

---

## Phase 8 — Persona Path Validation

For each canonical persona, trace their path through the canonical section structure.

Use the union of structural blocks, knowledge gaps, and missing sections identified across all runs. If one run identified a gap others missed, include it.

If a gap was identified in a single run only, prefix it with `[single-run flag — verify]`.

All personas must have an unblocked path through the canonical section structure. If a gap exists that cannot be resolved within the existing section set, flag it in Collation Notes as requiring human resolution before this output is used as Phase 2 input.

---

## Quality Gates

Verify before producing output:

- [ ] Every section has all fields populated (no blanks inherited from a single run)
- [ ] No exit state uses "understands" — all are concrete actions or decisions
- [ ] All enum values are canonical — no invented tokens
- [ ] Disambiguation section (if required) has `purpose: orient` and `pageType: navigation`
- [ ] Every `[verify-against]` and `[verify-live]` flag from any run is carried through
- [ ] Every `[⚠ Design flag]` from any run is carried through
- [ ] Collation Notes records every conflict, exclusion, and single-run flag
- [ ] All personas have unblocked paths

---

## Output

Produce two documents.

---

### Document 1 — Canonical Audience Design

**Output filename**: `canonical-[tab-slug]-audience-design.md`

```markdown
# [TAB] — Canonical Audience Design

**Tab**: [TAB]
**Audience**: [AUDIENCE token]
**Synthesised from**: [list run file names]
**Synthesised**: [date]
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|

---

## Arriving Question

> "[canonical question]"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|

**Primary persona**: [name — reasoning if non-obvious]
**Self-identification**: [decision — callout / dedicated section — reasoning]
**Entry blockers**: [union list with section order consequences]

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|

**On-demand**:
- [category 1]

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|

---

## ⏸ Checkpoint

- [ ] TERMINOLOGY_LOCK: all verify flags carried through from any run?
- [ ] Arriving question specific — not a topic?
- [ ] Personas: consensus ≥ 2 for all included; single-run archetypes justified if included?
- [ ] Primary persona confirmed across runs or tie-broken with reasoning?
- [ ] Self-identification decision: 3+ run consensus or defaulted to dedicated section?
- [ ] Entry blockers: union of all runs — none dropped?
- [ ] Jobs: full coverage of arrival, active-use, return-visit, and edge cases?
- [ ] Every section: all fields populated, no "understands" exit states, canonical enum values?
- [ ] Design flags and verify flags: carried through from any run?
- [ ] All personas unblocked?
```

---

### Document 2 — Collation Notes

**Output filename**: `collation-notes-[tab-slug].md`

```markdown
# [TAB] — Collation Notes

**Synthesised from**: [list run file names]
**Date**: [date]

---

## Terminology Conflicts

List any `[DEFINITION CONFLICT]` flags. Do not resolve — flag for human decision.

---

## Excluded Personas

For each archetype excluded (consensus < 2 and not meeting the single-run exception):
- **[Archetype name]** — appeared in [run(s)]; excluded because [reason]. If relevant: *"The concern this persona raises is covered within [section]."*

---

## Excluded Sections

For each section excluded:
- **[Section function]** — appeared in [run(s)]; excluded because [reason]. If relevant: *"Its function is served by [section]."*

---

## Structural Disagreements

Note any significant disagreement in section structure that was resolved — what the runs said and what the canonical decision was.

---

## Single-Run Flags

Any element included despite appearing in only one run — with justification.

---

## Open Items (require human resolution before Phase 2)

Anything that cannot be resolved by the collation rules and must be decided by a human before this canonical document is used as Phase 2 input.

---

## Run Quality Notes

Brief notes on each run's distinctive strengths or weaknesses — useful for calibrating which models to use for future tabs.
```

---

## Output directory

Place both files in: `testing/Tabs/[tab-slug]/collated/`
