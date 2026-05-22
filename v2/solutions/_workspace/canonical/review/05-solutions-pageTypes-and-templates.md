# SOLUTIONS Tab: Page Type Specifications & Templates

## Page Type 1: Overview

**Purpose**: Introduce a product; answer "what is this?"

**Audience**: All personas (Evaluator → Product Builder)

**When to read**: Discovery phase; deciding whether product fits

**How long**: 3-5 minutes

**Success criteria**:
- Reader can define the product in 1 sentence
- Reader knows key capabilities
- Reader can try it or start quickstart
- Reader knows where to get help

### Template Structure

```markdown
---
title: About [Product Name]
sidebarTitle: About [Product Name]
description: [1-sentence definition]. [Connection to Livepeer].
pageType: overview
audience: platform-builder
lastVerified: YYYY-MM-DD
purpose: overview
---

{/* IMPORTS: icons, components, videos */}

{/* METADATA BADGES */}
<IconBadgeWrapper items={[product]Infra} />
<BadgeWrapper badges={[product]Badges} />

{/* SOCIAL LINKS */}
<CenteredContainer>
  <BorderedBox>
    <SocialLinks links={[product]Socials} />
  </BorderedBox>
</CenteredContainer>

<Info>
  Maintained by [Team]. Help available at [Discord/contact].
</Info>

{/* PRODUCT VIDEO OR DEMO */}
<Video src="/path/to/demo.mp4" />

{/* DEFINITION & CONNECTION TO LIVEPEER */}
[Product Name] is a **[category]** for [use case]. It [key differentiator].

[Product Name] runs on Livepeer's decentralised [GPU/video] network. It [how it uses Livepeer].

<CustomDivider />

## Key Features
- **[Feature 1]** — [1-sentence benefit]
- **[Feature 2]** — [1-sentence benefit]
- **[Feature 3]** — [1-sentence benefit]
- **[Feature 4]** — [1-sentence benefit]

<YouTubeVideo embedUrl="..." />

<CustomDivider />

## Try [Product]

<CardGroup cols={2}>
  <Card title="Try the app" href="[link]">
    [1-sentence description]
  </Card>
  <Card title="Quickstart" href="/solutions/[product]/quickstart">
    [1-sentence description]
  </Card>
  {/* 2-4 more cards */}
</CardGroup>

<CustomDivider />

## Get Started

<StyledSteps>
  <StyledStep title="Step 1: [Action]" icon="[icon]">
    [Step instruction with code or CLI example]
  </StyledStep>
  
  <StyledStep title="Step 2: [Action]" icon="[icon]">
    [Step instruction with code or CLI example]
  </StyledStep>
  
  <StyledStep title="Step 3: [Action]" icon="[icon]">
    [Step instruction with code or CLI example]
    <Info>[Expected output or note]</Info>
  </StyledStep>
</StyledSteps>

<CustomDivider />

## [Product] Resources

{/* SOCIAL LINKS */}

<CardGroup cols={2}>
  <Card title="[Product] docs" icon="newspaper" href="[link]">
    Full documentation: setup, API reference, guides.
  </Card>
  <Card title="GitHub" icon="github" href="[link]">
    Open-source code and community contributions.
  </Card>
  <Card title="Discord" icon="discord" href="[link]">
    Community and support.
  </Card>
  <Card title="[Other resource]" icon="[icon]" href="[link]">
    [Description]
  </Card>
</CardGroup>
```

### Example: Daydream Overview

**File**: `/v2/solutions/daydream/overview.mdx`  
**Current status**: Good; matches template

---

## Page Type 2: Quickstart

**Purpose**: Get something working in < 1 hour

**Audience**: Product Builder, Active Builder

**When to read**: PoC phase; validating fit before full integration

**How long**: 15-30 minutes

**Success criteria**:
- Copy-paste code works
- Produces expected output
- Reader knows next step

### Template Structure

```markdown
---
title: Quickstart — [Product]
sidebarTitle: Quickstart
description: Get [Product] working in 15 minutes.
pageType: quickstart
audience: platform-builder
lastVerified: YYYY-MM-DD
purpose: start
---

Get [Product] up and running in **15 minutes**.

## Prerequisites

- [SDK / tool] version [X+]
- [API key / credential]
- [Hardware / network requirement]
- Estimated time: **15 minutes**

## Step-by-Step

### 1. Install and Configure

{code example: copy-paste ready}

**What you'll see**:
{expected output}

### 2. Create Your First [Resource]

{code example: copy-paste ready}

**What you'll see**:
{expected output}

### 3. Verify It Works

{code example: copy-paste ready}

**Success**: You should see...

## Troubleshooting

| Error | Fix |
|---|---|
| "Authentication failed" | Check your API key: `echo $API_KEY` |
| "Connection refused" | Ensure the SDK is installed: `npm ls [sdk]` |

## Next Step

Now that you have [basic thing] working, try:
- [Task guide link]: "Create a livestream"
- [Task guide link]: "Add access control"
- [Full docs link]: "Full API reference"
```

