import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AJOUIRJAayoub', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ayoub-ajouirja-9116ab253/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ayoub.ajouirja@supinfo.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-dark-400 flex items-center justify-center md:justify-start">
              Fait avec <Heart className="w-4 h-4 text-red-500 mx-1" /> par Ayoub AJOUIRJA
            </p>
            <p className="text-dark-500 text-sm mt-1">
              © {currentYear} Tous droits réservés
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ y: -3 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}