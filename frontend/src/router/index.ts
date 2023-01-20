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
  {
    path: "/realizacoes",
    name: "SocialActionsPage",
    component: () => import("../views/social-actions/SocialActionsPage.vue"),
  },
  {
    path: "/dicas",
    name: "TipsPage",
    component: () => import("../views/tips/TipsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
