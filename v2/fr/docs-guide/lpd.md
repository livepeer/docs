{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL2xwZC5tZCIsInNvdXJjZVJvdXRlIjoiZG9jcy1ndWlkZS9scGQiLCJzb3VyY2VIYXNoIjoiNGY3ZWQzZjFhYWJmOTliZjlkOTZhZDYyZjk0NjFhMzQ4MDQ3MTI0MzQ3ZDI5NzVkMDA1NmQzMzQ4ZTU0N2RmMyIsImxhbmd1YWdlIjoiZnIiLCJwcm92aWRlciI6Im9wZW5yb3V0ZXIiLCJtb2RlbCI6InF3ZW4vcXdlbi10dXJibyIsImdlbmVyYXRlZEF0IjoiMjAyNi0wMy0wMVQxNzoxODoyNi44ODVaIn0= */}
# Guide CLI LPD (Interne)

`lpd` est le CLI du dépôt pour l'installation, le développement local, l'orchestration des tests, la gestion des hooks et l'exécution des scripts.

## Modèle de commande

Groupes de commandes principaux :

- `lpd setup` - bootstrap des dépendances/hooks/connexion du CLI
- `lpd doctor` - vérifications de la préparation de l'environnement
- `lpd dev` - lancer le flux de développement des documents locaux
- `lpd test` - exécuter les ensembles de tests par portée
- `lpd ai-sitemap` - générer ou valider sitemap-ai.xml
- `lpd ci` - vérifications CI locales
- `lpd hooks` - installer/état/vérifier les hooks et l'exécution des scripts de hook
- `lpd scripts` - découvrir et exécuter les scripts gérés par groupe
- groupes raccourcis : `lpd tools ...`, `lpd tasks ...`, `lpd tests ...`, `lpd v2 ...`

## Runbooks principaux

### 1) Première configuration

```bash
bash lpd setup --yes
```

Résultats attendus :

- installe les dépendances (en fonction des indicateurs)
- installe/met à jour les hooks
- connecte éventuellement `lpd` sur le chemin d'accès pour l'utilisateur actuel

### 2) Développement des documents locaux

```bash
lpd dev
# fallback if PATH not yet refreshed
bash lpd dev
```

Variants utiles :

```bash
lpd dev --test --test-mode staged
lpd dev -- --port 3333
```

### 3) Points d'entrée des tests

```bash
lpd test --staged
lpd test --staged --wcag
lpd test --staged --link-audit-external
lpd test --full
lpd test --full --wcag
lpd test --full --wcag --wcag-no-fix
lpd test --full --link-audit-external
lpd test --browser
lpd ci --skip-browser
```

Remarques sur l'audit WCAG :

- `--wcag` exécute l'audit d'accessibilité v2 après le processus normal `lpd test` .
- En mode par défaut/rapide et `--staged` , `lpd` mappe WCAG à une exécution stagée, limitée (`--staged --max-pages 10`).
- En mode `--full` , `lpd` exécute l'audit complet v2 WCAG.
- L'autocorrection WCAG est activée par défaut pour la commande WCAG ; utilisez `--wcag-no-fix` pour basculer en mode suggestions uniquement.
- Les vérifications WCAG automatisées couvrent partiellement et ne remplacent pas l'audit manuel d'accessibilité.

Remarques sur l'audit des liens externes :

- `--link-audit-external` exécute `tests/integration/v2-link-audit.js` avec `--external-policy validate`.
- En mode par défaut/rapide et `--staged` , `lpd` mappe la portée de l'audit externe à `--staged`.
- En mode `--full` , `lpd` mappe la portée de l'audit externe à `--full`.
- Les sorties d'audit externe non nulles sont des conseils par défaut/vite et `--staged`, mais bloquantes dans `--full`.

### 3.5) Génération de carte du site par IA

```bash
lpd ai-sitemap --check
lpd ai-sitemap --write
```

### 4) Gestion des hooks

```bash
lpd hooks install
lpd hooks status
lpd hooks verify
lpd hooks info
```

### 5) Découverte et exécution des scripts

```bash
lpd scripts list --group tools
lpd scripts run tools generate-docs-guide-indexes -- --check
lpd tools dev test-add-callouts -- --help
lpd tools wcag-repair-common -- --staged --stage
```

### 6) Pipeline de traduction I18n (OpenRouter par défaut gratuit)

Les outils de traduction sont disponibles via la même interface de script gérée :

```bash
./lpd tools i18n translate-docs -- --help
./lpd tools i18n generate-localized-docs-json -- --help
./lpd tools i18n validate-generated -- --help
```

Remarques :

- `v2`les pages localisées sont générées sous `v2/<lang>/...` (par exemple `v2/es/...`, `v2/fr/...`, `v2/cn/...`)
- Le chinois simplifié utilise le code Mintlify `cn`; la CLI accepte `zh-CN` et le normalise en `cn`
- `v1` est volontairement laissé en anglais dans le déploiement actuel

Exécution locale typique (vraie traduction OpenRouter, une seule page) :

```bash
./lpd tools i18n translate-docs -- \
  --provider openrouter \
  --languages es \
  --scope-mode prefixes \
  --prefixes v2/about/livepeer-network \
  --max-pages 1 \
  --route-map /tmp/i18n-route-map.json \
  --report-json /tmp/i18n-translate-report.json
```

## Contraintes de découverte de script

- la découverte de script prend en charge les modèles racine `.lpdignore` 
- les scripts ignorés sont exclus des commandes de liste/exécution

Fichier de référence :

- `tools/cli/lpdignore.example`

## Propriété + Vérité

- Vérité du comportement de la CLI : `lpd`implémentation du script
- Vérité de la navigation opérationnelle : ce document + `docs-guide/README.md`

Pour un comportement de hook/test approfondi, utilisez :

- [`quality-gates.md`](./quality-gates.md)
- `contribute/CONTRIBUTING/GIT-HOOKS.md`
