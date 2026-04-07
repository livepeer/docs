# Draft Answers -- for human approval

Generated 2026-03-23 from review files 01 through 07. Each answer cites evidence from the research sections within each review file. Human should APPROVE, AMEND, or REJECT each answer.

---

## 01 -- Arriving Question

### Q1: Is this actually why orchestrators come to the docs?
**Answer**: Yes. All four independent AI runs (Claude agent, Claude web, ChatGPT, Perplexity) converged on a GPU-hardware-to-earning question. The earlier dep-personas research confirms Persona A's orienting question is "What is this and is it worth my time?" and the product-thinking-review's trigger questions are: "Should I run an orchestrator at all?", "Should I stay video-only, AI-only, or run both?", and "If I am live but not earning, is the issue stake, pricing, capabilities, or gateway selection?" The canonical question captures the core of all of these.
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md (4/4 run convergence); dep-personas-and-pages.mdx Persona A key questions; product-thinking-handoff.md trigger questions

### Q2: Does it cover both new arrivals AND returning operators?
**Answer**: Partially. The question is clearly framed for new arrivals ("how do I connect it" and "which path is right"). Returning operators (persona #4) arrive with a specific problem -- "my reward call failed" or "my performance score dropped" -- not a "how do I connect" question. The question serves first-timers and evaluators but does not speak to the return-visit use case. However, this is acceptable because the arriving question should capture the PRIMARY persona's arrival state (independent GPU operator, 4/4 consensus), not every persona. Returning operators enter at S10/S11/S12 directly and bypass S1 anyway.
**Confidence**: HIGH
**Evidence**: 02-personas.md persona #4 entry pattern ("Bookmark, direct URL, Discord link, search for error message"); 07-path-validation.md confirms returning operator enters S10/S11/S12 directly

### Q3: Is the "which path" part important enough to be in the core question, or is it secondary?
**Answer**: It is important enough to stay in the core question. Three of four runs included path-selection as part of the arriving question. All four runs agreed that a dedicated disambiguation section (S1) is needed because operators cannot identify their path without reading content first. The entry blockers analysis shows that the LPT stake requirement makes path choice a hard-stop blocker -- a reader who picks the wrong path (e.g. solo video without enough LPT) will stall. The "which path" element is not secondary; it is the first decision gate.
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md (3/4 runs include path-selection); S1 disambiguation consensus (4/4 runs); entry blockers analysis showing LPT as hard-stop blocker for solo video path

### Q4: Is there a completely different question that should drive this tab?
**Answer**: No. The draft audience doc variant -- "Can my GPU earn on this network, and what exactly do I need to do to get there?" -- is essentially the same question rephrased. The product-thinking handoff variant -- "Choose the lowest-risk path from evaluation to first earnings" -- is also a restatement. No source proposes a fundamentally different question. The canonical question accurately synthesises all variants.
**Confidence**: HIGH
**Evidence**: orchestrators-audience-doc.md arriving question; product-thinking-handoff.md reader job statement; 4/4 run convergence on hardware-to-earning framing

### Q5: What situation triggers a visit to this tab? What just happened before they arrived?
**Answer**: Multiple entry vectors depending on persona. For persona #1 (independent GPU operator): they searched "livepeer orchestrator setup" or "earn with GPU", saw a Discord post, or read a mining forum thread. For persona #2 (AI specialist): they read a Livepeer AI blog post or saw a Discord #ai-video thread. For persona #3 (capital-constrained): they searched "join Livepeer without staking" or were referred by a pool operator. For persona #4 (returning): they hit an error, bookmarked a page, or followed a Discord link. For persona #5 (delegator-turned-operator): they clicked a CTA in the Delegators tab.
**Confidence**: HIGH
**Evidence**: 02-personas.md entry vectors per persona; canonical-orchestrators-audience-design.md persona entry vectors table

### Q6: What do they know at arrival? What do they NOT know yet?
**Answer**: They know: they have GPU hardware, they have Linux/ops skills, and they have heard Livepeer pays for GPU compute. They do NOT know: which path applies to their situation (solo/AI/pool), whether they need LPT, how much they would earn, how routing works, or what the setup process involves. The AI specialist additionally does not know Livepeer payment/staking mechanics. The delegator-turned-operator knows LPT/delegation but lacks ops knowledge.
**Confidence**: HIGH
**Evidence**: 02-personas.md "Arrives with" per persona; dep-personas-and-pages.mdx Persona A pain points ("LPT acquisition barrier, pool vs solo confusion")

### Q7: Is it specific -- an actual question a real person asks, not a topic?
**Answer**: Yes. It passes the specificity test. Compare: "How do orchestrators work?" (topic) vs. "I have GPU hardware -- how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?" (specific personal question with hardware, earning, and path-selection dimensions). It could be said by a real person in a Discord channel.
**Confidence**: HIGH
**Evidence**: Failure mode table in 01-arriving-question.md ("Topic not question" test); the question includes personal context: "my hardware", "my capital situation"

### Q8: Is it derived from first principles -- not from current nav labels or page titles?
**Answer**: Yes. The question was synthesised from four independent AI runs that started from persona analysis and job stories, not from existing nav structure. The orchestrator-tab-review-v3.md explicitly critiques the current nav as being structured around implementation buckets rather than user needs. The arriving question reflects user goals, not section titles.
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md derivation note ("Synthesised from 4 AI runs"); orchestrator-tab-review-v3.md critique of current nav

### Q9: Is it answerable and completable within one tab visit?
**Answer**: Partially. The "which path is right" part is answerable within the tab (S1 + S2). The "how do I connect it and start earning" part requires completing S3 through S9, which is a realistic single-visit journey for a motivated operator. However, achieving actual earnings (first reward call, first job) depends on real-world factors (acquiring LPT, staking, waiting for active set) that extend beyond a single docs visit. The question is completable in terms of knowledge and setup, but not in terms of literal earning in one session.
**Confidence**: MEDIUM
**Evidence**: 07-path-validation.md persona paths showing Independent GPU operator exits at S9; entry blockers list showing LPT acquisition and pool membership arrangement as external dependencies

### Q10: Does it capture the primary persona's arrival state accurately?
**Answer**: Yes. The primary persona (independent GPU operator, 9/9 score, 4/4 consensus) arrives with "GPU hardware, Linux skills, no Livepeer knowledge, unclear which path applies." The question matches this exactly: "I have GPU hardware" (what they have), "how do I connect it" (what they need), "which path is right" (what they are uncertain about).
**Confidence**: HIGH
**Evidence**: 02-personas.md persona #1 definition

### Q11: Does it address the primary entry blocker or decision point?
**Answer**: Yes. The primary entry blocker for most personas is path ambiguity -- they do not know whether to go solo, AI-only, or pool. The LPT stake requirement is the secondary blocker (hard-stop for solo video). The "which path is right for my hardware and capital situation" phrasing directly addresses both: hardware (determines AI eligibility) and capital (determines LPT/solo eligibility).
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md entry blockers; orchestrator-tab-review-v3.md Critique 3 identifying path ambiguity

### Q12: Is it expressible in the audience's own language -- not network jargon they haven't learned yet?
**Answer**: Yes. The question uses "GPU hardware", "connect", "earning", "path", "hardware", and "capital" -- all plain English. It does not use "active set", "LPT", "go-livepeer", "probabilistic micropayment", or any Livepeer-specific jargon. A GPU miner from an Ethereum mining community would understand every word.
**Confidence**: HIGH
**Evidence**: 06-terminology.md deprecated terms and jargon list; dep-personas-and-pages.mdx self-identification terms ("Miner", "GPU operator", "node operator")

### Q13: Can persona #1 (independent GPU operator) answer this question by exiting the tab?
**Answer**: Yes. They enter at S1, proceed through S2-S5, S7, S9, and exit with a running node on the correct path. The path validation confirms no structural blocks.
**Confidence**: HIGH
**Evidence**: 07-path-validation.md persona path table (enters S1, exits S9, blocked: No)

### Q14: Can persona #2 (AI inference specialist) answer it?
**Answer**: Yes. They enter at S1, proceed through S2-S4, S5, S8, and exit at S8 or S9 with AI pipelines configured and capabilities advertised. The path validation confirms no structural blocks, contingent on S3 explicitly stating that active set membership is NOT required for AI routing.
**Confidence**: HIGH
**Evidence**: 07-path-validation.md persona path table (enters S1, exits S8 or S9, blocked: No)

### Q15: Can persona #3 (capital-constrained / pool) answer it?
**Answer**: Yes. They enter at S1, are routed to S6, and exit S6 with a clear decision: pool, AI-first, or delay solo. S6 must give enough context for this three-way decision. The "which path is right for my... capital situation" phrasing directly speaks to their constraint.
**Confidence**: HIGH
**Evidence**: 07-path-validation.md persona path table (enters S1 to S6, exits S6, blocked: No)

### Q16: Can persona #4 (returning operator) answer it? -- or does this question only serve first-timers?
**Answer**: The arriving question does NOT directly serve the returning operator. They do not arrive asking "how do I connect" -- they arrive asking "why did my reward call fail?" or "how do I improve my performance score?". However, this is by design. The arriving question captures the primary persona's arrival state, not every persona. The returning operator bypasses S1 entirely and enters directly at S10, S11, or S12. The tab structure serves them; the arriving question does not need to.
**Confidence**: HIGH
**Evidence**: 02-personas.md persona #4 ("Arrives with: Node in production, needs specific answer"); 07-path-validation.md showing direct entry at S10/S11/S12

### Q17: Can persona #5 (delegator-turned-operator) answer it?
**Answer**: Yes, with the caveat that they reframe the question slightly. They already understand LPT, so "which path" is less about capital and more about hardware capability and operational willingness. They enter at S2 (viability assessment, skipping S1 because they already know the LPT landscape) and exit at S4 or S5 with a go/no-go decision. S2 must surface the cost-of-operation comparison (operator earnings vs continued delegation).
**Confidence**: HIGH
**Evidence**: 07-path-validation.md persona path table (enters S2, exits S4 or S5, blocked: No); knowledge gap note requiring S2 to surface cost-of-operation framing

---

## 02 -- Personas

### Q1: Are these the right people? Anyone missing? Anyone who shouldn't be here?
**Answer**: These are mostly the right people, but there is one notable omission: the Enterprise / Data Centre Operator (Persona D from earlier research). Earlier dep-personas research identified 5 personas (A-E), and the canonical 5 dropped the Enterprise persona while adding the Delegator-turned-operator. The Enterprise persona (100+ GPUs, commercial, SLA-driven) is real -- the product-thinking-review includes J4 ("Company needs GPU compute under SLAs") as a canonical job story, and business-case.mdx was written specifically for this persona. The decision to exclude Enterprise from the canonical 5 should be confirmed. It may have been correct (low volume in docs audience) or an oversight. No persona currently listed should be removed -- all five have clear evidence of existence.
**Confidence**: MEDIUM
**Evidence**: 02-personas.md comparison table showing "No match / Persona D (Enterprise) / Earlier research only"; product-thinking-review.md J4 explicitly addressing enterprise; plan.md J4 still present in canonical job stories

### Q2: Is the priority order right? Should AI specialist be higher?
**Answer**: The priority order is correct. The independent GPU operator has the highest combined score (Volume 3, Depth 3, Impact 3 = 9/9) with 4/4 run consensus. The AI specialist scores 8/9 (Volume 2, Depth 3, Impact 3) and is correctly ranked second. The AI specialist has lower volume because the AI inference path is newer and the pool of ML engineers who have discovered Livepeer is smaller than the general GPU operator pool. However, as AI demand grows, the AI specialist may eventually overtake in volume. For now, the independent GPU operator remains the right primary persona because they drive the tab's structural decisions and S1 routing.
**Confidence**: HIGH
**Evidence**: 02-personas.md scoring (9/9 vs 8/9); 4/4 consensus for both personas

### Q3: Is persona #5 (delegator-turned-operator) real or theoretical?
**Answer**: More theoretical than real, but not entirely fictional. It has the lowest score (4/9) and only 2/4 run consensus. The Delegators tab CTA and forum threads are plausible entry vectors, and the docs-guide persona alignment confirms delegators may "consider running their own node." However, the volume is low (score 1) and depth is low (score 1). This persona exists but is rare. It is worth keeping in the canonical set because it forces S2 to include a "should I operate vs continue delegating?" comparison, which improves the content for all evaluating readers. If a persona must be cut to reduce scope, this is the one.
**Confidence**: MEDIUM
**Evidence**: 02-personas.md scoring (Volume 1, Depth 1, Impact 2 = 4/9, 2/4 consensus); cross-tab journey from Delegators tab is documented but unconfirmed in practice

### Q4: Does the "primary persona drives structure" decision feel right?
**Answer**: Yes. The independent GPU operator is the right structural driver because: (a) unanimous 4/4 consensus, (b) highest score, (c) the broadest question set (covers path selection, hardware fit, setup, and earning), and (d) other personas' journeys are subsets or branches of this persona's journey. The AI specialist branches at S8; the pool candidate exits at S6; the returning operator enters late. All of these are accommodated by a structure designed for the independent GPU operator's full journey.
**Confidence**: HIGH
**Evidence**: 02-personas.md key design decisions; 07-path-validation.md showing all persona paths fit within the 12-section structure

---

## 03 -- Jobs to be Done

### Q1: Do these match what orchestrators actually come to the docs to do?
**Answer**: Yes. The 7 jobs map cleanly to the documented entry vectors, trigger questions, and opportunity gaps. J1 (evaluate) and J2 (path selection) match the product-thinking-handoff trigger questions. J3 (prerequisites) and J4 (setup) match the 10-stage orchestrator journey stages 3-4. J5 (diagnose low work) maps to the top churn trigger ("No jobs after setup"). J6 (AI setup) maps to the confirmed L0 gap. J7 (reference lookup) maps to returning operator needs. The earlier product-thinking-review job stories (with acceptance criteria and page-gap analysis) confirm all seven.
**Confidence**: HIGH
**Evidence**: product-thinking-review.md J1-J7 with acceptance criteria; orchestrator-tab-review-v3.md J1-J6; product-thinking-handoff.md trigger questions

### Q2: Is anything missing? (e.g. "I want to upgrade my node" or "I want to scale to multiple GPUs")
**Answer**: Three jobs from earlier research are not represented in the canonical 7: (a) "I already run video and want to add AI to my existing node" -- this is partially captured by J6 but J6 is framed as "set up AI" not "add AI to existing video." The hybrid bridge gap (highest opportunity score: 56-72) is not explicitly represented as a job. (b) "I have significant LPT and want to maximise yield" -- this is present in plan.md and product-thinking-review.md as J3 but was dropped from the canonical set. (c) "Company needs GPU compute under SLAs" -- the enterprise/commercial job is also absent from the canonical 7. Additionally, "I want to upgrade my node software" and "I want to scale to multiple GPUs" are real return-visit tasks but may be covered as sub-tasks within S10 and S11 rather than standalone jobs.
**Confidence**: MEDIUM
**Evidence**: product-thinking-review.md J2 ("add AI to video" -- gap: no bridge content), J3 ("maximise yield"), J4 ("commercial"); L0-hybrid-operator-product-exercise.md O1-O2; plan.md J2, J3, J4 still present but dropped from canonical 7

### Q3: Are J1 and J2 really separate jobs, or are they the same moment?
**Answer**: They are separate jobs that often happen in rapid succession. J1 is an evaluation job ("assess whether my hardware qualifies, what I'd earn, what each path requires") -- the reader may exit with a "no-go" decision and never reach J2. J2 is a routing job ("identify whether I should go solo video, AI-only, dual mode, or join a pool") -- this assumes a "go" decision has been made. The separation is justified because: (a) the exit state of J1 is a go/no-go decision, while the exit state of J2 is a path selection; (b) some readers (e.g. returning operator, delegator-turned-operator) may do J1 without J2 or J2 without J1. That said, for the primary persona (independent GPU operator), J1 and J2 will feel like one continuous moment during their first visit. The section structure handles this correctly by making S1 and S2 sequential.
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md J1 exit state ("go/no-go decision") vs J2 exit state ("identified path"); 05-section-structure.md S1 exit state vs S2 exit state

### Q4: Is J6 (AI setup) important enough to be a standalone job?
**Answer**: Yes. AI inference is a materially different configuration surface from video transcoding. It requires a separate config file (aiModels.json), separate concepts (warm/cold models, capability advertisement, VRAM planning), and a separate verification path. The AI pipeline section is already the largest content area in the tab (11+ pages). The product-thinking-review scores AI-related gaps at 40-72 (high). The L0 hybrid exercise confirms AI setup has its own customer journey stages. If J6 were folded into J4 (general setup), the section would become unworkably long and would force video-only operators to read AI content they do not need.
**Confidence**: HIGH
**Evidence**: orchestrators-collated-status.md showing S8 as "Largest section -- 11 pages"; product-thinking-review.md opportunity scores; 05-section-structure.md S8 design flags

### Q5: Any jobs here that don't actually happen in practice?
**Answer**: All seven jobs happen in practice. The weakest case is J3 (prerequisites) -- some operators may stumble through prerequisites without treating it as a discrete job (they just acquire LPT as part of setup). However, the entry blockers analysis shows that LPT acquisition, ETH bridging, and service URI configuration are real blocking tasks that must be completed before the node software can work. Making prerequisites a discrete job prevents the "discovered mid-setup that I need LPT" stall documented in the entry blockers analysis.
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md entry blockers; dep-personas-and-pages.mdx Persona A pain points ("LPT acquisition barrier")

---

## 04 -- Ideal Journey

### Q1: Is this the actual order someone goes through? Or do people skip steps?
**Answer**: The linear 9-stage order is a valid default reading order, but real operators skip steps depending on their job story. The orchestrator-tab-review-v3 explicitly documents non-linear paths: J6 (AI-first, low LPT) skips staking entirely; J2 (adding AI to video) starts at workloads, not considerations; J3 (LPT maximiser) prioritises staking before workloads; J4 (commercial) needs payments and pricing before deployment. The recommendation from v3 is correct: "The section order is fine as a default reading order, but the Navigator must route by job story, not by section sequence." The linear journey serves persona #1 (independent GPU operator) end-to-end. Other personas take shortcuts.
**Confidence**: HIGH
**Evidence**: orchestrator-tab-review-v3.md Critique 3 documenting non-linear paths; product-thinking-review.md job story sequencing; orchestrators-audience-doc.md branching note at Position 3

### Q2: Is stage 3 (understanding payments) really needed before setup, or do people just want to get running first?
**Answer**: It depends on the persona. The primary persona (independent GPU operator evaluating the opportunity) needs payment understanding before committing to setup -- the product-thinking customer journey shows "How do I actually get paid?" as a motivated-state question that comes during evaluation, not after setup. The payment mechanics inform configuration decisions (reward cut, fee cut, pricing) that happen during setup. However, a quickstart-focused operator may prefer to defer payment understanding until after they have a running node. The section structure already accommodates this: stages 1-3 are evaluate-phase (linear for first-timers) and can be skipped by operators who want to jump to setup via the quickstart path. Stage 3 should stay before setup in the linear journey but should not block the quickstart path.
**Confidence**: MEDIUM
**Evidence**: product-thinking-review.md customer journey map (Staking stage: "How do I actually get paid?" -- feeling: Motivated); S7 requires understanding cuts before setting them; quickstart path bypasses linear sections

### Q3: Should AI config (stage 7) be optional/branching rather than linear?
**Answer**: Yes, AI config should be branching/optional, not mandatory linear. Video-only operators should not be forced through AI configuration. The section structure already handles this: S8 (Set up AI pipelines) has a lifecycleStage of `build`, which is distinct from the `setup` stages. The orchestrators-audience-doc explicitly notes: "The journey branches at Position 3. Pool Worker exits after joining a pool. AI Native may skip staking/rewards and go directly to AI workloads." AI config is optional for video-only operators and essential for AI/dual operators. It should be presented as a branch, not a linear step.
**Confidence**: HIGH
**Evidence**: orchestrators-audience-doc.md branching note; 05-section-structure.md S8 lifecycleStage: `build` (not `setup`); plan.md "Dual mode is the default production configuration" suggests most operators will eventually do this, but it is not required at initial setup

### Q4: Are the on-demand lookups the right ones? Missing any?
**Answer**: The on-demand lookups are comprehensive and correct. They cover: active set size, pricing benchmarks, reward call timing, AI pipeline types, CLI flags, performance score, ticket redemption, reward/fee cut values, pool operator contacts, and governance rates. Two potentially missing items: (a) NVIDIA driver and CUDA version compatibility -- flagged as a P2 gap in the product-thinking-review and referenced in multiple pages but documented nowhere; (b) aiModels.json schema reference -- flagged as P1 gap and described as "THE config file for AI operators, currently fragmented across 4 pages." Both are active on-demand lookup needs for operating orchestrators.
**Confidence**: MEDIUM
**Evidence**: canonical-orchestrators-audience-design.md on-demand lookup list; product-thinking-review.md P2 gap ("NVIDIA driver patch guide -- referenced in multiple pages, documented nowhere"); plan.md P1 gap ("aiModels.json field reference")

### Q5: Do the cross-tab links reflect real navigation patterns?
**Answer**: Yes, the cross-tab links are well-documented and reflect real navigation patterns. All five inbound and four outbound links are confirmed by the audience-doc cross-tab table and the cross-tab-journeys decision file. The most critical cross-tab link is Orchestrators to Gateways (understanding gateway selection logic and MaxPrice), because gateway pricing gates directly affect whether an orchestrator receives work. One potentially missing cross-tab link: Developers to Orchestrators -- developers building custom AI/video pipelines may graduate to running their own orchestrator, and the audience-doc (draft) includes this as an inbound link.
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md cross-tab table; orchestrators-audience-doc.md cross-tab table including Developer to Orchestrator link; cross-tab-journeys.md confirming "Orchestrator to Gateway (dual-mode operator)" path

---

## 05 -- Section Structure

### Q1: Too many sections? 12 is at the upper boundary. Could any be merged?
**Answer**: 12 is at the upper boundary but justified. The canonical justification is correct: the tab covers two workload types (video and AI) with materially different configuration surfaces, and the pool node path requires a dedicated decision gate. That said, two merges are worth considering: (a) S2 (Is this viable?) and S3 (How does work reach me?) could merge into a single "evaluate" section -- both have lifecycleStage `evaluate` and serve the same reader state (decided to proceed, needs to understand viability and mechanics). The counter-argument is that S2 is a go/no-go decision page while S3 is an explanation page; they have different purposes. (b) S7 (Set pricing and cuts) could fold into S5 (Get your node running) as a configuration step -- pricing is part of setup. The counter-argument is that pricing requires its own guidance and justification framework, not just flag-setting. On balance, keeping 12 is defensible if each section has a clear, distinct exit state. No section should be removed.
**Confidence**: MEDIUM
**Evidence**: 05-section-structure.md section count justification; S2/S3 both at lifecycleStage `evaluate`; entry/exit state contracts showing distinct exit states per section

### Q2: Wrong order? Should S6 (pool) come earlier? Should S3 (payments) come later?
**Answer**: The order is largely correct, with one improvement worth considering. S6 (pool) is currently positioned between S5 (setup) and S7 (pricing). The intent is that pool candidates are routed out at S1, skip S2-S5, and land directly at S6. This works if S1 routing is effective. If S6 were moved earlier (e.g. after S2), it would allow pool candidates to exit the linear path sooner without scrolling past setup content. However, the current placement also works because pool candidates never reach S5 -- they jump from S1 to S6. The key requirement is that S1 routing is clear. S3 (payments) before setup is correct for the reasons stated in Q2 of Part 4: payment mechanics inform configuration decisions.
**Confidence**: MEDIUM
**Evidence**: 07-path-validation.md showing pool persona path (S1 to S6 directly); 05-section-structure.md S6 positioned as evaluate-stage despite being between setup-stage sections

### Q3: S1 as navigation page -- is a disambiguation page really needed, or is it over-engineered?
**Answer**: S1 is needed and is not over-engineered. All four AI runs agreed that a dedicated disambiguation section is needed because operators cannot identify their path without reading content first. The self-identification problem is well-documented: "People don't arrive at docs thinking 'I'm a Gateway Operator.' They arrive thinking 'I want to earn with my GPUs.'" The LPT-required vs not-required distinction across paths is the most critical routing decision and is not surfaced by any existing page. Decision D-NAV-01 locks `pageType: navigation` as a cross-tab pattern. Without S1, a capital-constrained operator would start reading solo setup instructions and stall at the LPT requirement.
**Confidence**: HIGH
**Evidence**: 02-personas.md S1 consensus (4/4 runs); dep-personas-and-pages.mdx self-identification problem; decision-registry.md D-NAV-01; entry blockers showing LPT stake as hard-stop for solo video

### Q4: S2 and S3 separate? Could "is this viable" and "how does payment work" be one section?
**Answer**: They could be merged, but keeping them separate is defensible. S2 answers "should I do this?" (go/no-go decision) while S3 answers "how does the money part work?" (mental model building). Some readers will make the go/no-go decision based on hardware requirements and estimated earnings alone (S2) without needing to understand probabilistic micropayments and reward call mechanics (S3). A delegator-turned-operator already understands payment mechanics and only needs S2. Merging them would create a very long concept section that serves two different purposes. Keep separate, but consider whether S3 could be a sub-page within an S2 section group rather than a peer section.
**Confidence**: MEDIUM
**Evidence**: 05-section-structure.md entry/exit states showing different exit states (S2: "Go/no-go decision made" vs S3: "Can describe income streams, routing, cuts"); persona #5 can skip S3

### Q5: S6 placement -- pool node section is between setup (S5) and pricing (S7). Should it be earlier, with S2?
**Answer**: Current placement is acceptable because pool candidates jump to S6 from S1, not by reading linearly through S5. Moving S6 earlier (after S2) would make the linear reading order more logical for pool candidates, but pool candidates are not expected to read linearly -- they are routed by S1. The risk of moving S6 earlier is that it would interrupt the solo operator's linear flow (S2 evaluate, S3 payments, S4 prerequisites, S5 setup) with a section that does not apply to them. Keep S6 where it is, but ensure S1 routing is explicit about the jump to S6.
**Confidence**: MEDIUM
**Evidence**: 07-path-validation.md pool persona path (S1 to S6 jump, not linear); 05-section-structure.md entry state for S6 ("Identified as pool candidate from S1")

### Q6: S8 as separate section -- should AI setup be part of S5 (general setup) with a branch?
**Answer**: S8 must remain a separate section. The AI configuration surface is substantially larger than video setup (11+ pages vs ~5 pages for video setup). aiModels.json, warm model configuration, capability advertisement, VRAM planning, and potentially BYOC are all AI-specific concepts with no video equivalent. Folding them into S5 would create an unworkably long mixed-instruction page that forces video-only operators to read irrelevant AI content. The design flag noting S8 "may need to split" further reinforces that it is already large enough to be its own section. The plan.md confirms "dual mode is the default production configuration," so most operators will eventually visit S8, but it should not be forced into the initial setup sequence.
**Confidence**: HIGH
**Evidence**: orchestrators-collated-status.md S8 as "Largest section -- 11 pages"; 05-section-structure.md S8 design flags; canonical section count justification

### Q7: Missing anything? Upgrades? Multi-GPU? Scaling? Migration from v1?
**Answer**: Three potentially missing topics: (a) Multi-GPU and scaling -- the plan.md includes an "Advanced Operations" section with scale-operations and the O-T split architecture. This is partially covered by S10/S11 (operate/optimise) but not explicitly called out as a section. J4 (commercial/scale) from earlier research is served by this content but has no dedicated section. (b) Software upgrades -- updating go-livepeer versions is a real operational task not explicitly addressed in any section. It belongs in S10 (Monitor and operate). (c) Migration from v1 -- if any operators are migrating from v1 docs or v1 configurations, there is no migration section. The orchestrators-ia-mapping confirms "software update procedures may not be addressed in any S10 page." These gaps do not require new sections but should be addressed as content items within S10 and S11.
**Confidence**: MEDIUM
**Evidence**: orchestrators-ia-mapping.md S10 gap ("Software update procedures may not be addressed"); plan.md Advanced Operations section; dep-personas-and-pages.mdx Persona C key questions (scaling, remote workers)

---

## 06 -- Terminology Lock

### Q1: Are any definitions wrong?
**Answer**: No definitions appear to be factually wrong, but several need verification flags. The most important item to verify: the fee cut direction convention. The terminology-tracking.md flags "Fee cut direction convention: v1 to v2 possible inversion of fee cut percentage direction" as HIGH priority requiring SME verification. If fee cut percentage direction was inverted between v1 and v2 (e.g. "10% fee cut" meaning "operator keeps 10%" vs "operator shares 10%"), all content using this term could be misleading. The cold model definition has only 1/4 consensus, which is low but not necessarily wrong -- it just means fewer runs explicitly defined it. The definition itself ("AI model NOT pre-loaded; must load on first request, incurring seconds-to-minutes latency") aligns with the global glossary's "Cold Start" definition.
**Confidence**: MEDIUM
**Evidence**: terminology-tracking.md "Fee cut direction convention" flagged HIGH priority; collation-notes-orchestrators.md near-conflict 1 on warm/cold model; livepeer-glossary.mdx Cold Start definition

### Q2: Any missing terms that should be locked?
**Answer**: Yes, three terms should be added to the locked set: (a) "Round" -- excluded as single-run only, but it is a fundamental protocol concept. The glossary defines it as "~22 hours / 5760 L1 blocks." Reward calls, active set membership, and unbonding periods are all measured in rounds. Multiple locked terms reference rounds implicitly (reward call: "once per round"; active set: "eligible in a round"). Round should be locked. (b) "Unbonding period" -- also excluded as single-run, but it is a critical operational concept for any operator considering unstaking. It is flagged as BLOCKING in terminology-tracking.md ("21 rounds in some sources, '21 hours' disputed"). (c) "BYOC" -- excluded as single-run, but confirmed by human as canonical terminology (terminology-tracking.md: "BYOC = Bring Your Own Container, confirmed by human"). It is operationally relevant to AI operators using custom Docker containers.
**Confidence**: HIGH
**Evidence**: collation-notes-orchestrators.md near-conflict 6 (round, unbonding period excluded as single-run); terminology-tracking.md BYOC confirmed by human; glossary.mdx Round definition

### Q3: Should any excluded terms actually be included?
**Answer**: Yes. "Round" and "BYOC" should be included (see Q2 above). "Slashing" should remain excluded -- it is a potential future mechanism, not a current operational reality for Livepeer orchestrators (unlike Ethereum validators). Specific AI model names should remain excluded as too volatile. "Siphon" should remain excluded until its glossary definition is internally consistent.
**Confidence**: HIGH
**Evidence**: collation-notes-orchestrators.md exclusion rationale for each term; terminology-tracking.md BYOC confirmed

### Q4: Are the verify flags on the right terms?
**Answer**: Yes, the verify flags are on the right terms. Governance-controlled values (active set size, unbonding period, target bonding rate, inflation rate, treasury reward cut rate) are correctly flagged as high-staleness. CLI flags and AI pipeline types are correctly flagged as release-dependent. The contract names (BondingManager, TicketBroker) should carry verify flags because contract interfaces can change with protocol upgrades. One potentially missing verify flag: the "performance score" definition says "composite metric (latency x success rate)" -- the exact calculation formula should be verified against go-livepeer source code, as the weighting may have changed.
**Confidence**: MEDIUM
**Evidence**: deprecated-terms.md high-staleness terms table; collation-notes-orchestrators.md near-conflict 5 on BondingManager/TicketBroker verify flags

### Q5: The LPT definition says "NOT required for AI inference routing" -- is that definitively true?
**Answer**: This is true based on all available evidence, but should carry a verify flag. All four AI runs agreed that AI routing is capability-based and price-based, NOT stake-based. The canonical audience design explicitly states: "Active set membership is not required for AI inference routing." The AI inference specialist persona path (07-path-validation.md) is predicated on this being true -- the entire AI-only path bypasses LPT staking. The product-thinking-review J6 ("Have 24GB+ GPU, limited LPT -- earn from AI without active set") treats this as a defining characteristic of the AI path. However, this is a protocol-level assertion about routing mechanics, and protocol changes could alter it. It should carry a `[verify-against: go-livepeer AI routing implementation]` flag.
**Confidence**: HIGH (that it is currently true), with verify flag recommended
**Evidence**: canonical-orchestrators-audience-design.md 4/4 run agreement; 07-path-validation.md AI specialist path; orchestrator-tab-review-v3.md J6 acceptance criteria ("AI routing works without high stake"); locked term definition for Active Set ("AI routing doesn't use it")

---

## 07 -- Path Validation & Gap Notes

### Q1: Do the persona paths actually work in practice?
**Answer**: Yes, all five persona paths work structurally. No persona encounters a missing section or a dead end. The path validation table shows all personas entering, traversing, and exiting without structural blocks. The knowledge gaps identified (e.g. "S3 must state active set NOT required for AI") are content gaps, not structural gaps -- they require specific statements within existing sections, not new sections. The pool persona's jump from S1 to S6 is the most unconventional path and depends entirely on S1 routing being clear and visible. If S1 routing is weak, the pool persona will read S2-S5 linearly and stall at the LPT requirement.
**Confidence**: HIGH
**Evidence**: 07-path-validation.md all personas marked "Blocked: No"; validation-check.md Check 2 passing all 6 entry blockers; Check 4 confirming all personas have entry question, knowledge gap, and JTBD documented

### Q2: Are the 5 gap notes the right priorities, or are there bigger gaps?
**Answer**: The 5 gap notes are correct priorities for the audience design phase, but there are bigger content gaps that will surface in Phase 2. The 5 gap notes are all "must-have statements within existing sections" -- they are structural requirements for content briefs, not content gaps themselves. Bigger gaps identified in the research that are NOT captured by the 5 gap notes include: (a) the hybrid bridge content gap (adding AI to existing video node -- opportunity score 56-72, no content exists); (b) pricing strategy (stub page, opportunity score 72); (c) day-to-day AI operations ("Running the AI Service day-to-day -- NOT COVERED ANYWHERE"); (d) aiModels.json unified reference. These are Phase 2 content gaps, not Phase 1 audience design gaps. The 5 gap notes are the right priorities for their purpose (guiding content brief writing).
**Confidence**: HIGH
**Evidence**: 07-path-validation.md 5 gap notes; product-thinking-review.md opportunity scores (hybrid bridge: 72, pricing: 72); plan.md P0/P1 gap tables

### Q3: Are the entry blockers complete? Anything else that stops people?
**Answer**: The 6 entry blockers are complete for structural purposes. Two additional blockers exist but are not structural: (a) NVIDIA driver and CUDA compatibility -- if the operator's GPU drivers are incompatible with go-livepeer's requirements, they cannot proceed. This is flagged as a P2 gap in the product-thinking-review ("NVIDIA driver patch guide -- referenced in multiple pages, documented nowhere"). (b) Bandwidth and network configuration -- port forwarding and firewall rules are required for the service URI to be publicly reachable. This is partially covered by the "publicly reachable service URI" blocker but the procedural steps (how to configure port forwarding) are a separate operational concern. Both of these are content-level concerns, not structural blockers that affect section ordering.
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md 6 entry blockers (union of all runs); dep-personas-and-pages.mdx Persona A pain points ("port forwarding, 'Orchestrator not available' errors"); product-thinking-review.md P2 gap for NVIDIA drivers

### Q4: Is the pool membership blocker ("not self-serviceable from docs") a real problem? Should the docs address it differently?
**Answer**: Yes, it is a real problem, and the docs should acknowledge it explicitly rather than try to solve it. A pool node candidate must find a pool operator and arrange a connection -- this requires human interaction (Discord, pool operator websites, community contacts) that documentation cannot automate. The docs should: (a) link to a pool operator registry or community-pools page (this exists: community-pools.mdx is in the Resources section); (b) clearly state that pool membership requires contacting a pool operator and is not a self-service action; (c) provide evaluation criteria for choosing a pool (fee split, reliability, geographic proximity). The docs cannot eliminate this blocker, but they can reduce friction by providing the information needed to start the conversation.
**Confidence**: HIGH
**Evidence**: canonical-orchestrators-audience-design.md pool membership blocker ("not self-serviceable from documentation alone"); IA.mdx listing community-pools in Resources section; dep-personas-and-pages.mdx Persona B entry vectors ("Pool websites, Discord")
