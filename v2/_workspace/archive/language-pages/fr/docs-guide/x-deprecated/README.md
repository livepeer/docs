{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL1JFQURNRS5tZCIsInNvdXJjZVJvdXRlIjoiZG9jcy1ndWlkZSIsInNvdXJjZUhhc2giOiIzZjk3NzI5NWQ4YTUyMWRlMDg1NzgzMTU0MGQ3ZjBlOWJkMDMxZDdmZTI0OTVkZmNlYzg5MjViMGIwYmZhZDg2IiwibGFuZ3VhZ2UiOiJmciIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjE2OjAzLjcxN1oifQ== */}
# Guide des documents (source de vérité interne)

Ce dossier est la source de vérité interne pour la navigation des mainteneurs concernant les fonctionnalités et la fonctionnalité du dépôt. Il n'est pas fait partie de la navigation Mintlify dans`docs.json`; il existe pour maintenir les documents opérationnels accessibles, non redondants et maintenables.

## Modèle de source de vérité

- Comportement en temps réel : la source de vérité est le code et les tests.
- Navigation des fonctionnalités et des opérations : la source de vérité est ce`docs-guide/` dossier.
- UX / contenu des documents publics : la source de vérité est les pages Mintlify sous`v2/pages/`.
- Catalogues générés : la source de vérité est les scripts générateurs ; les fichiers générés sont en lecture seule.

Voir[source-of-truth-policy.md](./policies/source-of-truth-policy.mdx) pour les limites complètes.

## Commencez ici

| Si vous avez besoin de comprendre... | Fichier canonique |
|---|---|
| Gouvernance et propriété canonique | [source-of-truth-policy.md](./policies/source-of-truth-policy.mdx) |
| Carte complète des capacités du dépôt | [feature-map.mdx](./feature-map.mdx) |
| Flux de données et de contrôle entre les systèmes | [architecture-map.mdx](./features/architecture-map.mdx) |
| Comportement de la CLI et des manuels d'opérateur | [lpd.md](./tooling/lpd-cli.mdx) |
| Gates de validation et d'application | [quality-gates.md](./policies/quality-gates.mdx) |
| GitHub Actions, n8n et pipelines d'automatisation | [automation-pipelines.md](./features/automations.mdx) |
| Architecture de l'information et stratégie de contenu | [content-system.md](./frameworks/content-system.mdx) |
| APIs et intégrations de données externes | [data-integrations.mdx](./features/data-integrations.mdx) |
| Catalogue de scripts (généré) | [scripts-catalog.mdx](./catalog/scripts-catalog.mdx) |
| Catalogue de workflows (généré) | [workflows-catalog.mdx](./catalog/workflows-catalog.mdx) |
| Catalogue des modèles de problème/PR (généré) | [templates-catalog.mdx](./catalog/templates-catalog.mdx) |

## Règles de mise à jour

1. Mettez à jour les documents manuels lorsqu'il y a un changement dans le comportement, le processus, la propriété ou l'architecture.
2. Régénérez les catalogues générés lorsqu'il y a un changement dans les scripts, workflows ou modèles :
   - `node tools/scripts/generate-docs-guide-indexes.js --write`
   - `node tests/unit/script-docs.test.js --write --rebuild-indexes`
3. Maintenez`README.md` haut niveau et reliez aux fichiers de guide de documentation canoniques pour plus de détails.
4. Ne dupliquez pas les instructions procédurales longues entre README, docs de tests et docs-guide. Reliez aux pages canoniques au lieu de cela.

## Zones connexes

- Orientation racine :[`README.md`](../../../README.md)
- Guide des documents publics :[`documentation-guide.mdx`](../resources/documentation-guide/documentation-guide.mdx)
- Procédures des contributeurs :[`contribute/CONTRIBUTING/`](../../../contribute/CONTRIBUTING/)
- Matrices de tests et comportement de CI :[`tests/`](../../../tests/)
