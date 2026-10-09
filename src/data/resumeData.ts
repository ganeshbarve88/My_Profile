import { ExperienceItem, SkillCategory, Certification, Award, ArchitectureStep, EducationItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Ganesh Barve',
  title: 'Senior Lead Data Engineer',
  tagline: '2X Google Cloud Certified | 10+ Years Experience',
  location: 'Bangalore, India',
  phone: '+91 9164557268',
  secondaryPhone: '+91 8217620030',
  email: 'ganeshbarve88@gmail.com',
  summary: `Senior Lead Data Engineer with 10+ years of experience architecting high-volume GCP & Teradata pipelines for global Banking & Retail enterprises. Proven expert in cloud migrations, Data Vault modeling, and ETL optimization, successfully leading engineering teams to deliver scalable, fault-tolerant data warehouse solutions. 2X Google Cloud Certified professional focused on driving operational efficiency, automating complex workflows, and transforming raw data into actionable business intelligence.`,
  yearsOfExperience: '10+',
  totalTechnologies: '23+',
  certificationsCount: '3',
  awardsCount: '6',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'anz',
    company: 'ANZ Operations and Technology',
    role: 'Senior Lead Data Engineer',
    location: 'Bangalore, India',
    period: 'June 2022 – Present',
    startDate: '2022',
    endDate: 'Present',
    badge: 'Tier-1 Global Banking Enterprise',
    summary: 'Directing data architecture, cloud modernization to GCP BigQuery & AWS S3, and high-frequency real-time banker integrations while serving as Scrum Master.',
    roleProgression: [
      { title: 'Senior Lead Data Engineer', period: 'July 2024 – Present' },
      { title: 'Lead Data Engineer', period: 'June 2022 – June 2024' }
    ],
    highlights: [
      {
        title: 'Commercial Banking Data Product (GCP BigQuery)',
        description: 'Spearheaded the end-to-end architecture and implementation of the Commercial Banking data product on GCP BigQuery during a critical resource crunch. Conducted in-depth technical analysis to master emerging technologies, collaborating seamlessly across business stakeholders to deliver a scalable, production-grade analytics platform.',
        tags: ['GCP BigQuery', 'Commercial Banking', 'brilliANZ Award', 'Stakeholder Collaboration']
      },
      {
        title: 'Cloud Migration & API Architecture',
        description: 'Led a team of data engineers to migrate the Data Warehouse from Teradata to AWS S3 and GCP BigQuery. Engineered extraction pipelines using Python, dbt, and SQL to stage data in GCS buckets and Cloud SQL, enabling real-time API calls from Salesforce CRM for banker loan processing, fully orchestrated via Airflow Cloud Composer.',
        tags: ['GCP BigQuery', 'AWS S3', 'dbt', 'Airflow Cloud Composer', 'Python', 'Salesforce CRM']
      },
      {
        title: 'Enterprise Architecture & Modeling',
        description: 'Architected and deployed scalable, fault-tolerant data pipelines using Data Vault 2.0 and Star Schema on Teradata, empowering the Marketing division with high-fidelity campaign performance analytics.',
        tags: ['Data Vault 2.0', 'Star Schema', 'Teradata', 'Enterprise Analytics']
      },
      {
        title: 'Strategic Migration (50+ Data Entities)',
        description: 'Orchestrated a high-stakes migration of 50+ mission-critical data entities from legacy Oracle systems to a modern Teradata warehouse, achieving zero downtime and preserving data continuity for downstream reporting.',
        tags: ['Zero Downtime', 'Oracle to Teradata', '50+ Core Entities', 'Data Governance']
      },
      {
        title: 'Unified Ecosystem Integration',
        description: 'Engineered a unified data ecosystem by automating complex data flows across Salesforce, GCP BigQuery, Teradata, and visualization tools (Qlik, Tableau), establishing a single source of truth for business metrics.',
        tags: ['Single Source of Truth', 'Salesforce', 'BigQuery', 'Tableau', 'Qlik Sense']
      },
      {
        title: 'Operational Excellence & MTTR Slashed',
        description: 'Revolutionized job monitoring by implementing Control-M and Skybot scheduling, drastically reducing manual oversight and cutting Mean Time to Recovery (MTTR) for critical data incidents.',
        tags: ['Control-M', 'Skybot', 'MTTR Reduction', 'Automated Monitoring']
      },
      {
        title: 'Revenue Enablement & Predictive Modeling',
        description: 'Designed and implemented a predictive Lead-to-Application conversion model for credit and loan products, delivering actionable insights via Qlik Sense that optimized lead targeting and conversion rates.',
        tags: ['Predictive Modeling', 'Lead Conversion', 'Qlik Sense', 'Loan Products']
      },
      {
        title: 'Agile Leadership & Mentorship',
        description: 'Directed a cross-functional team of engineers and vendors as Scrum Master, driving sprint planning, backlog refinement, and efficient delivery of data products while mentoring vendor engineering teams.',
        tags: ['Scrum Master', 'Team Leadership', 'Vendor Mentorship', 'Agile Delivery']
      }
    ],
    awards: [
      'ANZ brilliANZ Award (Q1 FY26, Oct–Dec 2025) - For outstanding achievement in building the Commercial Banking data product on GCP BigQuery end-to-end through in-depth technical analysis, rapid technology adoption, cross-functional stakeholder collaboration, and resilient delivery during an enterprise resource crunch',
      'ANZ Individual Excellence (Stellar) Award - For exceptional leadership in mentoring vendor teams and delivering high-value technical solutions',
      'ANZ Year End Recognition FY24 - For outstanding contribution and living company purpose'
    ],
    technologies: [
      'GCP BigQuery', 'Cloud SQL', 'GCS', 'AWS S3', 'Airflow Cloud Composer',
      'dbt', 'Python', 'Teradata', 'Data Vault 2.0', 'Salesforce CRM',
      'Control-M', 'Skybot', 'Qlik Sense', 'Tableau', 'Bamboo CI/CD'
    ]
  },
  {
    id: 'riskonnect',
    company: 'Riskonnect Inc.',
    role: 'Senior Data Engineer',
    location: 'Mangalore, India',
    period: 'December 2020 – June 2022',
    startDate: '2020',
    endDate: '2022',
    badge: 'Enterprise Risk & Claims Management',
    summary: 'Engineered B2B data bridge processing high-volume employee claims for Fortune 500 enterprises with 99.9% data integrity.',
    highlights: [
      {
        title: 'B2B Data Integration for Fortune 500',
        description: 'Designed and launched a robust End-to-End TPA (Third Party Administrator) Support model, serving as a critical data bridge for Fortune 500 clients (including Amazon, Walmart) to process high-volume employee claims efficiently.',
        tags: ['Fortune 500 Clients (Amazon, Walmart)', 'B2B Data Bridge', 'Claims Processing']
      },
      {
        title: 'Algorithm & Query Optimization',
        description: 'Engineered and fine-tuned complex financial algorithms using Oracle Views and Stored Procedures, significantly reducing query execution time and accelerating the claims settlement lifecycle.',
        tags: ['Oracle PL/SQL', 'Performance Tuning', 'Stored Procedures', 'Settlement Lifecycle']
      },
      {
        title: 'Data Integrity Governance (99.9% Accuracy)',
        description: 'Established rigorous data quality frameworks using SSIS and Visual Cron for staging and loading, ensuring 99.9% accuracy and reliability for insured member data.',
        tags: ['SSIS', 'Visual Cron', '99.9% Accuracy', 'Data Quality Framework']
      }
    ],
    technologies: [
      'Oracle PL/SQL', 'SSIS', 'Visual Cron', 'Stored Procedures',
      'Data Integrity', 'B2B TPA Systems', 'ETL Optimization'
    ]
  },
  {
    id: 'infosys',
    company: 'Infosys Technologies Ltd.',
    role: 'Technology Analyst',
    client: 'Apple Inc.',
    location: 'Mangalore, India',
    period: 'March 2016 – November 2020',
    startDate: '2016',
    endDate: '2020',
    badge: 'Client: Apple Inc. - Global Marketing & Data Ingestion',
    summary: 'Developed large-scale Unix & Teradata pipelines for Apple Inc. Unica campaign platform and led 8-member offshore delivery team.',
    roleProgression: [
      { title: 'Technology Analyst', period: 'April 2019 – November 2020' },
      { title: 'Senior Systems Engineer', period: 'April 2018 – March 2019' },
      { title: 'Systems Engineer', period: 'September 2016 – March 2018' },
      { title: 'Systems Engineer Trainee', period: 'March 2016 – August 2016' }
    ],
    highlights: [
      {
        title: 'Big Data ETL for Global Campaigns (Apple Inc.)',
        description: 'Developed high-performance UNIX Shell scripts and Teradata ETL processes to ingest and transform massive datasets for the Unica marketing platform, supporting global-scale customer campaigns.',
        tags: ['Apple Inc. Campaigns', 'UNIX Shell Scripting', 'Teradata ETL', 'Unica Platform']
      },
      {
        title: 'Workflow Automation (~40% Manual Reduction)',
        description: 'Spearheaded the automation of daily campaign monitoring using Autosys, reducing manual intervention by ~40% and enabling rapid issue resolution.',
        tags: ['Autosys', '40% Manual Reduction', 'Automated Health Monitoring', 'Award Winning']
      },
      {
        title: 'GDPR Regulatory Compliance',
        description: 'Architected secure data extraction pipelines to meet strict GDPR requirements, ensuring the timely and compliant delivery of sensitive customer PII without compromise.',
        tags: ['GDPR Compliance', 'PII Security', 'Data Governance', 'Audit Trails']
      },
      {
        title: 'Offshore Team Delivery & Technical Liaison',
        description: 'Managed technical delivery for an 8-member offshore team, acting as the primary technical liaison to translate complex client requirements into executable engineering tasks.',
        tags: ['Team Lead (8 engineers)', 'Client Liaison', 'Delivery Management']
      }
    ],
    awards: [
      'Infosys INSTA Award (Received 3x) - For quick issue resolution and automating UNICA campaign monitoring'
    ],
    technologies: [
      'Teradata', 'UNIX Shell Scripting', 'Autosys', 'Unica Platform',
      'GDPR Compliance', 'ETL Pipelines', 'SQL Performance Tuning'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Cloud & Big Data',
    skills: [
      {
        name: 'GCP BigQuery',
        experience: '4+ Years',
        level: 'Expert',
        enterpriseUse: 'Enterprise Data Warehouse migration, partitioning, clustering, high-volume analytical queries at ANZ Bank'
      },
      {
        name: 'Google Cloud Platform (GCP)',
        experience: '4+ Years',
        level: 'Expert',
        enterpriseUse: 'GCS buckets, Cloud SQL, Cloud Composer (Airflow), IAM, VPC, 2X Certified'
      },
      {
        name: 'AWS S3',
        experience: '3+ Years',
        level: 'Advanced',
        enterpriseUse: 'Data staging and cross-cloud data ingestion pipelines'
      },
      {
        name: 'PySpark & Starburst',
        experience: '3+ Years',
        level: 'Proficient',
        enterpriseUse: 'Distributed computing, federated queries, large-scale dataset transformations'
      },
      {
        name: 'Cloud SQL',
        experience: '3+ Years',
        level: 'Advanced',
        enterpriseUse: 'Real-time transactional staging and banker API integration'
      }
    ]
  },
  {
    category: 'Databases & Data Modeling',
    skills: [
      {
        name: 'Teradata',
        experience: '9+ Years',
        level: 'Expert',
        enterpriseUse: 'Enterprise DWH architecture, FastLoad/MultiLoad, BTEQ, query optimization at Apple & ANZ'
      },
      {
        name: 'Data Vault 2.0 Modeling',
        experience: '4+ Years',
        level: 'Expert',
        enterpriseUse: 'Hubs, Links, Satellites architecture for agile banking marketing pipelines'
      },
      {
        name: 'Star Schema & Dimensional Modeling',
        experience: '8+ Years',
        level: 'Expert',
        enterpriseUse: 'Fact and Dimension schema design for high-performance campaign BI reporting'
      },
      {
        name: 'Oracle (PL/SQL)',
        experience: '6+ Years',
        level: 'Expert',
        enterpriseUse: 'Stored procedures, complex analytical views, 50+ entity migration to modern warehouse'
      }
    ]
  },
  {
    category: 'ETL & Orchestration',
    skills: [
      {
        name: 'dbt (Data Build Tool)',
        experience: '3+ Years',
        level: 'Advanced',
        enterpriseUse: 'Modular SQL transformations, testing, and documentation in BigQuery pipelines'
      },
      {
        name: 'Apache Airflow / Cloud Composer',
        experience: '4+ Years',
        level: 'Expert',
        enterpriseUse: 'Production DAG orchestration, automated dependency triggers, API syncing'
      },
      {
        name: 'UNIX Shell Scripting',
        experience: '9+ Years',
        level: 'Expert',
        enterpriseUse: 'High-throughput automation, batch processing, POSIX system scripting'
      },
      {
        name: 'Control-M & Skybot',
        experience: '4+ Years',
        level: 'Expert',
        enterpriseUse: 'Enterprise job scheduling, alerting, and incident recovery at ANZ Bank'
      },
      {
        name: 'Autosys',
        experience: '5+ Years',
        level: 'Advanced',
        enterpriseUse: '40% manual monitoring reduction at Apple Inc. campaign systems'
      },
      {
        name: 'SSIS, KNIME & Visual Cron',
        experience: '4+ Years',
        level: 'Advanced',
        enterpriseUse: 'B2B integration, staging/loading workflows with 99.9% data accuracy'
      }
    ]
  },
  {
    category: 'DevOps & Enterprise Tools',
    skills: [
      {
        name: 'Git & Bitbucket',
        experience: '8+ Years',
        level: 'Expert',
        enterpriseUse: 'Version control, branch protection, pull request reviews'
      },
      {
        name: 'Bamboo CI/CD',
        experience: '4+ Years',
        level: 'Advanced',
        enterpriseUse: 'Automated deployment pipelines for data assets and dbt models'
      },
      {
        name: 'JIRA & Confluence',
        experience: '8+ Years',
        level: 'Expert',
        enterpriseUse: 'Scrum Master sprint execution, technical architecture documentation'
      },
      {
        name: 'Agile & Scrum Leadership',
        experience: '5+ Years',
        level: 'Expert',
        enterpriseUse: 'Scrum Master for cross-functional teams and external vendor engineering teams'
      }
    ]
  },
  {
    category: 'Visualization & BI',
    skills: [
      {
        name: 'Tableau',
        experience: '5+ Years',
        level: 'Advanced',
        enterpriseUse: 'Executive marketing dashboards and campaign performance analytics'
      },
      {
        name: 'Qlik Sense',
        experience: '4+ Years',
        level: 'Advanced',
        enterpriseUse: 'Predictive lead-to-application conversion model for loan products'
      },
      {
        name: 'Salesforce CRM Integration',
        experience: '3+ Years',
        level: 'Advanced',
        enterpriseUse: 'Certified Admin; real-time banker loan processing APIs via GCS and Cloud SQL'
      },
      {
        name: 'Adobe Analytics',
        experience: '3+ Years',
        level: 'Proficient',
        enterpriseUse: 'Digital behavioral data ingestion and cross-channel attribution modeling'
      }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google Cloud',
    validity: 'Feb 2026 – Feb 2029',
    credentialId: 'GCP-ACE-VERIFIED',
    highlight: 'Deploying solutions, managing enterprise cloud infrastructure, IAM governance, and BigQuery analytics.',
    iconType: 'gcp'
  },
  {
    title: 'Google Cloud Certified Generative AI Leader',
    issuer: 'Google Cloud',
    validity: 'Jul 2026 – Jul 2029',
    credentialId: 'GCP-GENAI-LEADER',
    highlight: 'Architecting generative AI data pipelines, enterprise LLM strategies, and cloud governance frameworks.',
    iconType: 'genai'
  },
  {
    title: 'Salesforce Administration Certification',
    issuer: 'Salesforce Inc.',
    validity: 'Completed Intensive Program',
    highlight: '2-Month Intensive Program & Certification covering data modeling, CRM API hooks, and security architecture.',
    iconType: 'salesforce'
  }
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    course: 'B.E (Electronics and communication Engineering)',
    institution: 'SDM Institute of Technology, Ujire.',
    universityOrBoard: 'Visvesvaraya Technological University, Belgaum',
    passingYear: '2015',
    aggregate: '74.24%'
  },
  {
    course: 'PUC',
    institution: 'Viveka P.U college Kota',
    universityOrBoard: 'Department of Pre-University Education Karnataka',
    passingYear: '2011',
    aggregate: '80.17%'
  },
  {
    course: 'SSLC',
    institution: 'Viveka Boys high school Kota',
    universityOrBoard: 'Karnataka Secondary education examination Board (KSEEB)',
    passingYear: '2009',
    aggregate: '87.84%'
  }
];

