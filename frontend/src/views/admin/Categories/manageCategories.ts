import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import CategoryService, { ICategoryParams } from "@/services/category.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminManageCategories",
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
      Categories: null,
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
    this.getCategories();
  },
  methods: {
    updateCategory(id: string) {
      this.$router.push(`/admin/categories/${id}`);
    },
    async getCategories() {
      this.Categories = await CategoryService.get();
    },
    async deleteCategory(id: string) {
      try {
        await CategoryService.delete(id);
        this.getCategories();
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
    async postCategory() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await CategoryService.post(this.form);
        this.getCategories();
        this.isSubmitted = false;
        this.form.name = "";
        this.form.slug = "";
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
