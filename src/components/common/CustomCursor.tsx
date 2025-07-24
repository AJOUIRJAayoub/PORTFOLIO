import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { performanceConfig } from '@/utils/performance'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    // Désactiver sur les appareils tactiles
    if (!performanceConfig.enableCursor) return

    const updateMousePosition = performanceConfig.throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }, 16) // ~60fps

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('onclick') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      setIsPointer(isClickable)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', updateCursorType)

    // Masquer le curseur par défaut
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateCursorType)
      document.body.style.cursor = 'auto'
    }
  }, [])

  // Ne pas rendre sur les appareils tactiles
  if (!performanceConfig.enableCursor) {
    return null
  }

  return (
    <>
      {/* Point central du curseur */}
      <motion.div
        className="fixed w-4 h-4 bg-primary-400 rounded-full pointer-events-none z-[200] mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Anneau externe du curseur */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-primary-400/50 rounded-full pointer-events-none z-[199]"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  )
}