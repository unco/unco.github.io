# Copilot Instructions

## Commands

```bash
npm run dev          # start dev server
npm run build        # prerender site → docs/ (vite build + package)
npm run preview      # preview production build
npm run package      # build as Svelte library (svelte-kit sync + svelte-package + publint)
```

There is no test or lint step configured.

## Architecture

This is a **SvelteKit static site** built with `@sveltejs/adapter-static`, fully prerendered and deployed to GitHub Pages from the `docs/` output directory. The `src/lib/` directory is also published as a Svelte component library (the `canonical` npm package).

### Routing

All routes live under `src/routes/` using SvelteKit file-based routing. `+layout.js` sets `export const prerender = true` globally. Current pages:

- `/` — homepage, just renders the nav
- `/leveling` — career leveling framework; data sourced from `career_paths.js` using Svelte stores
- `/crisp` — CRISP UX design framework questionator; question data is inlined in the component
- `/thought_pills` — newsletter/content feed; pill data is a large inline JS array in the component
- `/toys` — index listing toy links
- `/toys/[toy]` — dynamic route; dispatches to `suru.svelte`, `love.svelte`, or `glyph.svelte` using `{#if}` blocks on `$page.params.toy`, not dynamic imports

### Shared components

`src/common/` holds cross-route components:
- `nav.svelte` — top navigation, must be imported manually in each route (there is no global layout that auto-includes it)
- `forms/` — reusable form primitives: `label.svelte`, `select.svelte`, `stars.svelte`

### 3D rendering

The **Suru** toy uses **Threlte v3** (`threlte` package) — the older API, not `@threlte/core`. Components like `Canvas`, `Mesh`, `PerspectiveCamera`, `SpotLight`, `AmbientLight` come from `'threlte'`. Three.js geometry/material constructors are imported directly from `'three'`. `vite.config.js` marks `three` and `troika-three-text` as `ssr.noExternal` to ensure they bundle correctly.

### Static assets

Textures and glyph SVGs are referenced via absolute URLs pointing to the live site:
```
https://unco.github.io/docs/glyphs/{id}.svg
https://unco.github.io/docs/paper.png
```
These won't resolve in local dev unless the `docs/` assets are served separately.

## Key conventions

- **Content is inlined**: `thought_pills` data and CRISP questions live as JS arrays inside their `.svelte` files, not in separate data files.
- **Toy routing via `{#if}`**: Adding a new toy means (1) creating a `.svelte` component in `src/routes/toys/[toy]/`, (2) adding an `{:else if toy == 'name'}` branch in `+page.svelte`, and (3) linking it from `toys/+page.svelte`.
- **Canonical Design tokens**: Orange accent is `#e95420`, font is Ubuntu Sans. CSS class naming follows Vanilla framework conventions (`.p-chip`, `.p-modal__close`).
- **Styles are scoped per file**: Each `.svelte` file carries its own `<style>` block; there is no global stylesheet beyond what the app shell provides.
- **Svelte stores** in `career_paths.js` are consumed with the `$` reactive prefix in `leveling/+page.svelte`.
- **Paths are relative** (`paths: { relative: true }` in `svelte.config.js`) for compatibility with GitHub Pages without a subpath prefix.
