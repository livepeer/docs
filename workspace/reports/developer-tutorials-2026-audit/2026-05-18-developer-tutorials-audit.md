---
title: Developer Tutorials 2026 Executability Audit
description: Audit of routed developer tutorials for duplicate coverage, current runnable status, Studio dependency removal, and AI-agent prompt coverage.
checkedOn: 2026-05-18
scope:
  - v2/developers/build/tutorials
---

# Developer Tutorials 2026 Executability Audit

Checked on 2026-05-18. Scope is the 14 routed pages listed under the Developers > Build > Tutorials group in `docs.json`.

## Summary

Every tutorial now has an `## AI agent prompt` section with a self-contained copy/paste prompt. Confirmed Studio-specific requirements were removed from the IPFS and token-gating tutorials, and confirmed stale route/package/repo claims were corrected where the replacement was clear.

Consolidation is not recommended as a route deletion in this pass. Three clusters should be reviewed for editorial positioning:

- `ai-agent-on-livepeer` and `eliza-livepeer-plugin` overlap on Eliza + Livepeer gateway setup. Keep both only if the first remains the quick path and the second remains the deep agent/RAG/client path.
- `huggingface-to-livepeer` and `huggingface-to-livepeer-advanced` intentionally overlap. Keep the first as Path 1 and the second as the multi-path decision page.
- `vod-upload-and-playback`, `ipfs-video-integration`, and `token-gated-video` share asset/playback primitives but cover distinct storage, upload, and access-control use cases.

## Tutorial Audit

