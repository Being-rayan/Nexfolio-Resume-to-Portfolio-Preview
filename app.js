// Portfolio app modes:
// 1) Single HTML or preview injection: window.__PORTFOLIO__
// 2) ZIP export fallback: data.json in the same folder
// 3) Server preview: /api/portfolio/<slug>

const EMBEDDED = window.__PORTFOLIO__ || null;

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? "";
}

function normalizeUrl(value) {
  const raw = String(value || "").trim();
  if (!raw || raw === "#") return "";
  if (raw.includes("@") && !raw.startsWith("http")) return raw;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw}`;
}

function scrubAutoText(text, fallback) {
  const raw = String(text || "").trim();
  if (!raw) return fallback;
  const lowered = raw.toLowerCase();
  const autoPhrases = [
    "auto-generated from your resume",
    "auto-filled from your uploaded resume",
    "auto-filled from your resume using ai",
    "auto-generated",
    "auto-filled"
  ];
  return autoPhrases.some((phrase) => lowered.includes(phrase)) ? fallback : raw;
}

function buildFallbackTagline(role) {
  const safeRole = String(role || "").trim();
  if (safeRole) {
    return `${safeRole} focused on building clear, reliable digital experiences.`;
  }
  return "Building clear, reliable digital experiences with a focus on usability.";
}

function buildFallbackAbout(role, skills) {
  const skillList = (skills || []).slice(0, 4).join(", ");
  if (skillList) {
    return `${role || "Candidate"} with hands-on skills in ${skillList}, presented from the uploaded resume.`;
  }
  return "I enjoy turning ideas into practical products and shipping thoughtful, user-friendly interfaces.";
}

function renderEmpty(root, message, className) {
  const box = document.createElement("div");
  box.className = className;
  box.textContent = message;
  root.appendChild(box);
}

function setLinkTextAndHref(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const safe = items || {};
  const linkConfig = [
    ["github", "GitHub"],
    ["linkedin", "LinkedIn"],
    ["instagram", "Instagram"],
    ["portfolio", "Portfolio"]
  ];

  el.innerHTML = "";
  linkConfig.forEach(([key, label]) => {
    const href = normalizeUrl(safe[key]);
    const anchor = document.createElement("a");
    anchor.textContent = label;
    anchor.href = href || "#";
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.className = href ? "" : "is-disabled";
    el.appendChild(anchor);
  });
}

function renderSkills(skills) {
  const root = document.getElementById("skillsList");
  if (!root) return;
  root.innerHTML = "";

  const safeSkills = Array.isArray(skills) ? skills.filter(Boolean) : [];
  if (!safeSkills.length) {
    renderEmpty(root, "Skills will appear here after parsing the resume.", "stack-pill");
    return;
  }

  safeSkills.forEach((skill) => {
    const pill = document.createElement("div");
    pill.className = "stack-pill";
    pill.textContent = skill;
    root.appendChild(pill);
  });
}

function renderProjectLinks(card, links) {
  const live = normalizeUrl(links && links.live);
  const code = normalizeUrl(links && links.code);
  if (!live && !code) return;

  const row = document.createElement("div");
  row.className = "work-card__links";

  if (live) {
    const liveLink = document.createElement("a");
    liveLink.href = live;
    liveLink.target = "_blank";
    liveLink.rel = "noreferrer";
    liveLink.textContent = "Live";
    row.appendChild(liveLink);
  }

  if (code) {
    const codeLink = document.createElement("a");
    codeLink.href = code;
    codeLink.target = "_blank";
    codeLink.rel = "noreferrer";
    codeLink.textContent = "Code";
    row.appendChild(codeLink);
  }

  card.appendChild(row);
}

function renderProjects(projects) {
  const root = document.getElementById("projectGrid");
  if (!root) return;
  root.innerHTML = "";

  const safeProjects = Array.isArray(projects) ? projects.filter(Boolean) : [];
  if (!safeProjects.length) {
    renderEmpty(root, "No project section was detected in this resume.", "work-card work-card--empty");
    return;
  }

  safeProjects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "work-card";

    const body = document.createElement("div");
    body.className = "work-card__body";

    const kicker = document.createElement("div");
    kicker.className = "work-card__kicker";
    kicker.textContent = `${String(index + 1).padStart(2, "0")} / FEATURED`;

    const title = document.createElement("div");
    title.className = "work-card__title";
    title.textContent = project.title || "Untitled Project";

    const desc = document.createElement("div");
    desc.className = "work-card__desc";
    desc.textContent = project.description || "Project details extracted from the uploaded resume.";

    const tags = document.createElement("div");
    tags.className = "work-card__tags";
    (project.tags || []).forEach((tagText) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tagText;
      tags.appendChild(tag);
    });

    body.appendChild(kicker);
    body.appendChild(title);
    body.appendChild(desc);
    if ((project.tags || []).length) body.appendChild(tags);
    card.appendChild(body);
    renderProjectLinks(card, project.links || {});
    root.appendChild(card);
  });
}

function renderExperience(items) {
  const root = document.getElementById("expList");
  if (!root) return;
  root.innerHTML = "";

  const safeItems = Array.isArray(items) ? items.filter(Boolean) : [];
  if (!safeItems.length) {
    renderEmpty(root, "Experience entries will appear here when present in the resume.", "timeline-item");
    return;
  }

  safeItems.forEach((item) => {
    const box = document.createElement("div");
    box.className = "timeline-item";

    const top = document.createElement("div");
    top.className = "timeline-item__header";

    const title = document.createElement("div");
    title.className = "timeline-item__title";
    title.textContent = [item.title, item.org].filter(Boolean).join(" - ") || "Experience";

    const meta = document.createElement("div");
    meta.className = "timeline-item__meta";
    meta.textContent = item.period || "";

    const desc = document.createElement("div");
    desc.className = "timeline-item__desc";
    desc.textContent = item.description || "";

    top.appendChild(title);
    top.appendChild(meta);
    box.appendChild(top);
    if (desc.textContent) box.appendChild(desc);
    root.appendChild(box);
  });
}

function renderEducation(items) {
  const root = document.getElementById("educationList");
  if (!root) return;
  root.innerHTML = "";

  const safeItems = Array.isArray(items) ? items.filter(Boolean) : [];
  if (!safeItems.length) {
    renderEmpty(root, "Education entries will appear here when present in the resume.", "timeline-item");
    return;
  }

  safeItems.forEach((item) => {
    const box = document.createElement("div");
    box.className = "timeline-item";

    const top = document.createElement("div");
    top.className = "timeline-item__header";

    const title = document.createElement("div");
    title.className = "timeline-item__title";
    title.textContent = [item.degree, item.org].filter(Boolean).join(" - ") || "Education";

    const meta = document.createElement("div");
    meta.className = "timeline-item__meta";
    meta.textContent = [item.period, item.score].filter(Boolean).join(" | ");

    top.appendChild(title);
    top.appendChild(meta);
    box.appendChild(top);
    root.appendChild(box);
  });
}

function setHeroName(fullName) {
  const name = String(fullName || "").trim();
  if (!name) return;
  const parts = name.split(/\s+/);
  setText("heroNameLine1", parts[0] || "");
  setText("heroNameLine2", parts.length > 1 ? parts.slice(1).join(" ") : "");
}

function initTheme() {
  const btn = document.getElementById("themeBtn");
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  if (!btn) return;
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next || "");
  });
}

function initExportZip() {
  const btn = document.getElementById("exportZip");
  if (!btn) return;

  const slug = getSlugFromUrl();
  if (!slug) {
    btn.style.display = "none";
    return;
  }

  btn.href = `/api/export/${slug}/zip`;
}

window.hydrate = function hydrate(data) {
  if (!data) return;

  setText("name", data.name);
  setText("brandName", data.name || "Portfolio");
  setText("footerName", data.name);
  setHeroName(data.name);

  setText("tagline", scrubAutoText(data.tagline, buildFallbackTagline(data.role)));
  setText("role", data.role);
  setText("focusArea", (data.skills || []).slice(0, 3).join(", ") || "Portfolio Projects");
  setText("location", data.location);
  setText("email", data.email);
  setText("aboutText", scrubAutoText(data.about, buildFallbackAbout(data.role, data.skills)));

  if (data.stats) {
    setText("statProjects", data.stats.projects);
    setText("statTech", data.stats.tech);
    setText("statMonths", data.stats.months);
  }

  setText("contactEmail", data.email);
  setText("contactLocation", data.location);
  setText("phone", data.phone);

  const resumeBtn = document.getElementById("downloadResume");
  if (resumeBtn) resumeBtn.href = data.resumePdfUrl || "#";

  setLinkTextAndHref("socialLinks", data.social);
  renderSkills(data.skills);
  renderProjects(data.projects);
  renderExperience(data.experience);
  renderEducation(data.education);

  setText("year", String(new Date().getFullYear()));
};

function getSlugFromUrl() {
  const path = window.location.pathname || "";
  const parts = path.split("/").filter(Boolean);
  const idx = parts.indexOf("p");
  if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
  return null;
}

async function loadPortfolioData() {
  if (EMBEDDED) return EMBEDDED;

  try {
    const local = await fetch("./data.json", { cache: "no-store" });
    if (local.ok) return await local.json();
  } catch {}

  const slug = getSlugFromUrl();
  if (!slug) return window.portfolioData || null;

  const res = await fetch(`/api/portfolio/${slug}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load portfolio from server");

  const payload = await res.json();
  return payload.portfolio_data || payload;
}

(async function main() {
  initTheme();
  initExportZip();
  try {
    const data = await loadPortfolioData();
    if (data) window.hydrate(data);
  } catch (error) {
    console.error(error);
    const el = document.createElement("div");
    el.style.padding = "16px";
    el.style.color = "inherit";
    el.textContent = "Failed to load portfolio data.";
    document.body.prepend(el);
  }
})();
