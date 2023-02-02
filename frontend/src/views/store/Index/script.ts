import PartService from "@/services/part.service";
import CategoryLink from "../../../components/Store/Category/CategoryLink.vue";
import CardForProduct from "../../../components/Store/Product/CardForProduct.vue";
import CartWindow from "@/components/Store/Cart/CartWindow.vue";
import CartButton from "../../../components/Store/CartButton.vue";
import { defineComponent } from "vue";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";

export interface ICartItemParams {
  id: string;
  description: string;
  image: string;
  amount: number;
}

export default defineComponent({
  name: "StoreMainPage",
  components: {
    NavbarComponent,
    FooterComponent,
    CategoryLink,
    CardForProduct,
    CartWindow,
    CartButton,
  },
  data() {
    return {
      Categories: null,
      Parts: null,
      cart: [
        <ICartItemParams>{
          id: "",
          description: "",
          image: "",
          amount: 0,
        },
      ],
      emptyCart: false,
      cartState: false,
    };
  },
  mounted() {
    this.cart.length = 0;
    this.loadData();

    if (localStorage.getItem("cart")) {
      this.cart = JSON.parse(localStorage.getItem("cart")!);
    }

    if (this.cart.length !== 0) {
      this.emptyCart = false;
    }

    if (this.cart.length === 0) {
      this.emptyCart = true;
    }
  },
  methods: {
    checkEmptyCart() {
      if (this.cart.length !== 0) {
        this.emptyCart = false;
      }

      if (this.cart.length === 0) {
        this.emptyCart = true;
      }

      this.openCart();
    },
    updateCart(newItem: ICartItemParams) {
      if (this.cart.map((item) => item.id).includes(newItem.id)) {
        this.cart = this.cart.filter((item) => item.id !== newItem.id);
        this.cart.push(newItem);
        this.checkEmptyCart();
        localStorage.setItem("cart", JSON.stringify(this.cart));
        return;
      }

      this.cart.push(newItem);
      this.checkEmptyCart();
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    deleteItem(id: string) {
      this.cart = this.cart.filter((item) => item.id !== id);
      this.checkEmptyCart();
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    openCart() {
      this.cartState = true;
    },
    closeCart() {
      this.cartState = false;
    },
    async loadData() {
      this.Parts = await PartService.get();
    },
  },
});
