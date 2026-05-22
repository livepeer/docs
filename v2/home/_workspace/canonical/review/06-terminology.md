# Home Tab: Terminology & Plain Language

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**: Defines 25 core terms that Home must communicate in plain language. These terms are the bridge between technical reality and newcomer understanding.

---

## Core Principle

**Home assumes zero background.** A visitor arriving via social media or friend referral should be able to read Home without searching for definitions. Every term should be:
- **Explained on first use** (in context, not in a glossary)
- **Used consistently** (same term, same meaning, everywhere)
- **Free of jargon** (avoid nesting technical terms inside explanations)
- **Contextual** (explanation changes based on persona using it)

---

## The 25 Essential Terms

### 1. LIVEPEER (the protocol/platform)
**Technical definition**: Decentralized infrastructure for real-time video processing and AI compute.  
**Plain language**: "Livepeer is a network where you can build AI video software, operate GPUs for income, or invest in the infrastructure."  
**For newcomers**: "Think of it like YouTube's video infrastructure, but decentralized and powered by community GPU operators."  
**For developers**: "Livepeer is the infrastructure layer for AI video applications."  
**For GPU operators**: "Livepeer is the network where you rent out your GPU to earn cryptocurrency."  
**Home usage**: Lead with the newcomer version (broadest); link to detailed sections for other personas.

---

### 2. ORCHESTRATOR (the GPU operator role)
**Technical definition**: A node operator who runs Livepeer software on GPU hardware, processes jobs, earns fees.  
**Plain language**: "An Orchestrator is someone who operates GPU hardware on Livepeer and earns money from it."  
**Jargon risk**: The word "Orchestrator" means nothing to newcomers. Home should use "GPU operator" or "GPU miner" instead, then introduce "Orchestrator" as the technical term.  
**Home usage**: Avoid "Orchestrator" in hero/role cards. Use "Earn with GPU hardware." Link to Orchestrators tab where the term is defined.

---

### 3. LPT (Livepeer Token)
**Technical definition**: ERC-20 token that grants voting rights in governance and generates staking yield.  
**Plain language**: "LPT is the cryptocurrency of Livepeer. You can buy it, stake it to earn rewards, and vote on how the protocol evolves."  
**For investors**: "LPT is the governance and staking token. It generates yield through protocol fee distribution."  
**Home usage**: "What is LPT?" in quick facts / About section. Quick explanation: "It's like owning a piece of the network."

---

### 4. DELEGATE / DELEGATOR (the token holder role)
**Technical definition**: A token holder who stakes LPT to an Orchestrator, earning a share of fees, without running hardware.  
**Plain language**: "A Delegator is someone who lends their LPT to an Orchestrator. The Orchestrator earns fees, and the Delegator gets a share."  
**Jargon risk**: "Delegate" is a verb (to delegate = to assign), which confuses newcomers. Home should use "Stake LPT to earn rewards" instead, then clarify the "Delegator" role.  
**Home usage**: Avoid in hero. Use "Invest LPT to earn rewards." Link to Delegators tab.

---

### 5. STAKE / STAKING
**Technical definition**: Locking cryptocurrency in a smart contract to earn rewards or secure the network.  
**Plain language**: "Staking means you lock up your LPT to earn rewards. It's like putting money in a savings account that pays interest."  
**Parallel**: "Like a certificate of deposit (CD) in traditional banking."  
**Home usage**: "Stake your LPT to earn rewards." Clear, simple, familiar analogy.

---

### 6. AI INFRASTRUCTURE (the 2025 narrative)
**Technical definition**: Decentralized network for running AI models (inference, training, pipelines) with GPU compute.  
**Plain language**: "AI Infrastructure is the software and computers that run AI models. Livepeer is the decentralized version."  
**For developers**: "Livepeer provides APIs to run AI video models (text-to-video, upscaling, etc.) without buying expensive GPU hardware."  
**Home usage**: Lead definition: "Livepeer is real-time AI infrastructure for video." Then explain what that means in 1-2 sentences.

---

