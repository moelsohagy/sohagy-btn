import { createApp } from 'vue'
import App from './App.vue'
import SohagyBtn from '/SohagyBtn'

const app = createApp(App)
app.use(SohagyBtn)

app.mount('#app')
