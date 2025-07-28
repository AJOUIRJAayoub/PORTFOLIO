import { useState } from 'react'
import { Menu, X, Code2, Terminal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/utils/constants'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { y, direction } = useScrollPosition()
  const isScrolled = y > 50
  const isVisible = direction === 'up' || y < 100

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="w-8 h-8 text-primary-400" />
            <span className="font-mono text-xl font-bold text-white">
              AJOUIRJA Ayoub
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium group"
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
              onClick={() => document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal className="w-4 h-4" />
              <span>Terminal</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dark-900 border-t border-dark-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-3 py-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}