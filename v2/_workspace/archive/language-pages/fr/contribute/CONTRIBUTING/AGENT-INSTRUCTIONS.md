{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9BR0VOVC1JTlNUUlVDVElPTlMubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HL0FHRU5ULUlOU1RSVUNUSU9OUyIsInNvdXJjZUhhc2giOiIzMzM5ZDA2MTlmMjYyMjcwOTk0ODM4ZGNiNzA0ZTYzYmVkN2Q4NGNlYWZjMDY5ZDk2Y2U1MzllODg0ZTllMjBjIiwibGFuZ3VhZ2UiOiJmciIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjE0OjA2LjU2OVoifQ== */}
# Instructions pour les agents sur les hooks Git

Ce document fournit des instructions spécifiques pour les agents IA travaillant sur ce dépôt.

## OBLIGATOIRE : Installer les hooks Git

Avant de faire des modifications, les agents doivent absolument s'assurer que les hooks Git sont installés :

```bash
./.githooks/install.sh
```

## Fonctionnement des hooks

Le hook pre-commit s'exécute automatiquement lorsque vous essayez de valider. Il :

1. **Analyse les fichiers en attente** - Vérifie tous les `.jsx`, `.tsx`, `.js`, `.mdx` fichiers
2. **Exécute des vérifications de style** - Valide selon les règles du guide de style
3. **Exécute des vérifications** - Exécute des vérifications de syntaxe et de validation
4. **Bloque les validations** - Empêche les validations avec des violations

## Ce qui est vérifié

### Violations du guide de style (Bloque la validation)

- `ThemeData` ou `themeStyles.jsx` imports → **BLOQUÉ**
- Couleurs de thème codées en dur (`#3CB540`, `#2b9a66`, etc.) → **BLOQUÉ**
- Imports relatifs vers des extraits → **AVERTISSEMENT**
- `@mintlify/components` imports → **AVERTISSEMENT**
- Imports de hooks React → **AVERTISSEMENT**

### Vérifications de validation (Bloque la validation)

- Frontmatter MDX invalide → **BLOQUÉ**
- Syntaxe JSON invalide → **BLOQUÉ**
- Erreurs de syntaxe des scripts shell → **BLOQUÉ**
- Erreurs de syntaxe JavaScript → **BLOQUÉ**
- Configuration Mintlify invalide → **BLOQUÉ**
- Échec du rendu dans le navigateur → **BLOQUÉ** (si `mint dev` est en cours d'exécution)

## Processus de l'agent

### Avant de valider

1. **Vérifier que le hook est installé :**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **Stager vos modifications :**
   ```bash
   git add <files>
   ```

3. **Essayer de valider**(le hook s'exécute automatiquement) :
   ```bash
   git commit -m "your message"
   ```

4. **Si bloqué :**
   - Lire les messages d'erreur
   - Corriger les violations
   - Réessayer de valider

### Violations courantes et solutions

#### Utilisation de ThemeData

**Erreur :**
```
❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead
```

**Solution :**
```jsx
// ❌ WRONG
import { ThemeData } from "/snippets/styles/themeStyles.jsx";
<div style={{ color: ThemeData.light.accent }}>

// ✅ CORRECT
<div style={{ color: "var(--accent)" }}>
```

#### Couleurs codées en dur

**Erreur :**
```
⚠️  file.mdx: Contains hardcoded theme colors - use CSS Custom Properties
```

**Solution :**
```jsx
// ❌ WRONG
<div style={{ color: "#3CB540" }}>

// ✅ CORRECT
<div style={{ color: "var(--accent)" }}>
```

#### Imports relatifs

**Erreur :**
```
⚠️  file.jsx: Uses relative imports - use absolute paths from root
```

**Solution :**
```jsx
// ❌ WRONG
import { Component } from "../components/Component.jsx";

// ✅ CORRECT
import { Component } from "/snippets/components/Component.jsx";
```

## Contournement des hooks

**⚠️ CRITIQUE :**Les agents DOIVENT absolument ne pas contourner les hooks sans permission explicite de l'utilisateur.

La gouvernance canonique des agents dans `AGENTS.md` et `docs-guide/policies/agent-governance-framework.mdx` indique explicitement :
- **JAMAIS** utiliser le drapeau `--no-verify` pour contourner les hooks
- C'est une contrainte de projet rigoureuse

Si vous rencontrez un faux positif :
1. Signalez-le à l'utilisateur
2. Demandez des instructions
3. Ne contournez pas le hook

Si une personne doit explicitement modifier `.allowlist`, elle doit valider avec :

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

Si une personne doit explicitement autoriser la suppression de fichiers, elle doit valider avec :

```bash
git commit -m "Remove obsolete files" --trailer "allow-deletions=true"
```

## Validation du navigateur

Le hook inclut une **validation du navigateur sans tête** qui teste si les fichiers MDX s'affichent correctement dans le navigateur.

### Exigences

- `mint dev`doit être en cours d'exécution (ou définir la variable d'environnement `MINT_BASE_URL` )
- Puppeteer doit être installé ("`npm install`" ou dans "`package.json`")

### Comment ça marche

1. Extrait les fichiers MDX mis en attente
2. Convertit les chemins de fichiers en URLs
3. Teste chaque page dans Chrome en mode sans tête à l'aide de Puppeteer
4. Vérifie les :
   - Erreurs de la console
   - Erreurs de page
   - Échecs de rendu
   - Pages vides

### Si le serveur ne tourne pas

Si `mint dev` ne tourne pas, la validation du navigateur est **sautée** (ne bloque pas le commit). Cela rend le hook rapide pour le développement local.

### Pour un test complet

Pour tester toutes les pages (et non seulement les pages mises en attente) :
```bash
npm run test:v2-pages
```

## Tests des hooks

Pour tester si les hooks fonctionnent :

```bash
# Create a test file with a violation
echo 'import { ThemeData } from "/snippets/styles/themeStyles.jsx";' > test-violation.jsx
git add test-violation.jsx
git commit -m "test"  # Should be blocked

# Clean up
rm test-violation.jsx
git reset HEAD test-violation.jsx
```

### Test de la validation du navigateur

```bash
# Start mint dev in one terminal
mint dev

# In another terminal, create a test MDX file
echo '---\ntitle: Test\n---\n# Test' > v2/pages/test.mdx
git add v2/pages/test.mdx
git commit -m "test browser validation"  # Will test in browser
```

## Dépannage

### Le hook ne tourne pas

```bash
# Reinstall
./.githooks/install.sh

# Verify
ls -la .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### Erreurs du hook

Si le hook lui-même a des erreurs :

1. Vérifier la `.githooks/pre-commit` syntaxe
2. Vérifier la `.githooks/verify.sh` syntaxe
3. Exécuter manuellement : `bash .githooks/pre-commit`
4. Signaler les problèmes à l'utilisateur

## Pour les forks

Lorsque vous travaillez sur un fork :

1. Cloner le fork
2. Installer les hooks : `./.githooks/install.sh`
3. Les hooks fonctionneront de la même manière

## Documentation associée

- [Documentation complète sur les hooks Git](./GIT-HOOKS)
- [Guide de style](../../resources/documentation-guide/style-guide)
- [Prérequis de l'agent](../../PLAN/AGENT-PREREQUISITES.md)
- [Cadre de gouvernance des agents](../../../../docs-guide/policies/agent-governance-framework.mdx)
- [Gouvernance de la allowlist racine](../../../../docs-guide/policies/root-allowlist-governance.mdx)
