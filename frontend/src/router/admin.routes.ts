export default [
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/login/LoginPage.vue"),
  },
  {
    path: "/admin",
    name: "AdminIndexPage",
    component: () => import("../views/admin/AdminIndexPage.vue"),
    meta: {
      isAdmin: true,
    },
  },
  {
    path: "/admin/videos",
    name: "AdminManageVideos",
    component: () => import("../views/admin/Videos/manageVideos.vue"),
    meta: {
      isAdmin: true,
    },
  },
  {
    path: "/admin/videos/:id",
    name: "AdminUpdateVideos",
    component: () => import("../views/admin/Videos/updateVideo.vue"),
    meta: {
      isAdmin: true,
    },
  },
  {
    path: "/admin/tips",
    name: "AdminManageTips",
    component: () => import("../views/admin/Tips/manageTips.vue"),
    meta: {
      isAdmin: true,
    },
  },
  {
    path: "/admin/tips/:id",
    name: "AdminUpdateTip",
    component: () => import("../views/admin/Tips/updateTip.vue"),
    meta: {
      isAdmin: true,
    },
  },
];
