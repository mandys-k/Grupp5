import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/Grupp5/',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'b-img': ['src'],
          'b-card': ['img-src'],
        }
      }
    }),
    Components({
      resolvers: [BootstrapVueNextResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})