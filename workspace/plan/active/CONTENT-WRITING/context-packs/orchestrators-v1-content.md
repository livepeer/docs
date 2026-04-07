# Orchestrators V1 Content — Full File Dump

Source directory: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/`

All 19 files captured verbatim. No summarisation. No truncation.

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/introduction.mdx

---
title: "Introduction"
description: "Explore APIs, guides, and examples"
icon: "hand-wave"
---

<Tip>
  If you're looking for documentation on Livepeer's hosted realtime
  StreamDiffusion AI platform "Daydream", please navigate
  [here](https://pipelines.livepeer.org/docs)
</Tip>

Learn how to add live and on-demand video experience to your app using Livepeer
Studio. Effortlessly manage livestreams, video uploads, API keys, network usage,
billing, and more.

<CardGroup cols={2}>
  <Card title="Quickstart" icon="bolt-lightning" href="/developers/quick-start">
    Get started with Livepeer Studio in less than 5 minutes.
  </Card>
  <Card title="Guides" icon="book" href="/developers/guides/overview">
    Learn how to add live or on-demand video experiences to your app.
  </Card>
  <Card
    title="API References"
    icon="code"
    href="/api-reference/overview/introduction"
  >
    Explore the Livepeer Studio API
  </Card>
  <Card title="SDKs" icon="code" href="/sdks/introduction">
    Get up and running with SDKs and pre-built UI components
  </Card>
</CardGroup>

## Explore the Livepeer Studio SDKs

Explore developer SDKs, pre-built UI components, and tools for interacting with
the Livepeer Studio API.

### Server-side SDKs

<CardGroup cols={2}>
  <Card
    title="Typescript"
    icon="js"
    color="#EFD81A"
    href="/sdks/javascript"
  ></Card>
  <Card title="Go" icon="golang" color="#1EAED8" href="/sdks/go"></Card>
  <Card title="Python" icon="python" color="#F4DC5E" href="/sdks/python"></Card>
</CardGroup>

### React Components

<CardGroup cols={2}>
  <Card
    title="Player Component"
    icon="react"
    color="#5ED2F3"
    href="/sdks/react/Player"
  >
    Fully customizable video player component for seamless playback
  </Card>
  <Card
    title="Broadcast Component"
    icon="react"
    color="#5ED2F3"
    href="/sdks/react/broadcast"
  >
    Full-featured broadcast component with controls, settings, and device
    selection
  </Card>
</CardGroup>

[View all developer tools](/sdks/introduction)

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/quick-start.mdx

---
title: Quickstart
description:
  "Learn how to create an API key and start adding live and on-demand video to
  your app or website!"
icon: "bolt"
---

First, go to [Livepeer Studio](https://livepeer.studio), if you haven't already,
and create an account. Once you've created an account, you'll be able to create
an API key by clicking on the "Create API Key" button on Developers page.

<Warning>
  We do not recommend using ["CORS-enabled" API
  keys](/api-reference/overview/authentication) - they will be deprecated in an
  upcoming release. We recommend making requests from your backend to the
  Livepeer Studio API.
</Warning>

<Frame>
  ![Livepeer Studio - Create API key
  page](/v1/images/tutorials/studio-create-api.png)
</Frame>

You can now use this API key in Livepeer SDKs and APIs in order to authenticate
your requests and start building.

<Info>
  We recommend creating separate accounts for your development and production
  environments. This will allow you to easily isolate your environments. We will
  be shipping a solution for multi-environment management soon.
</Info>

In this exampe, we will use Javascript anld React to upload a video. Make sure
to set up a React app first.

## Install the JS SDK and Livepeer React

We install both the NodeJS SDK (which works in all JS environments with `fetch`)
and the Livepeer React library, which provides composable React primitives for
building video apps.

```
npm install livepeer @livepeer/react
```

## Set up the SDK

Add an API key to the environment variables, and construct a new Livepeer SDK
client.

```tsx
import Livepeer from "livepeer";

const livepeer = new Livepeer({
  apiKey: process.env.YOUR_PRIVATE_API_KEY,
});
```

## Retrieve playback info

We can now use the SDK on the backend to fetch the playback info for our asset.

This asset was uploaded using the dashboard, but this can also be an asset
created from an application.

```ts
import { getSrc } from "@livepeer/react/external";

const playbackId = "f5eese9wwl88k4g8";

export const getPlaybackSource = () => {
  const playbackInfo = await livepeer.playback.get(playbackId);

  const src = getSrc(playbackInfo.playbackInfo);

  return src;
};
```

## Play the asset

We can now use Player component from the SDK to play a video. In the below
example, we style the elements with Tailwind, but you can use any styling
solution:

```tsx
import { PauseIcon, PlayIcon } from "@livepeer/react/assets";
import { getSrc } from "@livepeer/react/external";
import * as Player from "@livepeer/react/player";
import { vodSource } from "./source";

export const DemoPlayer = ({ src }: { src: Src[] | null }) => {
  return (
    <Player.Root src={src}>
      <Player.Container>
        <Player.Video title="Live stream" />

        <Player.Controls className="flex items-center justify-center">
          <Player.PlayPauseTrigger className="w-10 h-10">
            <Player.PlayingIndicator asChild matcher={false}>
              <PlayIcon />
            </Player.PlayingIndicator>
            <Player.PlayingIndicator asChild>
              <PauseIcon />
            </Player.PlayingIndicator>
          </Player.PlayPauseTrigger>
        </Player.Controls>
      </Player.Container>
    </Player.Root>
  );
};
```

## Start building

Check out the [SDKs](/sdks/introduction) and
[API Reference](/api-reference/overview/introduction) pages to learn more about
how to use the SDKs and API to build your application.

You can also refer to the [Guides](/developers/guides/overview) section for more
in-depth tutorials on how to use the SDKs and API to build specific
applications.

Don't know where to start? Check out these four tutorials:

- [Learn how to create a livestream](/developers/guides/create-livestream)
- [Learn how to listen to asset events](/developers/guides/listen-to-asset-events)

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/livepeer-studio-cli.mdx

---
title: CLI
description: "Generate a new Livepeer app."
icon: "rectangle-terminal"
---

The Livepeer Studio CLI is a command line tool that helps you generate a new
Livepeer app in just a few seconds.

## Getting Started

First, create a Livepeer API key
[here](https://livepeer.studio/dashboard/developers/api-keys). Next, use the CLI
to generate a new project.

```sh
npx @livepeer/create
```

When prompted, enter your Livepeer **API key** and **Stream ID**.

Once the app has been created, `cd` into the new directory and run the start
command:

```sh
npm run dev
```

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/assess-capabilities.mdx

---
title: Assess concurrent stream
icon: signal-stream
---

Once you have confirmed that your
[hardware](/references/go-livepeer/gpu-support) is supported by `Go Livepeer`,
you should assess how many concurrent streams it can support.

## Hardware functionality and constraints

The Livepeer protocol enables those with the excess hardware and bandwidth
available to earn additional revenue by advertising video encoding services on
an open marketplace, and using their idle hardware to perform the work. There
are a number of different types of hardware capable of encoding video in a
performant and cost-effective manner, each with its own unique capabilities and
terms of use.

Some of these terms restrict users from utilizing their own hardware to its full
capacity through artificial restrictions. While googling for open-source patches
reveals workarounds to these limitations, Livepeer encourages operators on the
network to read and comply with the terms of service and usage policies of the
hardware that they are using.

### NVIDIA

If you are using an NVIDIA card, check you are running the latest driver version
on your NVIDIA GPU, or update your driver before proceeding to benchmarking. You
can access the GPU configuration, Display Adapters, and drivers for your
operating system either directly or through your NVIDIA Control Panel.

Concurrent session caps for NVIDIA hardware can be found
[here](https://developer.nvidia.com/video-encode-decode-gpu-support-matrix).

## Testing

You can test the performance of your card using the `livepeer_bench`
[benchmarking tool](/orchestrators/guides/benchmark-transcoding).

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/benchmark-transcoding.mdx

---
title: "Benchmark Transcoding"
icon: server
---

This guide provides steps to test the performance of your GPU(s) with the
`livepeer_bench` benchmark transcoding tool provided with the
[Livepeer install](/orchestrators/guides/install-go-livepeer/).

The benchmarking tool is designed to:

- Simulate live-mode to measure transcoding as if connected to the network
- Gauge local transcoding capacity
- Provide output statistics to show real-time segment ratio and stream duration
  ratio
- Provide for adjusting configurations according to GPU capacity

## Transcoding Performance

Overall transcoding performance on the network depends on the speed video is
transcoded and uploaded/downloaded from an orchestrator.

The transcode time should be as low as possible. At the least, it should be
lower than the total segment duration which is faster than real-time.

If you want to get an approximation of how many streams you can transcode
simultaneously, increase the number of concurrent sessions with the
`-concurrentSessions` flag to assess the total transcoding time.

<Info>
  After running your benchmark transcoding, you can follow up with further
  instructions about setting [session
  limits](/orchestrators/guides/set-session-limits).
</Info>

## Start Benchmarking

1. Download the test stream we provide for benchmarking transcoding:

```bash
wget -c https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz
tar -xvf bbb_1080p_30fps_1min_2sec_hls.tar.gz
ls bbb/   # Should print the stream *.ts segments and source.m3u8 manifest
```

<Info>
  It is important to note that running this benchmarking only gauges local
  transcoding capacity.
</Info>

2. Download the
   [common output rendition configuration](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json)
   `.json` file that you can copy and save in the Livepeer folder as
   `transcodingOptions.json`.

1. Run `livepeer_bench`

The number and type of output renditions will impact benchmark results.

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS>
```

