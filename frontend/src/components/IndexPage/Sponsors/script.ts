import { defineComponent } from "vue";
import { Alert } from "@/lib/alert";
import SponsorService from "@/services/sponsor.service";

export default defineComponent({
  name: "SponsorsComponent",
  data() {
    return {
      sponsors: null,
    };
  },
  mounted() {
    this.getSponsors();
  },
  methods: {
    async getSponsors() {
      try {
        this.sponsors = await SponsorService.get();
      } catch (error) {
        Alert.error("Erro ao carregar patrocinadores.");
      } finally {
        this.$emit("sponsorsLoaded");
      }
    },
  },
});
