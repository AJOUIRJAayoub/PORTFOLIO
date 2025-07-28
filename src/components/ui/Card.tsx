import { forwardRef } from 'react'
import { cn } from '@/utils/helpers'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const variants = {
      default: 'bg-gray-800 border-gray-700',
      glass: 'bg-gray-800/50 backdrop-blur-md border-gray-700/50',
      gradient: 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700',
    }

    const baseStyles = 'rounded-lg border shadow-lg overflow-hidden'
    const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-2xl hover:border-primary-500/50' : ''

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card