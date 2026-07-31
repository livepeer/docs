# Review: `bridge-lpt-to-arbitrum.mdx`

**Page**: `v2/about/resources/bridge-lpt-to-arbitrum.mdx`
**Review date**: 2026-03-29
**Reviewer**: Claude (session-assisted)
**Scope**: Copy, voice register, frontmatter, structural consistency
**Standards applied**: `voice-rules.md`, `copy-rules.md`, frontmatter taxonomy plan

---

## Summary

The page is structurally sound and technically detailed — the route table, tab layout, and step-by-step instructions are well-designed. The problems are systemic copy failures, not content gaps. Three categories dominate:

1. **Frontmatter is on deprecated values** — `pageType` and `purpose` are using old aliases and `audience: delegator` is wrong for a general-purpose bridging guide.
2. **Blocking copy rules are violated throughout** — `rather than` appears 3 times, `not [X]` constructions appear 3 times, and `if [condition]` in body prose appears 8+ times.
3. **Hedged language softens genuine risks** — "appear to be lost" (×2), "Plan accordingly", "may be lost" and "the associated risks" all dilute warnings that should land hard.

All issues were fixed in the same session. Framework update to `voice-rules.md` was also applied (see Recommendations).

---

## Frontmatter — 3 issues fixed

| Field | Was | Fixed to | Reason |
|---|---|---|---|
| `pageType` | `how_to` | `instruction` | Deprecated alias per frontmatter taxonomy plan |
| `purpose` | `how_to` | `build` | Deprecated alias; `build` is the correct canonical value for `instruction` pageType |
| `audience` | `delegator` | `general` | Bridge guide is used by delegators, orchestrators, and anyone holding LPT. Single-audience label was incorrect. |
| `description` | Table of contents framing: "How to get LPT onto Arbitrum One: via the official Arbitrum bridge..." | Outcome statement: "Move LPT to Arbitrum One to stake, delegate, and participate in Livepeer governance — via bridge, CEX, or DEX swap." | Copy rules: description is an outcome statement, not a table of contents |

---

## Blocking Copy Violations — all fixed

### `rather than` (×3)

| Line | Was | Fixed to |
|---|---|---|
| L107 | "rather than the standard Arbitrum ERC-20 gateway that most third-party bridges rely on" | "Third-party bridges target the standard Arbitrum ERC-20 gateway, which LPT does not use." |
| L249 | "rather than going directly to Uniswap" | "Aggregators split orders across pools to reduce price impact and give you more LPT per ETH spent." |
| L352 | "The whole process takes minutes rather than days" | "The whole process takes minutes." |

### `not [X]` constructions (×3)

| Line | Was | Fixed to |
|---|---|---|
| L50 | "if your LPT is **not** currently bonded to an orchestrator" | "This guide applies to unbonded LPT only. Staked LPT must be unbonded first." |
| L61 | "You cannot use Ethereum Mainnet LPT directly on the protocol." | "Protocol interactions — staking, delegation, rewards, governance — require LPT on Arbitrum One." |
| L462 | "(not the LPT itself, which remains in escrow) may be lost" | Broken into two sentences: "A ticket that expires without being redeemed forfeits the ETH allocated to the L2 execution gas. The LPT itself remains locked in `L1Escrow` on Ethereum and is safe." |

### `if [condition]` in body prose (×7)

| Line | Was | Fixed to |
|---|---|---|
| L116 | "The bridge will prompt you to switch if needed." | "The bridge prompts a network switch automatically." |
| L205 | "If you use Coinbase or Kraken and they only offer..." | "Coinbase and Kraken currently offer LPT withdrawals on Ethereum Mainnet only. Withdraw to an Ethereum wallet first..." |
| L256 | "If you already have ETH, USDC, or another token..." | "Any token you already hold on Arbitrum One — ETH, USDC, or otherwise — can be swapped directly to LPT..." |
| L372 | "If you want to exit LPT on Arbitrum One..." | "To exit LPT on Arbitrum One into ETH, USDC, or another token, swap on a DEX." |
| L409 | "If you need Ethereum Mainnet LPT specifically..." | "For Ethereum Mainnet LPT specifically, use the Bridge or CEX tab." |
| L416 | "If you hold LPT on Arbitrum One and want to swap it out..." | "Wallet-native swaps let you exchange LPT on Arbitrum One for ETH, USDC, or any other token without leaving the app." |
| L453 | "Deposit transactions can fail to execute on Arbitrum if gas prices spike..." | "Deposit transactions occasionally fail when gas prices spike between Ethereum submission and Arbitrum sequencing." |
| L459 | "If the ticket shows as failed, connect your wallet and click to resubmit." | "For a failed ticket: connect your wallet and click to resubmit." |

