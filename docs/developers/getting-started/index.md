---
title: Quickstart
---

# Overview

This tutorial provides detailed high-level information for you to get started developing with Livepeer Catalyst. 

It includes steps required to:

- Set up [Catalyst](https://livepeer.com/products/media-server), 

- Send a livestream into the Livepeer network for transcoding, and 

- Play back the livestream inside your application

>   **Note:** For the purposes of this guide, we'll be livestreaming using the [Rinkeby test network](/video-miners/getting-started/testnet#run-on-arbitrum-rinkeby-testnet) a kind of sandbox environment for testing your livestreams.  

- **If you are livestreaming in a production setting** make sure to set the network to `arbitrum-one-mainnet`.  
- **To Learn more about supported networks**, including Arbitrum mainnet and Arbitrum Rinkeby, in our [Installation Guide](/installation/connect-to-arbitrum#supported-networks).

## Pre-requisites

- [Install](/installation/install-livepeer/) `livepeer` 
- Get access to an [Arbitrum JSON-RPC URL](/installation/connect-to-arbitrum)

## Install Catalyst

- Install the [Catalyst](/developers/getting-started/install) software. 

This includes:

- A Livepeer broadcaster DMS node, and 
- The full-featured [MistServer toolkit](https://livepeer.com/docs/guides/media-server/introduction). 

  You can use the toolkit to stream on the Livepeer network, or your own on-chain or off-chain transcoding capacity.

## Start Catalyst and Add Funds

To stream into the Livepeer network: 

1. [Start Catalyst](/developers/getting-started/run-broadcaster)

2. [Provide funds](/developers/getting-started/deposit-broadcasting-funds) so that you are able to pay orchestrators for their services.

> **Note:** You only need to add funds if you are streaming into the network (i.e., running in onchain mode).

## Safely Store Your Private Key

**If this is your first time starting Catalyst:**

- You will be required to specify a directory where your private key will be stored:

**For example:**

```bash
  ~/.lpData/catalyst
```  

> **Note:** It is imperative that you securely store this keystore file. **Losing a the keystore file will cause you to lose access to your funds.**

## Launch the Catalyst Dashboard and Start Your First Stream

Once your DMS is running:

 1. [Launch the Catalyst Dashboard](/developers/getting-started/run-broadcaster#viewing-the-Catalyst-dashboard) ,  and 

 2. [Start your first stream](/developers/getting-started/create-livestream)

<!-- ## Set up monitoring

To ensure that your instance of Catalyst is healthy, it's helpful to set up monitoring. Two particularly important monitoring tools are [a Grafana dashboard](/broadcasters/how-to-guides/managing-broadcasters/monitoring) and a [low funds alert](/broadcasters/how-to-guides/managing-broadcasters/low-funds-alert) to let you know when your broadcaster is running low on funds. -->
