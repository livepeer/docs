---
title: Set Pricing
---

# Set Pricing

## Pre-requisities

- Make sure you have
  [activated your orchestrator](/docs/video-miners/getting-started/activation)
- Make sure your orchestrator is running

## Choose a price

Orchestrators set a price per pixel to charge for transcoding which is
denominated in Wei (1 ETH = 1e18 Wei) which is advertised to broadcasters
off-chain.

In the future, there will be tools available to help make informed pricing
decisions. Currently, the recommendation is to ask in
[Discord](https://discord.gg/uaPhtyrWsF) if you are looking for help with
setting a price that will allow you to receive work on the network.

## Configure automatic price adjustments

You can configure your orchestrator to advertise a constant price by starting it
with the `-autoAdjustPrice=false` flag. Otherwise, the orchestrator will
automatically adjust its price based on the overhead of ticket redemption. Refer
to the
[Automatic Price Adjustment](/docs/video-miners/core-concepts/payments#automatic-price-adjustments)
docs for more information.

## Set the price with livepeer_cli

The base price per pixel can be set using `livepeer_cli`:

1. Run `livepeer_cli`

2. Enter the number corresponding to the `Set orchestrator config` option

3. You will be prompted to enter values for a variety of fields. You can just
   use the existing values for these values if you only want to set the price

4. You will eventually be prompted for the price per pixel.

   Set the number of pixels in a single unit of work you will charge a price
   for:

   ```bash
   Enter a transcoding base price in wei per pixels
   eg. 1 wei / 10 pixels = 0,1 wei per pixel
   Enter amount of pixels that make up a single unit (default: 1 pixel):
   ```

   You will typically want to use the default (1).

   Set the price (in wei) that you will charge per unit of work:

   ```bash
   Enter the price for 1 pixels in Wei (required):
   ```

5. You should see a log from your node indicating that the price has been
   updated.
