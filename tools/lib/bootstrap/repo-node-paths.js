'use strict';
/**
 * @script            repo-node-paths
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/lib/bootstrap, operations/tests
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Shared repo Node path bootstrap helpers — discover repo-local node_modules roots and provide consistent NODE_PATH setup for test and script runners.
 * @pipeline          indirect
 * @usage             const { bootstrapRepoNodePaths, createNodeProcessEnv } = require('../../tools/lib/bootstrap/repo-node-paths');
 */

const fs = require('fs');
const path = require('path');
const Module = require('module');
const { pathToFileURL } = require('url');

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function findRepoRoot(startDir = __dirname) {
  let current = path.resolve(startDir);

  while (current && current !== path.dirname(current)) {
    if (fs.existsSync(path.join(current, 'docs.json')) && fs.existsSync(path.join(current, 'tools'))) {
      return current;
    }
    current = path.dirname(current);
  }

  return process.cwd();
}

function getRepoNodeModuleDirs(startDir = __dirname) {
  const repoRoot = findRepoRoot(startDir);
  const nodeModuleDirs = [
    path.join(repoRoot, 'operations/tests/node_modules'),
    path.join(repoRoot, 'tools/node_modules'),
    path.join(repoRoot, 'node_modules')
  ].filter((dirPath) => fs.existsSync(dirPath));

  return { repoRoot, nodeModuleDirs };
}

function buildNodePathValue(startDir = __dirname, existingNodePath = process.env.NODE_PATH || '') {
  const { nodeModuleDirs } = getRepoNodeModuleDirs(startDir);
  const existingDirs = String(existingNodePath)
    .split(path.delimiter)
    .map((value) => value.trim())
    .filter(Boolean);

  return unique([...nodeModuleDirs, ...existingDirs]).join(path.delimiter);
}

function bootstrapRepoNodePaths(startDir = __dirname) {
  const nodePathValue = buildNodePathValue(startDir);
  if (!nodePathValue) {
    return getRepoNodeModuleDirs(startDir);
  }

  process.env.NODE_PATH = nodePathValue;
  if (typeof Module._initPaths === 'function') {
    Module._initPaths();
  }

  const nodeModuleDirs = nodePathValue.split(path.delimiter).filter(Boolean);
  for (let index = nodeModuleDirs.length - 1; index >= 0; index -= 1) {
    const dirPath = nodeModuleDirs[index];
    if (!Module.globalPaths.includes(dirPath)) {
      Module.globalPaths.unshift(dirPath);
    }
  }

  return {
    ...getRepoNodeModuleDirs(startDir),
    nodeModuleDirs
  };
}

function createNodeProcessEnv(extraEnv = {}, startDir = __dirname) {
  const nodePathValue = buildNodePathValue(startDir);
  return {
    ...process.env,
    ...(nodePathValue ? { NODE_PATH: nodePathValue } : {}),
    ...extraEnv
  };
}

function resolveRepoDependency(specifier, startDir = __dirname) {
  const { repoRoot, nodeModuleDirs } = getRepoNodeModuleDirs(startDir);
  const resolutionRoots = unique([repoRoot, ...nodeModuleDirs.map((dirPath) => path.dirname(dirPath))]);
  return require.resolve(specifier, { paths: resolutionRoots });
}

async function importRepoDependency(specifier, startDir = __dirname) {
  const resolvedPath = resolveRepoDependency(specifier, startDir);
  return import(pathToFileURL(resolvedPath).href);
}

module.exports = {
  bootstrapRepoNodePaths,
  buildNodePathValue,
  createNodeProcessEnv,
  findRepoRoot,
  getRepoNodeModuleDirs,
  importRepoDependency,
  resolveRepoDependency
};