export const AWARDS: Award[] = [
  {
    title: 'ANZ brilliANZ Award',
    organization: 'ANZ Operations and Technology',
    reason: 'Awarded for outstanding achievement in building the Commercial Banking data product on GCP BigQuery end-to-end through in-depth technical analysis, rapid technology adoption, cross-functional stakeholder collaboration, and resilient delivery during an enterprise resource crunch.',
    year: 'Q1 FY26 (Oct–Dec 2025)'
  },
  {
    title: 'ANZ Individual Excellence (Stellar) Award',
    organization: 'ANZ Operations and Technology',
    reason: 'Awarded for exceptional leadership in guiding, supporting, and leading vendor engineering teams and delivering high-value technical solutions.',
    year: 'ANZ Bank'
  },
  {
    title: 'ANZ Year End Recognition FY24',
    organization: 'ANZ Operations and Technology',
    reason: 'Awarded for outstanding technical contribution, zero-downtime migrations, and living the company purpose.',
    year: 'FY24'
  },
  {
    title: 'Infosys INSTA Award (Received 3 Times)',
    organization: 'Infosys Technologies Ltd. (Client: Apple Inc.)',
    reason: 'Awarded 3 separate times for rapid mission-critical issue resolution and successfully spearheading the automation of daily UNICA campaign monitoring.',
    year: 'Apple Inc. Engagement',
    count: 3
  }
];

