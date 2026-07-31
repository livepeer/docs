# 07 — Self-check (run before submitting)

Run every check. Mark each yes or no. If any answer is no, fix before submitting.

---

## 1. Banned-phrase scan

- [ ] No `effectively`, `essentially`, `basically`, `meaningful`, `significant` (as intensifier), `real` (as intensifier), `various`, `several`, `obviously`, `clearly`, `simply`, `just` (as filler), `easy`, `straightforward`.
- [ ] No "This page covers", "This page explains", "This page walks you through", "This section covers", "This guide covers".
- [ ] No "Understanding X is essential", "It's important to note", "It should be noted", "As mentioned above", "As noted previously".
- [ ] No "and so on", "etc.", "among other factors", "rather than" (used to hedge), "what it takes", "can generate", "may produce", "could potentially".
- [ ] No "Don't worry, this is easy", "With just a few lines of code", "Powered by blockchain technology", "Built on blockchain technology", "Thriving ecosystem", "Vibrant community", "Passionate contributors", "Together, we can", "The future of decentralised".
- [ ] No "Simply stake", "As a delegator, you will automatically", "Set and forget", "Hassle-free staking", "Passive income" (without dependencies), "Just connect your wallet", "Easy to delegate".

## 2. Opening test

- [ ] Lead sentence states the outcome or value. Not a caveat, not a self-reference, not a definition of what the page is.
- [ ] First paragraph names at least one specific noun: a contract, a percentage, a number, an action, an interface.
- [ ] No first-person plural ("we", "our") in the first 200 words.

## 3. Specificity scan

- [ ] Every paragraph contains at least one of: a number, a percentage, a contract method, a named interface (Livepeer Explorer, Arbiscan, BondingManager), a specific action, a named dependency.
- [ ] No paragraph reads like a generic overview that could appear in any docs site.
- [ ] No three-word bullets that hide the absence of an actual claim.

## 4. UK English scan

- [ ] No US spellings: optimize, organize, customize, recognize, analyze, behavior, color, center, labeled, canceled, traveling. (See `03-voice-and-anti-lazy.md` table B.4.)
- [ ] No em-dashes (`—`) anywhere in the body. Comma, semicolon, colon, or rewrite.

## 5. Word budget

- [ ] Body word count is inside the range stated in `02-page-briefs.md` for this page (use the lower half of the range when in doubt).
- [ ] If over budget, the cut was specific claims removed — not specific claims flattened into vague language.
- [ ] If under budget, the page still hits every key fact in the brief.

## 6. Veracity flag check

- [ ] Every numeric value in the body either (a) appears in `05-source-of-truth.md` Section 2, 3, or 5, or (b) is flagged in the `OPEN QUESTIONS` section at the end.
- [ ] No invented contract address. No invented APY/yield number. No invented active-set size, treasury cut, or proposal threshold.
- [ ] Active set size is described as "around 100" or linked to the live source — not stated as a hard number unless re-verified.
- [ ] Inflation rate is never quoted as a static number. Always cited as "variable, see `Minter.inflation()`" or linked to the protocol-parameters page.

## 7. Jargon check

- [ ] Every Livepeer-specific term (LPT, orchestrator, bonding, reward cut, fee share, active set, round, thawing period, vote detachment, BondingManager, LivepeerGovernor, Minter, RoundsManager, treasury cut) is defined inline on first appearance, then used naked.
- [ ] No DeFi term used without an inline definition: `impermanent loss`, `AMM`, `slippage`, `MEV`, `liquidity pool`, `LP token` (LPT in this context only).
- [ ] No node-operator hardware terminology: `VRAM`, `GPU pipeline`, `pipeline throughput`, `NVLink`, `bandwidth`. If the page is comparing orchestrators, criteria are reader-facing (reward call ratio, reward cut, fee share, active-set position) — not hardware.

## 8. Dependency disclosure

- [ ] Every claim about earnings, returns, yield, rewards, or fee revenue names the dependency in the same sentence or same paragraph.
  - Reward cut, fee share, orchestrator reward-call consistency, active-set membership, total bonded stake (yours and the network's), inflation rate, treasury cut, ETH fee volume.
- [ ] No "you'll earn rewards" without naming what changes the number.
- [ ] No phrasing that suggests delegation outcomes are automatic or fixed.

## 9. Interface check

- [ ] No CLI prompt (`$`, `>`, `npx`, `npm`, `cast`, `forge`, `curl`).
- [ ] No shell script.
- [ ] No SDK code snippet.
- [ ] Code blocks present only on bridging or contract-reference pages, only for contract addresses or copyable on-chain values.
- [ ] Body prose names the interface in plain language: "Livepeer Explorer", "the Arbitrum Bridge UI", "your connected wallet", "Arbiscan".

## 10. Pass B taxonomy preview

These are predictions Pass B will set. The body should not contradict them.

- [ ] `audience` is `delegator` (unless this is the glossary serving `everyone`).
- [ ] `pageType` matches the brief: `concept`, `instruction`, `guide`, `navigation`, `reference`, or `resource`.
- [ ] `purpose` matches the brief: one of `orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `operate`, `reference`, `update`.
- [ ] `lifecycleStage` is one of `discover`, `evaluate`, `setup`, `operate`, `optimise` — and matches what the body actually does.
- [ ] If the page quotes any governance-controlled value, `lastVerified` will be set when Pass B writes frontmatter; the body must say "verified `<date>`" or link to the protocol-parameters page.

---

## Final read-through (one minute)

- [ ] Read the body aloud as if explaining to a finance-aware friend over coffee. Every sentence sounds like something you would say.
- [ ] No sentence could appear unchanged on a generic docs site.
- [ ] No sentence is filler.
- [ ] If a smart non-coder dropped onto the page cold, every paragraph leaves them with one new fact, one specific dependency, or one action.

If every box above is ticked, submit.

If any box is no, fix before submitting. Do not submit a partially-passing draft and rely on the user to catch the rest.
