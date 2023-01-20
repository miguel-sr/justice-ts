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
      videosIsLoaded: false,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.videos = await VideoService.get();
      } catch (error) {
        Alert.error("Erro ao carregar patrocinadores.");
      } finally {
        this.videosIsLoaded = true;
      }
    },
  },
});
