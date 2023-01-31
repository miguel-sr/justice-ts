import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import PartService, { IPartParams } from "@/services/part.service";
import CategoryService from "@/services/category.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminManageParts",
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
      Parts: [
        <IPartParams>{
          category: 0,
          name: "",
          description: "",
          inventory: 0,
          limitPerOrder: 0,
          image: "",
        },
      ],
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
    this.getParts();
  },
  methods: {
    filterParts(id: string) {
      if (!this.Parts) {
        throw new Error("Sem resultados de peças.");
      }
      return this.Parts.filter((part: IPartParams) => part.category === id);
    },
    updatePart(id: string) {
      this.$router.push(`/admin/parts/${id}`);
    },
    async getCategories() {
      this.Categories = await CategoryService.get();
    },
    async getParts() {
      this.Parts = await PartService.get();
    },
    async deletePart(id: string) {
      try {
        await PartService.delete(id);
        this.getParts();
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
    async postPart() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await PartService.post(this.form);
        this.getParts();
        this.isSubmitted = false;
        this.form.category = 0;
        this.form.name = "";
        this.form.description = "";
        this.form.inventory = 0;
        this.form.limitPerOrder = 0;
        this.form.image = "";
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
