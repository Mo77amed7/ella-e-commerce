import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "@mdi/font/css/materialdesignicons.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Emitter = mitt();
const vueApp = createApp(App);
vueApp.provide("Emitter", Emitter).use(createPinia()).use(router).mount("#app");
