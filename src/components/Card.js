// no image
import NoImage from "./../assets/imgs/no-img.png";
// style
import "../styles/css/card.css";
const Card = ({ movie, isLargeRow }) => {
  const baseImgURL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className={`card ${isLargeRow && "card-large"}`}>
        <div className={`card-front ${isLargeRow && "card-front-large"}`}>
          <img
            src={
              !movie?.poster_path || !movie.backdrop_path
                ? `${NoImage}`
                : `${baseImgURL}${
                    isLargeRow ? movie?.poster_path : movie?.backdrop_path
                  }`
            }
            className={`card-front-img ${isLargeRow && "card-front-img-large"}`}
            key={movie.id}
            alt={movie?.name}
          />
        </div>
        <div className={`card-back ${isLargeRow && "card-back-large"}`}>
          <h3 className="card-back-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h3>
          <p className="card-back-vote">{movie.vote_average}</p>
          <p className="card-back-tag">{movie.tagline}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
