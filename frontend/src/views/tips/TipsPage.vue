<template>
  <div>
    <LoadingComponent v-if="!dataIsLoaded" />
    <NavbarComponent />
    <section>
      <h1 class="text-center">Dicas</h1>
      <div id="box-container">
        <div class="box" v-for="item in tips" :key="item.id">
          <div class="box-header">
            <img :src="item.image" :alt="item.name" />
            <div>
              <h4 class="card-title">{{ item.name }}</h4>
              <h5 class="card-subtitle mt-2">{{ item.role }}</h5>
            </div>
          </div>
          <div class="box-content">
            <p>{{ item.text }}</p>
          </div>
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
