export const BASE_URL = 'https://api.themoviedb.org/3/';

export const pathToSearchAll = '/search/';
export const pathToSearchMovie = '/search/movie/';
export const pathToSearchTv = '/search/tv/';

export function getUrl(endpoint, page) {
  return `${BASE_URL}${endpoint}?api_key=${process.env.API_KEY}&page=${page}`;
}

// Search for movies and tv series
export function search(query, page) {
  return `${BASE_URL}search/multi?api_key=${
    process.env.API_KEY
  }&query=${encodeURIComponent(query)}&page=${page}`;
}

// Search for movies only
export function searchMovie(query, page) {
  return `${BASE_URL}search/movie?api_key=${
    process.env.API_KEY
  }&query=${encodeURIComponent(query)}&page=${page}`;
}

// Search for tv series only
export function searchTv(query, page) {
  return `${BASE_URL}search/tv?api_key=${
    process.env.API_KEY
  }&query=${encodeURIComponent(query)}&page=${page}`;
}

// Trending
export const trendingAllDay = 'trending/all/day';
export const trendingAllWeek = 'trending/all/week';

// Movie
export const moviePopular = 'movie/popular';
export const movieNowPlaying = 'movie/now_playing';
export const movieUpcoming = 'movie/upcoming';
export const movieTopRated = 'movie/top_rated';
export const movieLatest = 'movie/latest';

// TV
export const tvPopular = 'tv/popular';
export const tvAiringToday = 'tv/airing_today';
export const tvOnTheAir = 'tv/on_the_air';
export const tvTopRated = 'tv/top_rated';
