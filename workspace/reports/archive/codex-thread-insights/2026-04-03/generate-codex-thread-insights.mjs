#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const home = os.homedir();
const codexHome = process.env.CODEX_HOME || path.join(home, ".codex");
const sessionsDir = path.join(codexHome, "sessions");
const sessionIndexPath = path.join(codexHome, "session_index.jsonl");
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const usageDir = path.join(scriptDir, "output");
const sessionMetaDir = path.join(usageDir, "session-meta");
const facetsDir = path.join(usageDir, "facets");
const reportPath = path.join(usageDir, "report.html");

const threadNames = loadSessionIndex(sessionIndexPath);
const sessionFiles = listSessionFiles(sessionsDir);

const sessions = [];
for (const filePath of sessionFiles) {
  const session = analyzeSession(filePath, threadNames);
  if (session) {
    sessions.push(session);
  }
}

sessions.sort((left, right) => left.startMs - right.startMs);

ensureDir(usageDir);
ensureDir(sessionMetaDir);
ensureDir(facetsDir);

for (const session of sessions) {
  writeJson(path.join(sessionMetaDir, `${session.sessionId}.json`), buildSessionMeta(session));
  writeJson(path.join(facetsDir, `${session.sessionId}.json`), buildFacets(session));
}

const aggregate = buildAggregate(sessions);
fs.writeFileSync(reportPath, renderReport(aggregate), "utf8");

process.stdout.write(`${reportPath}\n`);

function analyzeSession(filePath, threadNameIndex = new Map()) {
  const entries = readJsonl(filePath);
  if (entries.length === 0) {
    return null;
  }

  const sessionMeta = entries.find((entry) => entry.type === "session_meta")?.payload;
  if (!sessionMeta?.id) {
    return null;
  }

  const timestamps = entries
    .map((entry) => parseTimestamp(entry.timestamp))
    .filter((value) => Number.isFinite(value));
  const startMs = parseTimestamp(sessionMeta.timestamp) || timestamps[0] || 0;
  const endMs = timestamps[timestamps.length - 1] || startMs;

  const userEvents = entries.filter(
    (entry) => entry.type === "event_msg" && entry.payload?.type === "user_message",
  );
  const userMessages = userEvents.map((entry) => sanitizePrompt(entry.payload?.message || "")).filter(Boolean);
  const userMessageTimestamps = userEvents
    .map((entry) => parseTimestamp(entry.timestamp))
    .filter((value) => Number.isFinite(value));

  const assistantMessages = collectAssistantMessages(entries);
  const tokenSnapshots = entries
    .filter((entry) => entry.type === "event_msg" && entry.payload?.type === "token_count")
    .map((entry) => entry.payload?.info?.total_token_usage)
    .filter(Boolean);
  const totalTokens = tokenSnapshots[tokenSnapshots.length - 1] || {};

  const toolCounts = new Map();
  let toolErrors = 0;
  const toolErrorCategories = new Map();
  let webSearchCalls = 0;
  let customToolCalls = 0;
  let compactionCount = 0;
  let turnAborts = 0;
  let transcriptLineCount = entries.length;

  for (const entry of entries) {
    if (entry.type === "response_item" && entry.payload?.type === "function_call") {
      const toolName = String(entry.payload.name || "unknown");
      increment(toolCounts, toolName);
    }

    if (entry.type === "response_item" && entry.payload?.type === "custom_tool_call") {
      customToolCalls += 1;
      increment(toolCounts, String(entry.payload.name || "custom_tool"));
    }

    if (entry.type === "response_item" && entry.payload?.type === "web_search_call") {
      webSearchCalls += 1;
      increment(toolCounts, "web_search_call");
    }

    if (entry.type === "response_item" && entry.payload?.type === "function_call_output") {
      const output = String(entry.payload.output || "");
      const exitMatch = output.match(/(?:Exit code|Process exited with code):\s*(\d+)/i);
      if (exitMatch && Number.parseInt(exitMatch[1], 10) > 0) {
        toolErrors += 1;
        increment(toolErrorCategories, classifyToolError(output));
      }
    }

    if (entry.type === "event_msg" && entry.payload?.type === "context_compacted") {
      compactionCount += 1;
    }

    if (entry.type === "compacted") {
      compactionCount += 1;
    }

    if (entry.type === "event_msg" && entry.payload?.type === "turn_aborted") {
      turnAborts += 1;
    }
  }

  const indexedThreadName = threadNameIndex.get(String(sessionMeta.id)) || "";
  const title = indexedThreadName || inferThreadTitle(userMessages[0] || "", sessionMeta.cwd || "");
  const firstPrompt = userMessages[0] || title;
  const threadStress = classifyThreadStress({
    compactionCount,
    toolErrors,
    frustrationCount: countFrustration(userMessages),
    title,
    cwd: sessionMeta.cwd || "",
  });

  return {
    sessionId: sessionMeta.id,
    title,
    filePath,
    cwd: String(sessionMeta.cwd || ""),
    logicalWorkspace: normalizeLogicalWorkspace(String(sessionMeta.cwd || "")),
    workspaceVariantKey: normalizeVariantKey(String(sessionMeta.cwd || "")),
    startMs,
    endMs,
    startTime: toIso(startMs),
    endTime: toIso(endMs),
    durationMinutes: Math.max(1, Math.round((endMs - startMs) / 60000)),
    userMessageCount: userMessages.length,
    assistantMessageCount: assistantMessages.length,
    firstPrompt,
    lastAssistantMessage: assistantMessages[assistantMessages.length - 1] || "",
    userMessages,
    assistantMessages,
    userResponseTimes: diffSeconds(userMessageTimestamps),
    toolCounts: Object.fromEntries([...toolCounts.entries()].sort((a, b) => b[1] - a[1])),
    toolErrors,
    toolErrorCategories: Object.fromEntries([...toolErrorCategories.entries()].sort((a, b) => b[1] - a[1])),
    compactionCount,
    turnAborts,
    frustrationCount: countFrustration(userMessages),
    usesWebSearch: webSearchCalls > 0,
    webSearchCalls,
    customToolCalls,
    inputTokens: Number(totalTokens.input_tokens || 0),
    cachedInputTokens: Number(totalTokens.cached_input_tokens || 0),
    outputTokens: Number(totalTokens.output_tokens || 0),
    reasoningTokens: Number(totalTokens.reasoning_output_tokens || 0),
    totalTokens: Number(totalTokens.total_tokens || 0),
    transcriptLineCount,
    originator: stringifyMetaValue(sessionMeta.originator),
    source: stringifyMetaValue(sessionMeta.source),
    cliVersion: stringifyMetaValue(sessionMeta.cli_version),
    goalCategory: classifyGoal(title, firstPrompt),
    sessionType: classifySessionType(title, firstPrompt, userMessages.length, assistantMessages.length, toolCounts),
    outcome: classifyOutcome({ assistantMessages, frustrationCount: countFrustration(userMessages), toolErrors }),
    satisfaction: classifySatisfaction({
      frustrationCount: countFrustration(userMessages),
      assistantMessages,
      toolErrors,
      lastAssistantMessage: assistantMessages[assistantMessages.length - 1] || "",
    }),
    threadStress,
  };
}

function loadSessionIndex(filePath) {
  const map = new Map();
  if (!fs.existsSync(filePath)) {
    return map;
  }

  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    if (!line.trim()) {
      continue;
    }
    try {
      const entry = JSON.parse(line);
      if (entry.id) {
        map.set(String(entry.id), String(entry.thread_name || ""));
      }
    } catch {
      // Ignore malformed history rows.
    }
  }
  return map;
}

function listSessionFiles(directoryPath) {
  const files = [];
  walk(directoryPath, (filePath) => {
    if (filePath.endsWith(".jsonl")) {
      files.push(filePath);
    }
  });
  return files.sort();
}

