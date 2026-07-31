# Content to include across gateway pages

Items removed from `node-pipelines/pipeline-configuration.mdx` and issues discovered
during cross-page review. Each item notes which page should absorb it.

---

## For pricing-strategy.mdx

### 1. livepeer_cli Option 9 tip (MISSING)

The removed pipeline-configuration page advised:

> Use `livepeer_cli → Option 9` to see currently advertised orchestrator prices.

pricing-strategy.mdx mentions `livepeer_cli` only in the context of Option 16
(set broadcast config). Option 9 for **querying** orchestrator prices is not
documented. Add to the "Competitive Positioning" section or the livepeer_cli tab
under "Configuration Methods".

**REVIEW:** Confirm Option 9 is the correct option number in current builds.

### 2. USD mode described as "cents per pixel" (PARTIALLY COVERED)

The removed section stated:

> When set, the gateway interprets `-maxPricePerUnit` as USD cents per pixel
> (converted to wei at current ETH price) rather than absolute wei. This
> stabilises your cost ceiling against ETH price volatility.

pricing-strategy.mdx shows the `0.02USD` notation example but does not
explicitly explain the conversion semantics (cents per pixel vs absolute USD).
Add a clarifying sentence to the "USD-denominated pricing" subsection.

### 3. "1000 wei per pixel" starting point guidance (PARTIALLY COVERED)

The removed section stated:

> A value of `1000` wei per pixel is a reasonable starting point for production.
> Adjust based on orchestrator availability - if jobs are failing because no
> orchestrators are below your ceiling, raise it.

pricing-strategy.mdx takes a different approach (query cheapest orchestrators,
set cap 20-30% above). Consider whether both approaches add value or if the
current framing is sufficient. If the "1000 wei" number is outdated, do not add.

**REVIEW:** Confirm whether 1000 wei/pixel is still a reasonable starting value.

---

## For scaling.mdx

### 4. Specific Prometheus metric names (MISSING)

The removed dual gateway section referenced two specific metric names that are
not present anywhere in the docs:

- `livepeer_orchestrator_swaps` - rate of orchestrator swaps on video jobs
  (indicator of GPU contention)
- `livepeer_discovery_errors_total` - climbing value indicates AI discovery
  failures

scaling.mdx mentions "swap rates" and latency conceptually but does not use
these specific metric names. Add to the resource contention signals section if
confirmed.

**REVIEW:** Confirm these are real Prometheus metric names exposed by go-livepeer.
If the names are wrong, find the correct metric names.

### 5. RESOLVED: Single -httpAddr for both video and AI

The removed dual gateway section had a REVIEW flag asking whether both
`-httpAddr` flags can coexist. Based on the quickstart `code.jsx`, the answer
is: **there is only one `-httpAddr`**. Both video API and AI API endpoints run
on the same port. The `-httpIngest` flag enables AI endpoints on that port.

All quickstart docker-compose templates (video, AI, dual) use port 8935 for
`-httpAddr`. Dual gateways expose both video and AI on the same HTTP port.

**Status:** Resolved. No action needed.

---

## For pricing-strategy.mdx (orchestrator context - optional)

### 6. Orchestrator-side aiModels.json context (INTENTIONALLY REMOVED)

The removed section documented `aiModels.json` fields (`warm`,
`optimization_flags.SFAST`, `optimization_flags.DEEPCACHE`) to help gateway
operators understand what orchestrators advertise. This is orchestrator
configuration, not gateway configuration, so it was removed from the gateway
guides by design.

If gateway operators need visibility into orchestrator pricing structure, consider
adding a brief "What orchestrators advertise" subsection to pricing-strategy.mdx
that explains the pricing model without reproducing the full aiModels.json
reference. The orchestrator-side detail belongs in orchestrator documentation.

**Decision:** No action unless gateway operators report confusion about
orchestrator price advertisements.

---

## Cross-page issues discovered during review

### 7. Port 8937 vs 8935 discrepancy (FIXED in ai-pipelines.mdx)

The quickstart `code.jsx` uses port **8935** for ALL gateway types (video, AI,
dual). The `-httpIngest` flag enables AI endpoints on whatever port `-httpAddr`
is set to. There is no separate AI port.

Previous docs referenced port 8937 for AI in ai-pipelines.mdx (mermaid diagram,
example requests, Docker commands, off-chain start command). These have been
updated to 8935 to match the quickstart.

**REVIEW:** Confirm with Rick/j0sh that 8935 is the correct standard port for
AI gateway endpoints. The old 8937 references may have been from an earlier
convention or a specific deployment pattern.

### 8. `-maxPricePerCapability` JSON format inconsistency (FIXED in ai-pipelines.mdx)

ai-pipelines.mdx had an incorrect simplified JSON format:
```json
{"text-to-image/model_id": 300}
```

The correct format (per quickstart `CONFIG_FILES` and pricing-strategy.mdx) uses
the `capabilities_prices` array:
```json
{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "default",
      "price_per_unit": 1000,
      "pixels_per_unit": 1
    }
  ]
}
```

This has been fixed in ai-pipelines.mdx.

### 9. `livepeer_orchestrator_swaps` metric exists in video-pipelines.mdx

Previously flagged as MISSING in scaling.mdx. The metric is actually documented
in `node-pipelines/video-pipelines.mdx`. scaling.mdx should cross-reference
rather than duplicate.
