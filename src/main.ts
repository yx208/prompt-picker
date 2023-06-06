import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "modern-css-reset";
import "./styles.css";
import "ant-design-vue/dist/antd.css";

createApp(App).use(router).mount("#app");
