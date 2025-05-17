import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import { AuthRoutes } from "@Modules/Auth/AuthRoutes";
import { LandingRoutes } from "@Modules/Landing/LandingRoutes";

const routes: RouteRecordRaw[] = [
  ...AuthRoutes,
  ...LandingRoutes,
];

export const Router = createRouter({
  history: createWebHistory(),
  routes: routes,
});