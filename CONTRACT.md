# ASUGALAKX Website — Builder Contract v1.0

This document is the single source of truth for Builders 2–5. Follow it exactly so
all pages share one design system, one data source, and one compliance posture.

---

## 1. Design tokens (CSS custom properties)

Defined in `/assets/css/style.css` under `:root`. Use these variables everywhere —
never hard-code colors or fonts.

| Variable | Value | Use |
|---|---|---|
| `--bg-0` | `#050505` | Page background |
| `--bg-1` | `#08080B` | Card / panel background |
| `--bg-2` | `#0B0A10` | Inputs, dropdowns, image placeholders |
| `--brand` | `#7B2DFF` | Primary accent (buttons, active states, key lines) |
| `--violet` | `#A78BFA` | Secondary accent (links, eyebrows, highlights) |
| `--glow` | `rgba(123,45,255,.20)` | Subtle glows / focus rings — use sparingly |
| `--text` | `#F5F5F5` | Primary text |
| `--text-2` | `#A1A1AA` | Secondary text |
| `--text-3` | `#71717A` | Muted text, labels |
| `--border` | `rgba(123,45,255,.25)` | Accent borders |
| `--border-soft` | `rgba(255,255,255,.08)` | Default hairline borders |
| `--green` | `#22C55E` | Positive change |
| `--amber` | `#F59E0B` | DEMO DATA badge, warnings |
| `--red` | `#EF4444` | Negative change |
| `--font-head` | `"Space Grotesk", "Segoe UI", system-ui, -apple-system, sans-serif` | Headings |
| `--font-body` | `"Inter", "Segoe UI", system-ui, -apple-system, sans-serif` | Body |
| `--radius-sm` / `--radius` / `--radius-lg` / `--radius-full` | `6px / 10px / 16px / 999px` | Border radii |
| `--nav-h` | `72px` | Fixed navbar height (`body` already has matching `padding-top`) |
| `--max-w` | `1200px` | Content max width |
| `--space-1`…`--space-10` | `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px` | Spacing scale |
| `--ease` | `cubic-bezier(.22,1,.36,1)` | Standard easing |
| `--shadow-card` | `0 8px 32px rgba(0,0,0,.45)` | Lifted card shadow |

Fonts are loaded via Google Fonts in the boilerplate (`Inter` + `Space Grotesk`)
with system fallbacks already declared in the variables.

---

## 2. Component class names & usage

Layout:
- `.container` — centered content wrapper (max 1200px).
- `.section` (padding 96px vertical) / `.section--tight` (48px) / `.section--flush-top`.
- `.section-head` — flex row: left block (`.eyebrow` + `.section-title` + `.section-sub`) and right-side link/badge.
- `.eyebrow` — small uppercase kicker with violet bar.
- `.grid-12` — 12-col desktop grid; children `.col-12/.col-8/.col-6/.col-4/.col-3` (collapse to full width under 900px).
- `.grid-cards` — auto-fill responsive card grid; modifiers `.grid-cards--sm` (220px min), `.grid-cards--lg` (360px min).
- `.page-hero` — inner-page header: `<section class="page-hero"><div class="container"><span class="eyebrow">…</span><h1>…</h1><p class="lead">…</p></div></section>`.
- `.page-hero-visual` — optional AI-generated brand visual inside `.page-hero` (after the lead): `<figure class="page-hero-visual"><img src="/assets/img/wolf-*.jpg" …></figure>`. Max 760px, rounded, bordered, subtle purple glow.

Buttons: `.btn` + `.btn-primary` / `.btn-outline` / `.btn-ghost`; sizes `.btn-sm` / `.btn-lg`; `.btn-block`.

Badges (compliance-critical): `.badge` base; `.badge-demo` (amber, "DEMO DATA"), `.badge-proposed` (violet, "PROPOSED"), `.badge-dev` (dashed, "IN DEVELOPMENT"), `.badge-up` / `.badge-down` (green/red), `.badge-cat` (category tag).

Hero: `.hero > .container > .hero-grid` with `.hero-copy` (`.hero-eyebrow`, `.hero-title` with optional `.accent` span, `.hero-sub`, `.hero-ctas`, `.hero-note`) and `.hero-visual` (`.hero-glow`, `.particle` ×N, `.hero-wolf > img` for the AI-generated wolf hero visual; `.coin-frame > img` kept for circular coin displays elsewhere).

