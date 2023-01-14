import { defineComponent } from "vue";
import SponsorService from "@/services/server/sponsor.service";

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
      this.sponsors = await SponsorService.get();
    },
  },
});
