<template>
  <section>
    <article v-for="(movie, index) in movies" :key="index">
      <div class="searchMovie_image">
        <router-link
          v-if="typeof movie.imdbID !== 'undefined'"
          :to="{ name: 'MovieInfo', params: { id: movie.imdbID } }"
        >
          <img :src="movie.Poster" />
        </router-link>
      </div>
      <div class="searchMovie_desc">
        <h1>{{ movie.Title }}</h1>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
section article .searchMovie_image {
  width: 20vw;
  height: 60%;
  padding: 0;
  margin-bottom: 2vh;
}

section article .searchMovie_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

section article:hover .searchMovie_image img {
  filter: brightness(1.2);
}

section article .searchMovie_desc {
  width: 100%;
  height: 37%;
}

.searchMovie_desc h1 {
  text-align: center;
  font-size: 2rem;
  color: #fff;
}

section article:hover .searchMovie_desc h1 {
  color: #f07305;
}
</style>
