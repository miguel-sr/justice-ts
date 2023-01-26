import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import SponsorService, { ISponsorParams } from "@/services/sponsor.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminManageSponsors",
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
      Sponsors: null,
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
    this.getSponsors();
  },
  methods: {
    updateSponsor(id: string) {
      this.$router.push(`/admin/sponsors/${id}`);
    },
    async getSponsors() {
      this.Sponsors = await SponsorService.get();
    },
    async deleteSPonsor(id: string) {
      try {
        await SponsorService.delete(id);
        this.getSponsors();
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
    async submitData() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await SponsorService.post(this.form);
        this.getSponsors();
        this.isSubmitted = false;
        this.form.name = "";
        this.form.site = "";
        this.form.logo = "";
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
