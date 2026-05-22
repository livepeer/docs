# Home Tab: User Journey Map

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**: Traces the complete journey from landing page through role discovery to successful routing and next action.

---

## The Universal Home Journey

All seven personas follow a similar **journey shape**, but with different entry points and exit destinations.

### Journey Stages

```
STAGE 1: LANDING
  Entry: Blog, social, search, Discord, friend, newsletter
  Cognitive state: "Where am I?" / "Is this relevant?"
  Home's job: Answer in <30 seconds

STAGE 2: ORIENTATION (HERO)
  Entry: Reading headline + visual
  Cognitive state: "What does this do?" / "Does this solve my problem?"
  Home's job: Define Livepeer clearly (not video transcoding — AI infrastructure)
  Success: Visitor can say "This is [blank]" with confidence

STAGE 3: SELF-IDENTIFICATION (ROLE CARDS)
  Entry: Scanning role cards or taking discovery quiz
  Cognitive state: "Which one is me?" / "What's the path for my situation?"
  Home's job: Present 7-8 options, plain language, no jargon
  Success: Visitor clicks a card that feels like "yes, that's me"

STAGE 4: PRIMER LAYER (OPTIONAL)
  Entry: Some visitors click "Learn more" before leaving
  Cognitive state: "Give me 5 more minutes to feel confident"
  Home's job: Deliver primer content (primer.mdx) that explains
  Success: Visitor feels educated, not confused

STAGE 5: PROOF LAYER (OPTIONAL)
  Entry: Skeptical visitors look for credibility
  Cognitive state: "Is this real?" / "Are people actually using this?"
  Home's job: Show Daydream, Studio, real projects, protocol metrics
  Success: Visitor believes this is a real protocol with real users

STAGE 6: ROUTING (ROLE CARD CTA)
  Entry: Visitor clicks role card or destination link
  Cognitive state: "I'm ready to go to [tab]"
  Home's job: Link to correct destination (Developers, Orchestrators, etc.)
  Success: Visitor arrives at correct starting point for their role

STAGE 7: EXIT
  Cognitive state: "I know what to do next"
  Success: Visitor never returns to Home confused
```

---

## Variant Journeys by Persona

### Persona #1: Complete Newcomer — Full Journey (all stages)
```
ENTRY: Twitter post "learn about AI infrastructure"
  ↓
LANDING: Lands on Home hero section
  ↓
ORIENTATION: Reads hero: "Livepeer is real-time AI infrastructure for video"
  → Thinks: "That's... interesting. But what does it actually do?"
  ↓
PRIMER LAYER: Clicks "What is Livepeer?" → reads primer.mdx
  → Understands: video processing, GPU compute, decentralized network
  → Still thinking: "What's the opportunity for me?"
  ↓
ROLE CARDS: Returns to Home, sees "I want to..." cards
  → Scans: Developer, GPU operator, Token holder, Investor, Creator, Community...
  → Identifies: "I'm probably a 'Creator/Streamer' or 'Just curious about the tech'"
  ↓
PROOF LAYER: Scrolls down to see use cases
  → Sees: Daydream (AI video), Livepeer Studio (streaming), real projects
  → Thinks: "OK, people are actually building with this"
  ↓
ROUTING: Clicks "Explore Creator/Streaming path" OR "Learn more about protocol"
  ↓
EXIT: Lands on Solutions tab (streaming) OR About tab (ecosystem)

Duration: 5-10 minutes. Success: Visitor can now answer "what is Livepeer" correctly.
```

---

### Persona #2: Evaluating Builder — Fast Journey (stages 1, 2, 3, 6)
```
ENTRY: Search "Livepeer AI API" or LinkedIn referral
  ↓
LANDING: Lands on Home
  ↓
ORIENTATION: Scans hero for: "Is this an API provider?" → "Yes, it mentions AI"
  ↓
ROLE CARDS: Scrolls to role cards
  → Identifies: "I'm a Developer wanting to Build on Livepeer"
  ↓
ROUTING: Clicks Developer card → goes to Developers tab
  ↓
EXIT: Now in API reference, code examples, quickstart

Duration: <2 minutes. Success: Reaches Developers tab with clarity about what Livepeer offers.
```

---

