import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { MoviesDashboard } from "../components/MoviesDashboard";
import { SingleMovieDetails } from "../components/SingleMovieDetails";
export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/movies" element={<MoviesDashboard />} />
        <Route path="/movies/:id" element={<SingleMovieDetails />} />
      </Routes>
    </>
  );
};
