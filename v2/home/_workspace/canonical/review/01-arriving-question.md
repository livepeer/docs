# Home Tab: Arriving Question

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**: Defines the single primary question that drives all Home tab architecture. All personas arrive with different context but converge on this core cognitive task.

---

## The Unified Arriving Question

**"What is Livepeer, and where do I go?"**

This question encompasses three sub-questions:
1. **Identity**: What does Livepeer actually do? (Not "video transcoding network" — that's stale. "Real-time AI infrastructure" is the 2025 story.)
2. **Role matching**: Where does my use case fit? (Am I a developer? A GPU operator? An investor?)
3. **Next step**: How do I leave this page to accomplish my goal?

All seven persona types land on Home with this fundamental uncertainty. Home's job is to answer it in a way that works for complete newcomers AND sophisticated evaluators. This requires **extreme clarity without condescension**.

---

## Per-Audience Variants

Home must present variants of this question depending on **how the person arrived**:

### Variant A: "What is this? (I got here from a blog/social media)"
**Entry vectors**: DePIN article, Twitter/X, friend recommendation, CoinGecko, YouTube  
**Context**: No prior Livepeer knowledge. May have heard "AI," "decentralized," or "earn money."  
**Reframe**: "Here's what Livepeer does in 30 seconds. Which of these describes you?"  
**Home must deliver**: 
- One-sentence definition (what problem does it solve)
- 3-4 role cards (developer, GPU operator, token holder, curious investor)
- Visual proof: real projects using Livepeer (Daydream, Stream Video, Livepeer Studio)

### Variant B: "Is this what I'm looking for? (I searched for something specific)"
**Entry vectors**: Search ("Livepeer AI API"), ("GPU rental"), ("video infrastructure"), ("decentralized compute")  
**Context**: Arrived with a specific need. May already understand some context.  
**Reframe**: "You're looking for X. Livepeer does Y. Here's how you get started."  
**Home must deliver**:
- Quick routing to the right tab (Developers, Orchestrators, Delegators, Solutions)
- Clear "if you're looking for X, go here" messaging
- 2-click guarantee: from landing to destination tab

### Variant C: "Is this worth my time? (I'm evaluating the protocol)"
**Entry vectors**: Investor research, analyst evaluation, enterprise BD, academic research  
**Context**: Sophisticated, skeptical, looking for credibility signals  
**Reframe**: "Here's the vision, the proof, and the roadmap. Make your assessment."  
**Home must deliver**:
- Overview of protocol design and innovation (AI pivot narrative)
- Market proof: adoption metrics, real projects, protocol economics
- Strategic direction: roadmap, Foundation mandate, governance
- Deep links to whitepaper, research, and ecosystem docs

### Variant D: "Where can I contribute? (I'm looking to get involved)"
**Entry vectors**: Discord invite, Twitter community, Foundation announcement, GitHub  
**Context**: Wants to participate. Needs to know what "contributing" means for different roles.  
**Reframe**: "You can contribute in these ways. Here's how to start."  
**Home must deliver**:
- Paths to contribution: dev, infrastructure, governance, content, community
- Links to active initiatives (Foundation funded projects, bounties, community pools)
- Clear entry points (Discord channels, working groups, volunteer roles)

### Variant E: "I've been here before. Where was that thing? (Returning user)"
**Entry vectors**: Bookmark, direct URL from docs link, search bar  
**Context**: Knows the structure. Needs specific content.  
**Reframe**: "Quick navigation. Search. Or drill down."  
**Home must deliver**:
- Global search that works
- Sticky nav with favorites/history
- Direct links to popular pages (primer, ecosystem, roadmap)

---

## Design Principle: Single Answer, Multiple Doors

The answer to "What is Livepeer, and where do I go?" is **always the same**: "Livepeer is real-time AI infrastructure. You plug in your use case. Here's your path."

But the **doors into that answer** differ by persona:
- Newcomer sees: Showcase + role cards
- Developer sees: Code examples + API routing
- Operator sees: ROI calculator + setup guide
- Evaluator sees: Vision + metrics + roadmap
- Community sees: Contribution paths + active projects

All doors lead to the same room. The Home tab's job is to **match the door to the person** while keeping the room layout constant and navigable.

---

## Content Requirements for This Question

To answer the arriving question adequately, Home needs:

### Mandatory content
1. **Definition**: One-sentence AI infrastructure story (not video transcoding)
2. **7 role cards**: "I am a [role]. Show me my path." with destination links
3. **Proof carousel**: 3-5 live projects/products built on Livepeer
4. **Quick primer**: 3-5 minute "why this matters" explainer
5. **2-click routing guarantee**: From landing page to destination tab

### High-value content
6. **Roadmap**: Foundation's 3-phase plan (2025, 2026-27, 2028+)
7. **Economics snapshot**: Protocol fee trends, AI inference >70% narrative
8. **Quick links**: Popular pages (primer, ecosystem, whitepaper)

### Optional but helpful
9. **FAQ**: "What is LPT?" "How much can I earn?" "Is this legit?"
10. **Trending/updates**: Live activity or date-stamped highlights
11. **Community entry points**: Discord, Twitter, blog links

---

## Integrity Check

The arriving question is **answered well** when:
- [ ] A complete newcomer can identify which role(s) apply to them within 60 seconds
- [ ] A developer searching for "Livepeer AI API" finds the Developers tab within 2 clicks
- [ ] A GPU operator searching for "earn with GPU" finds the Orchestrators tab within 2 clicks
- [ ] An investor can quickly access vision + roadmap + economics
- [ ] A community member can find Discord/Twitter/ways to contribute
- [ ] The definition of Livepeer is **current** (AI infrastructure, not transcoding)

---

## Review Questions

1. **Is the arriving question framed correctly?** Should it be different for each persona (1 question per variant), or should all personas see the same unified answer first?

2. **Does the current Home tab answer all five variants adequately?** Which variant(s) are under-served today?

3. **Is "2-click guarantee to destination" realistic?** Should it be 2 clicks or 3 clicks?

4. **What is the primary entry vector?** Should Home optimize for social media arrivals (variant A) or search/evaluation arrivals (variants B & C)?

5. **The AI infrastructure narrative**: Is "Livepeer is real-time AI infrastructure" the right headline for Home, or should variant-specific headlines be different?

6. **Proof and credibility**: Should the Home tab lead with use cases (Daydream, Stream Video) or with protocol-level metrics (fee data, active orchestrators)?

7. **Roadmap prominence**: Is the Foundation roadmap high-priority Home content, or should it live only in the About section?

8. **Community contribution**: Is contributing to Livepeer a key arriving question, or does it belong in a separate Community tab?
