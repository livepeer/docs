---
title: Running Aqueduct
sidebar_position: 2
---

## Running Aqueduct with Docker
Once you've [installed Aqueduct](/broadcasters/getting-started/install), you'll want to retrieve the image id and start the container. 

When running Aqueduct, you have the option to run it:
- [Locally, using local transcoding capacity](#running-aqueduct-locally)
- [Onchain, using Livepeer Network transcoding capacity](#running-aqueduct-on-mainnet)
- [Onchain, using Livepeer Video Services transcoding capacity](#running-aqueduct-with-livepeercom)
- [Onchain, using transcoding capacity from a specific orchestrator or set of orchestrators](/broadcasters/how-to-guides/choose-orchestrator)

Once you are running, it will be helpful to [start the broadcaster CLI](#running-the-broadcaster-cli) to conduct any necessary onchain actions

### Running Aqueduct Locally

To run Aqueduct using local (offchain) transcoding, specify `--mode local`. Running in offchain mode does not require depositing broadcaster funds onchain, so this can be a cost-effective way to run a small-scale workflow. Scaled deployments can run locally as well, although this may require a more complex configuration and [the choice of specific orchestrators](/broadcasters/how-to-guides/choose-orchestrator).

```bash
docker run -p 4242:4242 -p 8080:8080 -p 1935:1935 <image id> --mode local

# Mac M1 only
# docker run --platform linux/amd64 <image id>  --mode local
```

### Running Aqueduct on Mainnet

To run Aqueduct using Livepeer Network on-chain transcoding, specify `--mode mainnet`. Running in mainnet mode requires [depositing broadcaster funds on-chain](/broadcasters/getting-started/deposit-broadcasting-funds.md) so that orchestrators are certain to receive payment for their work.

It may be helpful to expose ports 4242 (Aqueduct dashboard), 8080 (placeholder), and 1935 (RTMP Server URL).

### Viewing the Aqueduct Dashboard

The dashboard (currently the MistServer interface), will be available at port 4242. For comprehensive documentation, please refer to the [Mist documentation](https://mistserver.org/documentation).

### Running the broadcaster CLI 

To conduct critical actions like adding and withdrawing broadcaster deposits, you'll need to run the Livepeer CLI. Once you've started the Docker container, you can retrieve the name and start the CLI.

```bash
docker exec -it <container_name> livepeer_cli
```
