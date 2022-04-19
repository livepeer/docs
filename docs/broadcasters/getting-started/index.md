---
title: Quickstart
---

# Overview

The getting started tutorial will walk you through the steps required to set up Catalyst, send a
livestream into the Livepeer Network for transcoding, and play it back
inside your application.

> Note: for the sake of this guide, we'll be livestreaming using the Rinkeby
> test network. You can think of this network like a sandbox environment for
> testing your livestreams. If you're livestreaming in a production setting make
> sure to change the network to `arbitrum-one-mainnet`. Learn more about supported networks,
> including Arbitrum mainnet and Arbitrum Rinkeby,
> [here](/installation/connect-to-arbitrum#supported-networks).

## Pre-requisites

- Make sure you have `livepeer` [installed](/installation/install-livepeer/)
- Make sure you have access to an
  [Arbitrum JSON-RPC URL](/installation/connect-to-arbitrum)

## Install Catalyst

First, you will need to [install the Catalyst software](/broadcasters/getting-started/install). This will provide you with a Livepeer broadcaster node and the full-featured MistServer toolkit, which you can use to stream using the Livepeer Network or your own onchain or offchain transcoding capacity.

## Start your DMS and add funds

To stream into the network, you will need to [start your DMS](/broadcasters/getting-started/run-broadcaster) and [supply it with funds](/broadcasters/getting-started/deposit-broadcasting-funds) so that you are able to pay orchestrators for their services.

## Ensure that your DMS's private key is stored safely

When Catalyst starts for the first time, it will require you to specify a directory (such as `~/.lpData/catalyst`). The private key for your DMS will be stored there. It is imperative that you securely store this keystore file; if you lose it you will lose access to your funds.


## Launch the Catalyst Dashboard and start your first stream

Once your broadcaster is running, you can [launch the Catalyst Dashboard](/broadcasters/getting-started/run-broadcaster#viewing-the-Catalyst-dashboard) and [start your first stream](/broadcasters/getting-started/create-livestream).

<!-- ## Set up monitoring 

To ensure that your instance of Catalyst is healthy, it's helpful to set up monitoring. Two particularly important monitoring tools are [a Grafana dashboard](/broadcasters/how-to-guides/managing-broadcasters/monitoring) and a [low funds alert](/broadcasters/how-to-guides/managing-broadcasters/low-funds-alert) to let you know when your broadcaster is running low on funds. -->

