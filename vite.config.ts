import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base relativa: funciona na raiz de um domínio próprio e também em
  // subcaminhos como https://tiagogorridev.github.io/portfolio-tg/
  base: './',
  plugins: [react()],
})
