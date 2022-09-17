import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3';

export const pathToSearchAll = '/search/';
export const pathToSearchMovie = '/search/movie/';
export const pathToSearchTv = '/search/tv/';

// fetch data from api endpoint
export function getData(endpoint, page) {
  return axios.get(
    `${BASE_URL}/${endpoint}?api_key=${process.env.TMDB_API_KEY}&page=${
      page || 1
    }`
  );
}

export function getMovieDetail(id) {
  return axios.get(
    `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );
}

export function getMovieCasts(id) {
  return axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`
  );
}

export function getTvDetail(id) {
  return axios.get(`${BASE_URL}/tv/${id}?api_key=${process.env.TMDB_API_KEY}`);
}

export function getTvCasts(id) {
  return axios.get(
    `${BASE_URL}/tv/${id}/credits?api_key=${process.env.TMDB_API_KEY}`
  );
}

export function getSimilarMovies(id) {
  return axios.get(
    `${BASE_URL}/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  );
}

export function getSimilarTvSeries(id) {
  return axios.get(
    `${BASE_URL}/tv/${id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  );
}

// Search for movies and tv series
export function search(query, page) {
  return axios.get(
    `${BASE_URL}/search/multi?api_key=${
      process.env.TMDB_API_KEY
    }&query=${encodeURIComponent(query)}&page=${page}`
  );
}

// Search for movies only
export function searchMovie(query, page) {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${
      process.env.TMDB_API_KEY
    }&query=${encodeURIComponent(query)}&page=${page}`
  );
}

// Search for tv series only
export function searchTv(query, page) {
  return axios.get(
    `${BASE_URL}/search/tv?api_key=${
      process.env.TMDB_API_KEY
    }&query=${encodeURIComponent(query)}&page=${page}`
  );
}

// Trending
export const trendingAllDay = 'trending/all/day';
export const trendingAllWeek = 'trending/all/week';

// Movie
export const moviePopular = 'movie/popular';
export const movieNowPlaying = 'movie/now_playing';
export const movieUpcoming = 'movie/upcoming';
export const movieTopRated = 'movie/top_rated';

// TV
export const tvPopular = 'tv/popular';
export const tvAiringToday = 'tv/airing_today';
export const tvOnTheAir = 'tv/on_the_air';
export const tvTopRated = 'tv/top_rated';
