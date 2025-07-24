import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Utiliser SWC pour des builds plus rapides
      // fastRefresh: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimisations pour la production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          utils: ['lucide-react', 'clsx', 'tailwind-merge'],
        },
      },
    },
    // Limite de taille des chunks
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Améliorer les performances du serveur de dev
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    // Pré-bundler les dépendances pour des démarrages plus rapides
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})