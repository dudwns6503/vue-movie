<template>
  <section class="wrapper">
    <b-form
      @submit.prevent="searchMovieByName"
      @reset="onReset"
      v-if="show"
      class="form"
    >
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.movieName"
          type="text"
          placeholder="영어 제목으로 검색해주세요."
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Search</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div class="spinner" v-if="isLoading">
      <b-spinner variant="light"></b-spinner>
    </div>
    <MovieListBySearch :movie="searchedMovie" v-else></MovieListBySearch>
  </section>
</template>

<script>
import { getMovie } from '@/api/index';
import MovieListBySearch from '@/components/MovieListBySearch.vue';
export default {
  components: {
    MovieListBySearch,
  },
  data() {
    return {
      form: {
        movieName: '',
      },
      show: true,
      searchedMovie: {},
      isLoading: false,
    };
  },
  methods: {
    async searchMovieByName() {
      try {
        this.isLoading = true;
        const movieName = this.form.movieName;
        const { data } = await getMovie(movieName);
        console.log(data);
        if (data.Error) {
          alert('검색하신 제목의 영화가 없습니다.');
        } else {
          this.searchedMovie = data;
        }
        this.isLoading = false;
      } catch (error) {
        alert('요청에서 에러가 발생했습니다.');
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.movieName = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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

.form {
  position: absolute;
  width: 50%;
  top: 20%;
}

.spinner {
  position: absolute;
}
</style>
