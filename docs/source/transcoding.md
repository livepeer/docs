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

See
[The Livepeer Whitepaper](https://github.com/livepeer/wiki/blob/master/Whitepaper.md)
for the full details around the incentives and role of transcoding.

## Becoming a Transcoder

We'll walk through the steps of becoming a transcoder on the test
network. Start livepeer with the `--transcoder` flag:

```
$ livepeer --testnet --transcoder
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

TODO: These documents could be expanded with far more information
about the transactions that a Livepeer Transcoder has to submit on a
regular basis to avoid being penalized and to earn their rewards and fees.
