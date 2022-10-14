import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/less/base.less'
import './utils/rem'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
