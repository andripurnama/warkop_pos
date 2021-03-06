import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../pages/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
