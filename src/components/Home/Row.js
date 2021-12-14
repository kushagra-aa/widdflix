import axios from "../../axios";
import React, { useEffect, useState } from "react";

// style
import "./../../styles/css/row.css";
import Spinner from "../Spinner";
import Card from "../Card";

function Row({ title, fetchURL, isLargeRow = false, type }) {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

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
                <Card
                  movie={movie}
                  isLargeRow={isLargeRow}
                  key={movie.id}
                  type={type}
                ></Card>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Row;
