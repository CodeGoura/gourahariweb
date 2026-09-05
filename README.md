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


## Project images

Design and exhibition images live under `assets/images/design/` and are linked from `assets/js/data.js`. Project cards with available images open a multi-image lightbox; projects whose source folders are still empty continue to use their generated placeholder artwork.


## Deploying to GitHub Pages

1. Push this folder to a public repo — either `codegoura/codegoura.github.io` (root user site) or any repo with Pages enabled.
2. In the repo, go to **Settings → Pages**, set the source branch to `main` and folder to `/ (root)`.
3. Your site will be live at `https://codegoura.github.io/` (or `https://codegoura.github.io/gourahariweb/` for a project repo — update the `<link rel="canonical">`, `og:url`, and `sitemap.xml`/`robots.txt` URLs to match).
