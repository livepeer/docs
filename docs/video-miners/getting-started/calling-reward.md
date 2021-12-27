---
title: Calling Reward
sidebar_position: 5
---


# Calling Reward

By default, an active orchestrator will automatically call reward in each round
meaning that it will submit an Ethereum transaction that will distribute newly
minted LPT rewards to itself and its delegators.

The amount of LPT rewards distributed by the reward call will depend on the
orchestrator's stake (includes both its own self-delegated stake and the stake
of its delegators). Note that it is possible for the ETH transaction cost of
calling reward to exceed the amount of LPT rewards distributed for
orchestrator's with very low stake.

As you are getting started, the recommendation is to initially disable automatic
reward calls, manually make reward calls via `livepeer_cli` in each round based
on whether it makes economic senese to do so and enable automatic reward calls
only when you feel comfortable with the amount of LPT rewards expected to be
distributed relative to the ETH transaction cost.

## Pre-requisites

- Make sure you have
  [activated your orchestrator](/video-miners/getting-started/activation)

## Disable automatic reward calls

You can disable automatic reward calls with the `-reward=false` flag (all other
flags omitted):

```bash
livepeer \
    -network mainnet \
    -reward=false
```

## Manually call reward

You can manually call reward via `livepeer_cli`:

1. Estimate the current ETH transacton cost for calling reward.

   - The gas cost for a reward call is typically 350k-450k
   - Get the required gas price from
     [ethgasstation](https://ethgasstation.info/) or
     [gasnow](https://www.gasnow.org/)
   - The ETH transaction cost will be the gas cost multiplied by the gas price

2. Make sure `livepeer` is running and run `livepeer_cli`

3. Enter the number corresponding to the `Invoke "reward"` option

4. Wait for transaction to confirm. You should see the logs of your orchestrator
   indicating a transaction being submitted and confirmed on-chain.

## Enable automatic reward calls

You can enable automatic reward calls by omitting the `-reward=false` flag since
this feature is enabled by default.
