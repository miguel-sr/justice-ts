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
      itemsPerPage: 6,
      pages: [0],
    };
  },
  mounted() {
    if (process.env.VUE_APP_TIPS_PER_PAGE) {
      this.itemsPerPage = parseInt(process.env.VUE_APP_TIPS_PER_PAGE);
    }

    this.loadData();
    this.calcPages();
  },
  methods: {
    changePage(page: number) {
      this.loadData(this.itemsPerPage * (page - 1));
    },
    async calcPages() {
      const response = await TipService.getPagination();
      const numberOfDocuments = response.numberOfDocuments;
      const numberOfPages = Math.ceil(numberOfDocuments / this.itemsPerPage);
      this.pages.length = 0;
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    async loadData(skip = 0) {
      try {
        window.scrollTo(0, 0);
        this.dataIsLoaded = false;
        this.tips = await TipService.getPagination(this.itemsPerPage, skip);
      } catch (error) {
        Alert.error("Erro ao carregar dicas.");
      } finally {
        this.dataIsLoaded = true;
      }
    },
  },
});
