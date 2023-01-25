<template>
  <div>
    <NavbarComponent />
    <section>
      <h1>Painel Administrativo</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
            <form class="text-center" v-on:submit.prevent="login()">
              <!-- INÍCIO BLOCO: E-mail -->
              <label for="email"
                >E-mail:
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Digite o seu e-mail"
                    v-model="loginForm.email"
                    :class="{
                      'is-invalid': isSubmitted && v$.loginForm.email.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && v$.loginForm.email.required"
                    class="invalid-feedback"
                  >
                    O campo e-mail é obrigatório!
                  </div>
                </div> </label
              ><br />
              <!-- FIM BLOCO: E-mail -->

              <!-- INÍCIO BLOCO: Password -->
              <label for="password" class="mt-3"
                >Senha:
                <div
                  id="password-form-group"
                  class="form-group position-relative"
                >
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    placeholder="Digite sua senha"
                    v-model="loginForm.password"
                    :class="{
                      'is-invalid': isSubmitted && v$.loginForm.password.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && v$.loginForm.password.required"
                    class="invalid-feedback"
                  >
                    O campo senha é obrigatório!
                  </div>
                </div>
              </label>
              <!-- FIM BLOCO: Password -->
              <!-- INÍCIO BLOCO: Submit -->
              <div class="mt-4">
                <button type="submit" class="btn btn-primary btn-block w-75">
                  Login
                </button>
              </div>
              <!-- FIM BLOCO: Submit -->
            </form>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
h1 {
  font-size: 2.5rem;
  padding: 2rem;
  text-align: center;
  color: var(--dark-blue);
}

section {
  width: 100%;
}

form {
  margin: 0 auto;
  max-width: 300px;
}

label {
  width: 100%;
  text-align: left;
}

button {
  color: #ffffff;
  background: var(--dark-blue);
  border: 3px solid var(--dark-blue);
  border-radius: 50px;
  cursor: pointer;
  transition: 0.5s;
}

button:hover {
  color: var(--blue);
  background: transparent;
}
</style>
