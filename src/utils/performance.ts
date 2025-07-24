export const performanceConfig = {
  // Désactiver les animations sur les appareils moins puissants
  shouldReduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  
  // Détecter si on est sur mobile
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  
  // Limite de particules selon la puissance
  getParticleCount: () => {
    if (window.innerWidth < 768) return 30; // Mobile
    if (window.innerWidth < 1024) return 50; // Tablet
    return 100; // Desktop
  },
  
  // Désactiver certains effets sur mobile
  enableCursor: !('ontouchstart' in window),
  enableParticles: !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
  
  // Throttle pour les événements
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  },
  
  // Debounce pour les événements
  debounce: (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function(this: any, ...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    }
  }
}