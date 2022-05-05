---
title: Set Pricing
---

Once your orchestrator is activated and running, you can follow the steps below to set and configure pricing to charge for transcoding advertised to broadcasters off-chain:

## Choose a Price

To charge for transcoding orchestrators set a price per pixel denominated in Wei (1 ETH = 1e18 Wei), advertised to broadcasters off-chain.

To get support for setting a price that will allow you to receive work on the network, contact us on our [Discord](https://discord.gg/uaPhtyrWsF) channel.

>  **Note:** Tools to facilitate informed pricing decisions will be available with Livepeer in the future. 

## Configure Automatic Price Adjustments

By default, an orchestrator will automatically adjust its price based on the overhead of ticket redemption. 

Configure your orchestrator to advertise a constant price:

- Start the orchestrator with the `-autoAdjustPrice=false` flag. 

- Additionally, you can refer to the [Automatic Price Adjustment](/video-miners/core-concepts/payments#automatic-price-adjustments) docs for more in-depth information.

## Set a Price With `livepeer_cli`

You can set the base price per pixel using the `livepeer_cli`:

1. Run `livepeer_cli`

2. Enter the number corresponding to the `Set orchestrator config` option

3. You will get prompted to enter values for several fields. 

>  **Note:** If you only want to set the price, you can continue using the existing default values.

4. You will get prompted for the price per pixel:

5. Set the number of pixels in a single unit of work you will charge for.

**For example:**

```bash
   Enter a transcoding base price in wei per pixels
   eg. 1 wei / 10 pixels = 0,1 wei per pixel
   Enter the number of pixels that make up a single unit (default: 1 pixel):
```

>  **Note:** The Default setting `option (1)` is typically used.

6. Set the price (in wei) that you will charge per unit of work:

   ```bash
   Enter the price for 1 pixel in Wei (required):
   ```

7. To verify the price was updated, check the log from your node.
