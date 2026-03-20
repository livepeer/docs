'use strict';

function buildWebviewHtml({ bodyHtml, cssUri, jsUri, markdownItUri, mermaidUri, dark }) {
  const themeClass = dark ? 'dark' : 'light';

  return `<!DOCTYPE html>
<html lang="en" class="${themeClass}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'none';
             img-src vscode-resource: https: data:;
             style-src vscode-resource: https: 'unsafe-inline';
             script-src vscode-resource: 'unsafe-inline';
             font-src vscode-resource: https:;">
  <link rel="stylesheet" href="${cssUri}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <title>MDX Preview</title>
</head>
<body class="${themeClass}">
  <div id="lpd-preview-root">
    ${bodyHtml}
  </div>
  <script src="${markdownItUri}"></script>
  <script src="${mermaidUri}"></script>
  <script src="${jsUri}"></script>
</body>
</html>`;
}

module.exports = { buildWebviewHtml };