Cards:
- `.card` base (add `.card--lift` for hover lift). `.card-title`, `.card-text`.
- `.data-card` — market ticker: `.data-card-top` (`.data-card-symbol`, `.data-card-name`, badge), `.data-card-price`, `.data-card-change.up/.down`, `.data-card-spark` (SVG injected by charts.js), `.data-card-meta` (two `<span>` with `<b>` values).
- `.chart-card` — `.chart-title-row` + `.chart-holder` (chart target div) + `.chart-legend` (`.legend-item` + `.legend-swatch`).
- `.news-card` — `.news-card-img > img` (16:9), `.news-card-body` (badge, `.news-card-title > a`, `.news-card-excerpt`, `.news-card-meta`).
- `.article-card` — two-column editorial: `.article-card-img`, `.article-card-body`.
- `.agent-card` — `.agent-card-head` (`.agent-card-icon` letter, `.agent-card-name`, `.agent-card-role`), `.agent-card-desc`, `.agent-card-foot` (status badge + link).
- `.token-card` — centered; `.token-stat` + `.token-label`.
- `.eco-tile` — `.eco-tile-icon`, `h3`, `p`, `.tile-link`.
- `.brief-card` — `.card` with violet left border.
- `.nft-card` — `.nft-card-img`, `.nft-card-body`, `.nft-traits` / `.nft-trait`.
- `.course-card` — `.course-level` badge, `.course-meta`.
- `.cta-band` — full-width call-to-action panel (`h2`, `p`, `.btn`).

Tables: wrap in `.table-wrap` (horizontal scroll on mobile); table gets `.data-table`; `th` in `thead`; numeric cells `.num` (right-aligned); `.cell-main` (emphasis), `.pos` / `.neg` (green/red); caption note `.table-note`.

Tabs: `.tabs[role=tablist] > button.tab[role=tab][aria-selected]`; panels `.tab-panel` / `.tab-panel.is-active`. Filters: `.filters > button.filter-chip[aria-pressed]`. Search: `.search-field > input` (with `.search-icon`).

Navigation aids: `.pagination > .page-link` (`.is-active` / `[aria-current="page"]`); `.breadcrumb` list (`[aria-current="page"]` on current).

Footer (injected, classes for reference): `.asgx-footer`, `.footer-grid`, `.footer-brand`, `.footer-tagline`, `.footer-col-title`, `.footer-links`, `.footer-link`, `.footer-social`, `.social-link.is-placeholder`, `.footer-legal`, `.footer-disclaimer`, `.footer-bottom`, `.footer-legal-links`.

Data visuals: `.donut-wrap` (`.donut-svg` + `.donut-legend`), `.pipeline` (`.pipeline-step` with `.step-num`), `.timeline` / `.timeline-item` (`.is-active`, `.phase-status`), `.stat-row` / `.stat` (`.stat-value`, `.stat-label`).

Prose: `.prose` for article bodies (`h2/h3`, `blockquote`, `.callout`).

Utilities: `.text-center`, `.text-up`, `.text-down`, `.text-muted`, `.mt-4/.mt-6/.mt-8`, `.mb-4/.mb-6/.mb-8`, `.visually-hidden`, `.skip-link`.

Accessibility is built in: `:focus-visible` outlines on all interactive elements,
`prefers-reduced-motion` disables animation globally, dropdowns work via
`:hover` + `:focus-within` + click-toggle with `aria-expanded`, drawer traps no
focus issues (returns focus to toggle on close).

---

## 3. components.js API

`window.ASGX = { NAV, renderNavbar(el), renderFooter(el), page }`.

Pages MUST declare, in `<head>` BEFORE the script tags:

```html
<script>window.ASGX_PAGE = { title: "Markets", active: "markets" };</script>
```

- `title` (string): page title. components.js sets `document.title = title + " — ASUGALAKX"`.
- `active` (string): nav highlight key. Allowed values: `home | markets | news | analysis | web3 | academy | community`. Pages that live under the Web3 dropdown (`ai-agents`, `asgx`, `nft`, `character`) may pass their own key — they are auto-aliased to `web3`.

On `DOMContentLoaded`, components.js:
1. applies the title suffix (skips if "ASUGALAKX" already present),
2. inserts a default `<meta name="description">` ONLY if the page has none (always write your own unique one),
3. renders navbar into `#asgx-nav` and footer into `#asgx-footer`,
4. dispatches `document` event **`asgx:ready`** — page-specific scripts must listen for this (scripts with `defer` run before it; inline non-deferred scripts run earlier and must NOT touch `#asgx-nav`/`#asgx-footer` directly).

