<template>
  <div class="card">
    <img class="card-img-top p-2" :src="Part.image" :alt="Part.name" />
    <div class="card-body">
      <h5 class="card-title">{{ Part.name }}</h5>
      <p class="description text-muted">
        {{ Part.description }}
      </p>
      <div v-if="Part.inventory === 0">
        <button class="btn btn-danger w-100" style="border-radius: 50px">
          Indisponível
        </button>
        <p class="card-title text-center mt-1 text-muted">
          <b>{{ Part.inventory }}</b> unidade(s)
        </p>
      </div>
      <div v-if="Part.inventory !== 0">
        <!-- AMOUNT INPUT - INICIO -->
        <div class="container text-center">
          <label for="amount" class="w-100">
            <button id="decrement" @click="stepper('decrement')">-</button>
            <input
              class="text-center"
              type="number"
              min="0"
              :max="Part.limitPerOrder"
              v-model="value"
            />
            <button id="increment" @click="stepper('increment')">+</button>
          </label>
        </div>
        <!-- AMOUNT INPUT - FIM -->
        <p
          class="card-title text-center mt-1 text-muted"
          v-if="Part.limitPerOrder < Part.inventory"
        >
          <b>{{ Part.limitPerOrder }}</b> unidade(s)
        </p>
        <p
          class="card-title text-center mt-1 text-muted"
          v-if="Part.limitPerOrder >= Part.inventory"
        >
          <b>{{ Part.inventory }}</b> unidade(s)
        </p>
        <button
          @click="push()"
          class="btn btn-primary w-100"
          style="border-radius: 50px"
        >
          Adicionar
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./script.ts"></script>

<style scoped>
.card {
  max-width: 16vw;
}

.card-title {
  color: var(--dark-blue);
}

.card-img-top {
  width: 70%;
  margin: 0 auto;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.container {
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
  font-size: 25px;
  border-radius: 50px;
  border: 2px solid #3264fe;
}

.description {
  height: 50px;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 5px;
}

input[type="number"] {
  -moz-appearance: textfield;
  color: #202020;
  width: 60%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#increment,
#decrement {
  color: #3264fe;
  background: #ffffff;
  border: none;
  cursor: pointer;
}

@media (max-width: 575.98px) {
  .card {
    max-width: 40vw;
  }

  .container {
    font-size: 25px;
  }
}

@media (min-width: 576px) and (max-width: 768.98px) {
  .card {
    max-width: 25vw;
  }

  .container {
    font-size: 20px;
  }
}

@media (min-width: 769px) and (max-width: 991.98px) {
  .card {
    max-width: 20vw;
  }

  .container {
    font-size: 20px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .card {
    max-width: 20vw;
  }
}

@media (min-width: 1200px) and (max-width: 1439.98px) {
  .card {
    max-width: 15vw;
  }
}
</style>
