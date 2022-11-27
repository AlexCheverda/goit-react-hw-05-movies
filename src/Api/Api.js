import axios from 'axios';

const API_KEY = 'eb7b6505abfb7d751373f782f6a3959d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return response.data;
};

export const movieDetails = async movie_id => {
  const response = await axios.get(
    `movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchReview = async review_id => {
  const response = await axios.get(
    `movie/${review_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

export const fetchMovieCast = async cast_id => {
  const response = await axios.get(
    `movie/${cast_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};