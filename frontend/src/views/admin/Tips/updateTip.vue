<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Editar evento</h1>
      <!-- EDITAR EVENTO - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="updateData(id)">
        <div class="form-group mb-3">
          <label for="name"
            >Nome:
            <input
              type="text"
              id="name"
              name="name"
              class="form-control text-center"
              placeholder="Digite o título"
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
          <label for="role"
            >Cargo:
            <input
              type="text"
              id="role"
              name="role"
              class="form-control text-center"
              placeholder="Digite o título"
              v-model="form.role"
              :class="{ 'is-invalid': isSubmitted && v$.form.role.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.role.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório!
            </div>
          </label>
        </div>
        <div class="form-group mb-3">
          <label for="text"
            >Texto:
            <br />
            <textarea
              name="text"
              id="text"
              class="border p-3 w-100"
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
      <!-- EDITAR EVENTO - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./updateTip.ts"></script>

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
