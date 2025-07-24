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
    title: 'FreeTube - Plateforme de partage vidéo',
    description: "Alternative française à YouTube avec système complet de gestion vidéo.",
    longDescription: "Développement d'un MVP full-stack avec gestion de chaînes, vidéos, playlists, commentaires, statistiques et système de recommandations.",
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    image: '/freetube.jpg',
    github: 'https://github.com/theayoub49/freetube',
    demo: 'https://freetube.demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'SUPCHAT - Messagerie collaborative',
    description: "Plateforme de messagerie instantanée sécurisée temps réel.",
    longDescription: "Messagerie avec workspaces, canaux publics/privés, gestion des permissions, partage de fichiers et système d'invitations.",
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT'],
    image: '/supchat.jpg',
    github: 'https://github.com/theayoub49/supchat',
    featured: true,
  },
  {
    id: '3',
    title: 'Site Web Mairie - WordPress',
    description: "Conception et développement d'un site institutionnel sous WordPress.",
    longDescription: "Site web complet pour une mairie avec intégration de plugins avancés, optimisation SEO et gestion de contenu dynamique.",
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    image: '/mairie.jpg',
    featured: false,
  },
  {
    id: '4',
    title: 'Clone YouTube - Intégration API',
    description: "Site web simulant YouTube avec intégration de l'API YouTube.",
    longDescription: "Développement d'une interface responsive avec récupération automatisée des données vidéo et système de streaming intégré.",
    technologies: ['PHP', 'MySQL', 'JavaScript', 'API YouTube', 'Bootstrap'],
    image: '/youtube-clone.jpg',
    github: 'https://github.com/theayoub49/youtube-clone',
    featured: false,
  },
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