import type { RouteRecordRaw } from "vue-router";

import LoginPage from "./Login/LoginPage.vue";
import RegisterPage from "./Register/RegisterPage.vue";

export const AuthRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
];