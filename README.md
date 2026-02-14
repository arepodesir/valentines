# 💌 Open Valentines

**Create and share beautiful 3D Valentine's Music Box love letters. Open source. Fully static. Powered by love.**

<p align="center">
  <img src="https://img.shields.io/badge/made%20with-♥-e11d48" />
  <img src="https://img.shields.io/badge/license-MIT-pink" />
  <img src="https://img.shields.io/badge/static-100%25-green" />
</p>

## ✨ What is this?

Open Valentines is an open-source platform where anyone can create a personalized, animated 3D Valentine's Day experience and share it with their loved ones.

Each valentine is a simple `.conf` file — submit a PR, get a unique shareable URL.

**No database. No server. No login.** Just love and static files.

## 🚀 How it works

1. **Fork** this repo
2. **Add** a `.conf` file to `public/letters/` (see [CONTRIBUTING.md](CONTRIBUTING.md))
3. **Submit a PR** — it auto-deploys on merge
4. **Share** your unique URL: `yoursite.com/name-hash`

## 🎵 Features

- 🎁 **3D Music Box** — A hand-crafted Three.js animated music box that opens with a cinematic sequence
- 💃 **Dancing Characters** — A full family of characters dance on a spinning velvet platform
- 🌹 **Rose Petals** — Floating particle effects create a romantic atmosphere
- 🎵 **Music** — Auto-playing audio with full playback controls
- 📱 **Share Buttons** — Native Web Share API + Twitter, Facebook, WhatsApp, Email, Copy Link
- 🖼 **OG Meta Tags** — Rich previews on every social platform
- ⚡ **100% Static** — No server, no database, no runtime costs
- 📝 **PR-based authoring** — Create valentines via simple `.conf` files

## 🏗 Tech Stack

- **Astro** — Static site generation
- **SolidJS** — Reactive UI components
- **Three.js** — 3D graphics
- **GSAP** — Animations
- **Tailwind CSS** — Styling

## 🧑‍💻 Local Development

```bash
npm install
npm run dev
```

## 📖 Creating Your Valentine

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

**Quick version:** Add a file to `public/letters/yourname-xxxx.conf`:

```ini
[card]
from = Your Name
to = Their Name
message = "Your message!"

[finale]
message = "Happy Valentine's Day"

[theme]
primary = #e11d48
accent = #f472b6
gold = #fbbf24
```

## 📄 License

MIT — spread the love.