### Persona #3: Curious GPU Operator — Practical Journey (stages 1, 2, 3, 5, 6)
```
ENTRY: Search "earn money GPU" or Discord "join Livepeer"
  ↓
LANDING: Lands on Home
  ↓
ORIENTATION: Reads hero + scans for GPU/earning mention
  ↓
ROLE CARDS: Finds "Earn with GPU Hardware" card
  → Thinks: "That's me!"
  ↓
PROOF LAYER: Wants to know if it's real
  → Sees: Metrics (active orchestrators, earning data, real projects)
  → Thinks: "OK, people are actually running this"
  ↓
ROUTING: Clicks "Earn with GPU" card → Orchestrators tab
  ↓
EXIT: Now reading ROI guides, setup docs, hardware requirements

Duration: 3-5 minutes. Success: Knows it's viable and where to start.
```

---

### Persona #4: Token Investor — Economics-Focused Journey (stages 1, 2, 5, 3, 6)
```
ENTRY: CoinGecko / "what is LPT" search / analyst report
  ↓
LANDING: Lands on Home
  ↓
ORIENTATION: Wants to see: economics, roadmap, team
  ↓
PROOF LAYER: Scrolls for: metrics, fee data, Foundation info
  → Sees: protocol economics, staking yields, active infrastructure
  ↓
ROLE CARDS: Identifies "LPT Holder / Investor"
  ↓
ROUTING: Clicks link to Delegators tab + About/Roadmap
  ↓
EXIT: Now reading delegation guide, roadmap, governance

Duration: 5-7 minutes. Success: Understands LPT's value and where staking fits.
```

---

### Persona #5: Protocol Researcher — Deep Dive Journey (stages 1, 2, skip role cards, jump to research)
```
ENTRY: Whitepaper search / academic research / GitHub
  ↓
LANDING: Lands on Home (or skips and goes directly to About)
  ↓
ORIENTATION: Scans for research artifacts link
  ↓
ROUTING: Clicks "Research & Technical" or "Whitepaper"
  ↓
EXIT: Now in technical documentation, specs, smart contracts

Duration: <2 minutes. Success: Finds whitepaper and architecture docs quickly.
Note: This persona might skip Home entirely. Home should make research linkage obvious.
```

---

### Persona #6: Community Contributor — Engagement Journey (stages 1, 2, skip role cards, find community)
```
ENTRY: Discord invite / Twitter / Foundation announcement
  ↓
LANDING: Lands on Home (or came from community channel)
  ↓
ORIENTATION: Reads headline
  ↓
COMMUNITY LAYER: Looks for: Discord link, working groups, contribution paths
  → Sees: Ways to contribute, community channels, bounty info
  ↓
ROUTING: Clicks "Get Involved" or Discord link
  ↓
EXIT: Now in Discord, GitHub projects, or contribution guide

Duration: 1-3 minutes. Success: Finds entry point to community work.
Note: This persona needs a dedicated "Engagement" section on Home (currently missing).
```

---

### Persona #7: Returning User — Shortcut Journey (stages 6, 7)
```
ENTRY: Bookmark / direct URL / search result
  ↓
LANDING: Lands on Home with purpose
  ↓
ROUTING: Uses sticky nav, breadcrumbs, or search to jump to target
  ↓
EXIT: Reaches target content without re-reading intro

Duration: <30 seconds. Success: Finds target without friction.
Note: This persona doesn't care about stages 1-5. Home's nav must serve them.
```

---

## Friction Points & Current Gaps

### Friction 1: Vague Hero Definition
**Current risk**: Hero section defines Livepeer as "video transcoding network" or "decentralized compute" (unclear, stale)
**Impact**: Newcomers and evaluators leave confused. "Is this a video API or GPU rental or AI infrastructure?"
**Where it breaks the journey**: Stage 2 (Orientation) fails. Visitor can't answer "what is this?"
**Required fix**: Hero definition must be **one sentence, current, accurate, jargon-free**: "Livepeer is real-time AI infrastructure for video" or similar.

---

### Friction 2: Role Card Jargon
**Current risk**: Role cards use technical terms ("Orchestrator," "Delegator," "Gateway") that newcomers don't understand
**Impact**: GPU operators don't recognize themselves in "Orchestrator" card. Investors don't click "Delegator" card.
**Where it breaks the journey**: Stage 3 (Self-Identification) fails. Visitor can't click the right card.
**Required fix**: Role cards use **intent language** ("I want to earn with GPU hardware") not role language ("Become an Orchestrator").

---

### Friction 3: Two Routing Pages
**Current risk**: Both `mission-control.mdx` and `get-started.mdx` provide routing. Unclear which to use.
**Impact**: Redundancy. Inconsistency. Visitor confusion about which path is "official."
**Where it breaks the journey**: Stage 3-6 pathway unclear.
**Required fix**: Consolidate or clarify: is one the "quick routing" (role cards) and the other the "detailed paths"? Or are they duplicates?

