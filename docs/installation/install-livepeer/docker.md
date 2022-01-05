---
sidebar_position: 3
---

# Install using Docker

### Prerequisites

If you do not have Docker installed, you will need to install it using the guide
[here](https://docs.docker.com/get-docker/) before running the commands below.


## Installation

With every release, Docker images are pushed to
[DockerHub](https://hub.docker.com/r/livepeer/go-livepeer).

If you are running macOS with an M1 chip, you'll need to [run your terminal using the Rosetta emulator](https://apple.stackexchange.com/a/428769) and specifically pull the `linux/amd64` release. In the future, we will provide alternative `arm64` builds. 


```bash
# <RELEASE_VERSION> is the release version i.e. 0.5.14
docker pull livepeer/go-livepeer:<RELEASE_VERSION>

# Mac M1 only
# docker pull --platform linux/amd64 livepeer/go-livepeer:<RELEASE_VERSION> 
```


## Running livepeer-cli with Docker
Once you've pulled the image, retrieve the image id and start the container. 

**Any flags you provide will be passed to the binary**, so you can pass [your configuration](/installation/configuring-livepeer) here.

```bash
docker run --platform linux/amd64 <image id> <livepeer configuration flags>
```
