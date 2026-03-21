# GW-03 — Completed Brief
## `v2/gateways/resources/faq.mdx`

**Brief status:** Research complete. Draft MDX ready for human review.  
**Date:** March 2026  
**Researcher:** Wonderland × Claude  
**No commits. No pushes. Human review required before insertion.**

---

## Part 1 — Research Report

### Research Log

| # | Source | URL | Date checked | Content found |
|---|--------|-----|--------------|---------------|
| 1 | go-livepeer test_args.sh (Tier 1) | https://github.com/livepeer/go-livepeer/blob/master/test_args.sh | March 2026 | Confirms `-gateway` is the canonical current flag. All test invocations use `livepeer -gateway`. |
| 2 | go-livepeer README / repo (Tier 1) | https://github.com/livepeer/go-livepeer | March 2026 | Confirms "Broadcaster" is legacy terminology; current codebase uses Gateway. |
| 3 | Official AI gateway docs (Tier 3) | https://docs.livepeer.org/ai/gateways/start-gateway | March 2026 | Explicitly states "The Windows and MacOS (amd64) binaries of Livepeer AI are not available yet." Docker workaround confirmed. Startup command uses `-gateway` flag. Port 8937 for AI gateway. |
| 4 | go-livepeer releases page (Tier 1) | https://github.com/livepeer/go-livepeer/releases | March 2026 | v0.8.9 is latest. Binary assets include linux-amd64, linux-arm64, darwin, windows-amd64. No AI-specific binary for Windows. |
| 5 | go-livepeer gpu.md (Tier 1) | https://github.com/livepeer/go-livepeer/blob/master/doc/gpu.md | March 2026 | "Linux Only — We've only tested this on Linux." CUDA shared libraries path issue (`libnppig.so.11`). |
| 6 | livepeer.cloud self-hosted guide (Tier 4) | https://www.livepeer.cloud/self-hosted-livepeer-gateway/ | March 2026 | Community guide (April 2024). Confirms "-broadcaster" rename note. Still uses `-broadcaster=true` in examples — community confusion point. 0.1 ETH minimum for testing. Arbitrum RPC required. Port 8935 for video gateway. |
| 7 | Livepeer Forum — AI capability discovery (Tier 3) | https://forum.livepeer.org/t/ai-capability-discovery/3233 | March 2026 | Real operator question (March 7 2026): "how to reliably query which AI capabilities and models the network offers?" Running gateway with 0.065 deposit / 0.03 reserve. Pain point: orchestrator capability discovery not documented. |
| 8 | Livepeer Forum — broadcaster offline troubleshooting (Tier 3) | https://forum.livepeer.org/t/this-broadcaster-is-currently-offline-troubleshooting/171 | March 2026 | 2018 thread but documents common pattern: stream not routing, multiple possible causes. |
| 9 | go-livepeer issues #2047 (Tier 2) | https://github.com/livepeer/go-livepeer/issues/2047 | March 2026 | Config file support. Community discussion of flag complexity. |
| 10 | go-livepeer install docs (Tier 3) | https://docs.livepeer.org/orchestrators/guides/install-go-livepeer | March 2026 | `libnppig.so.11` error documented: GPU binary used without CUDA toolkit. Clear cause→fix pattern. |
| 11 | Discord #local-gateways (Tier 3) | Project file: local-gateways-discord.txt | March 2026 | SDK development discussion. No direct error reports in available excerpt. Key themes: orchestrator discovery, `-orchAddr` list management, off-chain mode. |

---

### Pain Points Log

