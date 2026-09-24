/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to update the website. No other file needs
 *  to change when you add a role, project, skill or certificate.
 *
 *  Rules of thumb
 *  - Every entry is a { ... } block inside a [ ... ] list. Copy an existing
 *    block, paste it where you want it, and change the text.
 *  - Keep the quotes and the comma after each block.
 *  - Lists render top to bottom in the order written here.
 *  - Images and PDFs live in assets/. Paths are relative (no leading slash).
 * ─────────────────────────────────────────────────────────────────────────────
 */
window.SITE = {

  /* ── Identity & contact ───────────────────────────────────────────────── */
  name: "Ahmad Fauzan Rinaufaldi",
  shortName: "Rinaufaldi",
  nickname: "Rinov",
  role: "Data Analyst · Data Engineer",
  title: "Information Systems Graduate | Data Analytics & Data Engineering",
  location: "Surabaya, Indonesia",
  email: "rinaufaldi@gmail.com",
  phone: "+62 878-5128-127",
  linkedin: "https://www.linkedin.com/in/rinaufaldi/",
  linkedinLabel: "linkedin.com/in/rinaufaldi",
  github: "https://github.com/ahmadfauzanrinaufaldi",
  githubLabel: "github.com/ahmadfauzanrinaufaldi",
  resume: "assets/docs/Ahmad-Fauzan-Rinaufaldi-Resume.pdf",
  portfolioPdf: "assets/docs/Ahmad-Fauzan-Rinaufaldi-Portfolio.pdf",

  /* Hero one-liner */
  bio: "Information Systems graduate from Institut Teknologi Sepuluh Nopember (ITS), building end-to-end data pipelines and dashboards that turn raw, multi-source data into decisions — from a 779,000-tile BTS revenue forecasting system at Telkomsel to a hybrid deep learning model for stock price prediction.",

  /* Logo row under the hero buttons — names must match a tool in `tools` below */
  heroTools: ["Python", "MySQL", "Power BI", "Tableau", "TensorFlow", "Google Cloud", "Pentaho Data Integration"],

  /* Education card (About section) */
  education: {
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor of Information Systems · 3.64/4.00",
    dates: "Aug 2022 – Aug 2026 (graduated)",
    logo: "assets/img/brands/its.png",
    photo: "assets/img/photos/its-campus.webp"
  },

  /* ── About ─ one string per paragraph ─────────────────────────────────── */
  about: [
    "Information Systems graduate from Institut Teknologi Sepuluh Nopember (ITS), 3.64 GPA, with hands-on experience building end-to-end data analytics solutions — from raw multi-source data to insight-ready dashboards that support real decisions.",
    "At Telkomsel, I built a machine learning-based revenue forecasting system for Base Transceiver Station (BTS) site evaluation, processing 779,000+ grid tiles and reaching 1.861% MAPE, visualized through a Streamlit dashboard to support BTS investment decisions across East Java. Before that, I spent two months on network performance analysis for Central Madura, integrating and visualizing tile-level network data in both Power BI and Tableau.",
    "I applied the same forecasting approach in my final thesis, building a hybrid BiLSTM–Multi-Head Attention model to forecast BBCA (Bank Central Asia) stock prices, reaching 1.0727% MAPE — benchmarked against BiGRU, Stockformer, and traditional statistical baselines.",
    "Beyond technical work, I led a 250+ member committee for ISE! 2024, a national technology event with 1,200+ participants, which shaped how I communicate across technical and non-technical teams alike. I'm looking to bring this combination — technical depth in data management and analytics, plus cross-functional leadership — into a role where I can keep building data systems people actually rely on."
  ],

  /* Big numbers under the About text */
  stats: [
    { value: "779,000+", label: "grid tiles processed at Telkomsel", icon: "grid" },
    { value: "1.861%", label: "MAPE on BTS revenue forecasting", icon: "target" },
    { value: "1.0727%", label: "MAPE on BBCA stock forecasting (thesis)", icon: "trend" },
    { value: "250+", label: "committee members led at ISE! 2024", icon: "users" }
  ],

  /* ── Experience ───────────────────────────────────────────────────────────
   *  Newest first. A role either has `items` (bullet list) or `phases`
   *  (sub-headings, each with its own bullets). `summary` is optional.
   *  `logo` (image path) or `mark` (2–3 letters) shows beside the company.
   *  `photo` (optional) shows a picture under the bullets.
   */
  experience: [
    {
      company: "PT Telekomunikasi Selular (Telkomsel)",
      role: "Network Performance Analyst Intern",
      location: "Surabaya, Indonesia",
      dates: "Jul 2025 – Dec 2025",
      tag: "Internship",
      logo: "assets/img/brands/telkomsel.png",
      photo: "assets/img/photos/telkomsel-internship.webp",
      photoAlt: "Internship activities with the Network Performance Analysis and Consolidation team at Telkomsel",
      summary: "Two-phase internship in the Network Performance Analysis and Consolidation division, working alongside two teammates (Chris and Farel) under mentor Adyanto Hediawan Putra.",
      phases: [
        {
          title: "Phase 1 — Central Madura Network Performance Analysis",
          items: [
            "Collected and integrated three tile-level (zoom 16) datasets — population, Android download speed, and network sample/market-share data — across a 4-week window (6,059 tiles after merge)",
            "Engineered an opportunity score (population × unclaimed market share × speed rank) and rule-based tile classifications (Critical Area, High Potential, Dominant Market, etc.) to prioritize investment areas",
            "Built a 5-page Power BI dashboard and a parallel Tableau workbook, both with tile-level maps, KPI cards, and action-recommendation breakdowns"
          ]
        },
        {
          title: "Phase 2 — BTS Revenue Forecasting & Simulation System",
          items: [
            "Built a spatial data pipeline integrating BTS revenue, population tiles (774,290 tiles across East Java), competitor speed data, and BPS demographic data",
            "Used Voronoi polygons to define each tower's service area and spatially disaggregate tower-level revenue down to the tile level",
            "Engineered features including urban/rural classification, competitor speed gap, and digital-savviness index",
            "Trained and compared models (LightGBM, Random Forest, Decision Tree, Ridge) via PyCaret; LightGBM selected (R² 0.51) and deployed for tile-level revenue prediction",
            "Built a simulation engine for proposed new BTS locations — adaptive coverage radius by urban/rural context, cannibalization discount logic for nearby towers, and predicted monthly revenue output",
            "Delivered results through a Streamlit dashboard supporting BTS investment decisions across the Jawa-Bali region"
          ]
        }
      ]
    },
    {
      company: "PT Pelindo Marine Service",
      role: "Management System & Information Technology Intern",
      location: "Surabaya, Indonesia",
      dates: "Jan 2025 – Feb 2025",
      tag: "Internship",
      mark: "PMS",
      items: [
        "Learned the Department's operational administrative activities, including drafting and archiving SOP/Work Instruction documents in line with ISO standards",
        "Collected, structured, and finalized the blueprint document for the IMAIS application module",
        "Designed Entity Relationship Diagrams (ERDs) for the MAROON and MARDOC applications to support structured database development",
        "Compiled reports supporting business processes and department workflows"
      ]
    },
    {
      company: "DBL Indonesia",
      role: "DBL Academy Part-Time Trainer",
      location: "Surabaya, Indonesia",
      dates: "Nov 2023 – Present",
      tag: "Part-time",
      mark: "DBL",
      items: [
        "Trains 100–130 children weekly across 6–8 classes, adapting communication and coaching to each age group",
        "Compiles periodic progress-assessment reports each program trimester",
        "Organized an internal competition event with fellow coaches, coordinating execution and field data entry for 200+ students over a 2-week period"
      ]
    }
  ],

  /* Leadership — shown as its own block under Experience */
  leadership: [
    {
      company: "Information Systems Expo (ISE!) 2024",
      role: "Project Officer (Chairperson)",
      location: "Surabaya, Indonesia",
      dates: "Jan 2024 – Dec 2024",
      tag: "Leadership",
      mark: "ISE!",
      photo: "assets/img/photos/ise-2024.webp",
      photoAlt: "ISE! 2024 committee group photo",
      items: [
        "Led a national technology event engaging 1,200+ participants nationwide, directing a core executive team and 10 divisions totaling 250+ committee members",
        "Handled strategic planning, risk mitigation, budgeting, and execution across five major sub-events: BIONIX (national IT/business olympiad), RISE (national business case competition), ISE! Academy (public data science bootcamp), and IS CLASS (campus visit & outreach)"
      ]
    }
  ],
  leadershipNote: "Additional committee and organizational roles (2022–2024): SRE ITS SC, HMSI ITS, and 6 other university-level event committees — see LinkedIn/portfolio PDF for full list.",

  /* ── Featured projects ────────────────────────────────────────────────────
   *  metric + metricLabel = the big headline number on the card.
   *  icon = map | signal | trend | gauge | database | plane (line icon on the card)
   *  image (optional) = a screenshot path, e.g. "assets/img/projects/bts.webp"
   */
  projects: [
    {
      icon: "map",
      image: "assets/img/projects/bts.webp",
      context: "Telkomsel",
      metric: "1.861%",
      metricLabel: "MAPE at tile level",
      title: "BTS Revenue Forecasting & Simulation System",
      desc: "The flagship project. A spatial ML pipeline predicting revenue potential for new Base Transceiver Station locations across East Java, processing 779,000+ population tiles.",
      highlight: "1.861% MAPE at tile level; simulation engine tested on real Surabaya and Malang candidate sites",
      tags: ["Python", "PyCaret", "LightGBM", "Voronoi spatial analysis", "cKDTree", "Streamlit"]
    },
    {
      icon: "signal",
      image: "assets/img/projects/madura.webp",
      context: "Telkomsel",
      metric: "6,000+",
      metricLabel: "tiles covered",
      title: "Central Madura Network Performance Dashboard",
      desc: "Integrated three tile-level network datasets into a scored, action-recommending dashboard covering 6,000+ tiles.",
      highlight: "Rule-based tile classification driving Invest / Maintain / Monitor recommendations",
      tags: ["Python", "Folium", "Power BI", "Tableau"]
    },
    {
      icon: "trend",
      image: "assets/img/projects/bbca.webp",
      context: "Final Thesis",
      metric: "1.0727%",
      metricLabel: "MAPE, best single run (R² 0.9674)",
      title: "BBCA Stock Price Forecasting — Hybrid BiLSTM-Multi-Head Attention",
      desc: "A hybrid deep learning model forecasting BBCA daily closing price, benchmarked against BiGRU, Stockformer, and statistical baselines (DMA, EMA).",
      highlight: "Best single run 1.0727% MAPE (R² 0.9674); deployed in an interactive Streamlit forecasting app",
      tags: ["Python", "TensorFlow/Keras", "Streamlit"]
    },
    {
      icon: "gauge",
      context: "PT ITSEC Asia",
      metric: "16",
      metricLabel: "KPIs across 4 IT-BSC perspectives",
      title: "IT Balanced Scorecard Dashboard — PT ITSEC Asia Case Study",
      desc: "A Power BI dashboard applying the IT Balanced Scorecard framework across Jakarta HQ and two branch offices.",
      highlight: "16 KPIs tracked across 4 IT-BSC perspectives (Corporate Contribution, Customer Orientation, Operational Excellence, Future Orientation)",
      tags: ["MySQL", "DBeaver", "Power BI"]
    },
    {
      icon: "database",
      image: "assets/img/projects/warehouse.webp",
      context: "Data Warehouse",
      metric: "3",
      metricLabel: "source formats integrated",
      title: "Multi-Source Data Warehouse & Dashboard",
      desc: "A star-schema data warehouse integrating scholarship admissions, university admissions, and BMKG weather forecast data for Aceh.",
      highlight: "End-to-end ETL — standardized and loaded three inconsistent source formats into one reporting-ready structure",
      tags: ["DBeaver", "Pentaho Data Integration (PDI)"]
    },
    {
      icon: "plane",
      image: "assets/img/projects/kualanamu.webp",
      context: "Time Series",
      metric: "3",
      metricLabel: "models benchmarked",
      title: "Domestic Passenger Forecasting — Kualanamu International Airport",
      desc: "Time series forecasting using SARIMA, Random Forest, and a hybrid GRU-Random Forest model, benchmarked across multiple train/test splits.",
      tags: ["Python", "statsmodels", "scikit-learn"]
    }
  ],

  /* Compact "More projects" list under the cards */
  moreProjects: [
    "Ontology-based expert system for Vespa scooter fault diagnosis (Protégé, SWRL rules, built with a real service center)",
    "DKI Jakarta park cleaning route optimization (GA, ACO, hybrid ACO+2-opt, K-Means)",
    "FullstackExpense — fullstack expense tracker (Firebase, CI/CD via GitHub Actions, Google Cloud Run)",
    "e-CCWS — UX redesign case study of the Mamikos app (Figma, user research, Wizard of Oz testing)",
    "Wildfire/weather analytics in Western Australia (BOM data, clustering, regression)",
    "\"Instagram Topic Modeling using LDA\" — NLP/topic modeling on social media text (co-authored)"
  ],

  /* ── Tools ─ logo tiles in the Skills section ─────────────────────────────
   *  logo = image in assets/logos/. No logo? Use `mark` (short text) instead.
   */
  tools: [
    { group: "Data & Languages", items: [
      { name: "Python", logo: "assets/logos/python.svg" },
      { name: "SQL", mark: "SQL" },
      { name: "MySQL", logo: "assets/logos/mysql.svg" },
      { name: "Pandas", mark: "pd" },
      { name: "Excel", logo: "assets/logos/excel.svg" }
    ] },
    { group: "ETL & Databases", items: [
      { name: "Pentaho Data Integration", logo: "assets/logos/pentaho.png" },
      { name: "DBeaver", logo: "assets/logos/dbeaver.png" }
    ] },
    { group: "Machine Learning", items: [
      { name: "TensorFlow", logo: "assets/logos/tensorflow.svg" },
      { name: "scikit-learn", mark: "sk" },
      { name: "LightGBM", mark: "LGB" },
      { name: "PyCaret", mark: "PyC" }
    ] },
    { group: "BI & Visualization", items: [
      { name: "Power BI", logo: "assets/logos/powerbi.png" },
      { name: "Tableau", mark: "Tab" },
      { name: "Streamlit", mark: "St" },
      { name: "Folium", mark: "Fol" }
    ] },
    { group: "Cloud & Dev Tools", items: [
      { name: "Google Cloud", logo: "assets/logos/google-cloud.svg" },
      { name: "Firebase", logo: "assets/logos/firebase.svg" },
      { name: "GitHub", logo: "assets/logos/github.svg" },
      { name: "Visual Studio Code", logo: "assets/logos/vscode.svg" },
      { name: "Google Colab", logo: "assets/logos/colab.svg" }
    ] },
    { group: "Design & Knowledge", items: [
      { name: "Figma", logo: "assets/logos/figma.svg" },
      { name: "Protégé", logo: "assets/logos/protege.png" }
    ] }
  ],

  /* ── Skills ─ one block per group ─────────────────────────────────────── */
  skills: [
    { group: "Data Management & Engineering", items: ["SQL", "RDBMS (MySQL)", "Python (Pandas, Scikit-learn)", "ETL & Data Integration (Pentaho Data Integration, DBeaver)", "Advanced Excel", "Data Cleaning & Anomaly Detection"] },
    { group: "Machine Learning & Forecasting", items: ["LightGBM", "Random Forest", "PyCaret", "BiLSTM", "Multi-Head Attention", "TensorFlow/Keras", "SARIMA"] },
    { group: "Business Intelligence & Visualization", items: ["Power BI", "Tableau", "Streamlit", "Dashboard & KPI Design", "Folium"] },
    { group: "Cloud", items: ["Google Cloud (Vertex AI, BigLake, Document AI, DLP)"] },
    { group: "Design & Product", items: ["Figma (prototyping, UX research)"] },
    { group: "Soft Skills", items: ["Cross-Functional Communication", "Stakeholder Coordination", "Detail-Oriented Documentation", "Team Leadership"] }
  ],

  /* ── Certifications ───────────────────────────────────────────────────── */
  googleCloud: {
    title: "Google Cloud Skill Boost",
    year: "2025",
    // url: "https://www.cloudskillsboost.google/public_profiles/...",  ← add your public profile to make it clickable
    badges: [
      { name: "Secure BigLake Data", image: "assets/img/badges/secure-biglake-data.webp" },
      { name: "Automate Data Capture with Document AI", image: "assets/img/badges/document-ai.webp" },
      { name: "Prompt Design in Vertex AI", image: "assets/img/badges/vertex-ai-prompt-design.webp" },
      { name: "The Basics of Google Cloud Compute", image: "assets/img/badges/google-cloud-compute.webp" },
      { name: "Protect Sensitive Data with Data Loss Prevention", image: "assets/img/badges/data-loss-prevention.webp" },
      { name: "Implement Speech and Language Solutions with Pre-trained Models", image: "assets/img/badges/speech-language.webp" }
    ]
  },
  certifications: [
    { name: "DevNet Associate", issuer: "Cisco Networking Academy", year: "2025", image: "assets/img/certs/cisco-devnet.webp", logo: "assets/logos/cisco.svg" },
    { name: "Duolingo English Test — Score 125/B2 (Upper-Intermediate)", issuer: "Duolingo", year: "2024", image: "assets/img/certs/duolingo.webp" },
    { name: "Introduction to SAP S/4HANA with GBI 4.2", issuer: "SAP", year: "2024", image: "assets/img/certs/sap-s4hana.webp" }
  ]
};
