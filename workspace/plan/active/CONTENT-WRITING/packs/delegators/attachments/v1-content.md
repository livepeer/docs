# Delegators — V1 Source Content

Source directory: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/delegators/`

Six files were found and catalogued. Three files (`introduction.mdx`, `quick-start.mdx`, `livepeer-studio-cli.mdx`) are stored under the `v1/delegators/` path but contain developer/Studio content — they appear to have been placed there incorrectly (mismatch between path and content). They are included here verbatim for completeness. The three files under `v1/delegators/guides/` contain genuine delegator/LPT content.

---

## FILE 1

**Path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/delegators/introduction.mdx`

**Frontmatter:**
```yaml
title: "Introduction"
description: "Explore APIs, guides, and examples"
icon: "hand-wave"
```

**Body:**

> NOTE: This file is stored at the delegators path but its content is about Livepeer Studio developer onboarding, not delegator staking. Included verbatim.

<Tip>
  If you're looking for documentation on Livepeer's hosted realtime
  StreamDiffusion AI platform "Daydream", please navigate
  [here](https://pipelines.livepeer.org/docs)
</Tip>

Learn how to add live and on-demand video experience to your app using Livepeer
Studio. Effortlessly manage livestreams, video uploads, API keys, network usage,
billing, and more.

<CardGroup cols={2}>
  <Card title="Quickstart" icon="bolt-lightning" href="/developers/quick-start">
    Get started with Livepeer Studio in less than 5 minutes.
  </Card>
  <Card title="Guides" icon="book" href="/developers/guides/overview">
    Learn how to add live or on-demand video experiences to your app.
  </Card>
  <Card
    title="API References"
    icon="code"
    href="/api-reference/overview/introduction"
  >
    Explore the Livepeer Studio API
  </Card>
  <Card title="SDKs" icon="code" href="/sdks/introduction">
    Get up and running with SDKs and pre-built UI components
  </Card>
</CardGroup>

## Explore the Livepeer Studio SDKs

Explore developer SDKs, pre-built UI components, and tools for interacting with
the Livepeer Studio API.

### Server-side SDKs

<CardGroup cols={2}>
  <Card
    title="Typescript"
    icon="js"
    color="#EFD81A"
    href="/sdks/javascript"
  ></Card>
  <Card title="Go" icon="golang" color="#1EAED8" href="/sdks/go"></Card>
  <Card title="Python" icon="python" color="#F4DC5E" href="/sdks/python"></Card>
</CardGroup>

### React Components

<CardGroup cols={2}>
  <Card
    title="Player Component"
    icon="react"
    color="#5ED2F3"
    href="/sdks/react/Player"
  >
    Fully customizable video player component for seamless playback
  </Card>
  <Card
    title="Broadcast Component"
    icon="react"
    color="#5ED2F3"
    href="/sdks/react/broadcast"
  >
    Full-featured broadcast component with controls, settings, and device
    selection
  </Card>
</CardGroup>

[View all developer tools](/sdks/introduction)

---

## FILE 2

**Path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/delegators/quick-start.mdx`

**Frontmatter:**
```yaml
title: Quickstart
description: "Learn how to create an API key and start adding live and on-demand video to your app or website!"
icon: "bolt"
```

**Body:**

> NOTE: This file is stored at the delegators path but its content is about Livepeer Studio API quickstart for developers, not delegator staking. Included verbatim.

First, go to [Livepeer Studio](https://livepeer.studio), if you haven't already,
and create an account. Once you've created an account, you'll be able to create
an API key by clicking on the "Create API Key" button on Developers page.

<Warning>
  We do not recommend using ["CORS-enabled" API
  keys](/api-reference/overview/authentication) - they will be deprecated in an
  upcoming release. We recommend making requests from your backend to the
  Livepeer Studio API.
</Warning>

<Frame>
  ![Livepeer Studio - Create API key
  page](/v1/images/tutorials/studio-create-api.png)
</Frame>

You can now use this API key in Livepeer SDKs and APIs in order to authenticate
your requests and start building.

<Info>
  We recommend creating separate accounts for your development and production
  environments. This will allow you to easily isolate your environments. We will
  be shipping a solution for multi-environment management soon.
</Info>

In this exampe, we will use Javascript anld React to upload a video. Make sure
to set up a React app first.

## Install the JS SDK and Livepeer React

We install both the NodeJS SDK (which works in all JS environments with `fetch`)
and the Livepeer React library, which provides composable React primitives for
building video apps.

```
npm install livepeer @livepeer/react
```

## Set up the SDK

Add an API key to the environment variables, and construct a new Livepeer SDK
client.

```tsx
import Livepeer from "livepeer";

const livepeer = new Livepeer({
  apiKey: process.env.YOUR_PRIVATE_API_KEY,
});
```

## Retrieve playback info

We can now use the SDK on the backend to fetch the playback info for our asset.

This asset was uploaded using the dashboard, but this can also be an asset
created from an application.

```ts
import { getSrc } from "@livepeer/react/external";

const playbackId = "f5eese9wwl88k4g8";

export const getPlaybackSource = () => {
  const playbackInfo = await livepeer.playback.get(playbackId);

  const src = getSrc(playbackInfo.playbackInfo);

  return src;
};
```

## Play the asset

We can now use Player component from the SDK to play a video. In the below
example, we style the elements with Tailwind, but you can use any styling
solution:

```tsx
import { PauseIcon, PlayIcon } from "@livepeer/react/assets";
import { getSrc } from "@livepeer/react/external";
import * as Player from "@livepeer/react/player";
import { vodSource } from "./source";

export const DemoPlayer = ({ src }: { src: Src[] | null }) => {
  return (
    <Player.Root src={src}>
      <Player.Container>
        <Player.Video title="Live stream" />

        <Player.Controls className="flex items-center justify-center">
          <Player.PlayPauseTrigger className="w-10 h-10">
            <Player.PlayingIndicator asChild matcher={false}>
              <PlayIcon />
            </Player.PlayingIndicator>
            <Player.PlayingIndicator asChild>
              <PauseIcon />
            </Player.PlayingIndicator>
          </Player.PlayPauseTrigger>
        </Player.Controls>
      </Player.Container>
    </Player.Root>
  );
};
```

## Start building

Check out the [SDKs](/sdks/introduction) and
[API Reference](/api-reference/overview/introduction) pages to learn more about
how to use the SDKs and API to build your application.

You can also refer to the [Guides](/developers/guides/overview) section for more
in-depth tutorials on how to use the SDKs and API to build specific
applications.

Don't know where to start? Check out these four tutorials:

- [Learn how to create a livestream](/developers/guides/create-livestream)
- [Learn how to listen to asset events](/developers/guides/listen-to-asset-events)

---

## FILE 3

**Path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/delegators/livepeer-studio-cli.mdx`

**Frontmatter:**
```yaml
title: CLI
description: "Generate a new Livepeer app."
icon: "rectangle-terminal"
```

**Body:**

> NOTE: This file is stored at the delegators path but its content is about the Livepeer Studio CLI for app generation, not delegator staking. Included verbatim.

The Livepeer Studio CLI is a command line tool that helps you generate a new
Livepeer app in just a few seconds.

## Getting Started

First, create a Livepeer API key
[here](https://livepeer.studio/dashboard/developers/api-keys). Next, use the CLI
to generate a new project.

```sh
npx @livepeer/create
```

When prompted, enter your Livepeer **API key** and **Stream ID**.

Once the app has been created, `cd` into the new directory and run the start
command:

```sh
npm run dev
```

---

## FILE 4

**Path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/delegators/guides/migrate-stake-to-arbitrum.mdx`

**Frontmatter:**
```yaml
title: Migrate stake to Arbitrum
icon: right-from-bracket
```

**Body:**

This guide is applicable to delegators who delegated their LPT to an
orchestrator on the Ethereum mainnet prior to February 14th, 2022. Once you have
successfully completed the migration, this guide is no longer applicable and you
will use Arbitrum in lieu of Ethereum Mainnet for all protocol actions.

<Warning>
  Claiming your delegated stake and earned ETH on Arbitrum is highly encouraged
  to ensure that (1) you continue earning inflationary rewards and fees and (2)
  you will be able to withdraw any currently delegated stake and earned ETH
  fees. As of February 14th, 2022, withdrawals on the Ethereum Mainnet will be
  disabled and all inflationary rewards and ETH fees will be disbursed on
  Arbitrum.
</Warning>

## Prerequisites for all chains

- Before using this guide, you will need make sure your Arbitrum wallet has
  enough arbETH to cover gas for the `claim` transaction. If you do not have
  arbETH in your wallet, you will need to add some using one of the bridges or
  on-ramps listed [here](https://portal.arbitrum.one/).
- The migration must be completed using the Livepeer explorer
- **If you use a contract account rather than an EOA**: You will need to
  interact directly with the Migrator contract methods. Please use the guide
  [here](/orchestrators/guides/migrate-from-contract-wallet). _If you don't know
  what this means, it probably doesn't apply to you._

## Claiming via the Explorer

1.  Navigate to the [Livepeer Explorer](http://explorer.livepeer.org). If you
    have not connected the wallet that you used to delegate your LPT, connect it
    using the prompt in the upper left hand corner. If you haven't switched your
    network to Arbitrum, you'll be prompted to do so.

<Frame>
  <img
    src="/v1/images/delegating-guides/connect-wallet-d.png"
    alt="connect wallet to livepeer"
    width="300"
  />
</Frame>

    There are a few options for connecting a wallet to Arbitrum. The wallet you choose should be the same one with which you originally delegated your LPT on the Ethereum mainnet. It should also contain a small amount of arbETH to pay for the `claim` on Arbitrum.

<Frame>
  <img
    src="/v1/images/delegating-guides/connect-wallet-d2.png"
    alt="connect wallet to livepeer"
    width="300"
  />
</Frame>

2.  **Claim your stake, rewards, and fees**

    Click `Claim` to initiate a transaction that will claim your stake, rewards
    and fees.

<Frame>
  <img
    src="/v1/images/delegating-guides/confirm-d.png"
    alt="confirm orchestrator"
    width="300"
  />
</Frame>

<br />
<Info>
  If your orchestrator has not migrated and has not conveyed plans to migrate,
  you will see a prompt to choose a new orchestrator.
</Info>

3.  **View your profile**

    Once the `claim` transaction has been confirmed (this usually takes a few
    seconds on Arbitrum), you see a link to your profile. Here, you'll be able
    to see your newly claimed balances.

    You will see an [Arbiscan](https://arbiscan.io/) link to the transaction id
    in case you want to look at the submitted transaction.

---

## FILE 5

**Path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/delegators/guides/bridge-lpt-to-arbitrum.mdx`

**Frontmatter:**
```yaml
title: Bridge LPT to Arbitrum
icon: bridge
```

**Body:**

This guide will walk tokenholders through the process of moving LPT from the
Ethereum mainnet to Arbitrum and vice versa.

**This only applies if you have not delegated your LPT to an orchestrator on
L1**

Please note that you will need some ETH in your wallet to complete this guide.
If you are using testnet, you will need Rinkeby ETH.

1. Make sure your wallet (i.e. Metamask) is connected to the Ethereum mainnet
   (Rinkeby if using testnet) and then navigate to the
   [Arbitrum Bridge](https://bridge.arbitrum.io/)
2. Click "Token", and enter the L1 LPT contract address
   0x58b6a8a3302369daec383334672404ee733ab239. If you are using testnet, use the
   `LivepeerToken` address for Rinkeby.

<Frame>
  ![BridgeClickToken](https://user-images.githubusercontent.com/89408276/155851894-eb959beb-3269-40b1-8d50-8768bf15f9f2.jpg)
</Frame>

4. Press "enter" on your keyboard. It will take 5-10 seconds for LPT to appear.

<Frame>
  ![BridgeChooseToken-Enter](https://user-images.githubusercontent.com/89408276/155851630-8e60a17a-b6bd-4a65-972c-53d34c600026.jpg)
</Frame>

6. Select LPT from the dropdown. Once you've done this, you should see your L1
   balance.
7. Click `Deposit` to move your L1 LPT to L2. This will initiate an Approval
   transaction. The first of 2 transactions required to bridge LPT to Arbitrum.
8. After the Approval transaction status changes from pending to success (about
   10 mins) LPT can now be Deposited.

<Frame>
  ![BridgeApprove](https://user-images.githubusercontent.com/89408276/155850572-2337514c-f6ad-419a-a9bf-94e7d3e1d891.jpg)
</Frame>

10. Click 'Deposit' and confirm the transaction in your wallet to complete the
    bridging of LPT from L1 to L2

<Frame>
  ![Bridge](https://user-images.githubusercontent.com/89408276/155375033-6fd66e8a-53ab-43e9-9fe6-3a0cec847a55.jpg)
</Frame>

### Bridging from L2 to L1

The same general instructions apply with three differences:

- You should start with your wallet connected to Arbitrum (Arbitrum Rinkeby if
  using testnet)
- You will need to manually approve the amount that you are bridging using the
  [Arbiscan UI](https://arbiscan.io/address/0x289ba1701C2F088cf0faf8B3705246331cB8A839#writeContract).
  To do so, connect your wallet, scroll to the Approve function, enter the
  L2LPTGateway address
  [0x6D2457a4ad276000A615295f7A80F79E48CcD318](https://arbiscan.io/address/0x6D2457a4ad276000A615295f7A80F79E48CcD318)
  and the amount you'll be transferring and click "Write". Note that the amount
  is in "Wei", so use a [Unit Converter](https://etherscan.io/unitconverter)
  (e.g. if you want to bridge 10 LPT, you need to enter 10000000000000000000).
  - We are looking into options to remove this step. If it seems complex, we
    recommend swapping to ETH via
    [Uniswap](https://app.uniswap.org/#/swap?chain=arbitrum) and then
    transferring the ETH from L2 to L1 instead.
- Next, click on the arrow below the amount input. The button will switch from
  "Deposit" to "Withdraw"
- Click on "Token" -> "Manage token lists" -> enable "Arbed CMC List" and click
  on "Back to Select Token". You should now be able to choose LPT in the list.
- After you've sent the withdraw tx, you need to wait ~1 week until you can
  claim your LPT on L1. You'll see the countdown below. Once the confirmation
  period is over, you can connect to the Ethereum mainnet and click "Claim" to
  withdraw your LPT on L1.

### Bridging Failures

The Arbitrum rollup can fail to bridge tokens correctly if the gas prices are
fluctuating by too much, or if the transaction runs out of gas. The former can
be caused by gas prices changing from when the original "bridge" transaction was
submitted, to when it was sequenced and submitted on L2. In this case, tokens
will not reach your L2 wallet after an hour. Arbitrum
[provides a page](https://retryable-tx-panel.arbitrum.io/) to check on the
status of your L1 deposit transaction:

<Frame>
  ![Arbitrum UI](/v1/images/delegating-guides/arbitrum-retry-ui.png)
</Frame>

In the event of a failure of LPT to bridge due to gas spikes, you should see a
message similar to the following:

<Frame>
  ![Arbitrum
  UI](https://user-images.githubusercontent.com/23727056/176745651-98ff56d0-9c0a-4c2d-b9fe-bf3ba1d537a7.png)
</Frame>

You should then be able to connect your wallet and resubmit the bridge
transaction. This will retry the previous transaction. Make sure to do this in a
timely manner, since the
[L2 retry buffer is limited](https://docs.arbitrum.io/arbos/l1-to-l2-messaging).

---

## FILE 6

**Path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/delegators/guides/yield-calculation.mdx`

**Frontmatter:**
```yaml
title: Yield Calculation on Explorer
icon: calculator
```

**Body:**

The Livepeer protocol is built around workers who perform video transcoding. An
orchestrator is the name for the protocol participant who performs the
transcoding on the network - see our
[visual introduction](https://livepeer.org/primer). If another user is looking
to participate in the Livepeer network, they can contribute by staking (bonding)
LPT with an orchestrator and earning passive rewards for improving the economic
security of the network.

The explorer includes a calculation of return on investment for LPT stake to an
orchestrator. This document explains how that calculation is performed and how
it can be inaccurate/manipulated by orchestrators.

## Calculation

### Orchestrator Parameters

When an orchestrator registers their Ethereum address on the network, they are
required to choose their parameters for how they share revenue with stakers.

These percentages are defined as fee share, $s_{fees}$, and reward share,
$s_{rewards}$. These can be changed at any time.

#### Orchestrator Metrics

An orchestrator also has performance metrics which are used. They must request
inflationary rewards each round on behalf of their delegators. The ratio of
successful reward calls, $r_{rewards}$, is defined as:

$$
r_{rewards} = rewardCalls / n
$$

Where $n$ is the number of rounds (up to 90 rounds depending on the time the
orchestrator has been active) and $rewardCalls$ is the count of successful
reward calls.

An orchestrator also has $l_{orch}$ which is the active stake they currently
have on the network.

Lastly, orchestrators earn fees for work performed, and the average is taken
over the course of 90 days as $v_{daily}$, which is denominated in ETH.

### Protocol Parameters

There are also protocol-level parameters which factor into how inflationary
rewards are distributed and change over time.

The inflation rate increases/decreases when the target participation rate is not
met. For simplicity, we assume in the yield calculation that the current
inflation rate, $r_{inf}$, will stay constant.

The current token supply is defined as $l_{total}$ and the current active stake
(LPT which has been delegated) is $l_{active}$.

### Equation

#### Transcoding Fees

The transcoding fees are simpler and calculated using:

$$
yield_{ETH} = (v_{daily} * 365) * s_{fees} * \frac{p}{p + l_{orch}}
$$

The first part calculates the estimated fee volume in ETH for the orchestrator
for the year.

The second includes the fee share which the orchestrator has set.

The last part takes the ratio of the delegator's stake to the total orchestrator
stake.

#### Inflationary Rewards

The combined equation also includes input from the user, which is the amount of
LPT they want to stake. This principle is defined as $p$.

$$
yield_{LPT} = \frac{l_{total} * (1 + r_{inf})^{417} - l_{total}}{l_{active}} * ((p + l_{orch}) * r_{rewards}) * \left( s_{rewards} * \frac{p}{p + l_{orch}} \right)
$$

The first part of the equation is the estimated total rewards which will be
given out to all orchestrators over the next year, based on current inflation,
active stake, and Ethereum block times (417 rounds in one year).

The second part then calculates the amount of rewards which the orchestrator
would receive over the year.

The last part calculates the ratio that the delegator will receive, based on
their principal, $p$, that they stake on the orchestrator, as well as the
orchestrators reward share, $s_{rewards}$.

#### Combined Equation

The total yield can then be calculated as (with $price_{LPT/ETH}$ pulled from
Uniswap):

$$
yield_{total} = yield_{LPT} + yield_{ETH} * (price_{LPT/ETH})
$$

The implementation of this equation can be found in the
[Explorer Github repository](https://github.com/livepeer/explorer/blob/main/lib/roi.ts).

## Inaccuracies/Pitfalls

### Variable Orchestrator Parameters

The parameters which an orchestrator sets for their fee cut and reward cut are
highly subject to change. A malicious orchestrator could set their fee cut to be
very low, and then manipulate that number once they have a large number of
delegators. A delegator should look for orchestrators who have not changed their
fee/reward cuts often, and continue to monitor their orchestrator and switch if
they change their rewards to less favorable percentages.

### Inflation Rate Change

As mentioned previously, the inflation rate is subject to change depending on
the participation rate (the amount of LPT staked in the network). The yield
calculation assumes that the participation rate will stay constant, but this
could prove to be inaccurate.
