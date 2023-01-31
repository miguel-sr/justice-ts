<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Editar categoria</h1>
      <!-- EDITAR CATEGORIA - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="updateCategory(id)">
        <div class="form-group mb-3">
          <label for="name"
            >Nome:
            <input
              type="text"
              id="name"
              name="name"
              class="form-control text-center"
              placeholder="ex:.. Vigas Pretas"
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
          <label for="slug"
            >Slug:
            <input
              type="text"
              id="slug"
              name="slug"
              class="form-control text-center"
              placeholder="ex:.. vigas-pretas"
              v-model="form.slug"
              :class="{ 'is-invalid': isSubmitted && v$.form.slug.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.slug.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório!
            </div>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
      <!-- EDITAR MEMBRO - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./updateCategory.ts"></script>

<style scoped>
h1 {
  padding: 2rem;
  color: var(--dark-blue);
}

label {
  width: 25vw;
}
</style>
