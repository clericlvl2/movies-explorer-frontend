import { cn } from "../../../utils/helpers";
import "./MovieCard.css"

const MovieCard = ({ movie, isFavoriteView }) => {
  const favButtonClassName = cn(
    'movie-card__fav-button',
    movie.isFavorite ? ' movie-card__fav-button_active' : ''
  );

  const buttonClassName = cn(
    'movie-card__button',
    isFavoriteView ? 'movie-card__close-button' : favButtonClassName
  );

  return (
    <div className="movie-card">
      <img
        src={movie.posterURL}
        alt={movie.name}
        className="movie-card__image"
      />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{movie.name}</h2>
        <span className="movie-card__subtitle">{movie.duration}</span>
        <button type="button" className={buttonClassName}/>
      </div>
    </div>
  )
}

export default MovieCard;