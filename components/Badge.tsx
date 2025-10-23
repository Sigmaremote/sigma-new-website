import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'region'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2 py-1 text-xs font-medium rounded-full'
  
  const variantClasses = {
    default: 'bg-lime text-navy',
    region: 'bg-deep-green text-lime uppercase tracking-wide'
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
