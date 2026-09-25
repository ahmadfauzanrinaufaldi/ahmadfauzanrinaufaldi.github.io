"""Stamp index.html's CSS/JS links with a short hash of each file's contents.

Run before every push:   python tools/bust_cache.py

A changed file gets a new ?v=<hash>, so browsers and GitHub Pages' CDN fetch
the fresh copy instead of a stale cached one. Unchanged files keep their hash.
"""
import hashlib
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"
ASSETS = ["css/style.css", "js/content.js", "js/main.js"]

html = INDEX.read_text(encoding="utf-8")
for rel in ASSETS:
    digest = hashlib.md5((ROOT / rel).read_bytes()).hexdigest()[:8]
    html, n = re.subn(r'(["\'])' + re.escape(rel) + r'(\?v=[^"\']*)?\1', r"\g<1>" + rel + "?v=" + digest + r"\g<1>", html)
    print(f"{rel:18} v={digest}  ({n} link{'s' if n != 1 else ''})")
INDEX.write_text(html, encoding="utf-8", newline="")
