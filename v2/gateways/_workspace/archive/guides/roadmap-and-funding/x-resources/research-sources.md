# Sources, REVIEW Flags, and docs.json Structure
## Gateways — Motivations, Feasibility, and Opportunities Section

---

## All pages produced

### Motivations and feasibility (guides/)
- `why-run-a-gateway.mdx` — rewrite of existing page
- `gateway-requirements.mdx` — replacement for v1 `hardware-requirements.mdx`
- `gateway-economics.mdx` — rewrite of `economics.mdx`
- `ecosystem-projects.mdx` — replacement for empty `community-projects.mdx`

### Opportunities group (guides/opportunities/)
| File | Persona(s) | Replaces |
|------|-----------|---------|
| `operator-opportunities.mdx` | A, B, E | Existing `operator-opportunities.mdx` (rewritten) |
| `video-transcoding-opportunity.mdx` | D | New |
| `ai-builder-opportunity.mdx` | A, E | New |
| `sdk-gateway-opportunity.mdx` | C | New |
| `spe-grant-model.mdx` | B, E | New |

---

## Recommended docs.json structure

```json
{
  "group": "Opportunities",
  "pages": [
    "v2/gateways/guides/opportunities/operator-opportunities",
    "v2/gateways/guides/opportunities/video-transcoding-opportunity",
    "v2/gateways/guides/opportunities/ai-builder-opportunity",
    "v2/gateways/guides/opportunities/sdk-gateway-opportunity",
    "v2/gateways/guides/opportunities/spe-grant-model"
  ]
}
```

**Proposed sidebarTitle values:**

| File | sidebarTitle |
|------|-------------|
| `operator-opportunities.mdx` | Commercial Opportunity |
| `video-transcoding-opportunity.mdx` | Video Transcoding |
| `ai-builder-opportunity.mdx` | AI Builder Path |
| `sdk-gateway-opportunity.mdx` | SDK and Custom Gateways |
| `spe-grant-model.mdx` | SPE Grant Model |

---

## Sources used across all pages

### Tier 1 — Technical ground truth

| Source | Path | Used for |
|--------|------|----------|
| Remote Signers design doc | `/mnt/project/Remote_signers.md` | Off-chain mode; remote signer protocol; alternative implementations rationale; stateless state-passing rules; transcoding explicitly excluded |
| go-livepeer source | `github.com/livepeer/go-livepeer` | Flag names, binary availability per OS, `-broadcaster` → `-gateway` rename |
| Gateways research report | `/mnt/project/gateways-research-report.md` | Pre-verified technical facts across all pages |
| livepeer-python-gateway | `github.com/j0sh/livepeer-python-gateway` | SDK class names, discovery methods, LV2V integration |

### Tier 2 — Foundation sources

| Source | Path | Used for |
|--------|------|----------|
| Gateways IA planning doc | `/mnt/project/gateways-ia-planning.md` | Persona questions, gap analysis, section structure, SPE examples |
| Personas research | `/mnt/user-data/uploads/personas.md` | All 5 persona motivations, entry points, key questions |

### Tier 3 — Community

| Source | Path / URL | Used for |
|--------|-----------|----------|
| Discord `#local-gateways` | `/mnt/project/local-gateways-discord.txt` | NaaP model quote; clearinghouse definition; BYOC HTTP discovery; OrchestratorSession spec |
| Elite Encoder gist | `https://gist.github.com/eliteprox/a018fc30ee3366220873469c496b8c75` | OrchestratorSession spec reference |
| livepeer.cloud | `https://livepeer.cloud` | Cloud SPE description, Owncast integration |

### Tier 4 — Existing uploaded pages verified before use

| File | Used for | Status |
|------|----------|--------|
| `setup.mdx` | Hardware specs, OS table | ✅ Used as-is |
| `fund-gateway.mdx` | ETH deposit amounts | ⚠️ REVIEW — amounts |
| Original `economics.mdx` | Core model | Rewritten |
| Original `operator-opportunities.mdx` | Operator table, business model | Rewritten |
| Original `why-run-a-gateway.mdx` | Accordion structure reference | Rewritten |
| `hardware-requirements.mdx` | Not used — v1 GPU content | Replaced |
| `community-projects.mdx` | Not used — empty | Replaced |

---

## All REVIEW flags by priority

### 🔴 High — user-facing factual claims

