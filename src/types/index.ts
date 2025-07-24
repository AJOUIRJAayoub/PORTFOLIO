export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  image?: string
  github?: string
  demo?: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export interface TerminalCommand {
  command: string
  description: string
  action: () => string | void
}

export interface NavLink {
  href: string
  label: string
  icon?: React.ReactNode
}