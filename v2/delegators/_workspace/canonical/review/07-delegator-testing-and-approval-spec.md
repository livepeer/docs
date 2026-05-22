**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## End-to-end testing spec (by persona journey)

### Test 1: Yield-Seeking Delegator (Happy path)

**Scenario:** User arrives with LPT on CEX (Binance), zero Arbitrum/DeFi experience. Goal: Delegate and see first rewards.

**Test steps:**
1. Land on portal.mdx
   - [ ] Can user identify themselves as "first-time delegator"?
   - [ ] Is the path "bridge → choose → delegate → track" clear?
   
2. Read delegation-economics.mdx
   - [ ] Does user understand "I could earn X% annually"?
   - [ ] Does user understand "my choice of orchestrator affects my earnings"?
   - [ ] Is user confident enough to proceed (or do they bounce)?
   
3. Follow bridge-lpt-to-arbitrum.mdx
   - [ ] Does a new crypto user with zero wallet experience get unblocked?
   - [ ] Are wallet setup, gas fee expectations, and bridge cost clear?
   - [ ] Can user successfully bridge 100 test LPT without losing funds?
   
4. Read choose-a-delegate.mdx
   - [ ] Can user identify "commission" and "performance" as key metrics?
   - [ ] Can user compare 2-3 orchestrators and make a defensible choice?
   - [ ] Does user feel confident (or uncertain)?
   
5. Complete getting-started.mdx
   - [ ] Does user know they must have LPT on Arbitrum (prereq check)?
   - [ ] Can user successfully delegate 100 test LPT?
   - [ ] Does user understand "thawing period" and when rewards start?
   
6. Check delegation-rewards.mdx
   - [ ] Can user find their rewards in Explorer?
   - [ ] Does user understand when/how to claim?
   - [ ] Is the claim process clear and risk-free?
   
7. Exit: Monitor for questions
   - [ ] Does user ask "where are my rewards?" (indicate missing from rewards.mdx)
   - [ ] Does user ask "how do I switch orchestrators?" (indicate missing from management.mdx)
   - [ ] Does user ask "how do I get my LPT back?" (indicate missing from undelegation.mdx)

**Success metric:** User completes all steps, claims first rewards, feels confident in position.

**Failure modes to test:**
- Wallet setup failure → recovery documented?
- Bridge transaction stuck → recovery path?
- Wrong orchestrator chosen → how hard is redelegation?
- Missed reward claim deadline → what happens?

---

### Test 2: Governance Participant

**Scenario:** User is existing LPT holder, wants to vote on live proposal independently.

**Test steps:**
1. Land on governance/overview.mdx
   - [ ] Does user understand how governance works?
   - [ ] Is the difference between LIP (protocol) and SPE (funding) clear?
   
2. Find active proposals
   - [ ] Can user locate currently-voting proposals?
   - [ ] Is the link to Explorer governance clear?
   
3. Read governance/processes.mdx
   - [ ] Can user understand voting mechanics (voting power = staked LPT)?
   - [ ] Is the step-by-step voting process clear?
   
4. Vote on a proposal
   - [ ] Can user successfully cast a vote?
   - [ ] Does user understand their vote is independent of orchestrator?
   
5. Understand treasury
   - [ ] Can user explain "treasury" in 1-2 sentences?
   - [ ] Does user understand SPEs vs proposals?

**Success metric:** User votes on a real proposal independently.

**Failure modes:**
- User doesn't know voting window is closing → docs should date proposals
- User confused about voting power calculation → docs should clarify
- Voting transaction fails → recovery path?

---

### Test 3: L1 Stranded User (New Crypto)

**Scenario:** User bought LPT on Binance, has it on L1, no wallet, no Arbitrum knowledge. Goal: Get it to Arbitrum and delegate.

**Test steps:**
1. Land on portal.mdx
   - [ ] Can user identify themselves as "new to crypto"?
   - [ ] Is there a clear "I bought LPT on an exchange" path?
   
2. Read bridge-lpt-to-arbitrum.mdx (with primer)
   - [ ] Does wallet explanation answer "what is a wallet?"
   - [ ] Is MetaMask setup clearly linked or explained?
   - [ ] Is "bridge" explained in non-technical language?
   - [ ] Does user feel safe/confident before starting?
   
