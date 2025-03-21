import { createApp } from 'vue'
import MyApp from './MyApp.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(MyApp)

app.use(ElementPlus)
// app.use(myButton, { name: 'Jack' })

app.mount('#app-zhy')
