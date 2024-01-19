import MovieCard from "../MovieCard/MovieCard";
import SectionLayout from "../../Main/SectionLayout/SectionLayout";
import "./MoviesGallery.css"
import { NOTIFICATION_MESSAGE } from "../../../utils/validation";

const MoviesGallery = ({
  movies,
  savedMoviesInfo,
  isSavedMovies,
  isSearching,
  hasMore = false,
  onMoreButtonClick,
  onSaveMovie,
  onDeleteMovie
}) => {
  const hasMovies = Boolean(movies && movies.length);
  const isMoreButtonVisible = hasMovies && hasMore && onMoreButtonClick && !isSavedMovies;

  return (
    <SectionLayout
      className="movies-gallery"
      contentClassName="movies-gallery__content"
      isWideSection
    >
      {!hasMovies && isSearching && (
        <span className="movies-gallery__notification">{NOTIFICATION_MESSAGE.MOVIES_NOT_FOUND}</span>
      )}

      {hasMovies && (
        <ul className="movies-gallery__list">
          {movies.map(movie => {
            const id = movie.id || movie.movieId;
            const isSaved = isSavedMovies || (savedMoviesInfo ?? []).some(item => item.movieId === id);

            return (
              <li key={id}>
                <MovieCard
                  movie={movie}
                  isSaved={isSaved}
                  isSavedMovies={isSavedMovies}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                />
              </li>
            )}
          )}
        </ul>
      )}
      {isMoreButtonVisible && (
        <button
          type="button"
          onClick={onMoreButtonClick}
          className="movies-gallery__more-button"
        >
          Ещё
        </button>
      )}
    </SectionLayout>
  )
}

export default MoviesGallery;