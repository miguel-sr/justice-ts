import { Alert } from "@/lib/alert";
import OrderService from "@/services/order.service";
import PartService from "@/services/part.service";
import { defineComponent } from "vue";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";

export default defineComponent({
  name: "manageOrders",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      Orders: null,
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      this.Orders = await OrderService.get();
    },
    async deleteOrder(id: string, cart: any) {
      try {
        await PartService.updateInventory("add", cart);
        await OrderService.delete(id);
        this.getOrders();
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
