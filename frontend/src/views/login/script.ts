import { defineComponent } from "vue";
import UserService from "@/services/user.service";

import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import { Alert } from "@/lib/alert";

import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";

export default defineComponent({
  name: "LoginPage",
  components: { NavbarComponent, FooterComponent },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      isSubmitted: false,
      passwordType: "password",
    };
  },
  validations() {
    return {
      loginForm: {
        email: { required, email },
        password: { required },
      },
    };
  },
  methods: {
    async login() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await UserService.login(this.loginForm);
        this.$router.push("/admin");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
