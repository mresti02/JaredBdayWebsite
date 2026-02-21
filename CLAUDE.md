# Jared's Birthday Website

A creative, animated birthday website for Jared. Built with vanilla HTML, CSS, and JavaScript — no build step required.

## Project Structure

```
├── index.html      # Main page: hero, countdown, memories, wishes sections
├── styles.css      # Dark-themed design system with CSS custom properties
├── script.js       # Interactive features: confetti, countdown timer, wishes
└── package.json    # Dev tooling scripts (ESLint, Prettier)
```

## Development

```bash
# Serve locally
npm start          # npx serve .
npm run dev        # live-server with auto-reload on port 3000

# Code quality
npm run lint       # ESLint on script.js
npm run lint:fix   # ESLint with auto-fix
npm run format     # Prettier format all files
npm run format:check  # Check formatting without writing
```

## Architecture

- **No framework / no build step** — plain HTML + CSS + JS, served as static files.
- **CSS custom properties** in `:root` act as the design token system (colors, spacing, typography, shadows).
- **Canvas confetti engine** lives entirely in `script.js` and uses `requestAnimationFrame`.
- **Wishes** are persisted to `localStorage` (key: `jaredBdayWishes`, max 50 entries).
- **IntersectionObserver** drives scroll-triggered fade-in animations.

## Key Customisation Points

| What                  | Where                               |
| --------------------- | ----------------------------------- |
| Jared's birthday date | `script.js` — `const BIRTHDAY`      |
| Colour palette        | `styles.css` — `:root` vars         |
| Memory card photos    | `index.html` — `.memory-card` divs  |
| Sample wish           | `index.html` — `.wish-card--sample` |
| Footer message        | `index.html` — `.footer-message`    |

## Code Conventions

- **JS**: `'use strict'`, ES2020+, no external runtime dependencies.
- **CSS**: BEM-ish class names (`block__element--modifier`), mobile-first media queries at 600 px and 900 px breakpoints.
- **HTML**: Semantic landmarks (`<nav>`, `<section>`, `<footer>`), all interactive elements are native `<button>` or `<a>`.
- **Formatting**: Prettier defaults (2-space indent, single quotes in JS, trailing commas).
- **Linting**: ESLint with `eslint:recommended`, targeting ES2020 browser globals.
