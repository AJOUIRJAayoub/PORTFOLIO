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
    },
    {
      title: 'Backend',
      icon: Server,
      skills: SKILLS.backend,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Outils & DevOps',
      icon: Wrench,
      skills: SKILLS.tools,
      color: 'from-orange-500 to-red-500',
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
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications exceptionnelles
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
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

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

        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Niveau d'expertise
            </h3>
            <div className="space-y-6">
              {[
                { name: 'React / TypeScript', level: 85 },
                { name: 'PHP / Symfony', level: 80 },
                { name: 'Node.js / Express', level: 75 },
                { name: 'WordPress', level: 90 },
                { name: 'Docker / Cloud', level: 70 },
              ].map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-dark-300 font-medium">{skill.name}</span>
                    <span className="text-primary-400 font-mono">{skill.level}%</span>
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