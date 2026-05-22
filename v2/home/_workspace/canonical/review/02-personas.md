# Home Tab: Personas

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**: Home serves 7 distinct personas, all arriving with different contexts and needs. All must succeed in finding their path within 2-3 clicks.

---

## 7 Personas, Ranked by Priority

### #1 — Complete Newcomer (primary persona)
**Entry**: DePIN article, social media, friend referral, CoinGecko, YouTube  
**Arrives with**: No prior Livepeer knowledge, general crypto awareness, no technical context assumed  
**Wants to leave with**: Understanding of what Livepeer is + identification of which role applies + next-step link  
**Success metric**: Can articulate "Livepeer is [blank]" and identify their starting point within 90 seconds  
**Score**: Volume 3 (highest volume entry vector), Depth 2 (doesn't need technical depth yet), Impact 3 (all downstream) = **8/9**  
**Consensus**: All research runs agree this is primary  

**Content needed**:
- Hero: One-sentence definition (AI infrastructure, not transcoding)
- Role discovery: "Which of these describes you?" cards with icons
- Proof: 2-3 real-world projects (Daydream, Stream Video, Livepeer Studio)
- Next: Clear CTA to appropriate secondary persona's tab

---

### #2 — Evaluating Builder / Enterprise (secondary persona)
**Entry**: Search ("Livepeer API"), LinkedIn referral, enterprise BD, conference  
**Arrives with**: Technical background, aware of competitor APIs (RunwayML, ElevenLabs, Replicate), evaluating whether to build on Livepeer  
**Wants to leave with**: Clear understanding of API capabilities, pricing, reliability, developer experience  
**Success metric**: Finds API documentation or equivalent proof of readiness within 2 clicks  
**Score**: Volume 2, Depth 3, Impact 2 = **7/9**  
**Consensus**: 4/4 research runs  

**Content needed**:
- Quick wins: "Build AI video in X lines of code" code snippet
- Proof: Working examples (ComfyStream, Daydream plugins, custom integrations)
- Comparison: Why Livepeer vs centralized APIs
- Route: Clear link to Developers tab + API reference

---

### #3 — Curious GPU Operator (secondary persona)
**Entry**: Search ("earn with GPU"), Discord, mining community forums, YouTube  
**Arrives with**: Hardware (GPU sitting idle), mining/crypto background, unclear if Livepeer is worth the effort  
**Wants to leave with**: Clear answer to "can I earn?" + understanding of setup complexity + path to Orchestrators tab  
**Success metric**: Knows whether to pursue solo orchestrator, pool, or AI-specialist path  
**Score**: Volume 3, Depth 2, Impact 2 = **7/9**  
**Consensus**: 4/4 research runs  

**Content needed**:
- ROI snapshot: "Here's what people earn per GPU type" (with caveats)
- Path clarity: Solo vs pool vs AI-only (with honest complexity ranking)
- Setup time: "Expect 2-4 hours to start earning"
- Next: Link to Orchestrators tab + calculator tool if available

---

### #4 — Token Investor / LPT Holder (secondary persona)
**Entry**: Exchange (Coinbase, Kraken), "what is LPT" search, investor newsletter, analyst report  
**Arrives with**: Knowledge of crypto, staking, yield farming; possibly holds LPT or considering buying  
**Wants to leave with**: Understanding of protocol economics + delegation mechanism + roadmap + governance  
**Success metric**: Can explain LPT's role in the protocol and navigate to Delegators tab  
**Score**: Volume 2, Depth 3, Impact 2 = **7/9**  
**Consensus**: 3/4 research runs  

**Content needed**:
- Token story: What is LPT? Why does it matter? What drives value?
- Economics: Fee distribution, staking rewards, governance rights
- Roadmap: 3-phase Foundation plan + conviction signals
- Next: Link to Delegators tab + governance/voting info

---

### #5 — Protocol Researcher / Analyst (secondary persona)
**Entry**: Whitepaper search, Messari report, academic research, GitHub repo  
**Arrives with**: Deep technical knowledge, evaluating protocol design, looking for innovation  
**Wants to leave with**: Access to research artifacts (whitepaper, spec, architecture docs) + understanding of recent AI pivot  
**Success metric**: Finds whitepaper and core research within 2 clicks  
**Score**: Volume 1, Depth 3, Impact 1 = **5/9**  
**Consensus**: 2/4 research runs  

**Content needed**:
- Whitepaper: Direct link, not hidden
- Specs: Technical architecture, smart contract design
- Innovation story: AI pivot narrative + why it matters
- Deep dives: Blog archive, research repository, GitHub links

---

### #6 — Community Contributor (secondary persona)
**Entry**: Discord community, Twitter/X community, GitHub issues, Foundation announcement  
**Arrives with**: Community interest, wants to contribute but unclear how  
**Wants to leave with**: Path to contribution (dev, infrastructure, governance, content, community) + active working group links  
**Success metric**: Can identify 2-3 ways to contribute and find entry point  
**Score**: Volume 2, Depth 2, Impact 2 = **6/9**  
**Consensus**: 2/4 research runs (emerging persona)  

**Content needed**:
- Contribution paths: 5-6 ways to get involved
- Active initiatives: Foundation projects, bounties, community pools
- Working groups: Links to Discord channels, GitHub projects
- Entry barriers: What skills are needed? Time commitment?

---

### #7 — Returning User (meta-persona)
**Entry**: Bookmark, direct URL, internal doc link, search result  
**Arrives with**: Prior familiarity with Livepeer, knows the tab structure  
**Wants to leave with**: Specific content they're looking for without re-reading intro  
**Success metric**: Finds target content within 1 click  
**Score**: Volume 2, Depth 1, Impact 1 = **4/9**  
**Consensus**: 1/4 research runs (addressed via search/nav, not content)  

**Content needed**:
- Global search that works across docs
- Sticky navigation with quick links (primer, ecosystem, roadmap, calculator)
- Breadcrumb clarity: "You are in Home > About > Ecosystem"
- Keyboard shortcuts: Jump to search, jump to tab nav

---

## Key Design Decisions

### Primary persona drives structure
**Decision**: Newcomer (#1) is the primary persona. Home architecture must prioritize making it easy for them to answer "what is this, and where do I go?"
**Implication**: Hero section should be **plain-language** (not technical), with role cards as the primary CTA. Advanced content (roadmap, whitepaper, economics) is secondary.

### All personas must succeed
**Decision**: Returning users can search. Researchers can scroll to find whitepaper link. Evaluators can find roadmap. BUT each persona's primary need must be **findable within 2 clicks** from landing.
**Implication**: Navigation and link placement is critical. The "role card" CTA pathway is not enough — we also need direct links to Developers, Orchestrators, Delegators, and About tabs visible above the fold.

### No role assumption; all inclusive
**Decision**: Home assumes zero background. A GPU operator arriving via search doesn't know they're called an "Orchestrator" yet. A developer looking for AI APIs might not know Livepeer exists yet. Home must work for all of them without jargon.
**Implication**: Role cards need plain-language names ("Make money with GPU hardware" not "Become an Orchestrator") and descriptions that surface intent, not role.

### The "2-click guarantee"
**Decision**: From Home landing page, any persona should reach their destination tab within 2 clicks. Click 1: identify role/need. Click 2: go there.
**Implication**: This means role cards are the primary navigation pattern. Search is backup. But all 7 tabs must be **directly reachable** from Home's primary nav, not buried.

### Current stale content risk
**Decision**: Home must define Livepeer correctly. In 2025, Livepeer is "real-time AI infrastructure." It was "video transcoding network." It is not "decentralized compute" (too broad). It is not just "video API" (too narrow).
**Implication**: Hero definition must be audit-checked for accuracy. evolution.mdx must be read to verify this narrative is current. AI pivot (70% of fees) must be visible.

---

## Persona Coverage Across Current Content

| Persona | Primary path | Current coverage | Gap |
|---|---|---|---|
| Newcomer | primer + role cards | `primer.mdx` + `get-started.mdx` | Definition accuracy; complexity of role cards |
| Builder | "Build on Livepeer" + API | `mission-control.mdx`? | Link placement; API readiness clarity |
| GPU Op | ROI + setup path | `get-started.mdx` → Orchestrators | ROI calculator missing; complexity ranking missing |
| Investor | LPT story + roadmap | `about/roadmap.mdx` (STUB) | Roadmap is 1.8KB; needs full content |
| Researcher | Whitepaper + architecture | `about/ecosystem.mdx` | Whitepaper link visibility; spec accessibility |
| Contributor | Paths + initiatives | NOT IN HOME | Missing entirely; should link to Community tab |
| Returning | Search + sticky nav | Search unclear | Nav stickiness; breadcrumbs unclear |

---

## Integrity Check

Home serves personas well when:
- [ ] Newcomer can answer "what is Livepeer" within 90 seconds of landing
- [ ] GPU operator can determine if they should pursue setup (yes/no/maybe path clear)
- [ ] Developer can find Developers tab within 2 clicks
- [ ] Investor can access economics + roadmap within 2 clicks
- [ ] Researcher can find whitepaper without searching external docs
- [ ] Contributor can identify 2-3 ways to get involved
- [ ] Returning user finds sticky nav or search without friction
- [ ] Definition of Livepeer is **current** and **accurate**

---

## Review Questions

1. **Is the primary persona right?** Is "Complete Newcomer" correct, or should "Evaluating Builder" be primary?

2. **Should Community Contributor (#6) be ranked higher?** Currently it's secondary due to volume, but impact might be high.

3. **Are there missing personas?** Should "Foundation/DAO member" be a separate persona?

4. **Does "2-click guarantee" hold for all 7 personas** with current Home structure? Test each one.

5. **Role card naming**: Should they use plain language ("Make money with GPU hardware") or technical roles ("Become an Orchestrator")?

6. **Should Home have a "FAQ" section** for questions like "What is LPT?" "How much can I earn?" that span multiple personas?

7. **Researcher persona (#5)**: Is whitepaper link visibility adequate, or does this persona need more dedicated content on Home?

8. **Returning user (#7)**: Is this a persona that Home should optimize for, or is this the job of search + navigation only?

9. **What is the "success metric" for Home overall?** Is it "all 7 personas find their path in 2 clicks," or something else?

10. **Evaluation cadence**: How often should persona research be refreshed? Every 6 months? Every year? Only when major feature ships?
