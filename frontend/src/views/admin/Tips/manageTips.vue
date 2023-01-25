<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Nova dica</h1>
      <!-- NOVA DICA - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="postTip()">
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
              O campo título é obrigatório!
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
              O campo cargo é obrigatório!
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
              O campo texto é obrigatório!
            </div>
          </label>
        </div>
        <div class="form-group mb-5">
          <label for="url"
            >URL da Imagem:
            <input
              type="text"
              id="url"
              name="url"
              class="form-control text-center"
              placeholder="Link para o Imagem"
              v-model="form.image"
              :class="{ 'is-invalid': isSubmitted && v$.form.image.$error }"
            />
            <div
              v-if="isSubmitted && v$.form.image.required"
              class="invalid-feedback"
            >
              O campo URL é obrigatório!
            </div>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
      <!-- NOVA DICA - FIM -->
      <hr class="my-5" />
      <!-- EDITAR DICAS - INÍCIO -->
      <h1 class="text-center">Editar dicas</h1>
      <div class="container">
        <div class="box-container d-flex flex-wrap justify-content-center">
          <div class="card m-3" v-for="item in Tips" :key="item.id">
            <div class="card-body position-relative">
              <h4 class="card-title">{{ item.name }}</h4>
              <p class="text-muted mb-3">{{ item.role }}</p>
              <div class="text-center">
                <button
                  @click="updateTip(item.id)"
                  class="btn btn-primary btn-sm"
                >
                  Editar
                </button>
                <button
                  @click="deleteTip(item.id)"
                  class="btn btn-danger btn-sm"
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- EDITAR DICAS - FIM -->
    </section>
    <FooterComponent />
  </div>
</template>

<script src="./manageTips.ts"></script>

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

.card button:last-of-type {
  margin-left: 20px;
}
</style>
