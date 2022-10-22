import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/less/main.less";
import "./utils/rem";

const app = createApp(App);

Toast.setDefaultOptions({ duration: 3000 }); // 默认提示事件改为3s

app.use(store);
app.use(router);

app.mount("#app");
