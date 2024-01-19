import { useState } from "react";
import moviesApi from "../../utils/api/MoviesApi";
import { handleError } from "../../utils/helpers";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    let moviesList = null;

    try {
      setIsLoading(true);
      const data = await moviesApi.getMovies();

      if (data) {
        setMovies(data);
        moviesList = data;
      }
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }

    return moviesList;
  }

  return { movies, fetchMovies, isLoading, error, setError };
}