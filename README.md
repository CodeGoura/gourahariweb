# Gourahari Sahoo — Portfolio

A single-page portfolio built with plain HTML, CSS and JavaScript 

## Structure

```
portfolio/
├── index.html
├── 404.html
├── assets/
│   ├── css/
│   │   ├── style.css      # layout, typography, components, motion
│   │   └── themes.css     # color
│   ├── js/
│   │   ├── data.js        
│   │   ├── github-api.js  # GitHub stats/repos + cache + fallback
│   │   └── main.js        # rendering + interactions
│   └── images/
├── resume/
│   └── Gourahari_Sahoo_Resume.pdf   
├── sitemap.xml
├── robots.txt
└── README.md
```


## Still to do

2. **Add real project photos** — the Design & Exhibition cards currently use generated abstract placeholders (initials over a gradient) since no image files were provided. Swap in real photos of the museum, melas, tableaus etc. when you have high-res originals; the lightbox is already wired up to show more detail per card.
3. **Add an OG preview image** at `assets/images/og-image.png` (referenced in `index.html`'s `<meta property="og:image">`) so link shares look good on social/chat apps.


## Deploying to GitHub Pages

1. Push this folder to a public repo — either `codegoura/codegoura.github.io` (root user site) or any repo with Pages enabled.
2. In the repo, go to **Settings → Pages**, set the source branch to `main` and folder to `/ (root)`.
3. Your site will be live at `https://codegoura.github.io/` (or `https://codegoura.github.io/<repo-name>/` for a project repo — update the `<link rel="canonical">`, `og:url`, and `sitemap.xml`/`robots.txt` URLs to match).
4. Add the live link to your GitHub bio, LinkedIn Featured section, and YouTube channel.
