import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";

import { Theme } from "./theme";
import PrimeVue from "primevue/config";
import { Router } from "@Routes/Router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(Router);
app.use(VueQueryPlugin);
app.use(PrimeVue, { theme: Theme });

app.mount("#app");
