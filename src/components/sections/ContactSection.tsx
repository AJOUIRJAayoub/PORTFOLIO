import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Navigation, Car } from 'lucide-react'
import { useOptimizedIntersectionObserver } from '@/hooks/useOptimizedIntersectionObserver'
import { OptimizedCard as Card } from '@/components/ui/OptimizedCard'
import AnimatedText from '@/components/ui/AnimatedText'

export default function ContactSection() {
  const { ref, isVisible } = useOptimizedIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 relative"
      >
        <div className="text-center mb-16">
          <AnimatedText
            text="Contact"
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent mb-4"
          />
          <p className="text-xl text-gray-300">
            Étudiant en 4ème année - Recherche active d'alternance pour novembre 2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Carte Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <Card className="p-0 h-full overflow-hidden">
              <div className="relative h-[500px] lg:h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22163.026838084244!2d5.076056!3d46.370019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f347a90d230185%3A0x408ab2ae4c20d70!2s01340%20Jayat!5e0!3m2!1sfr!2sfr!4v1753400622510!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%] contrast-[1.1]"
                />
                
                {/* Overlay simple avec infos */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-transparent p-6">
                  <div className="bg-dark-800/95 backdrop-blur-sm rounded-lg p-4 border border-dark-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary-400 animate-pulse" />
                      <h4 className="text-white font-semibold">Jayat, 01340</h4>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Car className="w-4 h-4" />
                      <span>Prêt à me déplacer dans un rayon de 150km</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <Card className="p-8 h-full bg-dark-800/95 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-white mb-8">
                Contactez-moi !
              </h3>
              
              <p className="text-gray-300 mb-8">
                Je suis un étudiant motivé à la recherche d'une entreprise qui saura m'accompagner 
                dans mon apprentissage. N'hésitez pas à me contacter pour discuter !
              </p>
              
              <div className="space-y-8">
                {/* Email */}
                <motion.div 
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all duration-300">
                      <Mail className="w-7 h-7 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 text-lg">Email</h4>
                      <a
                        href="mailto:ayoub.ajouirja@supinfo.com"
                        className="text-gray-300 hover:text-primary-400 transition-colors break-all"
                      >
                        ayoub.ajouirja@supinfo.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Téléphone */}
                <motion.div 
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-cyan-600/30 transition-all duration-300">
                      <Phone className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 text-lg">Téléphone</h4>
                      <a
                        href="tel:+33767806205"
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        07 67 80 62 05
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Localisation et mobilité */}
                <motion.div 
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                      <Navigation className="w-7 h-7 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2 text-lg">Localisation & Mobilité</h4>
                      <div className="space-y-3">
                        <p className="text-gray-300">
                          Basé à <span className="text-white font-medium">Jayat (01340)</span>
                        </p>
                        <div className="p-3 bg-dark-700/50 rounded-lg border border-dark-600">
                          <p className="text-sm text-gray-300 flex items-center">
                            <Car className="w-4 h-4 mr-2 text-primary-400" />
                            <span>
                              <span className="text-primary-400 font-medium">Mobilité : 150km</span> • Permis B + Véhicule personnel
                            </span>
                          </p>
                        </div>
                        <p className="text-sm text-gray-400">
                          Disponible pour des missions dans toute la région Auvergne-Rhône-Alpes
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Bouton CTA */}
                <div className="mt-8 pt-8 border-t border-dark-700">
                  <motion.a
                    href="mailto:ayoub.ajouirja@supinfo.com?subject=Contact%20depuis%20Portfolio&body=Bonjour%20Ayoub,"
                    className="inline-flex items-center space-x-3 w-full justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Envoyez-moi un message</span>
                  </motion.a>
                  <p className="text-center text-gray-400 text-sm mt-4">
                    Réponse garantie sous 24h
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}