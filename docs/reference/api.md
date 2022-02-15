---
slug: /video-developer-references/reference-information/api
title: Subgraph API Overview
sidebar_position: 2
---

# Subgraph API Overview

This section explains the Livepeer Subgraph and how to interact with it. The
Livepeer subgraph indexes data from the Livepeer contracts over time. It
organizes data about orchestrators, delegators, and more. The subgraph updates
any time a transaction is made on Livepeer. It runs on
[The Graph](https://thegraph.com/) protocol's hosted service and can be openly
queried.

## Resources

- [Subgraph Explorer](https://thegraph.com/explorer/subgraph/livepeer/livepeer) -
  sandbox for querying data and endpoints for developers.
- [Livepeer Subgraph](https://github.com/livepeer/livepeerjs/tree/master/packages/subgraph) -
  source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of Livepeer and also
tracks historical data. It is currently used to power
[explorer.livepeer.org](https://explorer.livepeer.org). **It is not intended to
be used as a data source for structuring transactions (contracts should be
referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to
[The Graph's documentation](https://thegraph.com/docs/introduction).

