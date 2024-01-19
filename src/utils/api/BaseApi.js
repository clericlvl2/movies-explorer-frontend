class BaseApi {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _handleResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject({ status: response.status, message: response.statusText });
  }

  async _makeRequest(endpoint, options = {}) {
    const response = await fetch(this._baseURL + endpoint, options)
    return this._handleResponse(response)
  }
}

export default BaseApi