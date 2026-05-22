# On-Chain Gateway Quickstart

Run an on-chain gateway connected to the Livepeer network on Arbitrum One. The gateway discovers orchestrators via the on-chain ServiceRegistry, manages its own Ethereum wallet, and deposits ETH into the TicketBroker to pay for transcoding and AI inference jobs.

{/_ REVIEW: ServiceRegistry as discovery mechanism — verify with: go-livepeer source + protocol docs _/}

---

## Prerequisites

- **ETH on Arbitrum One**: minimum 0.1 ETH for testing; 0.36 ETH for production (covers deposit, reserve, and gas).
  {/_ REVIEW: ETH amounts (0.1 test, 0.36 production) — verify with: go-livepeer docs + GitHub #3744 _/}
- **Arbitrum RPC endpoint**: Alchemy, Infura, or `arb1.arbitrum.io/rpc` for initial testing.
- **Operating system**: Linux recommended for production; macOS acceptable for development.
- **Docker Engine + NVIDIA Container Toolkit** (Docker method only).

---

## Install and start the gateway

### Docker method (recommended)

1. Pull the image:

```bash
docker pull livepeer/go-livepeer:stable
```

2. Create a persistent data directory:

```bash
mkdir -p ~/.lpData
```

3. Start the gateway:

```bash
docker run -d \
  --name livepeer-gateway \
  --network host \
  -v ~/.lpData:/root/.lpData \
  livepeer/go-livepeer:stable \
  -gateway \
  -network arbitrum-one-mainnet \
  -ethUrl https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY \
  -httpAddr 0.0.0.0:8935 \
  -rtmpAddr 0.0.0.0:1935 \
  -monitor \
  -v 6
```

{/_ REVIEW: flag names (-gateway, -network arbitrum-one-mainnet, -ethUrl, -httpAddr, -rtmpAddr, -monitor, -v) — verify with: go-livepeer latest tagged release _/}

Replace `YOUR_API_KEY` with your Arbitrum RPC provider key.

4. Create the Ethereum account. On first start, the node generates an Ethereum keypair and prompts for a passphrase. Enter a strong passphrase and record it — there is no recovery mechanism.

5. Fund the gateway via `livepeer_cli`:

```bash
docker exec -it livepeer-gateway livepeer_cli
```

- Select **Option 11** — Deposit ETH into the TicketBroker.
- Deposit at least **0.065 ETH** (deposit) and **0.03 ETH** (reserve).

{/_ REVIEW: livepeer_cli option number (11) and deposit/reserve amounts — verify with: livepeer_cli current version _/}

6. Confirm the node is running:

```bash
curl http://localhost:8935/status
```

A JSON response with node information confirms the gateway is operational.

---

### Binary method

1. Download the latest release from [go-livepeer releases](https://github.com/livepeer/go-livepeer/releases).

2. Extract and install:

```bash
tar -xzf livepeer-linux-amd64.tar.gz && sudo mv livepeer /usr/local/bin/
```

3. Start the gateway:

```bash
livepeer \
  -gateway \
  -network arbitrum-one-mainnet \
  -ethUrl https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY \
  -httpAddr 0.0.0.0:8935 \
  -rtmpAddr 0.0.0.0:1935 \
  -maxPricePerUnit 300 \
  -pixelsPerUnit 1 \
  -monitor \
  -v 6
```

{/_ REVIEW: -maxPricePerUnit and -pixelsPerUnit defaults — verify with: go-livepeer latest tagged release _/}

4. Fund the gateway via `livepeer_cli` — same procedure as Docker step 5 above. Run `livepeer_cli` in a separate terminal while the node is running.

---

## Test the setup

### Video transcoding

Send an RTMP stream and retrieve the transcoded output:

```bash
# Ingest a test stream
ffmpeg -re -f lavfi -i testsrc=size=1280x720:rate=30 \
  -c:v libx264 -b:v 3000k -f flv rtmp://localhost:1935/test_stream

# In another terminal, verify HLS output
curl http://localhost:8935/stream/test_stream.m3u8
```

A valid M3U8 playlist response confirms transcoding is active.

### AI inference

```bash
curl -X POST http://localhost:8937/text-to-image \
  -H "Content-Type: application/json" \
  -d '{"prompt": "a network of interconnected nodes"}'
```

{/_ REVIEW: AI gateway port 8937 and /text-to-image endpoint — verify with: go-livepeer latest release + AI subnet docs _/}

A JSON response containing image data confirms AI routing is functional.

---

## Port reference

| Port | Protocol | Purpose                            |
| ---- | -------- | ---------------------------------- |
| 1935 | RTMP     | Video stream ingest                |
| 8935 | HTTP     | Video gateway API and HLS playback |
| 8937 | HTTP     | AI gateway API                     |
| 5935 | HTTP     | `livepeer_cli` interface           |

{/_ REVIEW: port 5935 for livepeer_cli — verify with: go-livepeer default configuration _/}

---

## Exit state

After completing these steps, you have a running on-chain gateway that:

- Holds a funded Ethereum account on Arbitrum One.
- Discovers orchestrators through the on-chain ServiceRegistry.
- Accepts RTMP ingest on port 1935 and serves HLS on port 8935.
- Routes AI inference requests on port 8937.

Dispatch at least one confirmed transcoding or AI job to validate end-to-end operation before moving to production configuration.
