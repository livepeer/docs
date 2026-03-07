#!/usr/bin/env node
/**
 * @script codex-commit
 * @summary Create git commits with explicit audited human override controls for --no-verify usage.
 * @owner docs
 * @scope tools/scripts, .githooks, ai-tools/ai-rules
 * @pipeline manual — interactive developer tool, not suited for automated pipelines
 *
 * @usage
 *   node tools/scripts/codex-commit.js --message "Update hooks"
 *
 * @inputs
 *   --message <text> Required commit message subject
 *   --no-verify Optional no-verify commit path (human override required)
 *   --human-override <true|false> Required true when --no-verify is used
 *   --override-note <text> Required when --no-verify is used
 *   --trailer <key=value> Optional extra trailer; repeatable
 *
 * @outputs
 *   - Executes git commit with validated override semantics
 *
 * @exit-codes
 *   0 = commit succeeded
 *   1 = validation failure or git commit failure
 *
 * @examples
 *   node tools/scripts/codex-commit.js --message "Refine docs nav checks"
 *   ALLOW_HUMAN_NO_VERIFY=1 node tools/scripts/codex-commit.js --message "Emergency fix" --no-verify --human-override true --override-note "explicit user instruction in chat"
 *
 * @notes
 *   Override path enforces trailer + env token so no-verify usage remains auditable.
 */

const { spawnSync } = require('child_process')

function parseArgs(argv) {
  const args = {
    message: '',
    noVerify: false,
    humanOverride: '',
    overrideNote: '',
    trailers: [],
  }

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i]
    if (token === '--message') {
      args.message = String(argv[i + 1] || '').trim()
      i += 1
      continue
    }
    if (token.startsWith('--message=')) {
      args.message = token.slice('--message='.length).trim()
      continue
    }
    if (token === '--no-verify') {
      args.noVerify = true
      continue
    }
    if (token === '--human-override') {
      args.humanOverride = String(argv[i + 1] || '')
        .trim()
        .toLowerCase()
      i += 1
      continue
    }
    if (token.startsWith('--human-override=')) {
      args.humanOverride = token
        .slice('--human-override='.length)
        .trim()
        .toLowerCase()
      continue
    }
    if (token === '--override-note') {
      args.overrideNote = String(argv[i + 1] || '').trim()
      i += 1
      continue
    }
    if (token.startsWith('--override-note=')) {
      args.overrideNote = token.slice('--override-note='.length).trim()
      continue
    }
    if (token === '--trailer') {
      args.trailers.push(String(argv[i + 1] || '').trim())
      i += 1
      continue
    }
    if (token.startsWith('--trailer=')) {
      args.trailers.push(token.slice('--trailer='.length).trim())
      continue
    }
    if (token === '--help' || token === '-h') {
      args.help = true
      continue
    }

    throw new Error(`Unknown argument: ${token}`)
  }

  return args
}

function usage() {
  console.log(
    'Usage: node tools/scripts/codex-commit.js --message <text> [--no-verify --human-override true --override-note <text>] [--trailer <k=v>]'
  )
}

function validateArgs(args) {
  if (!args.message) {
    throw new Error('--message is required')
  }

  if (!args.noVerify) {
    return
  }

  if (args.humanOverride !== 'true') {
    throw new Error('--human-override true is required when using --no-verify')
  }

  if (!args.overrideNote) {
    throw new Error('--override-note is required when using --no-verify')
  }

  if (String(process.env.ALLOW_HUMAN_NO_VERIFY || '').trim() !== '1') {
    throw new Error(
      'ALLOW_HUMAN_NO_VERIFY=1 is required for --no-verify override path'
    )
  }
}

function runCommit(args) {
  const gitArgs = ['commit', '-m', args.message]

  if (args.noVerify) {
    gitArgs.push('--no-verify')
    gitArgs.push('--trailer', 'human-override=no-verify')
    gitArgs.push('--trailer', `override-note=${args.overrideNote}`)
  }

  args.trailers.forEach((trailer) => {
    if (!trailer) return
    gitArgs.push('--trailer', trailer)
  })

  const result = spawnSync('git', gitArgs, { stdio: 'inherit' })
  return result.status === 0
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    usage()
    process.exit(0)
  }

  validateArgs(args)
  const ok = runCommit(args)
  if (!ok) {
    process.exit(1)
  }

  if (args.noVerify) {
    console.log('✅ Commit created with audited human no-verify override')
  } else {
    console.log('✅ Commit created')
  }
}

if (require.main === module) {
  try {
    main()
  } catch (error) {
    console.error(`❌ ${error.message}`)
    process.exit(1)
  }
}
