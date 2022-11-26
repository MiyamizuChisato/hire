import App from './App.vue'
import { createApp } from 'vue'
import vuetify from './plugin/vuetify.js'
import { createPinia } from 'pinia'
import router from './router/index.js'

createApp(App)
    .use(router)
    .use(vuetify)
    .use(createPinia())
    .mount('#app')
