---
sidebar_position: 3
title: Sample Queries
---

## Sample Queries

Below are some sample queries you can use to gather information from the Livepeer contracts.

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql) and enter your endpoint to limit the data to exactly what you need.

## Transcoders

````

{% tabs %}
{% tab title="Request" %}

```graphql
{
  transcoders(where: {id: "0x4a43b1d7e6227c8b0512e413f406555647ff7bdb"}) {
    active
    rewardCut
    feeShare
    totalStake
    totalVolumeETH
    totalVolumeUSD
  }
}
````

{% endtab %}

{% tab title="Response" %}

```javascript
{
  "data":{
    "transcoders": [
      {
      "active": true
      "rewardCut": "100000",
      "feeShare": "50000",
      "totalStake": "11007.283760839111991305",
      "totalVolumeETH": "1.805454545454545454",
      "totalVolumeUSD":
"6615.395713508667866907061241155882"
      }
    ]
  }
}
```

{% endtab %}
{% endtabs %}

## Transcoders

````

{% tabs %}
{% tab title="Request" %}

```graphql
{
  transcoders (where: {serviceURI:"https://lp.jasonernst.com:8935"}) {
    id
    active
    activationRound
    deactivationRound
    totalStake
    rewardCut
    feeShare
    serviceURI
  }
}
````

{% endtab %}

{% tab title="Response" %}

```javascript
{
  "data": {
    "transcoders": [
      {
        "id":
"0x74ba897f65f04008d8eff364efcc54b0a20e17eb",
        "active": true,
        "activationRound": "2455",
        "deactivationRound":
"57896044618658097711785492504343953926634992332820282019728792003956564819967",

        "totalStake": "38.773870428139860977",
        "rewardCut": "100000",
        "feeShare": "50000",
        "serviceURI":
"https://lp.jasonernst.com:8935"
      }
    ]
  }
}
```

{% endtab %}
{% endtabs %}
