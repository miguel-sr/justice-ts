import { defineComponent } from "vue";
import LoadingComponent from "../../components/Loading/LoadingComponent.vue";
import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import HeroComponent from "../../components/IndexPage/HeroComponent.vue";
import AboutComponent from "../../components/IndexPage/AboutComponent.vue";
import MembersComponent from "../../components/IndexPage/Members/MembersComponent.vue";
import SponsorsComponent from "../../components/IndexPage/Sponsors/SponsorsComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    LoadingComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    MembersComponent,
    SponsorsComponent,
    FooterComponent,
  },
  data() {
    return {
      membersIsLoaded: false,
      sponsorsIsloaded: false,
    };
  },
  methods: {
    sponsorsLoaded() {
      this.sponsorsIsloaded = true;
    },
    membersLoaded() {
      this.membersIsLoaded = true;
    },
  },
});
