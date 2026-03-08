# Contribution Guide

This guide outlines how to contribute to Livepeer’s code, documentation, and ecosystem—whether through GitHub, governance proposals, media creation, or developer toolkits. We welcome open source contributions to core protocol code, network infrastructure, SDKs, and community docs.

---

## 🧩 Where You Can Contribute

| Area | Examples | Repos |
|------|----------|-------|
| Protocol | BondingManager, inflation logic, LIPs | `go-livepeer`, `protocol` |
| AI Pipelines | Gateway nodes, inference plugins | `comfystream`, `ai-protocol` |
| SDKs | JS/TS/CLI tooling | `js-sdk`, `go-livepeer` |
| Docs | MDX pages, diagrams, SDK examples | `docs`, `recipes` |

---

## 🛠 How to Submit Code

1. Fork the relevant [GitHub repo](https://github.com/livepeer)
2. Branch from `main`
3. Submit a descriptive PR with:
   - Scope
   - Test coverage
   - Related issues / LIPs
4. Label your PR: `bug`, `feature`, `infra`, `docs`, etc.

CI/CD will auto-check formatting and test coverage. Reviews typically occur within 48–72 hours.

---

## 🧠 Governance Contributions

If you want to propose protocol-level changes:

- Draft a Livepeer Improvement Proposal (LIP) per [LIP Guidelines](../../livepeer-protocol/governance-model)
- Post to the [Livepeer Forum](https://forum.livepeer.org/c/protocol/6)
- Incorporate community and core dev feedback

See recent [LIPs](https://github.com/livepeer/LIPs) and [Treasury votes](../../livepeer-protocol/treasury) for reference.

---

## 🧪 Experimental Contributions

Got a new feature idea or prototype?
- Share in the [Dev Forum](https://forum.livepeer.org/c/dev/15)
- Post in `#experimental` or `#ai-pipelines` on [Discord](https://livepeer.org/discord)
- Explore the [Recipes repo](https://github.com/livepeer/recipes) for modular templates

---

## ✍️ Docs & Tutorials

Documentation lives in [livepeer/docs](https://github.com/livepeer/docs):

```bash
git clone https://github.com/livepeer/docs
cd docs
npm install && npm run dev
```

To contribute:
- Follow [MDX formatting](https://mintlify.com/docs)
- Use mermaid diagrams or tables where possible
- Link to GitHub, Forum, Studio, or Explorer for sources

Contributions to quickstarts, AI jobs, BYOC examples, and explorer guides are especially welcome.

---

## 🧾 Style Guide

- Use present tense, active voice
- Technical and precise, minimal emojis
- Short paragraphs and bullet lists
- Favor links over lengthy explanation

---

## 🏷 Labels & Tags

Common GitHub labels:
- `good first issue`
- `protocol`
- `network`
- `comfy`
- `ai-inference`
- `LIP`
- `docs`

---

## 👥 Contributor Recognition

Your GitHub handle will appear in changelogs and doc commits.
You may be eligible for:
- LPT bounties
- Builder grants
- AI program referrals

Join [#contributors](https://discord.gg/livepeer) to stay in the loop.

📎 End of `contribution-guide.mdx`

