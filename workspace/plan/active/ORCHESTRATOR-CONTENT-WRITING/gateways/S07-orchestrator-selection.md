# Orchestrator Selection

The gateway runs a multi-stage selection algorithm to decide which orchestrator handles each job. Understanding this pipeline lets you tune the trade-offs between cost, reliability, latency, and decentralisation.

---

## Selection algorithm

The algorithm runs four stages in order:

### 1. Discovery

The gateway builds a candidate list of orchestrators from two sources:

- **On-chain (ServiceRegistry)** — the gateway reads registered orchestrators from the Livepeer protocol contracts on Arbitrum. This is the default discovery method for on-chain gateways.
- **Off-chain (manual list)** — specify orchestrators directly via the `-orchAddr` flag. Useful for testing or private deployments.

```bash
livepeer -gateway \
  -orchAddr https://orch1.example.com:8935,https://orch2.example.com:8935
```

{/* REVIEW: -orchAddr flag syntax and delimiter — verify with: go-livepeer latest release */}

### 2. Filter

The gateway removes orchestrators that do not meet requirements:

- Orchestrators priced above `MaxPricePerUnit` are excluded.
- For AI jobs, orchestrators priced above the relevant `MaxPricePerCapability` entry are excluded.
- For AI jobs, orchestrators that do not advertise the requested pipeline and model are excluded — an orchestrator without the matching capability is never selected, regardless of score.

### 3. Score

Remaining orchestrators are ranked by weighted factors:

| Factor | Signal | Effect |
|--------|--------|--------|
| Stake weight | LPT bonded to the orchestrator | Protocol trust signal — higher-staked orchestrators have more at risk |
| Price weight | Advertised price per unit | Lower price ranks higher |
| Latency / performance | Measured round-trip time | Lower RTT ranks higher |
| Random weight | Randomisation factor | Distributes load across orchestrators |

### 4. Select

The top-scored orchestrator receives the job. If the session fails (orchestrator unresponsive, transcoding error), the gateway fails over to the next orchestrator in the ranked list.

---

## Tuning weight factors

CLI flags control the relative importance of each scoring factor:

{/* REVIEW: exact flag names (selectRandFreq, selectStakeWeight, selectPriceWeight, selectLatencyWeight) — verify with: go-livepeer latest release */}

- `-selectRandFreq` — frequency of random orchestrator selection (0.0 to 1.0). Higher values increase load distribution at the expense of optimal selection.
- `-selectStakeWeight` — weight given to staked LPT in scoring.
- `-selectPriceWeight` — weight given to price in scoring.

### Tuning profiles

**Cost-optimised**: Increase price weight, decrease stake weight. The gateway preferentially routes to cheaper orchestrators.

```bash
livepeer -gateway \
  -selectPriceWeight 1.0 \
  -selectStakeWeight 0.1
```

**Reliability-optimised**: Increase stake weight. Higher-staked orchestrators have a stronger economic incentive to perform well.

```bash
livepeer -gateway \
  -selectStakeWeight 1.0 \
  -selectPriceWeight 0.3
```

**Latency-optimised**: The selection algorithm naturally favours lower-latency orchestrators via measured RTT. No specific flag override is needed — keep other weights moderate and the RTT measurement does the work.

{/* REVIEW: weight flag values and ranges — verify with: go-livepeer source */}

---

## Failover behaviour

When a selected orchestrator becomes non-responsive mid-session, the gateway re-routes to the next orchestrator in the scored list. Key constraints:

- **Session state is not transferred.** The new orchestrator starts the job fresh.
- **For video transcoding**, this means the new orchestrator re-transcodes from the current segment onward. Previously transcoded segments from the original orchestrator remain valid.
- **For AI jobs**, the request is retried against the new orchestrator from scratch.

---

## AI-specific routing

For AI inference jobs, the selection pipeline adds a capability filter before scoring. The gateway checks each orchestrator's advertised capabilities against the requested pipeline and model:

1. Orchestrator must advertise the requested pipeline (e.g., `text-to-image`).
2. If the request specifies a `model_id`, the orchestrator must advertise support for that model.
3. Only orchestrators passing both checks enter the scoring stage.

This means the weight tuning described above applies only within the set of capable orchestrators. An orchestrator with a high stake and low price that does not run the requested model will never be selected for that job.
