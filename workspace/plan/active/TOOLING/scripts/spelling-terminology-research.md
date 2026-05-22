# Spelling & Terminology Research — Capitalisation Rules

> **Thread:** LPD Dev Remediation Pipeline
> **Date:** 2026-04-15
> **Purpose:** Identify all proper nouns and domain terms that the spelling checker should enforce capitalisation on, plus current spelling infrastructure state and gaps.

<CustomDivider />

## 1. Current spelling infrastructure

### Config files

| File | Purpose |
|---|---|
| `tools/config/quality/cspell.json` | Main cspell config. Language: en-GB. Includes livepeer-terms dictionary |
| `operations/tests/config/spell-dict.json` | Custom allow-list (63 words). Brands, UK spellings, protocol roles |
| `tools/config/quality/style-language-profile-en-gb.json` | UK English language profile |

### Current allow-list (spell-dict.json) — 63 terms

**Brands:** Livepeer, livepeer, LPT, LPToken, Arbitrum, arbitrum, Ethereum, ethereum, Web3, web3, Mintlify, mintlify, Infura, Alchemy, MetaMask, OpenRouter, GitHub, YouTube, DeepWiki, Node.js, Livepeer Studio, Livepeer Network, Puppeteer, puppeteer, cspell, lychee, linkinator

**UK spellings:** decentralised, decentralisation, optimise, optimisation, organise, organisation, recognise, recognised, colour, colours, favour, favourites, behaviour, behaviours

**Protocol roles:** orchestrator, orchestrators, gateway, gateways, delegator, delegators, transcoder, transcoders, broadcaster, broadcasters, subgraph, subgraphs, mainnet, testnet, devnet, frontmatter, mdx, jsx

### Flagged words (US English — cspell marks as suspicious)

color, colors, optimize, optimization, organize, organization, recognize, recognized

### What is NOT enforced today

- **Capitalisation of proper nouns** — no check that "livepeer" should be "Livepeer" in prose
- **Protocol role capitalisation** — no check that "orchestrator" should be "Orchestrator" when used as a role name
- **Named upgrade capitalisation** — Streamflow, Cascade, etc. not enforced
- **Acronym consistency** — no enforcement of HLS vs hls, RTMP vs rtmp

<CustomDivider />

## 2. Terms requiring capitalisation enforcement

### Tier 1 — Protocol core (always capitalise in prose)

These terms must always be capitalised when referring to the specific Livepeer concept. Lowercase is acceptable only in code, CLI flags, or when used generically (e.g. "an orchestrator node" in a generic computing context).

| Term | Correct | Wrong | Notes |
|---|---|---|---|
| Livepeer | Livepeer | livepeer | Except in code/URLs |
| Livepeer Protocol | Livepeer Protocol | livepeer protocol | |
| Livepeer Network | Livepeer Network | livepeer network | |
| Livepeer Token | Livepeer Token | livepeer token | Full name of LPT |
| LPT | LPT | lpt | Always uppercase |
| ETH | ETH | eth | Always uppercase in prose |
| Orchestrator | Orchestrator | orchestrator | When referring to the network role |
| Delegator | Delegator | delegator | When referring to the network role |
| Gateway | Gateway | gateway | When referring to the network role |
| Developer | Developer | developer | When referring to the Livepeer audience/role |
| Active Set | Active Set | active set | Proper noun — the top 100 |
| Reward Cut | Reward Cut | reward cut | Protocol parameter name |
| Fee Cut | Fee Cut | fee cut | Protocol parameter name |
| Probabilistic Micropayments | Probabilistic Micropayments | probabilistic micropayments | Protocol feature |
| Round | Round | round | When referring to the protocol time unit |

### Tier 2 — Products and entities (always capitalise)

| Term | Correct | Notes |
|---|---|---|
| Livepeer Studio | Livepeer Studio | Hosted platform |
| Livepeer Cloud | Livepeer Cloud | Cloud offering |
| Livepeer Player | Livepeer Player | Video player |
| Livepeer Explorer | Livepeer Explorer | Network dashboard |
| Livepeer Foundation | Livepeer Foundation | Non-profit steward |
| Livepeer Inc | Livepeer Inc | Original company |
| go-livepeer | go-livepeer | Code name — keep lowercase with hyphen |
| livepeer-js | livepeer-js | Code name |
| @livepeer/react | @livepeer/react | Package name |
| LPMS | LPMS | Livepeer Media Server |
| ComfyStream | ComfyStream | ComfyUI integration |
| Daydream | Daydream | AI video platform |
| AI Runner | AI Runner | ai-runner in code context only |

