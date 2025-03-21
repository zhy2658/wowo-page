import {createApp} from "vue";
import MyApp from "./MyApp.vue";
import myButton from "./plugins/my-button.js";
const app=createApp(MyApp);

app.use(myButton, { name: 'Jack' });

app.mount("#app-zhy")