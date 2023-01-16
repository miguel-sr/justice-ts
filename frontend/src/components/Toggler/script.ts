import { defineComponent } from "vue";

export default defineComponent({
  name: "TogglerNavbar",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isActive = !this.isActive;
    },
  },
});
