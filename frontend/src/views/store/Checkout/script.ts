import { defineComponent } from "vue";
import Swal from "sweetalert2";
import { Alert } from "../../../lib/alert";
import OrderService from "../../../services/order.service";
import PartService from "../../../services/part.service";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { ICartItemParams } from "../Index/script";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";

export default defineComponent({
  name: "CheckoutView",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        name: "",
        teamName: "",
        teamNumber: "",
        email: "",
        reason: "",
        cart: [
          <ICartItemParams>{
            id: "",
            description: "",
            amount: 0,
            image: "",
          },
        ],
      },
      isSubmitted: false,
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        teamName: { required },
        teamNumber: { required },
        email: { required, email },
        text: { required },
      },
    };
  },
  mounted() {
    if (!localStorage.getItem("cart")) {
      this.$router.push("/loja");
    }

    this.form.cart = JSON.parse(localStorage.getItem("cart")!);
  },
  methods: {
    async submitOrder() {
      try {
        const promises = this.form.cart.map(async (item) => {
          const data = await PartService.get(item.id);
          if (item.amount > data.inventory) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              html: data.description + "<br><b>Fora de estoque!</b>",
            });
            this.form.cart = this.form.cart.filter(
              (cartItem) => cartItem.id !== item.id
            );
            localStorage.setItem("cart", JSON.stringify(this.form.cart));
            return true;
          }
          return false;
        });

        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Alert.error("Você precisa incluir todos os campos obrigatórios!");
          return;
        }

        Promise.all(promises).then(async (results) => {
          if (!results.includes(true)) {
            await OrderService.post(this.form);
            await PartService.updateInventory("remove", this.form.cart);
            localStorage.removeItem("cart");
          }
        });

        this.$router.push("/");
      } catch (err) {
        Alert.error("Alguma coisa deu errado aqui!");
      }
    },
  },
});
