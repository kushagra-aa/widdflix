import React, { useState } from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// general components
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
// loader
import Spinner from "./components/Spinner";
// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cards from "./components/Cards";
import Search from "./Pages/Search";
// styles
import "./App.css";
import requests from "./Requests";

function App() {
  const [loading, setLoading] = useState(true);
  window.addEventListener("load", () => setLoading(false));
  return loading ? (
    <Spinner loading={loading} loader={"grid"} />
  ) : (
    <>
      <Router>
        <TopBar />
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/movies"
              element={
                <Cards
                  title="Movies"
                  type="movie"
                  fetchURL={requests.fetchMovies}
                />
              }
            />
            <Route
              path="/tvseries"
              element={
                <Cards title="TVSeries" type="tv" fetchURL={requests.fetchTv} />
              }
            />
            <Route path="/search/:searchterm" element={<Search />} />
            <Route
              path="/search"
              element={
                <h2 style={{ marginTop: "10em", textAlign: "center" }}>
                  Type In Search Box
                </h2>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
