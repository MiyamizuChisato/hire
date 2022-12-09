import App from './App.vue'
import { createApp } from 'vue'
import vuetify from './plugin/vuetify.js'
import { createPinia } from 'pinia'
import router from './router/index.js'
import Toast from 'vue-toastification'

const toastOptions = {
    position: 'bottom-right',
    timeout: 5000
}
createApp(App)
    .use(router)
    .use(vuetify)
    .use(createPinia())
    .use(Toast, toastOptions)
    .mount('#app')
