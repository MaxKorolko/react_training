import axios from 'axios';

const API_KEY = '164eadb7baae3a4c5cb507a1aca52aae';
const URL = 'https://api.themoviedb.org/3/';

export function fetchTrendingMovieDay() {
  return axios(`${URL}trending/movie/day?api_key=${API_KEY}`).then(
    results => results.data.results
  );
}

export function fetchMovieDetails(id) {
  return axios(`${URL}movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    results => results.data
  );
}

export function fetchMovieCast(id) {
  return axios(
    `${URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(results => results.data.cast);
}

export function fetchMovieReviews(id) {
  return axios(
    `${URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(results => results.data.results);
}

export const fetchMoviesSearch = request => {
  return axios(
    `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${request}`
  ).then(results => results.data.results);
};
