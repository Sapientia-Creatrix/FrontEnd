import { createApp } from "vue";
import "./css/index.css";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import VueCalendarHeatmap from 'vue3-calendar-heatmap';

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(VueCalendarHeatmap);
app.mount("#app");
