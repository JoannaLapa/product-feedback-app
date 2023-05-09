import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/index.css";
import App from "@/App.vue";
import router from "@/router.js";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router);

router.isReady().then(() => {
  app.mount("#app");
});
