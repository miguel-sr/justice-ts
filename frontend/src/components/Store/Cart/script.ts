import { defineComponent } from "vue";
import { Alert } from "@/lib/alert";
import Swal from "sweetalert2";

export default defineComponent({
  name: "CartWindow",
  props: {
    items: null,
    emptyCart: null,
    cartState: null,
  },
  methods: {
    closeOrder() {
      this.$router.push({
        name: "checkout",
      });
    },
    deleteItem(id: string) {
      Swal.fire({
        title: "Tem certeza?",
        text: "Você não será capaz de reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, retirar do carrinho!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit("delete-item", id);
          Alert.success("O item foi removido com sucesso.");
        }
      });
    },
  },
});
