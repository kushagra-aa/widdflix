import React from "react";
import Banner from "./Banner";
import Row from "./Row";

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
        />
        {/* top rated */}
        <Row title="top rated" fetchURL={requests.fetchTopRated} />
        {/* action movies */}
        <Row title="action movies" fetchURL={requests.fetchActionMovies} />
        {/* comedy movies */}
        <Row title="comedy movies" fetchURL={requests.fetchComedyMovies} />
        {/* horror movies */}
        <Row title="horror movies" fetchURL={requests.fetchHorrorMovies} />
        {/* romantic movies */}
        <Row title="romantic movies" fetchURL={requests.fetchRomanceMovies} />
      </div>
    </>
  );
}

export default Home;
