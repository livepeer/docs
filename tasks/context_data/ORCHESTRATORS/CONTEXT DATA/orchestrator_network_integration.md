# Network Integration

## Purpose
This document defines how an orchestrator integrates into the Livepeer network after installation and validation. It covers registration, service advertisement, pricing configuration, payment routing, and discoverability for both video transcoding and AI inference workloads.

---

## 1. On-Chain Registration (Protocol Layer)

An orchestrator must:

- Bond LPT
- Register reward and fee parameters
- Configure reward cut and fee share
- Ensure correct service URI

### Required Contracts
- BondingManager
- TicketBroker
- RoundsManager

### Required Steps
1. Bond LPT via Explorer or CLI
2. Set reward cut (%)
3. Set fee share (%)
4. Set service URI
5. Call `reward()` each round

---

## 2. Service URI Advertisement

The service URI advertises the endpoint used by gateways and broadcasters.

Example:
```
https://node.example.com:8935
```

Requirements:
- Publicly reachable
- TLS configured
- Correct ports exposed
- Load balancer if multi-GPU

---

## 3. Pricing Configuration

Video pricing:
- Price per pixel
- Segment duration pricing

AI pricing:
- Price per inference
- Price per token
- Model-specific pricing

Pricing must reflect:
- GPU model
- VRAM
- Latency
- Throughput

---

## 4. Payment Routing

Livepeer uses probabilistic micropayments.

Integration requires:
- TicketBroker on Arbitrum
- ETH deposit handling
- Redemption monitoring

Orchestrator must:
- Monitor winning tickets
- Redeem regularly
- Avoid redemption batching inefficiencies

---

## 5. Gateway Integration (Network Layer)

Gateways discover orchestrators via:
- Stake-weighted selection
- Capability filtering
- Price filtering

AI gateways require:
- Model declaration
- Compute capability flags
- Health check endpoint

---

## 6. Health & Discoverability

Expose:
- /status endpoint
- GPU metrics
- Inference availability
- Transcoder capacity

Monitoring tools:
- Prometheus
- Grafana
- Explorer visibility

---

## 7. Validation Checklist

- [ ] Bonded LPT
- [ ] Registered service URI
- [ ] Reward cut configured
- [ ] Fee share configured
- [ ] Reward() called this round
- [ ] TLS enabled
- [ ] Firewall configured
- [ ] Gateway reachability tested

---

## 8. Common Integration Failures

- Incorrect service URI
- Reward not called
- Ticket redemption ignored
- Pricing misconfiguration
- Firewall blocking gateway IPs

---

## 9. Video vs AI Differences

Video:
- Segment-based
- Continuous workload
- Pixel pricing

AI:
- Request-based
- Model-dependent latency
- Token/inference pricing

AI nodes must explicitly advertise supported models.

---

## 10. Next Steps

After network integration:
- Implement monitoring
- Optimize pricing
- Configure delegation incentives
- Scale GPU cluster

---

End of document.

