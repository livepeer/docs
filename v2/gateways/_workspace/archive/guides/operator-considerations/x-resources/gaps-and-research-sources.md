# Gateways "Should I Run One?" Section — Evaluation Report

**Section purpose:** Answer the foundational question for every gateway persona: why should I run a gateway, can I do it, what will it cost, and what can I build?
**Section position in IA:** Pos 5b (Guides) — motivational and feasibility content, not operational how-to
**Personas served:** All five (A Graduate, B Provider, C Builder, D Broadcaster, E Platform Builder)

<CustomDivider />

## Page-by-Page Scores

### 1. `why-run-a-gateway.mdx` — **5 / 10**

**What it does well:**

- Eight accordion categories cover the right conceptual territory
- "Gateways are control planes, not compute nodes" framing is correct
- Business mental model paragraph is accurate

**What it fails at:**

- Written entirely for Persona B (commercial gateway provider). Personas A (developer graduating from Daydream), C (SDK builder), D (broadcaster), and E (enterprise platform) are invisible
- AI gateway motivations are absent. The fastest-growing gateway use case (inference routing, NaaP, off-chain cost-free startup) is not mentioned anywhere
- No concrete numbers. Why run a gateway? "50x cheaper transcoding vs Mux/AWS" is a real answer; none appear here
- Accordion-only layout: useful for scanning but the page has no introductory substance before diving into accordions
- No video content
- No Foundation support, grants, SPE opportunities mentioned
- `purpose: faq` frontmatter is wrong — this is a `guide`, not an FAQ

**Verdict:** Rewrite. Core structure usable but must add AI section, concrete cost comparisons, Foundation support, and speak to all personas.

<CustomDivider />

### 2. `operator-opportunities.mdx` — **6 / 10**

**What it does well:**

- Core business model (`Customer → Gateway → Orchestrator → margin`) is clear and correct
- Real operator table (Studio, Daydream, Cloud SPE) is valuable
- "Gateways are ports, orchestrators are factories" metaphor works
- Five accordion categories are reasonable

**What it fails at:**

- Imports `BorderedBox` and `StyledTable` from `/snippets/` without verifying they render — these are the correct repo components but should be confirmed before production
- Misses AI-specific opportunities entirely: inference margin, Foundation AI Video Startup Programme, SPE grants (the three most relevant revenue paths for new operators in 2025–2026)
- The `BorderedBox` "Start here in 5 minutes" block sets a 5-minute expectation for a business model decision, which is misleading
- "Top reasons now" section duplicates content from `why-run-a-gateway.mdx`; the two pages overlap without clear differentiation
- Missing NaaP model (gateway-as-platform), LLM SPE, BYOC gateway business models
- Missing: Foundation grants, treasury SPE funding — real concrete opportunities

**Verdict:** Rewrite. Consolidate with `why-run-a-gateway.mdx` motivations or draw a clearer line. Add AI-era opportunities.

<CustomDivider />

### 3. `hardware-requirements.mdx` — **1 / 10**

**Critical failure:** This is a v1 page for GPU orchestrators / "video miners", not for gateways. Every piece of technical content is wrong for this section:

- "GPU with NVENC/NVDEC is strongly recommended" — gateways do NOT need a GPU
- CPU transcoding discussion — gateways do not transcode; orchestrators do
- RAM and Disk fields are "TBD"
- The `<Danger>From v1</Danger>` banner confirms the author knew this was stale

**Verdict:** Do not salvage. Replace entirely with `gateway-requirements.mdx` covering: hardware (no GPU, CPU+RAM+network), OS compatibility matrix, network requirements, skills, and on-chain vs off-chain software requirements.

<CustomDivider />

### 4. `economics.mdx` — **5 / 10**

**What it does well:**

- Core payment model (gateways pay orchestrators, earn at business layer) is accurate
- Currency distinction (ETH for service payments, LPT for staking) is correct
- Fee structure section and `-maxPricePerUnit` / `-maxPricePerCapability` flags are accurate
- Case studies (Streamplace, Daydream) are real

**What it fails at:**

