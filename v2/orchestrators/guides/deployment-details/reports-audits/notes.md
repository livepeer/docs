
## O-T vs Dual
```bash
review these 2 files for duplication:
dual-mode-configuration
orchestrator-transcoder-setup
```

These are **NOT duplicates**. They cover fundamentally different deployment architectures.

| Dimension | `dual-mode-configuration` | `orchestrator-transcoder-setup` |
|---|---|---|
| What it is | Single process, single machine, video + AI workloads combined | Two separate processes on separate machines; orchestrator handles protocol, transcoder handles GPU |
| Problem it solves | “How do I add AI to my video node?” | “How do I scale beyond one machine / isolate my wallet from GPU workers?” |
| Process count | 1 `go-livepeer` process | 2+ `go-livepeer` processes (1 orchestrator + N transcoders) |
| Machines | 1 | 2+ |
| Key flags | `-aiWorker`, `-aiModels`, `-aiModelsDir` | `-orchSecret`, `-orchAddr` (on transcoder side) |
| GPU location | Same machine as protocol | Separate machine(s) from protocol |
| Security model | Wallet + GPU on same machine | Wallet isolated from GPU workers |
| Lines | 429 | 399 |
| Job story | J2 (add AI to existing video) | J4 (scale, security isolation) |
| Overlap | None meaningful | None meaningful |

**Verdict:** Keep both. No merge needed. They answer completely different questions:

- **Dual mode:** “I have one machine. How do I run both workloads?”
- **O-T split:** “I have multiple machines. How do I distribute the work?”

The only conceptual connection is that an O-T split **can** run in dual mode, where each transcoder handles both video and AI. That is a **cross-reference**, not a merge.

One thing to note: the `dual-mode` PURPOSE comment still says the target is **Config & Optimisation**, but the execution plan locked it into **Deployment Details**. The PURPOSE comment needs updating, but that is a **Phase 3 cleanup item**.
