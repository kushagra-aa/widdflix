import axios from "./../axios";
import React, { useEffect, useState } from "react";

// style
import "./../styles/row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState();
  const baseImgURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);
  return (
    <>
      <div className="row">
        <h2 className="row-title">{title}</h2>
        <div className="row-posters">
          {movies?.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <>
                  <img
                    src={`${baseImgURL}${
                      isLargeRow ? movie?.poster_path : movie?.backdrop_path
                    }
            `}
                    className={`row-posters-poster ${
                      isLargeRow && "row-posters-poster-large"
                    }`}
                    key={movie.id}
                    alt={movie?.name}
                  />
                </>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Row;
