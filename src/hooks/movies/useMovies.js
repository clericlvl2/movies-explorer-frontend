import { useFetchMovies } from "./useFetchMovies";
import { useLocalStorageState } from "../useLocalStorage";
import { LOCAL_STORAGE_KEY } from "../../utils/constants";
import { splitArray } from "../../utils/helpers";
import { useMemo, useState } from "react";
import { getFilteredMovies, isDefaultMovieFilter } from "./helpers";
import { DEFAULT_MOVIES_FILTER } from "./constants";

export const useMovies = (paginationConfig) => {
  const {
    movies,
    fetchMovies,
    isLoading,
    error,
    setError
  } = useFetchMovies();

  const [hasMore, setHasMore] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(false);
  const [moviesFilter, setMoviesFilter] = useLocalStorageState(LOCAL_STORAGE_KEY.MOVIES_FILTER, DEFAULT_MOVIES_FILTER);
  const [foundMovies, setFoundMovies] = useLocalStorageState(LOCAL_STORAGE_KEY.FOUND_MOVIES, null);

  const isSearching = useMemo(() => !isDefaultMovieFilter(moviesFilter), [moviesFilter]);

  const { pageSize, chunkSize } = paginationConfig;

  const getRawMovies = async () => {
    if (movies && movies.length > 0) {
      return movies;
    }

    return fetchMovies()
  }

  const onSearchMovie = async (filterValues) => {
    const filter = { ...moviesFilter, ...filterValues };
    const moviesToFilter = await getRawMovies();

    if (!moviesToFilter) {
      return; // TODO показать ошибку
    }

    const allFilteredMovies = getFilteredMovies(moviesToFilter, filter);
    const hasMoreMovies = allFilteredMovies.length > pageSize;

    const moviesToRender = hasMoreMovies
      ? allFilteredMovies.slice(0, pageSize)
      : allFilteredMovies;

    setHasMore(hasMoreMovies)
    setFoundMovies(moviesToRender);
    setFilteredMovies(allFilteredMovies);
    setMoviesFilter(filter);
  }

  const onAddMoreMovies = () => {
    if (!hasMore) {
      return;
    }

    const moviesCount = foundMovies.length;
    const restFilteredMovies = splitArray(filteredMovies, moviesCount)[1];
    const hasMoreMovies = restFilteredMovies.length > chunkSize;

    const moviesToAdd = hasMoreMovies
      ? restFilteredMovies.slice(0, chunkSize)
      : restFilteredMovies;

    setHasMore(hasMoreMovies)
    setFoundMovies(state => ([...state, ...moviesToAdd]));
  }

  return { foundMovies, moviesFilter, hasMore, isSearching, isLoading, error, onSearchMovie, onAddMoreMovies };
}