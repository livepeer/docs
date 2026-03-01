---
title: Index des scripts
sidebarTitle: Index des scripts
description: >-
  Cette page fournit un inventaire catégorisé des scripts du dépôt générés à
  partir des index de scripts de groupe.
keywords:
  - livepeer
  - scripts index
  - aggregate inventory
  - repository
  - scripts
---
{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL3NjcmlwdHMtaW5kZXgubWQiLCJzb3VyY2VSb3V0ZSI6ImRvY3MtZ3VpZGUvc2NyaXB0cy1pbmRleCIsInNvdXJjZUhhc2giOiIxNmZhYWQ1ZmUxNTI5ODkwZGQxMTQwOTg3N2E2MTVhNTE2N2UzZjgxNTBjOTIzYzdiNjUzNzY2NmJmNDA2M2MwIiwibGFuZ3VhZ2UiOiJmciIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjIwOjI4LjExNloifQ== */}
<Note>
**Generation Script**: This file is generated from script(s): `tests/unit/script-docs.test.js`. <br/>
**Purpose**: Enforce script header schema, keep group script indexes in sync, and build aggregate script index. <br/>
**Run when**: Scripts are added, removed, renamed, or script metadata changes in scoped roots. <br/>
**Important**: Do not manually edit this file; run `node tests/unit/script-docs.test.js --write --rebuild-indexes`. <br/>
</Note>

## .githooks

| Script | Résumé | Utilisation | Propriétaire |
|---|---|---|---|
| `.githooks/install.sh` | Script utilitaire pour .githooks/install.sh. | `bash .githooks/install.sh` | docs |
| `.githooks/pre-commit` | Hook pré-validation pour la validation du dépôt | `./.githooks/pre-commit (or invoked automatically by git)` | docs |
| `.githooks/pre-commit-no-deletions` | Script utilitaire pour .githooks/pre-commit-no-deletions. | `node .githooks/pre-commit-no-deletions` | docs |
| `.githooks/server-manager.js` | Script utilitaire pour .githooks/server-manager.js. | `node .githooks/server-manager.js` | docs |
| `.githooks/verify-browser.js` | Script utilitaire pour .githooks/verify-browser.js. | `node .githooks/verify-browser.js` | docs |
| `.githooks/verify.sh` | Script utilitaire pour .githooks/verify.sh. | `bash .githooks/verify.sh` | docs |

## .github/scripts

| Script | Résumé | Utilisation | Propriétaire |
|---|---|---|---|
| `.github/scripts/embed-table.js` | Emplacement de script utilitaire CI réservé pour les tâches d'intégration de tableaux markdown. | `node .github/scripts/embed-table.js` | docs |
| `.github/scripts/fetch-forum-data.js` | Script utilitaire pour .github/scripts/fetch-forum-data.js. | `node .github/scripts/fetch-forum-data.js` | docs |
| `.github/scripts/fetch-ghost-blog-data.js` | Script utilitaire pour .github/scripts/fetch-ghost-blog-data.js. | `node .github/scripts/fetch-ghost-blog-data.js` | docs |
| `.github/scripts/fetch-youtube-data.js` | Script utilitaire pour .github/scripts/fetch-youtube-data.js. | `node .github/scripts/fetch-youtube-data.js` | docs |
| `.github/scripts/gen-table.js` | Emplacement de script utilitaire CI réservé pour la sortie de tableau générée. | `node .github/scripts/gen-table.js` | docs |
| `.github/scripts/gen-textareas.js` | Emplacement de script utilitaire CI réservé pour les tâches de génération de zone de texte. | `node .github/scripts/gen-textareas.js` | docs |
| `.github/scripts/project-showcase-sync.js` | Script utilitaire pour .github/scripts/project-showcase-sync.js. | `node .github/scripts/project-showcase-sync.js` | docs |

## tests

