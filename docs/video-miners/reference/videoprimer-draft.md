---
sidebar_position: 8
title: About Video
---

This tutorial includes a brief overview of how Livepeer works with contextual information about the steps to setup a Livepeer Orchestrator. 

It aims to guide those new to the Livepeer and are interested in learning about how by participating on the Livepeer network, you can earn passive income utilizing your GPUs for video mining.

## About video mining on Livepeer

Our [Architecture](/video-miners/core-concepts/architecture) allows you to set up various options--architectures to perform video-mining services.

Orchestrator -- is a node set up to work in the Livepeer ecosystem to provide transcoding systems with transcoders encoding into pixel rates, e.g. bit rates such as 1080, 720, 

Your GPUs can be set up simply to transcode on the network or you can set up an Orchestrator; a node and transcode work, or include other transcoders who have set up their GPUs to transcode on the network with an Orchestrator.

Ideally, you want your GPU to be able to process as many streams for encoding/transcoding quickly, with the capacity to process streams at the highest resolution possible.

Transcoding takes input as video, decoding to raw formated video and encoding into different formats and bit rates (e.g., 144p,240p , 360p, 480p, 720p, 1080p HD) and quality rates (e.g., 0.38 GB/hr, 1.40 GB/hr, 6.84 GB/hr)

