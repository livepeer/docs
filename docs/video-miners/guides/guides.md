---
title: Guides
sidebar_position: 1
---

The following is an annotated list of guides providing information and instructions about how you can further configure an orchestrator when connecting and activating on the Livepeer network:

### [Contract Wallet Stake Migration](/video-miners/guides/contract-wallet-migration)

You can use this guide in conjunction with the orchestrator, broadcaster, and delegator contract wallet migration tools to migrate your stake from L1 (Ethereum Mainnet) to L2 (Arbitrum Mainnet).

**Note:** This guide is applicable to anyone using a contract wallet (i.e. multisig) to stake on L1. 

### [One-time Migration to Arbitrum](/video-miners/guides/l2-migration)

Instructions for One-time Migration to Arbitrum (L2).

> **Note:** This guide is applicable to orchestrators who registered onchain on the Ethereum mainnet prior to February 14th, 2022 and orchestrators who registered onchain on the Rinkeby testnet prior to January 24th, 2022. 

### [Benchmark Transcoding](/video-miners/guides/benchmarking)

Configure and run `livepeer_bench` to test the capacity to process Livestream segments.

### [Set transcoding session limits](/video-miners/guides/session-limits)

Configure and manage transcoding capacity to maximize work received while also protecting against performance degradation due to overload.

### [Setup orchestrator and transcoder metrics monitoring](/video-miners/guides/metrics-monitoring)

Configure `livepeer` to enable metrics monitoring for your orchestrator and transcoder(s).

### [Set pricing](/video-miners/guides/pricing) 

Orchestrators set and configure pricing to charge for transcoding advertised to broadcasters off-chain.

### [Vote](/video-miners/guides/vote)

Orchestrators can use `livepeer_cli` to vote in governance polls without exporting their keys from the machine that their orchestrator node is running on.

### [Troubleshooting](/video-miners/guides/troubleshooting)

Notes on troubleshooting advice for video miners and lists some of the most common issues a video miner might encounter.

### [Dual mine](/video-miners/guides/dual-mining)

Configure an orchestrator to transcode video on GPUs while concurrently mining cryptocurrencies and performing other CUDA operations such as machine learning.

### [Connect an Orchestrator with Separate Transcoders](/video-miners/guides/o-t-split) 

Configure a split orchestrator/transcoder architecture so that the orchestrator can outsource transcoding to remote transcoders run by the same orchestrator or third parties. 