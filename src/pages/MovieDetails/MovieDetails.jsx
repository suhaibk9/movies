import "./MovieDetails.css";
import useMovieList from "../../hooks/useMovieList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
    const { getMovieByImdbID } = useMovieList();
    const [idData, setIdData] = useState(null); // Initialize as null to handle loading state better
    const { imdbID } = useParams();

    useEffect(() => {
        const getData = async () => {
            const data = await getMovieByImdbID(imdbID);
            setIdData(data);
        };
        getData();
    }, [imdbID]);

    if (!idData) {
        return (
            <div className="movie-details-container">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="movie-details-container">
            <div className="movie-card-detailed">
                <div className="movie-poster">
                    <img
                        src={
                            idData.Poster !== "N/A"
                                ? idData.Poster
                                : "https://via.placeholder.com/300x450?text=No+Poster"
                        }
                        alt={idData.Title}
                    />
                </div>
                <div className="movie-info">
                    <div className="movie-title-header">
                        <h1>{idData.Title}</h1>
                        <div className="movie-meta">
                            <span className="meta-badge">{idData.Rated}</span>
                            <span>{idData.Year}</span>
                            <span>•</span>
                            <span>{idData.Runtime}</span>
                            <span>•</span>
                            <span>{idData.Genre}</span>
                        </div>
                    </div>

                    <div className="plot">
                        <p>{idData.Plot}</p>
                    </div>

                    <div className="movie-stats">
                        <div className="stat-item">
                            <span className="stat-label">Director</span>
                            <span className="stat-value">{idData.Director}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Cast</span>
                            <span className="stat-value">{idData.Actors}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">IMDb Rating</span>
                            <span className="stat-value">⭐ {idData.imdbRating}</span>
                        </div>
                    </div>

                    <div className="ratings">
                        {idData.Ratings &&
                            idData.Ratings.map((rating, index) => (
                                <div key={index} className="rating-badge">
                                    <span>
                                        {rating.Source}: {rating.Value}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MovieDetails;
