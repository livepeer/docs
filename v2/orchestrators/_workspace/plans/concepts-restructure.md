# Concepts Pages - Restructure Reference

## First-Principles Framework

Each concepts section (Gateways + Orchestrators) has 4 pages. Each answers ONE question:

| Page | Question | Discovery Stage |
|---|---|---|
| **Role** | What IS this? | Orienting |
| **Capabilities** | What can it DO? | Orienting |
| **Architecture** | How does it WORK? | Evaluating |
| **Economics** | Should I CARE? | Evaluating |

---

## Page Matrix: What SHOULD Be vs What IS

### Page 1: Role ("What IS this?")

Purpose: Identity, position in the network, why it exists, who should care.

| Content element | Should be there? | Gateway role.mdx | Orch role.mdx |
|---|---|---|---|
| Opening hook / tip | Yes | OK Tip box | OK Tip box |
| Evolution / history context | Yes | OK Mermaid timeline (broadcaster - gateway - off-chain) | OK Prose ("early days = transcoding, now expanded") |
| Payment mode orientation (on-chain vs off-chain) | Gateways only | OK Tabs + StyledTable (2 columns) | N/A |
| Sub-roles breakdown (Technical / Business / Network) | Yes | OK 3 roles with CustomDividers | OK 4 H3s (Technical, Network Security, Governance, Business) |
| Mental model analogies | Yes (persona routing) | OK AccordionGroup (Cloud/Ethereum/Film) with Mermaids | MISSING entirely |
| Diagram of role in network | Yes | OK (embedded in evolution + margin Mermaids) | OK OrchestratorRoleDiagram component |
| Related pages cards | Yes | OK CardGroup | OK Columns with Cards |
| **Quality assessment** | | **Excellent - approved layout** | **Lean but functional; missing analogies, sparse prose** |

---

### Page 2: Capabilities ("What can it DO?")

Purpose: Concrete workloads, services, what the participant actually handles day-to-day.

| Content element | Should be there? | Gateway capabilities.mdx | Orch capabilities.mdx |
|---|---|---|---|
| What the operator handles (responsibilities list) | Yes | OK Bullet list ("job intake, routing, pricing...") | OK 3 compute types listed |
| Workload types breakdown | Yes | MISSING - talks about marketplace, not gateway workloads | OK Transcoding, AI, BYOC, real-time AI |
| Per-workload detail (hardware, config, pricing) | No (separate page) | N/A | WRONG - thin here but rs-workloads.mdx has detail |
| Marketplace role / discovery | Gateways: partial; Orch: no | WRONG - dominates the page (should be subset) | N/A |
| BYOC | Yes (both) | OK Section present | OK Mentioned |
| "What it does NOT do" boundary | Yes | OK ("Gateways do not compute") | MISSING |
| Example services / case studies | Yes | MISSING | OK Daydream, Embody, Sarah |
| Related pages | Yes | MISSING | MISSING |
| **Quality assessment** | | **Wrong focus** - marketplace page wearing capabilities title. Actual gateway capabilities (routing, session management, orchestrator selection, dual video+AI config) absent | **Bare but directionally correct** - lists workloads but lacks depth. rs-workloads.mdx is excellent and could be the real capabilities page |

**Recommended moves:**
- Gateway capabilities.mdx: Rewrite. Move marketplace content to business-model.mdx. Replace with actual gateway capabilities (routing, session management, orchestrator selection, payment handling, dual workload config)
- Orch capabilities.mdx: Either merge into rs-workloads.mdx or flesh out to match. rs-workloads.mdx (Job Types) is what this page should be

---

### Page 3: Architecture ("How does it WORK?")

Purpose: Internals, layer position, request flow, components, system interactions.

| Content element | Should be there? | Gateway architecture.mdx | Orch architecture.mdx |
|---|---|---|---|
| Layer position diagram | Yes | OK Layered Architecture Mermaid | OK Mermaid flowchart + table |
| Request flow (lifecycle) | Yes | OK Flow Diagram Mermaid | OK Sequence diagram + 7-step prose |
| Key components | Yes | MISSING entirely | OK go-livepeer, livepeer_cli, AI Runner, contracts (with table) |
| System interactions (who talks to whom) | Yes | MISSING | OK 4 categories (Gateways, Delegators, GPU workers, Arbitrum) |
| Internal architecture (session managers, etc.) | Yes | OK Dual pipeline Mermaid (BSM/ASM) | OK Combined vs Split O/T vs AI Runner table |
| Source code link | Yes | OK GitHub card link | OK GitHub link |
| Prose explanation | Yes | MISSING - diagrams only, no explanatory text | OK Strong prose throughout |
| Related pages | Yes | MISSING | OK CardGroup |
| **Quality assessment** | | **Diagrams-only skeleton** - 3 good Mermaids but zero prose. No components list, no system interactions, no step-by-step | **Best written page in either tab** - complete, well-structured, good balance of diagrams + prose |