| Script | Résumé | Utilisation | Propriétaire |
|---|---|---|---|
| `tests/integration/browser.test.js` | Script utilitaire pour tests/integration/browser.test.js. | `node tests/integration/browser.test.js` | docs |
| `tests/integration/domain-pages-audit.js` | Audit du statut de chargement de la page de documentation déployée et émission d'un rapport JSON stable. | `node tests/integration/domain-pages-audit.js --version both` | docs |
| `tests/integration/v2-link-audit.js` | Audit complet des liens MDX V2 avec vérifications strictes internes et validation facultative des URL externes. | `node tests/integration/v2-link-audit.js --full --write-links --strict` | docs |
| `tests/integration/v2-link-audit.selftest.js` | Tests unitaires au niveau du script pour la validation externe de l'audit des liens V2 à l'aide d'une fixture HTTP locale et d'un fichier MDX temporaire. | `node tests/integration/v2-link-audit.selftest.js` | docs |
| `tests/integration/v2-wcag-audit.js` | Audit des pages de navigation docs.json V2 pour l'accessibilité (WCAG 2.2 AA) avec des rapports déterministes et des corrections automatiques conservatrices des sources. | `node tests/integration/v2-wcag-audit.js --full` | docs |
| `tests/integration/v2-wcag-audit.selftest.js` | Tests unitaires au niveau du script pour l'audit WCAG v2 (exécution locale HTTP + axe Puppeteer, et comportement de correction/fixation de fichier temporaire sans Mintlify). | `node tests/integration/v2-wcag-audit.selftest.js` | docs |
| `tests/run-all.js` | Script utilitaire pour tests/run-all.js. | `node tests/run-all.js` | docs |
| `tests/run-pr-checks.js` | Vérifications de validation portées sur les fichiers modifiés pour le CI des demandes de tirage. | `node tests/run-pr-checks.js --base-ref main` | docs |
| `tests/unit/docs-guide-sot.test.js` | Valider la couverture de la source de vérité du guide des documents, les références du README et la fraîcheur de l'index généré. | `node tests/unit/docs-guide-sot.test.js` | docs |
| `tests/unit/docs-navigation.test.js` | Valider la syntaxe des entrées de page docs.json, signaler les routes manquantes, suggérer des remappages et appliquer éventuellement des remappages approuvés. | `./lpd tests unit docs-navigation.test` | docs |
| `tests/unit/docs-usefulness-accuracy-verifier.test.js` | Valider les règles d'exactitude pondérée par la source pour 2026 (précédence GitHub vs DeepWiki, fraîcheur, fallback et réutilisation du cache). | `node tests/unit/docs-usefulness-accuracy-verifier.test.js` | docs |
| `tests/unit/links-imports.test.js` | Script utilitaire pour tests/unit/links-imports.test.js. | `node tests/unit/links-imports.test.js` | docs |
| `tests/unit/mdx-guards.test.js` | Appliquer les règles de sécurité pour les imports globaux, les délimiteurs mathématiques et les sauts de ligne des tableaux markdown. | `node tests/unit/mdx-guards.test.js` | docs |
| `tests/unit/mdx.test.js` | Script utilitaire pour tests/unit/mdx.test.js. | `node tests/unit/mdx.test.js` | docs |
| `tests/unit/quality.test.js` | Script utilitaire pour tests/unit/quality.test.js. | `node tests/unit/quality.test.js` | docs |
| `tests/unit/script-docs.test.js` | Appliquer le schéma d'en-tête de script, maintenir les index de scripts de groupe synchronisés et construire l'index de script global. | `node tests/unit/script-docs.test.js --staged --write --stage --autofill` | docs |
| `tests/unit/spelling.test.js` | Script utilitaire pour tests/unit/spelling.test.js. | `node tests/unit/spelling.test.js` | docs |
| `tests/unit/style-guide.test.js` | Script utilitaire pour tests/unit/style-guide.test.js. | `node tests/unit/style-guide.test.js` | docs |
| `tests/unit/v2-link-audit.test.js` | Tests unitaires pour les arguments d'audit des liens v2, les helpers de validation externe et le comportement d'exclusion de portée x-*. | `node tests/unit/v2-link-audit.test.js` | docs |
| `tests/unit/v2-wcag-audit.test.js` | Tests unitaires pour la logique du helper d'audit WCAG v2 (arguments, seuils, mappage de route, tri du rapport et correctifs automatiques conservateurs). | `node tests/unit/v2-wcag-audit.test.js` | docs |
| `tests/utils/file-walker.js` | Script utilitaire pour tests/utils/file-walker.js. | `node tests/utils/file-walker.js` | docs |
| `tests/utils/mdx-parser.js` | Script utilitaire pour tests/utils/mdx-parser.js. | `node tests/utils/mdx-parser.js` | docs |
| `tests/utils/spell-checker.js` | Script utilitaire pour tests/utils/spell-checker.js. | `node tests/utils/spell-checker.js` | docs |

