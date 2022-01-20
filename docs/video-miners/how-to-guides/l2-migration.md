---
title: One-time Migration to Arbitrum
---

## Prerequisites for all chains
- You will need make sure your connected Ethereum account has enough ETH to cover gas for the `migrate` transaction. If you do not have ETH in your wallet, you will need to add some using another wallet or an on-ramp.
- The migration must be completed using the Livepeer explorer, but ***you will have the option to sign a message via the CLI if you so desire.***
- Ensure you're interacting with the correct contracts. Addresses can be found [here](/protocol/reference/deployed.md)
- **If you use a contract account rather than an EOA**: You will need to interact directly with the Migrator contract methods. Please reach out to us in [Discord](https://discord.gg/uaPhtyrWsF) and we will be happy to walk you through the process. *If you don’t know what this means, it probably doesn’t apply to you.*


## Mainnet
This guide is applicable to orchestrators who registered onchain on the Ethereum mainnet prior to `<date tbd>`. Once you have successfully completed the migration, this guide is no longer applicable and you will use Arbitrum in lieu of Ethereum for all protocol actions.

Before starting the migration process, you will need to acquire an RPC url for Arbitrum. We recommend using [the Offchain Labs public endpoint](https://developer.offchainlabs.com/docs/mainnet). 

Other options are: [use the Offchain Labs public endpoint](https://developer.offchainlabs.com/docs/mainnet), [set up an Arbitrum node](https://developer.offchainlabs.com/docs/running_node) or acquire an Arbitrum RPC url using a third-party service like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/). 


## Testnet
This guide is applicable to orchestrators who registered onchain on Rinkeby prior to January 24th, 2022. Once you have successfully completed the migration, this guide is no longer applicable and you will use Arbitrum Rinkeby in lieu of Rinkeby for all protocol actions.

Before starting the migration process, you will need to acquire an RPC url for Arbitrum. We recommend using [the Offchain Labs public testnet endpoint](https://developer.offchainlabs.com/docs/public_testnet). 

Other options are: [use the Offchain Labs public endpoint](https://developer.offchainlabs.com/docs/mainnet), [set up an Arbitrum node](https://developer.offchainlabs.com/docs/running_node) or acquire an Arbitrum RPC url using a third-party service like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/). 



## Migrating to Arbitrum

1. **Connect your wallet**

    Navigate to the [testnet explorer](http://rinkeby.explorer.livepeer.org) or [mainnet explorer](http://explorer.livepeer.org). If you have not connected a wallet, connect on using the prompt in the upper left hand corner. 
    
    This does not have to be the same wallet you use for your orchestrator, but **if you are using a different wallet to submit the transaction, you will still need to access the wallet that you use for your orchestrator so that you can sign a message**
     
    <img src="/docs-assets/video-miners/how-to-guides/connect-wallet.png" alt="connect wallet to livepeer" width="300"/>
    
    There are a few options for connecting a wallet to Livepeer. The wallet you choose should  contain a small amount of ETH to pay for the `migrate` transaction
    
    <img src="/docs-assets/video-miners/how-to-guides/connect-wallet2.png" alt="connect wallet to livepeer options" width="300"/>

    
2. **Follow the prompt to "Begin Migration"**
    
    Please note that if you are signing with the CLI and your connected wallet is NOT your orchestrator wallet, the stake amounts will not be accurate until after you sign the transaction and we autodetect your orchestrator account from the signature.
    

    <img src="/docs-assets/video-miners/how-to-guides/stake-info.png" alt="stake info" width="300"/>

3. **Sign the `migrate` transaction** 
    
    
    3a. **Sign using connected wallet**
    
    If you prefer to sign using the wallet that you have connected to the explorer, click "Approve Migration" and approve the transaction using your browser extension
    
    <img src="/docs-assets/video-miners/how-to-guides/sign-web.png" alt="sign web" width="300"/>

    
    3b. **Sign using CLI**
    
    If you'd rather sign a message through the CLI, select "Sign using CLI" in the explorer interface. You'll be taken to an alternate migration screen, where you will be asked to enter the public address of the orchestrator you wish to migrate
    
    <img src="/docs-assets/video-miners/how-to-guides/sign-cli.png" alt="sign cli" width="300"/>
    
    Once you have entered an address, you will see a message to sign and a text entry box for the signature.
    
    First, copy the message provided. Then go into your CLI and select option 16: Sign Message
    
    <img src="/docs-assets/video-miners/how-to-guides/sign-cli2.png" alt="sign cli" width="300"/>
    
    Follow the CLI's prompts to generate a signed message
    
    <img src="/docs-assets/video-miners/how-to-guides/sign-cli3.png" alt="sign cli" width="300"/>
    
    Paste this message in the provided box and click Continue
    
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
    
    ```bash
    livepeer \
      -network arbitrum
      -ethUrl <Arbitrum RPC Url>
    ```
    
4. **Register your service URI and fee structure on Arbitrum  using “Set orchestrator config”**

To receive work, you must register your service URI and fees so that broadcasters can discover your orchestrator. This can be done by selecting option `13: Set orchestrator config` in the Livepeer CLI.

Once this is complete, you're all set to receive work, rewards, and fees on Arbitrum.

**In the future, you'll be prompted to connect to the Livepeer Explorer using Arbitrum, and all future rewards and fees will accrue to Arbitrum rather than Ethereum.**