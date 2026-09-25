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
  nickname: "Rinov",                       // shown in the top-left logo and hero
  role: "Data Analyst · Data Engineer",
  title: "Information Systems Graduate | Data Analytics & Data Engineering",
  location: "Surabaya, Indonesia",
  email: "rinaufaldi@gmail.com",
  phone: "+62 878-5128-127",
  linkedin: "https://www.linkedin.com/in/rinaufaldi/",
  linkedinLabel: "linkedin.com/in/rinaufaldi",
  github: "https://github.com/ahmadfauzanrinaufaldi",
  githubLabel: "github.com/ahmadfauzanrinaufaldi",
  gmailCompose: "https://mail.google.com/mail/?view=cm&to=rinaufaldi@gmail.com",
  resume: "assets/docs/Ahmad-Fauzan-Rinaufaldi-Resume.pdf",
  portfolioPdf: "assets/docs/Ahmad-Fauzan-Rinaufaldi-Portfolio.pdf",

  /* ── Hero ─────────────────────────────────────────────────────────────── */
  heroHeadline: "I turn messy data into decisions.",
  heroText: "Information Systems grad from ITS. Built a revenue forecasting system that processed 779,000+ tiles at Telkomsel and a deep learning model for stock price prediction.",
  heroStats: [
    { value: "779,000+", label: "tiles processed" },
    { value: "1.861%", label: "MAPE at Telkomsel" }
  ],
  /* Logo row under the hero buttons (file names in assets/logos/) */
  heroTools: [
    { name: "Python", logo: "assets/logos/python.svg" },
    { name: "MySQL", logo: "assets/logos/mysql.svg" },
    { name: "Power BI", logo: "assets/logos/powerbi.png" },
    { name: "TensorFlow", logo: "assets/logos/tensorflow.svg" },
    { name: "Google Cloud", logo: "assets/logos/google-cloud.svg" },
    { name: "Pentaho Data Integration", logo: "assets/logos/pentaho.png" }
  ],

  /* ── About ─ keep to 2–3 sentences, one string per paragraph ──────────── */
  about: [
    "I build data analytics solutions that turn raw, multi-source data into dashboards people can act on.",
    "I want to keep building data systems people actually rely on, combining technical depth in data management and analytics with cross-functional leadership."
  ],
  stats: [
    { value: "779,000+", label: "grid tiles processed at Telkomsel", icon: "grid" },
    { value: "1.861%", label: "MAPE on BTS revenue forecasting", icon: "target" },
    { value: "1.0727%", label: "MAPE on BBCA stock forecasting (thesis)", icon: "trend" },
    { value: "250+", label: "committee members led at ISE! 2024", icon: "users" }
  ],
  education: {
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor of Information Systems · 3.64/4.00",
    dates: "Aug 2022 – Aug 2026 (graduated)",
    logo: "assets/img/brands/its.png",
    photo: "assets/img/photos/si-its.webp"
  },

  /* ── Projects ─────────────────────────────────────────────────────────────
   *  Card face: title, hook (one line), metric (optional), tags.
   *  Click opens the detail view: desc, highlight, story, points, images, links.
   *  featured: true  → big card in the main grid; otherwise "More projects".
   *  docs = Google Drive short link (intip.in). Leave "" until you have one.
   */
  projects: [
    {
      featured: true,
      icon: "map",
      image: "assets/img/projects/bts-full.webp",
      fit: "contain",   // show the whole screenshot on the card (dark bars instead of cropping)
      gallery: ["assets/img/projects/bts-geo.webp", "assets/img/projects/bts-pycaret.webp", "assets/img/projects/bts-features.webp"],
      context: "Telkomsel",
      title: "BTS Revenue Forecasting & Simulation System",
      hook: "Spatial ML pipeline predicting revenue for new BTS sites across East Java.",
      metric: "1.861%",
      metricLabel: "MAPE at tile level",
      tags: ["Python", "PyCaret", "LightGBM", "Voronoi spatial analysis", "cKDTree", "Streamlit"],
      desc: "The flagship project. A spatial ML pipeline predicting revenue potential for new Base Transceiver Station locations across East Java, processing 779,000+ population tiles.",
      highlight: "1.861% MAPE at tile level; simulation engine tested on real Surabaya and Malang candidate sites",
      story: [
        "My team and I built a system to predict revenue at the tile level and simulate new BTS towers revenue, using revenue data from 6,519 towers across East Java. The core problem was that revenue is only recorded at the tower level, but siting decisions need much finer detail.",
        "We generated Voronoi polygons around each tower to define its service area, then spatially joined population tiles inside that area to disaggregate tower revenue down to roughly 779,000 tiles, weighted by each tile's share of the tower's population."
      ],
      points: [
        "Feature engineering: urban/rural classification, competitor speed gap, a digital savviness index, and a Telkomsel dominance flag",
        "Deliberately excluded lat/lon from the model, so it had to learn from population, speed, and competitor signals instead of memorizing locations",
        "Used PyCaret to compare LightGBM, Random Forest, Decision Tree, and Ridge by R2. LightGBM won at 1.861% MAPE",
        "Built a simulation engine for proposed tower sites: checks nearby tiles via spatial index, sums predicted revenue, then applies a cannibalization discount if a site is too close to existing coverage",
        "Delivered results through a Streamlit dashboard for the network planning team to test locations themselves"
      ],
      docs: ""
    },
    {
      featured: true,
      icon: "signal",
      image: "assets/img/projects/madura-powerbi.webp",
      gallery: ["assets/img/projects/madura-tableau.webp", "assets/img/projects/madura.webp", "assets/img/projects/madura-merge.webp"],
      context: "Telkomsel",
      title: "Central Madura Network Performance Dashboard",
      hook: "Scored 6,000+ network tiles into Invest / Maintain / Monitor actions.",
      metric: "6,000+",
      metricLabel: "tiles covered",
      tags: ["Python", "Folium", "Power BI", "Tableau"],
      desc: "Integrated three tile-level network datasets into a scored, action-recommending dashboard covering 6,000+ tiles.",
      highlight: "Rule-based tile classification driving Invest / Maintain / Monitor recommendations",
      story: [
        "My internship at Telkomsel ran in two phases. The first two months were network performance analysis for Central Madura: collecting and integrating raw network data, cleaning it into a usable dataset, and visualizing it in Power BI and Tableau so the team could track performance across the area."
      ],
      docs: ""
    },
    {
      featured: true,
      icon: "trend",
      image: "assets/img/projects/bbca-app.webp",
      gallery: ["assets/img/projects/bbca.webp", "assets/img/projects/bbca-results.webp"],
      context: "Final Thesis",
      title: "BBCA Stock Price Forecasting — Hybrid BiLSTM-Multi-Head Attention",
      hook: "Hybrid deep learning model forecasting BBCA daily closing prices.",
      metric: "1.0727%",
      metricLabel: "MAPE, best single run",
      tags: ["Python", "TensorFlow/Keras", "Streamlit"],
      desc: "A hybrid deep learning model forecasting BBCA daily closing price, benchmarked against BiGRU, Stockformer, and statistical baselines (DMA, EMA).",
      highlight: "Best single run 1.0727% MAPE (R² 0.9674); deployed in an interactive Streamlit forecasting app",
      story: [
        "The interesting part wasn't a clean win for the more complex model. My baseline BiLSTM actually produced the single best result across all experiments: 1.07267% MAPE at a 70:30 split, 128 LSTM units. The attention mechanism traded peak performance for stability, not a universal upgrade.",
        "Implementation-wise, I modified an existing baseline comparison notebook to integrate my models, resolved a scaler mismatch between joblib and pickle formats, and reconstructed return-based outputs back into absolute prices so every model could be compared on the same scale.",
        "I packaged the results into a Streamlit app where users can pick between BBCA, BBRI, or TLKM, set a forecast horizon, and download predictions as CSV."
      ],
      docs: "https://intip.in/BachelorThesisAhmad"
    },
    {
      featured: true,
      icon: "gauge",
      image: "assets/img/projects/itsec-dash-1.webp",
      gallery: ["assets/img/projects/itsec-dash-2.webp", "assets/img/projects/itsec-dash-3.webp", "assets/img/projects/itsec-dash-4.webp"],
      context: "PT ITSEC Asia",
      title: "IT Balanced Scorecard Dashboard — PT ITSEC Asia Case Study",
      hook: "Power BI scorecard across Jakarta HQ and two branch offices.",
      metric: "16",
      metricLabel: "KPIs across 4 IT-BSC perspectives",
      tags: ["MySQL", "DBeaver", "Power BI"],
      desc: "A Power BI dashboard applying the IT Balanced Scorecard framework across Jakarta HQ and two branch offices.",
      highlight: "16 KPIs tracked across 4 IT-BSC perspectives (Corporate Contribution, Customer Orientation, Operational Excellence, Future Orientation)",
      story: [
        "For my IT Organization Monitoring and Evaluation final project, my team and I built a Power BI dashboard applying the IT Balanced Scorecard framework to PT ITSEC Asia, working with the company to understand their real structure and context, covering the Jakarta headquarters and two branch offices.",
        "Since the company's actual data couldn't be used publicly, we generated realistic dashboard data with Mockaroo, modeled on the real organizational structure and KPIs ITSEC gave us. We tracked 16 KPIs across the four IT-BSC perspectives: Corporate Contribution, Customer Orientation, Operational Excellence, and Future Orientation, structured in MySQL and DBeaver, then visualized in Power BI.",
        "The resulting dashboard gives localized views per branch, tracking service availability, cybersecurity incidents, client satisfaction, and project delivery, so management can see where each office stands rather than only a company-wide average."
      ],
      docs: "https://intip.in/ITSECDashboard"
    },
    {
      featured: true,
      icon: "database",
      image: "assets/img/projects/warehouse.webp",
      gallery: ["assets/img/projects/warehouse-erd.webp"],
      context: "Data Warehouse",
      title: "Multi-Source Data Warehouse & Dashboard",
      hook: "Star-schema warehouse joining admissions and BMKG weather data for Aceh.",
      metric: "3",
      metricLabel: "source formats integrated",
      tags: ["DBeaver", "Pentaho Data Integration (PDI)"],
      desc: "A star-schema data warehouse integrating scholarship admissions, university admissions, and BMKG weather forecast data for Aceh.",
      highlight: "End-to-end ETL — standardized and loaded three inconsistent source formats into one reporting-ready structure",
      story: [
        "For my Data Lakehouse course final project, I built a data warehouse that pulls together scholarship admissions data, general university admissions data, and BMKG weather forecasts for Aceh into one system scholarship organizations could use to make allocation decisions.",
        "The hard part wasn't any single dataset. It was getting structured data, like admissions records, and less structured data, like weather forecasts, to sit in the same warehouse in a way that actually made sense for analysis. I designed the schema in DBeaver: one fact table for the admissions process, with separate dimension tables for applicants, program choices, majors, time periods, province, scholarship type, and weather. Then I built the ETL pipelines in Pentaho to clean and load everything in.",
        "The end result is a Power BI dashboard that lets you slice applicant and scholarship data by region, income category, and score distribution, with weather data layered in as context."
      ],
      docs: "https://intip.in/DataLakehouse"
    },
    {
      featured: true,
      icon: "plane",
      image: "assets/img/projects/kualanamu.webp",
      gallery: ["assets/img/projects/kualanamu-rf.webp", "assets/img/projects/kualanamu-hybrid.webp"],
      context: "Time Series",
      title: "Domestic Passenger Forecasting — Kualanamu International Airport",
      hook: "SARIMA vs Random Forest vs hybrid GRU-RF for airport passenger forecasting.",
      metric: "3",
      metricLabel: "models benchmarked",
      tags: ["Python", "statsmodels", "scikit-learn"],
      desc: "Time series forecasting using SARIMA, Random Forest, and a hybrid GRU-Random Forest model, benchmarked across multiple train/test splits.",
      story: [
        "For my Predictive Modeling and Analytics final project, my team and I forecasted passenger arrivals at Kualanamu International Airport, aiming to give the aviation sector something useful for planning around seasonal traffic.",
        "Random Forest actually came out the most accurate of the three, which wasn't what we expected given how much more complex the hybrid model was. The GRU-RF hybrid showed some promise but didn't clearly beat the simpler model on this dataset."
      ],
      docs: "https://intip.in/TimeSeriesForecasting"
    },

    /* More projects (smaller cards) */
    {
      icon: "route",
      image: "assets/img/projects/route.webp",
      gallery: ["assets/img/projects/route-plot.webp"],
      context: "Soft Computing",
      title: "DKI Jakarta Park Cleaning Route Optimization",
      hook: "GA, ACO and hybrid ACO+2-opt routing for park inspections.",
      tags: ["GA", "ACO", "ACO+2-opt", "K-Means"],
      desc: "DKI Jakarta park cleaning route optimization (GA, ACO, hybrid ACO+2-opt, K-Means).",
      story: [
        "For my Soft Computing final project, I built a route optimization system for park cleaning inspections in Jakarta, using open-source park data I found online and building out a realistic inspection scenario around it. I applied Genetic Algorithm, Ant Colony Optimization, and a hybrid ACO with 2-opt local search to solve it as a Vehicle Routing Problem with Time Windows.",
        "The scenario had constraints meant to reflect real operating conditions: an 8-hour operational window, vehicle speeds varying between 30 and 50 km/h depending on traffic density, and a fixed 30-minute inspection duration at each stop. I also applied K-Means clustering to zone the city first, which helped the routing algorithms scale instead of trying to solve the whole city at once.",
        "Output included 2D and interactive route maps and convergence analysis comparing how each algorithm performed against the others."
      ],
      docs: "https://intip.in/RouteOptimization"
    },
    {
      icon: "network",
      image: "assets/img/projects/ontology-cover.webp",
      gallery: ["assets/img/projects/ontology-owl.webp"],
      context: "Cognitive Systems",
      title: "Ontology-Based Expert System for Vespa Fault Diagnosis",
      hook: "Protégé ontology and SWRL rules built with a real service center.",
      tags: ["Protégé", "SWRL", "Figma"],
      desc: "Ontology-based expert system for Vespa scooter fault diagnosis (Protégé, SWRL rules, built with a real service center).",
      story: [
        "Given a set of symptoms, the system doesn't just name a likely fault category, it also suggests preliminary repair actions. I prototyped a supporting UI in Figma to visualize the diagnostic workflow, since the ontology itself isn't something a mechanic would want to look at directly.",
        "Working with real service center experts was the part that made this more than an academic exercise, it meant translating tacit, experience-based knowledge into something a rule-based system could actually reason over."
      ],
      docs: "https://intip.in/Ontology"
    },
    {
      icon: "cloud",
      image: "assets/img/projects/devops-landing.webp",
      gallery: ["assets/img/projects/devops-tracker.webp", "assets/img/projects/devops-login.webp"],
      context: "DevOps",
      title: "FullstackExpense — DevOps for a Fullstack Expense Tracker",
      hook: "CI/CD with GitHub Actions deploying to Google Cloud Run.",
      tags: ["Firebase", "GitHub Actions", "Google Cloud Run"],
      desc: "FullstackExpense — fullstack expense tracker (Firebase, CI/CD via GitHub Actions, Google Cloud Run).",
      story: [
        "For my System Development and Operations final project, my team and I took an open-source expense tracker from GitHub and turned it into a production-ready system, building a real CI/CD pipeline instead of deploying by hand.",
        "We refined the frontend with dynamic input formatting and real-time balance updates, and migrated the backend to Firebase for both authentication and Firestore. We used Cloud Logging and Monitoring to keep an eye on the deployed app once it was live."
      ],
      repo: "https://github.com/chrsthper/FullstackExpense",
      docs: "https://intip.in/DevopsProject"
    },
    {
      icon: "pen",
      image: "assets/img/projects/mamikos.webp",
      gallery: ["assets/img/projects/mamikos-pitch.webp"],
      context: "UX Design",
      title: "e-CCWS — UX Redesign of Mamikos",
      hook: "Research-to-prototype redesign of an accommodation search app.",
      tags: ["Figma", "User research", "Wizard of Oz testing"],
      desc: "e-CCWS — UX redesign case study of the Mamikos app (Figma, user research, Wizard of Oz testing).",
      story: [
        "For my User Experience Design final project, my team and I redesigned Mamikos, an accommodation search platform in Indonesia, working through the full design process from research to a working prototype.",
        "We also used the Wizard of Oz technique, simulating backend automation with hardcoded content, to test the concept without building real database integration.",
        "Four months of work with my team, Mico, Diva, Rani, and Qintha, ending in a pitch deck, final report, and a working Figma prototype."
      ],
      docs: "https://intip.in/RedesignMamikos"
    },
    {
      icon: "flame",
      image: "assets/img/projects/bushfire.webp",
      gallery: ["assets/img/projects/bushfire-scatter.webp"],
      context: "Diagnostic Analytics",
      title: "Wildfire & Weather Analytics — Western Australia",
      hook: "Clustering suburbs into bushfire risk zones from BOM weather data.",
      tags: ["Python", "K-Means", "Regression"],
      desc: "Wildfire/weather analytics in Western Australia (BOM data, clustering, regression).",
      story: [
        "For my Data and Diagnostic Analytics final project, my team and I looked at temperature trends and bushfire incidents across suburbs in Western Australia, trying to surface patterns that could inform fire prevention planning.",
        "We started with descriptive statistics and visualizations to see how temperature and bushfire frequency moved over time, then applied K-Means clustering to group suburbs into risk zones based on temperature and burn frequency, and linear regression to test the relationship between maximum temperature and fire frequency. All of it was done in Python, as a team of four.",
        "The clustering was the more useful part of the two: it let us group suburbs by risk level instead of just looking at raw counts, giving a clearer picture of where fire prevention resources might matter most."
      ],
      docs: "https://intip.in/BushfireAnalysisData"
    },
    {
      icon: "text",
      image: "assets/img/projects/lda-researchgate.webp",
      context: "Co-authored research",
      title: "Instagram Topic Modeling using LDA",
      hook: "NLP topic modeling on social media text (co-authored).",
      tags: ["NLP", "LDA", "Topic modeling"],
      desc: "This research analyzes topics in late teens' Instagram captions using the Latent Dirichlet Allocation (LDA) model. The main aim of this research is to find out the topics most frequently discussed by teenagers aged 18-21 years through their activities on social media. Research methods include data collection through crawling techniques on selected Instagram accounts, data cleaning to ensure accuracy, and analysis using the LDA model. The research results show that the most dominant topic among late teens is around elections with main words such as \"election\", \"campaign\" and \"healthy\". After cleaning the data by removing stop words, it was found that the topics that appeared most frequently were still related to elections and campaigns. This research concludes that Instagram is used by late teens as a platform to express their views on topics commonly discussed today regarding politics.",
      docs: "https://doi.org/10.13140/RG.2.2.20480.44806",
      docsLabel: "Read the paper (DOI)"
    }
  ],

  /* ── Work experience ──────────────────────────────────────────────────────
   *  highlights = the 1–2 bullets shown before "Show more". Copy them exactly
   *  from items/phases below; everything else stays behind the toggle.
   *  logo (image) or mark (2–3 letters) sits beside the company.
   *  photos = pictures shown in the role card.
   */
  experience: [
    {
      company: "PT Telekomunikasi Selular (Telkomsel)",
      role: "Network Performance Analyst Intern",
      location: "Surabaya, Indonesia",
      dates: "Jul 2025 – Dec 2025",
      tag: "Internship",
      logo: "assets/img/brands/telkomsel.png",
      photos: [
        { src: "assets/img/photos/telkomsel-speaker.webp", alt: "Speaking as a Telkomsel intern at the HMSI ITS company visit" }
      ],
      highlights: [
        "Built a spatial data pipeline integrating BTS revenue, population tiles (774,290 tiles across East Java), competitor speed data, and BPS demographic data",
        "Delivered results through a Streamlit dashboard supporting BTS investment decisions across the Jawa-Bali region"
      ],
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
      logo: "assets/img/brands/pelindo.png",
      photos: [
        { src: "assets/img/photos/pelindo-intern.webp", alt: "Intern group at PT Pelindo Marine Service", focus: "50% 62%", ratio: "4 / 3" }
      ],
      highlights: [
        "Designed Entity Relationship Diagrams (ERDs) for the MAROON and MARDOC applications to support structured database development",
        "Collected, structured, and finalized the blueprint document for the IMAIS application module"
      ],
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
      logo: "assets/img/brands/dbl.png",
      photos: [
        { src: "assets/img/photos/dbl-crew.webp", alt: "DBL Academy coaching crew", focus: "50% 67%", ratio: "4 / 3" }
      ],
      highlights: [
        "Trains 100–130 children weekly across 6–8 classes, adapting communication and coaching to each age group",
        "Organized an internal competition event with fellow coaches, coordinating execution and field data entry for 200+ students over a 2-week period"
      ],
      items: [
        "Trains 100–130 children weekly across 6–8 classes, adapting communication and coaching to each age group",
        "Compiles periodic progress-assessment reports each program trimester",
        "Organized an internal competition event with fellow coaches, coordinating execution and field data entry for 200+ students over a 2-week period"
      ]
    }
  ],

  /* ── Organizational experience ──────────────────────────────────────────── */
  orgFeatured: {
    name: "Information Systems Expo (ISE!) 2024",
    role: "Project Officer (Chairperson)",
    location: "Surabaya, Indonesia",
    dates: "Jan 2024 – Dec 2024",
    photo: "assets/img/photos/ise-2024-stage.webp",
    photoAlt: "Rinov speaking on stage at ISE! 2024",
    crew: [
      { src: "assets/img/photos/ise-2024.webp", alt: "ISE! 2024 committee group photo" },
      { src: "assets/img/photos/ise-2024-isclass.webp", alt: "ISE! 2024 IS CLASS crew photo" }
    ],
    stats: [
      { value: "250+", label: "committee members" },
      { value: "1,200+", label: "participants nationwide" },
      { value: "10", label: "divisions" }
    ],
    items: [
      "Led a national technology event engaging 1,200+ participants nationwide, directing a core executive team and 10 divisions totaling 250+ committee members",
      "Handled strategic planning, risk mitigation, budgeting, and execution across five major sub-events: BIONIX (national IT/business olympiad), RISE (national business case competition), ISE! Academy (public data science bootcamp), and IS CLASS (campus visit & outreach)"
    ]
  },
  /* Compact list — role + year only.
   *  photo = tile image; photos = images that open in the zoom view (first one used for the tile if no photo).
   */
  orgRoles: [
    { name: "SRE ITS SC", role: "Staff of Competency Development", year: "2023/2024", photos: ["assets/img/org/sre-its-sc.webp", "assets/img/org/sre-trex.webp"], focus: "50% 40%" },
    { name: "HMSI ITS", role: "Internship Staff of Internal Affairs", year: "", photo: "assets/img/org/hmsi-its-full.webp", photos: ["assets/img/org/hmsi-its-full.webp"], focus: "50% 100%" },
    { name: "ITS Sport Competition — Dies Natalis 63", role: "Event Staff", year: "2023", photo: "assets/img/org/isc-2023-full.webp", photos: ["assets/img/org/isc-2023-full.webp"], focus: "50% 90%" },
    { name: "ISE! 2023", role: "Paradigm Event FOH Staff", year: "2023", photo: "assets/img/org/ise-2023.webp", photos: ["assets/img/org/ise-2023-full.webp"] },
    { name: "GERIGI ITS 2023", role: "Staff of Main Event", year: "2023", photo: "assets/img/org/gerigi-2023.webp", photos: ["assets/img/org/gerigi-2023-full.webp"] },
    { name: "TEDxITS 2023", role: "Staff of Logistics and Consumption", year: "2023", photo: "assets/img/org/tedxits-2023.webp", photos: ["assets/img/org/tedxits-2023-full.webp"] },
    { name: "Futurest 2023", role: "Volunteer of Exhibition", year: "2023", photo: "assets/img/org/futurest-2023.webp", photos: ["assets/img/org/futurest-2023-full.webp"] },
    { name: "Ini Lho ITS! 2023", role: "Staff of Logistics, Tools, & Equipments", year: "2023", photo: "assets/img/org/ini-lho-its-2023.webp", photos: ["assets/img/org/ini-lho-its-2023-full.webp"] }
  ],

  /* ── Skills ─ compact tag chips per category. logo is optional. ──────── */
  skills: [
    { group: "Data Management & Engineering", items: [
      { name: "SQL" }, { name: "MySQL", logo: "assets/logos/mysql-dark.svg" }, { name: "Python (Pandas, Scikit-learn)", logo: "assets/logos/python.svg" },
      { name: "Pentaho Data Integration", logo: "assets/logos/pentaho.png" }, { name: "DBeaver", logo: "assets/logos/dbeaver.png" },
      { name: "Advanced Excel", logo: "assets/logos/excel.svg" }, { name: "Data Cleaning & Anomaly Detection" }
    ] },
    { group: "BI & Visualization", items: [
      { name: "Power BI", logo: "assets/logos/powerbi.png" }, { name: "Tableau" }, { name: "Streamlit" },
      { name: "Dashboard & KPI Design" }, { name: "Folium" }
    ] },
    { group: "ML & Forecasting", items: [
      { name: "LightGBM" }, { name: "Random Forest" }, { name: "PyCaret" }, { name: "BiLSTM" },
      { name: "Multi-Head Attention" }, { name: "TensorFlow/Keras", logo: "assets/logos/tensorflow.svg" }, { name: "SARIMA" }
    ] },
    { group: "Cloud", items: [
      { name: "Google Cloud (Vertex AI, BigLake, Document AI, DLP)", logo: "assets/logos/google-cloud.svg" },
      { name: "Firebase", logo: "assets/logos/firebase.svg" }
    ] },
    { group: "Dev & Design Tools", items: [
      { name: "GitHub", logo: "assets/logos/github-dark.svg" }, { name: "VS Code", logo: "assets/logos/vscode.svg" },
      { name: "Google Colab", logo: "assets/logos/colab.svg" }, { name: "Figma", logo: "assets/logos/figma.svg" },
      { name: "Protégé", logo: "assets/logos/protege.png" }
    ] },
    { group: "Soft Skills", items: [
      { name: "Cross-Functional Communication" }, { name: "Stakeholder Coordination" },
      { name: "Detail-Oriented Documentation" }, { name: "Team Leadership" }
    ] }
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
    { name: "Duolingo English Test — Score 125/B2 (Upper-Intermediate)", issuer: "Duolingo", year: "2024", image: "assets/img/certs/duolingo.webp", logo: "assets/img/brands/duolingo.png" },
    { name: "Introduction to SAP S/4HANA with GBI 4.2", issuer: "SAP", year: "2024", image: "assets/img/certs/sap-s4hana.webp", logo: "assets/img/brands/sap.png" }
  ]
};
