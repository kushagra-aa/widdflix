import axios from "./../axios";
import requests from "./../Requests";
import React, { useEffect, useState } from "react";

import "./../styles/banner.css";

function Banner() {
  // state for movie obj
  const [movie, setMovie] = useState([]);
  const baseImgURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // text overflow ellipes
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url('${baseImgURL + movie?.backdrop_path}'`,
        }}
      >
        <div className="banner-contents">
          <h2 className="banner-contents-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h2>
          <div className="banner-contents-buttons">
            <button className="banner-contents-buttons-button banner-contents-buttons-play">
              play
            </button>
            <button className="banner-contents-buttons-button banner-contents-buttons-list">
              my list
            </button>
          </div>
          <p className="banner-contents-des">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
}

export default Banner;
