export const siteConfig = {
  name: 'Mariia Eremina',
  title: 'ML Engineer',
  siteUrl: 'https://mariia.ch',
  locale: 'en',
  bio: 'ML & Infrastructure Engineer with 4+ years of experience designing production ML systems, observability platforms, and scalable backend infrastructure. Lead cross-functional teams, drive architecture decisions at scale, and own end-to-end delivery, from research prototypes to fully automated production deployments.',
  tagline: 'Currently: ML & Infrastructure Engineer at MDPI, Basel',
  metaDescription:
    'Mariia Eremina — full-stack ML engineer in Basel, Switzerland: from model to interface. Production ML systems, infrastructure, and React front ends.',
  avatarPath: '/avatar.jpg',
  cvPath: '/cv.pdf',

  counters: [
    { value: 4, label: 'Years Exp.' },
    { value: 7, label: 'Companies' },
    { value: 36, label: 'Repos' },
    { value: 6, label: 'Products' },
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
    { label: 'Work', href: '/#work', id: 'work' },
    { label: 'Experience', href: '/#experience', id: 'experience' },
    { label: 'Approach', href: '/#approach', id: 'approach' },
    { label: 'Education', href: '/#education', id: 'education' },
    { label: 'Blog', href: '/blog', id: 'blog' },
    { label: 'Connect', href: '/#connect', id: 'connect' },
  ] as const,

  workExperience: [
    {
      company: '',
      title: 'Independent AI Engineer',
      start: 'May 2026',
      end: 'Present',
      link: '/case/llm-serving',
      id: 'work0',
      // [label](url) inside a highlight renders as a link
      highlights: [
        'Deployed [gabyluong.com](https://www.gabyluong.com) to production for my gorgeous friend Gaby Luong, a super talented Senior UI/UX Designer. Happy to be a small part of her journey',
        'Self-hosted Jev-style decision readout (Noul, Score, Choice) served with vLLM and PagedAttention',
        '[longmem](https://github.com/marerem/longmem): open-source cross-project memory for AI assistants, so important decisions and solutions aren\'t lost (hybrid semantic + keyword search, [MCP server on Glama](https://glama.ai/mcp/servers/marerem/longmem/tree), [published on PyPI](https://pypi.org/project/longmem/))',
      ],
      stack: ['vLLM', 'Kubernetes', 'Docker', 'Python', 'MCP', 'SQLite', 'Ollama'],
    },
    {
      company: 'MDPI',
      title: 'ML & Infrastructure Engineer',
      start: 'May 2025',
      end: 'Present',
      link: 'https://mdpi.com',
      id: 'work1',
      highlights: [
        'Led the observability platform replacing Grafana–Prometheus (OpenTelemetry, ClickHouse, SigNoz), with alerting to Teams and Slack, cutting incident-response time by 30%',
        'Architected and built the unified API layer (FastAPI, PostgreSQL), with versioned Parquet backups on S3',
        'Migrated ML and business-automation pipelines from Airflow to self-hosted Prefect with zero downtime and failure alerts',
        'Moved the Python toolchain to Rust-based tools (Poetry → uv, pandas → Polars, Loguru → Logly) for faster dependency resolution, lower-memory ETL and structured logs',
        'Managed teams across Switzerland and China and set architectural standards, including dbt for data transformations and lineage',
      ],
      stack: ['OpenTelemetry', 'ClickHouse', 'SigNoz', 'FastAPI', 'PostgreSQL', 'S3', 'Prefect', 'dbt', 'uv', 'Polars', 'Logly'],
    },
    {
      company: 'MIT',
      title: 'Software Engineer',
      start: 'Sep 2024',
      end: 'May 2025',
      link: 'https://mit.edu',
      id: 'work2',
      highlights: [
        'Took 4 of the lab\'s research prototypes to production as one full-stack platform (React, Node.js), used by researchers and clinicians at hospitals across the Boston area',
        'Served the PyTorch models through containerized APIs',
        'Designed the interface from clinicians\' user stories',
        'Onboarded and mentored 2 new engineers',
      ],
      stack: ['PyTorch', 'React', 'Node.js', 'Docker', 'Linux'],
    },
    {
      company: 'CarGo Relay',
      title: 'Co-Founder',
      start: '2024',
      end: '2024',
      link: '#',
      id: 'work3',
      highlights: [
        'A C2C parcel-delivery startup (1 of 3 co-founders, backed by EPFL Startup Support): the app uses everyday human flow, matching parcels to the routes people travel most from Monday to Friday',
        'Grew to ~5,000 registered users across universities and schools in Lausanne and ~CHF 50,000 in revenue by the end of 2024 from a 10% commission on deliveries',
        'Led system design and built the product end to end',
        'Designed mode-aware route matching on Google Maps: travellers share their location, usual destination and mode, and parcels are assigned to fit, close to the route for metro riders, wider detours for bikes, and large parcels to cars',
      ],
      stack: ['React Native', 'FastAPI', 'MariaDB', 'Google Maps API'],
    },
    {
      company: 'MIT & Harvard Medical School',
      title: 'Research Engineer',
      start: 'Mar 2024',
      end: 'Sep 2024',
      link: 'https://mit.edu',
      id: 'work4',
      highlights: [
        'At the [Edelman Lab](https://edelmanlab.mit.edu/research/bioinformatics/), invented a landmark-based co-registration algorithm that aligns video frames by spline interpolation between landmarks, replacing a slow, GPU-bound learned model that overfit on scarce clinical data',
        'Made co-registration 40× faster, on CPU, running inside the clinical workflow on the imaging machine itself',
        'Built a frame-cleaning pipeline: CLIPSeg and SAM segment the medical equipment in each frame, and Stable Diffusion inpainting removes it',
        'Made the pipeline cross-platform (macOS, Windows, Linux) to run on medical hardware',
      ],
      stack: ['Python', 'PyTorch', 'OpenCV'],
    },
    {
      company: 'Maxon Group',
      title: 'Software & ML Engineer',
      start: 'Jun 2023',
      end: 'Mar 2024',
      link: 'https://maxongroup.com',
      id: 'work5',
      highlights: [
        'Partnered with 2 AI experts from CSEM and 3 engineers to detect defective precision motors from their current, voltage and temperature signals, where defects were rare and masked by factory noise',
        'Benchmarked a classical pipeline (signal feature extraction, dimensionality reduction, gradient boosting) against deep models (autoencoder, Siamese network), optimizing for recall since a missed defect costs more than a false alarm',
        'Shipped the winning autoencoder (92% recall) as an inspection application integrated into the factory production line, with 90%+ test coverage in CI',
      ],
      stack: ['Python', 'PyTorch', 'scikit-learn', 'FastAPI', 'JWT auth', 'PostgreSQL', 'Docker'],
    },
    {
      company: 'AGORA Cancer Research',
      title: 'Machine Learning Engineer',
      start: 'Dec 2022',
      end: 'May 2023',
      link: '#',
      id: 'work6',
      highlights: [
        'Built a detection-and-tracking model (YOLOv5, DeepSORT) that follows each cancer organoid as it grows, supporting clinical research at CHUV',
        'Classified organoids into 5 readiness stages so researchers know when they\'re ready for drug testing, oversampling rare stages and weighting the loss by class frequency, since debris and non-viable organoids dominated the data',
        'Replaced fully manual, frame-by-frame annotation with a human-in-the-loop pipeline that automated 89% of predictions, sending only uncertain ones for human approval',
        'Architected and maintained the lab\'s 150 TB imaging data pipeline',
      ],
      stack: ['Python', 'PyTorch', 'YOLOv5', 'DeepSORT', 'OpenCV'],
    },
  ],

  projects: [
    {
      name: 'Self-hosted Jev decision readout.',
      description:
        'Noul, Score and Choice readouts from one forward pass, served with vLLM and PagedAttention on Kubernetes.',
      link: '/case/llm-serving',
      video: '',
      tags: ['vLLM', 'Kubernetes', 'LLM'],
      id: 'proj7',
    },
    {
      name: 'longmem: memory for AI assistants.',
      description:
        'Open-source cross-project memory so important decisions aren\'t lost. Hybrid semantic + keyword search, MCP server, published on PyPI.',
      link: 'https://github.com/marerem/longmem',
      video: '',
      tags: ['Python', 'MCP', 'SQLite', 'Open source'],
      id: 'proj8',
    },
    {
      name: 'Observability platform for ML workloads.',
      description:
        'Replaced Grafana–Prometheus with OpenTelemetry, ClickHouse and SigNoz, with alerting to Teams and Slack. Incident response 30% faster.',
      link: '/case/observability-platform',
      video: '',
      tags: ['OpenTelemetry', 'ClickHouse', 'SigNoz', 'Observability'],
      id: 'proj1',
    },
    {
      name: 'Modernized a production ML platform.',
      description:
        'End-to-end migration: Airflow → Prefect, plus a Rust-based Python toolchain (Poetry → uv, pandas → Polars, Loguru → Logly). Zero downtime.',
      link: '/case/infrastructure-migration',
      video: '',
      tags: ['Prefect', 'uv', 'Polars', 'Logly', 'Infrastructure'],
      id: 'proj2',
    },
    {
      name: 'Unified API layer.',
      description:
        'One backend for MDPI\'s internal and external services (FastAPI, PostgreSQL), with versioned Parquet backups on S3.',
      link: '/case/api-server',
      video: '',
      tags: ['FastAPI', 'PostgreSQL', 'S3', 'Backend'],
      id: 'proj3',
    },
    {
      name: 'From research to hospitals.',
      description:
        'A co-registration algorithm 40× faster on CPU, then 4 research prototypes in production at hospitals across the Boston area.',
      link: '/case/clinical-ai',
      video: '',
      tags: ['React', 'Node.js', 'PyTorch', 'Clinical ML'],
      id: 'proj4',
    },
    {
      name: 'CarGo Relay: parcels on everyday routes.',
      description:
        'C2C parcel delivery matched to the routes people already travel. ~5,000 registered users and ~CHF 50,000 in revenue in 2024.',
      link: '/case/cargo-relay',
      video: '',
      tags: ['React Native', 'FastAPI', 'MariaDB', 'Startup'],
      id: 'proj9',
    },
    {
      name: 'Motor anomaly detection.',
      description:
        'Detecting rare defects in precision motors from noisy current, voltage and temperature signals. 92% recall, on the production line.',
      link: '/case/anomaly-detection',
      video: '',
      tags: ['PyTorch', 'scikit-learn', 'FastAPI', 'Anomaly detection'],
      id: 'proj5',
    },
    {
      name: 'Cancer organoid detection & tracking.',
      description:
        'Tracking organoids to decide when they\'re ready for drug testing, with a human-in-the-loop pipeline that automated 89% of annotation.',
      link: '/case/cancer-organoid-tracker',
      video: '',
      tags: ['YOLOv5', 'DeepSORT', 'PyTorch', 'Computer vision'],
      id: 'proj6',
    },
  ],

  education: [
    {
      degree: "Master's Thesis in Computer Science",
      school: 'MIT',
      detail: 'Edelman Lab, bioinformatics',
      detailLink: 'https://edelmanlab.mit.edu/research/bioinformatics/',
      start: '2023',
      end: '2024',
    },
    {
      degree: 'MSc in Computer Science & Life Science',
      school: 'EPFL',
      detail: 'Minor in Communication Systems',
      start: '2021',
      end: '2024',
    },
    {
      degree: 'BSc in Biotechnology',
      school: 'Moscow State University',
      start: '2017',
      end: '2021',
    },
  ],

  blogPosts: [
    {
      title: 'Self-Hosting LLMs from TypeScript',
      description:
        'Deploy your own model with vLLM, connect it from a TypeScript app, and skip the API bills.',
      link: '#',
      uid: 'blog-0',
    },
    {
      title: 'From CNNs to LLMs: How Vision Transformers Changed Everything',
      description:
        'The architectural journey from convolutions through ViT to large language models — and what it means for production ML infrastructure.',
      link: '/blog/from-cnn-to-llm',
      uid: 'blog-1',
    },
    {
      title: 'Building Observable ML Pipelines',
      description:
        'How we replaced Grafana-Prometheus with OpenTelemetry + ClickHouse for ML workloads.',
      link: '/case/observability-platform',
      uid: 'blog-2',
    },
    {
      title: 'From Airflow to Prefect: A Migration Story',
      description: 'Lessons learned migrating orchestration at scale.',
      link: '/case/infrastructure-migration',
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
          'Experience:\n\n→ Independent AI Engineer (May 2026–) · Self-hosted Jev decision readout on vLLM, longmem, gabyluong.com\n→ MDPI — ML & Infrastructure Engineer (May 2025–)\n→ MIT — Software Engineer (Sep 2024–May 2025)\n→ CarGo Relay — Co-Founder (2024)\n→ MIT & Harvard Medical School — Research Engineer (Mar–Sep 2024)\n→ Maxon Group — Software & ML Engineer (Jun 2023–Mar 2024)\n→ AGORA Cancer Research — ML Engineer (Dec 2022–May 2023)',
      },
      {
        keywords: ['project', 'projects', 'portfolio', 'work', 'built', 'ship'],
        response:
          'Key projects:\n\n→ Observability Platform (OpenTelemetry, ClickHouse, SigNoz) — 30% faster incident response\n→ Self-hosted Jev decision readout (vLLM, Kubernetes) — Noul, Score, Choice\n→ Infrastructure Migration (Airflow→Prefect, Poetry→uv, pandas→Polars, Loguru→Logly) — zero downtime\n→ API Server Layer (FastAPI, PostgreSQL, S3)\n→ Clinical ML Platform (MIT) — 4 research prototypes in production at Boston-area hospitals\n→ Coronary Co-Registration (MIT & Harvard Medical School) — 40× faster, on CPU\n→ Motor Anomaly Detection (Maxon) — 92% recall, on the production line\n→ Cancer Organoid Tracker (YOLOv5, DeepSORT) — 89% of annotation automated',
      },
      {
        keywords: [
          'skill', 'skills', 'stack', 'tech', 'technology', 'tools', 'language',
          'infra', 'infrastructure', 'devops', 'ansible', 'redis', 'ci', 'cd',
          'github actions', 'gitlab ci', 'kubernetes', 'k8s', 'terraform', 'vllm',
          'gpu', 'llm',
        ],
        response:
          'Tech stack:\n\n→ ML Platform: Kubernetes, Terraform, vLLM, Docker, CI/CD (GitHub Actions, GitLab CI)\n→ Observability: OpenTelemetry, ClickHouse, SigNoz, Prometheus, Grafana\n→ Orchestration: Prefect (migrated from Airflow)\n→ Python tooling (Rust-based): uv, Polars, Logly\n→ ML & Data: PyTorch, TensorFlow, OpenCV, scikit-learn, Polars, pandas, NumPy\n→ Frontend: React, React Native\n→ Backend: FastAPI, Flask, Node.js, PostgreSQL, MariaDB, S3, Redis, MongoDB\n→ Cloud: AWS (S3), GCP, Azure, Linux, Ansible\n→ Languages: Python, TypeScript, JavaScript, SQL, LaTeX',
      },
      {
        keywords: ['education', 'school', 'university', 'degree', 'study', 'epfl', 'mit', 'msu'],
        response:
          'Education:\n\n→ Master\'s Thesis in Computer Science @ MIT, Edelman Lab (2023–2024) — Landmark-Based Co-Registration of Coronary CT and Intravascular Images\n→ MSc Computer Science & Life Science @ EPFL, minor in Communication Systems (2021–2024)\n→ BSc Biotechnology @ Moscow State University (2017–2021)',
      },
      {
        keywords: ['contact', 'email', 'reach', 'connect', 'hire', 'linkedin', 'github'],
        response:
          'Get in touch:\n\n→ Email: {emailDisplay}\n→ GitHub: {github}\n→ LinkedIn: {linkedin}',
      },
      {
        keywords: ['year', 'years', 'how long', 'senior'],
        response:
          '{name} has nearly 4 years of professional software & ML engineering experience (since Dec 2022), alongside research and startup work.',
      },
      {
        keywords: ['lead', 'leadership', 'manage', 'team'],
        response:
          'Leadership:\n\n→ MDPI: Managed teams across Switzerland and China, set\n  architectural standards (including dbt for lineage)\n→ MIT: Onboarded and mentored 2 new engineers\n→ Maxon: Partnered with 2 AI experts from CSEM and 3 engineers\n→ CarGo Relay: 1 of 3 co-founders, led system design',
      },
      {
        keywords: ['languages', 'spoken', 'speak', 'english', 'german', 'russian', 'deutsch'],
        response:
          'Languages:\n\n→ English (C1)\n→ Russian (native)\n→ German (A1, learning)',
      },
      {
        keywords: ['hackathon', 'community', 'volunteer', 'organise', 'organize', 'sponsor'],
        response:
          'Community:\n\n→ Organises annual hackathons at EPFL sponsored by AWS, UBS, Logitech, SBB, Swisscom, Swissquote, and Huawei (ongoing since 2022).',
      },
      {
        keywords: ['api', 'server', 'backend', 'fastapi', 'postgres', 's3'],
        response:
          'API Server Layer at MDPI:\n\n→ Architected and built the unified API layer (FastAPI, PostgreSQL)\n→ Versioned Parquet backups on S3\n→ One backend for MDPI\'s internal and external services.',
      },
      {
        keywords: ['migration', 'airflow', 'prefect', 'poetry', 'uv', 'loguru', 'logly', 'polars', 'pandas', 'rust'],
        response:
          'Infrastructure Migration at MDPI:\n\n→ Orchestration: Apache Airflow → self-hosted Prefect\n→ Dependencies: Poetry → uv\n→ Data processing: pandas → Polars\n→ Logging: Loguru → Logly (structured logs)\n→ uv, Polars and Logly are all Rust-based: faster, lower-memory Python tooling\n→ Rolled out with zero downtime.',
      },
    ],
  },
} as const
