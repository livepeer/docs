# Phase 03: Content Architecture & IA Mapping

> Human role: **DESIGN** content architecture, **APPROVE** IA mapping
> Automated: Folder position mapping, frontmatter contract generation
> 
> **This phase does THREE things, not one:**
> 1. Maps the product/tech architecture to content sections
> 2. Maps persona journeys THROUGH that architecture
> 3. Produces the IA (pages, positions, contracts) from the intersection

---

## Why this phase matters

Phase 01 tells you WHAT pages exist and what's missing.
Phase 03 tells you WHAT THE READER NEEDS TO LEARN, in what order, building on what they already know.

The IA emerges from the intersection of:
- **The product/tech landscape** (what Livepeer IS — the mental model, the stack layers, the actors, the mechanics)
- **The persona journey** (what the reader needs to understand, in what sequence, to reach their goal)

A page exists because a persona needs to learn something specific at a specific point in their journey through the product architecture. NOT because a topic exists.

---

## Inputs required

- Approved personas from Phase 00 (who the tab serves, what they need)
- Tab map from Phase 01 (current pages, gaps, dispositions)
- Research packs from Phase 02 (source material)
- The product/tech architecture for this tab's domain:
  - For About: mental model (10-layer stack), protocol/network separation
  - For Orchestrators: node architecture, AI worker, go-livepeer CLI, staking mechanics
  - For Gateways: routing architecture, payment system, deployment modes
  - For Developers: API surface, SDK stack, build paths (BYOC, ComfyStream, Studio)
  - For Delegators: staking mechanics, governance model, economic model

## Process

### Step 1: Map the product/tech architecture to content sections

For each tab, identify the DOMAIN ARCHITECTURE that the reader needs to understand. This is NOT the IA — it's the territory the IA maps.

**Example — About tab:**
```
The About tab teaches the Livepeer landscape. The mental model defines 3 zones:

PROTOCOL (layers 4-5): Security, incentives, governance, economics
  → protocol/ section

NETWORK (layers 1-3): Compute, routing, execution, marketplace
  → network/ section

PLATFORM (layers 7-10): Products, APIs, SDKs, applications
  → Covered by other tabs (Solutions, Developers) — About only introduces
```

**Example — Orchestrators tab:**
```
The Orchestrators tab teaches GPU node operation. The domain architecture is:

EVALUATE: Is this worth it? (hardware fit, economics, path selection)
  → concepts/ section

SETUP: Get running (install, configure, register, verify)
  → quickstart/ + setup/ sections

OPERATE: Run well (AI pipelines, monitoring, pricing, rewards)
  → guides/ section
```

### Step 2: Map persona journeys THROUGH the architecture

For each primary persona, trace their journey through the domain architecture. Each step in the journey = a page or section of a page.

**Template:**
```
PERSONA: {name}
ARRIVES WITH: {what they already know}
NEEDS TO LEAVE WITH: {what they must know to proceed}

JOURNEY THROUGH THIS SECTION:
1. {question} → {page} → LEARNS: {specific thing} → EXIT STATE: {what they now know}
2. {question} → {page} → LEARNS: {specific thing} → EXIT STATE: {what they now know}
...
```

**Example — About/network section, Protocol Understander persona:**
```
PERSONA: Protocol Understander
ARRIVES WITH: Knows what Livepeer IS (from concepts/), but not how the network WORKS
NEEDS TO LEAVE WITH: Can trace a job from request to result, name each actor's role

1. "What IS the network?" → overview.mdx
   LEARNS: Network = execution layer (layers 1-3). Protocol secures it, network runs it.
   EXIT: Understands the protocol/network boundary

2. "Who does the work?" → actors.mdx
   LEARNS: 3 actors — orchestrators (compute), gateways (routing), delegators (capital)
   EXIT: Can name each actor and their role in one sentence

3. "How does a job actually flow?" → job-lifecycle.mdx
   LEARNS: App → gateway → orchestrator selection → execution → result → payment
   EXIT: Can trace a job end-to-end

4. "How does supply meet demand?" → marketplace.mdx
   LEARNS: Pricing, capability matching, orchestrator selection, probabilistic micropayments
   EXIT: Understands how the network matches jobs to operators

5. "What does the full stack look like?" → technical-architecture.mdx
   LEARNS: The complete system diagram (nodes, APIs, protocols, contracts)
   EXIT: Can place any component in the architecture

6. "How do builders access this?" → interfaces.mdx
   LEARNS: REST, gRPC, GraphQL, SDKs, CLI — the developer surface
   EXIT: Knows the integration points → ready to route to Developers/Gateways tab
```

