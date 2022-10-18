import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Lottery",
      component: () => import("@/views/lottery/index.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/login/index.vue"),
    },
    {
      path: "/simple",
      name: "Simple",
      component: () => import("@/views/simple/index.vue"),
    },
  ],
});

export default router;
