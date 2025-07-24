// Configuration globale de l'application
export const appConfig = {
  // Animations
  animations: {
    enabled: true,
    reduceOnMobile: true,
    particlesEnabled: true,
    customCursorEnabled: true,
    loadingScreenDuration: 1500, // ms
  },
  
  // Performance
  performance: {
    lazyLoadImages: true,
    throttleScroll: true,
    debounceResize: true,
    limitParticlesOnMobile: true,
    maxParticlesDesktop: 100,
    maxParticlesMobile: 30,
    targetFPS: 30,
  },
  
  // Fonctionnalités
  features: {
    terminal: true,
    contactForm: true,
    scrollProgress: true,
    smoothScroll: true,
  },
  
  // Debug
  debug: {
    showFPS: false,
    logPerformance: false,
  }
}

// Fonction pour obtenir la config selon l'environnement
export function getConfig() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const isSlowDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false
  
  return {
    ...appConfig,
    animations: {
      ...appConfig.animations,
      enabled: !isSlowDevice && appConfig.animations.enabled,
      particlesEnabled: !isMobile && appConfig.animations.particlesEnabled,
      customCursorEnabled: !isMobile && appConfig.animations.customCursorEnabled,
    },
    performance: {
      ...appConfig.performance,
      maxParticles: isMobile ? appConfig.performance.maxParticlesMobile : appConfig.performance.maxParticlesDesktop,
    }
  }
}