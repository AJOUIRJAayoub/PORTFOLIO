import { motion } from 'framer-motion'
import { GraduationCap, Github, ExternalLink } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { PROJECTS } from '@/utils/constants'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="projects" className="py-20 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl font-bold text-white">Projets</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mes projets académiques, de stages et personnels
          </p>
          <p className="text-sm text-gray-400 mt-2">
            🎓 Projets réalisés durant ma formation à SUPINFO et mes stages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group p-6">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3">
                    {project.status}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {project.longDescription && (
                    <p className="text-sm text-gray-400 mb-4">
                      {project.longDescription}
                    </p>
                  )}
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {(!project.github && !project.demo) ? (
                    <p className="text-sm text-gray-500 text-center">
                      Projet académique - Code non public
                    </p>
                  ) : (
                    <div className="flex gap-4 justify-center">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>Voir le code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Démo</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Note sur les projets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-primary-900/20 to-cyan-900/20 border-primary-500/30">
            <p className="text-gray-300">
              <span className="text-primary-400 font-semibold">🚀 Mon parcours :</span> De projets simples en C et Python 
              en 1ère année, jusqu'aux applications full-stack complexes. Chaque projet représente une étape 
              de mon apprentissage !
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}