import { memo } from 'react'
import Card from './Card'

// Wrapper optimisé pour Card avec mémorisation
export const OptimizedCard = memo(Card, (prevProps, nextProps) => {
  // Ne re-render que si les props importantes changent
  return (
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className &&
    prevProps.variant === nextProps.variant &&
    prevProps.hover === nextProps.hover
  )
})

OptimizedCard.displayName = 'OptimizedCard'