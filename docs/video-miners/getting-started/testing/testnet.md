---
title: Running on Testnet
sidebar_position: 2
---

This guide will walk you through the process of running an orchestrator on the Rinkeby testnet. This is an important step to (1) ensure that your orchestrator is correctly configured, and (2) take any troubleshooting steps and make any tweaks in a lower-risk environment than mainnet.

1. **Acquire some Rinkeby ETH from a faucet**

You can use an existing third-party faucet for this. You will want to send the ETH to the wallet that you will be using to run your orchestrator. We recommend [the official Rinkeby faucet](https://www.rinkeby.io/#faucet) (requires Twitter or Facebook auth), or [the Chainlink faucet](https://faucets.chain.link/rinkeby) (no auth required). Most faucets provide ~0.1 ETH per request, but you can use them multiple times if you need more.

2. **Get a Rinkeby RPC url, either by running a node or by using a url from Infura or Alchemy**

To run your own `geth` node, please follow [Rinkeby’s official guide](https://www.rinkeby.io/#geth). If you’d prefer to use an [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/) RPC url, please follow the guides on their respective sites.

3. **Run the Livepeer CLI, pointing at Rinkeby**

If you have not already installed the Livepeer CLI, please refer to [this guide](https://livepeer.org/docs/installation/install-livepeer/overview) before running the command below

```bash
$: livepeer \
    -network rinkeby
    -ethUrl <ETH_URL> # RPC Url for Rinkeby provider, acquired in Step 2 above
		-orchestrator
```

If you're running on the same machine as your mainnet Orchestrator, you may encounter an error such as `expecting chainID of 1, but got 4. Did you change networks without changing network name or datadir`. This is because your testnet setup is trying to access the same `.lpData` that it used for mainnet, and it's finding a conflict on `chainId`. To fix this, specify a new data directory using the `-datadir` flag when you start your Orchestrator. Specify only the directory, not the file.

4. **Acquire some Rinkeby LPT from the livepeer-cli**

Once you’ve run the Livepeer CLI, select “Get test LPT” from the list of options. This transaction will send you 10 Rinkeby LPT. Please note that **if you do not have any Rinkeby ETH in your wallet, this transaction will fail**

<img src="/docs-assets/video-miners/getting-started/testnet_lpt.png" alt="lpt" width="300"/>

5. **Bond your Rinkeby LPT and start an orchestrator**

Once you’ve received Rinkeby LPT, select “Invoke multistep ‘become an orchestrator’”. Follow the prompts to start your Orchestrator.

If this is your first time starting an Orchestrator, please refer to [the activation guide](/video-miners/getting-started/activation).

6. **Check that you are correctly connected to the network**

Once your orchestrator is running, check that you’re connected to the correct network:

```bash
curl localhost:7935/EthChainID 
```

If you are correctly connected to Rinkeby, this command will return `4`. 

**Please note that if you are running the Livepeer CLI with Docker, you will need to check port 7935 inside the go-livepeer container**.

If your orchestrator is connected to Rinkeby, you are all set!