### 7. DECENTRALIZED / DECENTRALIZATION
**Technical definition**: Removing single points of control by distributing power across many participants.  
**Plain language**: "Decentralized means no single company controls it. Instead, a community of GPU operators and token holders run it together."  
**Why it matters**: "This makes it more fair, transparent, and censorship-resistant."  
**Home usage**: Use sparingly. When you do, always explain the benefit: "Decentralized (no single company controls it) means..."

---

### 8. GPU / GRAPHICS PROCESSING UNIT
**Technical definition**: Specialized computer chip optimized for parallel computing; essential for AI and video processing.  
**Plain language**: "A GPU is a powerful computer chip, often from Nvidia, AMD, or Intel. It's designed for heavy computing tasks like video processing and AI."  
**For GPU operators**: "Livepeer runs on GPUs (Nvidia RTX, A100, etc.). You can rent out GPU time to earn income."  
**Home usage**: When introducing GPU operator path: "If you have GPU hardware (like an Nvidia RTX or A100), you can earn money with Livepeer."

---

### 9. PROTOCOL
**Technical definition**: Agreed-upon rules and standards for how participants interact on a network.  
**Plain language**: "A Protocol is a set of rules that everyone on the network follows. Think of it like rules for a game — everyone agrees to play by the same rules."  
**Why it matters**: "The rules ensure fairness, transparency, and that nobody can cheat or take over."  
**Home usage**: "Livepeer is a protocol" can work, but define it first: "Livepeer is a protocol (a set of rules everyone follows) for running AI video infrastructure."

---

### 10. GATEWAY (a routing role)
**Technical definition**: A service that routes video/AI jobs from clients to available Orchestrators on the network.  
**Plain language**: "A Gateway is like a traffic director. When someone wants to process a video or run an AI model, the Gateway finds the best available GPU on the network to do the job."  
**Home usage**: Probably not needed on Home. This is a secondary role. Link to Solutions or Developers tabs.

---

### 11. TRANSCODING (legacy term, avoid in 2025)
**Technical definition**: Converting video from one format/codec to another.  
**Why it's outdated**: Livepeer pivoted to AI (2024-2025). AI inference is now >70% of protocol fees. "Transcoding" doesn't capture the innovation.  
**Home usage**: AVOID on Home. If mentioned, always pair with AI: "Video processing (including transcoding and AI inference)." Better yet, lead with AI: "AI and video processing."

---

### 12. LIQUIDITY MINING / MINING
**Technical definition**: Early incentive programs where users earn tokens for participating (now usually part of normal staking/earning).  
**Plain language**: "Earning rewards for using or supporting the network."  
**Home usage**: Avoid the term "mining" — it confuses GPU operators (they think crypto mining). Use "earn" or "earn rewards" instead.

---

### 13. ACTIVE SET
**Technical definition**: The set of Orchestrators currently selected by the network to process jobs (usually top 50-100 by stake).  
**Plain language**: "The Active Set is the group of GPU operators that the network is currently using. If you want to process jobs, you need to be in the Active Set."  
**Home usage**: Not needed on Home. This is Orchestrators-tab content.

---

### 14. SLASHING (risk/governance term)
**Technical definition**: Automatic penalty (LPT reduction) for misbehavior (cheating on transcoding, not processing jobs correctly).  
**Plain language**: "If an Orchestrator cheats or doesn't do their job, the network can remove their LPT as punishment."  
**Home usage**: Can mention as a risk: "The protocol has safeguards (slashing) to prevent cheating." Link to detailed governance info.

---

### 15. ARBITRUM (the blockchain)
**Technical definition**: A Layer 2 scaling solution on Ethereum that Livepeer runs on.  
**Plain language**: "Arbitrum is the blockchain that Livepeer uses. It's faster and cheaper than Ethereum mainnet."  
**For technical readers**: "Livepeer smart contracts deploy on Arbitrum for speed and cost efficiency."  
**Home usage**: Probably not on Home. Developers and operators need to know, but newcomers don't. Link to dev docs.

---

### 16. SMART CONTRACT
**Technical definition**: Self-executing code that lives on the blockchain and enforces rules automatically.  
**Plain language**: "A Smart Contract is code that automatically handles agreements. Like if someone processes a job correctly, the code automatically pays them."  
**Why it matters**: "No middleman needed — the code enforces the rules fairly."  
**Home usage**: Avoid if possible. If you need to mention it: "Livepeer uses smart contracts (self-executing code) to ensure fairness."

