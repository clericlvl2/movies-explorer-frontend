import MoviesGallery from "./MoviesGallery/MoviesGallery";
import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css"

const Movies = ({ isFavoriteView = false }) => {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesGallery isFavoriteView={isFavoriteView} />
    </main>
  )
}

export default Movies;