# Sources, Research, and REVIEW Flags
## Setup Paths Section — setup-paths.mdx + path-requirements.mdx
**Date:** 2026-03-13

---

## Pages produced

| File | Replaces | Status |
|------|----------|--------|
| `setup-paths.mdx` | `gateway-setup-paths.mdx` + `on-chain-vs-off-chain.mdx` | Full rewrite — decision matrix, 5 paths, on-chain/off-chain split, persona routing |
| `path-requirements.mdx` | `sdk-alt-gateways.mdx` + `dual-gateway-config.mdx` | New consolidated page — tabbed per-path prereqs with confirmed technical content |
| `setup-paths-evaluation.md` | — | Journey scoring + gap analysis |

---

## Sources

### Tier 1 — Technical ground truth (verified)

| Source | Used for | Verification |
|--------|----------|-------------|
| **Remote Signers design doc** `/mnt/project/Remote_signers.md` | Off-chain mode; remote signer protocol; stateless state-passing rules; transcoding explicitly excluded; alternative implementations rationale | Verified — primary design doc by j0sh |
| **`ai-configuration.mdx`** `/mnt/user-data/uploads/ai-configuration.mdx` | Docker command; port 8937; `-gateway` flag; `-httpIngest`; startup log format; Linux-only warning; WRONG off-chain claim identified and corrected | Verified — uploaded current repo file |
| **`setup.mdx`** `/mnt/user-data/uploads/setup.mdx` | Hardware specs (4-8 CPU, 16-32 GB RAM); OS compatibility table; port list; off-chain vs on-chain mode distinction | Verified — uploaded current repo file |
| **`fund-gateway.mdx`** `/mnt/user-data/uploads/fund-gateway.mdx` | ETH deposit 0.065 ETH; reserve 0.03 ETH minimum; 0.36 ETH production recommended; CLI flow; issue #3744 reference | Verified — uploaded current repo file |
| **`pricing-configuration.mdx`** `/mnt/user-data/uploads/pricing-configuration.mdx` | `-maxPricePerUnit` flag; `-maxPricePerCapability` JSON format; `-pixelsPerUnit`; AI pricing models | Verified — uploaded current repo file |
| **Gateways research report** `/mnt/project/gateways-research-report.md` | All pre-verified technical facts; off-chain discovery methods; pain points list; SDK class details | Verified — project research document |
| **Gateways IA planning doc** `/mnt/project/gateways-ia-planning.md` | All 5 personas; journey questions; gap analysis (GW-GAP series); page naming; section structure decisions | Verified — project planning document |

### Tier 2 — Community and Discord (verified from transcript)

| Source | Used for | Verification |
|--------|----------|-------------|
| **Discord #local-gateways** `/mnt/project/local-gateways-discord.txt` | Off-chain gateway confusion; clearinghouse vs remote signer naming; BYOC HTTP vs gRPC distinction; discovery PR status | Verified — Discord transcript |
| **j0sh Discord statements** | GetOrchestrators endpoint description; "I'll publish docs soon" (confirming gap); payment triggered by output not input | Verified from transcript |
| **Elite Encoder** | `signer.eliteencoder.net` reference; GetOrchestrators endpoint proposal; OrchestratorSession spec | REVIEW: signer URL needs live verification |

### Tier 3 — GitHub repositories (access restricted; facts from research report)

| Source | Used for | Verification |
|--------|----------|-------------|
| `github.com/j0sh/livepeer-python-gateway` | Class names (OrchestratorSession, PaymentSession, LiveVideoJob); examples path; discovery options | Could not fetch directly — class names from research report; REVIEW against current main branch |
| `github.com/livepeer/go-livepeer` PRs #3791, #3822 | Remote signer PRs; off-chain mode confirmed; stateless design | Referenced in design doc |
| `github.com/livepeer/naap` | NaaP JWT auth pattern; Developer API Keys description | Could not fetch README — details from research report |
| `github.com/livepeer/go-livepeer/issues/3744` | Reserve requirement reduction issue | Referenced in fund-gateway.mdx upload |

### Tier 4 — External references (not fetched; referenced by URL only)

| Source | Used for | Status |
|--------|----------|--------|
| `tools.livepeer.cloud` | Finding AI orchestrators; filtering by pipeline | Confirmed active per prior research |
| `explorer.livepeer.org` | Orchestrator registry | Known production URL |
| `bridge.arbitrum.io` | ETH bridging to Arbitrum | Known production URL |
| `arb1.arbitrum.io/rpc` | Free public Arbitrum RPC | Known public endpoint |
| Arbitrum Alchemy/Infura endpoints | Paid RPC options | Known providers |

