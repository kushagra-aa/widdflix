import React, { useEffect, useState } from "react";
// dispathcer
import { useDispatch } from "react-redux";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// general components
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
// loader
import Spinner from "./components/Spinner";
// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cards from "./components/Cards";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import Detials from "./Pages/Detials";
import PageNotFound from "./Pages/404-page";
import Login from "./Pages/Login";
// styles
import "./App.css";
import requests from "./Requests";
// auth from firebase
import { auth } from "./firebase";
// logout, login and selectUser reducers from user slice
import { login, logout, selectUser } from "./features/userSlice";
// use selector from redux
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, [dispatch]);

  const [loading, setLoading] = useState(true);
  window.addEventListener("load", () => setLoading(false));
  return loading ? (
    <Spinner loading={loading} loader={"grid"} />
  ) : (
    <>
      <Router>
        {user ? <TopBar /> : ""}
        {user ? <SideBar /> : ""}
        <main>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />

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
                  <Cards
                    title="TVSeries"
                    type="tv"
                    fetchURL={requests.fetchTv}
                  />
                }
              />
              <Route path="/search/:searchterm" element={<Search />} />
              <Route
                path="/details/movies/:id"
                element={<Detials type="movie" />}
              />
              <Route path="/details/tv/:id" element={<Detials type="tv" />} />
              <Route path="/c" element={<Carousel />} />
              <Route
                path="/search"
                element={
                  <h2 style={{ marginTop: "10em", textAlign: "center" }}>
                    Type In Search Box
                  </h2>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          )}
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
