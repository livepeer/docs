{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL2xwZC5tZCIsInNvdXJjZVJvdXRlIjoiZG9jcy1ndWlkZS9scGQiLCJzb3VyY2VIYXNoIjoiNGY3ZWQzZjFhYWJmOTliZjlkOTZhZDYyZjk0NjFhMzQ4MDQ3MTI0MzQ3ZDI5NzVkMDA1NmQzMzQ4ZTU0N2RmMyIsImxhbmd1YWdlIjoiZXMiLCJwcm92aWRlciI6Im9wZW5yb3V0ZXIiLCJtb2RlbCI6InF3ZW4vcXdlbi10dXJibyIsImdlbmVyYXRlZEF0IjoiMjAyNi0wMy0wMVQxNzowOTo1OS44MTNaIn0= */}
# Guía de CLI de LPD (Interno)

`lpd`es el CLI del repositorio para configuración, desarrollo local, orquestación de pruebas, gestión de hooks y ejecución de scripts.

## Modelo de comandos

Grupos de comandos principales:

- `lpd setup`- inicializar dependencias/hooks/ensamblaje de CLI
- `lpd doctor`- verificación de preparación del entorno
- `lpd dev`- lanzar el flujo de desarrollo de documentación local
- `lpd test`- ejecutar conjuntos de pruebas por alcance
- `lpd ai-sitemap`- generar o validar sitemap-ai.xml
- `lpd ci`- comprobaciones CI similares a locales
- `lpd hooks`- instalar/estado/verificar hooks y ejecución de scripts de hook
- `lpd scripts`- descubrir y ejecutar scripts gestionados por grupo
- grupos abreviados: `lpd tools ...`, `lpd tasks ...`, `lpd tests ...`, `lpd v2 ...`

## Runbooks principales

### 1) Configuración inicial

```bash
bash lpd setup --yes
```

Resultados esperados:

- instala dependencias (según banderas)
- instala/actualiza hooks
- opcionalmente conecta `lpd` en PATH para el usuario actual

### 2) Desarrollo de documentación local

```bash
lpd dev
# fallback if PATH not yet refreshed
bash lpd dev
```

Variantes útiles:

```bash
lpd dev --test --test-mode staged
lpd dev -- --port 3333
```

### 3) Puntos de entrada de pruebas

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

Notas sobre auditoría WCAG:

- `--wcag`ejecuta la auditoría de accesibilidad v2 después del flujo normal `lpd test`.
- En modos predeterminados/rápidos y `--staged`, `lpd`mapea WCAG a una ejecución estancada, limitada (`--staged --max-pages 10`).
- En modo `--full`, `lpd`ejecuta el escaneo completo de WCAG v2.
- La corrección automática de WCAG está activada por defecto para el script de WCAG; use `--wcag-no-fix`para cambiar al modo de sugerencias solamente.
- Las comprobaciones automáticas de WCAG tienen cobertura parcial y no reemplazan la revisión manual de accesibilidad.

Notas sobre auditoría de enlaces externos:

- `--link-audit-external`ejecuta `tests/integration/v2-link-audit.js`con `--external-policy validate`.
- En modos predeterminados/rápidos y `--staged`, `lpd`mapea el alcance de la auditoría externa a `--staged`.
- En modo `--full`, `lpd`mapea el alcance de la auditoría externa a `--full`.
- Las salidas de auditoría externa no nulas son orientativas en predeterminado/rápido y `--staged`, pero bloqueantes en `--full`.

### 3.5) Generación de mapa del sitio de IA

```bash
lpd ai-sitemap --check
lpd ai-sitemap --write
```

### 4) Gestión de ganchos

```bash
lpd hooks install
lpd hooks status
lpd hooks verify
lpd hooks info
```

### 5) Detección y ejecución de scripts

```bash
lpd scripts list --group tools
lpd scripts run tools generate-docs-guide-indexes -- --check
lpd tools dev test-add-callouts -- --help
lpd tools wcag-repair-common -- --staged --stage
```

### 6) Canal de traducción I18n (OpenRouter por defecto solo para gratis)

La herramienta de traducción está disponible a través de la misma interfaz de script gestionada:

```bash
./lpd tools i18n translate-docs -- --help
./lpd tools i18n generate-localized-docs-json -- --help
./lpd tools i18n validate-generated -- --help
```

Notas:

- `v2`las páginas localizadas se generan bajo `v2/<lang>/...` (por ejemplo `v2/es/...`, `v2/fr/...`, `v2/cn/...`)
- El chino simplificado usa el código Mintlify `cn`; la CLI acepta `zh-CN` y lo normaliza a `cn`
- `v1`se deja intencionalmente en inglés solo en el lanzamiento actual

Ejecución de humo típica local (traducción real OpenRouter , una sola página):

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

## Limitaciones de detección de scripts

- la detección de scripts admite patrones de raíz `.lpdignore`
- los scripts ignorados se excluyen de los comandos de lista/ejecución

Archivo de referencia:

- `tools/cli/lpdignore.example`

## Propiedad + Verdad

- Verdad del comportamiento de la CLI: `lpd`implementación del script
- Verdad de navegación operativa: este documento + `docs-guide/README.md`

Para un comportamiento profundo de ganchos/pruebas, use:

- [`quality-gates.md`](./quality-gates.md)
- `contribute/CONTRIBUTING/GIT-HOOKS.md`
