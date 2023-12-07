import { OWNER_ID } from "../../../utils/mocks/movies";
import "./MovieCard.css"

const MovieCard = ({ movie }) => {
  const isOwn = movie.ownerId === OWNER_ID;
  const cardLikeButtonClassName = `movie-card__fav-button${movie.isFavorite ? ' movie-card__fav-button_active' : ''}`;

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
        <button type="button" className={cardLikeButtonClassName}/>
      </div>
    </div>
  )
}

export default MovieCard;