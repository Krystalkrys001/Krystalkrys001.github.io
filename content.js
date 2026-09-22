// ============================================================
// CONTENT.JS — edit THIS file to update the site. No HTML/CSS
// touching required for routine updates: new project, new cert,
// new journey milestone, all live here.
// ============================================================

window.SITE_DATA = {

  meta: {
    name: "Chukwuma Obinna Ulasi",
    title: "Data Analyst & Data Scientist",
    location: "Lagos, Nigeria",
    tagline: "Turning raw, scattered information into clear, verified insight.",
    email: "ulasistanley1@gmail.com",
    phone: "+2347039744486",
    github: "https://github.com/Krystalkrys001",
    githubUsername: "Krystalkrys001",
    linkedin: "https://www.linkedin.com/in/chukwuma-obinna-ulasi-082198413/",
    medium: "https://medium.com/@ulasistanley1",
    photo: "imgs/profile.jpeg",
  },

  hero: {
    eyebrow: "Data Analyst · Lagos, Nigeria",
    headline: "Chukwuma Obinna Ulasi.",
    sub: "I clean, question, and correct data before I trust it enough to act on it. Excel, SQL, Power BI, and Python, applied to real business questions across 9 shipped projects, not tutorials.",
    stats: [
      { value: "9+", label: "Projects Shipped" },
      { value: "2025", label: "Graduated, UniBen" },
      { value: "9", label: "AI/Data Certifications" },
    ],
  },

  about: {
    heading: "I clean, question, and correct data before I trust it enough to act on it.",
    body: "I'm a Data Analyst working in Excel, SQL, PostgreSQL, and Power BI, with a background in front-end development, graphic design, and video editing that sharpens how I think about turning raw, scattered information into clear, business-ready insight. B.Sc. graduate (Second Class Honours, Upper Division).",
    correction: {
      label: "Real correction, from a live project",
      headline: "Reported hybrid price premium: 35% → 29%, recalculated from source data",
      body: "The source report defined the metric one way and calculated it another. I caught the gap before it went on a dashboard.",
    },
  },

  // ============================================================
  // JOURNEY — the narrative arc. Edit dates/copy here only.
  // ============================================================
  journey: [
    {
      year: "2022",
      title: "Desktop Publishing & Web Foundations",
      body: "Started learning Photoshop, CorelDRAW, Excel, Word and PowerPoint, and got curious about how websites work, HTML, CSS, and JavaScript.",
    },
    {
      year: "2022",
      title: "Sales Manager, Crown Chemical",
      body: "Where the working journey actually started. Managed daily inventory operations, stock reconciliations, and product branding, before data or design were full-time pursuits.",
    },
    {
      year: "2024–2025",
      title: "Crypto Community & Digital Content",
      body: "Worked with crypto communities as a Community Manager, Shiller and Raider, creating graphics and digital content across projects.",
    },
    {
      year: "2022 - Present",
      title: "Full-Stack Deep Dive & First Live Site",
      body: "Enrolled in two Udemy full-stack courses, then built and deployed a complete website from scratch. Also explored AI prompt engineering and copywriting, capped with a 37-day public challenge on X.",
    },
    {
      year: "2025 - Present",
      title: "Data Analytics, Full Commitment",
      body: "Went deep on Excel, SQL, Power BI, and Python. Shipped real projects on real datasets, DataCo, Discount Motors, TomaLink, Spotify, CollabNest, then advanced into machine learning and NLP through DecodeLabs.",
    },
  ],

  // ============================================================
  // EXPERIENCE & EDUCATION — the formal timeline
  // ============================================================
  experience: [
    {
      dates: "Jul 2022 — Present",
      title: "Sales Manager & Front-End Developer",
      org: "Crown Chemical Investment Limited",
      link: "https://chproduct.ng/",
      body: "Designed and built the company's official website with HTML, CSS, and JavaScript. Manage daily inventory operations, stock reconciliations, and product branding.",
    },
    {
      dates: "Sept 2024 — June 2026",
      title: "Community Manager & Graphic Designer",
      org: "TrinityPad",
      body: "Managed online community engagement and designed marketing graphics for campaigns and social media.",
    },
    {
      dates: "2025",
      title: "B.Sc., Second Class Honours (Upper Division)",
      org: "University of Benin",
      body: "Graduated.",
    },
  ],

  // ============================================================
  // SKILLS — grouped stacks
  // ============================================================
  skills: [
     {
      group: "Tools I Work With",
      items: ["Microsoft Excel / Google Sheet, "PowerBi", "PostgreSQL", "Python", "Copilot", "ClaudeAi", "ChatGPT", "GrokAi", "GeminiAi",  ],
    },
    {
      group: "Data & Querying",
      items: ["SQL (PostgreSQL)", "pgAdmin4", "Python", "Pandas", "NumPy", "Jupyter Notebook / Anaconda"],
    },
    {
      group: "Machine Learning & NLP",
      items: ["Scikit-learn", "SMOTE / imbalanced-learn", "NLTK", "TF-IDF", "K-Means & PCA", "Naive Bayes"],
    },
    {
      group: "Visualisation & BI",
      items: ["Power BI", "DAX", "Power Query (M)", "Star Schema Modelling", "Matplotlib", "Drillthrough & Slicers"],
    },
    {
      group: "Excel & Methods",
      items: ["VLOOKUP / XLOOKUP", "INDEX / MATCH", "SUMIF / SUMIFS / COUNTIFS", "Data Cleaning & Validation", "Data Storytelling"],
    },
    {
      group: "Web & Design",
      items: ["HTML / CSS / JavaScript", "Photoshop", "CorelDRAW", "Canva", "CapCut"],
    },
  ],

  // ============================================================
  // PROJECTS — "category" controls the filter tab: dataAnalyst | dataScience | web
  // ============================================================
  projects: [
    {
      category: "dataAnalyst",
      tags: ["Power BI", "Power Query", "DAX", "Data Validation"],
      title: "DataCo Supply Chain Analytics",
      image: "imgs/proj-dataco.jpeg",
      body: "Sat with 180,519 real supply chain orders and asked a question that almost got past me: how does a business run an average delivery delay of practically zero days, while more than half its orders technically arrive late. Built a 3-page Power BI dashboard, catching a duplicate KPI measure, a misleading 50/50 chart, and a sum-versus-average error along the way.",
      calloutLabel: "Caught & Corrected",
      callout: "Average delivery delay sat near zero days, but 54.83% of orders were technically late underneath it. Calculated a strict, honestly defined On-Time Delivery Rate of 17.84%, rejecting a looser definition that would have inflated the figure to roughly 45%.",
      links: [
        { label: "View on GitHub", url: "https://github.com/Krystalkrys001/Dataco" },
        { label: "Read on Medium", url: "https://medium.com/@ulasistanley1/from-180-000-orders-to-one-question-where-does-this-business-actually-bleed-money-f56c97b05ef3?sharedUserId=ulasistanley1" },
        { label: "Read on LinkedIn", url: "https://lnkd.in/p/eQKXHGci" },
      ],
    },
    {
      category: "dataAnalyst",
      tags: ["Power BI", "DAX", "Power Query", "Data Validation"],
      title: "Discount Motors: Hybrid & EV Sales Analysis",
      image: "imgs/proj-discountmotors.jpeg",
      body: "Analysed 6,693 used Toyota listings to test marketing's assumption that hybrid demand was too small to chase. Found hybrids already hold 30.5% of sales, second only to Petrol.",
      calloutLabel: "Caught & Corrected",
      callout: "The source report defined the price premium using median price, but its stated result of 35% only reproduces using mean price. Recalculating with the documented method gave 29%, not 35%.",
      links: [
        { label: "View on GitHub", url: "https://github.com/Krystalkrys001/discount-motors-hybrid-sales-analysis" },
        { label: "Read on Medium", url: "https://medium.com/@ulasistanley1/marketing-assumed-hybrids-were-a-niche-the-data-told-a-different-story-1d7fe00f09f7" },
        { label: "Read on LinkedIn", url: "https://www.linkedin.com/posts/chukwuma-obinna-ulasi-082198413_techyjaunt-powerbi-dataanalytics-activity-7486845575586455552-WvaH" },
      ],
    },
    {
      category: "dataAnalyst",
      tags: ["Power BI", "Data Cleaning", "Market Research"],
      title: "TomaLink: Reducing Post-Harvest Tomato Losses",
      image: "imgs/proj-tomalink.jpeg",
      body: "Worked as one of six Data Analysts on a 30-person hackathon team building a platform to cut Nigeria's tomato post-harvest losses, currently 40 to 45% of the national harvest.",
      calloutLabel: "Research that shaped the product",
      callout: "Researched seven existing agricultural platforms before proposing a direction. Twiga Foods in Kenya nearly collapsed trying to own its own farms, trucks, and warehouses, a direct case for why TomaLink connects existing stakeholders instead.",
      links: [
        { label: "View on GitHub", url: "https://github.com/Krystalkrys001/TomaLink-project---A-Hackathon-in-TECHYJAUNT-" },
        { label: "Read on Medium", url: "https://medium.com/@ulasistanley1/what-i-learned-building-the-data-case-for-a-tomato-supply-chain-startup-50da3e462114" },
        { label: "Read on LinkedIn", url: "https://www.linkedin.com/posts/chukwuma-obinna-ulasi-082198413_what-i-learned-building-the-data-case-for-activity-7486468721012584448-n8uV" },
      ],
    },
    {
      category: "dataAnalyst",
      tags: ["Power BI", "Data Cleaning", "Data Visualization"],
      title: "Spotify Streaming Data Analysis",
      image: "imgs/proj-spotify.jpeg",
      body: "Built a Power BI dashboard analyzing streaming performance across 500 artists, 23 genres, and 43 countries, totaling roughly 8 million streams.",
      calloutLabel: "What the split revealed",
      callout: "Collaborative and solo streams landed almost evenly, 50.61% versus 49.39%, and the United States and hip-hop led their respective country and genre breakdowns.",
      links: [
        { label: "View on GitHub", url: "https://github.com/Krystalkrys001/SPOTIFY" },
        { label: "Read on Medium", url: "https://medium.com/@ulasistanley1/analyzing-spotify-dataset-containing-500-artists-and-8-million-streams-taught-me-about-trusting-a-e3554b14829a?sharedUserId=ulasistanley1" },
        { label: "Read on LinkedIn", url: "https://lnkd.in/p/eQYuGhsq" },
      ],
    },
    {
      category: "dataAnalyst",
      tags: ["Power BI", "Survey Research", "Competitor Analysis"],
      title: "CollabNest: Team-Formation Platform (Live MVP)",
      image: "imgs/proj-collabnest.jpg",
      body: "Data Analyst on a hackathon team building a team-formation platform. Led user and employer research (61 verified responses), ranked pain points, and mapped an 8-skill demand-vs-supply gap. Designed the KPI framework and Power BI dashboard.",
      calloutLabel: "The signal that shaped pricing",
      callout: "83% of respondents would pay to create a team, vs. 63% to join one. That 20-point gap became the actual monetization decision, no assessed competitor had built it.",
      links: [
        { label: "Live Product", url: "https://collabnest-mvp2-1.onrender.com" },
      ],
    },
    {
      category: "dataScience",
      tags: ["Python", "Pandas", "Feature Engineering"],
      title: "DecodeLabs Project 1: Advanced EDA & Feature Engineering",
      image: "imgs/proj-decodelabs1.png",
      body: "Cleaned a 1,200-row e-commerce dataset. 309 rows had a blank coupon code, 25.75% missing, labeled explicitly rather than statistically guessed, since a blank code meant 'no coupon used,' not an unknown value.",
      calloutLabel: "Caught & Corrected",
      callout: "8 orders flagged as statistical outliers by IQR were legitimate large orders, not errors. Capping them would have broken their own Quantity × UnitPrice formula.",
      links: [
        { label: "View on GitHub", url: "https://github.com/Krystalkrys001/DATASCIENCE_PROJECT_ON_DECODELABS__TASK1" },
      ],
    },
    {
      category: "dataScience",
      tags: ["Scikit-learn", "SMOTE", "Random Forest"],
      title: "DecodeLabs Project 2: Fraud Detection (Supervised Learning)",
      image: "imgs/proj-decodelabs2.png",
      body: "Built and compared two models on 284,807 real credit card transactions, 0.17% fraud. Proved a model predicting 'legitimate' every time scores 99.83% accuracy while catching zero fraud.",
      calloutLabel: "Caught & Corrected",
      callout: "Fixed a leakage risk: scaling had to happen before SMOTE, since unscaled transaction amount would dominate every synthetic fraud example generated. Chose Random Forest over Logistic Regression, cutting false alarms from 1,467 to 50.",
      links: [
        { label: "View on GitHub", url: "https://github.com/Krystalkrys001/DATASCIENCE_PROJECT_ON_DECODELABS__TASK2" },
      ],
    },
    {
      category: "dataScience",
      tags: ["PCA", "K-Means", "Clustering"],
      title: "DecodeLabs Project 3: Customer Segmentation (Unsupervised Learning)",
      image: "imgs/proj-decodelabs3.png",
      body: "Grouped 1,000 unlabeled retail customers using PCA and K-Means into 4 actionable personas.",
      calloutLabel: "The statistical vs. useful trade-off",
      callout: "Silhouette Score mathematically favored 2 clusters, the cleanest split. Chose 4 instead, based on the Elbow Method's inflection point and the need for personas a marketing team could actually act on.",
      links: [
        { label: "View on GitHub", url: "https://github.com/Krystalkrys001/DATASCIENCE_PROJECT_ON_DECODELABS__TASK3" },
      ],
    },
    {
      category: "dataScience",
      tags: ["NLTK", "TF-IDF", "Naive Bayes"],
      title: "DecodeLabs Project 4: NLP Sentiment Analysis",
      image: "imgs/proj-decodelabs4.png",
      body: "Built a sentiment classifier on 20,000 Amazon reviews. Fixed the 'Stop-Word Trap,' default cleaning removes 'not,' silently flipping sentiment with no error raised.",
      calloutLabel: "Caught & Corrected",
      callout: "Baseline model caught 97% of positive reviews but only 61% of negative ones. Switched to ComplementNB, purpose-built for imbalanced text, lifting negative recall to 88% with no added complexity.",
      links: [
        { label: "View on GitHub", url: "https://github.com/Krystalkrys001/DATASCIENCE_PROJECT_ON_DECODELABS__TASK4" },
      ],
    },
    {
      category: "web",
      tags: ["HTML", "CSS", "JavaScript"],
      title: "Crown Chemical Investment Limited, Company Website",
      body: "Designed and built the company's official website from scratch, translating stakeholder requirements into functional, responsive pages. Live and in production use.",
      links: [
        { label: "View Live Site", url: "https://chproduct.ng/" },
      ],
    },
    {
      category: "web",
      tags: ["Live Product", "Team Project"],
      title: "CollabNest",
      body: "Team-formation platform built by a hackathon team, live and in production. My role on it was Data Analyst, see the full research and KPI case study under the Data Analyst tab.",
      links: [
        { label: "View Live Site", url: "https://collabnest-mvp2-1.onrender.com" },
      ],
    },
  ],

  // ============================================================
  // DESIGN WORK
  // ============================================================
  designNote: "Graphic design work created for TrinityPad, a crypto and fintech platform, as part of my role as Community Manager & Graphic Designer.",
  designWork: [
    { img: "imgs/trinitypad-1.jpeg", caption: "TrinityPad — \"Digital Yuan Yields\" campaign graphic" },
    { img: "imgs/trinitypad-2.jpeg", caption: "TrinityPad — \"Yen Rails, Global Flow\" campaign graphic" },
  ],

  // ============================================================
  // CERTIFICATIONS
  // ============================================================
  certifications: [
    {
      title: "AI Security & Governance",
      issuer: "Securiti",
      meta: "8-module certification · CPE 1.5 · Certificate ID 14B414279-14B4140E8-1451D2521",
      verifyUrl: "https://education.securiti.ai/dashboard/",
      modules: [
        "Introduction to AI and Generative AI",
        "Introduction to AI Governance",
        "AI Model Discovery",
        "AI Risk Assessment",
        "Understanding Data and AI Relationships",
        "Controlling Data Inputs and Outputs",
        "AI Regulatory Compliance",
        "AI Governance Program & Management",
      ],
    },
    {
      title: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      meta: "Completed September 2026",
      verifyUrl: "https://verify.skilljar.com/c/vfo5uepmye2i",
    },
    {
      title: "Claude 101",
      issuer: "Anthropic",
      meta: "Completed September 2026",
      verifyUrl: "https://verify.skilljar.com/c/uyt4st44b2j9",
    },
    {
      title: "Power BI for Beginners",
      issuer: "Microsoft · Simplilearn",
      meta: "6 June 2026 — Code 10315554",
      verifyUrl: "https://simpli-web.app.link/e/MZzPR2a954b",
    },
    {
      title: "Excel Dashboard for Beginners",
      issuer: "Microsoft · Simplilearn",
      meta: "26 May 2026 — Code 10273824",
      verifyUrl: "https://simpli-web.app.link/e/TFWZWgj954b",
    },
    {
      title: "Data Analyst 101",
      issuer: "Microsoft · Simplilearn",
      meta: "27 May 2026 — Code 10273942",
      verifyUrl: "https://simpli-web.app.link/e/8Ns4X0e954b",
    },
    {
      title: "Introduction to MS Excel",
      issuer: "Microsoft · Simplilearn",
      meta: "23 May 2026 — Code 10262230",
      verifyUrl: "https://simpli-web.app.link/e/T3N5Ehm954b",
    },
    {
      title: "Data Analytics Bootcamp",
      issuer: "TechyJaunt",
      meta: "- Excel, SQL, Power BI, Python",
      verifyUrl: "",
    },
    {
      title: "Data Science Industrial Training",
      issuer: "INTERNSHIP - DecodeLabs",
      meta: "2026 Batch — EDA, Supervised & Unsupervised Learning, NLP",
      verifyUrl: "",
    },
  ],

  // ============================================================
  // EMAILJS — contact form
  // ============================================================
  emailjs: {
    serviceId: "service_pxo2obs",
    templateId: "template_uiq5uza",
    publicKey: "wtFiD-Lu-LKUR5TTj",
  },

};
