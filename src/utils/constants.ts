export const NAV_LINKS = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export const SKILLS = {
  frontend: [
    'React.js', 'Next.js', 'TypeScript', 'Vue.js', 
    'Tailwind CSS', 'Three.js', 'Redux', 'SASS'
  ],
  backend: [
    'Node.js', 'Express.js', 'Python', 'Django', 
    'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'
  ],
  tools: [
    'Docker', 'Kubernetes', 'AWS', 'CI/CD', 
    'Git', 'Linux', 'Nginx', 'Jenkins'
  ]
}

export const PROJECTS = [
  {
    id: '1',
    title: 'Application SaaS B2B',
    description: "Plateforme de gestion d'entreprise avec dashboard analytics en temps réel.",
    longDescription: "Une solution complète de gestion d'entreprise avec tableaux de bord personnalisables, analyses en temps réel, et intégrations API avancées.",
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1.demo.com',
    featured: true,
  },
  // ... autres projets
]

export const TERMINAL_COMMANDS = {
  help: {
    description: 'Affiche la liste des commandes disponibles',
    output: `Commandes disponibles:
  help     - Affiche cette aide
  about    - À propos de moi
  skills   - Liste mes compétences
  projects - Voir mes projets
  contact  - Informations de contact
  clear    - Efface le terminal
  theme    - Change le thème
  matrix   - Active l'effet Matrix`
  },
  about: {
    description: 'Informations sur moi',
    output: 'Développeur Full Stack passionné par les technologies web modernes.'
  },
  skills: {
    description: 'Liste des compétences techniques',
    output: 'Frontend: React, Vue, TypeScript\nBackend: Node.js, Python, PostgreSQL\nDevOps: Docker, AWS, CI/CD'
  },
  // ... autres commandes
}