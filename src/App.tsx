import { useEffect, lazy, Suspense } from 'react'
import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'
import { performanceConfig } from '@/utils/performance'

// Lazy loading des composants
const HeroSection = lazy(() => import('@/components/sections/HeroSection'))
const AboutSection = lazy(() => import('@/components/sections/AboutSection'))
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection'))
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'))
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'))
const TerminalSection = lazy(() => import('@/components/sections/TerminalSection'))
const ContactSection = lazy(() => import('@/components/sections/ContactSection'))
const CustomCursor = lazy(() => import('@/components/common/CustomCursor'))
const ParticlesBackground = lazy(() => import('@/components/common/ParticlesBackground'))
const ScrollProgress = lazy(() => import('@/components/common/ScrollProgress'))

// Composant de chargement pour les sections
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-primary-400">Chargement...</div>
  </div>
)

function App() {
  useEffect(() => {
    // Smooth scrolling optimisé
    const handleSmoothScroll = performanceConfig.throttle((e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId!)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }, 100)

    document.addEventListener('click', handleSmoothScroll)
    
    // Précharger les images
    const preloadImages = () => {
      const imageUrls = [
        '/project1.jpg',
        '/project2.jpg',
        '/project3.jpg',
      ]
      
      imageUrls.forEach(url => {
        const img = new Image()
        img.src = url
      })
    }
    
    // Précharger après un court délai
    setTimeout(preloadImages, 1000)

    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <>
      <Loader />
      
      <Suspense fallback={null}>
        {performanceConfig.enableCursor && <CustomCursor />}
        {performanceConfig.enableParticles && <ParticlesBackground />}
        <ScrollProgress />
      </Suspense>
      
      <Layout>
        <div id="home">
          <Suspense fallback={<SectionLoader />}>
            <HeroSection />
          </Suspense>
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ExperienceSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TerminalSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </Layout>
    </>
  )
}

export default App