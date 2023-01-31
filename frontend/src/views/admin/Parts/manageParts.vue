<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Nova peça</h1>
      <!-- NOVO PEÇAS - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="postPart()">
        <div class="form-group mb-3">
          <label for="category"
            >Categoria:
            <select
              name="category"
              id="category"
              class="form-select"
              v-model="form.category"
              :class="{ 'is-invalid': isSubmitted && v$.form.category.$error }"
            >
              <option disabled>Selecione:</option>
              <option
                v-for="category in Categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
            <div
              v-if="isSubmitted && v$.form.category.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório!
            </div>
          </label>
        </div>
        <div class="form-group mb-3">
          <label for="name"
            >Nome:
            <input
              type="text"
              id="name"
              name="name"
              class="form-control text-center"
              placeholder="Digite o nome"
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
        <div class="form-group mb-3">
          <label for="description"
            >Descrição:
            <br />
            <textarea
              name="description"
              id="description"
              class="border p-3 w-100"
              v-model="form.description"
              :class="{
                'is-invalid': isSubmitted && v$.form.description.$error,
              }"
            ></textarea>
            <div
              v-if="isSubmitted && v$.form.description.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório!
            </div>
          </label>
        </div>
        <div class="form-group mb-3">
          <label for="inventory"
            >Estoque:
            <input
              type="number"
              id="inventory"
              name="inventory"
              class="form-control text-center"
              placeholder="Quantidade de Peças"
              v-model="form.inventory"
              :class="{ 'is-invalid': isSubmitted && v$.form.inventory.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.inventory.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório!
            </div>
          </label>
        </div>
        <div class="form-group mb-3">
          <label for="limitPerOrder"
            >Limite por pedido:
            <input
              type="number"
              id="limitPerOrder"
              name="limitPerOrder"
              class="form-control text-center"
              placeholder="Quantidade limite por pedido"
              v-model="form.limitPerOrder"
              :class="{
                'is-invalid': isSubmitted && v$.form.limitPerOrder.$error,
              }"
            />
            <div
              v-if="isSubmitted && v$.form.limitPerOrder.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório!
            </div>
          </label>
        </div>
        <div class="form-group mb-5">
          <label for="image"
            >URL da Imagem:
            <input
              type="text"
              id="image"
              name="image"
              class="form-control text-center"
              placeholder="Link para o Imagem"
              v-model="form.image"
              :class="{ 'is-invalid': isSubmitted && v$.form.image.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.image.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório!
            </div>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
      <!-- NOVO PEÇAS - FIM -->
      <hr class="my-5" />
      <!-- EDITAR PEÇAS - INÍCIO -->
      <h1 class="text-center">Editar peças</h1>
      <div class="container">
        <center
          class="mt-5 border"
          v-for="category in Categories"
          :key="category.id"
        >
          <h3>{{ category.name }}</h3>
          <div class="box-container d-flex flex-wrap justify-content-center">
            <div
              class="card m-3"
              v-for="part in filterParts(category.id)"
              :key="part.id"
            >
              <div class="card-body position-relative">
                <h4 class="card-title mb-3">{{ part.name }}</h4>
                <p class="text-muted mb-3">{{ part.description }}</p>
                <!-- INÍCIO - ESTOQUE -->
                <p class="text-muted mb-1" v-if="part.inventory == 1">
                  <b>{{ part.inventory }}</b> unidade disponível
                </p>
                <p
                  class="text-muted mb-1"
                  v-if="part.inventory > 1 || part.inventory == 0"
                >
                  <b>{{ part.inventory }}</b> unidades disponíveis
                </p>
                <!-- FIM - ESTOQUE -->
                <!-- INÍCIO - LIMITE -->
                <p class="text-muted mb-3" v-if="part.limitPerOrder == 1">
                  <b>{{ part.limitPerOrder }}</b> unidade por pedido
                </p>
                <p class="text-muted mb-3" v-if="part.limitPerOrder > 1">
                  <b>{{ part.limitPerOrder }}</b> unidades por pedido
                </p>
                <!-- FIM - LIMITE -->
                <div class="text-center">
                  <button
                    @click="updatePart(part.id)"
                    class="btn btn-primary btn-sm"
                  >
                    Editar
                  </button>
                  <button
                    @click="deletePart(part.id)"
                    class="btn btn-danger btn-sm"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
      <!-- EDITAR PEÇAS - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./manageParts.ts"></script>

<style scoped>
h1:first-of-type {
  padding: 2rem;
}

h1,
h2,
h3 {
  color: var(--dark-blue);
}

label {
  width: 25vw;
}

textarea {
  text-align: justify;
}

::-webkit-scrollbar {
  width: 0;
}

.container center {
  padding: 25px;
}

.card button:last-of-type {
  margin-left: 20px;
}
</style>
