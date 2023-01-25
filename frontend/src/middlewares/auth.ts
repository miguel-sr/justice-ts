import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import jwtService from "@/lib/jwt";
import { Alert } from "@/lib/alert";
import UserService from "@/services/user.service";

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
      UserService.verifyToken().then((response) => {
        if (response) {
          const user = jwtService.decode();
          if (user.credentials === "admin") {
            next();
          } else {
            Alert.error("Permissões insuficientes.");
            next({
              path: "/",
            });
          }
        } else {
          localStorage.removeItem("userToken");
          next({
            path: "/login",
          });
        }
      });
    }
  } else {
    next();
  }
};
