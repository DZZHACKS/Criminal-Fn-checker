# 📖 Criminal Checker — Full Tutorial

> 🇫🇷 Une version française de ce tutoriel est disponible : **[TUTORIAL.fr.md](TUTORIAL.fr.md)**

This guide walks you through everything from installation to reading your results.

> ⚠️ **Use responsibly.** Only check accounts and combolists you own or are authorized to test. You are responsible for your usage.

---

## 1. Prerequisites

| Requirement | Notes |
|---|---|
| **Windows** | The tool relies on Windows-only modules (`pywin32`, console calls). |
| **Python 3.12** | Recommended. During install, tick **"Add Python to PATH"**. |
| **A combolist** | A `.txt` file with one `email:password` per line. |
| **(Optional) Proxies** | Recommended to avoid rate limits. |

### Check your Python install

Open `cmd` and run:

```bash
python --version
```

You should see something like `Python 3.12.x`. If the command isn't found, reinstall Python 3.12 and make sure **"Add Python to PATH"** is checked.

---

## 2. Installation

1. **Download the project** (green *Code* button → *Download ZIP*, then extract it — or `git clone`).
2. **Open a terminal in the folder.** In the project folder, type `cmd` in the File Explorer address bar and press Enter.
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   Wait for everything to finish installing.

---

## 3. Prepare your files

### Combos

1. Open the **`combos/`** folder.
2. Add a `.txt` file containing your combos, one account per line:
   ```
   email1@example.com:password1
   email2@example.com:password2
   ```
   > The checker automatically removes blank lines, duplicates, and any line without a `:`.

### Proxies (optional but recommended)

1. Open the **`proxies/`** folder.
2. Add a `.txt` file with one proxy per line, using one of these formats:
   ```
   ip:port
   user:pass@ip:port
   ```

---

## 4. Configure (optional)

You can edit `config/criminal.cfg` before launching, or do it inside the app (see step 5). Key settings:

```yaml
checker:
  threads: 1000        # how many accounts to check in parallel (max 1000)
  timeout: 6000        # request timeout in ms
  retries: 1           # retries per account
  webhook:
    Webhook: true                  # send hits to Discord?
    WebhookID: <your-webhook-url>  # 🔐 replace with YOUR OWN webhook
  proxy:
    proxy: false       # use proxies?
    proxy_type: HTTP   # HTTP / SOCKS4 / SOCKS5
```

> 🔐 **Important:** the shipped config contains a webhook URL that is **not yours**. Replace `WebhookID` with your own Discord webhook, or set `Webhook: false`, so your hits stay private.

---

## 5. Run the checker

In your terminal, run:

```bash
py criminal.py
```
or
```bash
python criminal.py
```

### What happens on launch

1. **Update check** — the tool compares your version against this repo and auto-downloads the latest `criminal.py` if you're outdated.
2. **Main menu** — choose the mode:
   ```
   [1] Fortnite via Xbox  [Full Capture using Microsoft authentication]
   > 1
   ```
3. **Display mode** — when asked `cui/log`:
   - `criminal` → the full colored CUI (recommended)
   - `log` → a simpler text log
4. **Config review** — your current config is shown:
   ```
   -- Proxy: False
   -- Threads: 1000
   -- Timeout: 6000
   -- Are you happy with this config? (y to start checking, n to edit)
   ```
   - Type `y` to start immediately.
   - Type `n` to edit proxy usage, proxy type, threads, timeout, and retries step by step. Your answers are saved back to `config/criminal.cfg`.
5. **Import** — the checker loads your combos (and proxies, if enabled) and tells you how many lines were imported after removing duplicates.
6. **Checking starts** — threads spin up and the live UI shows your progress and hits.

---

## 6. Read your results

Every run creates a timestamped folder inside **`Results/`**, for example:

```
Results/Normal Mode-(criminal)-[06-06-2026 14-30-00]/
```

Inside, hits are sorted automatically. For skins:

- **Unobtainable / OG skins** → saved in their own file.
- **Other accounts** → grouped by skin quantity (e.g. `1-9`, `10-49`, …).

Other captures (V-Bucks, FA/NFA, Save the World, wins, level, country, 2FA, etc.) are saved alongside the hit details. If your Discord webhook is enabled, hits are also pushed there in real time.

---

## 7. Tips & best practices

- **Start small.** Test with a small combolist first to confirm everything works.
- **Use proxies** if you check large lists, and **lower the threads** if you get rate-limited or lots of failures.
- **Tune the timeout.** Slow proxies need a higher timeout; fast direct connections can use a lower one.
- **Keep Python 3.12** for the smoothest experience.
- **Back up your hits.** The `Results/` folder is git-ignored — copy out anything you want to keep.

---

## 8. Common problems

| Problem | Fix |
|---|---|
| `No Combos files found` | Put at least one `.txt` file in `combos/`. |
| `ModuleNotFoundError` | Re-run `pip install -r requirements.txt`; confirm Python 3.12. |
| Everything fails / banned proxies | Use fresh proxies, lower threads, raise timeout. |
| `py` not recognized | Use `python criminal.py` instead, or reinstall Python with PATH enabled. |
| Stuck on "Checking for updates" | Check your internet connection; the tool fetches the version file from GitHub. |

---

Need more help? Join the Discord: **https://discord.gg/VVbZv9sGVE**
