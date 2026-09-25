/* Renders js/content.js into the page. Edit content there, not here. */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) return;

  // Escape text before it goes into markup
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function pad(n) { return String(n).padStart(2, "0"); }
  function list(items, cls) {
    return '<ul class="' + cls + '">' + items.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>";
  }
  // Clickable image that opens the zoom view. group = images you can step through together.
  function zoomImg(src, alt, group, opts) {
    opts = opts || {};
    return '<button type="button" class="zoom-btn' + (opts.cls ? " " + opts.cls : "") + '" data-zoom="' + esc(opts.full || src) +
      '" data-group="' + esc(group) + '" data-alt="' + esc(alt) + '" aria-label="Enlarge image: ' + esc(alt) + '">' +
      '<img src="' + esc(src) + '" alt="" loading="lazy" decoding="async"' +
      (opts.focus || opts.ratio ? ' style="' + (opts.focus ? "object-position:" + esc(opts.focus) + ";" : "") + (opts.ratio ? "aspect-ratio:" + esc(opts.ratio) + ";" : "") + '"' : "") + ">" +
      (opts.badge ? '<span class="zoom-count">' + esc(opts.badge) + "</span>" : "") +
      '<span class="zoom-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/></svg></span></button>';
  }
  function svg(paths, cls) {
    return '<svg class="' + (cls || "icon-line") + '" viewBox="0 0 24 24" aria-hidden="true">' + paths + "</svg>";
  }

  // Line icons (Lucide shapes)
  var ICONS = {
    map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    signal: '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>',
    trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    network: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/>',
    pen: '<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.4 1.4 1.4 2.8 2.5 2.8z"/>',
    text: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m21 7-9 6-9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9l-.8-1.2A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'
  };

  // Plain text bindings
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = S[el.getAttribute("data-bind")];
    if (v != null) el.textContent = v;
  });

  // Links
  var hrefs = {
    resume: S.resume,
    portfolioPdf: S.portfolioPdf,
    linkedin: S.linkedin,
    github: S.github,
    gmailCompose: S.gmailCompose,
    email: "mailto:" + S.email,
    phone: "tel:" + S.phone.replace(/[^\d+]/g, "")
  };
  document.querySelectorAll("[data-href]").forEach(function (el) {
    var h = hrefs[el.getAttribute("data-href")];
    if (!h) return;
    el.setAttribute("href", h);
    if (el.hasAttribute("download")) el.setAttribute("download", h.split("/").pop());
  });

  /* ── Hero ─────────────────────────────────────────── */
  $("hero-stats").innerHTML = S.heroStats.map(function (s) {
    return '<li><span class="hero-stat-value">' + esc(s.value) + '</span><span class="hero-stat-label">' + esc(s.label) + "</span></li>";
  }).join("");
  $("hero-tools").innerHTML = S.heroTools.map(function (t, i) {
    return '<li class="float" style="--i:' + i + '" title="' + esc(t.name) + '"><span class="tool-chip"><img src="' + esc(t.logo) +
      '" alt="" width="30" height="30" decoding="async"></span><span class="visually-hidden">' + esc(t.name) + "</span></li>";
  }).join("");
  function str(s) { return '<span class="c-str">"' + esc(s) + '"</span>'; }
  $("code-card").innerHTML =
    '<span class="c-var">analyst</span> = {\n' +
    "  " + str("name") + ": " + str(S.nickname) + ",\n" +
    "  " + str("stack") + ": [" + [str("Python"), str("SQL"), str("Power BI")].join(", ") + "],\n" +
    "  " + str("based_in") + ": " + str("Surabaya") + "\n" +
    '}<span class="caret" aria-hidden="true"></span>';

  /* ── About ────────────────────────────────────────── */
  $("about-text").innerHTML = S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("about-stats").innerHTML = S.stats.map(function (s) {
    return '<div class="stat reveal"><span class="stat-icon">' + svg(ICONS[s.icon] || ICONS.grid) + "</span>" +
      '<div><span class="stat-value" data-count="' + esc(s.value) + '">' + esc(s.value) + '</span><span class="stat-label">' + esc(s.label) + "</span></div></div>";
  }).join("");
  var e = S.education;
  $("edu-card").innerHTML =
    (e.photo ? '<img class="edu-photo" src="' + esc(e.photo) + '" alt="Information Systems department building at ITS" loading="lazy" decoding="async">' : "") +
    '<div class="edu-body">' +
    (e.logo ? '<span class="edu-logo"><img src="' + esc(e.logo) + '" alt="ITS logo" width="120" height="74" loading="lazy"></span>' : "") +
    '<div><span class="eyebrow">Education</span><h3 class="h3">' + esc(e.school) + "</h3><p>" + esc(e.degree) + '</p><p class="muted">' + esc(e.dates) + "</p></div></div>";

  /* ── Projects: cards + detail modal ───────────────── */
  function media(p, cls) {
    return p.image
      ? '<img src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async"' + (p.fit ? ' style="object-fit:' + esc(p.fit) + ';object-position:center"' : "") + ">"
      : '<div class="media-fallback ' + (cls || "") + '">' + svg(ICONS[p.icon] || ICONS.grid) + "</div>";
  }
  function card(p, i, small) {
    return '<article class="project' + (small ? " project-sm" : "") + ' reveal" style="--i:' + (i % 3) + '">' +
      '<button class="project-hit" type="button" data-project="' + S.projects.indexOf(p) + '" aria-haspopup="dialog">' +
      '<span class="visually-hidden">Open details: </span>' + esc(p.title) + "</button>" +
      '<div class="project-media">' + media(p) + (small ? "" : '<span class="project-num">' + pad(i + 1) + "</span>") + "</div>" +
      '<div class="project-body">' +
      '<span class="tag-soft">' + esc(p.context) + "</span>" +
      '<h3 class="h3" aria-hidden="true">' + esc(p.title) + "</h3>" +
      '<p class="card-hook">' + esc(p.hook) + "</p>" +
      (p.metric ? '<div class="metric"><span class="metric-value">' + esc(p.metric) + '</span><span class="metric-label">' + esc(p.metricLabel) + "</span></div>" : "") +
      '<ul class="tags" aria-label="Tech stack">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      '<span class="card-more" aria-hidden="true">View details ' + svg(ICONS.arrow) + "</span>" +
      "</div></article>";
  }
  var featured = S.projects.filter(function (p) { return p.featured; });
  var others = S.projects.filter(function (p) { return !p.featured; });
  $("project-list").innerHTML = featured.map(function (p, i) { return card(p, i, false); }).join("");
  $("more-projects").innerHTML = others.map(function (p, i) { return card(p, i, true); }).join("");

  var modal = $("project-modal");
  var modalBody = $("modal-body");
  var lastTrigger = null;
  function openProject(p) {
    var imgs = [p.image].concat(p.gallery || []).filter(Boolean);
    var links = "";
    if (p.docs) links += '<a class="btn btn-grad" href="' + esc(p.docs) + '" target="_blank" rel="noopener">' + svg(ICONS.folder) + esc(p.docsLabel || "Supporting documents") + "</a>";
    if (p.repo) links += '<a class="btn btn-ghost" href="' + esc(p.repo) + '" target="_blank" rel="noopener">' + svg(ICONS.code) + "GitHub repository</a>";
    if (!links) links = '<p class="muted small">Supporting documents link coming soon.</p>';
    var extra = imgs.slice(1);
    modalBody.innerHTML =
      (imgs.length
        ? '<div class="modal-lead">' + zoomImg(imgs[0], p.title + " — main screenshot", "project") + "</div>"
        : '<div class="modal-fallback">' + svg(ICONS[p.icon] || ICONS.grid) + "</div>") +
      '<div class="modal-content">' +
      '<span class="tag-soft">' + esc(p.context) + "</span>" +
      '<h2 class="h3 modal-title" id="modal-title">' + esc(p.title) + "</h2>" +
      (p.metric ? '<div class="metric"><span class="metric-value">' + esc(p.metric) + '</span><span class="metric-label">' + esc(p.metricLabel) + "</span></div>" : "") +
      '<p class="modal-desc">' + esc(p.desc) + "</p>" +
      (p.highlight ? '<p class="card-highlight"><span>Highlight</span>' + esc(p.highlight) + "</p>" : "") +
      (p.story ? p.story.map(function (s) { return '<p class="modal-story">' + esc(s) + "</p>"; }).join("") : "") +
      (p.points ? list(p.points, "bullets") : "") +
      '<ul class="tags" aria-label="Tech stack">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      '<div class="btn-row modal-links">' + links + "</div>" +
      (extra.length
        ? '<div class="modal-gallery"><h3 class="eyebrow">More images</h3><div class="modal-gallery-grid">' + extra.map(function (src, k) {
            return zoomImg(src, p.title + " — image " + (k + 2), "project");
          }).join("") + "</div></div>"
        : "") +
      "</div>";
    modal.scrollTop = 0;
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
    document.documentElement.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
  }
  function closeProject() {
    if (typeof modal.close === "function") modal.close(); else { modal.removeAttribute("open"); onClosed(); }
  }
  function onClosed() {
    document.documentElement.classList.remove("modal-open");
    if (lastTrigger) lastTrigger.focus();
  }
  modal.addEventListener("close", onClosed);
  modal.querySelector(".modal-close").addEventListener("click", closeProject);
  modal.addEventListener("click", function (ev) { if (ev.target === modal) closeProject(); });
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-project]");
    if (!b) return;
    lastTrigger = b;
    openProject(S.projects[+b.getAttribute("data-project")]);
  });

  /* ── Experience: highlights + "Show more" ─────────── */
  function badge(j) {
    return j.logo
      ? '<span class="co-logo"><img src="' + esc(j.logo) + '" alt="" width="48" height="48" loading="lazy"></span>'
      : '<span class="co-logo co-mark">' + esc(j.mark || j.company.slice(0, 2)) + "</span>";
  }
  function role(j, idx) {
    var hl = j.highlights || [];
    var rest;
    if (j.phases) {
      rest = j.phases.map(function (p) {
        var items = p.items.filter(function (b) { return hl.indexOf(b) < 0; });
        return items.length ? '<div class="phase"><h4>' + esc(p.title) + "</h4>" + list(items, "bullets") + "</div>" : "";
      }).join("");
    } else {
      var items = (j.items || []).filter(function (b) { return hl.indexOf(b) < 0; });
      rest = items.length ? list(items, "bullets") : "";
    }
    var restCount = j.phases
      ? j.phases.reduce(function (n, p) { return n + p.items.filter(function (b) { return hl.indexOf(b) < 0; }).length; }, 0)
      : (j.items || []).filter(function (b) { return hl.indexOf(b) < 0; }).length;
    var id = "role-more-" + idx;
    var photos = (j.photos || []).map(function (ph) {
      return zoomImg(ph.src, ph.alt || j.company, "role-" + idx, { focus: ph.focus, ratio: ph.ratio });
    }).join("");
    return '<li class="role reveal">' +
      '<div class="role-side">' +
      '<div class="role-head">' + badge(j) +
      '<div class="role-who"><h3>' + esc(j.company) + '</h3><span class="role-title">' + esc(j.role) + "</span>" +
      '<span class="role-meta"><span class="tag-soft">' + esc(j.tag) + "</span>" + esc(j.dates) + " · " + esc(j.location) + "</span></div></div>" +
      (photos ? '<div class="role-photos' + ((j.photos || []).length > 1 ? " two" : "") + '">' + photos + "</div>" : "") +
      "</div>" +
      '<div class="role-what">' +
      (hl.length ? list(hl, "bullets bullets-key") : "") +
      (restCount
        ? '<div class="role-more" id="' + id + '" hidden>' +
            (j.summary ? '<p class="role-summary">' + esc(j.summary) + "</p>" : "") + rest + "</div>" +
          '<button class="more-toggle" type="button" aria-expanded="false" aria-controls="' + id + '" data-rest="' + restCount + '">' +
            '<span>Show more (' + restCount + ")</span>" + svg(ICONS.chevron) + "</button>"
        : "") +
      "</div></li>";
  }
  $("experience-list").innerHTML = S.experience.map(role).join("");
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest(".more-toggle");
    if (!b) return;
    var open = b.getAttribute("aria-expanded") !== "true";
    var panel = $(b.getAttribute("aria-controls"));
    b.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    b.querySelector("span").textContent = open ? "Show less" : "Show more (" + b.getAttribute("data-rest") + ")";
  });

  /* ── Organizational experience ────────────────────── */
  var f = S.orgFeatured;
  $("org-featured").innerHTML =
    '<div class="org-photos">' +
    zoomImg(f.photo, f.photoAlt, "ise", { cls: "org-photo-main" }) +
    ((f.crew || []).length
      ? '<div class="org-crew">' + f.crew.map(function (c) { return zoomImg(c.src, c.alt, "ise"); }).join("") + "</div>"
      : "") +
    "</div>" +
    '<div class="org-body">' +
    '<span class="tag-soft">Featured · Leadership</span>' +
    '<h3 class="org-title">' + esc(f.name) + "</h3>" +
    '<p class="role-title">' + esc(f.role) + '</p><p class="role-meta">' + esc(f.dates) + " · " + esc(f.location) + "</p>" +
    '<div class="org-stats">' + f.stats.map(function (s) {
      return '<div><span class="org-stat-value">' + esc(s.value) + '</span><span class="org-stat-label">' + esc(s.label) + "</span></div>";
    }).join("") + "</div>" +
    list(f.items, "bullets") +
    "</div>";
  $("org-list").innerHTML = S.orgRoles.map(function (o, k) {
    var gallery = o.photos || (o.photo ? [o.photo] : []);
    var tile = o.photo || gallery[0];
    var media = "";
    if (tile) {
      media = zoomImg(tile, o.name + " committee photo", "org-" + k, { full: gallery[0] || tile, focus: o.focus, badge: gallery.length > 1 ? "+" + (gallery.length - 1) : "" });
      // extra images join the same group but stay hidden until the zoom view steps to them
      media += gallery.slice(1).map(function (src, n) {
        return '<button type="button" class="zoom-btn" hidden data-zoom="' + esc(src) + '" data-group="org-' + k + '" data-alt="' + esc(o.name) + " photo " + (n + 2) + '"></button>';
      }).join("");
    } else {
      media = '<span class="org-fallback">' + svg(ICONS.users) + "</span>";
    }
    return '<li class="org-item reveal">' + media +
      '<div class="org-item-body"><h4>' + esc(o.name) + "</h4><p>" + esc(o.role) + "</p>" + (o.year ? '<span class="org-year">' + esc(o.year) + "</span>" : "") + "</div></li>";
  }).join("");

  /* ── Skills: compact chips ────────────────────────── */
  $("skill-list").innerHTML = S.skills.map(function (g) {
    return '<div class="skill-group reveal"><h3>' + esc(g.group) + '</h3><ul class="chips">' +
      g.items.map(function (t) {
        return "<li>" + (t.logo ? '<img src="' + esc(t.logo) + '" alt="" width="16" height="16" loading="lazy">' : "") + esc(t.name) + "</li>";
      }).join("") + "</ul></div>";
  }).join("");

  /* ── Credentials (unchanged) ──────────────────────── */
  var g = S.googleCloud;
  var gTitle = g.url
    ? '<a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(g.title) + " " + svg(ICONS.arrow) + "</a>"
    : esc(g.title);
  $("cred-list").innerHTML =
    '<article class="cred-main reveal"><div class="cred-head"><span class="tool-chip"><img src="assets/logos/google-cloud.svg" alt="" width="40" height="40"></span><div><h3 class="h3">' + gTitle +
    '</h3><span class="muted">Digital credentials · ' + esc(g.year) + "</span></div></div>" +
    '<ul class="badge-list">' + g.badges.map(function (b) {
      return "<li>" + zoomImg(b.image, "Google Cloud skill badge: " + b.name, "gcp") + "<span>" + esc(b.name) + "</span></li>";
    }).join("") + "</ul></article>" +
    '<div class="cred-side">' + S.certifications.map(function (c) {
      var name = c.url ? '<a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(c.name) + "</a>" : esc(c.name);
      return '<article class="cred reveal">' +
        (c.image ? zoomImg(c.image, c.name + " certificate", "certs", { cls: "cred-img" }) : "") +
        '<div class="cred-body">' + (c.logo ? '<span class="cred-logo"><img src="' + esc(c.logo) + '" alt="' + esc(c.issuer) + ' logo" loading="lazy"></span>' : "") +
        '<h3 class="h4">' + name + '</h3><span class="muted">' + esc(c.issuer) + " · " + esc(c.year) + "</span></div></article>";
    }).join("") + "</div>";

  /* ── Image zoom view (projects, experience, organizations, credentials) ── */
  var lb = $("lightbox");
  var lbImg = $("lb-img");
  var lbCap = $("lb-cap");
  var lbItems = [];
  var lbIndex = 0;
  var lbTrigger = null;
  function lbShow(i) {
    lbIndex = (i + lbItems.length) % lbItems.length;
    var b = lbItems[lbIndex];
    lbImg.src = b.getAttribute("data-zoom");
    lbImg.alt = b.getAttribute("data-alt") || "";
    lbCap.textContent = (b.getAttribute("data-alt") || "") + (lbItems.length > 1 ? "  ·  " + (lbIndex + 1) + " / " + lbItems.length : "");
    lb.classList.toggle("single", lbItems.length < 2);
  }
  function lbOpen(btn) {
    var group = btn.getAttribute("data-group");
    var scope = btn.closest("dialog") || document;
    lbItems = Array.prototype.slice.call(scope.querySelectorAll('.zoom-btn[data-group="' + group + '"]'));
    lbTrigger = btn;
    lbShow(lbItems.indexOf(btn));
    if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
    lb.querySelector(".lb-close").focus();
  }
  function lbClose() { if (typeof lb.close === "function") lb.close(); else lb.removeAttribute("open"); }
  lb.addEventListener("close", function () { lbImg.removeAttribute("src"); if (lbTrigger) lbTrigger.focus(); });
  // Escape should close only the zoom view, not the project detail underneath it
  var lbClosing = false;
  lb.addEventListener("cancel", function () { lbClosing = true; setTimeout(function () { lbClosing = false; }, 0); });
  modal.addEventListener("cancel", function (ev) { if (lb.open || lbClosing) ev.preventDefault(); });
  lb.querySelector(".lb-close").addEventListener("click", lbClose);
  lb.querySelector(".lb-prev").addEventListener("click", function () { lbShow(lbIndex - 1); });
  lb.querySelector(".lb-next").addEventListener("click", function () { lbShow(lbIndex + 1); });
  lb.addEventListener("click", function (ev) { if (ev.target === lb || ev.target.classList.contains("lb-figure")) lbClose(); });
  lb.addEventListener("keydown", function (ev) {
    if (lbItems.length < 2) return;
    if (ev.key === "ArrowRight") { ev.preventDefault(); lbShow(lbIndex + 1); }
    if (ev.key === "ArrowLeft") { ev.preventDefault(); lbShow(lbIndex - 1); }
  });
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest(".zoom-btn");
    if (b) lbOpen(b);
  });

  /* ── Contact (unchanged) ──────────────────────────── */
  function contactCard(icon, label, value, href, copy) {
    return '<li class="contact-card"><span class="stat-icon">' + svg(ICONS[icon]) + "</span>" +
      '<div><span class="eyebrow">' + esc(label) + "</span>" +
      (href ? '<a href="' + esc(href) + '">' + esc(value) + "</a>" : "<span>" + esc(value) + "</span>") + "</div>" +
      (copy ? '<button class="copy-btn" type="button" data-copy="' + esc(value) + '" aria-label="Copy ' + esc(label.toLowerCase()) + '">' + svg(ICONS.copy) + "</button>" : "") +
      "</li>";
  }
  $("contact-cards").innerHTML =
    contactCard("mail", "Email", S.email, hrefs.email, true) +
    contactCard("phone", "Phone", S.phone, hrefs.phone, true) +
    contactCard("pin", "Based in", S.location);
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest(".copy-btn");
    if (!b || !navigator.clipboard) return;
    navigator.clipboard.writeText(b.getAttribute("data-copy")).then(function () {
      b.classList.add("done"); b.setAttribute("aria-label", "Copied");
      setTimeout(function () { b.classList.remove("done"); }, 1600);
    });
  });

  $("year").textContent = new Date().getFullYear();

  /* ── Header: mobile menu + border once scrolled ───── */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var nav = $("site-nav");
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
  }
  toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  nav.addEventListener("click", function (ev) { if (ev.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && nav.classList.contains("open")) { setMenu(false); toggle.focus(); }
  });
  window.addEventListener("scroll", function () { header.classList.toggle("scrolled", window.scrollY > 8); }, { passive: true });

  if (!("IntersectionObserver" in window)) return;

  // Highlight the nav link for the section in view
  var links = {};
  nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      Object.keys(links).forEach(function (id) { links[id].removeAttribute("aria-current"); });
      if (links[en.target.id]) links[en.target.id].setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(links).forEach(function (id) { var el = $(id); if (el) spy.observe(el); });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Fade-in on scroll
  document.documentElement.classList.add("anim");
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
      en.target.querySelectorAll("[data-count]").forEach(countUp);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // Count stat numbers up once, ending on their exact text
  function countUp(el) {
    var final = el.getAttribute("data-count");
    var m = final.match(/^([\d,]*\.?\d+)(.*)$/);
    if (!m) return;
    var target = parseFloat(m[1].replace(/,/g, ""));
    var decimals = (m[1].split(".")[1] || "").length;
    var commas = m[1].indexOf(",") > -1;
    var t0 = null;
    function frame(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1100, 1);
      var v = target * (1 - Math.pow(1 - p, 3));
      var s = v.toFixed(decimals);
      if (commas) s = Number(s).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      el.textContent = p < 1 ? s + m[2] : final;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
})();
