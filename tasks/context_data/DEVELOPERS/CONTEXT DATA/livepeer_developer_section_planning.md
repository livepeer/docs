# Livepeer Developer Section Planning

This document defines the scope, structure, and improvement suggestions for the **Developers** section of the Livepeer documentation. It clarifies the types of developer roles in the ecosystem, distinguishes platforms from gateways, and proposes IA (Information Architecture) refinements.

---

## 🔹 Developer Definition

In the Livepeer ecosystem, a **developer** is someone who builds apps, services, or integrations on top of the Livepeer **protocol** and **network** layers. Unlike operators (e.g., orchestrators or broadcasters), developers build **new functionality**, **interfaces**, or **automation logic** around decentralized video infrastructure.

### Developer Roles

| Role                | Description                                                                 | Examples                             |
|---------------------|-----------------------------------------------------------------------------|--------------------------------------|
| **Protocol Integrator** | Uses smart contracts or Arbitrum/Ethereum data for governance, staking, bonding | DAO dashboards, governance tools     |
| **Gateway Developer**  | Builds routing middleware (Daydream, Studio Gateway) that manages sessions, tokens, region logic | Daydream Gateway, Cascade            |
| **App Developer**       | Builds user-facing apps or media tools using Livepeer APIs, SDKs, or orchestration | MetaDJ, dotsimulate, Livepeer Studio |
| **Tooling Contributor** | Creates SDKs, CLIs, monitoring, or devtools for the ecosystem | `js-sdk`, `livepeer-cli`, exporters  |

---

## 🔹 Clarifying Differences

| Category    | Description                                      | Examples                            |
|-------------|--------------------------------------------------|-------------------------------------|
| Gateway     | Infra node that routes sessions and coordinates job execution | Daydream Gateway, Studio Gateway   |
| Platform    | End-user creator interface or app                | Livepeer Studio, MetaDJ             |
| Developer   | Anyone building apps, tools, SDKs, or gateways   | GitHub contributors, protocol devs  |

---

## 🔧 Suggested IA Tweaks (February 2026)

### ✅ Group Fixes
- Move `developer-portal.mdx` from inside `building-on-livepeer` and place it directly under `03_developers/`
- Rename `building-on-livepeer/` to `getting-started/` or `developer-onboarding/`

### ➕ Add: Experimental Features
Create a new group under Developers:
```json
{
  "group": "Experimental Features",
  "icon": "flask",
  "pages": [
    "v2/pages/03_developers/experimental-features/payment-protocol-v2.mdx",
    "v2/pages/03_developers/experimental-features/inference-marketplace-preview.mdx"
  ]
}
```

### ➕ Add: Deployment Recipes
```json
{
  "group": "Deployment Recipes",
  "icon": "server",
  "pages": [
    "v2/pages/03_developers/deployment-recipes/orchestrator-on-aws.mdx",
    "v2/pages/03_developers/deployment-recipes/ai-gateway-on-gcp.mdx"
  ]
}
```

These support real-world production-grade deployment examples across orchestrators and AI pipeline gateways.

---

✅ Ready to begin full drafts of Developer section pages to match the depth and fidelity of the Protocol and Network groups.

Next: `developer-guide.mdx`

