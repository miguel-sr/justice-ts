<template>
  <div class="loader-wrapper d-flex justify-content-center align-items-center">
    <div class="dot-falling"></div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
.loader-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(@/assets/SVG/logo-justice-azul.svg) no-repeat center #ffffff;
  background-size: 20%;
  top: 0;
  left: 0;
  z-index: 99;
}
.dot-falling {
  position: relative;
  left: -9999px;
  top: 150px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--dark-blue);
  color: var(--dark-blue);
  box-shadow: 9999px 0 0 0 var(--dark-blue);
  animation: dot-falling 1s infinite linear;
  animation-delay: 0.1s;
}
.dot-falling::before,
.dot-falling::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-falling::before {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--dark-blue);
  color: var(--dark-blue);
  animation: dot-falling-before 1s infinite linear;
  animation-delay: 0s;
}
.dot-falling::after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--dark-blue);
  color: var(--dark-blue);
  animation: dot-falling-after 1s infinite linear;
  animation-delay: 0.2s;
}

@keyframes dot-falling {
  0% {
    box-shadow: 9999px -15px 0 0 #007bff00;
  }
  25%,
  50%,
  75% {
    box-shadow: 9999px 0 0 0 var(--dark-blue);
  }
  100% {
    box-shadow: 9999px 15px 0 0 #007bff00;
  }
}
@keyframes dot-falling-before {
  0% {
    box-shadow: 9984px -15px 0 0 #007bff00;
  }
  25%,
  50%,
  75% {
    box-shadow: 9984px 0 0 0 var(--dark-blue);
  }
  100% {
    box-shadow: 9984px 15px 0 0 #007bff00;
  }
}
@keyframes dot-falling-after {
  0% {
    box-shadow: 10014px -15px 0 0 #007bff00;
  }
  25%,
  50%,
  75% {
    box-shadow: 10014px 0 0 0 var(--dark-blue);
  }
  100% {
    box-shadow: 10014px 15px 0 0 #007bff00;
  }
}
</style>
