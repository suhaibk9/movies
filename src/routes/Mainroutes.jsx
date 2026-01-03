import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Error from "../pages/Error/Error";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:imdbID" element={<MovieDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default MainRouter;
