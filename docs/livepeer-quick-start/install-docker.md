---
sidebar_position: 3
title: Install using Docker
---


# Livepeer Docker Releases
With every release, Docker images are pushed to 
[DockerHub](https://hub.docker.com/r/livepeer/go-livepeer).

> **Note:** If you are running macOS with an M1 chip, you'll need to [run your terminal using the Rosetta emulator](https://apple.stackexchange.com/a/428769) and specifically pull the `linux/amd64` release. In the future, we will provide alternative `arm64` builds. 

## Prerequisites

If you don not have Docker installed, you can follow the [Docker Installation](https://docs.docker.com/get-docker/) before proceeding to the Livepeer Docker installation.

## Install Livepeer with Docker

[Release Versions](https://hub.docker.com/r/livepeer/go-livepeer/tags)

```bash
# <RELEASE_VERSION> is the release version i.e. 0.5.14
docker pull livepeer/go-livepeer:<RELEASE_VERSION>

# Mac M1 only
# docker pull --platform linux/amd64 livepeer/go-livepeer:<RELEASE_VERSION> 
```


## Running livepeer-cli with Docker (rudimentary approach for command-line)

Once you've pulled the image, retrieve the image id and start the container. 

**Any flags you provide will be passed to the binary**, so you can pass [your configuration](/livepeer-quick-start/configuring-livepeer) here.


```bash
docker run <image id> <livepeer configuration flags>

# Mac M1 only
# docker run --platform linux/amd64 <image id> <livepeer configuration flags>
```

Once you've started the container, retrieve the container name and start the CLI:

```bash
docker exec -it <container_name> livepeer_cli
```
