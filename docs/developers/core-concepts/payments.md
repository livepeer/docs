---
title: Payments
sidebar_position: 3
---

# Payments

## Probabilistic Micropayments

Payments are implemented using a
[probabilistic micropayment protocol](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462).

Broadcasters send "lottery tickets" to orchestrators in exchange for transcoded
results. Each "lottery ticket" is defined with:

- a _face value_: the payout to the orchestrator if the ticket wins, and
- a _probability that the ticket will win_.

Each ticket is treated as a micropayment worth the _expected value_ of the
ticket (calculated as: _face value_ multiplied by _probability that the ticket
will win_).

Broadcasters set a max ticket expected value (EV) which defines the max value
that a broadcaster is willing to send out before receiving results from an
orchestrator. For example, if the max ticket EV is set to 3000 gwei and an
orchestrator sets its ticket EV to 4000 gwei, the broadcaster will exclude the
orchestrator from selection. The default max ticket EV in `livepeer` is set to
be reasonable (3000 gwei) so at this time broadcaster operators are encouraged
to just use the default because using a non-default value could either lead to
broadcasters excluding too many orchestrators from selection or taking on
additional risk by sending a large amount of value without receiving results.