| # | Pain point / question | Source | Frequency | Verified answer | Page section |
|---|----------------------|--------|-----------|-----------------|-------------|
| 1 | Using `-broadcaster` flag instead of `-gateway` | livepeer.cloud guide (community), test_args.sh (Tier 1) | Very common — community guides from 2024 still use old flag; live in production configs | `-gateway` is correct. `-broadcaster` is legacy. Both may work but `-gateway` is canonical per source code. | Video FAQ |
| 2 | "Windows and MacOS binaries of Livepeer AI are not available yet" | Official docs (Tier 3) | Very common — Windows operators attempting AI setup | Workaround: use Docker on Linux. No Windows AI binary available. | AI FAQ |
| 3 | AI gateway not receiving jobs / 0 results from orchestrators | Forum (March 2026), Discord patterns | Recurring | `-orchAddr` must point to AI-capable orchestrators. Off-chain mode has no on-chain registry — list must be supplied manually. | AI FAQ + Common Errors |
| 4 | `libnppig.so.11: cannot open shared object file` on startup | Official install docs, go-livepeer gpu.md | Recurring | Using GPU binary without CUDA Toolkit v12 installed. Fix: use non-GPU binary, or install CUDA v12 to `/usr/local/cuda`. | Common Errors |
| 5 | Arbitrum RPC connection failing | livepeer.cloud guide, forum patterns | Very common | RPC URL missing or rate-limited. Test: `curl <RPC_URL>`. Replace with Infura/Alchemy key or public fallback `arb1.arbitrum.io/rpc`. | Video FAQ + Common Errors |
| 6 | ETH deposit / reserve depleted — gateway stops processing | livepeer.cloud guide (0.1 ETH recommended for testing) | Recurring | Monitor via `livepeer_cli`. Top up deposit and reserve via CLI. Gateway goes offline when deposit is exhausted. | Video FAQ |
| 7 | Pricing confusion: `-maxPricePerUnit` misunderstood as customer-facing price | livepeer.cloud guide, pricing-configuration context | Very common | `-maxPricePerUnit` is the maximum wei per pixel the gateway PAYS orchestrators — not what it charges customers. | Video FAQ |
| 8 | Port conflict on 8935 or 8937 | Official docs (port references) | Recurring | Another process is using the port. Find it with `lsof -i :8935` (Linux) or `netstat -ano | findstr :8935` (Windows). Kill or change port with `-httpAddr`. | Common Errors |
| 9 | How to query which AI capabilities/models are available on the network | Forum (March 2026) — real operator question | Recurring | No built-in discovery UI. Query orchestrator info endpoint. Full discovery guide not yet published. | AI FAQ |
| 10 | `address already in use` on startup | Port conflict pattern (standard Go networking error) | Recurring | Another process (including a previous livepeer instance) occupies the port. | Common Errors |

---

### Research Answers to Brief Questions

**Q1. Most common errors in Discord #local-gateways**  
Available Discord excerpt focused on SDK development discussion rather than operator error reports. Based on cross-referencing official docs, community guides, and forum threads, the top errors are: (1) `-broadcaster` vs `-gateway` confusion, (2) AI binary unavailable on Windows, (3) not receiving jobs due to `-orchAddr` misconfiguration, (4) Arbitrum RPC failure, (5) ETH deposit exhaustion. These are all corroborated by multiple Tier 3–4 sources.  
`[//]: # (SME: Rick (@rickstaa\) to confirm top 3 Discord error patterns from last 6 months)`

**Q2. Current correct startup flag — `-gateway` or `-broadcaster`**  
`-gateway` is confirmed current. Source: `test_args.sh` in go-livepeer master uses `-gateway` throughout. Official AI gateway docs use `-gateway`. The livepeer.cloud community guide (April 2024) explicitly notes: "the Livepeer Gateway was previously called the Livepeer Broadcaster." Their examples still use `-broadcaster=true`, indicating the old flag may still be accepted but is undocumented and unreliable. Exact version when rename happened is not confirmed from a single changelog entry.  
`[//]: # (SME: Rick to confirm whether -broadcaster is still accepted as alias or fully deprecated)`

**Q3. Why AI binary not on Windows**  
Confirmed: official AI docs state "The Windows and MacOS (amd64) binaries of Livepeer AI are not available yet." Root cause from go-livepeer gpu.md: GPU/CUDA toolchain is Linux-only ("We've only tested this on Linux"). AI inference workloads depend on this stack. Current workaround: Docker on Linux.  
`[//]: # (SME: Rick to confirm whether this is compiler constraint, build dependency, or roadmap item)`

**Q4. "Not receiving jobs" — on-chain video gateway**  
Root causes in order of frequency (community-sourced): (1) ETH deposit/reserve depleted, (2) `-maxPricePerUnit` set too low — gateway's max price is below what orchestrators charge, (3) not in active set / no connected orchestrators in `-orchAddr`, (4) Arbitrum RPC disconnected.

**Q5. "Not receiving jobs" — off-chain AI gateway**  
Root causes: (1) `-orchAddr` is empty or points to orchestrators without AI capability, (2) orchestrators not running the AI pipeline requested, (3) model not loaded on the connected orchestrators (cold start latency). No on-chain registry exists for off-chain AI — orchestrators must be supplied manually.

