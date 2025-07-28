import { motion } from 'framer-motion'
import { User, Award, Coffee, Zap } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Card from '@/components/ui/Card'

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  const stats = [
    { icon: Award, value: '4ème', label: "Année d'études" },
    { icon: Coffee, value: '4', label: 'Mois de stages' },
    { icon: Zap, value: '150km', label: 'Mobilité' },
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Étudiant motivé en recherche d'alternance pour progresser
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
                Étudiant en Master Cloud & Mobile
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  J'ai fait <span className="text-primary-400 font-semibold">1 an de BTS SIO SLAM</span> en 2021-2022, 
                  puis j'ai commencé directement ma formation à <span className="text-primary-400 font-semibold">SUPINFO Lyon</span>. 
                  Je suis actuellement en 4ème année et je recherche une alternance pour novembre 2025.
                </p>
                <p>
                  Durant ma formation, j'ai eu l'occasion de <span className="text-primary-400">découvrir</span> diverses 
                  technologies : React, PHP, Node.js, Docker... Je ne prétends pas les maîtriser, mais j'ai acquis 
                  des bases qui me permettent de comprendre et d'apprendre rapidement.
                </p>
                <p>
                  Mes deux stages m'ont donné un <span className="text-primary-400">aperçu du monde professionnel</span>. 
                  J'ai travaillé sur des projets WordPress et développé des applications web simples. Ces expériences 
                  m'ont surtout appris l'importance du travail en équipe et de la communication.
                </p>
                <p>
                  <span className="text-primary-400 font-semibold">Mon objectif :</span> Trouver une entreprise qui 
                  acceptera de former un étudiant motivé et curieux. Je suis conscient qu'il me reste énormément 
                  à apprendre, et c'est justement ce qui me motive !
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
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block p-6 bg-gradient-to-r from-primary-900/20 to-cyan-900/20 border-primary-500/30">
            <p className="text-gray-300">
              <span className="text-primary-400 font-semibold">💡 Note importante :</span> Je suis un étudiant, 
              pas un expert. Mais je suis passionné, motivé et j'apprends vite !
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}