## tools/scripts

| Script | Résumé | Utilisation | Propriétaire |
|---|---|---|---|
| `tools/scripts/audit-all-pages-simple.js` | Script utilitaire pour tasks/scripts/audit-all-pages-simple.js. | `node tasks/scripts/audit-all-pages-simple.js` | docs |
| `tools/scripts/audit-all-pages.js` | Script utilitaire pour tasks/scripts/audit-all-pages.js. | `node tasks/scripts/audit-all-pages.js` | docs |
| `tools/scripts/audit-all-v2-pages.js` | Script utilitaire pour tools/scripts/audit-all-v2-pages.js. | `node tools/scripts/audit-all-v2-pages.js` | docs |
| `tools/scripts/audit-component-usage.js` | Script utilitaire pour tools/scripts/audit-component-usage.js. | `node tools/scripts/audit-component-usage.js` | docs |
| `tools/scripts/audit-scripts.js` | Audit des scripts exécutables du dépôt complet, catégoriser l'utilisation/la superposition et remplacer les rapports SCRIPT_AUDIT. | `node tools/scripts/audit-scripts.js` | docs |
| `tools/scripts/audit-tasks-folders.js` | Audit des dossiers de tâches, normaliser éventuellement les emplacements des rapports, et appliquer éventuellement les recommandations d'audit avec des déplacements sans conflit. | `node tools/scripts/audit-tasks-folders.js` | docs |
| `tools/scripts/audit-v2-usefulness.js` | Audit des pages MDX v2 (à l'exception des répertoires x-*) et émettre des lignes de matrice de pertinence au niveau de la page avec des champs de vérification d'exactitude pondérée par la source pour 2026. | `node tools/scripts/audit-v2-usefulness.js --mode full --accuracy-mode tiered` | docs |
| `tools/scripts/check-component-errors.js` | Script utilitaire pour tools/scripts/check-component-errors.js. | `node tools/scripts/check-component-errors.js` | docs |
| `tools/scripts/convert-rss-to-mdx.js` | Convertir un fichier XML d'abonnement RSS en un document MDX structuré. | `node tools/scripts/convert-rss-to-mdx.js --input v2/internal/assets/transcripts/ycomb.rss --output v2/internal/assets/transcripts/ycomb.mdx` | docs |
| `tools/scripts/debug-mint-dev.js` | Script utilitaire pour tools/scripts/debug-mint-dev.js. | `node tools/scripts/debug-mint-dev.js` | docs |
| `tools/scripts/deprecated/project-management-output-script.js` | Script de sortie de gestion de projet obsolète conservé comme modèle de référence. | `node tools/scripts/deprecated/project-management-output-script.js` | docs |
| `tools/scripts/dev/add-callouts.js` | Script utilitaire pour tools/scripts/dev/add-callouts.js. | `node tools/scripts/dev/add-callouts.js` | docs |
| `tools/scripts/dev/batch-update-og-image.sh` | Script utilitaire pour tools/scripts/dev/batch-update-og-image.sh. | `bash tools/scripts/dev/batch-update-og-image.sh` | docs |
| `tools/scripts/dev/ensure-mint-watcher-patch.sh` | Assurer que le vérificateur Mint local-preview désactive l'expansion glob dans les chemins du dépôt. | `bash tools/scripts/dev/ensure-mint-watcher-patch.sh --check` | docs |
| `tools/scripts/dev/replace-og-image.py` | Script utilitaire pour tools/scripts/dev/replace-og-image.py. | `python3 tools/scripts/dev/replace-og-image.py` | docs |
| `tools/scripts/dev/seo-generator-safe.js` | Script utilitaire pour tools/scripts/dev/seo-generator-safe.js. | `node tools/scripts/dev/seo-generator-safe.js` | docs |
| `tools/scripts/dev/test-add-callouts.js` | Script utilitaire pour tools/scripts/dev/test-add-callouts.js. | `node tools/scripts/dev/test-add-callouts.js` | docs |
| `tools/scripts/dev/test-seo-generator.js` | Script utilitaire pour tools/scripts/dev/test-seo-generator.js. | `node tools/scripts/dev/test-seo-generator.js` | docs |
| `tools/scripts/dev/update-all-og-images.js` | Script utilitaire pour tools/scripts/dev/update-all-og-images.js. | `node tools/scripts/dev/update-all-og-images.js` | docs |
| `tools/scripts/dev/update-og-image.js` | Script utilitaire pour tools/scripts/dev/update-og-image.js. | `node tools/scripts/dev/update-og-image.js` | docs |
| `tools/scripts/download-linkedin-video.sh` | Script utilitaire pour tools/scripts/download-linkedin-video.sh. | `bash tools/scripts/download-linkedin-video.sh` | docs |
| `tools/scripts/download-linkedin-with-cookies.sh` | Script utilitaire pour tools/scripts/download-linkedin-with-cookies.sh. | `bash tools/scripts/download-linkedin-with-cookies.sh` | docs |
| `tools/scripts/final-verification.js` | Script utilitaire pour tools/scripts/final-verification.js. | `node tools/scripts/final-verification.js` | docs |
| `tools/scripts/find-correct-url.js` | Script utilitaire pour tools/scripts/find-correct-url.js. | `node tools/scripts/find-correct-url.js` | docs |
| `tools/scripts/generate-ai-sitemap.js` | Générer une carte du site axée sur l'IA à partir de la navigation des documents v2. | `node tools/scripts/generate-ai-sitemap.js --write` | docs |
| `tools/scripts/generate-docs-guide-components-index.js` | Générer docs-guide/components-index.mdx à partir des exports de snippets/components et vérifier éventuellement la fraîcheur. | `node tools/scripts/generate-docs-guide-components-index.js --write` | docs |
| `tools/scripts/generate-docs-guide-indexes.js` | Générer les index de workflow/template de docs-guide et vérifier éventuellement qu'ils sont à jour. | `node tools/scripts/generate-docs-guide-indexes.js --write` | docs |
| `tools/scripts/generate-docs-guide-pages-index.js` | Générer docs-guide/pages-index.mdx à partir des entrées v2/index.mdx filtrées pour les pages de navigation docs.json. | `node tools/scripts/generate-docs-guide-pages-index.js --write` | docs |
| `tools/scripts/generate-docs-index.js` | Générer docs-index.json et éventuellement compléter les métadonnées frontmatter v2. | `node tools/scripts/generate-docs-index.js --write` | docs |
| `tools/scripts/generate-llms-files.js` | Générer llms.txt et llms-full.txt à partir de la navigation des documents v2. | `node tools/scripts/generate-llms-files.js --write` | docs |
| `tools/scripts/generate-pages-index.js` | Générer et vérifier les fichiers index.mdx au format de section pour les dossiers des documents v2, ainsi que l'index global racine. | `node tools/scripts/generate-pages-index.js --write` | docs |
| `tools/scripts/i18n/test-mintlify-version-language-toggle.js` | Valider le comportement de basculement de version/langue Mintlify sur les routes v2 localisées. | `node tools/scripts/i18n/test-mintlify-version-language-toggle.js --base-url http://localhost:3012` | docs |
| `tools/scripts/inspect-page.js` | Script utilitaire pour tools/scripts/inspect-page.js. | `node tools/scripts/inspect-page.js` | docs |
| `tools/scripts/inspect-video-page.js` | Script utilitaire pour tools/scripts/inspect-video-page.js. | `node tools/scripts/inspect-video-page.js` | docs |
| `tools/scripts/mint-dev.sh` | Script utilitaire pour tools/scripts/mint-dev.sh. | `bash tools/scripts/mint-dev.sh` | docs |
| `tools/scripts/new-script.js` | Créer un nouveau fichier de script prérempli avec le modèle d'en-tête des documents requis. | `node tools/scripts/new-script.js --path tests/integration/my-script.js` | docs |
| `tools/scripts/publish-v2-internal-reports.js` | Dupliquer les rapports markdown approuvés dans les pages v2/internal/reports avec des métadonnées et mettre à jour docs.json. | `node tools/scripts/publish-v2-internal-reports.js --check` | docs |
| `tools/scripts/snippets/fetch-external-docs.sh` | Script utilitaire pour tools/scripts/snippets/fetch-external-docs.sh. | `bash tools/scripts/snippets/fetch-external-docs.sh` | docs |
| `tools/scripts/snippets/fetch-lpt-exchanges.sh` | Script utilitaire pour tools/scripts/snippets/fetch-lpt-exchanges.sh. | `bash tools/scripts/snippets/fetch-lpt-exchanges.sh` | docs |
| `tools/scripts/snippets/fetch-openapi-specs.sh` | Script utilitaire pour tools/scripts/snippets/fetch-openapi-specs.sh. | `bash tools/scripts/snippets/fetch-openapi-specs.sh` | docs |
| `tools/scripts/snippets/generate-api-docs.sh` | Script utilitaire pour tools/scripts/snippets/generate-api-docs.sh. | `bash tools/scripts/snippets/generate-api-docs.sh` | docs |
| `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | Script utilitaire pour tools/scripts/snippets/generate-data/scripts/generate-glossary.js. | `node tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | docs |
| `tools/scripts/snippets/generate-data/scripts/terminology-search.js` | Script utilitaire pour tools/scripts/snippets/generate-data/scripts/terminology-search.js. | `node tools/scripts/snippets/generate-data/scripts/terminology-search.js` | docs |
| `tools/scripts/snippets/generate-seo.js` | Script utilitaire pour tools/scripts/snippets/generate-seo.js. | `node tools/scripts/snippets/generate-seo.js` | docs |
| `tools/scripts/snippets/test-scripts.sh` | Script utilitaire pour tools/scripts/snippets/test-scripts.sh. | `bash tools/scripts/snippets/test-scripts.sh` | docs |
| `tools/scripts/snippets/update-component-library.sh` | Script utilitaire pour tools/scripts/snippets/update-component-library.sh. | `bash tools/scripts/snippets/update-component-library.sh` | docs |
| `tools/scripts/test-all-pages-browser.js` | Script utilitaire pour tools/scripts/test-all-pages-browser.js. | `node tools/scripts/test-all-pages-browser.js` | docs |
| `tools/scripts/test-all-pages-comprehensive.js` | Script utilitaire pour tools/scripts/test-all-pages-comprehensive.js. | `node tools/scripts/test-all-pages-comprehensive.js` | docs |
| `tools/scripts/test-v2-pages.js` | Script utilitaire pour tools/scripts/test-v2-pages.js. | `node tools/scripts/test-v2-pages.js` | docs |
| `tools/scripts/test-youtube-pages.js` | Script utilitaire pour tools/scripts/test-youtube-pages.js. | `node tools/scripts/test-youtube-pages.js` | docs |
| `tools/scripts/test/allowed-script.js` | Script utilitaire pour tools/scripts/test/allowed-script.js. | `node tools/scripts/test/allowed-script.js` | docs |
| `tools/scripts/test/allowed-test.js` | Script utilitaire pour tools/scripts/test/allowed-test.js. | `node tools/scripts/test/allowed-test.js` | docs |
| `tools/scripts/test/allowed.js` | Script utilitaire pour tools/scripts/test/allowed.js. | `node tools/scripts/test/allowed.js` | docs |
| `tools/scripts/test/check-component-errors.js` | Script utilitaire pour tools/scripts/test/check-component-errors.js. | `node tools/scripts/test/check-component-errors.js` | docs |
| `tools/scripts/test/final-verification.js` | Script utilitaire pour tools/scripts/test/final-verification.js. | `node tools/scripts/test/final-verification.js` | docs |
| `tools/scripts/test/find-correct-url.js` | Script utilitaire pour tools/scripts/test/find-correct-url.js. | `node tools/scripts/test/find-correct-url.js` | docs |
| `tools/scripts/test/inspect-page.js` | Script utilitaire pour tools/scripts/test/inspect-page.js. | `node tools/scripts/test/inspect-page.js` | docs |
| `tools/scripts/test/inspect-video-page.js` | Script utilitaire pour tools/scripts/test/inspect-video-page.js. | `node tools/scripts/test/inspect-video-page.js` | docs |
| `tools/scripts/test/test-youtube-pages.js` | Script utilitaire pour tools/scripts/test/test-youtube-pages.js. | `node tools/scripts/test/test-youtube-pages.js` | docs |
| `tools/scripts/test/verify-all-pages.js` | Script utilitaire pour tools/scripts/verify-all-pages.js. | `node tools/scripts/verify-all-pages.js` | docs |
| `tools/scripts/test/verify-pages.js` | Script utilitaire pour tools/scripts/verify-pages.js. | `node tools/scripts/verify-pages.js` | docs |
| `tools/scripts/transcribe-audio-to-mdx.js` | Télécharger l'audio à partir d'une URL, le découper avec ffmpeg, le transcrire via OpenRouter et écrire une page de transcription MDX. | `OPENROUTER_API_KEY=... node tools/scripts/transcribe-audio-to-mdx.js --audio-url "<url>" --title "<episode title>" --show "<show name>" --published-at YYYY-MM-DD` | docs |
| `tools/scripts/verify-all-pages.js` | Script utilitaire pour tools/scripts/verify-all-pages.js. | `node tools/scripts/verify-all-pages.js` | docs |
| `tools/scripts/verify-pages.js` | Script utilitaire pour tools/scripts/verify-pages.js. | `node tools/scripts/verify-pages.js` | docs |
| `tools/scripts/verify/.verify-large-change.sh` | Point d'ancrage de vérification réservé pour les vérifications de grandes modifications. | `bash tools/scripts/verify/.verify-large-change.sh` | docs |
| `tools/scripts/wcag-repair-common.js` | Appliquer des corrections conservatrices liées à WCAG sur les docs v2 (problèmes courants avec les balises brutes) et écrire des rapports de réparation déterministes. | `node tools/scripts/wcag-repair-common.js --full` | docs |

## tasks/scripts

| Script | Résumé | Utilisation | Propriétaire |
|---|---|---|---|
| `tasks/scripts/audit-minimal.js` | Script utilitaire pour tasks/scripts/audit-minimal.js. | `node tasks/scripts/audit-minimal.js` | docs |
| `tasks/scripts/audit-python.py` | Script utilitaire pour tasks/scripts/audit-python.py. | `python3 tasks/scripts/audit-python.py` | docs |
| `tasks/scripts/run-audit-now.js` | Script utilitaire pour tasks/scripts/run-audit-now.js. | `node tasks/scripts/run-audit-now.js` | docs |
| `tasks/scripts/test-audit.js` | Script utilitaire pour tasks/scripts/test-audit.js. | `node tasks/scripts/test-audit.js` | docs |
