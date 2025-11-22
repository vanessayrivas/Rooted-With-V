// js/main.js
/* ==========
   PROJECT DATA
   Update/add projects here.
   ========== */

const PROJECTS = [
  {
    id: "hetch-hetchy",
    title: "Hetch Hetchy Watershed Study",
    year: "2025",
    role: "Hydrology + Landscape Analysis",
    cover: "images/hetch-cover.jpg",
    tags: ["Watershed", "Mapping", "Environmental Design"],
    summary:
      "A landscape and hydrology-based study of the Hetch Hetchy system, focused on water infrastructure, ecological context, and site relationships.",
    problem:
      "Hetch Hetchy is both an engineered water supply and a complex ecological landscape, requiring layered analysis to understand impacts and opportunities.",
    process: [
      "Mapped watershed + terrain relationships.",
      "Analyzed water flow, storage, and surrounding ecological systems.",
      "Interpreted design implications for resilience and land stewardship."
    ],
    outcome:
      "A set of interpretive maps and design notes showing how natural systems and infrastructure shape the landscape.",
    gallery: [
      "images/hetch-1.jpg",
      "images/hetch-2.jpg"
    ]
  },

  {
    id: "sierra-nevada",
    title: "Sierra Nevada Reforestation Nursery Suitability",
    year: "2025",
    role: "ArcGIS + Site Suitability",
    cover: "images/sierra-cover.jpg",
    tags: ["Reforestation", "GIS", "Wildfire Recovery"],
    summary:
      "A climate-smart site suitability analysis to identify optimal locations for a reforestation nursery supporting wildfire recovery.",
    problem:
      "Post-fire recovery needs nursery sites that are accessible, ecologically appropriate, and resilient to future climate stress.",
    process: [
      "Compiled slope, burn severity, roads, and water proximity datasets.",
      "Reclassified and weighted layers into a composite suitability raster.",
      "Mapped priority zones and evaluated logistics + ecological tradeoffs."
    ],
    outcome:
      "A final suitability map highlighting high-priority nursery zones with clear methodology and design implications.",
    gallery: [
      "images/sierra-1.jpg",
      "images/sierra-2.jpg"
    ]
  },

  {
    id: "landscape-typology",
    title: "Landscape Typology Study",
    year: "2024",
    role: "Studio Research + Visual Analysis",
    cover: "images/typology-cover.jpg",
    tags: ["Typology", "Studio Work", "Site Systems"],
    summary:
      "A typology-based exploration of landscape types and how form, function, and ecology influence design decisions.",
    problem:
      "Understanding recurring landscape patterns helps designers read sites faster and respond with better spatial and ecological strategies.",
    process: [
      "Collected precedents across multiple landscape types.",
      "Organized patterns by form, use, and environmental function.",
      "Translated findings into visual typology diagrams."
    ],
    outcome:
      "A typology set showing clear categories and design takeaways that inform future site thinking.",
    gallery: [
      "images/typology-1.jpg",
      "images/typology-2.jpg"
    ]
  }
];

/* ==========
   HOME PAGE: render project grid
   ========== */
function renderProjectGrid() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card" onclick="goToProject('${p.id}')">
      <img class="project-thumb" src="${p.cover}" alt="${p.title}">
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-meta">${p.role} • ${p.year}</p>
        <p class="project-meta">${p.summary}</p>
      </div>
    </article>
  `).join("");
}

function goToProject(id){
  window.location.href = `project.html?id=${id}`;
}

/* ==========
   PROJECT PAGE: render details from URL id
   ========== */
function renderProjectPage(){
  const mount = document.getElementById("projectPage");
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find(p => p.id === id);

  if (!project){
    mount.innerHTML = `
      <p>Project not found 🥲</p>
      <a class="btn ghost" href="index.html#projects">Back to projects</a>
    `;
    return;
  }

  mount.innerHTML = `
    <section class="project-hero">
      <img src="${project.cover}" alt="${project.title}">
      <h1>${project.title}</h1>
      <p class="project-meta">${project.role} • ${project.year}</p>

      <div class="project-tags">
        ${project.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    </section>

    <section class="project-content">
      <h2>Summary</h2>
      <p>${project.summary}</p>

      <h2>Problem / Challenge</h2>
      <p>${project.problem}</p>

      <h2>Process</h2>
      <ul>
        ${project.process.map(step => `<li>${step}</li>`).join("")}
      </ul>

      <h2>Outcome</h2>
      <p>${project.outcome}</p>

      ${project.gallery?.length ? `
        <h2>Gallery</h2>
        <div class="project-gallery">
          ${project.gallery.map(img => `<img src="${img}" alt="">`).join("")}
        </div>
      ` : ""}
    </section>

    <a class="btn ghost" href="index.html#projects">← Back to Projects</a>
  `;
}

/* ==========
   init
   ========== */
document.addEventListener("DOMContentLoaded", () => {
  renderProjectGrid();
  renderProjectPage();
});

