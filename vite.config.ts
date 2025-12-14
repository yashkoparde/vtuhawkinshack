import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/vtuhawkinshack/', // for production deploy (Netlify/GitHub Pages)
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    define: {
      __GEMINI_API_KEY__: JSON.stringify(env.GEMINI_API_KEY ?? ''),
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      strictPort: true,
    },
    preview: {
      port: 4173,
      strictPort: true,
    },
  };
});
