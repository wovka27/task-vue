import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import '@/assets/scss/index.css'
import Ui from '@/components/Ui'
import directives from '@/directives'

const app = createApp(App)

Ui.forEach(component => app.component(component.__name, component))
directives.forEach(directive => app.directive(...directive))

app.use(createPinia())

app.mount('#app')
