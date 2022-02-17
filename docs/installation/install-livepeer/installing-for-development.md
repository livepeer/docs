---
sidebar_position: 4
---

# Install for Development


### Installing pre-releases with Docker

To pull the latest pre-release version:

```bash
docker pull livepeer/go-livepeer:master
```

### Installing a binary pre-release

Binaries are produced from every GitHub commit and download links are available
in
[the #builds channel of the Livepeer Discord server](https://discord.gg/drApskX).

These binaries are produced from go-livepeer's CI process, shown in this
diagram:

![image](https://user-images.githubusercontent.com/257909/58923612-3709a800-86f5-11e9-838b-6202f296bce8.png)

## Build from source

### System dependencies

Building `livepeer` requires some system dependencies.

Linux (Ubuntu: 16.04 or 18.04):

```bash
apt-get update && apt-get -y install build-essential pkg-config autoconf git curl protobuf-compiler-grpc golang-goprotobuf-dev
# To enable transcoding on Nvidia GPUs
apt-get -y install clang-8 clang-tools-8
```

Darwin (macOS):

```bash
brew update && brew install pkg-config autoconf
```

Windows:

The steps in
[this file](https://github.com/livepeer/go-livepeer/blob/master/.github/workflows/windows.yml)
can be used as a reference.

### Go

Building `livepeer` requires Go. Follow the
[official Go installation instructions](https://golang.org/doc/install).

### Build and install

1. Clone the repository:

   ```bash
   git clone https://github.com/livepeer/go-livepeer.git
   cd go-livepeer
   ```

2. Install `ffmpeg` dependencies:

   ```bash
   ./install_ffmpeg.sh
   ```

3. Set build environment variables.

   Set the `PKG_CONFIG_PATH` variable so that `pkg-config` can find the `ffmpeg`
   dependency files installed in step 2:

   ```bash
   # install_ffmpeg.sh stores ffmpeg dependency files in this directory by default
   export PKG_CONFIG_PATH=~/compiled/lib/pkgconfig
   ```

   Set the `BUILD_TAGS` variable to enable mainnet support:

   ```bash
   export BUILD_TAGS=mainnet
   # To build with support for only development networks and the Rinkeby test network
   # export BUILD_TAGS=rinkeby
   # To build with support for only development networks
   # export BUILD_TAGS=dev
   ```

4. Build and install `livepeer`:

   ```bash
   make
   cp livepeer* /usr/local/bin
   ```

## Build with Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/livepeer/go-livepeer.git
   cd go-livepeer
   ```

2. Export tags:

   ```bash
   echo $(git describe --tags) > .git.describe
   ```

3. Build image:

   ```bash
   docker build -t livepeerbinary:debian -f docker/Dockerfile.debian .
   ```

