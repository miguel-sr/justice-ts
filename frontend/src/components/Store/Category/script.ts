import { defineComponent } from "vue";
import CategoryService from "@/services/category.service";

export default defineComponent({
  name: "CategoryLink",
  data() {
    return {
      Categories: null,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    pushToCategory(slug: string) {
      this.$router.push(`/pedido/categoria/${slug}`);
    },
    async loadData() {
      this.Categories = await CategoryService.get();
    },
  },
});
