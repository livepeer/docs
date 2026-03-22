{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9HSVQtSE9PS1MubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HL0dJVC1IT09LUyIsInNvdXJjZUhhc2giOiJlZDFjNzFjNTQwY2M1ZTA2ZDFiY2IzMzQxMDQ2NzFmYTQyZjE5MDkxMDQxZWFmMmU2YzVkZDI3YTIyNzQxMjFkIiwibGFuZ3VhZ2UiOiJlcyIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoib3BlbmFpL2dwdC00by1taW5pIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjM0OjI1Ljc3M1oifQ== */}
# Documentación de Git Hooks

Este documento explica los git hooks utilizados en este repositorio para hacer cumplir la calidad del código y el cumplimiento de la guía de estilo.

## Descripción general

Los git hooks son scripts que se ejecutan automáticamente en ciertos puntos del flujo de trabajo de git. Este repositorio utiliza un **hook pre-commit** para:

1. **Hacer cumplir el cumplimiento de la guía de estilo** - Bloquea commits con violaciones de estilo
2. **Ejecutar scripts de verificación** - Valida la sintaxis y la estructura
3. **Prevenir errores comunes** - Captura errores antes de que lleguen al repositorio

## Hook Pre-commit

### Comandos del Hook LPD

Usa el Livepeer Docs CLI (`lpd`) para gestionar e inspeccionar hooks:

```bash
lpd hooks install   # Install/update hooks from .githooks/
lpd hooks status    # Check if installed hook is current/executable
lpd hooks verify    # Run .githooks/verify.sh checks
lpd hooks info      # Print hooks, bypass flags, and override guidance
```

`lpd hooks info` es la referencia de comandos para scripts de hooks, flags de bypass (`SKIP_*`), y sobreescrituras de tráiler solo para humanos.

### Qué hace

El hook pre-commit se ejecuta automáticamente cuando ejecutas `git commit`. Verifica:

#### Cumplimiento de la guía de estilo

- ❌ **Uso de ThemeData** - Bloquea imports obsoletos de `ThemeData`❌ `themeStyles.jsx`
- Colores codificados** - Advierte sobre colores hexadecimales que deberían usar propiedades personalizadas de CSS**⚠️ 
- Imports relativos** - Advierte sobre rutas relativas (deberían usar rutas absolutas desde la raíz)**⚠️ 
- Imports de @mintlify/components** - Advierte sobre imports innecesarios (los componentes son globales)**⚠️ 
- Imports de hooks de React** - Advierte sobre imports innecesarios de React (los hooks son globales)**Scripts de verificación

#### ✅ 

- Sintaxis MDX** - Valida frontmatter y la estructura básica de MDX**✅ 
- Sintaxis JSON** - Valida que los archivos JSON sean analizables**✅ 
- Sintaxis de scripts de shell** - Valida scripts de shell con **✅ `bash -n`
- Sintaxis de JavaScript**** - Valida archivos JS con `node --check`
- ✅ **Mintlify config** - Valida `docs.json`/`mint.json` sintaxis
- ✅ **Rutas de importación** - Asegura que las importaciones de fragmentos usen rutas absolutas
- ✅ **Validación del navegador** - Prueba archivos MDX en un navegador sin interfaz (si `mint dev` está en ejecución)

#### Suite de pruebas (Nueva)

El hook de pre-commit ahora ejecuta la suite de pruebas completa en los archivos estagados:

- ✅ **Pruebas de guía de estilo** - Validación completa de las reglas de la guía de estilo
- ✅ **Validación de MDX** - Verificaciones avanzadas de la sintaxis y estructura de MDX
- ✅ **Pruebas de ortografía** - Validación de ortografía en inglés británico usando cspell
- ✅ **Verificaciones de calidad** - Texto alternativo de imágenes, completitud de frontmatter, validación de enlaces

La suite de pruebas se ejecuta en modo rápido para pre-commit (solo archivos estagados, se omiten las pruebas del navegador). Para una prueba completa, ejecute `npm test` manualmente o revise los resultados de CI.

#### Sincronización del índice de páginas generadas

El hook de pre-commit también mantiene los archivos `v2/pages` índices sincronizados:

- `node tools/scripts/generate-pages-index.js --staged --write --stage`

¿Qué hace esto?:

- Regenera `index.mdx` para carpetas bajo `v2/pages/`.
- Usa salida de estilo de sección con enlaces en nivel raíz primero, luego encabezados de carpeta.
- Reconstruye el agregado raíz en `v2/pages/index.mdx`.
- Elimina archivos `index.md` obsoletos en `v2/pages/`.

### Instalación

**Requisitos previos:**
Antes de instalar los hooks de git, debe instalar las dependencias de prueba:

