import { createApp } from 'vue'
import MyApp from '@/App.vue'
import ElementPlus from 'element-plus'
import router from '@/router/index'
import 'element-plus/dist/index.css'

const app = createApp(MyApp)

app.use(ElementPlus)
app.use(router)
// app.use(myButton, { name: 'Jack' })

app.mount('#app')