### Flags

- The `-nvidia` flag is only required when transcoding with Nvidia GPUs. It is
  used to specify a comma-delimited string of Nvidia GPU IDs.

- The `-concurrentSessions` flag is used to specify the number of concurrent
  transcoding sessions. The default value is 1.

### Livestreams

Livestreams are the most common type of workload on the network. By default, the
flag is set to live mode `-live=*true*` so that the segments of the stream will
be queued one-by-one as they arrive in a livestream.

If you want to queue all segments at once without any gaps in time, thus
replicating a video-on-demand scenario, you can switch off live mode by changing
the 'live' flag to _`=false`_.

**For example:**

```bash
livepeer_bench \
  -in bbb/source.m3u8 \
  -live=false
```

<Info>
  For the purposes of this example above, all other flags are omitted.
</Info>

The first few lines of the output should display the source file, the output
rendition profiles, and the number of concurrent sessions.

**For example:**

```bash
*---------------------*----------------------------------------------*
| Source File         | .../go-livepeer/bbb/source.m3u8              |
| Transcoding Options | P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 |
| Concurrent Sessions | 1                                            |
| Live Mode           | true                                         |
*---------------------*----------------------------------------------*
```

The transcoding metrics will be output in CSV format per segment as each segment
gets transcoded.

**For example:**

```bash
timestamp,session,segment,seg_dur,transcode_time
2021-03-12 00:21:29.1412,0,0,2,0.2545
2021-03-12 00:21:30.998,0,1,2,0.1107
2021-03-12 00:21:32.9816,0,2,2,0.09381
2021-03-12 00:21:34.9786,0,3,2,0.09031
2021-03-12 00:21:36.9806,0,4,2,0.09178
2021-03-12 00:21:38.9811,0,5,2,0.09216
2021-03-12 00:21:40.9831,0,6,2,0.09363
2021-03-12 00:21:42.9874,0,7,2,0.09746
2021-03-12 00:21:44.9885,0,8,2,0.09811
2021-03-12 00:21:46.9851,0,9,2,0.09412
```

When all the transcoding sessions end, metrics output will be generated.

- `Real-Time Segs Ratio` captures the number of segments transcoded in
  real-time.

- `Real-Time Duration Ratio` captures the total time taken to transcode all
  segments relative to the total duration of all source segments.

```bash
*------------------------------*---------------------*
| Concurrent Sessions          | 1                   |
| Total Segs Transcoded        | 10                  |
| Real-Time Segs Transcoded    | 10                  |
| * Real-Time Segs Ratio *     | 1                   |
| Total Source Duration        | 20s                 |
| Total Transcoding Duration   | 1.1165546499999999s |
| * Real-Time Duration Ratio * | 0.05583             |
*------------------------------*---------------------*
```

You can export the per-segment CSV data to an `output.csv` file to analyze it
with other tools:

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS> > output.csv
```

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/configure-reward-calling.mdx

---
title: Reward Calls
icon: coins
---

This guide provides instructions and recommendations on the ways to call reward
once you've activated your orchestrator on the Livepeer network.

# About Calling Reward

By default, an active orchestrator will automatically call reward in each round,
submitting an Arbitrum transaction that distributes newly minted LPT rewards to
itself and its delegators.

The amount of LPT rewards distributed by the reward call depends on the
orchestrator's stake, i.e. its own stake and that of its delegators. It is
important to note that for orchestrators with very low stake, the ETH
transaction cost of calling reward may exceed the amount of LPT rewards
distributed. The threshold to profitably call reward depends on several factors,
including but not limited to the market price of LPT and the current inflation
rate.

## Getting Started with Reward Calls

When you first initiate reward calls, it may make economic sense for you to
[disable automatic reward calls](/orchestrators/guides/configure-reward-calling#disable-automatic-reward-calls)
and then
[manually call reward](/orchestrators/guides/configure-reward-calling#manually-call-reward)
in each round instead.

You then can
[enable automatic reward calls](/orchestrators/guides/configure-reward-calling#enable-automatic-reward-calls)
when you are confident that the distribution of LPT relative to the ETH
transaction cost makes economic sense.

## Disable automatic reward calls

Disable automatic reward calls with the `-reward=false` flag:

**For example:**

```bash
livepeer \
    -network arbitrum-one-mainnet \
    -reward=false
```

> **Note:** for the purposes of this example above, all other flags are omitted.

## Manually call reward

Use `livepeer_cli` to manually call reward:

1. Estimate the current ETH transaction cost for calling reward and ensure you
   have enough ETH in your wallet to execute the transaction.

- The gas cost for a reward call is typically 350k-450k.
- Get the required gas price from [ethgasstation](https://ethgasstation.info/)
  or [gasnow](https://www.gasnow.org/).

- The ETH transaction cost will be the gas cost multiplied by the gas price.

2. Make sure `livepeer` is running.

3. Run `livepeer_cli`

4. Enter the number corresponding to the `Invoke "reward"` option

5. Wait for the transaction to confirm.

You can view this in the logs of your orchestrator, which will indicate a
transaction has been submitted and confirmed on-chain.

## Enable automatic reward calls

- To enable automatic reward calls omit the `-reward=false` flag (enabled by
  default).

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/connect-to-arbitrum.mdx

---
title: Connect to Arbitrum
icon: plug
---

`go-livepeer` requires access to the [Arbitrum](https://arbitrum.io/) network
for typical usage.

There are two ways you can connect to the Arbitrum network: via a hosted API
service or via your own self-hosted node. Connecting to a hosted API service is
recommended for users that are getting started and you always have the option to
switch to your own node later on.

### Hosted API services

Hosted API services run Arbitrum nodes on behalf of their users. Popular
services include [Infura](https://infura.io/) and
[Alchemy](https://alchemyapi.io/). Be aware that these services have their own
pricing plans. That being said, the latest versions of `livepeer` should be able
to stay within the request limit for Infura's free tier at least for a single
node.

The following examples describe the required flags to connect to an
EVM-compatible network via Infura (all other flags omitted):

To connect to Arbitrum mainnet:

```bash
livepeer \
    -network arbitrum-one-mainnet
    -ethUrl https://arbitrum-mainnet.infura.io/v3/<PROJECT_ID> # Visit https://infura.io to obtain a PROJECT_ID
```

### Self-hosted Arbitrum nodes

If you want to run your own Arbitrum node, set one up using the
[instructions from Offchain Labs](https://developer.offchainlabs.com/docs/running_node).

Once your node is synced, connect `livepeer` to the node with the following
flags (all other flags omitted):

```bash
livepeer \
    -network mainnet \
    -ethUrl http://localhost:8545 # Assumes that your node is running on the same machine as livepeer
```

## Supported networks

`livepeer` supports the networks listed below. The required flags for connecting
to a network are described (all other flags are omitted).

### Arbitrum One

Arbitrum One is the production public network.

```bash
livepeer \
    -network arbitrum-one-mainnet
    -ethUrl <ETH_URL> # URL for Arbitrum mainnet provider
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

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/dual-mine.mdx

---
title: Dual Mine
icon: pickaxe
---

In this guide, we'll go over how to process video on the Livepeer Network using
your GPU while simultaneously mining cryptocurrencies such as Filecoin or
Bitcoin using the same GPU.

## Dual ethash mining and transcoding

### Choosing a miner

Dual ethash mining and transcoding has been tested on the GPUs in
[this list](/references/go-livepeer/gpu-support) and with the following miners:

