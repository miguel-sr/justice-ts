import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import MemberService, { IMemberParams } from "@/services/member.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminManageMembers",
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
      Members: null,
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
    this.getMembers();
  },
  methods: {
    updateMember(id: string) {
      this.$router.push(`/admin/members/${id}`);
    },
    async getMembers() {
      this.Members = await MemberService.get();
    },
    async deleteMember(id: string) {
      try {
        await MemberService.delete(id);
        this.getMembers();
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
    async postMember() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await MemberService.post(this.form);
        this.getMembers();
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