```bash
# Install dependencies (required for hooks to run tests)
cd tools && npm install
```

#### Instalación automática (Recomendada)

```bash
# From repository root
./.githooks/install.sh
```

O ejecute el entorno de desarrollo local con:

```bash
lpd dev
# or without PATH setup
bash lpd dev
```

Este comando instala/actualiza los hooks primero, luego inicia `mint dev`.

**Nota:**Si las dependencias no están instaladas, los hooks aún se ejecutarán, pero las pruebas se omitirán con una advertencia. Instale las dependencias en `tools/` para una cobertura completa de pruebas.

#### Instalación manual

```bash
# Copy the hook
cp .githooks/pre-commit .git/hooks/pre-commit

# Make it executable
chmod +x .git/hooks/pre-commit

# Verify installation
ls -la .git/hooks/pre-commit
```

#### Para Forks

Si estás forkeando este repositorio, los hooks están en `.githooks/` pero necesitan ser instalados:

```bash
# Clone your fork
git clone <your-fork-url>
cd <repo-name>

# Install hooks
./.githooks/install.sh
```

**Nota:** Los hooks de Git no están bajo control de versión en `.git/hooks/` (están en `.githooks/`), por lo que cada desarrollador debe instalarlos.

### Cómo funciona

1. Cuando ejecutas `git commit`, el hook se ejecuta automáticamente
2. Escanea todos los archivos estagados (`.jsx`, `.tsx`, `.js`, `.mdx`)
3. Verifica infracciones de la guía de estilo
4. Ejecuta scripts de verificación
5. **Bloquea el commit** si se encuentran infracciones
6. Muestra mensajes de error claros con soluciones

### Salida de ejemplo

#### Éxito

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

#### Fallo

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

## Estructura de archivos

```
.githooks/
├── pre-commit          # Main pre-commit hook (source)
├── verify.sh           # Verification script (runs syntax checks)
├── install.sh          # Installation script
└── README.md           # Quick reference

.git/hooks/
└── pre-commit          # Active hook (installed from .githooks/)
```

## Validación en el navegador

El hook de pre-commit incluye **validación de navegador sin cabeza** para capturar archivos MDX que pasen las comprobaciones de sintaxis pero fallen al renderizar en el navegador.

### Cómo funciona

1. **Extrae archivos MDX estagados** - Solo prueba los archivos que estás comprometiendo
2. **Convierte a URLs** - Mapea las rutas de los archivos a URLs de Mintlify
3. **Prueba en Puppeteer** - Visita cada página en Chrome sin cabeza
4. **Verifica errores**:
   - Errores de consola
   - Errores de página
   - Fallas en el renderizado
   - Páginas vacías
   - Fallas en las solicitudes

### Requisitos

- **Node.js** - Debe estar instalado
- **Puppeteer** - Debe estar en `package.json`devDependencies
- **Mintlify server** - `mint dev`debe estar en ejecución (o establecer `MINT_BASE_URL`)

### Uso

La validación del navegador se ejecuta automáticamente si:
- Puppeteer está instalado (`npm install` o en `package.json`)
- `mint dev`está en ejecución (o `MINT_BASE_URL`está establecido)

Si el servidor no está en ejecución, la verificación se **omite** (no bloquea el commit).

### Salida de ejemplo

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

### Rendimiento

- **Limitado a 10 páginas** - Pre-commit solo prueba hasta 10 archivos MDX estagados
- **Tiempo de espera de 15 segundos** - Cada página tiene un tiempo de espera de 15 segundos
- **Fallo rápido** - Se detiene en el primer error para velocidad

Para una prueba completa del sitio, use: `npm run test:v2-pages`

## Personalización

### Añadir nuevas verificaciones

#### Añadir a Verificaciones de Guía de Estilo

Editar `.githooks/pre-commit` y añadir una nueva sección de verificación:

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

#### Añadir a Script de Verificación

Editar `.githooks/verify.sh` y añadir una nueva verificación:

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

### Deshabilitar verificaciones específicas

Para deshabilitar temporalmente una verificación, coméntala en `.githooks/pre-commit`:

```bash
# Check 1: ThemeData import/usage (DEPRECATED)
# echo "Checking for ThemeData usage (deprecated)..."
# ... (commented out)
```

### Hacer que las verificaciones sean advertencias en lugar de errores

Cambiar el código de salida o eliminar el incremento de violación:

```bash
# Warning only (doesn't block commit)
WARNINGS+=("⚠️  $file: Warning message")
# Don't increment VIOLATIONS

# Error (blocks commit)
WARNINGS+=("❌ $file: Error message")
VIOLATIONS=$((VIOLATIONS + 1))
```

## Saltar ganchos (No recomendado)

