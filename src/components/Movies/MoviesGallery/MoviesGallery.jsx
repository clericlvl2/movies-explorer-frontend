import MovieCard from "../MovieCard/MovieCard";
import SectionLayout from "../../Main/SectionLayout/SectionLayout";
import { getMovies } from "../../../utils/mocks/movies";
import "./MoviesGallery.css"

const MAX_GALLERY_SIZE = 12;

const MoviesGallery = ({ isFavoriteView }) => {
  const movies = getMovies().slice(0, MAX_GALLERY_SIZE);
  const moviesOnPage = isFavoriteView ? movies.filter(movie => movie.isFavorite) : movies;

  return (
    <SectionLayout
      className="movies-gallery"
      contentClassName="movies-gallery__content"
      isWideSection
    >
      <ul className="movies-gallery__list">
        {moviesOnPage.map(movie => (
          <li>
            <MovieCard
              key={movie._id}
              movie={movie}
              isFavoriteView={isFavoriteView}
            />
          </li>
        ))}
      </ul>
      {!isFavoriteView && <button className="movies-gallery__more-button">Ещё</button>}
    </SectionLayout>
  )
}

export default MoviesGallery;