### Tier 3 — Blockchain and Web3 (always capitalise)

| Term | Correct | Notes |
|---|---|---|
| Ethereum | Ethereum | Blockchain name |
| Arbitrum | Arbitrum | L2 name |
| Arbitrum One | Arbitrum One | Mainnet variant |
| ERC-20 | ERC-20 | Token standard (with hyphen) |
| EIP | EIP | Ethereum Improvement Proposal |
| Layer 1 / L1 | Layer 1 / L1 | |
| Layer 2 / L2 | Layer 2 / L2 | |
| MetaMask | MetaMask | Wallet (exact casing) |
| Infura | Infura | RPC provider |
| Alchemy | Alchemy | RPC provider |
| Uniswap | Uniswap | DEX |
| The Graph | The Graph | Indexing protocol |
| Blockscout | Blockscout | Block explorer |
| Arbiscan | Arbiscan | Arbitrum explorer |

### Tier 4 — Protocol upgrades (proper nouns)

| Term | Correct | Notes |
|---|---|---|
| Snowmelt | Snowmelt | Alpha phase |
| Tributary | Tributary | Beta phase |
| Streamflow | Streamflow | O-T split upgrade |
| Cascade | Cascade | AI pivot upgrade |
| Confluence | Confluence | Arbitrum migration (LIP-73) |
| Delta | Delta | Planned verification upgrade |

### Tier 5 — Technical standards and tools (always uppercase/exact case)

| Term | Correct | Notes |
|---|---|---|
| RTMP | RTMP | Ingest protocol |
| HLS | HLS | Delivery protocol |
| WebRTC | WebRTC | Real-time comms (exact case) |
| WHIP | WHIP | WebRTC ingest |
| WHEP | WHEP | WebRTC egress |
| FFmpeg | FFmpeg | Video tool (exact case) |
| OBS | OBS | Streaming software |
| NVIDIA | NVIDIA | GPU manufacturer |
| CUDA | CUDA | GPU computing |
| GPU | GPU | Graphics processing unit |
| CPU | CPU | Central processing unit |
| Docker | Docker | Container platform |
| Prometheus | Prometheus | Metrics |
| Grafana | Grafana | Dashboard |
| Node.js | Node.js | Runtime |
| React | React | UI framework |
| PyTorch | PyTorch | ML framework |
| Mintlify | Mintlify | Docs platform |

### Tier 6 — Governance terms

| Term | Correct | Notes |
|---|---|---|
| LIP | LIP | Livepeer Improvement Proposal |
| Governance Forum | Governance Forum | Discussion space |
| LivepeerGovernor | LivepeerGovernor | Contract name |
| BondingManager | BondingManager | Contract name |
| RoundsManager | RoundsManager | Contract name |
| ServiceRegistry | ServiceRegistry | Contract name |

### Tier 7 — Smart contract names (PascalCase)

| Term | Notes |
|---|---|
| BondingManager | Token bonding |
| BondingVotes | Vote tracking |
| RoundsManager | Round lifecycle |
| Minter | Token minting |
| Controller | Central control |
| ServiceRegistry | Service registration |
| TicketBroker | Payment channels |
| LivepeerGovernor | On-chain voting |
| AIServiceRegistry | AI service registration |
| L1Escrow | L1 bridge |
| L2LPTGateway | L2 bridge |

<CustomDivider />

## 3. Capitalisation enforcement design

### Where to enforce

Capitalisation enforcement should be a new check in the style/spelling pipeline, separate from cspell dictionary checks. cspell handles unknown words; capitalisation enforcement handles known words with wrong casing.

### Proposed data file

Create `tools/config/quality/term-capitalisation.json`:

```json
{
  "version": "0.1",
  "description": "Proper noun capitalisation rules for Livepeer documentation",
  "rules": [
    {
      "term": "Livepeer",
      "pattern": "\\blivepeer\\b",
      "replacement": "Livepeer",
      "tier": 1,
      "context": "prose",
      "exceptions": ["code", "url", "import", "cli-flag"]
    },
    {
      "term": "Orchestrator",
      "pattern": "\\borchestrator\\b",
      "replacement": "Orchestrator",
      "tier": 1,
      "context": "prose-role",
      "exceptions": ["code", "cli-flag", "generic-computing"]
    }
  ]
}
```

