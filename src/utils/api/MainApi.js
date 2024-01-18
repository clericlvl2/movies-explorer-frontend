import BaseApi from "./BaseApi";

const MAIN_API_BASE_URL = 'api.clericlvl2.movies.nomoredomainsmonster.ru';
// const MAIN_API_BASE_URL = 'http://localhost:3001';

const MAIN_API_ENDPOINTS = {
  signUp: '/signup',
  signIn: '/signin',
  signOut: '/signout',
  usersMe: '/users/me',
  movies: '/movies',
};

class FavouriteMoviesApi extends BaseApi {
  constructor(options) {
    super(options);

    this._endpoints = options.endpoints;
  }

  register(data) {
    return this._makeRequest(this._endpoints.signUp, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(data)
    });
  }

  logIn(data) {
    return this._makeRequest(this._endpoints.signIn, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(data)

    });
  }

  logOut() {
    return this._makeRequest(this._endpoints.signOut, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include'

    });
  }

  getUser(data) {
    return this._makeRequest(this._endpoints.usersMe, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(data)

    });
  }

  updateUser(data) {
    return this._makeRequest(this._endpoints.usersMe, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(data)

    });
  }

  saveMovie(data) {
    return this._makeRequest(this._endpoints.movies, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(data)

    });
  }

  deleteMovie(id) {
    return this._makeRequest(this._endpoints.movies + `/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include'

    });
  }

  getFavouriteMovies() {
    return this._makeRequest(this._endpoints.movies, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include'

    });
  }
}

const mainApi = new FavouriteMoviesApi({
  baseURL: MAIN_API_BASE_URL,
  endpoints: MAIN_API_ENDPOINTS,
  headers: { 'Content-Type': 'application/json' }
})

export default mainApi;