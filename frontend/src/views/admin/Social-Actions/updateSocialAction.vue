<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Editar evento</h1>
      <!-- EDITAR EVENTO - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="updateSocialAction(id)">
        <div class="form-group mb-3">
          <label for="title"
            >Título:
            <input
              type="text"
              id="title"
              name="title"
              class="form-control text-center"
              placeholder="Digite o título"
              v-model="form.title"
              :class="{ 'is-invalid': isSubmitted && v$.form.title.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.title.required"
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
          <label for="date"
            >Data:
            <br />
            <input
              type="date"
              id="date"
              name="date"
              class="form-control text-center"
              placeholder="Digite o título"
              v-model="form.date"
              :class="{ 'is-invalid': isSubmitted && v$.form.date.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.date.required"
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
      <!-- EDITAR EVENTO - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./updateSocialAction.ts"></script>

<style scoped>
h1 {
  padding: 2rem;
  color: var(--dark-blue);
}

label {
  width: 25vw;
}
</style>