`renderNavbar(el)` / `renderFooter(el)` are exposed for testing; normal pages never call them manually.

Navbar behavior: desktop dropdowns open on hover, keyboard focus (`:focus-within`),
or click (toggles `aria-expanded`; `Escape` closes). Mobile (≤900px): hamburger
toggles a slide-in drawer with accordion submenus. Search inputs are honest
placeholders (`aria-label` says non-functional demo).

---

## 4. data.js structure — `window.ASGX_DATA`

ALL market figures are fictional sample data. Never edit values to look "real";
never present them as real.

- `meta`: `{ demoLabel: "DEMO DATA", proposedLabel: "PROPOSED / DEVELOPMENT STAGE", devLabel: "IN DEVELOPMENT", brand, tagline, disclaimer, dataNote }`.
- `assets[]`: `{ symbol, name, category: "crypto"|"stocks"|"forex"|"commodities", price (number), change24h (number, %), volume (string), marketCap (string), spark (number[12]), status: "ACTIVE" }`.
- `news[]`: `{ slug, title, category: "crypto"|"stocks"|"forex"|"web3"|"macro", date: "YYYY-MM-DD", source, author, excerpt }`. Article route: `/news/<slug>/`.
- `analysis[]`: `{ slug, title, category: "market"|"technical"|"macro"|"research", date, summary, context (string), keyData: [{label, value}], scenario: [{name, description}], risks: [string], conclusion }`. Linked as `/analysis/#<slug>`.
- `brief[]`: `{ id, tag, title, text }` — homepage "Today's Brief".
- `agents[]` (7, in order: scout, verification, market, macro, context, research, community): `{ id, name, role, description, capabilities: [string], input, output, status: "IN DEVELOPMENT" }`.
- `courses[]`: `{ slug, title, level: "beginner"|"intermediate"|"advanced", lessons (number), duration (string), description }`.
- `nfts[]` (6 samples of the 8,888 collection): `{ id: "asgx-nft-0001"…​"asgx-nft-0006", name, rarity, traits: [string], personality, aura }`. Route: `/nft/<id>/`.
- `roadmap[]` (8 phases): `{ phase (1–8), title, timeline, status: "IN DEVELOPMENT" (phase 1) | "PLANNED", items: [string] }`.

News slugs (for `/news/<slug>/` routes and sitemap): `bitcoin-etf-flows-stabilize-key-levels`,
`ethereum-upgrade-schedule-confirmed`, `fed-data-dependent-policy-path`,
`sp500-earnings-season-broadens`, `eurusd-consolidates-before-ecb`,
`gold-demand-central-bank-buying`, `solana-defi-activity-expands`,
`web3-wallet-custody-best-practices`.
NFT ids: `asgx-nft-0001` … `asgx-nft-0006`.

---

## 5. charts.js API — `window.ASGX_CHARTS`

Hand-rolled SVG, zero dependencies. All helpers respect
`prefers-reduced-motion` (draw animation skipped).

- `ASGX_CHARTS.sparkline(el, data, opts)` — compact line + area fill, color auto (green up / red down). `el`: container element; `data`: number[] (≥2). `opts`: `{ width=220, height=56, color, strokeWidth=1.8, fill=true, ariaLabel }`. Target container should have class `.data-card-spark` (fixed 56px height).
- `ASGX_CHARTS.donut(el, segments)` — `segments`: `[{ label, value, color }]`; renders donut + `.donut-legend` list. Use for tokenomics (`/asgx/tokenomics/`).
- `ASGX_CHARTS.line(el, series, opts)` — larger multi-series chart. `series`: `[{ label, color, data: number[] }]` (or a single object). `opts`: `{ width=720, height=320, labels: [x-axis strings], ariaLabel }`. Renders gridlines, y-axis ticks, x labels, legend.

---

## 6. Path conventions

- Every route is a folder with `index.html` (e.g. `/markets/index.html`); homepage is `/index.html`; `/404.html` exists.
- ALL paths are root-relative: `/assets/css/style.css`, `/assets/js/data.js`, `/assets/js/charts.js`, `/assets/js/components.js`, `/assets/img/asgx-coin.jpg`, nav hrefs like `/markets/`, `/news/<slug>/`, `/nft/<id>/`.
- Favicon: `/assets/img/asgx-coin.jpg`.
- No `../` relative links anywhere.

### Brand visual assets (`/assets/img/`)