- Uses raw inline JSX `style={{...}}` for all tables instead of Mintlify/repo components — this breaks the design system and will look inconsistent in production
- `-maxPricePerUnit` CLI example still uses `-broadcaster=true` flag (renamed to `-gateway`)
- `livepeer_cli` "set broadcast config" reference is outdated terminology
- Go code example (`calculateUserPrice`) is presented as "implementation" but most operators are not writing Go and this misleads them about where pricing logic lives
- Missing AI inference pricing (per-pixel for batch inference, interval-based for LV2V) which is the current primary use case
- Missing: off-chain gateway economics — operators running off-chain AI gateways have no ETH costs at all; this is the most important economics change in 12 months
- Name "Economic Considerations" (or just "Gateway Economics") is slightly misleading — it covers costs, not revenue. "Gateway Costs and Revenue" is more accurate

**Verdict:** Rewrite. Keep concepts, replace all inline styles with Mintlify tables, fix `-broadcaster` references, add AI inference costs, add off-chain economics.

<CustomDivider />

### 5. `community-projects.mdx` — **0 / 10**

**Status:** Empty. Frontmatter exists, page body does not.

**Intended purpose (from IA planning):** Show what gateways enable — downstream applications, community tooling, ecosystem inspiration.

**Verdict:** Create from scratch as `ecosystem-projects.mdx`. Content should cover: real applications built on gateways (Studio, Daydream, Owncast, Embody), community tools, Foundation programmes (AI Video Startup Programme, SPE grants), NaaP.

<CustomDivider />

## Structural Gaps in This Section

### Gap 1 — Missing: "Can I do this?" self-assessment / requirements page

The existing `hardware-requirements.mdx` was meant to answer "do I have what I need?" but it fails entirely (GPU focus, v1 content). Every persona needs to know:

- What hardware do I need? (CPU, RAM, no GPU)
- What OS? (Linux required for AI; video supports more platforms)
- What skills? (basic Linux/Docker, no crypto required for off-chain)
- What network? (static IP, bandwidth)
- What does it cost to get started? (on-chain: ~ETH deposit; off-chain: zero)

**Action:** Create `gateway-requirements.mdx` to replace `hardware-requirements.mdx`.

### Gap 2 — Missing: AI gateway motivations throughout

All existing pages implicitly assume the reader wants to run a video transcoding gateway. The fastest-growing gateway use case in 2025–2026 is AI inference routing. Motivations differ significantly:

- AI gateway operators do not need ETH to start (off-chain mode)
- AI gateway operators can point at the community-hosted remote signer (`signer.eliteencoder.net`)
- Foundation AI Video Startup Programme is specifically for AI builders
- Inference margin economics are different from transcoding margin

**Action:** Add explicit AI gateway sections to `why-run-a-gateway.mdx` and `operator-opportunities.mdx`.

### Gap 3 — Missing: Foundation support and funding

None of the existing pages mention:

- AI Video Startup Programme (Foundation programme for AI builders who want to use Livepeer)
- SPE (Special Purpose Entity) grants for gateway operators
- Treasury proposals path (Cloud SPE, LLM SPE, NaaP are all treasury-funded)
- Community support and Discord access

These are real, concrete reasons to run a gateway and they're completely absent from the feasibility section.

**Action:** Add to `operator-opportunities.mdx` (Foundation support section) and `why-run-a-gateway.mdx` (ecosystem motivations).

### Gap 4 — Overlap between `why-run-a-gateway.mdx` and `operator-opportunities.mdx`

Both pages cover motivations to run a gateway with overlapping content. The distinction should be:

- `why-run-a-gateway.mdx` = "Is this right for me?" — personal and strategic motivations, comparison vs hosted gateway, quick self-assessment
- `operator-opportunities.mdx` = "What business can I build?" — revenue models, commercial patterns, who's doing it today, Foundation support

**Action:** Sharpen the distinction when rewriting both pages.

### Gap 5 — No video content anywhere

No embedded tutorials or video walkthroughs. The Titan Node YouTube channel and Livepeer Foundation YouTube channel likely have relevant content. No confirmed URLs were found in research — REVIEW flags added throughout.

<CustomDivider />

## Page Structure After Rewrite

| File                         | Action                                                         | New slug                     |
| ---------------------------- | -------------------------------------------------------------- | ---------------------------- |
| `why-run-a-gateway.mdx`      | Rewrite — all personas, AI gateway, cost comparisons           | `why-run-a-gateway.mdx`      |
| `operator-opportunities.mdx` | Rewrite — revenue models, Foundation support, AI era           | `operator-opportunities.mdx` |
| `hardware-requirements.mdx`  | Replace entirely — gateway hardware, OS, skills, on/off-chain  | `gateway-requirements.mdx`   |
| `economics.mdx`              | Rewrite — fix components, add AI costs, off-chain, fix CLI     | `gateway-economics.mdx`      |
| `community-projects.mdx`     | Create from scratch — real applications, community, Foundation | `ecosystem-projects.mdx`     |

