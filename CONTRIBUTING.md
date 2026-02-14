# 💌 Contributing a Valentine

Want to send someone a Valentine's Music Box? Here's how:

## Quick Start

1. **Fork this repo**
2. **Create a `.conf` file** in `public/letters/`
3. **Name it** `{name}-{4-char-hash}.conf` (e.g., `sarah-b7c2.conf`)
4. **Submit a PR** — it auto-deploys on merge!

## Letter Format

Create your file in `public/letters/your-name-xxxx.conf`:

```ini
[card]
from = Your Name
to = Their Name
message = "Your personal message here!"

[audio]
src = "/audio/prince.mp3"
autoplay = true
loop = true

[background]
image = "/images/nature.jpg"
blur = 6
glow_radius = 120
glow_intensity = 0.4

[scene]
horse_name = Veronica
animation_speed = 1.0

[finale]
kiss_sound = "/audio/kiss.mp3"
message = "Happy Valentine's Day"
subtitle = "with all my love 💕"

[theme]
primary = #e11d48
accent = #f472b6
gold = #fbbf24
glass_opacity = 0.10
glass_blur = 12
```

## Naming Convention

Your file name becomes the URL: `your-name-xxxx.conf` → `yoursite.com/your-name-xxxx`

- Use lowercase
- The hash should be 4 random hex characters (run `openssl rand -hex 2` to generate)
- Example: `maria-f4a1.conf`, `alex-92bc.conf`

## What You Can Customize

| Field | What it does |
|-------|-------------|
| `card.from` | Your name (shown on envelope) |
| `card.to` | Recipient's name (shown on envelope + finale) |
| `card.message` | Message on the card inside the envelope |
| `finale.message` | The big text shown at the end |
| `theme.primary` | Main color (hex) |
| `theme.accent` | Accent color (hex) |
| `theme.gold` | Gold highlight color (hex) |
| `scene.animation_speed` | How fast the dance plays (1.0 = normal) |

## Adding Custom Audio

If you want custom music, add an MP3 to `public/audio/` and reference it in your conf:

```ini
[audio]
src = "/audio/your-song.mp3"
```

> ⚠️ Please only use royalty-free music or music you have rights to.

## Code of Conduct

- Keep messages loving and respectful
- No hateful, discriminatory, or inappropriate content
- PRs with inappropriate content will be rejected

## Questions?

Open an issue! We're happy to help. 💕
