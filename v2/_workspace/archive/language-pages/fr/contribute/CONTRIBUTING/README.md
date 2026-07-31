{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9SRUFETUUubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HIiwic291cmNlSGFzaCI6IjZkYTVmNzFhMjU2YzZkOTg5Mzg4YzVjZDQ0MWRmMzNjN2FhY2NhMWE4NTc5OWFhZWU2Y2U0N2Q3MjM4NmY5NDIiLCJsYW5ndWFnZSI6ImZyIiwicHJvdmlkZXIiOiJvcGVucm91dGVyIiwibW9kZWwiOiJxd2VuL3F3ZW4tdHVyYm8iLCJnZW5lcmF0ZWRBdCI6IjIwMjYtMDMtMDFUMTc6MTU6NDYuMzA1WiJ9 */}
# Contribuer à la documentation de Livepeer

Bienvenue ! Ce guide vous aidera à contribuer à la documentation de Livepeer.

## Démarrage rapide

1. **Lire le guide de style** - `v2/resources/documentation-guide/style-guide.mdx`
2. **Installer les hooks Git** - Voir [Documentation des hooks Git](./GIT-HOOKS.md)
3. **Fork et clone** - Créez votre fork et clonez-le localement
4. **Apporter des modifications** - Suivez le guide de style et la bibliothèque de composants
5. **Tester localement** - Exécutez `lpd dev` pour prévisualiser les modifications (installe/met à jour automatiquement les hooks). Si le PATH n'est pas encore mis à jour, utilisez `bash lpd dev`.
6. **Soumettre une PR** - Ouvrez une demande de tirage avec vos modifications

## Lecture essentielle

Avant de faire des modifications, lisez :

1. **[Guide de style](../../resources/documentation-guide/style-guide)** - Guides de style de qualité de production
2. **[Bibliothèque de composants](../v2/resources/documentation-guide/component-library.mdx)** - Composants disponibles
3. **[Hooks Git](./GIT-HOOKS.md)** - Documentation des hooks de pré-validation
4. **[Guide du comportement de Mintlify](../../snippets/snippetsWiki/mintlify-behaviour.mdx)** - Modèles spécifiques à Mintlify

## Hooks Git

Ce dépôt utilise des hooks Git pour imposer des normes de qualité.**Vous devez les installer :**

```bash
./.githooks/install.sh
```

Voir [Documentation des hooks Git](./GIT-HOOKS.md) pour plus de détails.

## Configuration de développement

```bash
# Install Mintlify CLI
npm i -g mintlify

# Run development server
lpd dev
# or without PATH setup
bash lpd dev

# Optional: add LP CLI script ignore rules
cp tools/cli/lpdignore.example .lpdignore
```

## Règles du guide de style

**Règles critiques :**

- ✅ Utilisez les propriétés CSS personnalisées : `var(--accent)`, `var(--text)`, etc.
- ❌ NE JAMAIS utiliser `ThemeData` de `themeStyles.jsx` (obsolète)
- ❌ NE JAMAIS coder en dur les couleurs hexadécimales qui devraient s'adapter au thème
- ✅ Utilisez les imports absolus : `/snippets/components/...`
- ✅ Les composants Mintlify sont globaux (aucun import nécessaire)
- ✅ Les hooks React sont globaux (aucun import nécessaire)

## Tests

Avant de soumettre :

- [ ] Exécutez `lpd dev` (ou `bash lpd dev`) et vérifiez que les pages s'affichent correctement
- [ ] Testez en mode clair et en mode sombre
- [ ] Vérifiez que tous les liens fonctionnent
- [ ] Assurez-vous qu'il n'y ait pas d'erreurs dans la console
- [ ] Assurez-vous que les hooks git passent (ils s'exécutent automatiquement lors de l'envoi)

## Ressources

- [Guide de documentation](../../resources/documentation-guide/documentation-guide)
- [Contribuer aux docs](../../resources/documentation-guide/contribute-to-the-docs)
- [Inventaire des extraits](../../resources/documentation-guide/snippets-inventory)
