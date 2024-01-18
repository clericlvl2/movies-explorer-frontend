import mainApi from "../../utils/api/MainApi";
import { deleteElementById, handleError } from "../../utils/helpers";
import { useEffect, useMemo, useRef, useState } from "react";
import { getFilteredMovies, getMappedMovieData, isDefaultMovieFilter } from "./helpers";
import { DEFAULT_MOVIES_FILTER } from "./constants";

export const useSavedMovies = (shouldFetch) => {
  const [savedMovies, setSavedMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMoviesFilter, setSavedMoviesFilter] = useState(DEFAULT_MOVIES_FILTER);

  const isFetchedOnce = useRef(false);

  const savedMoviesToView = useMemo(
    () => savedMovies ? getFilteredMovies(savedMovies, savedMoviesFilter) : null,
    [savedMovies, savedMoviesFilter]
  );

  const isSearching = useMemo(() => !isDefaultMovieFilter(savedMoviesFilter), [savedMoviesFilter]);

  useEffect(() => {
    if (shouldFetch && !isFetchedOnce.current) {
      fetchSavedMovies();
    }
  }, [shouldFetch]);

  const fetchSavedMovies = async () => {
    try {
      setIsLoading(true);
      const { data } = await mainApi.getFavouriteMovies();

      if (data) {
        isFetchedOnce.current = true;
        setSavedMovies(data);
        setSavedMoviesFilter(DEFAULT_MOVIES_FILTER)
      }
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const onSearchSavedMovie = (filterValues) => {
    const filter = { ...savedMoviesFilter, ...filterValues };

    setSavedMoviesFilter(filter)
  }

  const saveMovie = async (movieData, onResult = undefined) => {
    const movieToSave = getMappedMovieData(movieData);

    try {
      setIsLoading(true);
      const { data } = await mainApi.saveMovie(movieToSave);

      if (data) {
        setSavedMovies(state => {
          return state ? [...state, data] : [data]
        })
        onResult?.(data);
      }
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const deleteMovie = async (id, onResult = undefined) => {
    const movieToDelete = savedMovies.find(item => item.movieId === id);

    try {
      setIsLoading(true);
      const { message } = await mainApi.deleteMovie(movieToDelete?._id);

      if (message) {
        setSavedMovies(state => {
          const newState = [...state];
          deleteElementById(newState, movieToDelete.movieId, 'movieId');
          return newState.length > 0 ? newState : null;
        })

        onResult?.();
      }
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    savedMovies: savedMoviesToView,
    savedMoviesRaw: savedMovies,
    savedMoviesFilter,
    isSearchingSaved: isSearching,
    isSavedMoviesLoading: isLoading,
    savedMoviesError: error,
    onSearchSavedMovie,
    saveMovie,
    deleteMovie
  }
}