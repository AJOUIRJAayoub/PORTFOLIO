import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    direction: 'up' as 'up' | 'down',
  })

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updatePosition = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      
      setScrollPosition({
        x: window.pageXOffset,
        y: scrollY,
        direction,
      })
      
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updatePosition, { passive: true })
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}