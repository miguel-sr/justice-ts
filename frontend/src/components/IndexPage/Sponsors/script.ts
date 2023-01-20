import { defineComponent } from "vue";
import SponsorService from "@/services/server/sponsor.service";
import alertService from "@/services/alert.service";

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
        alertService.error("Erro ao carregar patrocinadores.");
      } finally {
        this.$emit("sponsorsLoaded");
      }
    },
  },
});
