# Non-Technical Contribution Proposal

**Date:** 2025-01-XX  
**Status:** Proposal  
**Related Task:** Task 12 - Contribution Guide

## Executive Summary

This document proposes workflows and systems to enable non-technical users (those unfamiliar with Git, Markdown, or React) to contribute to the Livepeer documentation. The goal is to lower the barrier to entry while maintaining quality and review processes.

## Problem Statement

Currently, contributing to the documentation requires:
- Git knowledge
- Markdown familiarity
- Command-line comfort
- Local development setup

This excludes many potential contributors who have valuable content knowledge but lack technical skills.

## Proposed Solutions

### Option 1: "Edit This Page" Button with GitHub Web Editor

**Complexity:** Low  
**Effort:** 1-2 days  
**Maintenance:** Low

#### Implementation

1. Add "Edit this page" button to all documentation pages
2. Button links to GitHub's web editor for that specific file
3. GitHub automatically prompts to create PR after editing
4. User fills out PR template
5. PR is created for review

#### Pros
- Uses existing GitHub infrastructure
- No additional tools required
- Familiar interface for GitHub users
- Automatic PR creation

#### Cons
- Still requires GitHub account
- Requires basic Markdown knowledge
- Limited to single-file edits

#### Code Example

Add to page template or component:

```jsx
<Card 
  title="Edit this page" 
  icon="edit" 
  href={`https://github.com/livepeer/docs/edit/docs-v2-preview/v2/pages/07_resources/documentation-guide/contribute-to-the-docs.mdx`}
  arrow
>
  Found an error or want to improve this page? Edit it on GitHub!
</Card>
```

#### Status
✅ **Ready to implement** - Can be added immediately

---

### Option 2: Form-Based Submission System

**Complexity:** Medium  
**Effort:** 1-2 weeks  
**Maintenance:** Medium

#### Implementation

1. Create form (Google Forms, Typeform, or custom)
2. Form collects:
   - Page URL or section
   - Type of change (typo, clarification, new content)
   - Current text (if applicable)
   - Proposed text
   - Reason for change
   - Contributor contact info
3. Form submission triggers:
   - GitHub issue creation (via API or automation)
   - Email notification to documentation team
   - Optional: Auto-convert to PR template

#### Workflow

```
User fills form → Form submission → GitHub issue created → 
Maintainer reviews → Either:
  - Implements change directly
  - Converts to PR for user
  - Requests more information
```

#### Pros
- No technical knowledge required
- Can be used by anyone
- Structured data collection
- Can integrate with existing ticketing

#### Cons
- Requires form creation and maintenance
- Manual or semi-automated processing
- Potential for spam/abuse
- May need moderation

#### Implementation Options

**Option A: Google Forms + n8n**
- Google Form for submission
- n8n workflow to create GitHub issues
- Automated notifications

**Option B: Custom Form + GitHub Actions**
- Custom form (React/HTML)
- GitHub Actions workflow
- Direct GitHub issue creation

**Option C: Typeform + Zapier**
- Typeform for better UX
- Zapier integration
- GitHub issue creation

#### Status
📋 **Proposal** - Requires implementation

---

### Option 3: Mintlify Web Editor Integration

**Complexity:** High  
**Effort:** 2-4 weeks  
**Maintenance:** Medium

#### Implementation

1. Enable Mintlify's web editor feature
2. Configure GitHub authentication
3. Users click "Edit in Mintlify" button
4. Opens Mintlify's visual editor
5. Changes automatically create GitHub PR

#### Pros
- Visual editing interface
- No Markdown knowledge required
- Integrated with documentation platform
- Automatic PR creation

#### Cons
- Requires Mintlify subscription/feature access
- May have limitations
- Additional authentication setup
- Potential cost

#### Requirements
- Mintlify web editor access
- GitHub OAuth integration
- PR automation setup

#### Status
⚠️ **Requires investigation** - Need to verify Mintlify capabilities

---

### Option 4: External CMS Integration

**Complexity:** Very High  
**Effort:** 1-2 months  
**Maintenance:** High

#### Implementation

1. Set up headless CMS (Contentful, Strapi, etc.)
2. Sync content between CMS and GitHub
3. Non-technical users edit in CMS
4. CMS webhooks trigger GitHub Actions
5. Changes automatically committed and PR created

#### Pros
- Professional editing interface
- Version control in CMS
- Workflow management
- Multi-user collaboration

#### Cons
- Significant infrastructure
- Ongoing maintenance
- Cost (hosting, CMS subscription)
- Content synchronization complexity
- Potential for conflicts

#### Status
📋 **Long-term proposal** - Significant infrastructure required

---

## Recommended Implementation Plan

### Phase 1: Quick Win (Week 1)
**Implement "Edit This Page" buttons**

- Add buttons to all documentation pages
- Link to GitHub web editor
- Create PR template for documentation
- Document the workflow

**Effort:** 1-2 days  
**Impact:** Medium - Enables GitHub users without local setup

### Phase 2: Form System (Weeks 2-3)
**Implement form-based submission**

- Create Google Form or custom form
- Set up n8n workflow or GitHub Actions
- Create issue templates
- Test and iterate

**Effort:** 1-2 weeks  
**Impact:** High - Enables non-technical users

### Phase 3: Evaluation (Month 2)
**Evaluate Mintlify web editor**

- Research Mintlify capabilities
- Test if available
- Evaluate cost/benefit
- Decide on implementation

**Effort:** 1 week  
**Impact:** TBD based on capabilities

### Phase 4: Long-term (Future)
**Consider CMS integration**

- Evaluate need based on Phase 1-3 success
- Research CMS options
- Plan implementation if needed

**Effort:** 1-2 months  
**Impact:** Very High but requires significant investment

## Success Metrics

- **Number of non-technical contributions** - Track form submissions vs. PRs
- **Time to contribution** - Measure from submission to merge
- **Contribution quality** - Review acceptance rate
- **User satisfaction** - Survey contributors

## Risks and Mitigations

### Risk: Spam/Abuse
**Mitigation:** Require GitHub account or email verification, moderation queue

### Risk: Low Quality Submissions
**Mitigation:** Clear guidelines, templates, review process

### Risk: Maintenance Overhead
**Mitigation:** Automate as much as possible, clear documentation

### Risk: Technical Debt
**Mitigation:** Start simple, iterate based on usage

## Next Steps

1. **Immediate:** Implement Phase 1 ("Edit This Page" buttons)
2. **Short-term:** Design and implement Phase 2 (form system)
3. **Medium-term:** Evaluate Phase 3 (Mintlify web editor)
4. **Long-term:** Consider Phase 4 (CMS) if needed

## Feedback

This is a living proposal. Please provide feedback:
- Open a GitHub issue
- Discuss in Livepeer Discord
- Contact the documentation team

## References

- [GitHub Web Editor Documentation](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files-in-your-repository)
- [Mintlify Documentation](https://mintlify.com/docs)
- [n8n Workflow Automation](https://n8n.io/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
