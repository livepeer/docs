{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL1JFQURNRS5tZCIsInNvdXJjZVJvdXRlIjoiZG9jcy1ndWlkZSIsInNvdXJjZUhhc2giOiIzZjk3NzI5NWQ4YTUyMWRlMDg1NzgzMTU0MGQ3ZjBlOWJkMDMxZDdmZTI0OTVkZmNlYzg5MjViMGIwYmZhZDg2IiwibGFuZ3VhZ2UiOiJlcyIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjA3OjQzLjM1OVoifQ== */}
# Guía de Documentación (Fuente de Verdad Interna)

Esta carpeta es la fuente de verdad interna para la navegación de mantenimiento de las características y funcionalidades del repositorio. No forma parte de la navegación de Mintlify en `docs.json`; existe para mantener la documentación operativa descubrible, no duplicada y mantenible.

## Modelo de Fuente de Verdad

- Comportamiento en tiempo de ejecución: la fuente de verdad es el código y las pruebas.
- Navegación de características y operaciones: la fuente de verdad es esta `docs-guide/` carpeta.
- UX/contenido de documentación pública: la fuente de verdad son las páginas Mintlify bajo `v2/pages/`.
- Catálogos generados: la fuente de verdad son los scripts generadores; los archivos generados son de solo lectura.

Ver [source-of-truth-policy.md](./source-of-truth-policy.md) para conocer los límites completos.

## Empieza aquí

| Si necesitas entender... | Archivo canónico |
|---|---|
| Gobernanza y propiedad canónica | [source-of-truth-policy.md](./source-of-truth-policy.md) |
| Mapa completo de capacidades del repositorio | [feature-map.md](./feature-map.md) |
| Flujo de datos y control entre sistemas | [architecture-map.md](./architecture-map.md) |
| Comportamiento de la CLI y manuales de operación | [lpd.md](./lpd.md) |
| Puntos de validación y cumplimiento | [quality-gates.md](./quality-gates.md) |
| Acciones de GitHub, n8n y pipelines de automatización | [automation-pipelines.md](./automation-pipelines.md) |
| Arquitectura de información y estrategia de contenido | [content-system.md](./content-system.md) |
| APIs e integraciones con datos externos | [data-integrations.md](./data-integrations.md) |
| Catálogo de scripts (generado) | [scripts-index.md](./scripts-index.md) |
| Catálogo de flujos de trabajo (generado) | [workflows-index.md](./workflows-index.md) |
| Catálogo de plantillas de problemas/PR (generado) | [templates-index.md](./templates-index.md) |

## Reglas de Actualización

1. Actualiza la documentación manual cuando cambie el comportamiento, proceso, propiedad o arquitectura.
2. Regenera los catálogos generados cuando cambien los scripts, flujos de trabajo o plantillas:
   - `node tools/scripts/generate-docs-guide-indexes.js --write`
   - `node tests/unit/script-docs.test.js --write --rebuild-indexes`
3. Mantén `README.md` de alto nivel y enlázalos a los archivos de guía canónicos para obtener detalles profundos.
4. No dupliques la guía procedural larga entre README, documentación de pruebas y docs-guide. En lugar de eso, enlázalos a las páginas canónicas.

## Áreas Relacionadas

- Orientación de raíz: [`README.md`](../README.md)
- Guía de documentación pública: [`v2/resources/documentation-guide/`](../v2/resources/documentation-guide/)
- Procedimientos de contribuyente: [`contribute/CONTRIBUTING/`](../contribute/CONTRIBUTING/)
- Matrices de pruebas y comportamiento de CI: [`tests/`](../tests/)
