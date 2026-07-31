# Sources and References — Staking & Rewards Section

Research log for: `earnings.mdx`, `rewards-and-fees.mdx`, `getting-delegates.mdx`, `payments.mdx`, `governance.mdx`.

---

## Uploaded Source Files

1. **`earnings.mdx`** — Existing v2 page (partially complete). Used as the primary structural template for the new Earnings Explained page. Content on revenue streams, commission parameters, AI vs transcoding comparison, and payment mechanics retained and restructured.

2. **`configure-reward-calling.mdx`** — v1 page. Source for: `-reward=false` flag, manual reward CLI steps, gas cost range (350k–450k), the economic threshold logic, and the `livepeer_cli` "Invoke reward" menu option. **Note:** v1 predates Arbitrum migration — gas price references (ethgasstation, gasnow) are stale for Arbitrum context. Methodology preserved, references updated.

3. **`yield-calculation.mdx`** — v1 page. Primary source for all mathematical formulas (ETH yield, LPT yield, combined yield). The LaTeX equations were preserved exactly. Variables ($v_{daily}$, $r_{rewards}$, $s_{fees}$, $s_{rewards}$, $l_{orch}$, $l_{active}$, $r_{inf}$, $l_{total}$, $p$, 417 rounds/year) all sourced from this document. Pitfalls section (variable parameters, inflation rate change) preserved and reframed from delegator perspective to orchestrator perspective.

4. **`vote.mdx`** — v1 page. Source for complete governance voting CLI walkthrough. Steps 1–7 (find contract address → livepeer_cli → select Vote on a poll → enter address → choose 0/1 → confirm → verify in Explorer) reproduced. Transaction log example (`Invoking transaction: "vote"`) preserved verbatim. Image references (`/v1/images/poll.png`, `/v1/images/vote-livepeer-cli.png`, `/v1/images/vote-livepeer-cli-instructions.png`) retained.

5. **`set-pricing.mdx`** — v1 page. Not directly quoted in Staking section but informed the commission/pricing framing. Primary use for the Feasibility section.

---

## GitHub Repositories

6. **livepeer/explorer — `lib/roi.ts`** — Source for the Explorer ROI calculation. The formula confirmed to be implemented in `https://github.com/livepeer/explorer/blob/main/lib/roi.ts`. Equations in `getting-delegates.mdx` are sourced from `yield-calculation.mdx` which documents this implementation.
   https://github.com/livepeer/explorer

7. **livepeer/go-livepeer** — Source for: `-reward=false` flag (confirmed still present), Arbitrum network target (`arbitrum-one-mainnet`), automatic reward calling default behaviour, and `livepeer_cli` menu options. Source for the Redeemer architecture and PM ticket mechanics.
   https://github.com/livepeer/go-livepeer

8. **livepeer/go-livepeer — `server/live_payment.go`** — Source for Live AI payment session state management, time-based fee calculation, and `LivePaymentSender` interface referenced in the Payments page.
   https://github.com/livepeer/go-livepeer/blob/master/server/live_payment_processor.go

---

## Livepeer Protocol and Governance

9. **LIP-89 — Treasury Allocation** — Source for the 10% treasury diversion from round issuance. Referenced in `earnings.mdx` and `rewards-and-fees.mdx`. The March 2026 10% figure is sourced from the `earnings.mdx` upload itself (frontmatter notes "As of 02-March-2026, 10% of each round's issuance goes to the Livepeer Treasury").
   https://github.com/livepeer/LIPs

10. **LIP-73 — Treasury Governance** — Referenced in governance page as the LIP that established the treasury governance mechanism.
    https://github.com/livepeer/LIPs

11. **LIP-91 / LIP-92 — AI Pipeline Parameters** — Referenced as context for AI subnet governance history in the governance page.
    https://github.com/livepeer/LIPs

---

## Project Files (Internal)

