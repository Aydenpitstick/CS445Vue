import './assets/main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import web from './web.vue'

const app = createApp(web);

app.use(PrimeVue, {
    theme: {
        Preset: Aura
    }
})

app.mount('#app');