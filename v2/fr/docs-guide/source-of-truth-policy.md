{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL3NvdXJjZS1vZi10cnV0aC1wb2xpY3kubWQiLCJzb3VyY2VSb3V0ZSI6ImRvY3MtZ3VpZGUvc291cmNlLW9mLXRydXRoLXBvbGljeSIsInNvdXJjZUhhc2giOiI0YTNiYzM5OWQ3ZDkyNjhlYzU3YzFhYWUyYmY0MmIwNWMxY2IxNGQ1YjU1Yzg0ZjIzNWNmZGExNDQ1NmFmNTdiIiwibGFuZ3VhZ2UiOiJmciIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjIwOjUwLjk0OVoifQ== */}
# Politique de source de vérité

Ce document définit les limites d'appartenance canoniques pour éviter le décalage entre README, docs-guide, tests docs et les pages Mintlify.

## Limites canoniques

| Préoccupation | Source canonique | Remarques |
|---|---|---|
| Comportement des scripts/runtimes | Code + tests | La vérité comportementale vit toujours dans le code exécutable et les tests de validation. |
| Métadonnées et inventaire des scripts | En-têtes de script + index générés | Les en-têtes de script alimentent la génération des index de script. |
| Carte de navigation des fonctionnalités du dépôt | `docs-guide/*.md` (fichiers canoniques manuels) | Source de vérité pour les mainteneurs internes. |
| Contenu des documents destinés aux utilisateurs publics | `v2/pages/**` | documents Mintlify dans `docs.json` navigation. |
| Comportement d'exécution des tests CI | Fichiers de workflow + scripts du test runner | Les résumés narratifs doivent lier ces fichiers. |
| Comportement d'entrée des problèmes/PR | `.github/ISSUE_TEMPLATE/*` + modèles de PR + workflows | L'index des modèles générés résume l'utilisation. |

## Fichiers canoniques obligatoires du docs-guide

Les fichiers suivants doivent exister et être non vides :

- `docs-guide/README.md`
- `docs-guide/feature-map.md`
- `docs-guide/architecture-map.md`
- `docs-guide/lpd.md`
- `docs-guide/quality-gates.md`
- `docs-guide/automation-pipelines.md`
- `docs-guide/content-system.md`
- `docs-guide/data-integrations.md`

## Fichiers d'index générés

Les fichiers suivants sont générés et ne doivent pas être modifiés directement :

- `docs-guide/scripts-index.md`
- `docs-guide/workflows-index.md`
- `docs-guide/templates-index.md`

Regénérer avec :

```bash
node tools/scripts/generate-docs-guide-indexes.js --write
node tests/unit/script-docs.test.js --write --rebuild-indexes
```

## Bannières des fichiers générés

Les fichiers générés et les fichiers mixtes générés doivent inclure une bannière standardisée en haut qui documente :

- script(s) de génération
- but
- quand relancer le générateur
- un avertissement ne pas modifier

Guidelines :

- Utilisez une bannière pour l'ensemble du fichier pour les fichiers entièrement générés.
- Utilisez une bannière pour fichiers mixtes pour les fichiers contenant uniquement des sections générées.
- Utilisez `unknown/external` lorsqu'on ne peut pas confirmer le générateur dans le dépôt.
- Ne modifiez pas directement les fichiers JSON générés ; les artefacts JSON doivent être inventoriés/signalements au lieu d'être commentés.

Si votre branche inclut l'utilitaire d'application de bannière générée, utilisez :

```bash
node tools/scripts/enforce-generated-file-banners.js --write
node tools/scripts/enforce-generated-file-banners.js --check
```

## Contrat du README

`README.md` est un document d'orientation, pas un manuel d'exploitation complet.

Il doit inclure :

- ce que le dépôt est
- comment exécuter rapidement (`lpd setup`, `lpd dev`, test de base)
- carte des fonctionnalités de haut niveau
- liens vers les fichiers docs-guide canoniques

Il ne doit pas dupliquer les procédures approfondies qui existent déjà dans :

- `docs-guide/`
- `tests/*.md`
- `contribute/CONTRIBUTING/*.md`
- `v2/resources/documentation-guide/*.mdx`

## Règles de gestion des changements

1. Tout changement de processus significatif doit mettre à jour le fichier docs-guide canonique pertinent dans la même PR.
2. Tout changement de script/workflow/modèle doit régénérer les index dans la même PR.
3. Si le README et les docs-guide sont en désaccord, les fichiers docs-guide canoniques sont considérés comme autoritaires pour la navigation opérationnelle.
