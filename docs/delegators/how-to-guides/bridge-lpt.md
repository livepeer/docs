---
title: Bridging LPT from L1 to L2
---

This guide will walk tokenholders through the process of moving LPT from the Ethereum mainnet to Arbitrum and vice versa.

**This only applies if you have not delegated your LPT to an orchestrator on L1**

Please note that you will need some ETH in your wallet to complete this guide. If you are using testnet, you will need Rinkeby ETH.

1. Make sure your wallet (i.e. Metamask) is connected to the Ethereum mainnet (Rinkeby if using testnet) and then navigate to the [Arbitrum Bridge](https://bridge.arbitrum.io/)
2. Click "Token", and enter the L1 LPT contract address ([0x58b6a8a3302369daec383334672404ee733ab239](/protocol/reference/deployed)). If you are using testnet, use the `LivepeerToken` address for Rinkeby.
 
 ![BridgeClickToken](https://user-images.githubusercontent.com/89408276/155851894-eb959beb-3269-40b1-8d50-8768bf15f9f2.jpg)

 
4. Press "enter" on your keyboard. It will take 5-10 seconds for LPT to appear.

 ![BridgeChooseToken-Enter](https://user-images.githubusercontent.com/89408276/155851630-8e60a17a-b6bd-4a65-972c-53d34c600026.jpg)
 
6. Select LPT from the dropdown. Once you've done this, you should see your L1 balance.
7. Click `Deposit` to move your L1 LPT to L2.  This will initiate an Approval transaction.  The first of 2 transactions required to bridge LPT to Arbitrum.
8. After the Approval transaction status changes from pending to success (about 10 mins) LPT can now be Deposited.

 ![BridgeApprove](https://user-images.githubusercontent.com/89408276/155850572-2337514c-f6ad-419a-a9bf-94e7d3e1d891.jpg)
 
10. Click 'Deposit' and confirm the transaction in your wallet to complete the bridging of LPT from L1 to L2

 ![Bridge](https://user-images.githubusercontent.com/89408276/155375033-6fd66e8a-53ab-43e9-9fe6-3a0cec847a55.jpg)


If you need to move from L2 to L1, the same instructions apply; the only difference is that you should start with your wallet connected to Arbitrum (Arbitrum Rinkeby if using testnet) and enter the L2 LPT contract address ([0x289ba1701C2F088cf0faf8B3705246331cB8A839](/protocol/reference/deployed)) as the destination address.