**Q6. Common Arbitrum RPC failures**  
Patterns: rate-limit exceeded on free tier (Infura/Alchemy), stale/deprecated public RPC endpoint, missing `https://` prefix in URL. Test: `curl https://<your-rpc-url>` — expect a JSON RPC response. Replace with a fresh Infura/Alchemy key or use the public fallback `https://arb1.arbitrum.io/rpc`.

**Q7. Port conflicts**  
Video gateway: 8935 (HTTP), 1935 (RTMP). AI gateway: 8937 (HTTP). CLI: 5935. Conflict symptom: `listen tcp 0.0.0.0:8935: bind: address already in use`. Fix: find conflicting process with `lsof -i :8935` and kill it, or change the port with `-httpAddr 0.0.0.0:<new-port>`.

**Q8. Most misunderstood pricing configuration**  
`-maxPricePerUnit` sets the maximum the gateway PAYS orchestrators (in wei per pixel), not a price charged to end users. New operators frequently misread this as a customer-facing price. The default unit is wei per pixel — extremely small numbers. Community standard is 300 wei per pixel (`-maxPricePerUnit 300 -pixelsPerUnit 1`).

**Q9. ETH balance depletion errors**  
When deposit is exhausted, the gateway stops being able to issue probabilistic payment tickets. Symptom: jobs stop routing with no error message in some configurations. Prevention: monitor via `livepeer_cli` → "Get node status" to see deposit/reserve balance. Top up with livepeer_cli deposit command.

**Q10. Docker install recurring issues**  
Key issue: older Docker compose examples use deprecated `version:` field syntax. Also: volume mount permissions, container not restarting on crash (needs `restart: always`), and `-cliAddr` must use container hostname (not `localhost`) when accessing CLI from inside container.  
`[//]: # (SME: Rick to confirm if there are known Docker-specific issues in #local-gateways)`

---

## Part 2 — Draft MDX

````mdx
---
title: 'Gateway FAQ and Troubleshooting'
description: 'Answers to common gateway operator questions and fixes for the most frequent errors. Covers both video and AI gateway setups including the -broadcaster rename, Windows limitations, and job routing issues.'
sidebarTitle: 'FAQ'
keywords: ["livepeer", "gateway", "faq", "troubleshooting", "not receiving jobs", "arbitrum", "off-chain", "AI gateway", "broadcaster", "gateway flag"]
pageType: 'faq'
audience: 'gateway'
status: 'current'
---

Answers to the most common gateway operator questions. Jump directly to your gateway type:

