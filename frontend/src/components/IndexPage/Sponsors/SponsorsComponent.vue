<template>
  <section id="sponsors-section">
    <h1>Patrocinadores</h1>
    <div class="box-container">
      <div class="box" v-for="sponsor in sponsors" :key="sponsor.id">
        <a :href="sponsor.site">
          <img loading="lazy" :src="sponsor.logo" :alt="sponsor.name" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
h1 {
  font-size: 3rem;
  padding-bottom: 2rem;
  text-align: center;
  color: var(--blue);
}

section {
  width: 100%;
}

.box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.box-container .box {
  padding: 5rem;
}

.box-container .box img {
  width: 180px;
}

@media (max-width: 1199.98px) {
  h1 {
    font-size: 2rem;
  }

  .box-container .box {
    padding: 1.5rem;
  }

  .box-container .box img {
    width: 100px;
  }
}

@media (min-width: 1200px) and (max-width: 1439.98px) {
  h1 {
    font-size: 2.5rem;
  }

  .box-container .box {
    padding: 4rem;
  }

  .box-container .box img {
    width: 150px;
  }
}
</style>
