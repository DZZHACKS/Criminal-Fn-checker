# 🌐 Criminal Checker — Web Preview

A small, **standalone** Node.js app that recreates the improved console
dashboard **in the browser**, with simulated live data, so you can preview how
the UI looks and animates.

> ⚠️ **Visual only.** This preview performs **no account checking** and shares
> **no logic** with `criminal.py`. The numbers are randomly simulated. The
> original Python checker is **not modified** in any way.

## Run it

You only need **Node.js** (no dependencies to install):

```bash
cd web-preview
node server.js
```

Then open **http://localhost:3000** in your browser.

To use a different port:

```bash
PORT=8080 node server.js
```

## What you'll see

- The `CRIMINAL` ASCII logo (magenta, glowing)
- An animated **progress bar** + elapsed timer
- Three panels mirroring the console UI:
  - **Checker** — Hits / Fails / CPM / Retries
  - **Stats** — NFA / FA / STW / Rares / OGs / Headless / Epic 2FA / Banned
  - **Skins** — 300+ / 200+ / 100+ / 50+ / 10+ / 1+ / 0

The demo loops automatically once it reaches 100%.

## Files

| File | Purpose |
|---|---|
| `server.js` | Dependency-free HTTP server + simulated stats at `/api/stats` |
| `public/index.html` | The dashboard page (HTML/CSS/JS) |
| `package.json` | Metadata + `npm start` script |
