import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import VideoService, { IVideoParams } from "@/services/video.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminManageVideos",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: <IVideoParams>{
        title: "",
        description: "",
        video: "",
      },
      Videos: null,
      isSubmitted: false,
    };
  },
  validations() {
    return {
      form: {
        title: { required },
        description: { required },
        video: { required },
      },
    };
  },
  mounted() {
    this.getVideos();
  },
  methods: {
    patchVideo(id: string) {
      this.$router.push(`/admin/videos/${id}`);
    },
    async getVideos() {
      this.Videos = await VideoService.get();
    },
    async deleteVideo(id: string) {
      try {
        await VideoService.delete(id);
        this.getVideos();
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
    async postVideo() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        await VideoService.post(this.form);
        this.getVideos();
        this.isSubmitted = false;

        this.form.title = "";
        this.form.description = "";
        this.form.video = "";
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
