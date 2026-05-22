# Phase 07: Veracity Pass

> Human role: Resolve SME escalations
> Automated: Claim flagging, source resolution, staleness detection

---

## Inputs required

- Draft page from Phase 06 (quality gate PASSED)
- Veracity framework: `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md`
- Veracity library: `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md`
- Per-tab veracity sources (if exists): `CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/{TAB}/input-pack/veracity-sources.md`

## Process

### Step 1: Flag all factual claims

Read the page and identify every factual claim:
- Protocol parameters (Active Set size, unbonding period, inflation rate)
- Technical specifications (VRAM requirements, CLI flags, API endpoints)
- Economic figures (fee revenue, staking rewards)
- Governance facts (LIP numbers, voting thresholds)

### Step 2: Resolve claims against sources

**Resolution priority (highest wins):**

| Priority | Source type | Example |
|---|---|---|
| 1 | On-chain state | Livepeer Explorer, Arbiscan |
| 2 | Tagged source code release | go-livepeer v0.8.10, livepeer-js v4.x |
| 3 | Formal governance record | LIPs repo, Governor contract |
| 4 | Whitepaper / Streamflow spec | Architecture facts |
| 5 | Dated forum post | Community-validated procedures |
| 6 | Blog post | Narrative context (verify against T1-T4) |

### Step 3: Apply staleness rules

| Claim type | Staleness threshold | Action |
|---|---|---|
| Protocol parameter (governance-controlled) | Always verify-live | Use `[verify-live: explorer.livepeer.org]` — never hard-code |
| API version / CLI flags | Per tagged release | Check against latest go-livepeer release |
| Economic model | Annual review | Flag if >12 months since verification |
| Token price / market data | Real-time | Never hard-code — link to live source |
| Architecture fact | Stable | Verify against whitepaper/spec |

### Step 4: Resolve or escalate

For each flagged claim:
- **Resolved**: Source found, claim verified → remove `{/* REVIEW: */}` flag
- **Corrected**: Claim was wrong → fix and cite source
- **Escalated**: Cannot verify → document in tracking issue, keep `{/* REVIEW: */}` flag with issue link
- **Removed**: Claim cannot be verified and is not essential → remove from page

### Step 5: Set veracityStatus

In frontmatter:
- `veracityStatus: verified` — all claims resolved
- `veracityStatus: unverified` — some claims still in REVIEW with tracking issues
- `veracityStatus: stale` — page has not been reviewed in >90 days

## Output

- Page with all {/* REVIEW: */} flags resolved or escalated with tracking issue
- veracityStatus field set in frontmatter
- Source citations embedded for key claims

## Gate condition

- [ ] Zero unresolved REVIEW flags without tracking issue
- [ ] veracityStatus field set
- [ ] All governance-controlled values use `[verify-live]` pattern, never hard-coded
