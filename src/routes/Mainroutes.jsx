import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Moviecard from "../pages/Moviecard/Moviecard";
import Error from "../pages/Error/Error";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:name" element={<Moviecard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default MainRouter;
