# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for a laser cutting/engraving + 3D printing business ("Metrika"). Angular 22 standalone app (TypeScript), single page composed of sections, "Warm Industrial" visual style. No backend — content is static/hardcoded in one data file.

## Commands

```bash
npm install        # node_modules are not committed
npm start           # ng serve, http://localhost:4200
npm run build        # production build -> dist/metrika-landing/browser/
npm run watch        # dev build in watch mode
node scripts/gen-placeholders.mjs   # regenerate placeholder SVGs in src/assets/images/
```

There is no lint script and no test suite configured (no `ng test`/Karma/Jasmine setup, no `lint` entry in `package.json` or `angular.json`). Verify changes by running `npm start` and checking the page, or `npm run build` for a full TypeScript/template compile check.

Deploys to Vercel; `vercel.json` sets the output directory to `dist/metrika-landing/browser` (Angular 22 nests the build output under `browser/`, unlike the flat `dist/metrika-landing` default).

## Architecture

**All editable site content lives in one file: `src/app/data/site-content.ts`.** Text, images, contact info, FAQ, and nav links are exported as typed constants from there (`CarouselImage`, `Material`, `FaqItem`, `SocialLink`, `NavLink` types are defined in `src/app/models/content.model.ts`). Components import these constants directly rather than receiving content via inputs/services — there is no CMS or content API. When asked to change site copy or data, edit `site-content.ts`, not the components. Draft/placeholder text is marked with `// EDITAR` comments.

**Component structure**: one standalone component per landing-page section under `src/app/components/`, each with its own `.ts`/`.html`/`.scss` triplet (`navbar`, `section-corte`, `section-impresion3d`, `section-modelado3d`, `section-materiales`, `section-faq`, `footer`, plus a reusable `carousel`). `app.component.ts` composes them all in a fixed order matching the page layout; there is no router — it's a single scrolling page navigated via anchor links (`NAV_LINKS` targets map to element IDs).

**Component conventions** (follow these for new/edited components):
- `standalone: true`, `changeDetection: ChangeDetectionStrategy.OnPush` on every component.
- Separate template/style files (`templateUrl`/`styleUrl`), not inline.
- Selector prefix `app-`.

**Branding/theming**: colors, fonts, layout tokens are CSS custom properties defined once in `src/styles.scss` (`--color-cream`, `--color-red`, `--color-charcoal`, `--font-display`, etc.) and referenced from component styles — don't hardcode brand colors/fonts in component `.scss` files. The display font (`--font-display`) currently falls back to 'Oswald' and will pick up the real 'Hanson Method' font automatically once added to `src/assets/fonts/` (see that folder's README) — no code changes needed for that swap.

**Placeholder assets**: images under `src/assets/images/**` are auto-generated SVG placeholders (`scripts/gen-placeholders.mjs`), referenced by path from `site-content.ts`. Replacing them with real images means dropping files in the same folders and updating the paths in `site-content.ts`.
