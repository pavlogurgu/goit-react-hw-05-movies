import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3'
const MY_ACCESS_KEY = '520faa847257d57af54017c37ef43fe0'


export async function getTrending() {
    try {
      const resTrending = await axios.get(
        `${baseURL}/trending/movie/day?api_key=${MY_ACCESS_KEY}`
      );
      return await resTrending.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  export async function getBySearch(query) {
    try {
      const resSearch = await axios.get(
        `${baseURL}/search/movie?api_key=${MY_ACCESS_KEY}&page=1&query=${query}`
      );
      return await resSearch.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  export async function getMovieInfo(movieId) {
    try {
      const resMovieInfo = await axios.get(
        `${baseURL}/movie/${movieId}?api_key=${MY_ACCESS_KEY}`
      );
      return await resMovieInfo.data;
    } catch (error) {
      console.log(error);
    }
  }

  export async function getMovieCast(movieId) {
    try {
      const resMovieCast = await axios.get(
        `${baseURL}/movie/${movieId}/credits?api_key=${MY_ACCESS_KEY}`
      );
      return await resMovieCast.data
    } catch (error) {
      console.log(error);
    }
  }


  export async function getMovieReviews(movieId) {
    try {
      const resMovieReviews = await axios.get(
        `${baseURL}/movie/${movieId}/reviews?api_key=${MY_ACCESS_KEY}`
      );
      return await resMovieReviews.data.results;
    } catch (error) {
      console.log(error);
    }
  }