---

### 17. FEES / PROTOCOL FEES
**Technical definition**: Payments made by users/applications for using Livepeer's infrastructure. Distributed to Orchestrators and Delegators.  
**Plain language**: "Fees are payments from people and apps that use Livepeer. This income goes to GPU operators and people who stake LPT."  
**For investors**: "Protocol fees are distributed to Orchestrators and their Delegators. Higher fees = higher rewards."  
**Home usage**: "When someone uses Livepeer, they pay fees. This income is shared with GPU operators and LPT stakers."

---

### 18. YIELD / STAKING YIELD
**Technical definition**: Returns earned by staking cryptocurrency, usually expressed as annual percentage rate (APY).  
**Plain language**: "Yield is the rewards you earn from staking your LPT. If you earn 20% yield, that means you get 20% more LPT per year."  
**For investors**: "Current LPT staking yield is around [X]% APY (check current data)."  
**Home usage**: "Stake your LPT to earn yield" = "Stake your LPT to earn rewards." Use "rewards" for newcomers, "yield" for investors.

---

### 19. OPEN SOURCE
**Technical definition**: Software whose code is publicly available for anyone to view, modify, and use.  
**Plain language**: "Open source means the code is publicly available. Anyone can check it for bugs or security issues. Anyone can build with it."  
**Why it matters**: "Open source means transparency and security through community review."  
**Home usage**: "Livepeer is open source" = transparency signal. Brief mention is good.

---

### 20. GOVERNANCE / GOVERNANCE VOTING
**Technical definition**: The mechanism by which LPT holders vote on protocol changes.  
**Plain language**: "Governance is how people who own LPT vote on how Livepeer evolves. It's like owning shares and voting in a company — you have a say in the future."  
**For token holders**: "As an LPT holder, you can vote on protocol improvements, fee changes, and strategic direction."  
**Home usage**: "LPT holders have governance rights" or "LPT holders can vote on protocol direction." Link to governance info.

---

### 21. WHITEPAPER
**Technical definition**: A detailed technical and economic document describing a protocol's design, mechanics, and rationale.  
**Plain language**: "The Whitepaper is Livepeer's technical specification. It's the detailed document that explains how everything works."  
**For technical readers**: "Read the Whitepaper if you want to understand the protocol mechanics and economics in depth."  
**Home usage**: "Read the Whitepaper" with a direct link. No explanation needed — researchers know what it is.

---

### 22. VALIDATOR (if used at all)
**Technical definition**: A node that validates transactions and enforces protocol rules.  
**Status**: Livepeer doesn't use "Validators" in the traditional sense. Avoid this term unless specifically relevant.  
**Home usage**: Don't use. If you must, clarify: "Livepeer doesn't have separate Validators. Orchestrators serve this role."

---

### 23. API / APPLICATION PROGRAMMING INTERFACE
**Technical definition**: A set of rules and tools for building software that communicates with another application.  
**Plain language**: "An API is a bridge between software. Developers use Livepeer's API to add AI video features to their apps."  
**Example**: "Daydream uses Livepeer's API to let you generate AI videos."  
**Home usage**: "Livepeer provides APIs for developers" is fine. Link to Developers tab for details.

---

### 24. MAINNET
**Technical definition**: The main, live version of a blockchain where real value is at stake.  
**Plain language**: "Mainnet is the real, live version of Livepeer. There's also Testnet (for testing) but Mainnet is where it all happens."  
**Home usage**: Probably not on Home. Use only if discussing network status or risk.

---

### 25. ECOSYSTEM
**Technical definition**: The network of applications, projects, and participants built on or around Livepeer.  
**Plain language**: "The Ecosystem is everyone and everything building on Livepeer — projects, apps, users, infrastructure, community."  
**Home usage**: "Explore the Livepeer ecosystem" with a link to ecosystem.mdx. Good way to show proof and breadth of participation.

---

## Plain Language Rules (Apply to all terms)

