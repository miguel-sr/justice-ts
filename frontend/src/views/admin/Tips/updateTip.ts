import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import TipService, { ITipParams } from "@/services/tip.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminUpdateTip",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: <ITipParams>{
        name: "",
        role: "",
        text: "",
        image: "",
      },
      id: "",
      isSubmitted: false,
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        role: { required },
        text: { required },
        image: { required },
      },
    };
  },
  mounted() {
    TipService.get(
      window.location.pathname.replaceAll("/admin/tips/", "")
    ).then((tip: ITipParams) => {
      this.id = tip.id;
      this.form.name = tip.name;
      this.form.role = tip.role;
      this.form.text = tip.text;
      this.form.image = tip.image;
    });
  },
  methods: {
    async updateData(id: string) {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await TipService.update(id, this.form);
        this.$router.push("/admin/tips");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
