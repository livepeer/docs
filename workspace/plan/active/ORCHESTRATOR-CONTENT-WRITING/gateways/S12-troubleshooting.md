---
title: Troubleshooting
description: Diagnose and resolve common gateway failures by symptom.
pageType: guide
purpose: troubleshoot
lifecycleStage: troubleshoot
audience: gateway
status: draft
---

# Troubleshooting

Structured diagnostic paths organised by symptom. Start with the symptom that matches your observation, then follow the numbered steps in order. Each step either resolves the issue or narrows the cause.

---

## Symptom 1: No jobs routing at all

The gateway is running but no jobs reach orchestrators.

1. **Confirm the node is running and reachable:**
   ```bash
   curl http://localhost:8935/status
   ```
   No response → the process is not running or is bound to a different interface. Check process status and port binding.

2. **Check port accessibility from outside the host.** Ports 8935 (HTTP ingest), 1935 (RTMP), and 8937 (AI inference) must be reachable from wherever jobs originate. Firewall rules, security groups, and Docker port mappings are common culprits.

3. **Check orchestrator discovery.** Open livepeer_cli and list connected orchestrators.
   - Zero orchestrators: your `MaxPricePerUnit` is too low (no orchestrators qualify at that price), there is a network connectivity issue to Arbitrum, or the `-network` flag is wrong (e.g., `rinkeby` instead of `arbitrum-one-mainnet`).
   - Orchestrators listed but no routing: move to Symptom 2 or 3 depending on workload type.

4. **Check deposit (on-chain gateways).** livepeer_cli → Option 13. Zero deposit means no payment tickets can be issued, and orchestrators will reject all jobs from your gateway. Top up via Option 11 (see S10).

5. **Check remote signer (off-chain gateways).** Is the signer endpoint reachable from the gateway? Is the signing key valid and not expired? Test the signer endpoint directly with a health check request.

---

## Symptom 2: Video transcoding failures

Jobs are dispatched but transcoding results are missing or errored.

1. **`OrchestratorCapped` in logs:** The selected orchestrator has hit its session limit. The gateway should automatically try another orchestrator, but if the pool is small, all may be capped. Widen the pool by increasing `MaxPricePerUnit` or add specific orchestrators to `-orchAddr`.

2. **Segment failures in logs:** Individual segments are failing at the orchestrator. This indicates orchestrator-side issues (GPU errors, resource exhaustion). Check whether the failures concentrate on a single orchestrator. Adjust weight factors in orchestrator selection to deprioritise unreliable nodes.

3. **No transcoding output, no errors:** Check `transcodingOptions.json` format. An invalid JSON file silently produces no renditions — the gateway accepts the input but generates nothing. Validate the file:
   ```bash
   python3 -m json.tool transcodingOptions.json
   ```

4. **Partial renditions:** Some profiles produce output, others do not. The failing profiles may request capabilities the selected orchestrator does not support (e.g., specific codec or resolution). Check orchestrator advertised capabilities against your profile requirements.

---

## Symptom 3: AI inference failures

AI requests return errors or time out.

1. **"No orchestrators available for capability":** No orchestrator on the network advertises the requested pipeline/model combination. Verify the pipeline name and model ID are correct. Check available capabilities via the AI service registry or Livepeer Explorer.

2. **Timeout on first request:** Cold-start latency. The orchestrator is loading the model into GPU memory, which can take 10–60 seconds depending on model size. Wait and retry. For production workloads, use session affinity (`-orchAddr` pinning or sticky sessions) to keep models warm on specific orchestrators.

3. **Wrong port:** AI inference requests go to port 8937, not 8935. Verify your application targets the correct port. A request to 8935 with an AI payload will not produce the expected response.

4. **Intermittent failures:** If AI requests succeed sometimes and fail at other times, the orchestrator pool contains a mix of nodes — some with the required model, some without. The gateway's orchestrator selection may route to a node that lacks the model. Pin to known-capable orchestrators with `-orchAddr` or increase selection weight for capability match.

---

## Symptom 4: Payment and deposit issues

Payment-related errors in logs or orchestrators refusing jobs.

1. **"TicketParams expired":** Gateway and orchestrator have a timing mismatch on ticket validity. Usually resolves on retry within the same session. If persistent, check Arbitrum RPC connectivity — the gateway may be unable to fetch current block data, causing stale ticket parameters.

2. **Deposit depleted:** livepeer_cli → Option 13 shows zero deposit. Top up immediately via Option 11 (see S10). Until the deposit is replenished, no orchestrator will accept jobs.

3. **"Insufficient funds for gas":** The gateway wallet needs ETH for on-chain transactions (top-ups, withdrawals, ticket redemptions). This is separate from the TicketBroker deposit. Send ETH directly to the gateway's Ethereum address on Arbitrum.

4. **Reserve decreasing:** The deposit hit zero and the reserve is covering outstanding tickets. This is an emergency. Top up the deposit and investigate why the deposit was not replenished before depletion. Review your monitoring alerts (see S11).

---

## Symptom 5: High latency

Jobs complete but take longer than expected.

1. **Check orchestrator selection geography.** If the gateway routes to orchestrators on a different continent, network round-trip adds latency. Use `-orchAddr` to pin to geographically proximate orchestrators, or adjust selection weights to favour low-latency nodes.

2. **Check Arbitrum RPC latency.** Run a direct latency test to your RPC endpoint:
   ```bash
   curl -w "%{time_total}\n" -o /dev/null -s https://your-rpc-endpoint/
   ```
   If RPC latency exceeds 500ms, switch to a faster provider or a local Arbitrum node.

3. **Check orchestrator load.** Orchestrators with high session counts respond slower. If your gateway is pinned to a small set of orchestrators via `-orchAddr`, those nodes may be overloaded. Widen the pool.

4. **AI-specific: cold model loading.** First requests to a model incur loading latency. Use session affinity to keep models warm. For production, pre-warm models by sending a dummy request on startup.

5. **Video-specific: high rendition count.** Requesting many output renditions (8+) increases per-segment processing time. Reduce rendition count if latency is more important than rendition coverage.

---

## General diagnostic tools

| Tool | Command | What it shows |
|------|---------|---------------|
| Node status | `curl http://localhost:8935/status` | Process liveness, basic state |
| CLI inspection | `livepeer_cli -host 127.0.0.1 -http 5935` | Full node state, orchestrator list, deposit |
| Log search | `grep "error\|Error\|FATAL" /var/log/livepeer-gateway.log` | Error-level events |
| Prometheus metrics | `curl http://localhost:7935/metrics` | All exported metrics |
| Network connectivity | `curl -v https://arb1.arbitrum.io/rpc` | Arbitrum RPC reachability |

---

**Exit state:** You have identified the root-cause category and applied the corresponding corrective action.
