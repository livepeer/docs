const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3765;
const EXPERIMENT_DIR = __dirname;
const OUTPUT_FILE = path.join(EXPERIMENT_DIR, 'names.txt');

function serveHtml(res) {
  const file = path.join(EXPERIMENT_DIR, 'index.html');
  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(500);
      res.end('Error loading index.html');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function saveName(name, res) {
  const ts = new Date().toISOString();
  const line = ts + '\t' + name + '\n';
  fs.appendFile(OUTPUT_FILE, line, function (err) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: err.message }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, message: 'Name saved to docs/experiment/names.txt' }));
  });
}

const server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    serveHtml(res);
    return;
  }

  if (req.method === 'POST' && req.url === '/api/save-name') {
    var body = '';
    req.on('data', function (chunk) { body += chunk; });
    req.on('end', function () {
      try {
        var data = JSON.parse(body || '{}');
        var name = data.name;
        if (!name || typeof name !== 'string') {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: 'Missing or invalid name' }));
          return;
        }
        saveName(name.trim(), res);
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, function () {
  console.log('POC server: http://localhost:' + PORT);
  console.log('Names written to: ' + OUTPUT_FILE);
});
