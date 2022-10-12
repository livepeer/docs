---
sidebar_position: 3
title: Sample Queries
---

# Sample Queries

Below are some sample queries you can use to gather information from the Livepeer contracts.

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql) and enter your endpoint to limit the data to exactly what you need.

The GraphQL endpoint uses the The Graph's Hosted Service on [Arbitrum One](https://thegraph.com/hosted-service/subgraph/livepeer/arbitrum-one). _Note: this will eventually be deprecated once The Graph [sunsets their Hosted Service](https://thegraph.com/blog/transitioning-to-decentralized-graph-network/). This will likely happen in late 2023 or later, see their blog or Discord channel for more information._

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
