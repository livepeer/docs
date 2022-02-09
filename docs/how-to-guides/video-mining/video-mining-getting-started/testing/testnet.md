---
title: Running on Testnet
sidebar_position: 2
---

This guide will walk you through the process of running an orchestrator on the Arbitrum Rinkeby testnet. This is an important step to (1) ensure that your orchestrator is correctly configured, and (2) take any troubleshooting steps and make any tweaks in a lower-risk environment than mainnet.

1. **Acquire some Rinkeby ETH from a faucet and bridge it to Arbitrum**

You can use an existing third-party faucet for this. We recommend [the official Rinkeby faucet](https://www.rinkeby.io/#faucet) (requires Twitter or Facebook auth), or [the Chainlink faucet](https://faucets.chain.link/rinkeby) (no auth required). Most faucets provide ~0.1 ETH per request, but you can use them multiple times if you need more.

Once you've acquired the Rinkeby ETH, use the [Arbitrum bridge](https://bridge.arbitrum.io) to send Rinkeby ETH to Arbitrum. After bridging, you will want to send the Arbitrum Rinkeby ETH to the wallet that you will be using to run your orchestrator.

2. **Get an Arbitrum Rinkeby RPC url**

We recommend using [the Offchain Labs public testnet endpoint](https://developer.offchainlabs.com/docs/public_testnet). Other options are: [set up an Arbitrum node](https://developer.offchainlabs.com/docs/running_node) or acquire an Arbitrum RPC url using a third-party service like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/). 

3. **Run the Livepeer CLI, pointing at Arbitrum Rinkeby**

If you have not already installed the Livepeer CLI, please refer to [this guide](https://livepeer.org/docs/installation/install-livepeer/overview) before running the command below

```bash
$: livepeer \
    -network arbitrum-one-rinkeby
    -ethUrl https://rinkeby.arbitrum.io/rpc # RPC Url for Arbitrum Rinkeby provider, acquired in Step 2 above
		-orchestrator
```

If you're running on the same machine as your mainnet Orchestrator, you may encounter an error such as `expecting chainID of 1, but got 4. Did you change networks without changing network name or datadir`. This is because your testnet setup is trying to access the same `.lpData` that it used for mainnet, and it's finding a conflict on `chainId`. To fix this, specify a new data directory using the `-datadir` flag when you start your Orchestrator. Specify only the directory, not the file.

4. **Acquire some Arbitrum Rinkeby LPT from the livepeer-cli**

Once you’ve run the Livepeer CLI, select “Get test LPT” from the list of options. This transaction will send you 10 Rinkeby LPT. Please note that **if you do not have any Arbitrum Rinkeby ETH in your wallet, this transaction will fail**

<img src="/docs-assets/video-miners/getting-started/testnet_lpt.png" alt="lpt" width="300"/>

5. **Bond your Arbitrum Rinkeby LPT and start an orchestrator**

Once you’ve received Arbitrum Rinkeby LPT, select “Invoke multistep ‘become an orchestrator’”. Follow the prompts to start your Orchestrator.

If this is your first time starting an Orchestrator, please refer to [the activation guide](/video-miners/getting-started/activation).

6. **Check that you are correctly connected to the network**

Once your orchestrator is running, check that you’re connected to the correct network:

```bash
curl localhost:7935/EthChainID 
```

If you are correctly connected to Arbitrum Rinkeby, this command will return `421611`.

**Please note that if you are running the Livepeer CLI with Docker, you will need to check port 7935 inside the go-livepeer container**.


7. **Register your service URI and fee structure on Arbitrum  using “Set orchestrator config”**

To receive work, you must register your service URI and fees so that broadcasters can discover your orchestrator. This can be done by selecting option `13: Set orchestrator config` in the Livepeer CLI. To do this, you'll need some Arbitrum Rinkeby ETH in your wallet to pay for the transaction.
