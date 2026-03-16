#!/usr/bin/env node
/**
 * @script            codex-commit
 * @category          generator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, .githooks, ai-tools/ai-rules
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Codex commit helper — audits codex branch state and generates compliant commit messages
 * @pipeline          manual — not yet in pipeline
 * @dualmode          dual-mode (document flags)
 * @usage             node tools/scripts/codex-commit.js [flags]
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
