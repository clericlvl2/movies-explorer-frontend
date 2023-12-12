import MoviesGallery from "./MoviesGallery/MoviesGallery";
import SearchForm from "./SearchForm/SearchForm";

const Movies = ({ isFavoriteView = false }) => {
  return (
    <main>
      <SearchForm />
      <MoviesGallery isFavoriteView={isFavoriteView} />
    </main>
  )
}

export default Movies;