**Recommended action:**
- Gateway architecture.mdx: Add prose sections matching orchestrator architecture pattern (layer position explanation, system interactions with Orchestrators/Applications/Protocol, key components: go-livepeer gateway mode, session managers, payment system, remote signer)

---

### Page 4: Economics / Business Model ("Should I CARE?")

Purpose: Revenue, costs, payment flows, why someone would operate this node.

| Content element | Should be there? | Gateway business-model.mdx | Orch rcs-incentives.mdx |
|---|---|---|---|
| "Who earns what" overview | Yes | OK Table (Orch earns, GW pays) | OK Prose (LPT rewards + ETH fees) |
| Revenue streams | Yes | OK Arbitrage model explained well | INCOMPLETE (service fees section empty) |
| Cost structure | Yes | OK Gateway costs listed | OK Listed (GPU, bandwidth, energy, delegation) |
| Payment flow diagram | Yes | MISSING | MISSING |
| Currency explanation (ETH vs LPT) | Yes | OK Table (ETH for service, LPT for staking) | MENTIONED but not structured |
| "Why run this node?" motivation | Yes | OK Good section | MISSING |
| Fee structure / pricing config | Yes | OK Detailed (CLI examples, Go code) | MISSING |
| Case studies | Yes | OK Streamplace, Daydream | MISSING |
| Stake-for-access model | Orch only | N/A | OK SFA model explained |
| Non-financial benefits | Yes | MISSING | OK Governance, future income |
| Related pages | Yes | MISSING | MISSING |
| **Quality assessment** | | **Best gateway concepts page** - solid content, real examples, actionable pricing config. Inline HTML tables should use StyledTable components | **Incomplete draft** - SFA and economics sections are good starts but service fees section is empty, no pricing config, no case studies, no "why run" |

---

## Gap Severity Summary

| Page | Gateways | Orchestrators |
|---|---|---|
| **Role** | EXCELLENT (approved) | FUNCTIONAL but thin - needs analogies, richer prose |
| **Capabilities** | WRONG content (marketplace != capabilities) | BARE - rs-workloads.mdx is the real content |
| **Architecture** | DIAGRAMS only, no prose | EXCELLENT (best page in both tabs) |
| **Economics** | STRONG, needs component cleanup | INCOMPLETE draft (empty sections) |

## Cross-Tab Parity Gaps

1. **Analogies/mental models** - Gateways have 3 persona-routing analogies. Orchestrators have none.
2. **"What it does NOT do" boundary** - Gateways state it clearly. Orchestrators don't.
3. **Case studies** - Gateway economics has Streamplace + Daydream. Orchestrator economics has none.
4. **Workloads page** - Orchestrators have rs-workloads.mdx (excellent, detailed). Gateways have nothing equivalent.
5. **Payment flow diagram** - Neither tab has one. Both should.
6. **Related pages cards** - Inconsistent. Some pages have them, some don't.

---

## Rewrite Priority Order

1. **Gateway capabilities.mdx** - Wrong content, highest severity
2. **Gateway architecture.mdx** - Diagrams-only skeleton
3. **Orch rcs-incentives.mdx** - Incomplete draft with empty sections
4. **Orch capabilities.mdx** - Bare, needs rs-workloads.mdx integration
5. **Orch role.mdx** - Functional but needs analogies + richer prose
6. **Gateway business-model.mdx** - Strong content, just needs component cleanup + payment flow diagram

## UX Standard (from gateway role.mdx - approved)

- CustomDividers between major sections with descriptive labels
- Mermaid diagrams inline where they clarify flow or structure
- Tabs for parallel comparisons (on-chain vs off-chain, etc.)
- AccordionGroup for expandable deep-dives (mental models, guides)
- StyledTable/StyledSteps for structured data and journeys
- CardGroup for related pages navigation
- BorderedBox for callouts and framing
- Note/Warning/Tip for inline context
- Prose between every diagram - never diagrams-only
- LinkArrow for cross-references
