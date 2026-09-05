/* =========================================================
   main.js — rendering + interaction. No build step needed.
   ========================================================= */

const REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 11 .6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.3 12c0-6.4-5-11.5-11.3-11.5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/></svg>',
  leetcode: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2 6.8 9a3 3 0 0 0 0 4.2l5.7 5.7a3 3 0 0 0 4.2 0l1.6-1.6a1.2 1.2 0 0 0-1.7-1.7l-1.6 1.6a.6.6 0 0 1-.8 0l-5.7-5.7a.6.6 0 0 1 0-.8l6.7-7a1.2 1.2 0 0 0-1.7-1.7ZM10 14.5a1.2 1.2 0 1 0 0 2.4h8.8a1.2 1.2 0 1 0 0-2.4H10Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.5-5.3a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.6a3 3 0 0 0-2.1 2.1C1 8.4 1 12 1 12s0 3.6.5 5.3a3 3 0 0 0 2.1 2.1C5.3 20 12 20 12 20s6.7 0 8.4-.6a3 3 0 0 0 2.1-2.1c.5-1.7.5-5.3.5-5.3ZM9.8 15.5v-7l6.1 3.5-6.1 3.5Z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.3h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.6 1.7-1.6h1.6V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.2v3.2h2.9V22h3.4Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.9.3 2.3.4.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.9-.2-2.3-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1.1-.4-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.2-1.9.4-2.3.2-.5.5-1 .9-1.4.4-.4.9-.7 1.4-.9.4-.1 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1 0-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3.9-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c0 1 .2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1.9.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1 0 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-.9.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c0-1-.2-1.5-.3-1.9a2.9 2.9 0 0 0-.7-1.1 2.9 2.9 0 0 0-1.1-.7c-.4-.1-.9-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.7-2a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0Z"/></svg>',
  coffee: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h13v2H4V3Zm14 5h1.5A2.5 2.5 0 0 1 22 10.5v1A2.5 2.5 0 0 1 19.5 14H18a7 7 0 0 1-6.4 7H9A7 7 0 0 1 2 14V8h16Zm0 2H4v4a5 5 0 0 0 5 5h2.6a5 5 0 0 0 5-5v-1.1c0-.7 0-.9-.6-.9H18v-2Zm1.5 2H18v2h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 19 19 5M9 5h10v10"/></svg>',
};

function iconLink(icon, label, url) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}" title="${label}">${ICONS[icon] || ""}</a>`;
}

function initialsFor(title) {
  return title
    .split(" ")
    .filter((w) => w.length > 1 || /[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// deterministic hue pick from a string, kept within our two accent families
function hueForString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
  return h;
}

/* ---------------- render: static content ---------------- */

function renderIdentity() {
  const p = SITE_DATA.person;
  document.title = `${p.name} — ${p.roles.join(" · ")}`;
  document.getElementById("meta-description").setAttribute("content", p.about);
  document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = p.name));
  document.querySelectorAll("[data-handle]").forEach((el) => (el.textContent = p.handle));
  document.querySelectorAll("[data-tagline]").forEach((el) => (el.textContent = p.tagline));
  document.querySelectorAll("[data-about]").forEach((el) => (el.textContent = p.about));
  document.querySelectorAll("[data-location]").forEach((el) => (el.textContent = p.location));
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.textContent = p.email;
    el.href = `mailto:${p.email}`;
  });
  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.textContent = p.phone;
    el.href = `tel:${p.phone.replace(/\s+/g, "")}`;
  });
  document.querySelectorAll("[data-resume-link]").forEach((el) => (el.href = p.resumeUrl));

  const focusEl = document.getElementById("hero-panel-rows");
  if (focusEl) {
    focusEl.innerHTML = `
      <div class="row"><span>Location</span><span>${p.location}</span></div>
      <div class="row"><span>Phone</span><span>${p.phone}</span></div>
      <div class="row"><span>Building</span><span>${p.currentlyBuilding}</span></div>
      <div class="row"><span>Learning</span><span>${p.currentlyLearning}</span></div>
      <div class="row"><span>Open to</span><span>${p.collaborateOn}</span></div>
    `;
  }

  const aboutFocus = document.getElementById("about-focus");
  if (aboutFocus) {
    aboutFocus.innerHTML = `
      <span><strong>Currently building</strong> — ${p.currentlyBuilding}</span>
      <span><strong>Currently learning</strong> — ${p.currentlyLearning}</span>
      <span><strong>Open to collaborate on</strong> — ${p.collaborateOn}</span>
    `;
  }
}

