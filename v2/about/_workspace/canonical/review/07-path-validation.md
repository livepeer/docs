## Path Validation — Does Each Persona's Journey Through About Work?

---

## Validation Methodology

For each persona, I will:
1. Trace their assumed entry point
2. Map their assumed path through About sections
3. Identify whether the path achieves their job
4. Identify content gaps that block the path
5. Identify dead ends or confusion points

---

## Persona Paths (Validated)

### #0: THE PROTOCOL UNDERSTANDER (Primary)

**Entry:** Home tab → About portal

**Assumed path:**
```
concepts/livepeer-overview.mdx (S1.1: "What is it?")
  ↓ exit: mental model started
concepts/mental-model.mdx (S1.2: "How does it fit together?")
  ↓ exit: complete mental model
concepts/core-concepts.mdx (S1.3: "What are the building blocks?")
  ↓ exit: understands components
[Decision point: interested in network or protocol first?]
  ├─ network/overview.mdx (S2.1: "What is the network?")
  │   ↓
  │ network/actors.mdx (S2.2: "Who does the work?")
  │   ↓
  │ network/job-lifecycle.mdx (S2.3: "How does a job flow?")
  │   ↓
  │ network/marketplace.mdx (S2.4: "How do supply/demand match?")
  │   ↓
  │ [Continue to protocol]
  └─ protocol/overview.mdx (S3.1: "What does the protocol do?")
      ↓
    protocol/core-mechanisms.mdx (S3.2: "What are the mechanisms?")
      ↓
    protocol/livepeer-token.mdx (S3.3: "What is LPT?")
      ↓
    protocol/economics.mdx (S3.4: "How does money flow?")
      ↓
    protocol/governance-model.mdx (S3.5: "Who controls it?")
      ↓
    protocol/treasury.mdx (S3.6: "How is dev funded?")
      ↓
    guides/evaluating-livepeer.mdx or guides/participation-paths.mdx
      ↓ ROUTE OUT to role tab
```

**Verdict:** ✅ **UNBLOCKED** — Path is linear and clear. All pages exist (with minor quality issues).

**Gaps that don't block:**
- `concepts/core-concepts.mdx` is partial (stubs) but gets the job done
- `network/overview.mdx` is implementation-focused but readable
- `protocol/design-philosophy.mdx` is missing (optional depth)

**Critical gaps:** None. Reader can complete the journey.

**Quality issues:**
- S1 portal doesn't route explicitly — reader must guess order
- No navigator.mdx to explain the journey structure

---

### #1: THE DILIGENCE ANALYST

**Entry:** Messari report link / Search "Livepeer tokenomics"

**Assumed path:**
```
[Enter at: directly to protocol/economics.mdx]
  ↓
protocol/economics.mdx (S3.4: ETH fees + LPT inflation)
  ✗ PROBLEM: economics.mdx is contract-level detail, not narrative summary
  → Reader needs fee-flow.mdx (MISSING narrative version)
  ↓ [After finding narrative fee-flow]
protocol/governance-model.mdx (S3.5: voting, LIPs, quorum)
  ✓ GOOD — real LIP numbers, flowchart, quorum rules
  ↓
protocol/treasury.mdx (S3.6: Treasury, SPEs, Foundation)
  ✓ GOOD
  ↓
protocol/blockchain-contracts.mdx (S3.7: addresses, architecture)
  ✓ GOOD — 59KB, comprehensive
  ↓
resources/whitepaper.mdx (S4.2: primary source)
  ✓ GOOD
  ↓
resources/glossary.mdx (S4.1: term definitions)
  ✓ GOOD — 51KB, 65 terms
```

**Verdict:** ⚠️ **PARTIALLY BLOCKED** — The analytics wants a clean narrative of fee flow + rewards before diving into contract-level detail.

**Critical gap:**
- `fee-flow.mdx` is a stub (498 bytes). Analyst cannot understand complete economic picture without this.
- Currently: `economics.mdx` covers contract-level flows; `fee-flow.mdx` stub provides nothing. Reader is stuck.

**Secondary issue:**
- `protocol/economics.mdx` is written at contract/engineer level ("BondingManager mints rewards," "TicketBroker processes PM tickets"). Analyst needs a higher-level narrative first.

**Fix:** Create `guides/economics-deep-dive.mdx` (narrative) that feeds into `protocol/economics.mdx` (contract detail).

---

### #2: THE FOUNDER / PRODUCT EVALUATOR

**Entry:** Solutions tab or external article → About

