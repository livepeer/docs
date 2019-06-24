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

[Transcoder Election Dashboard (currently Rinkeby testnet)](https://explorer.livepeer.org/transcoders)

[Transcoder campaign thread](https://forum.livepeer.org/c/transcoders/transcoder-campaign)

[Livepeer Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md)

[Transcoder chat](https://discord.gg/cBfD23u)


## Becoming a Transcoder

We'll walk through the steps of becoming a transcoder on the test
network. Start livepeer with the `--transcoder` flag:

```
$ livepeer --rinkeby --transcoder
```

Run `livepeer_cli`, and make sure you have test ETH and test LPT as
described in [Getting Started](getting_started.html). 

```
$ livepeer_cli
```

You should see the Transcoder Status as "Not Registered".

Pick "Become a transcoder" in the wizard. Make sure to choose "bond to
yourself".

At this point the interface will ask you to set 3 values if you have
not set them already:

* `PricePerSegment` - How many base unit Livepeer Token (LPT) will you
  charge to transcode a 4 second segment of video? Keep in mind that 1 LPT ==
  10^18 base unit LPT. Example 1000.

* `FeeShare` - How much [delegators](bonding_and_delegation.html) receive of the PricePerSegment. For example, if FeeShare is 25%, and if you as a transcoder were to charge 100WEI in fees per segment, you would pay 25WEI to the delegators and keep 75WEI.

* `BlockRewardCut` - All [delegators](bonding_and_delegation.html) are
  entitled to their share of newly minted inflationary Livepeer
  Token. Set the cut as a percentage that you will take from
  delegators who delegate towards you in exchange for doing the work
  of performing this valuable service of transcoding
  reliably. Example: 3%.
  
* `Public IP:Port` - Transcoders must be publicly accessible at the IP:port
   in order to receive streams from broadcasters.

If Successful, you should see the Transcoder Status change to "Registered"

Wait for the next round to start, and your transcoder will become
active. At this point, the Livepeer node should handle everything for
you. The important thing is that you keep the node running.

## FAQ
**After running the transcoder for a while, I get an error that says "too many open files".**

- This means you have to increase the default file limit. This is a requirement for running an IPFS node. Since Livepeer transcoders run an internal IPFS node, we also have that requirement. The default file limit is 1024, increasing it to something like 4096 should be good. See [this forum post](https://forum.livepeer.org/t/increase-file-limit-as-a-transcoder/170) for more details.

**I get a lot of error messages saying things like "Error with x:EOF".  And a lot of times, the transcoder doesn't do anything when it's suppose to take some action (like call `reward`, do transcoding jobs, etc).**

- This is most likely because the connection between the Livepeer node and the Ethereum network is flaky.  It is recommended to run a local `Geth` or `Parity` node when running a Livepeer transcoder.  If you have a local `Geth` or `Parity` running, you can use the `--ethIpcPath` flag to specify the local IPC file location, which is a much more stable way to connect to the Ethereum network.

**I get an error that looks something like "failed to estimate gas needed: gas required exceeds allowance or always failing transaction".**

- This is because the gas estimator is giving incorrect estimates.  To fix it, you can manually pass in a gas limit using `-gasLimit`.  For example, `$ livepeer -transcoder -gasLimit 400000`.

**What does being 'publicly accessible' mean? Can I run a transcoder from home?**

- The transcoder should be reachable by broadcasters via the public IP and port that is set during transcoder configuration. Transcoders will not be able to serve the Livepeer network if they are behind a NAT (eg, a home router). If this is the case, special accommodations must be made for the transcoder, such as port forwarding or putting the the transcoder in the DMZ. The only port that is required to be public is the one that was set during the transcoder registration step (default 8935). Be aware that there are many risks to running a public server. Only set up a transcoder if you are comfortable with managing these risks.

**What is the Service URI? Does this need to be an IP?**

The Service Registry acts as a discovery mechanism to allow broadcasters to look up the addresses of transcoders on the network. Transcoders register their Service URI at configuration time; this is submitted to the blockchain as a standalone transaction. While the configuration tool only asks for your IP:port, the URI stored on the blockchain in the form of `https://IP:port`. Transcoders are expected to provide a consistent and reliable service, so IPs here *should* remain static. However, a host (DNS) name is also allowed for the service URI to give transcoders some flexibility.

**What does this error mean? "Service address https://127.0.0.1:4433 did not match discovered address https://127.1.5.10:8935; set the correct address in livepeer_cli or use -serviceAddr"**

- When starting up, the transcoder checks if the current public IP matches the IP that is stored on the blockchain. If there is a mismatch, there is a possibility that your node is not publicly accessible. Override the locally inferred IP address by setting `-serviceAddr IP:port` to what is on the blockchain. Ensure your node is actually accessible at that address.

TODO: These documents could be expanded with far more information
about the transactions that a Livepeer Transcoder has to submit on a
regular basis to avoid being penalized and to earn their rewards and fees.
