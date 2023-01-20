import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import jwtService from "@/lib/jwt";
import { Alert } from "@/lib/alert";

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (to.matched.some((record) => record.meta.isAdmin)) {
    if (localStorage.getItem("userToken") == null) {
      next({
        path: "/login",
      });
    } else {
      const user = jwtService.decode();
      if (user.credentials === "admin") {
        next();
      } else {
        Alert.error("Permissões insuficientes.");
        next({
          path: "/",
        });
      }
    }
  } else {
    next();
  }
};
