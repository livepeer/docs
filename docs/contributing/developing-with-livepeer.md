---
sidebar_position: 2
title: Developing with Livepeer
---

Most development-related documentation is located near the code that it describes. In this section, we provide a shortcuts to important dev environment setup tasks for local development with Livepeer Network.


### Setting up a private ETH network with Livepeer contracts deployed
**Prerequisites:** Docker
This is required for developing with `go-livepeer`, the explorer, subgraph development and contract development.

The easiest way to get started is to follow the guide [here](https://github.com/livepeer/go-livepeer/tree/master/cmd/devtool#setting-up-a-private-eth-network).

### Setting up a local broadcaster
**Prerequisites:** Private ETH network with Livepeer contracts deployed, go
This is only required if you wish to test streams locally. Instructions can be found in [this guide](https://github.com/livepeer/go-livepeer/tree/master/cmd/devtool#setting-up-a-broadcaster).

### Setting up a local orchestrator and transcoder
**Prerequisites:** Private ETH network with Livepeer contracts deployed, go
In most cases, you should set up an orchestrator and transcoder using [this guide](https://github.com/livepeer/go-livepeer/tree/master/cmd/devtool#setting-up-a-orchestratortranscoder). A notable exception to this is contract development.

### Developing with the Livepeer Explorer
**Prerequisites:** Private ETH network with Livepeer contracts deployed, Livepeer Subgraph

Prior to developing with the Livepeer Explorer, you must [deploy the Livepeer Subgraph](https://github.com/livepeer/subgraph#deploy-the-livepeer-subgraph-locally). Once you've done so, you can follow the instructions in [this guide](https://github.com/livepeer/explorer) to begin developing with the Livepeer Explorer.

### Developing with Livepeer.js
**Prerequisites:** Private ETH network with Livepeer contracts deployed
Livepeer.js allows you to easily interact with a Livepeer node. For installation and usage, please refer to [this guide](https://livepeerjs.org/react/getting-started)

### Contract Development
**Prerequisites:** Node >=12.0, yarn
Please see [this guide](https://github.com/livepeer/protocol).

