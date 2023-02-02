<template>
  <div class="position-absolute" style="right: 20px; top: 135px">
    <Transition>
      <div
        v-show="cartState"
        class="shadow-effect bg-dark position-fixed"
      ></div>
    </Transition>
    <Transition>
      <div
        v-show="cartState"
        class="container position-fixed"
        style="background: #fff"
      >
        <h3 class="mt-3 text-center position-relative">
          Carrinho
          <button
            @click="$emit('closeCart')"
            class="position-absolute bg-light"
            style="right: 0"
          >
            <i class="bi bi-x-circle-fill"></i>
          </button>
        </h3>
        <!-- CART ITEM -->
        <p v-show="emptyCart && cartState" class="text-center mt-3">
          Vai sair de mãos vazias? Adicione um produto.
        </p>
        <div class="cart-item-container">
          <div
            v-show="cartState"
            class="cart-item"
            v-for="item in items"
            :key="item.id"
          >
            <hr />
            <div class="d-flex align-items-center flex-row w-100">
              <div class="cart-item-img w-25">
                <img class="w-100" :src="item.image" :alt="item.name" />
              </div>
              <div class="cart-item-description">
                <p>{{ item.description }}</p>
                <p>
                  <b>{{ item.amount }}</b> unidade(s)
                </p>
              </div>
              <button @click="deleteItem(item.id)" class="ms-2 bg-light">
                <i class="bi bi-trash3-fill text-danger"></i>
              </button>
            </div>
          </div>
        </div>
        <div v-show="!emptyCart && cartState" class="mt-3 text-center">
          <hr />
          <button
            @click="closeOrder()"
            style="border-radius: 50px"
            class="btn btn-primary"
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script src="./script.ts"></script>

<style scoped>
.container {
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 20px;
  z-index: 4;
}

.v-enter-active,
.v-leave-active {
  transition: width 0.5s, padding 0.5s;
}

.v-enter-from,
.v-leave-to {
  width: 0;
  padding: 0;
}

.shadow-effect {
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}

.cart-item-container {
  height: 80%;
  overflow-y: scroll;
}

.cart-item-description {
  width: 65%;
  padding-left: 15px;
}

.cart-item-description p {
  margin: 0;
}
</style>
