**Claiming LPT delegated stake is highly encouraged to ensure that (1) you continue earning inflationary rewards and fees and (2) you will be able to withdraw any currently delegated stake. As of XX/XX, withdrawals on the Ethereum Mainnet are disabled and all inflationary rewards and ETH fees will be disbursed on Arbitrum.**

Before using this guide, you will need make sure your Arbitrum wallet has enough arbETH to cover gas for the `claim` transaction. If you do not have arbETH in your wallet, you will need to add some using one of the  bridges or on-ramps listed [here](https://portal.arbitrum.one/).

**We strongly recommend claiming via the Livepeer explorer using the guide below.** 

**Important: if your  LPT is staked from a contract rather than a normal wallet, you will need to initiate the migration from L1 using the [orchestrator migration flow described here](url)**

**Arbitrum** **BondingManager Address**: ox1234arb

**Arbitrum** **LPT** **Contract Address**: ox1234arb

**Ethereum BondingManager Address**: 0x1234

**Ethereum** **LPT** **Contract Address**: ox1234arb

**Claiming via the Explorer:**

1. Navigate to [explorer.livepeer.org](http://explorer.livepeer.org). If you have not connected the wallet that you used to delegate your LPT, connect it using the prompt in the upper left hand corner. 
    
     
    
    ![Screen Shot 2021-12-07 at 11.29.13 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9238d4c6-1f24-45a5-a332-9a3ee99c5b83/Screen_Shot_2021-12-07_at_11.29.13_AM.png)
    
    There are a few options for connecting a wallet to Livepeer. The wallet you choose should be the same one with which you originally delegated your LPT on the Ethereum mainnet. It should also contain a small amount of arbETH to pay for the `claim` on Arbitrum.
    
    ![Screen Shot 2021-12-02 at 12.18.46 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73f8d325-fb73-474c-8e3d-9aa8f7bac381/Screen_Shot_2021-12-02_at_12.18.46_PM.png)
    
2.  **Switch your network from Ethereum to Arbitrum**
    
    Once you've connected a wallet, you will see a prompt to switch your network from Ethereum to Arbitrum. 
    
    Selecting Arbitrum in the dropdown will connect you to the Arbitrum network; if you have not already added it to your browser wallet, it will prompt you to add the network
    
    ![Screen Shot 2021-12-02 at 12.39.45 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef990824-7720-43a3-b39d-5bdaf8a295f0/Screen_Shot_2021-12-02_at_12.39.45_PM.png)
    

1. **Confirm your Delegate** 
    
    Once you have switched to Arbitrum, you will be asked to confirm the orchestrator to whom you'd like to delegate.
    
    ***If your orchestrator has migrated, no action is required here. You may skip to Step 4 or choose to select a new orchestrator as described below.***
    
    If your orchestrator delegate has not migrated OR if you would like to change delegates, you will need to choose a new orchestrator. Using the prompts shown below, select a new orchestrator. For more on this choosing an orchestrator delegate, please see [guide]
    
    ![Screen Shot 2021-12-07 at 11.30.31 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ed64ccb-3ce4-41ed-a39a-cab3e0c04469/Screen_Shot_2021-12-07_at_11.30.31_AM.png)
    
2. **Claim your delegated stake and earned fees**
    
    
    Once you have confirmed your orchestrator delegate, you will be given an option to claim your delegated stake and any accumulated rewards or ETH fees.
    
    Please review the choice of delegate, the delegated stake, and estimated network fees, and then submit the transaction to claim.
    
    ![Screen Shot 2021-12-07 at 11.31.11 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ecf71861-8c32-4c44-8819-00b8d94cf153/Screen_Shot_2021-12-07_at_11.31.11_AM.png)
    

1. **View your profile**
    
    Once the `claim` transaction has been confirmed (this usually takes a few seconds on Arbitrum), you see a link to your profile. Here, you'll be able to see your newly claimed balances. 
    
    You will see an [Arbiscan](https://arbiscan.io/) link to the transaction id in case you want to look at the submitted transaction.
    

**In the future, you'll need to connect to the Livepeer Explorer using Arbitrum, and all future rewards will accrue to Arbitrum rather than the Ethereum mainnet.**