**⚠️ ADVERTENCIA:**Solo saltee los ganchos si tiene una razón legítima y comprenda las consecuencias.

### Ediciones protegidas `.allowlist` (Solo humano)

El gancho de pre-commit protege `.allowlist` por defecto.

Si un humano necesita intencionalmente actualizar `.allowlist`, use:

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

Este reemplazo está limitado a ediciones de `.allowlist` y aún ejecuta todas las demás verificaciones de pre-commit.

### Eliminaciones protegidas (Solo humano)

El gancho de pre-commit bloquea las eliminaciones de archivos estagados fuera de `tasks/` por defecto.

Si un humano necesita intencionalmente permitir eliminaciones, use:

```bash
git commit -m "Remove obsolete files" --trailer "allow-deletions=true"
```

Este reemplazo es específico para eliminaciones y sigue ejecutando todas las demás comprobaciones previas al envío.

```bash
# Bypass pre-commit hook
git commit --no-verify -m "message"
```

**¿Por qué esto está desaconsejado?**
- Violación de la conformidad con la guía de estilo
- Puede introducir errores que rompan la compilación
- Hace más difícil la revisión del código
- Puede causar problemas para otros desarrolladores

## Solución de problemas

### Hook no está funcionando

1. **Verifique si el hook está instalado:**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **Verifique si el hook es ejecutable:**
   ```bash
   chmod +x .git/hooks/pre-commit
   ```

3. **Reinstalar:**
   ```bash
   ./.githooks/install.sh
   ```

### Falsos positivos

Si una comprobación marca incorrectamente código válido:

1. **Verifique la guía de estilo** - Asegúrese de que su código siga las pautas
2. **Revise el mensaje de error** - El hook explica qué está mal
3. **Corrija la infracción** - Siga las recomendaciones de la guía de estilo
4. **Si es un error** - Informe el error o corrija el patrón del hook

### Hook muy lento

Si el hook tarda demasiado:

1. **Verifique los scripts de verificación** - Algunas comprobaciones (como la Mintlify de construcción) pueden ser lentas
2. **Haga las comprobaciones opcionales** - Comente las comprobaciones lentas para el desarrollo local
3. **Use `--no-verify`** - Solo si es absolutamente necesario (consulte la advertencia anterior)

## Para CI/CD

Estos hooks están diseñados para el desarrollo local. Para CI/CD:

1. **Use equivalentes de GitHub Actions** en lugar de ejecutar pre-commit directamente.
2. **Limitar las comprobaciones estáticas a los archivos modificados en PRs** para evitar bloqueos por deuda de toda la repositorio antiguo.
3. **Mantener barridos de navegador en todo el sitio** para seguridad en tiempo de ejecución/representación.

Mapa de CI actual:

- `.github/workflows/test-suite.yml` (`Docs CI - Content Quality Suite`)
  - PRs: comprobaciones de bloqueo en archivos modificados
    - guía de estilo, MDX, ortografía, calidad, enlaces/importaciones
    - enforcement de documentación de scripts en scripts modificados
    - auditoría estricta de enlaces V2 en páginas de documentación modificadas
  - Excepción de PR de integración: `docs-v2 -> main` trata las fallas estáticas de archivos modificados como orientativas
  - También ejecuta pruebas de navegador desde `docs.json`
  - Informes a través de Resumen de Paso de GitHub (sin comentario de PR)
- `.github/workflows/test-v2-pages.yml` (`Docs CI - V2 Browser Sweep`)
  - Limpieza completa de la versión 2 del navegador
  - Publicaciones/comentarios de PR y cargas de archivo JSON
- `.github/workflows/broken-links.yml`
  - Asesoría solo (no bloqueante) mientras se realiza la limpieza de enlaces heredados

## Referencia de la Guía de Estilo

Los hooks aplican reglas de:

- **Guía de Estilo:** `v2/resources/documentation-guide/style-guide.mdx`
- **Biblioteca de Componentes:** `v2/resources/documentation-guide/component-library.mdx`
- **Mintlify Comportamiento:** `snippets/snippetsWiki/mintlify-behaviour.mdx`

## Documentación Relacionada

- [Guía de Estilo](../v2/resources/documentation-guide/style-guide.mdx)
- [Biblioteca de Componentes](../v2/resources/documentation-guide/component-library.mdx)
- [Guía de Contribución](./CONTRIBUTING.md) (si existe)
- [Requisitos del Agente](../PLAN/AGENT-PREREQUISITES.md)

## Soporte

Si encuentra problemas:

1. Consulte esta documentación
2. Revise la guía de estilo
3. Consulte `.githooks/README.md` para referencia rápida
4. Abra un problema o haga una pregunta en el repositorio
