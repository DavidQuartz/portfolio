// Centralized project data with slugs for routing
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.jpg";

export const projects = [
  {
    slug: "nantoo",
    title: "Nantoo (iOS/Android)",
    description: "Tourism & social app with chat, geolocation, discovery",
    imgUrl: projImg2,
    summary: "Discover destinations, see where friends are, and chat in real time on a map‑first experience.",
    features: [
      { title: "Live maps and discovery", description: "Map‑centric UI with geofencing, nearby venues, and curated spots." },
      { title: "Real‑time chat & presence", description: "Socket.IO powers room chats and live presence around points of interest." },
      { title: "Reliable media & infra", description: "Redis caching, AWS S3 for media, and GCP‑backed CI/CD to keep things fast and stable." }
    ],
    tech: ["React", "JavaScript", "Redux", "Socket.IO", "MongoDB", "GCP", "Redis", "AWS S3"],
    links: { live: "https://nantooapp.com" }
  },
  {
    slug: "mapstore",
    title: "MapStore",
    description: "Web mapping contributions for ArcGIS, OpenLayers, React",
    imgUrl: projImg3,
    summary: "Contributions to MapStore focused on ArcGIS compatibility, performance, and better UX for complex layers.",
    features: [
      { title: "ArcGIS interoperability", description: "Improved support for feature, map, and image services across workflows." },
      { title: "UX for complex layers", description: "Clearer styling tools, better layer controls, and sensible defaults." },
      { title: "Performance for big data", description: "Profiling and optimizations for heavy vector and imagery datasets." }
    ],
    tech: ["React", "JavaScript", "OpenLayers", "ArcGIS"],
    links: { live: "https://www.geosolutionsgroup.com/technologies/mapstore/" }
  },
  {
    slug: "labshare",
    title: "Labshare",
    description: "Research asset sharing used by universities (Columbia, etc.)",
    imgUrl: projImg4,
    summary: "Platform for researchers to share models, biospecimens, and equipment with governance and auditability.",
    features: [
      { title: "Role‑based workflows", description: "Request, review, and approval flows with granular permissions." },
      { title: "Compliance & audit", description: "Full audit trails and secure asset exchange with clear provenance." },
      { title: "Operational dashboards", description: "Inventory views, usage metrics, and Amplitude‑powered insights." }
    ],
    tech: ["React", "TypeScript", "Flask", "Postgres", "Heroku", "Amplitude"],
    links: { live: "https://labshare.co/" }
  },
  {
    slug: "ravenhive",
    title: "Raven",
    description: "Fintech cross‑border payments and merchant integrations",
    imgUrl: projImg6,
    summary: "Cross‑border payments and merchant tooling with reliable routing and reporting.",
    features: [
      { title: "Smart payment routing", description: "Multi‑processor routing with retries and graceful fallbacks." },
      { title: "Merchant operations", description: "Onboarding, settlement, and payout workflows built for scale." },
      { title: "Reconciliation & reports", description: "Clear dashboards for transaction states and financial reconciliation." }
    ],
    tech: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Go", "sqlc", "Postgres", "GCP"],
    links: { live: "https://main--lambent-souffle-e123a0.netlify.app/" }
  },
  {
    slug: "telegram-bots",
    title: "Telegram AI Bots",
    description: "AI powered bots for bet predictions, teaching, travel planning",
    imgUrl: projImg5,
    summary: "Lightweight agents for education, travel planning, and predictions.",
    features: [
      { title: "Travel on a budget", description: "LLM‑powered itinerary planning that respects user budgets and dates." },
      { title: "Teaching assistant", description: "Explains code and creates exercises for faster learning." },
      { title: "Prediction experiments", description: "Data pipelines and prompts for prediction‑style experiments." }
    ],
    tech: ["Node.js", "TypeScript", "TypeORM", "Postgres", "Telegram API", "LangGraph", "OpenAI API"],
    links: { live: "https://t.me/" }
  },
  {
    slug: "hesedvid",
    title: "Hesedvid",
    description: "Video platform at a fraction of Mux’s cost",
    imgUrl: projImg1,
    summary: "Affordable video ingestion and delivery with developer‑friendly APIs.",
    features: [
      { title: "Ingestion & transcoding", description: "Workers‑driven pipeline for efficient upload and multi‑format delivery." },
      { title: "Cost control", description: "Usage‑based controls and caching that keep streaming affordable." },
      { title: "Developer experience", description: "Clean SDKs, webhooks, and clear metrics for easy integration." }
    ],
    tech: ["TypeScript", "TanStack React", "Go", "sqlc", "Postgres", "GCP", "Cloudflare R2", "Cloudflare D1", "Cloudflare Workers"],
    links: { live: "https://app.hesedvid.com" }
  },
  {
    slug: "geonode",
    title: "Geonode",
    description: "A frontend client for the MapStore framework",
    imgUrl: projImg8,
    summary: "Frontend client work integrating MapStore into GeoNode deployments.",
    features: [
      { title: "MapStore integration", description: "Drop‑in MapStore usage with consistent theming and behavior." },
      { title: "Search & catalog", description: "RxJS‑driven streams for responsive filters and search." },
      { title: "Layer management", description: "Custom widgets, styling tools, and better defaults." }
    ],
    tech: ["React", "RxJS", "JavaScript", "MapStore"],
    links: { live: "https://github.com/DavidQuartz/geonode-mapstore-client" }
  },
  {
    slug: "weskillz",
    title: "WeSkillz",
    description: "Hiring platform for freelancers and photographers in MENA",
    imgUrl: projImg7,
    summary: "Marketplace for creative professionals with streamlined hiring and messaging.",
    features: [
      { title: "Talent profiles & search", description: "Filter by skills, location, and availability with fast results." },
      { title: "Bookings & messaging", description: "Direct messaging, booking flows, and simple contracts." },
      { title: "Realtime updates", description: "Firebase‑backed updates with robust Redux state on the client." }
    ],
    tech: ["React", "Node.js", "JavaScript", "Firebase", "Redux"],
    links: { live: "https://github.com/DavidQuartz/We-Skillz" }
  }
];


