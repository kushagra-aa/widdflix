// styles
import "./../styles/css/details.css";
// params from react router
import { useParams } from "react-router-dom";
// use state from react
import { useEffect, useState } from "react";
// requests
import requests from "./../Requests";
// axios
import axios from "./../axios";
// spinner component
import Spinner from "./../components/Spinner";

const Detials = ({ type }) => {
  let { id } = useParams();
  const baseImgURL = "https://image.tmdb.org/t/p/original";
  const restURL = `${id}?api_key=8700aa6e94135e21bf159c572e9d3e81&language=en-US`;
  const credURL = `${id}/credits?api_key=8700aa6e94135e21bf159c572e9d3e81&language=en-US`;
  const [movie, setMovie] = useState(null);
  const [cast, setcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchURL] = useState(
    type === "movie" ? requests.fetchMovieDetails : requests.fetchTvDetails
  );

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${fetchURL}${restURL}`);
      const request2 = await axios.get(`${fetchURL}${credURL}`);
      setcast(request2.data.cast);
      setMovie(request.data);
      setLoading(false);
      return request;
    }
    fetchData();
  }, [movie]);
  return (
    <>
      {loading ? <Spinner className="loader" loading={loading} /> : ""}
      <div className="details">
        <div className="details-banner">
          <img
            className="details-banner-img"
            src={baseImgURL + movie?.backdrop_path}
            alt={movie?.name}
          />
          <div className="details-banner-grad"></div>
        </div>
        <div className="details-con">
          {!movie && "Not found!"}
          <img
            src={baseImgURL + movie?.poster_path}
            alt={movie?.name}
            className="details-con-img"
          />
          {/* movie title */}
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          {/* overview */}
          <p className="details-con-over">{movie?.overview}</p>
          {/* tagline */}
          <h2 className="details-con-tag">{movie?.tagline}</h2>
          {/* cretors */}
          <div className="details-con-by crew-con details-con-incon">
            {movie?.created_by && <h3>crew</h3>}
            {/* for tv only */}
            <div className="details-con-by-con">
              {movie?.created_by &&
                movie?.created_by.map((by) => {
                  if (!by.profile_path) return "";
                  else {
                    return (
                      <div className="details-con-by-con-one">
                        <img
                          src={baseImgURL + by?.profile_path}
                          alt={by.name}
                        />
                        <p>{by.name}</p>
                      </div>
                    );
                  }
                  // profile_path for image
                })}
            </div>
          </div>
          {/* cast*/}
          <div className="details-con-by cast-con details-con-incon">
            <h3>cast</h3>
            <div className="details-con-by-con">
              {cast &&
                cast?.map((by) => {
                  if (by.poster_path) return "";
                  return (
                    <div className="details-con-by-con-one">
                      <img src={baseImgURL + by?.profile_path} alt={by.name} />
                      <p className="details-con-cast-name">{by.name}</p>
                      <p className="details-con-cast-char">{by.character}</p>
                    </div>
                  );
                  // profile_path for image
                })}
            </div>
          </div>
          {/* genres */}
          <div className="details-con-genres details-con-incon">
            <h3>genres</h3>
            {movie?.genres &&
              movie?.genres.map((genre) => {
                return genre.name;
              })}
          </div>
          {/* languages */}
          <div className="details-con-langs details-con-incon">
            <h3>languages</h3>
            {movie?.languages &&
              movie?.languages.map((lang) => {
                return lang;
              })}
          </div>
          {/* popularity */}
          <div className="details-con-pop details-con-incon">
            <h3>popularity</h3>
            {movie?.popularity}
          </div>
          {/* origianl language */}
          <div className="details-con-lang details-con-incon">
            <h3>original language</h3>
            {movie?.original_language}
          </div>
          {/* vote average */}
          <div className="details-con-vavg details-con-incon">
            <h3>average votes</h3>
            {movie?.vote_average}
          </div>
          {/* vote counts */}
          <div className="details-con-vcount details-con-incon">
            <h3>vote counts</h3> {movie?.vote_count}
          </div>
          {/* no of seasons for tv */}
          {movie?.number_of_seasons && (
            <div className="details-con-nosea details-con-incon">
              <h3>no. of seasons</h3>
              {movie?.number_of_seasons}
            </div>
          )}
          {/* no of episodes for tv */}
          {movie?.number_of_episodes && (
            <div className="details-con-noep details-con-incon">
              <h3>no. of episodes</h3>
              {movie?.number_of_episodes}
            </div>
          )}
          {/* Imdb link */}
          {movie?.imdb_id && (
            <a
              target="_blank"
              href={`https://www.imdb.com/title/${movie?.imdb_id}`}
              rel="noreferrer"
              className="details-con-link imdb-link"
            >
              Imdb
            </a>
          )}
          {/* homepage for link  */}
          {movie?.homepage && (
            <a
              target="_blank"
              href={movie.homepage}
              rel="noreferrer"
              className="details-con-link home-link "
            >
              Home
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Detials;
