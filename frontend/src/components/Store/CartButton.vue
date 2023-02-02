<template>
  <button @click="$emit('enableCartWindow')" class="text-light">
    <i class="bi bi-cart align-middle"></i>
  </button>
</template>

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
  background: #ffffff;
}

@media (max-width: 991.98px) {
  button {
    font-size: 25px;
    width: 45px;
  }
}
</style>
