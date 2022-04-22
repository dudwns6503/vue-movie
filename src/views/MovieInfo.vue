<template>
  <section class="wrapper">
    <div class="movie_info">
      <div class="movie_image">
        <img :src="movie.Poster" />
      </div>
      <div class="movie_desc">
        <h1>{{ movie.Title }}</h1>
        <p>출연 배우: {{ movie.Actors }}</p>
        <p>상영 시간: {{ movie.Runtime }}</p>
        <p>개봉일: {{ movie.Released }}</p>
      </div>
    </div>
    <router-link to="/search" class="back">돌아가기</router-link>
  </section>
</template>

<script>
import { getMovieByID } from '@/api/index';
export default {
  data() {
    return {
      movie: {},
    };
  },
  created() {
    this.movieListById();
  },
  methods: {
    async movieListById() {
      const MovieID = this.$route.params.id;
      const { data } = await getMovieByID(MovieID);
      this.movie = data;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.movie_info {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 65%;
  height: 70%;
}

.movie_image {
  position: absolute;
  left: 5%;
}

.movie_desc {
  position: absolute;
  width: 50%;
  left: 40%;
  top: 0%;
  margin-left: 1em;
}

.movie_desc h1 {
  color: white;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1em;
}

.movie_desc p {
  color: white;
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.1em;
}

.back {
  transform: translate(300px, 200px);
  color: #e9f015;
  text-decoration: none;
}

.back:hover {
  text-decoration: underline;
}
</style>
