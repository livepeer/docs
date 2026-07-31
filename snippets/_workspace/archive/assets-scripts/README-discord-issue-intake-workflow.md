# Discord Issue Intake Workflow (n8n, Phase 1)

Workflow file:
- `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-current/snippets/assets/data/n8n/Discord-Issue-Intake.json`

GitHub Action target:
- `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-current/.github/workflows/discord-issue-intake.yml`

This workflow implements Discord -> GitHub issue intake for **Template 02** (`docs_page_issue`) with:
- Discord signature verification
- Channel allowlist gating
- Per-user rate limiting
- Preview + confirm/cancel flow
- `repository_dispatch` handoff to GitHub Actions
- Follow-up response with created issue URL (or failure diagnostics)

## Phase 1 Scope

- Command: `/docs-issue`
- Template: `02_docs_page_issue`
- UX: command options -> modal -> preview -> confirm/cancel
- Dynamic labels (`area:*`, `priority:*`, `kind:*`) are handled by existing:
  - `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-current/.github/workflows/issue-auto-label.yml`

## Required n8n Environment Variables

- `DISCORD_PUBLIC_KEY`: Discord application public key (hex)
- `ALLOWED_CHANNEL_IDS`: Comma-separated Discord channel IDs allowed for intake
- `GITHUB_DISPATCH_TOKEN`: Fine-grained GitHub token with `repository_dispatch` + issues read/search permissions for `livepeer/docs`
- `GITHUB_OWNER`: Defaults to `livepeer`
- `GITHUB_REPO`: Defaults to `docs`
- `GITHUB_DISPATCH_EVENT_TYPE`: Defaults to `discord-issue-intake`
- `SECURITY_REPORT_URL`: Defaults to GitHub private advisory URL
- `RATE_LIMIT_WINDOW_SEC`: Defaults to `600`
- `RATE_LIMIT_MAX`: Defaults to `3`
- `DISCORD_ISSUE_SCHEMA_VERSION`: Defaults to `1.0.0`
- `GITHUB_POLL_ATTEMPTS`: Defaults to `8`
- `GITHUB_POLL_DELAY_MS`: Defaults to `4000`

Runtime note:
- The Code node uses Node's built-in `crypto` module for Ed25519 verification. If your n8n deployment restricts built-ins, allow `crypto` for Code/Function execution.

## Discord Command Contract

Register `/docs-issue` with these options (names are parsed by workflow logic):

Required string options:
- `title`
- `area` (must match labels like `area: developers`)
- `issue_subtype` (must match template wording)
- `page_or_path`
- `section_anchor`
- `priority` (must match `priority: high` style)
- `suggested_improvement`
- `requested_action`

Required boolean options:
- `searched_existing`
- `enough_detail`

Modal-collected fields:
- `content_problem`
- `evidence`
- `ui_ux_feedback`
- `done_criteria`
- `additional_context` (optional)

## Security and Abuse Controls

1. Signature validation:
- Verifies `X-Signature-Ed25519` + `X-Signature-Timestamp` using `DISCORD_PUBLIC_KEY`.

2. Channel gating:
- Rejects requests from channels outside `ALLOWED_CHANNEL_IDS`.

3. Rate limiting:
- Uses workflow static data keyed by Discord user ID.
- Limits to `RATE_LIMIT_MAX` submissions per `RATE_LIMIT_WINDOW_SEC`.

4. Security-sensitive text guard:
- Blocks likely vulnerability reports and points to private reporting URL.

## GitHub Dispatch Payload (Phase 1)

The workflow sends:

- `event_type`: `discord-issue-intake`
- `client_payload`:
  - `schema_version`
  - `template_key` = `docs_page_issue`
  - `correlation_id`
  - `issue_title`
  - `fields` (template 02 IDs)
  - `source` (guild/channel/message/user metadata)
  - `checks` (`searched_existing`, `enough_detail`)

## Response Flow

1. `/docs-issue` -> returns modal.
2. Modal submit -> returns preview with inferred labels and two buttons.
3. Confirm button -> immediate ACK, then dispatch + polling.
4. Follow-up message:
- Success: posts created issue URL + issue number.
- Failure: posts correlation ID + error details.

## Operational Checklist

1. Import JSON workflow into n8n.
2. Set all required environment variables.
3. Configure Discord interaction endpoint to this webhook path.
4. Register slash command options listed above.
5. Keep workflow **inactive** until dry-run validation is complete.
6. Test in an allowlisted test channel first.
7. Validate GitHub Action run and resulting issue labels/body.
8. Activate workflow for production channels.

## Validation Scenarios

- Ping handshake returns type `1`.
- Disallowed channel receives ephemeral deny.
- Missing required slash option denies before modal.
- Modal missing required field denies with actionable error.
- Preview includes heading structure and inferred labels.
- Confirm triggers exactly one GitHub issue for one `correlation_id`.
- Follow-up returns issue URL.
- Security-sensitive text routes to private report URL.

## Notes

- This phase supports only `02_docs_page_issue`.
- Extend by adding template selection + per-template field map in the parse node.
- Existing template and auto-label workflows remain the source of truth for intake taxonomy.
