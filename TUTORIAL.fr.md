# 📖 Criminal Checker — Tutoriel complet

> 🇬🇧 An English version of this tutorial is available: **[TUTORIAL.md](TUTORIAL.md)**

Ce guide t'accompagne de l'installation jusqu'à la lecture de tes résultats.

> ⚠️ **À utiliser de façon responsable.** Vérifie uniquement des comptes et des combolists qui t'appartiennent ou que tu es autorisé à tester. Tu es seul responsable de ton utilisation.

---

## 1. Prérequis

| Élément | Remarques |
|---|---|
| **Windows** | L'outil utilise des modules réservés à Windows (`pywin32`, commandes console). |
| **Python 3.12** | Recommandé. Pendant l'installation, coche **« Add Python to PATH »**. |
| **Une combolist** | Un fichier `.txt` avec un `email:motdepasse` par ligne. |
| **(Optionnel) Proxies** | Recommandés pour éviter les limites de requêtes. |

### Vérifier ton installation de Python

Ouvre `cmd` et tape :

```bash
python --version
```

Tu devrais voir quelque chose comme `Python 3.12.x`. Si la commande est introuvable, réinstalle Python 3.12 en cochant bien **« Add Python to PATH »**.

---

## 2. Installation

1. **Télécharge le projet** (bouton vert *Code* → *Download ZIP*, puis décompresse — ou `git clone`).
2. **Ouvre un terminal dans le dossier.** Dans le dossier du projet, tape `cmd` dans la barre d'adresse de l'explorateur de fichiers et appuie sur Entrée.
3. **Installe les dépendances :**
   ```bash
   pip install -r requirements.txt
   ```
   Attends la fin de l'installation.

---

## 3. Prépare tes fichiers

### Combos

1. Ouvre le dossier **`combos/`**.
2. Ajoute un fichier `.txt` contenant tes combos, un compte par ligne :
   ```
   email1@exemple.com:motdepasse1
   email2@exemple.com:motdepasse2
   ```
   > Le checker supprime automatiquement les lignes vides, les doublons et toute ligne sans `:`.

### Proxies (optionnel mais recommandé)

1. Ouvre le dossier **`proxies/`**.
2. Ajoute un fichier `.txt` avec un proxy par ligne, dans l'un de ces formats :
   ```
   ip:port
   user:pass@ip:port
   ```

---

## 4. Configuration (optionnel)

Tu peux modifier `config/criminal.cfg` avant le lancement, ou le faire dans l'application (voir l'étape 5). Réglages importants :

```yaml
checker:
  threads: 1000        # nombre de comptes vérifiés en parallèle (max 1000)
  timeout: 6000        # délai d'expiration des requêtes en ms
  retries: 1           # nombre de tentatives par compte
  webhook:
    Webhook: true                  # envoyer les hits sur Discord ?
    WebhookID: <ton-url-webhook>   # 🔐 remplace par TON PROPRE webhook
  proxy:
    proxy: false       # utiliser des proxies ?
    proxy_type: HTTP   # HTTP / SOCKS4 / SOCKS5
```

> 🔐 **Important :** la configuration fournie contient une URL de webhook qui **n'est pas la tienne**. Remplace `WebhookID` par ton propre webhook Discord, ou mets `Webhook: false`, pour que tes hits restent privés.

---

## 5. Lancer le checker

Dans ton terminal, lance :

```bash
py criminal.py
```
ou
```bash
python criminal.py
```

### Ce qui se passe au lancement

1. **Vérification des mises à jour** — l'outil compare ta version à celle du dépôt et télécharge automatiquement le dernier `criminal.py` si tu n'es pas à jour.
2. **Menu principal** — choisis le mode :
   ```
   [1] Fortnite via Xbox  [Full Capture using Microsoft authentication]
   > 1
   ```
3. **Mode d'affichage** — quand on te demande `cui/log` :
   - `criminal` → le CUI complet en couleur (recommandé)
   - `log` → un journal texte plus simple
4. **Vérification de la config** — ta configuration actuelle s'affiche :
   ```
   -- Proxy: False
   -- Threads: 1000
   -- Timeout: 6000
   -- Are you happy with this config? (y to start checking, n to edit)
   ```
   - Tape `y` pour démarrer immédiatement.
   - Tape `n` pour modifier étape par étape : usage des proxies, type de proxy, threads, timeout et retries. Tes réponses sont enregistrées dans `config/criminal.cfg`.
5. **Importation** — le checker charge tes combos (et tes proxies, si activés) et t'indique combien de lignes ont été importées après suppression des doublons.
6. **Le check démarre** — les threads se lancent et l'interface en direct affiche ta progression et tes hits.

---

## 6. Lire tes résultats

Chaque exécution crée un dossier horodaté dans **`Results/`**, par exemple :

```
Results/Normal Mode-(criminal)-[06-06-2026 14-30-00]/
```

À l'intérieur, les hits sont triés automatiquement. Pour les skins :

- **Skins inobtenables / OG** → enregistrés dans leur propre fichier.
- **Autres comptes** → regroupés par quantité de skins (ex. `1-9`, `10-49`, …).

Les autres captures (V-Bucks, FA/NFA, Save the World, victoires, niveau, pays, 2FA, etc.) sont enregistrées avec les détails du hit. Si ton webhook Discord est activé, les hits y sont aussi envoyés en temps réel.

---

## 7. Conseils & bonnes pratiques

- **Commence petit.** Teste d'abord avec une petite combolist pour vérifier que tout fonctionne.
- **Utilise des proxies** pour les grandes listes, et **baisse les threads** si tu es limité (rate-limit) ou si tu as beaucoup d'échecs.
- **Ajuste le timeout.** Des proxies lents nécessitent un timeout plus élevé ; une connexion directe rapide peut utiliser un timeout plus bas.
- **Garde Python 3.12** pour la meilleure compatibilité.
- **Sauvegarde tes hits.** Le dossier `Results/` est ignoré par git — copie ailleurs ce que tu veux conserver.

---

## 8. Problèmes courants

| Problème | Solution |
|---|---|
| `No Combos files found` | Mets au moins un fichier `.txt` dans `combos/`. |
| `ModuleNotFoundError` | Relance `pip install -r requirements.txt` ; confirme Python 3.12. |
| Tout échoue / proxies bannis | Utilise des proxies frais, baisse les threads, augmente le timeout. |
| `py` non reconnu | Utilise `python criminal.py`, ou réinstalle Python avec PATH activé. |
| Bloqué sur « Checking for updates » | Vérifie ta connexion internet ; l'outil récupère le fichier de version sur GitHub. |

---

Besoin d'aide ? Rejoins le Discord : **https://discord.gg/VVbZv9sGVE**
