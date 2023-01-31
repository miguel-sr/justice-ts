import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import PartService, { IPartParams } from "@/services/part.service";
import CategoryService from "@/services/category.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminUpdatePart",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: <IPartParams>{
        category: 0,
        name: "",
        description: "",
        inventory: 0,
        limitPerOrder: 0,
        image: "",
      },
      id: "",
      Categories: null,
      isSubmitted: false,
    };
  },
  validations() {
    return {
      form: {
        category: { required },
        name: { required },
        description: { required },
        inventory: { required },
        limitPerOrder: { required },
        image: { required },
      },
    };
  },
  mounted() {
    this.getCategories();
    PartService.get(
      window.location.pathname.replaceAll("/admin/parts/", "")
    ).then((part: IPartParams) => {
      this.id = part.id;
      this.form.category = part.category;
      this.form.name = part.name;
      this.form.description = part.description;
      this.form.inventory = part.inventory;
      this.form.limitPerOrder = part.limitPerOrder;
      this.form.image = part.image;
    });
  },
  methods: {
    async getCategories() {
      this.Categories = await CategoryService.get();
    },
    async updatePart(id: string) {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }
        await PartService.update(id, this.form);
        this.$router.push("/admin/parts");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
