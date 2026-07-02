# Livepeer Docs

The [Mintlify](https://mintlify.com) documentation site for the Livepeer network.

The current **Network** section covers running the network:

- **Orchestrators** — GPU operators who run `go-livepeer` and earn ETH fees + LPT rewards.
- **Delegators** — LPT holders who bond their stake to an orchestrator and share in its rewards.

A demand-side (developer) section is planned — the structure below is set up for it.

## URL structure — `/network`

Network docs live under the **`/network`** path (`docs.livepeer.org/network`). The `/network`
prefix comes from the [`network/`](./network) folder structure, **not** from any navigation chrome —
so the URLs are stable independent of how the sidebar/tabs are configured.

This namespacing is intentional and forward-looking: a future demand-side (developer) docs section
can be added — e.g. `/build` or `/developers` — without moving or breaking any `/network` URL. At
that point a top-level **tab switcher** (`navigation.tabs`) gets introduced to flip between the two
sections. Until then there's no tab, since a lone "Network" tab would be redundant chrome. The root
(`/`) currently redirects to `/network` (see [`redirects` in `docs.json`](./docs.json)); when the
demand-side docs ship, the root and switcher are a config change, not a URL migration.

```
/                       → redirects to /network (temporary)
/network/*              → run the network: orchestrators + delegators
/build/* (future)       → build on the network: developers
```

## How it's organized — Diátaxis

Within each section, the sidebar follows the [Diátaxis](https://diataxis.fr) framework. Each group
serves one need:

| Section | Need it serves | Example |
| --- | --- | --- |
| **Tutorials** | Learning by doing | _Run your first orchestrator_ |
| **How-to guides** | Achieving a specific task | _Set competitive pricing_ |
| **Explanation** | Understanding the why | _How the network works_ |
| **Reference** | Looking up exact facts | _CLI flags_, _Protocol parameters_ |

## Run it locally

```bash
# Install the Mintlify CLI (one-time)
npm install

# Start the dev server at http://localhost:3000
npm run dev
```

> Requires Node.js 19+. The CLI is published as the `mint` package; `npx mint dev` also works without installing.

## Edit content

Every page is an `.mdx` file under [`network/`](./network). The sidebar, tabs, theme, and redirects
live in [`docs.json`](./docs.json).

## Source & accuracy

Content is rebuilt from first principles based on the Livepeer v2 docs at
<https://docs.livepeer.org>. Network values (inflation, unbonding period, active-set size,
contract addresses) are governance-controlled and change over time — the Reference pages carry a
"last verified" date from on-chain reads, and you can always re-verify against the
[Livepeer Explorer](https://explorer.livepeer.org) and on-chain state. Run `npm run check` to
validate navigation and internal links (also enforced in CI).
