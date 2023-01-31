import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import CategoryService, { ICategoryParams } from "@/services/category.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminUpdateCategory",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: <ICategoryParams>{
        name: "",
        slug: "",
      },
      id: "",
      isSubmitted: false,
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        slug: { required },
      },
    };
  },
  mounted() {
    CategoryService.get(
      window.location.pathname.replaceAll("/admin/categories/", "")
    ).then((category: ICategoryParams) => {
      this.id = category.id;
      this.form.name = category.name;
      this.form.slug = category.slug;
    });
  },
  methods: {
    async updateCategory(id: string) {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }
        await CategoryService.update(id, this.form);
        this.$router.push("/admin/categories");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
