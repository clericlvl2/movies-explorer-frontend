import { MAX_SHORT_MOVIE_DURATION } from "./constants";

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