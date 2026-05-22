# Home Tab: Path Validation

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**: Validates that all 7 personas can complete their journeys successfully from Home. Tests each path end-to-end.

---

## Path Validation Framework

Each persona's path is validated against these criteria:

1. **Entry clarity**: Persona recognizes themselves within 60 seconds of landing
2. **Role clarity**: Persona identifies correct role/path (not confused with other roles)
3. **Confidence**: Persona feels they have enough info to move to next step
4. **Destination correctness**: Persona arrives at the right tab with minimal backtracking
5. **No dead ends**: Persona is never stuck on a page with no clear next step

---

## PATH 1: COMPLETE NEWCOMER ✓ / ✗ / ?

### Persona: Social media arrival, no background
**Entry vector**: DePIN article, YouTube, Twitter, friend referral  
**Cognitive entry state**: "What is this? Should I care?"

### Step 1: Landing & Orientation
**Test**: Can they read hero and understand what Livepeer is?
- [ ] Hero headline is clear and current (AI infrastructure, not transcoding)
- [ ] Hero copy explains the concept in 1-3 sentences
- [ ] Hero includes visual proof (Starfield, architecture, or Daydream GIF)
- [ ] Newcomer can say "Livepeer is [blank]" with confidence after reading

**Current status**: UNKNOWN (hero clarity TBD)  
**Dependency**: Section 1 (Hero) must be audited for definition accuracy

### Step 2: Primer (Optional but likely)
**Test**: Can they click a "Learn more" link and get 5-10 minute explanation?
- [ ] Primer link is visible and clickable
- [ ] Primer explains what Livepeer does without requiring prior knowledge
- [ ] Primer answers "What problem does this solve?" and "Why is this approach better?"
- [ ] Primer doesn't overwhelm with technical depth

**Current status**: ✅ GOOD (primer.mdx is strong)

### Step 3: Role Discovery
**Test**: Can they identify which role(s) apply to them?
- [ ] 7-8 role cards visible with plain language ("I want to...", not "Become...")
- [ ] Role cards are visually distinct and scannable
- [ ] At least 2 cards feel "that's me" to this persona (creator, investor, curious observer)
- [ ] Each card has a clear CTA ("Explore," "Get started," "Learn more")

**Current status**: UNKNOWN (mission-control.mdx and get-started.mdx structure unclear)

### Step 4: Proof (Optional but valuable)
**Test**: Can they see real projects using Livepeer?
- [ ] Carousel or section visible with real products (Daydream, Studio, ComfyStream)
- [ ] Each product has a 1-line description ("AI video generation," "Live streaming," etc.)
- [ ] Carousel is positioned to be visible without excessive scrolling
- [ ] Proof carousel increases credibility (newcomer thinks "this is real")

**Current status**: 🔴 UNCLEAR (visibility TBD)

### Step 5: Routing
**Test**: Can they click to next destination?
- [ ] Chosen role card has clear link to destination tab
- [ ] Link text is clear: "Go to [tab]" or "Get started with [role]"
- [ ] Clicking the link takes them to correct tab (e.g., "Creator/Streaming" → Solutions tab)
- [ ] No confusion about which tab to enter

**Current status**: UNKNOWN (link clarity TBD)

### Step 6: Arrival & Confidence
**Test**: Do they arrive at right place feeling informed?
- [ ] Destination tab is correct for chosen role
- [ ] Destination tab acknowledges their arrival ("You're here to [verb]...")
- [ ] Destination tab provides clear next steps (tutorial, guide, calculator)
- [ ] Newcomer never feels lost or backtrack-tempted

**Current status**: UNKNOWN (depends on destination tab UX)

### Path 1 Success Metrics
- **Time to completion**: 5-10 minutes
- **Backtracks needed**: 0
- **Confidence at exit**: "I understand what Livepeer is and where to start"
- **Overall success**: CONDITIONAL (depends on hero clarity, role cards, and destination tab UX)

---

## PATH 2: EVALUATING BUILDER ✓ / ✗ / ?

