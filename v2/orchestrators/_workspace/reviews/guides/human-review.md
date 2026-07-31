# Human Review Feedback Log

Patterns from human review to feed back into authoring skills.

---

## setup-options.mdx (Deployment Details)

| # | Issue | Context | Human decision | Type |
|---|-------|---------|---------------|------|
| 1 | Page framed as "alternatives to the default" | Original version only documented pool/O-T/siphon as alternatives to solo go-livepeer. Reader doesn't see all options equally. | Rewrite: list ALL deployment types as equal options | Structure |
| 2 | "Deployment type" / "how the infrastructure is organised" are vague | Intro used corporate language instead of glossary terms | Use glossary terms. Say what the decision actually IS. | Terminology |
| 3 | Second CustomDivider before first H2 | `<CustomDivider middleText="Find Your Path" />` placed between intro and first heading | Never place a second divider before first H2. Updated authoring skill. | Style |
| 4 | "Pool worker" is invented terminology | No v1 precedent, not in protocol or community usage | Renamed to "pool node" across all pages and glossary | Terminology |
| 5 | Decision tree mermaid is useless | Flowchart diagrams page structure, not user reasoning. Doesn't help anyone decide. | Remove. Decision support should be prose WHY explanations, not flowcharts. | Structure |
| 6 | Deployment types table at the top is a wall of text | Long verbose reference table is the first thing the reader hits. It's reference, not a starting point. | Move reference table to END. Lead with decision support. | Structure |
| 7 | Workload mode gives zero context on WHY | Lists requirements but doesn't explain WHY different setups exist (NVENC vs CUDA, silicon independence) | Add WHY before WHAT. Explain the hardware reason for different modes. | Content |
| 8 | Useful info hidden in tabs | Tabs contain decision detail but are tiny next to the big table. Reader doesn't find the info. | Don't hide decision-critical info in tabs. Tabs for reference detail, not for "which should I choose?" | Structure |
| 9 | Zero "why" questions answered | Page is all Path → Technicals. No answers to "why would I choose siphon?" or "why O-T split?" | Each option needs 2-3 sentences on WHY you'd choose it before any technical detail. | Content |
| 10 | Setup Type (on-chain vs off-chain) not covered | Tip promises this as decision 1 but page has zero content on it | Add section explaining on-chain vs off-chain for orchestrators | Content |
| 11 | Setup Path (what software) poorly covered | go-livepeer and Siphon mentioned but not framed as a software choice | Frame explicitly as "two software options" with clear descriptions | Content |
| 12 | Off-chain dismissed as "testing only" | Glossary and earlier analysis framed off-chain as non-production. But off-chain IS viable for private orchestrators serving specific gateways. | Acknowledge off-chain as legitimate for private/specific-gateway deployments | Content |
| 13 | Page structure is backwards | Leads with technical reference, hides reasoning. Reader gets WHAT before WHY. | Restructure: WHY decisions first, reference table at end | Structure |

---

## setup-options.mdx - Round 2 (rewrite feedback)

| # | Issue | Context | Human decision | Type |
|---|-------|---------|---------------|------|
| 14 | No definitions section at start | Page jumps into options without defining the terms first | Add a ground-zero section: definitions and WHY each axis exists | Structure |
| 15 | Siphon has zero explicit WHY | Tab mentions keystore isolation but doesn't say why an operator would actually choose it | Each option needs a non-patronising reason to exist, not "choose this when..." phrasing | Content |
| 16 | Pool operator listed as a setup option | Pool operator is in Advanced Operations for a reason - it's not a beginner setup path | Remove from setup options. Only include if there's a zero-to-hero path for it. | Scope |
| 17 | Explicit copy questions are patronising | "Do you want full control?" / "Need reward safety?" is lazy, unprofessional, patronising prose | Never use explicit questions as decision framing. State the situation and the option directly. | Voice |
| 18 | Workload mode section explains hardware not architecture | "video uses NVENC, AI uses CUDA" is a hardware fact, not the reason different setups exist | The reason is the Livepeer architecture - how the protocol routes different workload types. Hardware is secondary. | Content |
| 19 | WHY content buried in Section 3 instead of front and centre | Proposed structure put the operational mode reasoning in the third section | WHY should be the first thing after definitions, not buried behind setup type and software path | Structure |
| 20 | Reference table still needs review | Moving it to the end is correct but the table content itself is verbose and may not serve the reader | Flag for review after rewrite | Content |

