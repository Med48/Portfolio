import { Project, Experience, Education, Skill, Certificate } from '../types';

export const personalInfo = {
  name: 'Mohammed Rhouati',
  title: {
    fr: 'Ingénieur en Intelligence Artificielle',
    en: 'Artificial Intelligence Engineer'
  },
  bio: {
    fr: 'Étudiant en 5ème année d\'ingénierie en Intelligence Artificielle, motivé et passionné, je recherche un stage de fin d\'études pour mettre en pratique mes compétences, approfondir mon expérience et contribuer activement à des projets concrets et innovants.',
    en: '5th-year Artificial Intelligence Engineering student, motivated and passionate, seeking an end-of-studies internship to put my skills into practice, deepen my experience and actively contribute to concrete and innovative projects.'
  },
  contact: {
    email: 'mohamedrhouati0@gmail.com',
    phone: '+212605787827',
    location: 'Oujda, Maroc',
    linkedin: 'https://linkedin.com/in/mohammed-rhouati/',
    github: 'https://github.com/Med48'
  }
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Stagiaire',
    company: 'CHU Mohammed VI Oujda',
    logo: '/images/CHU-Mohammed-VI-Oujda-Logo.png',
    location: 'Oujda, Maroc',
    startDate: '2025-07',
    endDate: '2025-09',
    description: 'Développement d\'une solution intelligente de gestion des patients et rendez-vous',
    responsibilities: [
      'Développement d\'une solution intelligente de gestion des patients et rendez-vous',
      'Intégration d\'IA pour résumer les dossiers médicaux',
      'Assistance à l\'analyse clinique',
      'Optimisation de la planification des rendez-vous'
    ],
    technologies: ['Python', 'IA', 'Machine Learning', 'FastAPI', 'MongoDB'],
    achievements: [
      'Amélioration de l\'efficacité de gestion des patients',
      'Réduction du temps d\'analyse des dossiers médicaux'
    ]
  },
  {
    id: '2',
    title: 'Stagiaire',
    company: 'Al Omrane Région de l\'Oriental',
    logo: '/images/logo-omrane.png',
    location: 'Oujda, Maroc',
    startDate: '2023-04',
    endDate: '2023-06',
    description: 'Développement d\'un système BI pour l\'analyse des données',
    responsibilities: [
      'Collecte, nettoyage et traitement de données',
      'Identification de tendances et création de modèles prédictifs',
      'Développement d\'un tableau de bord interactif',
      'Support à la prise de décision en temps réel'
    ],
    technologies: ['Python', 'Power BI', 'SQL', 'Machine Learning', 'Talend'],
    achievements: [
      'Création d\'un système BI complet',
      'Amélioration de la prise de décision basée sur les données'
    ]
  },
  {
    id: '3',
    title: 'Stagiaire',
    company: 'AUTO NEJMA (Mercedes-Benz)',
    logo: '/images/Mercedes-Benz-logo.png',
    location: 'Oujda, Maroc',
    startDate: '2022-04',
    endDate: '2022-06',
    description: 'Développement d\'un site web pour la gestion automobile',
    responsibilities: [
      'Création d\'un site web pour la gestion des rendez-vous clients',
      'Développement de la présentation des modèles de voitures',
      'Interface utilisateur moderne et responsive',
      'Intégration de fonctionnalités de réservation'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    achievements: [
      'Amélioration de l\'expérience client',
      'Automatisation de la gestion des rendez-vous'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Diplôme d\'Ingénieur en Intelligence Artificielle',
    school: 'École Nationale de L\'Intelligence Artificielle & du Digital',
    location: 'Berkane, Maroc',
    startDate: '2023',
    endDate: '2026',
    description: 'Formation spécialisée en intelligence artificielle et technologies du digital'
  },
  {
    id: '2',
    degree: 'License professionnelle en Informatique Décisionnelle',
    school: 'École Supérieure de Technologie',
    location: 'Oujda, Maroc',
    startDate: '2022',
    endDate: '2023',
    description: 'Formation en systèmes d\'information et aide à la décision'
  },
  {
    id: '3',
    degree: 'DUT Développement d\'applications informatiques',
    school: 'École Supérieure de Technologie',
    location: 'Oujda, Maroc',
    startDate: '2020',
    endDate: '2022',
    description: 'Formation en développement d\'applications et programmation'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'advanced', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML/CSS', level: 'advanced', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'JavaScript', level: 'advanced', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },

  // Backend
  { name: 'Python', level: 'expert', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', level: 'advanced', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C#', level: 'intermediate', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'PHP', level: 'intermediate', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'FastAPI', level: 'advanced', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },

  // Database
  { name: 'PostgreSQL', level: 'advanced', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', level: 'advanced', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', level: 'advanced', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Oracle', level: 'intermediate', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },

  // AI & Data Science
  { name: 'Machine Learning', level: 'advanced', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Deep Learning', level: 'intermediate', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'NLP', level: 'advanced', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'LLM', level: 'intermediate', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Pandas', level: 'advanced', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', level: 'advanced', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },

  // DevOps & Tools
  { name: 'Git', level: 'advanced', category: 'devops', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', level: 'advanced', category: 'devops', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker', level: 'intermediate', category: 'devops', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'VS Code', level: 'expert', category: 'devops', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Photoshop', level: 'intermediate', category: 'devops', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Plateforme IoT Telemetry avec IA',
    description: 'Analyse de données IoT avec modèles d\'IA pour détection d\'anomalies et dashboard interactif',
    longDescription: 'Développement d\'une plateforme d\'analyse de données IoT basée sur un dataset CSV de 405,184 mesures de capteurs environnementaux. Création de modèles d\'IA pour la détection d\'anomalies, simulation de flux temps réel et dashboard web interactif pour visualisation des données.',
    technologies: ['Python', 'React', 'Flask', 'Scikit-learn', 'Pandas', 'Tailwind CSS', 'Recharts', 'Machine Learning'],
    image: '/images/IoTProject.png',
    images: ['/images/IotCapture1.JPG', '/images/IotCapture2.JPG'],
    githubUrl: 'https://github.com/Med48/IoT-Telemetry-avec-Ai',
    category: 'IoT',
    featured: false,
    challenges: [
      'Analyse et nettoyage d\'un dataset CSV de 405k+ échantillons',
      'Développement de modèles IA (Isolation Forest, Random Forest)',
      'Simulation de flux temps réel à partir des données historiques',
      'Création d\'un dashboard React avec visualisations en temps réel'
    ],
    results: [
      'Analyse complète de données → Modèles IA → API → Dashboard',
      'Détection d\'anomalies avec algorithme Isolation Forest',
      'Interface temps réel simulant un flux IoT live',
      'Visualisation de 7 types de capteurs pour 3 dispositifs'
    ]
  },
  {
    id: '2',
    title: 'OPTIAGENT - Autonomous AI Agents (RPA)',
    description: 'Solution de création d\'agents IA autonomes de type RPA pour l\'automatisation des processus',
    longDescription: 'Conception, réalisation, et déploiement d\'une solution complète de création d\'agents IA autonomes. Le système permet l\'automatisation de processus métier complexes avec une intelligence artificielle avancée.',
    technologies: ['Python', 'LangGraph', 'AI', 'RPA', 'FastAPI'],
    image: '/images/RPAAgentProject.png',
    images: ['/images/projects/ai-agents-1.jpg', '/images/projects/ai-agents-2.jpg'],
    githubUrl: 'https://github.com/IdrHamza/OPTIAGENT',
    category: 'AI',
    featured: false,
    challenges: [
      'Développement d\'agents autonomes intelligents',
      'Intégration de LangGraph pour le workflow',
      'Traitement automatisé de documents PDF'
    ],
    results: [
      'Automatisation de 80% des tâches répétitives',
      'Réduction du temps de traitement de 60%',
      'Amélioration de la précision des données'
    ]
  },
  {
    id: '3',
    title: 'Qanounek - RAG Juridique',
    description: 'Système RAG multilingue pour consultation juridique marocaine',
    longDescription: 'Développement d\'un système de Retrieval-Augmented Generation (RAG) multilingue spécialisé dans la consultation juridique marocaine. Utilise FastAPI, Qdrant et Gemini LLM pour fournir des réponses précises aux questions juridiques.',
    technologies: ['Python', 'FastAPI', 'Qdrant', 'Gemini LLM', 'RAG', 'NLP'],
    image: '/images/QanounkPorject.png',
    images: ['/images/projects/qanounek-1.jpg', '/images/projects/qanounek-2.jpg'],
    githubUrl: 'https://github.com/Med48/Qanounek',
    category: 'AI',
    featured: false,
    challenges: [
      'Traitement du corpus juridique marocain',
      'Support multilingue (Arabe, Français)',
      'Optimisation des performances de recherche'
    ],
    results: [
      'Base de connaissances de 10,000+ documents',
      'Précision des réponses > 85%',
      'Support de 3 langues'
    ]
  },
  {
    id: '4',
    title: 'Système BI Académique',
    description: 'Tableau de bord BI pour le suivi des performances académiques',
    longDescription: 'Développement d\'un système Business Intelligence complet pour l\'analyse des parcours académiques. Stack complète incluant modélisation dimensionnelle, pipelines ETL et dashboard interactif.',
    technologies: ['MySQL', 'Talend', 'Power BI', 'SQL', 'ETL'],
    image: '/images/BIAcademicPorject.png',
    images: ['/images/BICapture1.JPG', '/images/BICapture2.JPG'],
    githubUrl: 'https://github.com/Med48/Systeme-BI-Academique',
    category: 'Data Science',
    featured: false,
    challenges: [
      'Modélisation dimensionnelle complexe',
      'Intégration de sources multiples',
      'Visualisation en temps réel'
    ],
    results: [
      'Dashboard interactif pour 5000+ étudiants',
      'Réduction du temps d\'analyse de 70%',
      'Amélioration du taux de réussite'
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'The Machine Learning Process AZ',
    issuer: '365DataScience',
    date: '2024',
    url: '#'
  },
  {
    id: '2',
    name: 'Intro to NLP for AI, Intro to LLMs',
    issuer: '365DataScience',
    date: '2024',
    url: '#'
  },
  {
    id: '3',
    name: 'Introduction to Data Warehousing',
    issuer: '365DataScience',
    date: '2024',
    url: '#'
  }
];