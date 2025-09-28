export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const ANIMATION_DURATION = {
  fast: 300,
  normal: 500,
  slow: 800,
} as const;

export const ROUTES = {
  home: '/',
  about: '/about',
  skills: '/skills',
  projects: '/projects',
  experience: '/experience',
  education: '/education',
  contact: '/contact',
} as const;

export const EXTERNAL_LINKS = {
  linkedin: 'https://linkedin.com/in/mohammed-rhouati/',
  github: 'https://github.com/mohammed-rhouati',
  email: 'mailto:mohamedrhouati0@gmail.com',
} as const;

export const CV_LINKS = {
  fr: '/documents/cv-fr.pdf',
  en: '/documents/cv-en.pdf',
} as const;

export const TECH_ICONS = {
  React: '⚛️',
  JavaScript: '📜',
  TypeScript: '🔷',
  Python: '🐍',
  Java: '☕',
  'C#': '#️⃣',
  PHP: '🐘',
  HTML: '🏗️',
  CSS: '🎨',
  MySQL: '🗄️',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  Docker: '🐳',
  Git: '📚',
  'Power BI': '📊',
  'Machine Learning': '🤖',
  'Deep Learning': '🧠',
  NLP: '💬',
  FastAPI: '⚡',
  LangChain: '🔗',
  LangGraph: '📊',
} as const;

export const SKILL_CATEGORIES = [
  'frontend',
  'backend',
  'database',
  'ai',
  'devops',
  'tools',
] as const;

export const PROJECT_CATEGORIES = [
  'All',
  'AI',
  'Web Development',
  'Data Science',
] as const;