### Example: Studio Quickstart

**File**: `/v2/solutions/livepeer-studio/docs/quickstart.mdx`  
**Current status**: Exists; good quality

---

## Page Type 3: Task Guide

**Purpose**: Implement one feature end-to-end

**Audience**: Product Builder, Active Builder

**When to read**: Integration phase; building a specific feature

**How long**: 5-15 minutes (depending on complexity)

**Success criteria**:
- Feature works after following steps
- Code is copy-paste ready
- Edge cases handled
- Knows how to debug if it breaks

### Template Structure

```markdown
---
title: [Task]: [What you'll accomplish]
sidebarTitle: [Task name]
description: How to [task] with [Product].
pageType: guide
audience: developer
lastVerified: YYYY-MM-DD
purpose: build
---

Learn how to **[task description in 1 sentence]**.

## What You'll Need

- [SDK/tool] version [X+]
- [API key]
- [Prerequisite knowledge]
- Estimated time: **[10] minutes**

## Full Code Example

Here's the complete code:

{full, copy-paste ready code block}

## Step-by-Step Walkthrough

### 1. [Action]

{code snippet}

**What this does**: [Explanation]

### 2. [Action]

{code snippet}

**What this does**: [Explanation]

### 3. [Action]

{code snippet}

**What this does**: [Explanation]

## Expected Output

When you run this, you should see:

{expected output}

## Error Handling

```
if (response.status === 401) {
  throw new Error('Unauthorized: Check your API key');
}
```

Common errors:
| Error | Cause | Fix |
|---|---|---|
| "Stream not found" | Resource doesn't exist | Check the stream ID: `studio.getStream(streamId)` |

## Variations

### [Variation A]: [Different approach]

Instead of using `method1()`, you can use `method2()`:

{code}

### [Variation B]: [Another approach]

{code}

## Related Tasks

- [Link]: Create a livestream
- [Link]: Add webhook notifications
- [Link]: Full API reference

## Need Help?

- [Studio docs](https://docs.livepeer.studio)
- [Discord #studio](https://discord.gg/livepeer)
```

### Example: "Create a Livestream with Studio"

**File**: `/v2/solutions/livepeer-studio/docs/livestream/create-livestream.mdx`  
**Current status**: Good; matches template

---

## Page Type 4: Reference (API)

**Purpose**: Official documentation for APIs, endpoints, parameters

**Audience**: Product Builder, Active Builder

**When to read**: Integration phase; looking up specific endpoint or error code

**How long**: 1-5 minutes per lookup

**Success criteria**:
- Endpoint signature is clear
- Parameters documented
- Examples are copy-paste ready
- Error codes explained

### Template Structure

```markdown
---
title: [API Resource] — Reference
sidebarTitle: [API Resource]
description: Reference for [Resource] API endpoints.
pageType: reference
audience: developer
lastVerified: YYYY-MM-DD
purpose: reference
---

## Overview

The [Resource] API lets you [what it does].

**Base URL**: `https://api.example.com/v1`

**Authentication**: [API key | JWT | OAuth]

## Endpoints

### GET /[resource]/{id}

Get a single [resource].

**Path Parameters**:
| Name | Type | Required | Description |
|---|---|---|---|
| id | string | Yes | The [resource] ID |

**Query Parameters**:
| Name | Type | Description |
|---|---|---|
| include | string | Include related objects: `metadata,stats` |

**Request**:
```bash
curl -H "Authorization: Bearer $API_KEY" \
  https://api.example.com/v1/streams/abc123?include=stats
```

**Response** (200 OK):
```json
{
  "id": "abc123",
  "name": "My Stream",
  "status": "active",
  "stats": {
    "bytesReceived": 1000000
  }
}
```

**Error Codes**:
| Code | Meaning | Fix |
|---|---|---|
| 401 | Unauthorized | Check your API key |
| 404 | Not Found | Verify the resource ID |
| 429 | Rate Limited | Slow down your requests |

### POST /[resource]

Create a new [resource].

{parameters, request, response, error codes}

### Other Endpoints

[All remaining endpoints...]

## Error Handling

All endpoints return standard error responses:

