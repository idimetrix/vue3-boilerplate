import "./registerServiceWorker";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Loader } from "@/directives/Loader";

createApp(App).use(store).use(router).directive("loader", Loader).mount("#app");
