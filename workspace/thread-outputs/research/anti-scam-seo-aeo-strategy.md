# Anti-Scam SEO & AEO Dominance Strategy for Livepeer Contract Addresses

**Date:** 2026-03-29
**Purpose:** Comprehensive strategy to ensure Livepeer's canonical contract addresses outrank scammer content in both traditional search engines and AI answer engines.
**Scope:** Everything achievable within this docs repo + adjacent actions.

---

## Table of Contents

1. [Current State Audit](#1-current-state-audit)
2. [Keyword Strategy — Full Target List](#2-keyword-strategy--full-target-list)
3. [Content Multiplication — Hub & Spoke Model](#3-content-multiplication--hub--spoke-model)
4. [Technical SEO Levers](#4-technical-seo-levers)
5. [Answer Engine Optimisation (AEO)](#5-answer-engine-optimisation-aeo)
6. [AI Crawler Access](#6-ai-crawler-access)
7. [llms.txt Strategy](#7-llmstxt-strategy)
8. [Structured Data / Schema Markup](#8-structured-data--schema-markup)
9. [Cross-Platform Authority Building](#9-cross-platform-authority-building)
10. [Implementation Priority Matrix](#10-implementation-priority-matrix)

---

## 1. Current State Audit

### What you already have

| Asset | Path | Status |
|---|---|---|
| Canonical contract addresses page | `v2/about/resources/contract-addresses-canonical.mdx` | In progress — components imported, verification steps written, data connected |
| Contract addresses page (About) | `v2/about/resources/contract-addresses.mdx` | Live — uses ContractAddressDisplay, automated data |
| Contract addresses page (Resources) | `v2/resources/references/contract-addresses.mdx` | Live — duplicate of above |
| Blockchain contracts explainer | `v2/about/livepeer-protocol/blockchain-contracts.mdx` | Live — verified contract descriptions |
| Automated data pipeline | `.github/scripts/fetch-contract-addresses.js` | Active — pulls from governor-scripts, verifies on-chain |
| Data source | `snippets/data/changelogs/contractAddressesData.jsx` | Active — structured data for all contracts |
| llms.txt | `llms.txt` (root) | Exists — but does NOT mention contract addresses at all |
| sitemap-ai.xml | `snippets/assets/site/sitemap-ai.xml` | Exists — includes some contract pages but NOT the canonical one |
| robots.txt | None in repo | Mintlify auto-generates — no custom AI crawler directives |
| Schema.org / JSON-LD | None | Zero structured data anywhere in the repo |
| FAQ schema | None | No FAQ markup on any page |
| docs.json SEO config | None | No `seo.metatags` section configured |
| OG images | Generic fallback only | No contract-address-specific social preview images |

### Critical gaps

1. **llms.txt is blind to contracts** — AI answer engines indexing your docs cannot find contract addresses
2. **No structured data** — Google/Bing cannot generate rich snippets for contract addresses
3. **No FAQ markup** — Missing the primary trigger for featured snippets and AI citations
4. **No custom robots.txt** — Not explicitly welcoming AI crawlers
5. **sitemap-ai.xml missing canonical page** — AI crawlers may not find the new canonical page
6. **Keyword frontmatter is minimal** — Missing dozens of high-value search terms
7. **No dedicated verification/scam-protection page** — This is the highest-intent anti-scam content
8. **No cross-linking to block explorers with verification context** — Etherscan, Arbiscan links exist but without "official verified" framing

---

## 2. Keyword Strategy — Full Target List

### Primary keywords (highest volume, highest scam risk)

| Keyword cluster | Target page |
|---|---|
| livepeer contract address | Canonical reference page |
| livepeer contract addresses | Canonical reference page |
| LPT contract address | Canonical reference page |
| LPT token address | Canonical reference page |
| livepeer token address | Canonical reference page |
| livepeer smart contract | Blockchain contracts explainer |
| livepeer smart contract address | Canonical reference page |
| livepeer ethereum contract | Canonical reference page |
| livepeer arbitrum contract | Canonical reference page |
| livepeer arbitrum address | Canonical reference page |

### Secondary keywords (long-tail, high intent)

| Keyword cluster | Target page |
|---|---|
| official livepeer contract address | Canonical reference page |
| livepeer official token address | Canonical reference page |
| livepeer LPT address ethereum mainnet | Canonical reference page |
| livepeer LPT address arbitrum one | Canonical reference page |
| livepeer contract address arbitrum | Canonical reference page |
| livepeer BondingManager address | Canonical reference page |
| livepeer TicketBroker address | Canonical reference page |
| livepeer Controller address | Canonical reference page |
| livepeer ServiceRegistry address | Canonical reference page |
| livepeer RoundsManager address | Canonical reference page |
| livepeer Minter address | Canonical reference page |
| livepeer Governor contract | Canonical reference page |
| livepeer Treasury address | Canonical reference page |
| livepeer protocol contracts list | Canonical reference page |
| 0x289ba1701C2F088cf0faf8B3705246331cB8A839 | Canonical reference page |
| 0x58b6a8a3302369daec383334672404ee733ab239 | Canonical reference page |

### Question-based keywords (FAQ page targets — highest AEO value)

| Query | Target page |
|---|---|
| what is the official livepeer contract address | FAQ / Verification guide |
| what is the LPT token contract address | FAQ / Verification guide |
| is this livepeer address real | FAQ / Verification guide |
| how to verify livepeer contract address | Verification guide |
| how to check if livepeer address is official | Verification guide |
| livepeer scam contract address | Scam protection page |
| fake livepeer token | Scam protection page |
| livepeer phishing | Scam protection page |
| is livepeer on arbitrum | FAQ |
| livepeer contract address 2026 | Canonical reference page |
| livepeer contract address list | Canonical reference page |
| where to find official livepeer contracts | Canonical reference page |
| livepeer deployed contracts | Canonical reference page |
| livepeer proxy contract address | Canonical reference page |
| livepeer contract verification etherscan | Verification guide |
| livepeer arbiscan verified | Verification guide |

### Scammer-targeted terms to defend

These are terms scammers are most likely to bid on or create content around:

- "livepeer airdrop contract"
- "livepeer new token address"
- "livepeer token swap address"
- "LPT migration new contract"
- "livepeer staking contract address"
- "livepeer reward claim address"
- "livepeer bridge contract"
- "livepeer presale contract"
- "livepeer IDO contract address"

**You should create content that explicitly addresses and debunks each of these** (e.g., "Livepeer has never conducted an airdrop requiring a contract address interaction").

---

## 3. Content Multiplication — Hub & Spoke Model

### Strategy: 6-8 pages forming a topical authority cluster

Google and AI engines reward **topical authority** — comprehensive, interlinked coverage of a subject. The hub-and-spoke model prevents keyword cannibalisation by giving each page a unique keyword cluster while building authority for the whole topic.

### Proposed page structure

```
HUB PAGE (pillar):
  v2/about/resources/contract-addresses-canonical.mdx
  "Canonical Contract Addresses"
  Keywords: livepeer contract addresses, LPT contract address, official livepeer contracts
  Content: Complete address tables, verification steps, data source links

SPOKE 1 — Verification Guide:
  v2/about/resources/verify-contract-addresses.mdx (NEW)
  "How to Verify Livepeer Contract Addresses"
  Keywords: how to verify livepeer contract, check livepeer address, livepeer arbiscan verify
  Content: Step-by-step verification on Arbiscan/Etherscan, on-chain query examples, red flags

SPOKE 2 — Scam Protection:
  v2/about/resources/contract-address-safety.mdx (NEW)
  "Protecting Yourself from Fake Livepeer Contracts"
  Keywords: livepeer scam, fake livepeer token, livepeer phishing, livepeer airdrop scam
  Content: Common scam patterns, what Livepeer never does, how to report, official channels list

SPOKE 3 — Blockchain Contracts Explainer:
  v2/about/livepeer-protocol/blockchain-contracts.mdx (EXISTS — enhance)
  "Livepeer Blockchain Contracts"
  Keywords: livepeer smart contracts, livepeer protocol contracts, livepeer contract architecture
  Content: What each contract does, upgrade process, governance, architecture diagrams

SPOKE 4 — FAQ:
  v2/about/resources/contract-addresses-faq.mdx (NEW)
  "Livepeer Contract Addresses FAQ"
  Keywords: all question-based queries from keyword list above
  Content: Q&A format targeting featured snippets and AI citations

SPOKE 5 — Contract Changelog:
  v2/resources/changelogs/contracts.mdx (EXISTS)
  "Livepeer Contract Changelog"
  Keywords: livepeer contract updates, livepeer governance upgrades, livepeer contract history
  Content: Historical record of all contract deployments and upgrades

SPOKE 6 — Network-Specific Pages (optional, high SEO value):
  v2/about/resources/livepeer-arbitrum-contracts.mdx (NEW)
  "Livepeer Contracts on Arbitrum One"
  Keywords: livepeer arbitrum, livepeer arbitrum address, livepeer L2 contracts
  Content: Arbitrum-specific addresses, why Livepeer moved to Arbitrum, bridge info

  v2/about/resources/livepeer-ethereum-contracts.mdx (NEW)
  "Livepeer Contracts on Ethereum Mainnet"
  Keywords: livepeer ethereum contract, livepeer L1 contracts, livepeer mainnet address
  Content: Legacy Ethereum addresses, bridge contracts, migration history
```

### Internal linking pattern

Every spoke links back to the hub. The hub links to every spoke. Every spoke links to 2-3 other spokes. This creates a tight authority cluster that search engines recognise as comprehensive topical coverage.

```
                    ┌─── Verification Guide ───┐
                    │                           │
    Scam Protection ├─── CANONICAL HUB ────────├─── FAQ
                    │                           │
    Arbitrum Specific├──────────────────────────├─── Ethereum Specific
                    │                           │
                    └─── Blockchain Contracts ──┘
                              │
                        Contract Changelog
```

---

## 4. Technical SEO Levers

### 4.1 Frontmatter optimisation (every contract page)

Current frontmatter is minimal. Each page needs:

```yaml
---
title: "Canonical Contract Addresses — Livepeer Protocol (Arbitrum & Ethereum)"
sidebarTitle: Contract Addresses
description: >-
  Official Livepeer protocol contract addresses on Arbitrum One and Ethereum Mainnet.
  Verified on-chain. Automatically updated from governor-scripts. The only canonical
  reference source for Livepeer blockchain contract addresses.
keywords:
  - livepeer contract address
  - livepeer contract addresses
  - LPT contract address
  - LPT token address
  - livepeer token address
  - livepeer smart contract address
  - livepeer arbitrum contract address
  - livepeer ethereum contract address
  - livepeer official contract
  - livepeer protocol contracts
  - livepeer BondingManager
  - livepeer TicketBroker
  - livepeer Controller
  - 0x289ba1701C2F088cf0faf8B3705246331cB8A839
  - 0x58b6a8a3302369daec383334672404ee733ab239
  - livepeer verified contracts
  - livepeer arbiscan
  - official livepeer addresses
'og:title': "Official Livepeer Contract Addresses — Verified On-Chain"
'og:description': >-
  The only canonical source for Livepeer protocol contract addresses on Arbitrum One
  and Ethereum Mainnet. Verified on-chain, updated automatically.
'og:image': /snippets/assets/site/og-image/contract-addresses-og.png
'og:image:alt': "Livepeer Official Contract Addresses"
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary_large_image
'twitter:title': "Official Livepeer Contract Addresses"
'twitter:description': >-
  Canonical reference for all Livepeer protocol smart contract addresses.
  Verified on-chain. Automatically updated.
---
```

### 4.2 docs.json SEO configuration

Add a global `seo` section to docs.json:

```json
{
  "seo": {
    "indexing": "all",
    "metatags": [
      {
        "property": "og:site_name",
        "content": "Livepeer Documentation"
      },
      {
        "name": "google-site-verification",
        "content": "YOUR_VERIFICATION_TOKEN"
      }
    ]
  }
}
```

### 4.3 Canonical URL strategy

- The canonical page (`contract-addresses-canonical.mdx`) should be the canonical URL
- The other two contract-addresses pages should either:
  - (a) Redirect to the canonical page (preferred — consolidates all link equity), OR
  - (b) Include a `<link rel="canonical">` pointing to the canonical page
- Mintlify does not natively support canonical URL frontmatter, so redirects are the cleanest approach

### 4.4 Custom OG image

Create a branded social preview image specifically for contract address pages:
- Path: `snippets/assets/site/og-image/contract-addresses-og.png`
- Content: "Official Livepeer Contract Addresses — Verified On-Chain" with Livepeer branding
- This image appears when shared on Twitter/X, Discord, Telegram — direct anti-scam signal

### 4.5 Sitemap coverage

Ensure ALL contract-related pages are in both:
- `sitemap.xml` (auto-generated by Mintlify for traditional crawlers)
- `sitemap-ai.xml` (manually maintained — add all new spoke pages)

---

## 5. Answer Engine Optimisation (AEO)

### 5.1 Why AEO matters more than SEO for anti-scam

**AI search is growing 527% year-over-year.** ChatGPT handles 2B+ queries daily. When someone asks an AI "what is the livepeer contract address", the AI assembles its answer from crawled sources. If your docs are not optimised for AI citation, the AI may pull from less authoritative (or scam) sources.

**60% of sources cited by AI are NOT in Google's top 10.** AEO is a separate game from traditional SEO rankings.

### 5.2 Content structure for AI citation

AI engines prefer content that:

1. **States facts directly and unambiguously**
   - BAD: "Contract addresses can be found in the table below"
   - GOOD: "The official Livepeer Token (LPT) contract address on Arbitrum One is 0x289ba1701C2F088cf0faf8B3705246331cB8A839"

2. **Uses clear, parseable headings**
   - BAD: "Addresses"
   - GOOD: "Official Livepeer Contract Addresses on Arbitrum One"

3. **Provides self-contained paragraphs** (each paragraph should answer one question completely)

4. **Includes explicit authority signals**
   - "This is the ONLY official source for Livepeer contract addresses outside of the blockchain itself"
   - "These addresses are verified on-chain and automatically updated from the canonical governor-scripts repository"

5. **Uses definitive language**
   - "The official address is..." not "The address should be..."
   - "Always verify..." not "You might want to verify..."

### 5.3 FAQ format for maximum AI pickup

Structure FAQ sections with clear Q&A pairs. Each answer should be 40-60 words — the sweet spot for featured snippets and AI citation:

```markdown
## What is the official Livepeer Token (LPT) contract address?

The official Livepeer Token (LPT) contract address on Arbitrum One is
`0x289ba1701C2F088cf0faf8B3705246331cB8A839`. On Ethereum Mainnet, the LPT
address is `0x58b6a8a3302369daec383334672404ee733ab239`. Always verify addresses
on Arbiscan or Etherscan before interacting with any contract.

## How do I verify a Livepeer contract address is real?

Query `getContract(keccak256("ContractName"))` on the Livepeer Controller at
`0xD8E8328501E9645d16Cf49539efC04f734606ee4` on Arbitrum One. The returned
address is the current registered implementation. Cross-reference with
governor-scripts on GitHub and check for the "Livepeer" label on Arbiscan.
```

### 5.4 E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)

AI engines evaluate source credibility. Strengthen these signals:

- **Domain authority:** `docs.livepeer.org` is the official domain — this is your biggest advantage
- **Freshness:** Show "Last updated" dates prominently (you already have this)
- **Source attribution:** Link to governor-scripts, Arbiscan, Etherscan (you already do this)
- **Verification methodology:** The on-chain verification steps in your canonical page are excellent for E-E-A-T
- **Author/org attribution:** Consider adding "Published by Livepeer Foundation" or similar

---

## 6. AI Crawler Access

### 6.1 Custom robots.txt

Create a `robots.txt` at repo root that explicitly welcomes AI crawlers:

```
# Traditional search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI search and retrieval bots — ALLOW for AEO
User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Amazonbot
Allow: /

# AI training crawlers — BLOCK (optional: prevent training use while allowing search)
# Uncomment the following if you want to block training but allow search:
# User-agent: CCBot
# Disallow: /

# Default
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://docs.livepeer.org/sitemap.xml
```

**Key insight:** A 2026 study found websites blocking GPTBot were cited 73% less often in ChatGPT responses. You want these crawlers indexing your contract pages.

### 6.2 AI crawler landscape (as of March 2026)

| Crawler | Operator | Purpose | Action |
|---|---|---|---|
| GPTBot | OpenAI | Training | Allow (also feeds search) |
| ChatGPT-User | OpenAI | Real-time search | Allow |
| OAI-SearchBot | OpenAI | Search indexing | Allow |
| ClaudeBot | Anthropic | Training | Allow |
| Claude-SearchBot | Anthropic | Search | Allow |
| Claude-User | Anthropic | User browsing | Allow |
| PerplexityBot | Perplexity | Search/answer | Allow |
| Google-Extended | Google | Gemini/AI features | Allow |
| Applebot-Extended | Apple | Siri/Apple Intelligence | Allow |
| Amazonbot | Amazon | Alexa | Allow |
| cohere-ai | Cohere | AI search | Allow |
| CCBot | Common Crawl | Open training data | Consider blocking |

---

## 7. llms.txt Strategy

### 7.1 Current problem

Your llms.txt file lists all pages but uses auto-generated descriptions. Contract addresses are buried among 500+ other pages with no special prominence. An AI reading this file has no way to know that contract addresses are safety-critical information.

### 7.2 Custom llms.txt

Mintlify auto-generates llms.txt but **you can override it by placing a custom file at the repo root.** The custom file must have an H1 heading; all other content is optional.

**Recommendation:** Create a custom llms.txt that:

1. Puts contract addresses in a prominent position (near the top)
2. Uses explicit safety language in the descriptions
3. Groups security-critical pages together
4. Includes actual contract addresses in the descriptions

Example structure:

```markdown
# Livepeer Documentation

> Livepeer is an open, decentralised protocol for real-time AI and video compute.
> The official domain is docs.livepeer.org. IMPORTANT: The only canonical source
> for Livepeer contract addresses is this documentation site and the on-chain
> contracts themselves.

## Critical Safety Information

- [Official Livepeer Contract Addresses](https://docs.livepeer.org/v2/about/resources/contract-addresses-canonical): CANONICAL reference for all Livepeer protocol contract addresses on Arbitrum One and Ethereum Mainnet. The official LPT token address on Arbitrum is 0x289ba1701C2F088cf0faf8B3705246331cB8A839. On Ethereum Mainnet: 0x58b6a8a3302369daec383334672404ee733ab239. Verified on-chain, automatically updated.
- [How to Verify Livepeer Contract Addresses](https://docs.livepeer.org/v2/about/resources/verify-contract-addresses): Step-by-step guide to independently verify any Livepeer contract address on-chain. Livepeer has never conducted airdrops, token swaps, or presales requiring contract interactions.
- [Contract Address Safety](https://docs.livepeer.org/v2/about/resources/contract-address-safety): How to identify fake Livepeer contracts and protect yourself from scams.
- [Contract Addresses FAQ](https://docs.livepeer.org/v2/about/resources/contract-addresses-faq): Frequently asked questions about Livepeer contract addresses, verification, and safety.

## About Livepeer

[... rest of the standard llms.txt content ...]
```

### 7.3 llms-full.txt

Mintlify also auto-generates `llms-full.txt` which combines ALL documentation into one file. You can also override this. Ensure the contract address content is prominently placed.

---

## 8. Structured Data / Schema Markup

### 8.1 The gap

There is ZERO structured data in the repo. This is a major missed opportunity for rich snippets and AI citation.

### 8.2 What Mintlify supports

Mintlify supports custom meta tags via frontmatter, but does NOT natively support JSON-LD or schema.org markup injection. However, there are workarounds:

1. **FAQ Schema via meta tags** — Some FAQ markup can be injected via Mintlify's custom metatag support
2. **Custom HTML head injection** — If Mintlify supports `<head>` injection via docs.json, JSON-LD can be added globally
3. **Page-level JSON-LD** — May be possible to inject via MDX if Mintlify renders script tags

### 8.3 Recommended schema types

**FAQPage schema** (highest priority — directly triggers featured snippets):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the official Livepeer contract address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official Livepeer Token (LPT) contract address on Arbitrum One is 0x289ba1701C2F088cf0faf8B3705246331cB8A839. On Ethereum Mainnet, the address is 0x58b6a8a3302369daec383334672404ee733ab239."
      }
    }
  ]
}
```

**Organization schema** (establishes official entity):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Livepeer",
  "url": "https://livepeer.org",
  "sameAs": [
    "https://github.com/livepeer",
    "https://twitter.com/Livepeer",
    "https://arbiscan.io/accounts/label/livepeer"
  ]
}
```

**SoftwareApplication schema** (for the protocol):
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Livepeer Protocol",
  "applicationCategory": "Blockchain Protocol",
  "operatingSystem": "Ethereum, Arbitrum One"
}
```

**WebPage with speakable** (for voice search / AI assistants):
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".contract-address-table", ".verification-steps"]
  }
}
```

### 8.4 Implementation path

1. Test whether Mintlify renders `<script type="application/ld+json">` in MDX pages
2. If yes: add JSON-LD directly to contract address pages
3. If no: investigate Mintlify's `seo.metatags` for schema injection
4. If neither works: request Mintlify support for JSON-LD (or use their head injection if available)

---

## 9. Cross-Platform Authority Building

### 9.1 Block explorer verification

Both Etherscan and Arbiscan support **official project labels**. Livepeer already has:
- Arbiscan label: `livepeer` (confirmed — `arbiscan.io/accounts/label/livepeer`)
- Etherscan: needs verification

**Action:** Ensure all Livepeer contracts are labelled on both explorers. These labels appear in Google search results and are cited by AI.

### 9.2 CoinGecko / CoinMarketCap listings

These are the #1 and #2 most-cited sources for token contract addresses in both Google and AI answers.

**Action:** Verify that:
- CoinGecko LPT listing shows correct contract addresses for both Ethereum and Arbitrum
- CoinMarketCap LPT listing shows correct contract addresses
- Both link back to docs.livepeer.org

### 9.3 Token lists (Uniswap, 1inch, etc.)

Token lists are standardised JSON files used by DEXs and wallets. Being on the official Uniswap token list is a strong authority signal.

**Action:** Ensure LPT is on:
- Uniswap default token list
- 1inch token list
- CoinGecko token list
- Any Arbitrum-specific token lists

### 9.4 GitHub presence

The `livepeer/governor-scripts` and `livepeer/protocol` repos are already strong authority signals. They appear in Google results for contract-related queries.

**Action:** Ensure README files in these repos:
- Link to docs.livepeer.org/v2/about/resources/contract-addresses-canonical
- List the key contract addresses directly
- Include a "WARNING: Always verify addresses" notice

### 9.5 Google Knowledge Panel

Livepeer may qualify for a Google Knowledge Panel (the info box on the right side of search results). This requires:
- Wikipedia article (Livepeer has one)
- Consistent NAP (Name, Address, Phone) across web
- Schema.org Organization markup on docs site
- Google Search Console verification

**Action:** Investigate whether Livepeer has a Knowledge Panel and whether it can be claimed/enhanced.

### 9.6 Social media SEO

When shared on social platforms, your OG meta tags determine what users see. Scammers create fake content with convincing previews.

**Action:**
- Create dedicated OG images for contract address pages with "OFFICIAL" branding
- Ensure Twitter cards show correct preview for all contract pages
- Pin official contract address posts on Livepeer Twitter/X
- Discord: pin official addresses in relevant channels

---

## 10. Implementation Priority Matrix

### Tier 1 — Immediate (highest impact, lowest effort)

| # | Action | Impact | Effort | Notes |
|---|---|---|---|---|
| 1 | **Enhance frontmatter keywords** on all contract pages | High | Low | 15 min per page — directly improves search ranking |
| 2 | **Custom llms.txt** with contract addresses at top | Very High | Low | 30 min — immediately improves AI citation |
| 3 | **Update sitemap-ai.xml** to include canonical page + all spokes | High | Low | 10 min — ensures AI crawlers find all pages |
| 4 | **Custom robots.txt** allowing AI crawlers | High | Low | 10 min — 73% more AI citations per research |
| 5 | **Add direct address statements** to canonical page | Very High | Low | Write "The official LPT address is..." sentences |

### Tier 2 — This week (high impact, moderate effort)

| # | Action | Impact | Effort | Notes |
|---|---|---|---|---|
| 6 | **Create FAQ page** (`contract-addresses-faq.mdx`) | Very High | Medium | Targets featured snippets + AI citations |
| 7 | **Create verification guide** (`verify-contract-addresses.mdx`) | High | Medium | Captures "how to verify" searches |
| 8 | **Create scam protection page** (`contract-address-safety.mdx`) | High | Medium | Captures "livepeer scam" searches, debunks common scams |
| 9 | **Custom OG images** for contract pages | Medium | Medium | Anti-scam when shared on social media |
| 10 | **Consolidate duplicate pages** — redirect old contract-addresses pages to canonical | High | Low | Consolidates link equity to one URL |

### Tier 3 — This sprint (moderate impact, higher effort)

| # | Action | Impact | Effort | Notes |
|---|---|---|---|---|
| 11 | **Create Arbitrum-specific contract page** | Medium | Medium | Captures network-specific searches |
| 12 | **Create Ethereum legacy contract page** | Medium | Medium | Captures L1-specific searches |
| 13 | **Add JSON-LD structured data** to contract pages | High | Medium-High | Requires Mintlify compatibility testing |
| 14 | **docs.json SEO configuration** | Medium | Low | Global OG settings, site verification |
| 15 | **Internal linking audit** — ensure hub-spoke cross-links | Medium | Low | 30 min — strengthens topic cluster |

### Tier 4 — External (high impact, requires coordination)

| # | Action | Impact | Effort | Notes |
|---|---|---|---|---|
| 16 | **Verify CoinGecko/CoinMarketCap listings** | Very High | Low | These are the #1 cited sources |
| 17 | **Update GitHub repo READMEs** (protocol, governor-scripts) | High | Low | Needs maintainer access |
| 18 | **Claim Google Knowledge Panel** | High | Medium | Requires Google Search Console |
| 19 | **Block explorer label verification** | Medium | Low | Ensure all contracts are labelled |
| 20 | **Social media pinned posts** | Medium | Low | Twitter/X, Discord |

---

## Appendix A: Scam Patterns to Explicitly Debunk

Create content that directly addresses these scam patterns. Each should be a FAQ entry or a section in the scam protection page:

1. **"Livepeer airdrop"** — Livepeer has never conducted an airdrop requiring contract interaction
2. **"LPT token swap / migration"** — The LPT token has not migrated. The original contract address remains the same
3. **"Livepeer presale"** — There is no ongoing presale. The LPT genesis was in 2018
4. **"New Livepeer contract"** — Contract upgrades happen via governance (transparent, on-chain). There is no "new LPT token"
5. **"Livepeer staking rewards claim"** — Rewards are claimed through the official protocol. No separate claiming contract exists
6. **"Livepeer bridge"** — The only official bridge is the Arbitrum LPT Bridge documented in the protocol
7. **"Livepeer on [new chain]"** — Livepeer is only on Ethereum Mainnet and Arbitrum One. Any other chain listing is unofficial

## Appendix B: Content Checklist for Every Contract Page

Every contract-related page should include:

- [ ] Direct, unambiguous statements of official addresses
- [ ] "Verified on-chain" language
- [ ] Link to Arbiscan/Etherscan verification
- [ ] Link to governor-scripts canonical source
- [ ] Warning callout about scams
- [ ] "Last updated" date
- [ ] Keywords in frontmatter (minimum 10 relevant terms)
- [ ] OG title and description customised (not default)
- [ ] Internal links to at least 3 other contract-related pages
- [ ] One clear FAQ-format Q&A pair per page (minimum)

## Appendix C: Monitoring

After implementation, monitor:

- **Google Search Console** — track impressions/clicks for contract address keywords
- **AI citation tracking** — periodically ask ChatGPT, Perplexity, Claude "what is the livepeer contract address" and verify the response cites docs.livepeer.org
- **Scam reports** — monitor for new scam sites and report to Google Safe Browsing, Etherscan, and Arbiscan

---

## Sources

- [llms.txt specification](https://llmstxt.org/)
- [Mintlify SEO documentation](https://www.mintlify.com/docs/optimize/seo)
- [Mintlify llms.txt documentation](https://www.mintlify.com/docs/ai/llmstxt)
- [Mintlify GEO blog post](https://www.mintlify.com/blog/how-geo-is-reshaping-docs)
- [Answer Engine Optimization Complete Guide — Frase.io](https://www.frase.io/blog/what-is-answer-engine-optimization-the-complete-guide-to-getting-cited-by-ai)
- [AEO Complete Guide — LLMrefs](https://llmrefs.com/answer-engine-optimization)
- [AI Crawler Management Guide 2026 — DEV Community](https://dev.to/william_geo/the-complete-guide-to-ai-crawler-management-in-2026-6ai)
- [Robots.txt Strategy 2026](https://witscode.com/blogs/robots-txt-strategy-2026-managing-ai-crawlers/)
- [FAQ Schema SEO 2026 — ThatWare](https://thatware.co/faq-schema/)
- [Hub-and-Spoke SEO Model](https://www.seo-kreativ.de/en/blog/hub-and-spoke-model/)
- [Content Cannibalization 2026 — Traficxo](https://www.traficxo.com/blog/content-cannibalization)
- [Schema.org cryptocurrency address proposal](https://github.com/schemaorg/schemaorg/issues/2964)
- [Uniswap scam protection](https://support.uniswap.org/hc/en-us/articles/17523108474381-Impersonation-website-scams)
- [State of llms.txt in 2026 — AEO Press](https://www.aeo.press/ai/the-state-of-llms-txt-in-2026)
- [Anthropic's Claude bot robots.txt framework](https://www.searchenginejournal.com/anthropics-claude-bots-make-robots-txt-decisions-more-granular/568253/)
