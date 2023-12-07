import MoviesGallery from "./MoviesGallery/MoviesGallery";
import SearchForm from "./SearchForm/SearchForm";

const Movies = () => {
  return (
    <main>
      <SearchForm />
      <MoviesGallery />
    </main>
  )
}

export default Movies;