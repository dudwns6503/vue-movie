import axios from 'axios';

const OMDB_API_KEY = 'fa19d096';

function fetchMovieList() {
  return axios.get('https://yts.mx/api/v2/list_movies.json');
}

function getMovie(movieName) {
  return axios.get(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${movieName}`,
  );
}

export { fetchMovieList, getMovie };
