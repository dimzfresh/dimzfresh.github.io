# Portfolio — policy & repo lists

## Private repositories are not shown

The site **never** lists private GitHub repositories and **does not** fetch repos via GitHub API.
Only a **manual allowlist** of public projects is rendered in `index.html`.

When adding or removing projects on the site, edit `index.html` directly — do not auto-sync from `gh repo list`.

---

## Public repos on the site (allowlist)

| Repo | Section |
|------|---------|
| [DesignSystemKit](https://github.com/dimzfresh/DesignSystemKit) | Projects |
| [NavigationKit](https://github.com/dimzfresh/NavigationKit) | Projects |
| [WidgetSystemKit](https://github.com/dimzfresh/WidgetSystemKit) | Projects |
| [StoriesKit](https://github.com/dimzfresh/StoriesKit) | Projects |

General profile link only (no repo list): [github.com/dimzfresh](https://github.com/dimzfresh)

---

## Private repos — excluded (do not add to the site)

| Repo | Notes |
|------|-------|
| `bdui-web` | Server-driven UI — private |
| `bdui-backend` | Server-driven UI — private |
| `zameni.bot` | Zameni automation — private |
| `usn-online` | Legacy project — private |
| `nrboom` | Legacy project — private |
| `PLG` | Legacy project — private |

Other public repos (e.g. `zameni.api`, old demos) are intentionally **not** on the portfolio — weak or not representative.

---

## Product links (not GitHub)

- [zameni.app](https://zameni.app) — product, shown in Hero & Experience
- [t.me/dimzfresh](https://t.me/dimzfresh) — Telegram
- [Dimitrii-Ziablikov-CV.pdf](./Dimitrii-Ziablikov-CV.pdf) — downloadable CV (1 page, EU)
- Source: `cv-one-page.html` (print) or regenerate via `.venv-cv` + fpdf script

---

*Last updated: 2026-05-28*
