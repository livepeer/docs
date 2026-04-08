/**
 * @script      incidents
 * @type        integrator
 * @concern     integrations
 * @niche       data
 * @purpose     content:contract-data
 * @description Contract data pipeline module: incidents
 * @mode        integrate
 * @pipeline    manual -> contract data sources -> contract data files
 * @scope       operations/scripts/integrators/content/data/contracts/
 * @usage       Internal module — imported by fetch-contract-addresses.js
 */
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const {
  ANOMALY_JSON_PATH,
  ANOMALY_MD_PATH,
  ISSUE_PAYLOAD_PATH,
} = require("./constants");

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(",")}]`;
  }
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function computeIncidentFingerprint(incident) {
  const payload = {
    failureClass: incident.failureClass || "unknown",
    chain: incident.chain || null,
    contract: incident.contract || null,
    endpoint: incident.endpoint || null,
    detail: incident.detail || null,
  };
  return crypto.createHash("sha256").update(stableStringify(payload)).digest("hex").slice(0, 12);
}

function buildIssuePayload(incidents = []) {
  const fingerprints = incidents.map((incident) => computeIncidentFingerprint(incident));
  const primary = incidents[0] || { failureClass: "contracts-pipeline" };
  const fingerprint = fingerprints[0] || computeIncidentFingerprint(primary);
  const title = `contracts pipeline incident: ${primary.failureClass} [${fingerprint}]`;
  const labels = ["contracts", "pipeline", "verification", primary.failureClass || "unknown"];

  const bodyLines = [
    `Incident fingerprint: \`${fingerprint}\``,
    "",
    "Blocking contracts pipeline incident.",
    "",
    "Incidents:",
    ...incidents.map((incident) => `- ${incident.failureClass || "unknown"} | ${incident.endpoint || "unknown"} | ${incident.contract || "n/a"} | ${incident.detail || "n/a"}`),
  ];

  return {
    title,
    labels,
    fingerprint,
    body: bodyLines.join("\n"),
    incidents,
  };
}

function writeIncidentArtifacts({
  incidents = [],
  summary = {},
  dryRun = false,
}) {
  const issuePayload = buildIssuePayload(incidents);
  const report = {
    generatedAt: new Date().toISOString(),
    summary,
    incidents: incidents.map((incident) => ({
      ...incident,
      fingerprint: computeIncidentFingerprint(incident),
    })),
    issue: issuePayload,
  };
  const markdown = [
    "# Contracts Pipeline Incident Report",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Summary",
    "",
    `- Failure count: ${report.incidents.length}`,
    `- Verification model: ${summary.verificationModel || "contracts-proof-v2"}`,
    "",
    "## Incidents",
    "",
    ...report.incidents.map((incident) => `- [${incident.failureClass}] ${incident.endpoint}: ${incident.contract || "n/a"} -> ${incident.detail}`),
  ].join("\n");

  if (!dryRun) {
    [ANOMALY_JSON_PATH, ANOMALY_MD_PATH, ISSUE_PAYLOAD_PATH].forEach((filePath) => {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    });
    fs.writeFileSync(ANOMALY_JSON_PATH, JSON.stringify(report, null, 2));
    fs.writeFileSync(ANOMALY_MD_PATH, `${markdown}\n`);
    fs.writeFileSync(ISSUE_PAYLOAD_PATH, JSON.stringify(issuePayload, null, 2));
  }

  return { report, markdown, issuePayload };
}

module.exports = {
  buildIssuePayload,
  computeIncidentFingerprint,
  stableStringify,
  writeIncidentArtifacts,
};
