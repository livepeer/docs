{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9SRUFETUUubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HIiwic291cmNlSGFzaCI6IjZkYTVmNzFhMjU2YzZkOTg5Mzg4YzVjZDQ0MWRmMzNjN2FhY2NhMWE4NTc5OWFhZWU2Y2U0N2Q3MjM4NmY5NDIiLCJsYW5ndWFnZSI6ImVzIiwicHJvdmlkZXIiOiJvcGVucm91dGVyIiwibW9kZWwiOiJxd2VuL3F3ZW4tdHVyYm8iLCJnZW5lcmF0ZWRBdCI6IjIwMjYtMDMtMDFUMTc6MDc6MjguNzMzWiJ9 */}
# Contribuyendo a la Documentación de Livepeer

¡Bienvenido! Esta guía te ayudará a contribuir a la documentación de Livepeer.

## Inicio rápido

1. **Leer la Guía de Estilo** - `v2/resources/documentation-guide/style-guide.mdx`
2. **Instalar Ganchos de Git** - Ver [Documentación de Ganchos de Git](./GIT-HOOKS.md)
3. **Fork y Clonar** - Crea tu fork y cópialo localmente
4. **Hacer Cambios** - Sigue la guía de estilo y la biblioteca de componentes
5. **Probar Localmente** - Ejecuta `lpd dev` para previsualizar los cambios (instala/actualiza automáticamente los ganchos). Si el PATH aún no se ha actualizado, usa `bash lpd dev`.
6. **Enviar PR** - Abre una solicitud de extracción con tus cambios

## Lectura Esencial

Antes de realizar cualquier cambio, lee:

1. **[Guía de Estilo](../../resources/documentation-guide/style-guide)** - Guías de estilo de producción
2. **[Biblioteca de Componentes](../v2/resources/documentation-guide/component-library.mdx)** - Componentes disponibles
3. **[Ganchos de Git](./GIT-HOOKS.md)** - Documentación del gancho de pre-commit
4. **[Guía de Comportamiento de Mintlify](../../snippets/snippetsWiki/mintlify-behaviour.mdx)** - Patrones específicos de Mintlify

## Ganchos de Git

Este repositorio utiliza ganchos de Git para garantizar estándares de calidad.**Debes instalarlos:**

```bash
./.githooks/install.sh
```

Ver [Documentación de Ganchos de Git](./GIT-HOOKS.md) para más detalles.

## Configuración de Desarrollo

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

## Reglas de la Guía de Estilo

**Reglas Críticas:**

- ✅ Usar Propiedades CSS Personalizadas: `var(--accent)`, `var(--text)`, etc.
- ❌ NUNCA usar `ThemeData` desde `themeStyles.jsx` (obsoleto)
- ❌ NUNCA codificar colores hexadecimales que deban adaptarse al tema
- ✅ Usar importaciones absolutas: `/snippets/components/...`
- ✅ Los componentes de Mintlify son globales (no se necesitan importaciones)
- ✅ Los hooks de React son globales (no se necesitan importaciones)

## Pruebas

Antes de enviar:

- [ ] Ejecuta `lpd dev` (o `bash lpd dev`) y verifique que las páginas se rendericen correctamente
- [ ] Pruebe en modos claro y oscuro
- [ ] Verifique que todos los enlaces funcionen
- [ ] Asegúrese de que no haya errores en la consola
- [ ] Asegúrese de que los ganchos de git pasen (se ejecutan automáticamente al hacer commit)

## Recursos

- [Guía de documentación](../../resources/documentation-guide/documentation-guide)
- [Contribuir a la documentación](../../resources/documentation-guide/contribute-to-the-docs)
- [Inventario de fragmentos](../../resources/documentation-guide/snippets-inventory)
