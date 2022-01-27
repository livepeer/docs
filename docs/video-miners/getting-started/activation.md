---
title: Activation
sidebar_position: 3
---


# Activation

## Pre-requisites

- Make sure you have `livepeer`[installed](/installation/install-livepeer/overview)
- Make sure you have access to an
  [Arbitrum JSON-RPC URL](/installation/connect-to-ethereum)
- If you are transcoding with Nvidia GPUs:
  - Make sure you have a
    [Nvidia driver](https://www.nvidia.com/Download/index.aspx) installed
  - Make sure you have Nvidia GPUs
    [accessible on your machine](/video-miners/getting-started/activation#nvidia-gpu-i-ds)

### Nvidia GPU IDs

If you are transcoding with Nvidia GPUs, you can print a list of the accessible
GPUs using `nvidia-smi` (installed alongside the Nvidia driver):

```
nvidia-smi -L
GPU 0: GeForce GTX 1070 Ti (UUID: GPU-fcbaffa0-38ae-02d0-5c47-f8fd9922eb75)
GPU 1: GeForce GTX 1070 Ti (UUID: GPU-d46a085e-0d66-0214-34d3-96860a5c778f)
GPU 2: GeForce GTX 1070 Ti (UUID: GPU-32b7c120-c2c9-0069-6130-cb67afd89642)
GPU 3: GeForce GTX 1070 Ti (UUID: GPU-9e4163c3-a120-3cbb-7869-1223b322eab2)
GPU 4: GeForce GTX 1070 Ti (UUID: GPU-3370975a-f669-e108-6428-602be9eba7d4)
```

The above output indicates that there are 5 GPUs accessible on the machine with
IDs from 0 through 4.

## Start a combined orchestrator and transcoder

Start your orchestrator before activation:

```bash
livepeer \
    -network arbitrum-one-mainnet \
    -ethUrl <ETH_URL> \
    -ethAcctAddr <ETH_ACCT_ADDR> \ # Only required if you already have an ETH account you want to use
    -orchestrator \
    -transcoder \
    -nvidia <NVIDIA_DEVICE_IDs> \ # Only required for transcoding with Nvidia GPUs
    -pricePerUnit <PRICE_PER_UNIT> \
    -serviceAddr <SERVICE_ADDR> # Hostname/IP:port
```

- `-ethAcctAddr` is used to specify the ETH account address that you want the
  node to use. The wallet file for the account address should be stored in the
  keystore directory which defaults to `~/.lpData/arbitrum-one-mainnet/keystore`. The flag is
  only required if you already have an account that you want to use
- Using both the `-orchestrator` and `-transcoder` flags will configure the node
  to be an orchestrator and a transcoder meaning that it will receive video from
  broadcasters, transcode the video itself and return the transcoded results to
  the broadcasters
- `-nvidia` is used to specify a comma delimited string of Nvidia GPU IDs. The
  flag is only required when transcoding with Nvidia GPUs
- `-pricePerUnit` is used to specify the price (wei per pixel) for transcoding.
  The flag is required on startup, but the value can be changed later on
- `-serviceAddr` is used to specify the publicly accessible address that the
  orchestrator should receive requests at. Changing this requires a blockchain
  transaction, so it's preferable to use a hostname for a domain you own, not
  an IP address that may change.

If you did not use the `-ethAcctAddr` flag, an ETH account will automatically be
created and you will be prompted for a passphrase:

```bash
I0302 15:26:06.886115   25387 accountmanager.go:49] No Ethereum account found. Creating a new account
I0302 15:26:06.886134   25387 accountmanager.go:50] This process will create a new Ethereum account for this Livepeer node
I0302 15:26:06.886138   25387 accountmanager.go:51] Please enter a passphrase to encrypt the Private Keystore file for the Ethereum account.
I0302 15:26:06.886143   25387 accountmanager.go:52] This process will ask for this passphrase every time it is launched
I0302 15:26:06.886147   25387 accountmanager.go:53] (no characters will appear in Terminal when the passphrase is entered)
Passphrase:
```

This account will be used to identify your orchestrator on the network. The
wallet file for the account will be stored under `~/.lpData/arbitrum-one-mainnet/keystore` by
default. It is **very important** to safeguard both the wallet file and the
passphrase because together they allow someone to sign messages and send
transactions using the account.

Once node completes the start up process, you should see the following logs
indicating that the node is publicly accessible:

```bash
I0302 15:27:26.456804   25418 rpc.go:167] Listening for RPC on :8935
I0302 15:27:28.463151   25418 rpc.go:207] Received Ping request
```

## Fund your account with ETH and LPT

Your account should have:

- ETH to pay for transaction fees
  - Recommendation: Start with a small amount and add more when needed.
    `livepeer` and `livepeer_cli` will inform you if your account's ETH balance
    is insufficient to pay for transaction fees when attempting to submit the
    transactions
- LPT to stake in order to activate
  - Recommendation: Check the [explorer](https://explorer.livepeer.org/) and
    find the 100th orchestrator with the most stake. This is the amount of stake
    required for you to activate. Note that more stake will help you receive
    more work

## Activate

The active orchestrator set consists of the top 100 orchestrators with the most
LPT stake on the network.

Once you have your orchestrator running, you can activate using `livepeer_cli`.

1. Run `livepeer_cli`

2. Enter the number corresponding to the
   `Invoke multi-step "become an orchestrator"` option

3. Set the percentage of LPT rewards that you will keep (the rest will be shared
   with your delegators):

   ```bash
   Enter block reward cut percentage (current=0 default=10) - >
   ```

4. Set the percentage of ETH fees that you will share with your delegators (the
   rest you will keep):

   ```bash
   Enter fee share percentage (current=0 default=5) - >
   ```

5. Set the number of pixels in a single unit of work you will charge a price
   for:

   ```bash
   Enter amount of pixels that make up a single unit (default: 1 pixel) >
   ```

   You can use the default (1) and change this later if needed.

6. Set the price (in wei) that you will charge per unit of work:

   ```bash
   Enter the price for 1 pixels in Wei (required) >
   ```

   This can be the same as or different from the value used with the
   `-pricePerUnit` flag when starting your orchestrator.

7. Set the publicly accessible service address that your orchestrator will
   receive requests as:

   ```bash
   Enter the public host:port of node (default: 1.1.1.1:8935)>
   ```

   This should be the same as the value used with the `-serviceAddr` flag when
   starting your orchestrator.

8. Set the amount of LPTU (1 LPT = 1e18 LPTU) that you want to stake:

   ```bash
   You must bond to yourself in order to become a orchestrator
   Enter bond amount - >
   ```

   **Important note:** This amount is denominated in LPTU, so if you want to bond 5 LPT,
   you would enter 5000000000000000000.

   If the active orchestrator set is full (i.e. at 100), the minimum stake you
   need to stake to activate is the lowest total stake of an orchestrator in the
   active set. You can find this information in the
   [explorer](https://explorer.livepeer.org/).

9. Wait for transactions to confirm. You should see the logs of your
   orchestrator indicating transactions being submitted and confirmed on-chain.

   After the transactions have confirmed, your orchestrator will join the active
   set in the following round.

