# Bonding and Delegation

Bonding is how most users participate in the Livepeer protocol and add
value to the network long term by vetting and electing the best nodes
to provide [transcoding](transcoding.html) and video services to the
network. See the
[Delegator Wikipage](https://github.com/livepeer/wiki/wiki/Delegating)
which describes what bonding and delegation is, how to do it, as well as tutorials on how to weigh various Transcoder statistics

The protocol mints new token every round and rewards participation in the network as a Delegator or Transcoder

## Delegating using [Explorer](https://explorer.livepeer.org/)
Explorer is a tool we built to interface with livepeer cli in a less technical way
* [How to Delegate](https://github.com/livepeer/wiki/wiki/Delegating#how-to-delegate)

## Assessing Transcoders
Assess transcoders based on performance, statistics and social campaigns
* Social Campaigns can be found in the [Forum](https://forum.livepeer.org/c/transcoders)
* Stats can be viewed on [Explorer](https://explorer.livepeer.org/)
* Definitions and examples are [on the Delegator Wiki](https://github.com/livepeer/wiki/wiki/Delegating#applying-these-methods-examples)

## Delegating using the Terminal
In order to bond your Livepeer Token (LPT) you use `livepeer_cli`.

```
$ livepeer_cli
```

Make sure you have ETH and LPT and are running a Livepeer node as
described in [Getting Started](getting_started.html).

The CLI presents options to

* `Bond`
* `Unbond`
* `Withdraw Bond`

When you choose to bond, it will present you with a table of
transcoders to choose from in order to bond towards. You should select
a transcoder based upon many factors including the fees that they're
charging and sharing back to you, their statistics on past
performance, and the social data that they've shared through forum
posts or other Livepeer related resources. In the end, you're making a
decision about whom you think will add the most value to the Livepeer
network.

Keep in mind that if you delegate towards a high performing, honest
transcoder you will earn a portion of the fees that they receive. If
you delegate towards a transcoder who cheats or doesn't reliably do
work in the network, you will lose out on the economic opportunity of
fees and inflationary token issuance. Select wisely!

* Choose the option to `Bond` when you'd like to bond.

## Unbonding

A ***Guide to Unbonding and Claiming Fees*** can be found on our [Delegator Wiki](https://github.com/livepeer/wiki/wiki/Delegating#getting-your-tokens-and-rewards)

* Choose the option to `Unbond` when you'd like to withdraw your bond
from a particular transcoder.

You will not yet be able to access your token while it's unbonding for
the length of the `UnbondingPeriod`. You can rebond during this period
to the same or a different transcoder.

* At the end of the `UnbondingPeriod` you can choose the option to
  `Withdraw` which will now give you access to your unbonded token.
