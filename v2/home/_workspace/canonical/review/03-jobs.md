# Home Tab: Jobs to Be Done

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**: Defines the core functional and emotional jobs that Home must accomplish for all visitors. These jobs transcend specific personas.

---

## 2 Core Jobs (Mandatory)

### Job J1: **COMPREHEND** — Establish identity and credibility
**When**: Visitor lands on Home for the first time  
**Visitor wants to**: Understand what Livepeer is, quickly and clearly, in terms relevant to their background  
**So they can**: Decide whether to engage deeper or leave  

**Success criteria**:
- [ ] Visitor can complete this sentence within 60 seconds: "Livepeer is [AI infrastructure / GPU network / decentralized compute / video API / take-your-pick-correctly]"
- [ ] Visitor recognizes the main value proposition: "This helps me [build AI / earn with GPU / invest / understand crypto / contribute]"
- [ ] Visitor believes Livepeer is real: sees active projects, team, Foundation, roadmap, community — not vaporware
- [ ] Visitor can articulate why NOW: AI pivot, protocol economics, market proof

**Content required**:
- Hero: One sentence + supporting image/video (not 500-word essay)
- Proof carousel: Daydream, Stream Video, Livepeer Studio, custom integrations (real products, real users)
- Credibility signals: Foundation info, active orchestrators count, protocol fee snapshot, team/leadership
- Narrative: AI infrastructure shift (2024-2025), not legacy "transcoding network" story

**Current Home gaps**:
- `primer.mdx` is strong (10.6KB) — good job with comprehension
- `evolution.mdx` may still lead with transcoding narrative (need to verify AI pivot is prominent)
- Hero section definition needs audit — is it "AI infrastructure" or something else?
- Proof: Daydream/Studio visibility on landing page unclear

---

### Job J2: **ROUTE** — Navigate to the right next destination
**When**: Visitor has understood what Livepeer is and wants to take an action  
**Visitor wants to**: Find the starting point for their specific role/goal  
**So they can**: Move forward without re-reading general content  

**Success criteria**:
- [ ] Visitor can identify "that's me" within 2 role-card clicks
- [ ] Visitor knows which tab to visit next within 2 clicks total
- [ ] Visitor never ends up in the wrong place (role cards are accurate and mutually exclusive)
- [ ] Visitor can return to Home and pick a different path easily

**Content required**:
- Role cards: 7-8 cards, plain-language names, 1-line descriptions, destination CTAs
- Card order: High-volume personas first (Newcomer, GPU operator, Developer)
- Card clarity: "I want to [verb]" (not "I am [role]") — this reduces jargon friction
- Fallback routing: Search, tab nav, "explore all" link for the undecided

**Current Home gaps**:
- `get-started.mdx` (7.5KB) provides routing but structure unclear without reading
- `mission-control.mdx` (6.3KB) has 9-card routing hub — need to verify card clarity
- Two competing routing pages: are they complementary or redundant?
- No "I'm not sure yet" path for genuinely confused visitors

---

## 5 Supporting Jobs (High-Value)

### Job J3: **EVALUATE** — Form a complete picture of protocol viability
**When**: Visitor is evaluating Livepeer for investment, partnership, or significant commitment  
**Visitor wants to**: See vision, proof, roadmap, and economics in one place  
**So they can**: Make a confident go/no-go decision  

**Success criteria**:
- [ ] Evaluator can access: vision statement, recent roadmap, protocol economics (fee distribution, earnings data), Foundation mandate, whitepaper
- [ ] Evaluator can see: market proof (active orchestrators, total stake, daily fees), competitive positioning, team/leadership
- [ ] Evaluator finds all this within 3 clicks of Home

**Content required**:
- Quick summary card: "Here's the vision in 30 seconds"
- Roadmap section: Foundation's 3-phase plan (2025, 2026-27, 2028+) — currently a 1.8KB stub
- Economics dashboard: Fee trends, AI inference >70% narrative, delegate yield data
- About section links: Ecosystem (25.7KB), benefits, vision — all good existing content

