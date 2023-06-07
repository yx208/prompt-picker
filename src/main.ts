import {App, createApp} from "vue";

import AppEntry from "./App.vue";
import router from "./router";

import {
    NButton,
    NIcon
} from "naive-ui";

import "modern-css-reset";
import "./styles.css";

function setupNaiveUI(app: App) {
    app.component("NButton", NButton);
    app.component("NIcon", NIcon);
}

((app: App) => {

    setupNaiveUI(app);

    app
        .use(router)
        .mount("#app");

})(createApp(AppEntry));

