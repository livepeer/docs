# Exemplar: Concept/Guide Page (Orchestrator Audience)

> Source: `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
> Why this is gold-standard: Opens with earnings outcome, hardware-specific language, zero vague qualifiers

---

## Why This Works

1. Opens with the BUSINESS VALUE ("major source of new fee revenue") before the mechanism
2. Uses hardware-specific language throughout ("budget VRAM for the models you want warm", "24 GB+")
3. Addresses the reader who already has video ("Already running video?" accordion) without making it the default path
4. States what the reader does NOT build ("You never build a marketplace, billing system, or authentication layer")
5. Explains routing with a clear ASCII diagram, not prose

---

## Annotated Opening

```
Livepeer's AI subnet launched in Q3 2024 and has grown into a major source of new fee
revenue for orchestrators.
```
<!-- EXEMPLAR: Opens with earnings outcome.
     "major source of new fee revenue" — direct assertion, no "can potentially generate" -->
<!-- EXEMPLAR: Dated fact ("Q3 2024") anchors the claim in time -->

```
It turns GPU nodes into open, composable inference infrastructure that serves image
generation, live-video effects, and large language model completions.
```
<!-- EXEMPLAR: "composable" not "flexible" or "versatile" — precise term -->
<!-- EXEMPLAR: Lists the actual workload types — no "various AI tasks" -->

```
AI workloads reach your node through gateway routing, capability advertisement, and
container-based inference. The core operator distinction is between batch inference and
live-video inference because the hardware profile and routing logic differ.
```
<!-- EXEMPLAR: Second paragraph explains the mechanism.
     VALUE first (para 1), then MECHANISM (para 2). Never reversed. -->
<!-- EXEMPLAR: "The core operator distinction is..." — names the decision the reader must make -->

## Annotated Routing Section

```
Your orchestrator advertises capabilities — which pipelines it supports and at what
price — and gateways route matching jobs to it. You never build a marketplace, billing
system, or authentication layer. You run excellent inference infrastructure.
```
<!-- EXEMPLAR: "You never build..." — states what's NOT the reader's job. Removes uncertainty. -->
<!-- EXEMPLAR: "You run excellent inference infrastructure." — assertive, outcome-framed.
     Not "the goal is to run" or "you can focus on" — direct statement. -->

## Common Failures This Avoids

| Failure pattern | How this page avoids it |
|---|---|
| Opening with mechanism before value | Value first: "fee revenue" before "gateway routing" |
| Vague workload description ("various AI tasks") | Lists exact types: image generation, live-video effects, LLM completions |
| Generic hardware language | VRAM-specific: "budget VRAM for the models you want warm" |
| Hedge on what reader does | "You never build a marketplace" — direct negative assertion |
| Explaining basics to operators | Accordion for "Already running video?" — doesn't assume beginner |
| No dated claims | "Q3 2024" anchors the timeline |