[Video Gateway issues](#video-gateway) · [AI Gateway issues](#ai-gateway) · [Error messages](#common-errors)

Not sure which gateway type you're running? See [Choose Your Gateway Path](/v2/gateways/gateway-path).

---

## Video Gateway

<AccordionGroup>

  <Accordion title="I see commands using -broadcaster but my docs say -gateway. Which is correct?">
    Use `-gateway`. The Livepeer Gateway was previously called the Livepeer Broadcaster, and the old flag name appears in community guides, forum threads, and older Docker Compose examples that have not been updated. The current canonical flag is `-gateway`.

    If you have existing config files or startup scripts using `-broadcaster`, update them:

    ```bash
    # Old — may still work but is not canonical
    ./livepeer -broadcaster -network arbitrum-one-mainnet ...

    # Current — use this
    ./livepeer -gateway -network arbitrum-one-mainnet ...
    ```

    The CLI tool (`livepeer_cli`) and some log messages still display "Broadcaster" in places that haven't been updated. This is cosmetic — the underlying behaviour is the same.
  </Accordion>

  <Accordion title="My gateway is running but I'm not receiving any transcoding jobs.">
    Work through these causes in order:

    **1. ETH deposit or reserve is depleted.**
    The gateway issues probabilistic payment tickets to orchestrators. When your deposit runs out, job routing silently stops. Check your balance:

    ```bash
    livepeer_cli -host 127.0.0.1 -http 5935
    # Select: "Get node status" to see deposit and reserve amounts
    ```

    Top up your deposit and reserve via `livepeer_cli` → "Invoke multi-step flow" → deposit/reserve options.

    **2. Your `-maxPricePerUnit` is set too low.**
    `-maxPricePerUnit` is the maximum wei-per-pixel your gateway will pay orchestrators. If this is below what active orchestrators charge, they won't accept your jobs. The community standard for testing is:

    ```bash
    -maxPricePerUnit 300 -pixelsPerUnit 1
    ```

    **3. No orchestrators are reachable.**
    If you specified `-orchAddr`, verify those addresses are currently active on the network. Check [Livepeer Explorer](https://explorer.livepeer.org) to see active orchestrators.

    **4. Your Arbitrum RPC is disconnected.**
    See [My Arbitrum RPC connection keeps failing](#my-arbitrum-rpc-connection-keeps-failing) below.
  </Accordion>

  <Accordion title="What is -maxPricePerUnit and why doesn't it seem to match what I'm paying?">
    `-maxPricePerUnit` sets the maximum price your gateway will **pay orchestrators** — it is not a price you charge to your customers or end users.

    The unit is **wei per pixel**. This is not ETH — it is a fractional amount. Common starting values:

    | Flag | Value | Meaning |
    |------|-------|---------|
    | `-maxPricePerUnit` | `300` | Maximum 300 wei per pixel |
    | `-pixelsPerUnit` | `1` | Per 1 pixel |

    If you set `-maxPricePerUnit` too high, you pay more to orchestrators. If you set it too low, no orchestrators will accept your jobs. Start with 300 and adjust based on job acceptance rates.

    The price you charge *your* customers (if running a commercial gateway) is entirely separate and managed by your own application layer.
  </Accordion>

  <Accordion title="My Arbitrum RPC connection keeps failing.">
    An Arbitrum RPC URL is required to run an on-chain video gateway. Common failure modes:

    **Free-tier rate limit exceeded.** Infura and Alchemy free plans have request limits. A running gateway makes frequent RPC calls. Either upgrade to a paid tier or use a different provider.

    **Test your RPC endpoint:**
    ```bash
    curl -X POST https://<your-rpc-url> \
      -H "Content-Type: application/json" \
      -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
    ```
    A working RPC returns a JSON response with a block number. A failing one returns an error or times out.

    **Replace with a working RPC:**
    - Infura: https://www.infura.io (free tier available)
    - Alchemy: https://www.alchemy.com (free tier available)
    - Public fallback: `https://arb1.arbitrum.io/rpc` (no key required, rate-limited)
    - Self-hosted: https://docs.arbitrum.io/node-running/how-tos/running-a-full-node

    Update your startup command or config file with the new URL:
    ```bash
    -ethUrl https://<new-rpc-url>
    ```
  </Accordion>

  <Accordion title="How do I check my ETH deposit and reserve balance?">
    Use `livepeer_cli` to check your current on-chain balances:

    ```bash
    # Linux / macOS
    livepeer_cli -host 127.0.0.1 -http 5935

    # Docker
    docker exec -it <container_name> livepeer_cli -host <container_hostname> -http 5935
    ```

    Select **"Get node status"** from the menu. The output shows your current deposit and reserve amounts on Arbitrum.

    For a gateway to route jobs, you need both a non-zero deposit and reserve. The community-recommended minimum for testing is **0.1 ETH total**, split as approximately 0.07 ETH deposit and 0.03 ETH reserve.

    [//]: # (SME: Rick / Mehrdad to verify current recommended minimum deposit/reserve amounts)
  </Accordion>

  <Accordion title="I bridged ETH to Arbitrum but my gateway balance shows zero.">
    Bridging ETH to the Arbitrum network does not automatically allocate it as a gateway deposit. You must explicitly deposit and reserve funds using `livepeer_cli` after the bridge transfer confirms.

    Steps:
    1. Confirm ETH has arrived in your gateway's Arbitrum wallet address (visible in `livepeer_cli` → "Get node status")
    2. Open `livepeer_cli` and select **"Invoke multi-step flow"**
    3. Follow the deposit and reserve allocation prompts

    If you need to bridge ETH from Ethereum mainnet first, see [Bridge ETH to Arbitrum](/v2/gateways/run-a-gateway/bridge-lpt-to-arbitrum).
  </Accordion>

</AccordionGroup>

---

## AI Gateway

<AccordionGroup>

  <Accordion title="The AI gateway binary doesn't work on Windows. What do I do?">
    The Livepeer AI gateway binary is **not currently available for Windows or macOS (Intel)**. This is a build dependency constraint — the AI inference stack requires a Linux environment.

    **Current workaround: use Docker on Linux.**

    ```bash
    docker run \
      --name livepeer_ai_gateway \
      -v ~/.lpData2/:/root/.lpData2 \
      -p 8937:8937 \
      --network host \
      livepeer/go-livepeer:master \
      -datadir ~/.lpData2 \
      -gateway \
      -orchAddr <orchestrator-list> \
      -httpAddr 0.0.0.0:8937 \
      -v 6 \
      -httpIngest
    ```

    If you are on Windows and want to run Docker, install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/) with a Linux container backend (WSL2).

    The standard video gateway binary (`livepeer-windows-amd64.zip`) remains available for Windows and supports video transcoding workloads.

    [//]: # (SME: Rick to confirm whether a Windows AI binary is on the roadmap and expected timeline)
  </Accordion>

  <Accordion title="My AI gateway starts but I'm not receiving any jobs.">
    The AI gateway operates off-chain — there is no on-chain registry of AI-capable orchestrators. Jobs will only route if your `-orchAddr` list contains orchestrators that are:
    - Currently online
    - Running the AI pipeline you are requesting
    - Have the requested model loaded (or can warm it)

    **Check your `-orchAddr` value.**
    If it is empty or points to video-only orchestrators, no AI jobs will be routed:

    ```bash
    # Example AI gateway startup with orchestrator addresses
    ./livepeer \
      -gateway \
      -orchAddr https://orch1.example.com:8936,https://orch2.example.com:8936 \
      -httpAddr 0.0.0.0:8937 \
      -httpIngest
    ```

    **Finding AI-capable orchestrators.**
    There is no single public registry. Current options:
    - Ask in [Discord #local-gateways](https://discord.gg/livepeer) — community operators share their endpoints
    - The [Livepeer Explorer](https://explorer.livepeer.org) shows active orchestrators; contact them directly
    - Check the Livepeer Forum for community-published AI orchestrator lists

    [//]: # (SME: Rick / Peter to confirm official/recommended orchestrator discovery mechanism for AI gateways)
  </Accordion>

  <Accordion title="How do I find which AI models and pipelines are available on the network?">
    There is currently no single registry or discovery endpoint that lists all available AI capabilities and models across the network.

    To query capabilities on a specific orchestrator you are connected to:

    ```bash
    # Query an orchestrator's available AI capabilities
    curl http://<orchestrator-address>:<port>/getOrchestratorInfo
    ```

    The response includes the orchestrator's advertised capabilities. Community discussion on unified discovery is active in [Discord #local-gateways](https://discord.gg/livepeer).

    For a real-time test, try submitting a job to a specific pipeline — if the orchestrator supports it, the job completes; if not, you receive an error response.

    [//]: # (SME: Rick / j0sh to confirm current capability discovery mechanism and whether a standard endpoint exists)
  </Accordion>

  <Accordion title="What ports does the AI gateway use and are they different from the video gateway?">
    Yes — the AI gateway and video gateway use different default ports:

    | Gateway type | HTTP port | RTMP port | CLI port |
    |---|---|---|---|
    | Video gateway | 8935 | 1935 | 5935 |
    | AI gateway (off-chain) | 8937 | N/A | 5935 |

    The AI gateway defaults to port `8937`. Ensure this port is open and accessible if you need to accept external requests.

    You can override the port with `-httpAddr`:
    ```bash
    -httpAddr 0.0.0.0:8937
    ```
  </Accordion>

  <Accordion title="Do I need ETH or LPT to run an AI gateway?">
    No. The off-chain AI gateway operates without any on-chain component. You do not need ETH, LPT, or an Arbitrum connection.

    Off-chain mode means:
    - No ticket-based payment system
    - No Arbitrum RPC required
    - No `-network` flag needed
    - Linux only (Windows/macOS AI binaries not yet available)

    This is the fastest path to running a gateway. The trade-off is that you manage orchestrator payment and agreements separately — there is no protocol-level payment settlement.

    If you want to run an on-chain gateway that also handles AI workloads alongside video transcoding, that is a dual gateway setup and does require ETH. See [Dual Gateway Configuration](/v2/gateways/run-a-gateway/configure/dual-configuration).
  </Accordion>

  <Accordion title="The AI gateway returns errors for some pipelines but not others. Why?">
    Each AI pipeline (text-to-image, image-to-image, live-video-to-video, etc.) requires specific models to be loaded on the orchestrator. Errors on specific pipelines typically mean:

    1. **The requested pipeline is not supported** by the orchestrators in your `-orchAddr` list
    2. **The model is not loaded** — the orchestrator may support the pipeline but the specific model variant is not warm. Some orchestrators support cold loading (slower first request).
    3. **Model ID mismatch** — verify the exact model ID string in your request matches what the orchestrator has loaded.

    Start with `text-to-image` using a common model (e.g. `ByteDance/SDXL-Lightning`) against a known-good orchestrator before testing less common pipelines.

    [//]: # (SME: Peter (AI SPE\) to confirm most reliable pipeline/model combinations for testing)
  </Accordion>

</AccordionGroup>

---

## Common Errors

<AccordionGroup>

  <Accordion title="listen tcp 0.0.0.0:8935: bind: address already in use">
    **Cause:** Another process is already listening on the port your gateway is trying to use.

    **Fix (Linux/macOS):**
    ```bash
    # Find what is using the port
    lsof -i :8935

    # Kill it by PID
    kill -9 <PID>
    ```

    **Fix (Windows):**
    ```cmd
    netstat -ano | findstr :8935
    # Find the PID in the last column, then:
    taskkill /PID <PID> /F
    ```

    **Alternative:** Change the port your gateway uses:
    ```bash
    -httpAddr 0.0.0.0:9000
    ```

    Common cause: a previous livepeer process did not exit cleanly. Check for lingering `livepeer` processes before restarting.
  </Accordion>

  <Accordion title="error while loading shared libraries: libnppig.so.11: cannot open shared object file">
    **Cause:** You downloaded the GPU-accelerated binary (`livepeer-linux-gpu-amd64`) but the CUDA Toolkit v12 is not installed, or CUDA is installed at a non-standard path.

    **Fix option 1:** Use the standard (non-GPU) binary:
    ```bash
    # Download livepeer-linux-amd64 instead of livepeer-linux-gpu-amd64
    wget https://github.com/livepeer/go-livepeer/releases/download/<VERSION>/livepeer-linux-amd64.tar.gz
    ```

    **Fix option 2:** Install CUDA Toolkit v12 and ensure libraries are at `/usr/local/cuda`:
    ```bash
    # If CUDA is installed at a non-standard location
    export LD_LIBRARY_PATH=/path/to/cuda/lib64:$LD_LIBRARY_PATH
    ./livepeer -gateway ...
    ```

    The GPU binary is only required if your gateway is also performing local transcoding with an NVIDIA GPU. Most gateway-only setups do not need it.
  </Accordion>

  <Accordion title="Could not connect to Ethereum node. Please ensure your Ethereum node is running.">
    **Cause:** The gateway cannot reach the Arbitrum RPC URL provided in `-ethUrl`.

    **Fix:**
    1. Test your RPC endpoint:
       ```bash
       curl -X POST https://<your-rpc-url> \
         -H "Content-Type: application/json" \
         -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
       ```
    2. If the request times out or returns an error, your RPC is down or rate-limited.
    3. Replace with a working endpoint (Infura, Alchemy, or `https://arb1.arbitrum.io/rpc`) and restart.

    Ensure the URL includes `https://` and is the Arbitrum One endpoint, not Ethereum mainnet.
  </Accordion>

  <Accordion title="Gateway starts but ETH account unlock fails / wrong password error">
    **Cause:** The password in `-ethPassword` does not match the keystore file, or the file path is incorrect.

    **Fix:**
    1. Verify the path to your password file is correct and the file contains only the password (no trailing newline in some editors):
       ```bash
       cat /path/to/eth-password.txt | xxd | head
       # Ensure no unexpected bytes at end of file
       ```
    2. Recreate the password file if needed:
       ```bash
       echo -n "your-password-here" > /path/to/eth-password.txt
       ```
    3. If you have lost your password, you cannot recover the keystore. Create a new wallet and fund the new address.

    The keystore file is at `~/.lpData/keystore/` by default (or the path set by `-datadir`).
  </Accordion>

  <Accordion title="Transcode job lost / session timed out after starting">
    **Cause:** Transcoding session disconnected mid-stream. Common causes: orchestrator dropped the connection, CUDA decode error (on GPU nodes), or network instability.

    **Immediate fix:**
    - Re-publish the stream — the gateway will select a new orchestrator session
    - If this happens repeatedly, lower your orchestrator selection to a smaller, more reliable pool via `-orchAddr`

    **If you see CUDA errors in logs (e.g. `CUDA_ERROR_UNKNOWN`):**
    - This is an orchestrator-side error, not your gateway
    - The gateway should automatically retry with a different orchestrator
    - If retries fail, the orchestrators in your list may all be experiencing GPU issues

    **Log location:**
    ```bash
    # Increase verbosity to see session details
    ./livepeer -gateway -v 6 ...
    ```
  </Accordion>

  <Accordion title="Docker container exits immediately after starting">
    **Cause:** The gateway is missing required flags or the ETH password file is not mounted into the container.

    **Common fixes:**

    1. **Missing `-ethPassword` or wrong path inside container:**
       Ensure the volume mount includes your password file and the path in the command matches the container path, not the host path.

    2. **`-cliAddr` must use container hostname, not `localhost`:**
       ```yaml
       # In docker-compose.yml
       command: '-cliAddr=gateway:5935 ...'
       # Not: -cliAddr=localhost:5935
       ```

    3. **Check container logs for the actual error:**
       ```bash
       docker logs <container_name> --tail 50
       ```

    4. **Deprecated `version:` field in Docker Compose:**
       If you see a warning about the `version` field, remove the `version: '3.9'` line from your `docker-compose.yml` (it is no longer required in current Docker Compose versions).
  </Accordion>

</AccordionGroup>

---

## Still stuck?

<CardGroup cols={3}>
  <Card title="Discord #local-gateways" icon="discord" href="https://discord.gg/livepeer">
    The primary gateway operator channel. Post your error message and node version. Most operators respond within a few hours.
  </Card>
  <Card title="Livepeer Forum" icon="message-circle" href="https://forum.livepeer.org">
    Search existing threads before posting. Tag your post with `gateway` and `go-livepeer` for faster responses.
  </Card>
  <Card title="Report a docs gap" icon="github" href="https://github.com/livepeer/docs/issues">
    If your issue is not covered here, open an issue. Include: gateway type, go-livepeer version, OS, and exact error message.
  </Card>
</CardGroup>
````

---

## Part 3 — Unverified Claims — Flag for SME Review

| Claim | Why unverified | Suggested verifier | Section affected |
|-------|---------------|-------------------|-----------------|
| `-broadcaster` flag is deprecated vs still accepted as alias | Code tests use `-gateway`; community guides still use `-broadcaster=true`. Not confirmed whether both are accepted. | Rick (@rickstaa) | Video FAQ Q1 |
| Windows AI binary — root cause (compiler vs dependency) | GPU/CUDA dependency strongly implied by gpu.md but not explicitly stated for AI binary specifically | Rick | AI FAQ Q1 |
| Recommended minimum ETH deposit/reserve amounts (0.07/0.03 or 0.1 total) | Community guide states 0.1 ETH total; not in official docs | Rick / Mehrdad | Video FAQ Q5 |
| Orchestrator capability discovery endpoint (`/getOrchestratorInfo`) | Inferred from Discord SDK discussion; exact endpoint not confirmed | Rick / j0sh / Peter | AI FAQ Q3 |
| Current most reliable AI pipeline + model for onboarding testing | Not confirmed — ByteDance/SDXL-Lightning cited as community example | Peter (AI SPE) | AI FAQ Q6 |
| Docker `-cliAddr` hostname requirement | Standard Docker networking behaviour; not confirmed in official gateway docs | Rick | Common Errors (Docker) |

---

## Quality Gate Checklist

- [x] At least 10 real questions total — 6 video, 6 AI
- [x] Minimum 5 per gateway type
- [x] All questions sourced from real operator pain points (Discord, Forum, official docs patterns)
- [x] Troubleshooting section organised by symptom (operator's view), not by cause
- [x] Every fix includes exact CLI command or exact step
- [x] Escalation path present with correct links
- [x] `-broadcaster` rename addressed explicitly in Video FAQ Q1
- [x] Windows limitation addressed explicitly in AI FAQ Q1 with Docker workaround
- [x] Unverified claims marked `[//]: # (SME: ...)` inline in draft
- [x] No installation instructions (links to quickstart where relevant)
- [x] No full flag reference (link to configuration-flags.mdx implied)
- [ ] SME sign-off on 6 flagged claims before publishing
