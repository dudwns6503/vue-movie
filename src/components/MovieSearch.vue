<template>
  <section>
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

      <b-button type="submit" variant="primary" class="btn">Search</b-button>
      <b-button type="reset" variant="danger" class="btn">Reset</b-button>
    </b-form>

    <LoadingSpinner v-if="isLoading" class="spinner"></LoadingSpinner>
    <MovieListBySearch
      :movies="searchedMovies"
      v-else
      class="list"
    ></MovieListBySearch>
  </section>
</template>

<script>
import { getMovieList } from '@/api/index';
import MovieListBySearch from '@/components/MovieListBySearch.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: {
    MovieListBySearch,
    LoadingSpinner,
  },
  data() {
    return {
      form: {
        movieName: '',
      },
      show: true,
      searchedMovies: [],
      isLoading: false,
    };
  },
  methods: {
    async searchMovieByName() {
      try {
        this.isLoading = true;
        const movieName = this.form.movieName;
        const { data } = await getMovieList(movieName);
        if (data.Error) {
          alert('검색하신 제목의 영화가 없습니다.');
        } else {
          this.searchedMovies = data.Search;
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
section {
  position: relative;
  width: 100%;
  height: 79vh;
  top: 18vh;
  display: flex;
}

section .form {
  position: relative;
  left: 33vw;
  display: flex;
  height: 6vh;
}

section .form #input-group-1 {
  width: 30vw;
  height: 100%;
}

section .form .btn {
  height: 100%;
}

section .list {
  position: absolute;
  height: 63vh;
  top: 20%;
}
</style>
