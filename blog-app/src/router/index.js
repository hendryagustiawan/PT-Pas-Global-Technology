import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../page/Home.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../page/Add.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../page/Edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
