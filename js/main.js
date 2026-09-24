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
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m21 7-9 6-9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
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
    email: "mailto:" + S.email,
    phone: "tel:" + S.phone.replace(/[^\d+]/g, "")
  };
  document.querySelectorAll("[data-href]").forEach(function (el) {
    var h = hrefs[el.getAttribute("data-href")];
    if (!h) return;
    el.setAttribute("href", h);
    if (el.hasAttribute("download")) el.setAttribute("download", h.split("/").pop());
  });

  // Tool tile (logo or text mark)
  var toolIndex = {};
  S.tools.forEach(function (g) { g.items.forEach(function (t) { toolIndex[t.name] = t; }); });
  function toolMark(t) {
    return t.logo
      ? '<img src="' + esc(t.logo) + '" alt="" width="40" height="40" loading="lazy" decoding="async">'
      : '<span class="tool-mark">' + esc(t.mark || t.name.slice(0, 2)) + "</span>";
  }

  // Hero: tool logo row + code card
  $("hero-tools").innerHTML = S.heroTools.map(function (n, i) {
    var t = toolIndex[n] || { name: n };
    return '<li class="float" style="--i:' + i + '" title="' + esc(t.name) + '"><span class="tool-chip">' + toolMark(t) +
      '</span><span class="visually-hidden">' + esc(t.name) + "</span></li>";
  }).join("");

  function str(s) { return '<span class="c-str">"' + esc(s) + '"</span>'; }
  $("code-card").innerHTML =
    '<span class="c-var">analyst</span> = {\n' +
    "  " + str("name") + ": " + str(S.nickname) + ",\n" +
    "  " + str("focus") + ": " + str("Data Analytics & Engineering") + ",\n" +
    "  " + str("stack") + ": [" + [str("Python"), str("SQL"), str("Power BI")].join(", ") + "],\n" +
    "  " + str("based_in") + ": " + str("Surabaya") + "\n" +
    '}<span class="caret" aria-hidden="true"></span>';

  // About
  $("about-text").innerHTML = S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("about-stats").innerHTML = S.stats.map(function (s) {
    return '<div class="stat reveal"><span class="stat-icon">' + svg(ICONS[s.icon] || ICONS.grid) + "</span>" +
      '<div><span class="stat-value" data-count="' + esc(s.value) + '">' + esc(s.value) + '</span><span class="stat-label">' + esc(s.label) + "</span></div></div>";
  }).join("");
  var e = S.education;
  $("edu-card").innerHTML =
    (e.photo ? '<img class="edu-photo" src="' + esc(e.photo) + '" alt="" loading="lazy" decoding="async">' : "") +
    '<div class="edu-body">' +
    (e.logo ? '<span class="edu-logo"><img src="' + esc(e.logo) + '" alt="ITS logo" width="120" height="74" loading="lazy"></span>' : "") +
    '<div><span class="eyebrow">Education</span><h3 class="h3">' + esc(e.school) + "</h3><p>" + esc(e.degree) + '</p><p class="muted">' + esc(e.dates) + "</p></div></div>";

  // Experience + leadership
  function role(j) {
    var body = j.phases
      ? j.phases.map(function (p) { return '<div class="phase"><h4>' + esc(p.title) + "</h4>" + list(p.items, "bullets") + "</div>"; }).join("")
      : list(j.items || [], "bullets");
    var badge = j.logo
      ? '<span class="co-logo"><img src="' + esc(j.logo) + '" alt="" width="48" height="48" loading="lazy"></span>'
      : '<span class="co-logo co-mark">' + esc(j.mark || j.company.slice(0, 2)) + "</span>";
    return '<li class="role reveal">' +
      '<div class="role-head">' + badge +
      '<div class="role-who"><h3>' + esc(j.company) + '</h3><span class="role-title">' + esc(j.role) + "</span>" +
      '<span class="role-meta"><span class="tag-soft">' + esc(j.tag) + "</span>" + esc(j.dates) + " · " + esc(j.location) + "</span></div></div>" +
      (j.summary ? '<p class="role-summary">' + esc(j.summary) + "</p>" : "") +
      '<div class="role-what">' + body + "</div>" +
      (j.photo ? '<img class="role-photo" src="' + esc(j.photo) + '" alt="' + esc(j.photoAlt || "") + '" loading="lazy" decoding="async">' : "") +
      "</li>";
  }
  $("experience-list").innerHTML = S.experience.map(role).join("");
  $("leadership-list").innerHTML = S.leadership.map(role).join("");

  // Projects
  $("project-list").innerHTML = S.projects.map(function (p, i) {
    var media = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' — screenshot" loading="lazy" decoding="async">'
      : '<div class="media-fallback">' + svg(ICONS[p.icon] || ICONS.grid) + "</div>";
    return '<article class="project reveal" style="--i:' + (i % 3) + '">' +
      '<div class="project-media">' + media + '<span class="project-num">' + pad(i + 1) + "</span></div>" +
      '<div class="project-body">' +
      '<div class="project-top"><span class="tag-soft">' + esc(p.context) + "</span></div>" +
      '<div class="metric"><span class="metric-value">' + esc(p.metric) + '</span><span class="metric-label">' + esc(p.metricLabel) + "</span></div>" +
      '<h3 class="h3">' + esc(p.title) + "</h3>" +
      '<p class="card-desc">' + esc(p.desc) + "</p>" +
      (p.highlight ? '<p class="card-highlight"><span>Highlight</span>' + esc(p.highlight) + "</p>" : "") +
      '<ul class="tags" aria-label="Tech stack">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      "</div></article>";
  }).join("");
  $("more-projects").innerHTML = S.moreProjects.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("");

  // Skills: tool tiles + text list
  $("tool-groups").innerHTML = S.tools.map(function (g) {
    return '<div class="tool-group reveal"><h3 class="tool-group-h">' + esc(g.group) + '</h3><ul class="tool-grid">' +
      g.items.map(function (t, i) {
        return '<li class="tool-tile" style="--i:' + i + '"><span class="tool-chip">' + toolMark(t) + '</span><span class="tool-name">' + esc(t.name) + "</span></li>";
      }).join("") + "</ul></div>";
  }).join("");
  $("skill-list").innerHTML = S.skills.map(function (s) {
    return '<div class="skill-group"><h4>' + esc(s.group) + '</h4><ul class="chips">' +
      s.items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  // Credentials
  var g = S.googleCloud;
  var gTitle = g.url
    ? '<a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(g.title) + " " + svg(ICONS.arrow) + "</a>"
    : esc(g.title);
  $("cred-list").innerHTML =
    '<article class="cred-main reveal"><div class="cred-head"><span class="tool-chip"><img src="assets/logos/google-cloud.svg" alt="" width="40" height="40"></span><div><h3 class="h3">' + gTitle +
    '</h3><span class="muted">Digital credentials · ' + esc(g.year) + "</span></div></div>" +
    '<ul class="badge-list">' + g.badges.map(function (b) {
      return '<li><img src="' + esc(b.image) + '" alt="Google Cloud skill badge: ' + esc(b.name) + '" width="480" height="322" loading="lazy" decoding="async"><span>' + esc(b.name) + "</span></li>";
    }).join("") + "</ul></article>" +
    '<div class="cred-side">' + S.certifications.map(function (c) {
      var name = c.url ? '<a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(c.name) + "</a>" : esc(c.name);
      return '<article class="cred reveal">' +
        (c.image ? '<img class="cred-img" src="' + esc(c.image) + '" alt="' + esc(c.name) + ' certificate" loading="lazy" decoding="async">' : "") +
        '<div class="cred-body">' + (c.logo ? '<img class="cred-logo" src="' + esc(c.logo) + '" alt="" width="56" height="30" loading="lazy">' : "") +
        '<h3 class="h4">' + name + '</h3><span class="muted">' + esc(c.issuer) + " · " + esc(c.year) + "</span></div></article>";
    }).join("") + "</div>";

  // Contact cards
  function contactCard(icon, label, value, href, copy, ext) {
    return '<li class="contact-card"><span class="stat-icon">' + svg(ICONS[icon]) + "</span>" +
      '<div><span class="eyebrow">' + esc(label) + "</span>" +
      (href ? '<a href="' + esc(href) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(value) + "</a>" : "<span>" + esc(value) + "</span>") + "</div>" +
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

  // Header: mobile menu + shadow once scrolled
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

  // Count the stat numbers up once, keeping their exact final text
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
