import Moviecard from "../Moviecard/Moviecard";
import { useState, useEffect } from "react";
import "./Home.css";
import useMovieList from "../../hooks/useMovieList";
import { searchMoviesByPage } from "../../constants/api";
import { Oval } from "react-loader-spinner";
const Home = () => {
  const { movieList, downloadDefaultMovies } = useMovieList();
  useEffect(() => {
    const fetchAllPage1Movies = async () => {
      try {
        await downloadDefaultMovies("Harry", "Avengers", "Tom", "Impossible","hitler  ");
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchAllPage1Movies();
  }, []);

  if (!movieList.length)
    return (
      <div className="loader">
        <Oval
          visible={true}
          height="120"
          width="120"
          color="#e94560"
          secondaryColor="#0f3460"
          strokeWidth={3}
          ariaLabel="oval-loading"
        />
      </div>
    );

  return (
    <div className="home-container">
      <div className="movie-card-wrapper">
        {movieList.map((movie) => {
          return <Moviecard key={movie.imdbID} {...movie} />;
        })}
      </div>
    </div>
  );
};
export default Home;
