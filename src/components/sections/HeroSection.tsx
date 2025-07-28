import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import AnimatedText from '@/components/ui/AnimatedText'
import { useTypingEffect } from '@/hooks/useTypingEffect'

export default function HeroSection() {
  const typedText = useTypingEffect("Étudiant Développeur", 100, 500)

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AJOUIRJAayoub', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ayoub-ajouirja-9116ab253/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ayoub.ajouirja@supinfo.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary-400 font-mono mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              &lt;étudiant_4ème_année&gt;
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Je suis{' '}
              <span className="block bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {typedText}
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-1 h-12 md:h-16 bg-primary-400 ml-1"
                />
              </span>
            </h1>
            
            <AnimatedText
              text="En Master Cloud & Mobile à SUPINFO Lyon. Je recherche une alternance pour novembre 2025 afin de mettre en pratique mes connaissances et apprendre auprès de professionnels."
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              delay={0.4}
            />

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                className="group"
              >
                Voir mes projets académiques
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              
              <Button
                href="#contact"
                variant="outline"
                size="lg"
              >
                Me contacter
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 blur-3xl opacity-20" />
              <motion.div
                className="relative bg-dark-800 rounded-lg overflow-hidden shadow-2xl border border-dark-700"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-dark-900 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-gray-400 text-sm font-mono ml-4">etudiant.js</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <pre className="text-gray-300">
                    <code>{`const etudiant = {
  nom: 'AJOUIRJA Ayoub',
  annee: '4ème année Master',
  ecole: 'SUPINFO Lyon',
  competences: ['En apprentissage'],
  recherche: 'Alternance Nov 2025',
  motivation: '200%'
};

// Prêt à apprendre et progresser !`}</code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  )
}