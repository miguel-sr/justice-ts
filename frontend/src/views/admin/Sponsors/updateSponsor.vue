<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Editar patrocinador</h1>
      <!-- EDITAR MEMBRO - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="updateSponsor(id)">
        <input type="hidden" name="id" :v-model="form._id" />
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
          <label for="site"
            >Site do Patrocinador:
            <input
              type="text"
              id="site"
              name="site"
              class="form-control text-center"
              placeholder="Link para o Site"
              v-model="form.site"
              :class="{ 'is-invalid': isSubmitted && v$.form.site.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.site.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório!
            </div>
          </label>
        </div>
        <div class="form-group mb-5">
          <label for="imgUrl"
            >Logo:
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              class="form-control text-center"
              placeholder="Link para o Avatar"
              v-model="form.logo"
              :class="{ 'is-invalid': isSubmitted && v$.form.logo.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.logo.required"
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

<script src="./updateSponsor.ts"></script>

<style scoped>
h1 {
  padding: 2rem;
  color: var(--dark-blue);
}

label {
  width: 25vw;
}
</style>