# Sources, Research Log, and Recommendations

## Gateways "Should I Run One?" Section — Feasibility and Motivation Pages

**Date:** 13 March 2026
**Pages produced:** why-run-a-gateway.mdx, operator-opportunities.mdx, gateway-requirements.mdx, gateway-economics.mdx, ecosystem-projects.mdx
**Repo:** livepeer/docs, branch docs-v2

<CustomDivider />

## Sources Used

### Tier 1 — Ground truth (technical claims verified here)

| Source                      | URL / Path                                 | Used for                                                                                                                     | Verified                         |
| --------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Remote Signers design doc   | `/mnt/project/Remote_signers.md`           | Off-chain mode facts, remote signer protocol, ETH requirements for AI vs video, stateless design                             | ✅ Confirmed                     |
| go-livepeer source          | `github.com/livepeer/go-livepeer`          | Flag names (`-gateway`, `-maxPricePerUnit`, `-maxPricePerCapability`, `-livePaymentInterval`), defaults, binary availability | ✅ Confirmed via research report |
| gateways-research-report.md | `/mnt/project/gateways-research-report.md` | Pre-verified technical facts for this section                                                                                | ✅ Confirmed                     |

### Tier 2 — Foundation sources

| Source                       | URL / Path                             | Used for                                                  | Verified                 |
| ---------------------------- | -------------------------------------- | --------------------------------------------------------- | ------------------------ |
| Gateways IA planning doc     | `/mnt/project/gateways-ia-planning.md` | Persona research, gap analysis, page priorities           | ✅ Confirmed             |
| Personas research            | `/mnt/user-data/uploads/personas.md`   | All 5 persona motivations, pain points, hardware profiles | ✅ Confirmed             |
| Livepeer Network Vision blog | Referenced in personas.md              | "Graduates" transition path from Daydream to self-hosted  | ✅ Confirmed (secondary) |

### Tier 3 — Community knowledge

| Source                             | URL / Path                                | Used for                                                                                                        | Verified                      |
| ---------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Discord #local-gateways transcript | `/mnt/project/local-gateways-discord.txt` | Clearinghouse definition, NaaP status, signer.eliteencoder.net, off-chain pain points, j0sh's "docs soon" quote | ✅ Confirmed                  |
| Community remote signer            | `https://signer.eliteencoder.net/`        | Off-chain gateway requirements section                                                                          | ⚠️ REVIEW — verify still live |
| tools.livepeer.cloud note          | Research report + community               | livepeer.tools is down, active tool is tools.livepeer.cloud                                                     | ✅ Confirmed                  |

### Tier 4 — Existing uploaded files (verified against Tier 1 before using)

| Source                                  | Path                                                | Used for                                             | Notes                                                                       |
| --------------------------------------- | --------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------- |
| `why-run-a-gateway.mdx` (original)      | `/mnt/user-data/uploads/why-run-a-gateway.mdx`      | Reference for accordion structure                    | Rewritten — AI motivations missing, purpose frontmatter wrong               |
| `operator-opportunities.mdx` (original) | `/mnt/user-data/uploads/operator-opportunities.mdx` | Operator table (Studio, Daydream, Cloud SPE)         | Preserved table with additions                                              |
| `hardware-requirements.mdx` (original)  | `/mnt/user-data/uploads/hardware-requirements.mdx`  | Not used — v1 GPU content, wrong persona             | Replaced entirely with gateway-requirements.mdx                             |
| `economics.mdx` (original)              | `/mnt/user-data/uploads/economics.mdx`              | Core concepts (who earns what, currency distinction) | Rewritten — inline styles replaced, -broadcaster flag fixed, AI costs added |
| `community-projects.mdx` (original)     | `/mnt/user-data/uploads/community-projects.mdx`     | Not used — empty                                     | Replaced with ecosystem-projects.mdx                                        |
| `setup.mdx`                             | `/mnt/user-data/uploads/setup.mdx`                  | Hardware specs (4-8 CPU, 16-32 GB RAM), OS table     | ✅ Used directly — confirmed as current                                     |
| `fund-gateway.mdx`                      | `/mnt/user-data/uploads/fund-gateway.mdx`           | ETH deposit amounts (0.065 + 0.03 ETH), CLI steps    | ⚠️ REVIEW on amounts — issue open to reduce                                 |
| `on-chain.mdx`                          | `/mnt/user-data/uploads/on-chain.mdx`               | On-chain requirements, keystore setup, RPC providers | ✅ Referenced but not copied inline                                         |

