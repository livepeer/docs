---
slug: /video-miners/core-concepts/payments
sidebar_position: 8
title: Payments
---

# Payments

## Per Pixel Pricing

The value of payments is based on the number of pixels of video transcoded.
Orchestrators advertise a price per pixel off-chain. Broadcasters filter and
select orchestrators based on a maximum price per pixel that they are willing to
pay for transcoding.

The video profiles requested by broadcasters will impact the number of pixels
transcoded. A higher number of video profiles or more complex video profiles
will require more pixels to be transcoded and also require more payments.

## Probabilistic Micropayments

Payments are implemented using a
[probabilistic micropayment protocol](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462).

Broadcasters send "lottery tickets" to Orchestrators in exchange for transcoded
results. Each "lottery ticket" is defined with:

- a _face value_: the payout to the orchestrator if the ticket wins, and
- a _probability that the ticket will win_.

Each ticket is treated as a micropayment worth the _expected value_ of the
ticket (calculated as: _face value_ multiplied by _probability that the ticket
will win_).

Orchestrators set a required ticket expected value (EV) which defines the value
of work an orchestrator is willing to do before requiring a ticket. For example,
if the ticket EV is set to 1000 gwei, then the orchestrator is willing to do
1000 gwei worth of work before requiring a ticket. The default ticket EV in
`livepeer` is set to be reasonable (1000 gwei) so at this time orchestrator
operators are encouraged to just use the default because using a non-default
value could lead to broadcasters excluding an orchestrator from selection due to
the broadcaster's max ticket EV (which has a default that is set based on the
default ticket EV).

Orchestrators will redeem winning tickets on-chain, to receive the _face value_
of tickets.

## Automatic Price Adjustments

The default behavior of orchestrators is to automatically adjust their
advertised price per pixel based on the estimated overhead for redeeming a
ticket. The overhead for redeeming a ticket is the estiamted transaction cost of
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
