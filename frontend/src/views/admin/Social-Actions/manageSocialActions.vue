<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Novo evento</h1>
      <!-- NOVO EVENTO - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="postSocialAction()">
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
      <!-- NOVO EVENTO - FIM -->
      <hr class="my-5" />
      <!-- EDITAR EVENTOS - INÍCIO -->
      <h2 class="text-center">Editar eventos</h2>
      <div class="container">
        <div class="box-container d-flex flex-wrap justify-content-center">
          <div class="card m-3" v-for="item in SocialActions" :key="item.id">
            <div class="card-body position-relative">
              <h5 class="card-title">{{ item.title }}</h5>
              <h6 class="text-muted mb-3">{{ formatDate(item.date) }}</h6>
              <p class="text-muted">{{ item.description }}</p>
              <div class="text-center">
                <button
                  @click="updateSocialAction(item.id)"
                  class="btn btn-primary btn-sm"
                >
                  Editar
                </button>
                <button
                  @click="deleteSocialAction(item.id)"
                  class="btn btn-danger btn-sm"
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- EDITAR EVENTOS - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./manageSocialActions.ts"></script>

<style scoped>
h1:first-of-type {
  padding: 2rem;
}

h1,
h2 {
  color: var(--dark-blue);
}

label {
  width: 25vw;
}

.card {
  min-width: 15vw;
  max-width: 25vw;
}

::-webkit-scrollbar {
  width: 0;
}

p {
  overflow-y: scroll;
  text-align: justify;
  height: 100px;
}

.card button:last-of-type {
  margin-left: 20px;
}
</style>
