# Parça — public website (parcaplay.com)

Static, mobile-first, bilingual (Brazilian Portuguese primary, English second) website
for **Parça**, a voice-driven AI gaming companion for Windows PC (closed beta).

- **Stack:** Astro 5, static output (`dist/`), zero JavaScript except the mobile nav toggle.
- **Fonts:** Chakra Petch 600 (headings + wordmark) and Noto Sans (body), self-hosted
  via Fontsource — no Google Fonts requests at runtime.
- **Privacy:** no trackers, no analytics, no cookies. Brazil's LGPD is the baseline.
- **Mailbox:** [`HANDOFF.md`](./HANDOFF.md) — shared notes with the Parça software team.
  Read it first at the start of every session.

## Develop

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # -> dist/
npm run preview
```

## Add a news post

1. Create `src/content/news/pt/<slug>.md` and `src/content/news/en/<slug>.md` (same slug is fine).
2. Frontmatter:
   ```yaml
   ---
   title: "v0.2.0 — ..."     # player-facing title
   date: "2026-10-05"         # YYYY-MM-DD, Brasília time
   summary: "One or two sentences, plain language for players."
   version: "v0.2.0"          # optional
   ---
   ```
3. Write the body in plain player language (no dev jargon). Keep it short.
4. `npm run build` — the post appears on Novidades/News and in both RSS feeds
   (`/novidades/rss.xml`, `/en/news/rss.xml`).

## Deploy

The site is fully static: deploy `dist/` to any static host (Cloudflare Pages,
Netlify, Vercel, GitHub Pages, plain nginx, …).

**DNS (domain registered at GoDaddy):**

- Point the **apex** `parcaplay.com` and **`www`** at the static host
  (ALIAS/ANAME for the apex if the host supports it, otherwise A records;
  CNAME for `www`).
- **`api.parcaplay.com` already points to the product's server — never change it,
  never reuse it for this site.**

Suggested: serve with `Cache-Control: public, max-age=3600` for HTML and
immutable long-cache for `/_astro/*` assets (Astro hashes filenames).

## Design tokens

Dark only. Background `#111318`, bars `#0C0E12`, cards `#1A1D24`, controls
`#2A2E38`, text `#E7E9ED`, secondary `#A3A8B3`, muted `#8A919E`, coral accent
`#FF6B4A` (text on coral: `#1A0E0A`). Orb states: grey `#8A919E` ready,
green `#34D399` listening, amber `#F5B740` thinking, coral `#FF6B4A` speaking.

The brand mark is a pure-CSS glossy sphere (`src/components/Orb.astro`):
`radial-gradient(circle at 35% 30%, #FFFFFFB3 0%, <state> 34%, #15171D 80%)`
with a matching `box-shadow` glow and a slow "breathe" animation.

## Honesty rules (do not break)

- Never claim deep game knowledge beyond the 8 curated titles; everything else is
  live web search (and the site says so).
- Never promise it "never spoils" or "can't trigger anti-cheat".
- Never claim console support (PS5/Xbox) or show prices.
- Privacy page is a **draft** for the owner to review with a lawyer — only the
  listed facts, nothing invented.
- The beta-request form is a **disabled placeholder** until the owner chooses a
  backend and approves the privacy text. It must not collect data before that.
- Unsure about a product fact? Ask in `HANDOFF.md` and leave a visible `TODO`
  on the page until confirmed.
