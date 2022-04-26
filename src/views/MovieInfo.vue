<template>
  <section>
    <div class="spinner" v-if="isLoading">
      <b-spinner variant="light"></b-spinner>
    </div>
    <div class="movie_info" v-else>
      <div class="movie_image">
        <img :src="movie.Poster" />
      </div>
      <div class="movie_desc">
        <h1>{{ movie.Title }}</h1>
        <p class="genre">{{ movie.Genre }}</p>
        <p class="release">
          {{ movie.Released }} | {{ movie.Runtime }} | {{ movie.Country }}
        </p>
        <p class="plot">{{ movie.Plot.slice(0, 143) }}...</p>
        <h4>Director</h4>
        <p class="director">{{ movie.Director }}</p>
        <h5>Actors</h5>
        <p class="director">{{ movie.Actors }}</p>
        <h3>Ratings</h3>
        <p class="rating">
          <i class="fab fa-imdb">
            <span>{{ movie.imdbRating }}</span>
          </i>
          <img
            src="@/assets/RottenTomatoes.png"
            class="tomato"
            v-if="this.tomato !== 0"
          />
          <span class="tomato_value" v-if="this.tomato !== 0">{{
            this.tomato
          }}</span>

          <img
            src="@/assets/Metacritic.png"
            class="metacritic"
            v-if="this.metacritic !== 0"
          />
          <span class="metacritic_value" v-if="this.metacritic !== 0">{{
            this.metacritic
          }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { getMovieById } from '@/api/index';
export default {
  data() {
    return {
      movie: {},
      ratings: [],
      tomato: 0,
      metacritic: 0,
      isLoading: false,
    };
  },
  created() {
    this.initRatings();
    this.movieListById();
  },
  methods: {
    async movieListById() {
      this.isLoading = true;
      const MovieID = this.$route.params.id;
      const { data } = await getMovieById(MovieID);
      this.movie = data;
      this.ratings = this.movie.Ratings;
      for (let i = 0; i < this.ratings.length; i++) {
        if (this.ratings[i].Source == 'Rotten Tomatoes') {
          this.tomato = this.ratings[i].Value;
        } else if (this.ratings[i].Source == 'Metacritic') {
          this.metacritic = this.ratings[i].Value;
        }
      }
      this.isLoading = false;
    },
    initRatings() {
      this.ratings = [];
      this.tomato = 0;
      this.metacritic = 0;
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  width: 100%;
  height: 79vh;
  top: 18vh;
}

section .spinner {
  position: fixed;
  left: 48vw;
  top: 48vh;
}

section .movie_info {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 20vw;
}

section .movie_info .movie_image {
  width: 40%;
  margin-right: 2vw;
}

section .movie_info .movie_desc {
  width: 60%;
}

.movie_desc h1 {
  color: white;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  text-align: left;
}

section .movie_info .movie_desc .genre {
  color: #a76b02;
  font-size: 1rem;
}

section .movie_info .movie_desc .release {
  color: #42b883;
  font-size: 1rem;
}

section .movie_info .movie_desc .plot {
  color: #999;
  font-size: 1rem;
}

section .movie_info .movie_desc h3 {
  color: #0ae66d;
  font-size: 1.6rem;
  margin: 0 0 -0.5vh 0;
}

section .movie_info .movie_desc .rating i {
  padding: 0 0.8vw 0 0rem;
  font-size: 1.5rem;
  color: yellow;
}

section .movie_info .movie_desc .rating .tomato {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  transform: translate(11px, -5px);
}

section .movie_info .movie_desc .rating .tomato_value {
  padding: 0 0.8rem;
  font-size: 1.5rem;
  color: yellow;
}

section .movie_info .movie_desc .rating .metacritic {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  transform: translate(11px, -6px);
}

section .movie_info .movie_desc .rating .metacritic_value {
  padding: 0 0.8rem;
  font-size: 1.5rem;
  color: yellow;
}

section .movie_info .movie_desc .director {
  color: #fff;
  font-size: 1rem;
}

section .movie_info .movie_desc h4 {
  color: #05a1bd;
  font-size: 1.6rem;
}

section .movie_info .movie_desc h5 {
  color: #05a1bd;
  font-size: 1.6rem;
}
</style>
