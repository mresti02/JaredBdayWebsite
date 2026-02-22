# Jared's 30th Birthday Website

Jared Schifrien's 30th birthday trip to Puerto Vallarta, March 5–10, 2026. 16 guests at Las Villas PV.

## Stack
- Astro + Cloudflare Workers
- `src/pages/index.astro` — HTML structure
- `src/scripts/script.js` — all data and logic
- `src/styles/styles.css` — all styles
- `src/pages/api/submit-request.ts` — villa requests form handler
- `public/PV site assets/` — room photos and other assets

## Data (top of `script.js`)
- **`SCHEDULE`** — day-by-day events. Fields: `id`, `time`, `title`, `icon`, `location`, `locationMap`, `desc`, `dtStart`/`dtEnd` (UTC ISO for .ics), `highlight`.
- **`MEALS`** — indexed Mar 5–10. Each entry: `date` label + `meals` array with `type`, `icon`, `title`, `time`, `desc`.
- **`ROOMS`** — room assignments. Fields: `room`, `icon`, `guests` (two full names), `url`, `image`. A `ROOM_LOOKUP` map is built from this for the room finder.

## Page Sections
`#hero` → `#info` → `#schedule` → `#meals` → `#rooms` → `#venues` → `#requests`

## Tab Indexing
Both schedule and meals use 0-indexed `data-day` / `data-mday` attributes on tab buttons. Mar 5 = 0, Mar 10 = 5. Adding a new tab requires both a new button in `index.astro` and a new entry in the corresponding data array.

## Commands
```bash
npm run dev      # local dev server
npm run build    # production build
npm run preview  # build + wrangler local preview
```

## Branch Convention
`claude/<description>-<sessionId>` — push with `git push -u origin <branch-name>`
