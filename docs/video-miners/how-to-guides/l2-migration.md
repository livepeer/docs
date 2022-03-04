---
title: One-time Migration to Arbitrum
sidebar_position: 9
---

## Prerequisites for all chains
- You will need make sure your connected Ethereum account has enough ETH to cover gas for the `migrate` transaction. If you do not have ETH in your wallet, you will need to add some using another wallet or an on-ramp.
- The migration must be completed using the Livepeer explorer, but ***you will have the option to sign a typed data message via the CLI if you so desire.***
- Ensure you're interacting with the correct contracts. Addresses can be found [here](/protocol/reference/deployed.md)
- **If you use a contract account rather than an EOA**: You will need to interact directly with the Migrator contract methods. Please reach out to us in [Discord](https://discord.gg/uaPhtyrWsF) and we will be happy to walk you through the process. *If you don’t know what this means, it probably doesn’t apply to you.*
- You must be using a `go-livepeer` [release](https://github.com/livepeer/go-livepeer/releases) >= 0.5.28
- To register your Orchestrator on the destination chain, you'll need to [bridge some ETH to pay for the transaction](https://bridge.arbitrum.io/)


## Mainnet
This guide is applicable to orchestrators who registered onchain on the Ethereum mainnet prior to February 14th, 2022. It can be used successfully starting on February 14th, 2022. Once you have successfully completed the migration, this guide is no longer applicable and you will use Arbitrum in lieu of Ethereum for all protocol actions.

Before starting the migration process, you will need to acquire an RPC url for Arbitrum. Your options are: [set up an Arbitrum node](https://developer.offchainlabs.com/docs/running_node) or acquire an Arbitrum RPC url using a third-party service like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/). 


## Testnet
This guide is applicable to orchestrators who registered onchain on Rinkeby prior to January 24th, 2022. Once you have successfully completed the migration, this guide is no longer applicable and you will use Arbitrum Rinkeby in lieu of Rinkeby for all protocol actions.

Before starting the migration process, you will need to acquire an RPC url for Arbitrum. We recommend using [the Offchain Labs public testnet endpoint](https://developer.offchainlabs.com/docs/public_testnet). 

Other options are: [set up an Arbitrum node](https://developer.offchainlabs.com/docs/running_node) or acquire an Arbitrum RPC url using a third-party service like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/). 



## Migrating to Arbitrum

1. **Connect your wallet**

    Navigate to the [testnet explorer](http://rinkeby.explorer.livepeer.org) or [mainnet explorer](http://explorer.livepeer.org). If you have not connected a wallet, connect one using the prompt in the upper left hand corner. 
    
    This does not have to be the same wallet you use for your orchestrator, but **if you are using a different wallet to submit the transaction, you will still need to access the wallet that you use for your orchestrator so that you can sign a typed data message**
     
    <img src="/docs-assets/video-miners/how-to-guides/connect-wallet.png" alt="connect wallet to livepeer" width="300"/>
    
    There are a few options for connecting a wallet to Livepeer. The wallet you choose should  contain a small amount of ETH to pay for the `migrate` transaction
    
    <img src="/docs-assets/video-miners/how-to-guides/connect-wallet2.png" alt="connect wallet to livepeer options" width="300"/>

    
2. **Navigate to the L2 Migration Tool to begin migration to Arbitrum**

    <img src="/docs-assets/video-miners/how-to-guides/begin-migration.png" alt="begin migration" width="300"/>

3. **Sign the `migrate` transaction** 
    
    
    3a. **Sign using connected wallet**
    
    If you prefer to sign using the wallet that you have connected to the explorer, click "Approve Migration" and approve the transaction using your browser extension
    <img src="/docs-assets/video-miners/how-to-guides/sign-web.png" alt="sign web" width="300"/>
    
    3b. **Sign using CLI**

    If you'd rather sign a typed data message through the CLI, connect your wallet to the Explorer with any other account. You'll be asked to enter the public address of the orchestrator you wish to migrate.

    Please note that if you are signing with the CLI and your connected wallet is NOT your orchestrator wallet, the stake amount will not appear until after you enter your Ethereum account address.

    <img src="/docs-assets/video-miners/how-to-guides/sign-cli.png" alt="sign cli" width="300"/>     

    
    Once you have entered an address, you will see a message to sign and a text entry box for the signature.
    
    First, copy the message provided. Then go into your CLI and select option 19: Sign Typed Data.
    
    <img src="/docs-assets/video-miners/how-to-guides/sign-cli2.png" alt="sign cli" width="300"/>
    
    Follow the CLI's prompts to generate a signature.

    **IMPORTANT: If you are using Windows, you'll need to type `ctrl+Z` after pasting the typed data instead of `ctrl+D`.**
    
    <img src="/docs-assets/video-miners/how-to-guides/sign-cli3.png" alt="sign cli" width="300"/>
    
    Paste this message in the provided box and click Continue.
    
    <img src="/docs-assets/video-miners/how-to-guides/sign-cli4.png" alt="sign cli" width="300"/>
    
    Finally, click "Approve Migration" to send the transaction to Ethereum. The connected browser wallet will pay gas, but it will use the provided signature.
    
2. **View your profile**
    
    Once the `migrate` transaction has been confirmed (this usually takes up to 10 minutes between mainnet and Arbitrum), you see a link to your profile. Here, you'll be able to see your newly claimed balances. 
    
    You will see an [Arbiscan](https://arbiscan.io/) link to the transaction id in case you want to look at the submitted transaction.
    
3. **Restart your Orchestrator, pointing at Arbitrum instead of mainnet**
    
    
    5a. **Find your Arbitrum RPC Url**
    
    If you prefer to run your own Arbitrum node, you should start it at this time. Otherwise, you should find the Arbitrum RPC Url that you created at the beginning of this guide
    
    5b. **Restart your Orchestrator with an updated configuration**
    
    Once you're ready, you should restart your orchestrator using your usual flags, changing only the `network` and `ethUrl` as shown below. 
    
    If you're running on the same machine as your mainnet Orchestrator, you may encounter an error such as `expecting chainID of 4, but got 421611. Did you change networks without changing network name or datadir`. This is because your testnet setup is trying to access the same `.lpData` that it used for mainnet, and it's finding a conflict on `chainId`. To fix this, specify a new data directory using the `-datadir` flag when you start your Orchestrator. Specify only the directory, not the file.

    Additionally, you may need to copy your keystore to `/.lpData/arbitrum-one-< mainnet / rinkeby >/keystore`.

    ```bash
    livepeer \
      -network arbitrum-one-mainnet # testnet: arbitrum-one-rinkeby
      -ethUrl <Arbitrum RPC Url> # testnet: arbitrum rinkeby RPC url
    ```
    
4. **Register your service URI and fee structure on Arbitrum  using “Set orchestrator config”**

To receive work, you must register your service URI and fees so that broadcasters can discover your orchestrator. This can be done by selecting option `13: Set orchestrator config` in the Livepeer CLI. To do this, you'll need some arbETH in your wallet to pay for the transaction. Use the [Arbitrum bridge](https://bridge.arbitrum.io) to send Ethereum on Layer 1, to Arbitrum on Layer 2, over the appropriate (Mainnet / Rinkeby) network.

Once this is complete, you're all set to receive work, rewards, and fees on Arbitrum.

**In the future, you'll be prompted to connect to the Livepeer Explorer using Arbitrum, and all future rewards and fees will accrue to Arbitrum rather than Ethereum.**
