import { memo } from "react";
import "./Navbar.css";
import { useState, useCallback, useMemo } from "react";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import loadash from "lodash";
import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
// import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Navbar = () => {
  const [light, setLight] = useState();
  const { getFromLocalStorage, storeInLocalStorage } = useLocalStorage(true);
  useEffect(() => {
    const savedTheme = getFromLocalStorage("theme");
    if (savedTheme !== null) {
      setLight(savedTheme);
    }
  }, []);
  const handleThemeChange = () => {
    setLight(!light);
    storeInLocalStorage("theme", !light);
  };
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { movieList, searchMovies } = useMovieList();
  const [autoCompleteVisible, setAutocompleteVisible] = useState(false);
  const debouncedLookup = useCallback(useDebounce(searchMovies, 1000), []);
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

  // Theme toggle effect
  useEffect(() => {
    if (!light) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [light]);
  const handleClickOnResult = (e) => {
    e.stopPropagation();
    setAutocompleteVisible(false);
    navigate("/movie/" + e.target.dataset.imdbid);
  };
  const redirectHome = () => {
    setQuery("");
    navigate("/");
  };
  return (
    <div className="navbar-wrapper">
      <div onClick={redirectHome} className="navbar-logo">
        Movie Base
      </div>
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
          {query.length < 3 && (
            <div className="results-header">Popular Choices</div>
          )}
          {movieList ? (
            movieList.slice(0, 5).map((movie) => {
              return (
                <div
                  data-imdbID={movie.imdbID}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleClickOnResult}
                  key={movie.imdbID}
                  className="autocomplete-result"
                >
                  {movie.Title}
                </div>
              );
            })
          ) : (
            <div> No Results </div>
          )}
        </div>
      </div>
      <div data-tooltip-id="themeTooltip" style={{ scale: 1.4, cursor: 'pointer' }} onClick={handleThemeChange}>
        {light ? <MdLightMode /> : <MdDarkMode />}
      </div>
      <Tooltip
        id="themeTooltip"
        place="bottom"
        content={light ? "Switch To Dark Mode" : "Switch To Light Mode"}
        className="theme-tooltip"
      />
    </div>
  );
};
export default memo(Navbar);
