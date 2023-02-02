<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="p-5 text-center">Checkout</h1>
      <div class="container d-flex flex-row">
        <form class="w-50 me-5 text-center" v-on:submit.prevent="">
          <h4 class="mt-4 p-2">Contato:</h4>
          <div class="d-flex">
            <div class="form-group mb-3" style="width: 49%">
              <label class="w-100" for="name"
                >Nome:
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control text-center"
                  placeholder="Digite seu nome"
                  v-model="form.name"
                  :class="{ 'is-invalid': isSubmitted && v$.form.name.$error }"
                />
                <div
                  v-if="isSubmitted && v$.form.name.required"
                  class="invalid-feedback"
                >
                  Este campo é obrigatório!
                </div>
              </label>
            </div>
            <div class="form-group mb-3 ms-auto" style="width: 49%">
              <label class="w-100" for="teamName"
                >Nome da equipe:
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  class="form-control text-center"
                  placeholder="Digite o nome da sua equipe"
                  v-model="form.teamName"
                  :class="{
                    'is-invalid': isSubmitted && v$.form.teamName.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && v$.form.teamName.required"
                  class="invalid-feedback"
                >
                  Este campo é obrigatório!
                </div>
              </label>
            </div>
          </div>
          <div class="d-flex">
            <div class="form-group mb-3" style="width: 49%">
              <label class="w-100" for="numberTeam"
                >Número da equipe:
                <input
                  type="number"
                  id="numberTeam"
                  name="numberTeam"
                  class="form-control text-center"
                  placeholder="Digite o número da equipe"
                  v-model="form.teamNumber"
                  :class="{
                    'is-invalid': isSubmitted && v$.form.teamNumber.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && v$.form.teamNumber.required"
                  class="invalid-feedback"
                >
                  Este campo é obrigatório!
                </div>
              </label>
            </div>
            <div class="form-group mb-3 ms-auto" style="width: 49%">
              <label class="w-100" for="email"
                >E-mail:
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control text-center"
                  placeholder="Digite o e-mail da equipe"
                  v-model="form.email"
                  :class="{ 'is-invalid': isSubmitted && v$.form.email.$error }"
                />
                <div
                  v-if="isSubmitted && v$.form.email.required"
                  class="invalid-feedback"
                >
                  Este campo é obrigatório!
                </div>
              </label>
            </div>
          </div>
          <div class="form-group mb-3 w-100">
            <label class="w-100" for="text"
              >Qual a finalidade deste pedido?
              <textarea
                type="text"
                id="text"
                name="text"
                class="form-control"
                style="text-align: justify"
                rows="5"
                placeholder="Digite o motivo deste pedido"
                v-model="form.text"
                :class="{ 'is-invalid': isSubmitted && v$.form.text.$error }"
              ></textarea>
              <div
                v-if="isSubmitted && v$.form.text.required"
                class="invalid-feedback"
              >
                Este campo é obrigatório!
              </div>
            </label>
          </div>
          <button
            @click="submitOrder"
            type="submit"
            class="btn btn-primary w-50"
          >
            Solicitar pedido
          </button>
        </form>
        <div class="w-50 text-center">
          <h4 class="mt-4 p-2">Resumo do Pedido:</h4>
          <div class="d-flex flex-wrap">
            <div
              class="cart-item w-50 border p-2"
              v-for="item in form.cart"
              :key="item.id"
            >
              <div class="d-flex align-items-center flex-row w-100">
                <div class="cart-item-img w-25">
                  <img class="w-100" :src="item.image" />
                </div>
                <div class="cart-item-description">
                  <p>{{ item.description }}</p>
                  <p>
                    <b>{{ item.amount }}</b> unidade(s)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./script.ts"></script>

<style scoped>
h1,
h4 {
  color: var(--dark-blue);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.cart-item-container {
  height: 80%;
  overflow-y: scroll;
}

.cart-item-description {
  width: 65%;
  padding-left: 15px;
}

.cart-item-description p:first-of-type {
  margin: 0;
  height: 50px;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
