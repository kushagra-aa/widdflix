import axios from "./../axios";
import React, { useEffect, useState } from "react";

// style
import "./../styles/css/row.css";
import Spinner from "./Spinner";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const baseImgURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }

    fetchData();
  }, [fetchURL]);
  return (
    <>
      <div className="row">
        <h2 className="row-title">{title}</h2>
        {loading ? <Spinner loading={loading} /> : ""}
        <div className="row-posters">
          {movies?.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <div
                  className={`row-posters-poster ${
                    isLargeRow && "row-posters-poster-large"
                  }`}
                >
                  <div
                    className={`row-posters-poster-front ${
                      isLargeRow && "row-posters-poster-front-large"
                    }`}
                  >
                    <img
                      src={`${baseImgURL}${
                        isLargeRow ? movie?.poster_path : movie?.backdrop_path
                      }`}
                      className={`row-posters-poster-front-img ${
                        isLargeRow && "row-posters-poster-front-img-large"
                      }`}
                      key={movie.id}
                      alt={movie?.name}
                    />
                  </div>
                  <div
                    className={`row-posters-poster-back ${
                      isLargeRow && "row-posters-poster-back-large"
                    }`}
                  >
                    <h3 className="row-posters-poster-back-title">
                      {movie?.title || movie?.name || movie?.original_name}
                    </h3>
                    <p className="row-posters-poster-back-vote">
                      {movie.vote_average}
                    </p>
                    <p className="row-posters-poster-back-tag">
                      {movie.tagline}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Row;
