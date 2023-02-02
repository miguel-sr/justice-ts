import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import adminRoutes from "./admin.routes";
import storeRoutes from "./store.routes";
import auth from "@/middlewares/auth";

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
  ...adminRoutes,
  ...storeRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(auth);

export default router;
