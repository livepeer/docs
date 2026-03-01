{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9HSVQtSE9PS1MubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HL0dJVC1IT09LUyIsInNvdXJjZUhhc2giOiJlZDFjNzFjNTQwY2M1ZTA2ZDFiY2IzMzQxMDQ2NzFmYTQyZjE5MDkxMDQxZWFmMmU2YzVkZDI3YTIyNzQxMjFkIiwibGFuZ3VhZ2UiOiJmciIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjE1OjI1LjQ4OFoifQ== */}
# Documentation des hooks Git

Ce document explique les hooks Git utilisés dans ce dépôt pour assurer la qualité du code et la conformité au guide de style.

## Aperçu

Les hooks Git sont des scripts qui s'exécutent automatiquement à certains points du workflow Git. Ce dépôt utilise un**hook pre-commit** pour :

1. **Assurer la conformité au guide de style** - Bloque les validations avec des violations de style
2. **Exécuter des scripts de vérification** - Valide la syntaxe et la structure
3. **Empêcher les erreurs courantes** - Détecte les erreurs avant qu'elles n'atteignent le dépôt

## Hook pre-commit

### Commandes du hook LPD

Utilisez l'CLI Livepeer Docs (`lpd`) pour gérer et inspecter les hooks :

```bash
lpd hooks install   # Install/update hooks from .githooks/
lpd hooks status    # Check if installed hook is current/executable
lpd hooks verify    # Run .githooks/verify.sh checks
lpd hooks info      # Print hooks, bypass flags, and override guidance
```

`lpd hooks info` est la référence de commande pour les scripts de hook, les indicateurs de bypass (`SKIP_*`) et les substitutions pour les humains.

### Ce qu'il fait

Le hook pre-commit s'exécute automatiquement lorsque vous exécutez `git commit`. Il vérifie :

#### Conformité au guide de style

- ❌ **Utilisation de ThemeData** - Bloque les importations dépréciées de `ThemeData` imports de `themeStyles.jsx`
- ❌ **Couleurs codées en dur** - Avertit sur les couleurs hexadécimales qui devraient utiliser des propriétés CSS personnalisées
- ⚠️ **Imports relatifs** - Avertit sur les chemins relatifs (devraient utiliser des chemins absolus depuis la racine)
- ⚠️ **Imports de @mintlify/components** - Avertit sur les importations inutiles (les composants sont globaux)
- ⚠️ **Imports de hooks React** - Avertit sur les importations inutiles de React (les hooks sont globaux)

#### Scripts de vérification

