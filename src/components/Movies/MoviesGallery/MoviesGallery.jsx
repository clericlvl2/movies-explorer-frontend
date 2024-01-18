import MovieCard from "../MovieCard/MovieCard";
import SectionLayout from "../../Main/SectionLayout/SectionLayout";
import "./MoviesGallery.css"

const MoviesGallery = ({
  movies,
  savedMoviesInfo,
  isSavedMovies,
  hasMore = false,
  onMoreButtonClick,
  onSaveMovie,
  onDeleteMovie
}) => {
  const hasMovies = movies && movies.length;

  return (
    <SectionLayout
      className="movies-gallery"
      contentClassName="movies-gallery__content"
      isWideSection
    >
      {hasMovies ? (
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
      ) : (
        <span className="movies-gallery__notification">По результатам запроса фильмов не найдено.</span>
      )}
      {!isSavedMovies && hasMore && onMoreButtonClick && (
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