### External sources checked

| Source                  | URL                                           | Used for                                          | Verified                                          |
| ----------------------- | --------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| NaaP repo               | `github.com/livepeer/naap`                    | NaaP description, JWT auth, Developer API Keys    | ✅ Repo confirmed exists                          |
| livepeer-python-gateway | `github.com/j0sh/livepeer-python-gateway`     | Python gateway description, examples              | ✅ Repo confirmed exists                          |
| Livepeer Forum          | `forum.livepeer.org`                          | SPE proposal context                              | ✅ Referenced                                     |
| Livepeer Cloud          | `livepeer.cloud`                              | Cloud SPE gateway, tutorials, Owncast integration | ⚠️ REVIEW — URLs need confirming                  |
| Arbitrum bridge issue   | `github.com/livepeer/go-livepeer/issues/3744` | Reserve requirement reduction in progress         | ✅ Issue confirmed referenced in fund-gateway.mdx |
| Owncast                 | `owncast.online`                              | Owncast + Livepeer integration context            | ✅ Referenced                                     |

<CustomDivider />

## Technical Claims and Their Sources

| Claim                                                           | Source                                           | Status                                       |
| --------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------- |
| Gateways do not need GPU                                        | setup.mdx Note, gateways-research-report.md      | ✅ Verified                                  |
| AI gateway: Linux only (no Windows/macOS binaries)              | setup.mdx OS table, research report              | ✅ Verified                                  |
| Off-chain mode removes ETH requirement from gateway             | Remote Signers design doc                        | ✅ Verified                                  |
| Community signer: `signer.eliteencoder.net` (free)              | Discord #local-gateways, research report         | ⚠️ Verify still live                         |
| ETH deposit: ~0.065 + 0.03 reserve                              | fund-gateway.mdx                                 | ⚠️ REVIEW — amounts may be stale             |
| `-gateway` flag replaces `-broadcaster`                         | Research report + go-livepeer source             | ✅ Verified                                  |
| `-maxPricePerCapability` for AI pipeline pricing                | research report, economics.mdx                   | ✅ Verified                                  |
| `-livePaymentInterval=5s` for LV2V                              | Remote Signers design doc context                | ⚠️ REVIEW — confirm exact default with Peter |
| `LV2V = interval-based payments, not per-pixel`                   | Remote Signers design doc                        | ✅ Verified                                  |
| Batch AI = per-pixel (width × height × outputs)                 | research report                                  | ✅ Verified                                  |
| tools.livepeer.cloud is the active tool, livepeer.tools is down | research report community note                   | ✅ Verified                                  |
| `NaaP = JWT auth + Developer API Keys`                            | Discord + NaaP repo                              | ✅ Confirmed (alpha status)                  |
| Daydream uses Livepeer gateway for AI inference                 | personas.md, operator-opportunities.mdx original | ✅ Confirmed                                 |

<CustomDivider />

## Outstanding REVIEW Flags

These must be resolved with SMEs before the affected pages merge.

