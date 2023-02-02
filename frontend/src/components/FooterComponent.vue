<template>
  <footer class="text-center d-flex justify-content-center align-items-center">
    <div>
      <div
        id="social"
        class="d-flex justify-content-center align-items-center text-light"
      >
        <img src="../assets/SVG/logo-justice-branca.svg" />
        <span style="margin-top: 20px">|</span>
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
      <p class="mb-0 mt-4">
        Praça Itapuã, 150 - Quadra 30 - Jardim Planalto, Goiânia - GO, 74843-420
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--dark-blue);
  height: 150px;
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
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
}

footer #social a::before {
  vertical-align: text-bottom;
}

footer #social img {
  width: 80px;
  margin-right: 30px;
}

footer p {
  color: #ffffff;
  font-size: 1.1rem;
}
</style>