**Current Home gaps**:
- `roadmap.mdx` is 1.8KB — needs full content from Foundation blog/Transformation SPE docs
- Economics/metrics not visible on Home (this is evaluator-critical)
- Competitive positioning unclear — how does Livepeer compare to Runwayml, Replicate, ElevenLabs?

---

### Job J4: **INVESTIGATE** — Access research artifacts and technical depth
**When**: Visitor is a researcher, analyst, or protocol engineer evaluating technology viability  
**Visitor wants to**: Find whitepaper, architecture docs, smart contract code, research papers  
**So they can**: Understand protocol mechanics and innovation  

**Success criteria**:
- [ ] Researcher finds whitepaper with 1-2 clicks (currently unclear if it's easily findable)
- [ ] Researcher can locate: architecture docs, smart contracts, blog research archive, specification docs
- [ ] Researcher understands AI pivot (why this matters, what changed)

**Content required**:
- Deep-dive section: "Research & Technical" with links to all artifacts
- Whitepaper: Visible direct link (not hidden in About subsection)
- Specs: Smart contract design, protocol mechanics, network architecture
- Innovation narrative: AI pivot story — why AI became >70% of fees

**Current Home gaps**:
- Whitepaper findability unclear — need to test actual user path
- Research artifacts scattered (blog, GitHub, About section) — not consolidated
- AI pivot narrative not confirmed as prominently placed

---

### Job J5: **DECIDE** — Determine realistic personal viability ("Is this for me?")
**When**: Visitor is seriously considering getting involved but needs honest assessment  
**Visitor wants to**: See complexity ranking, time commitment, capital requirements, realistic earnings  
**So they can**: Make a go/no-go decision on participation  

**Success criteria**:
- [ ] GPU operator can answer: "Do I have enough LPT?" "Will I earn enough to justify setup?" "How complex is this?"
- [ ] Developer can answer: "Is this API production-ready?" "What integrations exist?" "What's the learning curve?"
- [ ] Investor can answer: "What's the realistic yield?" "What are the risks?" "How much do I need to stake?"
- [ ] No visitor leaves Home with false expectations

**Content required**:
- Complexity rankings: Solo setup vs pool vs AI-only (with honest 1-5 difficulty scores)
- ROI calculator / earnings estimator (for operators)
- API readiness proof (for developers) — working code examples
- Risk disclosure: Volatility, smart contract risk, regulatory uncertainty, market risk
- Time investment: "Expect 2-4 hours initial setup, then X hours/week maintenance"

**Current Home gaps**:
- No honest complexity ranking or difficulty scores
- No ROI calculator visible (if it exists, it's not on Home)
- Risk disclosure absent (should be here, not buried)
- Time commitment ranges missing

---

### Job J6: **ENGAGE** — Find community and ways to contribute
**When**: Visitor wants to participate in the ecosystem beyond being a passive user  
**Visitor wants to**: Discover contribution opportunities, working groups, community channels  
**So they can**: Get involved in ways that match their skills and interests  

**Success criteria**:
- [ ] Contributor can identify 3-5 ways to contribute (dev, infrastructure, governance, content, community)
- [ ] Contributor knows where to start (Discord channels, GitHub issues, Foundation projects)
- [ ] Contributor can find active initiatives and bounties
- [ ] Contributor can find time commitment and skill requirements for each path

**Content required**:
- Contribution paths section: 5-6 clear entry points (dev, infra, governance, content, community)
- Community hub: Discord invite, Twitter/X links, blog, GitHub, Foundation projects
- Active initiatives: Current Foundation-funded projects, bounties, community pools, working groups
- Skill matching: "If you know [skill], you can contribute [here]"

**Current Home gaps**:
- No community/contribution section on Home (entire job missing)
- Community links scattered (unclear where to start)
- Active initiatives not visible from Home

---

### Job J7: **RETURN** — Find what you're looking for (known item retrieval)
**When**: Visitor has been to Home/docs before and wants specific content  
**Visitor wants to**: Jump directly to target content without browsing  
**So they can**: Solve their immediate problem quickly  

**Success criteria**:
- [ ] Returning visitor finds target within 1 click from Home or search
- [ ] Search works: finds primer, roadmap, API reference, specific tutorials, calculator tools
- [ ] Navigation is persistent: "Home > About > Roadmap" breadcrumb is clear
- [ ] Bookmarks work: Direct links to popular pages are stable

**Content required**:
- Global search functionality (not specific to Home, but critical)
- Quick-links bar: Top 10 pages (primer, roadmap, ecosystem, calculator, API docs)
- Breadcrumbs on every page
- Stable URLs: No page moves without redirects

**Current Home gaps**:
- Search quality unclear (need testing)
- Quick-links bar missing or non-sticky
- Breadcrumbs not visible on all pages

---

## Job Prioritization Matrix

| Job | Core/Supporting | Volume | Urgency | Dependency | Priority |
|---|---|---|---|---|---|
| J1 Comprehend | Core | High | High | None | **P0** |
| J2 Route | Core | High | High | Requires J1 | **P0** |
| J3 Evaluate | Supporting | Medium | High | None | **P1** |
| J4 Investigate | Supporting | Low | Medium | None | **P2** |
| J5 Decide | Supporting | High | High | Requires J1+J2 | **P1** |
| J6 Engage | Supporting | Medium | Medium | None | **P1** |
| J7 Return | Supporting | Medium | Low | None | **P2** |

---

## Current Job Coverage Assessment

| Job | Current state | Gap | Risk |
|---|---|---|---|
| J1 Comprehend | `primer.mdx` strong; hero definition unclear | Definition audit needed | Stale transcoding narrative |
| J2 Route | `mission-control.mdx` + `get-started.mdx`; unclear | Role card clarity; order; fallback path | Confusion between two routing pages |
| J3 Evaluate | Partial (scattered across About) | Roadmap stub; economics absent; roadmap needs full content | Evaluators leave; investor skepticism |
| J4 Investigate | Partial (not consolidated) | Whitepaper visibility; artifact organization | Researchers struggle to find research |
| J5 Decide | Missing | Complexity rankings; ROI calculator; time commitment; risk disclosure | False expectations; user frustration |
| J6 Engage | Completely missing | Community section; contribution paths; active initiatives | Community potential untapped |
| J7 Return | Partial (search unclear) | Search quality; quick-links; breadcrumbs | Returning users frustrated |

---

## Integrity Check

Home accomplishes jobs well when:
- [ ] Any visitor completes Job J1 (Comprehend) within 2 minutes
- [ ] Any visitor completes Job J2 (Route) within 2 clicks
- [ ] Evaluators can complete Job J3 (Evaluate) within 5 minutes
- [ ] Researchers can complete Job J4 (Investigate) within 3 clicks
- [ ] Potential participants can complete Job J5 (Decide) with honest information
- [ ] Community members can complete Job J6 (Engage) with 3+ concrete entry points
- [ ] Returning users complete Job J7 (Return) within 1 click

---

## Review Questions

1. **Are these the right jobs?** Are there other critical jobs we're missing (e.g., "Troubleshoot," "Compare," "Get support")?

2. **Priority trade-offs**: If we can only do 3 jobs well initially, should we do J1, J2, J3 or J1, J2, J5?

3. **Job J5 (Decide) — complexity/honesty**: Should Home show negative information (risks, difficulty) prominently, or should we leave that to tab-specific docs?

4. **Job J6 (Engage) — community**: Is community/contribution a Home responsibility, or should this be a separate Community tab that Home links to?

5. **Job J3 (Evaluate) — what metrics matter most?** Are fee trends, active orchestrators, and stake the right credibility signals, or are there others?

6. **Definition of "clear"**: How do we verify that Job J1 (Comprehend) is actually complete? What's the test?

7. **Two routing pages (J2)**: Are `mission-control.mdx` and `get-started.mdx` serving different purposes, or is this redundant?

8. **Fallback routing**: What happens when a visitor completes J1 (Comprehend) but isn't sure which J2 path to take? Where do they go?
