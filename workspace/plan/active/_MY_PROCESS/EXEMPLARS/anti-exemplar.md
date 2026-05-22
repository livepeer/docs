# Anti-Exemplar: Failing Page Analysis

> Source: `v2/gateways/setup/connect/connect-with-offerings.mdx`
> Why this fails: Opens with banned phrase, unresolved TODOs, vague value claims, inconsistent headings

---

## Failure 1: Self-referential description (BANNED)

```yaml
description: >-
  This page explains how to find and broker Orchestrator AI & Video Offerings via your
  Gateway for Livepeer Application consumption.
```
**Problem**: "This page explains" is explicitly banned in voice-rules.md.
**Fix**:
```yaml
description: >-
  Find and broker Orchestrator AI & video offerings via your Gateway for Livepeer
  application consumption.
```

---

## Failure 2: Self-referential opening (BANNED)

```
This page explains how Gateways can discover and offer Orchestrator Services,
available on the Marketplace, to Applications & Builders.
```
**Problem**: "This page explains" is the #1 banned construction. "can discover" is a hedge.
**Fix**:
```
Gateways discover Orchestrators and expose their services to applications and builders
through the Livepeer marketplace.
```

---

## Failure 3: Unresolved TODO in published content

```
{/* TODO:
Terminology Validation:
- Ensure the terminology and definitions used in this page is consistent with the
  resources/glossary terminology
Verify:
- Terminology is consistent with resources/glossary
*/}
```
**Problem**: Editorial debt shipped to production. This should have been caught before publish.
**Fix**: Resolve the TODO (validate terminology) or move to a tracking issue and remove from page.

---

## Failure 4: Vague value claim

```
make matching orchestrator services available through HTTP endpoints
```
**Problem**: "available" is vague. What does the gateway operator GET from this?
**Fix**:
```
Gateways expose each selected orchestrator's services via HTTP endpoints, enabling client
applications to discover compatible compute, request jobs, and route based on price and
capability.
```

---

## Failure 5: Inconsistent heading register

```
## Find All Orchestrators & Offerings
...
## Gateway
```
**Problem**: First heading is action-oriented (gateway voice). Second is a bare noun. They don't match.
**Fix**: Both headings should be action-oriented for gateway audience:
```
## Discover All Orchestrators & Offerings
## Configure Gateway Routing
```

---

## The Pattern

This page fails because it was written WITHOUT loading:
1. Voice-rules.md (would have caught "This page explains")
2. The gateway voice register (would have caught hedging and inconsistent headings)
3. A relevant exemplar (would have shown what a good gateway page looks like)
4. The pre-publish quality gate (would have caught the TODO comment)

The content itself is not bad — the information is correct and useful. The VOICE and STRUCTURE are the problems, and they are the problems the pipeline is designed to prevent.
