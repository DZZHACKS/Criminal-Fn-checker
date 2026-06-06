// Criminal Checker - Web preview server (visual only)
// --------------------------------------------------
// A tiny, dependency-free Node.js server that serves a web mock of the
// improved console dashboard. It simulates "live" checking numbers so you can
// preview how the UI looks/animates in a browser. It performs NO account
// checking and contains NONE of the checker logic from criminal.py.

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// ---- Simulated checker state ------------------------------------------------
const TOTAL = 5000;
const state = {
  total: TOTAL,
  startTime: Date.now(),
  hits: 0,
  fails: 0,
  retries: 0,
  cpm: 0,
  nfa: 0,
  fa: 0,
  stw: 0,
  rares: 0,
  ogs: 0,
  headless: 0,
  epic2fa: 0,
  banned: 0,
  skins: { '300+': 0, '200+': 0, '100+': 0, '50+': 0, '10+': 0, '1+': 0, '0': 0 },
};

const SKIN_BUCKETS = ['300+', '200+', '100+', '50+', '10+', '1+', '0'];

function rand(max) {
  return Math.floor(Math.random() * max);
}

// Advance the simulation a little every tick.
function tick() {
  const checked = state.hits + state.fails;
  if (checked >= state.total) {
    // Loop the demo: reset and start over so the preview never freezes.
    Object.assign(state, {
      startTime: Date.now(),
      hits: 0, fails: 0, retries: 0, cpm: 0,
      nfa: 0, fa: 0, stw: 0, rares: 0, ogs: 0, headless: 0, epic2fa: 0, banned: 0,
    });
    SKIN_BUCKETS.forEach((b) => { state.skins[b] = 0; });
    return;
  }

  const batch = 8 + rand(25);
  for (let i = 0; i < batch && (state.hits + state.fails) < state.total; i++) {
    if (Math.random() < 0.12) {
      // a hit
      state.hits++;
      if (Math.random() < 0.6) state.nfa++; else state.fa++;
      if (Math.random() < 0.18) state.stw++;
      if (Math.random() < 0.05) state.rares++;
      if (Math.random() < 0.03) state.ogs++;
      if (Math.random() < 0.04) state.headless++;
      if (Math.random() < 0.07) state.epic2fa++;
      if (Math.random() < 0.02) state.banned++;
      // distribute into a skin bucket
      const r = Math.random();
      let bucket;
      if (r < 0.01) bucket = '300+';
      else if (r < 0.03) bucket = '200+';
      else if (r < 0.08) bucket = '100+';
      else if (r < 0.18) bucket = '50+';
      else if (r < 0.40) bucket = '10+';
      else if (r < 0.75) bucket = '1+';
      else bucket = '0';
      state.skins[bucket]++;
    } else {
      state.fails++;
    }
    if (Math.random() < 0.1) state.retries++;
  }

  const elapsedMin = (Date.now() - state.startTime) / 60000;
  state.cpm = elapsedMin > 0 ? Math.round((state.hits + state.fails) / elapsedMin) : 0;
}

setInterval(tick, 350);

// ---- HTTP server ------------------------------------------------------------
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
};

function snapshot() {
  const checked = state.hits + state.fails;
  const elapsedMs = Date.now() - state.startTime;
  const pct = state.total ? (checked / state.total) * 100 : 0;
  return {
    ...state,
    checked,
    percent: Math.round(pct * 100) / 100,
    elapsed: formatTime(elapsedMs),
  };
}

function formatTime(ms) {
  const s = Math.floor(ms / 1000);
  const hh = String(Math.floor(s / 3600)).padStart(2, '0');
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/stats') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(snapshot()));
    return;
  }

  let filePath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  filePath = path.join(PUBLIC_DIR, path.normalize(filePath).replace(/^(\.\.[/\\])+/, ''));

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  Criminal Checker — web preview running`);
  console.log(`  Open  http://localhost:${PORT}  in your browser\n`);
});
