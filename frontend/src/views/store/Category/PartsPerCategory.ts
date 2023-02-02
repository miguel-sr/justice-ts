import { defineComponent } from "vue";
import CategoryService, { ICategoryParams } from "@/services/category.service";
import PartService, { IPartParams } from "@/services/part.service";
import CartButton from "../../../components/Store/CartButton.vue";
import CartWindow from "../../../components/Store/Cart/CartWindow.vue";
import ReturnButton from "../../../components/Store/ReturnButton.vue";
import CardForProduct from "../../../components/Store/Product/CardForProduct.vue";
import { ICartItemParams } from "../Index/script";

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";

export default defineComponent({
  name: "CategoryView",
  components: {
    CardForProduct,
    CartWindow,
    CartButton,
    ReturnButton,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      Parts: null,
      category: <ICategoryParams>{
        name: "",
      },
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
      await CategoryService.get(
        window.location.pathname.replaceAll("/pedido/categoria/", "")
      ).then((category: ICategoryParams) => {
        this.category.name = category.name;
      });
      const parts = await PartService.get();
      this.Parts = parts.filter(
        (part: IPartParams) =>
          part.category ===
          window.location.pathname.replaceAll("/pedido/categoria/", "")
      );
    },
  },
});
