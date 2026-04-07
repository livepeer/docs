# Feedback Loop — Post-Tab Completion

> Runs AFTER completing all pages for a tab through Phases 00-08
> Purpose: Capture what was learned and propagate corrections to frameworks

---

## When to run

After the final page for a tab passes Phase 08 sign-off.

## Process

### Step 1: Collect corrections made during Phases 06-08

Review every page that was written/rewritten for this tab. Document:

1. **Voice violations found and fixed** — what patterns did the content pass miss?
2. **Terminology resolved** — any new terms locked, any deprecated terms found in content?
3. **Structural patterns discovered** — any new anti-patterns? Any new good patterns?
4. **Exemplar candidates** — did any page come out exceptionally well? Could it join the exemplar pack?
5. **Prompt gaps** — did the content-pass prompt miss anything? Did it produce a pattern that needed manual correction?

### Step 2: Update canonical files

For each correction, determine which canonical file needs updating:

| Correction type | File to update |
|---|---|
| New banned word/phrase discovered | `tools/lib/copy-governance/banned-words.txt` or `banned-phrases.txt` |
| New voice rule for an audience | `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` |
| New terminology locked | Tab's terminology lock + glossary |
| New structural anti-pattern | `_MY_PROCESS/canonical-content-copy-and-review-framework.md` |
| New exemplar page | `_MY_PROCESS/EXEMPLARS/` |
| New quality gate check needed | `_MY_PROCESS/tools/page-quality-gate.sh` |

### Step 3: Record learnings

Create: `_MY_PROCESS/FEEDBACK/{tab}-learnings.md`

```markdown
# {Tab} — Pipeline Learnings

**Date**: {date}
**Pages processed**: {count}
**Quality gate pass rate**: {first-pass pass rate}

## Voice violations caught
- {violation 1}: found in {page}, pattern: {description}
- {violation 2}: ...

## Terminology resolved
- {term}: locked as {definition}, was previously {old usage}

## Structural patterns
- {pattern}: discovered in {page}, now documented in {location}

## Prompt improvements needed
- {improvement 1}: content-pass.md should {change}

## Frameworks updated
- {file}: {what changed and why}

## Exemplar candidates
- {page path}: could be exemplar for {page type} because {why}
```

### Step 4: Prepare for next tab

Before starting the next tab:
1. Load this tab's `{tab}-learnings.md` into the Phase 06 content pass context
2. Verify all framework updates have been applied
3. Re-run page-quality-gate.sh on one previous gold page to confirm updates didn't break anything

## Output

- `FEEDBACK/{tab}-learnings.md` — learnings record
- Updated canonical files (voice rules, banned lists, exemplars, etc.)
- Confirmation that next tab benefits from this tab's corrections

## The system improvement loop

```
Tab A → write pages → find issues → fix pages → capture learnings → update frameworks
                                                                          ↓
Tab B → load learnings → write pages → fewer issues → capture learnings → update frameworks
                                                                               ↓
Tab C → load learnings → write pages → even fewer issues → ...
```

Each tab starts at a HIGHER quality baseline than the previous one.
