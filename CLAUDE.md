# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Brief original del cliente (Metrika)

Landing page para un emprendimiento de **corte y grabado láser + impresión 3D**,
para mostrar productos y darse a conocer. Pedido original del usuario:

- Stack: TypeScript. Preferencia por Angular (el usuario lo pidió explícitamente
  por ser lo que suele usar); no hay razón para migrar a otro framework.
- Estilo visual: **Warm Industrial**.
- Paleta obligatoria (definida por el cliente final, no cambiar sin pedirlo):
  `#f8f0ee` (crema) y `#b62924` (rojo).
- Tipografía de marca: **HANSON.METHOD** (archivo aún no entregado por el cliente).
- Estructura de la barra superior / secciones pedida:
  1. **Contacto**: redes sociales + teléfono.
  2. **Corte y grabado**: texto explicativo breve (redactado por Claude como
     borrador, a revisar con el cliente) + carrusel de imágenes lateral con
     auto-avance.
  3. **Impresión 3D**: mismo formato que "Corte y grabado" (texto breve +
     carrusel lateral con auto-avance).
  4. **Modelado 3D**: un div para un video que enviará el cliente, con texto
     breve debajo.
  5. **Materiales**: intro "EN QUÉ LO CORTO" + tarjetas con nombre, descripción
     breve e imagen pequeña para MDF, Acrílico, Cuero PU y Cartón gris, más
     una nota final invitando a preguntar por otros materiales.
  6. **Preguntas frecuentes**: acordeón (clic para expandir/colapsar); las
     preguntas y respuestas reales las carga el cliente después.

Esta lista de secciones **es el contrato del proyecto**: cualquier cambio
estructural grande (agregar/quitar una sección de la nav) debería confirmarse
con el usuario porque responde a un pedido puntual del cliente final, no es
una decisión de diseño libre.

## Estado actual / placeholders pendientes

Todo el contenido editable vive en **un solo archivo**,
`src/app/data/site-content.ts`, para que se pueda ajustar con el cliente sin
tocar componentes. Lo marcado `// EDITAR` ahí son borradores, no texto final:

1. **Tipografía HANSON.METHOD**: no está el archivo. `src/assets/fonts/README.md`
   documenta los 3 nombres de archivo esperados (`hanson-method.woff2/.woff/.otf`).
   En cuanto se copien a esa carpeta, se aplican solos vía `--font-display` en
   `src/styles.scss` — no hay que tocar componentes. Hasta entonces se usa
   'Oswald' (Google Fonts) como reemplazo visual temporal.
2. **Imágenes reales**: hoy son placeholders SVG generados con
   `scripts/gen-placeholders.mjs` (estética Warm Industrial, determinístico
   por seed). Para reemplazar: subir las imágenes reales a `src/assets/images/**`
   y actualizar las rutas en `CORTE_GRABADO_IMAGES`, `IMPRESION_3D_IMAGES` y
   `MATERIALES` en `site-content.ts`.
3. **Video de Modelado 3D**: `MODELADO_3D_VIDEO_SRC` está vacío. Acepta tanto
   un archivo propio como un embed de YouTube/Vimeo (`SectionModelado3dComponent`
   detecta cuál es por regex y sanitiza la URL de embed con `DomSanitizer`).
4. **Teléfono y redes sociales**: `CONTACT_PHONE` y `SOCIAL_LINKS` son placeholders.
5. **Textos de Corte y grabado / Impresión 3D / Modelado 3D**: borradores a
   revisar con el cliente.
6. **FAQ**: 5 preguntas de ejemplo con respuestas placeholder en `FAQ_ITEMS`.

## Comandos

```bash
npm install          # instalar dependencias
npm start            # ng serve, http://localhost:4200
npm run build        # build de producción → dist/metrika-landing/browser/
npm run watch        # build en modo watch (development)
node scripts/gen-placeholders.mjs   # regenerar los SVG placeholder
```

No hay suite de tests configurada ni linter propio más allá del `strict`
mode de TypeScript/Angular (ver `tsconfig.json`).

### Nota sobre la versión de Node

El entorno de esta sesión trae Node v22.22.2, pero Angular CLI 22 exige
`^22.22.3 || ^24.15.0 || >=26.0.0`. Si `ng build`/`ng serve` rechazan la
versión de Node, no es un error del proyecto: hay que usar/instalar un Node
compatible (o invocar `node node_modules/@angular/cli/bin/bootstrap.js <comando>`
directamente, que salta el chequeo de versión de `ng.js` pero puede toparse
con otro chequeo interno en `lib/cli/index.js`).

## Arquitectura

Angular standalone (sin NgModules), un solo componente raíz que compone
secciones, todas standalone e independientes entre sí:

```
app.component        → layout general: navbar + todas las secciones + footer
data/site-content.ts  → TODO el contenido editable (texto, imágenes, contacto, FAQ)
models/content.model.ts → tipos TS del contenido (CarouselImage, Material, FaqItem, NavLink, SocialLink)
components/
  navbar/             → nav + panel de "Contacto" desplegable (cierra al clickear afuera vía HostListener)
  carousel/            → carrusel genérico reutilizable (auto-avance + pausa on-hover),
                          usado tanto en Corte y grabado como en Impresión 3D
  section-corte/        → usa <app-carousel> con CORTE_GRABADO_IMAGES
  section-impresion3d/  → usa <app-carousel> con IMPRESION_3D_IMAGES
  section-modelado3d/   → video (archivo o embed YouTube/Vimeo autodetectado) + texto
  section-materiales/   → grilla de tarjetas desde el array MATERIALES
  section-faq/           → acordeón de un solo panel abierto a la vez (openIndex)
  footer/
```

Cada componente sigue el mismo patrón: `ChangeDetectionStrategy.OnPush`,
standalone, y consume constantes ya armadas desde `site-content.ts` (no hay
llamadas HTTP ni estado remoto — todo el contenido es estático en build time).

Paleta y variables de marca en `:root` dentro de `src/styles.scss`
(`--color-cream`, `--color-red`, más neutros complementarios
`--color-charcoal`/`--color-charcoal-soft` agregados para contraste, ajustables
sin tocar el resto del CSS). Todos los títulos usan `var(--font-display)`.

## Deploy

`vercel.json` ya está configurado para Angular 22 (Vercel necesita saber que
el build queda en `dist/metrika-landing/browser/`, no en `dist/metrika-landing/`
directamente). El README documenta el flujo completo de deploy a Vercel
(CLI directa o vía GitHub con deploys automáticos en cada push).
