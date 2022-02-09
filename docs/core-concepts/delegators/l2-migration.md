---
title: One-time Migration to Arbitrum
---

**Claiming LPT delegated stake and earned ETH fees is highly encouraged to ensure that (1) you continue earning inflationary rewards and fees and (2) you will be able to withdraw any currently delegated stake and earned ETH fees. As of `<date tbd>`, withdrawals on the Ethereum Mainnet will be disabled and all inflationary rewards and ETH fees will be disbursed on Arbitrum.**

## Prerequisites for all chains
- Before using this guide, you will need make sure your Arbitrum wallet has enough arbETH to cover gas for the `claim` transaction. If you do not have arbETH in your wallet, you will need to add some using one of the  bridges or on-ramps listed [here](https://portal.arbitrum.one/).
- The migration must be completed using the Livepeer explorer
- **If you use a contract account rather than an EOA**: You will need to interact directly with the Migrator contract methods. Please reach out to us in [Discord](https://discord.gg/uaPhtyrWsF) and we will be happy to walk you through the process. *If you don’t know what this means, it probably doesn’t apply to you.*


## Mainnet
This guide is applicable to delegators who delegated their LPT to an orchestrator on the Ethereum mainnet prior to `<date tbd>`. Once you have successfully completed the migration, this guide is no longer applicable and you will use Arbitrum in lieu of Ethereum for all protocol actions.

## Testnet
This guide is applicable to delegators who delegated their LPT to an orchestrator on Rinkeby prior to January 24th, 2022. Once you have successfully completed the migration, this guide is no longer applicable and you will use Arbitrum Rinkeby in lieu of Rinkeby for all protocol actions.

## Claiming via the Explorer

1.    Navigate to the [testnet explorer](http://rinkeby.explorer.livepeer.org) or [mainnet explorer](http://explorer.livepeer.org). If you have not connected the wallet that you used to delegate your LPT, connect it using the prompt in the upper left hand corner. If you haven't switched your network to Arbitrum, you'll be prompted to do so.
    
    
    <img src="/docs-assets/delegators/how-to-guides/connect-wallet-d.png" alt="connect wallet to livepeer" width="300"/>
    
    There are a few options for connecting a wallet to Livepeer. The wallet you choose should be the same one with which you originally delegated your LPT on the Ethereum mainnet. It should also contain a small amount of arbETH to pay for the `claim` on Arbitrum.
    
    <img src="/docs-assets/delegators/how-to-guides/connect-wallet-d2.png" alt="connect wallet to livepeer" width="300"/>


2. **Confirm your Delegate** 
    
    Once you have switched to Arbitrum, you will be asked to confirm the orchestrator to whom you'd like to delegate.
    
    ***If your orchestrator has migrated, no action is required here. You may skip to Step 4 or choose to select a new orchestrator as described below.***
    
    If your orchestrator has not migrated, you will need to choose a new orchestrator. Using the prompts shown below, select a new orchestrator.
    
    <img src="/docs-assets/delegators/how-to-guides/confirm-d.png" alt="confirm orchestrator" width="300"/>

3. **View your profile**
    
    Once the `claim` transaction has been confirmed (this usually takes a few seconds on Arbitrum), you see a link to your profile. Here, you'll be able to see your newly claimed balances. 
    
    You will see an [Arbiscan](https://arbiscan.io/) link to the transaction id in case you want to look at the submitted transaction.
    

**In the future, you'll need to connect to the Livepeer Explorer using Arbitrum, and all future rewards will accrue to Arbitrum rather than the Ethereum mainnet.**