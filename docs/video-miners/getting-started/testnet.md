---
title: Testing
sidebar_position: 3
---

This guide provides steps to walk you through the process of running an orchestrator on the Arbitrum Rinkeby testnet. New and existing orchestrators can test an implementation in a no-risk environment before continuing on the Arbitrum mainnet: 

- To ensure that your orchestrator is correctly configured, and 
- To take any [troubleshooting](/video-miners/guides/troubleshooting) steps and test any modifications you make to your settings. 

> **Note:** If you are new to Livepeer be sure to read [Quickstart guide](/video-miners/getting-started/) before proceeding.

### Run on Arbitrum Rinkeby testnet

1. Acquire Rinkeby ETH 

Rinkeby ETH are free test ethers used for transaction fees to run on the network. You can get Rinkeby ETH from a faucet so that you can bridge it to Arbitrum, i.e. transfer your Rinkeby ETH from the faucet to the Arbitrum Rinkeby testnet. Most faucets provide ~0.1 ETH per request, but you may use them multiple times if you need more.

> **Note:** You can use an existing third-party faucet to acquire ETH.  We recommend [the official Rinkeby faucet](https://www.rinkeby.io/#faucet) (requires Twitter or Facebook auth), or [the Chainlink faucet](https://faucets.chain.link/rinkeby) (no auth required). 

Once you've acquired the Rinkeby ETH, use the [Arbitrum bridge](https://bridge.arbitrum.io) to send Rinkeby ETH to the Arbitrum blockchain. After bridging, you will want to send the Arbitrum Rinkeby ETH to the wallet that you may be using to run your orchestrator. 
<br></br>
2. Get an Arbitrum Rinkeby RPC url

We recommend using [the Offchain Labs public testnet endpoint](https://developer.offchainlabs.com/docs/public_testnet). Alternatively, you can [set up an Arbitrum node](https://developer.offchainlabs.com/docs/running_node) or acquire an Arbitrum RPC url using a third-party service like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/). 

> **Note:** When using a third-party service, be sure to select the option to connect to Arbitrum Rinkeby and follow the instructions to obtain the URL and any required keys.
<br></br>

3. Run the `livepeer_cli` to point to Arbitrum Rinkeby

> **Note:** If you have not already installed Livepeer, please refer to [this guide](https://livepeer.org/docs/installation/install-livepeer/) before running the command below.

```bash
$: livepeer \
    -network arbitrum-one-rinkeby
    -ethUrl https://rinkeby.arbitrum.io/rpc # RPC Url for Arbitrum Rinkeby provider, acquired in Step 2 above
		-orchestrator
```

> **Note:** If you are running on the same machine as your mainnet Orchestrator, you may encounter an error. 

> For example: 

> You are expecting chainID of 1, but got 4. 
 you change networks without changing the network name or datadir. 

 > This indicates your testnet setup is trying to access the same `.lpData` that it used for the mainnet, and it is finding a conflict on `chainId`. To address this, specify a new data directory using the `-datadir` flag when you start your Orchestrator. Be sure to specify only the directory, not the file.
<br></br>

4. Run  `livepeer-cli` to acquire Arbitrum Rinkeby LPT so that you can stake on the network and activate your orchestrator.

This transaction will send you 10 Rinkeby LPT.  

- Run `livepeer-cli`, 
- select “`Get test LPT`” from the list of options. 

 > **Note:** that **if you do not have any Arbitrum Rinkeby ETH in your wallet, this transaction will fail.**

<img src="/docs-assets/video-miners/getting-started/testnet_lpt.png" alt="lpt" width="300"/>

<br></br>

5. Bond your Arbitrum Rinkeby LPT and start an orchestrator.

Once you’ve received Arbitrum Rinkeby LPT, 

- select “`Invoke multistep` `become an orchestrator`”. 
- Follow the prompts to start your Orchestrator.

> **Note:** If this is your first time starting an Orchestrator, please refer to [the activation guide](/video-miners/getting-started/activation) before proceeding.

<br></br>
6. Check your network connection

```bash
curl localhost:7935/EthChainID 
```
If you are correctly connected to Arbitrum Rinkeby, this command will return `421611`.

> **Note:** If you are running `livepeer_cli`with Docker, you will need to check port `7935` inside the go-livepeer container.

<br></br>

7. Register your service URI and fee structure 

To receive work, you must register your service URI and fees so that broadcasters can discover your orchestrator. You need to [acquire Arbitrum Rinkeby ETH](/video-miners/getting-started/testnet#run-on-arbitrum-rinkeby-testnet).

- Use the `livepeer_cli` on Arbitrum
- Select option `13: Set orchestrator config`

```bash
$: livepeer \
    -network arbitrum-one-mainnet
    -ethUrl https://arbitrum.io/rpc # RPC Url for Arbitrum, 
        -orchestrator
```
