/* SOJI — 7th Anniversary · render + interaksi */
(function () {
  "use strict";

  var C = window.SOJI_CONTENT;
  if (!C) { console.error("SOJI: content.js belum termuat."); return; }

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function text(sel, value) {
    $$(sel).forEach(function (el) { el.textContent = value; });
  }
  function link(sel, obj) {
    var el = $(sel);
    if (!el || !obj) return;
    el.textContent = obj.label;
    el.setAttribute("href", obj.href);
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---------- brand ---------- */
  text("[data-brand-tagline]", C.brand.tagline);
  text("[data-brand-periode]", C.brand.periode);
  text("[data-brand-kota]",    C.brand.kota);
  text("[data-year]",          new Date().getFullYear());

  /* ---------- nav ---------- */
  var navList = $("[data-nav]");
  if (navList) {
    navList.innerHTML = C.nav.map(function (n) {
      return '<li><a href="' + esc(n.href) + '">' + esc(n.label) + "</a></li>";
    }).join("");
  }

  /* ---------- hero ---------- */
  text("[data-hero-eyebrow]", C.hero.eyebrow);
  text("[data-hero-title]",   C.hero.title);
  text("[data-hero-body]",    C.hero.body);
  link("[data-hero-cta1]",    C.hero.ctaPrimary);
  link("[data-hero-cta2]",    C.hero.ctaSecondary);

  /* ---------- prolog ---------- */
  text("[data-prolog-eyebrow]", C.prolog.eyebrow);
  text("[data-prolog-title]",   C.prolog.title);
  text("[data-prolog-pull]",    C.prolog.pull);
  var prose = $("[data-prolog-body]");
  if (prose) {
    prose.innerHTML = C.prolog.paragraphs.map(function (p) {
      return '<p class="reveal">' + esc(p) + "</p>";
    }).join("");
  }

  /* ---------- timeline ---------- */
  text("[data-timeline-eyebrow]", C.timeline.eyebrow);
  text("[data-timeline-title]",   C.timeline.title);
  var tl = $("[data-timeline]");
  if (tl) {
    tl.innerHTML = C.timeline.items.map(function (it) {
      return '<li class="t-item reveal">' +
        '<span class="t-dot" aria-hidden="true"></span>' +
        '<div class="t-meta"><span class="t-year">' + esc(it.year) + "</span>" +
        '<span class="t-tag">' + esc(it.tag) + "</span></div>" +
        '<h3 class="t-title">' + esc(it.title) + "</h3>" +
        '<p class="t-body">' + esc(it.body) + "</p>" +
      "</li>";
    }).join("");
  }

  /* ---------- milestones ---------- */
  text("[data-ms-eyebrow]", C.milestones.eyebrow);
  text("[data-ms-note]",    C.milestones.note || "");
  var stats = $("[data-milestones]");
  if (stats) {
    stats.innerHTML = C.milestones.items.map(function (m) {
      return '<div class="stat reveal">' +
        '<div class="stat-v" data-to="' + Number(m.value) + '" data-suffix="' + esc(m.suffix || "") + '">0</div>' +
        '<p class="stat-l">' + esc(m.label) + "</p>" +
      "</div>";
    }).join("");
  }

  /* ---------- pillars ---------- */
  text("[data-pillars-eyebrow]", C.pillars.eyebrow);
  text("[data-pillars-title]",   C.pillars.title);
  var pil = $("[data-pillars]");
  if (pil) {
    pil.innerHTML = C.pillars.items.map(function (p) {
      return '<article class="pillar reveal">' +
        '<span class="p-no">' + esc(p.no) + "</span>" +
        '<h3 class="p-title">' + esc(p.title) + "</h3>" +
        '<p class="p-body">' + esc(p.body) + "</p>" +
      "</article>";
    }).join("");
  }

  /* ---------- services ---------- */
  text("[data-services-eyebrow]", C.services.eyebrow);
  text("[data-services-title]",   C.services.title);
  var svc = $("[data-services]");
  if (svc) {
    svc.innerHTML = C.services.items.map(function (s) {
      return '<div class="svc reveal">' +
        '<div class="svc-main"><h3 class="svc-name">' + esc(s.name) + "</h3>" +
        '<p class="svc-desc">' + esc(s.desc) + "</p></div>" +
        '<span class="svc-meta">' + esc(s.meta || "") + "</span>" +
      "</div>";
    }).join("");
  }

  /* ---------- voices ---------- */
  text("[data-voices-eyebrow]", C.voices.eyebrow);
  text("[data-voices-title]",   C.voices.title);
  var vo = $("[data-voices]");
  if (vo) {
    vo.innerHTML = C.voices.items.map(function (v) {
      return '<figure class="voice reveal">' +
        '<blockquote class="voice-q">' + esc(v.quote) + "</blockquote>" +
        '<figcaption><p class="voice-n">' + esc(v.name) + "</p>" +
        '<p class="voice-m">' + esc(v.meta || "") + "</p></figcaption>" +
      "</figure>";
    }).join("");
  }

  /* ---------- anniversary ---------- */
  text("[data-anniv-eyebrow]", C.anniversary.eyebrow);
  text("[data-anniv-title]",   C.anniversary.title);
  text("[data-anniv-body]",    C.anniversary.body);
  text("[data-anniv-periode]", C.anniversary.periode);
  link("[data-anniv-cta]",     C.anniversary.cta);
  var perks = $("[data-anniv-items]");
  if (perks) {
    perks.innerHTML = C.anniversary.items.map(function (p) {
      return '<article class="perk reveal">' +
        '<h3 class="perk-t">' + esc(p.title) + "</h3>" +
        '<p class="perk-d">' + esc(p.desc) + "</p>" +
      "</article>";
    }).join("");
  }

  /* ---------- closing ---------- */
  text("[data-closing-title]", C.closing.title);
  text("[data-closing-body]",  C.closing.body);
  link("[data-closing-cta]",   C.closing.cta);

  /* ---------- contact ---------- */
  text("[data-contact-eyebrow]", C.contact.eyebrow);
  text("[data-contact-title]",   C.contact.title);
  var ct = $("[data-contact]");
  if (ct) {
    var rows = [
      { label: "Alamat", value: C.contact.alamat },
      { label: "Jam buka", value: C.contact.jam },
      { label: "WhatsApp", value: C.contact.whatsapp },
      { label: "Instagram", value: C.contact.instagram },
      { label: "TikTok", value: C.contact.tiktok },
      { label: "Email", value: C.contact.email },
    ];
    ct.innerHTML = rows.filter(function (r) { return !!r.value; }).map(function (r) {
      var v = r.value;
      var body = (typeof v === "string")
        ? '<p class="c-value">' + esc(v) + "</p>"
        : '<a class="c-value" href="' + esc(v.href) + '" target="_blank" rel="noopener">' + esc(v.label) + "</a>";
      return '<div class="c-item reveal"><p class="c-label">' + esc(r.label) + "</p>" + body + "</div>";
    }).join("");
  }

  /* ---------- reveal on scroll ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = $$(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el, i) {
      el.style.transitionDelay = ((i % 4) * 70) + "ms";
      io.observe(el);
    });
  }

  /* ---------- counters ---------- */
  function countUp(el) {
    var to = Number(el.getAttribute("data-to")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduce) { el.textContent = to.toLocaleString("id-ID") + suffix; return; }
    var dur = 1400, t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased).toLocaleString("id-ID") + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = $$("[data-to]");
  if (!("IntersectionObserver" in window)) {
    counters.forEach(countUp);
  } else {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        countUp(e.target);
        co.unobserve(e.target);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---------- header + menu ---------- */
  var header = $("#siteHeader");
  var onScroll = function () {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var burger = $("#burger"), nav = $("#nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName !== "A") return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }
})();
