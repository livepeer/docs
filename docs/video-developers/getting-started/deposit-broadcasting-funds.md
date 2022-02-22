---
title: Deposit Broadcasting Funds
sidebar_position: 3
---

# Deposit Broadcasting Funds

You will need to deposit funds used to pay the node operators on the network
(orchestrators) responsible for transcoding your live video. Node operators get
paid in a cryptocurrency called Ether (ETH).

Since we're using the Rinkeby test network for this tutorial you'll need to acquire
some free test ETH. You can get some [here (requires social media account)](https://faucet.rinkeby.io/) or [here](https://fauceth.komputing.org/?chain=421611).

Once you've acquired your test ETH, in a separate terminal window other than the
one that is running livepeer, run the `livepeer_cli`:

`$ livepeer_cli`

> Note: The `livepeer_cli` binary is provided alongside the `livepeer` binary
> when you install the Livepeer client.

This command starts the CLI interactive wizard which can be used to issue
commands to be executed by your broadcaster node.

Select the following option:

`Invoke "deposit broadcasting funds" (ETH)`

Upon selecting the option, you should be prompted to enter the amount of ETH to
allocate for your deposit and reserve. Broadcasting funds are split into a
deposit and a reserve. Deposit funds are used to pay any active orchestrator on
the network. Reserve funds guarantee active orchestrators up to a fixed cap to
ensure that orchestrators are paid fairly even if a broadcaster depletes its
primary deposit. The distinction between the deposit and the reserve arises from
the probabilistic micropayment protocol that broadcasters use to pay
orchestrators - see this
[blog post](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462)
for more details.

After answering the wizard’s prompt, you should see a transaction submitted by
your node. After the transaction confirms, you can see your updated deposit and
reserve by refreshing the wizard.

Congrats! Your broadcasting wallet is loaded up and you're ready to begin
broadcasting.

