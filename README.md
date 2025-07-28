# Portfolio - Ayoub AJOUIRJA

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

**[Voir le portfolio en ligne : www.ayoubajouirja.fr](https://www.ayoubajouirja.fr)**


Portfolio personnel d'un étudiant en 4ème année à SUPINFO Lyon, recherchant une alternance en développement Full-Stack pour novembre 2025.

## Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Performance](#performance)
- [Contact](#contact)

## À propos

Portfolio moderne et interactif présentant mon parcours académique et professionnel. Développé avec React et TypeScript, ce projet démontre mes compétences actuelles en développement web tout en reflétant ma volonté d'apprentissage continu.

**Objectif principal :** Recherche d'une alternance de 24 mois (Master 1 et 2) en développement Full-Stack débutant en novembre 2025.

## Fonctionnalités

### Interface utilisateur
- Thème sombre avec design moderne
- Animations fluides implémentées avec Framer Motion
- Curseur personnalisé (desktop uniquement)
- Système de particules animées en arrière-plan
- Barre de progression de défilement

### Sections principales
- **Accueil** - Présentation avec animation de frappe
- **À propos** - Parcours académique et motivations
- **Expériences** - Historique professionnel et stages
- **Compétences** - Technologies étudiées durant la formation
- **Projets** - Réalisations académiques et personnelles
- **Terminal** - Interface en ligne de commande interactive
- **Contact** - Informations de contact et localisation

### Terminal interactif
Terminal fonctionnel avec les commandes suivantes :
```bash
help       # Affiche la liste des commandes disponibles
about      # Informations personnelles
skills     # Liste des compétences techniques
projects   # Présentation des projets réalisés
contact    # Coordonnées complètes
clear      # Efface l'historique du terminal
cv         # Affiche le CV complet
```

## Technologies

### Frontend
- **React 18.2.0** - Framework JavaScript
- **TypeScript 5.3.0** - Typage statique
- **Tailwind CSS 3.4.0** - Framework CSS utility-first
- **Framer Motion 11.0.0** - Bibliothèque d'animations
- **Lucide React** - Bibliothèque d'icônes

### Outils de développement
- **Vite 5.0.0** - Outil de build
- **ESLint** - Analyse statique du code
- **PostCSS** - Post-processeur CSS
- **Autoprefixer** - Compatibilité cross-browser

## Installation

### Prérequis
- Node.js version 18.0.0 ou supérieure
- npm ou yarn

### Procédure d'installation

1. Cloner le repository
```bash
git clone https://github.com/AJOUIRJAayoub/portfolio.git
cd portfolio
```

2. Installer les dépendances
```bash
npm install
```

## Utilisation

### Mode développement
```bash
npm run dev
```
Application accessible sur http://localhost:5173

### Build de production
```bash
npm run build
```

### Prévisualisation de la build
```bash
npm run preview
```

### Analyse du code
```bash
npm run lint
```

## Structure du projet

```
portfolio/
├── public/                 # Ressources statiques
├── src/
│   ├── components/         # Composants React
│   │   ├── common/         # Composants réutilisables
│   │   ├── layout/         # Composants de structure
│   │   ├── sections/       # Sections de la page
│   │   └── ui/             # Composants d'interface
│   ├── hooks/              # Hooks React personnalisés
│   ├── styles/             # Fichiers de styles
│   ├── types/              # Définitions TypeScript
│   ├── utils/              # Fonctions utilitaires
│   ├── App.tsx             # Composant racine
│   └── main.tsx            # Point d'entrée
├── .gitignore
├── package.json
├── tailwind.config.js      # Configuration Tailwind
├── tsconfig.json           # Configuration TypeScript
└── vite.config.ts          # Configuration Vite
```

## Performance

### Optimisations implémentées
- Lazy loading des sections avec React Suspense
- Throttling et debouncing des événements
- Adaptation du nombre de particules selon la puissance
- Préchargement différé des ressources
- Découpage optimisé du bundle
- Purge CSS en production

### Compatibilité
- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Responsive design (320px - 4K)
- Support tactile pour mobiles et tablettes

## Contact

**Ayoub AJOUIRJA**  
Étudiant en Master - SUPINFO Lyon

### Coordonnées professionnelles
- **Email :** ayoub.ajouirja@supinfo.com
- **Téléphone :** 07 67 80 62 05
- **Localisation :** Jayat (01340)
- **Mobilité :** 150 kilomètres

### Réseaux professionnels
- **LinkedIn :** [linkedin.com/in/ayoub-ajouirja-9116ab253](https://www.linkedin.com/in/ayoub-ajouirja-9116ab253/)
- **GitHub :** [github.com/AJOUIRJAayoub](https://github.com/AJOUIRJAayoub)

### Disponibilités
- **Alternance :** À partir du 3 novembre 2025 (durée 24 mois)
- **Rythme :** 1 semaine entreprise / 1 semaine formation
- **Stage préalable possible :** 25 août - 26 septembre 2025

---

Copyright © 2025 Ayoub AJOUIRJA. Tous droits réservés.
