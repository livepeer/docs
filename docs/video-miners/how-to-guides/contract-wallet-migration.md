---
title: Contract Wallet Stake Migration Guide
sidebar_position: 11
---

This is a guide for migrating stake from L1 (Ethereum Mainnet) to L2 (Arbitrum Mainnet) if you were using a contract wallet (i.e. multisig) to stake on L1.

It is designed to be used in conjunction with the [orchestrator](https://explorer.livepeer.org/migrate/orchestrator/contract-wallet-tool), [broadcaster](https://explorer.livepeer.org/migrate/broadcaster/contract-wallet-tool), and [delegator](https://explorer.livepeer.org/migrate/delegator/contract-wallet-tool) contract wallet migration tools.



## Create an L2 Address

**You MUST make sure that you have a valid L2 address that can own funds migrated from L1 before moving on. If you use the L1 address of your contract wallet as the L2 address you could lose access to your L1 assets after the migration**

The L2 address can be that of a contract wallet (i.e. [Gnosis Safe](https://gnosis-safe.io/)) deployed on L2 or an EOA (i.e. an externally owned account managed by a hardware wallet like Ledger or a browser wallet like Metamask). The migration process will transfer ownership of funds (i.e. stake) owned by your L1 address to the L2 address.

**If you would like to use a contract wallet on L2 you MUST make sure that the contract wallet is deployed on L2 and that you have control of it before proceeding.**

**If you are unsure about how to ensure you have a valid L2 address please reach out to the core team on Discord in the [#layer2-confluence-support channel](https://discord.gg/5eQ3YfK2a8).**

## Migrate Stake

### Generate Migration Transaction Parameters

Use a command line tool to generate the required parameters for the migration transaction:

```
# Clone the repository
git clone https://github.com/livepeer/arbitrum-lpt-bridge
# Navigate into the repository
cd arbitrum-lpt-bridge
# Set environment variables
export MAINNET_URL=<ETHEREUM_MAINNET_RPC_URL>
export ARB_MAINNET_URL=<ARBITRUM_MAINNET_RPC_URL>
# Run command
npx hardhat migrate-delegator \
    --network mainnet \
    --estimatel2 true \
    --l1addr <L1_ADDR> \
    --l2addr <L2_ADDR>
```

`<L1_ADDR>` is the address of your contract wallet on L1 that has stake to migrate.

`<L2_ADDR>` is the address that will receive migrated stake on L2. **This is the address that you should have created at the beginning of the guide**.

`<ETHEREUM_MAINNET_RPC_URL>` is the JSON-RPC URL for an Ethereum mainnet provider.

`<ARBITRUM_MAINNET_RPC_URL>` is the JSON-RPC URL for an Arbitrum mainnet provider.

You should observe an output that looks like this (in practice the output will look different for you):

```
WARNING: You MUST ensure that you have access to 0x2d72A1c2ceE244e7d996FfE0f2CF491F7475804a on L2 or else you may lose access to migrated funds
maxGas: 3948836
gasPriceBid: 581246045
maxSubmissionCost: 469664455740
value: 2295714971809360
```

These values will be used in the next section.

### Submit Migration Transaction

Next, you will need to submit the migration transaction from your contract wallet. The transaction will be a function call to the L1Migrator on **Ethereum Mainnet**.

- The contract address is 0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A
- The contract ABI can be copied from [here](https://etherscan.io/address/0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A#code)
- The function name is `migrateDelegator` with the following parameters:
    - `address _l1Addr`: The address of your L1 contract wallet that has stake to migrate
    - `address _l2Addr`: The address on L2 that will receive migrated stake. **This is the address that you should have created at the beginning of the guide**
    - `bytes _sig`: This parameter can be ignored and left blank
    - `uint256 _maxGas`: This should be the `maxGas` printed by the command line tool
    - `uint256 _gasPriceBid`: This should be the `gasPriceBid` printed by the command line tool
    - `uint256 _maxSubmissionCost`: This should be the `maxSubmissionCost`  printed by the command line tool
- The ETH value to include with the function call should be the `value` printed by the command line tool. **The `value` printed by the command line tool is denominated in Wei so make sure to convert it into the units (i.e. Ether) that is required by the tool you are using to submit the transaction**

After this transaction is submitted by the contract wallet and is confirmed on L1, there will be roughly ~10 minutes until the transaction is finalized on L2. During this time you can use the following command to monitor for when the transaction is finalized on L2:

```
npx hardhat wait-to-relay-tx-to-l2 <L1_TX_HASH>
```

`<L1_TX_HASH>` is the hash of the L1 transaction submitted by your contract wallet.

The command will notify you when the transaction is finalized on L2. Then, you should be able to navigate to https://explorer.livepeer.org/ and search for the L2 address that you specified to view the migrated stake owned by that address.