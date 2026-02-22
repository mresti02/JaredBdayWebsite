# Jared's 30th Birthday Website — Project Notes

## What This Is
A single-page birthday party website for Jared Schifrien's 30th birthday trip to Puerto Vallarta, March 5–10, 2026. 16 guests staying at Las Villas PV.

## Stack
- **Astro** (static site framework) + **Cloudflare Workers** for deployment
- Single page: `src/pages/index.astro` (HTML structure)
- All logic in one script: `src/scripts/script.js`
- All styles in one stylesheet: `src/styles/styles.css`
- API endpoint: `src/pages/api/submit-request.ts` (villa requests form)
- Public assets (room photos, etc.) in `public/PV site assets/`

## Key Data Structures in `script.js`

All data lives at the top of `script.js`, organized into named const arrays:

- **`SCHEDULE`** (line 7): Day-by-day event objects. Each event has `id`, `time`, `title`, `icon`, `location`, `locationMap`, `desc`, `dtStart`/`dtEnd` (UTC, for .ics download), `highlight`.
- **`MEALS`** (line 304): Indexed by day (Mar 5–10). Each entry has a `date` label and a `meals` array with `type`, `icon`, `title`, `time`, `desc`.
- **`ROOMS`** (line 352): Room assignments. Each entry has `room`, `icon`, `guests` (array of two full names), `url`, `image` filename. A `ROOM_LOOKUP` map is built from this for the room finder feature.

## Sections / Modules

The page has these nav-linked sections (in order):
1. `#hero` — Hero banner
2. `#info` — Trip details
3. `#schedule` — Day tabs (Mar 5–10) + event cards; iCal download per event
4. `#meals` — Day tabs (Mar 5–10) + meal cards
5. `#rooms` — Room photo grid + room finder (search by guest name)
6. `#venues` — Venue cards
7. `#requests` — Villa requests form (submits to `submit-request.ts`)

## Tab Indexing
Both the schedule and meals modules use `data-day` / `data-mday` attributes (0-indexed) on tab buttons to select which day to display. Mar 5 = index 0, Mar 10 = index 5.

## Development Workflow
```bash
npm run dev      # local dev server
npm run build    # build for production
npm run preview  # build + wrangler local preview
```

## Git / Branch Convention
- Feature branches follow the pattern: `claude/<description>-<sessionId>`
- Push with: `git push -u origin <branch-name>`
- Working branch as of Feb 2026: `claude/birthday-party-website-CDVYf`

## Common Tasks
- **Add/edit a schedule event**: find the correct day object in `SCHEDULE`, add/modify an event entry.
- **Add/edit a meal**: find the correct day object in `MEALS`, add/modify a meal entry; also add/update the corresponding tab button in `index.astro`.
- **Update room assignments**: edit the `ROOMS` array in `script.js`.
- **Fill in "menu coming soon"**: update the `desc` field on the relevant meal entry in `MEALS`.
