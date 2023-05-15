import { useState } from "react";
import { Footer, NavBar } from "./Components";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import MovieDetails from "./Pages/MovieDetails";
import ActorDetails from "./Pages/ActorDetails";
import Discover from "./Pages/Dicover";
import { Route, Routes } from "react-router-dom";
import TvDetails from "./Pages/TvDetails";

function App() {
  return (
    <div className="bg-[#131313] text-[#fffdcc]  ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movie/:movieid" element={<MovieDetails />} />
        <Route path="/actor/:actorid" element={<ActorDetails />} />
        <Route path="/tv/:tvid" element={<TvDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
