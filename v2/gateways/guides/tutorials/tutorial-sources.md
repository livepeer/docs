# Sources: Livepeer Tutorials Index Research

Research log for `livepeer-tutorials-index.md`.
Session date: March 2026.

---

## Research method

No general web search was available in this session (network egress restricted to github.com and npm registries). Sources are drawn from:

1. Live GitHub MCP queries against `livepeer/docs` `docs-v2` branch (primary)
2. Project files in `/mnt/project/` (research already conducted in prior sessions)
3. npmjs.com registry (package metadata only)
4. Claude training knowledge (cross-checked against confirmed sources where possible)

---

## GitHub MCP queries (this session)

All of the following file contents or directory listings were retrieved live via `get_file_contents` against `refs/heads/docs-v2`:

| Path | Bytes | Used for |
|---|---|---|
| `v2/developers/developer-journey.mdx` | 8,122 | Developer section paths, Daydream/Embody/livepeer-ops links confirmed |
| `v2/developers/ai-pipelines/byoc.mdx` | 8,129 | BYOC guide content, Dockerfile, config.yaml pattern confirmed |
| `v2/developers/ai-pipelines/comfystream.mdx` | 3,592 | ComfyStream guide content confirmed |
| `v2/developers/ai-inference-on-livepeer/overview.mdx` | 5,928 | AI inference overview content confirmed |
| `v2/orchestrators/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx` | 3,559 | Full orchestrator config guide content confirmed |
| `v2/orchestrators/setting-up-an-orchestrator/` (directory) | — | All files in setting-up-an-orchestrator listed and sizes confirmed |
| `v2/orchestrators/orchestrator-tools-and-resources/community-pools.mdx` | 967 | Titan Node pool structure confirmed |
| `v2/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx` | 634 | Tools structure confirmed |
| `v2/developers/ai-pipelines/` (directory) | — | All files listed, sizes confirmed |
| `v2/developers/` (directory) | — | Top-level developer structure confirmed |
| `v2/gateways/guides-and-resources/community-guides.mdx` | 219 | Empty stub — no community guides currently published |
| `v2/gateways/quickstart/gateway-setup.mdx` | (stub) | Quickstart confirmed present |

---

## Project files used as sources

These files were read in prior sessions and their research findings inform this index:

| File | Key findings used |
|---|---|
| `/mnt/project/gateways-research-report.md` | Gateway flags, Docker commands, livepeer.cloud URL, j0sh Python gateway |
| `/mnt/project/Remote_signers.md` | Remote signer protocol, signer.eliteencoder.net, PR numbers |
| `/mnt/project/local-gateways-discord.txt` | Community pain points, j0sh quotes, Elite Encoder resources |
| `/mnt/project/gateways-ia-planning.md` | Gateway page inventory, link targets |
| `/mnt/project/gpu-nodes-ia-planning.md` | Orchestrator persona research, Udemy course reference, Titan Node + Video Miner, pain points |
| `/mnt/project/gpu-nodes-tab-audit.md` | Orchestrator tab gap analysis, tool URLs |
| `/mnt/project/setup-paths-sources.md` | OrchestratorSiphon details confirmed, Titan Node Pool repo confirmed |
| `/mnt/project/ai-workloads-sources.md` | scope-runner URL, ai-worker interface, ComfyStream, StreamDiffusion |
| `/mnt/project/monitoring-advanced-sources.md` | go-livepeer doc/ paths, livepeer-monitoring repo |
| `/mnt/project/staking-rewards-sources.md` | Livepeer Explorer URL, YouTube embed ID |
| `/mnt/project/docs.json` | Navigation structure, confirmed page paths |

---

## npmjs.com (this session)

- `livepeer` package: v3.5.0 confirmed, homepage `github.com/livepeer/livepeer-js`, description confirmed
- Used for: Livepeer JavaScript SDK entry

---

## GitHub HTML page scraping (this session)

Used `curl` on `github.com` (allowed domain) to confirm repo names in the livepeer org:

Confirmed repos in livepeer org: `go-livepeer`, `docs`, `explorer`, `livepeer-ai-js`, `livepeer-ai-python`, `naap`, `comfystream`, `ai-runner`, `studio`, `subgraph`, `catalyst`, `protocol`, `ui-kit`

---

## External links NOT live-checked (flagged [VERIFY])

These URLs appear in project files, cross-references in confirmed MDX files, or training knowledge but were NOT retrieved with a live HTTP request in this session:

| URL | Source of reference |
|---|---|
| https://livepeer.cloud/how-to-run-a-livepeer-gateway-node | gateways-research-report.md |
| https://github.com/j0sh/livepeer-python-gateway | gateways-research-report.md + multiple project files |
| https://signer.eliteencoder.net | Remote_signers.md + Discord export |
| https://docs.livepeer.org/gateways/payments/remote-signers | docs.json nav (page exists, content not confirmed) |
| https://docs.livepeer.org/gateways/setup/configure/dual-configuration | docs.json nav |
| https://app.titan-node.com | Titan-Node/Titan-Node-Pool README (confirmed via setup-paths-sources.md) |
| https://www.youtube.com/@TitanNode | gpu-nodes-ia-planning.md persona research |
| https://www.youtube.com/@Livepeer | content-brief-template.md |
| https://www.udemy.com (Livepeer Orchestrator course) | gpu-nodes-ia-planning.md persona research |
| https://docs.livepeer.org/orchestrators/guides/set-pricing | docs.json redirects |
| https://docs.livepeer.org/orchestrators/guides/benchmark-transcoding | docs.json redirects |
| https://docs.livepeer.org/orchestrators/advanced-setup/staking-LPT | docs.json nav |
| https://docs.livepeer.org/orchestrators/advanced-setup/hosting-models | byoc.mdx + developer-journey.mdx cross-links |
| https://docs.livepeer.org/orchestrators/setup/sc-connect | docs dir listing (file confirmed, content stub-level) |
| https://daydream.live | developer-journey.mdx (confirmed in this session) |
| https://github.com/livepeer/livepeer-ai-python | livepeer org page scrape |
| https://docs.livepeer.studio | training knowledge + Livepeer Studio product confirmed |

---

## Notes on video content

YouTube video IDs for Titan Node and Livepeer Foundation channels were not retrievable in this session — YouTube is not an accessible domain. The channel URLs are confirmed; specific video titles and IDs should be verified manually before adding `<Frame><iframe>` embeds to MDX.

Pattern for embedding in Mintlify MDX once IDs are confirmed:

```mdx
<Frame>
  <iframe
    src="https://www.youtube.com/embed/{VIDEO_ID}"
    width="100%"
    height="400"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</Frame>
```

---

## Recommended follow-up research

To fully verify the `[VERIFY]` items, run the following checks manually:

1. Open `https://livepeer.cloud/how-to-run-a-livepeer-gateway-node` — confirm still live
2. Open `https://github.com/j0sh/livepeer-python-gateway` — confirm README has usage examples
3. Open `https://signer.eliteencoder.net` — confirm still operational (ask in `#local-gateways`)
4. Open `https://app.titan-node.com` — confirm pool dashboard is live
5. Search YouTube for `@TitanNode` and `@Livepeer` — retrieve current video titles and IDs
6. Search Udemy for "Livepeer Orchestrator" — retrieve current course URL and instructor
7. Open `https://daydream.live` — confirm developer-facing docs are accessible
