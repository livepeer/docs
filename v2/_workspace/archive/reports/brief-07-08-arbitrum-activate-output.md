# Brief 07+08 Output — Connect to Arbitrum + Activate on the Network

**Status:** Research complete · Both draft MDXs ready for review  
**Date:** March 2026  
**No commits. No repo writes. For human review only.**

<CustomDivider />

## Part 1 — Shared Research Report

### 1.1 Sources Consulted

| Source | URL | Content Found |
|--------|-----|---------------|
| docs.livepeer.org/orchestrators/guides/connect-to-arbitrum | Livepeer Docs (legacy) | `-ethUrl` flag format; Infura endpoint URL confirmed; Arbitrum One network flag; self-hosted node option |
| docs.livepeer.org/orchestrators/guides/get-started | Livepeer Docs (legacy) | Full activation flow via `livepeer_cli`; reward cut/fee cut defaults; LPTU staking; service address format; active set mechanics; re-activation requirements |
| docs.livepeer.org/guides/orchestrating/get-started | Livepeer Docs (v2) | Full startup command; `nvidia-smi -L` for GPU listing; success log lines; keystore path; `ethAcctAddr` flag |
| docs.infura.io/api/networks/arbitrum/quickstart | Infura Docs | Confirmed Infura Arbitrum One URL format: `https://arbitrum-mainnet.infura.io/v3/<PROJECT_ID>` |
| metaschool.so/rpc/arbitrum | Third party | Confirmed Alchemy Arbitrum One URL format: `https://arb-mainnet.g.alchemy.com/v2/<ALCHEMY_API_KEY>` |
| github.com/arddluma/awesome-list-rpc-nodes-providers | GitHub | Public endpoints confirmed: `https://arb1.arbitrum.io/rpc`, `https://rpc.ankr.com/arbitrum` |
| github.com/livepeer/go-livepeer/issues/1959 | GitHub Issues | `-ethUrl` reliability issues when provider restarts; streams drop if RPC disconnects |

<CustomDivider />

### 1.2 Research Questions Answered

**Q1 & Q2. `-ethUrl` format and valid RPC providers:**

| Provider | URL format | Sign-up required | Notes |
|---|---|---|---|
| Alchemy | `https://arb-mainnet.g.alchemy.com/v2/<API_KEY>` | Yes (free tier) | Recommended — generous free tier, reliable |
| Infura | `https://arbitrum-mainnet.infura.io/v3/<PROJECT_ID>` | Yes (free tier) | Confirmed in Livepeer legacy docs explicitly |
| Offchain Labs (public) | `https://arb1.arbitrum.io/rpc` | No | Rate-limited; suitable for testing only |
| ANKR (public) | `https://rpc.ankr.com/arbitrum` | No | Rate-limited; suitable for testing only |
| Self-hosted | `http://localhost:8547` (default Arbitrum Nitro port) | No | Advanced; see Offchain Labs node docs |

**Q3. Livepeer-hosted RPC endpoint:** None found. Not provided by the Foundation.

**Q4. Community consensus on RPC provider:** Legacy Livepeer docs explicitly call out Infura by name with the exact endpoint format. Alchemy is the industry standard alternative. Public endpoints (`arb1.arbitrum.io/rpc`) are consistently flagged as unreliable for production in third-party documentation. Recommendation: Alchemy or Infura free tier for new operators.

**Q5. Security warnings around `-ethAcctAddr` and keystore:**
- Default keystore location: `~/.lpData/arbitrum-one-mainnet/keystore`
- Private key + passphrase together allow signing transactions; both must be safeguarded
- `-ethAcctAddr` flag is only needed if reusing an existing account; new operators should omit it and let go-livepeer create a new account
- go-livepeer prompts for passphrase on first run if no existing account found

**Q6. `livepeer_cli` activation command:**
Start `livepeer_cli` in a separate terminal while go-livepeer is running. The exact activation option is:  
**"Invoke multi-step 'become an orchestrator'"** — this is a single multi-step command that:
1. Sets reward cut percentage (default: keep 10%)
2. Sets fee cut percentage (default: keep 95%; prompt shows `current=100 default=95`)
3. Sets pixels per unit (default: 1)
4. Sets price per unit in Wei
5. Sets publicly accessible service address (format: `host:port`, e.g. `1.1.1.1:8935`)
6. Sets stake amount in LPTU (1 LPT = 1e18 LPTU)

