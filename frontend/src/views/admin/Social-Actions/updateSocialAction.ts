import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import SocialActionService, {
  ISocialActionParams,
} from "@/services/social-action.service";

import { Alert } from "@/lib/alert";
import TransformDateToYYYYMMDD from "@/utils/TransformDateTo-YYYY-MM-DD";

export default defineComponent({
  name: "AdminUpdateSocialAction",
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
        date: "",
      },
      id: "",
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
    SocialActionService.get(
      window.location.pathname.replaceAll("/admin/events/", "")
    ).then((socialAction: ISocialActionParams) => {
      this.id = socialAction.id;
      this.form.title = socialAction.title;
      this.form.description = socialAction.description;
      this.form.image = socialAction.image;
      this.form.date = TransformDateToYYYYMMDD(socialAction.date);
    });
  },
  methods: {
    async updateSocialAction(id: string) {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }
        await SocialActionService.update(id, this.form);
        this.$router.push("/admin/events");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
