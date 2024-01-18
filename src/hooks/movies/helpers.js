import { DEFAULT_MOVIES_FILTER, MAX_SHORT_MOVIE_DURATION } from "./constants";
import { getMovieImageURL } from "../../utils/helpers";

const hasStringMatch = (value, searchValue) => {
  const processedValue = value.toLowerCase();
  const processedTest = searchValue.trim().toLowerCase();

  return processedValue.includes(processedTest);
}

export const getFilteredMovies = (moviesList, { title, isShort }) => moviesList.filter(movie => {
  const { nameRU, nameEN, duration } = movie;

  const isTitleMatched = hasStringMatch(nameRU, title) || hasStringMatch(nameEN, title);
  const isTypeMatched = isShort ? duration < MAX_SHORT_MOVIE_DURATION : true;

  return isTitleMatched && isTypeMatched
})

export const getMappedMovieData = ({ id, created_at, updated_at, ...movie }) => ({
  ...movie,
  movieId: id,
  image: getMovieImageURL(movie.image.url),
  thumbnail: getMovieImageURL(movie.image.formats.thumbnail.url)
});

export const isDefaultMovieFilter = (moviesFilter) => {
  const { title, isShort } = DEFAULT_MOVIES_FILTER

  return title === moviesFilter.title && isShort === moviesFilter.isShort;
}