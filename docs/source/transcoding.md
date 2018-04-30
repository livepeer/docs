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

Transcoder campaign thread - (Coming soon)

[Livepeer Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md)

[Transcoder chat](https://discord.gg/cBfD23u)


## Becoming a Transcoder

We'll walk through the steps of becoming a transcoder on the test
network. Start livepeer with the `--transcoder` flag:

```
$ livepeer --rinkeby --transcoder --publicIP {nodeIP}
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

* `FeeShare` - You will collect fees from broadcasters based upon the
  above price that you charge and how many segments you
  transcode. What % of fees would you to keep? The remaining fees will
  be passed to your
  [delegators](bonding_and_delegation.html). Example 98%.

* `BlockRewardCut` - All [delegators](bonding_and_delegation.html) are
  entitled to their share of newly minted inflationary Livepeer
  Token. Set the cut as a percentage that you will take from
  delegators who delegate towards you in exchange for doing the work
  of performing this valuable service of transcoding
  reliably. Example: 3%.


If Successful, you should see the Transcoder Status change to "Registered"

Wait for the next round to start, and your transcoder will become
active. At this point, the Livepeer node should handle everything for
you. The important thing is that you keep the node running.

## FAQ
**After running the transcoder for a while, I get an error that says "too many open files".**

- This means you have to increase the default file limit. This is a requirement for running an IPFS node. Since Livepeer transcoders run an internal IPFS node, we also have that requirement. The default file limit is 1024, increasing it to something like 4096 should be good. See [this forum post](https://forum.livepeer.org/t/increase-file-limit-as-a-transcoder/170) for more details.

**I get a lot of error messages saying things like "Error with x:EOF".  And a lot of times, the transcoder doesn't do anything when it's suppose to take some action (like call `reward`, do transcoding jobs, etc).**

- This is most likely because the connection between the Livepeer node and the Ethereum network is flaky.  It is recommended to run a local `Geth` or `Parity` node when running a Livepeer transcoder.  If you have a local `Geth` or `Parity` running, you can use the `--ethIpcPath` flag to specify the local IPC file location, which is a much more stable way to connect to the Ethereum network.

TODO: These documents could be expanded with far more information
about the transactions that a Livepeer Transcoder has to submit on a
regular basis to avoid being penalized and to earn their rewards and fees.
