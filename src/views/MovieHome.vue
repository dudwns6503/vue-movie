<template>
  <section>
    <div class="spinner" v-if="isLoading">
      <b-spinner variant="light"></b-spinner>
    </div>
    <div v-else>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <a :href="movie.url">
            <img :src="movie.medium_cover_image" class="movie_image" />
          </a>
          <span class="movie_desc">
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
      console.log(response.data.data.movies);
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
  height: 100vh;
  padding: 110px 0;
}

.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
}

div ul {
  display: flex;
  align-items: center;
}

li {
  list-style: none;
  padding-right: 5px;
}

.movie_image {
  width: 40vh;
  height: 40vh;
}

.movie_desc {
  background: #000;
  color: #fff;
  font-size: 1rem;
  line-height: 1.5em;
}
</style>
