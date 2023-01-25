<template>
  <div>
    <NavbarComponent />
    <section>
      <div class="me-auto ms-auto text-center">
        <h1>Painel Administrativo</h1>
        <hr />
        <div class="d-flex flex-wrap justify-content-center">
          <a class="m-3" href="/admin/members">
            <button>Gerenciar Membros</button>
          </a>
          <a class="m-3" href="/admin/sponsors">
            <button>Gerenciar Patrocinadores</button>
          </a>
          <a class="m-3" href="/admin/videos">
            <button>Gerenciar Videos</button>
          </a>
          <a class="m-3" href="/admin/events">
            <button>Gerenciar Eventos</button>
          </a>
          <a class="m-3" href="/admin/tips">
            <button>Gerenciar Dicas</button>
          </a>
        </div>
        <hr />
        <h2>Loja</h2>
        <div class="d-flex flex-wrap justify-content-center">
          <a class="m-3" href="/admin/categories">
            <button>Gerenciar Categorias</button>
          </a>
          <a class="m-3" href="/admin/parts">
            <button>Gerenciar Peças</button>
          </a>
          <a class="m-3" href="/admin/orders">
            <button>Gerenciar Pedidos</button>
          </a>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";

export default defineComponent({
  name: "AdminIndexPage",
  components: {
    NavbarComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
h1 {
  padding: 2rem;
}

h1,
h2 {
  color: var(--dark-blue);
}

section {
  width: 100%;
}

button {
  color: #ffffff;
  background: var(--dark-blue);
  border: 3px solid var(--dark-blue);
  cursor: pointer;
  font-size: 1.3rem;
  padding: 10px 20px;
  transition: 0.5s;
}

button:hover {
  color: var(--dark-blue);
  background: transparent;
}
</style>
