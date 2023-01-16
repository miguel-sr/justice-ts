import { defineComponent } from "vue";
import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import VideoService from "../../services/server/video.service";

export default defineComponent({
  name: "VideosPage",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      videos: null,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.videos = await VideoService.get();
    },
  },
});
