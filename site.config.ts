export const siteConfig = {
  name: 'Mariia Eremina',
  title: 'ML & Infrastructure Engineer',
  siteUrl: 'https://mariia.ch',
  locale: 'en',
  bio: 'ML & Infrastructure Engineer with 4+ years of experience designing production ML systems, observability platforms, and scalable backend infrastructure. Lead cross-functional teams, drive architecture decisions at scale, and own end-to-end delivery, from research prototypes to fully automated production deployments.',
  tagline: 'Currently: Leading AI & infrastructure at MDPI, Basel',
  metaDescription:
    'Mariia Eremina — ML & infrastructure engineer. Designing production ML systems, observability pipelines, and scalable backend platforms. Basel, Switzerland.',
  avatarPath: '/avatar.jpg',
  cvPath: '/cv.pdf',

  counters: [
    { value: 4, label: 'Years Exp.' },
    { value: 6, label: 'Products' },
    { value: 10, label: 'Repos' },
    { value: 3, label: 'Countries' },
  ],

  email: {
    user: 'mariia.erem',
    domain: 'gmail.com',
    display: 'mariia.erem [at] gmail [dot] com',
  },

  socialLinks: [
    { label: 'Github', link: 'https://github.com/marerem' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mariia-eremina' },
  ],

  navItems: [
    { label: 'Bio', href: '#bio', id: 'bio' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Connect', href: '#connect', id: 'connect' },
  ] as const,

  workExperience: [
    {
      company: 'MDPI',
      title: 'ML & Infrastructure Engineer',
      start: '2025',
      end: 'Present',
      link: 'https://mdpi.com',
      id: 'work1',
    },
    {
      company: 'MIT',
      title: 'Software Engineer',
      start: '2024',
      end: '2025',
      link: 'https://mit.edu',
      id: 'work2',
    },
    {
      company: 'CarGo Relay',
      title: 'Co-Founder & Lead Engineer',
      start: '2024',
      end: '2024',
      link: '#',
      id: 'work3',
    },
    {
      company: 'MIT & Harvard Medical School',
      title: 'CV Research Engineer',
      start: '2024',
      end: '2024',
      link: 'https://mit.edu',
      id: 'work4',
    },
    {
      company: 'Maxon Group',
      title: 'Software & ML Engineer',
      start: '2023',
      end: '2024',
      link: 'https://maxongroup.com',
      id: 'work5',
    },
    {
      company: 'AGORA Cancer Research',
      title: 'Machine Learning Engineer',
      start: '2022',
      end: '2023',
      link: '#',
      id: 'work6',
    },
  ],

  projects: [
    {
      name: 'Observability Platform',
      description:
        'Next-gen monitoring stack with OpenTelemetry, ClickHouse, and SigNoz replacing Grafana-Prometheus.',
      link: '#',
      video: '',
      tags: ['OpenTelemetry', 'ClickHouse', 'SigNoz'],
      id: 'proj1',
    },
    {
      name: 'Infrastructure Migration',
      description:
        'End-to-end migration: Airflow → self-hosted Prefect, Poetry → UV, Loguru → Logly/React, ETL with Polars.',
      link: '#',
      video: '',
      tags: ['Prefect', 'Polars', 'Docker'],
      id: 'proj2',
    },
    {
      name: 'API Server Layer',
      description:
        'Unified backend for all internal and external services, built from scratch with FastAPI, PostgreSQL, S3.',
      link: '#',
      video: '',
      tags: ['FastAPI', 'PostgreSQL', 'S3'],
      id: 'proj3',
    },
    {
      name: 'Clinical AI Platform',
      description:
        'Full-stack platform integrating Harvard Medical School AI research into hospital workflows.',
      link: '#',
      video: '',
      tags: ['Flask', 'React', 'Python'],
      id: 'proj4',
    },
    {
      name: 'Anomaly Detection Pipeline',
      description:
        'Industrial ML pipeline (Autoencoder + Siamese) for motor quality inspection at Maxon Group.',
      link: '#',
      video: '',
      tags: ['PyTorch', 'FastAPI', 'Docker'],
      id: 'proj5',
    },
    {
      name: 'Cancer Organoid Tracker',
      description:
        'Deep-learning framework (YOLOv5, DeepSORT) for cancer organoid detection, reducing annotation time by 50%.',
      link: '#',
      video: '',
      tags: ['YOLOv5', 'OpenCV', 'Python'],
      id: 'proj6',
    },
  ],

  education: [
    {
      degree: 'Master Thesis in Computer Science',
      school: 'MIT — Landmark-Based Co-Registration of Coronary CT and Intravascular Images',
      start: '2024',
      end: '2024',
    },
    {
      degree: 'Master of Computer Science & Life Science',
      school: 'EPFL — Swiss Federal Institute of Technology',
      start: '2021',
      end: '2024',
    },
    {
      degree: 'Bachelor of Biotechnology',
      school: 'MSU — Lomonosov Moscow State University',
      start: '2017',
      end: '2021',
    },
  ],

  blogPosts: [
    {
      title: 'Building Observable ML Pipelines',
      description:
        'How we replaced Grafana-Prometheus with OpenTelemetry + ClickHouse for ML workloads.',
      link: '#',
      uid: 'blog-1',
    },
    {
      title: 'From Airflow to Prefect: A Migration Story',
      description: 'Lessons learned migrating orchestration at scale.',
      link: '#',
      uid: 'blog-2',
    },
    {
      title: 'Infrastructure as Code for ML Teams',
      description:
        'Practical patterns for CI/CD, containerization, and reproducible deployments.',
      link: '#',
      uid: 'blog-3',
    },
  ],

  terminal: {
    greeting:
      "Hey! I'm {name}'s portfolio assistant. Type a keyword like `experience`, `projects`, `skills`, `education`, or `contact` to learn more.",
    prompt: '{handle} ~ %',
    handle: 'mariia',
    knowledge: [
      {
        keywords: ['hello', 'hi', 'hey', 'sup', 'yo'],
        response:
          "Hey there! I'm a quick-reference bot for {name}'s portfolio. Try keywords like `experience`, `projects`, `skills`, `education`, or `contact`.",
      },
      {
        keywords: ['experience', 'work', 'career', 'job', 'jobs', 'history'],
        response:
          'Experience:\n\n→ MDPI — ML & Infrastructure Engineer (2025–)\n→ MIT — Software Engineer (2024–2025)\n→ CarGo Relay — Co-Founder & Lead Engineer (2024)\n→ MIT & Harvard — CV Research Engineer (2024)\n→ Maxon Group — Software & ML Engineer (2023–2024)\n→ AGORA Cancer Research — ML Engineer (2022–2023)',
      },
      {
        keywords: ['project', 'projects', 'portfolio', 'work', 'built', 'ship'],
        response:
          'Key projects:\n\n→ Observability Platform (OpenTelemetry, ClickHouse, SigNoz)\n→ Infrastructure Migration (Airflow→Prefect, Poetry→UV, Loguru→Logly/React)\n→ API Server Layer (FastAPI, PostgreSQL, S3)\n→ Clinical AI Platform for Harvard Medical School\n→ Anomaly Detection Pipeline at Maxon Group\n→ Cancer Organoid Tracker (YOLOv5, DeepSORT)',
      },
      {
        keywords: [
          'skill', 'skills', 'stack', 'tech', 'technology', 'tools', 'language',
          'infra', 'infrastructure', 'devops', 'ansible', 'redis', 'ci', 'cd',
          'github actions', 'gitlab ci',
        ],
        response:
          'Tech stack:\n\n→ Infra & DevOps: Docker, AWS (S3), GCP, Azure, Linux, CI/CD (GitHub Actions, GitLab CI), Ansible, OpenTelemetry, ClickHouse, SigNoz, Prefect, Redis, Git\n→ ML & Data: PyTorch, TensorFlow, Keras, OpenCV, scikit-learn, Hydra, Polars, pandas, NumPy\n→ Languages: Python, TypeScript, JavaScript, HTML, SQL, R, MATLAB, LaTeX\n→ Web & Backend: React, React Native, Flask, FastAPI, PostgreSQL, MongoDB, Firebase',
      },
      {
        keywords: ['education', 'school', 'university', 'degree', 'study', 'epfl', 'mit', 'msu'],
        response:
          'Education:\n\n→ Master Thesis @ MIT — Landmark-Based Co-Registration of Coronary CT Images (2024)\n→ MSc Computer Science & Life Science @ EPFL (2021–2024)\n→ BSc Biotechnology @ Lomonosov Moscow State University (2017–2021)',
      },
      {
        keywords: ['contact', 'email', 'reach', 'connect', 'hire', 'linkedin', 'github'],
        response:
          'Get in touch:\n\n→ Email: {emailDisplay}\n→ GitHub: {github}\n→ LinkedIn: {linkedin}',
      },
      {
        keywords: ['year', 'years', 'how long', 'senior'],
        response:
          '{name} has 4+ years of professional software & ML engineering experience (since Dec 2022), with research and startup work before that.',
      },
      {
        keywords: ['lead', 'leadership', 'manage', 'team'],
        response:
          'Leadership:\n\n→ MDPI: Spearheaded AI strategy, managed teams across\n  Switzerland and China, defined architectural standards\n→ Maxon: Software & ML Engineer — managed 5 (2 SWE, 1 MLE, 2 external AI experts)\n→ MIT: Onboarded and mentored new engineers\n→ CarGo Relay: Co-founded EPFL startup, led engineering',
      },
      {
        keywords: ['hackathon', 'community', 'volunteer', 'organise', 'organize', 'sponsor'],
        response:
          'Community:\n\n→ Organises annual hackathons at EPFL sponsored by AWS, UBS, Logitech, SBB, Swisscom, Swissquote, and Huawei (ongoing since 2022).',
      },
      {
        keywords: ['api', 'server', 'backend', 'fastapi', 'postgres', 's3'],
        response:
          'API Server Layer:\n\n→ Designed and built the entire API server layer from scratch (FastAPI, PostgreSQL, S3)\n→ Provides a unified backend for all internal and external services at MDPI.',
      },
      {
        keywords: ['migration', 'airflow', 'prefect', 'poetry', 'uv', 'loguru', 'logly'],
        response:
          'Infrastructure Migration at MDPI:\n\n→ Orchestration: Apache Airflow → self-hosted Prefect\n→ Dependencies: Poetry → UV\n→ Logging: Loguru → structured Logly/React-based observability layer\n→ ETL optimised with Polars for fully automated zero-downtime deployments.',
      },
    ],
  },
} as const
