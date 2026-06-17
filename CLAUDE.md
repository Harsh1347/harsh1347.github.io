# CLAUDE.md — harsh1347.github.io

Personal portfolio site for Harsh Gupta, a Data & AI Engineer.

## Stack

Pure HTML + CSS + Vanilla JS. No build tools, no npm, no frameworks.
- Google Fonts CDN: JetBrains Mono (numbers/code), Poppins (body)
- Font Awesome 6.5 CDN (icons)
- All other assets are local

## File Structure

```
index.html          — single-page app, all sections inline
styles.css          — all styles, ~1600 lines
media/
  Images/           — project thumbnails, logos, profile photo
  Cert_Achi/        — certificate and award images
Resume/
  HarshGuptaResume.pdf
  HarshGuptaAIresume.pdf
  HarshGuptaDE.pdf
```

## Design Tokens (CSS variables)

```css
--bg: #0a0a0f       /* page background */
--bg2: #0e0e18      /* card background */
--bg3: #12121e      /* elevated surface */
--accent: #00d4ff   /* electric cyan — primary accent */
--purple: #7c3aed   /* secondary accent */
--mono: 'JetBrains Mono', monospace
--sidebar-w: 220px  /* expanded sidebar */
--sidebar-c: 64px   /* collapsed sidebar */
```

## Page Sections (in order)

| ID | Section |
|----|---------|
| `#intro` | Hero — photo, typewriter roles, tagline, links |
| `#impact` | Impact metrics — 6 animated counter cards |
| `#what-i-do` | Pipeline visual — 4-node data flow |
| `#experience` | Experience timeline (right column of career grid) |
| `#education` | Education cards (left column of career grid) |
| `#projects` | Filterable project grid |
| `#skills` | Skills chips by category |
| `#honors` | Certifications + Awards |

Note: `#experience` and `#education` are both inside `.career-section` using a CSS Grid two-column layout (`340px 1fr`).

## Sidebar Nav Order

About → Impact → What I Build → Experience → Education → Projects → Skills → Honors

## JS Features

- **Typewriter**: cycles `['Data Scientist', 'Data Engineer', 'AI Systems Engineer', 'ML Engineer']`
- **Counter animation**: IntersectionObserver on `.impact-card[data-target]`; reads `data-prefix` and `data-suffix`
- **Project filter**: pills toggle `data-category` on `.project-card` via classList
- **Active nav**: IntersectionObserver highlights current `.nav-link` as user scrolls
- **Sidebar toggle**: `#sidebar-toggle` collapses sidebar to `--sidebar-c` width

## Key Conventions

- No em dashes anywhere — they were explicitly removed ("give AI vibes")
- Resume download button is commented out in hero (hidden intentionally)
- SVG project thumbnails live in `media/Images/*.svg` — dark bg (#0a0a0f), cyan/purple palette, 800×360 viewBox
- Impact cards have an `.impact-ctx` line grounding the metric in a specific project/role
- `.career-grid` uses `grid-template-columns: 340px 1fr` — do not make education full-width
- `.claude/` is in `.gitignore` — worktrees must never be committed

## Content Notes

- Email: harsh.gupta34@outlook.com
- LinkedIn: https://www.linkedin.com/in/harshg1347/
- GitHub: https://github.com/Harsh1347
- Portfolio URL: https://harsh1347.github.io
- Typewriter tagline: "I build the systems between raw data and real decisions — pipelines that process millions of records, models that surface signal from noise, and AI agents that automate what used to take hours."