### Rule 1: Explain on First Use
**Bad**: "Orchestrators process jobs and earn fees."  
**Good**: "Orchestrators (people running GPU hardware) earn money by processing AI video jobs."

### Rule 2: Use Familiar Analogies
**Bad**: "LPT is an ERC-20 token that accrues protocol fees through delegation mechanisms."  
**Good**: "LPT is like owning a piece of the network. You earn rewards when people use Livepeer."

### Rule 3: Avoid Nesting Technical Terms
**Bad**: "Decentralized GPU infrastructure powered by trustless smart contracts."  
**Good**: "GPU infrastructure that's owned and operated by the community, not any single company."

### Rule 4: Use Active Voice & Short Sentences
**Bad**: "By staking tokens, which can be subject to slashing penalties, LPT holders can participate in governance."  
**Good**: "Own LPT? You can earn rewards and vote on how Livepeer evolves."

### Rule 5: Clarify Role vs. Action
**Bad**: "Become a delegator by delegating your stake."  
**Good**: "Earn rewards by staking your LPT. (You'll be called a Delegator when you do this.)"

### Rule 6: Lead with Intent, Not Jargon
**Bad**: "Participate as an Orchestrator or Delegator based on your capital and risk tolerance."  
**Good**: "Choose your path: Earn with GPU hardware, or Earn by staking LPT."

### Rule 7: Use Consistent Names
**Bad**: Mixture of "Transcoding," "GPU work," "Job," "Task"  
**Good**: Pick one term and use it consistently. ("Livepeer processes video and AI jobs.")

### Rule 8: Explain Why, Not Just What
**Bad**: "The protocol uses slashing to enforce correctness."  
**Good**: "The protocol ensures GPU operators don't cheat — they lose LPT if they do."

---

## Terminology Audit Checklist for Home Content

- [ ] Is "Livepeer" defined in the hero (AI infrastructure, not video transcoding)?
- [ ] Are all role names in plain language ("Earn with GPU," not "Become Orchestrator")?
- [ ] Is "LPT" explained briefly ("Own a piece of Livepeer and earn rewards")?
- [ ] Are decentralized benefits explained ("Community-owned, transparent, fair")?
- [ ] Is GPU terminology contextual ("If you have GPU hardware like an Nvidia RTX...")?
- [ ] Are protocol/technical terms avoided or explained on first use?
- [ ] Is consistency maintained (same term, same meaning, throughout)?
- [ ] Are analogies used (CD for staking, shareholders for governance)?
- [ ] Is jargon-nesting avoided ("trustless," "slashing," "smart contracts" explained if used)?
- [ ] Does every section feel written for a 15-year-old? (If not, simplify.)

---

## Integrity Check

Terminology is working on Home when:
- [ ] A visitor with zero crypto knowledge can read Home and understand what Livepeer is
- [ ] A visitor can identify which role applies to them using plain-language cards
- [ ] All role names use intent language ("I want to..."), not technical titles
- [ ] Every technical term used is explained on first use
- [ ] No term appears twice with different meanings
- [ ] Analogies are familiar and help understanding
- [ ] A returning technical user can still scan for depth without being bored

---

## Review Questions

1. **"Decentralized"**: Is this a core word for Home, or should we lead with benefits instead ("Community-owned," "Transparent")?

2. **Role naming**: Should role cards use questions ("I want to earn with GPU?") or statements ("Make money with GPU hardware")?

3. **"GPU"**: Should we say "GPU" or "graphics processing unit"? Newcomers don't know the acronym.

4. **"Livepeer" definition**: Is "AI infrastructure" the right lead definition, or should it be "video processing infrastructure"?

5. **LPT explanation**: How much should Home explain about LPT? Just "own a piece and earn rewards" or more detail?

6. **Technical depth**: When should Home abandon plain language and link to technical docs? After how many sentences?

7. **Analogies**: Are the suggested analogies (CD for staking, shareholders for governance) effective, or should they be different?

8. **"Protocol"**: Should Home use "protocol" or "network" or something else?

9. **"Ecosystem"**: Is "ecosystem" too jargony, or is it clear enough with brief explanation?

10. **Consistency check**: After writing all Home sections, should we audit for consistency across all 25 terms?
