<template>
  <div>
    <NavbarComponent />
    <section>
      <div id="cart-button">
        <CartButton @enableCartWindow="openCart()" />
      </div>
      <div>
        <h1 class="text-center position-relative">Catálago</h1>
        <CartWindow
          @delete-item="deleteItem"
          @closeCart="closeCart"
          :cartState="cartState"
          :emptyCart="emptyCart"
          :items="cart"
        />
      </div>
      <div id="container">
        <div id="categories-list">
          <h5>Categorias:</h5>
          <CategoryLink />
        </div>
        <div style="width: 100%">
          <div id="cards-container" class="d-flex flex-wrap gap-3">
            <CardForProduct
              v-for="part in Parts"
              :key="part._id"
              :Part="part"
              @update-cart="updateCart"
            />
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./script.ts"></script>

<style scoped>
h1 {
  padding: 35px 0 35px 0;
}

h1,
h5 {
  color: var(--dark-blue);
}

#container {
  display: flex;
  flex-direction: row;
}

#categories-list {
  background: var(--light-gray);
  margin-right: 25px;
  min-width: 250px;
  padding: 15px;
}

#cart-button {
  position: absolute;
  right: 20px;
  top: 135px;
  z-index: 1;
}

#cards-container {
  justify-content: start;
}

@media (max-width: 991.98px) {
  #container {
    flex-direction: column;
  }

  #categories-list {
    background: #fff;
    border-bottom: 2px solid var(--dark-blue);
    width: 100%;
    margin-bottom: 50px;
  }

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