## setup-options.mdx - Round 3 (proposed rewrite feedback)

| # | Issue | Context | Human decision | Type |
|---|-------|---------|---------------|------|
| 24 | Too many tables on one page | draft1 has 6 StyledTables. Page is almost entirely tabular with almost zero prose. | Max 1-2 tables per page. Tables should support prose, not replace it. | Layout |
| 25 | No prose, all tables | Page reads like a spreadsheet, not documentation. Tables are data, not explanation. | Pages need prose to explain WHY and WHAT. Tables are supporting evidence, not the content itself. | Content |
| 21 | Proposed rewrite leads with definitions | AI proposed "Ground zero: Definitions" as the first section - defining axes before presenting options | Definitions ARE the options. Don't define axes then present options separately. Combine. | Structure |
| 22 | "What are my options?" is a lazy framing of the reader's question | AI framed the page purpose as answering "what are my options for running an orchestrator?" | The reader is past "should I?" - they're here because they're ready to set up. The real question is "which setup path matches my situation?" | Content |
| 23 | Preamble before the answer | Multiple proposed structures put context, definitions, or framing before the actual options | Answer the reader's question IMMEDIATELY. First thing on the page. No preamble. | Structure |

---

## Patterns (will grow as more pages reviewed)

| Pattern | Seen in | Skill update needed |
|---------|---------|-------------------|
| **Reference before reasoning** - pages lead with tables/specs instead of decision support | setup-options | Authoring skill: WHY before WHAT. Decision pages lead with reasoning, end with reference. |
| **Invented terminology** - terms created without checking v1/protocol/community | setup-options | Authoring skill: check glossary + v1 + community before introducing terms. |
| **Hidden info in tabs** - decision-critical content buried in tab UI | setup-options | Authoring skill: tabs for reference variants, NOT for "which should I choose?" |
| **Flowcharts as decision aids** - mermaid trees that diagram structure not reasoning | setup-options | Authoring skill: flowcharts for technical processes, not "should I?" decisions. Use prose. |
| **Missing "why"** - pages explain WHAT each option is but not WHY to choose it | setup-options | Authoring skill: every option on a decision page needs "choose this when..." |
| **Off-chain dismissed** - legitimate deployment treated as testing-only | setup-options, glossary | Acknowledge off-chain as viable for private deployments, not just testing. |
| **Explicit questions as prose** - "Do you want X?" framing is patronising | setup-options | Authoring skill: never use explicit questions to frame decisions. State situations and options directly. |
| **Hardware explanations instead of architecture** - "uses NVENC" explains the silicon, not why the product is designed this way | setup-options | Authoring skill: explain the protocol/product architecture reason, not just the hardware mechanism. |
| **No definitions before options** - page lists choices without defining what the axes ARE first | setup-options | Authoring skill: decision pages must define terms before presenting options. Ground-zero section. |
| **Advanced content in beginner pages** - pool operator listed alongside pool node as if they're equivalent entry points | setup-options | Authoring skill: scope pages to their audience level. Advanced topics get a link, not a full section. |
| **Preamble before the answer** - pages put context/definitions/framing before the thing the reader came for | setup-options | Authoring skill: answer the reader's question FIRST. Context supports the answer, it doesn't precede it. |
| **Lazy question framing** - AI identifies the reader's question as generic ("what are my options?") instead of specific | setup-options | Authoring skill: identify the SPECIFIC question the reader has at this point in their journey, not a generic version. The reader's journey position determines the question. |
| **Single value prop anchoring** - AI latches onto one reason per option and repeats it across every response | setup-options (pool node = "no LPT" every time) | Authoring skill: minimum 5 distinct value props per option across different dimensions (financial, operational, risk, time, complexity, flexibility). Challenge own anchoring. |
| **Consecutive tables** - stacking StyledTable after StyledTable creates a wall of tabular data with no visual relief | setup-options (draft1 has 6 tables) | Authoring skill: never stack tables. Max 1-2 tables per page. Use tabs, accordions, cards, bordered boxes, or prose between tables. |
| **Tables replacing prose** - page is almost entirely tabular with no explanatory text | setup-options (draft1) | Authoring skill: tables support prose, they don't replace it. A page with no prose is a spreadsheet, not documentation. |

