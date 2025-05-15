import type { RouteRecordRaw } from "vue-router";
import LandingPage from "./LandingPage.vue";

export const LandingRoutes: RouteRecordRaw[] = [
  {
    path: "",
    component: LandingPage,
  },
];