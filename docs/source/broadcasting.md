# Broadcasting To A Livepeer Node

Broadcasting to Livepeer using existing broadcasting tools is
easy. After a Livepeer node is running, it exposes an RTMP interface
on port 1935. You can broadcast into Livepeer using this port.

### Install Livepeer

The following instructions assume that you have followed the [installation](installation.html) and [quickstart](quickstart.html) instructions.

### Deposit broadcasting funds

You will need to deposit funds (ETH) used to pay orchestrators on the network for transcoding video.

In `livepeer_cli`, select the following option:

```
1.  Invoke "deposit broadcasting funds" (ETH)
```

Upon selecting the option, you should be prompted to entire the amount of ETH to allocate for your deposit and reserve. Broadcasting funds are split into a deposit and a reserve. Deposit funds are used to pay any active orchestrator on the network. Reserve funds guarantee active orchestrators up to a fixed cap to ensure that orchestrators are paid fairly even if a broadcaster depletes its primary deposit. The distinction between the deposit and the reserve arises from the probabilistic micropayment protocol that broadcasters use to pay orchestrators - see [this blog post](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462) for more details. 

After answering the wizard's prompt, you should see a transaction submitted by your node. After the transaction confirms, you can see your updated deposit and reserve by refreshing the wizard.

### Withdraw broadcasing funds

When you want to withdraw your broadcasting funds you will need to wait a fixed number of rounds before gaining access to your funds. The first step for withdrawal is to request to unlock your funds.

In `livepeer_cli`, select the following option:

```
13. Invoke "unlock broadcasting funds"
```

Upon selecting the option, you should be prompted to confirm that you would like to request to unlock your funds. After answering the wizard's prompt, you should see a transaction submitted by your node. After the transaction confirms, you will be able to withdraw your funds at the withdraw round that was specified in the prompt.

If you change your mind and do no want to withdraw your funds, you can cancel your unlock request in `livepeer_cli` by selecting the following option:

```
14. Invoke "cancel unlock of broadcasting funds"
```

Upon selecting the option, you should be prompted to confirm that you would like to cancel your request to unlock your funds. After answering the wizard's prompt, you should see a transaction submitted by your node. After the transaction confirms, your unlock request will be cancelled. Another way to cancel an unlock request is to deposit more funds.

If you want to withdraw your funds, in `livepeer_cli` select the following option:

```
15. Invoke "withdraw broadcasting funds"
```

If your unlock is not complete (i.e. your withdraw round is in the future), you will not be able to withdraw. Once your unlock is complete (i.e. your withdraw round is the current round or in the past), you should be prompted to confirm that you would like to withdraw your funds. After answering the wizard's prompt, you should see a transaction submitted by your node. After the transaction confirms, your withdrawal will be complete and can see your empty deposit and reserve by refreshing the wizard.

### Configuring broadcasting preferences

You can configure the following broadcasting preferences using the wizard:

- The maximum price per pixel you are willing to pay. See the orchestrator section on [configuring payment parameters](#configuring-payment-parameters) for more details on how pricing per pixel works
- The set of video profiles that you want your input video to be transcoded into

In `livepeer_cli`, select the following option:

```
16. Set broadcast config
```

First, you will set the maximum transcoding price. You will be prompted for a maximum price relative to certain number of pixels. For example, you can set your maximum price to 0.1 wei per pixel if you set the maximum price to 1 wei for 10 pixels. The default number of pixels will be 1.

Then, you will pick a set of video profiles that you would like your input video to be transcoded to. The set of video profiles presented in the wizard correspond to the [standard video profiles](https://github.com/livepeer/lpms/blob/master/ffmpeg/videoprofile.go) currently supported by the node. Future releases will offer greater flexibility around customizing video profiles to use for transcoding.

### Broadcasting video

See the [broadcasting guide](https://livepeer.readthedocs.io/en/latest/broadcasting.html) for information on sending video into your broadcaster node and viewing the output transcoded video. In order to see more detailed logs, run your broadcaster with `-v 6` to enable verbose logging.

After receiving a stream, your broadcaster will try to connect to a set of orchestrators (ether based on the registered orchestrators on-chain or based on the orchestrators specified using the `-orchAddr` flag). Your broadcaster might reject certain orchestrators based on their required price or ticket parameters. 

If you observe the `ticket faceValue higher than max faceValue` error in the broadcaster's logs, you can try:

1. Running the broadcaster with `-depositMultiplier 1`. The default value is 1000 (which is pretty high) meaning that the broadcaster will not be willing to use a ticket `faceValue` that exceeds the broadcaster's deposit divided by 1000. So, if the value is 1 then the broadcaster will be willing to use a ticket `faceValue` that equals the broadcaster's deposit. While this might not be desirable in other circumstances, it can be fine for testing purposes
2. If option 1 does not work, then the broadcaster's deposit is less than the `faceValue` required by an orchestrator - you should try depositing more ETH

If you observe the `ticket EV higher than max EV` error in the broadcaster's logs, you can try running the broadcaster with `-maxTicketEV <MAX_TICKET_EV>` where `MAX_TICKET_EV` is the maximum expected value (denominated in wei) for tickets sent by the broadcaster. The default value is 10 gwei so you could try using a higher value.

### Transcoding verification (experimental)

The broadcaster can verify transcoded results received from orchestrators by sending verification requests to a verifier that runs alongside the broadcaster. The current default verifier implementation uses a machine learning classifier - refer to the [verifier documentation](https://github.com/livepeer/verification-classifier) for more details. 

Transcoding verification is currently experimental and needs to be explicitly enabled by the user. R&D to improve its accuracy (in classifying correctly vs. incorrectly transcoded video) and performance (in terms of run time and computation cost) is underway, but in the short term, expect to see higher computational costs and transcoding latency after enabling verification for a broadcaster.

In order to enable transcoding verification, first make sure that you have [Docker](https://docs.docker.com/install/) installed and setup the verifier.

```
git clone https://github.com/livepeer/verification-classifier
cd verification-classifier
./launch_api.sh
```

`./launch_api.sh` will start a verifier server running within a Docker container that accepts verification requests at the `/verify` endpoint. You should see log output that indicates that the verifier is listening on port 5000:

```
Sending build context to Docker daemon  5.904MB
Step 1/4 : FROM verifier:v1
 ---> fe5d1924dab5
Step 2/4 : COPY /api ./scripts
 ---> Using cache
 ---> bc21bfb203ef
Step 3/4 : ENTRYPOINT ["python"]
 ---> Using cache
 ---> 816b804bc7e7
Step 4/4 : CMD ["scripts/api.py"]
 ---> Using cache
 ---> 548f58689798
Successfully built 548f58689798
Successfully tagged verifier-api:v1
Verifier server listening in port 5000
```

If you are running the verifier on the same machine as the broadcaster, then you can run the below command in order to connect the broadcaster with the verifier:

```
livepeer -network rinkeby -broadcaster -verifierUrl http://localhost:5000/verify -verifierPath ~/verification-classifier/stream
```

The broadcaster logs should indicate the address of the verifier being used:

```
Using the Epic Labs classifier for verification at http://localhost:5000/verify
```

The value of `-verifierUrl` should be the address (`http://<IP>:<port>/verify`) that the verifier is receiving requests at. In this case, since the verifier and broadcaster are on the same machine all requests can be received on `localhost`.

The value of `-verifierPath` should be the path to the volume that the verifier will read segment data from. By default, the verifier will read segment data from a volume mounted on the `/stream` directory within the `verification-classifier` project. So, if you started the verifier from within `~/verification-classifier` the value for `-verifierPath` should be `~/verification-classifier/stream`.

If you are running the verifier on a separate machine from the broadcaster, you will need to make sure that the verifier endpoint is accessible by the broadcaster and that the verifier's volume is accessible over the network.

One way to make the verifier endpoint accessible to the broadcaster without making it publicly accessible is to create an SSH tunnel from the broadcaster machine to the verifier machine.

Create an SSH tunnel with the following command run from the broadcaster machine:

```
ssh -N -L 5000:127.0.0.1:5000 -i <SSH_KEY_FILE> <USER>@<HOSTNAME>
```

Note that the command will not output anything if it is successfuly run.

One way to make the verifier's volume accessible over the network is to mount the verifier's volume on the broadcaster machine over an SSH connection using [sshfs](https://github.com/libfuse/sshfs).

Mount the verifier's volume on the broadcaster machine by running the following command on the broadcaster machine:

```
sshfs -o IdentityFile=<SSH_KEY_FILE> <USER>@<HOSTNAME>:<FOLDER_ON_VERIFIER> <FOLDER_ON_BROADCASTER>
```

After the SSH tunnel is setup and the remote volume is mounted, run the following command to start the broadcaster:

```
livepeer -network rinkeby -broadcaster -verifierUrl http://localhost:5000/verify -verifierPath <FOLDER_ON_BROADCASTER>
```

The broadcaster also supports sharing segment data with a verifier using external cloud storage providers such as Amazon's S3 or Google's GCS. Documentation on using external cloud storage providers will be added in the future.

## Running an Ethereum node

By default `livepeer` will use Infura as the ETH RPC provider. If you would like to run your own ETH node you can use `geth` (the Rinkeby testnet is only supported by `geth`) which can be installed using the instructions on the [installing geth page](https://geth.ethereum.org/docs/install-and-build/installing-geth). 

Run `geth`:

```
$ geth -rinkeby -rpc -rpcapi eth,net,web3
```

If `geth` is running on a different machine than `livepeer` you will have to specify the `-rpcaddr` flag to indicate the interface to listen on.

Wait until `geth` is fully synced with the latest block on the Rinkeby testnet. You can check if `geth` is done syncing by using the Geth Javascript Console:

```
$ geth attach http://localhost:8545
Welcome to the Geth JavaScript console!

instance: Geth/v1.9.0-stable-52f24617/linux-amd64/go1.12.7
coinbase: 0x0161e041aad467a890839d5b08b138c1e6373072
at block: 583 (Wed, 23 Oct 2019 17:41:00 EDT)
 modules: debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> eth.syncing
false
```

In order to connect to your own ETH node, you will need to set the `-ethUrl` flag on your `livepeer` node to the ETH node's RPC URL.

For example, you could use the following command to connect an orchestrator to an ETH node running at `localhost:8545`.

```
$ livepeer -network rinkeby -orchestrator -pricePerUnit 1 -ethUrl http://localhost:8545
```

## Migrating to Streamflow

If you are upgrading from a go-livepeer < v0.5.3 you do not need to take any additional action - the node will create a fresh DB that is compatible with the changes included in the Streamflow protocol upgrade.

## Broadcasting To A Local Node Using OBS

Start by reading our [step by step guide](https://github.com/livepeer/wiki/wiki/Blueprint:-set-up-a-broadcasting-node-using-Livepeer-and-OBS)

It is far more convenient to broadcast using existing tools that have
features for screen capture, composites, overlays, multiple video and
audio sources, etc. One such tool is
[OBS](https://obsproject.com/). To use OBS you have to change two
settings:

* Settings -> Stream -> URL. Set it as `rtmp://localhost:1935`
* Settings -> Output -> Output Mode. Set it to Advanced. Ensure the following settings are enabled:
  * Encoder: x264
  * Rate Control: CBR
  * Keyframe Interval: 4
* Start streaming as usual.

If the broadcast is successful, you should see a log in the terminal like:
```

Video Created With ManifestID: 710ed610

```

If you have used `-currentManifest` to start your Livepeer node, you can verify that the broadcast is successful by running `curl http://localhost:8935/stream/current.m3u8`.  It should return a valid HLS playlist like:

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:PROGRAM-ID=0,BANDWIDTH=4000000,RESOLUTION=1120x700
710ed610/source.m3u8
```

## Playing The Local Video Stream

Make sure you have used `-currentManifest` to start your Livepeer node. You can watch your stream via:

* Playing the stream through the [Livepeer media player](http://media.livepeer.org). Use `http://localhost:8935/stream/current.m3u8` as the URL for the video stream.
* Playing the stream using `ffplay`

```
$ ffplay http://localhost:8935/stream/current.m3u8
```


## Broadcasting To A Local Node Using FFMPEG

To broadcast using ffmpeg you can try the following command:

For Mac:
```
ffmpeg -f avfoundation -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 1000k -x264-params keyint=60:min-keyint=60 -acodec aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/movie
```

For Linux:
```
ffmpeg -f dshow -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 1000k -x264-params keyint=60:min-keyint=60 -acodec aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/movie
```

You can now verify if the broadcast is successful.

## Broadcasting To A Remote Node From Mobile

There is not currently a natively Livepeer aware mobile app, but much
like [using OBS](#broadcasting-using-obs), as described above, you can
use any existing mobile broadcasting tool such as ManyCam on iOS or
RTMPCamera on Android to broadcast into Livepeer.

Instead of setting the rtmp output to `localhost:1935`, you'll want to
set it to a remote Livepeer node that you are running on a
server. Replace `localhost` with the IP address of the server.

Make sure the node is started with `-currentManifest` to make this process easier.

## Reaching Many Viewers at Scale

If you would like to take your output video and make it available via a 
conventional CDN, then you have the option to do so.

* Run a Livepeer node on a server, and expose ports `8935 and 1935`.
* Boot up the livepeer node with the `-rtmpAddr 0.0.0.0` and `-httpAddr 0.0.0.0` flags
* Configure your CDN to cache video content running at
`http://hostname:8935/stream/{streamID}.m3u8`

Now any requests that come into your site or DApp for video streaming
through Livepeer will pull the video from the network, but will be
served off of a CDN. In the future, we would like to replace this
option with the p2p network that Livepeer forms around a stream.

## FAQ
Check out our Broadcasting Forum for [frequently asked questions](https://forum.livepeer.org/c/using-livepeer-for-broadcasting)

If you have any questions, reach out to Chris Hobcroft on our [community chat](https://discord.gg/RR4kFAh)