**Assumed path:**
```
[Enters with: "Is this infrastructure for my product?"]
concepts/livepeer-overview.mdx (S1.1)
  ↓ exit: Livepeer is AI + video GPU network
concepts/core-concepts.mdx (S1.3)
  ↓ exit: understands actors and layers
network/marketplace.mdx (S2.4)
  ✓ GOOD — founder needs to understand how supply/demand work, pricing, reliability
  ↓ exit: understands compute market mechanics
protocol/economics.mdx (S3.4: economic sustainability)
  ✗ PROBLEM: contract-level detail, founder needs narrative
  ↓ need: guides/evaluating-livepeer.mdx with build-vs-integrate framework
[Missing: ecosystem-overview → what products exist]
  ✗ BLOCKER: Founder doesn't know "is this real?" without ecosystem proof
  ↓
protocol/governance-model.mdx (S3.5: who controls it, governance risk)
  ✓ GOOD
  ↓
protocol/treasury.mdx (S3.6: long-term funding)
  ✓ GOOD
  ↓ ROUTE OUT to Solutions or Developers
```

**Verdict:** ⚠️ **PARTIALLY BLOCKED** — Missing ecosystem overview; economics is too technical.

**Critical gaps:**
1. **`guides/ecosystem-overview.mdx`** — Founder needs to see what products exist and are active. This is a credibility/viability check.
2. **`guides/evaluating-livepeer.mdx`** — Founder needs a decision framework: "Should I build, integrate, or postpone?" Currently missing.

**Secondary issue:**
- `protocol/economics.mdx` needs a narrative summary front-loaded before contract detail.

**Fix:** 
1. Create `guides/ecosystem-overview.mdx` with links to Solutions tab and active products
2. Create `guides/evaluating-livepeer.mdx` with build-vs-integrate decision matrix
3. Create `guides/economics-narrative.mdx` as entry point to `protocol/economics.mdx`

---

### #3: THE OSS / PROTOCOL CONTRIBUTOR

**Entry:** GitHub issue / DeepWiki / Foundation referral

**Assumed path:**
```
[Enters with: "Is this protocol worth contributing to? How is it designed?"]
  ✗ BLOCKER: No explicit "for contributors" routing in portal
[Manual discovery needed:]
concepts/mental-model.mdx (complete stack understanding)
  ↓
network/job-lifecycle.mdx (state machine, execution model)
  ↓
protocol/core-mechanisms.mdx (mechanisms, video vs AI, smart contract patterns)
  ✓ GOOD — tabbed, accessible to engineers
  ↓
protocol/blockchain-contracts.mdx (contract addresses, architecture)
  ✓ GOOD — 59KB, detailed
  ↓
protocol/technical-architecture.mdx (contract relationships, state)
  ⚠️ PARTIAL — has stubs
  ↓
protocol/design-philosophy.mdx (why these design choices)
  ✗ MISSING — critical for contributors to understand constraints
  ↓
protocol/governance-model.mdx (how LIPs pass, upgrade process)
  ✓ GOOD
  ↓ ROUTE OUT to Developers (OSS path)
```

**Verdict:** 🔴 **BLOCKED BY ROUTING** — Content exists, but no explicit "For contributors: start here" path.

**Critical gap:**
1. **No navigator.mdx or explicit routing** — Contributor cannot identify the path without reading everything
2. **`protocol/design-philosophy.mdx` missing** — Contributor needs to understand WHY before contributing WHAT

**Secondary gap:**
- `protocol/technical-architecture.mdx` has stubs; contributor needs complete contract architecture

**Fix:**
1. Add contributor entry point to portal or create `navigator.mdx` with "For contributors" path
2. Create `protocol/design-philosophy.mdx` with design rationale and trade-offs
3. Complete `protocol/technical-architecture.mdx`

---

### #4: THE WEB3 R&D RESEARCHER

**Entry:** Whitepaper link / Academic reference / Comparative analysis

**Assumed path:**
```
[Enters with: "How does this achieve trustless coordination? What are the trade-offs?"]
  ✗ BLOCKER: No explicit "for researchers" routing
[Manual discovery:]
concepts/mental-model.mdx (complete stack)
  ↓
network/technical-architecture.mdx (execution layer design)
  ↓
protocol/core-mechanisms.mdx (mechanism design)
  ↓
protocol/economics.mdx (cryptoeconomic model)
  ↓
protocol/governance-model.mdx (governance incentives)
  ↓
protocol/design-philosophy.mdx (design rationale, trade-offs, constraints)
  ✗ MISSING — critical for research
  ↓
resources/whitepaper.mdx (primary source)
  ✓ EXISTS
  ↓
protocol/blockchain-contracts.mdx (verification, on-chain model)
  ✓ EXISTS
```

