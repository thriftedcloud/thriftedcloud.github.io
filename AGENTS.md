# Sugar Atelier — Base44 Dev Environment

## Overview
A kawaii portfolio website built with Vite + React. Single-viewport, no-scroll landing page with a custom ASCII star cursor and physics-based trail.

## Tech Stack
- Vite 6 + React 18
- Pure CSS (no framework)
- Google Fonts: Quicksand (display) + JetBrains Mono (body/ASCII)

## Running the App
```sh
docker compose -f docker-compose.base44.yml up -d --build
```
- Dev server runs on port 3000 with hot reload
- Node 22 slim image, source bind-mounted, deps installed on startup
- No external services or secrets required

## Project Structure
- `src/App.jsx` — main layout (ASCII frame, header, treat grid, about bubble)
- `src/components/StarCursor.jsx` — custom ASCII `( ✦ )` cursor with canvas trail
- `src/components/TreatGrid.jsx` — 3×2 grid of project "treat" cards
- `src/components/ProjectModal.jsx` — frosted-glass project detail window
- `src/components/AboutBubble.jsx` — toggleable about popup (bottom-right)
- `src/data/projects.js` — portfolio project data
- `src/index.css` — all styling, color tokens, animations

## Key Design Decisions
- `overflow: hidden` on html/body enforces no-scroll single viewport
- Custom cursor uses `cursor: none` globally; canvas renders the star trail
- `prefers-reduced-motion` disables trail, animations, and restores default cursor
- Focus states use 3px solid `#8E004B` outline (never color alone)
- All ASCII art/decorations have `aria-hidden="true"`
- Treat grid is labeled `aria-label="Project Menu"`
