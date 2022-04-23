---
title: Withdraw Broadcasting Funds
sidebar_position: 4
---

# Withdraw Broadcasting Funds

## Pre-requisites

- Make sure your broadcaster is running

## Withdraw broadcasting funds using `livepeer_cli`

When you want to withdraw your broadcasting funds you will need to wait a fixed
number of rounds before gaining access to your funds. The first step for
withdrawal is to request to unlock your funds.

In `livepeer_cli`, select the following option:

```bash
13. Invoke "unlock broadcasting funds"
```

Confirm that you would like to request to unlock your funds. After answering the
wizard’s prompt, you should see a transaction submitted by your node. After the
transaction confirms, you will be able to withdraw your funds at the withdraw
round that was specified in the prompt.

If you change your mind and do no want to withdraw your funds, you can cancel
your unlock request in `livepeer_cli` by selecting the following option:

```bash
14. Invoke "cancel unlock of broadcasting funds"
```

Confirm that you would like to cancel your request to unlock your funds. After
answering the wizard’s prompt, you should see a transaction submitted by your
node. After the transaction confirms, your unlock request will be cancelled.
Another way to cancel an unlock request is to deposit more funds.

If you want to withdraw your funds, in `livepeer_cli` select the following
option:

```bash
Invoke "withdraw broadcasting funds"
```

If your unlock is not complete (i.e. your withdraw round is in the future), you
will not be able to withdraw. Once your unlock is complete (i.e. your withdraw
round is the current round or in the past), you should be prompted to confirm
that you would like to withdraw your funds. After answering the wizard’s prompt,
you should see a transaction submitted by your node. After the transaction
confirms, your withdrawal will be complete and can see your empty deposit and
reserve by refreshing the wizard.

