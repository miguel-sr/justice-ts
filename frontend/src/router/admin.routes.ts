export default [
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/login/LoginPage.vue"),
  },
  {
    path: "/admin",
    name: "AdminIndexPage",
    component: () => import("../views/AdminIndexPage.vue"),
    meta: {
      isAdmin: true,
    },
  },
];
