{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL3NvdXJjZS1vZi10cnV0aC1wb2xpY3kubWQiLCJzb3VyY2VSb3V0ZSI6ImRvY3MtZ3VpZGUvc291cmNlLW9mLXRydXRoLXBvbGljeSIsInNvdXJjZUhhc2giOiI0YTNiYzM5OWQ3ZDkyNjhlYzU3YzFhYWUyYmY0MmIwNWMxY2IxNGQ1YjU1Yzg0ZjIzNWNmZGExNDQ1NmFmNTdiIiwibGFuZ3VhZ2UiOiJlcyIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjEyOjIxLjg2OFoifQ== */}
# Política de Verdad

Este documento define los límites de propiedad canónicos para evitar desviaciones entre README, docs-guide, pruebas docs y páginas Mintlify.

## Límites Canónicos

| Cuestión | Fuente canónica | Notas |
|---|---|---|
| Comportamiento de script/ejecución | Código + pruebas | La verdad comportamental siempre vive en código ejecutable y pruebas de validación. |
| Metadatos y inventario de script | Encabezados de script + índices generados | Los encabezados de script alimentan la generación de índices de script. |
| Mapa de navegación de características del repositorio | `docs-guide/*.md` (archivos canónicos manuales) | Fuente de verdad para mantenedores internos. |
| Contenido de documentación orientado al usuario público | `v2/pages/**` | documentación Mintlify en `docs.json`navegación. |
| Comportamiento de ejecución de CI/pruebas | Archivos de flujo de trabajo + scripts del ejecutor de pruebas | Las resúmenes narrativos deben vincularse a estos archivos. |
| Comportamiento de entrada de problemas/PR | `.github/ISSUE_TEMPLATE/*` + plantillas de PR + flujos de trabajo | El índice de plantillas generadas resume el uso. |

## Archivos Canónicos de docs-guide Requeridos

Los siguientes archivos deben existir y no estar vacíos:

- `docs-guide/README.md`
- `docs-guide/feature-map.md`
- `docs-guide/architecture-map.md`
- `docs-guide/lpd.md`
- `docs-guide/quality-gates.md`
- `docs-guide/automation-pipelines.md`
- `docs-guide/content-system.md`
- `docs-guide/data-integrations.md`

## Archivos de Índice Generados

Los siguientes archivos se generan y no deben editarse directamente:

- `docs-guide/scripts-index.md`
- `docs-guide/workflows-index.md`
- `docs-guide/templates-index.md`

Regenerar con:

```bash
node tools/scripts/generate-docs-guide-indexes.js --write
node tests/unit/script-docs.test.js --write --rebuild-indexes
```

## Banderas de Archivos Generados

Los archivos generados y los archivos mezclados deben incluir una bandera estandarizada en la parte superior que documente:

- script(s) generador(es)
- propósito
- cuándo volver a ejecutar el generador
- una advertencia de no editar

Directrices:

- Use una bandera de archivo completo para archivos que estén completamente generados.
- Use una bandera de archivo mezclado para archivos que contengan solo secciones generadas.
- Use `unknown/external`cuando el generador no pueda confirmarse en-repo.
- No edite directamente archivos JSON generados; los artefactos JSON deben ser inventariados/informados en lugar de comentados.

Si su rama incluye la utilidad de enforcer de bandera generada, use:

```bash
node tools/scripts/enforce-generated-file-banners.js --write
node tools/scripts/enforce-generated-file-banners.js --check
```

## Contrato de README

`README.md`es un documento de orientación, no un manual de operaciones completo.

Debe incluir:

- qué es el repositorio
- cómo ejecutar rápidamente (`lpd setup`, `lpd dev`, prueba básica)
- mapa de características de alto nivel
- enlaces a archivos canónicos de docs-guide

No debe duplicar procedimientos profundos que ya existen en:

- `docs-guide/`
- `tests/*.md`
- `contribute/CONTRIBUTING/*.md`
- `v2/resources/documentation-guide/*.mdx`

## Reglas de gestión de cambios

1. Cualquier cambio significativo en un proceso debe actualizar el archivo canónico correspondiente de docs-guide en la misma PR.
2. Cualquier cambio en un script/flujograma/plantilla debe regenerar los índices en la misma PR.
3. Si README y docs-guide no coinciden, los archivos canónicos de docs-guide son los que tienen autoridad para la navegación operativa.