12. **`/mnt/project/gpu-nodes-ia-planning.md`** — Primary source for persona intelligence, pain points, and the compounding stake flywheel framing. Source for: active set = top 100 by stake, pool vs solo decision framing, AI subnet launch date Q3 2024, reward call importance to delegators.

13. **`/mnt/project/Remote_signers.md`** — Primary source for Live AI payment mechanics section in `payments.mdx`. Source for: `LivePaymentSender` interface, time-based fee calculation model for Cascade, the stateless remote signer design, `GetOrchestratorInfo` RPC context, and the distinction between transcoding ticket mechanics and live AI ticket mechanics. Citable as design document for PRs #3791 and #3822.

14. **`/mnt/project/gateways-ia-planning.md`** — Supporting context for probabilistic micropayment (PM) architecture, clearinghouse model, and gateway-side ticket handling. Source for confirming PM ticket structure fields.

15. **`/mnt/project/gpu-nodes-tab-audit.md`** — Source for current orchestrator tab gap analysis, confirmed Prometheus metric naming conventions, and the ETH balance monitoring requirement.

---

## Blockchain Infrastructure

16. **Arbitrum One (bridge.arbitrum.io)** — Referenced as the network where reward calls, ticket redemptions, and voting transactions are processed. Arbitrum gas characteristics (L2, low cost) informed the gas cost tables in `rewards-and-fees.mdx`.
    https://bridge.arbitrum.io

17. **Arbiscan (arbiscan.io)** — Referenced as the tool for checking gas prices and transaction history on Arbitrum One.
    https://arbiscan.io

18. **Uniswap LPT/ETH price feed** — Referenced in `getting-delegates.mdx` as the source of `price_{LPT/ETH}` used in the Explorer's combined yield formula.

---

## Livepeer Ecosystem

19. **Livepeer Explorer (explorer.livepeer.org)** — Referenced extensively across all five pages. Primary tool for: orchestrator rankings, reward call history, ROI calculator, commission parameters, fee revenue history, active set status, AI leaderboard, and voting page.
    https://explorer.livepeer.org

20. **tools.livepeer.cloud** — Referenced as the tool for AI pipeline capability visibility across the network.
    https://tools.livepeer.cloud

21. **Livepeer Forum — Orchestrators category** — Community intelligence source for delegator behaviour, orchestrator commission rate controversies, and the known pain point of orchestrators changing rates after attracting delegation.
    https://forum.livepeer.org/c/orchestrators/8

22. **Livepeer Discord — #orchestrators channel** — Source for community knowledge on reward calling automation, ETH balance management, and delegator migration patterns after commission changes.

---

## Videos

23. **Livepeer Orchestrator Economics Overview (YouTube)** — Embedded in `earnings.mdx`. Illustrative video for earnings concepts. URL: `https://www.youtube.com/embed/OVMjzJKMJnI`
    {/* REVIEW: Verify this is the correct video ID and that it remains publicly accessible */}

---

## Notes on Verification Items

| Claim | Source | Status |
|---|---|---|
| 10% treasury allocation | `earnings.mdx` upload (March 2026) | Current |
| 350k–450k gas for reward call | v1 `configure-reward-calling.mdx` | Needs Arbitrum re-verification — was written pre-Arbitrum |
| 417 rounds per year | v1 `yield-calculation.mdx` | Depends on Arbitrum block time — needs verification |
| Active set = top 100 by stake | `gpu-nodes-tab-audit.md` + `gpu-nodes-ia-planning.md` | Verify against current protocol parameters |
| Reward calling default = automatic | v1 confirmed, also in existing `earnings.mdx` | Likely current |
| Unbonding period = ~7 days | General Livepeer knowledge | Verify against current protocol |
| LPT/ETH price from Uniswap | v1 yield-calculation.mdx | Verify Explorer still uses Uniswap as oracle |
| YouTube embed ID | Not independently verified | Rick to confirm correct video |
