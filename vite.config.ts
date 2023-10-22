import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@controllers': path.resolve(__dirname, './src/controllers'),
      '@context': path.resolve(__dirname, './src/context'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@router': path.resolve(__dirname, './src/router'),
      '@HOC': path.resolve(__dirname, './src/HOC'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@services': path.resolve(__dirname, './src/services'),
      '@locales': path.resolve(__dirname, './src/locale'),
      '@query': path.resolve(__dirname, './src/query'),
      '@library': path.resolve(__dirname, './src/library'),
      '@library/ui': path.resolve(__dirname, './src/library/ui'),
      '@modules': path.resolve(__dirname, './src/modules'),
    },
  },
})
