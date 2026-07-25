# GUISED Hygen — Shopify theme transfer

Online Store 2.0 Liquid package matching the React homepage (D.HYGEN aesthetic).

## Folder

```
shopify-theme/
  layout/theme.liquid
  templates/index.json
  sections/hygen-*.liquid
  snippets/hygen-nav.liquid
  assets/hygen.css
  assets/hygen.js
  config/settings_schema.json
  locales/en.default.json
```

## Option C — Shopify CLI (connected store)

This repo is linked to **ut9ig0-z4.myshopify.com** via `shopify-theme/shopify.theme.toml`.

| Theme | Role | ID |
| --- | --- | --- |
| Horizon | live | 144348184689 |
| Atelier | unpublished | 144348479601 |
| shopify-theme-guised-hygen | unpublished | 144349331569 |

**Commands** (from `guised/`):

```bash
npm run shopify:theme:list    # list themes on the store
npm run shopify:theme:push    # push local shopify-theme/ to shopify-theme-guised-hygen
npm run shopify:theme:dev     # live preview with hot reload (Chrome)
npm run shopify:theme:info    # show connected store/theme
```

**Admin links:**
- [Themes](https://admin.shopify.com/store/ut9ig0-z4/themes)
- [Theme editor (Hygen)](https://admin.shopify.com/store/ut9ig0-z4/themes/144349331569/editor)
- [Preview](https://ut9ig0-z4.myshopify.com?preview_theme_id=144349331569)

First run may prompt Shopify login in the browser.

## Option A — Upload as a new theme

1. Zip the **contents** of `shopify-theme/` (not the parent folder name if Shopify complains — zip so `layout/`, `templates/`, etc. are at the zip root).
2. Shopify admin → **Online Store → Themes → Add theme → Upload zip**.
3. Preview the theme → open the homepage.
4. In the theme editor, set:
   - **Hygen hero**: poster image + video
   - **Hygen parallax** (×2): full-bleed images
   - **Hygen collection**: for each season block, pick a Shopify collection (Latest Releases, Culatta, Belts, etc.)
   - **Hygen stockist**: edit store rows
5. Publish when ready.

## Option B — Merge into your existing theme

Copy these files into your live theme:

- `assets/hygen.css`, `assets/hygen.js`
- `snippets/hygen-nav.liquid`
- `sections/hygen-hero.liquid`, `hygen-concept.liquid`, `hygen-parallax.liquid`, `hygen-collection.liquid`, `hygen-stockist.liquid`

Then either:

- Replace `templates/index.json` with this package’s version, **or**
- In the theme editor homepage, remove old sections and **Add section** → Hygen hero / concept / parallax / collection / stockist.

Also add Amiri + CSS/JS to your existing `layout/theme.liquid` `<head>` / before `</body>` if you keep your current layout:

```liquid
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet">
{{ 'hygen.css' | asset_url | stylesheet_tag }}
...
{{ 'hygen.js' | asset_url | script_tag }}
```

And add `class="hygen-body"` on `<body>` plus the fixed logo link from this package’s layout.

## Notes

- Collection lookbook pulls **product featured images** from the linked collection.
- This package is homepage-focused. Product / collection / cart templates are not included — keep Dawn (or your current theme) for commerce pages, or add those templates later.
- Arrow keys and the Index modal work via `hygen.js`.
