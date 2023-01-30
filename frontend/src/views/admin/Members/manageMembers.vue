<template>
  <div>
    <NavbarComponent />
    <section>
      <h1 class="text-center">Novo membro</h1>
      <!-- NOVO MEMBRO - INÍCIO -->
      <form class="text-center" v-on:submit.prevent="postMember()">
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
          <label for="role"
            >Cargo:
            <input
              type="text"
              id="role"
              name="role"
              class="form-control text-center"
              placeholder="Digite o cargo"
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
          <label for="biography"
            >Biografia:
            <br />
            <textarea
              name="biography"
              id="biography"
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
            >URL do Avatar:
            <input
              type="text"
              id="image"
              name="image"
              class="form-control text-center"
              placeholder="Link para o Avatar"
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
      <!-- NOVO MEMBRO - FIM -->
      <hr class="my-5" />
      <!-- EDITAR MEMBROS - INÍCIO -->
      <h1 class="text-center">Editar membros</h1>
      <div class="container">
        <div class="box-container d-flex flex-wrap justify-content-center">
          <div class="card m-3" v-for="item in Members" :key="item.id">
            <div class="card-body">
              <h4 class="card-title">{{ item.name }}</h4>
              <p class="text-muted mb-3">{{ item.role }}</p>
              <div class="text-center">
                <button
                  @click="updateMember(item.id)"
                  class="btn btn-primary btn-sm"
                >
                  Editar
                </button>
                <button
                  @click="deleteMember(item.id)"
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

<script src="./manageMembers.ts"></script>

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
}

.card button:last-of-type {
  margin-left: 20px;
}
</style>
