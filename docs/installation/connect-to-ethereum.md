---
sidebar_position: 4
title: Connect to Arbitrum
---

# Connect to Arbitrum

`livepeer` requires access to the [Arbitrum](https://arbitrum.io/) network
for typical usage.

## Connecting to a network

There are two ways you can connect to an [EVM-compatible network](https://ethereum.org/en/developers/docs/evm/): 

- via a hosted API service, or 
- via your own self-hosted node. 

> **Note** For users that are getting started Connecting to a hosted API service is recommended.  You always have the option to switch to your own node later on.

### Hosted API services

Hosted API services run Arbitrum nodes on behalf of their users. Popular services include [Infura](https://infura.io/) and [Alchemy](https://alchemyapi.io/). Be aware that these services have their own pricing plans. That being said, the latest versions of `livepeer` should be able to stay within the request limit for Infura's free tier at least for a single node.

The following examples describe the required flags to connect to an EVM-compatible
network via Infura (in this example, all other flags have been omitted):

To connect to Arbitrum mainnet:

```bash
livepeer \
    -network arbitrum-one-mainnet
    -ethUrl https://arbitrum-mainnet.infura.io/v3/<PROJECT_ID> # Visit https://infura.io to obtain a PROJECT_ID
```

To connect to Rinkeby:

```bash
livepeer \
    -network arbitrum-one-rinkeby
    -ethUrl https://arbitrum.rinkeby.rpc # Visit https://developer.offchainlabs.com/docs/public_testnet to obtain a URL
```

### Self-hosted Arbitrum nodes

If you want to run your own Arbitrum node, set one up using the [instructions from Offchain Labs](https://developer.offchainlabs.com/docs/running_node).

Once your node is synced, connect `livepeer` to the node with the following flags (all other flags omitted):

   ```bash
   livepeer \
       -network mainnet \
       -ethUrl http://localhost:8545 # Assumes that your node is running on the same machine as livepeer
   ```

## Supported networks

`livepeer` supports the networks listed below. The required flags for connecting
to a network are described (all other flags are omitted).

### Arbitrum One public production network.

```bash
livepeer \
    -network arbitrum-one-mainnet
    -ethUrl <ETH_URL> # URL for Arbitrum mainnet provider
```

### Arbitrum Rinkeby public test network

```bash
livepeer \
    -network arbitrum-one-mainnet
    -ethUrl <ETH_URL> # URL for Arbitrum Rinkeby provider
```

### Private Networks

Custom private networks where the Livepeer smart contracts are deployed can be
used for development purposes.

```bash
livepeer \
    -network <NETWORK_NAME> # Name of network
    -ethUrl <ETH_URL> # URL for private network provider
    -ethController <CONTROLLER_ADDR> # Address of the Controller smart contract deployed on the private network
```

### Offchain networks

Offchain networks that do not require interaction with the Livepeer smart
contracts can be used for development purposes.

```bash
livepeer \
    -network offchain
```
