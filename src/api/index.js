import axios from 'axios';

const api_key = process.env.VUE_APP_OMDB_API_KEY;

function fetchMovieList() {
  return axios.get('https://yts.mx/api/v2/list_movies.json');
}

function getMovieList(movieName) {
  return axios.get(`https://www.omdbapi.com/?apikey=${api_key}&s=${movieName}`);
}

function getMovieById(movieId) {
  return axios.get(`http://www.omdbapi.com/?apikey=${api_key}&i=${movieId}`);
}

export { fetchMovieList, getMovieList, getMovieById };