| Flag | Pages | Owner |
|------|-------|-------|
| Is `signer.eliteencoder.net` still live and free? | `gateway-requirements.mdx`, `gateway-economics.mdx`, `ai-builder-opportunity.mdx`, `sdk-gateway-opportunity.mdx` | Elite Encoder / `#local-gateways` |
| ETH deposit/reserve amounts — still ~0.065 + 0.03 ETH? | `gateway-requirements.mdx`, `gateway-economics.mdx`, `video-transcoding-opportunity.mdx`, `operator-opportunities.mdx` | Mehrdad / Rick |

### 🟡 Medium — accuracy gaps

| Flag | Pages | Owner |
|------|-------|-------|
| `-remoteSignerAddr` flag name and format | `ai-builder-opportunity.mdx` | j0sh |
| Docker image tag — `master` vs pinned release | `ai-builder-opportunity.mdx` | Rick |
| GetOrchestrators endpoint — merged to `livepeer-python-gateway` main? | `sdk-gateway-opportunity.mdx` | j0sh |
| Elite Encoder GetOrchestrators endpoint — shipped and documented? | `sdk-gateway-opportunity.mdx` | Elite Encoder |
| Batch AI remote signer support — confirmed shipped? | `sdk-gateway-opportunity.mdx` | j0sh / Peter |
| LLM per-token and audio per-second payment models — confirm with Peter | `ai-builder-opportunity.mdx` | Peter (AI SPE Lead) |
| `-livePaymentInterval` default value | `gateway-economics.mdx` | Peter |
| NaaP public URL and production timeline | `operator-opportunities.mdx`, `ai-builder-opportunity.mdx`, `ecosystem-projects.mdx` | Qiang Han |
| AI Video Startup Programme — name, eligibility, application URL | `why-run-a-gateway.mdx`, `ai-builder-opportunity.mdx`, `spe-grant-model.mdx` | Foundation BD |
| SPE governance quorum and approval threshold — still current? | `spe-grant-model.mdx` | Mehrdad |
| Daydream current website URL | `operator-opportunities.mdx`, `ai-builder-opportunity.mdx` | Foundation |

### 🟢 Low — enrichment

| Flag | Pages | Owner |
|------|-------|-------|
| Video cost comparison — citable benchmark vs Mux/AWS | `video-transcoding-opportunity.mdx` | Foundation / Cloud SPE |
| Owncast + Livepeer tutorial — direct blog URL | `video-transcoding-opportunity.mdx`, `ecosystem-projects.mdx` | Cloud SPE |
| Titan Node YouTube — gateway tutorial URL | `why-run-a-gateway.mdx` | Community |
| Livepeer Foundation YouTube — AI gateway content | `why-run-a-gateway.mdx`, `ecosystem-projects.mdx` | Foundation |
| Embody Avatars — own gateway or public? | `ecosystem-projects.mdx` | Foundation BD |
| Reserve requirement issue #3744 — resolved? | `gateway-requirements.mdx` | Rick |
| OrchestratorSession gist — still current URL? | `sdk-gateway-opportunity.mdx` | Elite Encoder |

---

## Files to action in repo

| Output file | Action | Destination in repo |
|-------------|--------|-------------------|
| `why-run-a-gateway.mdx` | Replace | `v2/gateways/guides/why-run-a-gateway.mdx` |
| `gateway-requirements.mdx` | Create; archive old | `v2/gateways/guides/gateway-requirements.mdx` (archive `hardware-requirements.mdx`) |
| `gateway-economics.mdx` | Replace; rename nav entry | `v2/gateways/guides/gateway-economics.mdx` |
| `ecosystem-projects.mdx` | Create; archive old | `v2/gateways/guides/ecosystem-projects.mdx` (archive `community-projects.mdx`) |
| `operator-opportunities.mdx` | Move + replace | `v2/gateways/guides/opportunities/operator-opportunities.mdx` |
| `video-transcoding-opportunity.mdx` | Create | `v2/gateways/guides/opportunities/video-transcoding-opportunity.mdx` |
| `ai-builder-opportunity.mdx` | Create | `v2/gateways/guides/opportunities/ai-builder-opportunity.mdx` |
| `sdk-gateway-opportunity.mdx` | Create | `v2/gateways/guides/opportunities/sdk-gateway-opportunity.mdx` |
| `spe-grant-model.mdx` | Create | `v2/gateways/guides/opportunities/spe-grant-model.mdx` |
