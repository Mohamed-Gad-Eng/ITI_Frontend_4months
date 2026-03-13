const http = require('http');
const fs = require('fs');
const path = require('path');

function loadDotEnv(rootDir) {
  const envPath = path.join(rootDir, '.env');
  if (!fs.existsSync(envPath)) return;
  const raw = fs.readFileSync(envPath, 'utf8');
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eq = trimmed.indexOf('=');
    if (eq === -1) return;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!key) return;
    if (process.env[key] === undefined) process.env[key] = val;
  });
}

const ROOT = __dirname;
loadDotEnv(ROOT);

const PORT = Number(process.env.PORT || 5500);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function safeJoin(rootDir, requestPath) {
  const normalized = path.posix.normalize(requestPath).replace(/^\/+/, '');
  const fsPath = path.join(rootDir, normalized);
  const resolved = path.resolve(fsPath);
  if (!resolved.startsWith(path.resolve(rootDir))) return null;
  return resolved;
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === '/') pathname = '/shop.html';

    if (pathname === '/config.json') {
      if (req.method === 'OPTIONS') {
        res.writeHead(204, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'no-store',
        });
        res.end();
        return;
      }

      loadDotEnv(ROOT);
      const wa = (process.env.WA || '').trim();
      const contactEmail = (process.env.CONTACT_EMAIL || '').trim();
      const contactLocation = (process.env.CONTACT_LOCATION || '').trim();
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store',
      });
      res.end(
        JSON.stringify({
          WA: wa,
          CONTACT_EMAIL: contactEmail,
          CONTACT_LOCATION: contactLocation,
        })
      );
      return;
    }

    const filePath = safeJoin(ROOT, pathname);
    if (!filePath) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad Request');
      return;
    }

    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad Request');
  }
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${PORT}`);
  const wa = (process.env.WA || '').trim();
  if (!wa || wa.includes('X')) {
    // eslint-disable-next-line no-console
    console.log('Tip: set WA in .env (example: WA=20XXXXXXXXXX)');
  }
});
