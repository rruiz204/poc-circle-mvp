import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import ScreenLayout from "@Layouts/ScreenLayout.vue";

import { AuthRoutes } from "@Modules/Auth/AuthRoutes";
import { LandingRoutes } from "@Modules/Landing/LandingRoutes";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: ScreenLayout,
    children: [
      ...AuthRoutes,
      ...LandingRoutes,
    ],
  },
];

export const Router = createRouter({
  history: createWebHistory(),
  routes: routes,
});