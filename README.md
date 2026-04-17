# Ace Garden Suite

This repository is a Vite + React project configured for GitHub Pages deployment.

## Deployment

- The production build is generated into `dist/` using `npm run build`.
- GitHub Pages deploys from the `dist/` output via the workflow in `.github/workflows/pages.yml`.
- The custom domain is configured with `CNAME` in `public/`.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Make sure the repo branch is `main` for the GitHub Pages workflow to run.
- The site uses `vite` and React, so the served files must come from the built output, not the raw source files.

