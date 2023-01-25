<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Editar vídeo</h1>
      <!-- EDITAR VIDEO - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="updateVideo(id)">
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
              Este campo é obrigatório.
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
              Este campo é obrigatório.
            </div>
          </label>
        </div>
        <div class="form-group mb-5">
          <label for="video"
            >ID do Video:
            <input
              type="text"
              id="video"
              name="video"
              class="form-control text-center"
              placeholder="Link para o Video"
              v-model="form.video"
              :class="{ 'is-invalid': isSubmitted && v$.form.video.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.video.required"
              class="invalid-feedback"
            >
              Este campo é obrigatório.
            </div>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
      <!-- EDITAR VIDEO - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./updateVideo.ts"></script>

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