function renderSocials() {
  const heroRow = document.getElementById("hero-socials");
  const contactRow = document.getElementById("contact-links");
  if (heroRow) heroRow.innerHTML = SITE_DATA.socials.map((s) => iconLink(s.icon, s.label, s.url)).join("");
  if (contactRow) {
    const phoneDigits = SITE_DATA.person.phone.replace(/\s+/g, "");
    contactRow.innerHTML =
      `<a href="mailto:${SITE_DATA.person.email}">${ICONS.mail}<span>${SITE_DATA.person.email}</span></a>` +
      `<a href="tel:${phoneDigits}">${ICONS.phone}<span>${SITE_DATA.person.phone}</span></a>` +
      SITE_DATA.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${ICONS[s.icon] || ""}<span>${s.label}</span></a>`).join("");
  }
}

function renderSkills() {
  const top = document.getElementById("top-skills");
  const services = document.getElementById("services");
  const stack = document.getElementById("tech-stack");
  if (top) top.innerHTML = SITE_DATA.topSkills.map((s) => `<span class="chip">${s}</span>`).join("");
  if (services) services.innerHTML = SITE_DATA.services.map((s) => `<span class="chip">${s}</span>`).join("");
  if (stack) stack.innerHTML = SITE_DATA.techStack.map((s) => `<div class="stack-item">${s}</div>`).join("");

  const langs = document.getElementById("languages");
  if (langs) {
    langs.innerHTML = SITE_DATA.languages
      .map((l) => `<span class="chip">${l.name} <span style="color:var(--text-faint)">· ${l.level}</span></span>`)
      .join("");
  }
}

function renderPracticeAreas() {
  const el = document.getElementById("practice-areas");
  if (!el) return;
  el.innerHTML = SITE_DATA.practiceAreas
    .map(
      (group) => `
      <div class="practice-card reveal">
        <h3>${group.title}</h3>
        <ul>${group.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>`
    )
    .join("");
  observeReveal(el.querySelectorAll(".reveal"));
}

function designCardHTML(project, idx) {
  const hue = hueForString(project.title);
  const secondHue = (hue + 40) % 360;
  const bg = `linear-gradient(135deg, hsl(${hue} 46% 30%), hsl(${secondHue} 40% 20%))`;
  const photo = project.photos?.[0];
  return `
    <article class="card reveal" data-lightbox-index="${idx}" tabindex="0" role="button" aria-label="View details for ${project.title}">
      <div class="card-art" style="background:${bg}">
        ${photo ? `<img class="card-photo" src="${photo.src}" alt="${photo.alt || project.title}" loading="lazy" />` : ""}
        <div class="weave"></div>
        ${photo ? "" : `<div class="initials">${initialsFor(project.title)}</div>`}
      </div>
      <div class="card-body">
        <h3>${project.title}</h3>
        <div class="card-meta">${[project.dates, project.partner].filter(Boolean).join(" · ") || "Independent project"}</div>
        <p class="summary">${project.summary}</p>
        <div class="card-tags">${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </article>`;
}

function renderDesignWork() {
  const grid = document.getElementById("design-grid");
  if (!grid) return;
  grid.innerHTML = SITE_DATA.designWork.map((p, i) => designCardHTML(p, i)).join("");

  const lightbox = document.getElementById("lightbox");
  const panel = document.getElementById("lightbox-panel");
  const openFor = (idx) => {
    const p = SITE_DATA.designWork[idx];
    const photos = p.photos || [];
    panel.innerHTML = `
      <button class="lightbox-close" aria-label="Close" data-close>${ICONS.arrow}</button>
      ${photos.length ? `<div class="lightbox-photos">${photos.map((photo) => `<img src="${photo.src}" alt="${photo.alt || p.title}" loading="lazy" />`).join("")}</div>` : ""}
      <h3>${p.title}</h3>
      <div class="card-meta">${[p.dates, p.partner].filter(Boolean).join(" · ") || "Independent project"}</div>
      <p class="summary">${p.summary}</p>
      <div class="card-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      ${photos.length ? "" : `<p class="lightbox-note">Add project photos in the <code>photos</code> list for this work item.</p>`}
    `;
    lightbox.classList.add("is-open");
    panel.querySelector("[data-close]").addEventListener("click", closeLightbox);
  };
  const closeLightbox = () => lightbox.classList.remove("is-open");

  grid.querySelectorAll("[data-lightbox-index]").forEach((card) => {
    card.addEventListener("click", () => openFor(Number(card.dataset.lightboxIndex)));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFor(Number(card.dataset.lightboxIndex));
      }
    });
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  observeReveal(grid.querySelectorAll(".reveal"));
  enableTilt(grid.querySelectorAll(".card"));
}

function codeCardHTML(repo) {
  const hue = hueForString(repo.name);
  const bg = `linear-gradient(135deg, hsl(${hue} 20% 16%), hsl(${hue} 26% 10%))`;
  const image = repo.image || SITE_DATA.repositoryImages[repo.name];
  return `
    <article class="card reveal">
      <div class="card-art" style="background:${bg}">
        ${image ? `<img class="card-photo" src="${image}" alt="${repo.name.replace(/_/g, " ")} project preview" loading="lazy" />` : ""}
        <div class="weave"></div>
        ${image ? "" : `<div class="initials">${initialsFor(repo.name.replace(/_/g, " "))}</div>`}
      </div>
      <div class="card-body">
        <h3>${repo.name}</h3>
        <div class="card-meta">${[repo.language, repo.stars != null ? `${repo.stars}★` : null].filter(Boolean).join(" · ")}</div>
        <p class="summary">${repo.description || "No description yet."}</p>
        <div class="card-links">
          <a href="${repo.url}" target="_blank" rel="noopener noreferrer">View code</a>
        </div>
      </div>
    </article>`;
}

async function renderCodeWorkAndStats() {
  const grid = document.getElementById("code-grid");
  const sourceNote = document.getElementById("gh-source-note");
  const data = await GitHubData.getData();

  if (grid) {
    grid.innerHTML = data.repos.map(codeCardHTML).join("");
    observeReveal(grid.querySelectorAll(".reveal"));
    enableTilt(grid.querySelectorAll(".card"));
  }

  if (sourceNote) {
    sourceNote.textContent =
      data.source === "live"
        ? "Live from the GitHub API."
        : data.source === "cache"
        ? "From a recent cached snapshot (GitHub API unavailable)."
        : "Showing saved snapshot — live GitHub data unavailable right now.";
  }

  countUp("stat-repos", data.publicRepos ?? 0);
  countUp("stat-stars", data.totalStars ?? 0);
  countUp("stat-followers", data.followers ?? 0);
}

function renderEducation() {
  const el = document.getElementById("education-timeline");
  if (!el) return;
  el.innerHTML = SITE_DATA.education
    .map(
      (e) => `
      <div class="timeline-item reveal">
        <h3>${e.institution}</h3>
        <div class="card-meta">${[e.program, e.dates].filter(Boolean).join(" · ")}</div>
        <p>${e.note}</p>
      </div>`
    )
    .join("");
  observeReveal(el.querySelectorAll(".reveal"));
}

function renderCertifications() {
  const el = document.getElementById("cert-grid");
  if (!el) return;
  el.innerHTML = SITE_DATA.certifications
    .map(
      (c) => `
      <div class="cert-item">
        <h4>${c.name}</h4>
        <div class="card-meta">${[c.issuer, c.date].filter(Boolean).join(" · ")}</div>
      </div>`
    )
    .join("");
}

function renderAchievements() {
  const el = document.getElementById("badge-row");
  if (!el) return;
  el.innerHTML = SITE_DATA.achievements
    .map((a) => `<div class="badge"><span class="dot"></span>${a.label}<span class="src">${a.source}</span></div>`)
    .join("");
}

/* ---------------- interaction ---------------- */

function initLoader() {
  const loader = document.getElementById("loader");
  const hide = () => loader && loader.classList.add("is-hidden");
  if (REDUCE_MOTION) return hide();
  window.addEventListener("load", () => setTimeout(hide, 500));
  setTimeout(hide, 1600); // safety cap
}

function initThemeToggle() {
  const root = document.documentElement;
  const stored = localStorage.getItem("cg_theme");
  if (stored) root.setAttribute("data-theme", stored);

  const btn = document.getElementById("theme-toggle");
  const iconSun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  const iconMoon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  const paint = () => {
    const current = root.getAttribute("data-theme") || "dark";
    btn.innerHTML = current === "dark" ? iconSun : iconMoon;
  };
  paint();
  btn.addEventListener("click", () => {
    const next = (root.getAttribute("data-theme") || "dark") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("cg_theme", next);
    paint();
  });
}

function initNavScroll() {
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scroll-progress");
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a");

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("is-condensed", y > 30);

    const doc = document.documentElement;
    const pct = (y / (doc.scrollHeight - doc.clientHeight)) * 100;
    progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;

    let activeId = null;
    sections.forEach((s) => {
      if (s.getBoundingClientRect().top <= 120) activeId = s.id;
    });
    links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${activeId}`));
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function observeReveal(nodes) {
  if (REDUCE_MOTION) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  nodes.forEach((n) => io.observe(n));
}

function initGenericReveal() {
  observeReveal(document.querySelectorAll(".reveal:not([data-lightbox-index])"));
  document.querySelectorAll(".reveal-stagger").forEach((group) => {
    if (REDUCE_MOTION) return group.classList.add("is-visible");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(group);
  });
}

function enableTilt(cards) {
  if (REDUCE_MOTION) return;
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-2px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initTypewriter() {
  const el = document.getElementById("hero-roles-text");
  if (!el) return;
  const roles = SITE_DATA.person.roles;
  if (REDUCE_MOTION) {
    el.textContent = roles.join(" · ");
    return;
  }
  let roleIdx = 0, charIdx = 0, deleting = false;

  const tick = () => {
    const word = roles[roleIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIdx--;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  };
  tick();
}

function countUp(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  if (REDUCE_MOTION || !target) {
    el.textContent = target ?? 0;
    return;
  }
  const start = performance.now();
  const duration = 1100;
  const step = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      requestAnimationFrame(step);
      io.disconnect();
    }
  });
  io.observe(el);
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${SITE_DATA.person.inquiryEmail || SITE_DATA.person.email}?subject=${subject}&body=${body}`;
    document.getElementById("form-status").textContent = "Opening your email client…";
  });
}

function initGithubEmbeds() {
  const username = SITE_DATA.github.username;
  const wraps = document.querySelectorAll(".gh-embed");
  wraps.forEach((wrap) => {
    const img = wrap.querySelector("img");
    const fallback = wrap.querySelector(".gh-embed-fallback");
    if (!img) return;
    let settled = false;
    const markFailed = () => {
      if (settled) return;
      settled = true;
      img.style.display = "none";
      if (fallback) fallback.style.display = "flex";
    };
    // some failures resolve as a "successful" load of a tiny error SVG —
    // treat anything that loads unreasonably small as a failure too.
    img.addEventListener("error", markFailed);
    img.addEventListener("load", () => {
      if (img.naturalWidth && img.naturalWidth < 50) markFailed();
    });
    // safety timeout: third-party embed is slow/unreachable
    setTimeout(() => {
      if (!img.complete) markFailed();
    }, 6000);
  });

  const fallbackHTML = (label) => `
    <div class="gh-embed-fallback">
      <span>${label} is unavailable right now — the shared GitHub badge service is best-effort and can rate-limit.</span>
      <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer">View live on GitHub →</a>
    </div>`;
  document.querySelectorAll(".gh-embed-fallback[data-label]").forEach((el) => {
    el.outerHTML = fallbackHTML(el.dataset.label);
  });
}

function initFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------------- boot ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderIdentity();
  renderSocials();
  renderSkills();
  renderDesignWork();
  renderEducation();
  renderCertifications();
  renderAchievements();
  renderPracticeAreas();
  renderCodeWorkAndStats();

  initLoader();
  initThemeToggle();
  initNavScroll();
  initGenericReveal();
  initTypewriter();
  initContactForm();
  initGithubEmbeds();
  initFooterYear();
});
