# Human Override Policy for Agent Git Operations

## Default Rule

Agents must use normal repository safety checks by default:
- run standard commit flow with hooks
- avoid bypass flags
- open PRs for review

## Explicit Human Override Exception

A bypass is allowed only when the human explicitly instructs it in-thread.

Current allowed override scope:
- `git commit --no-verify` only

Not covered by this exception:
- force pushes
- bypassing codex scope enforcement
- destructive history rewrites

## Required Audit Fields

When a no-verify override is used, include audit metadata in commit/PR notes:
- `override_type: no-verify`
- `requested_by: human`
- `request_context: <short quoted instruction>`
- `reason: <human-provided or user-directed override>`

## Multi-Agent Merge Rule

Default multi-agent behavior is PR-only.

Only when explicitly asked to merge:
1. stash local changes (`tracked + untracked`)
2. merge requested target
3. pop stash
4. stop and report if merge or stash-pop conflicts occur