**Each page's exit state IS the next page's entry state.** If there's a gap → page is missing. If there's overlap → pages should merge.

### Step 3: Identify what stays, what goes, what's missing

Compare the persona journey (Step 2) against the current pages (Phase 01 tab map):

| Journey step | Current page | Status | Action |
|---|---|---|---|
| "What IS the network?" | overview.mdx | EXISTS, good | KEEP |
| "Who does the work?" | actors.mdx | EXISTS, good | KEEP |
| ... | demand-side.mdx | EXISTS, stub | DROP — covered by actors + marketplace |
| ... | supply-side.mdx | EXISTS, stub | DROP — covered by actors + marketplace |

Pages that exist but DON'T appear in ANY persona journey = candidates for DROP or MOVE.
Journey steps that have NO matching page = content that must be WRITTEN.

### Step 4: Map to canonical folder positions

NOW (and only now) map the surviving pages to the canonical IA structure:

```
portal.mdx          → Position 1 (navigation)
navigator.mdx       → Position 1 (navigation)
concepts/            → Position 2 (orientation + mental models)
quickstart/          → Position 3 (fastest path to first success)
setup/               → Position 4 (full configuration)
guides/              → Position 5 (operational depth, edge cases, secondary journeys)
resources/           → Position 6 (lookup + discovery)
  ├── (root)         → glossary, FAQ
  ├── knowledge-hub/ → curated guides, troubleshooting, external resources
  ├── compendium/    → developer reference (exchanges, RPCs, CLI)
  └── reference/     → technical specs (APIs, formal specifications)
```

**The main persona journey maps to positions 1-4 (linear).** 
**Edge cases, secondary personas, and depth content go to position 5 (guides/).**
**Lookup content goes to position 6 (resources/).**

### Step 5: Generate frontmatter contract per page

Every page gets a contract BEFORE writing starts:

| Field | Required | Derived from |
|---|---|---|
| `pageType` | YES | Folder position → canonical 7 types |
| `audience` | YES | Tab's primary audience → canonical 7 tokens |
| `purpose` | YES | Journey step's learning goal → canonical 15 purposes |
| `lifecycleStage` | YES | Journey position (discover→evaluate→setup→build→operate) |
| `complexity` | YES | Persona's knowledge level at entry |

### Step 6: Validate (HUMAN)

- [ ] Every persona has an unblocked journey through the section
- [ ] Every page exists because a persona needs it at a specific journey step
- [ ] No orphan pages (pages not in any persona journey)
- [ ] Page exit states chain correctly (exit of page N = entry of page N+1)
- [ ] The product/tech architecture is fully covered by the page set
- [ ] Edge cases and secondary personas are served by guides/ section
- [ ] Resources sub-structure follows 4-part pattern

---

## Output

Per section, a CONTENT DESIGN document:

```markdown
# {Section} Content Design

## Domain architecture
{What part of the product/tech this section teaches}

## Primary persona journey
{Step-by-step journey with entry/exit states per page}

## Secondary personas served
{How guides/ and resources/ serve edge cases}

## Page inventory
| Page | Journey step | Persona | Entry state | Exit state | pageType | purpose |
|---|---|---|---|---|---|---|

## Dispositions (from Phase 01 tab map)
| Current page | Action | Reason |
|---|---|---|
```

Plus: frontmatter contracts per page.

---

## Gate condition

- [ ] Content design document exists per section
- [ ] Every page mapped to a persona journey step
- [ ] Product/tech architecture fully covered
- [ ] Human has approved the content architecture
- [ ] Frontmatter contracts generated