3. Set up wallet (external link)
   - [ ] Is MetaMask setup doc clear for newbies?
   - [ ] Are seed phrases explained? (don't lose them!)
   
4. Withdraw from Binance
   - [ ] Is there a "how to withdraw from [exchange]" step in bridge guide?
   - [ ] Does guide show Arbitrum address format?
   - [ ] Does guide warn about address format mismatch?
   
5. Bridge LPT
   - [ ] Does user successfully move LPT from Binance to Arbitrum?
   - [ ] Does user understand gas fees?
   - [ ] Does user feel confident funds are safe?
   
6. Proceed with delegation
   - [ ] After bridge, can user continue to getting-started.mdx?
   - [ ] Is there clear signposting?

**Success metric:** LPT moved from Binance to Arbitrum, first delegation completed, user did not lose funds, user feels confident.

**Failure modes:**
- Wrong address format → user loses funds (CRITICAL)
- Doesn't understand seed phrase → loses wallet access (CRITICAL)
- Gas fees shock them → docs should estimate upfront (MEDIUM)
- Doesn't know what Arbitrum is → docs should explain (MEDIUM)

---

### Test 4: Protocol Analyst (Evaluation-only)

**Scenario:** User researches Livepeer tokenomics for investment decision.

**Test steps:**
1. Search "Livepeer tokenomics protocol analysis"
   - [ ] Does delegation-economics.mdx rank high?
   - [ ] Does about/tokenomics.mdx appear in results?
   
2. Read delegation-economics.mdx
   - [ ] Can user extract: current yield, inflation rate, fee mechanism?
   - [ ] Does page cite sources (Explorer, LIPs)?
   - [ ] Are assumptions clearly stated ("assumes orchestrator calls rewards", "assumes inflation schedule doesn't change")?
   
3. Check tokenomics.mdx
   - [ ] Does page clearly explain: total supply, inflation schedule, treasury?
   - [ ] Are LIP references current and correct?
   - [ ] Does user have data to write: "Livepeer delegates earn X% from Y sources, Z% from inflation"?

**Success metric:** User completes analysis with cited data from Livepeer docs.

**Failure modes:**
- Data is inconsistent between pages (e.g., different inflation numbers) → accuracy fail
- LIP references are outdated → research validity questioned
- No sources cited → user doesn't trust numbers

---

### Test 5: Orchestrator Understanding Delegator Experience

**Scenario:** Orchestrator wants to know what delegators see and how to attract them.

**Test steps:**
1. Read choose-a-delegate.mdx
   - [ ] Does orchestrator understand what metrics delegators use to compare?
   - [ ] Does orch see their own commission reflected in yield calculations?
   
2. Read delegation-economics.mdx
   - [ ] Can orchestrator calculate: "if I set 10% commission, my delegators earn what yield?"
   - [ ] Does orch understand fee-cut vs reward-cut mechanics?
   
3. Check delegation-management.mdx
   - [ ] Does orch understand when delegators reddelegate (performance triggers)?
   - [ ] Does orch see the "what if I miss reward calls" consequence?

**Success metric:** Orchestrator understands delegator decision criteria and adjusts marketing/ops accordingly.

**Failure modes:**
- Orch doesn't understand commission impact → docs should make this explicit
- Orch thinks low commission is the only factor → docs should explain performance matters more
- Orch doesn't realize missed rewards cause redelegation → docs should emphasize

---

## Launch checklist (pre-publication)

### Content completeness
- [ ] portal.mdx created and routes correctly
- [ ] delegation-economics.mdx written and reviewed
- [ ] undelegation.mdx written and reviewed
- [ ] Four TO-ADD pages promoted and nav updated
- [ ] All [REVIEW] and [VERIFY-LIVE] flags addressed
- [ ] All links tested and working

### Accuracy verification
- [ ] Inflation schedule matches live protocol (verified date: ___)
- [ ] Yield examples calculated correctly (spot-checked by Mehrdad: ___)
- [ ] Unbonding period (7 rounds) verified against contract (verified date: ___)
- [ ] All contract addresses correct (verified date: ___)
- [ ] All Explorer links working
- [ ] All LIP references current and correct (verified date: ___)

### Accessibility & clarity
- [ ] One new crypto user reviewed bridge guide and successfully bridged
- [ ] One yield-seeking delegator reviewed full journey and delegated
- [ ] One governance participant reviewed governance path and voted
- [ ] All pages proofread for grammar and tone
- [ ] All tables and examples render correctly

### Structure & navigation
- [ ] Portal.mdx is entry point, routes by role
- [ ] Nav.json updated with all pages in correct order
- [ ] Breadcrumbs on all pages consistent
- [ ] Related pages sections populated
- [ ] Cross-tab links (to About, Governance) are clear

### Performance & monitoring
- [ ] Analytics tracking set up (page views, bounce rate, time-on-page)
- [ ] Feedback mechanism in place (feedback form or link to Discord #docs)
- [ ] 14-day post-launch monitoring plan created
- [ ] FAQ team briefed on expected questions

### Approval sign-offs
- [ ] Content team: _____ (date)
- [ ] SME (Mehrdad or protocol): _____ (date)
- [ ] Governance / Treasury lead: _____ (date)
- [ ] Community / Support lead: _____ (date)
- [ ] Product / Comms: _____ (date)

---

## Monitoring & feedback (post-launch)

### Week 1: Hotfix window
- Monitor for broken links, wrong numbers, critical errors
- Fix without discussion (e.g., inflation number was off)
- Log all fixes

### Week 2-4: Feedback collection
- Track analytics: bounce rate, time-on-page, path analysis
- Collect support tickets: what questions are still unanswered?
- Collect user feedback: Discord, docs feedback form
- Group by pattern: "many users ask X", "no one reads Y"

### Month 2: Iteration
- First content iteration based on feedback
- Update stale data (allocations, yield numbers)
- Add FAQ sections based on questions
- Promote undiscovered but important pages

### Quarterly: Governance-driven updates
- LIP votes change parameters → update docs
- Treasury allocations change → refresh allocations page
- Inflation schedule updates → refresh economics page

---

## Review questions

1. **Should Test 3 (L1 Stranded) include a full Binance withdrawal guide?** Or should we link to Binance docs? Recommendation: link to Binance (they own that experience), embed summary in bridge guide (timings, address format).

2. **Is "successfully bridged 100 test LPT" a realistic test criterion?** Recommendation: yes. Use Arbitrum goerli testnet or production Arbitrum if test LPT available.

3. **Should we include a Test 6 (Error recovery - what went wrong)?** E.g., "wallet transaction failed", "orchestrator changed commission", "missed reward claim". Recommendation: post-launch, create dedicated "Troubleshooting" section. Defer for now.

4. **Who owns the 14-day monitoring plan?** Recommendation: assign to Community/Support lead + Content lead. Daily standup, document findings, propose fixes.

5. **Should launch blockers include all sign-offs or just core?** Recommendation: require Content + SME + Community. Product/Comms nice-to-have but not blocking.

---

## Canonical success metric (launch + 30 days)

**Primary outcome:**
- 70%+ of Yield-Seeking Delegators who read portal.mdx complete at least one delegation within 30 days

**Secondary outcomes:**
- <5% of new delegators ask "how do I undelegate" before docs publish undelegation.mdx
- >80% of governance voters find voting process clear (measured by FAQ/support volume)
- Protocol analysts cite Livepeer docs as source (track via search analytics referrers)

**Failure triggers (roll back or iterate immediately):**
- >10% of users report "lost funds" or "bridge failed" (critical)
- >30% bounce from portal without navigating deeper (UX issue)
- Stale data discovered post-launch (factual error)

---

**END OF CANONICAL CONTENT DESIGN**

This 7-file deliverable provides:

1. **Audience** — Who lands on tab, arriving vectors, personas, consensus scoring
2. **Personas** — Primary (A/B sub-types), secondary, detailed profiles, success metrics, failure modes
3. **Journeys** — Stage-by-stage breakdowns, question sequences, coverage analysis, blocking decisions, JTBD framework
4. **IA Structure** — Canonical 10-section organization, current vs. recommended layouts, key decisions, dependencies
5. **Content Gaps** — Prioritized list of 10 gaps, effort estimates, blocking analysis, summary matrix
6. **Format Spec** — Frontmatter, content structure, review criteria, approval workflow, templates
7. **Testing & Approval** — End-to-end tests by persona, launch checklist, monitoring plan, success metrics

**Format:** Follows orchestrators/02-personas.md exactly (Verdict lines, Review questions, comprehensive structure). All 7 files follow canonical pattern for orchestrators tab, adapted for delegators/LPT audience.