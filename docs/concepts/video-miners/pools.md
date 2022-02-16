---
title: Transcoding Pools
sidebar_position: 4
---

# Transcoding Pools

The split orchestrator and transcoder architecture enables the creation of
**transcoding pools**. These pools are analogous to PoW mining pools that
outsource PoW hashing to one or many separate miners. In the Livepeer network,
pool operators are orchestrator operators and the participants in pools are
transcoders. Transcoding pools are not a part of the core protocol so the
details around how work in a pool is tracked and how transcoders in a pool are
compensated depend on the pool implementation.

There are two types of pools: private and public pools.

## Private Pools

Private pools only allow known transcoders to participate based on some set of
criteria defined by the pool operator. Examples of requirements for private pool
membership include:

- Only transcoders run by the pool operator
- Only transcoders run by entities partnered with the pool operator
- Only transcoders that go through an identification process

## Public Pools

Public pools allow any transcoder to participate.

Public pools that are live today:

- [Livepool.io](http://livepool.io/)
- [Titan-Node.com](https://titan-node.com/)


