import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

import { Routes } from "./routes";

const routes: RouteRecordRaw[] = [
  {
    path: Routes.ROOT,
    component: () => import("@/modules/auth/pages/login.page.vue"),
  },
  {
    path: Routes.LOGIN,
    component: () => import("@/modules/auth/pages/login.page.vue"),
  },
  {
    path: Routes.SIGNUP,
    component: () => import("@/modules/auth/pages/signup.page.vue"),
  },
  {
    path: Routes.CREDENTIALS,
    component: () => import("@/modules/credentials/pages/credentials.page.vue"),
  },
  {
    path: Routes.CREDENTIALS,
    component: () => import("@/modules/credentials/pages/credentials.page.vue"),
  },
  {
    path: Routes.CREDENTIALS,
    component: () => import("@/modules/credentials/pages/credentials.page.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
