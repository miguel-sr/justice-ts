<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Novo vídeo</h1>
      <!-- NOVO VIDEO - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="postVideo()">
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
      <!-- NOVO VIDEO - FIM -->
      <hr class="my-5" />
      <!-- EDITAR VIDEO - INÍCIO -->
      <h1 class="text-center">Editar vídeos</h1>
      <div class="container">
        <div class="box-container d-flex flex-wrap justify-content-center">
          <div class="card m-3" v-for="item in Videos" :key="item.id">
            <div class="card-body position-relative">
              <h4 class="card-title mb-3">{{ item.title }}</h4>
              <p class="text-muted mb-4">{{ item.description }}</p>
              <div class="text-center">
                <button
                  @click="patchVideo(item.id)"
                  class="btn btn-primary btn-sm"
                >
                  Editar
                </button>
                <button
                  @click="deleteVideo(item.id)"
                  class="btn btn-danger btn-sm"
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- EDITAR VIDEO - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./manageVideos.ts"></script>

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

textarea {
  text-align: justify;
}

.card {
  min-width: 15vw;
  max-width: 25vw;
}

::-webkit-scrollbar {
  width: 0;
}

.card-body p {
  text-align: justify;
  overflow-y: scroll;
  height: 100px;
}

.card button:last-of-type {
  margin-left: 20px;
}
</style>
