import { memo } from "react";
import "./Navbar.css";
import { useState, useCallback, useMemo } from "react";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from '../../hooks/useDebounce'
import loadash from "lodash";
import { useEffect } from "react";
const Navbar = () => {
  const [query, setQuery] = useState("");

  const { movieList, searchMovies } = useMovieList();
  const [autoCompleteVisible, setAutocompleteVisible] = useState(false);
  // const debouncedLookup = loadash.debounce((searchTerm) => {
  //   searchMovies(searchTerm);
  // }, 1000);
  const debouncedLookup = useCallback(useDebounce(searchMovies, 1000), [])

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length >= 3) {
      debouncedLookup(e.target.value);
    }
  };
  //First Load when autoCompleteVisible is true and query is empty
  useEffect(() => {
    if (autoCompleteVisible && query.length === 0) {
      const fetchDefaultMovies = async () => {
        try {
          await searchMovies("Parrot");
        } catch (error) {
          console.log(error);
        }
      };
      fetchDefaultMovies();
    }
  }, [autoCompleteVisible]);

  return (
    <div className="navbar-wrapper">
      <Link to="/" className="navbar-logo">
        Movie Base
      </Link>
      <div className="search-bar">
        <input
          value={query}
          type="text"
          id="movie-search-input"
          placeholder="Look for Movies. Type atleast 3 letters"
          onFocus={() => setAutocompleteVisible(true)}
          onBlur={() => setAutocompleteVisible(false)}
          onChange={handleQueryChange}
        />
        <div
          style={{ display: autoCompleteVisible ? "block" : "none" }}
          id="results-list"
        >
          {query.length < 3 && <div className="results-header">Popular Choices</div>}
          {movieList ? (
            movieList.slice(0, 5).map((movie) => {
              return <div key={movie.imdbID} className="autocomplete-result">
                {movie.Title}
              </div>;
            })
          ) : (
            <div> No Results </div>
          )}
        </div>
      </div>
      <div>Theme</div>
    </div>
  );
};
export default memo(Navbar);
