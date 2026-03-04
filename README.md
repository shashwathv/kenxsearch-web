# kenxsearch-web

Marketing website for [KenxSearch](https://github.com/shashwathv/kenxsearch) — Circle to Search for Linux.

Built with **Next.js 14** (App Router, static export). Deployable to Vercel in one click.

---

## Project structure

```
kenxsearch-web/
├── app/
│   ├── layout.jsx          ← Root layout, metadata, font imports
│   └── page.jsx            ← Home page — assembles all sections
├── components/
│   ├── Navbar.jsx          ← Fixed top nav with scroll detection
│   ├── Navbar.module.css
│   ├── Hero.jsx            ← Full-screen hero with demo window
│   ├── Hero.module.css
│   ├── Features.jsx        ← 2×2 feature grid (Search/Visual/Translate/Shopping)
│   ├── Features.module.css
│   ├── HowItWorks.jsx      ← 3-step flow + screenshot placeholders
│   ├── HowItWorks.module.css
│   ├── Install.jsx         ← One-line install section with distro tags
│   ├── Install.module.css
│   ├── InstallCommand.jsx  ← Reusable copy-to-clipboard command block
│   ├── InstallCommand.module.css
│   ├── Footer.jsx
│   └── Footer.module.css
├── hooks/
│   └── useScrollFade.js    ← Shared IntersectionObserver scroll animation hook
├── styles/
│   └── globals.css         ← Design tokens, reset, shared utilities
├── public/
│   └── images/             ← Drop screenshots and demo video here
├── next.config.js
├── package.json
└── .gitignore
```

---

## Replacing placeholders

| Placeholder | File | What to put |
|---|---|---|
| Demo video | `components/Hero.jsx` → `.demoScreen` | `<video autoPlay loop muted playsInline src="/images/demo.mp4" />` |
| Screenshot 1 | `components/HowItWorks.jsx` | `<Image src="/images/overlay.png" ... />` |
| Screenshot 2 | `components/HowItWorks.jsx` | `<Image src="/images/buttons.png" ... />` |
| Screenshot 3 | `components/HowItWorks.jsx` | `<Image src="/images/translate.png" ... />` |
| Screenshot 4 | `components/HowItWorks.jsx` | `<Image src="/images/results.png" ... />` |
| Logo/favicon | `public/` | `favicon.ico`, `logo.png` |

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
