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
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/page_search.vue"),
  },
  {
    path: "/course",
    name: "Course",
    component: () => import("../views/page_course.vue"),
  },
  {
    path: "/user/update",
    name: "Update",
    component: () => import("../views/page_update.vue"),
  },
  {
    path: "/user/path",
    name: "Path",
    component: () => import("../views/page_path.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/page_login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/page_register.vue")
  },
  {
    path: "/user/badge",
    name: "Badge",
    component: () => import("../views/page_badge.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
