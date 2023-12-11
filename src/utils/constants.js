import { getPath } from "./helpers";

export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 30;

export const MIN_PASSWORD_LENGTH = 2;
export const MAX_PASSWORD_LENGTH = 30;

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
  MAIN: getPath(ROUTE.MAIN),
  MOVIES: getPath(ROUTE.MOVIES),
  SAVED_MOVIES: getPath(ROUTE.SAVED_MOVIES),
  PROFILE: getPath(ROUTE.PROFILE),
  SIGN_IN: getPath(ROUTE.SIGN_IN),
  SIGN_UP: getPath(ROUTE.SIGN_UP),
  NOT_FOUND: getPath(ROUTE.NOT_FOUND),
}

export const CURRENT_YEAR = new Date().getFullYear();