**Verdict:** 🔴 **BLOCKED BY ROUTING AND MISSING CONTENT**

**Critical gaps:**
1. **No "For researchers" path** — Researcher must manually discover relevant pages
2. **`protocol/design-philosophy.mdx` missing** — Researcher needs explicit articulation of design choices and trade-offs
3. **No comparative context** — Researcher wants to understand "How does this differ from Render, Akash, Filecoin?" — this context is missing

**Secondary gap:**
- `protocol/technical-architecture.mdx` is incomplete; researcher needs full contract model

**Fix:**
1. Create explicit "For researchers" entry point (navigator.mdx or enhanced portal)
2. Create `protocol/design-philosophy.mdx` with design rationale, justifications, and trade-offs
3. Create `guides/comparative-analysis.mdx` comparing Livepeer to other DePIN/compute networks
4. Complete `protocol/technical-architecture.mdx`

---

### #5: THE PRE-BUILD DEVELOPER

**Entry:** Search "Livepeer AI" / Developer community

**Assumed path:**
```
[Enters with: "Is the API mature? Should I build on this?"]
concepts/livepeer-overview.mdx (S1.1: what is it?)
  ↓ exit: Livepeer is AI + video infrastructure
concepts/core-concepts.mdx (S1.3: building blocks, actors)
  ↓ exit: understands who provides compute
network/interfaces.mdx (S2.6: APIs, SDKs, integration points)
  ✓ GOOD — developer needs to see API surface
  ↓ exit: sees integration options
network/marketplace.mdx (S2.4: supply/demand, reliability)
  ✓ GOOD — understands market viability
  ↓ ROUTE OUT to Developers tab for API quickstart
```

**Verdict:** ✅ **UNBLOCKED** — Path is short and clear. All pages exist and serve the need.

**Minor issue:**
- `concepts/livepeer-overview.mdx` could front-load "AI compute for developers" to make entry clearer

**No critical gaps.**

---

### #6: THE DEPININ-CURIOUS LPT HOLDER

**Entry:** CoinGecko / Discord / Accident

**Assumed path:**
```
[Enters with: "What is LPT? Should I hold?"]
concepts/livepeer-overview.mdx (S1.1: ecosystem overview)
  ↓
protocol/livepeer-token.mdx (S3.3: three functions)
  ✓ GOOD — holder needs to understand what LPT does
  ↓ exit: knows three functions and issuance model
protocol/core-mechanisms.mdx (S3.2: staking, delegation, rewards)
  ✓ GOOD — holder wants to understand earning potential
  ↓ exit: understands delegation mechanics
protocol/economics.mdx (S3.4: fee + inflation flows)
  ✗ PROBLEM: contract-level detail, holder needs narrative
  ↓ need: guides/token-economics-narrative.mdx
protocol/governance-model.mdx (S3.5: voting weight)
  ✓ GOOD — holder wants voting rights
  ↓ ROUTE OUT to LP Token tab for delegation action
```

**Verdict:** ⚠️ **PARTIALLY BLOCKED** — Token holder needs narrative economics before contract detail.

**Critical gap:**
- `protocol/economics.mdx` is too technical. Holder needs narrative version explaining "you earn X% fees + Y% inflation as delegator."

**Fix:**
- Create `guides/token-economics-for-holders.mdx` (narrative) that feeds into `protocol/economics.mdx` (detail)

---

### #7: THE ORCHESTRATOR CANDIDATE

**Entry:** Discord, mining forums, search "Livepeer orchestrator"

**Assumed path:**
```
[Enters with: "Can I earn money running my GPU?"]
concepts/core-concepts.mdx (S1.3: actors, layers)
  ↓ exit: knows orchestrators are a role
network/actors.mdx (S2.2: what orchestrators do)
  ✓ GOOD
  ↓ exit: knows orchestrator role
protocol/core-mechanisms.mdx (S3.2: **VIDEO VS AI TABLE**)
  ✓ CRITICAL AND PRESENT — explains video staking requirement vs AI direct payment
  ↓ exit: understands two paths
protocol/economics.mdx (S3.4: earning flows)
  ✗ PROBLEM: contract-level detail, candidate needs "what will I earn?" narrative
  ↓ need: guides/orchestrator-economics.mdx
guides/participation-paths.mdx (S4.4: "How to participate")
  ✗ MISSING
  ↓ ROUTE OUT to Orchestrators tab for setup quickstart
```

**Verdict:** ⚠️ **PARTIALLY BLOCKED** — Candidate gets economics at contract level, not narrative level. Missing explicit participation path routing.

