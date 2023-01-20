import { defineComponent } from "vue";
import jwtService, { ITokenParams } from "../../services/jwt.service";
import UserService from "../../services/server/user.service";
import TogglerNavbar from "../Toggler/TogglerNavbar.vue";

export default defineComponent({
  name: "NavbarComponent",
  components: {
    TogglerNavbar,
  },
  data() {
    return {
      username: "",
      user: {} as ITokenParams,
    };
  },
  methods: {
    isUser() {
      if (localStorage.getItem("userToken")) {
        this.user = jwtService.decode();

        if (!this.user) {
          return false;
        }

        return true;
      }
    },
    isAdmin() {
      if (localStorage.getItem("userToken")) {
        if (this.user.credentials === "admin") {
          return true;
        }

        return false;
      }
    },
    logout() {
      UserService.logout().then(() => {
        this.$forceUpdate();
      });
    },
  },
});
