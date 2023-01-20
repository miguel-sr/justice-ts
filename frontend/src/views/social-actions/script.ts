import { defineComponent } from "vue";
import dayjs from "dayjs";
import socialActionService from "@/services/social-action.service";
import LoadingComponent from "../../components/Loading/LoadingComponent.vue";
import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "SocialActionsPage",
  components: {
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      socialActions: null,
      dataIsLoaded: false,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.socialActions = await socialActionService.get();
      } catch (error) {
        Alert.error("Erro ao carregar videos.");
      } finally {
        this.dataIsLoaded = true;
      }
    },
    formatDate(date: string) {
      if (date === undefined) {
        return "Data não definida";
      }
      return dayjs(date).startOf("day").format("DD/MM/YYYY");
    },
  },
});
