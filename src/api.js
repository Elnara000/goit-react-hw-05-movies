import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY= 'effb95ae19c64d6c8d89a74ddcfcb22f';

export async function getTrending() {
    const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  
    return data.results;
};

export async function searchMovies(query) {
    const { data } = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
  
    return data.results;
};

export async function getMovieById(movieId) {
    const { data } = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
  
    return data;
  };
  
  export async function getCastMovie(movieId) {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
  
    return data.cast;
  };
  export async function getReviewsMovie(movieId) {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
  
    return data.results;
  };