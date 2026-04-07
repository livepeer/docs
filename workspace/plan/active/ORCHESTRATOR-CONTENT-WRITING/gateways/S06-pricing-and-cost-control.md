# Pricing and Cost Control

Configure what your gateway pays per job and set spending ceilings to prevent cost overruns. The gateway enforces price limits at the orchestrator-selection stage — any orchestrator priced above your ceiling is excluded before job dispatch.

---

## MaxPricePerUnit

The primary price control. Sets the maximum price per pixel the gateway will accept for video transcoding jobs. Orchestrators advertising a price above this value are filtered out during selection.

{/* REVIEW: default MaxPricePerUnit value — verify with: go-livepeer latest release */}

Set via CLI flag:

```bash
livepeer -gateway \
  -maxPricePerUnit 300
```

Trade-off:
- **Higher value** — more orchestrators qualify, better availability, higher per-job cost.
- **Lower value** — fewer orchestrators qualify, risk of routing failures if too few remain, lower per-job cost.

Start with the network median price and adjust based on your job success rate. If jobs fail with `no orchestrators available`, increase the value. If costs are too high, decrease it.

---

## USD-denominated pricing

Price caps can be denominated in USD instead of wei:

```bash
livepeer -gateway \
  -maxPricePerUnit 0.41USD
```

The gateway fetches the current ETH/USD rate from a Chainlink price feed on Arbitrum and converts at job time. This eliminates the need to adjust wei-denominated caps when ETH price moves.

{/* REVIEW: Chainlink ETH/USD feed integration on Arbitrum — verify with: go-livepeer source */}

---

## MaxPricePerCapability

Per-pipeline price caps for AI jobs. Overrides `MaxPricePerUnit` for specific AI capabilities, allowing fine-grained cost control across different inference workloads.

Configured via a JSON file:

```bash
livepeer -gateway \
  -maxPricePerCapability /path/to/maxPricePerCapability.json
```

Example `maxPricePerCapability.json`:

```json
{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "ByteDance/SDXL-Lightning",
      "price_per_unit": 1700000,
      "pixels_per_unit": 1
    },
    {
      "pipeline": "audio-to-text",
      "price_per_unit": 12882811
    }
  ]
}
```

{/* REVIEW: example price values — verify with: current market rates via Orchestrator Price API */}

Entries without a `model_id` apply to all models within that pipeline. Entries with a `model_id` override the pipeline-level cap for that specific model.

---

## Pricing models by workload type

| Workload | Pricing model | Unit |
|----------|---------------|------|
| Video transcoding | Per-pixel | width x height x frame count x price per pixel |
| Image generation (text-to-image, image-to-image, upscale) | Per-pixel | output pixels x price per pixel |
| Audio-to-text | Per-request | milliseconds of audio |
| LLM inference | Per-request | tokens |
| Live AI / Cascade | Per-interval | time interval |

{/* REVIEW: pricing model details per workload — verify with: go-livepeer AI documentation */}

---

## autoAdjustPrice

When enabled, the gateway adjusts the price it offers based on network conditions. This can result in paying less than `MaxPricePerUnit` when the network has spare capacity.

Enabled by default. Disable with:

```bash
livepeer -gateway \
  -autoAdjustPrice=false
```

With `autoAdjustPrice` disabled, the gateway offers exactly `MaxPricePerUnit` to orchestrators. This gives deterministic pricing but removes the ability to capture lower rates during low-demand periods.

{/* REVIEW: autoAdjustPrice default state and behaviour — verify with: go-livepeer latest release */}

---

## Cost ceiling vs orchestrator pool

The relationship between price cap and available orchestrator pool is direct: every reduction in `MaxPricePerUnit` removes orchestrators from the candidate set. Monitor two signals:

1. **Job failure rate** — if failures increase after lowering the cap, the remaining orchestrator pool is too small or unreliable.
2. **Actual price paid** — if the gateway consistently pays well below the cap (visible in logs), there is room to lower the ceiling without affecting availability.

For AI workloads, set per-capability prices in `maxPricePerCapability.json` rather than relying on the global `MaxPricePerUnit`. AI pricing varies by orders of magnitude across pipelines — a single global cap is too coarse.