```json
{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "The 'format' parameter must be one of: mp4, hls",
    "details": {
      "parameter": "format",
      "value": "mpeg"
    }
  }
}
```

Retry logic: [Recommended retry strategy]

## Rate Limits

- [Request limits per minute/hour]
- [Burst limits]
- [How to check remaining quota in response headers]

## SDKs

- JavaScript: `npm install @livepeer/js`
- Python: `pip install livepeer`
- Go: `go get github.com/livepeer/go-sdk`

See [SDK guide] for details.

## Authentication

[How to obtain and use credentials]

```
Authorization: Bearer YOUR_API_KEY
```

## Examples

### [Use Case 1]: [What you'll accomplish]

{full code example}

### [Use Case 2]: [What you'll accomplish]

{full code example}
```

### Example: Studio API Reference

**File**: `/v2/solutions/livepeer-studio/docs/api-reference/overview.mdx`  
**Current status**: Comprehensive; good quality

---

## Page Type 5: Feature Matrix / Comparison

**Purpose**: Compare products by features and deployment mode

**Audience**: Evaluator, Integration Evaluator

**When to read**: Evaluation phase; deciding which product to use

**How long**: 2-5 minutes

**Success criteria**:
- Can quickly see which product has which feature
- Comparison is fair and consistent
- Can decide "which product for my use case?"

### Template Structure

```markdown
---
title: Product Feature Comparison
sidebarTitle: Feature Comparison
description: Compare Livepeer products by features and deployment mode.
pageType: comparison
audience: evaluator
lastVerified: YYYY-MM-DD
purpose: evaluate
---

Choose the right Livepeer product for your use case.

## Feature Matrix

| Capability | Studio | Daydream | Frameworks | Streamplace | Embody |
|---|---|---|---|---|---|
| **Video** | | | | | |
| Livestream ingest | ✓ | ✓ | ✓ | ✓ | — |
| VOD transcoding | ✓ | — | ✓ | ✓ | — |
| Playback delivery | ✓ | — | ✓ | ✓ | ✓ |
| Multi-bitrate | ✓ | — | ✓ | ✓ | — |
| **AI & Processing** | | | | | |
| Real-time AI inference | — | ✓ | — | — | ✓ |
| Custom model support | — | Partial | — | — | — |
| World models | — | ✓ | — | — | — |
| **Security & Access** | | | | | |
| JWT access control | ✓ | — | — | — | — |
| IP allowlist | ✓ | — | — | — | — |
| DRM / encryption | — | — | — | — | — |
| Webhook signing | ✓ | — | — | — | — |
| **Distribution** | | | | | |
| Global CDN | ✓ | — | ✓ | Optional | — |
| P2P delivery | — | — | — | Possible | — |
| Decentralised | Partial | ✓ | ✓ | ✓ | — |
| **Provenance** | | | | | |
| C2PA signing | — | — | — | ✓ | — |
| Ethereum attestation | — | — | — | ✓ | — |
| Content authenticity | — | — | — | ✓ | — |
| **Deployment** | | | | | |
| Managed service | ✓ | ✓ | ✓ | — | ✓ |
| Self-hosted option | — | — | ✓ | ✓ | — |
| Hybrid mode | — | — | ✓ | Optional | — |
| Multi-region | ✓ | — | ✓ | — | — |

✓ = Supported  
— = Not applicable or not supported  
Partial = Limited support or planned

## Deployment Modes

| | Studio | Daydream | Frameworks | Streamplace | Embody |
|---|---|---|---|---|---|
| **Fully Managed** | ✓ | ✓ | ✓ | — | ✓ |
| **Self-Hosted** | — | — | ✓ | ✓ | — |
| **Hybrid** | — | — | ✓ | Optional | — |
| **Cost Model** | Per-minute | Per-inference | Tiered | DIY | Per-session |

## Product Positioning

**Use Studio if**: You want a managed, zero-ops video platform with API simplicity.

**Use Daydream if**: You need real-time AI video transformation with low latency.

**Use Frameworks if**: You need full-stack control with self-hosting options.

**Use Streamplace if**: You're building a social network and need content provenance.

**Use Embody if**: You need interactive 3D avatars for education or enterprise.

## Decision Trees

### "I need livestream + VOD"

→ **Studio** (simplest managed option)  
→ **Frameworks** (if you need self-hosting)

### "I need to add AI to my video"

→ **Daydream** (real-time AI video)  
→ **Studio + BYOC** (custom model on Livepeer)

### "I need content provenance and authenticity"

→ **Streamplace** (C2PA + Ethereum signing built-in)

### "I need to avoid vendor lock-in"

