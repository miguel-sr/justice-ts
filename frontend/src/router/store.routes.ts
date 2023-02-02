export default [
  {
    path: "/pedido",
    name: "pedido",
    component: () => import("../views/store/Index/StoreMainPage.vue"),
  },
  {
    path: "/pedido/categoria/:slug",
    name: "category",
    component: () => import("../views/store/Category/PartsPerCategory.vue"),
  },
  {
    path: "/pedido/checkout",
    name: "checkout",
    component: () => import("../views/store/Checkout/CheckoutPage.vue"),
  },
];
