<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Nova categoria</h1>
      <!-- NOVO MEMBRO - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="postCategory()">
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
      <!-- NOVO MEMBRO - FIM -->
      <hr class="my-5" />
      <!-- EDITAR MEMBROS - INÍCIO -->
      <h1 class="text-center">Editar categorias</h1>
      <div class="container">
        <div class="box-container d-flex flex-wrap justify-content-center">
          <div class="card m-3" v-for="item in Categories" :key="item.id">
            <div class="card-body">
              <h4 class="text-center card-title">{{ item.name }}</h4>
              <div class="text-center">
                <button
                  @click="updateCategory(item.id)"
                  class="btn btn-primary btn-sm"
                >
                  Editar
                </button>
                <button
                  @click="deleteCategory(item.id)"
                  class="btn btn-danger btn-sm"
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- EDITAR MEMBROS - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./manageCategories.ts"></script>

<style scoped>
h1:first-of-type {
  padding: 2rem;
}

h1 {
  color: var(--dark-blue);
}

label {
  width: 25vw;
}

.card button:last-of-type {
  margin-left: 20px;
}
</style>
