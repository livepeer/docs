# SOLUTIONS Tab: Governance, Maintenance & Ownership

## Content Ownership Model

### Per-Product Ownership

Each product has a designated **owner** (usually from the product team) responsible for accuracy and timeliness.

| Product | Owner | Approval Gate | Review Cycle |
|---|---|---|---|
| **Studio** | Livepeer Labs (official) | Technical review + product | Monthly |
| **Daydream** | Daydream Team | Technical review + community | Quarterly |
| **Frameworks** | Frameworks Team (SPE) | Technical review | Quarterly |
| **Streamplace** | Streamplace Team (SPE) | Technical review | Quarterly |
| **Embody** | Embody Team | Technical review | Quarterly |

### Tab-Wide Ownership

**Solutions Tab Lead**: [TBD — recommend 1 FTE dedicated to curation, audits, and cross-product content]

**Responsibilities**:
- Maintain IA and page templates
- Ensure cross-product consistency (voice, structure, frontmatter)
- Fix broken links and automation
- Quarterly audit (content freshness, broken links, outdated examples)
- Onboard new products or major feature releases

---

## Review Gates (Per Page Type)

### Overview Pages

**Checklist before publishing**:
- [ ] Product definition is clear (1-2 sentences)
- [ ] Connection to Livepeer is explicit
- [ ] Key features (4-6) are accurate and current
- [ ] Demo video is functional
- [ ] All "Try" links are valid
- [ ] Get Started steps are copy-paste ready
- [ ] Resources links (docs, GitHub, Discord) are current
- [ ] Frontmatter is complete and accurate
- [ ] Last verified date is set

**Approval**: Product team + Solutions lead  
**Review cycle**: Quarterly (or on major release)

---

### Task Guides

**Checklist before publishing**:
- [ ] Code examples are tested and work
- [ ] All prerequisites are listed
- [ ] Steps are numbered and clear
- [ ] Expected output is documented
- [ ] Error handling covers common cases
- [ ] "Related tasks" link to other guides
- [ ] All links are internal and valid
- [ ] Code formatting is consistent
- [ ] Edge cases are acknowledged

**Approval**: Product team + Solutions lead  
**Review cycle**: On update or quarterly

---

### API Reference

**Checklist before publishing**:
- [ ] All endpoints are documented
- [ ] Parameters are accurate (type, required/optional)
- [ ] Request/response examples are real (not made up)
- [ ] Error codes are comprehensive
- [ ] Examples are copy-paste ready
- [ ] SDKs are listed with install commands
- [ ] Rate limits are documented
- [ ] Deprecation notices are clear

**Approval**: Product team + API owner  
**Review cycle**: On API change or quarterly

---

### Community Pages

**Checklist before publishing**:
- [ ] Social data automation is working (YouTube, GitHub, Discord, forum)
- [ ] Latest updates are showing (not stale)
- [ ] Links to external communities are valid
- [ ] Curation is balanced (no spam, no dead projects)

**Approval**: Content lead (or automated)  
**Review cycle**: Weekly (automated) or monthly (manual)

---

## Maintenance Schedule

### Daily
- Monitor for broken links (automated scanner)
- Check if social feeds updated (automation verification)

### Weekly
- Scan error logs for content-related 404s
- Verify external links (GitHub, docs, Discord) are valid

### Monthly
- Update community feeds (if automation broken)
- Scan for outdated examples or deprecated APIs
- Check lastVerified dates; flag if > 90 days old

### Quarterly (Full Tab Audit)
1. **Content freshness**: All pages lastVerified in past 3 months
2. **Link health**: All internal and external links valid
3. **Consistency**: Frontmatter, voice, structure match template
4. **Accuracy**: Code examples, API endpoints, feature lists current
5. **Completeness**: No stubs or "coming soon" pages (or justified)
6. **Performance**: Page load times acceptable, images optimized

**Effort**: 8-12 hours (1 FTE for 1-2 days)

---

## Escalation & Support Paths

### Content Issues (Reader-Facing)

**Who to contact**: Solutions tab lead or product owner

**Channels** (in order of preference):
1. GitHub issue in docs repo
2. Discord #docs-feedback
3. Email: docs@livepeer.org (if exists)

**Expected response time**: < 1 business day  
**Expected resolution time**: < 1 week

---

### Product Issues (Product-Team-Facing)

**Who to contact**: Product owner for that product

**Typical workflow**:
1. Reader reports issue (docs or Discord)
2. Solutions tab lead triages (docs vs product issue)
3. If docs: Solutions lead fixes; product team reviews
4. If product: Product team fixes; docs updated if needed

**Expected response time**: < 2 business days  
**Expected resolution time**: < 2 weeks

---

### Site-Wide Issues (DevOps)

**Who to contact**: Docs infrastructure team

**Examples**: 
- Broken automation (social feeds)
- Infrastructure outage (CDN, builds, hosting)
- Link rewrite issues (livepeer.studio → internal)

**Escalation**: Solutions tab lead → DevOps/infrastructure lead

---

## Versioning & Deprecation Strategy

### API Versioning

When an API deprecates or changes:

1. **Update API reference** (mark deprecated, link to v2)
2. **Create migration guide** (old v1 → new v2)
3. **Update task guides** (show new approach)
4. **Add deprecation notice** at top of old page
5. **Keep old page live** for 6+ months (backward compat)

**Example**:
```markdown
<Warning>
  This endpoint is deprecated as of March 2025. Use [POST /v2/streams](#) instead.
  See [migration guide](/solutions/livepeer-studio/docs/migrate-v1-to-v2) for details.
</Warning>
```

---

### Product Versioning

When a product releases major version:

1. **Update overview** (bump version reference, highlight changes)
2. **Update all task guides** (test with new version)
3. **Add changelog entry** (what changed, how to upgrade)
4. **Note system requirements** (min SDK version, API version, etc.)
5. **Link to breaking changes doc** (if any)

---

## Onboarding New Products

When a new product launches or joins Livepeer ecosystem:

### Phase 1: Planning (1 week)
- [ ] Assign product owner and content lead
- [ ] Define scope (which content is owned by product team, which by docs)
- [ ] Identify templates and inspiration (look at similar products)
- [ ] Create issue/task tracker

### Phase 2: Scaffolding (1 week)
- [ ] Create folder structure: `/v2/solutions/[product]/`
- [ ] Stub all pages (use templates; mark "in progress")
- [ ] Migrate or create data files (badges, infra tags, socials)
- [ ] Set up social/community automation

### Phase 3: Content Creation (2-4 weeks)
- [ ] Overview page (product team + content lead)
- [ ] Quickstart (product team)
- [ ] 3-5 task guides (product team + content lead)
- [ ] API reference or SDK docs link (product team)
- [ ] Changelog (product team)

### Phase 4: Review & Launch (1 week)
- [ ] Full content review (product team + Solutions lead)
- [ ] Link audit (all links valid)
- [ ] Spelling/grammar check
- [ ] Accessibility audit
- [ ] Performance check (load time, image sizes)
- [ ] Publish + promote in Discord

---

## Metrics & Success Criteria

### Tab-Level Metrics (What We Track)

| Metric | Target | Current | Notes |
|---|---|---|---|
| **Availability** | 100% uptime | — | Monitor CDN, builds, automation |
| **Link health** | 100% valid links | — | Weekly automated scan |
| **Content freshness** | 100% pages reviewed <90 days | — | Tracked via lastVerified frontmatter |
| **Reader satisfaction** | >4.0/5.0 stars (if surveyed) | — | Collect feedback on each page |

---

### Reader Engagement Metrics (What We Measure)

| Metric | Target | Current | Notes |
|---|---|---|---|
| **Portal landing page bounce rate** | <50% | — | Primary entry point |
| **Product overview reading time** | 2-4 min (80% complete) | — | Should finish overview |
| **Quickstart completion rate** | >60% | — | Proxy for "first working result" |
| **Task guide conversion** | 80% implement feature | — | Proxy for success |
| **Support tickets** (reduction) | 20% fewer "how do I X" | — | Docs are working |

---

### Product-Level Metrics (What We Measure)

| Product | Overview views/mo | Quickstart starts/mo | Task guide clicks | Notes |
|---|---|---|---|---|
| **Studio** | [N] | [N] | [N] | Highest volume expected |
| **Daydream** | [N] | [N] | [N] | Growing AI segment |
| **Frameworks** | [N] | [N] | [N] | Self-hosting path |
| **Streamplace** | [N] | [N] | [N] | Niche (Web3) |
| **Embody** | [N] | [N] | [N] | Enterprise/education |

---

## Future Roadmap

### Q2 2026 (Next Phase)

- [ ] Implement cost calculator (interactive tool)
- [ ] Add case studies (3-5 success stories)
- [ ] Expand task guides (Daydream, Frameworks, Streamplace, Embody)
- [ ] Create video tutorials (30-60s per major feature)
- [ ] Build community showcase (featured integrations)

### Q3 2026

- [ ] Add internationalization (Spanish, Chinese, Japanese)
- [ ] Launch "Build with us" program (partner spotlights)
- [ ] Create video course (AI on Livepeer, self-hosted stacks)

### Q4 2026

- [ ] User research (interview 10+ builders; iterate IA)
- [ ] Redesign portal (fresher, more engaging)
- [ ] Add AI assistant (contextual help, error troubleshooting)

---

## Contact & Questions

**Solutions Tab Lead**: [TBD]  
**Docs Infrastructure**: [TBD]  
**Discord Channel**: #solutions-docs (internal) or #solutions (public feedback)

---

**End of Report**

These 7 files form a complete canonical design for the SOLUTIONS tab, following the orchestrators format exactly. The design:

1. **Audience-centric** (file 01-02): Who lands here, what they need, when they get it
2. **Journey-mapped** (file 03): All 10 stages of zero-to-hero, per-persona customization
3. **IA-complete** (file 04): Full folder structure, page patterns, cross-product reference sections
4. **Template-driven** (file 05): Detailed page type specs for overview, quickstart, guide, reference, comparison, checklist
5. **Gap-prioritized** (file 06): 11 gaps ranked by impact; build order for 2-3 week execution
6. **Owned & maintained** (file 07): Clear ownership model, review gates, maintenance schedule, metrics

The design is **comprehensive**, **actionable**, and **immediately executable**.