| File | Use |
|---|---|
| `asgx-coin.jpg` | ASGX token coin logo — token pages, favicon |
| `tokenomics.jpg` | Tokenomics infographic reference |
| `ecosystem-overview.jpg` | Ecosystem overview artwork |
| `website-structure.jpg` | Website structure reference |
| `movement.jpg` | Community/movement artwork |
| `wolf-hero.jpg` | AI-generated geometric wolf — homepage hero (`.hero-wolf`) |
| `wolf-neural.jpg` | AI-generated wolf + neural network — AI Agents page hero (`.page-hero-visual`) |
| `wolf-mask.jpg` | AI-generated ornate wolf mask — NFT page hero (`.page-hero-visual`) |
| `wolf-web3.jpg` | AI-generated wolf over blockchain city — Web3 page hero (`.page-hero-visual`) |

---

## 7. Page boilerplate (copy verbatim, then fill in)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title — ASUGALAKX</title>
  <meta name="description" content="Unique 140–160 char description of this page.">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ASUGALAKX">
  <meta property="og:title" content="Page Title — ASUGALAKX">
  <meta property="og:description" content="Unique description of this page.">
  <meta property="og:url" content="https://asugalakx.com/route/">
  <meta property="og:image" content="https://asugalakx.com/assets/img/asgx-coin.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Page Title — ASUGALAKX">
  <meta name="twitter:description" content="Unique description of this page.">
  <meta name="twitter:image" content="https://asugalakx.com/assets/img/asgx-coin.jpg">
  <link rel="icon" type="image/jpeg" href="/assets/img/asgx-coin.jpg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/style.css">
  <script>window.ASGX_PAGE = { title: "Page Title", active: "markets" };</script>
  <script src="/assets/js/data.js" defer></script>
  <script src="/assets/js/charts.js" defer></script>
  <script src="/assets/js/components.js" defer></script>
</head>
<body>
  <div id="asgx-nav"></div>
  <main id="asgx-main">
    <!-- page content -->
  </main>
  <div id="asgx-footer"></div>
  <script>
    /* Page-specific rendering: wait for shared chrome */
    document.addEventListener("asgx:ready", function () {
      var D = window.ASGX_DATA;   /* data   */
      var C = window.ASGX_CHARTS; /* charts */
      /* ... build page ... */
    });
  </script>
</body>
</html>
```

Rules: unique `<title>` + meta description per page; `window.ASGX_PAGE` must
appear BEFORE the three script tags; the three scripts use `defer` and this
exact order (`data.js` → `charts.js` → `components.js`).

---

## 8. Compliance rules (non-negotiable)

1. **Zero hype.** Never use: "100X", "to the moon", "guaranteed profit", "get rich",
   "audited", "100% safe", or casino aesthetics. Analysis language only:
   "possible scenario", "market context", "risk factors", "historical observation".
2. **DEMO DATA badge** (`.badge-demo`, text from `ASGX_DATA.meta.demoLabel`) on
   EVERY market-data surface: market pulse, tables, charts, sparklines sections.
   Add `ASGX_DATA.meta.dataNote` ("All market figures shown are fictional sample
   data for demonstration purposes only.") near data tables.
3. **Token / ASGX / NFT**: label `PROPOSED / DEVELOPMENT STAGE`
   (`.badge-proposed`, text from `meta.proposedLabel`). Never imply a live token,
   sale, or audited contract.
4. **AI agents**: status `IN DEVELOPMENT` (or `CONCEPT`) only — `.badge-dev`.
   Never present agents as live or autonomous traders.
5. **Disclaimer**: the footer injects the exact site-wide disclaimer. Article and
   analysis pages should additionally carry: "This content is for informational
   and educational purposes only and does not constitute financial advice."
6. **Honest placeholders**: social links are `href="#"` with `is-placeholder`
   styling and "(coming soon)" labels; search inputs carry demo aria-labels.
   Never fake functionality.
7. **Site language is English.** Keep the voice restrained: Bloomberg density,
   Binance-Research minimalism. Purple is an accent, not a flood.

---

## 9. Files delivered by Builder 1 (do not recreate)

- `/assets/css/style.css` — full design system
- `/assets/js/data.js` — all mock data (`window.ASGX_DATA`)
- `/assets/js/charts.js` — SVG helpers (`window.ASGX_CHARTS`)
- `/assets/js/components.js` — navbar/drawer/footer (`window.ASGX`)
- `/index.html` — homepage (reference implementation of every pattern above)
- `/404.html`, `/sitemap.xml`, `/robots.txt`
