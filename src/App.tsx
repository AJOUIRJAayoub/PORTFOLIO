import { useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TerminalSection from '@/components/sections/TerminalSection'
import ContactSection from '@/components/sections/ContactSection'
import CustomCursor from '@/components/common/CustomCursor'
import ParticlesBackground from '@/components/common/ParticlesBackground'
import ScrollProgress from '@/components/common/ScrollProgress'
import Loader from '@/components/ui/Loader'
import { useScrollPosition } from '@/hooks/useScrollPosition'

function App() {
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId!)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <>
      <Loader />
      <CustomCursor />
      <ParticlesBackground />
      <ScrollProgress />
      
      <Layout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TerminalSection />
        <ContactSection />
      </Layout>
    </>
  )
}

export default App