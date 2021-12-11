import axios from "./../axios";
import React, { useEffect } from "react";
import requests from "../Requests";
import { Chip } from "@mui/material";

const Genres = ({
  setPage,
  setGenres,
  setSelectedGenres,
  genres,
  selectedGenres,
  type,
}) => {
  const fetchGenres = async () => {
    let fetchURL;
    type === "movie"
      ? (fetchURL = requests.fetchGenresMovie)
      : (fetchURL = requests.fetchGenresTv);
    const movies = await axios.get(fetchURL);
    setGenres(movies.genres);
  };
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);
  return (
    <>
      <div className="genres-con">
        {genres &&
          genres.map((genre) => {
            return (
              <div className="genres-con-genre">
                <Chip
                  lable={genre.name}
                  clickable
                  size="small"
                  key={genre.id}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Genres;
