import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    // string shorthand
    '/foo': 'http://localhost:4567',
    // with options
    '/api': {
      target: 'https://www.superheroapi.com/api/408055134055673/69',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  plugins: [reactRefresh()],
});
