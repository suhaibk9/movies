export const API_KEY = import.meta.env.VITE_API_KEY_2;
export const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = (query) => {
    return `${BASE_URL}?s=${query}&apikey=${API_KEY}`;
};

export const searchMoviesByPage = (query, page) => {
    return `${BASE_URL}?s=${query}&apikey=${API_KEY}&page=${page}`;
};

export const getMovieById = (imdbID) => {
    return `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`;
};