| Tutorial | Objective | 2026 runnable status | Required services | Dependency evidence | Studio/API-key exposure | Recommended fixes |
|---|---|---|---|---|---|---|
| `ai-agent-on-livepeer` | Run an Eliza agent against Livepeer LLM inference. | Needs update before a user can follow commands literally. Current Eliza main uses Bun/Node 24 and npm exposes the `elizaos` CLI; the page still shows older pnpm monorepo commands. | Livepeer gateway, optional gateway token for production. | `elizaos` npm is current; `elizaOS/eliza` main package uses `bun@1.3.5` and Node 24.15.0. | No Studio key required. | Keep as quickstart, but revise setup commands to the current ElizaOS-supported flow after confirming the Livepeer plugin package path. |
| `ai-image-generation-app` | Build a Next.js image-generation app using `@livepeer/ai`. | Mostly runnable, subject to current gateway endpoint compatibility and model availability. | Community gateway for development; paid/self-hosted gateway for production. | `@livepeer/ai@0.6.2` is published from `livepeer/livepeer-ai-js`; Next.js current is 16.2.6, while tutorial uses Next.js 15 patterns that remain plausible but should be checked in an app scaffold. | No Studio key required for development. | Keep. Consider pinning Next.js major or updating generated scaffold wording after smoke test. |
| `build-a-chatbot-with-livepeer-llm` | Build a streaming LLM chatbot against the Livepeer LLM endpoint. | Mostly runnable, but endpoint shape should be smoke-tested against the active gateway. | Community gateway for development; paid/self-hosted gateway for production. | Next.js and Livepeer gateway docs support the general path; model warmth remains time-sensitive. | No Studio key required for development. | Keep. Add a real curl endpoint smoke test in a later validation pass. |
| `build-a-naap-plugin` | Scaffold and publish a NaaP plugin. | Partially updated. The repo path and scaffold command were corrected, but examples still depend on the local NaaP workspace package. | NaaP repo, Docker/Postgres, local shell. | `livepeer/NaaP` default branch is `main`, active on 2026-05-17, and README documents `npx naap-plugin create`; `@naap/plugin-sdk` is not published on npm. | No Studio key required. | Keep. Make all install instructions explicitly workspace-local and avoid npm-global SDK install claims. |
| `build-a-vtuber-avatar-pipeline` | Build a ComfyStream VTuber avatar pipeline. | Plausible but hardware/workflow dependent; needs runtime smoke test on a current ComfyStream image. | ComfyStream, GPU, webcam/RTMP source. | Livepeer AI docs describe real-time AI and ComfyStream; exact nodes and model checkpoints remain time-sensitive. | No Studio key required. | Keep. Add verified workflow JSON or a current upstream reference if this becomes a hands-on tutorial rather than architecture guidance. |
| `eliza-livepeer-plugin` | Deep Eliza agent setup with character files, RAG, clients, and swarms. | Needs update before literal execution for the same ElizaOS setup reason as `ai-agent-on-livepeer`. | Livepeer gateway, optional gateway token, optional Slack/Discord credentials. | `elizaos` npm is current; `elizaOS/eliza` main uses Bun/Node 24. | No Studio key required. | Consolidate setup wording with `ai-agent-on-livepeer`; keep this as the advanced Eliza page. |
| `huggingface-to-livepeer` | Configure an existing Livepeer pipeline with a Hugging Face model. | Plausible for operators with `go-livepeer`, Docker, NVIDIA toolkit, and current AI worker support; not a simple local app tutorial. | Orchestrator, self-hosted gateway, Docker/NVIDIA, Hugging Face model. | `livepeer/go-livepeer` exposes AI worker pipeline maps; `livepeer/ai-worker` exposes `runner/dl_checkpoints.sh`; `livepeer/ai-runner` docs describe runner architecture. | No Studio key required. | Keep. Stale `/v2/developers2/...` links were corrected. |
| `huggingface-to-livepeer-advanced` | Compare existing pipeline, custom pipeline, and BYOC paths for Hugging Face models. | Advanced/operator-only; runnable status depends on upstream PRs, release state, and gateway-side BYOC support. | Orchestrator, gateway, Docker/NVIDIA, model/container registry. | `go-livepeer` and `ai-worker` current files support the general AI worker map and checkpoint flow; BYOC gateway client behavior remains an active development surface. | No Studio key required. | Keep as advanced decision page. Stale basic-path link was corrected. |
| `ipfs-video-integration` | Upload to IPFS, import into Livepeer asset flow, and play back. | Needs provider-specific smoke test because Asset API support and playback base URL vary by gateway provider. | web3.storage/Storacha, gateway Asset API, playback base URL. | `@web3-storage/w3up-client@17.3.0` is published from `storacha/w3up`; `livepeer@3.5.0` is published. | Studio-specific `livepeer.com` and `livepeercdn.studio` wording was removed. Gateway key remains allowed. | Keep. Add provider-specific examples once a non-Studio Asset API base URL is confirmed. |
| `low-latency-live-streaming-app` | Build WHIP/WHEP live streaming in Next.js. | Plausible but requires a WebRTC-capable gateway provider or self-hosted gateway. | Gateway API, WHIP/WHEP ingest/playback bases. | `@livepeer/react@4.3.6` is published from `livepeer/ui-kit`; `livepeer@3.5.0` is published. | No Studio-specific key; gateway key remains server-side. | Keep. Validate exact `@livepeer/react` import paths against v4.3.6 in a scaffold. |
| `multi-tenant-billing-with-pymthouse` | Build multi-tenant billing through pymthouse. | Plausible but beta and external-service dependent. | pymthouse hosted or self-hosted, signer, gateway. | `pymthouse.com` and `docs.pymthouse.com` return 200; `eliteprox/pymthouse` package is Next.js 16.2.3 with Node 18 or later. | No Studio key required; pymthouse credentials are separate. | Keep with beta caveat. Verify current hosted Builder API paths before production recommendation. |
| `streamplace-byoc-integration` | Route to Streamplace canonical BYOC/livestream docs. | Report-only page, not a full runnable tutorial. | Streamplace node and docs. | `streamplace/streamplace` GitHub mirror is active, default branch `next`; `@streamplace/sdk` is not published on npm under that name. | No Studio key required. | Keep as router page, but do not claim npm package names unless Streamplace docs confirm them. |
| `token-gated-video` | Gate playback with Lit Protocol and Livepeer JWT access control. | Needs provider-specific smoke test because signing key and playback policy APIs vary by gateway provider. | Gateway Asset API/signing keys, Lit Protocol, NFT contract, wallet connector. | `@lit-protocol/lit-node-client@7.4.0`, `@livepeer/react@4.3.6`, and `livepeer@3.5.0` are published. | Studio-specific requirement and hardcoded playback domain were removed. Gateway key remains allowed. | Keep. Validate `signAccessJwt` import and provider signing-key shape in a scaffold. |
| `vod-upload-and-playback` | Upload VOD via TUS, poll status, and play with `@livepeer/react`. | Plausible but requires a gateway provider exposing compatible Asset and TUS APIs. | Gateway Asset API, TUS endpoint, playback base. | `livepeer@3.5.0`, `@livepeer/react@4.3.6`, and `tus-js-client` are available package paths. | No Studio-specific key; gateway key remains server-side. | Keep. Validate exact response fields (`tusEndpoint` vs `tusUploadUrl`) against chosen provider. |

