import { useEffect, useState } from "react";
import { searchMoviesByPage, searchMovies as searchMoviesUrl, getMovieById } from "../constants/api";
import axios from "axios";
const useMovieList = () => {
  const [movieList, setMovieList] = useState([]);
  async function downloadDefaultMovies(...args) {
    const response = await axios.all(
      args.map((arg, idx) => {
        const url = searchMoviesByPage(arg, idx + 1);
        return axios.get(url);
      })
    );
    response.map((res) => {
      if (res.data.Search) {
        setMovieList((prev) => [...prev, ...res.data["Search"]]);
      }
    });
    console.log(movieList);
  }
  async function searchMovies(query) {
    const searchUrl = searchMoviesUrl(query)
    const response = await axios.get(searchUrl);
    if (response.data) {
      setMovieList(response.data.Search);
    }
    else {
      setMovieList([]);
    }
  }
  async function getMovieByImdbID(imdbID) {
    const searchURL = getMovieById(imdbID);
    const response = await axios.get(searchURL);
    if (response.data) {
      return response.data;
    }
    else {
      return null
    }
  }
  return {
    movieList,
    downloadDefaultMovies,
    searchMovies, 
    getMovieByImdbID
  };
};
export default useMovieList;
