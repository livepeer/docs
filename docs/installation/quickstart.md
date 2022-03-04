---
sidebar_position: 3
title: Quickstart Guide
---

This Quickstart includes a detailed overview of how Livepeer works with contextual information about the steps to setup a combined Livepeer Orchestrator and Transcoder.

[**Video Miners**](/installation/quickstart#start-video-mining) will be able to install and setup an Orchestrator for video mining and use your current GPU for transcoding. 
 
[**Developers**](/installation/quickstart#start-developing) will be able to install and setup Livepeer for developing.

## What you need to know

- familiarity with platform capabilities highlighted in [Protocol Core Concepts](http://localhost:3000/protocol/core-concepts/overview).
- how to work with a command line interface
	-  `wget` is recommended (alternatively, `cURL`  can be used)
	- [grpcurl](https://github.com/fullstorydev/grpcurl#grpcurl) for interacting with gRPC servers for testing and monitoring
- how to perform installations with Binaries and/or Docker 
- familiary with networking concepts and configuration (urls, ports and port forwarding, static IPs, )
- ability to access an [EVM-compatible network](https://docs.livepeer.org/installation/connect-to-ethereum)
- working with faucets and funding wallets

**Developers** interested in development with Livepeer, should also have working knowledge of:
- Go language
- Git
- Building from source, binaries, and Docker	

### Technical Requirements

Livepeer supports the following to install and run livepeer on the network:  

**Operating Systems** Linux, Darwin (macOS), and Windows

**Graphics Processing** Livepeer supports [NVIDIA **GPUs**](/video-miners/reference/gpu-support) for encoding/decoding.

**Network** 

- [**Bandwidth**](/video-miners/reference/bandwidth) providing for a mininum 1G upload/download
- **Static IP** to receive video streams 
(Dynamic IP will suffice to get started, but should be static for ongoing use)
- **Router** Ability to open ports and modify port forwarding

### Installation Workflow

**Current Releases** for supported operating system are found on our Github repository [releases page](https://github.com/livepeer/go-livepeer/releases).

Depending on your workflow, instructions are provided so that you can install Livepeer:
> * [Using a binary release](/installation/install-livepeer/binary-release)
> * [Built from a Docker image](/installation/install-livepeer/docker)
> * [Developer Install built from source](/installation/install-livepeer/installing-for-development) 


## Start Video Mining

To familiarize yourself with how Video Miners participate on the network ***See*** [Choose a role](/video-miners/getting-started/choosing-a-role) as an Orchestrator or Transcoder.

### Considerations

It is recommended you begin on the [Arbitrum Rinkeby](/installation/connect-to-ethereum#arbitrum-rinkeby-public-test-network) public test network so that you can  modify and optimize your implementation in a low-risk environment before assuming risks and fees on the mainnet. 

**Note** Once you are done with this process in the test environment, you will be able to follow the same steps to connect to Arbitrum mainnet.

On Arbitrum (LP2 mainnet) you will need to purchase ETH to covers gas fees and LPT to stake and activate on mainnet. (***See*** [ETH and LPT](/video-miners/getting-started/activation#fund-your-account-with-eth-and-lpt))

Rinkeby ETH is made available free of charge when using the Testnet. 


## Scenario

Running on the Arbitrum Rinkeby testnet: 

Combined orchestrator and transcoder mode (`-orchestrator` `-transcoder`) [Architecture](/video-miners/core-concepts/architecture) is covered in this quickstart. This architecture requires less complex configuration; transcoding is performed locally with the same hardware as the orchestrator thus minimizing network hops. 

## Pre-requisites

The following covers information and steps to set up your environment to install, connect, and activate your the orchestrator to transcode on the network.

### Check Livepeer Explorer

As you familarize yourself with the [Livepeer Explorer](https://explorer.livepeer.org/whats-new) you can visualize current Orchestrators and earnings performance. It is important to note that slots available for delegating are limited to 100 orchestrators. You can go optimizing your implementation for increased performance.

Here is the [Livepeer Test Explorer](https://arbitrum-rinkeby.explorer.livepeer.org/) you can work with in the following setup.

### Check your bandwidth

Access our [speedtest tools](/video-miners/reference/bandwidth) or use your own.

### Patch the NVIDIA graphics card 

NVIDIA limits the number of concurrent streams that can run on GPUs. An NVENC patch is available to eliminate the restrictions on the number of concurrent streams. 

Patches are required for all operating systems in order to run unlimited concurrent streams.

This following example is for a Windows 11 machine. 

- Find your NVIDIA GPU version via your Nvidia Control Panel. Make sure you are running the latest driver version. If necessary, be sure to update your driver before proceeding further.

- Check [Livepeer Supported NVIDIA GPUs](/video-miners/reference/gpu-support)

- You need to have a GPU that provides for Encoding and Decoding. Access this information about your [NVIDIA GPUs](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new). Click on the drop down and see all the graphics cards have encoding chips on them with their capabilities. 

#### Run the patch tool

1. Download the version of the [patch tool](https://github.com/keylase/nvidia-patch/tree/master/win) and the patch that matches the version of your GPU, saving and extracting the files to your desired location.

1. Extract and Run the patch tool application (`patch.exe`). Follow the prompt; **locate** and **select** the patch file `1337` you saved to your desktop for the your version of the GPU. 

1. Double click on the patch - it will prompt you for the NVIDIA `dll` file. 

1. In this example the `.dll` will be found in  `c: windows/system32/`, open the `.dll`, then double-click the patch tool to apply the patch. 

	A dialog with a confirmation will notify you that the patch has been installed with no errors. Now videos streams on your machine should be provided with unlimited concurrent sessions.

## Download and Install `livepeer`

For this example we will install following the instructions for the [Livepeer Binary](/installation/install-livepeer/binary-release). Your folder should be saved at a location of your choice. 

The Folder includes:

		- `livepeer.exe`
		- `livepeer_bench.exe`
		- `livepeer_cli.exe`
		- `livepeer_router.exe`


### Test and Run your Benchmark

Once the install is complete, you will test your benchmarking. It is important to know your GPU capacity before launching livepeer so as not to overload it and slow down the performance of your machine.

1. Download [example video](https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz) and save to your `livepeer` install folder (you can also provide your own).

1. Download and save the Livepeer [`configuration transcoding .json file`](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json) to the `livepeer` install folder. 

1. Test your GPU benchmarking to see how many streams you can accomodate. 

In your text editor, Create a batch file `runbenchmark.bat`. Add the following flags, commands to run the `livepeer_bench.exe` program, making sure the cases are all correct.

```bash
`livepeer_bench.exe \
	-in bbb/source.m3u8 
	-transcodingOptions transcodingOptions.json 
	-nvidia # local <NVIDIA_GPU_ID> is only necessary with multiple GPUs
	-concurrentSessions 20
PAUSE
```
Benchmarking will run on the test files in the source folder, the transcoding options are set in the `.json` and run on the local NVIDIA GPU (we are benchmarking 20 concurrent sessions on the example files).

Once the process is complete, the results are visible on the bottom of the log. In this example, we ran 20 concurrent sessions on the GPU.

> **NOTE Important Tips to Optimize Performance**

> - If you set `-concurrentSessions all`, it will take all the segments and transcode them. 

> - not setting/including the `-nvidia` flag will default to CPU transcoding and significantly slow down and impact your machines performance.

> - Simultaneously running other software using GPU, will affect the benchmarking performance significantly slowing it down.


4. in the install folder, double click the `runbenchmark.bat` to run the benchmarking tool. Once complete, Check the following Metrics to determine the maximum concurrent sessions you can run on your local GPU.

- **realtime Duration Ratio**, realtime segments ratio should be under 0.2 for proper performance and not lose any segments. 
- Otherwise, reduce the number of `concurrentSessions` in your batch file until your reach 0.2. This indicates that the streams are able to process at real-time speed--sufficiently fast for participating on the network.

###  Open Firewall Ports

You will open ports and port forwarding to 8935 so that you can receive streams on the network.

1. You can open your firewall to port 8935 (in the Windows Defender Firewall Advanced Security settings create new inbound rules for TCP and UDP).

1. Access your router to set port forwarding to 8935

> **Note** Each router is distinct and in some cases ports are hardcoded and do not allow for other configuration.

### Set up your Network Connection

You can connect to an EVM-Compatible network, the Arbitrum blockchain, to submit transactions: 

- via a hosted API service
- via your own self-hosted node

For this example we will continue to follow these instructions for the: [Arbitrum Rinkeby public test network](/video-miners/getting-started/testing/testnet) a.k.a. Testnet:

1. Acquire some Rinkeby ETH from a faucet and [bridge it to Arbitrum](https://bridge.arbitrum.io/)

1. Get an Arbitrum Rinkeby RPC url so that you can connect to an Arbitrum Rinkeby public test network

1. Run the Livepeer CLI, pointing at Arbitrum Rinkeby

In this Windows Example:

With your text editor, Create a batch file and save as `cli.bat` file to run your `livepeer_cli.exe` 

```bash
livepeer \
    -network arbitrum-one-rinkeby
    -ethUrl https://rinkeby.arbitrum.io/rpc # RPC Url for Arbitrum Rinkeby provider, acquired in Step 2 above
    -orchestrator
    -transcoder
 PAUSE
 ```

### Launch the Orchestrator Node 

You are setting up the node to get it on the list of Orchestrators you viewed in the [Livepeer Explorer](https://arbitrum-rinkeby.explorer.livepeer.org/orchestrators)

On the Arbitrum Rinkeby testnet

Windows example:

1. create a batch file to launch `livepeer.exe`

In your text editor save your file as `launch.bat` with the following flags:

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
This file will launch `livepeer` for an Orchestrator node with the flags that will connect it to the rinkeby public test network for the combined `-orchestrator` and `-transcoder` architecture.

[Configuration Options](http://localhost:3000/video-miners/reference/configuration) for additional configuration (i.e. more logs, monitor statistics).

2. Click on the `launch.bat`

If this is the first time starting an Orchestrator, now that you have been able to launch your orchestrator and transcoder, a new Account will be created. 

You will be prompted to:
- Provide and reenter a Passphrase (it will not be visible). This will be used to encrypt the private Keystore file.

You will see the logs of your orchestrator with the backfill of blocks until the node is all caught up with the blockchain. You will also see the mode the node is running in (i.e. Orchestrator Mode).
The log also displays the CLI server will be listening and confirmation of the ip and port it is listening on (8935).

### Livepeer Client

You can use the `livepeer_cli.exe` to communicate and interact with the node. The cli provides a list of commands you can use to get the information about the node.

Double-click on the tool which will open up a log showing information about your account.

Scroll through to Check the `ORCHESTRATOR STATS` which may show:
- Status - Not Registerd
- Active - False
- Delegated Stake 


At this point, you should have an account, but may not yet be in the top 100 list.

Check the [Livepeer Explorer](https://arbitrum-rinkeby.explorer.livepeer.org/orchestrators) (in this case we are working with the Arbitrum Rinkeby Testnet Explorer). Scroll to the last Orchestrator so you can see how much more Rinkeby ETH you may need to fund to get into the top 100 of the list of Orchestrators.

### Fund your account with the CLI

Once you’ve run the Livepeer CLI, select “Get test LPT” from the list of options. This transaction will send you 10 Rinkeby LPT. 

**Note** If you do not have any Arbitrum Rinkeby ETH in your wallet you set up prior, this transaction will fail.

### Activate Livepeer

After the transactions have been confirmed, your orchestrator will join the active set in the following round. This means that all blocks on the chain will be on your node, and in the next round of transactions, you will be able to act on the node.

You can follow these instructions: [To Activate](/video-miners/getting-started/activation#activate)

You can [test your activation](/video-miners/getting-started/testing/test) on the test network.

Once you are activated, you will be able to work with advanced options in the [How-to](video-miners/how-to-guides/overview) section of this guide.


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