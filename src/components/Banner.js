import axios from "./../axios";
import requests from "./../Requests";
import React, { useEffect, useState } from "react";

import "./../styles/css/banner.css";
import Spinner from "./Spinner";

function Banner() {
  // state for movie obj
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseImgURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setLoading(false);
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
        {loading ? <Spinner loading={loading} loader={"banner"} /> : ""}
        <div className="banner-contents">
          <h2 className="banner-contents-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h2>
          <p className="banner-contents-des">
            {truncate(movie?.overview, 100)}
          </p>
          <p className="banner-contents-vote">{movie?.vote_average}</p>
          <p className="banner-contents-lang">{movie?.original_language}</p>
          <p className="banner-contents-stat">{movie?.status}</p>
          <div className="banner-contents-buttons">
            <button className="banner-contents-buttons-button banner-contents-buttons-play">
              play
            </button>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
}

export default Banner;