→ **Frameworks** (full self-hosting)  
→ **Streamplace** (open-source node)

## Next Steps

1. Identify your top 3 features from the matrix
2. Find the product with ✓ for all 3
3. Read that product's overview
4. Try the quickstart

[Links to product overviews]
```

### Status

**File**: `_common/feature-matrix.mdx` — MISSING (P0)

---

## Page Type 6: Checklist / Readiness Guide

**Purpose**: Validation before launch or next phase

**Audience**: Product Builder (launching), Active Builder (scaling)

**When to read**: Before going live or scaling significantly

**How long**: 15-30 minutes to review and complete

**Success criteria**:
- All checkboxes completed
- No unknowns or blockers remain
- Confident in next phase

### Template Structure

```markdown
---
title: Production Readiness Checklist — [Product]
sidebarTitle: Production Readiness
description: Ensure [Product] is ready for launch.
pageType: checklist
audience: platform-builder
lastVerified: YYYY-MM-DD
purpose: operate
---

Complete this checklist before launching [Product] in production.

## Infrastructure

- [ ] Multi-region fallback configured
  - [ ] Primary region selected
  - [ ] Failover region selected and tested
  - [ ] DNS failover automation in place
  
- [ ] Load testing completed
  - [ ] Estimated peak concurrency: ____ users
  - [ ] Peak throughput tested: ____ streams
  - [ ] System behaved predictably under load
  
- [ ] Capacity planning completed
  - [ ] Resource requirements documented
  - [ ] Scaling strategy defined (manual | auto)
  - [ ] Cost estimates validated

## Monitoring & Alerting

- [ ] Alerting rules set
  - [ ] High error rate (>5%) → page on-call
  - [ ] Stream availability (<95%) → escalate
  - [ ] Cost spike (>X% above forecast) → notify finance
  
- [ ] Log aggregation configured
  - [ ] Logs shipping to: [system]
  - [ ] Retention policy: [N days]
  - [ ] Search dashboard created
  
- [ ] Uptime monitoring active
  - [ ] Synthetic checks every [N] minutes
  - [ ] Public status page: [URL]
  - [ ] Customer notifications enabled

## Security

- [ ] Authentication implemented
  - [ ] Method: [API key | JWT | OAuth]
  - [ ] Credentials stored securely (vault | env)
  - [ ] Key rotation schedule: [monthly | quarterly]
  
- [ ] Data encryption enabled
  - [ ] HTTPS enforced (no HTTP fallback)
  - [ ] TLS 1.3 minimum
  - [ ] Certificate pinning (if applicable)
  
- [ ] Compliance review passed
  - [ ] Privacy policy reviewed
  - [ ] Data residency requirements met
  - [ ] GDPR / CCPA data handling documented

## Support & Runbooks

- [ ] Support escalation path documented
  - [ ] Tier 1 (first responder): [name]
  - [ ] Tier 2 (escalation): [name]
  - [ ] Tier 3 (vendor support): [contact]
  
- [ ] On-call team assigned
  - [ ] Rotation: [schedule]
  - [ ] Notification: [Slack | SMS | PagerDuty]
  
- [ ] Runbooks for common failures
  - [ ] "Stream won't ingest" → [link to runbook]
  - [ ] "Transcoding failed" → [link to runbook]
  - [ ] "API timeout" → [link to runbook]

## Performance & Cost

- [ ] Performance targets set
  - [ ] Target latency: [N]ms
  - [ ] Target throughput: [N] Mbps
  - [ ] Acceptable error rate: [X]%
  
- [ ] Cost baseline established
  - [ ] Estimated monthly cost: $[X]
  - [ ] Cost per user: $[Y]
  - [ ] Cost optimization strategy: [plan]

## Launch Preparation

- [ ] Customer communication plan
  - [ ] Announcement: [blog post | email]
  - [ ] Support documentation: [link]
  - [ ] FAQ prepared: [link]
  
- [ ] Gradual rollout strategy
  - [ ] Canary: [X]% of traffic
  - [ ] Monitoring: [metrics to watch]
  - [ ] Rollback plan: [how to undo]
  
- [ ] Post-launch review scheduled
  - [ ] Date: [YYYY-MM-DD]
  - [ ] Attendees: [team members]
  - [ ] Metrics to review: [list]

---

**Status**: Ready to launch ✓

If all boxes are checked, you're good to go. If any are incomplete, address them before launch.

**Need Help?**
- [Product docs]: Full reference
- [Discord #product]: Community support
- [Support contact]: For urgent issues
```

### Status

**File**: `_common/production-readiness.mdx` — MISSING (P0)

---