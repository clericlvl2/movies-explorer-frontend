import { classnames, getMovieImageURL } from "../../../utils/helpers";
import { getMovieDuration } from "./helpers";
import "./MovieCard.css"

const MovieCard = ({ movie, isSaved, isSavedMovies, onDeleteMovie, onSaveMovie }) => {
  const favButtonClassName = classnames(
    'movie-card__fav-button',
    isSaved && ' movie-card__fav-button_active'
  );

  const buttonClassName = classnames(
    'movie-card__button',
    isSavedMovies ? 'movie-card__close-button' : favButtonClassName
  );

  const handleMovieSave = (evt) => {
    evt.preventDefault();
    onSaveMovie?.(movie);
  };

  const handleMovieDelete = (evt) => {
    evt.preventDefault();
    onDeleteMovie?.(movie.id || movie.movieId);
  };

  const cardButtonClickHandler = (isSavedMovies || isSaved) ? handleMovieDelete : handleMovieSave;
  const imageURL = typeof movie.image === 'string' ? movie.image : getMovieImageURL(movie.image.url)

  return (
    <a
      className="movie-card"
      href={movie.trailerLink}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={imageURL}
        alt={movie.nameRU}
        className="movie-card__image"
      />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{movie.nameRU}</h2>
        <span className="movie-card__subtitle">{getMovieDuration(movie.duration)}</span>
        <button
          type="button"
          className={buttonClassName}
          onClick={cardButtonClickHandler}
        />
      </div>
    </a>
  )
}

export default MovieCard;