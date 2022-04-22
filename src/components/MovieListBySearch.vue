<template>
  <section class="wrapper">
    <div class="searchMovie">
      <div class="searchMovie_image">
        <img :src="movie.Poster" />
      </div>
      <div class="searchMovie_desc">
        <h1>{{ movie.Title }}</h1>
        <p></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchMovie {
  position: absolute;
  display: flex;
  top: 35%;
  width: 400px;
  height: 400px;
}

.searchMovie_image {
  position: absolute;
}

.searchMovie_image img {
  width: 100%;
}

.searchMovie_image {
  position: relative;
  width: 70%;
}
</style>