**Q7 & Q8. Active set and LPT requirements:**
- Active set = top 100 orchestrators by total LPT stake on the network
- No fixed minimum — the minimum stake to enter is the lowest stake held by any orchestrator currently in the active set (visible on Livepeer Explorer)
- Node joins the active set in the **following round** after transactions confirm

**Q9. Service URI format:**
- Format: `hostname:port` (e.g. `1.1.1.1:8935` or `myorchestrator.example.com:8935`)
- Must be publicly externally reachable — this is the address gateways use to connect
- Must match the value used in the `-serviceAddr` startup flag
- Default shown in CLI prompt: `1.1.1.1:8935`

**Q10. Propagation time:**
- After transaction confirms on Arbitrum (typically seconds), the node joins the active set in the **following round**
- Livepeer rounds are approximately 5,760 Ethereum L1 blocks (~24 hours) — [//]: # (REVIEW: confirm current round length with Mehrdad/protocol team; this is the legacy round length, may have changed post-Confluence)
- Node should appear in Explorer after transactions confirm; "active" status activates in the next round

**Q11. Reward cut and fee cut:**
- **Reward cut**: percentage of LPT block rewards the orchestrator keeps; remainder is distributed pro-rata to delegators. Default = 10% (keep 10%, share 90%)
- **Fee cut**: percentage of ETH transcoding/inference fees the orchestrator keeps; remainder goes to delegators. Default = 95% (keep 95%, share 5%)
- Community convention: most operators set fee cut to 95–100% initially; reward cut varies widely. [//]: # (REVIEW: confirm current community norms from Forum/Discord)

**Q12. Common activation failures (sourced from docs + go-livepeer issues):**
1. **Not in active set** — stake below the 100th-ranked orchestrator; node is registered but inactive
2. **Service address unreachable** — `serviceAddr` not publicly accessible; port 8935 blocked by firewall or NAT
3. **Price set too high** — gateways set `maxPricePerUnit`; if orchestrator price exceeds gateway's max, no jobs are routed
4. **Transaction not yet propagated** — activation queued for next round; operators sometimes check Explorer too early
5. **RPC disconnection** — if `-ethUrl` provider goes down, all sessions drop (documented in go-livepeer #1959)

**Q13. Testing RPC connection without full startup:**
No dedicated flag found. The most reliable test is to run go-livepeer and watch for the success log lines:
```
I0302 15:27:26.456804 25418 rpc.go:167] Listening for RPC on :8935
I0302 15:27:28.463151 25418 rpc.go:207] Received Ping request
```
Alternatively, test the RPC endpoint directly:
```bash
curl -X POST <YOUR_RPC_URL> \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```
A valid response returns a hex block number.

<CustomDivider />

### 1.3 SME Review Items

| Claim | Gap | Suggested Verifier |
|-------|-----|-------------------|
| Livepeer round length | Legacy value was ~24hrs; may have changed post-Confluence upgrade | Mehrdad / protocol docs |
| Fee cut / reward cut community norms | Not recently verified | Discord `#orchestrating` or Forum |
| Whether "not receiving jobs" causes cover all current failure modes | Only 4 causes listed; Discord/forum search not executed | Discord `#orchestrating` since Q4 2024 |
| LPT minimum stake in practice | Varies by network state; Explorer link is the live source | Livepeer Explorer (live data) |
| Re-activation requirement wording | "re-register or stake changes" — confirm exact protocol behaviour | Protocol docs / Mehrdad |

<CustomDivider />

### 1.4 Media Candidates

No direct video walkthrough found in this pass. Search targets for publication prep:
- YouTube: `livepeer orchestrator activate`, `livepeer_cli tutorial`
- Forum: activation threads where community members have shared screenshots of Explorer showing active state
- Livepeer blog: any Confluence or Arbitrum migration posts that include activation screenshots

<CustomDivider />

## Part 2 — Draft MDX: `connect-to-arbitrum.mdx`

```mdx
---
title: 'Connect to Arbitrum'
description: 'Connect go-livepeer to the Arbitrum network using a hosted or self-hosted RPC endpoint — required for staking, activation, and payments.'
keywords: ["livepeer", "orchestrator", "Arbitrum", "RPC", "ethUrl", "Alchemy", "Infura", "Ethereum", "connection"]
pageType: 'how_to'
audience: 'orchestrator'
status: 'current'
---

This guide shows you how to connect go-livepeer to the Arbitrum network using an RPC endpoint.

<Note>
Livepeer runs on **Arbitrum One**, an Ethereum Layer 2 network. Arbitrum handles the protocol's staking, payments, and governance contracts. Your orchestrator node needs a live connection to Arbitrum to activate, receive payments, and submit on-chain transactions. This connection is provided by an RPC endpoint — either from a hosted provider or a self-hosted node.
</Note>

## Prerequisites

Before proceeding:

- go-livepeer is installed and your GPU is verified (see [Install go-livepeer](/v2/orchestrators/setup/install-go-livepeer)) <!-- REVIEW: confirm path -->
- Your Ethereum account has a small amount of ETH on Arbitrum One for gas. Typical activation transactions cost fractions of a cent; a few dollars of arbETH is sufficient to get started. <!-- REVIEW: check current gas costs with Mehrdad/community -->
- You have an Arbitrum RPC endpoint (covered in Step 1 below)

---

## Step 1 — Choose an RPC endpoint

Your node needs a stable, low-latency connection to Arbitrum One. You have three options:

| Option | Best for | Rate limits | Sign-up |
|---|---|---|---|
| Alchemy (free tier) | Most operators | Generous — 300M compute units/month | Required |
| Infura (free tier) | Most operators | 100K requests/day | Required |
| Public endpoint (`arb1.arbitrum.io/rpc`) | Testing only | Yes — may throttle under load | None |
| Self-hosted Arbitrum node | Advanced / privacy-focused | None | None |

For production orchestrator nodes, a hosted provider (Alchemy or Infura) is strongly recommended. Public endpoints have no uptime guarantees and will drop your sessions if they become unavailable.

<Tabs>
  <Tab title="Alchemy">
    1. Create a free account at [alchemy.com](https://www.alchemy.com)
    2. Create a new app — select **Arbitrum** as the chain and **Mainnet** as the network
    3. Copy your HTTPS endpoint. It will look like:

    ```
    https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY
    ```

    Use this URL as your `-ethUrl` value in the next step.
  </Tab>
  <Tab title="Infura">
    1. Create a free account at [infura.io](https://infura.io)
    2. Create a new API key — select **Web3 API**
    3. In your key settings, enable the **Arbitrum** network
    4. Your endpoint will look like:

    ```
    https://arbitrum-mainnet.infura.io/v3/YOUR_PROJECT_ID
    ```

    Use this URL as your `-ethUrl` value in the next step.
  </Tab>
  <Tab title="Public endpoint">
    The Offchain Labs public endpoint requires no sign-up:

    ```
    https://arb1.arbitrum.io/rpc
    ```

    <Warning>
    Public RPC endpoints have rate limits and no uptime guarantees. If the endpoint becomes unavailable, your orchestrator will drop all active sessions. Use a hosted provider for a production node.
    </Warning>
  </Tab>
</Tabs>

---

## Step 2 — Add the flag to your startup command

Add `-ethUrl` and `-network arbitrum-one-mainnet` to your go-livepeer startup command:

```bash
livepeer \
  -network arbitrum-one-mainnet \
  -ethUrl <YOUR_RPC_URL> \
  -orchestrator \
  -transcoder \
  -nvidia 0 \
  -pricePerUnit <PRICE_PER_UNIT> \
  -serviceAddr <SERVICE_ADDR>
```

Replace `<YOUR_RPC_URL>` with the endpoint from Step 1.

If you already have an Ethereum account and want to use it, add the `-ethAcctAddr` flag:

```bash
livepeer \
  -network arbitrum-one-mainnet \
  -ethUrl <YOUR_RPC_URL> \
  -ethAcctAddr <YOUR_ETH_ADDRESS> \
  ...
```

<Note>
If you omit `-ethAcctAddr`, go-livepeer will create a new Ethereum account on first run and prompt you for a passphrase to protect the keystore. The private key is stored at `~/.lpData/arbitrum-one-mainnet/keystore`.
</Note>

<CustomDivider />

## Step 3 — Verify the connection

Start go-livepeer. Within a few seconds you should see both of these log lines:

```
I0302 15:27:26.456804 rpc.go:167] Listening for RPC on :8935
I0302 15:27:28.463151 rpc.go:207] Received Ping request
```

The `Received Ping request` line confirms your node is publicly reachable on the network.

**If you see RPC errors instead**, check:
- Your RPC URL is correctly formatted (no trailing slashes, correct API key)
- Your API key has Arbitrum One enabled in the provider dashboard
- The endpoint is reachable: test it directly with curl:

```bash
curl -X POST <YOUR_RPC_URL> \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

A valid response looks like `{"id":1,"result":"0x1a2b3c4d","jsonrpc":"2.0"}`. An error or empty response means your endpoint or API key is not working.

<CustomDivider />

<Warning>
**Protect your keystore.** Your Ethereum account controls your orchestrator identity and any LPT you stake. The private key is stored at `~/.lpData/arbitrum-one-mainnet/keystore`. Back it up to secure offline storage. Your passphrase and private key together allow anyone to sign transactions and move funds from your account — never share either.

If you lose access to your private key, you lose access to your orchestrator account and any staked LPT permanently.
</Warning>

<CustomDivider />

## Related

- [Activate on the Network](/v2/orchestrators/setup/publish-offerings) — next step: register on-chain and join the active set
- [Frequently Asked Questions](/v2/resources/faq) — Arbitrum RPC error reference [//]: # (REVIEW: confirm path)
```

---

## Part 3 — Draft MDX: `publish-offerings.mdx`

```mdx
---
title: 'Activate on the Network'
description: 'Activate your orchestrator on the Livepeer network using livepeer_cli — set reward cut, fee cut, and service URI, and verify you are in the active set.'
keywords: ["livepeer", "orchestrator", "activate", "livepeer_cli", "active set", "LPT", "stake", "reward cut", "service URI"]
pageType: 'how_to'
audience: 'orchestrator'
status: 'current'
---

This guide shows you how to activate your orchestrator on the Livepeer network so it can receive jobs.

## Prerequisites

Before proceeding:

- go-livepeer is running and connected to Arbitrum One (see [Connect to Arbitrum](/v2/orchestrators/setup/connect-to-arbitrum))
- Your Ethereum account has LPT available to stake. The amount required to enter the active set varies — see the [Active set](#the-active-set) section below.
- Your account has a small amount of arbETH for gas. A few dollars is sufficient.

---

## Activate your orchestrator

With go-livepeer running, open a second terminal and start `livepeer_cli`:

```bash
livepeer_cli
```

You will see a numbered menu of actions. Select the option labelled:

```
Invoke multi-step "become an orchestrator"
```

The tool will walk you through the following parameters in sequence.

<Steps>
  <Step title="Set reward cut">
    ```
    Enter block reward cut percentage (current=0 default=10) ->
    ```

    This is the percentage of LPT block rewards you keep. The remainder is distributed to your delegators. The default is 10% — you keep 10%, delegators share 90%.

    If you have no delegators, the value makes no immediate difference to your earnings, but it affects how attractive your node looks to potential delegators. Most new orchestrators accept the default.
  </Step>

  <Step title="Set fee cut">
    ```
    Enter fee cut percentage (current=100 default=95) ->
    ```

    This is the percentage of ETH transcoding and inference fees you keep. The default is 95% — you keep 95%, delegators share 5%.

    Accept the default unless you have a specific reason to change it.
  </Step>

  <Step title="Set pixels per unit">
    ```
    Enter amount of pixels that make up a single unit (default: 1 pixel) >
    ```

    Accept the default (1). This is the pricing granularity unit. You can adjust this later.
  </Step>

  <Step title="Set price per unit">
    ```
    Enter the price for transcoding in Wei per unit >
    ```

    This should match or be consistent with the `-pricePerUnit` value you used when starting go-livepeer. It is the price you charge per pixel for transcoding.

    <Note>
    Setting your price too high relative to other orchestrators means gateways will route jobs elsewhere. Check current network pricing on [Livepeer Explorer](https://explorer.livepeer.org) to set a competitive rate.
    </Note>
  </Step>

  <Step title="Set service address">
    ```
    Enter the public host:port of node (default: 1.1.1.1:8935) >
    ```

    Enter the publicly accessible address at which your orchestrator accepts connections. This must match the value you used with the `-serviceAddr` flag. Format: `hostname_or_ip:port`, for example `myorchestrator.example.com:8935`.

    <Warning>
    This address must be externally reachable from the internet. If your server is behind NAT or a firewall, configure port forwarding for port 8935 before activating. Gateways will attempt to connect to this address to route jobs to your node.
    </Warning>
  </Step>

  <Step title="Set stake amount">
    ```
    Enter amount of tokens to stake (in LPTU) >
    ```

    Stake is denominated in LPTU where **1 LPT = 1,000,000,000,000,000,000 LPTU (1e18)**. To stake 5 LPT, enter `5000000000000000000`.

    The minimum amount to enter the active set depends on the current network state — see the [Active set](#the-active-set) section below.
  </Step>

  <Step title="Confirm and wait">
    `livepeer_cli` will submit two transactions: an `approve` (to authorise the staking contract to move your LPT) and a `bond` (to stake). You will see log lines in your go-livepeer terminal as each transaction is submitted and confirmed on Arbitrum.

    Once both transactions confirm, your orchestrator will join the active set at the start of the **following round**.
  </Step>
</Steps>

<CustomDivider />

## Verify you are in the active set

1. Open [Livepeer Explorer](https://explorer.livepeer.org)
2. Search for your Ethereum address in the search bar
3. Your orchestrator profile will show its status. Look for **Active** in the status field — this confirms you are in the current round's active set and eligible to receive jobs.

If your profile shows **Registered** but not **Active**, your total stake (self-stake plus delegated stake) is not yet in the top 100. See the section below.

<Note>
After your activation transactions confirm, it may take until the next round begins before your status changes to Active in Explorer. Livepeer rounds are approximately 24 hours. [//]: # (REVIEW: confirm current round length with Mehrdad/protocol team)
</Note>

<CustomDivider />

## The active set

The active set consists of the top 100 orchestrators by total LPT stake on the network. Only active orchestrators are eligible to receive jobs and earn rewards in a given round.

To find the minimum stake currently required to enter the active set, visit [Livepeer Explorer](https://explorer.livepeer.org), sort orchestrators by stake, and look at the stake held by the 100th-ranked orchestrator. You need at least that amount of total stake (self-stake plus stake delegated to you) to enter.

If your orchestrator drops below the top 100, it becomes inactive and stops receiving jobs. It will not automatically re-enter the active set unless:
1. You re-register (submit a new activation transaction), or
2. Your total stake changes enough (through additional self-bonding or delegation) to push you back into the top 100

<CustomDivider />

<Accordion title="Not receiving jobs after activation?">

If your orchestrator is active in Explorer but not receiving transcoding or AI inference jobs, check the following:

**1. Your service address is not externally reachable**
This is the most common cause. Run a connectivity test from an external network to confirm port 8935 on your `serviceAddr` is open and responding. Check your firewall and router port-forwarding configuration.

**2. Your price is set too high**
Gateways set a maximum price per unit (`-maxPricePerUnit`). If your `pricePerUnit` exceeds the gateway's maximum, no jobs will be routed to your node. Compare your price against other active orchestrators on [Livepeer Explorer](https://explorer.livepeer.org).

**3. Your stake is at the edge of the active set**
Being in the active set does not guarantee job selection. Gateways select orchestrators based on a combination of price, performance history, and stake. New orchestrators with minimal stake and no performance history may receive few jobs initially. This improves over time.

**4. Your activation transaction has not yet propagated**
After activation, your node joins the active set in the following round (approximately 24 hours). If you have just activated, wait for the round to change and check Explorer again.

For further troubleshooting, see [Frequently Asked Questions](/v2/resources/faq) or ask in `#orchestrating` on Discord. [//]: # (REVIEW: confirm FAQ path)
</Accordion>

<CustomDivider />

## Related

- [How earnings work](/v2/orchestrators/concepts/economics) [//]: # (REVIEW: confirm path)
- [Maximise your earnings](/v2/orchestrators/advanced/earnings) [//]: # (REVIEW: confirm path)
- [Frequently Asked Questions](/v2/resources/faq) — "Not receiving jobs" [//]: # (REVIEW: confirm path)
```

---

## Part 4 — Outstanding Items Before Publication

1. **Round length** — "approximately 24 hours" based on legacy ~5,760 L1 block rounds; confirm current value with Mehrdad/protocol team
2. **arbETH gas cost estimate** — "a few dollars" is approximate; verify current gas cost for activation transactions
3. **Community norms for fee cut/reward cut** — check recent Forum/Discord for current operator conventions
4. **"Not receiving jobs" causes** — Discord `#orchestrating` search not executed; the accordion may be missing current failure modes (e.g. AI-specific routing issues post-AI subnet)
5. **All internal link paths** — `install-go-livepeer`, `concepts/economics`, `advanced/earnings`, `resources/faq` all need path confirmation against final IA
6. **Re-activation wording** — "re-register" is the term used in legacy docs; confirm this is still the correct framing for the current protocol version