export const ARCHITECTURE_PIPELINE: ArchitectureStep[] = [
  {
    id: 'source-layer',
    phase: '01. Ingestion & Legacy Systems',
    title: 'Multi-Source Enterprise Ingestion',
    tech: ['Oracle Enterprise (50+ Entities)', 'Teradata Warehouse', 'External TPA Streams', 'Salesforce CRM'],
    description: 'Ingesting high-volume transactional records, financial claims, and banker workflows from on-premise Oracle clusters and Teradata warehouses with zero packet loss.',
    outcomes: [
      '50+ mission-critical data entities migrated with zero downtime',
      'Fault-tolerant staging preserving data continuity for downstream reporting'
    ],
    systemType: 'source'
  },
  {
    id: 'orchestration-layer',
    phase: '02. Orchestration & Automation',
    title: 'Airflow Cloud Composer & Control-M',
    tech: ['Apache Airflow (Cloud Composer)', 'Control-M', 'Autosys', 'Python DAGs', 'UNIX Shell'],
    description: 'Dynamic DAG execution with automated SLA alerting, dependency validation, and backfill capabilities. Integrated Control-M and Skybot to eliminate manual monitoring.',
    outcomes: [
      'Slashed Mean Time to Recovery (MTTR) by ~40% for critical data incidents',
      'Automated daily campaign health monitoring without human intervention'
    ],
    systemType: 'orchestration'
  },
  {
    id: 'staging-storage',
    phase: '03. Staging & Secure Lakehouse',
    title: 'GCS Buckets & Cloud SQL Staging',
    tech: ['Google Cloud Storage (GCS)', 'Cloud SQL', 'AWS S3', 'Data Encryption / IAM'],
    description: 'Secure intermediate staging lakehouse partitioned by date and tenant. Built high-speed transient tables in Cloud SQL to serve low-latency banker API queries.',
    outcomes: [
      'Staging bridge facilitating real-time loan approval processing',
      'Strict GDPR compliance & automated encryption for sensitive customer PII'
    ],
    systemType: 'storage'
  },
  {
    id: 'warehouse-modeling',
    phase: '04. Analytical Core & Modeling',
    title: 'GCP BigQuery & Data Vault 2.0',
    tech: ['GCP BigQuery', 'dbt (Data Build Tool)', 'Data Vault 2.0', 'Star Schema'],
    description: 'Modernized core warehouse to GCP BigQuery using dbt. Implemented Data Vault 2.0 (Hubs, Links, Satellites) and Star Schemas for agile schema evolution and historical auditability.',
    outcomes: [
      'High-performance partition-pruned BigQuery models reducing query compute costs',
      'Full lineage tracking and automated regression testing via dbt'
    ],
    systemType: 'warehouse'
  },
  {
    id: 'consumption-layer',
    phase: '05. Real-Time Consumption & BI',
    title: 'Real-Time APIs & Predictive BI',
    tech: ['Salesforce CRM API', 'Qlik Sense', 'Tableau', 'Adobe Analytics'],
    description: 'Direct bi-directional data flow exposing clean business metrics to executive dashboards and real-time APIs for loan officers and marketing campaign leads.',
    outcomes: [
      'Predictive Lead-to-Application conversion model optimizing credit loan conversion',
      'Empowered executive marketing division with high-fidelity campaign analytics'
    ],
    systemType: 'consumption'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    category: 'Code & Tools',
    handle: 'github.com/ganeshbarve88',
    url: 'https://github.com/ganeshbarve88',
    tagline: 'Open Source Code & Data Engineering Repos',
    description: 'ETL pipelines, cloud infrastructure templates, automation scripts, and technical project code.',
    icon: 'github',
    badge: 'View GitHub Repos',
  },
  {
    id: 'convertify',
    name: 'Convertify (Document Converter)',
    category: 'Code & Tools',
    handle: 'barve-studio-convertify.workers.dev',
    url: 'https://barve-studio-convertify.ganeshbarve88.workers.dev/',
    tagline: '100% Free & Offline Document Conversion App',
    description: 'Utility app developed by Ganesh Barve that converts documents entirely in-browser with zero server uploads, 100% private and free.',
    icon: 'convertify',
    badge: 'Launch Convertify App',
    isApp: true,
  },
  {
    id: 'barvestudio',
    name: 'Barve Studio (YouTube)',
    category: 'YouTube & Podcasts',
    handle: '@barvestudio',
    url: 'https://www.youtube.com/@barvestudio',
    tagline: 'Technology, Software & Life Hacks Channel',
    description: 'Curated video tutorials, cloud technology walkthroughs, productivity hacks, and modern tech workflows.',
    icon: 'youtube',
    badge: 'Watch on YouTube',
  },
  {
    id: 'ganeshbstories',
    name: 'Ganesh B Stories (Podcast)',
    category: 'YouTube & Podcasts',
    handle: '@GaneshbStories',
    url: 'https://www.youtube.com/@GaneshbStories',
    tagline: 'Storytelling & Audio Podcast Channel',
    description: 'Narrative storytelling, audio dramas, reflections, and engaging episodic podcasts by Ganesh Barve.',
    icon: 'youtube',
    badge: 'Listen to Stories',
  },
  {
    id: 'blog',
    name: 'ಮುಸ್ಸಂಜೆಯಲ್ಲಿ, ಮುಂಜಾವಿನಲ್ಲಿ',
    nativeTitle: 'ಮುಸ್ಸಂಜೆಯಲ್ಲಿ, ಮುಂಜಾವಿನಲ್ಲಿ',
    category: 'Writing & Literature',
    handle: 'barveganesh.blogspot.com',
    url: 'https://barveganesh.blogspot.com/',
    tagline: 'Kannada Literature, Essays & Poetry by Ganesh Barve',
    description: 'Original Kannada literary works, poems, cultural reflections, and personal essays composed by Ganesh Barve.',
    icon: 'blog',
    badge: 'ಓದಿ (Read Literature)',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    category: 'Professional & Social',
    handle: 'ganesh-barve-129047109',
    url: 'https://www.linkedin.com/in/ganesh-barve-129047109/',
    tagline: 'Professional Network & Career Journey',
    description: 'Connect for enterprise cloud data engineering leadership, GCP BigQuery architecture insights, and career updates.',
    icon: 'linkedin',
    badge: 'Connect on LinkedIn',
  },
  {
    id: 'x',
    name: 'X (formerly Twitter)',
    category: 'Professional & Social',
    handle: '@barve_ganesh8',
    url: 'https://x.com/barve_ganesh8',
    tagline: 'Tech News & Real-time Thoughts',
    description: 'Quick thoughts on cloud migrations, Data Vault design, industry trends, and the data ecosystem.',
    icon: 'x',
    badge: 'Follow on X',
  },
  {
    id: 'threads',
    name: 'Threads',
    category: 'Professional & Social',
    handle: '@barve.ganesh',
    url: 'https://www.threads.net/@barve.ganesh',
    tagline: 'Conversations & Daily Ideas',
    description: 'Engaging conversations on technology, personal milestones, and modern software craft.',
    icon: 'threads',
    badge: 'Follow on Threads',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'Professional & Social',
    handle: '@barve.ganesh',
    url: 'https://www.instagram.com/barve.ganesh/',
    tagline: 'Visual Stories & Life Beyond Code',
    description: 'Photography, travel memories, Bangalore life, and moments outside enterprise data pipelines.',
    icon: 'instagram',
    badge: 'View Photos',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'Professional & Social',
    handle: 'ganesh.barve',
    url: 'https://www.facebook.com/ganesh.barve',
    tagline: 'Friends, Family & Community',
    description: 'Personal network, community updates, and long-standing social connections.',
    icon: 'facebook',
    badge: 'Connect on Facebook',
  },
];

