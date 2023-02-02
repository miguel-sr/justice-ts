<template>
  <div>
    <a
      v-for="item in Categories"
      :key="item.id"
      @click="pushToCategory(item.id)"
      class="nav-link p-1"
    >
      {{ item.name }}
    </a>
  </div>
</template>

<script src="./script.ts"></script>

<style scoped>
a {
  cursor: pointer;
}

a::before {
  background: url(https://sistema.sistemawbuy.com.br/arquivos/d6aeb297f9cdaa539ba6f5dded95faac/templates/layout-techbricks-v1-0/assets/icone1lego.png)
    center center no-repeat;
  margin-right: 5px;
  content: "";
  display: inline-block;
  width: 21px;
  height: 24px;
  vertical-align: bottom;
  background-size: 16px;
}
</style>
