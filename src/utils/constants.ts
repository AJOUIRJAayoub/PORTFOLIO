import { NavLink, Skills, Project, Experience, Formation, TerminalCommand } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Expériences' },
  { href: '#projects', label: 'Projets' },
  { href: '#terminal', label: 'Terminal' },
  { href: '#contact', label: 'Contact' },
]

export const SKILLS: Skills = {
  frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Bootstrap',
    'Tailwind CSS'
  ],
  backend: [
    'PHP',
    'Symfony',
    'Node.js',
    'Express',
    'SQL',
    'MySQL',
    'PostgreSQL',
    'MongoDB'
  ],
  tools: [
    'Git',
    'GitHub',
    'VS Code',
    'Docker',
    'WordPress',
    'Linux',
    'VMware'
  ],
  autres: [
    'C',
    'C++',
    'Java',
    'Python',
    'Cisco',
    'Montage PC'
  ]
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FreeTube',
    description: "Plateforme française de partage de vidéos - Projet en cours pour septembre 2025.",
    longDescription: "Développement d'un MVP full-stack d'une alternative à YouTube avec gestion de chaîne, vidéos, playlists, commentaires, statistiques et recommandations.",
    technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Passport.js', 'OAuth2', 'Docker', 'JWT'],
    image: null,
    github: null, // Code pas encore disponible
    demo: null,
    featured: true,
    status: 'En cours - À rendre Septembre 2025'
  },
  {
    id: '2',
    title: 'SUPCHAT',
    description: "Plateforme de messagerie collaborative temps réel - Projet terminé.",
    longDescription: "Développement full-stack d'une messagerie instantanée sécurisée avec workspaces, canaux publics/privés, gestion des permissions, fichiers, recherches et invitations.",
    technologies: ['Node.js', 'Express', 'React', 'React Native', 'MongoDB', 'Docker', 'Socket.IO', 'JWT', 'OAuth2', 'TailwindCSS', 'GitHub Actions'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/SUPCHAT-3PROJ',
    demo: null,
    featured: true,
    status: 'Projet Académique - Terminé'
  },
  {
    id: '3',
    title: 'Portfolio Personnel',
    description: "Mon portfolio de développeur créé avec React et TypeScript.",
    longDescription: "Portfolio moderne avec animations, terminal interactif, et présentation de tous mes projets et compétences.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    image: null,
    github: null, // Code pas encore disponible
    demo: null,
    featured: true,
    status: 'Projet Personnel - 2025'
  },
  {
    id: '4',
    title: 'AGE OF WAR',
    description: "Jeu de stratégie développé en Python.",
    longDescription: "Remake du jeu classique Age of War avec mécaniques de combat et évolution des âges.",
    technologies: ['Python'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/AGE_OF_WAR-2PROJ',
    demo: null,
    featured: true,
    status: 'Projet SUPINFO - 2ème année'
  },
  {
    id: '5',
    title: 'AUTOMANAGER',
    description: "Application de gestion automatique développée en PHP.",
    longDescription: "Système de gestion et d'automatisation de tâches avec interface web.",
    technologies: ['PHP'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/AUTOMANAGER',
    demo: null,
    featured: true,
    status: 'Projet Personnel - 2025'
  },
  {
    id: '6',
    title: 'MET MUSEUM',
    description: "Application web utilisant l'API du Metropolitan Museum.",
    longDescription: "Interface pour explorer les collections du MET Museum avec recherche et filtres avancés.",
    technologies: ['TypeScript', 'API REST'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/MET_MUSEUM-2WEBD',
    demo: null,
    featured: true,
    status: 'Projet SUPINFO - 2ème année'
  },
  {
    id: '7',
    title: 'ISTORE MANAGEMENT',
    description: "Application de gestion de magasin développée en Java.",
    longDescription: "Système de gestion complet pour un magasin avec gestion des stocks, des ventes et des clients.",
    technologies: ['Java'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/ISTORE_MANAGEMENT-2JAVA',
    demo: null,
    featured: false,
    status: 'Projet SUPINFO - 2ème année'
  },
  {
    id: '8',
    title: 'JEUX CARDINAL CHAIN',
    description: "Jeu développé en langage C.",
    longDescription: "Jeu de chaîne cardinale implémenté en C avec gestion de la mémoire et algorithmes optimisés.",
    technologies: ['C'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/JEUX_CARDINALCHAIN-1CDEV',
    demo: null,
    featured: false,
    status: 'Projet SUPINFO - 1ère année'
  },
  {
    id: '9',
    title: 'QUORIDOR',
    description: "Jeu de stratégie Quoridor développé en Python.",
    longDescription: "Implémentation du jeu de plateau Quoridor avec interface graphique et intelligence artificielle.",
    technologies: ['Python'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/QUORIDOR_1PROJ',
    demo: null,
    featured: false,
    status: 'Projet SUPINFO - 1ère année'
  },
  {
    id: '10',
    title: 'FLOPFLIX',
    description: "Site de vente de films développé en PHP.",
    longDescription: "Plateforme e-commerce pour la vente de films avec système de panier, gestion des utilisateurs et catalogue de films.",
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/FLOPFLIX_SITE_DE_VENTE_FILM-1PHP',
    demo: null,
    featured: false,
    status: 'Projet SUPINFO - 1ère année'
  },
  {
    id: '11',
    title: 'PUISSANCE 4',
    description: "Jeu de Puissance 4 développé en web.",
    longDescription: "Implémentation du jeu classique Puissance 4 avec interface web interactive.",
    technologies: ['CSS'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/PUISSANCE4_1WEBD',
    demo: null,
    featured: false,
    status: 'Projet SUPINFO - 1ère année'
  },
  {
    id: '12',
    title: 'APP CHIFFREMENT',
    description: "Application de chiffrement développée en Python.",
    longDescription: "Application permettant de chiffrer et déchiffrer des messages avec différents algorithmes de cryptographie.",
    technologies: ['Python'],
    image: null,
    github: 'https://github.com/AJOUIRJAayoub/APP_CHIFFREMENT-1ARIT',
    demo: null,
    featured: false,
    status: 'Projet SUPINFO - 1ère année'
  },
  {
    id: '13',
    title: 'Site Web Mairie',
    description: "Participation au développement d'un site WordPress pour une mairie.",
    longDescription: "Conception et développement d'un site web pour une mairie sous WordPress, avec intégration de plugins avancés et optimisation SEO. J'ai participé avec mon maître de stage.",
    technologies: ['WordPress', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    image: null,
    github: null,
    featured: false,
    status: 'Stage AinCreaSite - 2024'
  }
]

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'AinCreaSite',
    position: 'Développeur Web - Stage',
    duration: 'Juillet - Septembre 2024',
    duration_short: '2 mois',
    tasks: [
      "Développement d'un site web simulant YouTube avec interface responsive",
      "Intégration de l'API YouTube pour la récupération des données",
      "Implémentation d'une base de données pour stocker les vidéos",
      "Participation au développement d'un site WordPress pour une mairie",
      "Participation à un projet de site de dessin animé",
      "Gestion du déploiement et configuration des hébergements web"
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript']
  },
  {
    id: 2,
    company: 'Thanh HAI SON',
    position: 'Développeur Web - Stage',
    duration: 'Juillet - Septembre 2023',
    duration_short: '2 mois',
    tasks: [
      "Développement d'un site web simulant YouTube",
      "Intégration de l'API YouTube pour automatiser la récupération des données",
      "Implémentation d'une base de données personnalisée"
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'API YouTube', 'Bootstrap']
  },
  {
    id: 3,
    company: "McDonald's",
    position: 'Équipier - CDI',
    duration: 'Octobre 2021 - Août 2022',
    duration_short: '11 mois',
    tasks: [
      "Travail en équipe",
      "Gestion du stress",
      "Relation client",
      "Polyvalence",
      "Respect des normes d'hygiène"
    ],
    technologies: []
  }
]

export const FORMATION: Formation[] = [
  {
    id: 1,
    school: 'SUPINFO Lyon',
    degree: 'Master Of Engineering',
    duration: '2022 - 2027',
    description: 'Expertise en développement full-stack, cloud computing et mobile. Maîtrise des architectures web modernes, microservices et sécurité. Gestion des infrastructures cloud et déploiement d\'applications.',
    current: true
  },
  {
    id: 2,
    school: 'Business School',
    degree: 'BTS SIO SLAM',
    duration: '2021 - 2022',
    description: 'Développement web (HTML, CSS, PHP, JS) et bases de données. Initiation à la programmation orientée objet et sécurité réseau. Conception de solutions logicielles et gestion de projet.',
    current: false,
    note: '1 an effectué'
  },
  {
    id: 3,
    school: 'Lycée Carriat',
    degree: 'Baccalauréat STI2D',
    duration: '2021',
    description: 'Sciences et Technologies de l\'Industrie et du Développement Durable',
    current: false
  }
]

export const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
  help: {
    output: `Commandes disponibles :
  • about     - À propos de moi
  • skills    - Mes compétences techniques
  • projects  - Mes projets académiques et stages
  • formation - Mon parcours scolaire
  • experience - Mes expériences professionnelles
  • contact   - Mes coordonnées
  • clear     - Effacer le terminal
  • whoami    - Qui êtes-vous ?
  • cv        - Mon CV complet`
  },
  about: {
    output: `Ayoub AJOUIRJA - Étudiant en développement
• 4ème année Master Of Engineering - SUPINFO Lyon
• Recherche alternance développement Full-Stack pour novembre 2025
• 1 semaine entreprise / 1 semaine école
• Possibilité de stage : 27 août - 26 septembre 2025
• Basé à Jayat (01340) - Mobile sur 150km`
  },
  skills: {
    output: `Compétences principales :
• Développement web : Front-end & Back-end
• Intégration d'API
• Bases de données
• Gestion de projet
• WordPress
• Cloud & Virtualisation

Technologies :
• Frontend : HTML, CSS, JavaScript, TypeScript, React
• Backend : PHP (Symfony), Node.js (Express), SQL
• Langages : C, C++, Java, Python
• CMS : WordPress
• Outils : Git, GitHub, Docker, VMware`
  },
  formation: {
    output: `Formation :
• 2022-2027 : Master Of Engineering - SUPINFO Lyon (en cours)
• 2021-2022 : BTS SIO SLAM - Business School (1 an)
• 2021 : Baccalauréat STI2D - Lycée Carriat`
  },
  experience: {
    output: `Expériences professionnelles :
• 2024 : Développeur Web (Stage) - AinCreaSite - 2 mois
• 2023 : Développeur Web (Stage) - Thanh HAI SON - 2 mois
• 2021-2022 : Équipier - McDonald's - CDI - 11 mois`
  },
  contact: {
    output: `Contact :
📧 Email : ayoub.ajouirja@supinfo.com
📱 Téléphone : 07 67 80 62 05
📍 Adresse : Jayat 01340
🚗 Permis B + véhicule personnel
🌐 Langues : Français courant, Anglais B1`
  },
  cv: {
    output: `Ayoub AJOUIRJA
Étudiant en recherche d'alternance

Compétences principales :
• Développement web (Front-end & Back-end)
• Intégration d'API
• Bases de données
• Gestion de projet
• WordPress
• Cloud & Virtualisation

Soft Skills :
• Curiosité technique
• Autonomie & adaptabilité
• Rigueur et sens du détail
• Bonne communication en équipe`
  },
  whoami: {
    output: `Vous êtes un recruteur à la recherche d'un alternant motivé ?
Je suis l'étudiant qu'il vous faut ! 
Passionné, curieux et prêt à apprendre.`
  }
}