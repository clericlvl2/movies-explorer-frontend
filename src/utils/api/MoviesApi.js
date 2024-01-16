import BaseApi from "./BaseApi";

const MOVIES_API_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi extends BaseApi {
  constructor(options) {
    super(options);

    this._endpoints = {
      getMovies: '/'
    }
  }

  getMovies() {
    return this._makeRequest(this._endpoints.getMovies, {
      headers: this._headers
    });
  }
}

const moviesApi = new MoviesApi({
  baseURL: MOVIES_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export default moviesApi