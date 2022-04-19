---
title: Deposit Broadcasting Funds
sidebar_position: 3
---

# Deposit Broadcasting Funds

If you are [running Aqueduct in onchain mode](/broadcasters/getting-started/run-broadcaster#running-aqueduct-on-mainnet) or [using Livepeer Video Services capacity](/broadcasters/getting-started/run-broadcaster#running-aqueduct-with-livepeercom) will need to deposit funds used to pay the node operators on the network (orchestrators) responsible for transcoding your live video. Node operators get paid in a cryptocurrency called Ether (ETH). 

**Be sure that you safely store [the private key](/broadcasters/getting-started/index#ensure-that-your-broadcasters-private-key-is-stored-safely) of the wallet that your broadcaster is using**

> **Note:** If you do not want to manage your own funds onchain, [Livepeer Video Services](https://livepeer.com) offers a hosted API that accepts credit cards.

Since we're using the Arbitrum Rinkeby test network for this tutorial you'll need to acquire
some free test ETH. You can get some [here](https://fauceth.komputing.org/?chain=421611), or bridge[Rinkeby ETH](https://faucet.rinkeby.io/) to Arbitrum Rinkeby using the [Arbitrum bridge](https://bridge.arbitrum.io)

Once you've acquired your test ETH, [run the `livepeer_cli`](/broadcasters/getting-started/run-broadcaster#running-the-broadcaster-cli)

> Note: The `livepeer_cli` binary is provided when you install Aqueduct.

This command starts the CLI interactive wizard which can be used to issue
commands to be executed by your broadcaster node.

Select the following option:

`Invoke "deposit broadcasting funds" (ETH)`

Upon selecting the option, you should be prompted to enter the amount of ETH to
allocate for [broadcasting funds](#about-broadcasting-funds). 

After answering the wizard’s prompt, you should see a transaction submitted by
your node. After the transaction confirms, you can see your updated deposit and
reserve by refreshing the wizard.

Congrats! Your broadcasting wallet is loaded up and you're ready to begin
broadcasting.


## About Broadcasting funds
Broadcasting funds are split into a deposit and a reserve. Deposit funds are used to pay any active orchestrator on the network. Reserve funds guarantee active orchestrators up to a fixed cap to ensure that orchestrators are paid fairly even if a broadcaster depletes its primary deposit. The distinction between the deposit and the reserve arises from the probabilistic micropayment protocol that broadcasters use to pay orchestrators - see this [blog post](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462) for more details.