You may,  or not, already be an [ETH Miner](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining/#what-is-ethereum-mining). You can also earn [ETH fees](https://ethereum.org/en/developers/docs/gas/) if you add your GPU on the Livepeer network to perform transcoding, or run a node with individual or multiple transcoders, using your own GPU(s) or with other transcoders on the network. So, along with or instead of, solving proof-of-work algorithms-- you will earn ETH with your GPU decoding and encoding video.


### Livepeer Explorer

As you familarize yourself with the [Livepeer Explorer](https://explorer.livepeer.org/whats-new) you can visualize Orchestrators and earnings according to performance.

#### Optimizing your implementation

It is important to note that there are 100 slots available for delegating work to orchestrators. You want to optimize your immplementation so you can handle more work. Check the last and the first of the 100 orchestrators to see what you will need to be able to get a slot in the first 100.

- Gas fees on L2

You will need arbETH for transaction, i.e. gas fees. (***See*** [ETH and LPT](/video-miners/getting-started/activation#fund-your-account-with-eth-and-lpt))


## Considerations and Recommendations

Familiarity with [Livepeer Concepts](/video-miners/core-concepts/overview)

### Transcoding

Transcoding is performed on a device that converts video from one format to another, OTT or ABR, one masterfile or mezanine stream is transcoded to other formats or resolutions. In other words, the device transmits video across the network to different devices, you use the transcoder to convert video to all formats and resolutions you need to support.

After production of a video, it's transcoded in different formats to be sent off a [CDN](/video-developers/how-to-guides/cdn-integration) to end user devices, and converts streams over a LAN or WAN (network). 

### Encoding and Decoding

Technical understanding of how encoding and decoding works.

[References](https://www.haivision.com/resources/streaming-video-definitions/h-264/)

- [Open source software for live streaming](https://obsproject.com/download)

- [In-browser broadcasting](https://livepeer.com/docs/guides/start-live-streaming/tutorial#step-2-option-2-go-live-using-in-browser-broadcaster)

- [Streamyard](https://streamyard.com/) or [Restream Studio](https://restream.io/)

- Encoding Types

	- Live Video Encoding

	Live video encoding is the process of compressing large, raw video and audio files so that they use less network bandwidth. When it comes to transporting uncompressed raw video, this can mean a colossal amount of data to send over any connection. Given the constant struggle for bandwidth efficiency, compression significantly reduces the bandwidth required, making it possible for real-time video streams or files to be easily transmitted across constrained networks such as the public internet.

	- File Based Encoding

	Encoders are used to compress and reduce the size of video content so that it can take up less storage space and be easier to transfer from one part of a video production workflow to another.

	To achieve these levels of compression, video encoders use video compression algorithms known as codecs (such as H.264/AVC or H.265/HEVC) can reduce the raw content data by as much as 1,000 times.

- Codecs

[Add Codec Support to Guide re:](https://livepeer.com/docs/guides/start-live-streaming/support-matrix)
	
A way to compress and decompress a sequence of images
For example, A codec based on the H.264 standard compresses a digital video file (or stream) so that it only requires half of the storage space (or network bandwidth) of MPEG-2. Through this compression, the codec is able to maintain the same video quality despite using only half of the storage space.

The term codec is actually a portmanteau of the words enCOding (coding) and DECoding and describes a process for compressing and decompressing data as files or a real-time stream. For broadcast engineers, a codec usually refers to the compression standard used by a video encoder, decoder or transcoder.

- Compression Standards

Take a video signal to up to 3 gigs/sec HD, squeezes to 1 or 10 mps in an IP stream, takes info and in near real time squeezes it down, taking advantage of compression standards, H264 1000:1, and HEVC or H265 new standard that is 2x as effective, each generation update to the compression standard is improved by at least a 2:1 ratio, saving bandwidth or improving quality of bandwidth links.

The H.264 standard is also flexible enough to be applied to a wide variety of applications, networks, and systems, including those with low and high bit rates, low and high resolution video, broadcast, storage, IP packet networks, many types of networks, such as internet, MPLS, satellite, cable, and also ITU-T multimedia telephony systems. H.264 is widely adopted within many verticals and by a wide range of devices—from professional decoders, all the way down to browsers and mobile devices.

- Compression Principles

Video Compression Standards: mpeg 4 h264 High definition Digital video, AVC - Advanced Video Compression,  h265 all rely on the same principles; estimate motion, resolution and information to represent the same image with the same quality, close to the real raw data that comes in 1mb file reproduce to the same exact file. 

You may be losing quality depending on how you compress/decompress (spatial point of view), 5mbs vs 2 mbs bandwidth to give the same quality


### Location

Location has an impact on potential video-mining demand. Ideally you will be located in a place where there is a high demand for transcoding, such as Europe, North America -- USA.

<!-- include link with Location information  -->

## Requirements

Before you perform an installation, it is important to understand and be able to address the following requirements for your implementation. 

***Scenario*** This is a tutorial for windows, and checking the following will be performed through the Control Panel.


### GPU

- [Nvidia GPU](/video-miners/reference/gpu-support) is the only brand of GPU that is supported on the Livepeer network. 

- Other GPUs and CPUs

If you have IRIS, as is common with new Windows machines, or for your preference, `livepeer` does accomodate running  with your [CPU](http://localhost:3000/video-miners/reference/hardware#cpu) but this is not recommended) as it does not provide for maximum performance.

Any GPU Nvidia 10 series and up should have NVENC and NVDEC chips. You can find a list of [supported Nvidia GPUs](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new), and those supported on the Livepeer network can be found [here](https://docs.livepeer.org/video-miners/reference/gpu-support)

To find your GPU capacity on your machine, check the Display Adapters and drivers in the Windows `Device Manager`. 


### Network

You can gain a better understanding of networking and ability to provide internet bandwidth sufficiently robust to stream, and access tools to test your bandwidth with our [Livepeer bandwidth requirements](/video-miners/reference/bandwidth).

### Internet Bandwidth
Each stream requires about 6Mbs up/down per stream
e.g., 1660 super 20 streams -- 120 Mbs/sec for that video card.

- [Test your bandwidth](/video-miners/reference/bandwidth#test-your-bandwidth)
Upload -- 457 mbps
Download - 24 mbps
- [Calculating your bandwith](https://www.calculator.net/bandwidth-calculator.html) 
- Minimum and Ideal Internet Bandwidth -- 120 mbs


### Network Knowledge 

Understanding static and dynamic IP addresses, firewalls is necessary as you change configurations during set-up and troubleshooting

#### IP Addresses

**Static IP** -- `Livepeer` will work with a dynamic IP address. However, when receiving streams for broadcasters you will want a static IP to make sure it goes to the same location each time.

To get started, you can use a dynamic IP.

#### **Firewalls** you will have to be able to open ports for `livepeer` streams. In some cases, your firewall does not provide for this. Instructions are included in the install steps below.

#### **Communication Protocols**  -- How computers talk to eachother via WiFi LAN/WAN/WLAN standards, Internet Protocol, and Hypertext Transfer Protocols (HTTP/HTTPS), ***See*** [Types of Network Protocols](https://www.w3schools.in/types-of-network-protocols-and-their-uses/).

**VPN** - Virtual Private Networking


### LPT -- Livepeer Token

- Required LPT - required [Livepeer token](/protocol/core-concepts/token.md) for staking for those who perform work on the network
- [Livepeer Explorer](https://explorer.livepeer.org/)
- Optimization for increased access

There are 100 available slots. In order to see where you can fit in, go to the livepeer explorer to see how 
- Gas fees L2 -- Arbitrum to cover gas fees - (Also ***See*** LPT2 migration information )


### ETH -- Gas Fees

How ETH Works


### Installation Workflow

Depending on your workflow, you may prefer to install `livepeer`
[using a binary release](/installation/install-livepeer/binary-release) or
a [Docker image](/installation/install-livepeer/docker).


**Benchmarking**

The aim of the benchmark is to determine how many video streams a server can transcode simultaneously using high-performance media transcoding libraries (e.g., from Intel and NVIDIA [see](https://benchmarks.ul.com/news/servermark-media-transcode-server-benchmark-is-now-available#:~:text=Media%20Transcode%20is%20a%20Servermark,libraries%20from%20Intel%20and%20NVIDIA.).

**Launching of the network**


### Installation on Testnet

**Scenario:**  Installing `livepeer` on Windows 10 Professional


### Installation Tutorial


**Scenario:**  Installing `livepeer` on Windows 10 Professional

You will be setting up a standalone [Orchestrator with a transcoder](https://docs.livepeer.org/video-miners/core-concepts/architecture) so that you will be able to manage it, get it listed on the Orchestrator list and view it on the [Livepeer Explorer](https://explorer.livepeer.org/orchestrators)

## Setup/Preparation

Before installing and getting started setting up an Orchestrator node you will need to prepare your graphics card so you can transcode unlimited concurrent streams.

You will have an Encoder and Decoder on your NVIDA Graphics card. 

- Go to [NVIDIA Developers] (https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)

- Click on the drop down and see all the graphics cards have encoding chips on them.

> **Note** You can also refer to [GPU Support in Livepeer](https://docs.livepeer.org/video-miners/reference/gpu-support)

Check the max concurrent sessions allowed on each card. In order to remove restrictions on the max concurrent sessions allowed, you will patch the driver on your card with a patch tool and a patch for your specific Nvidia driver build, according to the following steps:

> The NVENC patch removes restriction on the maximum number of simultaneous NVENC video encoding sessions imposed by Nvidia to consumer-grade GPUs.

> NvFBC patch (wrapper) allows you to use NvFBC on consumer-grade GPUs. ***See*** [nvfbcwrp](https://github.com/keylase/nvidia-patch/tree/master/win/nvfbcwrp) (clickable) directory for details.

### Patch the NVIDIA driver

1. Download the [patch tool](https://github.com/keylase/nvidia-patch/tree/master/win#nvenc-patch-step-by-step-guide) tool saving the .rar file on your desktop

1. Select and save the version of the patch to your desktop so you can locate it later. This file (1337) should match the [version](https://github.com/keylase/nvidia-patch/tree/master/win#windows-10-drivers) of the driver you have on your computer.


> **Note** You can find your version via your Nvidia Control Panel. Make sure you are running the latest version or update before proceeding further.


1. You can run the patch tool application or manually extract it from the `win.rar` file

Follow the prompt; **locate** and **select** the 1337 patch file you downloaded and saved to your desktop. 


1. and it will prompt you 
for the NVIDIA dll files

c: windows/system32/ scroll to the 
 .dll file open it up and click patch
a confirmation will notify you that the patch has been installed with no errors

all videos on your machine should have unlimited concurrent sessions


1. Download Livepeer binary which should also include the Livepeer Benchmarking tool [***See***](/installation/install-livepeer/binary-release#windows)

In this case it will be `.zip` binary-release for Windows 64bit
And extract the package, and you will see the following application files:

 - `livepeer` file
 - `livepeer_bench` livepeer benchmark application
 - `livepeer_cli` livepeer client application
 - `livepeer_router` livepeer router application


1. Download the rest of the Benchmarking files

	- you can download this [example video](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbEtxRk5rcXZxWjRQcHJYc2NhOHZZVGFHNl9yUXxBQ3Jtc0tsd0pPMmdrZnl0N3dXbi1IUk9iRzlONTR3THo0T3NVeXdSZzFfZlpNS1J4VnRfdHlCc1ZFMUEwMW1VY0RKZUptS3NSODZlQ3lGQkU1OXhFZDVKVE9CRmdXTGxPWVV1TXRLMUowS3VFbDRVOGpseHBYdw&q=https%3A%2F%2Fstorage.googleapis.com%2Flp_testharness_assets%2Fbbb_1080p_30fps_1min_2sec_hls.tar.gz) to test for benchmarking

	or Create your own example videos

	- [OBS Studio](https://obsproject.com/) open source open broadcaster software
	Free and open source software for video recording and live streaming.

	- For the benchmark tool, Save the [Configuration file](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json) into your `livepeer` file folder. This is a `.json` file that provides configurations for transcoding options.

	- click on the raw file and save-as to your folder with the programs in it.

	- `bbb folder`

	- `configuration transcoding .json file`
	
1. Create a batch file to run the benchmarking tool program in order to be able to know if you patched the video card correctly
	and how well the benchmarking can perform based on the capacity of the video GPU(s) you will be running.

- create a .txt file `run benchmark` 
	select it, change the name adding the `.bat` extension.

- Add the following flag commands to run the benching program making sure the cases are all correct.

```bash
`livepeer_bench.exe -in bbb/source.m3u8 -transcodingOptions transcodingOptions.json - nvidia slot or type all -concurrentSessions 20
PAUSE
```

> **Note** If you type `-concurrentSessions all`, it will take all the segments and transcode them with the results on the bottom of the log. In this case, you will be running 20 sessions on all of the GPUs running on the orchestrator.
> **Note** not setting the -nvidia flag will default to CPU transcoding 

- Check the following Metrics
	- **realtime Duration Ratio**, realtime segments ratio should be under 0.2 for proper performance and not lose any segments. 
	- Otherwise, reduce the number of bench marks in your batch file until your reach 0.2
	
> **Note** Simultaneously running other software using GPU, will affect the transcoding capacity.

**In this example:**
After checking the GPU capacity, we will run 16 concurrent sessions to adhere to the transcoding capacity.

1. Open the Firewall to allow the internet to connect to the node so that when Broadcasters send their livestream they can get through the firewall and land at the correct place.

	-- Open a firewall port
	-- create a new rule
	-- open tcp port 

	For example: In the Windows Control Panel -- Open Windows Defender Firewall with Advanced Security Settings on your local computer
	
	- Select `inbound rules`
	- Select `new rule` to bring up the
	-  `New Inbound Rule Wizard Protocol and Ports dialog to assign  and open tcp port `8935` as the default port for Livepeer.

		- 'Rule Type' dialog, Select `port` radio button
			- TCP radio button should have been selected
		- `Protocol and Ports` dialog 
			- Select `Specific Local ports:` radio button and enter  `8935` 
			- Click `Next'
		- `Action dialog` select 'Allow the Connections' radio button, click `Next`
		- `Profile' dialog check `Domain` `Private`, and `Public` for the rule to apply to all of these profiles, click `Next`
		- `Name` dialog, enter a new name, e.g. `8935`
			- it's optional to provide a description
			- Select `Finish` and this brings you back to the `Inbound Rules` list, you should see the rule under the name 8935 and `Profile` All

			 Create the same rule as above for UDP

			- 'Rule Type' dialog, Select `port` radio button
			- `UDP` radio button should have been selected
		- `Protocol and Ports` dialog 
			- Select `Specific Local ports:` radio button and enter  `8935` 
			- Click `Next'
		- `Action dialog` select 'Allow the Connections' radio button, click `Next`
		- `Profile' dialog check 'Domain' `Private`, and `Public` for the rule to apply to all of these profiles, click `Next`
		- `Name` dialog, enter a new name, e.g. `8935`
			- it's optional to provide a description
			- Select `Finish` and this brings you back to the `Inbound Rules` list, you should see the rule under the name 8935 and `Profile` All


			Now you can see 2 rules named 8935 in the `Inbound Rules` list with the ports opened for incoming streams from Broadcasters.

			Close the Firewall Security tool

### Set up Static IP and Port forwarding

- Log in to your router
- Set up a static IP Address on your router
- Set up your port forwarding to port `8935`

> **Note** If you are behind a router and need to port forward on the router -- each router has different settings. Check your port forwarding settings on your router and forward to port `8935` 

> **Note** Routers may have firewalls hardcoded that do not allow port 8935 

1. Setup to connect to the Ethereum blockchain to submit transactions

- Scenario 1 - download the nodes
- Scenario 2 - download a light node and connect it directly locally
- Scenario 3 - use a 3rd Party Service, e.g. Infura, Alchemy to connect to their applications

Scenario 3 - Connect to Infura API service

You can create an account and login to [Infura](https://infura.io/product/ethereum)

Create and Name a New Project

- ENDPOINTS Scroll and select the Arbitrum Mainnet Add-on 

Copy the mainnet key and save it to a text file for future use 

1. Launch the node
You will creating a Launch batch file to run a full node:

**Scenario:**
- You will first create a `launch.bat` for launching an orchestrator node transcoding on the same machines

>  Your batch file `.bat` can include launching `livepeer.exe` with flags, i.e. settings and commands with a -dash that will indicate:

- `livepeer.exe` to launch the application
- network `-network mainnet`
- as an:
	- `-orchestrator` (with a transcoder on this machine)
	- `transcoder`
	- broadcaster
- `maxSessions` Follow the limit tested in an earlier step and ***See*** [Set session limits](/video-miners/how-to-guides/session-limits#set-session-limits-1)

> **IMPORTANT**  Unless you have multiple GPUs, if you are only working on one machine, make sure you **set the maxSessions to no more sessions than what you tested** prior;  if you receive an `out of memory error`, it will be difficult to recover to that point as performance significantly decreases after it crashes.  

- eth2Url of the node you will connect to, e.g. [Infura ETH2](https://25ZK6PtBLNbyFKKBGVqPJC4VhLO:e78080d062a27880796969777bf18b99@eth2-beacon-mainnet.infura.io)

- `pricePerUnit` price per unit the orchestrator be charging (e.g., price/pixel)  (***See*** [Set Pricing](http://localhost:3000/video-miners/how-to-guides/pricing))

- `serviceAddrservice` address for the transcoder will be your ip address followed by the port of 8935 and then the domain name (e.g., your-node-orch.com:8935) that points to the ip address of the machine.

> **Note** Ensure it `ping`s properly so
> **Note** Make sure you put the port after the ip address or domain name 

- **Note**: As a recommendation; optionally you can add `PAUSE` on the next line in case the `Launch Node.exe` fails it won't close without being able to read the error it gives upon fail

```bash
`livepeer.exe` \
	-network mainnet \
	-orchestrator \
	-transcoder \
	-maxSessions xx \
	-ehtUrl https://25ZK6PtBLNbyFKKBGVqPJC4VhLO:e78080d062a27880796969777bf18b99@eth2-beacon-mainnet.infura.io \
	-pricePerUnit 800 \
	-serviceAddr <your-node-orch.com>:8935 \
PAUSE

```

> **Note** *See* the Configuration Reference for [**Additional Flags**](http://localhost:3000/video-miners/reference/configuration), e.g. logs, monitoring, etc...


- Now you can close the `Launch Node.exe` and use it to launch the node.

1. Start the Node 

		- Launch the node, double-click the `livepeer.exe` program 
		- enter the passphrase and it will generate a new ethereum account ending in 640 
		log into the newly created account with your passphrase.

		It is caught up with the rest of the blockchain by downloading all the blocks. 

		- Check Orchestrator is running properly: 
		When the blockchain backfill is complete, scroll to the end of the window,  
		- certification for the ip address
		- listening for the ping on the port:8935
		- verify ping request `Received Ping request`

> **Note** For Windows using a cmd.exe, **to prevent the node from pausing** and at the same time be able to work on the node, be sure to set the properties to turn off the Edit Options, especially the Quick Edit Mod.

### Livepeer Client

1. To interact and communicate with the node, use the `livepeer_cli`
 - View Node Statistics at the top of the screen you can 
 - View Orchestrator Stats -- you will be able to see the orchestrator is registered with an Active Status as `true` once in the top 100 (***See*** [Livepeer Explorer Performance Leaderboard](https://explorer.livepeer.org/leaderboard)). The `Active` status will change to `true` once you [activate `livepeer](/video-miners/getting-started/activation).

### Activate Livepeer

To activate your orchestrator, you must be in the top 100 Orchestrators. You can check the 100th orchestrator (***See*** [Livepeer Explorer Performance Leaderboard](https://explorer.livepeer.org/leaderboard)) to figure out the minimum LPT you need to stake in order to activate as it would be the same or more as the 100th orchestrator with the most stake.

> **Note** Currently Livepeer has a hard limit of 100 active orchestrators (R&D work is being done investigate the feasiiblity to lift this limit). Hence on any network, Livepeer or your own, the network will have a limit of 100 orchestrators.


First, you must [fund your account](/video-miners/getting-started/activation#fund-your-account-with-eth-and-lpt) with LPT token to stake, and then sufficient ETH for gas.


1.  Fund your account

You will run the `livepeer client` to Fund your account with LPT token, and ETH for transaction fees (gas) 

- then, Invoke multi-step "become an orchestrator" option, and Set the percentage of LPT rewards you will keep (the rest are shared with your delegators)

- then set the pixel unit you will charge for

- set the price (in [wei](/video-miners/how-to-guides/pricing#choose-a-price)) at the prompt (can be the same value as the `-pricePerUnit` flag you set to launch the orchestrator)

- you will see a log from a node indicating that the price has been updated


> **Note** if you don't change the values, they will continue with the default value.




1. Run the Benchmarking tool

	- `livepeer_bench`
	-



