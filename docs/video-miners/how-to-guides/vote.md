---
title: Vote
sidebar_position: 8
---

# Vote

## Pre-requisities

- Make sure you have
  [activated your orchestrator](/video-miners/getting-started/activation)
- Make sure your orchestrator is running

## Vote with livepeer_cli

Orchestrators can use `livepeer_cli` to vote in governance polls without
exporting their keys from the machine that their orchestrator node is running
on.

Refer to [this section](/protocol/core-concepts/governance) for more
information on governance.

1. Find the contract address for the poll in the explorer page for the poll.

   ![PollDetailView](/docs-assets/poll.png)

   The poll page will include the following box:

   ![LivepeerCLIVoteCTA](/docs-assets/vote-livepeer-cli.png)

   Click the "Follow the instructions" link to display the instructions for
   voting with `livepeer_cli`:

   ![LivepeerCLIVoteInstructions](/docs-assets/vote-livepeer-cli-instructions.png)

   Make note of the poll contract address which will be used later.

2. Run `livepeer_cli`

3. Enter the number corresponding to the `Vote on a poll` option

4. Enter the contract address from the instructions from the first step:

   ```bash
   Enter the contract address for the poll you want to vote on - >
   ```

   You will be prompted with the voting options:

   ```bash
   Identifier	Voting Options
   0		Yes
   1		No
   ```

5. Choose and confirm the option you want to vote for:

   ```
   Enter the ID of the option you want to vote for - > 0
   Are you sure you want to vote "Yes" ? (y/n) - > y

   success
   ```

6. Wait for the transaction to confirm. You should observe your node submitting
   the vote transaction:

   ```bash
   I0422 03:30:44.191809   43457 backend.go:96]
   ******************************Eth Transaction******************************

   Invoking transaction: "vote". Inputs: "_choiceID: 0"  Hash: "0xf6957c190f1f16fc2ca4a93846903eb435c5e08fa7f6f40b6e159aab6d74905f".

   **************************************************************************
   ```

   Once the vote transaction is confirmed you will be able to see your vote
   reflected in the explorer poll page.