| Flag                                                            | Page                                                                      | Owner                                   | Priority                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------- | ---------------------------------------- |
| Is `signer.eliteencoder.net` still live and free?               | gateway-requirements.mdx, gateway-economics.mdx                           | Elite Encoder / Discord #local-gateways | 🔴 High — affects off-chain requirements |
| Confirm current ETH deposit/reserve amounts (~0.065 + 0.03 ETH) | gateway-requirements.mdx, gateway-economics.mdx                           | Mehrdad / Rick                          | 🔴 High — affects financial guidance     |
| Confirm `-livePaymentInterval` default and LV2V payment unit    | gateway-economics.mdx                                                     | Peter (AI SPE Lead)                     | 🟡 Medium                                |
| AI Video Startup Programme — name, eligibility, application URL | why-run-a-gateway.mdx, operator-opportunities.mdx, ecosystem-projects.mdx | Foundation BD                           | 🟡 Medium                                |
| Daydream current website URL                                    | ecosystem-projects.mdx                                                    | Foundation                              | 🟡 Medium                                |
| Embody Avatars — confirm gateway model (own gateway or public?) | ecosystem-projects.mdx                                                    | Foundation BD                           | 🟡 Medium                                |
| NaaP public URL and current availability                        | operator-opportunities.mdx, ecosystem-projects.mdx                        | Qiang Han                               | 🟡 Medium                                |
| livepeer.cloud URLs — confirm all active                        | ecosystem-projects.mdx                                                    | Livepeer Cloud SPE                      | 🟡 Medium                                |
| Owncast + Livepeer tutorial — confirm current blog URL          | ecosystem-projects.mdx                                                    | Livepeer Cloud SPE                      | 🟢 Low                                   |
| Titan Node YouTube — any gateway tutorial URLs                  | why-run-a-gateway.mdx                                                     | Community                               | 🟢 Low                                   |
| Livepeer Foundation YouTube — any gateway/AI operator content   | why-run-a-gateway.mdx                                                     | Foundation                              | 🟢 Low                                   |
| Reserve requirement issue (#3744) — has this been resolved?     | gateway-requirements.mdx                                                  | Rick                                    | 🟢 Low                                   |

<CustomDivider />

## Video Content Research

**Searched:** Titan Node YouTube, Livepeer Foundation YouTube, livepeer.cloud blog, community mentions in project files.

**Result:** No specific confirmed gateway tutorial video URLs were found in available sources. All video embed locations in the MDX files have been marked with `{/* REVIEW: */}` flags.

**Recommended searches for video content:**

- YouTube: `"livepeer gateway" setup 2024`
- YouTube: `"livepeer broadcaster" setup` (older but still relevant for video gateway)
- YouTube: `livepeer AI inference gateway`
- Titan Node channel: `@TitanNode` — likely has broadcaster/gateway content from 2022–2024
- Livepeer Foundation channel: `@LivepeerVideo` — look for AI webinars, startup programme recordings

<CustomDivider />

## Recommendations for This Section

### Immediate (before merge)

1. **Resolve all 🔴 REVIEW flags** above before publishing. The ETH deposit amounts and community signer status are shown to users as factual guidance; they must be verified.

2. **Remove `hardware-requirements.mdx` from nav** and add `gateway-requirements.mdx`. The old file has active `<Danger>From v1</Danger>` banner and GPU-focused content that is wrong for this section.

3. **Rename `economics.mdx` → `gateway-economics.mdx`** in docs.json. The title "Gateway Costs and Revenue" is more accurate than the existing "Economic Considerations".

4. **Add `ecosystem-projects.mdx` to nav** as the replacement for the empty `community-projects.mdx`. The `community-projects.mdx` file should be archived.

### Short-term (next sprint)

5. **Video content**: Reach out to Titan Node and Livepeer Cloud SPE for embeddable tutorial links. Add YouTube embeds to `why-run-a-gateway.mdx` and `ecosystem-projects.mdx` once confirmed.

6. **Foundation programme details**: The AI Video Startup Programme is mentioned in three pages but lacks a URL and application instructions. This is a conversion-critical gap — operators interested in Foundation support have no action path. Get the current URL from Foundation BD and add it.

7. **Cost comparison data**: `why-run-a-gateway.mdx` references the "10–50x cheaper than Mux/AWS" claim with a REVIEW flag. The Livepeer Foundation and Cloud SPE have likely published benchmarks on this. Confirm and add a specific, citable number.

### Structural recommendation

8. **Section rename**: The current section is listed as "Run a Gateway > Why Run a Gateway" and friends. After the IA migration, these pages are in `guides/`. The sidebar group name should be something like "Motivations and Feasibility" or left under the general "Guides" group — avoid repeating "Why" in both the section name and page titles.

9. **Cross-link from gateway-path.mdx**: Once `gateway-path.mdx` is created, it should link to `gateway-requirements.mdx` for each path variant (AI off-chain, video on-chain, etc.) so operators checking requirements can access the correct requirements table without reading the full general requirements page.

<CustomDivider />

## Files Produced

| File                         | Replaces                                | Action needed                               |
| ---------------------------- | --------------------------------------- | ------------------------------------------- |
| `why-run-a-gateway.mdx`      | `why-run-a-gateway.mdx` (existing)      | Replace in repo after REVIEW flags resolved |
| `operator-opportunities.mdx` | `operator-opportunities.mdx` (existing) | Replace in repo after REVIEW flags resolved |
| `gateway-requirements.mdx`   | `hardware-requirements.mdx` (from v1)   | Add to nav; archive old file                |
| `gateway-economics.mdx`      | `economics.mdx` (existing)              | Replace in repo; update nav entry name      |
| `ecosystem-projects.mdx`     | `community-projects.mdx` (empty)        | Replace in repo; archive old file           |