### Persona: Search or LinkedIn arrival, technical background, evaluating
**Entry vector**: "Livepeer AI API" search, LinkedIn, enterprise BD  
**Cognitive entry state**: "Is this production-ready? Should we build on this?"

### Step 1: Landing & Quick Scan
**Test**: Can they quickly assess if Livepeer is relevant?
- [ ] Hero mentions "APIs" or "developer" clearly
- [ ] Subheading or quick nav makes clear this is infrastructure (not a finished product)
- [ ] Search bar is visible if they want to jump directly to API docs

**Current status**: UNKNOWN (hero clarity for builders TBD)

### Step 2: Fast Route to Developer Tab
**Test**: Can they reach Developers tab within <2 minutes?
- [ ] Role card or nav link labeled "Developers" or "Build on Livepeer"
- [ ] Clicking takes them directly to Developers tab (not another intro page)
- [ ] Path is obvious from hero or role cards (no need to read full primer)

**Current status**: UNKNOWN (routing clarity TBD)

### Step 3: API Readiness Check (at destination)
**Test**: Do they find proof that Livepeer APIs are ready?
- [ ] Developers tab shows working code examples
- [ ] API reference is live and complete (not stub)
- [ ] At least 2 real projects using Livepeer (Daydream, ComfyStream, Cascade, etc.)
- [ ] SDKs / libraries are documented

**Current status**: UNKNOWN (depends on Developers tab)

### Step 4: Confidence & Next Step
**Test**: Do they know what to do next?
- [ ] Quickstart guide is available
- [ ] Sandbox / testnet option is clear
- [ ] Integration examples are clear
- [ ] They don't need to read Home again

**Current status**: UNKNOWN (depends on Developers tab)

### Path 2 Success Metrics
- **Time to completion**: <3 minutes
- **Backtracks needed**: 0
- **Confidence at exit**: "I can integrate Livepeer into our product"
- **Overall success**: CONDITIONAL (depends on developer nav clarity)

---

## PATH 3: CURIOUS GPU OPERATOR ✓ / ✗ / ?

### Persona: Search or Discord arrival, has GPU hardware, wants to earn
**Entry vector**: "earn with GPU" search, Discord, mining forums  
**Cognitive entry state**: "Can I make money with this? How much?"

### Step 1: Landing & ROI Scan
**Test**: Can they quickly assess if earnings justify setup?
- [ ] Hero mentions earning or GPU
- [ ] Quick facts section (if exists) shows earnings examples
- [ ] Roadmap or metrics section shows activity (fee data, active orchestrators)

**Current status**: UNKNOWN (hero for GPU ops clarity TBD)

### Step 2: Complexity Check
**Test**: Do they understand setup difficulty?
- [ ] Section exists explaining setup complexity (easy/medium/hard)
- [ ] Time commitment is clear ("2-4 hours initial setup")
- [ ] Capital requirements are clear (do I need LPT? How much?)
- [ ] Solo vs. pool vs. AI paths are explained