function walk(directoryPath, onFile) {
  if (!fs.existsSync(directoryPath)) {
    return;
  }

  for (const entry of fs.readdirSync(directoryPath, { withFileTypes: true })) {
    const fullPath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, onFile);
    } else {
      onFile(fullPath);
    }
  }
}

function readJsonl(filePath) {
  const rows = [];
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    if (!line.trim()) {
      continue;
    }
    try {
      rows.push(JSON.parse(line));
    } catch {
      // Ignore malformed/incomplete trailing rows.
    }
  }
  return rows;
}

function collectAssistantMessages(entries) {
  const messages = [];

  for (const entry of entries) {
    if (entry.type === "response_item" && entry.payload?.type === "message" && entry.payload?.role === "assistant") {
      for (const part of entry.payload.content || []) {
        if (part.type === "output_text" && typeof part.text === "string") {
          const text = sanitizePrompt(part.text);
          if (text) {
            messages.push(text);
          }
        }
      }
    }
  }

  if (messages.length > 0) {
    return dedupeAdjacent(messages);
  }

  for (const entry of entries) {
    if (entry.type === "event_msg" && entry.payload?.type === "agent_message") {
      const text = sanitizePrompt(entry.payload.message || "");
      if (text) {
        messages.push(text);
      }
    }
  }

  return dedupeAdjacent(messages);
}

function dedupeAdjacent(items) {
  const deduped = [];
  for (const item of items) {
    if (deduped[deduped.length - 1] !== item) {
      deduped.push(item);
    }
  }
  return deduped;
}

function classifyToolError(output) {
  if (/approval|permission|sandbox/i.test(output)) {
    return "approval_or_sandbox";
  }
  if (/not found|ENOENT|No such file/i.test(output)) {
    return "missing_file_or_command";
  }
  if (/timeout|timed out/i.test(output)) {
    return "timeout";
  }
  return "command_failed";
}

function classifyGoal(title, prompt) {
  const text = buildSignalText(title, prompt);
  if (/\breview\b/.test(text)) {
    return "Review";
  }
  if (/\b(debug|diagnose|investigate|failure|error|fix|broken|regression)\b/.test(text)) {
    return "Debug / Fix";
  }
  if (/\b(thread|memory|hook|agent|codex|resume|fork|session|assistant\.md|agents\.md)\b/.test(text)) {
    return "Thread / Infra";
  }
  if (/\b(validate|verify|check|test|lint|probe)\b/.test(text)) {
    return "Validation";
  }
  if (/\b(plan|design|research|audit|explore|index|matrix|inventory|map|catalog)\b/.test(text)) {
    return "Planning / Research";
  }
  if (/\b(implement|build|create|add|update|refactor|extract|migrate|move|replace|write|generate|clone|install|convert|sync|scaffold)\b/.test(text)) {
    return "Implementation";
  }
  return "Implementation";
}

function classifySessionType(title, prompt, userCount, assistantCount, toolCounts) {
  const text = buildSignalText(title, prompt);
  const totalTools = [...toolCounts.values()].reduce((sum, value) => sum + value, 0);

  if (/\breview\b/.test(text)) {
    return "Review";
  }
  if (/\b(thread|memory|hook|session|resume|fork|assistant\.md|agents\.md)\b/.test(text)) {
    return "Thread Infrastructure";
  }
  if (/\b(plan|design|research|audit|explore|index|matrix|inventory|map|catalog)\b/.test(text)) {
    return "Exploration";
  }
  if (userCount > 2 || assistantCount > 12 || totalTools > 25) {
    return "Iterative Refinement";
  }
  return "Single Task";
}

function buildSignalText(title, prompt) {
  const safeTitle = String(title || "").trim();
  const safePrompt = String(prompt || "").trim();
  if (safeTitle && !isLowSignalTitle(safeTitle)) {
    return safeTitle.toLowerCase();
  }
  return `${safeTitle} ${safePrompt}`.toLowerCase();
}

function classifyOutcome({ assistantMessages, frustrationCount, toolErrors }) {
  const lastMessage = (assistantMessages[assistantMessages.length - 1] || "").toLowerCase();
  if (/could not|wasn't able|unable to|blocked/.test(lastMessage)) {
    return "not_achieved";
  }
  if (/implemented|fixed|updated|created|generated|done|validated/.test(lastMessage) && frustrationCount === 0) {
    return "mostly_achieved";
  }
  if (toolErrors > 0 || frustrationCount > 0) {
    return "partially_achieved";
  }
  return "unclear_from_transcript";
}

function classifySatisfaction({ frustrationCount, assistantMessages, toolErrors, lastAssistantMessage }) {
  if (frustrationCount > 0) {
    return "frustrated";
  }
  if (toolErrors > 2) {
    return "dissatisfied";
  }
  if (/validated|implemented|generated|fixed|updated/.test(lastAssistantMessage.toLowerCase())) {
    return "likely_satisfied";
  }
  if (assistantMessages.length > 0) {
    return "neutral";
  }
  return "unclear";
}

function classifyThreadStress({ compactionCount, toolErrors, frustrationCount, title, cwd }) {
  const signals = [];
  if (compactionCount > 0) {
    signals.push("compacted");
  }
  if (toolErrors > 0) {
    signals.push("tool_errors");
  }
  if (frustrationCount > 0) {
    signals.push("frustration");
  }
  if (isLowSignalTitle(title)) {
    signals.push("low_signal_title");
  }
  if (isVariantWorkspace(cwd)) {
    signals.push("workspace_variant");
  }
  return signals;
}

function buildSessionMeta(session) {
  return {
    session_id: session.sessionId,
    thread_name: session.title,
    project_path: session.cwd,
    logical_workspace: session.logicalWorkspace,
    workspace_variant_key: session.workspaceVariantKey,
    start_time: session.startTime,
    end_time: session.endTime,
    duration_minutes: session.durationMinutes,
    user_message_count: session.userMessageCount,
    assistant_message_count: session.assistantMessageCount,
    tool_counts: session.toolCounts,
    input_tokens: session.inputTokens,
    cached_input_tokens: session.cachedInputTokens,
    output_tokens: session.outputTokens,
    reasoning_tokens: session.reasoningTokens,
    total_tokens: session.totalTokens,
    first_prompt: truncate(session.firstPrompt, 280),
    user_response_times: session.userResponseTimes,
    tool_errors: session.toolErrors,
    tool_error_categories: session.toolErrorCategories,
    uses_web_search: session.usesWebSearch,
    web_search_calls: session.webSearchCalls,
    custom_tool_calls: session.customToolCalls,
    context_compactions: session.compactionCount,
    turn_aborts: session.turnAborts,
    transcript_lines: session.transcriptLineCount,
    originator: session.originator,
    source: session.source,
    cli_version: session.cliVersion,
    goal_category: session.goalCategory,
    session_type: session.sessionType,
    frustration_count: session.frustrationCount,
    thread_stress: session.threadStress,
    transcript_path: session.filePath,
  };
}

function buildFacets(session) {
  return {
    underlying_goal: truncate(session.firstPrompt || session.title, 240),
    goal_categories: { [slugify(session.goalCategory)]: 1 },
    outcome: session.outcome,
    user_satisfaction_counts: { [session.satisfaction]: 1 },
    codex_helpfulness: mapHelpfulness(session),
    session_type: slugify(session.sessionType),
    friction_counts: buildSessionFriction(session),
    friction_detail: describeSessionFriction(session),
    primary_success: mapPrimarySuccess(session),
    brief_summary: truncate(buildBriefSummary(session), 280),
    session_id: session.sessionId,
  };
}

function mapHelpfulness(session) {
  if (session.satisfaction === "frustrated") {
    return "frustrating";
  }
  if (session.outcome === "mostly_achieved") {
    return "helpful";
  }
  if (session.outcome === "partially_achieved") {
    return "slightly_helpful";
  }
  return "unclear";
}

