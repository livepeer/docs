# Phase 00: Audience, Persona & Journey Definition

> Human role: **DEFINE** personas from real signals, **APPROVE** output
> Automated: Prompt execution, collation, validation checks

---

## Inputs required

- Discord channel archives for the tab's audience (#local-gateways, #orchestrators, #staking, etc.)
- GitHub issues in relevant repos (go-livepeer, livepeer-js, LIPs)
- Livepeer Forum threads with real user questions
- Messari/Dune data for behavioural patterns (where available)

## Process

### Step 1: Gather real signals (HUMAN)

For the tab you're working on, collect 10-20 real questions/pain points from:
- Discord (search channel archives for the tab's audience)
- GitHub issues (search for common user problems)
- Forum threads (search for real questions)

Document each signal: source, date, actual quote, what it reveals about the persona.

### Step 2: Run audience design prompt

**Tool**: `audience-design-v5.md` prompt
**Location**: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/audience-design-v5.md`
**Pre-read**: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/pack-guide.md`

Run in Claude Web with the real signals as context. The prompt generates:
- Personas (grounded in the signals, not generic archetypes)
- Arriving question
- Jobs-to-be-done
- Ideal journey (linear + on-demand)
- Section structure

### Step 3: Validate output (HUMAN — Check B)

For each persona, ask:
- [ ] Would I recognise this person on Discord?
- [ ] Can I name a real thread or issue where this persona appeared?
- [ ] Is the persona defined by what they NEED FROM this tab, not where they came from?
- [ ] Does the arriving question match a real question someone actually asked?
- [ ] Are the JTBDs specific enough that I can point to content that answers them?

If any answer is NO → iterate with more real signals.

### Step 4: Document approved output

Save to: `_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/RESEARCH/{TAB}/index.md`

Structure:
- AUDIENCE section (who lands here, entry vectors, routing needs)
- PERSONA section (who the tab serves, their sub-types, what they need)
- JOURNEY section (step-by-step through the tab, current coverage + gaps)
- RESEARCH GAP section (personas missing from the research)

## Output

- Approved persona definitions per tab (in RESEARCH/{TAB}/index.md)
- Each persona grounded in at least 3 real signals (Discord/GitHub/Forum)
- Check B validation passed

## Gate condition

- [ ] Human has approved persona definitions
- [ ] Each persona cites real signals
- [ ] Arriving question matches a real user question
- [ ] All personas have unblocked paths through the section structure

## What blocks next phase

Phase 01 cannot start without approved Phase 00 output.