**Current status**: 🔴 MISSING (complexity rankings don't exist on Home)

### Step 3: Fast Route to Orchestrators Tab
**Test**: Can they reach Orchestrators tab within 2 clicks?
- [ ] Role card "Earn with GPU hardware" is visible and clickable
- [ ] Clicking takes them to Orchestrators tab (not another intro page)
- [ ] Orchestrators tab acknowledges GPU operator arrival

**Current status**: UNKNOWN (routing clarity TBD)

### Step 4: Clear Path Selection
**Test**: Do they know which path applies to them?
- [ ] At Orchestrators tab, clear options: Solo / Pool / AI-first
- [ ] Each path has difficulty ranking and ROI expectation
- [ ] They know if they have enough LPT (or can skip if doing pool)

**Current status**: UNKNOWN (depends on Orchestrators tab structure)

### Step 5: Setup Clarity
**Test**: Do they have next steps?
- [ ] Setup guide is available
- [ ] Hardware requirements are clear (GPU model, VRAM, CPU, bandwidth)
- [ ] Installation steps are clear

**Current status**: UNKNOWN (depends on Orchestrators tab)

### Path 3 Success Metrics
- **Time to completion**: 3-7 minutes
- **Backtracks needed**: 0
- **Confidence at exit**: "I know if this is worth my time and which path to take"
- **Overall success**: CONDITIONAL (depends on Home complexity clarification and Orchestrators tab)

---

## PATH 4: TOKEN INVESTOR / LPT HOLDER ✓ / ✗ / ?

### Persona: Exchange or newsletter arrival, crypto-literate, evaluating investment
**Entry vector**: Coinbase, Kraken, analyst newsletter, investor research  
**Cognitive entry state**: "What drives LPT value? Is this a good investment?"

### Step 1: Landing & Economics Scan
**Test**: Can they quickly see protocol economics?
- [ ] Hero or prominent section mentions economics / fees / staking
- [ ] Quick metrics visible: total stake, daily fees, staking yield
- [ ] Roadmap or vision section is visible (future direction)

**Current status**: UNKNOWN (economics prominence TBD)

### Step 2: Proof Layer
**Test**: Can they see the protocol is real and active?
- [ ] Active orchestrators count is visible
- [ ] Protocol fee trends are visible (AI inference >70% narrative)
- [ ] Real projects are listed
- [ ] Foundation info / team credibility signals present

**Current status**: UNKNOWN (proof section visibility TBD)

### Step 3: Roadmap Check
**Test**: Can they assess strategic direction?
- [ ] Roadmap section shows Foundation's 3-phase plan
- [ ] Roadmap includes 2025, 2026-27, 2028+ phases
- [ ] Roadmap links to full documentation

**Current status**: 🔴 STUB (roadmap.mdx is 1.8KB, needs full content)

### Step 4: Route to Delegators Tab
**Test**: Can they reach staking/delegation info?
- [ ] Role card "Invest LPT to earn rewards" is visible
- [ ] Clicking takes them to Delegators tab
- [ ] Delegators tab explains staking mechanics, yield, governance

**Current status**: UNKNOWN (routing clarity TBD)

### Step 5: Investment Decision
**Test**: Do they have enough info to decide?
- [ ] Staking yield is transparent
- [ ] Risks are disclosed (volatility, smart contract risk, regulatory)
- [ ] Governance rights are explained
- [ ] Comparison to other yield opportunities is possible

**Current status**: UNKNOWN (depends on Delegators tab)

### Path 4 Success Metrics
- **Time to completion**: 5-10 minutes
- **Backtracks needed**: 0
- **Confidence at exit**: "I understand LPT's value and whether I should invest"
- **Overall success**: CONDITIONAL (depends on roadmap content and economics prominence)

---

## PATH 5: PROTOCOL RESEARCHER ✓ / ✗ / ?

### Persona: Whitepaper search or GitHub arrival, technical/academic background
**Entry vector**: Whitepaper search, Messari, academic research, GitHub  
**Cognitive entry state**: "Where's the technical spec? How does this work?"

### Step 1: Research Link Visibility
**Test**: Can they find research artifacts quickly?
- [ ] Whitepaper link visible within 2 clicks of Home
- [ ] Research section or "Deep dives" section exists
- [ ] Whitepaper link is direct (not buried in 3 layers)

**Current status**: UNKNOWN (whitepaper link visibility TBD)

### Step 2: Artifact Consolidation
**Test**: Can they find all research resources in one place?
- [ ] Whitepaper
- [ ] Architecture docs / specs
- [ ] Smart contract code (links to GitHub)
- [ ] Technical blog posts
- [ ] Economics paper / research

**Current status**: ⚠️ PARTIAL (scattered across About, GitHub, blog)

### Step 3: AI Pivot Narrative
**Test**: Do they understand the innovation story?
- [ ] Evolution.mdx clearly explains AI pivot (2024-2025)
- [ ] Data supports it: AI inference >70% of fees
- [ ] Technical implications are clear (different model types, performance characteristics)

**Current status**: UNKNOWN (evolution.mdx audit needed)

### Step 4: Confidence & Depth Path
**Test**: Do they have rabbit holes to go deep?
- [ ] Whitepaper is technically rigorous
- [ ] Smart contracts are audited and public
- [ ] Protocol governance mechanisms are documented
- [ ] They never get stuck or run out of material

**Current status**: UNKNOWN (depends on depth of available docs)

### Path 5 Success Metrics
- **Time to completion**: <3 minutes
- **Backtracks needed**: 0
- **Confidence at exit**: "I found the whitepaper and can start evaluating the protocol"
- **Overall success**: CONDITIONAL (depends on research link visibility and AI narrative clarity)

---

## PATH 6: COMMUNITY CONTRIBUTOR ✓ / ✗ / ?

### Persona: Discord or Twitter arrival, wants to participate
**Entry vector**: Discord invite, Twitter, Foundation announcement  
**Cognitive entry state**: "How do I contribute? What skills do I need?"

### Step 1: Community Section Visibility
**Test**: Can they find community/contribution info on Home?
- [ ] Community section is visible on Home (currently missing entirely)
- [ ] Section includes: contribution paths, Discord links, active initiatives

**Current status**: 🔴 MISSING (entire community section missing)

### Step 2: Contribution Paths
**Test**: Can they identify ways to contribute?
- [ ] 5-6 clear paths visible: Dev, Infrastructure, Governance, Content, Community, Research
- [ ] Each path has a skill-level requirement (beginner, intermediate, advanced)
- [ ] Time commitment is clear for each path

**Current status**: 🔴 MISSING (no such content on Home)

### Step 3: Active Initiatives
**Test**: Can they see current opportunities?
- [ ] Foundation-funded projects are listed
- [ ] Bounties are visible (if any)
- [ ] Community working groups are listed
- [ ] GitHub issues tagged for community are linked

**Current status**: 🔴 MISSING (not on Home)

### Step 4: Discord Entry Point
**Test**: Can they join community?
- [ ] Discord invite link is prominent
- [ ] Discord channel recommendations are clear (which channel for contributions?)
- [ ] First-time contributor flow is welcoming

**Current status**: 🔴 MISSING (no community section on Home)

### Step 5: Confidence & Next Action
**Test**: Do they feel welcome and empowered?
- [ ] They know which Discord channel to join
- [ ] They know what to do when they join
- [ ] They feel their skills are valued

**Current status**: 🔴 MISSING (entire path missing)

### Path 6 Success Metrics
- **Time to completion**: 2-5 minutes
- **Backtracks needed**: 0
- **Confidence at exit**: "I know how to contribute and where to start"
- **Overall success**: REJECT (entire path missing — critical gap)

---

## PATH 7: RETURNING USER ✓ / ✗ / ?

### Persona: Knows Home structure, looking for specific content
**Entry vector**: Bookmark, direct URL, search  
**Cognitive entry state**: "I know what I need. Show it to me fast."

### Step 1: Navigation Quality
**Test**: Can they jump to target without re-reading intro?
- [ ] Global search works (if implemented)
- [ ] Quick-links bar visible (if implemented)
- [ ] Breadcrumbs show location ("Home > About > Roadmap")
- [ ] Top navigation sticks to top of page

**Current status**: UNKNOWN (site-wide nav quality TBD)

### Step 2: Jump to Target
**Test**: Can they reach target content within 1 click?
- [ ] From Home, can reach: Primer, Roadmap, API Docs, Calculator, Ecosystem, Whitepaper
- [ ] All links are stable (no link rots)
- [ ] Each link goes directly to content (not another intro)

**Current status**: UNKNOWN (link stability TBD)

### Step 3: Efficiency
**Test**: Do they avoid re-reading intro?
- [ ] No full-page hero/primer on second visit
- [ ] Quick nav lets them jump sections
- [ ] They don't feel like Home is blocking them

**Current status**: UNKNOWN (site-wide nav design TBD)

### Path 7 Success Metrics
- **Time to completion**: <30 seconds
- **Backtracks needed**: 0
- **Confidence at exit**: "I found what I need"
- **Overall success**: CONDITIONAL (depends on search/nav implementation)

---

## Overall Validation Summary

| Path | Persona | Current Status | Blockers | Priority |
|---|---|---|---|---|
| 1 | Newcomer | CONDITIONAL | Hero clarity, routing clarity, destination UX | P0 |
| 2 | Builder | CONDITIONAL | Nav clarity, API readiness | P0 |
| 3 | GPU Operator | CONDITIONAL | Complexity ranking missing, routing clarity | P0 |
| 4 | Investor | CONDITIONAL | Roadmap stub, economics prominence | P0 |
| 5 | Researcher | CONDITIONAL | Research link visibility, AI narrative | P1 |
| 6 | Contributor | REJECT | Entire community section missing | P0 |
| 7 | Returning | CONDITIONAL | Site nav implementation | P1 |

---

## Critical Blockers

### 🔴 BLOCKER 1: Community Section Missing (Path 6)
**Impact**: Community contributor persona has zero pathway from Home  
**Fix**: Create community/engagement section with contribution paths, Discord links, active initiatives  
**Effort**: Low (collate existing info)  
**Timeline**: High priority  

### 🔴 BLOCKER 2: Roadmap Stub (Path 4)
**Impact**: Investors can't assess strategic direction  
**Fix**: Fill roadmap.mdx with Foundation 3-phase plan  
**Effort**: Medium (collate from Foundation docs)  
**Timeline**: High priority  

### 🔴 BLOCKER 3: Hero Definition Unclear (Paths 1, 2, 3, 4)
**Impact**: All personas arrive confused about what Livepeer is  
**Fix**: Audit and update hero definition (AI infrastructure narrative)  
**Effort**: Low (review + edit)  
**Timeline**: Highest priority  

### ⚠️ BLOCKER 4: Complexity Ranking Missing (Path 3)
**Impact**: GPU operators make go/no-go decision without honest assessment  
**Fix**: Add complexity scoring (solo setup, time commitment, capital required)  
**Effort**: Low (write 1-page section)  
**Timeline**: High priority  

### ⚠️ BLOCKER 5: Routing Clarity (Paths 1-4)
**Impact**: Multiple personas confused by two routing pages  
**Fix**: Consolidate or clarify mission-control.mdx + get-started.mdx  
**Effort**: Low (reorganize existing content)  
**Timeline**: High priority  

---

## Validation Testing Protocol

To validate these paths after implementing fixes:

1. **User testing**: 1-2 sessions per persona (especially #1, #3, #4)
2. **Heuristic review**: Walk each path and score against criteria above
3. **Analytics**: Track bounces, time-on-page, destination-tab reach rates
4. **Post-visit survey**: "What is Livepeer?" and "Where did you go next?" for random sample

---

## Integrity Check

All paths are successful when:
- [ ] Persona #1 (Newcomer) completes journey in 5-10 minutes with confidence
- [ ] Persona #2 (Builder) reaches Developers tab in <2 minutes
- [ ] Persona #3 (GPU Op) knows whether setup is worth it
- [ ] Persona #4 (Investor) understands protocol direction and economics
- [ ] Persona #5 (Researcher) finds whitepaper within 2 clicks
- [ ] Persona #6 (Contributor) identifies contribution path and Discord channel
- [ ] Persona #7 (Returning) finds target content in <30 seconds
- [ ] NO persona ends up in wrong tab or confused
- [ ] NO persona backtracks more than once

---

## Review Questions

1. **Path 6 (Contributor)**: Should community entry be on Home, or is a separate Community tab better?

2. **Roadmap expectations**: Is a 3-phase roadmap enough, or should Home include quarterly milestones too?

3. **Proof section timing**: Should proof come before or after role discovery? Does order matter?

4. **Returning user nav**: Should Home have dedicated sticky nav, or rely on global site nav?

5. **Path testing**: Which personas should be user-tested first? Recommend: #1 (Newcomer), #3 (GPU Op), #4 (Investor).

6. **Definition audit**: Who owns the "hero definition" audit? Should it be reviewed by product/strategy before Home writes?

7. **Destination tab quality**: Are Developers, Orchestrators, Delegators tabs ready to receive these persona flows, or do they need prep?

8. **Analytics**: What metrics would prove each path is successful? (Time, backtracks, bounce rate, next-click destination?)