function buildSessionFriction(session) {
  const friction = {};
  for (const signal of session.threadStress) {
    friction[signal] = 1;
  }
  if (Object.keys(friction).length === 0) {
    friction.none = 1;
  }
  return friction;
}

function describeSessionFriction(session) {
  if (session.threadStress.length === 0) {
    return "";
  }
  return session.threadStress
    .map((signal) =>
      ({
        compacted: "Session hit context compaction, which means some earlier history was summarized away.",
        tool_errors: "Tool calls failed during the session, increasing transcript noise and retry churn.",
        frustration: "User messages contained explicit frustration, which usually points to trust or convergence issues.",
        low_signal_title: "Thread title is generic, making history retrieval weaker than it should be.",
        workspace_variant: "Session ran from a workspace-path variant, which increases thread fragmentation risk.",
      })[signal] || signal,
    )
    .join(" ");
}

function mapPrimarySuccess(session) {
  if (session.outcome === "mostly_achieved") {
    return "task_progress";
  }
  if (session.goalCategory === "Debug / Fix") {
    return "debugging";
  }
  if (session.goalCategory === "Planning / Research") {
    return "exploration";
  }
  return "none";
}

function buildBriefSummary(session) {
  const lead = session.title || session.firstPrompt;
  const tail = session.lastAssistantMessage || session.firstPrompt;
  return `${lead}. ${tail}`.trim();
}

function buildAggregate(sessions) {
  const totalSessions = sessions.length;
  const totalMessages = sessions.reduce(
    (sum, session) => sum + session.userMessageCount + session.assistantMessageCount,
    0,
  );
  const totalCompactions = sessions.reduce((sum, session) => sum + session.compactionCount, 0);
  const totalToolCalls = sessions.reduce(
    (sum, session) => sum + Object.values(session.toolCounts).reduce((inner, value) => inner + value, 0),
    0,
  );
  const totalToolErrors = sessions.reduce((sum, session) => sum + session.toolErrors, 0);
  const totalTranscriptLines = sessions.reduce((sum, session) => sum + session.transcriptLineCount, 0);
  const totalTokens = sessions.reduce((sum, session) => sum + session.totalTokens, 0);
  const firstStart = sessions[0]?.startMs || Date.now();
  const lastEnd = sessions[sessions.length - 1]?.endMs || firstStart;
  const totalDays = Math.max(1, Math.ceil((lastEnd - firstStart) / 86400000) + 1);
  const messagesPerDay = totalMessages / totalDays;

  const goalCounts = countBy(sessions, (session) => session.goalCategory);
  const toolCounts = sumNestedCounts(sessions.map((session) => session.toolCounts));
  const sessionTypeCounts = countBy(sessions, (session) => session.sessionType);
  const satisfactionCounts = countBy(sessions, (session) => session.satisfaction);
  const outcomeCounts = countBy(sessions, (session) => session.outcome);
  const originatorCounts = countBy(sessions, (session) => session.originator);
  const cliVersionCounts = countBy(sessions, (session) => session.cliVersion);
  const workspaceCounts = countBy(sessions, (session) => session.logicalWorkspace);
  const variantGroups = groupBy(sessions, (session) => session.logicalWorkspace);
  const compactedSessions = sessions.filter((session) => session.compactionCount > 0).length;
  const toolErrorSessions = sessions.filter((session) => session.toolErrors > 0).length;
  const frustrationSessions = sessions.filter((session) => session.frustrationCount > 0).length;
  const lowSignalTitleSessions = sessions.filter((session) => isLowSignalTitle(session.title)).length;
  const variantRiskSessions = sessions.filter((session) => isVariantWorkspace(session.cwd)).length;
  const stressedSessions = sessions.filter((session) => session.threadStress.length > 0).length;
  const overlap = computeOverlap(sessions);
  const responseTimes = sessions.flatMap((session) => session.userResponseTimes);
  const hourCounts = countHours(sessions);
  const errorCategoryCounts = sumNestedCounts(sessions.map((session) => session.toolErrorCategories));

  const topWorkspaceVariants = [...variantGroups.entries()]
    .map(([workspace, group]) => ({
      workspace,
      count: group.length,
      variants: new Set(group.map((session) => session.cwd)).size,
    }))
    .sort((left, right) => right.count - left.count);

  return {
    sessions,
    totalSessions,
    totalMessages,
    totalCompactions,
    totalToolCalls,
    totalToolErrors,
    totalTranscriptLines,
    totalTokens,
    firstStart,
    lastEnd,
    totalDays,
    messagesPerDay,
    goalCounts,
    toolCounts,
    sessionTypeCounts,
    satisfactionCounts,
    outcomeCounts,
    originatorCounts,
    cliVersionCounts,
    workspaceCounts,
    topWorkspaceVariants,
    compactedSessions,
    toolErrorSessions,
    frustrationSessions,
    lowSignalTitleSessions,
    variantRiskSessions,
    stressedSessions,
    overlap,
    responseTimes,
    hourCounts,
    errorCategoryCounts,
    versionSpread: Object.keys(cliVersionCounts).length,
  };
}