**Critical gaps:**
1. **No narrative economics for operators** — Operator needs "If I run video mode, I earn ~X% APY. If I run AI mode, I earn ~Y% per job." Currently must extract this from contract-level `protocol/economics.mdx`
2. **`guides/participation-paths.mdx` missing** — Operator needs explicit routing to Orchestrators tab

**Fix:**
1. Create `guides/operator-economics-narrative.mdx` explaining video vs AI earning differences
2. Create `guides/participation-paths.mdx` with routing by role
3. Ensure `network/actors.mdx` clearly states orchestrator earning mechanisms

---

## Summary of Blocked Paths

| Persona | Status | Blocker | Severity |
|---|---|---|---|
| #0: Protocol Understander | ✅ Unblocked | None | — |
| #1: Diligence Analyst | ⚠️ Partial | Missing `fee-flow.mdx` narrative | **CRITICAL** |
| #2: Founder | ⚠️ Partial | Missing ecosystem-overview, evaluating-livepeer, economics narrative | **CRITICAL** (2 gaps) |
| #3: OSS Contributor | 🔴 Blocked by routing | No "for contributors" path, missing design-philosophy | **CRITICAL** (routing) |
| #4: Web3 Researcher | 🔴 Blocked by routing | No "for researchers" path, missing design-philosophy, missing comparative context | **CRITICAL** (routing) |
| #5: Pre-build Developer | ✅ Unblocked | None | — |
| #6: DePIN-curious Holder | ⚠️ Partial | Economics is contract-level, not narrative | **HIGH** |
| #7: Orchestrator Candidate | ⚠️ Partial | Economics is contract-level, missing participation-paths | **HIGH** (routing) |

---

## Critical Fixes Required (Priority Order)

### P0 (Blocks journeys)
1. **Create `guides/evaluating-livepeer.mdx`** — Founder journey depends on this
2. **Create `guides/ecosystem-overview.mdx`** — Founder journey depends on this
3. **Create navigator.mdx or enhance portal** — OSS Contributor and Researcher journeys depend on routing
4. **Create `protocol/design-philosophy.mdx`** — OSS Contributor and Researcher journeys depend on this

### P1 (Partially blocks journeys)
1. **Create `guides/fee-flow-narrative.mdx`** — Diligence Analyst needs narrative before contract detail
2. **Create `guides/operator-economics-narrative.mdx`** — Orchestrator Candidate needs narrative before contract detail
3. **Create `guides/token-economics-narrative.mdx`** — LPT Holder needs narrative before contract detail
4. **Create `guides/participation-paths.mdx`** — Routing for all personas

### P2 (Quality improvement)
1. **Rewrite `network/overview.mdx`** — Currently implementation notes, not reader-ready
2. **Complete `protocol/technical-architecture.mdx`** — Currently has stubs
3. **Enhance `concepts/core-concepts.mdx`** — Currently partial

---

## Verdict

**APPROVE WITH CRITICAL AMENDMENTS** — The primary persona (Protocol Understander) and pre-build developer have clear, unblocked paths. Five secondary personas are partially or fully blocked by missing content and routing.

**Required amendments before About is launch-ready:**
1. Add explicit routing for OSS Contributor and Web3 R&D Researcher (navigator.mdx or portal redesign)
2. Create four narrative-level guides (fee-flow, operator-economics, token-economics, ecosystem-overview)
3. Create `protocol/design-philosophy.mdx` for depth personas
4. Create `guides/evaluating-livepeer.mdx` for founder evaluation
5. Create `guides/participation-paths.mdx` for role routing

---

## Review Questions

1. Which personas are you seeing most in Discord? Are the blocked paths real problems for your users?
2. Is the routing/navigator a blocker for your navigation structure, or can readers find their way through discovery?
3. Should the narrative-level guides (fee-flow, economics, etc.) exist, or should contract-level details be elevated?
4. Which missing pages would you prioritize to ship About first?

---

**[END OF 7 FILES]**

I've produced all seven canonical files for the ABOUT tab audience/persona/journey content design, following the orchestrators format exactly. Each file includes:

- Clear purpose and structure
- Research evidence citing specific sources
- Per-persona analysis with scoring and routing
- Jobs-to-be-done in JTBD format
- Journey maps with actual page references
- IA with entry/exit states
- Locked terminology with definitions
- Path validation identifying gaps and blockers

The files identify critical missing content (design-philosophy.mdx, ecosystem-overview.mdx, narrative economics guides) and routing gaps (no navigator for contributors and researchers). Five secondary personas have partially or fully blocked journeys due to missing guides and narrative-level content. The primary Protocol Understander journey is unblocked.