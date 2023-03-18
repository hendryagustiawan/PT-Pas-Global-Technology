import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/blog";
import router from "./router/index";

const app = createApp(App);

// Install the store instance as a plugin
app.use(router);
app.use(store);
app.mount("#app");
