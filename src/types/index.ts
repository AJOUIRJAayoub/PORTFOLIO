export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string | null
  github?: string | null
  demo?: string | null
  featured: boolean
  status: string
}

export interface Experience {
  id: number
  company: string
  position: string
  duration: string
  duration_short: string
  tasks: string[]
  technologies: string[]
}

export interface Formation {
  id: number
  school: string
  degree: string
  duration: string
  description: string
  current: boolean
  note?: string
}

export interface NavLink {
  href: string
  label: string
}

export interface TerminalCommand {
  output: string
}

export interface Skills {
  frontend: string[]
  backend: string[]
  tools: string[]
  autres: string[]
}