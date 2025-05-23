import { createRouter, createWebHistory } from "vue-router";

import { AuthRoutes } from "@Modules/Auth/AuthRoutes";
import { LandingRoutes } from "@Modules/Landing/LandingRoutes";

const routes = [
  ...AuthRoutes,
  ...LandingRoutes,
];

export const Router = createRouter({
  history: createWebHistory(), routes
});