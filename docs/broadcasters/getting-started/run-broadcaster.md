---
title: Running Catalyst
sidebar_position: 2
---

## Running Catalyst with Docker

Once you've [installed Catalyst](/broadcasters/getting-started/install), you'll want to retrieve the image id and start the container.

When running Catalyst, you have the option to run it:

- [Locally, using local transcoding capacity](#running-Catalyst-locally)
- [Onchain, using Livepeer Network transcoding capacity](#running-Catalyst-on-mainnet)
- [Onchain, using Livepeer Video Services transcoding capacity](#running-Catalyst-with-livepeercom)
- [Onchain, using transcoding capacity from a specific orchestrator or set of orchestrators](/broadcasters/how-to-guides/choose-orchestrator)

Once you are running, it will be helpful to [start the broadcaster CLI](#running-the-broadcaster-cli) to conduct any necessary onchain actions

**Important: if you have previously run Catalyst in one mode (e.g., local) and want to run it in another (e.g., mainnet), you'll need to do it in a new container and mount new directory for Catalyst to store essential files. The --mode command will not override the configuration in an existing container.**

### Running Catalyst Locally

To run Catalyst using local (offchain) transcoding, specify `--mode local`. Running in offchain mode does not require depositing broadcaster funds onchain, so this can be a cost-effective way to run a small-scale workflow. Scaled deployments can run locally as well, although this may require a more complex configuration and [the choice of specific orchestrators](/broadcasters/how-to-guides/choose-orchestrator).

It may be helpful to expose ports 8080 (Mist player), 8889 (SRT), 1935 (RTMP Server URL).

```bash
docker run \
 --name catalyst \
 -it \
 -v $HOME/livepeer:/etc/livepeer \
 -p 4242:4242 \
 -p 8080:8080 \
 -p 1935:1935 \
 -p 8889:8889/udp \
 --shm-size=2G \
 livepeer/catalyst \
 --mode local
```

### Running Catalyst on Mainnet

To run Catalyst using Livepeer Network on-chain transcoding, specify `--mode mainnet`. Running in mainnet mode requires [depositing broadcaster funds on-chain](/broadcasters/getting-started/deposit-broadcasting-funds.md) so that orchestrators are certain to receive payment for their work.

You will need an Arbitrum RPC URL.

```bash
docker run \
 --name catalyst \
 -it \
 -v $HOME/livepeer:/etc/livepeer \
 -p 4242:4242 \
 -p 8080:8080 \
 -p 1935:1935 \
 -p 8889:8889/udp \
 --shm-size=2G \
 livepeer/catalyst \
 --mode mainnet \
 --ethUrl <arbitrum-rpc-url>
```

### Viewing the Catalyst Dashboard

The dashboard (currently the MistServer interface), will be available at [http://localhost:4242](http://localhost:4242). For comprehensive documentation, please refer to the [Mist documentation](https://mistserver.org/documentation).

### Running the broadcaster CLI

To conduct critical actions like adding and withdrawing broadcaster deposits, you'll need to run the Livepeer CLI. Once you've started the Docker container, you can retrieve the name and start the CLI.

```bash
docker exec -it catalyst livepeer_cli
```
