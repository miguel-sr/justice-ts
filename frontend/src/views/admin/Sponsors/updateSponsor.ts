import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import SponsorService, { ISponsorParams } from "@/services/sponsor.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminUpdateSponsor",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: <ISponsorParams>{
        name: "",
        site: "",
        logo: "",
      },
      id: "",
      isSubmitted: false,
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        site: { required },
        logo: { required },
      },
    };
  },
  mounted() {
    SponsorService.get(
      window.location.pathname.replaceAll("/admin/sponsors/", "")
    ).then((sponsor) => {
      this.id = sponsor.id;
      this.form.name = sponsor.name;
      this.form.site = sponsor.site;
      this.form.logo = sponsor.logo;
    });
  },
  methods: {
    async updateSponsor(id: string) {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }
        await SponsorService.update(id, this.form);
        this.$router.push("/admin/sponsors");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
