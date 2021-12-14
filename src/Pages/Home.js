import React from "react";
// components
import Banner from "../components/Home/Banner";
import Row from "../components/Home/Row";

// requests
import requests from "./../Requests";
// style
import "./../styles/css/home.css";

function Home() {
  return (
    <>
      <div className="container">
        {/* loader */}
        {/* TOP Banner */}
        <Banner />
        {/* netflix origianls */}
        <Row
          title={"netfllix originals"}
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow={true}
          type="tvs"
        />
        {/* top rated */}
        <Row
          title="top rated"
          fetchURL={requests.fetchTopRated}
          type="movies"
        />
        {/* action movies */}
        <Row
          title="action movies"
          fetchURL={requests.fetchActionMovies}
          type="movies"
        />
        {/* comedy movies */}
        <Row
          title="comedy movies"
          fetchURL={requests.fetchComedyMovies}
          type="movies"
        />
        {/* horror movies */}
        <Row
          title="horror movies"
          fetchURL={requests.fetchHorrorMovies}
          type="movies"
        />
        {/* romantic movies */}
        <Row
          title="romantic movies"
          fetchURL={requests.fetchRomanceMovies}
          type="movies"
        />
      </div>
    </>
  );
}

export default Home;