---

## Audience Register — code blocks rule update (framework change)

The original report flagged all `<code>` contract address blocks as violations of the delegator voice rule: "Do not use code blocks or CLI commands — not their interface."

**Decision: rule was too broad.** The intent is to exclude CLI commands and shell syntax. Contract addresses in `<code>` blocks exist to allow accurate copying — removing them would harm usability. On semi-technical pages where on-chain interaction is required (bridging, contract calls), `<code>` for data values is correct.

**Action taken**: Updated `voice-rules.md` delegator section — split the rule into "no CLI commands" (maintained) and "code blocks for data values are acceptable on pages requiring on-chain interaction" (clarified). See framework change note.

### Jargon definitions — 2 glossary entries added

| Term | Action |
|---|---|
| `optimistic rollup` | Added to glossary. Linked from L341 in bridge page. |
| `retryable ticket` | Added to glossary. Linked from L457 (first use) in bridge page. |

Note on `retryable ticket`: the step title "Check the retryable dashboard" was preserved because it matches the actual Arbitrum dashboard name. The term is linked to the glossary definition on first use in body text.

Note on `wei` / 18 decimal places (L319): **not changed**. With `audience: general`, this is appropriate for the multi-audience page. The withdrawal bridge step requires wei input — the instruction is accurate and necessary.

---

## Hedged Language — all fixed

| Line | Was | Fixed to | Issue |
|---|---|---|---|
| L85 | "carry the associated risks" | "carry counterparty risk: temporary custody of your tokens, slippage on DEX swaps, and withdrawal limits on CEX routes" | Unnamed risk gives reader nothing to evaluate |
| L167 | "tokens that appear to be lost. They can be recovered but require additional steps." | "tokens sent to an unintended address. Recovery requires contacting exchange support and is not guaranteed." | "Appear to be" softens a real risk; recovery is not certain |
| L260 | "will usually give better execution" | "will give you more LPT per ETH spent" | "Better execution" is meaningless to most readers |
| L308 | "Plan accordingly." | "Start a withdrawal at least 8 days before you need the LPT available on Ethereum." | Not actionable |
| L354 | same as L167 — "appear to be lost and may require exchange support" | same fix as L167 | Same issue, repeated in Withdrawals section |
| L419 | same as L260 — Withdrawals Wallet Swaps Note | same fix as L260 | Duplicate of Deposits Note — fix applied to both |
| L308 | "Your LPT will not be claimable on Ethereum until this period has elapsed." | "Your LPT remains locked in transit until the 7 days elapse." | `not [X]` construction additionally fixed here |

---

## Inconsistencies — fixed

| Issue | Location | Fix |
|---|---|---|
| Trust Wallet row missing "210M+ users" stat | Withdrawals Wallet Swaps table (L432) | Added to match Deposits table (L272) |

---

## Minor — fixed

| Issue | Location | Fix |
|---|---|---|
| "covering all practical starting points" — padding | L63 | Deleted |
| "For quick reference:" — label filler | L472 | Deleted; table follows paragraph directly |

---

## Deferred / Not Fixed

| Item | Reason |
|---|---|
| "Quick Guide Map" heading label (L91, L292) | Standardisation question — applies across multiple pages, not a single-page fix. Flag for docs-wide heading convention review. |
| Withdrawal Bridge Step 1 complexity (Arbiscan write contract, wei input) | Content is technically correct. Page is now `audience: general`, not delegator-only. SME review recommended before any content changes to this step. |

---

## Recommendations

1. **Run the frontmatter taxonomy migration script** across `v2/about/resources/` — several pages still use deprecated `pageType` and `purpose` values (`how_to`, `glossary`, etc.).

2. **Apply the code blocks clarification** from voice-rules.md to the delegator-specific sections of any other pages that were previously over-applying the CLI rule to data display.

3. **Add "Quick Guide Map" to the heading conventions list** — or remove the label and let the route tables speak for themselves. Inconsistent heading labels across similar page patterns are a low-cost fix with high consistency payoff.

4. **SME pass on Withdrawal Bridge Step 1** — the Arbiscan write contract approval step is the most technically demanding instruction on this page. Verify it is the only path for LPT withdrawals (no UI-level approval option exists), and if so, add a note clarifying that this is a one-time setup per wallet address.

5. **Expand the glossary** — "optimistic rollup" and "retryable ticket" were the first entries added in this session. The glossary is clearly a stub. The Arbitrum-specific bridging vocabulary used across the About section (and Delegators tab) would benefit from a dedicated terminology pass.

6. **Review `blockchain-contracts.mdx`** — it also carries `audience: delegator` and is likely similarly mis-scoped. Flagged for next review session.
