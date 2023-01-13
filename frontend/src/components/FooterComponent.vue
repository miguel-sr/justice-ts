<template>
  <footer class="text-center">
    <div
      id="social"
      class="d-flex justify-content-center align-items-center text-light"
    >
      <img src="../assets/logo-justice-branca.png" alt="" width="128px" /> |
      <a
        target="_blank"
        class="bi bi-twitter"
        href="https://twitter.com/ftc_justice"
      ></a>
      <a
        target="_blank"
        class="bi bi-youtube"
        href="https://www.youtube.com/channel/UClcTv3w2WJDmRYT2Uqe6u2g"
      ></a>
      <a
        target="_blank"
        class="bi bi-instagram"
        href="https://instagram.com/justice.ftc?igshid=YmMyMTA2M2Y="
      ></a>
    </div>
    <p>
      Praça Itapuã, 150 - Quadra 30 - Jardim Planalto, Goiânia - GO, 74843-420
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  background: var(--dark-blue);
  height: 200px;
}

footer #social {
  font-size: 2em;
}

footer #social a {
  height: 80px;
  width: 80px;
  line-height: 80px;
  font-size: 36px;
  color: #ffffff;
  margin: 10px;
  text-decoration: none;
}

footer #social img {
  width: 128px;
}

footer p {
  color: #ffffff;
  font-size: 1.1rem;
}
</style>