---

## Rules / Policies

Rules derived from review feedback. These override any conflicting guidance in authoring skills.

### 5 Whys on Reader Question

Before writing or restructuring any page, identify the reader's main question, then ask WHY five more times to get to the real question.

Example (setup-options):
1. "What are my options?" → WHY are they asking? →
2. "They want to know which setup to use" → WHY? →
3. "They're ready to set up and need to pick a path" → WHY do they need to pick? →
4. "Different paths exist for different situations (hardware, stake, risk tolerance)" → WHY does that matter? →
5. "Picking wrong wastes hours/days on a setup that doesn't fit" → WHY would it not fit? →
6. "Their specific hardware, LPT access, and operational tolerance determine which path works"

**Real question**: "I'm ready to set up - which path matches my hardware, stake, and goals?"
**Page answer**: Here are the paths, here's why each exists, pick one.

The first attempt ("what are my options?") is lazy. The 5th iteration is the actual page purpose.

**Rule: ALWAYS ask the main question then ask 5 more WHYs after it. Write the page for the answer at the bottom, not the top.**

### Tier Questions (page writing framework)

After the 5 Whys, the next tier questions reveal the page structure. Each WHY becomes a section.

Example (setup-options):

| Tier | Reader question | Value props (no prose) |
|------|----------------|----------------------|
| 0 | Which setup path fits me? | Solo. Pool node. O-T split. Siphon. Off-chain. |
| 1 | Why different paths? | Protocol control. GPU ownership. Keystore location. Reward responsibility. Capital requirement. |
| 2 | What's the risk per path? | Solo: single point of failure. Pool: payout dependency. O-T: infrastructure overhead. Siphon: two-machine coordination. Off-chain: no discovery, no rewards. |
| 3 | What do I need before choosing? | LPT amount. GPU count. Machine count. Uptime tolerance. Protocol involvement preference. |
| 4 | Simplest path for my situation? | No LPT, no protocol ops, minimal maintenance → pool node. Full control + direct earnings → solo. Protect rewards from GPU downtime → siphon. Scale GPUs independently, isolate keystore → O-T split. Serve a specific gateway privately → off-chain. Just want to earn from LPT without running anything → delegate (not this page). |
| 5 | After I choose? | Solo → Setup Guide. Pool → Join a Pool. O-T → O-T Split. Siphon → Siphon Setup. Off-chain → Setup Guide (off-chain flag). |

**Tier 0 = the opening. Tiers 1-4 = the sections. Tier 5 = related pages.**

This framework applies to ANY page:
1. Identify the reader's real question (after 5 Whys)
2. Ask 5 more tier questions from that answer
3. Each tier becomes a section of the page
4. The page structure IS the reader's thought process, in order

**Rule: every page's H2 structure should map to the tier questions for that page's reader. If an H2 doesn't answer a tier question, it doesn't belong on the page.**

### Diverse Lateral Ideation (mandatory)

AI anchors on one value prop per option and repeats it. Example: pool node gets "no LPT needed" every single time. That's ONE reason. There are many:

Pool node value props (what AI kept missing):
- No LPT capital requirement
- No protocol operations to manage
- No reward calling responsibility
- No pricing decisions
- No monitoring/uptime obligation
- No software upgrades to manage
- No keystore security to worry about
- Passive GPU earnings with minimal attention
- Can switch pools without on-chain changes
- Can run alongside other GPU workloads

AI gave "no LPT" and stopped. Every time.

**Rule: when listing value props for ANY option, generate AT LEAST 5 distinct reasons across different dimensions (financial, operational, risk, time, complexity, flexibility). If you can only think of one, you haven't thought about it enough.**

**Rule: challenge your own anchoring. If you keep giving the same value prop for an option across multiple responses, you're stuck. Step back and think about what ELSE matters to the reader beyond the obvious.**

This applies to:
- Setup option comparisons
- Workload mode descriptions
- Any page where the reader is choosing between alternatives
- Tier question value prop answers
