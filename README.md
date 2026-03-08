# KenXSearch Web

Marketing website for [KenXSearch](https://github.com/shashwathv/kenxsearch) — Circle to Search for Linux.

Built with **Next.js 16** (App Router, static export), React 18, and Three.js (for the PixelBlast background effect). Deployable to Vercel in one click.

---

## Project structure

```
kenxsearch-web/
├── app/
│   ├── layout.jsx          ← Root layout, metadata, font imports
│   └── page.jsx            ← Home page — assembles all sections
├── components/
│   ├── Navbar.jsx          ← Fixed top nav with scroll detection
│   ├── Hero.jsx            ← Full-screen hero with animated background
│   ├── PixelBlast.jsx      ← Animated WebGL background effect (Three.js)
│   ├── Features.jsx        ← 2×2 feature grid (Search/Visual/Translate/Shopping)
│   ├── HowItWorks.jsx      ← 3-step flow with screenshots
│   ├── Install.jsx         ← OS support info & install commands
│   ├── InstallCommand.jsx  ← Reusable copy-to-clipboard command block
│   └── Footer.jsx
├── hooks/
│   └── useScrollFade.js    ← Shared IntersectionObserver scroll animation hook
├── public/
│   └── images/             ← Contains high-res images and UI screenshots
├── next.config.js
├── package.json
└── .gitignore
```

---

## Development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub (`kenxsearch-web`)
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select the repo — Vercel auto-detects Next.js
4. Deploy — done

No environment variables needed.
