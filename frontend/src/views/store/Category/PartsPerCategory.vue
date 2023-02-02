<template>
  <div>
    <NavbarComponent />
    <section>
      <div id="cart-button" class="btn">
        <CartButton @enableCartWindow="openCart" />
      </div>
      <div id="return-button" class="btn">
        <ReturnButton />
      </div>
      <div>
        <h1 class="text-center position-relative">{{ category.name }}</h1>
        <CartWindow
          @delete-item="deleteItem"
          @closeCart="closeCart"
          :cartState="cartState"
          :emptyCart="emptyCart"
          :items="cart"
        />
      </div>
      <div id="cards-container" class="w-100 gap-3">
        <CardForProduct
          v-for="part in Parts"
          :key="part.id"
          :Part="part"
          @update-cart="updateCart"
        />
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./PartsPerCategory.ts"></script>

<style scoped>
h1 {
  padding: 35px 0 35px 0;
}

h1,
h5 {
  color: var(--dark-blue);
}
.btn {
  position: absolute;
  top: 135px;
  z-index: 1;
}

#cart-button {
  right: 20px;
}

#return-button {
  left: 20px;
}

#cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

@media (max-width: 991.98px) {
  #cart-button {
    position: fixed;
    top: 45px;
    right: 90px;
    z-index: 3;
  }

  #cards-container {
    justify-content: center;
  }
}
</style>
