---
title: Subgraph API Entities
sidebar_position: 3
---

# Subgraph API Entities

Entities define the schema of the subgraph, and represent the data that can be
queried. Within each entity are sets of fields that store useful information
related to the entity. Below is a list of the available entities within the
Livepeer Subgraph, and descriptions for the available fields.

To see an interactive sandbox of all entities see the
[Graph Explorer](https://thegraph.com/explorer/subgraph/livepeer/livepeer).

Each entity is defined with a value type, which will always be a base
AssemblyScript type, or a custom type provided by The Graph's custom TypeScript
library. For more information on value types see
[here](https://thegraph.com/docs/assemblyscript-api#api-reference).

### Protocol

The Protocol entity is responsible for storing aggregate information across the
entire protocol. It can be used to view stats such as total supply, total active
stake, total volume, participation rate and more. There is only one Protocol
entity in the subgraph.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

ID is set to 0

</td>
</tr>
<tr>
<td valign="top"><strong>inflation</strong></td>
<td valign="top">BigInt</td>
<td>

Per round inflation rate

</td>
</tr>
<tr>
<td valign="top"><strong>inflationChange</strong></td>
<td valign="top">BigInt</td>
<td>

Change in inflation rate per round until the target bonding rate is achieved

</td>
</tr>
<tr>
<td valign="top"><strong>numActiveTranscoders</strong></td>
<td valign="top">Int</td>
<td>

Total active transcoders

</td>
</tr>
<tr>
<td valign="top"><strong>paused</strong></td>
<td valign="top">Boolean</td>
<td>

True if the protocol is paused

</td>
</tr>
<tr>
<td valign="top"><strong>targetBondingRate</strong></td>
<td valign="top">BigInt</td>
<td>

Target bonding rate (participation) that determines whether inflation should
increase or decrease

</td>
</tr>
<tr>
<td valign="top"><strong>unbondingPeriod</strong></td>
<td valign="top">BigInt</td>
<td>

Time in blocks needed to wait to unstake

</td>
</tr>
<tr>
<td valign="top"><strong>lockPeriod</strong></td>
<td valign="top">BigInt</td>
<td>

Time in blocks delegators have to review transcoder information without changes

</td>
</tr>
<tr>
<td valign="top"><strong>roundLockAmount</strong></td>
<td valign="top">BigInt</td>
<td>

Lock period of a round as a % of round length

</td>
</tr>
<tr>
<td valign="top"><strong>totalActiveStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

The total amount of active LPT staked

</td>
</tr>
<tr>
<td valign="top"><strong>totalVolumeETH</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total broadcaster fees transcoders have accumulated in ETH

</td>
</tr>
<tr>
<td valign="top"><strong>totalVolumeUSD</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total broadcaster fees transcoders have accumulated in USD

</td>
</tr>
<tr>
<td valign="top"><strong>participationRate</strong></td>
<td valign="top">BigDecimal</td>
<td>

Ratio of total active stake to total supply

</td>
</tr>
<tr>
<td valign="top"><strong>currentRound</strong></td>
<td valign="top">Round</td>
<td>

Current round the protocol is in

</td>
</tr>
<tr>
<td valign="top"><strong>lastInitializedRound</strong></td>
<td valign="top">Round</td>
<td>

Round that was last initialized

</td>
</tr>
<tr>
<td valign="top"><strong>lastRoundLengthUpdateRound</strong></td>
<td valign="top">Round</td>
<td>

Round when round length was last updated

</td>
</tr>
<tr>
<td valign="top"><strong>roundLength</strong></td>
<td valign="top">BigInt</td>
<td>

Round length in blocks

</td>
</tr>
<tr>
<td valign="top"><strong>lastRoundLengthUpdateStartBlock</strong></td>
<td valign="top">BigInt</td>
<td>

Block when round length was last updated

</td>
</tr>
<tr>
<td valign="top"><strong>totalSupply</strong></td>
<td valign="top">BigDecimal</td>
<td>

Livepeer Token supply

</td>
</tr>
<tr>
<td valign="top"><strong>winningTicketCount</strong></td>
<td valign="top">Int</td>
<td>

Total winning tickets

</td>
</tr>
<tr>
<td valign="top"><strong>roundCount</strong></td>
<td valign="top">Int</td>
<td>

Total rounds

</td>
</tr>
</tbody>
</table>

### Transcoder

The transcoder entity contains data associated with the orchestrator role. It
includes references to each of its earning pools, fee volume information, total
stake, delegators, and more.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Transcoder's ETH address

</td>
</tr>
<tr>
<td valign="top"><strong>activationRound</strong></td>
<td valign="top">BigInt</td>
<td>

Round in which the transcoder became active

</td>
</tr>
<tr>
<td valign="top"><strong>deactivationRound</strong></td>
<td valign="top">BigInt</td>
<td>

Round in which the transcoder will become inactive

</td>
</tr>
<tr>
<td valign="top"><strong>lastActiveStakeUpdateRound</strong></td>
<td valign="top">BigInt</td>
<td>

Round for which the stake was last updated while the transcoder is active

</td>
</tr>
<tr>
<td valign="top"><strong>active</strong></td>
<td valign="top">Boolean</td>
<td>

Whether or not the transcoder is active

</td>
</tr>
<tr>
<td valign="top"><strong>status</strong></td>
<td valign="top">TranscoderStatus</td>
<td>

Status of the transcoder

</td>
</tr>
<tr>
<td valign="top"><strong>lastRewardRound</strong></td>
<td valign="top">Round</td>
<td>

Last round that the transcoder called reward

</td>
</tr>
<tr>
<td valign="top"><strong>rewardCut</strong></td>
<td valign="top">BigInt</td>
<td>

% of block reward cut paid to transcoder by a delegator

</td>
</tr>
<tr>
<td valign="top"><strong>feeShare</strong></td>
<td valign="top">BigInt</td>
<td>

% of fees paid to delegators by transcoder

</td>
</tr>

<tr>
<td valign="top"><strong>totalStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total tokens delegated toward a transcoder (including their own)

</td>
</tr>
<tr>
<td valign="top"><strong>totalVolumeETH</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total fees generated by the transcoder in ETH (before distribution to
delegators)

</td>
</tr>
<tr>
<td valign="top"><strong>totalVolumeUSD</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total fees generated by the transcoder in USD (before distribution to
delegators)

</td>
</tr>
<tr>
<td valign="top"><strong>pools</strong></td>
<td valign="top">[Pool]</td>
<td>

Pools associated with the transcoder

</td>
</tr>
<tr>
<td valign="top"><strong>delegators</strong></td>
<td valign="top">[Delegator]</td>
<td>

Delegators bonded to the transcoder

</td>
</tr>
<tr>
<td valign="top"><strong>delegator</strong></td>
<td valign="top">Delegator</td>
<td>

Delegator that registered this transcoder

</td>
</tr>
<tr>
<td valign="top"><strong>serviceURI</strong></td>
<td valign="top">String</td>
<td>

Service URI endpoint that can be used to send off-chain requests

</td>
</tr>
</tbody>
</table>

### Round

The Livepeer protocol is round based and each round is represented by some
number of Ethereum blocks.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Round number

</td>
</tr>
<tr>
<td valign="top"><strong>initialized</strong></td>
<td valign="top">Boolean</td>
<td>

Whether the round was initialized

</td>
</tr>
<tr>
<td valign="top"><strong>length</strong></td>
<td valign="top">BigInt</td>
<td>

Number of blocks this round lasts for

</td>
</tr>
<tr>
<td valign="top"><strong>startBlock</strong></td>
<td valign="top">BigInt</td>
<td>

Start block for the round

</td>
</tr>
<tr>
<td valign="top"><strong>endBlock</strong></td>
<td valign="top">BigInt</td>
<td>

End block for the round

</td>
</tr>
<tr>
<td valign="top"><strong>pools</strong></td>
<td valign="top">[Pool]</td>
<td>

Pools associated with the round

</td>
</tr>

<tr>
<td valign="top"><strong>mintableTokens</strong></td>
<td valign="top">BigDecimal</td>
<td>

Mintable tokens for the round

</td>
</tr>
<tr>
<td valign="top"><strong>volumeETH</strong></td>
<td valign="top">BigDecimal</td>
<td>

Fees generated this round in ETH

</td>
</tr>
<tr>
<td valign="top"><strong>volumeUSD</strong></td>
<td valign="top">BigDecimal</td>
<td>

Fees generated this round in USD

</td>
</tr>
<tr>
<td valign="top"><strong>totalActiveStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total active stake during the round

</td>
</tr>
<tr>
<td valign="top"><strong>totalSupply</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total Livepeer token supply during the round

</td>
</tr>
<tr>
<td valign="top"><strong>participationRate</strong></td>
<td valign="top">BigDecimal</td>
<td>

Participation rate during the round (totalActiveStake/totalSupply)

</td>
</tr>
<tr>
<td valign="top"><strong>movedStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total stake moved from one delegate to another during the round

</td>
</tr>
<tr>
<td valign="top"><strong>newStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total amount of new stake introduced during the round

</td>
</tr>
</tbody>
</table>

### Pool

Represents a transcoder's rewards and fees to be distributed to delegators

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Unique identifer for the pool (formed using the transcoder's address and round
number)

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Round associated with the pool

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Transcoder associated with the pool

</td>
</tr>
<tr>
<td valign="top"><strong>fees</strong></td>
<td valign="top">BigDecimal</td>
<td>

Fees collected in the pool

</td>
</tr>
<tr>
<td valign="top"><strong>rewardTokens</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total reward tokens collected in the pool

</td>
</tr>
<tr>
<td valign="top"><strong>totalStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

Transcoder's total stake during the earnings pool's round

</td>
</tr>
<tr>
<td valign="top"><strong>rewardCut</strong></td>
<td valign="top">BigInt</td>
<td>

Transcoder's reward cut during the earnings pool's round

</td>
</tr>
<tr>
<td valign="top"><strong>feeShare</strong></td>
<td valign="top">BigInt</td>
<td>

Transcoder's fee share during the earnings pool's round

</td>
</tr>
</tbody>
</table>

### Delegator

Bonded accounts who have delegated their stake towards a transcoder candidate

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

ETH address of a delegator

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

ETH address of the delegate (the one whom the delegator has bonded to)

</td>
</tr>
<tr>
<td valign="top"><strong>startRound</strong></td>
<td valign="top">BigInt</td>
<td>

Round the delegator becomes bonded and delegated to its delegate

</td>
</tr>
<tr>
<td valign="top"><strong>lastClaimRound</strong></td>
<td valign="top">Round</td>
<td>

Last round that the delegator claimed reward and fee pool shares

</td>
</tr>
<tr>
<td valign="top"><strong>bondedAmount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of Livepeer Token a delegator currently has bonded

</td>
</tr>
<tr>
<td valign="top"><strong>principal</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of Livepeer Token a delegator has bonded over its lifetime separate from
rewards

</td>
</tr>
<tr>
<td valign="top"><strong>unbonded</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of Livepeer Token a delegator has unbonded over its lifetime

</td>
</tr>
<tr>
<td valign="top"><strong>fees</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of fees a delegator has collected

</td>
</tr>
<tr>
<td valign="top"><strong>withdrawnFees</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of fees withdrawn

</td>
</tr>
<tr>
<td valign="top"><strong>delegatedAmount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of Livepeer Token the delegator has delegated

</td>
</tr>
<tr>
<td valign="top"><strong>unbondingLocks</strong></td>
<td valign="top">[UnbondingLock]</td>
<td>

Unbonding locks associated with the delegator

</td>
</tr>

</tbody>
</table>

### Broadcaster

Broadcasters pay transcoders to do the work of transcoding in exchange for fees

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

ETH address of a broadcaster

</td>
</tr>
<tr>
<td valign="top"><strong>deposit</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of funds deposited

</td>
</tr>
<tr>
<td valign="top"><strong>reserve</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of funds in reserve

</td>
</tr>
</tbody>
</table>

### UnbondingLock

Get an unbonding lock for a delegator

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Unique unlock identifer

</td>
</tr>
<tr>
<td valign="top"><strong>unbondingLockId</strong></td>
<td valign="top">Int</td>
<td>

unbonding lock id

</td>
</tr>
<tr>
<td valign="top"><strong>delegator</strong></td>
<td valign="top">Delegator</td>
<td>

Delegator address this lock belongs to

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Address of delegate unbonding from

</td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount being unbonded

</td>
</tr>
<tr>
<td valign="top"><strong>withdrawRound</strong></td>
<td valign="top">BigInt</td>
<td>

Round number when the unbonding amount will be available for withdrawal

</td>
</tr>
</tbody>
</table>

### Poll

Stake weighted poll

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Poll address

</td>
</tr>
<tr>
<td valign="top"><strong>proposal</strong></td>
<td valign="top">String</td>
<td>

IPFS multihash for the proposal

</td>
</tr>
<tr>
<td valign="top"><strong>endBlock</strong></td>
<td valign="top">BigInt</td>
<td>

Block at which the poll ends and votes can no longer be submitted

</td>
</tr>
<tr>
<td valign="top"><strong>quorum</strong></td>
<td valign="top">BigInt</td>
<td>

Minimum amount of participation (total stake including inactive stake) required
for a poll to pass

</td>
</tr>
<tr>
<td valign="top"><strong>quota</strong></td>
<td valign="top">BigInt</td>
<td>

Minimum amount of yes votes required for a poll to pass

</td>
</tr>
<tr>
<td valign="top"><strong>tally</strong></td>
<td valign="top">PollTally</td>
<td>

Poll tally

</td>
</tr>
<tr>
<td valign="top"><strong>votes</strong></td>
<td valign="top">[Vote]</td>
<td>

Votes belonging to a poll

</td>
</tr>

</tbody>
</table>

### PollTally

Stake weighted tally associated with a poll

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Poll address

</td>
</tr>
<tr>
<td valign="top"><strong>yes</strong></td>
<td valign="top">BigDecimal</td>
<td>

Stake voted yes

</td>
</tr>
<tr>
<td valign="top"><strong>no</strong></td>
<td valign="top">BigDecimal</td>
<td>

Stake voted no

</td>
</tr>
</tbody>
</table>

### Vote

Vote data

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Voter address + poll address

</td>
</tr>
<tr>
<td valign="top"><strong>voter</strong></td>
<td valign="top">String</td>
<td>

Vote caster

</td>
</tr>
<tr>
<td valign="top"><strong>voteStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

Stake weighted vote

</td>
</tr>
<tr>
<td valign="top"><strong>nonVoteStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

This will be non-zero if voter is an transcoder and any of the its delegators
voted

</td>
</tr>
<tr>
<td valign="top"><strong>choiceID</strong></td>
<td valign="top">PollChoice</td>
<td>

Vote choice

</td>
</tr>
<tr>
<td valign="top"><strong>poll</strong></td>
<td valign="top">Poll</td>
<td>

Poll associated with this vote

</td>
</tr>
<tr>
<td valign="top"><strong>registeredTranscoder</strong></td>
<td valign="top">Boolean</td>
<td>

True if the voter was a registered transcoder during the poll period

</td>
</tr>
</tbody>
</table>

### Day

Protocol data accumulated and condensed into day stats

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Timestamp rounded to current day by dividing by 86400

</td>
</tr>
<tr>
<td valign="top"><strong>date</strong></td>
<td valign="top">Int</td>
<td>

The date beginning at 12:00am UTC

</td>
</tr>
<tr>
<td valign="top"><strong>volumeETH</strong></td>
<td valign="top">BigDecimal</td>
<td>

Fees generated this day in ETH

</td>
</tr>
<tr>
<td valign="top"><strong>volumeUSD</strong></td>
<td valign="top">BigDecimal</td>
<td>

Fees generated this day in USD

</td>
</tr>
<tr>
<td valign="top"><strong>totalActiveStake</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total active stake during the day

</td>
</tr>
<tr>
<td valign="top"><strong>totalSupply</strong></td>
<td valign="top">BigDecimal</td>
<td>

Total Livepeer token supply during the day

</td>
</tr>
<tr>
<td valign="top"><strong>participationRate</strong></td>
<td valign="top">BigDecimal</td>
<td>

Participation rate during the day (totalActiveStake/totalSupply)

</td>
</tr>
</tbody>
</table>

### TranscoderDay

Transcoder data accumulated and condensed into day stats

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Combination of the transcoder address and the timestamp rounded to current day
by dividing by 86400

</td>
</tr>
<tr>
<td valign="top"><strong>date</strong></td>
<td valign="top">Int</td>
<td>

The date beginning at 12:00am UTC

</td>
</tr>
<tr>
<td valign="top"><strong>volumeETH</strong></td>
<td valign="top">BigDecimal</td>
<td>

Fees generated this day in ETH

</td>
</tr>
<tr>
<td valign="top"><strong>volumeUSD</strong></td>
<td valign="top">BigDecimal</td>
<td>

Fees generated this day in USD

</td>
</tr>
<tr>
<td valign="top"><strong>transcoder</strong></td>
<td valign="top">Transcoder</td>
<td>

Transcoder associated with the day

</td>
</tr>
</tbody>
</table>

### Transaction

Transaction entities are created for each Ethereum transaction that contains an
interaction within Livepeer contracts.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash

</td>
</tr>
<tr>
<td valign="top"><strong>blockNumber</strong></td>
<td valign="top">BigInt</td>
<td>

Block transaction was mined in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp for transaction

</td>
</tr>
<tr>
<td valign="top"><strong>gasUsed</strong></td>
<td valign="top">BigInt</td>
<td>

Amount of gas used in the transaction

</td>
</tr>
<tr>
<td valign="top"><strong>gasPrice</strong></td>
<td valign="top">BigInt</td>
<td>

Cost per unit of gas specified for the transaction

</td>
</tr>
<tr>
<td valign="top"><strong>from</strong></td>
<td valign="top">String</td>
<td>

The sending party of the transaction

</td>
</tr>
<tr>
<td valign="top"><strong>to</strong></td>
<td valign="top">String</td>
<td>

The receiving party of the transaction

</td>
</tr>
<tr>
<td valign="top"><strong>events</strong></td>
<td valign="top">[Event]</td>
<td>

The events emitted within this transaction

</td>
</tr>

</tbody>
</table>

### BondEvent

BondEvent entities are created for every emitted Bond event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in, used to sort

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>bondedAmount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Delegator's current total bonded amount

</td>
</tr>
<tr>
<td valign="top"><strong>additionalAmount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Additional amount added to bonded amount

</td>
</tr>
<tr>
<td valign="top"><strong>newDelegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the Delegator's new delegate

</td>
</tr>
<tr>
<td valign="top"><strong>oldDelegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the Delegator's old delegate

</td>
</tr>
<tr>
<td valign="top"><strong>delegator</strong></td>
<td valign="top">Delegator</td>
<td>

Reference to the Delegator that bonded

</td>
</tr>
</tbody>
</table>

### UnbondEvent

UnbondEvent entities are created for every emitted Unbond event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount unbonded in the transaction

</td>
</tr>
<tr>
<td valign="top"><strong>withdrawRound</strong></td>
<td valign="top">BigInt</td>
<td>

The future round in which the Delegator may withdraw its unbonded stake

</td>
</tr>
<tr>
<td valign="top"><strong>unbondingLockId</strong></td>
<td valign="top">Int</td>
<td>

The unbonding lock ID associated with this transaction, used to optionally
rebond the amount

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the delegate unbonded from

</td>
</tr>
<tr>
<td valign="top"><strong>delegator</strong></td>
<td valign="top">Delegator</td>
<td>

Reference to the Delegator that unbonded

</td>
</tr>
</tbody>
</table>

### RebondEvent

RebondEvent entities are created for every emitted Rebond event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>delegator</strong></td>
<td valign="top">Delegator</td>
<td>

Reference to the delegator that rebonded

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>unbondingLockId</strong></td>
<td valign="top">Int</td>
<td></td>
</tr>
</tbody>
</table>

### RewardEvent

RewardEvent entities are created for every emitted Reward event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>rewardTokens</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of inflationary token rewards claimed

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the delegate that claimed its inflationary token reward

</td>
</tr>
</tbody>
</table>

### TranscoderActivatedEvent

TranscoderActivatedEvent entities are created for every emitted
TranscoderActivated event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the delegate that will be active

</td>
</tr>
<tr>
<td valign="top"><strong>activationRound</strong></td>
<td valign="top">BigInt</td>
<td>

Future round in which the delegate will become active

</td>
</tr>
</tbody>
</table>

### TranscoderDeactivatedEvent

TranscoderDeactivatedEvent entities are created for every emitted
TranscoderDeactivated event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the delegate that will become deactive

</td>
</tr>
<tr>
<td valign="top"><strong>deactivationRound</strong></td>
<td valign="top">BigInt</td>
<td>

Future round in which the delegate will become deactive

</td>
</tr>
</tbody>
</table>

### EarningsClaimedEvent

EarningsClaimedEvent entities are created for every emitted EarningsClaimed
event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>delegator</strong></td>
<td valign="top">Delegator</td>
<td>

Reference to the delegator that claimed its earnings

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the delegator's delegate

</td>
</tr>
<tr>
<td valign="top"><strong>startRound</strong></td>
<td valign="top">BigInt</td>
<td>

First round that the delegator's pending stake was computed from

</td>
</tr>
<tr>
<td valign="top"><strong>endRound</strong></td>
<td valign="top">Round</td>
<td>

Last round that the delegator's pending stake was computed from

</td>
</tr>
<tr>
<td valign="top"><strong>rewardTokens</strong></td>
<td valign="top">BigDecimal</td>
<td>

Reward tokens claimed by the delegator

</td>
</tr>
<tr>
<td valign="top"><strong>fees</strong></td>
<td valign="top">BigDecimal</td>
<td>

Fees claimed by the delegator

</td>
</tr>
</tbody>
</table>

TranscoderUpdateEvent entities are created for every emitted TranscoderUpdate
event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the delegate that was updated

</td>
</tr>
<tr>
<td valign="top"><strong>rewardCut</strong></td>
<td valign="top">BigInt</td>
<td>

Delegate's updated reward cut

</td>
</tr>
<tr>
<td valign="top"><strong>feeShare</strong></td>
<td valign="top">BigInt</td>
<td>

Delegate's updated fee share

</td>
</tr>
</tbody>
</table>

### TranscoderSlashedEvent

TranscoderSlashedEvent entities are created for every emitted TranscoderSlashed
event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>delegate</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the delegate that was slashed

</td>
</tr>
<tr>
<td valign="top"><strong>finder</strong></td>
<td valign="top">Bytes</td>
<td>

Finder that proved a transcoder violated a slashing condition. Null address if
there is no finder

</td>
</tr>
<tr>
<td valign="top"><strong>penalty</strong></td>
<td valign="top">BigDecimal</td>
<td>

Percentage of transcoder bond to be slashed

</td>
</tr>
<tr>
<td valign="top"><strong>finderReward</strong></td>
<td valign="top">BigInt</td>
<td>

Percentage of penalty awarded to finder. Zero if there is no finder

</td>
</tr>
</tbody>
</table>

### WithdrawStakeEvent

WithdrawStakeEvent entities are created for every emitted WithdrawStake event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>delegator</strong></td>
<td valign="top">Delegator</td>
<td>

Reference to the delegator that withdraw its stake

</td>
</tr>
<tr>
<td valign="top"><strong>unbondingLockId</strong></td>
<td valign="top">Int</td>
<td>

Unbonding lock ID that was deleted upon withdrawal

</td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of stake withdrawn

</td>
</tr>
</tbody>
</table>

### WithdrawFeesEvent

WithdrawFeesEvent entities are created for every emitted WithdrawFees event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>delegator</strong></td>
<td valign="top">Delegator</td>
<td>

Reference to the delegator that withdraw its fees

</td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of fees withdrawn

</td>
</tr>
</tbody>
</table>

### NewRoundEvent

NewRoundEvent entities are created for every emitted NewRound event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>blockHash</strong></td>
<td valign="top">String</td>
<td>

Block hash for the round

</td>
</tr>
</tbody>
</table>

### WinningTicketRedeemedEvent

WinningTicketRedeemedEvent entities are created for every emitted
WinningTicketRedeemed event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>sender</strong></td>
<td valign="top">Broadcaster</td>
<td>

Reference to the broadcaster who sent the fees

</td>
</tr>
<tr>
<td valign="top"><strong>recipient</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the recipient of the broadcaster fees

</td>
</tr>
<tr>
<td valign="top"><strong>faceValue</strong></td>
<td valign="top">BigDecimal</td>
<td>

Face value of ticket paid to recipient

</td>
</tr>
<tr>
<td valign="top"><strong>faceValueUSD</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of fees the winning ticket was redeemed for in in USD

</td>
</tr>
<tr>
<td valign="top"><strong>winProb</strong></td>
<td valign="top">BigInt</td>
<td>

The winning probability of the ticket

</td>
</tr>
<tr>
<td valign="top"><strong>senderNonce</strong></td>
<td valign="top">BigInt</td>
<td>

Sender's monotonically increasing counter for each ticket

</td>
</tr>
<tr>
<td valign="top"><strong>recipientRand</strong></td>
<td valign="top">BigInt</td>
<td>

keccak256 hash commitment to recipient's random value

</td>
</tr>
<tr>
<td valign="top"><strong>auxData</strong></td>
<td valign="top">Bytes</td>
<td>

Auxilary data included in ticket used for additional validation

</td>
</tr>
</tbody>
</table>

### DepositFundedEvent

DepositFundedEvent entities are created for every emitted DepositFunded event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>sender</strong></td>
<td valign="top">Broadcaster</td>
<td>

Reference to the broadcaster that deposited the broadcasting fees

</td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of broadcasting fees deposited

</td>
</tr>
</tbody>
</table>

### ReserveFundedEvent

ReserveFundedEvent entities are created for every emitted ReserveFunded event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>reserveHolder</strong></td>
<td valign="top">Broadcaster</td>
<td>

Reference to reserve holder

</td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of funds added to reserve

</td>
</tr>
</tbody>
</table>

### ReserveClaimedEvent

ReserveClaimedEvent entities are created for every emitted ReserveClaimed event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>reserveHolder</strong></td>
<td valign="top">Broadcaster</td>
<td>

Reference to the reserve holder

</td>
</tr>
<tr>
<td valign="top"><strong>claimant</strong></td>
<td valign="top">Transcoder</td>
<td>

Reference to the claimant

</td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of funds claimed by claimant from the reserve for the reserve holder

</td>
</tr>
</tbody>
</table>

### WithdrawalEvent

WithdrawalEvent entities are created for every emitted Withdrawal event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>sender</strong></td>
<td valign="top">Broadcaster</td>
<td>

Reference to the broadcaster withdrawing its deposit and reserve

</td>
</tr>
<tr>
<td valign="top"><strong>deposit</strong></td>
<td valign="top">BigDecimal</td>
<td>

Deposit amount withdrawn

</td>
</tr>
<tr>
<td valign="top"><strong>reserve</strong></td>
<td valign="top">BigDecimal</td>
<td>

Reserve amount withdrawn

</td>
</tr>
</tbody>
</table>

### SetCurrentRewardTokensEvent

SetCurrentRewardTokensEvent entities are created for every emitted
SetCurrentRewardTokens event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>currentMintableTokens</strong></td>
<td valign="top">BigDecimal</td>
<td>

Number of mintable tokens for the round

</td>
</tr>
<tr>
<td valign="top"><strong>currentInflation</strong></td>
<td valign="top">BigInt</td>
<td>

Current inflation during the round

</td>
</tr>
</tbody>
</table>

### PauseEvent

PauseEvent entities are created for every emitted Pause event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
</tbody>
</table>

### UnpauseEvent

UnpauseEvent entities are created for every emitted Unpause event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
</tbody>
</table>

### ParameterUpdateEvent

ParameterUpdateEvent entities are created for every emitted ParameterUpdate
event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>param</strong></td>
<td valign="top">String</td>
<td>

Parameter that was updated

</td>
</tr>
</tbody>
</table>

### VoteEvent

VoteEvent entities are created for every emitted Vote event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>voter</strong></td>
<td valign="top">String</td>
<td>

Address belonging to the voter

</td>
</tr>
<tr>
<td valign="top"><strong>choiceID</strong></td>
<td valign="top">BigInt</td>
<td>

Voter choice. Zero means yes and one means no

</td>
</tr>
<tr>
<td valign="top"><strong>poll</strong></td>
<td valign="top">Poll</td>
<td>

Reference to the poll this vote was casted in

</td>
</tr>
</tbody>
</table>

### PollCreatedEvent

PollCreatedEvent entities are created for every emitted PollCreated event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>poll</strong></td>
<td valign="top">Poll</td>
<td>

Reference to the poll that was created

</td>
</tr>
<tr>
<td valign="top"><strong>proposal</strong></td>
<td valign="top">Bytes</td>
<td>

IPFS content hash representing proposal

</td>
</tr>
<tr>
<td valign="top"><strong>endBlock</strong></td>
<td valign="top">BigInt</td>
<td>

Ethereum block in which this poll ends

</td>
</tr>
<tr>
<td valign="top"><strong>quorum</strong></td>
<td valign="top">BigInt</td>
<td>

The minimum amount of stake-weighted votes for this poll's outcome to be
considered valid

</td>
</tr>
<tr>
<td valign="top"><strong>quota</strong></td>
<td valign="top">BigInt</td>
<td>

The minimum amount of stake-weighted 'yes' votes needed for the poll to pass

</td>
</tr>
</tbody>
</table>

### ServiceURIUpdateEvent

ServiceURIUpdateEvent entities are created for every emitted ServiceURIUpdate
event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>addr</strong></td>
<td valign="top">String</td>
<td>

Address of sender

</td>
</tr>
<tr>
<td valign="top"><strong>serviceURI</strong></td>
<td valign="top">String</td>
<td>

Service URI endpoint for the caller

</td>
</tr>
</tbody>
</table>

### MintEvent

MintEvent entities are created for every emitted Mint event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>to</strong></td>
<td valign="top">String</td>
<td>

Token smart contract address

</td>
</tr>
<tr>
<td valign="top"><strong>amount</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of tokens minted

</td>
</tr>
</tbody>
</table>

### BurnEvent

BurnEvent entities are created for every emitted Burn event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>id</strong></td>
<td valign="top">ID</td>
<td>

Ethereum transaction hash + event log index

</td>
</tr>
<tr>
<td valign="top"><strong>transaction</strong></td>
<td valign="top">Transaction</td>
<td>

Reference to the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>timestamp</strong></td>
<td valign="top">Int</td>
<td>

Timestamp of the transaction the event was included in

</td>
</tr>
<tr>
<td valign="top"><strong>round</strong></td>
<td valign="top">Round</td>
<td>

Reference to the round the event occured in

</td>
</tr>
<tr>
<td valign="top"><strong>value</strong></td>
<td valign="top">BigDecimal</td>
<td>

Amount of tokens burned

</td>
</tr>
</tbody>
</table>

