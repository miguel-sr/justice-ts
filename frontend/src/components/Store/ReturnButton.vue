<template>
  <button @click="pushToMain()" class="text-light">
    <i class="bi bi-arrow-left align-middle"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReturnButton",
  methods: {
    pushToMain() {
      this.$router.push({
        name: "pedido",
      });
    },
  },
});
</script>

<style scoped>
button {
  font-size: 30px;
  background: #3264fe;
  border: 2px solid transparent;
  border-radius: 50%;
  width: 60px;
  aspect-ratio: 1/1;
  transition: 0.5s;
}

button:hover {
  color: #3264fe !important;
  border-color: #3264fe;
  background: var(--white);
}

@media (max-width: 991.98px) {
  button {
    font-size: 25px;
    width: 45px;
  }
}
</style>
