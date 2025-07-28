/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // ON REMPLACE LES COULEURS DARK PAR DES GRAY CLAIRES
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',   // text-dark-200 sera maintenant gris clair
          300: '#d1d5db',   // text-dark-300 sera maintenant gris clair
          400: '#9ca3af',   // text-dark-400 sera maintenant gris moyen
          500: '#6b7280',   // text-dark-500 sera maintenant gris moyen
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}