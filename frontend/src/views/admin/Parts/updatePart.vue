<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Editar peça</h1>
      <!-- EDITAR PEÇA - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="updatePart(id)">
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
              <option selected disabled value="0">Selecione:</option>
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
          <label for="url"
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
      <!-- EDITAR PEÇA - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./updatePart.ts"></script>

<style scoped>
h1 {
  padding: 2rem;
  color: var(--dark-blue);
}

label {
  width: 25vw;
}

textarea {
  text-align: justify;
}
</style>
