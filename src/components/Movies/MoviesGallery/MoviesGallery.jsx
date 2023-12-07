import MovieCard from "../MovieCard/MovieCard";
import SectionLayout from "../../Main/SectionLayout/SectionLayout";
import { getMovies } from "../../../utils/mocks/movies";
import "./MoviesGallery.css"

const MoviesGallery = () => {
  return (
    <SectionLayout
      className="movies-gallery"
      contentClassName="movies-gallery__content"
      isWideSection
    >
      <ul className="movies-gallery__list">
        {getMovies().map(movie => (
          <li>
            <MovieCard
              key={movie._id}
              movie={movie}
            />
          </li>
        ))}
      </ul>
      <button className="movies-gallery__more-button">Ещё</button>
    </SectionLayout>
  )
}

export default MoviesGallery;