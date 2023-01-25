import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import TipService, { ITipParams } from "@/services/tip.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminManageTips",
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
      Tips: null,
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
    this.getTips();
  },
  methods: {
    updateTip(id: string) {
      this.$router.push(`/admin/tips/${id}`);
    },
    async getTips() {
      this.Tips = await TipService.get();
    },
    async deleteTip(id: string) {
      try {
        await TipService.delete(id);
        this.getTips();
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
    async postTip() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await TipService.post(this.form);
        this.getTips();
        this.isSubmitted = false;
        this.form.name = "";
        this.form.role = "";
        this.form.text = "";
        this.form.image = "";
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
