import { motion } from 'framer-motion'
import { Briefcase, Calendar, GraduationCap } from 'lucide-react'
import { useOptimizedIntersectionObserver } from '@/hooks/useOptimizedIntersectionObserver'
import { OptimizedCard as Card } from '@/components/ui/OptimizedCard'
import { OptimizedBadge as Badge } from '@/components/ui/OptimizedBadge'

const experiences = [
  {
    id: 1,
    company: 'AinCreaSite',
    position: 'Stagiaire Développeur Web',
    type: 'Stage',
    duration: 'Juill/Sept 2024',
    description: [
      "Participation au développement d'un site WordPress pour une mairie",
      "Première expérience avec l'API YouTube pour un projet interne",
      "Découverte du déploiement et de la configuration d'hébergements",
      "Apprentissage des bases du SEO et de l'optimisation web"
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
    learnings: "J'ai découvert le monde professionnel et appris à travailler avec de vrais clients"
  },
  {
    id: 2,
    company: 'Thanh HAI SON',
    position: 'Stagiaire Développeur Web',
    type: 'Stage',
    duration: 'Juill/Sept 2023',
    description: [
      "Développement d'un clone YouTube pour apprendre",
      "Création d'une base de données simple pour stocker des vidéos",
      "Utilisation de Bootstrap pour le responsive",
      "Premier contact avec les API externes"
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    learnings: "Mon premier stage, beaucoup de découvertes et d'erreurs... mais j'ai beaucoup appris !"
  },
  {
    id: 3,
    company: "McDonald's",
    position: 'Équipier',
    type: 'CDI',
    duration: 'Oct 2021 - Août 2022',
    description: [
      "Travail en équipe dans un environnement rapide",
      "Gestion du stress et relation client",
      "Développement de la polyvalence et de l'autonomie"
    ],
    technologies: [],
    learnings: "Cette expérience m'a appris la rigueur et l'importance du travail d'équipe"
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mes stages et premières expériences professionnelles
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
                    <Badge variant="outline">
                      {exp.type === 'Stage' ? <GraduationCap className="w-3 h-3 mr-1 inline" /> : null}
                      {exp.type}
                    </Badge>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.learnings && (
                  <div className="mt-4 p-3 bg-primary-900/10 border border-primary-500/20 rounded-lg">
                    <p className="text-sm text-primary-300 italic">
                      💭 {exp.learnings}
                    </p>
                  </div>
                )}

                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block p-6 bg-gradient-to-r from-primary-900/20 to-cyan-900/20 border-primary-500/30">
            <p className="text-gray-300">
              <span className="text-primary-400 font-semibold">🎯 Prochaine étape :</span> Une alternance où je pourrai 
              vraiment progresser et apporter ma motivation !
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}