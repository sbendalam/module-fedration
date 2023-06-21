import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    federation({
      name: 'Button',
      filename: 'vueButton.js',
      exposes: {
        './Button': './src/components/custom/CustomButton.vue'
      },
      shared: ['vue']
    })],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
})
