import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    //error 404
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/page_error.vue"),
  },
  {
    path: "/",
    name: "Main",
    component: () => import("../views/page_main.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/page_user.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;