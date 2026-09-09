# Metrika — landing page

Landing page para el emprendimiento de corte y grabado láser + impresión 3D.
Angular standalone (TypeScript), estilo **Warm Industrial**.

## Cómo correrlo

Este proyecto se armó como una estructura de Angular completa, pero las
dependencias (`node_modules`) no están instaladas todavía. Para levantarlo:

```bash
npm install
npm start
```

Y abrir `http://localhost:4200`.

Para generar el build de producción:

```bash
npm run build
```

El resultado queda en `dist/metrika-landing/`.

## Qué es un placeholder y qué no

Casi todo el **texto y la estructura** son definitivos; lo que falta
completar con el cliente son:

1. **Tipografía HANSON.METHOD** — ver `src/assets/fonts/README.md`. Hasta
   que se agregue el archivo, el sitio usa 'Oswald' (Google Fonts) como
   reemplazo visual temporal.
2. **Imágenes reales** — hoy hay placeholders SVG generados a mano
   (`src/assets/images/**`, ver `scripts/gen-placeholders.mjs`). Para
   reemplazarlas, subí las imágenes reales a la misma carpeta y actualizá
   las rutas en `src/app/data/site-content.ts` (arrays `CORTE_GRABADO_IMAGES`,
   `IMPRESION_3D_IMAGES` y `MATERIALES`).
3. **Video de Modelado 3D** — completar `MODELADO_3D_VIDEO_SRC` en
   `src/app/data/site-content.ts` con la ruta del archivo o el link de
   embed de YouTube/Vimeo.
4. **Teléfono y redes sociales** — `CONTACT_PHONE` y `SOCIAL_LINKS` en el
   mismo archivo.
5. **Textos de Corte y grabado, Impresión 3D y Modelado 3D** — son
   borradores para revisar con el cliente (están marcados `// EDITAR` en
   `site-content.ts`).
6. **Preguntas frecuentes** — hay 5 preguntas de ejemplo con respuestas
   placeholder; reemplazar por las reales en el array `FAQ_ITEMS`.

Todo ese contenido vive en **un solo archivo**,
`src/app/data/site-content.ts`, para que sea fácil de editar sin tener que
tocar los componentes.

## Estructura del proyecto

```
src/
  app/
    app.component.*          # Layout general + sección "hero"
    app.config.ts             # Configuración de la app (providers)
    data/site-content.ts      # TODO el contenido editable del sitio
    models/content.model.ts   # Tipos TypeScript del contenido
    components/
      navbar/                 # Barra superior + panel de "Contacto"
      carousel/                # Carrusel reutilizable con auto-avance
      section-corte/           # Corte y grabado láser
      section-impresion3d/     # Impresión 3D
      section-modelado3d/      # Modelado 3D (video + texto)
      section-materiales/      # Grilla de materiales
      section-faq/             # Acordeón de preguntas frecuentes
      footer/
  assets/
    fonts/                    # Acá va HANSON.METHOD cuando la tengamos
    images/                   # Placeholders de corte, impresión 3D y materiales
  styles.scss                 # Variables de marca, tipografía, utilidades
```

## Paleta y tipografía

- `--color-cream: #f8f0ee` y `--color-red: #b62924` son los colores de
  marca que definió el cliente.
- Se agregaron tonos neutros oscuros (`--color-charcoal`,
  `--color-charcoal-soft`) para tener contraste de texto legible sobre el
  crema, siguiendo la estética "industrial cálida" (metal oscuro + madera).
  Se pueden ajustar en `src/styles.scss` sin tocar el resto del código.
- Todos los títulos usan `var(--font-display)` → hoy cae en 'Oswald', y va
  a pasar a HANSON.METHOD automáticamente en cuanto se agregue el archivo
  de la fuente (ver punto 1 arriba).

## Nota sobre la verificación

Este entorno no tuvo acceso a los registros de paquetes (npm) para poder
correr `npm install` y compilar el proyecto de punta a punta. Se revisó
manualmente la sintaxis de todos los `.ts` (con el parser de TypeScript) y
el balance de tags/llaves de todos los `.html`, pero recomiendo correr
`npm install && npm start` como primer paso para confirmar que compila en
tu máquina, y avisarme si aparece algún error para corregirlo.

## Deploy a Vercel

El proyecto ya incluye `vercel.json` con la configuración de build correcta
para Angular 22 (el build de Angular deja los archivos finales en
`dist/metrika-landing/browser/`, no en `dist/metrika-landing/` directamente,
así que Vercel necesita saberlo explícitamente).

### Opción rápida: Vercel CLI (sin GitHub)

Desde una terminal en esta carpeta:

```bash
npm install -g vercel
vercel login
vercel --prod
```

`vercel login` abre el navegador para que inicies sesión (o crees una
cuenta gratis). `vercel --prod` construye el proyecto y lo publica; al
final te da la URL pública.

### Opción con GitHub (deploys automáticos en cada push)

1. Crear un repositorio vacío en GitHub.
2. Desde esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Landing Metrika"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git push -u origin main
   ```
3. En vercel.com → "Add New..." → "Project" → importar ese repositorio.
   Vercel detecta el framework Angular y toma el build command / output
   directory de `vercel.json` automáticamente.
4. Deploy. De ahí en adelante, cada `git push` a `main` genera un deploy
   nuevo solo.
