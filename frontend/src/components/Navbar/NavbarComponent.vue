<template>
  <nav class="navbar navbar-expand-lg w-100 position-fixed">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/" id="logo">
          <img src="../../assets/SVG/logo-justice-azul.svg" alt="" />
        </router-link>
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
                {{ user.name }}
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
  background-color: #ffffff;
  font-size: 1.3rem;
}

nav .nav-item a {
  color: var(--dark-blue);
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
  background-color: var(--dark-blue);
}

nav .hover-effect a:hover::after {
  width: 100%;
}

nav #logo {
  margin: auto;
  margin-left: 0;
}

nav #logo img {
  width: 80px;
  margin: 10px;
}

nav .dropdown-menu {
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  left: auto !important;
  right: 0;
  border-radius: 0;
  border: 0;
}

nav .dropdown-menu a:hover {
  background-color: transparent;
  color: var(--light-blue);
}
</style>