---

### Friction 4: Proof is Hard to Find
**Current risk**: Daydream, Studio, real projects not obviously linked from Home hero or role cards
**Impact**: Skeptical visitors (personas #2, #4, #5) don't find credibility signals. They leave.
**Where it breaks the journey**: Stage 5 (Proof Layer) hard to reach.
**Required fix**: Proof carousel visible on Home without scrolling far. Real projects, live products, protocol metrics.

---

### Friction 5: Roadmap Content Missing
**Current risk**: `roadmap.mdx` is 1.8KB stub. Investors and evaluators need full 3-phase Foundation plan.
**Impact**: Evaluators (persona #4, #5) can't assess strategic direction. Investment credibility suffers.
**Where it breaks the journey**: Stage 2 (Orientation) and Stage 5 (Proof) incomplete.
**Required fix**: `roadmap.mdx` needs full content: 2025 Foundation phase, 2026-27 Scaling phase, 2028+ Decentralization phase.

---

### Friction 6: Community Entry Missing
**Current risk**: No Home section for "Get involved" / "Contribute" / "Join community"
**Impact**: Persona #6 (Community Contributor) has no pathway from Home.
**Where it breaks the journey**: Stages 3-6 missing entirely for this persona.
**Required fix**: Add "Engagement" section to Home with contribution paths, Discord link, active initiatives.

---

### Friction 7: Search/Nav Clarity
**Current risk**: Returning users can't quickly navigate or search. Breadcrumbs unclear. Quick-links missing.
**Impact**: Persona #7 frustrated. They have to re-read intro content.
**Where it breaks the journey**: Stage 6-7 friction.
**Required fix**: Sticky nav, breadcrumbs, search, quick-links bar (primer, roadmap, API, calculator, ecosystem).

---

## Journey Success Metrics

### Overall success: "7 personas, 7 different exits, all successful"

| Persona | Correct exit tab | Time to exit | Confidence at exit | Current status |
|---|---|---|---|---|
| #1 Newcomer | Solutions or About | 5-10 min | "I understand what this is" | Unknown — depends on hero clarity |
| #2 Builder | Developers | <2 min | "I can integrate this" | Unknown — depends on API visibility |
| #3 GPU Op | Orchestrators | 3-5 min | "I know if this is worth setup" | Unknown — depends on ROI clarity |
| #4 Investor | Delegators + About | 5-7 min | "I understand LPT's value" | Unknown — depends on roadmap content |
| #5 Researcher | Technical/Research | <2 min | "I found the whitepaper" | Unknown — depends on research link visibility |
| #6 Contributor | Community | 1-3 min | "I know how to get involved" | FAIL — no community section |
| #7 Returning | Target content | <30 sec | "I found what I needed" | Unknown — depends on search/nav quality |

---

## Integrity Check

The Home journey is working when:
- [ ] All 7 personas can complete their journey successfully
- [ ] Success time for personas #1, #3, #4 is <10 minutes
- [ ] Success time for personas #2, #5, #7 is <3 minutes
- [ ] Confidence is high: no visitor leaves confused about what Livepeer is
- [ ] No visitor ends up in wrong tab
- [ ] Community contributor can identify contribution paths
- [ ] Returning user never has to re-read intro

---

## Review Questions

1. **Is the journey shape right for all personas?** Should some personas skip stages (e.g., researchers skip role cards)?

2. **Hero definition**: What is the **correct, current definition** of Livepeer for 2025? "AI infrastructure"? "GPU network"? "Video infrastructure"?

3. **Role card naming**: What language resonates? "I want to..." or "I am..." or something else?

4. **Two routing pages**: Are `mission-control.mdx` and `get-started.mdx` complementary (one quick, one detailed) or duplicates?

5. **Proof carousel**: What are the top 3-5 real projects/products we should showcase?

6. **Community entry**: Should Home have a dedicated "Get Involved" section, or should community contribution live in a separate Community tab?

7. **Journey testing**: How do we test this? User interviews? Usability testing? Analytics tracking?

8. **Persona exit destinations**: Are these correct?
   - Newcomer → Solutions or About
   - Builder → Developers
   - GPU Op → Orchestrators
   - Investor → Delegators + About
   - Researcher → Technical
   - Contributor → Community
   - Returning → Target content
