<template>
  <section>
    <h1 class="display-5 text-center py-4">Justice FTC Team</h1>
    <div class="d-flex text-light align-items-center flex-wrap">
      <div id="image"></div>
      <div id="content">
        <p>
          Nós somos a Equipe JUSTICE FTC #21036, de Goiânia, Goiás.
          Representamos a Escola SESI Jardim Planalto.
        </p>
        <p>
          Nossa equipe foi fundada em 15/12/21 e desde então atuamos como
          competidores na categoria FIRST TECH CHALLENGE (FTC). Atualmente somos
          um time composto por 9 membros, sendo a maior parte representado por
          mulheres! Levamos sempre comomotivação nosso lema "Nos superar dia
          após dia".
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "AboutComponent",
};
</script>

<style scoped>
section {
  padding-top: 0;
}

section h1 {
  color: var(--dark-blue);
}

section > div {
  background-color: var(--dark-blue);
}

section #image {
  background: url(../../assets/foto-equipe.jpeg) no-repeat center;
  background-size: 101%;
  width: 55%;
  aspect-ratio: 4/3;
}

section #content {
  text-align: justify;
  width: 45%;
  padding: 25px;
}

section p {
  font-size: 1.3rem;
  line-height: 1.8;
}

@media (max-width: 991.98px) {
  section #flex {
    flex-direction: column;
  }

  section #image {
    background-size: cover;
    width: 100%;
  }

  section #content {
    width: 100%;
  }

  section h1 {
    font-size: 2.5rem;
  }

  section div p {
    font-size: 1rem;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  section h1 {
    font-size: 2.5rem;
  }

  section div p {
    font-size: 1rem;
  }
}

@media (min-width: 1200px) and (max-width: 1439.98px) {
  section h1 {
    font-size: 3rem;
  }

  section div p {
    font-size: 1.1rem;
  }
}
</style>
