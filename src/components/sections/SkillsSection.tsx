import { motion } from 'framer-motion'
import { Code, Server, Wrench } from 'lucide-react'
import { useOptimizedIntersectionObserver } from '@/hooks/useOptimizedIntersectionObserver'
import { SKILLS } from '@/utils/constants'
import { OptimizedCard as Card } from '@/components/ui/OptimizedCard'
import { OptimizedBadge as Badge } from '@/components/ui/OptimizedBadge'

export default function SkillsSection() {
  const { ref, isVisible } = useOptimizedIntersectionObserver({ threshold: 0.2 })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: SKILLS.frontend,
      color: 'from-blue-500 to-cyan-500',
      description: 'Technologies que j\'ai utilisées en cours'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: SKILLS.backend,
      color: 'from-purple-500 to-pink-500',
      description: 'Langages vus durant ma formation'
    },
    {
      title: 'Outils & DevOps',
      icon: Wrench,
      skills: SKILLS.tools,
      color: 'from-orange-500 to-red-500',
      description: 'Outils découverts en projets'
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-dark-950/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Compétences</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies que j'ai eu l'occasion de découvrir durant mes études
          </p>
          <p className="text-sm text-gray-400 mt-2">
            ⚠️ Attention : Je suis encore en apprentissage sur toutes ces technologies !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-6">{category.description}</p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + categoryIndex * 0.2 + index * 0.05,
                      }}
                    >
                      <Badge variant="secondary">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars avec niveaux réalistes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Mon niveau de familiarité
            </h3>
            <p className="text-center text-gray-400 mb-8">
              Ces pourcentages représentent à quel point je suis à l'aise avec chaque technologie
            </p>
            <div className="space-y-6">
              {[
                { name: 'HTML/CSS', level: 70, note: 'Bases solides' },
                { name: 'JavaScript', level: 60, note: 'En progression' },
                { name: 'PHP', level: 65, note: 'Utilisé en stages' },
                { name: 'MySQL', level: 60, note: 'Bases de données' },
                { name: 'WordPress', level: 35, note: 'Notions basiques' },
                { name: 'React', level: 40, note: 'En apprentissage' },
                { name: 'Node.js', level: 35, note: 'Débutant' },
                { name: 'Git', level: 50, note: 'Usage basique' },
                { name: 'Docker', level: 20, note: 'Très débutant' },
              ].map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.note}</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-400 to-cyan-400"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}