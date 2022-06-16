---
title: Yield Calculation on Explorer
---

The Livepeer protocol is built around workers who perform video transcoding. An orchestrator is the name for the protocol participant who performs the transcoding on the network - see our [visual introduction](https://livepeer.org/primer). If another user is looking to participate in the Livepeer network, they can contribute by staking (bonding) LPT with an orchestrator and earning passive rewards for improving the economic security of the network.

The explorer includes a calculation of return on investment for LPT stake to an orchestrator. This document explains how that calculation is performed and how it can be inaccurate/manipulated by orchestrators.

## Calculation

### Orchestrator Parameters

When an orchestrator registers their Ethereum address on the network, they are required to choose their parameters for how they share revenue with stakers.

These percentages are defined as fee share, $s_{fees}$, and reward share, $s_{rewards}$. These can be changed at any time.

#### Orchestrator Metrics

An orchestrator also has performance metrics which are used. They must request inflationary rewards each round on behalf of their delegators. The ratio of successful reward calls, $r_{rewards}$, is defined as:

$$
r_{rewards} = rewardCalls / n
$$

Where $n$ is the number of rounds (up to 90 rounds depending on the time the orchestrator has been active) and $rewardCalls$ is the count of successful reward calls.

An orchestrator also has $l_{orch}$ which is the active stake they currently have on the network.

Lastly, orchestrators earn fees for work performed, and the average is taken over the course of 90 days as $v_{daily}$, which is denominated in ETH.

### Protocol Parameters

There are also protocol-level parameters which factor into how inflationary rewards are distributed and change over time.

The inflation rate increases/decreases when the target participation rate is not met. For simplicity, we assume in the yield calculation that the current inflation rate, $r_{inf}$, will stay constant.

The current token supply is defined as $l_{total}$ and the current active stake (LPT which has been delegated) is $l_{active}$.

### Equation

#### Transcoding Fees

The transcoding fees are simpler and calculated using:

$$
yield_{ETH} = ({v_{daily} * 365}) * (s_{fees}) * {\left( p \over p + l_{orch}  \right)}
$$

The first part calculates the estimated fee volume in ETH for the orchestrator for the year.

The second includes the fee share which the orchestrator has set.

The last part takes the ratio of the delegator's stake to the total orchestrator stake.

#### Inflationary Rewards

The combined equation also includes input from the user, which is the amount of LPT they want to stake. This principle is defined as $p$.

$$
yield_{LPT} = { \left( l_{total} * (1+r_{inf})^{417} - l_{total} \over l_{active} \right)} * {((p + l_{orch}) * r_{rewards}) } * (s_{rewards} * {p \over (p + l_{orch})})
$$

The first part of the equation is the estimated total rewards which will be given out to all orchestrators over the next year, based on current inflation, active stake, and Ethereum block times (417 rounds in one year).

The second part then calculates the amount of rewards which the orchestrator would receive over the year.

The last part calculates the ratio that the delegator will receive, based on their principal, $p$, that they stake on the orchestrator, as well as the orchestrators reward share, $s_{rewards}$.

#### Combined Equation

The total yield can then be calculated as (with $price_{LPT/ETH}$ pulled from Uniswap):

$$
yield_{total} = yield_{LPT} + yield_{ETH} * (price_{LPT/ETH})
$$

The implementation of this equation can be found in the [Explorer Github repository](https://github.com/livepeer/explorer/blob/main/lib/roi.ts).

## Inaccuracies/Pitfalls

### Variable Orchestrator Parameters

The parameters which an orchestrator sets for their fee cut and reward cut are highly subject to change. A malicious orchestrator could set their fee cut to be very low, and then manipulate that number once they have a large number of delegators. A delegator should look for orchestrators who have not changed their fee/reward cuts often, and continue to monitor their orchestrator and switch if they change their rewards to less favorable percentages.

### Inflation Rate Change

As mentioned previously, the inflation rate is subject to change depending on the participation rate (the amount of LPT staked in the network). The yield calculation assumes that the participation rate will stay constant, but this could prove to be inaccurate.
