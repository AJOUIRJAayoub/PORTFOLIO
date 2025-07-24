import { motion } from 'framer-motion'
import { User, Award, Coffee, Zap } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Card from '@/components/ui/Card'

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  const stats = [
    { icon: Award, value: '3+', label: "Années d'études" },
    { icon: Coffee, value: '5+', label: 'Projets réalisés' },
    { icon: Zap, value: '4', label: 'Mois de stages' },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <User className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl font-bold text-white">À propos</h2>
          </div>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Passionné par le développement web et les nouvelles technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Futur Développeur Cloud & Mobile
              </h3>
              <div className="space-y-4 text-dark-300">
                <p>
                  Actuellement en Master of Engineering à SUPINFO Lyon, je me spécialise
                  dans le développement full-stack, le cloud computing et les applications mobiles.
                </p>
                <p>
                  Mes expériences en stage chez AinCreaSite et Thanh HAI SON m'ont permis
                  de développer des compétences solides en développement web, intégration d'API
                  et gestion de projets WordPress.
                </p>
                <p>
                  Passionné par l'innovation technologique, je suis à la recherche d'une alternance
                  pour novembre 2025 afin de mettre en pratique mes connaissances et contribuer
                  à des projets ambitieux.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="p-6 text-center hover:scale-105 transition-transform duration-200"
              >
                <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-dark-400 text-sm">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}