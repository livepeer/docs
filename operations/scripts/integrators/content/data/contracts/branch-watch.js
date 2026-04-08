/**
 * @script      branch-watch
 * @type        integrator
 * @concern     integrations
 * @niche       data
 * @purpose     content:contract-data
 * @description Contract data pipeline module: branch-watch
 * @mode        integrate
 * @pipeline    manual -> contract data sources -> contract data files
 * @scope       operations/scripts/integrators/content/data/contracts/
 * @usage       Internal module — imported by fetch-contract-addresses.js
 */
const fs = require("node:fs");
const path = require("node:path");

const { BRANCH_WATCH_STATE_PATH } = require("./constants");

function loadBranchWatchState() {
  try {
    if (!fs.existsSync(BRANCH_WATCH_STATE_PATH)) return null;
    return JSON.parse(fs.readFileSync(BRANCH_WATCH_STATE_PATH, "utf8"));
  } catch (_error) {
    return null;
  }
}

function diffBranchWatchState(previousState = null, nextState = null) {
  const previousRepos = new Map((previousState?.repos || []).map((repo) => [repo.repo, repo]));
  const diffs = [];

  for (const repoState of nextState?.repos || []) {
    const previous = previousRepos.get(repoState.repo);
    if (!previous) {
      diffs.push({
        type: "new-repo-watch",
        repo: repoState.repo,
        detail: "Repository entered branch watch inventory",
      });
      continue;
    }

    if (previous.defaultBranch !== repoState.defaultBranch) {
      diffs.push({
        type: "default-branch-change",
        repo: repoState.repo,
        detail: `${previous.defaultBranch || "unknown"} -> ${repoState.defaultBranch || "unknown"}`,
      });
    }

    const previousBranches = new Set(previous.branches || []);
    const nextBranches = new Set(repoState.branches || []);

    for (const branch of repoState.branches || []) {
      if (!previousBranches.has(branch)) {
        diffs.push({
          type: "new-branch",
          repo: repoState.repo,
          branch,
          detail: `Branch ${branch} was not present in the previous successful run`,
        });
      }
    }

    for (const branch of previous.branches || []) {
      if (!nextBranches.has(branch)) {
        diffs.push({
          type: "missing-branch",
          repo: repoState.repo,
          branch,
          detail: `Branch ${branch} disappeared from the watched repo inventory`,
        });
      }
    }
  }

  return diffs;
}

function writeBranchWatchState(state, dryRun = false) {
  if (dryRun) return;
  fs.mkdirSync(path.dirname(BRANCH_WATCH_STATE_PATH), { recursive: true });
  fs.writeFileSync(BRANCH_WATCH_STATE_PATH, JSON.stringify(state, null, 2));
}

module.exports = {
  diffBranchWatchState,
  loadBranchWatchState,
  writeBranchWatchState,
};
