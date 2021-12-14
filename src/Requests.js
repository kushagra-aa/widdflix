const API_KEY = "8700aa6e94135e21bf159c572e9d3e81";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=&with_watch_monetization_types=flatrate`,
  fetchTv: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=&with_watch_monetization_types=flatrate`,
  fetchGenresMovie: `
  https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchGenresTv: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  fetchSearchTv: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&include_adult=true&query=`,
  fetchSearchMovie: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=true&query=`,
  fetchMovieDetails: `https://api.themoviedb.org/3/movie/`,
  fetchTvDetails: `https://api.themoviedb.org/3/tv/`,
};
export default requests;
