<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Novo patrocinador</h1>
      <!-- NOVO PATROCINADOR - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="">
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
            >URL do Avatar:
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
        <button @click="submitData()" type="submit" class="btn btn-primary">
          Salvar
        </button>
      </form>
      <!-- NOVO PATROCINADOR - FIM -->
      <hr class="my-5" />
      <!-- EDITAR PATROCINADOR - INÍCIO -->
      <h1 class="text-center">Editar patrocinadores</h1>
      <div class="container">
        <div class="box-container d-flex flex-wrap justify-content-center">
          <div class="card m-3" v-for="item in Sponsors" :key="item.id">
            <div class="card-body text-center">
              <h4 class="card-title">{{ item.name }}</h4>
              <div class="text-center">
                <button
                  @click="updateSponsor(item.id)"
                  class="btn btn-primary btn-sm"
                >
                  Editar
                </button>
                <button
                  @click="deleteSPonsor(item.id)"
                  class="btn btn-danger btn-sm"
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- EDITAR PATROCINADOR - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./manageSponsors.ts"></script>

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

.card {
  min-width: 15vw;
}

.card button:last-of-type {
  margin-left: 20px;
}
</style>
