# Governance

Orchestrators and delegators can participate in protocol governance by voting in polls.

Refer to the following resources for more information on protocol governance:

- [The Livepeer Governance Roadmap Proposal](https://medium.com/livepeer-blog/livepeer-governance-roadmap-proposal-69a6e9e33f80)
- [The Founder's Statement](https://medium.com/livepeer-blog/the-livepeer-governance-founders-statement-d4f3a85f787b)
- [Livepeer Governance in a Nutshell](https://figment.network/resources/livepeer-governance-in-a-nutshell/)
- [Livepeer Governance Proposal Voting](https://figment.network/resources/livepeer-governance-proposal-voting/)
- [The Livepeer Improvement Proposal Process Repository](https://github.com/livepeer/LIPs)

## Voting with the explorer

Delegators with staked LPT can vote in a poll using the explorer and a web3 enabled wallet (i.e. Metamask).

- To vote on mainnet use [https://explorer.livepeer.org/voting](https://explorer.livepeer.org/voting)
- To vote on Rinkeby use [https://rinkeby.explorer.livepeer.org/voting](https://rinkeby.explorer.livepeer.org/voting)

## Voting with livepeer_cli

Orchestrator operators can use `livepeer_cli` to vote in a poll without exporting their keys from the machine that their orchestrator node is running on.

In `livepeer_cli`, select the following option:

```
19. Vote on a poll
```

Upon selecting the option, you will be prompted to enter the contract address for the poll you want to vote on:

```
> 19
Enter the contract address for the poll you want to vote on - >
```

The contract address for the poll can be found in the explorer page for the poll.

![PollDetailView](./assets/poll-detail-view.png)

The poll page will include the following box:

![LivepeerCLIVoteCTA](./assets/livepeer-cli-vote-cta.png)

Click the "Follow the instructions" link to display the instructions for voting with `livepeer_cli`:

![LivepeerCLIVoteInstructions](./assets/livepeer-cli-vote-instructions.png)

The contract address for the poll in these instructions should be entered in `livepeer_cli`.

```
Enter the contract address for the poll you want to vote on - > 0xcce49bb25677a7e13c3c39b5202231c80c632479 
Identifier	Voting Options
0		Yes
1		No
```

Upon entering the poll contract address, you will be prompted to choose and confirm the the option you want to vote for:

```
Enter the ID of the option you want to vote for - > 0
Are you sure you want to vote "Yes" ? (y/n) - > y

 success
```

After choosing and confirming the option you want to vote for you will observe your node submitting the vote transaction:

```
I0422 03:30:44.191809   43457 backend.go:96]
******************************Eth Transaction******************************

Invoking transaction: "vote". Inputs: "_choiceID: 0"  Hash: "0xf6957c190f1f16fc2ca4a93846903eb435c5e08fa7f6f40b6e159aab6d74905f".

**************************************************************************
```

Once the vote transaction is confirmed you will be able to see your vote reflected in the explorer poll page.