### Implementation approach

1. New validator: `check-term-capitalisation.js` — reads the data file, scans prose zones in MDX
2. New remediator: `repair-term-capitalisation.js` — auto-fixes deterministic cases (Tier 1-3, 5-7)
3. Wire into `style-guide.test.js` as a new check function
4. Add as a `--verify` post-write step

### Context-aware skipping

The checker must skip:
- Code blocks (fenced and inline)
- Frontmatter values
- Import/export lines
- URL strings
- JSX attribute values
- CLI flag references (e.g. `--orchestrator`)
- Compound words where the term is a suffix (e.g. "sub-orchestrator" should not trigger)

<CustomDivider />

## 4. Gaps in current spell-dict.json

### Missing from allow-list (should be added)

**Protocol terms:** Streamflow, Cascade, Confluence, Tributary, Snowmelt, Delta, BondingManager, RoundsManager, ServiceRegistry, TicketBroker, LivepeerGovernor, AIServiceRegistry, LPMS, probabilistic, micropayments, micropayment

**Products:** ComfyStream, Daydream, Streamplace, Embody

**Blockchain:** Arbiscan, Blockscout, ERC-20, EIP, L1, L2, rollup, rollups

**Technical:** RTMP, RTMPS, HLS, WebRTC, WHIP, WHEP, FFmpeg, NVENC, NVDEC, gRPC, CUDA, TensorRT, ComfyUI, PyTorch, TensorFlow, OBS

**UK English (missing):** authorise, authorised, authorisation, centralise, centralised, centralisation, customise, customised, customisation, analyse, analysed, analysing, characterise, characterised, emphasise, emphasised, finalise, finalised, initialise, initialised, maximise, maximised, minimise, minimised, normalise, normalised, parametrise, parametrised, prioritise, prioritised, stabilise, stabilised, summarise, summarised, synchronise, synchronised, tokenise, tokenised, utilise, utilised, visualise, visualised, digitalise, digitalised, industrialise, industrialised, liberalise, liberalised, monetise, monetised, standardise, standardised, honour, honoured, labour, laboured, vigour, rigour, centre, centred, fibre, litre, metre, defence, offence, catalogue, catalogued, grey, programme, programmed

<CustomDivider />

## 5. UK/US English switch design

### Current state

- `remediate-us-spelling.js` has 159+ hardcoded US-to-UK rules as `[US_pattern, UK_replacement]` tuples
- cspell.json forces en-GB globally for MDX, en-US for JS/JSX
- `flagWords` in cspell.json flags US spellings as suspicious

### Proposed changes

1. **`remediate-us-spelling.js`** — add `--language en-gb|en-us` flag (default: en-gb)
   - When `en-gb`: existing US-to-UK rules (current behaviour)
   - When `en-us`: auto-generate reversed UK-to-US rules from the same data
   - Reverse generation: swap tuples, adjust word boundary patterns

2. **`repair-spelling.js`** — add `--language en-gb|en-us` flag (default: en-gb)
   - Pass language to cspell config as locale override
   - When `en-us`: swap flagWords to UK equivalents (optimise, colour, etc.)

3. **`spelling.test.js`** — add `--language en-gb|en-us` flag (default: en-gb)
   - Override cspell locale setting based on flag

4. **Shared language config** — new file `tools/config/quality/language-rules.json`:
   - Contains both US-to-UK and UK-to-US rule sets
   - Single source of truth consumed by all 3 scripts
   - Eliminates hardcoded arrays

### Data structure for language-rules.json

```json
{
  "version": "0.1",
  "defaultLanguage": "en-gb",
  "pairs": [
    { "us": "optimize", "uk": "optimise" },
    { "us": "optimized", "uk": "optimised" },
    { "us": "optimizing", "uk": "optimising" },
    { "us": "optimization", "uk": "optimisation" },
    { "us": "color", "uk": "colour" },
    { "us": "behavior", "uk": "behaviour" }
  ]
}
```

Scripts select direction based on `--language` flag. This also enables future i18n work.
