{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9BR0VOVC1JTlNUUlVDVElPTlMubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HL0FHRU5ULUlOU1RSVUNUSU9OUyIsInNvdXJjZUhhc2giOiIzMzM5ZDA2MTlmMjYyMjcwOTk0ODM4ZGNiNzA0ZTYzYmVkN2Q4NGNlYWZjMDY5ZDk2Y2U1MzllODg0ZTllMjBjIiwibGFuZ3VhZ2UiOiJlcyIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjA2OjM5LjkzMVoifQ== */}
# Instrucciones para Agentes de Git Hooks

Este documento proporciona instrucciones específicas para agentes de IA que trabajan en este repositorio.

## OBLIGATORIO: Instalar Git Hooks

Antes de realizar cualquier cambio, los agentes DEBEN asegurarse de que los hooks de git estén instalados:

```bash
./.githooks/install.sh
```

## Cómo funcionan los Hooks

El hook pre-commit se ejecuta automáticamente cuando intentas hacer un commit. Él:

1. **Escanea los archivos estancados** - Verifica todos los `.jsx`, `.tsx`, `.js`, `.mdx` archivos
2. **Ejecuta verificaciones de estilo** - Valida contra las reglas de la guía de estilo
3. **Ejecuta verificación** - Ejecuta verificaciones de sintaxis y validación
4. **Bloquea los commits** - Impide los commits con violaciones

## ¿Qué se verifica?

### Violaciones de la guía de estilo (Bloquea el commit)

- `ThemeData` o `themeStyles.jsx` imports → **BLOQUEADO**
- Colores de tema codificados → `#3CB540`, `#2b9a66`, etc.) → **BLOQUEADO**
- Imports relativos a fragmentos → **ADVERTENCIA**
- `@mintlify/components` imports → **ADVERTENCIA**
- Imports de hooks de React → **ADVERTENCIA**

### Verificaciones de verificación (Bloquea el commit)

- Frontmatter de MDX inválido → **BLOQUEADO**
- Sintaxis JSON inválida → **BLOQUEADO**
- Errores de sintaxis de script de shell → **BLOQUEADO**
- Errores de sintaxis de JavaScript → **BLOQUEADO**
- Configuración inválida de Mintlify → **BLOQUEADO**
- Fallas en la renderización en el navegador → **BLOQUEADO** (si `mint dev` está en ejecución)

## Flujo de trabajo del Agente

### Antes de hacer el commit

1. **Comprobar si el hook está instalado:**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **Establezca sus cambios:**
   ```bash
   git add <files>
   ```

3. **Intentar commit**(el hook se ejecuta automáticamente):
   ```bash
   git commit -m "your message"
   ```

4. **Si se bloquea:**
   - Leer los mensajes de error
   - Corregir las violaciones
   - Intente hacer el commit nuevamente

### Violaciones comunes y soluciones

#### Uso de ThemeData

**Error:**
```
❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead
```

**Solución:**
```jsx
// ❌ WRONG
import { ThemeData } from "/snippets/styles/themeStyles.jsx";
<div style={{ color: ThemeData.light.accent }}>

// ✅ CORRECT
<div style={{ color: "var(--accent)" }}>
```

#### Colores codificados

**Error:**
```
⚠️  file.mdx: Contains hardcoded theme colors - use CSS Custom Properties
```

**Solución:**
```jsx
// ❌ WRONG
<div style={{ color: "#3CB540" }}>

// ✅ CORRECT
<div style={{ color: "var(--accent)" }}>
```

#### Importaciones relativas

**Error:**
```
⚠️  file.jsx: Uses relative imports - use absolute paths from root
```

**Solución:**
```jsx
// ❌ WRONG
import { Component } from "../components/Component.jsx";

// ✅ CORRECT
import { Component } from "/snippets/components/Component.jsx";
```

## Evitar hooks

**⚠️ CRÍTICO:**Los agentes DEBEN EVITAR evitar los hooks sin permiso explícito del usuario.

La gobernanza canónica de agentes en `AGENTS.md` y `docs-guide/policies/agent-governance-framework.mdx` establece explícitamente:
- **NUNCA**usar la bandera `--no-verify`para evitar los hooks
- Esta es una restricción del proyecto

Si encuentra un falso positivo:
1. Notifíquelo al usuario
2. Pida orientación
3. NO evite el hook

Si una persona necesita explícitamente editar `.allowlist`, debe hacer el commit con:

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

Si una persona necesita explícitamente permitir eliminaciones de archivos, debe hacer el commit con:

```bash
git commit -m "Remove obsolete files" --trailer "allow-deletions=true"
```

## Validación del navegador

El hook incluye **validación del navegador sin cabeza** que prueba que los archivos MDX se renderizan realmente en el navegador.

### Requisitos

- `mint dev`debe estar en ejecución (o establecer la variable de entorno `MINT_BASE_URL` )
- Puppeteer debe estar instalado ("`npm install`" o en "`package.json`")

### Cómo funciona

1. Extrae los archivos MDX estagreados
2. Convierte las rutas de los archivos en URLs
3. Prueba cada página en Chrome sin cabeza usando Puppeteer
4. Verifica:
   - Errores de consola
   - Errores de página
   - Fallas en la representación
   - Páginas vacías

### Si el servidor no está en ejecución

Si `mint dev` no está en ejecución, la validación del navegador es **saltada** (no bloquea el commit). Esto hace que el hook sea rápido para el desarrollo local.

### Para una prueba completa

Para probar todas las páginas (no solo las estagreadas):
```bash
npm run test:v2-pages
```

## Ganchos de prueba

Para probar si los ganchos funcionan:

```bash
# Create a test file with a violation
echo 'import { ThemeData } from "/snippets/styles/themeStyles.jsx";' > test-violation.jsx
git add test-violation.jsx
git commit -m "test"  # Should be blocked

# Clean up
rm test-violation.jsx
git reset HEAD test-violation.jsx
```

### Probar validación del navegador

```bash
# Start mint dev in one terminal
mint dev

# In another terminal, create a test MDX file
echo '---\ntitle: Test\n---\n# Test' > v2/pages/test.mdx
git add v2/pages/test.mdx
git commit -m "test browser validation"  # Will test in browser
```

## Solución de problemas

### Gancho no en ejecución

```bash
# Reinstall
./.githooks/install.sh

# Verify
ls -la .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### Errores del gancho

Si el propio gancho tiene errores:

1. Verificar `.githooks/pre-commit` sintaxis
2. Verificar `.githooks/verify.sh` sintaxis
3. Ejecutar manualmente: `bash .githooks/pre-commit`
4. Informar problemas al usuario

## Para forks

Al trabajar en un fork:

1. Clonar el fork
2. Instalar ganchos: `./.githooks/install.sh`
3. Los ganchos funcionarán de la misma manera

## Documentación relacionada

- [Documentación completa de Git Hooks](./GIT-HOOKS)
- [Guía de estilo](../../resources/documentation-guide/style-guide)
- [Requisitos del agente](../../PLAN/AGENT-PREREQUISITES.md)
- [Marco de gobernanza de agentes](../../../../docs-guide/policies/agent-governance-framework.mdx)
- [Gobernanza de la allowlist raíz](../../../../docs-guide/policies/root-allowlist-governance.mdx)
