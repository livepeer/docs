---
sidebar_position: 2
title: Quickstart Guide
---

The purpose of this Quickstart is to provide a detailed overview of how you can get up and running with Livepeer:

[**Video Miners**](/installation/quickstart#start-video-mining) will be able to install and setup an Orchestrator for video mining and use your current GPU for transcoding. 
 
[**Developers**](/installation/quickstart#start-developing) will be able to install and setup Livepeer for developing.

## What you need to know

- familiarity with platform capabilities highlighted in [Protocol Core Concepts](http://localhost:3000/protocol/core-concepts/overview).
- working with a command line interface
	-  `wget` is recommended (alternatively, `cURL`  can be used)
	- [grpcurl](https://github.com/fullstorydev/grpcurl#installation) for interacting with gRPC servers for testing and monitoring
- perform installations with Binaries and/or Docker 
- familiary with networking concepts and configuration (urls, ports and port forwarding, static IPs, )
- accessing an [EVM-compatible network](https://ethereum.org/en/developers/docs/evm/), (***See*** [Livepeer supported networks](https://docs.livepeer.org/installation/connect-to-ethereum))
- working with wallets to connect on the network

**Developers** interested in development with Livepeer, should also have working knowledge of:
- Go language
- Git
- building from source and/or Docker	

### Technical Requirements

Livepeer supports the following to install and run livepeer on the network:  

**Operating Systems** Linux, Darwin (macOS), and Windows

**Graphics Processing**

- **GPU** [NVIDIA](/video-miners/reference/gpu-support) that can encode and decode.

- **Network** 
	- Recommended [Bandwidth](/video-miners/reference/bandwidth) provides for a mininum 1G upload/download
	- **Static IP** to receive video streams (for the purposes of this setup, Dynamic IP will suffice but should be static for ongoing use)

### Installation Workflow

**Current Releases** for supported operating system are found in our Github repository on the [releases page](https://github.com/livepeer/go-livepeer/releases).

Depending on your workflow, instructions are provided so that you can install Livepeer:
> * [Using a binary release](/installation/install-livepeer/binary-release)
> * [Built from a Docker image](/installation/install-livepeer/docker)
> * [Developer Install built from source](/installation/install-livepeer/installing-for-development) 


## Start Video Mining

Familiarize yourself with how Video Miners participate on the network. [Choose a role](/video-miners/getting-started/choosing-a-role) as an Orchestrator or Transcoder.

### Considerations

It is recommended you begin on the [Arbitrum Rinkeby](/installation/connect-to-ethereum#arbitrum-rinkeby-public-test-network) public test network providing token so that you can  modify and optimize your implementation in a low-risk environment before assuming risks and fees on the mainnet. 

On Arbitrum (LP2 mainnet) you will need ETH to covers gas fees. (***See*** [ETH and LPT](/video-miners/getting-started/activation#fund-your-account-with-eth-and-lpt))

## Scenario

Running on the Arbitrum Rinkeby testnet: 

Set up Combined orchestrator and transcoder mode (`-orchestrator` `-transcoder`) [Architecture](/video-miners/core-concepts/architecture). This requires simpler less complex configuration the orchestrator performs transcoding locally using its own hardware minimizing network hops. 

### Pre-requisites

The following covers information and steps to set up your environment to install, connect, and activate your the orchestrator to transcode on the network.

### Check Livepeer Explorer

As you familarize yourself with the [Livepeer Explorer](https://explorer.livepeer.org/whats-new) you can visualize current Orchestrators and earnings performance. It is important to note that slots available for delegating are limited to 100 orchestrators. You can go optimizing your implementation for increased performance.

### Check your bandwidth

Access our [speedtest tools](/video-miners/reference/bandwidth) or use your own.

### Patch the NVIDIA graphics card 

Nvidia limits the number of concurrent streams that can run on GPUs. An NVENC patch is available to eliminate the restrictions on the number of concurrent streams. 

Patches are required for all operating systems in order to run unlimited concurrent streams.

This following example is for a Windows 11 machine. 

- Find your NVIDIA GPU version via your Nvidia Control Panel. Make sure you are running the latest driver version. If necessary, be sure to update the driver before proceeding further.

- Check [Livepeer Supported NVIDIA GPUs](/video-miners/reference/gpu-support)

- You need to have a GPU that provides for Encoding and Decoding. Access this information about your [NVIDIA GPUs](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new). Click on the drop down and see all the graphics cards have encoding chips on them with their capabilities. 

- Run the patch tool

1. Download the version of the [patch tool](https://github.com/keylase/nvidia-patch/tree/master/win) tool and the patch that matches the version of your GPU, saving and extracting the files to your desired location.

1. Extract and Run the patch tool application. Follow the prompt; **locate** and **select** the patch file `1337` you saved to your desktop for the your version of the GPU. 

1. Double click on the patch - it will prompt you 
for the NVIDIA `dll` file. 

1. In this example the `.dll` will be found in  `c: windows/system32/`, then double-click the patch.exe. 

	A confirmation will notify you that the patch has been installed with no errors. Now -- all videos on your machine should have unlimited concurrent sessions

### Download and Install `livepeer`

For this example we will install Livepeer [Binary](/installation/install-livepeer/binary-release)

		- `livepeer.exe`
		- `livepeer_bench.exe`
		- `livepeer_cli.exe`
		- `livepeer_router.exe`


### Test and Run your Benchmark

This will allow you to see what your GPU capacity.

1. Download [example video](https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz) and save to your `livepeer` install folder (you can also provide your own).

1. Download and save the Livepeer [`configuration transcoding .json file`](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json) to the `livepeer` install folder. 

1. Test your GPU benchmarking to see how many streams you can accomodate

- create a runbenchmark.bat file
windows .txt

1. Create a batch file to run the benchmarking tool program in order to be able to know if you patched the video card correctly and how well the benchmarking can perform based on the capacity of the video GPU(s) you will be running.

- create a .txt file `runbenchmark` 
	select it, change the name replacing the `.txt` to a `.bat` extension.

- Add the following flag commands to run the benching program making sure the cases are all correct.

```bash
`livepeer_bench.exe \
	-in bbb/source.m3u8 
	-transcodingOptions transcodingOptions.json 
	-nvidia # local <NVIDIA_GPU_ID> is only necessary with multiple GPUs
	-concurrentSessions 20
PAUSE
```
Benchmarking will run on the test files in the source folder, the transcoding options are set in the `.json` and run on the local NVIDIA GPU benchmarking 20 concurrent sessions, i.e. on the example files.

> **Note** If you type `-concurrentSessions all`, it will take all the segments and transcode them with the results on the bottom of the log. In this case, you will be running 20 sessions on all of the GPUs running on the orchestrator.

> **Note** not setting/including the `-nvidia` flag will default to CPU transcoding and significantly slow down and impact your machines performance.

> **Note** Simultaneously running other software using GPU, will affect the benchmarking performance significantly slowing it down.

- run the `runbenchmark.bat`. Check the following Metrics to determine the maximum concurrent sessions you can run on your local GPU.

	- **realtime Duration Ratio**, realtime segments ratio should be under 0.2 for proper performance and not lose any segments. 
	- Otherwise, reduce the number of `concurrentSessions` in your batch file until your reach 0.2. This indicates that the streams are able to process at real-time speed--sufficiently fast for participating on the network.


###  Open Firewall Ports

You will open ports and port forwarding to 8935 so that you can receive streams on the network.

1. open your firewall to port 8935
1. set your router port forwarding to 8935


### Set up your Network Connection

You can connect to an EVM-Compatible network, the Arbitrum blockchain, to submit transactions: 

- via a hosted API service
- via your own self-hosted node

For this example we will continue to run on the [Arbitrum Rinkeby public test network](/video-miners/getting-started/testing/testnet) a.k.a. Testnet.

1. Acquire some Rinkeby ETH from a faucet and [bridge it to Arbitrum](https://bridge.arbitrum.io/)

1. Get an Arbitrum Rinkeby RPC url so that you can connect to an Arbitrum Rinkeby public test network

1. Run the Livepeer CLI, pointing at Arbitrum Rinkeby

With your text editor, Create a batch file and save as `cli.bat` file to run your `livepeer_cli.exe` 

```bash
livepeer \
    -network arbitrum-one-rinkeby
    -ethUrl https://rinkeby.arbitrum.io/rpc # RPC Url for Arbitrum Rinkeby provider, acquired in Step 2 above
    -orchestrator
 PAUSE
 ```

### Launch the Orchestrator Node 

You are setting up the node to get it on the list of Orchestrators you viewed in the [Livepeer Explorer](https://explorer.livepeer.org/orchestrators)

On the Arbitrum Rinkeby testnet

Windows example:

1. create a batch file to launch `livepeer.exe`

In your text editor save your file as `launch.bat`

```bash
livepeer.exe \
    -network arbitrum-one-rinkeby
    -ethUrl https://rinkeby.arbitrum.io/rpc # or -ethUrl https://arbitrum.rinkeby.rpc  
    -orchestrator
    -transcoder
    -maxSessions  # use no more than the number you tested for Benchmarking so as not to disrupt the performance of your GPU
    -pricePerUnit #wei per pixel
    -serviceAddr # ip address or host name of your machine followed by the port :8935
    PAUSE #allows you to view logs in case of errors
```
This file will launch `livepeer` for an Orchestrator node with the flags that will connect it to the rinkeby public test network. with the combined `-orchestrator` and `-transcoder` architecture.
Additionally, you can includ flags for the maximum amount of sessions, price, and service address.

Further flags, i.e. more logs, monitor statistics, ***See*** 

1. Click on the `launch.bat`

For the first time starting an Orchestrator, now that you have been able to launch your orchestrator and transcoder, a new Account will be created. 

You will be prompted to:
- Provide and reenter a Passphrase (it will not be visible). This will be used to encrypt the private Keystore file


You should see the logs of your orchestrator with the backfill of blocks until the node is all caught up with the blockchain. You will also see the mode the node is running in (i.e. Orchestrator Mode).
The CLI server will be listening and confirmation of the ip and port it is listening on (8935).

### Activate  

After the transactions have confirmed, your orchestrator will join the active set in the following round. This means that all blocks on the chain will be on your node and in the next round of transactions, you will be able to act on the node.

[To Activate](/video-miners/getting-started/activation#activate)

You can [test your activation](/video-miners/getting-started/testing/test) on the test network.


Once you are activated, proceed to the How-to section on this guide to learn about:

- Connect an orchestrator with separate transcoders
- Benchmark transcoding options
- Set transcoding session limits
- Setup orchestrator and transcoder metrics monitoring
- Dual mine
- Set pricing
- Vote
- Troubleshooting


## [Start Developing](/video-developers/getting-started/overview)

The developer quickstart follows the installation workflow so that you will be able to:

1. Perform a [developer install](/installation/install-livepeer/installing-for-development) of the node software 
2. Run a broadcaster
3. Deposit broadcasting funds
4. Create a livestream
5. Playback a livestream


Once set up, developers will be able to:
1. Configure your broadcasting preferences
2. Integrate with a CDN
3. Withdraw your broadcaster funds
4. Enable verification (experimental)
5. Troubleshoot Livepeer