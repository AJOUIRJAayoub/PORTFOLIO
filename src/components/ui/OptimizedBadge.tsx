import { memo } from 'react'
import Badge from './Badge'

// Badge optimisé avec React.memo
export const OptimizedBadge = memo(Badge)

OptimizedBadge.displayName = 'OptimizedBadge'