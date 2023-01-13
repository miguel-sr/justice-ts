<template>
  <section class="d-flex align-items-center">
    <div class="text-light">
      <h1 class="display-5">ROBOTIC'S EXPANSION</h1>
      <p class="lead py-2">
        O Robotic's Expansion tem intenção de promover conhecimentos de
        Ex-membros da FIRST para auxiliar todas as equipes do Brasil, possuindo
        conteúdos como dicas de juízes, mentores e vários outros assuntos.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "HeroComponent",
};
</script>

<style scoped>
h1 {
  font-weight: bold;
}

section {
  min-height: 100vh;
  background: url(../../assets/SVG/Robotics.svg) no-repeat;
  background-size: cover;
  background-position: center;
}

section div {
  max-width: 50vw;
}

section div p {
  text-align: justify;
  line-height: 1.8;
}

@media (max-width: 991.98px) {
  section {
    background: url(../../assets/SVG/Robotics-Vertical.svg) no-repeat;
    background-size: 101%;
    background-position: center;
  }

  section div {
    margin: auto;
    max-width: 100vw;
    text-align: center;
  }

  section div p {
    text-align: justify;
  }
}
</style>
