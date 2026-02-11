# BBBC Website

Podcast portal website for **Bad Boys Book Club** (BBBC). Inspired by the Gates Notes books page layout.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (uses `@theme inline` in globals.css, not a config file)
- **MDX content** via `gray-matter` + `next-mdx-remote`
- **Cloudflare Workers** deployment via `@opennextjs/cloudflare`

## Commands

```bash
npm run dev        # Local dev server (runs episode generation + next dev)
npm run build      # Production build (prebuild generates episode data)
npm run preview    # Build + preview in Cloudflare Workers runtime locally
npm run deploy     # Build + deploy to Cloudflare Workers
```

## Architecture

### Content Pipeline

Cloudflare Workers have no filesystem access. Episode content is handled via a prebuild step:

1. MDX files live in `content/episodes/` (one per episode, frontmatter + markdown)
2. `scripts/generate-episodes.mjs` reads them at build time and generates `lib/episode-data.ts`
3. `lib/episodes.ts` exposes `getAllEpisodes()`, `getEpisodeBySlug()`, `getFeaturedEpisode()`
4. Runtime code imports from `lib/episodes.ts` — no `fs` calls

**To add an episode:** create a `.mdx` file in `content/episodes/`, optionally add a cover image to `public/images/episodes/`, then build.

### Key Directories

```
app/                  # Next.js App Router pages
  page.tsx            # Homepage: Hero -> EpisodeGrid -> FeaturedSection
  episodes/page.tsx   # All episodes listing
  episodes/[slug]/    # Individual episode (SSG via generateStaticParams)
  about/page.tsx      # About page with host/producer bios
components/           # React components (Navbar, Footer, Hero, EpisodeCard, etc.)
lib/
  types.ts            # Shared types (Episode, EpisodeWithContent)
  utils.ts            # Shared utilities (stringToColor)
  episodes.ts         # Episode data access functions
  episode-data.ts     # AUTO-GENERATED — do not edit, run generate-episodes.mjs
content/episodes/     # MDX source files (frontmatter + show notes)
scripts/              # Build scripts (generate-episodes.mjs)
public/images/        # Static assets (hero/, episodes/)
```

### Styling

Design tokens are defined in `app/globals.css` via Tailwind v4's `@theme inline` block. Key colors: `foreground` (#1a1a1a), `muted` (#666), `accent` (#f5f129 yellow), `accent-dark` (#c17f24 gold). Typography uses Inter (body) and Georgia (serif headlines).

### Episode Card Images

Cards support three image types: static images (via `next/image`), GIFs (via native `<img>` to preserve animation), and a color gradient fallback generated from the slug.

### Cloudflare Config

- `wrangler.jsonc` — Worker name, compatibility flags, asset binding
- `open-next.config.ts` — OpenNext adapter (currently default config)
- `public/_headers` — Static asset caching rules

## Conventions

- All shared types live in `lib/types.ts`
- All shared utilities live in `lib/utils.ts`
- Components use default exports
- Pages use Next.js App Router conventions (layout.tsx, page.tsx)
- `lib/episode-data.ts` is auto-generated — always edit MDX source files instead
