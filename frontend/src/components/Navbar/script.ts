import { defineComponent } from "vue";
import jwtService, { ITokenParams } from "../../lib/jwt";
import UserService from "../../services/user.service";
import TogglerNavbar from "../Toggler/TogglerNavbar.vue";

export default defineComponent({
  name: "NavbarComponent",
  components: {
    TogglerNavbar,
  },
  data() {
    return {
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
        localStorage.removeItem("userToken");
        this.$forceUpdate();
      });
    },
  },
});
