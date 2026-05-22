# Off-Chain Gateway Quickstart

Run a gateway without managing an Arbitrum wallet. Off-chain mode delegates payment signing to a remote signer service and uses manually specified orchestrator addresses instead of on-chain discovery. This is a valid production configuration — many production gateways operate this way.

---

## Prerequisites

- **Remote signer endpoint**: either a community-hosted signer or a self-deployed instance.
  {/_ REVIEW: community signer URL — verify with: Discord #local-gateways _/}
- **Orchestrator addresses**: one or more orchestrator Ethereum addresses to connect to. Off-chain mode has no on-chain discovery — specify orchestrators explicitly.
- **Operating system**: Linux or macOS.
- **Docker Engine** (Docker method only).

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

3. Start the gateway in off-chain mode:

```bash
docker run -d \
  --name livepeer-gateway \
  --network host \
  -v ~/.lpData:/root/.lpData \
  livepeer/go-livepeer:stable \
  -gateway \
  -network offchain \
  -orchAddr ORCHESTRATOR_ADDRESS_1,ORCHESTRATOR_ADDRESS_2 \
  -httpAddr 0.0.0.0:8935 \
  -rtmpAddr 0.0.0.0:1935 \
  -monitor \
  -v 6
```

{/_ REVIEW: -network offchain flag name — verify with: go-livepeer latest tagged release _/}

Replace `ORCHESTRATOR_ADDRESS_1,ORCHESTRATOR_ADDRESS_2` with the Ethereum addresses of orchestrators you want to route work to. Separate multiple addresses with commas, no spaces.

4. No ETH deposit required. The remote signer handles all payment operations — the gateway itself holds no private key and no ETH.

5. Confirm the node is running:

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
  -network offchain \
  -orchAddr ORCHESTRATOR_ADDRESS_1,ORCHESTRATOR_ADDRESS_2 \
  -httpAddr 0.0.0.0:8935 \
  -rtmpAddr 0.0.0.0:1935 \
  -monitor \
  -v 6
```

---

## Remote signer

A remote signer is a separate service that holds an Ethereum private key and signs payment tickets on behalf of the gateway. The gateway connects to the signer over HTTPS — it never accesses the private key directly.

**Why use a remote signer:**

- Isolates key material from the gateway process.
- Allows multiple gateways to share a single funded account.
- Reduces operational burden — no per-gateway wallet management.

**Deployment options:**

- **Community-hosted signer**: available for testing and smaller deployments.
  {/_ REVIEW: community signer URL and availability — verify with: Discord #local-gateways _/}
- **Self-hosted signer**: deploy your own instance for full control over key material. Refer to the Remote Signers guide for deployment instructions.
  {/_ REVIEW: Remote Signers guide location — verify with: docs-v2 information architecture _/}

---

## On-chain vs off-chain comparison

| Aspect                 | On-chain                                | Off-chain                                   |
| ---------------------- | --------------------------------------- | ------------------------------------------- |
| Orchestrator discovery | Automatic via ServiceRegistry           | Manual — specify addresses with `-orchAddr` |
| Payment                | Direct ETH deposit in TicketBroker      | Via remote signer                           |
| ETH management         | Gateway manages wallet and deposits     | Remote signer manages key                   |
| Setup complexity       | Higher — requires Arbitrum RPC, funding | Lower — no chain interaction                |
| Production ready       | Yes                                     | Yes                                         |

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

A valid M3U8 playlist response confirms transcoding is active and the gateway is routing to the specified orchestrators.

### AI inference

```bash
curl -X POST http://localhost:8937/text-to-image \
  -H "Content-Type: application/json" \
  -d '{"prompt": "a network of interconnected nodes"}'
```

{/_ REVIEW: AI gateway port 8937 and /text-to-image endpoint — verify with: go-livepeer latest release + AI subnet docs _/}

---

## Port reference

| Port | Protocol | Purpose                            |
| ---- | -------- | ---------------------------------- |
| 1935 | RTMP     | Video stream ingest                |
| 8935 | HTTP     | Video gateway API and HLS playback |
| 8937 | HTTP     | AI gateway API                     |
| 5935 | HTTP     | `livepeer_cli` interface           |

{/_ REVIEW: port 5935 for livepeer_cli in off-chain mode — verify with: go-livepeer default configuration _/}

---

## Exit state

After completing these steps, you have a running off-chain gateway that:

- Connects to manually specified orchestrators via `-orchAddr`.
- Delegates payment signing to a remote signer — no local wallet or ETH required.
- Accepts RTMP ingest on port 1935 and serves HLS on port 8935.
- Routes AI inference requests on port 8937.

Dispatch at least one confirmed transcoding or AI job to validate end-to-end operation before moving to production configuration.
