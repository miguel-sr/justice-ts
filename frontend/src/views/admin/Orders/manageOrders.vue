<template>
  <div>
    <NavbarComponent />
    <section>
      <!-- GERENCIAR PEDIDOS - INÍCIO -->
      <h1 class="text-center">Pedidos:</h1>
      <div class="d-flex flex-wrap justify-content-center w-100">
        <div class="w-50 card m-3" v-for="order in Orders" :key="order.id">
          <div class="card-body text-center">
            <span class="card-text me-2"
              >Nome: <b>{{ order.name }}</b></span
            >
            <span class="cart-text ms-2"
              >Equipe:
              <b>
                {{ order.teamName }}
                #{{ order.teamNumber }}
              </b>
            </span>
            <p class="text-muted">{{ order.email }}</p>
            <p class="text-muted" style="text-align: justify">
              {{ order.text }}
            </p>
            <div class="w-100 mt-3">
              <div class="d-flex flex-wrap">
                <div
                  class="order-item w-50 border p-2"
                  v-for="item in order.cart"
                  :key="item.id"
                >
                  <div class="d-flex align-items-center flex-row w-100">
                    <div class="order-item-img w-25">
                      <img class="w-100" :src="item.image" :alt="item.name" />
                    </div>
                    <div class="order-item-description">
                      <p>{{ item.description }}</p>
                      <p>
                        <b>{{ item.amount }}</b> unidade(s)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button
                @click="deleteOrder(order.id, order.cart)"
                class="btn btn-danger btn-sm mt-3"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- EDITAR MEMBROS - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./script.ts"></script>

<style scoped>
h1:first-of-type {
  padding: 2rem;
}

h1 {
  color: var(--dark-blue);
}

.order-item-container {
  height: 80%;
  overflow-y: scroll;
}

.order-item-description {
  width: 65%;
  padding-left: 15px;
}

.order-item-description p:first-of-type {
  margin: 0;
  height: 50px;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