function renderReport(aggregate) {
  const subtitle = `${formatNumber(aggregate.totalMessages)} messages across ${formatNumber(
    aggregate.totalSessions,
  )} sessions | ${formatDate(aggregate.firstStart)} to ${formatDate(aggregate.lastEnd)}`;

  const primaryWorkspace = aggregate.topWorkspaceVariants[0];
  const topGoal = topEntries(aggregate.goalCounts, 1)[0];
  const topVersion = topEntries(aggregate.cliVersionCounts, 1)[0];

  const workAreas = renderWorkAreas(aggregate);
  const goalChart = renderBarRows(topEntries(aggregate.goalCounts, 6), "#2563eb");
  const toolChart = renderBarRows(topEntries(aggregate.toolCounts, 6), "#0891b2");
  const workspaceChart = renderVariantRows(aggregate.topWorkspaceVariants.slice(0, 6), "#10b981");
  const sessionTypeChart = renderBarRows(topEntries(aggregate.sessionTypeCounts, 5), "#8b5cf6");
  const satisfactionChart = renderBarRows(
    topEntries(labelCounts(aggregate.satisfactionCounts), 5),
    "#eab308",
  );
  const outcomeChart = renderBarRows(topEntries(labelCounts(aggregate.outcomeCounts), 5), "#8b5cf6");
  const versionChart = renderBarRows(topEntries(aggregate.cliVersionCounts, 6), "#7c3aed");
  const originatorChart = renderBarRows(topEntries(aggregate.originatorCounts, 6), "#16a34a");
  const errorChart = renderBarRows(topEntries(labelCounts(aggregate.errorCategoryCounts), 4), "#dc2626");
  const threadStressChart = renderBarRows(
    [
      ["Sessions with compaction", aggregate.compactedSessions],
      ["Sessions with tool errors", aggregate.toolErrorSessions],
      ["Frustrated sessions", aggregate.frustrationSessions],
      ["Workspace variants", aggregate.variantRiskSessions],
    ],
    "#dc2626",
  );
  const responseChart = renderResponseTimeRows(bucketResponseTimes(aggregate.responseTimes), "#6366f1");
  const timeOfDayChart = renderTimeOfDayRows(aggregate.hourCounts, "#8b5cf6");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Codex Thread Failure Report</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #f8fafc; color: #334155; line-height: 1.65; padding: 48px 24px; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
    h2 { font-size: 20px; font-weight: 600; color: #0f172a; margin-top: 48px; margin-bottom: 16px; }
    .subtitle { color: #64748b; font-size: 15px; margin-bottom: 32px; }
    .nav-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0 32px 0; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; }
    .nav-toc a { font-size: 12px; color: #64748b; text-decoration: none; padding: 6px 12px; border-radius: 6px; background: #f1f5f9; transition: all 0.15s; }
    .nav-toc a:hover { background: #e2e8f0; color: #334155; }
    .stats-row { display: flex; gap: 24px; margin-bottom: 40px; padding: 20px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap; }
    .stat { text-align: center; }
    .stat-value { font-size: 24px; font-weight: 700; color: #0f172a; }
    .stat-label { font-size: 11px; color: #64748b; text-transform: uppercase; }
    .at-a-glance { background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); border: 1px solid #ef4444; border-radius: 12px; padding: 20px 24px; margin-bottom: 32px; }
    .glance-title { font-size: 16px; font-weight: 700; color: #991b1b; margin-bottom: 16px; }
    .glance-sections { display: flex; flex-direction: column; gap: 12px; }
    .glance-section { font-size: 14px; color: #7f1d1d; line-height: 1.6; }
    .glance-section strong { color: #991b1b; }
    .see-more { color: #b91c1c; text-decoration: none; font-size: 13px; white-space: nowrap; }
    .see-more:hover { text-decoration: underline; }
    .project-areas { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
    .project-area { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .area-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .area-name { font-weight: 600; font-size: 15px; color: #0f172a; }
    .area-count { font-size: 12px; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; }
    .area-desc { font-size: 14px; color: #475569; line-height: 1.5; }
    .narrative { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .narrative p { margin-bottom: 12px; font-size: 14px; color: #475569; line-height: 1.7; }
    .key-insight { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px 16px; margin-top: 12px; font-size: 14px; color: #1d4ed8; }
    .section-intro { font-size: 14px; color: #64748b; margin-bottom: 16px; }
    .big-wins, .features-section, .patterns-section, .horizon-section, .friction-categories { display: flex; flex-direction: column; gap: 12px; }
    .big-win { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; }
    .big-win-title { font-weight: 600; font-size: 15px; color: #166534; margin-bottom: 8px; }
    .big-win-desc { font-size: 14px; color: #15803d; line-height: 1.5; }
    .friction-category { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 16px; }
    .friction-title { font-weight: 600; font-size: 15px; color: #991b1b; margin-bottom: 6px; }
    .friction-desc { font-size: 13px; color: #7f1d1d; margin-bottom: 10px; }
    .friction-examples { margin: 0 0 0 20px; font-size: 13px; color: #334155; }
    .friction-examples li { margin-bottom: 4px; }
    .claude-md-section { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
    .claude-md-section h3 { font-size: 14px; font-weight: 600; color: #1e40af; margin: 0 0 12px 0; }
    .claude-md-actions { margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #dbeafe; }
    .copy-all-btn { background: #2563eb; color: white; border: none; border-radius: 4px; padding: 6px 12px; font-size: 12px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
    .copy-all-btn:hover { background: #1d4ed8; }
    .copy-all-btn.copied { background: #16a34a; }
    .claude-md-item { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px; padding: 10px 0; border-bottom: 1px solid #dbeafe; }
    .claude-md-item:last-child { border-bottom: none; }
    .cmd-checkbox { margin-top: 2px; }
    .cmd-code { background: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #1e40af; border: 1px solid #bfdbfe; font-family: monospace; display: block; white-space: pre-wrap; word-break: break-word; flex: 1; }
    .cmd-why { font-size: 12px; color: #64748b; width: 100%; padding-left: 24px; margin-top: 4px; }
    .feature-card { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; }
    .pattern-card { background: #f0f9ff; border: 1px solid #7dd3fc; border-radius: 8px; padding: 16px; }
    .horizon-card { background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%); border: 1px solid #c4b5fd; border-radius: 8px; padding: 16px; }
    .feature-title, .pattern-title, .horizon-title { font-weight: 600; font-size: 15px; color: #0f172a; margin-bottom: 6px; }
    .feature-oneliner, .pattern-summary, .horizon-possible { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .feature-why, .pattern-detail, .horizon-tip { font-size: 13px; color: #334155; line-height: 1.5; }
    .feature-examples, .copyable-prompt-section { margin-top: 12px; }
    .example-code-row, .copyable-prompt-row { display: flex; align-items: flex-start; gap: 8px; }
    .example-code, .copyable-prompt { flex: 1; background: #f8fafc; padding: 10px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; border: 1px solid #e2e8f0; white-space: pre-wrap; line-height: 1.5; }
    .prompt-label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 6px; }
    .copy-btn { background: #e2e8f0; border: none; border-radius: 4px; padding: 4px 8px; font-size: 11px; cursor: pointer; color: #475569; flex-shrink: 0; }
    .copy-btn:hover { background: #cbd5e1; }
    .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
    .chart-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .chart-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 12px; }
    .bar-row { display: flex; align-items: center; margin-bottom: 6px; }
    .bar-label { width: 120px; font-size: 11px; color: #475569; flex-shrink: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .bar-track { flex: 1; height: 6px; background: #f1f5f9; border-radius: 3px; margin: 0 8px; }
    .bar-fill { height: 100%; border-radius: 3px; }
    .bar-value { width: 40px; font-size: 11px; font-weight: 500; color: #64748b; text-align: right; }
    .fun-ending { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border: 1px solid #60a5fa; border-radius: 12px; padding: 24px; margin-top: 40px; text-align: center; }
    .fun-headline { font-size: 18px; font-weight: 600; color: #1d4ed8; margin-bottom: 8px; }
    .fun-detail { font-size: 14px; color: #1e3a8a; }
    @media (max-width: 640px) { .charts-row { grid-template-columns: 1fr; } .stats-row { justify-content: center; } }
  </style>
</head>
<body>
  <div class="container">
    <h1>Codex Thread Failure Report</h1>
    <p class="subtitle">${escapeHtml(subtitle)}</p>

    <div class="at-a-glance">
      <div class="glance-title">At a Glance</div>
      <div class="glance-sections">
        <div class="glance-section"><strong>How much Codex screws up:</strong> ${formatNumber(
          aggregate.compactedSessions,
        )} of ${formatNumber(aggregate.totalSessions)} sessions (${formatPercent(
          aggregate.compactedSessions,
          aggregate.totalSessions,
        )}) hit compaction, ${formatNumber(aggregate.toolErrorSessions)} sessions (${formatPercent(
          aggregate.toolErrorSessions,
          aggregate.totalSessions,
        )}) hit tool failures, and ${formatNumber(aggregate.frustrationSessions)} sessions (${formatPercent(
          aggregate.frustrationSessions,
          aggregate.totalSessions,
        )}) contain explicit user frustration. <a href="#section-damage" class="see-more">Damage Summary →</a></div>
        <div class="glance-section"><strong>What it screws up:</strong> Codex threads mostly fail at carrying state, retrieving the right past work, and preserving one coherent project identity. The transcript is huge, the index is thin, and the same repo is split across multiple path variants and client versions. <a href="#section-failures" class="see-more">Failure Modes →</a></div>
        <div class="glance-section"><strong>How to stop it screwing up:</strong> Treat threads as disposable logs. Keep them short, checkpoint decisions explicitly, force one canonical workspace path, and make hooks write usable memory outside the thread. <a href="#section-fixes" class="see-more">Controls To Add →</a></div>
        <div class="glance-section"><strong>Root-cause fix:</strong> Build a proper intelligence layer over sessions: lineage, per-repo memory shards, and thread-quality scoring. That is how you stop transcript sludge from pretending to be memory. <a href="#section-horizon" class="see-more">Root-Cause Roadmap →</a></div>
      </div>
    </div>

    <nav class="nav-toc">
      <a href="#section-work">What You Work On</a>
      <a href="#section-damage">How Much It Screws Up</a>
      <a href="#section-failures">What It Screws Up</a>
      <a href="#section-fixes">How To Stop It</a>
      <a href="#section-patterns">Habits That Help</a>
      <a href="#section-horizon">Root-Cause Fixes</a>
    </nav>

    <div class="stats-row">
      <div class="stat"><div class="stat-value">${formatNumber(
        aggregate.totalSessions,
      )}</div><div class="stat-label">Sessions</div></div>
      <div class="stat"><div class="stat-value">${formatNumber(
        aggregate.compactedSessions,
      )}</div><div class="stat-label">Compacted Sessions</div></div>
      <div class="stat"><div class="stat-value">${formatNumber(
        aggregate.toolErrorSessions,
      )}</div><div class="stat-label">Tool Error Sessions</div></div>
      <div class="stat"><div class="stat-value">${formatNumber(
        aggregate.frustrationSessions,
      )}</div><div class="stat-label">Frustrated Sessions</div></div>
      <div class="stat"><div class="stat-value">${formatNumber(
        aggregate.overlap.events,
      )}</div><div class="stat-label">Overlap Events</div></div>
      <div class="stat"><div class="stat-value">${formatNumber(
        aggregate.variantRiskSessions,
      )}</div><div class="stat-label">Path-Variant Sessions</div></div>
    </div>

    <h2 id="section-work">What You Work On</h2>
    <div class="project-areas">
      ${workAreas}
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">What You Wanted</div>
        ${goalChart}
      </div>
      <div class="chart-card">
        <div class="chart-title">Top Tools Used</div>
        ${toolChart}
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Workspace Variants</div>
        ${workspaceChart}
      </div>
      <div class="chart-card">
        <div class="chart-title">Session Types</div>
        ${sessionTypeChart}
      </div>
    </div>

    <h2 id="section-damage">How Much Codex Screws Up</h2>
    <div class="narrative">
      <p>This is the blunt version: Codex thread handling screws you up operationally when it asks a transcript to behave like memory. Across ${formatNumber(
        aggregate.totalSessions,
      )} local sessions, ${formatNumber(aggregate.compactedSessions)} were compacted, ${formatNumber(
        aggregate.toolErrorSessions,
      )} had at least one tool failure, and ${formatNumber(
        aggregate.frustrationSessions,
      )} contain explicit user frustration. The screwup is measurable, not vibes-based.</p>
      <p>The failure is usually not &quot;Codex forgot everything.&quot; It is worse than that: Codex keeps a massive raw log, then surfaces a thin thread abstraction that hides the parts you actually need. You have ${formatNumber(
        aggregate.totalTranscriptLines,
      )} transcript lines and ${formatNumber(
        aggregate.totalToolCalls,
      )} recorded tool calls, but that evidence is poorly indexed and gets harder to recover once threads broaden.</p>
      <p>Your history is also <strong>multi-client, multi-version, and path-fragmented</strong>. Local session metadata spans ${formatNumber(
        aggregate.versionSpread,
      )} Codex client versions, and the main Livepeer workspace appears under ${formatNumber(
        primaryWorkspace?.variants || 1,
      )} path variants. That means continuity can break before the model even starts reasoning.</p>
      <div class="key-insight"><strong>Key insight:</strong> Codex fails as a state carrier before it fails as a logger. The logging layer is rich. The memory layer is weak.</div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Compacted Sessions</div>
        <div style="font-size: 28px; font-weight: 700; color: #dc2626; margin-bottom: 8px;">${formatPercent(
          aggregate.compactedSessions,
          aggregate.totalSessions,
        )}</div>
        <p style="font-size: 13px; color: #475569;">${formatNumber(
          aggregate.compactedSessions,
        )} sessions hit context compaction. Once that happens, continuity depends on an opaque summary you do not control.</p>
      </div>
      <div class="chart-card">
        <div class="chart-title">Tool Failure Sessions</div>
        <div style="font-size: 28px; font-weight: 700; color: #dc2626; margin-bottom: 8px;">${formatPercent(
          aggregate.toolErrorSessions,
          aggregate.totalSessions,
        )}</div>
        <p style="font-size: 13px; color: #475569;">${formatNumber(
          aggregate.toolErrorSessions,
        )} sessions produced ${formatNumber(
          aggregate.totalToolErrors,
        )} tool errors, which adds retry churn and pushes useful state deeper into noise.</p>
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Frustrated Sessions</div>
        <div style="font-size: 28px; font-weight: 700; color: #dc2626; margin-bottom: 8px;">${formatPercent(
          aggregate.frustrationSessions,
          aggregate.totalSessions,
        )}</div>
        <p style="font-size: 13px; color: #475569;">${formatNumber(
          aggregate.frustrationSessions,
        )} sessions include direct user frustration. That is a practical signal that the thread model stopped helping and started getting in the way.</p>
      </div>
      <div class="chart-card">
        <div class="chart-title">Path-Variant Sessions</div>
        <div style="font-size: 28px; font-weight: 700; color: #dc2626; margin-bottom: 8px;">${formatPercent(
          aggregate.variantRiskSessions,
          aggregate.totalSessions,
        )}</div>
        <p style="font-size: 13px; color: #475569;">${formatNumber(
          aggregate.variantRiskSessions,
        )} sessions ran under workspace-path variants. That splits history across near-identical repos and makes thread retrieval dumber than it needs to be.</p>
      </div>
    </div>

    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">User Response Time Distribution</div>
      ${responseChart}
      <div style="font-size: 12px; color: #64748b; margin-top: 8px;">
        Median: ${formatSeconds(median(aggregate.responseTimes))} &bull; Average: ${formatSeconds(
          average(aggregate.responseTimes),
        )}
      </div>
    </div>

    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">Parallel Codex Sessions</div>
      <div style="display: flex; gap: 24px; margin: 12px 0; flex-wrap: wrap;">
        <div style="text-align: center;">
          <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${formatNumber(
            aggregate.overlap.events,
          )}</div>
          <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Overlap Events</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${formatNumber(
            aggregate.overlap.sessionsInvolved,
          )}</div>
          <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Sessions Involved</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${formatNumber(
            aggregate.overlap.maxConcurrent,
          )}</div>
          <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Max Concurrent</div>
        </div>
      </div>
      <p style="font-size: 13px; color: #475569; margin-top: 12px;">Parallel sessions are normal in your workflow, which makes thread lineage and consistent workspace identity more important than they would be for a casual single-thread user.</p>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Session Starts by Time of Day (Local Transcript Time)</div>
        ${timeOfDayChart}
      </div>
      <div class="chart-card">
        <div class="chart-title">Thread Stress Signals</div>
        ${threadStressChart}
      </div>
    </div>

    <h2 id="section-failures">What It Screws Up</h2>
    <p class="section-intro">These are the main ways the current Codex thread model fails you in practice.</p>
    <div class="big-wins">
      <div class="big-win">
        <div class="big-win-title">It Screws Up State Carry-Over</div>
        <div class="big-win-desc">A resumed thread feels continuous, but long sessions are compacted and the surviving summary is not a first-class artifact you can inspect or fix. That means Codex can carry the wrong distilled state forward while still looking like one coherent conversation.</div>
      </div>
      <div class="big-win">
        <div class="big-win-title">It Screws Up Retrieval</div>
        <div class="big-win-desc">The raw transcript store is rich, but the history surface is metadata-poor. Important work gets buried behind thin titles, flat session lists, and missing lineage. The result is that finding the right past thread feels much dumber than the underlying data should allow.</div>
      </div>
      <div class="big-win">
        <div class="big-win-title">It Screws Up Project Identity</div>
        <div class="big-win-desc">The same repo shows up under multiple worktree and path variants, across multiple Codex clients and versions. That fragments history, makes continuity feel random, and increases the chance that a resumed thread is anchored to the wrong environment assumptions.</div>
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Client Fragmentation</div>
        ${originatorChart}
      </div>
      <div class="chart-card">
        <div class="chart-title">Version Fragmentation</div>
        ${versionChart}
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Inferred Outcomes</div>
        ${outcomeChart}
      </div>
      <div class="chart-card">
        <div class="chart-title">User Friction Signals</div>
        ${satisfactionChart}
      </div>
    </div>

    <h2 id="section-fix-causes">Why It Keeps Screwing Up</h2>
    <p class="section-intro">These are the structural reasons the screwups repeat.</p>
    <div class="friction-categories">
      <div class="friction-category">
        <div class="friction-title">Thin Metadata, Thick Transcript</div>
        <div class="friction-desc">Your thread index is too weak compared with the raw logs. The session index stores only an id, a title, and an update timestamp, while the real evidence is buried in ${formatNumber(
          aggregate.totalTranscriptLines,
        )} transcript lines. This makes retrieval feel stupid because the storage layer is rich but the navigation layer is poor.</div>
        <ul class="friction-examples">
          <li>Thread history is title-driven, so low-signal names make important work hard to find later.</li>
          <li>Resume and fork exist operationally, but parent/child lineage is not surfaced in the local metadata you can actually browse.</li>
        </ul>
      </div>
      <div class="friction-category">
        <div class="friction-title">Workspace Identity Fragmentation</div>
        <div class="friction-desc">The same logical repo is being represented by multiple workspace paths. That creates avoidable thread splits, duplicate histories, and cross-thread confusion, especially when you are moving between Desktop, VS Code, and branch/worktree variants.</div>
        <ul class="friction-examples">
          <li>${escapeHtml(
            primaryWorkspace?.workspace || "Primary workspace",
          )} appears under ${formatNumber(primaryWorkspace?.variants || 1)} distinct cwd variants.</li>
          <li>Sessions span both branch-label paths and sanitized fallback paths for the same Livepeer docs estate.</li>
        </ul>
      </div>
      <div class="friction-category">
        <div class="friction-title">Multi-Client Version Drift</div>
        <div class="friction-desc">The same session model is being exercised by different Codex clients and versions. When behavior feels inconsistent, part of that inconsistency is real environment drift rather than just thread quality.</div>
        <ul class="friction-examples">
          <li>Your local history spans ${formatNumber(aggregate.versionSpread)} distinct client versions.</li>
          <li>The dominant version is ${escapeHtml(topVersion?.[0] || "unknown")}, which means older and newer client behaviors are mixed into one corpus.</li>
        </ul>
      </div>
      <div class="friction-category">
        <div class="friction-title">Opaque Context Compression</div>
        <div class="friction-desc">Long threads are being compacted, but the surviving summary is not a first-class artifact you can inspect or curate. That means the system can silently preserve the wrong context while still looking like one continuous thread.</div>
        <ul class="friction-examples">
          <li>${formatNumber(
            aggregate.totalCompactions,
          )} explicit context compaction events were recorded locally.</li>
          <li>When compaction is combined with multi-client usage and path variants, you get continuity theater rather than dependable memory.</li>
        </ul>
      </div>
    </div>

    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">Observed Tool Error Categories</div>
      ${errorChart}
    </div>

    <h2 id="section-fixes">How To Stop It Screwing Up</h2>
    <div class="claude-md-section">
      <h3>Suggested AGENTS.md Additions</h3>
      <p style="font-size: 12px; color: #64748b; margin-bottom: 12px;">These rules reduce thread screwups by forcing explicit state and path discipline.</p>
      <div class="claude-md-actions">
        <button class="copy-all-btn" onclick="copyAllCheckedClaudeMd()">Copy All Checked</button>
      </div>
      ${renderAgentsItems()}
    </div>

    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">These are the highest-leverage controls to add first.</p>
    <div class="features-section">
      ${renderFeatureCards()}
    </div>

    <h2 id="section-patterns">Habits That Reduce Screwups</h2>
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">These workflow habits cut down the repeated failure modes above.</p>
    <div class="patterns-section">
      ${renderPatternCards()}
    </div>

    <h2 id="section-horizon">On the Horizon</h2>
    <p class="section-intro">If you want the root-cause fix instead of coping strategies, build a proper memory and lineage layer over the raw sessions.</p>
    <div class="horizon-section">
      ${renderHorizonCards()}
    </div>

    <div class="fun-ending">
      <div class="fun-headline">&quot;Codex threads are good at recording the crash and bad at preventing it&quot;</div>
      <div class="fun-detail">The way to stop the screwups is not &quot;trust the thread more.&quot; It is shorter threads, explicit checkpoints, one canonical workspace path, and memory written outside the transcript.</div>
    </div>
  </div>
  <script>
    function copyText(btn) {
      const code = btn.previousElementSibling;
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    }
    function copyCmdItem(idx) {
      const checkbox = document.getElementById('cmd-' + idx);
      if (checkbox) {
        const text = checkbox.dataset.text;
        navigator.clipboard.writeText(text).then(() => {
          const btn = checkbox.nextElementSibling.querySelector('.copy-btn');
          if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy'; }, 2000); }
        });
      }
    }
    function copyAllCheckedClaudeMd() {
      const checkboxes = document.querySelectorAll('.cmd-checkbox:checked');
      const texts = [];
      checkboxes.forEach(cb => {
        if (cb.dataset.text) { texts.push(cb.dataset.text); }
      });
      const combined = texts.join('\\n');
      const btn = document.querySelector('.copy-all-btn');
      if (btn) {
        navigator.clipboard.writeText(combined).then(() => {
          btn.textContent = 'Copied ' + texts.length + ' items!';
          btn.classList.add('copied');
          setTimeout(() => { btn.textContent = 'Copy All Checked'; btn.classList.remove('copied'); }, 2000);
        });
      }
    }
  </script>
</body>
</html>`;
}

function renderWorkAreas(aggregate) {
  return aggregate.topWorkspaceVariants
    .slice(0, 5)
    .map(({ workspace, count, variants }) => {
      return `<div class="project-area">
          <div class="area-header">
            <span class="area-name">${escapeHtml(workspace)}</span>
            <span class="area-count">~${formatNumber(count)} sessions</span>
          </div>
          <div class="area-desc">${escapeHtml(describeWorkspace(workspace, count, variants, aggregate))}</div>
        </div>`;
    })
    .join("\n");
}

function describeWorkspace(workspace, count, variants, aggregate) {
  if (workspace === "Livepeer Docs Main Worktrees") {
    return `Primary Livepeer docs work happened here. This is where Codex threads are most exposed to path-identity fragmentation because the same logical project appears under ${variants} workspace variants, across multiple clients and versions.`;
  }
  if (workspace === "Docs-v2-dev Working Tree") {
    return "This appears to be your more stable implementation workspace. Threads here are generally narrower and easier to interpret, which makes them a better candidate for canonical launch paths.";
  }
  if (workspace === "Codex Home / Tooling") {
    return "Home-directory sessions focus on Codex itself: hooks, memory, configuration, and thread tooling. This is where the thread system gets audited rather than merely used.";
  }
  return `Sessions in this workspace contribute to the overall thread corpus, but they are secondary compared with the main Livepeer docs work.`;
}

function renderAgentsItems() {
  const items = [
    {
      title: "## Thread Safety Rule\nThreads are logs, not memory. If a task changes concern, start a fresh thread. Do not assume resume or fork carries reliable distilled state forward.",
      why: "This prevents broad noisy threads from pretending to be coherent memory.",
    },
    {
      title: "## Mandatory Checkpoints\nAt each major milestone, append 5 bullets: goal, decisions made, current evidence, validation run, and unresolved risks. If you cannot produce that checkpoint, say the thread is degraded.",
      why: "This turns hidden thread state into explicit recoverable state.",
    },
    {
      title: "## Canonical Workspace Path\nAlways print the exact cwd and git root before major work. If the same repo exists under multiple worktrees or path variants, choose one canonical path and stick to it for the session.",
      why: "Your local history shows path fragmentation as a direct thread-quality problem.",
    },
  ];

  return items
    .map((item, index) => {
      return `<div class="claude-md-item">
          <input type="checkbox" id="cmd-${index}" class="cmd-checkbox" checked data-text="${escapeHtmlAttribute(
            item.title,
          )}">
          <label for="cmd-${index}">
            <code class="cmd-code">${escapeHtml(item.title)}</code>
            <button class="copy-btn" onclick="copyCmdItem(${index})">Copy</button>
          </label>
          <div class="cmd-why">${escapeHtml(item.why)}</div>
        </div>`;
    })
    .join("\n");
}

function renderFeatureCards() {
  return [
    {
      title: "Hooks",
      oneliner: "Write state outside the thread at SessionStart and Stop.",
      why: "The official hook model already exposes session id, cwd, and transcript path. Use it to emit checkpoints and summaries so Codex does not have to recover state from transcript sludge.",
      example: `{\n  "hooks": {\n    "Stop": [\n      {\n        "hooks": [\n          {\n            "type": "command",\n            "command": "node ~/.codex/bin/codex-memory-append.mjs",\n            "timeout": 30\n          }\n        ]\n      }\n    ]\n  }\n}`,
    },
    {
      title: "AGENTS.md",
      oneliner: "Put operating rules where Codex can see them every time.",
      why: "OpenAI&apos;s durable context path is AGENTS guidance, not chat history. Use it for thread safety rules, canonical path requirements, and checkpoint expectations.",
      example: `# ~/.codex/AGENTS.md\n\n## Working agreements\n- Threads are logs, not memory.\n- Restate the goal and canonical repo path before major work.\n- End each substantial session with a decision checkpoint.`,
    },
    {
      title: "Start-Fresh Trigger",
      oneliner: "Define a hard rule for when a thread is too degraded to keep using.",
      why: "Compaction, tool-error churn, and path confusion are signals that you should stop recovering and start fresh.",
      example: `If this thread has changed scope, accumulated repeated tool failures, or lost a clear checkpointed state summary, stop and recommend a fresh thread before making more edits.`,
    },
  ]
    .map(
      (feature) => `<div class="feature-card">
          <div class="feature-title">${escapeHtml(feature.title)}</div>
          <div class="feature-oneliner">${escapeHtml(feature.oneliner)}</div>
          <div class="feature-why"><strong>Why for you:</strong> ${escapeHtml(feature.why)}</div>
          <div class="feature-examples">
            <div class="example-code-row">
              <code class="example-code">${escapeHtml(feature.example)}</code>
              <button class="copy-btn" onclick="copyText(this)">Copy</button>
            </div>
          </div>
        </div>`,
    )
    .join("\n");
}

function renderPatternCards() {
  return [
    {
      title: "Short Threads, Hard Stops",
      summary: "Do not let one thread absorb multiple concerns.",
      detail: "Compaction and metadata thinness make broad threads degrade fast. The fix is shorter task-scoped threads plus an explicit rule that scope changes trigger a fresh thread.",
      prompt:
        "This task gets one thread. If scope changes concern, stop and tell me to start a fresh thread. Before you finish, append a 5-bullet checkpoint: current goal, decisions made, validation run, unresolved risks, and canonical workspace path.",
    },
    {
      title: "Force Canonical Path Declaration",
      summary: "Make Codex state exactly which repo identity it is using before it does anything serious.",
      detail: "Your history shows the same Livepeer docs repo split across multiple cwd variants. That is a retrieval and trust problem before the model even reasons.",
      prompt:
        "Before any implementation, print the exact cwd and git root you are using. If this repo exists under multiple worktrees or path variants, stop and recommend one canonical path for this task before continuing.",
    },
    {
      title: "Demand Explicit State Recovery",
      summary: "When a thread is already noisy, require Codex to prove it still knows the current state.",
      detail: "This catches the common failure where the thread contains plenty of history but not the right distilled state.",
      prompt:
        "Before you edit anything, summarize the current state of this task in 5 bullets: goal, what is already true, what is uncertain, what evidence you have, and what single next action you recommend. If you cannot do that confidently from the thread, say so and ask me for a fresh thread instead.",
    },
  ]
    .map(
      (pattern) => `<div class="pattern-card">
          <div class="pattern-title">${escapeHtml(pattern.title)}</div>
          <div class="pattern-summary">${escapeHtml(pattern.summary)}</div>
          <div class="pattern-detail">${escapeHtml(pattern.detail)}</div>
          <div class="copyable-prompt-section">
            <div class="prompt-label">Paste into Codex:</div>
            <div class="copyable-prompt-row">
              <code class="copyable-prompt">${escapeHtml(pattern.prompt)}</code>
              <button class="copy-btn" onclick="copyText(this)">Copy</button>
            </div>
          </div>
        </div>`,
    )
    .join("\n");
}

function renderHorizonCards() {
  return [
    {
      title: "Thread Lineage Indexing",
      possible:
        "Build a local ancestry index that links startup, resume, and fork sessions into explicit chains. That would give you navigation Codex currently does not surface.",
      tip:
        "Use session ids, transcript paths, and hook-generated metadata to persist parent/child relationships outside the base thread store.",
      prompt:
        "Create a lineage index for Codex sessions. Persist parent/child relationships for startup, resume, and fork into ~/.codex/usage-data/lineage.json and add a report section that shows thread families instead of flat history.",
    },
    {
      title: "Per-Repo Memory Shards",
      possible:
        "Global memory is useful, but repo-scoped memory would stop Livepeer docs decisions from being diluted by unrelated Codex sessions.",
      tip:
        "Shard summaries by canonical git root and merge them into the global AGENTS guidance only when they are truly cross-project.",
      prompt:
        "Build per-repo memory shards under ~/.codex/memories/repos/<slug>.md. On Stop, append only decisions that are specific to the current git root, and keep global AGENTS.md reserved for cross-project operating rules.",
    },
    {
      title: "Thread Quality Scoring",
      possible:
        "You already have enough local data to score threads for risk: compaction, workspace variants, frustration, low-signal titles, and tool-error density.",
      tip:
        "Surface a &quot;thread quality&quot; score in the history UI or in a generated dashboard so you know which threads are worth resuming and which should be retired.",
      prompt:
        "Add a thread-quality score to the Codex insights report. Weight compaction, tool errors, low-signal titles, workspace variants, and frustration. Mark threads as resume-safe, caution, or start-fresh.",
    },
  ]
    .map(
      (card) => `<div class="horizon-card">
          <div class="horizon-title">${escapeHtml(card.title)}</div>
          <div class="horizon-possible">${escapeHtml(card.possible)}</div>
          <div class="horizon-tip"><strong>Getting started:</strong> ${escapeHtml(card.tip)}</div>
          <div class="copyable-prompt-section">
            <div class="prompt-label">Paste into Codex:</div>
            <div class="copyable-prompt-row">
              <code class="copyable-prompt">${escapeHtml(card.prompt)}</code>
              <button class="copy-btn" onclick="copyText(this)">Copy</button>
            </div>
          </div>
        </div>`,
    )
    .join("\n");
}

function renderBarRows(entries, color) {
  if (entries.length === 0) {
    return `<div class="bar-row"><div class="bar-label">No data</div><div class="bar-track"></div><div class="bar-value">0</div></div>`;
  }
  const maxValue = Math.max(...entries.map(([, value]) => value)) || 1;
  return entries
    .map(([label, value]) => {
      const width = (value / maxValue) * 100;
      return `<div class="bar-row">
        <div class="bar-label">${escapeHtml(label)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${width}%;background:${color}"></div></div>
        <div class="bar-value">${formatNumber(value)}</div>
      </div>`;
    })
    .join("\n");
}

function renderVariantRows(entries, color) {
  if (entries.length === 0) {
    return `<div class="bar-row"><div class="bar-label">No data</div><div class="bar-track"></div><div class="bar-value">0</div></div>`;
  }
  const maxValue = Math.max(...entries.map((entry) => entry.count)) || 1;
  return entries
    .map((entry) => {
      const width = (entry.count / maxValue) * 100;
      return `<div class="bar-row">
        <div class="bar-label">${escapeHtml(entry.workspace)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${width}%;background:${color}"></div></div>
        <div class="bar-value">${formatNumber(entry.variants)}</div>
      </div>`;
    })
    .join("\n");
}

function renderResponseTimeRows(entries, color) {
  const maxValue = Math.max(...entries.map(([, value]) => value), 1);
  return entries
    .map(([label, value]) => {
      const width = (value / maxValue) * 100;
      return `<div class="bar-row">
        <div class="bar-label">${escapeHtml(label)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${width}%;background:${color}"></div></div>
        <div class="bar-value">${formatNumber(value)}</div>
      </div>`;
    })
    .join("\n");
}

function renderTimeOfDayRows(hourCounts, color) {
  const periods = [
    ["Morning (6-12)", [6, 7, 8, 9, 10, 11]],
    ["Afternoon (12-18)", [12, 13, 14, 15, 16, 17]],
    ["Evening (18-24)", [18, 19, 20, 21, 22, 23]],
    ["Night (0-6)", [0, 1, 2, 3, 4, 5]],
  ];

  const entries = periods.map(([label, hours]) => [
    label,
    hours.reduce((sum, hour) => sum + (hourCounts[hour] || 0), 0),
  ]);

  return renderBarRows(entries, color);
}

function countBy(items, keyFn) {
  const counts = {};
  for (const item of items) {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

function groupBy(items, keyFn) {
  const groups = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(item);
  }
  return groups;
}

function sumNestedCounts(list) {
  const counts = {};
  for (const object of list) {
    for (const [key, value] of Object.entries(object)) {
      counts[key] = (counts[key] || 0) + value;
    }
  }
  return counts;
}

function topEntries(object, limit) {
  return Object.entries(object)
    .sort((left, right) => right[1] - left[1])
    .slice(0, limit);
}

function labelCounts(object) {
  const labels = {
    likely_satisfied: "Likely Satisfied",
    frustrated: "Frustrated",
    dissatisfied: "Dissatisfied",
    neutral: "Neutral",
    unclear: "Unclear",
    mostly_achieved: "Mostly Achieved",
    partially_achieved: "Partially Achieved",
    not_achieved: "Not Achieved",
    unclear_from_transcript: "Unclear",
  };
  const mapped = {};
  for (const [key, value] of Object.entries(object)) {
    mapped[labels[key] || key] = value;
  }
  return mapped;
}

function bucketResponseTimes(seconds) {
  const buckets = [
    ["2-10s", 0],
    ["10-30s", 0],
    ["30s-1m", 0],
    ["1-2m", 0],
    ["2-5m", 0],
    ["5-15m", 0],
    [">15m", 0],
  ];

  for (const value of seconds) {
    if (value < 10) buckets[0][1] += 1;
    else if (value < 30) buckets[1][1] += 1;
    else if (value < 60) buckets[2][1] += 1;
    else if (value < 120) buckets[3][1] += 1;
    else if (value < 300) buckets[4][1] += 1;
    else if (value < 900) buckets[5][1] += 1;
    else buckets[6][1] += 1;
  }

  return buckets;
}

function computeOverlap(sessions) {
  const sorted = [...sessions].sort((left, right) => left.startMs - right.startMs);
  const active = [];
  let events = 0;
  let maxConcurrent = 0;
  const involved = new Set();

  for (const session of sorted) {
    while (active.length > 0 && active[0].endMs <= session.startMs) {
      active.shift();
    }
    if (active.length > 0) {
      events += 1;
      involved.add(session.sessionId);
      for (const item of active) {
        involved.add(item.sessionId);
      }
    }
    active.push(session);
    active.sort((left, right) => left.endMs - right.endMs);
    maxConcurrent = Math.max(maxConcurrent, active.length);
  }

  return { events, sessionsInvolved: involved.size, maxConcurrent };
}

function countHours(sessions) {
  const hours = {};
  for (const session of sessions) {
    const date = new Date(session.startMs);
    const hour = date.getHours();
    hours[hour] = (hours[hour] || 0) + 1;
  }
  return hours;
}

function normalizeLogicalWorkspace(cwd) {
  if (!cwd) return "Unknown";
  if (/Docs-v2-dev/.test(cwd)) return "Docs-v2-dev Working Tree";
  if (/livepeer-docs-v2/.test(cwd)) return "Livepeer Docs Main Worktrees";
  if (cwd.startsWith(path.join(codexHome, "worktrees"))) return "Codex Managed Worktrees";
  if (cwd.startsWith(codexHome)) return "Codex Home / Tooling";
  return path.basename(cwd);
}

function normalizeVariantKey(cwd) {
  if (!cwd) return "unknown";
  return cwd
    .replace(/\s+\[[^\]]+\]/g, "")
    .replace(/_d-v2-branch/g, "")
    .replace(/Docs-v2-dev/g, "livepeer-docs-v2")
    .toLowerCase();
}

function isVariantWorkspace(cwd) {
  return /\[[^\]]+\]|_d-v2-branch|Docs-v2-dev/.test(cwd);
}

function isLowSignalTitle(title) {
  return /^(resume|fork|start new coding session|implement|investigate|validate)$/i.test(title.trim());
}

function inferThreadTitle(firstPrompt, cwd) {
  const cleaned = sanitizePrompt(firstPrompt)
    .split("## My request for Codex:")[1]
    ?.trim()
    ?.split(/\n\s*\n/)[0]
    ?.replace(/\bGitHub\b(?:\s*\+\d+)?/g, " ")
    ?.replace(/\s+/g, " ")
    ?.trim();
  return truncate(cleaned || path.basename(cwd) || "Untitled thread", 80);
}

function sanitizePrompt(value) {
  return String(value || "")
    .replace(/\r/g, "")
    .replace(/\u0000/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function countFrustration(messages) {
  const pattern = /\b(fuck|stupid|pissed|idiot|hate|useless|broken|annoying|ridiculous)\b/i;
  return messages.reduce((sum, message) => sum + (pattern.test(message) ? 1 : 0), 0);
}

function stringifyMetaValue(value) {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "unknown";
  if (typeof value === "object") {
    return value.name || value.type || "object";
  }
  return String(value);
}

function parseTimestamp(value) {
  const parsed = Date.parse(value || "");
  return Number.isFinite(parsed) ? parsed : 0;
}

function toIso(ms) {
  return new Date(ms || Date.now()).toISOString();
}

function diffSeconds(timestamps) {
  const values = [];
  for (let index = 1; index < timestamps.length; index += 1) {
    const delta = (timestamps[index] - timestamps[index - 1]) / 1000;
    if (delta >= 0) {
      values.push(Number(delta.toFixed(3)));
    }
  }
  return values;
}

function increment(map, key) {
  map.set(key, (map.get(key) || 0) + 1);
}

function truncate(value, maxLength) {
  const text = String(value || "");
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trimEnd()}...`;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function ensureDir(directoryPath) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeHtmlAttribute(value) {
  return escapeHtml(String(value)).replace(/\n/g, "&#10;");
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Math.round(value || 0));
}

function formatPercent(value, total) {
  if (!total) return "0%";
  return `${((value / total) * 100).toFixed(1)}%`;
}

function formatDate(ms) {
  return new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(ms));
}

function median(values) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}

function average(values) {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function formatSeconds(value) {
  if (!value) return "0s";
  if (value < 60) return `${value.toFixed(1)}s`;
  return `${(value / 60).toFixed(1)}m`;
}
