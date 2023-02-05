<template>
  <div>
    <LoadingComponent v-if="!dataIsLoaded" />
    <NavbarComponent />
    <section>
      <h1 class="text-center">Realizações</h1>
      <div
        id="box-container"
        class="d-flex justify-content-center flex-wrap gap-5"
      >
        <div class="card" v-for="item in socialActions" :key="item.id">
          <img class="card-img-top" :src="item.image" :alt="item.title" />
          <div style="text-align: justify" class="card-body">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
          </div>
          <h6 class="text-end me-3 text-muted">{{ formatDate(item.date) }}</h6>
        </div>
      </div>
    </section>
    <div class="d-flex justify-content-center align-items-center mb-3 gap-1">
      <div
        v-for="item in pages"
        :key="item"
        @click="changePage(item)"
        class="pages text-white"
      >
        {{ item }}
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script src="./script.ts"></script>

<style scoped>
h1 {
  padding: 2rem;
  color: var(--dark-blue);
}

.card {
  max-width: 20vw;
  border-width: 1px;
}

.card-body h5 {
  color: var(--blue);
}

.card-img-top {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.pages {
  font-size: 1.5em;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: var(--dark-blue);
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.5s;
}

.pages:hover {
  opacity: 0.75;
}

@media (max-width: 768.98px) {
  h1 {
    font-size: 2rem;
  }

  .card {
    max-width: 100vw;
  }
}

@media (min-width: 769px) and (max-width: 1199.98px) {
  h1 {
    font-size: 2.5rem;
  }

  .card {
    max-width: 40vw;
  }
}

@media (min-width: 1200px) and (max-width: 1439.98px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
