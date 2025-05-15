import type { RouteRecordRaw } from "vue-router";
import LoginPage from "./Login/LoginPage.vue";

export const AuthRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: LoginPage,
  },
];