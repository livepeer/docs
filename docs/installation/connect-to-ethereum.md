---
sidebar_position: 4
title: Connect to Ethereum
---

# Connect to Ethereum

`livepeer` requires access to an [Ethereum](https://ethereum.org/en/) network
for typical usage.

## Connecting to a network

There are two ways you can connect to an Ethereum network: via a hosted API
service or via your own self-hosted Ethereum node. Connecting to a hosted API
service is recommended for users that are getting started and you always have
the option to switch to your own node later on.

### Hosted API services

Hosted API services run Ethereum nodes on behalf of their users. Popular
services include [Infura](https://infura.io/) and
[Alchemy](https://alchemyapi.io/). Be aware that these services have their own
pricing plans. That being said, the latest versions of `livepeer` should be able
to stay within the request limit for Infura's free tier at least for a single
node.

The following examples describe the required flags to connect to an Ethereum
network via Infura (all other flags omitted):

To connect to mainnet:

```bash
livepeer \
    -network mainnet
    -ethUrl https://mainnet.infura.io/v3/<PROJECT_ID> # Visit https://infura.io to obtain a PROJECT_ID
```

To connect to Rinkeby:

```bash
livepeer \
    -network rinkeby
    -ethUrl https://rinkeby.infura.io/v3/<PROJECT_ID> # Visit https://infura.io to obtain a PROJECT_ID
```

### Self-hosted Ethereum nodes

If you want to run your own Ethereum node, you can use one of the clients listed
[here](https://docs.ethhub.io/using-ethereum/running-an-ethereum-node/). `geth`
is recommended because it supports both mainnet and Rinkeby. Additionally, at
this time `livepeer` has been the most thoroughly tested with `geth`.

#### Geth

1. Install `geth` using the
   [installation guide](https://geth.ethereum.org/docs/install-and-build/installing-geth)

2. Sync `geth`. The following command will sync `geth` on mainnet:

   ```bash
   geth \
       -rpc \
       -rpcapi eth,net,web3 \
       -rpcaddr <ADDRESS> # An address to bind on is required if geth is running on a different machine than livepeer
   ```

3. Wait until `geth` is fully synced. Check that syncing is complete using the
   Geth Javascript Console:

   ```bash
   geth attach http://localhost:8545
   Welcome to the Geth JavaScript console!

   instance: Geth/v1.9.0-stable-52f24617/linux-amd64/go1.12.7
   coinbase: 0x0161e041aad467a890839d5b08b138c1e6373072
   at block: 583 (Wed, 23 Oct 2019 17:41:00 EDT)
   modules: debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

   > eth.syncing
   false
   ```

   `geth` will be done syncing when `eth.syncing` returns false.

4. Connect `livepeer` to `geth` with the following flags (all other flags
   omitted):

   ```bash
   livepeer \
       -network mainnet \
       -ethUrl http://localhost:8545 # Assumes that geth is running on the same machine as livepeer
   ```

## Supported networks

`livepeer` supports the networks listed below. The required flags for connecting
to a network are described (all other flags are omitted).

### Mainnet

Mainnet is the production public network.

```bash
livepeer \
    -network mainnet
    -ethUrl <ETH_URL> # URL for mainnet provider
```

### Rinkeby

Rinkeby is the public test network.

```bash
livepeer \
    -network rinkeby
    -ethUrl <ETH_URL> # URL for Rinkeby provider
```

### Private Network

Custom private networks where the Livepeer smart contracts are deployed can be
used for development purposes.

```bash
livepeer \
    -network <NETWORK_NAME> # Name of network
    -ethUrl <ETH_URL> # URL for private network provider
    -ethController <CONTROLLER_ADDR> # Address of the Controller smart contract deployed on the private network
```

### Offchain

Offchain networks that do not require interaction with the Livepeer smart
contracts can be used for development purposes.

```bash
livepeer \
    -network offchain
```
