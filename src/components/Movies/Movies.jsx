import MoviesGallery from "./MoviesGallery/MoviesGallery";
import SearchForm from "./SearchForm/SearchForm";
import Spinner from "../Spinner/Spinner";
import { usePagination } from "../../hooks/movies/usePagination";
import { useMovies } from "../../hooks/movies/useMovies";
import { useSavedMovies } from "../../hooks/movies/useSavedMovies";

const Movies = ({ isSavedMovies = false }) => {
  const paginationConfig = usePagination();

  const {
    foundMovies,
    moviesFilter,
    hasMore,
    isSearching,
    isLoading,
    error,
    onSearchMovie,
    onAddMoreMovies
  } = useMovies(paginationConfig);

  const {
    savedMovies,
    savedMoviesRaw,
    savedMoviesFilter,
    savedMoviesError,
    isSearchingSaved,
    isSavedMoviesLoading,
    onSearchSavedMovie,
    saveMovie,
    deleteMovie
  } = useSavedMovies(isSavedMovies);


  if (!isSavedMovies) {
    return (
      <main className="movies">
        <SearchForm
          isLoading={isLoading}
          moviesFilter={moviesFilter}
          onSearchMovie={onSearchMovie}
        />
        {isLoading && <Spinner />}
        {error && <span className="movies__error">{error}</span>}
        {!error && (
          <MoviesGallery
            isSearching={isSearching}
            movies={foundMovies}
            savedMoviesInfo={savedMoviesRaw}
            onMoreButtonClick={onAddMoreMovies}
            hasMore={hasMore}
            onSaveMovie={saveMovie}
            onDeleteMovie={deleteMovie}
          />
        )}
      </main>
    );
  }

  return (
    <main className="movies">
      <SearchForm
        isLoading={isSavedMoviesLoading}
        moviesFilter={savedMoviesFilter}
        onSearchMovie={onSearchSavedMovie}
      />
      {isSavedMoviesLoading && <Spinner />}
      {savedMoviesError && <span className="movies__error">{savedMoviesError}</span>}
      {!savedMoviesError && (
        <MoviesGallery
          isSavedMovies
          isSearching={isSearchingSaved}
          movies={savedMovies}
          onDeleteMovie={deleteMovie}
        />
      )}
    </main>
  )
}

export default Movies;

