<template>
  <section>
    <div class="spinner" v-if="isLoading">
      <b-spinner variant="light"></b-spinner>
    </div>
    <div v-else>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <router-link
            :to="{ name: 'MovieInfo', params: { id: movie.imdb_code } }"
          >
            <img :src="movie.medium_cover_image" />
          </router-link>

          <span>
            <p>제목: {{ movie.title }}</p>
            <p>개봉년도: {{ movie.year }}년</p>
            <p>평점: {{ movie.rating }}점</p>
            <p>상영시간: {{ movie.runtime }}분</p>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { fetchMovieList } from '@/api/index';
export default {
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },
  created() {
    this.getMovieList();
  },
  methods: {
    async getMovieList() {
      this.isLoading = true;
      const response = await fetchMovieList();
      this.movies = response.data.data.movies;
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  width: 100%;
  height: 75vh;
  top: 18vh;
}

section .spinner {
  position: fixed;
  left: 48vw;
  top: 48vh;
}

section div {
  width: 100%;
  height: 100%;
}

section div ul {
  display: flex;
  width: 100%;
  height: 100%;
}

section div ul li {
  width: 100%;
  height: 100%;
  padding-right: 3vw;
}

section div ul li a {
  display: inline-block;
  margin-bottom: 3vh;
}

section div ul li:hover a img {
  filter: brightness(1.2);
}

section div ul li span {
  display: inline-block;
  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
}

section div ul li:hover span {
  color: #f2ea0ff1;
}
</style>
