import { getRoutePath } from "./helpers";

export const ROUTE = {
  MAIN: '',
  MOVIES: 'movies',
  SAVED_MOVIES: 'savedmovies',
  PROFILE: 'profile',
  SIGN_IN: 'signin',
  SIGN_UP: 'signup',
  NOT_FOUND: 'notfound',
}

export const PATH = {
  MAIN: getRoutePath(ROUTE.MAIN),
  MOVIES: getRoutePath(ROUTE.MOVIES),
  SAVED_MOVIES: getRoutePath(ROUTE.SAVED_MOVIES),
  PROFILE: getRoutePath(ROUTE.PROFILE),
  SIGN_IN: getRoutePath(ROUTE.SIGN_IN),
  SIGN_UP: getRoutePath(ROUTE.SIGN_UP),
  NOT_FOUND: getRoutePath(ROUTE.NOT_FOUND),
}

export const LOCAL_STORAGE_KEY = {
  MOVIES_FILTER: 'moviesFilter',
  FOUND_MOVIES: 'foundMovies',
  USER: 'user',
}

export const CURRENT_YEAR = new Date().getFullYear();
