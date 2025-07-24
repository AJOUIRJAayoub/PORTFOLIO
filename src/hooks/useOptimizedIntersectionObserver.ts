import { useEffect, useRef, useState, useCallback } from 'react'

interface UseOptimizedIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useOptimizedIntersectionObserver(
  options: UseOptimizedIntersectionObserverOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { freezeOnceVisible = true, ...observerOptions } = options

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    const isIntersecting = entry.isIntersecting
    
    setIsVisible(isIntersecting)
    
    // Déconnecter après la première intersection pour économiser les ressources
    if (isIntersecting && freezeOnceVisible && observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }
  }, [freezeOnceVisible])

  useEffect(() => {
    const element = elementRef.current
    if (!element || observerRef.current) return

    observerRef.current = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...observerOptions
    })

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [callback, observerOptions])

  return { ref: elementRef, isVisible }
}