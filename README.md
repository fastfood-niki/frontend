# Fast Food NIKI — frontend

QR-friendly menu site built with **Astro**, **Tailwind CSS v4**, and **Lucide** icons for category labels.

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm install`     | Install dependencies            |
| `npm run dev`     | Dev server (default port 4321) |
| `npm run build`   | Production build to `./dist/`   |
| `npm run preview` | Preview production build        |

## Structure

- `src/data/` — menu (`menu.ts`), restaurant info (`restaurant.ts`), nav links (`navigation.ts`)
- `src/components/` — layout, category tabs (`CategoryTabs` — used from `index.astro`), menu, shared UI
- `src/pages/` — routes (`index.astro` is the menu)
