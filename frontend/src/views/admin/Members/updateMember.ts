import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import MemberService, { IMemberParams } from "@/services/member.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminUpdateMembers",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: <IMemberParams>{
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
    MemberService.get(
      window.location.pathname.replaceAll("/admin/members/", "")
    ).then((member: IMemberParams) => {
      this.id = member.id;
      this.form.name = member.name;
      this.form.role = member.role;
      this.form.text = member.text;
      this.form.image = member.image;
    });
  },
  methods: {
    async updateMember(id: string) {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }
        await MemberService.update(id, this.form);
        this.$router.push("/admin/members");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
