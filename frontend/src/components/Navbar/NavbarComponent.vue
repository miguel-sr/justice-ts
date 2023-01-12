<template>
  <nav class="navbar navbar-expand-lg w-100 position-fixed">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <routerlink to="/" id="logo">
          <img src="../../assets/logo-justice-azul.png" alt="" />
        </routerlink>
      </a>
      <TogglerNavbar />
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/videos">Vídeos</router-link>
          </li>
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/realizacoes">
              Realizações
            </router-link>
          </li>
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/dicas">Dicas</router-link>
          </li>
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/pedido">Pedidos</router-link>
          </li>
          <li class="nav-item" v-if="isUser()">
            <router-link
              class="nav-link"
              to="/"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle" style="font-size: 1.3em"></i>
            </router-link>
            <ul class="dropdown-menu text-center mt-0">
              <router-link class="dropdown-item disabled" to="/">
                {{ username }}
              </router-link>
              <div class="dropdown-divider bg-light"></div>
              <router-link class="dropdown-item" v-if="isAdmin()" to="/admin">
                Admin
              </router-link>
              <router-link class="dropdown-item" to="/" @click="logout">
                Logout
              </router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
nav {
  z-index: 2;
  background: rgba(255, 255, 255, 0.75);
  font-size: 1.3rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

nav .nav-item a {
  color: var(--blue);
  text-decoration: none;
  margin-right: 10px;
  position: relative;
}

nav .hover-effect a::after {
  content: "";
  margin: 0 auto;
  display: block;
  height: 2px;
  width: 0%;
  transition: width 0.5s;
  background-color: var(--blue);
}

nav .hover-effect a:hover::after {
  width: 100%;
}

nav #logo {
  margin: auto;
  margin-left: 0;
}

nav #logo img {
  width: 120px;
}

nav .dropdown-menu {
  background-color: rgba(255, 255, 255, 0.75);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  left: auto !important;
  right: 0;
  border-radius: 0;
  border: 0;
}

nav .dropdown-menu a:hover {
  background-color: transparent;
  color: var(--light-yellow);
}
</style>
