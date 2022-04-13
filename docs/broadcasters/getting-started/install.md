---
title: Install and Start Aqueduct
---

# Install using Docker

### Prerequisites

If you do not have Docker installed, you will need to install it using the guide
[here](https://docs.docker.com/get-docker/) before running the commands below.


## Installation

With every release, Docker images are pushed to
[DockerHub](https://hub.docker.com/r/livepeer/aqueduct).

If you are running macOS with an M1 chip, you'll need to [run your terminal using the Rosetta emulator](https://apple.stackexchange.com/a/428769) and specifically pull the `linux/amd64` release. In the future, we will provide alternative `arm64` builds. 


```bash
# <RELEASE_VERSION> is the release version i.e. 0.0.1
docker pull livepeer/aqueduct:<RELEASE_VERSION>

# Mac M1 only
# docker pull --platform linux/amd64 livepeer/aqueduct:<RELEASE_VERSION> 
```

