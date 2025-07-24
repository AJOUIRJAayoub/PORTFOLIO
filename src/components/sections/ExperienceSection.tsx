import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { useOptimizedIntersectionObserver } from '@/hooks/useOptimizedIntersectionObserver'
import { OptimizedCard as Card } from '@/components/ui/OptimizedCard'
import { OptimizedBadge as Badge } from '@/components/ui/OptimizedBadge'

const experiences = [
  {
    id: 1,
    company: 'AinCreaSite',
    position: 'Développeur Web',
    type: 'Stage',
    duration: 'Juill/Sept 2024',
    description: [
      "Développement d'un site web simulant YouTube avec interface responsive",
      "Intégration de l'API YouTube pour la récupération automatisée des données",
      "Conception d'un site WordPress pour une mairie avec SEO optimisé",
      "Gestion du déploiement et configuration des hébergements web"
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'API YouTube']
  },
  {
    id: 2,
    company: 'Thanh HAI SON',
    position: 'Développeur Web',
    type: 'Stage',
    duration: 'Juill/Sept 2023',
    description: [
      "Création d'une plateforme de streaming vidéo personnalisée",
      "Implémentation d'une base de données pour organiser les contenus",
      "Développement de fonctionnalités interactives",
      "Optimisation de l'expérience utilisateur"
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap']
  },
  {
    id: 3,
    company: "McDonald's",
    position: 'Équipier',
    type: 'CDI',
    duration: 'Oct 2021 - Août 2022',
    description: [
      "Travail en équipe et gestion du stress",
      "Relation client et polyvalence",
      "Respect des normes d'hygiène et de qualité"
    ],
    technologies: []
  }
]

export default function ExperienceSection() {
  const { ref, isVisible } = useOptimizedIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="experience" className="py-20 px-4 bg-dark-950/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl font-bold text-white">Expériences</h2>
          </div>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Mon parcours professionnel et mes stages en développement
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <p className="text-primary-400 text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    <Badge variant="outline">{exp.type}</Badge>
                    <div className="flex items-center text-dark-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-dark-300 flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}