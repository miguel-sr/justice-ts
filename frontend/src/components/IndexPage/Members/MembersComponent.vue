<template>
  <section>
    <h1>Nossos Membros</h1>
    <div id="box-container">
      <div class="box" v-for="member in members" :key="member.id">
        <div class="box-header">
          <img :src="member.image" :alt="member.name" />
          <div>
            <h4 class="card-title">{{ member.name }}</h4>
            <h5 class="card-subtitle mt-2">{{ member.role }}</h5>
          </div>
        </div>
        <div class="box-content">
          <p>{{ member.text }}</p>
        </div>
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
}

h1,
h4,
h5 {
  color: var(--dark-blue) !important;
}

#box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

#box-container .box {
  background-color: var(--light-gray);
  text-align: justify;
  padding: 30px;
  max-width: 27rem;
}

#box-container .box .box-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

#box-container .box .box-header img {
  width: 25%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.box-header h4,
.box-header h5 {
  color: var(--blue);
}

#box-container .box-content {
  color: #000;
  max-height: 350px;
  overflow: auto;
}

#box-container .box .box-header div {
  width: 75%;
  margin-left: 20px;
}

@media (max-width: 1199.98px) {
  h1 {
    font-size: 2rem;
  }
}

@media (min-width: 1200px) and (max-width: 1439.98px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
