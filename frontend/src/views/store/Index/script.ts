import { defineComponent } from "vue";
import PartService from "@/services/part.service";

import LoadingComponent from "../../../components/Loading/LoadingComponent.vue";
import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../../components/FooterComponent.vue";
import CartButton from "../../../components/Store/CartButton.vue";
import CategoryLink from "../../../components/Store/Category/CategoryLink.vue";
import CardForProduct from "../../../components/Store/Product/CardForProduct.vue";
import CartWindow from "@/components/Store/Cart/CartWindow.vue";

import { Alert } from "@/lib/alert";

export interface ICartItemParams {
  id: string;
  description: string;
  image: string;
  amount: number;
}

export default defineComponent({
  name: "StoreMainPage",
  components: {
    LoadingComponent,
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
      dataIsLoaded: false,
      itemsPerPage: 25,
      pages: [0],
    };
  },
  mounted() {
    this.cart.length = 0;
    this.loadData();
    this.calcPages();

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
    changePage(page: number) {
      this.loadData(this.itemsPerPage * (page - 1));
    },
    async calcPages() {
      const response = await PartService.getPagination();
      const numberOfDocuments = response.numberOfDocuments;
      const numberOfPages = Math.ceil(numberOfDocuments / this.itemsPerPage);

      this.pages.length = 0;
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    async loadData(skip = 0) {
      try {
        window.scrollTo(0, 0);
        this.dataIsLoaded = false;
        this.Parts = await PartService.getPagination(this.itemsPerPage, skip);
      } catch (error) {
        Alert.error("Erro ao carregar peças.");
      } finally {
        this.dataIsLoaded = true;
      }
    },
  },
});
