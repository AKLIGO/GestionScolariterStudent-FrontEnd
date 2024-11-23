import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['ng2-pdf-viewer'], // Exclure ng2-pdf-viewer de l'analyse des dépendances
  },
});
