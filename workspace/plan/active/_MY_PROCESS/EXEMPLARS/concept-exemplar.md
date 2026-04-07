# Exemplar: Concept Page (General/About Audience)

> Source: `v2/about/protocol/overview.mdx`
> Why this is gold-standard: Precise definition, no hedging, "aim" field scopes the page, section map with cards

---

## Why This Works

1. Frontmatter includes `aim` field that scopes the page in 3 clauses: "What the protocol is. What it secures. What it does not do."
2. Opens with a GitHub repo link (code-first for technical readers)
3. Uses a Quote block for the core definition — signals authority
4. Definition uses "is" not "can be" or "aims to be" — assertive
5. Section map uses Cards with explicit bullet lists — reader sees the full section at a glance

---

## Annotated Frontmatter

```yaml
pageType: overview
purpose: overview
audience: general
aim: What the protocol is. What it secures. What it does not do
```
<!-- EXEMPLAR: "aim" field is not a standard frontmatter key but is excellent practice.
     Three clauses scope what the page WILL and WON'T cover.
     "What it does not do" is the critical third clause — prevents scope creep. -->

## Annotated Opening

```mdx
<CardTitleTextWithArrow icon="github" href="https://github.com/livepeer/protocol">
  Livepeer Protocol
</CardTitleTextWithArrow>
```
<!-- EXEMPLAR: First visual element is a link to the source code.
     For a protocol overview, this signals: "this is real, verifiable, open source."
     Not a marketing tagline or a "Welcome to..." paragraph. -->

```mdx
<Quote>
The Protocol is the **on-chain coordination, security and economic layer** responsible
for governing the network, securing the system, and incentivising desired behaviour
from participants.
</Quote>
```
<!-- EXEMPLAR: Core definition in a Quote block — visually distinct, signals authority.
     Uses bold for the key phrase: "on-chain coordination, security and economic layer"
     Uses "is" not "can be described as" or "aims to provide" — assertive definition. -->

## Annotated Section Map

```mdx
<Card title="Core Mechanisms" icon="cubes-stacked" href="..." arrow>
  The core mechanisms of the Livepeer protocol:
  * Staking
  * Delegation
  * Reward distribution
  * Inflation model
  * Slashing
  * Rounds
</Card>
```
<!-- EXEMPLAR: Card title names the subject ("Core Mechanisms"), not the action ("Learn About Mechanisms")
     Bullet list inside card shows exact contents — reader knows what they'll get before clicking.
     No vague descriptions like "Explore the key mechanisms that power the protocol." -->

## Common Failures This Avoids

| Failure pattern | How this page avoids it |
|---|---|
| Vague scope ("This page covers the protocol") | `aim` field: 3 precise clauses |
| Marketing opening ("Welcome to the protocol docs") | GitHub link first — code is the authority |
| Hedge in definition ("can be thought of as") | "is the on-chain coordination..." — direct |
| Generic section titles ("Important Concepts") | Specific: "Core Mechanisms", "Governance Model", "Livepeer Token" |
| Section map as prose | Cards with bullet lists — visual, scannable |
| Explaining too broadly | "What it does not do" prevents scope creep |
