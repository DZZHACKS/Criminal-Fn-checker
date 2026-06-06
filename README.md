# 🔪 CRIMINAL CHECKER

![Criminal Checker](https://cdn.discordapp.com/attachments/1312163374204719105/1333702740945141821/Capture_decran_2025-01-28_060249.png?ex=6799daf8&is=67988978&hm=bb2fca72594dd50c1addf789762312cdc4237910d38aab27650494bf174d9e18&)

**Criminal Checker** is an open-source Fortnite account checker that uses Microsoft authentication and captures a large amount of account information, including skins.

> 💬 **Discord:** https://discord.gg/VVbZv9sGVE
> 📖 **Full step-by-step tutorial:** [TUTORIAL.md](TUTORIAL.md) · 🇫🇷 [Tutoriel en français](TUTORIAL.fr.md)

> ⚠️ **Disclaimer / Avertissement**
> This tool is provided **for educational purposes only**. Only ever use it on accounts and combolists that **you own or are explicitly authorized to test**. Account checking against accounts you do not own may be illegal in your country and violates Epic Games' Terms of Service. **You are solely responsible for how you use this software.**

---

## ✨ Features

- **Full Capture Mode** – pulls every available detail from an account
- **Brute Mode**
- **Clean UI** with 3 CUI display modes + a Log mode
- **Multithreading** (up to 1000 threads)
- **Proxy scraper**
- **Combo editor** with 13 different modes

## 📦 What it captures

| Category | Details |
|---|---|
| **Skins** | Unobtainable / OG skins are saved separately; others are sorted by quantity (1–9, 10–49, etc.) |
| **Access** | NFA (non full access) or FA (full access) |
| **Currency** | V-Bucks |
| **Modes** | Save the World ownership |
| **Stats** | First active season, total wins, total level |
| **Cosmetics** | Backblings, gliders, pickaxes, emotes |
| **Security** | 2FA (two-factor authentication) status |
| **Account** | Country |

---

## 🚀 Installation

### Requirements

- **Windows** (the tool uses `win32api` / `pywin32` and Windows console calls)
- **Python 3.12** — recommended for best compatibility

### Steps

1. Download / clone this repository.
2. Open a terminal (`cmd`) **inside the project folder**.
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the checker:
   ```bash
   py criminal.py
   ```
   or, depending on your Python installation:
   ```bash
   python criminal.py
   ```

> 💡 **Trouble running it?** Uninstall Python, then reinstall **version 3.12** and make sure you tick **"Add Python to PATH"** during installation.

---

## 🧰 Quick start

1. Put your combos (`email:password`, one per line) in the **`combos/`** folder as a `.txt` file.
2. *(Optional)* Put your proxies in the **`proxies/`** folder.
3. Launch the checker and follow the on-screen menu.
4. Find your hits in the **`Results/`** folder once checking starts.

➡️ For a detailed walkthrough, see **[TUTORIAL.md](TUTORIAL.md)** (English) or **[TUTORIAL.fr.md](TUTORIAL.fr.md)** (français).

### Proxy format

```
ip:port
```
or
```
user:pass@ip:port
```

---

## 📁 Project structure

```
Criminal-Fn-checker/
├── criminal.py          # Main program
├── config/
│   └── criminal.cfg     # Configuration (threads, timeout, proxy, webhook…)
├── combos/              # Put your combolists (.txt) here
├── proxies/             # Put your proxies (.txt) here
├── Results/             # Created automatically — your captures land here
├── requirements.txt     # Python dependencies
├── cosdb.txt            # Cosmetics database
└── skins_database.txt   # Skins database
```

---

## ⚙️ Configuration

The settings live in `config/criminal.cfg` and can be edited directly or from the in-app menu (answer `n` when asked *"Are you happy with this config?"*).

| Setting | Description |
|---|---|
| `print_fail` | Print failed accounts in the console |
| `print_ms_hit` | Print Microsoft hits |
| `retries` | Number of retries per account |
| `timeout` | Request timeout (ms) |
| `threads` | Number of threads (max 1000) |
| `save_bad` | Save bad accounts to disk |
| `display_mode` | Console display mode (`criminal`) |
| `import_from_file` | Import combos/proxies via a file picker |
| `webhook.Webhook` | Enable/disable the Discord webhook |
| `webhook.WebhookID` | Your Discord webhook URL |
| `proxy.proxy` | Enable/disable proxies |
| `proxy.proxy_type` | `HTTP`, `SOCKS4` or `SOCKS5` |
| `proxy.proxy_api` | Pull proxies from an API |
| `proxy.api_link` | The proxy API URL |

> 🔐 **Tip:** the default config ships with a Discord webhook URL. Replace it with **your own** webhook (or disable webhooks) so your hits aren't sent to someone else.

---

## ❓ FAQ / Troubleshooting

- **`No Combos files found`** → Make sure you placed at least one `.txt` file inside the `combos/` folder.
- **`ModuleNotFoundError`** → Re-run `pip install -r requirements.txt` and confirm you're on Python 3.12.
- **Everything fails / rate-limited** → Use proxies and lower your thread count.
- **It says I'm on an outdated version** → The tool auto-downloads the latest `criminal.py` from this repo on startup.

---

## 📜 License

See [LICENSE](LICENSE).

> **Please don't resell this as your own.** It was made open source so people could have something nice for free and maybe learn some Python along the way — don't take advantage of that. 🙏
