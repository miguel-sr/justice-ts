import { defineComponent } from "vue";
import LoadingComponent from "../../components/Loading/LoadingComponent.vue";
import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import VideoService from "../../services/video.service";
import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "VideosPage",
  components: {
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      videos: null,
      dataIsLoaded: false,
      itemsPerPage: 4,
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
      const response = await VideoService.getPagination();
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
        this.videos = await VideoService.getPagination(this.itemsPerPage, skip);
      } catch (error) {
        Alert.error("Erro ao carregar vídeos.");
      } finally {
        this.dataIsLoaded = true;
      }
    },
  },
});
