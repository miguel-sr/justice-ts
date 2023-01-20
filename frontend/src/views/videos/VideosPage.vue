<template>
  <div>
    <LoadingComponent v-if="!dataIsLoaded" />
    <NavbarComponent />
    <section>
      <h1 class="text-center">Vídeos</h1>
      <div
        id="box-container"
        class="d-flex justify-content-center flex-wrap gap-5"
      >
        <div class="card" v-for="item in videos" :key="item.id">
          <iframe
            :srcdoc="`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${item.video}?autoplay=1><img src=https://img.youtube.com/vi/${item.video}/hqdefault.jpg alt='${item.title}'><span>▶</span></a>`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
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
  width: 40%;
  text-align: justify;
  border-radius: 15px;
}

.card iframe {
  border-radius: 15px 15px 0 0;
  width: 100%;
  aspect-ratio: 16/9;
}

@media (max-width: 768.98px) {
  .card {
    width: 100%;
  }
}

@media (min-width: 769px) and (max-width: 991.98px) {
  .card {
    width: 80%;
  }
}
</style>
