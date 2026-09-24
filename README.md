# Ahmad Fauzan Rinaufaldi — Portfolio

Static site (plain HTML/CSS/JS, no build step) deployed on GitHub Pages.

## Editing content

All text lives in **`js/content.js`**. To add a role, project, skill or certificate, copy an existing `{ ... }` block in that file, paste it, and change the text. No other file needs to change.

- New project screenshot: save it to `assets/img/projects/` (WebP or JPG, about 1000px wide), then add `image: "assets/img/projects/your-file.webp"` to that project.
- New tool: add `{ name: "Tool", logo: "assets/logos/tool.svg" }` to a group in `tools`. No logo? Use `mark: "Tl"` instead of `logo`. Tool logos come from svgl.app.
- New resume: replace `assets/docs/Ahmad-Fauzan-Rinaufaldi-Resume.pdf` and keep the same file name.
- After editing CSS or JS, bump `?v=2` to `?v=3` in `index.html` so returning visitors get the new version.

## Structure

```
index.html          page structure + meta / Open Graph tags
css/style.css       all styling (mobile-first)
js/content.js       ← all editable text
js/main.js          renders content.js into the page
assets/logos/       tool logos (Skills section + hero row)
assets/img/         headshot cutout, projects/, photos/, brands/, certs/, badges/, og-image, favicon
assets/docs/        resume + portfolio PDFs
```

## Preview locally

```
python -m http.server 8000
```

Then open http://localhost:8000.
