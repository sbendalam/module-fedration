import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    federation({
      remotes: {
        vueRemote: 'http://localhost:5001/assets/vueButton.js',
        remoteApp: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['vue','react','react-dom']
    }),
  ],
  build: {
    target: 'esnext'
  }
},
);
