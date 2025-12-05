// js/main.js

// js/main.js

/* ==========
   PROJECT DATA
   Update/add projects here.
   Make sure cover/gallery paths match your /img folder.
   ========== */

const PROJECTS = [
  {
    id: "hetch-hetchy",
    title: "Hetch Hetchy Study",
    year: "2025",
    role: "Landscape Analysis",
    cover: "img/hetch.jpeg",
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
      "img/hetch-1.jpg",
      "img/hetch-2.jpg"
    ]
  },

  {
    id: "sierra-nevada",
    title: "Sierra Nevada Reforestation Nursery Suitability",
    year: "2025",
    role: "ArcGIS + Site Suitability",
    cover: "img/sierra-cover.jpg",
    underConstruction: true,
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
      "img/sierra-1.jpg",
      "img/sierra-2.jpg"
    ]
  },

  {
    id: "landscape-typology",
    title: "Landscape Typology Study",
    year: "2024",
    role: "Studio Research + Visual Analysis",
    cover: "img/typology-cover.jpg",
    underConstruction: true,
    tags: ["Typology", "Studio Work", "Site Systems"],
    summary:
      "A typology-based exploration of landscape types and how form, function, and ecology influence design decisions.",
    problem:
      "Understanding recurring landscape patterns helps designers read sites 
