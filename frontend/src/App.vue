<template>
  <div></div>
</template>

<script lang="ts">
export default {
  mounted() {
    document.title = "Justice FTC";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

:root {
  --blue: #034c8c;
  --light-gray: #f3f3f3;
}

html::-webkit-scrollbar {
  width: 12px;
}

html::-webkit-scrollbar-track {
  background: var(--white);
}

html::-webkit-scrollbar-thumb {
  background: rgb(3, 76, 140);
  background: linear-gradient(
    180deg,
    rgba(3, 76, 140, 1) 50%,
    rgba(22, 114, 210, 1) 100%
  );
}

div::-webkit-scrollbar {
  width: 0;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Agency FB", sans-serif;
  font-weight: bold !important;
}

* {
  font-family: "Poppins";
}

section {
  padding: 7rem 5% 2rem 5%;
}

section:first-of-type {
  min-height: 85vh;
}
</style>
