import { defineComponent } from "vue";
import dayjs from "dayjs";
import SocialActionService from "@/services/social-action.service";
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
      itemsPerPage: 8,
      pages: [0],
    };
  },
  mounted() {
    this.loadData();
    this.calcPages();
  },
  methods: {
    changePage(page: number) {
      this.loadData(this.itemsPerPage * (page - 1));
    },
    async calcPages() {
      const response = await SocialActionService.getPagination();
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
        this.socialActions = await SocialActionService.getPagination(
          this.itemsPerPage,
          skip
        );
      } catch (error) {
        Alert.error("Erro ao carregar eventos.");
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
