import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import unocssConfig from './unocss.config.js'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Unocss(unocssConfig)
    ],
    server: {
        port: 3000,
        proxy: {
            '/hire': {
                changeOrigin: true,
                target: 'http://localhost:8080',
            }
        }
    }
})