- [t-rex](https://github.com/trexminer/T-Rex)
- [ethminer](https://github.com/ethereum-mining/ethminer)

If you successfully test with other miners, contributions to this document are
welcome.

If you are using a post-Volta GPU, the recommendation is to use ethminer because
it exposes flags for more granular adjustments to the GPU workload which will be
needed when using CUDA MPS (see the next section) to prevent the miner from
fully staturating the GPU. Other miners that support similar flags can be
substituted for ethminer as well.

If you are using a pre-Volta GPU, the recommendation is to use t-rex because it
is, at the time of writing, the most popular and efficient ethash miner that has
been tested with `livepeer`. Other miners that have been tested successfully
with `livepeer` can be substituted for t-rex as well.

Note that regardless of the miner used, the VRAM available on your GPU will
affect the number of concurrent streams that can be transcoded while mining.

### Run a ethminer + livepeer script

If you are using ethminer,
[this script](https://github.com/livepeer/ethminer/blob/master/start.sh) can be
used to start both processes.

If you want to setup a dual mining manually perhaps because the script does not
serve your needs, continue to the next sections.

### Run CUDA MPS

[CUDA MPS](https://docs.nvidia.com/deploy/mps/index.html) can be used to try to
improve parallelization of the ethash mining and transcoding workloads on the
GPU. If you are not using CUDA MPS you can move on to the next section.

Requirements:

- Linux
- A post-Volta Nvidia GPU. Refer to the
  [GPU NVENC/NVDEC support matrix](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)
  for the generation that a GPU is from.

Start the MPS server by following
[these instructions](https://docs.nvidia.com/deploy/mps/index.html#topic_6_1_2)

Take note of the following points that are mentioned in the docs:

- The `CUDA_VISIBLE_DEVICES` environment variable should be set with device IDs
  of the GPUS you will be using before the MPS daemon is started, but it should
  NOT be set before starting the miner and `livepeer`
- If you are using a mix of pre-Volta and post-Volta GPUs, make sure to read
  this [section](https://docs.nvidia.com/deploy/mps/index.html#topic_3_3_4) to
  avoid device ID issues

### Run the miner

The following instructions will assume you are using either t-rex or ethminer.
If you are using a different miner, the miner commands should be updated to
reflect the requirements of the miner being used.

If you are using ethminer, run ethminer with flags to adjust the GPU workload
(other flags to connect to a mining pool omitted):

```bash
ethminer \
  -U \
  --cu-devices <GPU_DEVICE_IDS> \ # List of Nvidia GPU IDs
  --cuda-streams <CUDA_STREAMS> \ # Number of multiprocessor streams
  --cuda-block-size <CUDA_BLOCK_SIZE> \ # Number of threads per block
  --cuda-grid-size <CUDA_GRID_SIZE> \ # Number of blocks per grid
```

The `--cuda-streams`, `--cuda-block-size` and `--cuda-grid-size` flags are used
to adjust the GPU workload. The best values to use for these flags will depend
on your GPU and whether you want lower hashrate and faster transcoding speed or
higher hashrate and lower transcoding speed.

If you are using t-rex, run t-rex with a flag to adjust mining intensity (other
flags to connect to a mining pool omitted):

```bash
t-rex \
  -a ethash \
  -d <GPU_DEVICE_IDS> \ # List of Nvidia GPU IDs
  -i <MINING_INTENSITY \ # The mining intensity
```

The `-i` flag is used to adjust the mining intensity. Note that in testing, this
flag did not seem to provide very granual control over the GPU workload so
adjusting it to a level at which CUDA MPS could work led to a larger hashrate
drop which is why ethminer is recommended if you plan on using CUDA MPS.

### Run livepeer

1. If you are using CUDA MPS, wait until the miner completes DAG generation

2. Run `livepeer` on the same machine as the miner and using the same GPU device
   IDs as the miner with the `-nvidia` flag

3. If you are using CUDA MPS, `livepeer` will need to be stopped when the miner
   re-generates the DAG to avoid transcoding issues and can be re-started when
   DAG generation completes

### Switching

Instead of always concurrently ethash mining and transcoding, it could also be
possible to switch between the two to maximize mining efficiency when there is
low transcoding demand and maximize transcoding capacity when there is high
transcoding demand.

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/gateway-introspection.mdx

---
title: Gateway Introspection
icon: tower-broadcast
---

We launched a public API to enable Gateway introspection. Users of the API will
be able to review the activity inside the Livepeer Gateway nodes and understand
the selection algorithms used to assign work to Orchestrator nodes.

This is the initial release of the API, and only a few log lines have been
enabled in the public logs. Orchestrators are encouraged to open pull requests
to enable additional logs, which will be closely reviewed by the Livepeer team.
Additionally, the core Livepeer team will publish more logs from Livepeer
Gateways that may aid in understanding the selection algorithms.

This API uses Grafana's Loki for log aggregation. Examples of API usage are
provided below. For more guidance, refer to
[this page](https://grafana.com/docs/loki/v2.4.x/api/#get-lokiapiv1query).

### API usage

- Public logs from Livepeer Gateways are available through the public Loki
  instance.
- Example queries:

```bash
# logs from all regions:
curl -G -s https://loki.livepeer.report/loki/api/v1/query \
     --data-urlencode "query={region=~\".+\"}" | jq

# logs from all regions between two timestamps (UNIX epoch nanoseconds)
curl -G -s https://loki.livepeer.report/loki/api/v1/query_range \
     --data-urlencode "query={region=~\".+\"}" --data 'start=1727335380000000000' --data 'end=1727635380000000000' | jq

# logs from a specific region (e.g. NYC):
curl -G -s https://loki.livepeer.report/loki/api/v1/query \
     --data-urlencode "query={region=~\"nyc\"}" | jq

# logs related to a specific orchestrator IP-address:
curl -G -s https://loki.livepeer.report/loki/api/v1/query \
     --data-urlencode "query={region=~\".+\"} |= \"clientIP=121.127.46.156\"" | jq

# list of all possible regions:
curl -G -s https://loki.livepeer.report/loki/api/v1/label/region/values | jq '.data'
```

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/get-started.mdx

---
title: Get started
icon: rocket
---

This guide provides instructions on how to run an orchestrator using the
`Go Livepeer` client. In order to use `Go Livepeer`, the software must first be
installed. There are several ways `Go Livepeer` can be installed depending on
the operating system and the user's choice of installation method, for example
using a container or building from source. Instructions for installing
`Go Livepeer` can be found on the
["Install" guide](/orchestrators/guides/install-go-livepeer). The instructions
on this page assumes `Go Livepeer` and its associated binaries have been
installed successfully.

## Prerequisites

- How to work with a command-line interface
  - `wget` is recommended (alternatively, `cURL` can be used)
  - [grpcurl](https://github.com/fullstorydev/grpcurl#grpcurl) for interacting
    with gRPC servers for testing and monitoring
- Basic familiarity with installing binaries directly or with Docker
- Familiarity with networking concepts and configuration (URLs, ports and port
  forwarding, static IPs, etc)
- Access to a
  [hosted or self-hosted Arbitrum node](/orchestrators/guides/connect-to-arbitrum)
- Decent bandwidth. Low bandwidth will result in poor performance on the network
- `Go Livepeer` and its associated binaries have been
  [installed](/orchestrators/guides/install-go-livepeer) successfully

## Run the Go Livepeer client in orchestrator mode.

### Get a list of your accessible GPUs

Before running the Go Livepeer client in orchestrator mode you must first get a
list of your accessible GPUs. Once you have checked your
[Nvidia driver](https://www.nvidia.com/Download/index.aspx) is installed, your
Nvidia GPUs on your machine should be accessible.

**Note:** Instructions for non-Nvidia GPUs will be added in the future.

- Use the `nvidia-smi` (installed with the Nvidia driver) to print a list of
  GPUs:

**For example:**

The following output indicates that there are 5 GPUs accessible on the machine
with IDs from 0 through 4.

```bash
nvidia-smi -L
GPU 0: GeForce GTX 1070 Ti (UUID: GPU-fcbaffa0-38ae-02d0-5c47-f8fd9922eb75)
GPU 1: GeForce GTX 1070 Ti (UUID: GPU-d46a085e-0d66-0214-34d3-96860a5c778f)
GPU 2: GeForce GTX 1070 Ti (UUID: GPU-32b7c120-c2c9-0069-6130-cb67afd89642)
GPU 3: GeForce GTX 1070 Ti (UUID: GPU-9e4163c3-a120-3cbb-7869-1223b322eab2)
GPU 4: GeForce GTX 1070 Ti (UUID: GPU-3370975a-f669-e108-6428-602be9eba7d4)
```

### Run the `livepeer` command

You're now ready to run `Go Livepeer` in orchestrator mode.

```bash
livepeer \
    -network arbitrum-one-mainnet \
    -ethUrl <ETH_URL> \
    -ethAcctAddr <ETH_ACCT_ADDR> \ # Only required if you already have an ETH account you want to use
    -orchestrator \
    -transcoder \
    -nvidia <NVIDIA_DEVICE_IDs> \ # Only required for transcoding with Nvidia GPUs
    -pricePerUnit <PRICE_PER_UNIT> \
    -serviceAddr <SERVICE_ADDR> # Hostname/IP:port
```

#### Flags

- Use the `-ethUrl` flag to
  [connect to the arbitrum network](/orchestrators/guides/connect-to-arbitrum)
  using a hosted or self hosted Arbitrum node.

- Use the `-ethAcctAddr` flag to specify the ETH account address that you want
  the node to use.

> **Note:** This flag is only required if you already have an account that you
> want to use.

- Be sure the private key for the account address is stored in the keystore
  directory.

> This defaults to `~/.lpData/arbitrum-one-mainnet/keystore`.

> **Note:** It is paramount that you securely manage the private key, as it
> controls your wallet and funds.

- Use both the `-orchestrator` and `-transcoder` flags to run the binary in
  orchestrator mode transcoding video.

- `-nvidia` is used to specify a comma delimited string of Nvidia GPU IDs. The
  flag is only required when transcoding with Nvidia GPUs
- `-pricePerUnit` is used to specify the price (wei per pixel) for transcoding.
  The flag is required on startup, but the value can be changed later.
- `-serviceAddr` is used to specify the publicly accessible address that the
  orchestrator should receive requests at. Changing this requires a blockchain
  transaction, so it's preferable to use a hostname for a domain you own, not an
  IP address that may change.

### Automatic ETH account creation

If you did not use the `-ethAcctAddr` flag, an ETH account will automatically be
created and you will be prompted for a passphrase:

```bash
I0302 15:26:06.886115   25387 accountmanager.go:49] No Ethereum account found. Creating a new account
I0302 15:26:06.886134   25387 accountmanager.go:50] This process will create a new Ethereum account for this Livepeer node
I0302 15:26:06.886138   25387 accountmanager.go:51] Please enter a passphrase to encrypt the Private Keystore file for the Ethereum account.
I0302 15:26:06.886143   25387 accountmanager.go:52] This process will ask for this passphrase every time it is launched
I0302 15:26:06.886147   25387 accountmanager.go:53] (no characters will appear in Terminal when the passphrase is entered)
Passphrase:
```

This account will be used to identify your orchestrator on the network. **By
default**, the private key for the account will be stored under:

```bash
~/.lpData/arbitrum-one-mainnet/keystore
```

> **Note:** It is **very important** to safeguard both the private key and the
> passphrase because together they allow someone to sign messages and send
> transactions using the account.

### Check the node is accessible

Once your node completes the start up process, you should see the following logs
indicating that the node is publicly accessible:

```bash
I0302 15:27:26.456804   25418 rpc.go:167] Listening for RPC on :8935
I0302 15:27:28.463151   25418 rpc.go:207] Received Ping request
```

## Fund your account with ETH and LPT

In order to activate on Livepeer, your account should have:

- arbETH to pay for transaction fees
  - Recommendation: Start with a small amount and add more when needed.
    `livepeer` and `livepeer_cli` will inform you if your account's ETH balance
    is insufficient to pay for transaction fees when attempting to submit the
    transactions
- LPT to stake in order to activate
  - Recommendation: Check the [explorer](https://explorer.livepeer.org/) and
    find the 100th orchestrator with the most stake. This is the amount of stake
    required for you to activate. Note that more stake will help you receive
    more work.

<Warning>
  If your orchestrator drops out of the active set (top 100 in stake), it will
  not be reactivated by the protocol unless (1) you re-register or (2) your
  stake amount (delegated or self-stake) changes such that you are in the top
  100 again. If you are inactive and your stake amount places you in the top 100
  but your stake does not change, your orchestrator will not be automatically
  added to the active set.
</Warning>

## Activate

The active orchestrator set consists of the top 100 orchestrators with the most
LPT stake on the network. You can check this on the
[Livepeer Explorer](https://explorer.livepeer.org/).

### Activate using `livepeer_cli`

Once the orchestrator has been started and is connected to Arbitrum you can
activate the orchestrator:

1. Run `livepeer_cli`

2. Enter the number corresponding to the
   `Invoke multi-step "become an orchestrator"` option.

3. Set the percentage of LPT rewards that you will keep (the rest will be shared
   with your delegators):

   ```bash
   Enter block reward cut percentage (current=0 default=10) - >
   ```

4. Set the percentage of ETH fees that you will keep (the rest will be shared
   with your delegators):

   ```bash
   Enter fee cut percentage (current=100 default=95) - >
   ```

5. Set the number of pixels in a single unit of work you will charge a price for
   (You can use the default (1) and change this later if needed):

   ```bash
   Enter amount of pixels that make up a single unit (default: 1 pixel) >
   ```

6. Set the price (in `Wei`) that you will charge per unit of work. This can be
   the same as or different from the value used with the `-pricePerUnit` flag
   when starting your orchestrator:

   ```bash
   Enter the price for 1 pixels in Wei (required) >
   ```

7. Set the publicly accessible service address that your orchestrator will
   receive requests. This should be the same as the value used with the
   `-serviceAddr` flag when starting your orchestrator, i.e.:

   ```bash
   Enter the public host:port of node (default: 1.1.1.1:8935)>
   ```

8. Set the amount of LPTU (1 LPT = 1e18 LPTU) that you want to stake. It is
   important this amount is denominated in LPTU; if you want to bond 5 LPT, you
   would enter 5000000000000000000.

**For example:**

```bash
You must bond to yourself in order to become a orchestrator
Enter bond amount - >
```

> **Note:** If the active orchestrator set is full (i.e. at 100 orchestrators),
> the minimum stake you need to stake to activate is the lowest total stake of
> an orchestrator in the active set found on the
> [Livepeer Explorer](https://explorer.livepeer.org/).

9. Wait for transactions to confirm. You should see the logs of your
   orchestrator indicating transactions are submitted and confirmed on-chain.
   Once the transactions have confirmed, your orchestrator will join the active
   set in the following round.

### Navigate to the Livepeer Explorer on Arbitrum Mainnet

Once you have activated your orchestrator on the Arbitrum Mainnet, you should be
able to see it on the
[Livepeer Explorer](https://explorer.livepeer.org/leaderboard).

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/install-go-livepeer.mdx

---
title: Install Go Livepeer
description: Learn how to install go-livepeer and become an orchestrator
icon: download
---

Depending on your workflow, you may prefer to install `go-livepeer` using a
binary release, a Docker image, or from source.

## Install using a Binary Release

### Dependencies

```bash
# For ubuntu
apt install curl coreutils gnupg2

# For macOS
brew install curl coreutils gnupg
```

### Darwin (macOS)

```bash
# <RELEASE_VERSION> is the release version, e.g. v0.5.35
# <ARCH> is the chip architecture (use arm64 for M1 and amd64 for Intel)

wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-darwin-<ARCH>.tar.gz

# Next, extract it
tar -zxvf livepeer-darwin-<ARCH>.tar.gz

# Finally, move it to the appropriate directory
mv livepeer-darwin-<ARCH>/* /usr/local/bin/
```

### Linux

```bash
# <RELEASE_VERSION> is the release version, e.g. v0.5.35
# <ARCH> is the chip architecture (use arm64 or amd64)

# Fetch the latest release
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-linux-<ARCH>.tar.gz

# Next, extract it
tar -zxvf livepeer-linux-amd64.tar.gz

# Finally, move it to the appropriate directory
mv livepeer-linux-amd64/* /usr/local/bin/
```

### Linux GPU

There is a separate binary which supports transcoding on the NVIDIA GPU. The
requirement for this binary is to have version 12 of the
[CUDA Toolkit](https://developer.nvidia.com/cuda-downloads) installed on your
machine.

```bash
# <RELEASE_VERSION> is the release version, e.g. v0.5.35
# <ARCH> is the chip architecture (use arm64 or amd64)

# Fetch the latest release
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-linux-gpu-<ARCH>.tar.gz

# Next, extract it
tar -zxvf livepeer-linux-gpu-<ARCH>.tar.gz

# Finally, move it to the appropriate directory
mv livepeer-linux-gpu-<ARCH>/* /usr/local/bin/
```

### Windows

```shell
# <RELEASE_VERSION> is the release version, e.g. v0.5.35

# Fetch the latest release .zip
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-windows-amd64.zip

# Next, extract it
unzip livepeer-windows-amd64.zip

# Finally, move it to the appropriate directory, e.g. C:\Users\UserName\livepeer-folder
move livepeer-windows-amd64 e.g. C:\Users\UserName\livepeer-folder
```

<Info>
  At this time Livepeer does not provide automatic updates. You can perform a
  manual update or use a script. A community-created [Bash script to update
  Livepeer is available on the livepeer
  Forum](https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513).
</Info>

### Third-party packages

Packages for different Linux distributions are maintained by Livepeer community
members. Before using these packages, please verify that they have been updated
to use the
[latest builds of go-livepeer](https://github.com/livepeer/go-livepeer/releases).
This list will be updated as a best-effort, but we cannot guarantee if
individual packages are up to date or verify their integrity.

In the future, Livepeer core contributors may publish official packages for the
distributions below.

| Platform   | Installation           | Source                                              |
| ---------- | ---------------------- | --------------------------------------------------- |
| Arch Linux | `paru go-livepeer-bin` | https://aur.archlinux.org/packages/go-livepeer-bin/ |

## Install using a Docker image

### Prerequisites

If you do not have Docker installed, you will need to install it using the guide
[here](https://docs.docker.com/get-docker/) before running the commands below.

### Installation

With every release, Docker images are pushed to
[DockerHub](https://hub.docker.com/r/livepeer/go-livepeer).

```bash
# <RELEASE_VERSION> is the release version i.e. 0.5.14
docker pull livepeer/go-livepeer:<RELEASE_VERSION>
```

### Running livepeer-cli with Docker

Once you've pulled the image, retrieve the image id and start the container.

**Any flags you provide will be passed to the binary**, so you can pass
[your configuration flags](/references/go-livepeer/cli-reference) here.

```bash
docker run <image id> <livepeer configuration flags>

# GPU support (Transcoder-only)
docker run --gpus all <image id> <livepeer configuration flags>
```

Once you've started the container, retrieve the name and start the CLI

```bash
docker exec -it <container_name> livepeer_cli
```

### Installing pre-releases with Docker

To pull the latest pre-release version:

```bash
docker pull livepeer/go-livepeer:master
```

## Build from source

### System dependencies

Building `livepeer` requires some system dependencies.

#### Linux (Ubuntu: 16.04 or 18.04)

```bash
apt-get update && apt-get -y install build-essential pkg-config autoconf git curl yasm
```

#### Linux (Ubuntu: 20.04 or newer)

```bash
apt-get -y install protobuf-compiler-grpc golang-goprotobuf-dev yasm pkg-config
```

#### Linux GPU support

To enable transcoding using Nvidia GPUs on Linux systems

- [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit) must be installed on
  the system and available on the `LIBRARY_PATH`
- `clang` must be installed as well. The script that will install `ffmpeg`
  dependencies uses `which clang` command to determine whether `clang` is
  installed or not. Please check this on your system. If the path is empty,
  please install `clang`. For example on the Ubuntu machine one can do

```bash
apt-get -y install clang clang-tools
export LIBRARY_PATH="/usr/local/cuda/lib64:${LIBRARY_PATH}"
```

#### Darwin (macOS)

```bash
brew update && brew install pkg-config autoconf
```

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

## Troubleshooting

### Error while loading shared libraries

You may encounter the following issue when running the `livepeer` binary.

```
error while loading shared libraries: libnppig.so.11: cannot open shared object file: No such file or directory.
```

This means that you have installed the Livepeer GPU binary but it is unable to
access your CUDA Toolkit libraries. If you do not intend to use GPU transcoding,
please download `livepeer` instead of `livepeer-gpu`. However, if you wish to
use GPU transcoding, please ensure that the CUDA Toolkit is installed and add
its path to the shared libraries path.

```
export LD_LIBRARY_PATH=${HOME}/compiled/lib:/usr/local/cuda/lib64:${LD_LIBRARY_PATH}
```

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/migrate-from-contract-wallet.mdx

---
title: Migrate Stake from Contract
icon: route-interstate
---

This guide provides instructions for Livepeer participants using a contract
wallet (i.e., multisig) to stake on L1 (Ethereum Mainnet), to migrate this stake
to L2 (Arbitrum Mainnet) as per the
[Livepeer Confluence upgrade](https://medium.com/livepeer-blog/the-confluence-upgrade-is-live-3b6b342ea71e).

This guide is designed to be used in conjunction with the
[Livepeer Explorer L2 Contract Wallet Migration Tools](https://explorer.livepeer.org/migrate)
to support migrating to Arbitrum:

- Orchestrators - Migrate stake and fees
- Gateways - Migrate your deposit and reserve
- Delegators - Migrate undelegated stake

The migration process will transfer ownership of funds (i.e., stake) owned by
your L1 address to the L2 address.

## Create an L2 Address

**Before moving your stake, you MUST confirm that you have a valid L2 address
that can own funds migrated from L1. Otherwise, you could lose access to your L1
assets after the migration if you use the L1 address of your contract wallet as
the L2 address**

The L2 address can be that of a contract wallet (i.e.
[Gnosis Safe](https://gnosis-safe.io/)) deployed on L2, or an EOA (an externally
owned account managed by a hardware wallet (e.g., Ledger)), or a browser wallet
(e.g., Metamask).

**If you would like to use a contract wallet on L2 you MUST make sure that the
contract wallet is deployed on L2 and that you have control of it before
proceeding.**

> **Note:** If you are unsure about how to ensure you have a valid L2 address,
> please **reach out to the core team on Discord**.

## Migrate Stake

1. Use the
   [Contract Wallet Tool](https://explorer.livepeer.org/migrate/delegator/contract-wallet-tool)
   to generate the required parameters for the migration transactions. These
   parameters will be required in upcoming steps:

1. Once you enter the L1 address, and an L2 address (the address you created in
   the prior step), the tool will display the following:

- The `migrateDelegator` transaction parameters if the L1 address has stake to
  migrate
- The `migrateUnbondingLocks` transaction parameters if the L1 address has
  unbonding locks (i.e., undelegated stake) to migrate

### Submit a Stake Migration Transaction

If your L1 address has stake to migrate:

- Submit the stake migration transaction from your contract wallet, a function
  call to the L1Migrator on **Ethereum Mainnet**.

- The contract address is `0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A`
- Copy the
  [contract ABI](https://etherscan.io/address/0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A#code)
- The function name is `migrateDelegator` with the following parameters:
  - `address _l1Addr`: the address of your L1 contract wallet that has stake to
    migrate
  - `address _l2Addr`: the address on L2 that will receive migrated stake (the
    L2 address you created prior).
  - `bytes _sig`: this parameter can be left blank
  - `uint256 _maxGas`: the `maxGas` printed by the command-line tool
  - `uint256 _gasPriceBid`: the `gasPriceBid` printed by the command-line tool
  - `uint256 _maxSubmissionCost`: the `maxSubmissionCost` printed by the
    command-line tool
- The ETH value to include with the function call should be the `value` printed
  by the command-line tool. The `value` printed by the command-line tool is
  **denominated in Wei**, so make sure to convert it into the units (i.e.,
  Ether) required by the tool you are using to submit the transaction.

### Submit an Unbonding Lock Migration Transaction

If your L1 address has unbonding locks to migrate, submit an unbonding locks
migration transaction from your contract wallet; a function call to the
L1Migrator on **Ethereum Mainnet**.

- The contract address is `0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A`
- Copy the
  [contract ABI](https://etherscan.io/address/0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A#code)
- The function name is `migrateUnbondingLocks` with the following parameters:
  - `address _l1Addr`: the address of your L1 contract wallet that has unbonding
    locks to migrate
  - `address _l2Addr`: the address on L2 that will receive the total stake of
    migrated unbonding locks (the L2 address you created prior).
  - `uint256[] _unbondingLockIds`: The array of IDs for unbonding locks that
    will be migrated
  - `bytes _sig`: This parameter can be ignored and left blank
  - `uint256 _maxGas`: This should be the `maxGas` printed by the command-line
    tool
  - `uint256 _gasPriceBid`: This should be the `gasPriceBid` printed by the
    command-line tool
  - `uint256 _maxSubmissionCost`: This should be the `maxSubmissionCost` printed
    by the command-line tool
- The ETH value to include with the function call should be the `value` printed
  by the command-line tool. The `value` printed by the command-line tool is
  **denominated in Wei**, so make sure to convert it into the units (i.e.,
  Ether) required by the tool you are using to submit the transaction.

### Waiting For Transaction Finalization on L2

After a migration transaction is submitted by the contract wallet and confirmed
on L1, it takes about ~10 minutes to finalize on L2. You can use a command-line
tool to confirm the transaction is finalized on L2:

```bash
# Clone the repository
git clone https://github.com/livepeer/arbitrum-lpt-bridge
# Navigate into the repository
cd arbitrum-lpt-bridge
# Install dependencies
yarn
# Set environment variables
export MAINNET_URL=<ETHEREUM_MAINNET_RPC_URL>
export ARB_MAINNET_URL=<ARBITRUM_MAINNET_RPC_URL>
# Run command
npx hardhat wait-to-relay-tx-to-l2 <L1_TX_HASH>
```

- `<L1_TX_HASH>` is the hash of the L1 transaction submitted by your contract
  wallet.

  The command will notify you when the transaction is finalized on L2. You
  should then be able to navigate to the
  [Livepeer Explorer](https://explorer.livepeer.org/) to find the L2 address you
  specified and view the migrated stake owned by that address.

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/migrate-to-arbitrum.mdx

---
title: Migrate to Arbitrum
icon: right-from-bracket
---

This guide provides instructions for the one-time migration from the L1 Ethereum
Mainnet to the L2 Arbitrum Mainnet, as per the
[Livepeer Confluence upgrade](https://medium.com/livepeer-blog/the-confluence-upgrade-is-live-3b6b342ea71e).

This guide is designed for node operators who have not yet upgraded to a
Livepeer version `>=0.5.28`, connecting to Arbitrum Mainnet after the
`LIP-73 block`.

## Prerequisites for all chains

- Your connected Ethereum account should have enough ETH to cover gas for the
  `migrate` transaction.

  If you do not have ETH in your wallet, you can add some using another wallet
  or an on-ramp so you can buy enough for the `migrate` transaction.

- You can complete the migration using the
  [Livepeer Explorer](https://explorer.livepeer.org/migrate).

  Alternatively, you may opt to sign a typed data message via `livepeer_cli`,
  instead.

- Ensure you are interacting with the correct contracts. Addresses can be found
  [here](/v1/references/contract-addresses).
- **If you use a contract account rather than an EOA**: You will need to
  interact directly with the Migrator contract methods following the
  [Contract Wallet Migration](/v1/orchestrators/guides/migrate-from-contract-wallet)
  guide.

<Info>If you are not familiar with this, it may not apply to you.</Info>

- Use a `go-livepeer`
  [release](https://github.com/livepeer/go-livepeer/releases) `>= 0.5.28`.
- To register your Orchestrator on the destination chain,
  [bridge some ETH](https://bridge.arbitrum.io/) to pay for the transaction.

## On Mainnet

This guide applies to orchestrators who registered on-chain on the Ethereum
mainnet prior to February 14th, 2022. It can be used starting on February 14th,
2022 onward.

<Info>
  Once you have successfully completed the migration, this guide is no longer
  applicable and you will use Arbitrum in lieu of Ethereum for all protocol
  actions.
</Info>

Before starting the migration process, you will need to acquire an `RPC url` for
Arbitrum:

- [Set up an Arbitrum node](https://developer.offchainlabs.com/docs/running_node),
  or

- Acquire an Arbitrum `RPC url` using a third-party service (e.g.,
  [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/)).

## On Testnet

This guide is applicable to orchestrators who registered on-chain on Rinkeby
prior to January 24th, 2022.

**Note:** Once you have successfully completed the migration, this guide is no
longer applicable and you will use Arbitrum Rinkeby in lieu of Rinkeby for all
protocol actions.

Before starting the migration process, you will need to acquire an `RPC url` for
Arbitrum. We recommend using
[the Offchain Labs public testnet endpoint](https://developer.offchainlabs.com/docs/public_testnet).

Alternatively, you can:

- [Set up an Arbitrum node](https://developer.offchainlabs.com/docs/running_node),
  or
- Acquire an Arbitrum `RPC url` using a third-party service,

> **For example:**
>
> - [Alchemy](https://www.alchemy.com/), or
> - [Infura](https://infura.io/)

## Migrating to Arbitrum

1. Connect your wallet

   If you have not connected a wallet, connect one using the prompt in the upper
   left-hand corner of the Livepeer Explorer.

   The wallet you choose should contain a small amount of ETH to pay for the
   `migrate` transaction.

   > **Note:** You do not have to use the same wallet you use for your
   > orchestrator. However, if you are using a different wallet to submit the
   > transaction, you will still need to access the wallet that you use for your
   > orchestrator so that you can sign a typed data message.

   **For example:**

   <img
     src="/v1/images/orchestrating-guides/connect-wallet.png"
     alt="connect wallet to livepeer"
     width="300"
   />
   <br />
   <img
     src="/v1/images/orchestrating-guides/connect-wallet2.png"
     alt="connect wallet to livepeer options"
     width="300"
   />

2. Navigate to the L2 Migration Tool to begin migration to Arbitrum:

<img
  src="/v1/images/orchestrating-guides/begin-migration.png"
  alt="begin migration"
  width="300"
/>

3. Sign the `migrate` transaction:

   You can sign to authorize the migration transaction with one of the
   following:

   4a. Sign using a connected wallet.

   If you prefer to sign using the wallet that you have connected to the
   explorer, click "Approve Migration" and approve the transaction using your
   browser extension.

   <img
     src="/v1/images/orchestrating-guides/sign-web.png"
     alt="sign web"
     width="300"
   />

   4b. Sign using the `livepeer_cli`.

   If you prefer to sign a typed data message through the `livepeer_cli`,
   connect your wallet to the explorer with any other account. You will be
   prompted to enter the public address of the orchestrator you wish to migrate.

   > **Note:** If you are signing with the CLI and your connected wallet is NOT
   > your orchestrator wallet, the stake amount will not appear until after you
   > enter your Ethereum account address.

   <img
     src="/v1/images/orchestrating-guides/sign-cli.png"
     alt="sign cli"
     width="300"
   />

   Once you have entered an address, you will see a message to sign and a text
   entry box for the signature.

- Copy the message provided. Then go into your CLI and select option 19: Sign
  Typed Data.

  {' '}

  <img
    src="/v1/images/orchestrating-guides/sign-cli2.png"
    alt="sign cli"
    width="300"
  />

- Follow the CLI's prompts to generate a signature.

  **Note:** For `Windows` users, after pasting the typed data you will need to
  type `ctrl+Z`, instead of `ctrl+D`.

  {' '}

  <img
    src="/v1/images/orchestrating-guides/sign-cli3.png"
    alt="sign cli"
    width="300"
  />

- Paste this message in the provided box and click Continue.

  {' '}

  <img
    src="/v1/images/orchestrating-guides/sign-cli4.png"
    alt="sign cli"
    width="300"
  />

- Click `Approve Migration` to send the transaction to Ethereum. The connected
  browser wallet will pay gas, but it will use the provided signature.

4. View your profile:

   Once the `migrate` transaction has been confirmed (this usually takes up to
   10 minutes between mainnet and Arbitrum), you should see a link to your
   profile where you will be able to see your newly claimed balances.

   You will see an [Arbiscan](https://arbiscan.io/) link to the `transaction id`
   to view the submitted transaction.

5. Restart your Orchestrator, pointing at Arbitrum instead of mainnet as
   follows:

   5a. Find your Arbitrum RPC Url

   > **Note:** If you prefer to run your own Arbitrum node, you should start it
   > at this time. Otherwise, you should find the Arbitrum RPC Url that you
   > created at the beginning of this guide.

   5b. Restart your Orchestrator with an updated configuration

   Once you are ready, you should restart your orchestrator using your usual
   flags, changing only the `network` and `ethUrl`.

**Error Note:** If you're running on the same machine as your mainnet
Orchestrator, you may encounter an **error**:

**For example:**

You were expecting `chainID of 4`, but got `421611` instead. You may have
changed networks without changing `network name` or `datadir`.

This indicates your testnet setup is trying to access the same `.lpData` that it
used for mainnet, and it is finding a conflict on `chainId`.

**To fix this error:**

- Specify a new data directory using the `-datadir` flag when you start your
  Orchestrator. Specify only the directory, not the file.

  Additionally, you may need to copy your keystore to
  `/.lpData/arbitrum-one-< mainnet / rinkeby >/keystore`.

  ```bash
  livepeer \
    -network arbitrum-one-mainnet # testnet: arbitrum-one-rinkeby
    -ethUrl <Arbitrum RPC Url> # testnet: arbitrum rinkeby RPC url
  ```

6. Register your service URI and fee structure on Arbitrum using
   `Set orchestrator config`:

To receive work, you must register your service URI and fees so that gateways
can discover your orchestrator.

&gt; 6a. Select the following option using `livepeer_cli`:

        `13: Set orchestrator config`

&gt; 6b. Acquire some `arbETH` to pay for the transaction:

- Use the [Arbitrum bridge](https://bridge.arbitrum.io) to send Ethereum on
  Layer 1, to Arbitrum on Layer 2, over the appropriate (i.e. Mainnet or
  Rinkeby) network.

Once this is complete, you are all set to receive work, rewards, and fees on
Arbitrum.

**Note:** In the future, you'll be prompted to connect to the Livepeer Explorer
using Arbitrum, and all future rewards and fees will accrue to Arbitrum rather
than Ethereum.

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/monitor-metrics.mdx

---
title: Monitor Metrics
icon: monitor-waveform
---

This guide provides instructions on configuring metrics monitoring for
orchestrators that have been
[activated](/orchestrators/guides/get-started#activate) on the Livepeer network.

- Enable Metrics Monitoring
- Monitor with visualizations
  - Prometheus
  - Grafana
- Monitor with Docker

<Info>
  You can refer to [Prometheus
  Metrics](/references/go-livepeer/prometheus-metrics) to check what metrics are
  exposed.
</Info>

## Enabling Metrics Monitoring

You can enable metrics monitoring with `livepeer.exe` adding the `-monitor` flag
and additional parameters:

- `-monitor`: enables metric monitoring
- `-metricsPerStream`: groups performance metrics per stream
- `-metricsClientIP`: exposes client's IP in metrics

**For Example:**

Enable metrics monitoring with a combined orchestrator and transcoder:

```bash
livepeer \
    -orchestrator \
    -transcoder \
    -monitor
```

<Info>For the purpose of this example, other flags have been omitted.</Info>

## Monitoring With Prometheus and Grafana

Follow the instructions in this
[monitoring guide](https://forum.livepeer.org/t/guide-transcoder-monitoring-with-prometheus-grafana/1225)
to learn how metrics recorded by `livepeer` can be:

- Exported to [Prometheus](https://prometheus.io/), and
- Visualized in [Grafana](https://grafana.com/)

## Monitoring with Docker

You can use this
[Docker container](https://github.com/livepeer/livepeer-monitoring) to easily
start monitoring your orchestrator or transcoder. It bundles Prometheus,
Grafana, and a few starter Grafana dashboard templates.

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/o-t-split.mdx

---
title: Connect to Transcoders
icon: plug
---

In this guide we'll go over how to connect multiple transcoding processes to a
single orchestrator.

## Run a standalone orchestrator

```bash
livepeer \
    -network arbitrum-one-mainnet \
    -ethURL <ETH_URL> \
    -orchestrator \
    -orchSecret <ORCH_SECRET> \
    -pricePerUnit <PRICE_PER_UNIT> \
    -serviceAddr <SERVICE_ADDR>
```

- `-orchSecret` is used to specify a secret that transcoders can use to connect
  with the orchestrator. The secret can be provided in plaintext or via a file
  (recommended) i.e. `-orchSecret secret.txt`

## Run a standalone transcoder

The following instructions assume that the transcoder is run on a separate
machine from the orchestrator. These instructions can be used to connect as many
transcoders as you want to the orchestrator.

```bash
livepeer -transcoder \
	-nvidia <NVIDIA_GPU_IDs> \ # Only required for transcoding with Nvidia GPUs
	-orchSecret <ORCH_SECRET> \
	-orchAddr <SERVICE_ADDR>
```

- The value for `-orchSecret` should be the same as the value used for your
  orchestrator
- `-orchAddr` is used to specify the publicly accessible address that the
  orchestrator is receiving transcoder registration requests at

On startup, the transcoder will automatically run a test to confirm that it is
able to transcode using the specified GPUs. The transcoder will exit if this
test fails. If the test passes, you should see the following message in the log
output without any additional error messages following it indicating that your
transcoder successfully connected with the orchestrator:

```bash
Registering transcoder to my-orchestrator.com:443
```

When the orchestrator receives a connection from a transcoder, you will see a
message in the orchestrator logs that looks like:

```bash
Got a RegisterTranscoder request from transcoder=10.3.27.1 capacity=10
```

The `transcoder` field indicates the IP of the connecting transcoder and the
`capacity` field indicates the number of simultaneous transcoding jobs that the
transcoder can handle. Once the orchestrator has at least one transcoder
connected, it will be able to send transcoding jobs to the transcoder when it
receives a stream from a gateway.

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/set-pricing.mdx

---
title: Set Pricing
icon: tag
---

In this guide we'll go over how to set and configure pricing to charge for
transcoding advertised to gateways off-chain.

# Setting WEI Price

## Choose a Price

To charge for transcoding orchestrators set a price per pixel denominated in Wei
(1 ETH = 1e18 Wei), advertised to gateways off-chain.

To get support for setting a price that will allow you to receive work on the
network, contact us on our [Discord](https://discord.gg/livepeer) channel.

## Configure Automatic Price Adjustments

The default behavior of orchestrators is to automatically adjust their
advertised price per pixel based on the estimated overhead for redeeming a
ticket. The overhead for redeeming a ticket is the estimated transaction cost of
the redemption transaction divided by the face value of the ticket represented
as a percentage. For example, given a base price per pixel of 1000 wei:

- If the overhead is 1%, the advertised price would be 1010 wei
- If the overhead is 20%, the advertised price would be 1200 wei
- If the overhead is 50%, the advertised price is 1500 wei

The motivation for this automatic price adjustment mechanism is to allow
orchestrators to dynamically adjust their price to compensate for higher
overheads for ticket redemptions when gas prices are high.

Orchestrators can disable this mechanism and advertise a constant price by
setting the `-autoAdjustPrice=false` flag.

## Set a Price With `livepeer_cli`

You can set the base price per pixel using the `livepeer_cli`:

1. Run `livepeer_cli`

2. Enter the number corresponding to the `Set orchestrator config` option

3. You will get prompted to enter values for several fields.

<Info>
  If you only want to set the price, you can continue using the existing default
  values.
</Info>

4. You will get prompted for the price per pixel:

5. Set the number of pixels in a single unit of work you will charge for.

**For example:**

```bash
   Enter a transcoding base price in wei per pixels
   eg. 1 wei / 10 pixels = 0,1 wei per pixel
   Enter the number of pixels that make up a single unit (default: 1 pixel):
```

<Info>The Default setting `option (1)` is typically used.</Info>

6. Set the price (in wei) that you will charge per unit of work:

   ```bash
   Enter the price for 1 pixel in Wei (required):
   ```

7. To verify the price was updated, check the log from your node.

# Setting fiat-denominated price

With the release of go-livepeer version 0.8.0, we are introducing a feature to
allow specifying the transcoding price per pixel in USD. This is a
backward-compatible change, which still supports setting the price in Wei but
now gives the option of using custom currencies instead, with USD being the
default.

The feature works by integrating with a
[Chainlink Price Feed](https://docs.chain.link/data-feeds/price-feeds) to fetch
the quote of the given currency and periodically update the transcoding price on
the running node. This is meant to be performed both in Bs and Os, keeping the
price over the network consistent over time.

## Configuration

To set a price in USD, one just needs to add the `USD` suffix to the value
provided in the `-pricePerUnit` flag sent to the `livepeer` binary. If the
currency suffix is missing, it will default to Wei to keep
backward-compatibility.

Given the price per pixel in USD is going to be a really low number, the
recommendation is to also set the `-pixelsPerUnit` flag so a more human-friendly
number can be specified on the price per unit. The `-pixelsPerUnit` acts as a
denominator on the `-pricePerUnit` and the recommendation is to keep it constant
over time, updating only the price per unit as seen fit.

e.g.:

- To set a price of **$4.10 E -13**

```jsx
-pixelsPerUnit 1e12 \
-pricePerUnit 0.41USD
```

- To set a price of **$6.65 E -14**

```jsx
-pixelsPerUnit 1e12 \
-pricePerUnit 0.0665USD
```

Notice that the `-pixelsPerUnit` flag supports the exponential notation, so it's
easier to understand the value being set. The `-pricePerUnit` does not support
it though, so a standard decimal notation must be used. This is also an
incentive to use the `-pixelsPerUnit` value in order to keep the `-pricePerUnit`
as an easily readable value.

This feature is also supported by gateways, with the `-pixelsPerUnit` flag
staying the same, while the `-maxPricePerUnit` should be set instead for the max
price. The currency is specified in the same format.

### Advanced

The `livepeer` binary is automatically configured with the ETH/USD price feed in
the Arbitrum mainnet. If you are running the node on a different network or
would like to use a different currency to peg the price to, you should configure
the `-priceFeedAddr` with the address of the corresponding price feed. You can
search for existing price feed addresses on
[Chainlink website](https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1).

Notice that the price feed must have both `ETH` and your desired currency in the
quote pair. You should then specify the price per unit with the currency suffix
corresponding to the currency provided by the price feed.

e.g.

- To use `USD` as the price currency in Ethereum mainnet:

```jsx
-priceFeedAddr 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419 \
-pricePerUnit 1USD
```

- To use `BTC` as the price currency on Arbitrum mainnet:

```jsx
-priceFeedAddr 0xc5a90A6d7e4Af242dA238FFe279e9f2BA0c64B2e \
-pricePerUnit 1BTC
```

The `-pixelsPerUnit` flag is independent of this. Also keep in mind that while
custom currencies are supported, Livepeer Studio will be pegging their
`-maxPricePerPixel` to USD so the recommendation is to also keep the default USD
configuration on your node to stay in sync with the rest of the network.

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/set-session-limits.mdx

---
title: Set Session Limits
icon: wand-magic-sparkles
---

This guide provides instructions on setting session limits to manage transcoding
capacity. You will be able to maximize work received while also protecting
against performance degradation due to overload. Once you have completed the
benchmark transcoding via the `livepeer_bench` tool and the
[common output rendition configuration](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json)
`transcodingOptions.json` you stored during the benchmarking, you can work with
this guide to fine tune your configuration:

- Calculate session limits
- Evaluate hardware capacity
- Benchmark transcoding for a range of concurrent sessions
- Evaluate bandwidth
- Derive a session limit
- Set session limits

<Info>
  It is recommended you complete the steps in [benchmark
  transcoding](/orchestrators/guides/benchmark-transcoding) guide before
  proceeding.
</Info>

## Session Limits

The **default limit of concurrent sessions is set to 10**. When this limit is
exceeded, the orchestrator returns an error, `OrchestratorCapped`, to the
gateway and transcoders and they will stop receiving work from orchestrators.
The session limit should then be set depending on available hardware and
bandwidth.

## Calculating session limits

The session limit is an estimate and may require adjustments after running live
on the network.

The bandwidth and computational power needed to transcode a video stream varies
with the source video and requested output configuration.

Session limits are passed through the `-maxSessions` parameter to the node where
they should be set based on taking the minimum of:

- Transcoding Hardware, and
- Bandwidth

## Set Session Limits

The following steps require that incoming streams are configured with the common
web video streaming Adaptive Bitrate (ABR) ladder on the Livepeer network.
Session limits can be similarly calculated for a different ABR ladder.

1. Evaluate hardware

   The recommendation for determining a hardware level limit is to use the
   concurrent sessions value of the last log indicating that the real-time
   duration ratio `X` was less than or equal 0.8. This leaves a ~20% buffer for
   upload/download within real-time.

- You can use the following script with the `livepeer_bench` tool to benchmark
  transcoding for a range of concurrent sessions:

```bash
#!/bin/bash
for i in {1..20}
do
    ./livepeer_bench \
        -in bbb/source.m3u8 \
        -transcodingOptions transcodingOptions.json \
        -nvidia 0 \ # Only required for transcoding with Nvidia GPUs
        -concurrentSessions $i |& grep "Duration Ratio" >> bench.log
done
```

- Transcoding with multiple identical Nvidia GPUs:

  Benchmarking with a single GPU should suffice and then you can multiply the
  limit for a single GPU by the number of available GPUs. If you are transcoding
  multiple different Nvidia GPUs, you should benchmark each unique GPU and
  determine a limit that is specific to that GPU.

- Adjust the loop range (`{1..20}`) to reflect the maximum number of concurrent
  sessions you want to benchmark. If at 20 maximum concurrent sessions real-time
  duration is still below 1.0, you should increase the maximum number of
  concurrent sessions.

- View the final output in a file called `bench.log`.

**For Example:**

```bash
| * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 1
| * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 2
...
| * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 20
```

<Info>
  If you are transcoding with a CPU, you will likely want to lower the value of
  the maximum number of concurrent sessions (i.e. 5).
</Info>

2. Evaluate bandwidth

The most
[common output rendition configuration](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json)
found on the network is (assuming source is `1080p30fps`):

```bash
+------------------------+----------+
| Resolution & Fps       | Bitrate  |
+========================+==========+
| 1080p30fps             | 6000kbps |
+------------------------+----------+
| 720p<source>fps        | 3000kbps |
+------------------------+----------+
| 480p<source>fps        | 1600kbps |
+------------------------+----------+
| 360p<source>fps        | 800kbps  |
+------------------------+----------+
| 240p<source>fps        | 250kbps  |
+------------------------+----------+
```

A single stream requires an approximation of:

- _Download Bandwidth_ = **6 Mbps** Per Stream. This is about 6000 kbps for
  downloading the source rendition.

- _Upload Bandwidth_ = **5.6 Mbps** Per Stream. This is about 5600 kbps for
  uploading the output rendition.

- To estimate the number of streams you can process, divide the above from your
  network provider's limits.

**For example:**

A typical broadband connection with `upstream/downstream` speed of `100 Mbps`
should reliably be able to serve/process ~16 streams.

However, as not all streams' segments may be processed at the same time, you may
be able to extend this by an additional ~20%.

<Info>
  [Bandwidth requirements](/references/go-livepeer/bandwidth-requirements)
  provides further information about testing your available upload/download
  bandwidth.
</Info>

3. Derive a session limit based on hardware and bandwidth

Once you have calculated a hardware level limit and a bandwidth level limit, the
minimum of the two can be used as your session limit. This is set via the
`-maxSessions` flag.

Session management in orchestrators and transcoders is still constantly being
improved. Your mileage may vary with this approach; you may find that your
orchestrator or transcoder performance may be affected with a higher session
limit.

Further adjusting the session limit values after performing work on the network
may be necessary.

4. Set session limits

The `-maxSessions` flag is used to set session limits on both orchestrators and
transcoders.

**For Example:**

For a combined orchestrator and transcoder, set the session limit to 30:

```bash
livepeer \
    -orchestrator \
    -transcoder \
    -maxSessions 30
```

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/troubleshoot.mdx

---
title: Troubleshoot
icon: triangle-exclamation
---

This page contains troubleshooting advice for video miners and lists some of the
most common issues that a video miner might encounter.

## OrchestratorCapped error

This error means that your orchestrator has hit its session limit so it is not
longer accepting work from gateways. See the
[session limit guide](/orchestrators/guides/set-session-limits) for information
on setting the session limit.

## Cannot allocate memory error

If this error occurs on startup when using the `-nvidia` flag, the transcoding
test using the Nvidia GPUs likely failed because it hit the maximum number of
video encoding/decoding sessions supported on a single GPU. Different Nvidia
GPUs have different limits (if any) - more information can be found on
[this page](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)
and by searching for "nvenc nvdec session limit" online.

## insufficient funds for gas \* price + value error

This error means that the node attempted to submit a transaction, but its
account did not have enough ETH available for the transaction. You should add
more ETH to your account in order to submit the transaction.

## Transcode loop timed out and Segment loop timed out logs

These logs indicate that a session that was previously being used to transcode a
stream was cleaned up because no segments were received for awhile. These are
not errors and are expected to show up.

## MB rate > Level limit warning

This is a warning about the source video segment being transcoded (see this
[page](https://en.wikipedia.org/wiki/Advanced_Video_Coding#Levels) for more
technical details), but typically should not impact operation as long as
transcoding completes.

## Unable to transcode errors

These errors occur when a source video segment with certain properties that
prevent it from being transcoded. There are no actionable steps for an operator
in this scenario since the gateway is responsible for sending video segments
that are supported by the Livepeer network.

## My node is still calling the reward claims function and spending gas, even though I have set `reward` to false

Make sure to add `-reward=false` as an override in the launch command, even if
using a `.conf` file. Also make sure that if you have Orchestrator and
Transcoder processes running separately that all launch commands have `reward`
set to false. To be safe, you can also remove the `ethUrl` option from the
Transcoder process(es) to ensure that they are not performing any onchain
actions on behalf of your orchestrator if using the same wallet.

## TicketParams expired

This error indicates that the gateway sent a payment ticket with too old
parameters. This may be caused by the gateway's delay (between getting the last
orchestrator info message and sending the segment) or by the delay in polling
chain blocks (the expiration time is measured in L1 blocks). For more details
please check
[TicketParams expiration time](https://github.com/livepeer/go-livepeer/issues/1343).
There are no actionable steps for an operator, gateway will retry a request with
the updated ticket parameters.

## Error creating Ethereum account manager

This error means that Livepeer was not able to fetch your ETH account (or create
a new one). Livepeer stores ETH accounts in the `<datadir>/keystore/` directory
(by default `~/.lpData/<network>/keystore/`).

Please make sure that one of the files in that directory contains the account
you specified with the `-ethAcctAddr` parameter. If you used another `datadir`
(or different `network`) in the past, you may need to copy the your keystore
files.

Please also make sure that your `keystore` directory has correct file
permissions.

## Unsupported input pixel format

This error occurs when someone submits a stream with an unsupported pixel
format. There are no actionable steps, the video of this format cannot be
transcoded in Livepeer.

## Common Questions

**What does being 'publicly accessible' mean? Can I run a transcoder from
home?**

Orchestrators should be reachable by gateways via the public IP and port that is
set during registration. The only port that is required to be public is the one
that was set during registration (default 8935). Be aware that there are many
risks to running a public server. Only set up an orchestrator if you are
comfortable with managing these risks.

Orchestrators will not be able to serve the Livepeer network if they are behind
a NAT (eg, a home router). If this is the case, special accommodations must be
made for the transcoder, such as port forwarding or putting the orchestrator in
the DMZ. The only port that is required to be public is the one that was set
during the orchestrator registration step (default 8935). Be aware that there
are many risks to running a public server. Only set up an orchestrator if you
are comfortable with managing these risks.

**Can I run an orchestrator from home?**

Running an orchestrator at home likely means that you will be behind a NAT (i.e.
a home router). This is generally not recommended. But, if you do choose to do
so, special accommodations will need to be made for the orchestrator such as
port forwarding or putting the orchestrator in the DMZ.

Some orchestrators in the past have used
[hairpinning](https://en.wikipedia.org/wiki/Hairpinning) by:

- Adding a second rule to the SNAT chain like:

  ```bash
  13119   786268 DNAT       tcp  --  *      *       0.0.0.0/0            <EXTERNAL_IP>       tcp dpt:8935 to:10.0.0.10
     2      120 SNAT       tcp  --  *      *       10.0.0.10            10.0.0.10            to:<EXTERNAL_IP>
  ```

- Running a command like:

  ```bash
  iptables -t nat -A POSTROUTING -p tcp -s 10.0.0.10 -d 10.0.0.10 -j SNAT --to-source <EXTERNAL_IP>
  ```

**What is the service URI? Does this need to be an IP?**

The service registry acts as a discovery mechanism to allow gateways to look up
the addresses of orchestrators on the network. Orchestrators register their
service URI by storing it on the blockchain. During registration you are only
asked for your IP:port, but the URI stored on the blockchain in the form of .
Orchestrators are expected to provide a consistent and reliable service, so IPs
here should remain static. However, a host (DNS) name is also allowed for the
service URI to give some flexibility.

**What does this error mean? "Service address https://127.0.0.1:4433 did not
match discovered address https://127.1.5.10:8935; set the correct address in
livepeer_cli or use -serviceAddr"**

When starting up, the orchestrator checks if the current public IP matches the
IP that is stored on the blockchain. If there is a mismatch, there is a
possibility that your node is not publicly accessible. Override the locally
inferred IP address by setting `-serviceAddr IP:port` to what is stored on the
blockchain. Ensure your node is actually accessible at that address.

**How do I know if my node is transcoding?**

If you set the `-v 6` flag when starting `livepeer`, more verbose logs
indicating transcoding activity will be available. You can also setup
[metrics monitoring](/orchestrators/guides/monitor-metrics).

**How do I keep a record of my node's logs?**

By default, `livepeer` will only send logs to stdout so they can be shown in
your terminal. However, a tool such as
[tee](https://linuxize.com/post/linux-tee-command/) can be used to pipe the logs
to both stdout and a log file.

```bash
livepeer ... 2>&1 | tee livepeer.log
```

---

### /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v1/orchestrators/guides/vote.mdx

---
title: Vote on proposals
icon: check-to-slot
---

Follow the steps below to set and configure voting in governance polls with
`livepeer_cli`. You can do this without exporting keys from the machine on which
the orchestrator node is running.

## Voting With the `livepeer_cli`

Follow the steps herein to access and vote with the `livepeer_cli`:

1.  Find the contract address for the poll in the
    [Livepeer Explorer](https://explorer.livepeer.org/voting) page for the poll.

          <Frame>

    ![PollDetailView](/v1/images/poll.png)

          </Frame>

    The poll page displays the following message:

          <Frame>

    ![LivepeerCLIVoteCTA](/v1/images/vote-livepeer-cli.png)

          </Frame>

    Click the link, "Follow these instructions", to display the instructions for
    voting with `livepeer_cli`:

          <Frame>

    ![LivepeerCLIVoteInstructions](/v1/images/vote-livepeer-cli-instructions.png)

          </Frame>

    <br />
    <Info>
      It is important to note the poll contract address for upcoming steps.
    </Info>

2.  Run `livepeer_cli`

3.  Enter the number corresponding to the option to `Vote on a poll`

4.  Enter the contract address saved in step 1.:

    ```bash
    Enter the contract address for the poll you want to vote on - >
    ```

    You will be prompted with the following voting options:

    ```bash
    Identifier  Voting Options
    0     Yes
    1     No
    ```

5.  Choose and confirm your vote

**For example:**

```bash
Enter the ID of the option you want to vote for - > 0
Are you sure you want to vote "Yes" ? (y/n) - > y

success
```

6. Wait for the transaction to be confirmed. You should be able to view your
   node submitting the vote transaction.

**For example:**

```bash
I0422 03:30:44.191809   43457 backend.go:96]
******************************Eth Transaction******************************

Invoking transaction: "vote". Inputs: "_choiceID: 0"  Hash: "0xf6957c190f1f16fc2ca4a93846903eb435c5e08fa7f6f40b6e159aab6d74905f".

**************************************************************************
```

7. Once the vote transaction is confirmed, you will be able to see your vote
   reflected in the explorer poll page of the UI.

---
