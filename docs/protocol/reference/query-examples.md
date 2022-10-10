---
sidebar_position: 3
title: Sample Queries
---

# Sample Queries

Below are some sample queries you can use to gather information from the Livepeer contracts.

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql) and enter your endpoint to limit the data to exactly what you need.

Livepeer endpoint https://api.thegraph.com/subgraphs/name/livepeer/livepeer

## Transcoder

Query Description: Search active delegators, how long and how much they delegated

```graphql
{
  transcoders(where: { id: "0x4a43b1d7e6227c8b0512e413f406555647ff7bdb" }) {
    active
    delegators(first: 1000) {
      id
      delegatedAmount
      principal
      startRound
      delegate {
        id
        lastRewardRound {
          id
          length
        }
        delegator {
          delegatedAmount
        }
      }
    }
  }
}
```

## Subquery

Query Description: get all delegators of a given orchestrator

```graphql
{
  transcoder(id: "0x4a43b1d7e6227c8b0512e413f406555647ff7bdb") {
    delegators(first: 1000) {
      id
      bondedAmount
      startRound
    }
  }
}
```

## Rounds

Query Description: search round by total supply, active stake, participation rate and length of round

```graphql
{
  rounds(orderBy: id) {
    totalSupply
    totalActiveStake
    participationRate
    length
  }
}
```
