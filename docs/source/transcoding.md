# Transcoding

Transcoding is the process of taking an input video in one format and
bitrate, and converting it into many formats and bitrates to make it
playable on the majority of devices on the planet at any connection
speed.

In The Livepeer network, nodes who play the role of transcoder,
perform this very important function, and as a result it's important
that they have high bandwidth connections, sufficient hardware, and
reliable devOps practices. These nodes are delegated towards and
elected to perform this role, and they are rewarded with the ability
to earn fees from the network.

Quicklinks:

[Transcoder Megathread on Forum](https://forum.livepeer.org/t/transcoder-megathread-start-here-to-learn-about-playing-the-role-of-transcoder-on-livepeer/190)

[Livepeer Explorer](https://explorer.livepeer.org/transcoders)

[Transcoder campaign thread](https://forum.livepeer.org/c/transcoders/transcoder-campaign)

[Livepeer Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md)

[Transcoder chat](https://discord.gg/cBfD23u)

## Activation

In order to start transcoding video on the network and earning fees, your orchestrator node must be active.

An orchestrator (identified by its ETH account address) is active in a round if:

- It is registered on-chain. Registration consists of staking any amount of LPT and self-delegating. Anyone can register an orchestrator on-chain
- It is in the top 100 orchestrators with the most stake 

The active orchestrator set is locked in at the beginning of each round. Any staking activity that occurs during a round will impact membership of the active set in the following round. So, if an orchestrator accumulates stake such that it is in the top 100 orchestrators with the most stake it will join the active set in the next round. If an orchestrator previously was in the top 100 orchestrators with the most stake, but no longer is in the top 100, it will exit the active set in the next round.

You can register an orchestrator and attempt to join the active set in the next round by selecting the following option in `livepeer_cli`:

```
13. Invoke multi-step "become an orchestrator"
```

Upon selecting the option, you should be prompted to:

- Set a `rewardCut` which is the percentage of inflationary LPT rewards that you will keep (the rest will be shared with your delegators)
- Set a `feeShare` which is the percentage of ETH transcoding fees that you will share with your delegators (the rest you will keep)
- Set a `pixelsPerUnit` which is the number of pixels you define to be in a unit, which will form the basis for your charging.
- Set a `pricePerUnit` which is the price that you charge per unit of transcoding (whole number, denominated in wei). See the [configuring payment parameters](#configuring-payment-parameters) for more details on pricing per pixel.
- Set an amount of LPT to stake and self-delegate
- Set a `serviceURI` which is the public accessible IP and port that broadcasters can send requests and video to be transcoded
    - The `serviceURI` is stored on-chain in the form `https://IP:port` (when registering you will just be asked for the IP and port). The IP should remain static since orchestrators are expected to provide consistent and reliable service, but a host (DNS) name can also be used for the `serviceURI` which provides orchestrators some flexibility. Orchestrators will not be able to serve the network if they are behind a NAT (i.e. a home router). If an orchestrator is behind a NAT, you will need to make special accomodations such as enabling port forwarding or putting the orchestrator in the DMZ. Be aware that there are many risks to running a public server. You should only run an orchestrator if you are comfortable managing these risks
    - The node will check if the current public IP matches the IP stored on-chain - if there is a mismatch, then your node might not be publicly accessible. You can override the inferred public IP by starting the node with the `-serviceAddr` and using the address stored on-chain, but you should make sure that your node is actually accessible using that address 

After answering the wizard's prompt, you should see a few transactions submitted by your node. After the transactions confirm, you can see your orchestrator's registration status, stake, commission rates and pricing information by refreshing the wizard. If your orchestrator is in the top 100, it will join the active set at the beginning of the next round.

## Testing your transcoding setup 

You can test your orchestrator setup by setting up your own broadcaster and routing the broadcaster's requests directly to your orchestrator. Your orchestrator must be active before you can test the full transcoding/payment workflow - see the [activation section](#activation) for details on how to active your orchestrator. 

First, make sure to turn on verbose logging on your orchestrator (transcoding/payment related logs will not be shown with the default logging level):

```
$ livepeer -network rinkeby -orchestrator -transcoder -pricePerUnit 1 -v 99
```

Start a broadcaster that will connect directly to your orchestrator:

```
$ livepeer -network rinkeby -broadcaster -orchAddr <ORCH_SERVICE_URI>
```

`<ORCH_SERVICE_URI>` should be the publicly accessible `serviceURI` that your orchestrator registered on-chain.

Follow the steps in the [broadcasting](#broadcasting) section to deposit funds, configure broadcasting preferences and stream video into your broadcaster.

Look at the log output on your **orchestrator** node, and you should see your orchestrator start to transcode the incoming video. The broadcaster node will also receive the transcoded output back from the orchestrator and you can view your stream and each rendition in any web based or command line video player.

You can also test that your orchestrator is able to properly redeem [winning tickets](#configuring-payment-parameters) received from your broadcaster. Typically, the frequency of winning tickets in terms of clock time would be dynamically determined by the orchestrator based on the desired ticket expected value and price per pixel (these parameters are set by the orchestrator) as well as the current projected gas price required to redeem winning tickets and the amount/type of video that the orchestrator is transcoding. However, in this test scenario, since you are operating both the orchestrator and broadcaster, you can control all of the parameters mentioned to target a specific frequency of winning tickets.

First, check your orchestrator's logs to see the projected gas price for redeeming tickets (should see that the current gas price cached at a regular interval). Next, [select the renditions](#configuring-broadcasting-preferences) to request for encoding. Now, run the [PM calculator script](https://github.com/livepeer/pm-params-calculator) using the following command:

```
$ python3 calc.py -t
```

You should be prompted for the desired ticket expected value, the projected gas price for redeeming tickets, the desired time (denominated in hours) for receiving a winning ticket and the set of renditions that will be encoded. After answering all of the prompts, the script should output the price per pixel that your orchestrator should set in order to receive a winning ticket in the desired time (this is just an approximation - if the desired time is 1 hour you will not necessarily receive a winning ticket exactly in 1 hour, but rather in 1 hour on average so the time elapsed might be more or less than 1 hour in practice).

Restart your orchestrator with the values used in the script and the price per pixel outputted by the script:

```
$ livepeer -network rinkeby -orchestrator -transcoder -ticketEV <TICKET_EXPECTED_VALUE> -pricePerUnit <PRICE_PER_PIXEL> -v 99
```

Start streaming into your broadcaster and monitor the orchestrator's logs for a `redeemWinningTicket` log. Once this log is observed, you can use `livepeer_cli` and verify that the `Pending Fees` field in the wizard increased.

See the section on [configuring payment parameters](#configuring-payment-parameters) for a more detailed walkthrough of the payment parameter configuration process.

## Configuring payment parameters

The Streamflow protocol upgrade introduces two main changes to the transcoding payment flow:

- A [probabilistic micropayment](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462) protocol. Broadcasters send lottery tickets to orchestrators in exchange for transcoded results. Each lottery ticket is defined with a `faceValue`, the payout to the orchestrator if the ticket wins, and a `winProb`, the probability that the ticket will win. Each ticket is treated as a micropayment worth the expected value of the ticket (calculated as `faceValue * winProb`). Orchestrators will redeem winning tickets on-chain to receive the `faceValue` of tickets.
- A payment accounting protocol that meters the resources consumed by an orchestrator during transcoding using pixels. Orchestrators define a price per pixel (denominated in wei) which is the amount an orchestrator expects to be paid per pixel transcoded. The advertised price is used by broadcasters to filter the eligible orchestrators for selection (the default broadcaster implementation currently filters out orchestrators that advertise a price that exceeds the broadcaster's own max price). The video profiles requested by a broadcaster will impact the number of pixels that need to be transcoded by the orchestrator for each video segment. The more costly in terms of pixels it is to transcode a segment, the more tickets a broadcaster will need to send to compensate the orchestrator

An orchestrator can set its price per pixel by setting its price per unit, the amount of wei to charge for each unit of work, and its pixels per unit, the number of pixels that constitute a single unit of work. An orchestrator can set its price per pixel to be fractional wei by setting the number of pixels per unit to be greater than 1. The price per pixel can be set via:

- The `-pricePerUnit` and `-pixelsPerUnit` flags when starting the node
- The `livepeer_cli` wizard by selecting the set orchestrator config option

Note: At the moment, an orchestrator will only count the number of pixels *encoded*, but not the number of pixels *decoded* during transcoding. Metering of pixels decoded will be added in a future release.

An orchestrator can set its desired ticket expected value using the `-ticketEV` flag when starting the node.

While it is running, an orchestrator will monitor the expected gas price required to confirm a transaction on-chain. Using this gas price and the desired ticket expected value the orchestrator will dynamically set the `faceValue` and `winProb` to be used for tickets to target a 1% transaction cost overhead when a winning ticket is redeemed (1% of the `faceValue` of a winning ticket covers the cost of the on-chain transaction).

The following [script](https://github.com/livepeer/pm-params-calculator) can use an orchestrator's ticket expected value, price per pixel, a gas price for redeeming winning tickets and set of video profiles to be encoded to estimate:

- The value received per hour (in terms of ticket expected value)
- The frequency of winning tickets (in terms of hours)

Find below an example of using the script to project the value received per hour and frequency of winning tickets when transcoding 10 streams into 240p, 360p and 720p renditions:

```
➜  pm-params-calculator git:(master) python3 calc.py -f
DEFAULTS
---------
Ticket redemption gas cost: 100000
Transaction cost overhead: 0.01


Enter the desired ticket expected value (gwei): 1000


Enter the gas price (gwei) to use for ticket redemption transactions: 5
Ticket redemption gas price: 5.0 gwei


Transaction cost to redeem a ticket: 0.0005000000 ether ($0.1000000000)
Ticket face value: 0.0500000000 ether ($10.0000000000)
Ticket winning probability: 0.000020000000000
1 out of 49999 tickets will win


Enter the price per pixel (wei) to charge: 1000
Price per pixel: 1000 wei


Would you like to add a rendition to be encoded? (y/n): y
Enter the output width: 426
Enter the output height: 240
Enter the output FPS (frames per second): 30
Enter the number of streams of this renditions: 10
Would you like to add a rendition to be encoded? (y/n): y
Enter the output width: 640
Enter the output height: 360
Enter the output FPS (frames per second): 30
Enter the number of streams of this renditions: 10
Would you like to add a rendition to be encoded? (y/n): y
Enter the output width: 1280
Enter the output height: 720
Enter the output FPS (frames per second): 30
Enter the number of streams of this renditions: 10
Would you like to add a rendition to be encoded? (y/n): n


Given the specified renditions you will:
Encode 1354579200000.0 pixels per hour
Receive 1354 tickets per hour
Receive 0.0013540000 ether ($0.2708000000) (in terms of ticket expected value) per hour
Receive 1 winning ticket every 36.92688330871492 hours
```

In the above example, if an orchestrator transcodes 10 streams into 240p, 360p and 720p renditions, sets the ticket EV to 1000 gwei, redeems winning tickets on-chain using a gas price of 5 gwei and sets the price per pixel to 1000 wei then the orchestrator will receive approximately .001354 ETH of value per hour and 1 winning ticket every ~36.929 hours.

The script can also be used to calculate the price per pixel needed to target a desired frequency of winning tickets (in terms of hours) which can be useful for testing that your orchestrator can properly redeem winning tickets.

```
➜  pm-params-calculator git:(master) python3 calc.py -t
DEFAULTS
---------
Ticket redemption gas cost: 100000
Transaction cost overhead: 0.01


Enter the desired ticket expected value (gwei): 1000
Ticket expected value: 1000.0 gwei


Enter the gas price (gwei) to use for ticket redemption transactions: 5
Ticket redemption gas price: 5.0 gwei


Transaction cost to redeem a ticket: 0.0005000000 ether ($0.1000000000)
Ticket face value: 0.0500000000 ether ($10.0000000000)
Ticket winning probability: 0.000020000000000
1 out of 49999 tickets will win


Enter the desired number of hours (i.e. 1, .5, etc.) until receiving a winning ticket: 1


Would you like to add a rendition to be encoded? (y/n): y
Enter the output width: 426
Enter the output height: 240
Enter the output FPS (frames per second): 30
Enter the number of streams of this renditions: 10
Would you like to add a rendition to be encoded? (y/n): y
Enter the output width: 640
Enter the output height: 360
Enter the output FPS (frames per second): 30
Enter the number of streams of this renditions: 10
Would you like to add a rendition to be encoded? (y/n): y
Enter the output width: 1280
Enter the output height: 720
Enter the output FPS (frames per second): 30
Enter the number of streams of this renditions: 10
Would you like to add a rendition to be encoded? (y/n): n


Given the specified renditions you will and a target of 1 winning ticket every 1.0 hours you will:
Need to charge 36911.09386590315 wei per pixel
Encode 1354579200000.0 pixels per hour
Receive 49999.0 tickets per hour
Receive 0.0499990000 ether ($9.9998000000) (in terms of ticket expected value) per hour
```

In the above example, if an orchestrator transcodes 10 streams into 240p, 360p and 720p renditions, sets the ticket EV to 1000 gwei, redeems winning tickets on-chain using a gas price of 5 gwei and targets 1 winning ticket every hour then the orchestrator should set the price per pixel to 36911.09386590315 wei.

In practice, the price set by orchestrators will likely also be influenced by the market rate for transcoding on the network and an orchestrator's own infrastructure cost. This information can be surfaced by tools that will be built in the future.

## Scaling transcoding

The easiest way to setup an orchestrator to transcode video is to have the orchestrator perform solo transcoding by passing in both the `-orchestrator` and `-transcoder` flags when running `livepeer`. However, if you want to scale out your transcoding operation to support many concurrent streams, you will want to enable split transcoding.

Split transcoding consists of running many individual transcoder nodes (usually on separate remote machines) that connect to your orchestrator. When your orchestrator receives video from a broadcaster, it will then distribute the incoming segments to the invidual transcoders instead of transcoding the video on its own. An orchestrator can increase its capacity and scale horizontally by adding more transcoders to its backend.

In order to enable split transcoding, you should first run an orchestrator with solo transcoding turned off:

```
$ livepeer -network rinkeby -orchestrator -pricePerUnit 1 -orchSecret <ORCH_SECRET>
```

`<ORCH_SECRET>` is a secret defined by the orchestrator that is used to authenticate requests from transcoders. The secret should be shared with all transcoders to be attached to the orchestrator.

Next, you should attach a transcoder to your orchestrator:

```
$ livepeer -transcoder -orchAddr <ORCH_SERVICE_URI> -orchSecret <ORCH_SECRET>
```

`<ORCH_SECRET>` should be the secret defined by your orchestrator. `<ORCH_SERVICE_URI>` should be the publicly accessible `serviceURI` that your orchestrator registered on-chain.

You can run the above command on any number of machines that you would like to dedicate to transcoding.

## GPU transcoding

When you setup split transcoding for your orchestrator, you can run individual transcoders on not only CPUs, but GPUs as well. The GPUs that transcoders run on can be dedicated purely to transcoding or can also be mining cryptocurrencies simultaneously. See [this guide](https://github.com/mk-livepeer/bot-miner-setup) for instructions on how to setup transcoders on GPUs.

## FAQ
**What does being 'publicly accessible' mean? Can I run a transcoder from home?**

- The transcoder should be reachable by broadcasters via the public IP and port that is set during transcoder configuration. Transcoders will not be able to serve the Livepeer network if they are behind a NAT (eg, a home router). If this is the case, special accommodations must be made for the transcoder, such as port forwarding or putting the the transcoder in the DMZ. The only port that is required to be public is the one that was set during the transcoder registration step (default 8935). Be aware that there are many risks to running a public server. Only set up a transcoder if you are comfortable with managing these risks.

**What is the Service URI? Does this need to be an IP?**

The Service Registry acts as a discovery mechanism to allow broadcasters to look up the addresses of transcoders on the network. Transcoders register their Service URI at configuration time; this is submitted to the blockchain as a standalone transaction. While the configuration tool only asks for your IP:port, the URI stored on the blockchain in the form of `https://IP:port`. Transcoders are expected to provide a consistent and reliable service, so IPs here *should* remain static. However, a host (DNS) name is also allowed for the service URI to give transcoders some flexibility.

**What does this error mean? "Service address https://127.0.0.1:4433 did not match discovered address https://127.1.5.10:8935; set the correct address in livepeer_cli or use -serviceAddr"**

- When starting up, the transcoder checks if the current public IP matches the IP that is stored on the blockchain. If there is a mismatch, there is a possibility that your node is not publicly accessible. Override the locally inferred IP address by setting `-serviceAddr IP:port` to what is on the blockchain. Ensure your node is actually accessible at that address.

TODO: These documents could be expanded with far more information
about the transactions that a Livepeer Transcoder has to submit on a
regular basis to avoid being penalized and to earn their rewards and fees.
