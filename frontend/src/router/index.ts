import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "IndexPage",
    component: () => import("../views/index/IndexPage.vue"),
  },
  {
    path: "/videos",
    name: "VideoPage",
    component: () => import("../views/videos/VideosPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
