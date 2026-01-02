import "./Moviecard.css";
const Moviecard = ({ Title, Year, Type, Poster }) => {
  return (
    <>
      <div className="movie-card">
        <div className="movie-img">
          <img src={Poster} />
        </div>
        <div className="movie-info">
          <div className="movie-title">
            <span>{Title}</span>
          </div>
          <div className="movie-year">
            <span>Release In: {Year}</span>
          </div>
          <div className="movie-type">
            <span>Type: {Type}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Moviecard;
