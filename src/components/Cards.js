import React, { useEffect, useState } from "react";
// for making requests
import axios from "../axios";
// laoder
import Spinner from "./Spinner";
// card component
import Card from "./Card";
// style
import "./../styles/css/cards.css";
import Paginate from "./Paginate";
import Genres from "./Genres";

const Cards = ({ fetchURL, title = "", type }) => {
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL + "&page=" + page);
      setMovies(request.data.results);
      setTotalPages(request.data.total_pages);
      setLoading(false);
      return request;
    }
    fetchData();
  }, [fetchURL, page]);
  return (
    <>
      <div className="cards-page">
        <h2>{title}</h2>
        {/* genres not workling right now */}
        <Genres
          type={type}
          selectedGenres={selectedGenres}
          genres={genres}
          setGenres={setGenres}
          setSelectedGenres={setSelectedGenres}
          setPage={setPage}
        />
        <div className="cards-page-con">
          {loading ? <Spinner className="loader" loading={loading} /> : ""}
          {movies?.map((movie) => (
            <Card
              movie={movie}
              isLargeRow={true}
              type={type}
              key={movie.id}
            ></Card>
          ))}
          {!movies && <h2>None Found!</h2>}
        </div>
      </div>
      <div className="cards-page-paginate-con">
        <Paginate totalPages={totalPages} setPage={setPage}></Paginate>
      </div>
    </>
  );
};

export default Cards;
