import { Alert } from "../../../lib/alert";
import { IPartParams } from "@/services/part.service";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardForProduct",
  data() {
    return {
      value: 0,
      isFocused: null,
    };
  },
  props: {
    Part: null,
  },
  methods: {
    push() {
      if (this.value === 0) {
        Alert.error("Selecione a quantidade!");
      } else {
        const item = <IPartParams>{
          id: this.Part.id,
          description: this.Part.description,
          image: this.Part.image,
        };
        this.$emit("update-cart", Object.assign(item, { amount: this.value }));
        Alert.success("Produto adicionado com sucesso!");
      }
    },
    watchValue(newValue: number) {
      if (this.Part.limitPerOrder < this.Part.inventory) {
        if (newValue > this.Part.limitPerOrder) {
          this.value = this.Part.limitPerOrder;
        } else if (newValue < 0) {
          this.value = 0;
        } else {
          this.value = newValue;
        }
      } else if (this.Part.limitPerOrder >= this.Part.inventory) {
        if (newValue > this.Part.inventory) {
          this.value = this.Part.inventory;
        } else if (newValue < 0) {
          this.value = 0;
        } else {
          this.value = newValue;
        }
      }
    },
    stepper(button: string) {
      switch (button) {
        case "increment":
          this.value = +this.value + 1;
          break;

        case "decrement":
          this.value = +this.value - 1;
          break;

        default:
          break;
      }
    },
  },
  watch: {
    value(newValue) {
      this.watchValue(newValue);
    },
  },
});