- ✅ **Syntaxe MDX** - Valide le frontmatter et la structure MDX de base
- ✅ **Syntaxe JSON** - Valide que les fichiers JSON sont parseables
- ✅ **Syntaxe de script shell** - Valide les scripts shell avec `bash -n`
- ✅ **Syntaxe JavaScript** - Valide les fichiers JS avec `node --check`
- ✅ **Mintlify config** - Valide `docs.json`/`mint.json` syntaxe
- ✅ **Chemins d'importation** - S'assure que les imports de fragments utilisent des chemins absolus
- ✅ **Validation du navigateur** - Teste les fichiers MDX dans un navigateur sans interface (si `mint dev` est en cours d'exécution)

#### Test Suite (Nouveau)

Le hook de pré-validation exécute maintenant la suite de tests complète sur les fichiers en attente de validation :

- ✅ **Tests de la charte de style** - Validation complète des règles de la charte de style
- ✅ **Validation MDX** - Vérifications avancées de la syntaxe et de la structure MDX
- ✅ **Tests d'orthographe** - Validation de l'orthographe en anglais britannique à l'aide de cspell
- ✅ **Contrôles de qualité** - Texte alternatif des images, complétude du frontmatter, validation des liens

La suite de tests s'exécute en mode rapide pour la pré-validation (seulement les fichiers en attente, les tests du navigateur sont ignorés). Pour un test complet, exécutez `npm test` manuellement ou vérifiez les résultats de la CI.

#### Synchronisation de l'index des pages générées

Le hook de pré-validation synchronise également les fichiers `v2/pages` index :

- `node tools/scripts/generate-pages-index.js --staged --write --stage`

Ce que cela fait :

- Regénère `index.mdx` pour les dossiers sous `v2/pages/`.
- Utilise une sortie de style de section avec les liens au niveau racine en premier, puis les titres de dossiers.
- Reconstruit l'agrégat racine à `v2/pages/index.mdx`.
- Supprime les fichiers `index.md` obsolètes dans `v2/pages/`.

### Installation

**Prérequis : **Avant d'installer les hooks git, vous devez installer les dépendances de test :

```bash
# Install dependencies (required for hooks to run tests)
cd tools && npm install
```

#### Installation automatique (recommandée)

```bash
# From repository root
./.githooks/install.sh
```

Ou exécutez le développement local avec :

```bash
lpd dev
# or without PATH setup
bash lpd dev
```

Cette commande installe/met à jour les hooks en premier, puis démarre `mint dev`.

**Remarque : **Si les dépendances ne sont pas installées, les hooks s'exécuteront quand même, mais les tests seront ignorés avec un avertissement. Installez les dépendances dans `tools/` pour une couverture complète des tests.

#### Installation manuelle

```bash
# Copy the hook
cp .githooks/pre-commit .git/hooks/pre-commit

# Make it executable
chmod +x .git/hooks/pre-commit

# Verify installation
ls -la .git/hooks/pre-commit
```

#### Pour les forks

Si vous forkiez ce dépôt, les hooks se trouvent dans `.githooks/` mais doivent être installés :

```bash
# Clone your fork
git clone <your-fork-url>
cd <repo-name>

# Install hooks
./.githooks/install.sh
```

**Remarque :**Les hooks Git ne sont pas contrôlés par version dans `.git/hooks/` (ils sont dans `.githooks/`), donc chaque développeur doit les installer.

### Comment ça marche

1. Quand vous exécutez `git commit`, le hook s'exécute automatiquement
2. Il analyse tous les fichiers mis en attente (`.jsx`, `.tsx`, `.js`, `.mdx`)
3. Vérifie les violations de la charte de style
4. Exécute les scripts de vérification
5. **Bloque le commit** si des violations sont trouvées
6. Affiche des messages d'erreur clairs avec des solutions

### Exemple de sortie

#### Succès

```
🔍 Checking style guide compliance...
Checking for ThemeData usage (deprecated)...
Checking for hardcoded colors...
Checking for relative imports...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 Running verification checks...
Checking MDX syntax...
Checking JSON syntax...
✓ All verification checks passed!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Style guide compliance check passed!
```

#### Échec

```
🔍 Checking style guide compliance...
Checking for ThemeData usage (deprecated)...
❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
╔═══════════════════════════════════════════════════════════════╗
║  STYLE GUIDE VIOLATIONS DETECTED - COMMIT BLOCKED           ║
╚═══════════════════════════════════════════════════════════════╝

Found 1 violation(s):

❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 MANDATORY: Read the Style Guide before committing:
   v2/resources/documentation-guide/style-guide.mdx

Key Rules:
  • Use CSS Custom Properties: var(--accent), var(--text), etc.
  • NEVER use ThemeData from themeStyles.jsx (deprecated)
  • NEVER hardcode hex colors that should adapt to theme
  • Use absolute imports: /snippets/components/...
  • Mintlify components are global (no imports needed)
  • React hooks are global (no imports needed)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Commit blocked. Fix violations and try again.
```

## Structure des fichiers

```
.githooks/
├── pre-commit          # Main pre-commit hook (source)
├── verify.sh           # Verification script (runs syntax checks)
├── install.sh          # Installation script
└── README.md           # Quick reference

.git/hooks/
└── pre-commit          # Active hook (installed from .githooks/)
```

## Validation dans le navigateur

Le hook pré-validation inclut **validation du navigateur en mode sans tête** pour détecter les fichiers MDX qui passent les vérifications de syntaxe mais échouent lors du rendu dans le navigateur.

### Comment ça marche

1. **Extrait les fichiers MDX mis en attente** - Ne teste que les fichiers que vous validez
2. **Convertit en URLs** - Mappe les chemins de fichiers aux URLs Mintlify
3. **Teste avec Puppeteer** - Visite chaque page dans Chrome en mode sans tête
4. **Vérifie les erreurs**:
   - Erreurs de la console
   - Erreurs de page
   - Échecs de rendu
   - Pages vides
   - Échecs de requête

### Exigences

- **Node.js** - Doit être installé
- **Puppeteer** - Doit être dans `package.json`dépendances de développement
- **Mintlify serveur** - `mint dev` doit être en cours d'exécution (ou définir `MINT_BASE_URL`)

### Utilisation

La validation du navigateur s'exécute automatiquement si :
- Puppeteer est installé (`npm install` ou dans `package.json`)
- `mint dev` est en cours d'exécution (ou `MINT_BASE_URL` est défini)

Si le serveur ne tourne pas, le contrôle est**sauté** (ne bloque pas le commit).

### Résultat exemple

```
🌐 Browser validation: Testing 3 staged MDX file(s)...
✅ Server accessible at http://localhost:3000

  Testing v2/resources/documentation-guide/style-guide.mdx... ✅
  Testing v2/resources/documentation-guide/snippets-inventory.mdx... ✅
  Testing v2/resources/documentation-guide/component-library.mdx... ❌
     Error: Failed to resolve import: /snippets/components/Component.jsx

✅ All 2 page(s) rendered successfully in browser
❌ 1 of 3 page(s) failed browser validation:

  v2/resources/documentation-guide/component-library.mdx:
    - Failed to resolve import: /snippets/components/Component.jsx

💡 Fix errors and try committing again.
```

### Performance

- **Limité à 10 pages** - Le pré-commit teste uniquement jusqu'à 10 fichiers MDX en attente
- **Délai de 15 secondes** - Chaque page a un délai de 15 secondes
- **Échec rapide** - S'arrête à la première erreur pour plus de vitesse

Pour un test complet du site, utilisez : `npm run test:v2-pages`

## Personnalisation

### Ajouter de nouvelles vérifications

#### Ajouter aux vérifications du guide de style

Éditer `.githooks/pre-commit` et ajouter une nouvelle section de vérification :

```bash
# Check 6: Your new check
echo "Checking for [your check]..."
for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        if grep -q "pattern-to-check" "$file" 2>/dev/null; then
            WARNINGS+=("❌ $file: Your error message")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
    fi
done
```

#### Ajouter au script de vérification

Éditer `.githooks/verify.sh` et ajouter une nouvelle vérification :

```bash
# Check 7: Your new verification
echo "Checking [your check]..."
if command -v your-tool &>/dev/null; then
    # Run your check
    if ! your-tool check "$file"; then
        WARNINGS+=("❌ $file: Your error message")
        VIOLATIONS=$((VIOLATIONS + 1))
    fi
fi
```

### Désactiver des vérifications spécifiques

Pour désactiver temporairement une vérification, commentez-la dans `.githooks/pre-commit`:

```bash
# Check 1: ThemeData import/usage (DEPRECATED)
# echo "Checking for ThemeData usage (deprecated)..."
# ... (commented out)
```

### Transformer les vérifications en avertissements au lieu d'erreurs

Changer le code de sortie ou supprimer l'incrémentation de violation :

```bash
# Warning only (doesn't block commit)
WARNINGS+=("⚠️  $file: Warning message")
# Don't increment VIOLATIONS

# Error (blocks commit)
WARNINGS+=("❌ $file: Error message")
VIOLATIONS=$((VIOLATIONS + 1))
```

## Boucler les hooks (non recommandé)

**⚠️ AVERTISSEMENT :** Ne bouclez les hooks que si vous avez une raison légitime et que vous comprenez les conséquences.

### Éditions protégées `.allowlist` (réservées aux humains)

Le hook de pré-commit protège `.allowlist` par défaut.

Si un humain a besoin intentionnellement de mettre à jour `.allowlist`, utilisez :

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

Cette suppression est limitée aux éditions `.allowlist` et exécute toujours toutes les autres vérifications de pré-commit.

### Suppressions protégées (réservées aux humains)

Le hook de pré-commit bloque les suppressions de fichiers en attente en dehors `tasks/` par défaut.

Si une personne souhaite intentionnellement autoriser les suppressions, utilisez :

```bash
git commit -m "Remove obsolete files" --trailer "allow-deletions=true"
```

Cette substitution est limitée aux suppressions et exécute toujours toutes les autres vérifications avant validation.

```bash
# Bypass pre-commit hook
git commit --no-verify -m "message"
```

**Pourquoi cela est déconseillé :**
- Contrevient à la conformité du guide de style
- Peut introduire des erreurs qui cassent la construction
- Rend la revue du code plus difficile
- Peut causer des problèmes pour d'autres développeurs

## Dépannage

### Le hook ne s'exécute pas

1. **Vérifiez si le hook est installé :**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **Vérifiez si le hook est exécutable :**
   ```bash
   chmod +x .git/hooks/pre-commit
   ```

3. **Réinstaller :**
   ```bash
   ./.githooks/install.sh
   ```

### Faux positifs

Si une vérification signale à tort du code valide :

1. **Vérifiez le guide de style** - Assurez-vous que votre code suit les directives
2. **Examinez le message d'erreur** - Le hook explique ce qui ne va pas
3. **Corrigez la violation** - Suivez les recommandations du guide de style
4. **Si c'est un bug** - Signalez-le ou corrigez le motif du hook

### Le hook est trop lent

Si le hook prend trop de temps :

1. **Vérifiez les scripts de vérification** - Certaines vérifications (comme la vérification Mintlify ) peuvent être lentes
2. **Rendez les vérifications facultatives** - Commentez les vérifications lentes pour le développement local
3. **Utilisez`--no-verify`** - Uniquement si absolument nécessaire (voir l'avertissement ci-dessus)

## Pour CI/CD

Ces hooks sont conçus pour le développement local. Pour CI/CD :

1. **Utilisez les équivalents GitHub Actions** plutôt que d'exécuter pre-commit directement.
2. **Portez les vérifications statiques aux fichiers modifiés dans les PRs** pour éviter de bloquer sur les dettes de l'ensemble du dépôt.
3. **Maintenez les balayages du navigateur sur l'ensemble du site** pour la sécurité d'exécution/affichage.

Cartographie CI actuelle :

- `.github/workflows/test-suite.yml` (`Docs CI - Content Quality Suite`)
  - PR : vérifications bloquantes sur les fichiers modifiés
    - guide de style, MDX, orthographe, qualité, liens/importations
    - application de la documentation des scripts sur les scripts modifiés
    - audit strict des liens V2 sur les pages de documentation modifiées
  - Exception PR d'intégration : `docs-v2 -> main`traite les échecs statiques des fichiers modifiés comme des recommandations
  - Exécute également les tests du navigateur depuis`docs.json`
  - Rapports via GitHub Step Summary (pas de commentaire PR)
- `.github/workflows/test-v2-pages.yml` (`Docs CI - V2 Browser Sweep`)
  - Balayage complet du navigateur V2
  - Publications/mises à jour, commentaires PR et chargement du fichier JSON
- `.github/workflows/broken-links.yml`
  - Conseil uniquement (non bloquant) pendant que le nettoyage des anciens liens est en cours

## Référence du guide de style

Les hooks appliquent les règles de :

- **Guide de style :** `v2/resources/documentation-guide/style-guide.mdx`
- **Bibliothèque de composants :** `v2/resources/documentation-guide/component-library.mdx`
- **Mintlify Comportement :** `snippets/snippetsWiki/mintlify-behaviour.mdx`

## Documentation associée

- [Guide de style](../v2/resources/documentation-guide/style-guide.mdx)
- [Bibliothèque de composants](../v2/resources/documentation-guide/component-library.mdx)
- [Guide de contribution](./CONTRIBUTING.md) (si présent)
- [Prérequis de l'agent](../PLAN/AGENT-PREREQUISITES.md)

## Support

Si vous rencontrez des problèmes :

1. Consultez cette documentation
2. Consultez le guide de style
3. Vérifiez `.githooks/README.md` pour une référence rapide
4. Ouvrez un problème ou posez une question dans le dépôt