---

## All REVIEW flags — by priority

### High — user-facing factual claims needed before publishing

| Flag | Claim | Pages | Owner |
|------|-------|-------|-------|
| RS-01 | Is `signer.eliteencoder.net` still live, free, and production-suitable? | Both pages | Elite Encoder / #local-gateways |
| RS-02 | ETH deposit 0.065 + reserve 0.03 ETH — still current amounts? Check issue #3744 | `path-requirements.mdx` | Mehrdad / Rick |
| RS-03 | Docker image tag — `master` or pinned release? | Both pages | Rick |
| RS-04 | `-remoteSignerAddr` flag name and exact format | `setup-paths.mdx` | j0sh |
| RS-05 | GetOrchestrators endpoint — merged to python-gateway main and/or on signer.eliteencoder.net? | `path-requirements.mdx` | j0sh / Elite Encoder |

### Medium — accuracy gaps to resolve before launch

| Flag | Claim | Pages | Owner |
|------|-------|-------|-------|
| RM-01 | Docker Compose flags for dual gateway — `-network`, `-ethUrl`, `-ethKeystoreDir` format | `path-requirements.mdx` | Rick |
| RM-02 | `-remoteSigner` flag name and exact startup command | `path-requirements.mdx` | j0sh |
| RM-03 | OrchestratorSession, PaymentSession, LiveVideoJob class names current in python-gateway main? | `path-requirements.mdx` | j0sh / Elite Encoder |
| RM-04 | `-maxPricePerCapability` JSON format — confirm live model IDs | `path-requirements.mdx` | Peter (AI SPE Lead) |
| RM-05 | NaaP public URL and production API stability | `setup-paths.mdx` | Qiang Han |

### Low — enrichment items

| Flag | Item | Pages | Owner |
|------|------|-------|-------|
| RL-01 | Titan Node YouTube (@TitanNode) — most recent gateway setup video (2024+) | `setup-paths.mdx` | Foundation content |
| RL-02 | Livepeer Foundation YouTube — AI gateway overview or setup video | `setup-paths.mdx` | Foundation content |
| RL-03 | livepeer.cloud/how-to-run-a-livepeer-gateway-node — URL still active? | `setup-paths.mdx` | Cloud SPE |
| RL-04 | Owncast + Livepeer integration tutorial URL | `path-requirements.mdx` | Cloud SPE |
| RL-05 | Issue #3744 resolved? If so, update reserve amount | `path-requirements.mdx` | Rick |
| RL-06 | BYOC remote signer support — confirmed shipped for batch AI? | `path-requirements.mdx` SDK tab | j0sh / Peter |

---

## Critical accuracy correction documented

**The wrong claim in existing `ai-configuration.mdx`:**
> "If you run your gateway off-chain — you will need to run your own Orchestrator node ie. Have access to a GPU and set it up as an Orchestrator."

This is factually incorrect. Off-chain AI gateways connect directly to on-chain orchestrators via the remote signer. No GPU or own orchestrator is required. Both pages correct this with explicit `<Warning>` components.

Source confirming correction: Remote Signers design doc — "the go-livepeer gateway can operate entirely in off-chain mode for production Live AI workloads, interacting with on-chain orchestrators. No orchestrator changes are required."

**The same error also exists in `setup.mdx`** (Off-chain tab). This must be fixed in that file separately.

---

## Docs.json structure recommendation

```json
{
  "group": "Setup Options",
  "pages": [
    "v2/gateways/guides/setup-options/setup-paths",
    "v2/gateways/guides/setup-options/path-requirements"
  ]
}
```

`sidebarTitle` values:
- `setup-paths.mdx` → `"Setup Paths"`
- `path-requirements.mdx` → `"Requirements by Path"`

---

## Discarded stubs

| Stub | Decision |
|------|----------|
| `on-chain-vs-off-chain.mdx` | Absorbed into `setup-paths.mdx` as tabbed decision section |
| `sdk-alt-gateways.mdx` | Absorbed into `path-requirements.mdx` as SDK/Alternative tab |
| `dual-gateway-config.mdx` | Absorbed into `path-requirements.mdx` as Dual Gateway tab |

All four original stubs scored 0 against persona journey questions. No content was carried forward.
