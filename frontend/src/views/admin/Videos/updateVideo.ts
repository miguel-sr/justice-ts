import { defineComponent } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import VideoService, { IVideoParams } from "@/services/video.service";

import { Alert } from "@/lib/alert";

export default defineComponent({
  name: "AdminUpdateVideo",
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
      id: "",
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
    VideoService.get(
      window.location.pathname.replaceAll("/admin/videos/", "")
    ).then((video) => {
      this.id = video.id;
      this.form.title = video.title;
      this.form.description = video.description;
      this.form.video = video.video;
    });
  },
  methods: {
    async updateVideo(id: string) {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }
        await VideoService.update(id, this.form);
        this.$router.push("/admin/videos");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
