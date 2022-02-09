---
title: Troubleshoot
sidebar_position: 6
---

# Troubleshoot

In order to see more detailed logs, run your broadcaster with `-v 6` to enable
verbose logging.

After receiving a stream, your broadcaster will try to connect to a set of
orchestrators (ether based on the registered orchestrators on-chain or based on
the orchestrators specified using the `-orchAddr` flag). Your broadcaster might
reject certain orchestrators based on their required price or ticket parameters.

## `faceValue higher than max faceValue` error

If you observe the ticket `faceValue higher than max faceValue` error in the
broadcaster’s logs, you can try:

1. Running the broadcaster with `-depositMultiplier 1`. The default value is
   1000 (which is pretty high) meaning that the broadcaster will not be willing
   to use a ticket `faceValue` that exceeds the broadcaster’s deposit divided
   by 1000. So, if the value is 1 then the broadcaster will be willing to use a
   ticket `faceValue` that equals the broadcaster’s deposit. While this might
   not be desirable in other circumstances, it can be fine for testing purposes
2. If option 1 does not work, then the broadcaster’s deposit is less than the
   `faceValue` required by an orchestrator - you should try depositing more ETH

## `EV higher than max EV` error

If you observe the ticket `EV higher than max EV` error in the broadcaster’s
logs, you can try running the broadcaster with `-maxTicketEV <MAX_TICKET_EV>`
where `MAX_TICKET_EV` is the maximum expected value (denominated in wei) for
tickets sent by the broadcaster. The default value is 10 gwei so you could try
using a higher value.

For help from the Livepeer community, join the Livepeer
[Discord](https://discord.gg/uaPhtyrWsF) and post in the #broadcasting channel.

