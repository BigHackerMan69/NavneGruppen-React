import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Sæt det ønskede portnummer
    open: '/MainPage.html', // Åbn MainPage.html som standard ved start
  },
});
