import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '/vtuhawkinscode/', // required for GitHub Pages

    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    define: {
      // safer way to expose API key if needed in frontend
      __GEMINI_API_KEY__: JSON.stringify(env.GEMINI_API_KEY ?? ''),
    },

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
