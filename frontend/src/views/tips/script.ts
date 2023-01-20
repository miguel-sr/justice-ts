import { defineComponent } from "vue";
import LoadingComponent from "../../components/Loading/LoadingComponent.vue";
import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import TipService from "@/services/tip.service";
import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "TipsView",
  components: {
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      tips: null,
      dataIsLoaded: false,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.tips = await TipService.get();
      } catch (error) {
        Alert.error("Erro ao carregar videos.");
      } finally {
        this.dataIsLoaded = true;
      }
    },
  },
});
