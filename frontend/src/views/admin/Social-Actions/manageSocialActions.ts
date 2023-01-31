import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import SocialActionService, {
  ISocialActionParams,
} from "@/services/social-action.service";

import TransformDateToYYYYMMDD from "@/utils/TransformDateTo-YYYY-MM-DD";
import TransformDateToDDMMYYYY from "@/utils/TransformDateTo-DD-MM-YYYY";
import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminManageSocialActions",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: <ISocialActionParams>{
        title: "",
        description: "",
        image: "",
        date: TransformDateToYYYYMMDD(new Date()),
      },
      SocialActions: null,
      isSubmitted: false,
    };
  },
  validations() {
    return {
      form: {
        title: { required },
        description: { required },
        image: { required },
        date: { required },
      },
    };
  },
  mounted() {
    this.getSocialActions();
  },
  methods: {
    formatDate(date: Date) {
      return TransformDateToDDMMYYYY(date);
    },
    updateSocialAction(id: string) {
      this.$router.push(`/admin/events/${id}`);
    },
    async getSocialActions() {
      this.SocialActions = await SocialActionService.get();
    },
    async deleteSocialAction(id: string) {
      try {
        await SocialActionService.delete(id);
        this.getSocialActions();
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
    async postSocialAction() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await SocialActionService.post(this.form);
        this.getSocialActions();
        this.isSubmitted = false;
        this.form.title = "";
        this.form.description = "";
        this.form.image = "";
        this.form.date = TransformDateToYYYYMMDD(new Date());
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
