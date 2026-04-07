# Phase 06: Content Writing — Copy, Voice & Terminology

> Human role: None (automated)
> Automated: Content generation, voice enforcement, terminology checking

---

## Inputs required

- Page brief from Phase 04
- Research pack from Phase 02
- Approved personas from Phase 00
- Relevant exemplar from `_MY_PROCESS/EXEMPLARS/`
- Voice rules: `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`

## Process

### Step 1: Select exemplar

Based on pageType, load the matching exemplar:

| pageType | Exemplar |
|---|---|
| concept | `EXEMPLARS/concept-exemplar.md` |
| instruction / guide (setup) | `EXEMPLARS/instruction-exemplar.md` |
| guide (operational) | `EXEMPLARS/guide-exemplar.md` |
| guide (evaluation/decision) | `EXEMPLARS/guide-decision-exemplar.md` |

Also load `EXEMPLARS/anti-exemplar.md` to understand what to avoid.

### Step 2: Run content pass

**Tool**: `content-pipeline-pass-a` skill or `content-pass.md` prompt
**Location**: `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md`
**Mode**: WRITE (new page) or REWRITE (existing page) or REVIEW (existing page, check only)

Load context:
- Page brief (entry/exit state, sections, information types)
- Research pack (source material, facts)
- Voice rules (universal + audience-specific)
- Exemplar for page type
- Previous tab's feedback learnings (if exists)

### Step 3: Run quality gate

**Tool**: `_MY_PROCESS/tools/page-quality-gate.sh`

```bash
./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/{tab}/{section}/{page}.mdx
```

Must return: **PASS (10/10 checks)**

If FAIL → fix violations and re-run. Do not proceed with failures.

### Step 4: Run UK English check

**Tool**: `style-and-language-homogenizer-en-gb` skill
**Script**: `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`

Fix any US English (-ize, -or, em-dashes).

### Step 5: Run copy quality check

**Tool**: `docs-copy` skill
**Location**: `ai-tools/ai-skills/docs-copy/SKILL.md`

Review against L0-L4 layers:
- L0: Value proposition clear
- L1: Persona routing correct
- L2: Structure rules followed
- L3: Copy rules followed (paragraph discipline, opening order)
- L4: Review gate passed

## Output

- Draft page markdown (content-only, no MDX components yet)
- page-quality-gate.sh PASS
- Zero banned words, zero banned phrases, zero US English

## Gate condition

- [ ] page-quality-gate.sh returns PASS (10/10)
- [ ] UK English verified
- [ ] Voice register matches audience
- [ ] Opening is entity-led (value/outcome first, not "This page...")
- [ ] Every paragraph has one job and ends with fact/number/next-step