## Evidence Ledger

| Evidence | Source | Checked on | Outcome |
|---|---|---|---|
| Repo doctor passes when Homebrew Node is on `PATH`. | `PATH="/opt/homebrew/bin:$PATH" bash tools/lpd doctor --strict --json` | 2026-05-18 | Verified local tooling path; default shell lacks `npm`, but `/opt/homebrew/bin/node` and `/opt/homebrew/bin/npm` exist. |
| `@livepeer/ai` package exists. | `npm view @livepeer/ai` | 2026-05-18 | Version `0.6.2`, repo `livepeer/livepeer-ai-js`. |
| `livepeer` Node SDK exists. | `npm view livepeer` | 2026-05-18 | Version `3.5.0`, repo `livepeer/livepeer-js`. |
| `@livepeer/react` exists. | `npm view @livepeer/react` and npm package page | 2026-05-18 | Version `4.3.6`, repo `livepeer/ui-kit`. |
| `@streamplace/sdk` is not published under that npm name. | `npm view @streamplace/sdk` | 2026-05-18 | 404; page now avoids hard npm package claim. |
| `@naap/plugin-sdk` is not published under that npm name. | `npm view @naap/plugin-sdk` | 2026-05-18 | 404; page now avoids global npm install and uses `npx naap-plugin create`. |
| NaaP canonical repo is active. | GitHub API and README for `livepeer/NaaP` | 2026-05-18 | Default branch `main`, active `pushed_at` 2026-05-17; README documents `npx naap-plugin create`. |
| Streamplace mirror is active but default branch is not `main`. | GitHub API for `streamplace/streamplace` | 2026-05-18 | Default branch `next`, active `pushed_at` 2026-05-18; raw `main` paths failed. |
| ElizaOS current setup differs from page commands. | `npm view elizaos`; `elizaOS/eliza` package.json | 2026-05-18 | npm `elizaos@1.7.2`; repo main shows `bun@1.3.5` and Node 24.15.0. |
| Livepeer AI worker pipeline maps exist. | `livepeer/go-livepeer/ai/worker/docker.go` | 2026-05-18 | Current file contains AI runner pipeline image maps and host ports. |
| AI worker checkpoint script exists. | `livepeer/ai-worker/runner/dl_checkpoints.sh` | 2026-05-18 | Current script contains model download and runner image configuration. |
| `livepeer.com` redirects to Studio. | `curl -I -L https://livepeer.com` | 2026-05-18 | Redirected to `https://livepeer.studio/`; docs should not use it for non-Studio keys. |
| Public capability tool is reachable. | `curl -I https://tools.livepeer.cloud/ai/network-capabilities` | 2026-05-18 | HTTP 200. |
| pymthouse hosted docs and app are reachable. | `curl -I https://pymthouse.com`; `curl -I https://docs.pymthouse.com`; `eliteprox/pymthouse` package.json | 2026-05-18 | Hosted app/docs return 200; repo uses Next.js 16.2.3 and Node 18 or later. |

## Follow-Up Queue

- Update both Eliza tutorials to a single verified 2026 setup flow after confirming the current Livepeer model-provider/plugin package path.
- Smoke-test one Next.js scaffold each for `@livepeer/ai`, `@livepeer/react`, and `livepeer` SDK examples before claiming full executable status.
- Choose a non-Studio gateway provider or self-hosted gateway profile for Asset API tutorials so `LIVEPEER_API_URL`, TUS response fields, playback base URL, and signing-key APIs can be documented concretely.
- Confirm Streamplace's current SDK install path from `docs.stream.place` before turning the router page into a runnable code tutorial.
